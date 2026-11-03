
export type NeedsState = {
  hunger: number
  energy: number
  mood: number
}

type SavedPetData = {
  needs: NeedsState
  sleeping: boolean
  savedAt: number
}

const STORAGE_KEY = 'mimo-pet-data'

const needs: NeedsState = {
  hunger: 85,
  energy: 90,
  mood: 80,
}

let sleeping = false
let lastUpdate = Date.now()

function limit(value: number) {
  return Math.max(0, Math.min(100, value))
}

// Сохраняем состояние Мимо на компьютере
function saveNeeds() {
  const data: SavedPetData = {
    needs: { ...needs },
    sleeping,
    savedAt: Date.now(),
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('MIMO: не удалось сохранить состояние', error)
  }
}

// Загружаем предыдущее состояние
function loadNeeds() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) return

    const data = JSON.parse(saved) as SavedPetData

    if (
      typeof data.needs?.hunger !== 'number' ||
      typeof data.needs?.energy !== 'number' ||
      typeof data.needs?.mood !== 'number' ||
      typeof data.savedAt !== 'number' ||
      typeof data.sleeping !== 'boolean'
    ) {
      return
    }

    needs.hunger = limit(data.needs.hunger)
    needs.energy = limit(data.needs.energy)
    needs.mood = limit(data.needs.mood)
    sleeping = data.sleeping

    // Учитываем время, пока приложение было закрыто
    const elapsedMinutes = Math.max(
      0,
      (Date.now() - data.savedAt) / 60000
    )

    needs.hunger = limit(needs.hunger - elapsedMinutes * 0.35)

    if (sleeping) {
      needs.energy = limit(needs.energy + elapsedMinutes * 1.5)
    } else {
      needs.energy = limit(needs.energy - elapsedMinutes * 0.25)
    }

    needs.mood = limit(needs.mood - elapsedMinutes * 0.08)

    console.log('MIMO: состояние восстановлено')
  } catch (error) {
    console.error('MIMO: не удалось загрузить сохранение', error)
  }
}

// Обновляем показатели на экране
function renderNeeds() {
  const hunger = document.querySelector<HTMLElement>('#hunger-bar')
  const energy = document.querySelector<HTMLElement>('#energy-bar')
  const mood = document.querySelector<HTMLElement>('#mood-bar')

  const hungerText = document.querySelector<HTMLElement>('#hunger-value')
  const energyText = document.querySelector<HTMLElement>('#energy-value')
  const moodText = document.querySelector<HTMLElement>('#mood-value')

  if (hunger) hunger.style.width = `${needs.hunger}%`
  if (energy) energy.style.width = `${needs.energy}%`
  if (mood) mood.style.width = `${needs.mood}%`

  if (hungerText) hungerText.textContent = `${Math.round(needs.hunger)}%`
  if (energyText) energyText.textContent = `${Math.round(needs.energy)}%`
  if (moodText) moodText.textContent = `${Math.round(needs.mood)}%`
}

// Постепенно изменяем потребности
function updateNeeds() {
  const now = Date.now()
  const minutes = Math.max(0, (now - lastUpdate) / 60000)

  lastUpdate = now

  needs.hunger = limit(needs.hunger - minutes * 0.35)

  if (sleeping) {
    needs.energy = limit(needs.energy + minutes * 1.5)
  } else {
    needs.energy = limit(needs.energy - minutes * 0.25)
  }

  needs.mood = limit(needs.mood - minutes * 0.08)

  renderNeeds()
  saveNeeds()
}

export function initializeNeeds() {
  // Восстанавливаем сохранение перед отображением показателей
  loadNeeds()

  lastUpdate = Date.now()

  renderNeeds()
  saveNeeds()

  // Обновляем показатели каждую секунду
  window.setInterval(updateNeeds, 1000)

  // Кормление
  document.querySelector('#feed')?.addEventListener('click', () => {
    if (sleeping) return

    needs.hunger = limit(needs.hunger + 25)
    needs.mood = limit(needs.mood + 5)

    renderNeeds()
    saveNeeds()
  })

  // Игра
  document.querySelector('#play')?.addEventListener('click', () => {
    if (sleeping || needs.energy < 10) return

    needs.mood = limit(needs.mood + 20)
    needs.energy = limit(needs.energy - 12)

    renderNeeds()
    saveNeeds()
  })

  // Сохраняем данные при закрытии приложения
  window.addEventListener('pagehide', saveNeeds)

  // Сохраняем данные, когда приложение сворачивается
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      saveNeeds()
    }
  })

  return {
    setSleeping(value: boolean) {
      sleeping = value
      lastUpdate = Date.now()
      saveNeeds()
    },
  }
}
