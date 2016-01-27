;(function(){
  document.body.style.background = 'red;';
  document.body.addEventListener('click',function(e){
    var el = e.target;
    if(/^a$/i.test(el.nodeName)){
      console.log(el.href,el.getAttribute('target'));
    }
  });
}());
