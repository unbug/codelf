import LocalStorage, { SessionStorage } from '../utils/LocalStorage';
import * as Tools from '../utils/Tools';
/**
 * Store data in memory cache.
 */
export default class Store {
  /**
   * Create a memory cache.
   *
   * @param expire expire time in seconds for each record, Infinity value will never expire. default (60 * 60 * 1000)s.
   */
  constructor(expire, options) {
    this._expire = expire || (60 * 60 * 1000);
    this._cache = {};
    this._options = options || {};
    if (this._options.persistence === 'local') {
      this._local = LocalStorage;
    }
    if (this._options.persistence === 'session') {
      this._local = SessionStorage;
    }
    if (this._local && this._options.persistenceKey) {
      this._cache = this._local.getItem(this._options.persistenceKey) || {};
    }
  }

  /**
   * Returns cached record data with id.
   * Returns null if the record is expired.
   *
   * @param id unique id.
   * @return {*} cache data.
   */
  get(id) {
    if (id !== undefined || id != null) {
      id = Tools.MD5(id.toString());
      let record = this._cache[id];
      if (record) {
        // delete record when it is expired
        if (Date.now() - record.created > this._expire) {
          delete this._cache[id];
          return null;
        }
        return record.data;
      }
      return null;
    }
    return null;
  }

  /**
   * Save a record data to memory.
   * Saving different record with same id will always overwrite the old record.
   *
   * @param id unique id.
   * @param data cache record data.
   */
  save(id, data) {
    if (id !== undefined || id != null) {
      id = Tools.MD5(id.toString());
      this._cache[id] = {
        id: id,
        data: data,
        created: Date.now()
      };
      this._persist();
    }
  }

  /**
   * Clear all cached records.
   */
  clear() {
    this._cache = {};
    this._persist();
  }

  _persist() {
    if (this._local && this._options.persistenceKey) {
      this._local.setItem(this._options.persistenceKey, this._cache)
    }
  }
}
