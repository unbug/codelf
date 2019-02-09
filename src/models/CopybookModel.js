import BaseModel from './BaseModel';
import * as Tools from '../utils/Tools';
import GitHubData from './metadata/GitHubData';
import LocalStorage from '../utils/LocalStorage';
import AppModel from './AppModel';

const REPO_FILE_URL_KEY = AppModel.genPersistenceKey('agor_repo_file_url_key');

class CopybookModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      visible: false,
      fileList: [],
      selectedFile: null,
      fileContent: null,
      cachedFileUrl: LocalStorage.getItem(REPO_FILE_URL_KEY),
    };
    // only cache 24 hours
    if (this._data.cachedFileUrl && (new Date() - new Date(this._data.cachedFileUrl.timer)) >= 86400000) {
      this._data.cachedFileUrl = null;
    }
    setTimeout(() => this.requestRepoTrees(), 100);
  }

  async requestRepoTrees() {
    const clData = await GitHubData.requestCLangAlgorithmsRepoTree();
    if (!this._data.cachedFileUrl && clData) {
      this._updateFileList(clData);
      this.requestRepoFile(this._genCachedFile(this.fileList));
    }
    const jsData = await GitHubData.requestJavascriptAlgorithmsRepoTree();
    this._updateFileList(jsData);
    const pyData = await GitHubData.requestPythonAlgorithmsRepoTree();
    this._updateFileList(pyData);
    const jvData = await GitHubData.requestJavaAlgorithmsRepoTree();
    this._updateFileList(jvData);
    const swData = await GitHubData.requestSwiftAlgorithmsRepoTree();
    this._updateFileList(swData);
    if (this.fileList.length) {
      this.requestRepoFile(this._genCachedFile(this.fileList));
    }
  }

  async requestRepoFile(file) {
    if (!file) { return; }
    const data = await GitHubData.requestRepoFile(file.url);
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

  _updateFileList(data) {
    data && this.update({
      fileList: [...this.fileList, ...data]
    });
  }

  _genCachedFile(data) {
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

  get visible() {
    return this._data.visible;
  }
}

export default new CopybookModel();
