var Util = require('Util.js');
var Model = require('model/Model.js');

//view and render
var els = {
  win: $(window),
  body: $('body'),

  title: $('.main-title>header h1'),
  subTitle: $('.main-title h5'),
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
  searchResultCt: $('.search-result .ct'),
  searchResultTpl: $('.search-result script').html(),
  searchResultHd: $('.search-result .hd'),
  searchResultBd: $('.search-result .bd'),

  variableMenuTpl: $('script[template="variableMenu"]').html(),

  sourceCodeModal: $('.sourcecode-modal'),
  sourceCodeModalDropdown: $('.sourcecode-modal .dropdown-menu'),
  sourceCodeModalDropdownTpl: $('.sourcecode-modal .dropdown-menu script').html(),
  sourceCodeContent: $('.sourcecode-modal .modal-body pre code'),
  sourceCodeContentHd: $('.sourcecode-modal .modal-body .hd'),

  confirmModal: $('.confirm-modal'),

  githubCorner: $('.github-corner svg'),
  donate: $('.donate'),
  donateTitle: $('.donate .title'),
  noticeLinks: $('.notice-link a'),

  isGithub: /github\.io/g.test(location.href) || Util.localParam()['search']['debug']==1,
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

  els.confirmModal.on('click','.btn',hideConfirm);
  els.win.on('MainView:showConfirm',function(){
    showConfirm.apply(this,[].slice.call(arguments,1));
  });
  els.win.on('MainView:hideConfirm',hideConfirm);

  els.win.on('MainView:renderAnalytics',function(){
    renderAnalytics.apply(this,[].slice.call(arguments,1));
  });
}

function init() {
  if (Util.os.ios || Util.os.android) {
    els.isMobile = true;
    els.body.addClass('mobile');
    FastClick.attach(document.body);
  }
  bindEvent();
  renderTitle();
  renderLangMunu();
  onLocationHashChanged();
  renderAnalytics();
  renderNotice();
}

function showSourceCode() {
  els.lastSourceCodeId = this.dataset.id;
  var htm = Model.Searchcode.getCacheSourceCodeHtmlById(this.dataset.id);
  if(htm){
    els.sourceCodeContentHd.hide();
    els.sourceCodeContent.html(htm);
  }else{
    renderSourceCode();
    Model.Searchcode.requestSourceCode(this.dataset.id, renderSourceCode);
  }
  els.lastVariableKeyword = this.dataset.val || els.lastVariableKeyword;
  this.dataset.val && renderRelatedProperty(this.dataset.val);
  els.sourceCodeModal.modal('show');
}

function showConfirm(msg,callback){
  els.confirmModal.find('.modal-body').html(msg||'');
  els.confirmModalYesCallback = callback;
  els.confirmModal.show();
  setTimeout(function(){
    els.confirmModal.addClass('in');
  },50);
}
function hideConfirm(){
  els.confirmModal.removeClass('in');
  setTimeout(function(){
    els.confirmModal.hide();
  },1000);
  if($(this).hasClass('yes')){
    els.confirmModalYesCallback && els.confirmModalYesCallback();
  }
  els.confirmModalYesCallback = null;
}

function onLocationHashChanged(e) {
  e && e.preventDefault();
  var hash = Util.HashHandler.get();
  hash && onSearch(decodeURIComponent(hash).replace(/(\?.*)/, ''));
}

function onSelectLang() {
  var checked = els.searchDropdownMenu.find('input:checked'), lang = [];
  checked.each(function () {
    lang.push(this.value);
  });
  Model.Searchcode.setLang(lang.join(' '));
  renderSearchBtn('Search');
}

function onResetLang() {
  els.searchDropdownMenu.find('input').removeAttr('checked');
  Model.Searchcode.setLang();
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
      Util.HashHandler.set(encodeURIComponent(val));
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
        Model.YoudaoTranslate.request(tmpch.join(' '), function (tdata) {
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
    key.length && key.length > 1 && els.valRegs.push(Model.BeanHelpers.getKeyWordReg(key));
  });
}

function doSearch() {
  if (els.lastVal && els.lastVal.length) {
    Model.Searchcode.request(els.lastVal, renderSearchResult);
    renderSearchResultHeader('loading');
    renderSearchBtn();
  } else {
    renderSearchResultHeader('error');
    renderSearchBtn('Search');
  }

  els.isGithub && Model.DDMS.postKeyWords(els.lastInputVal);
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
        repoNames: [],
        repoFilePaths: [],
        languages: []
      };
    if (!Util.isInArray(prop['ids'], res.id)) {
      prop['ids'].push(res.id);
      prop['repos'].push(res.repo);
      prop['repoNames'].push(res.name);
      prop['repoFilePaths'].push(res.repo+(res.location||'').substring(1)+'/'+res.filename);
      prop['languages'].push(res.language);
    }
  }
}

function getRelatedProperty(name) {
  name = formatPropertyName(name);
  return els.storeRelatedProperties[name];
}

function renderDark() {
  var hour = new Date().getHours();
  !(hour >= 12 && hour <= 13) && els.body.addClass('dark');
}

function renderLangMunu() {
  var htm = [], storeLang = Model.Searchcode.getLang();
  storeLang = storeLang ? storeLang.split(' ') : [];
  Model.TopProgramLan.forEach(function (key) {
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
            .replace('{label_type}', Model.BeanHelpers.getRandomLabelType())
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
    els.searchResultCt.removeClass('ct--white');
    renderSearchResultHeader();
    renderTooltips();
  } else {
    renderSearchResultHeader('error');
  }
  renderDark();
  renderTitle();
  renderDonate();
  renderBaiduShare();
  els.subTitle.css({'max-height': 0, padding: 0, margin: 0});
}

function renderSearchBtn(str) {
  var val = els.searchInput.val().trim();
  els.searchBtn.removeClass('more').addClass((str || (val.length && val != els.lastInputVal)) ? '' : 'more');
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
    setTimeout(function () {
      els.searchBtn.tooltip('show');
    }, 1000);
    setTimeout(function () {
      els.searchBtn.tooltip('dispose');
    }, 3000);
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
        && !Util.isInArray(tmp, function (ikey) {
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
    renderSourceCodeByWorker(function(){
      els.sourceCodeContentHd.hide();
      els.sourceCodeContent.text(data.code);
      setTimeout(function(){
        PR.prettyPrint(renderHighlightVariableKeyword);
      }, 100);
    });
    renderAnalytics('vc&q=' + els.lastInputVal);
  }
}

function renderSourceCodeByWorker(callback){
  if(Util.InlineWebWorker.ready){
    if(!els.prettifyWorker){
      els.prettifyWorker = els.prettifyWorker || Util.InlineWebWorker.create('#worker_prettify');
    }
    els.prettifyWorker.onmessage = function(e){
      if(e.data=='after'){
        callback && callback();
      }
    }
    els.prettifyWorker.postMessage('before');
  }else{
    callback && callback();
  }
}

function renderHighlightVariableKeyword(){
  els.sourceCodeContent.unhighlight();
  setTimeout(function(){
    els.sourceCodeContent.highlight(els.lastVariableKeyword);
    setTimeout(function(){
      els.sourceCodeContent.find('.highlight').each(function(idx){
        this.setAttribute('tabindex',idx+1);
      });
      setTimeout(function() {
        Model.Searchcode.setCacheSourceCodeHtmlById(els.lastSourceCodeId,els.sourceCodeContent.html());
      },300);
    },300);
  },800);
}

function renderRelatedProperty(name) {
  var htm = [],
    prop = getRelatedProperty(name);
  if (prop) {
    var ids = prop['ids'],
      repos = prop['repos'],
      repoNames = prop['repoNames'],
      repoFilePaths = prop['repoFilePaths'],
      langs = prop['languages'],
      i = 0, len = ids.length;
    for (i; i < len; i++) {
      htm.push(
        els.sourceCodeModalDropdownTpl.replace(/\{id\}/g, ids[i])
          .replace(/\{repo\}/g, repos[i])
          .replace(/\{repoName\}/g, repoNames[i])
          .replace(/\{repoFilePath\}/g, repoFilePaths[i])
          .replace(/\{lang\}/g, langs[i])
          .replace(/\{label_type\}/g, Model.BeanHelpers.getRandomLabelType().replace('secondary', 'default'))
      );
    }
  }
  els.sourceCodeModalDropdown.html(htm.join(''));
  els.sourceCodeModal.find('.match-count').html(htm.length);
}

function renderDonate(isZh) {
  isZh = isZh || els.isZHSearchKeyWords;
  els.donate.removeAttr('hidden');
  els.donateTitle.removeClass('cn en').addClass(isZh ? 'cn' : 'en');
}

function renderNotice() {
  els.noticeLinks.hide();
  els.noticeLinks.eq(Math.floor(Math.random() * els.noticeLinks.length)).show();
  setTimeout(renderNotice, 5 * 1000);
}

function renderAnalytics(param) {
  els.isGithub && setTimeout(function () {
    Util.Navigator.getFrame(null).setAttribute('src', '//www.mihtool.com/analytics.html?codelf' + (param ? ('&' + param) : ''));
  }, param ? 500 : 3000);
}

function renderBaiduShare() {
  return;
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

  with (document)0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = '//bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
}

function beforeRemoveVariableMenus() {
  els.body.find('.popover--variable').remove();
}

init();
