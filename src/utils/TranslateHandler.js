
export function formatSuggestionStr(str) {
  if (!str) { return []; }
  let tmp = [];
  return str.replace(/[`~!@#$^&*()=|{}':;',\[\].<>\/?~！@#￥……&*（）——|\\{\\}【】‘；：”“’。，、？]/g, ' ')
    .replace(/\s+/ig, '+').split('+')
    .filter((key, idx, inputArray) => {
      const checked = key.length > 1
        && inputArray.indexOf(key) == idx
        && !/[^\x00-\xff]/gi.test(key)
        && !tmp.find(ikey => {
          return new RegExp('^' + key + '$', 'ig').test(ikey);
        });
      if (checked) {
        tmp.push(key);
      }
      return checked;
    });
}

export function formatTranslationArr(arr) {
  if (!arr) { return null; }
  return arr.join(' ')
    .replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '')
    .split(' ').filter(function (key, idx, inputArray) {
      return inputArray.indexOf(key) == idx && !/^(a|an|the)$/ig.test(key);
    }).join(' ');
}
