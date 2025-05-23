import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Service worker plugin for Vite
export default function serviceWorkerPlugin() {
  return {
    name: 'vite-plugin-service-worker',
    apply: 'build',
    closeBundle: {
      sequential: true,
      order: 'post',
      handler: async () => {
        try {
          // Copy the service worker from src to dist
          const swSrc = path.resolve(__dirname, 'src/sw.js');
          const swDest = path.resolve(__dirname, 'dist/sw.js');
          fs.copyFileSync(swSrc, swDest);
          
          // Get list of files in the dist directory
          const distFiles = getAllFiles(path.resolve(__dirname, 'dist')).map(file => {
            return file.replace(path.resolve(__dirname, 'dist') + path.sep, '').replaceAll('\\', '/');
          });
          
          // Filter assets to cache
          const assets = distFiles.filter(file => {
            // Add your file type filters here
            return /\.(js|css|html|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/.test(file);
          }).map(file => {
            // Convert to proper URL format
            return `'/${file}'`;
          });
          
          // Read the service worker file
          let swContent = fs.readFileSync(swDest, 'utf-8');
          
          // Replace placeholders in service worker file
          const BUILD_VERSION = new Date().getTime();
          swContent = swContent
            .replace('_BUILD_VERSION_', BUILD_VERSION)
            .replace('[_INCLUDED_]', JSON.stringify([
              'searchcode.com/api',
              'api.github.com',
              'rest.smapi.io',
              'localhost'
            ]))
            .replace('[_CACHE_ONLY_]', JSON.stringify([]))
            .replace('[_NETWORK_ONLY_]', JSON.stringify([
              'searchcode.com/api'
            ]))
            .replace('[_EXCLUDED_]', JSON.stringify([
              'livereload',
              'localhost:35729'
            ]))
            .replace('[_FILES_]', `[${assets.join(',')}]`);
          
          // Write updated content back to the service worker file
          fs.writeFileSync(swDest, swContent);
          console.log('Service worker generated successfully!');
        } catch (error) {
          console.error('Error generating service worker:', error);
        }
      }
    }
  };
}

// Helper function to get all files in a directory recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });
  
  return arrayOfFiles;
}