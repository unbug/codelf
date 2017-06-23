var Util = require('Util.js');
var Model = require('model/Model.js');

//view and render
var els = {
  win: $(window),
  body: $('body'),

  bookmarkBtn: $('.bookmark-btn'),
  bookmarkModal: $('.bookmark-modal'),
  bookmarkModalTagMenu: $('.bookmark-modal .modal-header .tag-menu'),
  bookmarkModalContent: $('.bookmark-modal .modal-body>.bd'),
  bookmarkModalContentHd: $('.bookmark-modal .modal-body>.hd'),
  bookmarkModalGroupTpl: $('.bookmark-modal script[data-template="repoGroup"]').html(),
  bookmarkModalGroupItemTpl: $('.bookmark-modal script[data-template="groupItem"]').html(),
  bookmarkModalTagItemTpl: $('.bookmark-modal script[data-template="tagItem"]').html(),
  bookmarkModalTagDotTpl: $('.bookmark-modal script[data-template="tagDot"]').html(),
  bookmarkModalReopTpl: $('.bookmark-modal script[data-template="repoItem"]').html(),

  bookmarkUserModal: $('.bookmark-user-modal'),
  bookmarkUserModalUserList: $('.bookmark-user-modal .user-list'),
  bookmarkUserModalUserTpl: $('.bookmark-user-modal .user-list script').html(),

  bookmarkGroupModal: $('.bookmark-group-modal'),
  bookmarkGroupModalInput: $('.bookmark-group-modal input.group-name'),
  bookmarkSyncModal: $('.bookmark-sync-modal'),
  bookmarkSyncModalInput: $('.bookmark-sync-modal input.sync-id'),

  confirmModal: $('.confirm-modal'),

  isDebug: /github\.io/g.test(location.href) || Util.localParam()['search']['debug']==1
};

function bindEvent() {
  els.win.on('DB:ready', renderBookmarkGroup);
  els.win.on('DB:Table.RepoGroup.onchange', renderBookmarkGroup);
  els.win.on('DB:Table.RepoTag.onchange', updateBookmarkTagsData);
  els.bookmarkBtn.on('click', showBookmark);
  els.bookmarkModalTagMenu.on('click', '.dropdown-item', renderBookmarkGroupByTag);
  els.bookmarkModal.on('click', '.add-account', showBookmarkUserModal);
  els.bookmarkModal.on('click', '.add-group', function(){
    showBookmarkGroupModal();
  });
  els.bookmarkModal.on('click', '.modal-header .sync', function(){
    showBookmarkSyncModal();
  });
  els.bookmarkModalContentHd.on('click', '.submit', function(){
    beforeAddBookmarkUser(els.bookmarkModalContentHd);
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
  els.bookmarkGroupModal.on('click', '.submit-group', beforeEditBookmarkGroup);
  els.bookmarkSyncModal.on('click', '.download', beforeDownloadBookmarkGroupsAndTags);
  els.bookmarkSyncModal.on('click', '.upload', beforeUploadBookmarkGroupsAndTags);
  els.bookmarkModalContent.on('click', '.repo-group-item>.hd .ctrl .del', beforeDelBookmarkGroup);
  els.bookmarkModalContent.on('click', '.repo-group-item>.hd .ctrl .edit', function(){
    showBookmarkGroupModal(this.dataset.id,this.dataset.name);
  });
  els.bookmarkModalContent.on('click', '.group-menu .add-repo', beforeAddRepoToGroup);
  els.bookmarkModalContent.on('click', '.tag-menu .add-repo', beforeAddRepoToTag);
  els.bookmarkModalContent.on('click', '.repo-item .group-menu', renderBookmarkRepoGroupMenu);
  els.bookmarkModalContent.on('click', '.repo-item .tag-menu', renderBookmarkRepoTagMenu);
  els.bookmarkModalContent.on('mouseenter mouseleave ontouchstart ontouchend', '.repo-item', renderBookmarkRepoTagDots);
  els.bookmarkModalContent.on('mouseenter', '.repo-item', renderBookmarkRepoTitle);
  els.bookmarkModalContent.on('keyup','.repo-group-item>.hd .search input',renderBookmarkSearchRepos);
  els.bookmarkModalContent.on('click','.repo-group-item>.hd .search submit',renderBookmarkSearchRepos);
  els.bookmarkModalContent.on('show.bs.collapse hide.bs.collapse','.repo-group-item>.repo-list',function () {
    this !== els.bookmarkModalContent.find('.repo-group-item:last-child .collapse')[0] && toggleLastBookmarkGroup();
  });
  els.bookmarkUserModal.on('click', '.submit', function(){
    beforeAddBookmarkUser();
  });
  els.bookmarkUserModalUserList.on('click', '.sync', function () {
    beforeSyncUser(this.dataset.name);
  });
  els.bookmarkUserModalUserList.on('click', '.del', beforeDelUser);
  els.bookmarkGroupModal.on('hidden.bs.modal', showBookmark);
  els.bookmarkUserModal.on('hidden.bs.modal', showBookmark);
  els.bookmarkSyncModal.on('hidden.bs.modal', showBookmark);
}

function init() {
  bindEvent();
  renderBookmarkTip();
}

function showBookmark() {
  renderBookmarkTip(true);
  els.bookmarkModal.modal('show');
  els.win.trigger('MainView:renderAnalytics','bk');
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

function showBookmarkSyncModal() {
  hideBookmark();
  els.bookmarkSyncModal.modal('show');
  renderBookmarkSyncGroupsAndTags();
}

function hideBookmarkSyncModal() {
  els.bookmarkSyncModal.modal('hide');
}

function getBookmarkRopeHtm(repo, allGroupHtm, allTagHtm) {
  return els.bookmarkModalReopTpl
    .replace(/\{id\}/g, repo.id)
    .replace(/\{originRepoId\}/g, repo.originRepoId)
    .replace(/\{full_name\}/g, repo.data.full_name)
    .replace(/\{_full_name\}/g, repo.data.full_name.toLowerCase())
    .replace(/\{description\}/g, repo.data.description||'')
    .replace(/\{html_url\}/g, repo.data.html_url)
    .replace(/\{language\}/g, repo.data.language||'')
    .replace(/\{stargazers_count\}/g, repo.data.stargazers_count||'')
    .replace(/\{groupItems\}/g, allGroupHtm)
    .replace(/\{tagItems\}/g, allTagHtm)
}
function renderBookmarkTip(dispose) {
  if(dispose){
    els.bookmarkBtn.tooltip('hide');
  }else{
    setTimeout(function(){
      els.bookmarkBtn.tooltip('show');
      setTimeout(function(){
        els.bookmarkBtn.tooltip('hide');
      },2500);
    },1500);
  }
}

function renderBookmarkHeader(cls){
  els.bookmarkModalContentHd.removeClass('empty loading').addClass(cls||'');
}

function renderBookmarkGroup(data) {
  if (!data || !data.repos || !data.users || !data.groups || !data.tags) {
    Model.Bookmark.getAll(renderBookmarkGroup);
    return;
  }
  var repos = Model.Bookmark.arrayToObj(data.repos,'originRepoId'),
    htm = [],
    allRepoHtm = [],
    allGroupHtm = [],
    allTagHtm = [];

  data.groups.forEach(function (key) {
    allGroupHtm.push(els.bookmarkModalGroupItemTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
    );
  });
  allGroupHtm = allGroupHtm.join('');
  data.tags.forEach(function (key) {
    allTagHtm.push(els.bookmarkModalTagItemTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
      .replace(/\{color\}/g, key.color)
      .replace(/\{count\}/g, key.repoIds.length)
    );
  });
  allTagHtm = allTagHtm.join('');
  data.groups.forEach(function (key) {
    var rids = /string/i.test(typeof key.repoIds)?key.repoIds.split(','):key.repoIds,
      rhtm = [];
    rids.length && rids.forEach(function (key) {
      var rd = repos[key];
      rd && rhtm.push(getBookmarkRopeHtm(rd, allGroupHtm, allTagHtm));
    });
    htm.push(els.bookmarkModalGroupTpl
      .replace(/\{id\}/g, key.id)
      .replace(/\{name\}/g, key.name)
      .replace(/\{items\}/g, rhtm.join(''))
      .replace(/\{itemCount\}/g, rhtm.length||'')
    );
  });
  if(data.repos.length){
    //add all group
    data.repos.forEach(function (key) {
      allRepoHtm.push(getBookmarkRopeHtm(key, allGroupHtm, allTagHtm));
    });
    htm.push(els.bookmarkModalGroupTpl
      .replace(/\{id\}/g, 0)
      .replace(/\{name\}/g, 'All')
      .replace(/\{items\}/g, allRepoHtm.join(''))
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
    toggleLastBookmarkGroup(true);
  }, 100);

  updateBookmarkGroupsData();
  renderBookmarkTagMenu(allTagHtm);
  renderBookmarkUsers(data.users);
}

function toggleLastBookmarkGroup(show) {
  els.bookmarkModalContent.find('.repo-group-item:last-child .collapse')[show ? 'addClass' : 'removeClass']('in');
}

function renderBookmarkGroupByTag(){
  var id = this.dataset.id;
  Model.Bookmark.getAll(function(data){
    var repoObjs = Model.Bookmark.arrayToObj(data.repos,'originRepoId'),
      repos = [],
      repoIds;
    if(id){
      repoIds = data.tags.filter(function (key) {
        return key.id == +id;
      })[0].repoIds;
      repoIds.forEach(function (key) {
        repoObjs[key] && repos.push(repoObjs[key]);
      });
      data.repos = repos;
    }
    renderBookmarkGroup(data);
  });
}

function renderBookmarkTagMenu(htm){
  els.bookmarkModalTagMenu.find('.add-repo').remove();
  els.bookmarkModalTagMenu.append(htm);
  updateBookmarkTagsData();
}

function renderBookmarkRepoGroupMenu(){
  var el = $(this),
    id = el.parents('.repo-item').attr('data-repoid');
  els.lastBookmarkGroupsData.forEach(function(key){
    el.find('.add-repo[data-id="'+key.id+'"]')[key.repoIds.indexOf(id)==-1?'removeAttr':'attr']('data-selected',true);
  });
}

function renderBookmarkRepoTagMenu(){
  var el = $(this),
    id = el.parents('.repo-item').attr('data-repoid');
  els.lastBookmarkTagsData.forEach(function(key){
    el.find('.add-repo[data-id="'+key.id+'"]')[key.repoIds.indexOf(id)==-1?'removeAttr':'attr']('data-selected',true);
  });
}

function renderBookmarkRepoTitle(){
  var el = $(this),
    id = el.attr('data-repoid'),
    groups = [];
  els.lastBookmarkGroupsData.forEach(function(key){
    key.repoIds.indexOf(id)!=-1 && groups.push(key.name);
  });

  el.attr('title', groups.length? ('Group: '+ groups.join('\n\t   ')): '');
}

function renderBookmarkRepoTagDots(e){
  var el = $(this),
    id = el.attr('data-repoid'),
    dotsEl = el.find('.tag-dots'),
    htm = [];
  if(/ontouchstart|mouseenter/g.test(e.type)){
    els.lastBookmarkTagsData.forEach(function(key){
      if(key.repoIds.indexOf(id)!=-1){
        htm.push(
          els.bookmarkModalTagDotTpl
            .replace(/\{color\}/g,key.color)
        );
      }
    });
    dotsEl.html(htm.join('')).addClass('in');
  }else{
    dotsEl.html('').removeClass('in');
  }
}

function renderBookmarkSyncGroupsAndTags(syncId) {
  syncId = syncId || Model.DDMS.getOrganizerSyncId();
  if(syncId){
    els.bookmarkSyncModalInput.val(syncId);
    els.bookmarkSyncModal.find('.sync-note').html('Your current sync id is: '+ syncId);
  }
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

function beforeAddBookmarkUser(el) {
  el = el || els.bookmarkUserModal;
  var inputEl = el.find('input'),
    val = inputEl.val().trim();
  val = val.replace(/(\/)*$/, '').replace(/^(.{0,}\/)/, '').replace(/@/g,'');
  if (val.length) {
    Model.Bookmark.setCurUserName(val);
    Model.Bookmark.UserTable.add(val, function () {
      beforeSyncUser(val);
    });
    els.isDebug && Model.DDMS.postBookmarkUser(val);
    els.win.trigger('MainView:renderAnalytics','bk&u=' + val);
  }
  inputEl.val('');
  hideBookmarkUserModal();
}

function beforeEditBookmarkGroup() {
  var id = els.bookmarkGroupModalInput.attr('data-id'),
    val = els.bookmarkGroupModalInput.val().trim();

  if(val.length){
    if(id){
      Model.Bookmark.RepoGroupTable.updateName(id,val);
      els.bookmarkGroupModalInput.removeAttr('data-id');
    }else{
      Model.Bookmark.RepoGroupTable.add(val);
    }
  }
  els.bookmarkGroupModalInput.val('');
  hideBookmarkGroupModal();
}

function beforeDelBookmarkGroup() {
  var el = $(this),
    id = el.attr('data-id');

  els.win.trigger('MainView:showConfirm',["Remove this group?",function(){
    Model.Bookmark.RepoGroupTable.delete(id);
  }]);
}

function beforeAddRepoToGroup() {
  var el = $(this),
    targetGroupId = el.attr('data-id'),
    selected = el.attr('data-selected'),
    repoEl = el.parents('.repo-item'),
    repoId = repoEl.attr('data-repoid'),
    repoUrl = repoEl.find('.repo-item__hd a').attr('href'),
    repoLang = repoEl.attr('data-repolang'),
    repoStar = repoEl.attr('data-repostar'),
    curGroupEl = el.parents('.repo-group-item'),
    curGroupId = curGroupEl.attr('data-id'),
    curGroupElCountEl = curGroupEl.find('.hd>.count'),
    curGoupCountNum = parseInt(curGroupElCountEl.html()||0),
    targetGoupEl = curGroupEl.siblings('.repo-group-item[data-id="'+targetGroupId+'"]'),
    targetGroupName = targetGoupEl.find('>.hd>a').html(),
    targetGoupCountEl = targetGoupEl.find('.hd>.count'),
    targetGoupCountNum = parseInt(targetGoupCountEl.html()||0),
    targetGroupRepo = targetGoupEl.find('.repo-item[data-repoid="'+repoId+'"]');

  if (!selected) {
    Model.Bookmark.RepoGroupTable.addRopoId(targetGroupId, repoId);

    if(!targetGroupRepo.length){
      targetGoupCountEl.html(++targetGoupCountNum);
      targetGoupEl.find('.repo-list').append(repoEl.clone());
    }
    els.isDebug && Model.DDMS.postBookmarkGroup(repoId,repoUrl,targetGroupName,repoLang,repoStar||0);

  } else{
    Model.Bookmark.RepoGroupTable.removeRopoId(targetGroupId, repoId);

    if(targetGroupId==curGroupId){
      repoEl.remove();
      curGroupElCountEl.html(--curGoupCountNum||'');
    }else{
      targetGroupRepo.remove();
      targetGoupCountEl.html(--targetGoupCountNum||'');
    }
  }
}

function beforeAddRepoToTag() {
  var el = $(this),
    targetId = el.attr('data-id'),
    selected = el.attr('data-selected'),
    repoEl = el.parents('.repo-item'),
    repoId = repoEl.attr('data-repoid');

  if (targetId != undefined && targetId != 0){
    Model.Bookmark.RepoTagTable[selected?'removeRopoId':'addRopoId'](targetId, repoId);
  }
}

function beforeSyncUser(name) {
  if (name) {
    renderBookmarkHeader('loading');
    Model.Bookmark.setCurUserName(name);
    Model.Bookmark.syncGithub(function () {
      Model.Bookmark.getAll(renderBookmarkGroup);
    });
  }
}

function beforeDelUser() {
  var el = $(this),
    id = el.attr('data-id');

  els.win.trigger('MainView:showConfirm',["Remove this user and all repos for the user?",function(){
    Model.Bookmark.UserTable.delete(id, function () {
      el.parents('.user-item').remove();
      Model.Bookmark.getAll(renderBookmarkGroup);
    });
  }]);
}

function beforeDownloadBookmarkGroupsAndTags(){
  els.win.trigger('MainView:showConfirm',["Download will overwrite all local groups, are you sure?",function(){
    var id = els.bookmarkSyncModalInput.val();
    Model.DDMS.getBookmarkOrganizer(id,function(data){
      if(data && data.code){
        Model.DDMS.setOrganizerSyncId(id);
        renderBookmarkSyncGroupsAndTags(id);
        var json = JSON.parse(decodeURIComponent(data.data.data.data));
        Model.Bookmark.RepoGroupTable.addAll(json.groups, function () {
          Model.Bookmark.RepoTagTable.addAll(json.tags, function () {
            Model.Bookmark.getAll(renderBookmarkGroup);
          });
        });
      }
    });
  }]);
}
function beforeUploadBookmarkGroupsAndTags(){
    Model.Bookmark.getAll(function(data){
      var id = els.bookmarkSyncModalInput.val(),
        data = encodeURIComponent(JSON.stringify({groups: data.groups, tags: data.tags}));
      //update
      if(!!id){
        els.win.trigger('MainView:showConfirm',["Upload will overwrite groups belong to this sync id on the server, are you sure?",function(){
            Model.DDMS.postUpdateBookmarkOrganizer(id, data, function () {
            Model.DDMS.setOrganizerSyncId(id);
            renderBookmarkSyncGroupsAndTags(id);
          });
        }]);
      }
      //create
      else{
        Model.DDMS.postBookmarkOrganizer(data, function(url){
          id = Util.localParam(url).search['id'];
          Model.DDMS.setOrganizerSyncId(id);
          renderBookmarkSyncGroupsAndTags(id);
        });
      }
    });
}

function updateBookmarkTagsData(){
  Model.Bookmark.RepoTagTable.getAll(function(res){
    els.lastBookmarkTagsData = res;
  });
}
function updateBookmarkGroupsData(){
  Model.Bookmark.RepoGroupTable.getAll(function(res){
    els.lastBookmarkGroupsData = res;
  });
}

init();
