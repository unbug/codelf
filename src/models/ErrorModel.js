import BaseModel from './BaseModel';

class ErrorModel extends BaseModel {
  constructor() {
    super();
    this._data = {
      visible: false,
      message: '',
      error: null
    };
  }

  get message() {
    return this._data.message;
  }

  get error() {
    return this._data.error;
  }

  set error(error) {
    this.update({
      visible: true,
      message: error.message,
      error: error
    });
  }
}

export default new ErrorModel();
