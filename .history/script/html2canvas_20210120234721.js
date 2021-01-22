html2canvas(document.querySelector("#profileBox"), {
    onrendered: function(canvas)
    {
    var img = canvas.toDataURL();
    $("#result-image").attr('src', img).show();
    }
    });