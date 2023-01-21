class Button {

  constructor(element) {
    this.element = element
  }

  display(text) {
    this.element.style.display = text
  }
}

const button = {
  toplay: new Button(document.querySelector(".btn-play")),
  tostop: new Button(document.querySelector(".btn-stop")),
  tocontinue: new Button(document.querySelector(".btn-continue")),
  toreset: new Button(document.querySelector(".btn-reset"))
}

class Watch {

  constructor(hour, minute, second, millisecond) {

    this.hour = hour
    this.minute = minute
    this.second = second
    this.millisecond = millisecond
    this.time = 0

    this.element = {
      hour: document.querySelector(".hour"),
      minute: document.querySelector(".minute"),
      second: document.querySelector(".second"),
      millisecond: document.querySelector(".millisecond")
    }

    this.update()
  }

  formatWithTwoNumbers(number) {
    if (number <= 9) return `0${number}`
    return number
  }

  update() {

    const {
      hour,
      minute,
      second,
      millisecond
    } = this.element

    if (this.millisecond >= 60) {
      this.millisecond = 0
      ++this.second
    }

    if (this.second >= 60) {
      this.second = 0
      ++this.minute
    }

    if (this.minute >= 60) {
      this.minute = 0
      ++this.hour
    }

    if (this.hour >= 99) {
      this.hour = 0
    }

    hour.innerHTML = this.formatWithTwoNumbers(this.hour)
    minute.innerHTML = this.formatWithTwoNumbers(this.minute)
    second.innerHTML = this.formatWithTwoNumbers(this.second)
    millisecond.innerHTML = this.formatWithTwoNumbers(this.millisecond)

  }

  addTimer() {
    //init stopwatch
    this.time = setInterval(() => {
      ++this.millisecond
      this.update()
    }, 1000 / 60)
  }

  clearTimer() {
    clearInterval(this.time)
  }

  toplay() {

    //display
    const {
      toplay,
      tostop
    } = button

    toplay.display("none")
    tostop.display("block")

    this.addTimer()

  }

  tostop() {

    const {
      tostop,
      tocontinue,
      toreset
    } = button

    tostop.display("none")
    tocontinue.display("block")
    toreset.display("block")

    this.clearTimer()
  }

  tocontinue() {

    const {
      tocontinue,
      toreset,
      tostop,
    } = button

    tocontinue.display("none")
    toreset.display("none")
    tostop.display("block")

    this.addTimer()

  }

  toreset() {

    const {
      toreset,
      tocontinue,
      toplay
    } = button

    toreset.display("none")
    tocontinue.display("none")
    toplay.display("block")

    //reset all
    this.millisecond = 0
    this.second = 0
    this.minute = 0
    this.hour = 0

    this.update()

    this.clearTimer()

  }

}

function start() {

  const watch = new Watch(0, 0, 0, 0)

  const {
    toplay,
    tostop,
    tocontinue,
    toreset
  } = button

  //define display of buttons
  toplay.display("block")
  tostop.display("none")
  tocontinue.display("none")
  toreset.display("none")

  //add actions
  toplay.element.addEventListener("click", () => { watch.toplay() })
  tostop.element.addEventListener("click", () => { watch.tostop() })
  tocontinue.element.addEventListener("click", () => { watch.tocontinue() })
  toreset.element.addEventListener("click", () => { watch.toreset() })
}

window.addEventListener("load", start)
