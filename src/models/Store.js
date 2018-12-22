/**
 * Store data in memory cache.
 */
export default class Store {
  /**
   * Create a memory cache.
   *
   * @param expire expire time in seconds for each record, Infinity value will never expire. default (60 * 60 * 1000)s.
   */
  constructor(expire) {
    this._expire = expire || (60 * 60 * 1000);
    this._cache = {};
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
      this._cache[id] = {
        id: id,
        data: data,
        created: Date.now()
      };
    }
  }

  /**
   * Clear all cached records.
   */
  clear() {
    this._cache = {};
  }
}
