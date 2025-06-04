import * as Tools from '../utils/Tools';

const APP_NANE = 'codelf';
const PAGE_URL = Tools.thisPage;
const PAGE_PATH = Tools.thisPath;

// Search source types
const SEARCH_SOURCES = {
  SEARCHCODE: 'searchcode',
  DEEPSEEK: 'deepseek'
};

// DeepSeek API configuration
const DEEPSEEK_API_BASE = 'https://api.deepseek.com/v1';
const DEEPSEEK_API_KEY_STORAGE = `${APP_NANE}_deepseek_api_key`;
const SEARCH_SOURCE_STORAGE = `${APP_NANE}_search_source`;

export { 
  APP_NANE, 
  PAGE_PATH, 
  PAGE_URL,
  SEARCH_SOURCES,
  DEEPSEEK_API_BASE,
  DEEPSEEK_API_KEY_STORAGE,
  SEARCH_SOURCE_STORAGE
}
