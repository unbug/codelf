class BasicStorage {
  constructor() {
    this._store = {};
  }

  getItem(key) {
    return this._store[key];
  }

  setItem(key, value) {
    return this._store[key] = value;
  }
}

class Storage {
  constructor(store) {
    this._store = store;
    if (!store) {
      return new BasicStorage();
    }
  }

  getItem(key, defaultValue) {
    let rawValue = this._store.getItem(key);
    if (rawValue == null) {
      return defaultValue;
    }
    try {
      return JSON.parse(rawValue);
    } catch (e) {
      return null;
    }
  }

  setItem(key, value) {
    try {
      this._store.setItem(key, JSON.stringify(value));
    } catch (e) {
      // todo
    }
  }
}

const LocalStorage = new Storage(window.localStorage);
const SessionStorage = new Storage(window.sessionStorage);

export {SessionStorage};
export default LocalStorage;
