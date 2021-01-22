let avgX = [];
let avgY = [];
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];
let strokeWidth = 65;
let lines = 0;
let titles = ["(ï¾‰â—•ãƒ®â—•)ï¾‰*:ï½¥ï¾Ÿâœ§", "(â˜žï¾Ÿâˆ€ï¾Ÿ)â˜ž", "à¼¼ ã¤ â—•_â—• à¼½ã¤", "(â–€Ì¿Ä¹Ì¯â–€Ì¿ Ì¿)", "á•¦(Ã’_Ã“Ë‡)á•¤", "â˜œ(Ëšâ–½Ëš)â˜ž", "â˜œ(âŒ’â–½âŒ’)â˜ž", "(ãƒŽà² ç›Šà² )ãƒŽå½¡â”»â”â”»"];
let palette = ["#ff3030", "#ffff00", "#00b05b"];
let randomColor = palette[Math.floor(Math.random() * palette.length)];

  document.addEventListener("DOMContentLoaded",function(){
    let node = document.querySelector('.preload-transitions');
    node.classList.remove('preload-transitions');
  });

document.documentElement.style.setProperty('--primary', randomColor);
if (randomColor == "#ffff00"){
    document.getElementById("coords").style.color = 'black';
}


document.title = titles[Math.floor(Math.random() * titles.length)];

if (document.getElementById('svg') != null){

document.getElementById("svg").setAttribute("viewBox" , "0 0 " + window.innerWidth + " " + window.innerHeight);
document.getElementById("svg").setAttribute("height", window.innerHeight);
document.getElementById("svg").setAttribute("width", window.innerWidth); 

window.onresize = function(){
    document.getElementById("svg").setAttribute("viewBox" , "0 0 " + window.innerWidth + " " + window.innerHeight);
    document.getElementById("svg").setAttribute("height", window.innerHeight);
    document.getElementById("svg").setAttribute("width", window.innerWidth); 
}

}




document.onclick = function(e){
    if (e.target.tagName != 'A'){

        document.getElementById("save").style.opacity = 1;

        document.onkeypress = function(){
            var x = event.which || event.keyCode;
            if (x==115){
                saveImage();
            }
            // console.log("The Unicode value is: " + x);
        }
 



for (let anyLink of document.getElementsByTagName("a")){
    anyLink.onclick = function(e){
        e.preventDefault();  
        if (e.srcElement.id == "save"){
            saveImage();
        } else if (e.srcElement.classList.contains("collapse") ){
            let imagesDivId = this.getAttribute("data-target");
            this.classList.toggle("show-minus");
            document.getElementById(imagesDivId).classList.toggle("hide");
        } else if (e.srcElement.classList.contains("view-more") ){
            this.classList.toggle("view-less");
            document.getElementById(this.dataset.target).classList.toggle("viewing-less");
        } else {
            document.getElementsByClassName("active")[0].classList.remove("active");
            if (this.parentElement.classList.contains("nav") || this.parentElement.classList.contains("footer")){
                document.getElementsByTagName("body")[0].classList.add("transition"); 
            }    
            this.classList.add("active");            // prevent default anchor behavior
            var goTo = this.getAttribute("href"); // store anchor href
            let _this = this;
            // do something while timeOut ticks ... 

            setTimeout(function(){
                // window.location = goTo;
                if (_this.getAttribute("target") == "_blank"){
                    window.open(
                        goTo,
                        '_blank' // <- This is what makes it open in a new window.
                    );
                } else {
                    window.location = goTo;
                }
            }, 800); 
        }
    }
}




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


// for (let viewMoreLink of document.getElementsByClassName("view-more")){
//     viewMoreLink.addEventListener("click", function(e){
//         e.preventDefault();
//         this.classList.toggle("view-less");
//         document.getElementById(this.dataset.target).classList.toggle("viewing-less");
//     });
// }

function saveImage(){
            let w = Math.max(document.documentElement.clientWidth, window.innerWidth);
            let h = Math.max(document.documentElement.clientHeight, window.innerHeight);

            html2canvas(document.body, {
            width: w,
            height: h
            }).then(function(canvas) {
                // document.body.appendChild(canvas);
                // canvas.backgroundColor = "#eeeeee";                
                var svg = document.getElementById('svg');
                var img = document.querySelector('img');
                // var canvas = document.querySelector('canvas');

                // get svg data
                var xml = new XMLSerializer().serializeToString(svg);

                // make it base64
                var svg64 = btoa(xml);
                var b64Start = 'data:image/svg+xml;base64,';

                // prepend a "header"
                var image64 = b64Start + svg64;
                // set it as the source of the img element
                img.src = image64;

                // draw the image onto the canvas
                canvas.getContext('2d').drawImage(img, 0, 0);

                saveAs(canvas.toDataURL(), 'img-final-final-final.png');
            });   
}