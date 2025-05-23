# CODELF

Codelf is a search tool that helps developers solve the naming things problem.

> There are only two hard things in Computer Science: cache invalidation and naming things.
> -- Phil Karlton
> 
> ![twohardtings](https://user-images.githubusercontent.com/799578/50461922-8b9ecc80-09bc-11e9-85cc-3714aaa0e836.jpg)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.x or higher)
- npm (v8.x or higher) or yarn

## Development

To start the development server:

```bash
# Install dependencies
npm install 
# or 
yarn

# Start the development server
npm run dev
# or
yarn dev
```

This will start the development server using Vite at http://localhost:3000.

## Build for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

The build output will be in the `dist` directory.

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Features

- Search over GitHub, Bitbucket, GitLab to find real-world usage variable names
- Language specific search
- Support for multiple languages
- Automatic translation for Chinese searches
- Browser extensions for VS Code, Atom, Sublime Text, and more

## Browser Extensions

- [CODELF for VS Code](https://github.com/unbug/codelf#codelf-for-vs-code)
- [CODELF for Atom](https://atom.io/packages/codelf)
- [CODELF for Sublime Text](https://github.com/unbug/codelf#codelf-for-sublime-text)
- [CODELF for WebStorm](https://github.com/unbug/codelf/issues/24)
- [CODELF for Alfred](https://github.com/unbug/codelf/issues/63)

## Credits

- Created by [unbug](https://github.com/unbug)

## License

MIT
