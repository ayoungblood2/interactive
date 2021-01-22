html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
 });
 html2canvas(document.getElementById('example')).then(function(canvas) {
  document.getElementById("polyline").src= canvas.toDataURL();
 });