$(function() {
    var letsdraw = false;
    var theCanvas = document.getElementById('paint');
    var ctx = theCanvas.getContext('2d');
    theCanvas.width = 420;
    theCanvas.height = 300;
    var canvasOffset = $('#paint').offset();
    var lastpoints = {
      "x": 0,
      "y": 0
    };
  
    $('#paint').mousemove(function(e) {
      if (letsdraw === true) {
        lastpoints.x = e.pageX;
        lastpoints.y = e.pageY;
      }
    });
  
    $('#paint').mousedown(function(e) {
      letsdraw = true;
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(e.pageX - canvasOffset.left, e.pageY - canvasOffset.top);
    });
  
    $('#paint').mouseup(function(e) {
      ctx.lineTo(lastpoints.x - canvasOffset.left, lastpoints.y - canvasOffset.top);
      ctx.stroke();
      letsdraw = false;
    });
  });