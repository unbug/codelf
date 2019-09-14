import BaseModel from './BaseModel';
import LocalStorage from '../utils/LocalStorage';
import * as Tools from '../utils/Tools';
import * as Configs from '../constants/Configs';
import { searchParams } from '../utils/Param';
import Navigator from '../utils/Navigator';

const DEVICE_ID_KEY = `${Configs.APP_NANE}_device_id`;

class AppModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      debug: searchParams()['debug'],
      appName: Configs.APP_NANE,
      deviceId: LocalStorage.getItem(DEVICE_ID_KEY),
      isGithub: /github\.io/g.test(window.location.href)
    };
    if (!this._data.deviceId) {
      this._data.deviceId = Tools.uuid();
      LocalStorage.setItem(DEVICE_ID_KEY, this._data.deviceId)
    }
  }

  analytics(param) {
    (this.isGithub || this.debug) && setTimeout(function () {
      Navigator.getFrame(null).setAttribute('src', '//www.mihtool.com/analytics.html?codelf' + (param ? ('&' + param) : ''));
    }, param ? 500 : 1000);
  }

  genPersistenceKey(key) {
    if (key !== undefined && key !== null) {
      return `${this._data.appName}_${key}`;
    }
    return null;
  }

  get debug() {
    return this._data.debug;
  }

  get isGithub() {
    return this._data.isGithub;
  }

  get appName() {
    return this._data.appName;
  }

  get deviceId() {
    return this._data.deviceId;
  }
}

export default new AppModel();
