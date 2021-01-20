$(function() {
    var letsdraw ;
  
    var theCanvas = document.getElementById('paint');
    var ctx = theCanvas.getContext('2d');
    theCanvas.width = 420;
    theCanvas.height = 300;
  
    var canvasOffset = $('#paint').offset();
  
    $('#paint').mousemove(function(e) {
      if (letsdraw) {
        ctx.clearRect(0,0,theCanvas.width,theCanvas.height);
        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 1;
        ctx.beginPath();
      
        ctx.moveTo(letsdraw.x, letsdraw.y);
        ctx.lineTo(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
        ctx.stroke();
      }
    });
  
    $('#paint').mousedown(function(e) {
      letsdraw = {
        x:e.pageX - canvasOffset.left,
        y:e.pageY - canvasOffset.top
        }
      
    });
  
    $(window).mouseup(function() {
      letsdraw = null;
    });
  });