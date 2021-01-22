html2canvas(document.body).then(function(canvas) {
  document.body.appendChild(canvas);
 });
 html2canvas(document.getElementById('example')).then(function(canvas) {
  document.getElementById("polyline").src= canvas.toDataURL();
 });

 html2canvas(document.body).then(function(canvas) {
  // Export canvas as a blob 
  canvas.toBlob(function(blob) {
      // Generate file download
      window.saveAs(blob, "yourwebsite_screenshot.png");
  });
});