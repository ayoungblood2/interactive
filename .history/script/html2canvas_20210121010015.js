$(function() {
    $("#btnSave").click(function() {
      html2canvas($("#svg"), {
        onrendered: function(canvas) {
          Canvas2Image.saveAsPNG(canvas);
        }
      });
    });
    
  
    function saveAs(uri, filename) {
      var link = document.createElement('a');
      if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
  
        //Firefox requires the link to be in the body
        document.body.appendChild(link);
  
        //simulate click
        link.click();
  
        //remove the link when done
        document.body.removeChild(link);
      } else {
        window.open(uri);
      }
    }
  });