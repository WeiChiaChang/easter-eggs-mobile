// GIF -- airguitar -- start
(function(window){
  "use strict";
  var airguitar = function() {
    var shock = document.createElement('div');
    var img = new Image;
    img.src = data;
    img.style.width = '450px';
    img.style.height = '320px';
    img.style.transition = '1s all';
    img.style.position = 'fixed';
    img.style.left = 'calc(50% - 225px)';
    img.style.bottom = '-260px';
    img.style.zIndex = 999999;

    document.body.appendChild(img);

    window.setTimeout(function(){
      img.style.bottom = '-30px';
    },50);

    window.setTimeout(function(){
      img.style.bottom = '-300px';
    }, 4300);
    window.setTimeout(function(){
      img.parentNode.removeChild(img);
    }, 5400);
  };

  var init = function(data) {
    var qwop = document.getElementById('gif-airguitar');
    qwop.addEventListener('click', airguitar)
  };

  var data = document.getElementById('gif-airguitar').dataset.src
  init(data);

})(window);
// GIF -- airguitar -- end

// GIF -- dog
(function(window){
  "use strict"
  var dog = function () {
    var shock = document.createElement('div')
    var img = new Image()
    img.src = data
    img.style.width = '1050px'
    img.style.height = '300px'
    img.style.transition = '7s all'
    img.style.position = 'fixed'
    img.style.left = '-1100px'
    // img.style.bottom = 'calc(-50% + 320px)'
    // make dogs gif keep showing on the bottom
    img.style.bottom = '0px'
    img.style.zIndex = 999999

    document.body.appendChild(img)

    window.setTimeout(function(){
      img.style.left = 'calc(100% + 500px)'
    }, 50)

    window.setTimeout(function(){
      img.parentNode.removeChild(img)
    }, 7300)
  }

  var init = function(data) {
    var qwop = document.getElementById('gif-dog');
    qwop.addEventListener('click', dog)
  };

  var data = document.getElementById('gif-dog').dataset.src
  init(data)

})(window)
// GIF -- dog -- end
