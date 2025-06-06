import * as Tools from '../utils/Tools';

const APP_NANE = 'codelf';
const PAGE_URL = Tools.thisPage;
const PAGE_PATH = Tools.thisPath;

// Search engines configuration
const SEARCH_ENGINES = {
  SEARCHCODE: 'searchcode',
  DEEPSEEK: 'deepseek'
};

// Search engine display names and metadata
const SEARCH_ENGINE_CONFIG = {
  [SEARCH_ENGINES.SEARCHCODE]: {
    name: 'SearchCode',
    description: 'Search real-world code from GitHub, BitBucket, GitLab',
    icon: 'search',
    color: 'blue'
  },
  [SEARCH_ENGINES.DEEPSEEK]: {
    name: 'DeepSeek AI',
    description: 'AI-powered code suggestions and variable naming',
    icon: 'brain',
    color: 'purple'
  }
};

export { APP_NANE, PAGE_PATH, PAGE_URL, SEARCH_ENGINES, SEARCH_ENGINE_CONFIG }
