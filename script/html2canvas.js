html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
 });
 html2canvas(document.getElementById('container')).then(function(canvas) {
  document.getElementById("image").src= canvas.toDataURL();
 });