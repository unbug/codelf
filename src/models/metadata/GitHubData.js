import Store from '../Store';
import ErrorModel from '../ErrorModel';

const JS_ALGO_EXCLUDE_FILES = [
  '__test__'
];

class GitHubData {
  constructor() {
    this._repoStore = new Store(Infinity);
  }

  async requestJavascriptAlgorithmsRepoLatestCommit() {
    const cacheId = 'requestJavascriptAlgorithmsRepoLatestCommit';
    const cache = this._repoStore.get(cacheId);
    if (cache) {
      return cache;
    }
    try {
      const url = 'https://api.github.com/repos/trekhleb/javascript-algorithms/commits?';
      let res = await fetch(url + (new Date()).toISOString().substr(0, 7));
      res = await res.json();
      if (res) {
        const data = res[0];
        this._repoStore.save(cacheId, data);
        return data;
      } else {
        throw new Error(`Request Javascript Algorithms Repo latest Commit failed`);
      }
    } catch (err) {
      ErrorModel.error = err;
    }
  }

  async requestJavascriptAlgorithmsRepoTree() {
    const cacheId = 'requestJavascriptAlgorithmsRepoTree';
    const cache = this._repoStore.get(cacheId);
    if (cache) {
      return cache;
    }
    try {
      const latestCommit = await this.requestJavascriptAlgorithmsRepoLatestCommit();
      const url = `${latestCommit.commit.tree.url}?recursive=1`;
      let res = await fetch(url);
      res = await res.json();
      if (res) {
        const data = this._formatJavascriptAlgorithmsRepoTree(res.tree);
        this._repoStore.save(cacheId, data);
        return data;
      } else {
        throw new Error(`Request Javascript Algorithms Repo Tree failed`);
      }
    } catch (err) {
      ErrorModel.error = err;
    }
  }

  async requestJavascriptAlgorithmsRepoFile(url) {
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
        throw new Error(`Request Javascript Algorithms Repo File failed`);
      }
    } catch (err) {
      ErrorModel.error = err;
    }
  }

  _isExcludeFile(path, list) {
    return list.find(p => {
      return path.includes(p);
    });
  }

  _formatJavascriptAlgorithmsRepoTree(tree) {
    return Array.prototype.filter.call(tree, n => {
      const path = n.path;
      n.link = `https://github.com/trekhleb/javascript-algorithms/tree/master/${path}`;
      return (path.includes('src/algorithms/') || path.includes('src/data-structures/'))
        && path.endsWith('.js')
        && !this._isExcludeFile(path, JS_ALGO_EXCLUDE_FILES);
    }).map(n => {
      n.link = `https://github.com/trekhleb/javascript-algorithms/tree/master/${n.path}`;
      return n;
    });
  }
}

export default new GitHubData();
