var Database = require('model/Database.js');

module.exports = new function () {
  var BM = this;
  var DB;
  var schemaBuilder = Database.schemaBuilder;
  var Tables;
  var DBEventType = Database.eventType;
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

  win.on('DB:ready', function (ev,db) {
    DB = db;
    Tables = {
      User: DB.getSchema().table('User'),
      RepoGroup: DB.getSchema().table('RepoGroup'),
      RepoTag: DB.getSchema().table('RepoTag'),
      Repo: DB.getSchema().table('Repo')
    };
    BM.RepoTagTable.addDefaultTags();
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

    this.deleteAll = function (callback) {
      DB.delete()
        .from(Tables.RepoGroup)
        .exec().then(function (res) {
        callback && callback(res);
        win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.D});
      });
    }

    this.addAll = function (data, callback) {
      if(data){
        this.deleteAll(function(){
          var rows = [];
          data.forEach(function(key){
            rows.push(Tables.RepoGroup.createRow({
              'name': key.name,
              'repoIds': key.repoIds,
              'order': key.order,
              'create': new Date()
            }));
          });
          DB.insertOrReplace().into(Tables.RepoGroup).values(rows)
            .exec().then(function () {
            callback && callback();
            win.trigger('DB:Table.RepoGroup.onchange', {type: DBEventType.C});
          });
        });
      }
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

    this.deleteAll = function (callback) {
      DB.delete()
        .from(Tables.RepoTag)
        .exec().then(function (res) {
          callback && callback(res);
          win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.D});
        });
    }

    this.addAll = function (data, callback) {
      if(data){
        this.deleteAll(function(){
          var rows = [];
          data.forEach(function(key){
            rows.push(Tables.RepoTag.createRow({
              'name': key.name,
              'color': key.color,
              'repoIds': key.repoIds,
              'create': new Date()
            }));
          });
          DB.insertOrReplace().into(Tables.RepoTag).values(rows)
            .exec().then(function () {
              callback && callback();
              win.trigger('DB:Table.RepoTag.onchange', {type: DBEventType.C});
            });
        });
      }
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

  this.syncRepoGroup = function (){

  }

  this.syncRepoTag = function (){

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
