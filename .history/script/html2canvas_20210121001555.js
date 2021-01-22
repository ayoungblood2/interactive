function wholePage()
    {
      html2canvas(document.body, {
          onrendered: function(canvas)  
          {
            var img = canvas.toDataURL();
            $("#result-image").attr('src', img).show();
    
            canvas.toBlob(function(blob) {
              saveAs(blob, "wholePage.png");
            });
          }
      });
      return false;
    }