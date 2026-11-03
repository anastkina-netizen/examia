export type PetState =
  | 'idle'
  | 'blink'
  | 'happy'
  | 'sleeping'
  | 'walking'

export class Pet {
  state: PetState = 'idle'

  setState(newState: PetState) {
    this.state = newState
    window.dispatchEvent(
      new CustomEvent('mimo:state-change', {
        detail: { state: this.state },
      })
    )
  }

  wakeUp() {
    this.setState('idle')
  }

  greet() {
    this.setState('happy')

    window.setTimeout(() => {
      if (this.state === 'happy') {
        this.setState('idle')
      }
    }, 1200)
  }

  sleep() {
    this.setState('sleeping')
  }

  walk() {
    this.setState('walking')
  }

  blink() {
    this.setState('blink')

    window.setTimeout(() => {
      if (this.state === 'blink') {
        this.setState('idle')
      }
    }, 250)
  }
}

export const mimo = new Pet()