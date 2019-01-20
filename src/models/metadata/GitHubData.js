import Store from '../Store';
import ErrorModel from '../ErrorModel';

const CLANG = {
  name: 'TheAlgorithms/C',
  gitHub: 'https://github.com/TheAlgorithms/C/tree/master',
  postfix: '.c',
  included: [
    'conversions',
    'data_structures',
    'hash',
    'misc',
    'searching',
    'sorting'
  ],
  excluded: [
  ]
};

const JS = {
  name: 'trekhleb/javascript-algorithms',
  gitHub: 'https://github.com/trekhleb/javascript-algorithms/tree/master',
  postfix: '.js',
  included: [
    'src/algorithms/',
    'src/data-structures/'
  ],
  excluded: [
    '__test__'
  ]
};

const PY = {
  name: 'TheAlgorithms/Python',
  gitHub: 'https://github.com/TheAlgorithms/Python/tree/master',
  postfix: '.py',
  included: [
    'Maths',
    'binary_tree',
    'data_structures',
    'dynamic_programming',
    'graphs',
    'hashes',
    'maths',
    'other',
    'searches',
    'strings',
    'sorts'
  ],
  excluded: [
    '__init__.py'
  ]
};

const JAVA = {
  name: 'TheAlgorithms/Java',
  gitHub: 'https://github.com/TheAlgorithms/Java/tree/master',
  postfix: '.java',
  included: [
    'Conversions',
    'DataStructures',
    'Misc',
    'Others',
    'Searches',
    'Sorts'
  ],
  excluded: [
  ]
};

const SWIFT = {
  name: 'raywenderlich/swift-algorithm-club',
  gitHub: 'https://github.com/raywenderlich/swift-algorithm-club/tree/master',
  postfix: '.swift',
  included: [
  ],
  excluded: [
    '/Tests/',
    '.playground'
  ]
}

class GitHubData {
  constructor() {
    this._repoStore = new Store(Infinity);
  }

  async requestRepoLatestCommit(repo) {
    const cacheId = 'requestRepoLatestCommit' + repo;
    const cache = this._repoStore.get(cacheId);
    if (cache) {
      return cache;
    }
    try {
      const url = `https://api.github.com/repos/${repo}/commits?`;
      let res = await fetch(url + (new Date()).toISOString().substr(0, 7));
      res = await res.json();
      if (res) {
        const data = res[0];
        this._repoStore.save(cacheId, data);
        return data;
      } else {
        throw new Error(`Request Repo latest Commit failed`);
      }
    } catch (err) {
      ErrorModel.error = err;
    }
  }

  async requestRepoTree(repo) {
    const cacheId = 'requestRepoTree' + repo.name;
    const cache = this._repoStore.get(cacheId);
    if (cache) {
      return cache;
    }
    try {
      const latestCommit = await this.requestRepoLatestCommit(repo.name);
      const url = `${latestCommit.commit.tree.url}?recursive=1`;
      let res = await fetch(url);
      res = await res.json();
      if (res) {
        const data = Array.prototype.filter.call(res.tree, n => {
          const path = n.path;
          n.link = `${repo.gitHub}/${path}`;
          return (this._isIncludedFile(path, repo.included) || !repo.included.length)
            && path.endsWith(repo.postfix)
            && !this._isIncludedFile(path, repo.excluded);
        });
        this._repoStore.save(cacheId, data);
        return data;
      } else {
        throw new Error(`Request Repo Tree failed`);
      }
    } catch (err) {
      ErrorModel.error = err;
    }
  }

  async requestJavascriptAlgorithmsRepoTree() {
    return this.requestRepoTree(JS);
  }

  async requestPythonAlgorithmsRepoTree() {
    return this.requestRepoTree(PY);
  }

  async requestJavaAlgorithmsRepoTree() {
    return this.requestRepoTree(JAVA);
  }

  async requestCLangAlgorithmsRepoTree() {
    return this.requestRepoTree(CLANG);
  }

  async requestSwiftAlgorithmsRepoTree() {
    return this.requestRepoTree(SWIFT);
  }

  async requestRepoFile(url) {
    const cache = this._repoStore.get(url);
    if (cache) {
      return cache;
    }
    try {
      let res = await fetch(url);
      res = await res.json();
      if (res) {
        res.content = window.atob(res.content);
        this._repoStore.save(url, res);
        return res;
      } else {
        throw new Error(`Request Repo File failed`);
      }
    } catch (err) {
      ErrorModel.error = err;
    }
  }

  _isIncludedFile(path, list) {
    return list.find(p => {
      return path.includes(p);
    });
  }
}

export default new GitHubData();
