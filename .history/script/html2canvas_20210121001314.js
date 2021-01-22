html2canvas(document.body, {
    onrendered: function (canvas) {
        var img = canvas.toDataURL();
        $("#result-image").attr('src', img).show();
    }
});

html2canvas(document.querySelector("#profileBox"), {
    onrendered: function(canvas)
    {
    var img = canvas.toDataURL();
    $("#result-image").attr('src', img).show();
    }
    });

html2canvas(document.body, {
onrendered: function(canvas)
{
canvas.toBlob(function(blob) {
saveAs(blob, "wholePage.png");
});
}
});

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
    
    function TakeAboutMe()
    {
      html2canvas(document.querySelector("#profileBox"), {
          onrendered: function(canvas)  
          {
            var img = canvas.toDataURL();
            $("#result-image").attr('src', img).show();
            canvas.toBlob(function(blob) {
              saveAs(blob, "AboutMe.png");
            });
          },
          allowTaint: true,
          imageTimeout: 0,
          useCORS: true
      });
      return false;
    }
    
    function LatestPost()
    {
      html2canvas(document.querySelector("#LatestPost"), {
          onrendered: function(canvas)  
          {
            var img = canvas.toDataURL();
            $("#result-image").attr('src', img).show();
            canvas.toBlob(function(blob) {
              saveAs(blob, "LatestPost.png");
            });
          },
          allowTaint: true,
          imageTimeout: 0,
          useCORS: true
      });
      return false;
    }