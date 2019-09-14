const ua = navigator.userAgent;
const android = ua.match(/(Android);?[\s/]+([\d.]+)?/);
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
const iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
let os = {};

if (android) os.android = true, os.version = android[2];
if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.');
if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.');
if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;

const thisPage = window.location.href.replace(window.location.hash, '');
const thisPath = thisPage.substring(0, thisPage.lastIndexOf('/') + 1);

const randomColor = () => {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomList = (list, len, verify, ratio) => {
  let rs = [], _list = list.slice(0);
  len = len || _list.length;
  ratio = ratio ? ratio : 0;

  function rd(_array) {
    _array.sort(function () {
      return (0.5 - Math.random());
    });
  }

  while (ratio) {
    rd(_list);
    ratio--;
  }
  if (_list.length <= len) {
    rs = _list;
  } else {
    while (rs.length < len) {
      let index = Math.floor(Math.random() * _list.length),
        item = _list[index];
      if ((verify && verify.call(this, item, _list)) || !verify) {
        rs.push(item);
        _list.splice(index, 1);
      }
    }
  }
  return rs;
}

const InlineWebWorker = {
  ready: window.Blob && window.Worker && window.URL,
  create: function create(selector) {
    return new Worker(window.URL.createObjectURL(new Blob([document.querySelector(selector).textContent])));
  }
}

const uuid = len => {
  let res = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    let num = Math.random() * 16 | 0, v = c === 'x' ? num : (num & 0x3 | 0x8);
    return v.toString(16);
  });
  return len ? res.substr(0, len) : res;
}

const randomLabelColor = () => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'teal',
    'blue',
    'violet',
    'purple',
    'pink',
    'brown',
  ];
  return randomList(colors, 1)[0];
};

import SparkMD5 from 'spark-md5';
const MD5 = SparkMD5.hash;

export { os, thisPage, thisPath, randomList, randomColor, InlineWebWorker, uuid, randomLabelColor, MD5 }
