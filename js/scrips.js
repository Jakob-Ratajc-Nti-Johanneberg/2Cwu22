scroller = document.getElementById('mainpage');
var nav = document.getElementById('navigation')


var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 70) //{
      nav.style.right= 1000+"px";
    } else {
      nav.style.right= 0;
    }
  };
  
  window.addEventListener("scroll", myScrollFunc);