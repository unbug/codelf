var Util = require('./Util.js');

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
exports.topProgramLan = topProgramLan;
var searchcodeModel = new function () {
  var persistLangsName = 'codelf_langs_selected';
  var langs = Util.localStorage.get(persistLangsName), langQuery;
  var page = 0;
  var lastVal;
  var cacheSourceCodes = {};
  var afterRequestSearchcode;

  genLangQuery(langs);

  this.resetPage = function () {
    page = 0;
  }

  this.setLang = function (val) {
    langs = val || null;
    genLangQuery(val);
    this.resetPage();
    Util.localStorage[langs ? 'set' : 'del'](persistLangsName, langs);
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
    afterRequestSearchcode = callback;
    if (val != lastVal) {
      this.resetPage();
    }
    lastVal = val;
    lastVal && $.ajax({
      type: 'GET',
      //dataType: 'jsonp',
      dataType: 'json',
      url: 'https://searchcode.com/api/codesearch_I/' + (langQuery ? ('?' + langQuery) : ''),
      //url: 'https://searchcode.com/api/jsonp_search_IV/' + (langQuery ? ('?' + langQuery) : ''),
      data: {
        q: lastVal,
        p: page,
        per_page: 42,
        callback: 'afterRequestSearchcode'
      },
      jsonp: false,
      jsonpCallback: false,
      success: function (data) {
        callback && callback(data, page);
        page++;
      }
    })
  };

  window.afterRequestSearchcode = function(data){
    afterRequestSearchcode && afterRequestSearchcode(data, page);
    page++;
  }

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
exports.searchcodeModel = searchcodeModel;

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
exports.youdaoTranslateModel = youdaoTranslateModel;

var DDMSModel = new function () {
  var postAction = 'http://ddmsapi.mihtool.com/apis/v1/formdata/';
  var persistKeyWordsName = 'codelf_ddms_keywords';
  var persistKeyWordsTimerName = persistKeyWordsName + '_timer';
  var cacheKeyWords = (Util.localStorage.get(persistKeyWordsName) || '').split(',');
  var ot = new Date(Util.localStorage.get(persistKeyWordsTimerName) || 0);
  var nt = new Date().getTime();

  if ((nt - ot) > 1000 * 60 * 60 * 24) {
    cacheKeyWords = [];
    Util.localStorage.set(persistKeyWordsTimerName, nt);
  }
  function saveKeyWords(val) {
    if (!Util.isInArray(cacheKeyWords, val)) {
      cacheKeyWords.push(val);
      Util.localStorage.set(persistKeyWordsName, cacheKeyWords.join(',').replace(/^,*/g, '').replace(/,*&/g, ''));
    }
  }

  this.postKeyWords = function (val) {
    if (val && !Util.isInArray(cacheKeyWords, val)) {
      FormHandler.asyncSubmit(postAction, {
        formid: '567ff8b0e454ee154de533dd',
        keywrod: val
      });
      saveKeyWords(val);
    }
  }
  this.postBookmarkUser = function (val) {
    if (val) {
      FormHandler.asyncSubmit(postAction, {
        formid: '569c3740b6691c4e16fc9999',
        account: val
      });
    }
  }
  this.postBookmarkGroup = function (repoid,repourl,groupname) {
    if (repoid) {
      FormHandler.asyncSubmit(postAction, {
        formid: '56a1a23fb6691c4e16fc99b8',
        repoid: repoid,
        repourl: repourl,
        groupname: groupname,
      });
    }
  }
};
exports.DDMSModel = DDMSModel;

var bookmarkModel = new function () {
  var BM = this;
  var DB;
  var schemaBuilder = lf.schema.create('Codelf', 2);
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
    .addColumn('repoIds', lf.Type.OBJECT)
    .addColumn('order', lf.Type.INTEGER)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  schemaBuilder
    .createTable('Repo')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('userId', lf.Type.INTEGER)
    .addColumn('originRepoId', lf.Type.STRING)
    .addColumn('data', lf.Type.OBJECT)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  schemaBuilder
    .createTable('RepoTag')
    .addColumn('id', lf.Type.INTEGER)
    .addColumn('name', lf.Type.STRING)
    .addColumn('color', lf.Type.STRING)
    .addColumn('repoIds', lf.Type.OBJECT)
    .addColumn('create', lf.Type.DATE_TIME)
    .addPrimaryKey(['id'], true);

  schemaBuilder.connect({
    storeType: Util.os.ios?lf.schema.DataStoreType.WEB_SQL: null
  }).then(function (db) {
    DB = db;
    Tables = {
      User: DB.getSchema().table('User'),
      RepoGroup: DB.getSchema().table('RepoGroup'),
      RepoTag: DB.getSchema().table('RepoTag'),
      Repo: DB.getSchema().table('Repo')
    };
    BM.RepoTagTable.addDefaultTags();
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
        .exec().then(function () {
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
        'repoIds': [],
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
          var ids = /string/i.test(typeof rows[0].repoIds)?
            (rows[0].repoIds.length ? rows[0].repoIds.split(',') : []):
            rows[0].repoIds;
          if (ids.indexOf(repoId) == -1) {
            ids.push(repoId);
          }
          DB.update(Tables.RepoGroup).set(Tables.RepoGroup.repoIds, ids).where(Tables.RepoGroup.id.eq(id))
            .exec();
        }
      });
    }

    this.removeRopoId = function (id, repoId) {
      DB.select().from(Tables.RepoGroup).where(Tables.RepoGroup.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = /string/i.test(typeof rows[0].repoIds)?
                      (rows[0].repoIds.length ? rows[0].repoIds.split(',') : []):
                      rows[0].repoIds,
            idx = ids.indexOf(repoId);

          if (idx != -1) {
            ids.splice(idx, 1);
          }
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

  this.RepoTagTable = new function () {
    this.addDefaultTags = function(callback){
      var tags = [
        {
          name: 'Red',
          color: '#ff5f5f'
        },
        {
          name: 'Orange',
          color: '#fba45b'
        },
        {
          name: 'Yellow',
          color: '#f6cc67'
        },
        {
          name: 'Green',
          color: '#60cb68'
        },
        {
          name: 'Blue',
          color: '#33baef'
        },
        {
          name: 'Purple',
          color: '#d38adb'
        },
        {
          name: 'Gray',
          color: '#a4a4a7'
        }
      ];
      DB.select().from(Tables.RepoTag)
        .exec().then(function (rows) {
        if(!rows.length){
          var trows = [];
          tags.forEach(function(key){
            trows.push(Tables.RepoTag.createRow({
              'name': key.name,
              'color': key.color,
              'repoIds': [],
              'create': new Date()
            }));
          });
          DB.insertOrReplace().into(Tables.RepoTag).values(trows)
            .exec().then(function () {
            callback && callback();
          });
        }else{
          callback && callback();
        }
      });
    }

    this.add = function (name,color) {
      if (!name || !color) {
        return;
      }
      var row = Tables.RepoTag.createRow({
        'name': name,
        'color': color,
        'repoIds': [],
        'create': new Date()
      });
      DB.select().from(Tables.RepoTag).where(Tables.RepoTag.name.eq(name))
        .exec().then(function (rows) {
        !rows.length && DB.insertOrReplace().into(Tables.RepoTag).values([row])
          .exec().then(function () {
            win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.C});
          });
      });
    }

    this.addRopoId = function (id, repoId,callback) {
      DB.select().from(Tables.RepoTag).where(Tables.RepoTag.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = rows[0].repoIds;
          if (ids.indexOf(repoId) == -1) {
            ids.push(repoId);
          }
          DB.update(Tables.RepoTag).set(Tables.RepoTag.repoIds, ids).where(Tables.RepoTag.id.eq(id))
            .exec().then(function(){
              callback && callback();
              win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.U, fileds: ['repoIds']});
            });
        }
      });
    }

    this.removeRopoId = function (id, repoId,callback) {
      DB.select().from(Tables.RepoTag).where(Tables.RepoTag.id.eq(id))
        .exec().then(function (rows) {
        if (rows && rows[0]) {
          var ids = rows[0].repoIds,
            idx = ids.indexOf(repoId);

          if (idx != -1) {
            ids.splice(idx, 1);
          }
          DB.update(Tables.RepoTag).set(Tables.RepoTag.repoIds, ids).where(Tables.RepoTag.id.eq(id))
            .exec().then(function(){
              callback && callback();
              win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.U, fileds: ['repoIds']});
            });
        }
      });
    }

    this.updateName = function (id, name) {
      DB.update(Tables.RepoTag).set(Tables.RepoTag.name, name).where(Tables.RepoTag.id.eq(id))
        .exec().then(function () {
        win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.U, fields: 'name'});
      });
    }

    this.delete = function (id, callback) {
      DB.delete()
        .from(Tables.RepoTag)
        .where(Tables.RepoTag.id.eq(id))
        .exec().then(function (res) {
        callback && callback(res);
        win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.D});
      });
    }

    this.getAll = function (callback) {
      DB.select()
        .from(Tables.RepoTag)
        .orderBy(Tables.RepoTag.create, lf.Order.DESC)
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
    //select user
    BM.UserTable.getAll(function (users) {
      //select groups
      BM.RepoGroupTable.getAll(function (groups) {
        //select repos
        BM.RepoTable.getAll(function (repos) {
          //select tags
          BM.RepoTagTable.getAll(function (tags) {
            callback && callback.call(this, {
              users: users || [],
              repos: repos || [],
              groups: groups || [],
              tags: tags || []
            });
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
exports.bookmarkModel = bookmarkModel;

var beanHelpersModel = new function () {
  this.getRandomLabelType = function () {
    var types = ['default', 'primary', 'success', 'info', 'warning', 'warning', 'danger'];
    return Util.randomList(types, 1)[0];
  }

  this.getKeyWordReg = function (key) {
    return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}' + key + '([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
  }
};
exports.beanHelpersModel = beanHelpersModel;
//end model
