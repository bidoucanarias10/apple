var parallx = null;
var demoCount = 0;
    function Parallx() {
      var self = this;
      $("body").mousemove(function(e) {

          parallax.mouseX(e.pageX);
          parallax.mouseY(e.pageY); 

      });