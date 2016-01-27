;(function(){
  function openInBrowser(link){
    console.log(link);
    !!link && window.open(link);
  }
  document.body.addEventListener('click',function(e){
    var el = e.target,
      aEls;
    if(/_blank/.test(el.getAttribute('target')) && /^a$/.test(el.tagName) ){
      e.preventDefault();
      openInBrowser(el.getAttribute('href'));
    }else{
      aEls = [].slice.call(document.querySelectorAll('a[target="_blank"]'));
      aEls.forEach(function(node){
        if(node.contains(el)){
          e.preventDefault();
          openInBrowser(node.getAttribute('href'));
        }
      });
    }
  });
}());
