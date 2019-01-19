import BaseModel from './BaseModel';
import * as Tools from '../utils/Tools';
import GitHubData from './metadata/GitHubData';
import LocalStorage from '../utils/LocalStorage';
import AppModel from './AppModel';

const REPO_FILE_URL_KEY = AppModel.genPersistenceKey('js_agor_repo_file_url_key');

class CopybookModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      fileList: [],
      selectedFile: null,
      fileContent: null,
      cachedFileUrl: LocalStorage.getItem(REPO_FILE_URL_KEY),
    };
    // only cache 24 hours
    if (this._data.cachedFileUrl && (new Date() - new Date(this._data.cachedFileUrl.timer)) >= 86400000) {
      this._data.cachedFileUrl = null;
    }
    setTimeout(() => this.requestJavascriptAlgorithmsRepoTree(), 100);
  }

  async requestJavascriptAlgorithmsRepoTree() {
    const data = await GitHubData.requestJavascriptAlgorithmsRepoTree();
    if (data) {
      this.update({
        fileList: data
      });
      this.requestJavascriptAlgorithmsRepoFile(this.genCachedFile(data));
    }
  }

  async requestJavascriptAlgorithmsRepoFile(file) {
    const data = await GitHubData.requestJavascriptAlgorithmsRepoFile(file.url);
    if (data) {
      const cachedFileUrl = {
        timer: (new Date()).toISOString().substr(0, 10),
        url: file.url
      };
      this.update({
        selectedFile: file,
        fileContent: data,
        cachedFileUrl: cachedFileUrl
      });
      LocalStorage.setItem(REPO_FILE_URL_KEY, cachedFileUrl);
    }
  }

  genCachedFile(data) {
    let file;
    if (this._data.cachedFileUrl) {
      file = data.find(f => f.url === this._data.cachedFileUrl.url);
    }
    return file || Tools.randomList(data, 1)[0];
  }

  get fileList() {
    return this._data.fileList;
  }

  get selectedFile() {
    return this._data.selectedFile;
  }

  get fileContent() {
    return this._data.fileContent;
  }
}

export default new CopybookModel();
