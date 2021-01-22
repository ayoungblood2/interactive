

 html2canvas(document.body).then(function(canvas) {
  // Export canvas as a blob 
  canvas.toBlob(function(blob) {
      // Generate file download
      window.saveAs(blob, "yourwebsite_screenshot.png");
  });
});