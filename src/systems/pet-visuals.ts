import type { PetState } from './pet'

export function initializePetVisuals() {
  const petArea = document.querySelector<HTMLDivElement>('#pet')
  const scene = document.querySelector<HTMLElement>('#scene')

  if (!petArea || !scene) {
    console.error('MIMO: не найдена комната или область питомца')
    return
  }

  const area = petArea
const sceneElement = scene
const petElement = area.querySelector<HTMLElement>('.pet')

if (!petElement) {
  console.error('MIMO: персонаж не найден')
  return
}
const character = petElement
  let blinkTimer: number | undefined
  let walkTimer: number | undefined
  let restTimer: number | undefined

  // Начинаем прогулки из центра комнаты
  function centerPet() {
    const center = (sceneElement.clientWidth - area.offsetWidth) / 2
    area.style.left = `${Math.max(0, center)}px`
  }

  centerPet()

  function clearBlinkTimer() {
    if (blinkTimer !== undefined) {
      window.clearTimeout(blinkTimer)
      blinkTimer = undefined
    }
  }

  function clearMovementTimers() {
    if (walkTimer !== undefined) {
      window.clearTimeout(walkTimer)
      walkTimer = undefined
    }

    if (restTimer !== undefined) {
      window.clearTimeout(restTimer)
      restTimer = undefined
    }
  }

  function scheduleBlink() {
    clearBlinkTimer()

    if (!area.classList.contains('idle')) return

    const delay = 2500 + Math.random() * 2500

    blinkTimer = window.setTimeout(() => {
      if (!area.classList.contains('idle')) return

      area.classList.add('blinking')

      window.setTimeout(() => {
        area.classList.remove('blinking')
        scheduleBlink()
      }, 180)
    }, delay)
  }

  // Выбираем случайную точку в пределах комнаты
  function scheduleWalk() {
    clearMovementTimers()

    if (!area.classList.contains('idle')) return

    const restDuration = 1800 + Math.random() * 3500

    restTimer = window.setTimeout(() => {
      if (!area.classList.contains('idle')) return

      const maxLeft = Math.max(0, sceneElement.clientWidth - area.offsetWidth)
      const currentLeft = area.offsetLeft

      // Не выбираем точку слишком близко к текущей
      let targetLeft = currentLeft

      for (let i = 0; i < 8; i++) {
        targetLeft = Math.random() * maxLeft

        if (Math.abs(targetLeft - currentLeft) > 70) break
      }

      const distance = Math.abs(targetLeft - currentLeft)

      if (distance < 25) {
        scheduleWalk()
        return
      }

      // Поворачиваем Мимо в сторону движения
      character.style.scale = targetLeft < currentLeft ? '-1 1' : '1 1'

      area.classList.remove('blinking')
      area.classList.add('wandering')

      // Чем дальше идти, тем дольше прогулка
      const duration = Math.max(1200, Math.min(4500, distance * 8))

      area.style.transition = `left ${duration}ms ease-in-out`
      area.style.left = `${targetLeft}px`

      walkTimer = window.setTimeout(() => {
        area.classList.remove('wandering')

        // После прогулки Мимо немного отдыхает
        scheduleWalk()
      }, duration)
    }, restDuration)
  }

  function updateVisualState(state: PetState) {
    area.classList.remove(
      'idle',
      'happy',
      'sleeping',
      'walking',
      'blinking',
      'wandering'
    )

    clearMovementTimers()
    clearBlinkTimer()

    area.classList.add(state)

    if (state === 'idle') {
      scheduleBlink()
      scheduleWalk()
    } else {
      area.style.transition = 'none'
    }
  }

  window.addEventListener('mimo:state-change', (event) => {
    const customEvent = event as CustomEvent<{ state: PetState }>
    updateVisualState(customEvent.detail.state)
  })

  // При изменении размера окна не даём Мимо оказаться за границей
  window.addEventListener('resize', () => {
    const maxLeft = Math.max(0, sceneElement.clientWidth - area.offsetWidth)
    const currentLeft = area.offsetLeft

    if (currentLeft > maxLeft) {
      area.style.transition = 'none'
      area.style.left = `${maxLeft}px`
    }
  })

  updateVisualState('idle')
}