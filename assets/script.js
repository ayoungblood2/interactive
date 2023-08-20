

console.log("this is avery's website. things i need to fix: mouse position, ticker tape responsive, margin bottom text consistency, unicode eyes appear if no activity, more images when clicking or hovering over preview img, are.na cms for images, custom website email, different custom domain, two column info/about box, current timestamp, inverse button with black bkgrnd like arc browser")

//about text container
let about = document.querySelector(".about");
let aboutContainer = document.querySelector(".aboutContainer");
about.addEventListener("click", function (e) {
  e.preventDefault();
  aboutContainer.style.display = "block";
  if (aboutContainer) {
    aboutContainer.addEventListener("click", function () {
      this.style.display = "none";
    });
  }
});

//mouse position coordinates
let previousCoords = [Math.random() * window.innerWidth, Math.random() * window.innerHeight];


document.onmousemove = function(e){
    document.getElementById("coords").innerHTML = "["+e.clientX+","+e.clientY+"]";
    document.getElementById("coords").style.top = e.clientY + 30 + "px";
    document.getElementById("coords").style.left = e.clientX + -22 + "px";
}

// TIME STAMP
// -------------------------


class TimeStamp {

  constructor(startDate, endDate) {
      this.startDate = startDate
      this.endDate = endDate
      this.el = document.querySelector('.TimeStamp')
      this.options = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          month: 'numeric',
          day: 'numeric'
      }
  }

  get weekDelta() {
      return Math.ceil((Date.now() - this.startDate.getTime()) / (1000 * 3600 * 24 * 7))
  }

  get currentDate() {
      // eslint-disable-next-line no-undef
      return moment().format('MM.DD.YY -------------------------------------------------------------- hh:mm:ss A')
  }

  render() {
      this.el.innerHTML = `spring 2020 semester -- week ${this.weekDelta} --------------------------------------------------------------
       ${this.currentDate}`
  }

}

const timeStamp = new TimeStamp(new Date('1/13/2020'), new Date('4/24/2020'))

if (timeStamp.el) {

  timeStamp.render()

  window.setInterval(() => {

      timeStamp.render()

  }, 1000)

}
