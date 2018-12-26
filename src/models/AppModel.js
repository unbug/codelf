import BaseModel from './BaseModel';
import LocalStorage from '../utils/LocalStorage';
import * as Tools from '../utils/Tools';
import {searchParams} from '../utils/Param';
import Navigator from '../utils/Navigator';

const APP_NANE = 'codelf';
const DEVICE_ID_KEY = `${APP_NANE}_device_id`;

class AppModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      debug: searchParams()['debug'],
      appName: APP_NANE,
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
    }, param ? 500 : 3000);
  }

  get debug() {
    return this._data.debug;
  }

  get isGithub() {
    return this._data.isGithub;
  }
}

export default new AppModel();
