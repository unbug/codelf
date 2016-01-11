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
            try{id[key] && lcst.setItem(key, id[key]);}catch(err){}
          }
        } else {
          try{lcst.setItem(id, val);}catch(err){}
        }
      }
      return this;
    }
    function removeLocalValue(id) {
      if (lcst) {
        if (typeof id === 'object') {
          for (var key in id) {
            try{lcst.removeItem(id[key]);}catch(err){}
          }
        } else {
          try{lcst.removeItem(id);}catch(err){}
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
    function appendFrame(frame){
      frame && document.body.appendChild(frame);
    }
    function removeFrame(frame) {
      frame && frame.parentNode.removeChild(frame);
    }
    function getFrame(src,name) {
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

  var FormHandler = new function(){
    function getForm(method){
      var _form = document.createElement('form');
      _form.setAttribute("style", "display:none;width:0;height:0;position: absolute;top:0;left:0;border:0;");
      _form.setAttribute("method",method || 'POST');
      return _form;
    }

    this.asyncSubmit = function(action,data){
      this.submit(action,data,true);
    }

    this.submit = function(action,data,async){
      var target,
        frame,
        form = getForm(),
        inputs = [],
        itpl = '<input type="text" name="{N}" value="{V}" />';

      if(async){
        target = '__formhandler_'+new Date().getTime();
        frame = Navigator.getFrame(null,target);
        form.setAttribute('target', target);
        setTimeout(function(){
          Navigator.removeFrame(frame);
        },120000);
      }

      form.setAttribute('action', action);
      data = data || {};
      for(var key in data){
        inputs.push( itpl.replace('{N}',key).replace('{V}',data[key]) );
      }
      form.innerHTML = inputs.join('');
      action && setTimeout(function(){
        form.submit();
      },100);
    }
  };

  function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
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
  function isInArray(arr,val){
    if($.inArray(val,arr) != -1){
      return true;
    }
    for(var key in arr){
      if( typeof val==='function' && val.call(this,arr[key])){
        return true;
      }
    }
    return false;
  }
  //end utils
  //model
  //http://githut.info/
  var topProgramLan = [{"id":"22,106","language":"JavaScript, CoffeeScript"},{"id":"133,135","language":"CSS"},{"id":"3,39","language":"HTML"},{"id":137,"language":"Swift"},{"id":35,"language":"Objective-C"},{"id":23,"language":"Java"},{"id":19,"language":"Python"},{"id":24,"language":"PHP"},{"id":32,"language":"Ruby"},{"id":28,"language":"C"},{"id":16,"language":"C++"},{"id":6,"language":"C#"},{"id":55,"language":"Go"},{"id":51,"language":"Perl"},{"id":"104,109","language":"Clojure, ClojureScript"},{"id":40,"language":"Haskell"},{"id":54,"language":"Lua"},{"id":20,"language":"Matlab"},{"id":144,"language":"R"},{"id":47,"language":"Scala"},{"id":"69,78,146","language":"Shell"},{"id":29,"language":"Lisp"},{"id":42,"language":"ActionScript"}];
  var searchcode = new function(){
    var persistLangsName = 'codelf_langs_selected';
    var langs = localStorage.get(persistLangsName),langQuery;
    var page = 0;
    var lastVal;
    var cacheSourceCodes = {};

    genLangQuery(langs);

    this.resetPage = function(){
      page = 0;
    }

    this.setLang = function(val){
      langs = val || null;
      genLangQuery(val);
      this.resetPage();
      localStorage[langs?'set':'del'](persistLangsName,langs);
    }

    this.getLang = function(){
      return langs;
    }

    function genLangQuery(val){
      if(!!val){
        var arr1 = val.replace(/\s+/g,',').split(','),
          arr2 = [];
        arr1.forEach(function(key){
          arr2.push('lan='+key);
        });
        langQuery = arr2.join('&');
      }else{
        langQuery = null;
      }
    }

    //search code by query
    this.request = function(val,callback){
      if(val!=lastVal){
        this.resetPage();
      }
      lastVal = val;
      lastVal && $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://searchcode.com/api/codesearch_I/'+(langQuery?('?'+langQuery):''),
        data: {
          q: lastVal,
          p: page,
          per_page: 42
        },
        success: function(data){
          callback && callback(data,page);
          page++;
        }
      })
    };

    //get source code by id
    this.requestSourceCode = function(id,callback){
      if(cacheSourceCodes[id]){
        callback && callback(cacheSourceCodes[id]);
        return;
      }
      id && $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://searchcode.com/api/result/'+id+'/',
        success: function(data){
          cacheSourceCodes[id] = data;
          callback && callback(data);
        }
      });
    }
  };

  var youdaoTranslate = new function (){
    var lastVal;
    var translateRequestCallback;
    this.request = function(val,callback){
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
    window.afterYoudaoTranslateRequest = function(data){
      if(data){
        translateRequestCallback && translateRequestCallback(data);
      }
    }
  };
  var DDMS = new function(){
    var persistKeyWordsName = 'codelf_ddms_keywords';
    var persistKeyWordsTimerName = persistKeyWordsName+'_timer';
    var cacheKeyWords = (localStorage.get(persistKeyWordsName) || '').split(',');
    var ot = new Date(localStorage.get(persistKeyWordsTimerName) || 0);
    var nt = new Date().getTime();

    if((nt-ot)>1000*60*60*24){
      cacheKeyWords = [];
      localStorage.set(persistKeyWordsTimerName,nt);
    }
    function saveKeyWords(val){
      if(!isInArray(cacheKeyWords,val)){
        cacheKeyWords.push(val);
        localStorage.set(persistKeyWordsName,cacheKeyWords.join(',').replace(/^,*/g,'').replace(/,*&/g,''));
      }
    }

    this.postKeyWords = function(val){
      if(val && !isInArray(cacheKeyWords,val)){
        FormHandler.asyncSubmit('http://ddmsapi.mihtool.com/apis/v1/formdata/',{
          formid: '567ff8b0e454ee154de533dd',
          keywrod: val
        });
        saveKeyWords(val);
      }
    }
  };

  var beanHelpers = new function(){
    this.getRandomLabelType = function (){
      var types = ['default','primary','success','info','warning','warning','danger'];
      return randomList(types,1)[0];
    }

    this.getKeyWordReg = function (key){
      return new RegExp('([\\-_\\w\\d\\/\\$]{0,}){0,1}'+key+'([\\-_\\w\\d\\$]{0,}){0,1}', 'gi');
    }
  };
  //end model

  //view and render
  var els = {
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

    githubCorner: $('.github-corner svg'),
    donate: $('.donate'),

    isGithub: /github/g.test(location.href),
    lastVal: ''
  };

  function bindEvent(){
    window.addEventListener('hashchange', onLocationHashChanged, false);
    els.searchDropdownMenu.on('click','.all',onResetLang);
    els.searchDropdownMenu.on('change','input',onSelectLang);
    els.searchInput.on('keyup',function(){
      renderSearchBtn();
    });
    els.searchBtn.on('click',function(){
      onSearch();
    });
    els.searchInput.keypress(function (e) {
      if (e.which == 13) {
        onSearch();
        return false;
      }
    });
    els.searchResultBd.on('click mouseenter','.variable-wrap',function(e){
      e.preventDefault();
      e.stopPropagation();
      removeVariableMenus();
      $(this).popover({
        trigger: 'manual',
        html: true,
        placement: 'top',
        offset: '-10 0',
        title: function(){
          return false;
        },
        content: function(){
          els.sourceCodeModal.find('.modal-header a.cur-repo').attr('href',this.dataset.repo);
          var prop = getRelatedProperty(this.dataset.val);
          return els.variableMenuTpl
            .replace('{id}',this.dataset.id)
            .replace('{count}',prop?prop['ids'].length:1)
            .replace(/\{val\}/g,this.dataset.val)
            .replace('{repo}',this.dataset.repo);
        },
        template: '<div class="popover popover--variable" role="tooltip">' +
        '<div class="popover-arrow"></div><div class="popover-content"></div>' +
        '</div>'
      });
      $(this).popover('show');
      els.variableClipboard = new ZeroClipboard($('.variable-btns__copy')[0]);
      return false;
    });
    els.body.on('click','.variable-btns__code',showSourceCode);
    els.body.on('click',removeVariableMenus);
    els.sourceCodeModal.on('hidden.bs.modal', renderSourceCode);
  }
  function init(){
    if(os.ios || os.android){
      els.body.addClass('mobile');
    }
    bindEvent();
    renderTitle();
    renderLangMunu();
    onLocationHashChanged();
    renderAnalytics();
  }

  function showSourceCode(){
    renderSourceCode();
    searchcode.requestSourceCode(this.dataset.id,renderSourceCode);
    this.dataset.val && renderRelatedProperty(this.dataset.val);
    els.sourceCodeModal.modal('show');
  }

  function onLocationHashChanged(e){
    e && e.preventDefault();
    var hash = HashHandler.get();
    hash && onSearch(decodeURIComponent(hash).replace(/(\?.*)/,''));
  }
  function onSelectLang(){
    var checked = els.searchDropdownMenu.find('input:checked'),lang = [];
    checked.each(function(){
      lang.push(this.value);
    });
    searchcode.setLang(lang.join(' '));
    renderSearchBtn('Search');
  }
  function onResetLang(){
    els.searchDropdownMenu.find('input').removeAttr('checked');
    searchcode.setLang();
    renderSearchBtn('Search');
  }
  function onSearch(val){
    els.searchInput.blur();
    removeVariableMenus();
    if(val && val==els.lastInputVal){return;}
    val = val || els.searchInput.val().trim();
    els.searchInput.val(val);
    els.valHistory = els.valHistory||'';
    if(val.length){
      var isNext = val == els.lastInputVal;
      els.lastInputVal = val;
      if(!isNext){
        HashHandler.set(encodeURIComponent(val));
        var tmpval = [],tmpch = [];

        els.lastInputVal.replace(/\s+/ig,'+').split('+').forEach(function(key){
          if(/[^\x00-\xff]/gi.test(key)){
            tmpch.push(key);
            renderBaiduShare();
          }else{
            tmpval.push(key);
          }
        });
        els.lastVal = tmpval.join(' ');
        if(tmpch.length){
          youdaoTranslate.request(tmpch.join(' '),function(tdata){
            //basic translate
            if(tdata.basic && tdata.basic.explains){
              els.valHistory = tdata.basic.explains.join(' ');
            }
            //web translate
            if(tdata.web && tdata.web){
              tdata.web.forEach(function(key){
                els.valHistory += ' '+key.value.join(' ');
              });
            }
            if(tdata && tdata.translation){
              els.lastVal = els.lastVal + ' '
                + tdata.translation.join(' ')
                  .replace(/[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/g,'')
                  .split(' ').filter(function(key,idx,inputArray){
                    return inputArray.indexOf(key) == idx && !/^(a|an|the)$/ig.test(key);
                  }).join(' ');
              beforeDoSearch();
            }else{
              beforeDoSearch();
            }
          });
        }else{
          beforeDoSearch();
        }
      }else{
        doSearch();
      }
    }
  }
  function beforeDoSearch(){
    els.lastVal = els.lastVal.trim();
    els.lastVal = els.lastVal.split(' ').filter(function(key,idx,inputArray){
      return inputArray.indexOf(key) == idx;
    }).join(' ');
    saveKeyWordRegs();
    renderHistory();
    doSearch();
  }

  function saveKeyWordRegs(){
    els.valRegs = [];
    els.lastVal.replace(/\s+/ig,'+').split('+').forEach(function(key){
      key.length && els.valRegs.push(beanHelpers.getKeyWordReg(key));
    });
  }

  function doSearch(){
    if(els.lastVal && els.lastVal.length){
      searchcode.request(els.lastVal,renderSearchResult);
      renderSearchResultHeader('loading');
      renderSearchBtn();
    }else{
      renderSearchResultHeader('error');
      renderSearchBtn('Search');
    }

    els.isGithub && DDMS.postKeyWords(els.lastInputVal);
    renderAnalytics('q='+els.lastInputVal);
  }

  function renderTitle(){
    els.title.addClass('animated');
  }

  function formatPropertyName(name){
    name = name.toLowerCase();
    return '__codelf__'+name;
  }
  function storeRelatedProperty(name,res){
    name = formatPropertyName(name);
    els.storeRelatedProperties = els.storeRelatedProperties || {};
    if(!/\//g.test(name) /*exclude links*/ && name.length<64 /*too long*/){
      var prop = els.storeRelatedProperties[name] = els.storeRelatedProperties[name] || {ids: [],repos: [],languages: []};
      if(!isInArray(prop['ids'],res.id)){
        prop['ids'].push(res.id);
        prop['repos'].push(res.repo);
        prop['languages'].push(res.language);
      }
    }
  }

  function getRelatedProperty(name){
    name = formatPropertyName(name);
    return els.storeRelatedProperties[name];
  }

  function renderLangMunu(){
    var htm = [],storeLang = searchcode.getLang();
    storeLang = storeLang?storeLang.split(' '):[];
    topProgramLan.forEach(function(key){
      htm.push(els.searchDropdownMenuTpl
        .replace('{id}',key.id)
        .replace('{language}',key.language)
        .replace('{checked}',$.inArray(key.id, storeLang) != -1?'checked':''));
    });
    els.searchDropdownMenu.append(htm.join(''));
  }
  function renderGithubCorner(){
    els.githubCorner.css({fill: randomColor()});
  }

  function renderSearchResult(data){
    var vals = [],labels = [],lineStr;
    data.results.forEach(function(rkey){
      //filter codes
      lineStr = [];
      for(var lkey in rkey.lines){
        var lstr = rkey.lines[lkey];
        //no base64
        if(!(/;base64,/g.test(lstr) && lstr.length>256)){
          lineStr.push(lstr);
        }
      }
      lineStr = lineStr.join('').replace(/\r\n/g,' ');
      //match variables
      els.valRegs.forEach(function(key){
        $.each(lineStr.match(key)||[], function(i, el){
          //remove "-" and "/" from the starer and the ender
          el = el.replace(/^(\-|\/)*/, '').replace(/(\-|\/)*$/, '');
          storeRelatedProperty(el,rkey);
          if(
            !/\//g.test(el) /*exclude links*/
            && $.inArray(el, vals) === -1
            && $.inArray(el.toLowerCase(), vals) === -1
            && $.inArray(el.toUpperCase(), vals) === -1
            && el.length<64 /*too long*/
          ){
            vals.push(el);
            //render variable labels
            labels.push(els.searchResultTpl
              .replace('{label_type}',beanHelpers.getRandomLabelType())
              .replace(/\{val\}/g,el)
              .replace('{id}',rkey.id)
              .replace('{repo}',rkey.repo)
            );
          }
        });
      });
    });

    if(labels.length){
      var blockquote = els.searchResultBd.find('.blockquote');
      if(blockquote[0]){
        els.searchResultBd.find('.blockquote').remove();
      }else{
        labels.push('<hr/>');
      }
      els.searchResultBd.prepend(labels.join(''));
      renderSearchResultHeader();
      renderTooltips();
    }else{
      renderSearchResultHeader('error');
    }
    renderGithubCorner();
    renderDonate();
  }

  function renderSearchBtn(str){
    var val = els.searchInput.val().trim();
    els.searchBtn.html(str?str:(((val.length && val==els.lastInputVal)?'More':'Search')));
  }

  function renderSearchResultHeader(cls){
    els.searchResultHd.removeClass('loading error').addClass(cls||'');
  }

  function renderTooltips(){
    els.showNextTipTimer = els.showNextTipTimer || 0;
    var now = new Date().getTime();
    if(now-els.showNextTipTimer>1000*1800){
      els.showNextTipTimer = now;
      els.searchBtn.tooltip('show');
      setTimeout(function(){
        els.searchBtn.tooltip('dispose');
      },3000);
    }
  }

  function renderHistory(){
    var his = [els.lastVal,els.valHistory],labels = [],tmp = [];
    els.valHistory = his.join(' ')
      .replace(/[`~!@#$^&*()=|{}':;',\[\].<>\/?~！@#￥……&*（）——|\\{\\}【】‘；：”“’。，、？]/g,' ')
      .replace(/\s+/ig,'+').split('+')
      .filter(function(key,idx,inputArray){
        var checked = key.length>1
          && inputArray.indexOf(key) == idx
          && !/[^\x00-\xff]/gi.test(key)
          && !isInArray(tmp,function(ikey){ return new RegExp('^'+key+'$', 'ig').test(ikey)});
        if(checked){
          tmp.push(key);
          labels.push(els.searchRelateTpl.replace(/\{val\}/g,key));
        }
        return checked;
      })
      .join(' ');
    if(labels.length<1){
      ['foo','bar','2016'].forEach(function(key){
        labels.push(els.searchRelateTpl.replace(/\{val\}/g,key));
      });
    }
    els.searchRelateBd.html('<span class="label label-default">Suggestions :</span>'+labels.join(''));
  }

  function renderSourceCode(data){
    els.sourceCodeContentHd.show();
    els.sourceCodeContent.removeClass('prettyprinted').text('');
    if(data && data.code){
      els.sourceCodeContentHd.hide();
      els.sourceCodeContent.text(data.code);
      setTimeout(function(){
        PR.prettyPrint();
      },100);
      renderAnalytics('vc&q='+els.lastInputVal);
    }
  }
  function renderRelatedProperty(name){
    var htm = [],
      prop = getRelatedProperty(name);
    if(prop){
      var ids = prop['ids'],
        repos = prop['repos'],
        langs = prop['languages'],
        i = 0,len = ids.length;
      for(i;i<len;i++){
        htm.push(
          els.sourceCodeModalDropdownTpl.replace(/\{id\}/g,ids[i])
            .replace(/\{repo\}/g,repos[i])
            .replace(/\{lang\}/g,langs[i])
            .replace(/\{label_type\}/g,beanHelpers.getRandomLabelType())
        );
      }
    }
    els.sourceCodeModalDropdown.html(htm.join(''));
    els.sourceCodeModal.find('.match-count').html(htm.length);
  }

  function removeVariableMenus(){
    els.body.find('.popover--variable').remove();
  }

  function renderDonate(){
    els.donate.removeClass('hide');
  }

  function renderAnalytics(param){
    els.isGithub && setTimeout(function(){
      Navigator.getFrame(null).setAttribute('src','http://www.mihtool.com/analytics.html?codelf'+(param?('&'+param):''));
    },param?500:3000);
  }
  function renderBaiduShare(){
    if(els.hasBaiduShare){return;}
    els.hasBaiduShare = true;
    window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"5","bdPos":"right","bdTop":els.body.height()/2-80}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
  }

  init();
  //end view and render
});
