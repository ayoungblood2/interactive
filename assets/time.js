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
        return moment().format('MM.DD.YY ↜⤳ hh:mm:ss A')
    }
  
  }
  
  const timeStamp = new TimeStamp(new Date('1/13/2020'), new Date('4/24/2020'))
  
  if (timeStamp.el) {
  
    timeStamp.render()
  
    window.setInterval(() => {
  
        timeStamp.render()
  
    }, 1000)
  
  }