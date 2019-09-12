
function fn(str, reg) {
  if (str) {
    let data = {};
    str.replace(reg, function ($0, $1, $2, $3) {
      data[$1] = $3;
    });
    return data;
  }
}

export function searchParams(search) {
  search = search || window.location.search;
  return fn(search, new RegExp("([^?=&]+)(=([^&]*))?", "g")) || {};
}

export function hashParams(hash) {
  hash = hash || window.location.hash;
  return fn(hash, new RegExp("([^#=&]+)(=([^&]*))?", "g")) || {};
}

export function params(search, hash) {
  return {
    search: searchParams(search),
    hash: hashParams(hash)
  }
}
