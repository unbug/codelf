import Navigator from './Navigator';

const FormHandler = new function () {
  function getForm(method) {
    let _form = document.createElement('form');
    _form.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
    _form.setAttribute("method", method || 'POST');
    document.body.appendChild(_form);
    return _form;
  }

  this.asyncSubmit = function (action, data) {
    this.submit(action, data, true);
  }

  this.submit = function (action, data, async) {
    let target,
      frame,
      form = getForm(),
      inputs = [],
      itpl = '<input type="text" name="{N}" value="{V}" />';

    if (async) {
      target = '__formhandler_' + new Date().getTime();
      frame = Navigator.getFrame(null, target);
      form.setAttribute('target', target);
      setTimeout(function () {
        Navigator.removeFrame(frame);
      }, 120000);
    }

    form.setAttribute('action', action);
    data = data || {};
    for (let key in data) {
      inputs.push(itpl.replace('{N}', key).replace('{V}', data[key]));
    }
    form.innerHTML = inputs.join('');
    action && setTimeout(function () {
      form.submit();
    }, 100);
  }
};
export default FormHandler;
