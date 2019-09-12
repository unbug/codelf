import EventEmitter from 'events';

class Mutation {
  constructor(data) {
    this._data = data;
    this._serialize();
    this.has = this.has.bind(this);
  }

  _serialize() {
    Object.keys(this._data).forEach(key => {
      this[key] = true;
    });
  }

  get() {
    return this._data;
  }

  has(fields) {
    if (/string/i.test(typeof fields)) {
      fields = fields.split(',');
    }
    if (Array.isArray(fields)) {
      return fields.every((key) => {
        key = key.trim();
        return this[key];
      });
    }
    return false;
  }
}

class BaseModel extends EventEmitter {
  constructor() {
    super();
    this.on('error', () => { });
    this.setMaxListeners(99);
    this._updateEventName = 'update';
    this._data = {};
  }

  set(data) {
    let prevData = Object.assign({}, this._data);
    this._data = data || {};
    this.notify(prevData, Object.assign({}, prevData, data, { isReset: true }));
  }

  get() {
    return this._data;
  }

  create(data) {
    let instance = Object.create(Object.getPrototypeOf(this));
    instance._data = data;
    return instance;
  }

  notify(prevData, mutationData) {
    let data = Object.assign({}, this._data);
    this.emit(this._updateEventName, data, prevData || data, new Mutation(mutationData));
  }

  update(data) {
    let prevData = Object.assign({}, this._data);
    Object.assign(this._data, data);
    this.notify(prevData, data);
  }

  onUpdated(listener) {
    this.on(this._updateEventName, listener);
  }

  offUpdated(listener) {
    this.removeListener(this._updateEventName, listener);
  }
}

export default BaseModel;
