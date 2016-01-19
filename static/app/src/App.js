$(function () {
  //utils
  var ua = navigator.userAgent,
    android = ua.match(/(Android);?[\s\/]+([\d.]+)?/),
    ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/),
    iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    os = {};

  if (android) os.android = true, os.version = android[2];
  if (iphone && !ipod) os.ios = os.iphone = true, os.version = iphone[2].replace(/_/g, '.')
  if (ipad) os.ios = os.ipad = true, os.version = ipad[2].replace(/_/g, '.')
  if (ipod) os.ios = os.ipod = true, os.version = ipod[3] ? ipod[3].replace(/_/g, '.') : null;

  var localStorage = new function () {
    var lcst = window.localStorage;

    function getLocalValue(id) {
      if (lcst) {
        return lcst[id];
      } else {
        return null;
      }
    }

    function setLocalValue(id, val) {
      if (lcst) {
        if (typeof id === 'object') {
          for (var key in id) {
            try {
              id[key] && lcst.setItem(key, id[key]);
            } catch (err) {
            }
          }
        } else {
          try {
            lcst.setItem(id, val);
          } catch (err) {
          }
        }
      }
      return this;
    }

    function removeLocalValue(id) {
      if (lcst) {
        if (typeof id === 'object') {
          for (var key in id) {
            try {
              lcst.removeItem(id[key]);
            } catch (err) {
            }
          }
        } else {
          try {
            lcst.removeItem(id);
          } catch (err) {
          }
        }
      }
      return this;
    }

    this.set = setLocalValue;
    this.get = getLocalValue;
    this.del = removeLocalValue;
  };

  var HashHandler = (function () {
    var lc = window.location;

    function getByURL(url) {
      var hash;
      url && decodeURIComponent(url).replace(new RegExp('#(.*)', 'g'), function ($1, $2) {
        hash = $2;
      });
      return hash;
    }

    function get() {
      return getByURL(lc.hash);
    }

    function set(hash) {
      lc.hash = hash;
    }

    return {
      get: get,
      set: set,
      getByURL: getByURL
    }
  })();
  var Navigator = (function () {
    var frame,
      androidReg = /Android/gi,
      isAndroid = androidReg.test(navigator.platform) || androidReg.test(navigator.userAgent);
    frame = null;
    function appendFrame(frame) {
      frame && document.body.appendChild(frame);
    }

    function removeFrame(frame) {
      frame && frame.parentNode.removeChild(frame);
    }

    function getFrame(src, name) {
      var _frame = document.createElement("iframe");
      _frame.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
      _frame.setAttribute("height", "0px");
      _frame.setAttribute("width", "0px");
      _frame.setAttribute("frameborder", "0");
      name && _frame.setAttribute("name", name);
      if (src) {
        _frame.setAttribute("src", src);
      } else {
        appendFrame(_frame);
      }
      return _frame;
    }

    function protocol(command, single, noframe) {
      var _frame, timer;
      if (noframe) {
        window.location.href = command;
        return;
      }
      if (single) {
        if (isAndroid) {
          _frame = getFrame();
          _frame.setAttribute("src", command);
        } else {
          _frame = getFrame(command);
          appendFrame(_frame);
        }
        timer = setTimeout(function () {
          _frame && removeFrame(_frame);
        }, 30000);
        _frame.onload = _frame.onreadystatechange = function () {
          timer && clearTimeout(timer);
          _frame && removeFrame(_frame);
        }
      } else {
        frame = frame || getFrame();
        frame.setAttribute("src", command);
      }
    }

    return {
      protocol: protocol,
      getFrame: getFrame,
      appendFrame: appendFrame,
      removeFrame: removeFrame
    }
  })();

  var FormHandler = new function () {
    function getForm(method) {
      var _form = document.createElement('form');
      _form.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
      _form.setAttribute("method", method || 'POST');
      return _form;
    }

    this.asyncSubmit = function (action, data) {
      this.submit(action, data, true);
    }

    this.submit = function (action, data, async) {
      var target,
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
      for (var key in data) {
        inputs.push(itpl.replace('{N}', key).replace('{V}', data[key]));
      }
      form.innerHTML = inputs.join('');
      action && setTimeout(function () {
        form.submit();
      }, 100);
    }
  };

  function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randomList(list, len, verify, ratio) {
    var rs = [], _list = list.slice(0);
    len = len || _list.length;
    ratio = ratio ? ratio : 0;
    function rd(_array) {
      _array = _array.sort(function () {
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
        var index = Math.floor(Math.random() * _list.length),
          item = _list[index];
        if (( verify && verify.call(this, item, _list) ) || !verify) {
          rs.push(item);
          _list.splice(index, 1);
        }
      }
    }
    return rs;
  }

  function isInArray(arr, val) {
    if ($.inArray(val, arr) != -1) {
      return true;
    }
    for (var key in arr) {
      if (typeof val === 'function' && val.call(this, arr[key])) {
        return true;
      }
    }
    return false;
  }

  //end utils
  //model
  //http://githut.info/
  var topProgramLan = [{"id": "22,106", "language": "JavaScript, CoffeeScript"}, {
    "id": "133,135",
    "language": "CSS"
  }, {"id": "3,39", "language": "HTML"}, {"id": 137, "language": "Swift"}, {
    "id": 35,
    "language": "Objective-C"
  }, {"id": 23, "language": "Java"}, {"id": 19, "language": "Python"}, {"id": 24, "language": "PHP"}, {
    "id": 32,
    "language": "Ruby"
  }, {"id": 28, "language": "C"}, {"id": 16, "language": "C++"}, {"id": 6, "language": "C#"}, {
    "id": 55,
    "language": "Go"
  }, {"id": 51, "language": "Perl"}, {"id": "104,109", "language": "Clojure, ClojureScript"}, {
    "id": 40,
    "language": "Haskell"
  }, {"id": 54, "language": "Lua"}, {"id": 20, "language": "Matlab"}, {"id": 144, "language": "R"}, {
    "id": 47,
    "language": "Scala"
  }, {"id": "69,78,146", "language": "Shell"}, {"id": 29, "language": "Lisp"}, {"id": 42, "language": "ActionScript"}];
  var searchcodeModel = new function () {
    var persistLangsName = 'codelf_langs_selected';
    var langs = localStorage.get(persistLangsName), langQuery;
    var page = 0;
    var lastVal;
    var cacheSourceCodes = {};

    genLangQuery(langs);

    this.resetPage = function () {
      page = 0;
    }

    this.setLang = function (val) {
      langs = val || null;
      genLangQuery(val);
      this.resetPage();
      localStorage[langs ? 'set' : 'del'](persistLangsName, langs);
    }

    this.getLang = function () {
      return langs;
    }

    function genLangQuery(val) {
      if (!!val) {
        var arr1 = val.replace(/\s+/g, ',').split(','),
          arr2 = [];
        arr1.forEach(function (key) {
          arr2.push('lan=' + key);
        });
        langQuery = arr2.join('&');
      } else {
        langQuery = null;
      }
    }

    //search code by query
    this.request = function (val, callback) {
      if (val != lastVal) {
        this.resetPage();
      }
      lastVal = val;
      lastVal && $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://searchcode.com/api/codesearch_I/' + (langQuery ? ('?' + langQuery) : ''),
        data: {
          q: lastVal,
          p: page,
          per_page: 42
        },
        success: function (data) {
          callback && callback(data, page);
          page++;
        }
      })
    };

    //get source code by id
    this.requestSourceCode = function (id, callback) {
      if (cacheSourceCodes[id]) {
        callback && callback(cacheSourceCodes[id]);
        return;
      }
      id && $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://searchcode.com/api/result/' + id + '/',
        success: function (data) {
          cacheSourceCodes[id] = data;
          callback && callback(data);
        }
      });
    }
  };

  var youdaoTranslateModel = new function () {
    var lastVal;
    var translateRequestCallback;
    this.request = function (val, callback) {
      lastVal = val;
      translateRequestCallback = callback;
      lastVal && $.ajax({
        type: 'GET',
        url: 'http://fanyi.youdao.com/openapi.do?keyfrom=Codelf&key=2023743559&type=data&doctype=jsonp&version=1.1',
        dataType: 'jsonp',
        jsonp: false,
        jsonpCallback: false,
        contentType: "application/json",
        data: {
          q: lastVal,
          callback: 'afterYoudaoTranslateRequest'
        }
      });
    }
    window.afterYoudaoTranslateRequest = function (data) {
      if (data) {
        translateRequestCallback && translateRequestCallback(data);
      }
    }
  };
  var DDMSModel = new function () {
    var persistKeyWordsName = 'codelf_ddms_keywords';
    var persistKeyWordsTimerName = persistKeyWordsName + '_timer';
    var cacheKeyWords = (localStorage.get(persistKeyWordsName) || '').split(',');
    var ot = new Date(localStorage.get(persistKeyWordsTimerName) || 0);
    var nt = new Date().getTime();

    if ((nt - ot) > 1000 * 60 * 60 * 24) {
      cacheKeyWords = [];
      localStorage.set(persistKeyWordsTimerName, nt);
    }
    function saveKeyWords(val) {
      if (!isInArray(cacheKeyWords, val)) {
        cacheKeyWords.push(val);
        localStorage.set(persistKeyWordsName, cacheKeyWords.join(',').replace(/^,*/g, '').replace(/,*&/g, ''));
      }
    }

    this.postKeyWords = function (val) {
      if (val && !isInArray(cacheKeyWords, val)) {
        FormHandler.asyncSubmit('http://ddmsapi.mihtool.com/apis/v1/formdata/', {
          formid: '567ff8b0e454ee154de533dd',
          keywrod: val
        });
        saveKeyWords(val);
      }
    }
    this.postBookmarks = function (val) {
      if (val) {
        FormHandler.asyncSubmit('http://ddmsapi.mihtool.com/apis/v1/formdata/', {
          formid: '569c3740b6691c4e16fc9999',
          account: val
        });
      }
    }
  };

  var bookmarkModel = new function () {
    var BM = this;
    var DB;
    var schemaBuilder = lf.schema.create('Codelf', 1);
    var Tables;
    var DBEventType = {
      C: 'CREATE',
      U: 'UPDATED',
      D: 'DELETE'
    };
    var win = $(window);
    var curUserName;
    var curUser;

    schemaBuilder
      .createTable('User')
      .addColumn('id', lf.Type.INTEGER)
      .addColumn('name', lf.Type.STRING)
      .addColumn('create', lf.Type.DATE_TIME)
      .addColumn('lastSync', lf.Type.DATE_TIME)
      .addPrimaryKey(['id'], true);

    schemaBuilder
      .createTable('RepoGroup')
      .addColumn('id', lf.Type.INTEGER)
      .addColumn('name', lf.Type.STRING)
      .addColumn('repoIds', lf.Type.STRING)
      .addColumn('order', lf.Type.INTEGER)
      .addColumn('create', lf.Type.DATE_TIME)
      .addPrimaryKey(['id'], true);

    schemaBuilder
      .createTable('Repo')
      .addColumn('id', lf.Type.INTEGER)
      .addColumn('userId', lf.Type.INTEGER)
      .addColumn('originRepoId', lf.Type.STRING)
      .addColumn('data', lf.Type.STRING)
      .addColumn('create', lf.Type.DATE_TIME)
      .addPrimaryKey(['id'], true);

    schemaBuilder.connect({
      storeType: os.ios?lf.schema.DataStoreType.WEB_SQL: null
    }).then(function (db) {
      DB = db;
      Tables = {
        User: DB.getSchema().table('User'),
        RepoGroup: DB.getSchema().table('RepoGroup'),
        Repo: DB.getSchema().table('Repo')
      };
      win.trigger('DB:ready');
    });

    this.UserTable = new function () {
      this.add = function (name, callback) {
        if (!name) {
          return;
        }
        var row = Tables.User.createRow({
          'name': name,
          'create': new Date(),
          'lastSync': new Date()
        });
        DB.select().from(Tables.User).where(Tables.User.name.eq(name))
          .exec().then(function (rows) {
          !rows.length && DB.insertOrReplace().into(Tables.User).values([row])
            .exec().then(function (res) {
              curUser = res[0];
              callback && callback();
              win.trigger('DB:Table.User.onchange', {type: DBEventType.C});
            });
        });
      }

      this.updateSync = function (name) {
        DB.update(Tables.User).set(Tables.User.lastSync, new Date()).where(Tables.User.name.eq(name))
          .exec().then(function (res) {
          win.trigger('DB:Table.User.onchange', {type: DBEventType.U});
        });
      }

      this.delete = function (id, callback) {
        DB.delete()
          .from(Tables.Repo)
          .where(Tables.Repo.userId.eq(id))
          .exec().then(function () {
          DB.delete()
            .from(Tables.User)
            .where(Tables.User.id.eq(id))
            .exec().then(function (res) {
            callback && callback(res);
            win.trigger('DB:Table.User.onchange', {type: DBEventType.D});
          });
        });
      }

      this.getAll = function (callback) {
        DB.select()
          .from(Tables.User)
          .orderBy(Tables.User.create, lf.Order.DESC)
          .exec().then(function (rows) {
          callback && callback(rows);
        });
      }
    };

    this.RepoGroupTable = new function () {
      this.add = function (name) {
        if (!name) {
          return;
        }
        var row = Tables.RepoGroup.createRow({
          'name': name,
          'repoIds': '',
          'order': 0,
          'create': new Date()
        });
        DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.name.eq(name))
          .exec().then(function (rows) {
          !rows.length && DB.insertOrReplace().into(Tables.RepoGroup).values([row])
            .exec().then(function (res) {
              win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.C});
            });
        });
      }

      this.addRopoId = function (id, repoId) {
        DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.id.eq(id))
          .exec().then(function (rows) {
          if (rows && rows[0]) {
            var ids = rows[0].repoIds.length ? rows[0].repoIds.split(',') : [];
            if (ids.indexOf(repoId) == -1) {
              ids.push(repoId);
            }
            ids = ids.length ? ids.join(',') : '';
            DB.update(Tables.RepoGroup).set(Tables.RepoGroup.repoIds, ids).where(Tables.RepoGroup.id.eq(id))
              .exec();
          }
        });
      }

      this.removeRopoId = function (id, repoId) {
        DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.id.eq(id))
          .exec().then(function (rows) {
          if (rows && rows[0]) {
            var ids = rows[0].repoIds.length ? rows[0].repoIds.split(',') : [],
              idx = ids.indexOf(repoId);

            if (idx != -1) {
              ids.splice(idx, 1);
            }
            ids = ids.length ? ids.join(',') : '';
            DB.update(Tables.RepoGroup).set(Tables.RepoGroup.repoIds, ids).where(Tables.RepoGroup.id.eq(id))
              .exec();
          }
        });
      }
      this.updateName = function (id, name) {
        DB.update(Tables.RepoGroup).set(Tables.RepoGroup.name, name).where(Tables.RepoGroup.id.eq(id))
          .exec().then(function () {
          win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.U, fields: 'name'});
        });
      }

      this.delete = function (id, callback) {
        DB.delete()
          .from(Tables.RepoGroup)
          .where(Tables.RepoGroup.id.eq(id))
          .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.D});
        });
      }

      this.getAll = function (callback) {
        DB.select()
          .from(Tables.RepoGroup)
          .orderBy(Tables.RepoGroup.create, lf.Order.DESC)
          .exec().then(function (rows) {
          callback && callback(rows);
        });
      }
    };

    this.RepoTable = new function () {
      var _Table = this;
      this.addListByCurUser = function (repos, callback) {
        function fn() {
          _Table.deleteAllByUserId(curUser.id, function () {
            var rows = [];
            repos.forEach(function (key) {
              rows.push(
                Tables.Repo.createRow({
                  'userId': curUser.id,
                  'originRepoId': key.id,
                  'data': key,
                  'create': new Date()
                })
              );
            });
            DB.insertOrReplace().into(Tables.Repo).values(rows)
              .exec().then(function () {
              callback && callback();
              win.trigger('DB:Table.Repo.onchange', {type: DBEventType.C});
            });
          });
        }

        if (curUser && curUser.name == curUserName) {
          fn();
        } else {
          DB.select().from(Tables.User).where(Tables.User.name.eq(curUserName))
            .exec().then(function (rows) {
            curUser = rows[0];
            fn.call(this);
          });
        }
      }

      this.delete = function (id, callback) {
        DB.delete()
          .from(Tables.Repo)
          .where(Tables.Repo.id.eq(id))
          .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.Repo.onchange', {type: DBEventType.D});
        });
      }

      this.deleteAllByUserId = function (id, callback) {
        DB.delete()
          .from(Tables.Repo)
          .where(Tables.Repo.userId.eq(id))
          .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.Repo.onchange', {type: DBEventType.D});
        });
      }

      this.getAll = function (callback) {
        DB.select()
          .from(Tables.Repo)
          .exec().then(function (rows) {
          callback && callback(rows);
        });
      }
    };

    this.setCurUserName = function (name) {
      curUserName = name;
    };
    this.getCurUserName = function () {
      return curUserName;
    };
    var githubRepos = new function () {
      var _this = this;
      var page = 1;
      var mainData = [];

      function concat(data) {
        if (toString.call(data) == '[object Array]') {
          mainData = mainData.concat(data);
        }
      }
      this.resetPage = function(){
        page = 1;
        mainData = [];
      }
      this.request = function (callback) {
        $.ajax({
          type: 'GET',
          dataType: 'json',
          url: 'https://api.github.com/users/' + curUserName + '/repos?sort=updated&per_page=100&page=' + page,
          success: function (data) {
            if (data && data.length) {
              concat(data);
              page++;
              _this.request(callback);
            } else {
              callback && callback(mainData);
            }
          }
        });
      }
    };

    var githubStars = new function () {
      var _this = this;
      var page = 1;
      var mainData = [];

      function concat(data) {
        if (toString.call(data) == '[object Array]') {
          mainData = mainData.concat(data);
        }
      }
      this.resetPage = function(){
        page = 1;
        mainData = [];
      }
      this.request = function (callback) {
        $.ajax({
          type: 'GET',
          dataType: 'json',
          url: 'https://api.github.com/users/' + curUserName + '/starred?sort=updated&per_page=100&page=' + page,
          success: function (data) {
            if (data && data.length) {
              concat(data);
              page++;
              _this.request(callback);
            } else {
              callback && callback(mainData);
            }
          }
        });
      }
    };

    this.getAll = function (callback) {
      var users, repos, groups;
      //select user
      BM.UserTable.getAll(function (ures) {
        users = ures;
        //select groups
        BM.RepoGroupTable.getAll(function (gres) {
          groups = gres;
          //select repos
          BM.RepoTable.getAll(function (rres) {
            repos = rres;
            callback && callback.call(this, {
              users: users || [],
              repos: repos || [],
              groups: groups || []
            });
          });
        });
      });
    }
    this.syncGithub = function (callback) {
      var data = [];
      //reauest repos
      githubRepos.resetPage();
      githubRepos.request(function (res) {
        data = data.concat(res);
        //request star repos
        githubRepos.resetPage();
        githubStars.request(function (res) {
          //add repos to DB
          BM.RepoTable.addListByCurUser(data.concat(res), function () {
            callback && callback();
          });
        });
      });

      this.UserTable.updateSync(curUserName);
    }

    this.arrayToObj = function (data,idName) {
      var d = {};
      idName = idName || 'id';
      data.forEach(function (key) {
        d[key[idName]] = key;
      });
      return d;
    }

  };

  var beanHelpersModel = new function () {
    this.getRandomLabelType = function () {
      var types = ['default', 'primary', 'success', 'info', 'warning', 'warning', 'danger'];
      return randomList(types, 1)[0];
    }

    this.getKeyWordReg = function (key) {
      return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + key + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
    }
  };
  //end model

  //view and render
  var els = {
    win: $(window),
    body: $('body'),

    title: $('.main-title>header h1'),
    searchForm: $('.search-form'),
    searchInput: $('.search-form input'),
    searchBtn: $('.search-form button.search'),
    searchDropdownBtn: $('.search-form button.dropdown-toggle'),
    searchDropdownMenu: $('.search-form .dropdown-menu'),
    searchDropdownMenuTpl: $('.search-form .dropdown-menu script').html(),

    searchRelate: $('.search-relate'),
    searchRelateBd: $('.search-relate .bd'),
    searchRelateTpl: $('.search-relate script').html(),

    searchResult: $('.search-result'),
    searchResultTpl: $('.search-result script').html(),
    searchResultHd: $('.search-result .hd'),
    searchResultBd: $('.search-result .bd'),

    variableMenuTpl: $('script[template="variableMenu"]').html(),

    sourceCodeModal: $('.sourcecode-modal'),
    sourceCodeModalDropdown: $('.sourcecode-modal .dropdown-menu'),
    sourceCodeModalDropdownTpl: $('.sourcecode-modal .dropdown-menu script').html(),
    sourceCodeContent: $('.sourcecode-modal .modal-body pre code'),
    sourceCodeContentHd: $('.sourcecode-modal .modal-body .hd'),

    bookmarkBtn: $('.bookmark-btn'),
    bookmarkModal: $('.bookmark-modal'),
    bookmarkModalContent: $('.bookmark-modal .modal-body>.bd'),
    bookmarkModalContentHd: $('.bookmark-modal .modal-body>.hd'),
    bookmarkModalGroupTpl: $('.bookmark-modal script[data-template="repoGroup"]').html(),
    bookmarkModalGroupItemTpl: $('.bookmark-modal script[data-template="groupItem"]').html(),
    bookmarkModalReopTpl: $('.bookmark-modal script[data-template="repoItem"]').html(),

    bookmarkUserModal: $('.bookmark-user-modal'),
    bookmarkUserModalUserList: $('.bookmark-user-modal .user-list'),
    bookmarkUserModalUserTpl: $('.bookmark-user-modal .user-list script').html(),

    bookmarkGroupModal: $('.bookmark-group-modal'),
    bookmarkGroupModalInput: $('.bookmark-group-modal input'),

    githubCorner: $('.github-corner svg'),
    donate: $('.donate'),
    donateTitle: $('.donate .title'),

    isGithub: /github/g.test(location.href),
    lastVal: ''
  };

  function bindEvent() {
    window.addEventListener('hashchange', onLocationHashChanged, false);
    els.searchDropdownMenu.on('click', '.all', onResetLang);
    els.searchDropdownMenu.on('change', 'input', onSelectLang);
    els.searchInput.on('keyup', function () {
      renderSearchBtn();
    });
    els.searchBtn.on('click', function () {
      onSearch();
    });
    els.searchInput.keypress(function (e) {
      if (e.which == 13) {
        onSearch();
        return false;
      }
    });
    els.searchResultBd.on('click mouseenter', '.variable-wrap', function (e) {
      e.preventDefault();
      e.stopPropagation();
      renderVariableMenu.call(this);
      return false;
    });
    els.body.on('click', '.variable-btns__code', showSourceCode);
    els.body.on('click', beforeRemoveVariableMenus);
    els.sourceCodeModal.on('hidden.bs.modal', renderSourceCode);

    //bookmark
    els.win.on('DB:ready', renderBookmarkGroup);
    els.win.on('DB:Table.RepoGroup.onchange', renderBookmarkGroup);
    els.bookmarkBtn.on('click', showBookmark);
    els.bookmarkModal.on('click', '.add-account', showBookmarkUserModal);
    els.bookmarkModal.on('click', '.add-group', function(){
      showBookmarkGroupModal();
    });
    els.bookmarkModalContentHd.on('click', '.submit', function(){
      beforeAddBookmarkUser(els.bookmarkModalContentHd);
    });
    els.bookmarkUserModal.on('click', '.submit', function(){
      beforeAddBookmarkUser();
    });
    els.bookmarkModalContentHd.keypress(function (e) {
      if (e.which == 13) {
        beforeAddBookmarkUser(els.bookmarkModalContentHd);
        return false;
      }
    });
    els.bookmarkUserModal.keypress(function (e) {
      if (e.which == 13) {
        beforeAddBookmarkUser();
        return false;
      }
    });
    els.bookmarkGroupModal.on('click', '.submit', beforeEditBookmarkGroup);
    els.bookmarkGroupModal.keypress(function (e) {
      if (e.which == 13) {
        beforeEditBookmarkGroup();
        return false;
      }
    });
    els.bookmarkModalContent.on('click', '.repo-group-item>.hd .ctrl .del', beforeDelBookmarkGroup);
    els.bookmarkModalContent.on('click', '.repo-group-item>.hd .ctrl .edit', function(){
      showBookmarkGroupModal(this.dataset.id,this.dataset.name);
    });
    els.bookmarkModalContent.on('click', '.dropdown-item', beforeAddRepoToGroup);
    els.bookmarkModalContent.on('keyup','.repo-group-item>.hd .search input',renderBookmarkSearchRepos);
    els.bookmarkModalContent.on('click','.repo-group-item>.hd .search submit',renderBookmarkSearchRepos);
    els.bookmarkUserModalUserList.on('click', '.sync', function () {
      beforeSyncUser(this.dataset.name);
    });
    els.bookmarkUserModalUserList.on('click', '.del', beforeDelUser);
    els.bookmarkGroupModal.on('hidden.bs.modal', showBookmark);
    els.bookmarkUserModal.on('hidden.bs.modal', showBookmark);
  }

  function init() {
    if (os.ios || os.android) {
      els.isMobile = true;
      els.body.addClass('mobile');
      FastClick.attach(document.body);
    }
    bindEvent();
    renderTitle();
    renderBookmarkTip();
    renderLangMunu();
    onLocationHashChanged();
    renderAnalytics();
  }

  function showSourceCode() {
    renderSourceCode();
    searchcodeModel.requestSourceCode(this.dataset.id, renderSourceCode);
    this.dataset.val && renderRelatedProperty(this.dataset.val);
    els.sourceCodeModal.modal('show');
  }

  function showBookmark() {
    renderBookmarkTip(true);
    els.bookmarkModal.modal('show');
    renderAnalytics('bk');
  }

  function hideBookmark() {
    els.bookmarkModal.modal('hide');
  }

  function showBookmarkUserModal() {
    hideBookmark();
    els.bookmarkUserModal.modal('show');
  }

  function hideBookmarkUserModal() {
    els.bookmarkUserModal.modal('hide');
  }

  function showBookmarkGroupModal(id,name) {
    hideBookmark();
    els.bookmarkGroupModal.modal('show');
    if(id){
      els.bookmarkGroupModalInput.attr('data-id',id).val(name||'');
    }else{
      els.bookmarkGroupModalInput.removeAttr('data-id').val('');
    }
  }

  function hideBookmarkGroupModal() {
    els.bookmarkGroupModal.modal('hide');
  }

  function onLocationHashChanged(e) {
    e && e.preventDefault();
    var hash = HashHandler.get();
    hash && onSearch(decodeURIComponent(hash).replace(/(\?.*)/, ''));
  }

  function onSelectLang() {
    var checked = els.searchDropdownMenu.find('input:checked'), lang = [];
    checked.each(function () {
      lang.push(this.value);
    });
    searchcodeModel.setLang(lang.join(' '));
    renderSearchBtn('Search');
  }

  function onResetLang() {
    els.searchDropdownMenu.find('input').removeAttr('checked');
    searchcodeModel.setLang();
    renderSearchBtn('Search');
  }

  function onSearch(val) {
    els.searchInput.blur();
    beforeRemoveVariableMenus();
    if (val && val == els.lastInputVal) {
      return;
    }
    val = val || els.searchInput.val().trim();
    els.searchInput.val(val);
    els.valHistory = els.valHistory || '';
    if (val.length) {
      var isNext = val == els.lastInputVal;
      els.lastInputVal = val;
      if (!isNext) {
        HashHandler.set(encodeURIComponent(val));
        var tmpval = [], tmpch = [];

        els.lastInputVal.replace(/\s+/ig, '+').split('+').forEach(function (key) {
          if (/[^\x00-\xff]/gi.test(key)) {
            tmpch.push(key);
            els.isZHSearchKeyWords = true;
          } else {
            tmpval.push(key);
          }
        });
        els.lastVal = tmpval.join(' ');
        if (tmpch.length) {
          youdaoTranslateModel.request(tmpch.join(' '), function (tdata) {
            //basic translate
            if (tdata.basic && tdata.basic.explains) {
              els.valHistory = tdata.basic.explains.join(' ');
            }
            //web translate
            if (tdata.web && tdata.web) {
              tdata.web.forEach(function (key) {
                els.valHistory += ' ' + key.value.join(' ');
              });
            }
            if (tdata && tdata.translation) {
              els.lastVal = els.lastVal + ' '
                + tdata.translation.join(' ')
                  .replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g, '')
                  .split(' ').filter(function (key, idx, inputArray) {
                    return inputArray.indexOf(key) == idx && !/^(a|an|the)$/ig.test(key);
                  }).join(' ');
              beforeDoSearch();
            } else {
              beforeDoSearch();
            }
          });
        } else {
          beforeDoSearch();
        }
      } else {
        doSearch();
      }
    }
    renderTitle(true);
  }

  function beforeDoSearch() {
    els.lastVal = els.lastVal.trim();
    els.lastVal = els.lastVal.split(' ').filter(function (key, idx, inputArray) {
      return inputArray.indexOf(key) == idx;
    }).join(' ');
    saveKeyWordRegs();
    renderHistory();
    doSearch();
  }

  function saveKeyWordRegs() {
    els.valRegs = [];
    els.lastVal.replace(/\s+/ig, '+').split('+').forEach(function (key) {
      key.length && els.valRegs.push(beanHelpersModel.getKeyWordReg(key));
    });
  }

  function doSearch() {
    if (els.lastVal && els.lastVal.length) {
      searchcodeModel.request(els.lastVal, renderSearchResult);
      renderSearchResultHeader('loading');
      renderSearchBtn();
    } else {
      renderSearchResultHeader('error');
      renderSearchBtn('Search');
    }

    els.isGithub && DDMSModel.postKeyWords(els.lastInputVal);
    renderAnalytics('q=' + els.lastInputVal);
  }

  function renderTitle(black) {
    els.title[black ? 'removeClass' : 'addClass']('animated');
  }

  function formatPropertyName(name) {
    name = name.toLowerCase();
    return '__codelf__' + name;
  }

  function storeRelatedProperty(name, res) {
    name = formatPropertyName(name);
    els.storeRelatedProperties = els.storeRelatedProperties || {};
    if (!/\//g.test(name) /*exclude links*/ && name.length < 64 /*too long*/) {
      var prop = els.storeRelatedProperties[name] = els.storeRelatedProperties[name] || {
          ids: [],
          repos: [],
          languages: []
        };
      if (!isInArray(prop['ids'], res.id)) {
        prop['ids'].push(res.id);
        prop['repos'].push(res.repo);
        prop['languages'].push(res.language);
      }
    }
  }

  function getRelatedProperty(name) {
    name = formatPropertyName(name);
    return els.storeRelatedProperties[name];
  }

  function getBookmarkRopeHtm(repo, allGroupHtm) {
    return els.bookmarkModalReopTpl
      .replace(/\{id\}/g, repo.id)
      .replace(/\{originRepoId\}/g, repo.originRepoId)
      .replace(/\{full_name\}/g, repo.data.full_name)
      .replace(/\{_full_name\}/g, repo.data.full_name.toLowerCase())
      .replace(/\{description\}/g, repo.data.description||'')
      .replace(/\{html_url\}/g, repo.data.html_url)
      .replace(/\{groupItems\}/g, allGroupHtm)
  }

  function renderLangMunu() {
    var htm = [], storeLang = searchcodeModel.getLang();
    storeLang = storeLang ? storeLang.split(' ') : [];
    topProgramLan.forEach(function (key) {
      htm.push(els.searchDropdownMenuTpl
        .replace('{id}', key.id)
        .replace('{language}', key.language)
        .replace('{checked}', $.inArray(key.id, storeLang) != -1 ? 'checked' : ''));
    });
    els.searchDropdownMenu.append(htm.join(''));
  }

  function renderSearchResult(data) {
    var vals = [], labels = [], lineStr;
    data.results.forEach(function (rkey) {
      //filter codes
      lineStr = [];
      for (var lkey in rkey.lines) {
        var lstr = rkey.lines[lkey];
        //no base64
        if (!(/;base64,/g.test(lstr) && lstr.length > 256)) {
          lineStr.push(lstr);
        }
      }
      lineStr = lineStr.join('').replace(/\r\n/g, ' ');
      //match variables
      els.valRegs.forEach(function (key) {
        $.each(lineStr.match(key) || [], function (i, el) {
          //remove "-" and "/" from the starer and the ender
          el = el.replace(/^(\-|\/)*/, '').replace(/(\-|\/)*$/, '');
          storeRelatedProperty(el, rkey);
          if (
            !/\//g.test(el) /*exclude links*/
            && $.inArray(el, vals) === -1
            && $.inArray(el.toLowerCase(), vals) === -1
            && $.inArray(el.toUpperCase(), vals) === -1
            && el.length < 64 /*too long*/
          ) {
            vals.push(el);
            //render variable labels
            labels.push(els.searchResultTpl
              .replace('{label_type}', beanHelpersModel.getRandomLabelType())
              .replace(/\{val\}/g, el)
              .replace('{id}', rkey.id)
              .replace('{repo}', rkey.repo)
            );
          }
        });
      });
    });

    if (labels.length) {
      var blockquote = els.searchResultBd.find('.blockquote');
      if (blockquote[0]) {
        els.searchResultBd.find('.blockquote').remove();
      } else {
        labels.push('<hr/>');
      }
      els.searchResultBd.prepend(labels.join(''));
      renderSearchResultHeader();
      renderTooltips();
    } else {
      renderSearchResultHeader('error');
    }
    renderTitle();
    renderDonate();
    renderBaiduShare();
  }

  function renderSearchBtn(str) {
    var val = els.searchInput.val().trim();
    els.searchBtn.html(str ? str : (((val.length && val == els.lastInputVal) ? 'More' : 'Search')));
  }

  function renderSearchResultHeader(cls) {
    els.searchResultHd.removeClass('loading error').addClass(cls || '');
  }

  function renderVariableMenu() {
    beforeRemoveVariableMenus();
    $(this).popover({
      trigger: 'manual',
      html: true,
      placement: 'top',
      offset: '-10 0',
      title: function () {
        return false;
      },
      content: function () {
        els.sourceCodeModal.find('.modal-header a.cur-repo').attr('href', this.dataset.repo);
        var prop = getRelatedProperty(this.dataset.val);
        return els.variableMenuTpl
          .replace('{id}', this.dataset.id)
          .replace('{count}', prop ? prop['ids'].length : 1)
          .replace(/\{val\}/g, this.dataset.val)
          .replace('{repo}', this.dataset.repo);
      },
      template: '<div class="popover popover--variable" role="tooltip">' +
      '<div class="popover-arrow"></div><div class="popover-content"></div>' +
      '</div>'
    });
    $(this).popover('show');
    els.variableClipboard = new ZeroClipboard($('.variable-btns__copy')[0]);
  }

  function renderTooltips() {
    els.showNextTipTimer = els.showNextTipTimer || 0;
    var now = new Date().getTime();
    if (now - els.showNextTipTimer > 1000 * 1800) {
      els.showNextTipTimer = now;
      els.searchBtn.tooltip('show');
      setTimeout(function () {
        els.searchBtn.tooltip('dispose');
      }, 3000);
    }
  }
  function renderBookmarkTip(dispose) {
    if(dispose){
      els.bookmarkBtn.tooltip('dispose');
    }else{
      setTimeout(function(){
        els.bookmarkBtn.tooltip('show');
        setTimeout(function(){
          els.bookmarkBtn.tooltip('hide');
        },2500);
      },500);
    }
  }

  function renderHistory() {
    var his = [els.lastVal, els.valHistory], labels = [], tmp = [];
    els.valHistory = his.join(' ')
      .replace(/[`~!@#$^&*()=|{}':;',\[\].<>\/?~！@#￥……&*（）——|\\{\\}【】‘；：”“’。，、？]/g, ' ')
      .replace(/\s+/ig, '+').split('+')
      .filter(function (key, idx, inputArray) {
        var checked = key.length > 1
          && inputArray.indexOf(key) == idx
          && !/[^\x00-\xff]/gi.test(key)
          && !isInArray(tmp, function (ikey) {
            return new RegExp('^' + key + '$', 'ig').test(ikey)
          });
        if (checked) {
          tmp.push(key);
          labels.push(els.searchRelateTpl.replace(/\{val\}/g, key));
        }
        return checked;
      })
      .join(' ');
    if (labels.length < 1) {
      ['foo', 'bar', '2016'].forEach(function (key) {
        labels.push(els.searchRelateTpl.replace(/\{val\}/g, key));
      });
    }
    els.searchRelateBd.html('<span class="label label-default">Suggestions :</span>' + labels.join(''));
  }

  function renderSourceCode(data) {
    els.sourceCodeContentHd.show();
    els.sourceCodeContent.removeClass('prettyprinted').text('');
    if (data && data.code) {
      els.sourceCodeContentHd.hide();
      els.sourceCodeContent.text(data.code);
      setTimeout(function () {
        PR.prettyPrint();
      }, 100);
      renderAnalytics('vc&q=' + els.lastInputVal);
    }
  }

  function renderRelatedProperty(name) {
    var htm = [],
      prop = getRelatedProperty(name);
    if (prop) {
      var ids = prop['ids'],
        repos = prop['repos'],
        langs = prop['languages'],
        i = 0, len = ids.length;
      for (i; i < len; i++) {
        htm.push(
          els.sourceCodeModalDropdownTpl.replace(/\{id\}/g, ids[i])
            .replace(/\{repo\}/g, repos[i])
            .replace(/\{lang\}/g, langs[i])
            .replace(/\{label_type\}/g, beanHelpersModel.getRandomLabelType())
        );
      }
    }
    els.sourceCodeModalDropdown.html(htm.join(''));
    els.sourceCodeModal.find('.match-count').html(htm.length);
  }

  function renderBookmarkHeader(cls){
    els.bookmarkModalContentHd.removeClass('empty loading').addClass(cls||'');
  }

  function renderBookmarkGroup(data) {
    if (!data || !data.repos || !data.users || !data.groups) {
      bookmarkModel.getAll(renderBookmarkGroup);
      return;
    }
    var repos = bookmarkModel.arrayToObj(data.repos,'originRepoId'),
      htm = [],
      allRhtm = [],
      allGhtm = [];

    data.groups.forEach(function (key) {
      allGhtm.push(els.bookmarkModalGroupItemTpl
        .replace(/\{id\}/g, key.id)
        .replace(/\{name\}/g, key.name)
      );
    });
    allGhtm = allGhtm.join('');
    data.groups.forEach(function (key) {
      var rids = key.repoIds.split(','),
        rhtm = [];
      rids.length && rids.forEach(function (key) {
        var rd = repos[key];
        rd && rhtm.push(getBookmarkRopeHtm(rd, allGhtm));
      });
      htm.push(els.bookmarkModalGroupTpl
        .replace(/\{id\}/g, key.id)
        .replace(/\{name\}/g, key.name)
        .replace(/\{items\}/g, rhtm.join(''))
        .replace(/\{itemCount\}/g, rhtm.length)
      );
    });
    if(data.repos.length){
      //add all group
      data.repos.forEach(function (key) {
        allRhtm.push(getBookmarkRopeHtm(key, allGhtm));
      });
      htm.push(els.bookmarkModalGroupTpl
        .replace(/\{id\}/g, 0)
        .replace(/\{name\}/g, 'All')
        .replace(/\{items\}/g, allRhtm.join(''))
        .replace(/\{itemCount\}/g, data.repos.length)
      );
    }

    if(data.repos.length || data.groups.length){
      els.bookmarkModalContent.html(htm.join(''));
      renderBookmarkHeader();
    }else{
      els.bookmarkModalContent.html('');
      renderBookmarkHeader('empty');
    }
    setTimeout(function () {
      var gel = els.bookmarkModalContent.find('.repo-group-item[data-id="' + els.lastEditBookmarkRepoGroupId + '"] .collapse');
      if (!gel[0]) {
        gel = els.bookmarkModalContent.find('.repo-group-item:last-child .collapse');
      }
      gel.addClass('in');
    }, 100);

    renderBookmarkUsers(data.users);
  }

  function renderBookmarkSearchRepos(){
    var gEl = els.bookmarkModalContent.find('.repo-group-item[data-id="0"]'),
      inputEl = gEl.find('.hd .search input'),
      countEl = gEl.find('.hd .count'),
      val = inputEl.val().trim().toLowerCase(),
      repoEls = gEl.find('.repo-list .repo-item'),
      matchRepoEls = gEl.find('.repo-list .repo-item[data-name*="'+val+'"]'),
      resultRepoEls = val.length?matchRepoEls:repoEls;

    repoEls.attr('hidden','true');
    resultRepoEls.removeAttr('hidden');
    countEl.html(resultRepoEls.length);

  }
  function renderBookmarkUsers(data) {
    var htm = [];
    data.forEach(function (key) {
      htm.push(els.bookmarkUserModalUserTpl
        .replace(/\{id\}/g, key.id)
        .replace(/\{name\}/g, key.name)
      )
    });
    els.bookmarkUserModalUserList.html(htm.join(''));
  }

  function renderDonate(isZh) {
    isZh = isZh || els.isZHSearchKeyWords;
    els.donate.removeAttr('hidden');
    els.donateTitle.removeClass('cn en').addClass(isZh ? 'cn' : 'en');
  }

  function renderAnalytics(param) {
    els.isGithub && setTimeout(function () {
      Navigator.getFrame(null).setAttribute('src', 'http://www.mihtool.com/analytics.html?codelf' + (param ? ('&' + param) : ''));
    }, param ? 500 : 3000);
  }

  function renderBaiduShare() {
    if (els.hasBaiduShare || !els.isZHSearchKeyWords) {
      return;
    }
    els.hasBaiduShare = true;
    window._bd_share_config = {
      "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
      }, "slide": {"type": "slide", "bdImg": "5", "bdPos": "right", "bdTop": els.win.height() / 2 - 80}
    };
    with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
  }

  function beforeRemoveVariableMenus() {
    els.body.find('.popover--variable').remove();
  }

  function beforeAddBookmarkUser(el) {
    el = el || els.bookmarkUserModal;
    var inputEl = el.find('input'),
      val = inputEl.val().trim();
    val = val.replace(/(\/)*$/, '').replace(/^(.{0,}\/)/, '').replace(/@/g,'');
    if (val.length) {
      bookmarkModel.setCurUserName(val);
      bookmarkModel.UserTable.add(val, function () {
        beforeSyncUser(val);
      });
      els.isGithub && DDMSModel.postBookmarks(val);
      renderAnalytics('bk&u=' + val);
    }
    inputEl.val('');
    hideBookmarkUserModal();
  }

  function beforeEditBookmarkGroup() {
    var id = els.bookmarkGroupModalInput.attr('data-id'),
      val = els.bookmarkGroupModalInput.val().trim();

    if(val.length){
      if(id){
        bookmarkModel.RepoGroupTable.updateName(id,val);
        els.bookmarkGroupModalInput.removeAttr('data-id');
      }else{
        bookmarkModel.RepoGroupTable.add(val);
      }
    }
    els.bookmarkGroupModalInput.val('');
    hideBookmarkGroupModal();
  }

  function beforeDelBookmarkGroup() {
    var el = $(this),
      id = el.attr('data-id');

    if (window.confirm("Remove this group?")) {
      bookmarkModel.RepoGroupTable.delete(id);
    }
  }

  function beforeAddRepoToGroup() {
    var el = $(this),
      targetGroupId = el.attr('data-id'),
      repoEl = el.parents('.repo-item'),
      repoId = repoEl.attr('data-repoid'),
      curGroupEl = el.parents('.repo-group-item'),
      curGroupId = curGroupEl.attr('data-id'),
      curGroupElCountEl = curGroupEl.find('.hd>.count'),
      curGoupCountNum = parseInt(curGroupElCountEl.html()),
      targetGoupEl = curGroupEl.siblings('.repo-group-item[data-id="'+targetGroupId+'"]'),
      targetGoupCountEl = targetGoupEl.find('.hd>.count'),
      targetGoupCountNum = parseInt(targetGoupCountEl.html()),
      targetGroupHasRepo = targetGoupEl.find('.repo-item[data-repoid="'+repoId+'"]').length;

    els.lastEditBookmarkRepoGroupId = curGroupId;
    if (targetGroupId != undefined && targetGroupId != 0) {
      bookmarkModel.RepoGroupTable.addRopoId(targetGroupId, repoId);

      if(!targetGroupHasRepo){
        targetGoupCountEl.html(++targetGoupCountNum);
        targetGoupEl.find('.repo-list').append(repoEl.clone());
      }

    } else if (curGroupId != 0) {
      bookmarkModel.RepoGroupTable.removeRopoId(curGroupId, repoId);

      curGroupElCountEl.html(--curGoupCountNum);
      repoEl.remove();
    }
  }

  function beforeSyncUser(name) {
    if (name) {
      renderBookmarkHeader('loading');
      bookmarkModel.setCurUserName(name);
      bookmarkModel.syncGithub(function () {
        bookmarkModel.getAll(renderBookmarkGroup);
      });
    }
  }

  function beforeDelUser() {
    var el = $(this),
      id = el.attr('data-id');

    if (window.confirm("Remove this account and all repos for it?")) {
      bookmarkModel.UserTable.delete(id, function () {
        el.parents('.user-item').remove();
        bookmarkModel.getAll(renderBookmarkGroup);
      });
    }
  }

  init();
  //end view and render
});
