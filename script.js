
const element = {

  hour: document.querySelector(".hour"),
  minute: document.querySelector(".minute"),
  second: document.querySelector(".second"),
  millisecond: document.querySelector(".millisecond"),
  play: document.querySelector(".btn-play"),
  stop: document.querySelector(".btn-stop"),
  continue: document.querySelector(".btn-continue"),
  reset: document.querySelector(".btn-reset")
}

class Watch {

  hour = 0
  minute = 0
  second = 0
  millisecond = 0

  time = 0

  update() {

    element.hour.innerHTML = this.hour
    element.minute.innerHTML = this.minute
    element.second.innerHTML = this.second
    element.millisecond.innerHTML = this.millisecond

  }

  play() {

    //increment milliseconds
    this.time = setInterval(() => {
      this.millisecond++
    }, 1)

    if (this.millisecond >= 60) {
      this.second++
    }

    if (this.second >= 60) {
      this.minute++
    }

    if (this.minute >= 60) {
      this.hour++
    }

    this.update()

    //recursivity
    requestAnimationFrame(play)
  }

  stop() { return }

  continue() { return }

  reset() { return }

}


function start() {

  const watch = new Watch()

  //add actions
  element.play.addEventListener("click", (e) => {
    element.play.style.display = "none"
    element.stop.style.display = "block"
    //action
    watch.play()
  })

  element.stop.addEventListener("click", (e) => {
    element.stop.style.display = "none"
    element.continue.style.display = "block"
    element.reset.style.display = "block"
    //action
    watch.stop()
  })

  element.continue.addEventListener("click", (e) => {
    element.continue.style.display = "none"
    element.reset.style.display = "none"
    element.stop.style.display = "block"
    //action
    watch.continue()
  })

  element.reset.addEventListener("click", (e) => {
    element.reset.style.display = "none"
    element.continue.style.display = "none"
    element.play.style.display = "block"
    //action
    watch.reset()
  })
}

window.addEventListener("load", start)


