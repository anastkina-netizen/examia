import './styles.css'

type Subject = 'math' | 'biology' | 'russian'

type Topic = {
  id: string
  title: string
  children: string[]
}

const subjects: Record<Subject, { name: string; icon: string; color: string; topics: Topic[] }> = {
  math: {
    name: 'Профильная математика',
    icon: '∑',
    color: 'violet',
    topics: [
      { id: 'm1', title: 'Планиметрия', children: ['Треугольники и их свойства', 'Четырёхугольники', 'Окружность и круг', 'Вписанные и описанные окружности', 'Площади фигур', 'Подобие треугольников', 'Задачи №1 и №2 ЕГЭ'] },
      { id: 'm2', title: 'Стереометрия', children: ['Прямоугольный параллелепипед', 'Призма и пирамида', 'Цилиндр и конус', 'Шар и сфера', 'Площади поверхностей', 'Объёмы тел', 'Задача №3 ЕГЭ'] },
      { id: 'm3', title: 'Векторы', children: ['Координаты вектора', 'Сложение и вычитание векторов', 'Скалярное произведение', 'Угол между векторами', 'Задача №4 ЕГЭ'] },
      { id: 'm4', title: 'Вероятность и статистика', children: ['Классическая вероятность', 'Сложение вероятностей', 'Умножение вероятностей', 'Независимые события', 'Теория вероятностей в ЕГЭ', 'Задача №5 ЕГЭ'] },
      { id: 'm5', title: 'Уравнения', children: ['Линейные и квадратные уравнения', 'Дробно-рациональные уравнения', 'Иррациональные уравнения', 'Показательные уравнения', 'Логарифмические уравнения', 'Тригонометрические уравнения', 'Системы уравнений', 'Задачи №6 и №12 ЕГЭ'] },
      { id: 'm6', title: 'Производная и функции', children: ['Область определения и множество значений', 'Чтение графиков функций', 'Производная: определение и смысл', 'Правила дифференцирования', 'Касательная к графику', 'Монотонность функции', 'Экстремумы', 'Наибольшее и наименьшее значения', 'Задачи №7 и №8 ЕГЭ'] },
      { id: 'm7', title: 'Преобразование выражений', children: ['Степени и корни', 'Рациональные выражения', 'Тригонометрические формулы', 'Логарифмы', 'Показательные выражения', 'Задачи №9 и №10 ЕГЭ'] },
      { id: 'm8', title: 'Прикладные задачи', children: ['Проценты', 'Кредиты и вклады', 'Последовательные изменения величин', 'Оптимизация', 'Задачи №11 и №16 ЕГЭ'] },
      { id: 'm9', title: 'Неравенства', children: ['Линейные неравенства', 'Квадратные неравенства', 'Метод интервалов', 'Показательные неравенства', 'Логарифмические неравенства', 'Системы неравенств', 'Задача №13 ЕГЭ'] },
      { id: 'm10', title: 'Экономические задачи', children: ['Арифметическая прогрессия в задачах', 'Аннуитетные платежи', 'Дифференцированные платежи', 'Сложные кредитные схемы', 'Задача №15 ЕГЭ'] },
      { id: 'm11', title: 'Текстовые задачи', children: ['Движение', 'Работа и производительность', 'Смеси и сплавы', 'Задача №14 ЕГЭ'] },
      { id: 'm12', title: 'Задачи повышенной сложности', children: ['Параметры', 'Числа и их свойства', 'Сложные неравенства', 'Задачи с доказательством', 'Задачи №17–19 ЕГЭ'] }
    ]
  },
  biology: {
    name: 'Биология',
    icon: '✿',
    color: 'green',
    topics: [
      { id: 'b1', title: 'Биология как наука', children: ['Методы биологии', 'Уровни организации жизни', 'Признаки живого', 'Научное познание'] },
      { id: 'b2', title: 'Химический состав клетки', children: ['Вода и минеральные вещества', 'Углеводы', 'Липиды', 'Белки и их функции', 'Ферменты', 'ДНК и РНК', 'АТФ'] },
      { id: 'b3', title: 'Клетка', children: ['Прокариоты и эукариоты', 'Мембрана', 'Цитоплазма', 'Ядро', 'Митохондрии', 'Пластиды', 'Рибосомы', 'ЭПС и аппарат Гольджи', 'Клеточная теория'] },
      { id: 'b4', title: 'Обмен веществ и энергетика', children: ['Пластический обмен', 'Энергетический обмен', 'Фотосинтез', 'Хемосинтез', 'Клеточное дыхание', 'Биосинтез белка'] },
      { id: 'b5', title: 'Деление клетки', children: ['Клеточный цикл', 'Митоз', 'Мейоз', 'Гаметогенез', 'Жизненные циклы'] },
      { id: 'b6', title: 'Размножение и развитие', children: ['Бесполое размножение', 'Половое размножение', 'Оплодотворение', 'Эмбриональное развитие', 'Постэмбриональное развитие'] },
      { id: 'b7', title: 'Генетика', children: ['Основные понятия генетики', 'Законы Менделя', 'Моногибридное скрещивание', 'Дигибридное скрещивание', 'Неполное доминирование', 'Сцепленное наследование', 'Наследование пола', 'Группы крови', 'Генеалогический метод', 'Решение генетических задач'] },
      { id: 'b8', title: 'Изменчивость и селекция', children: ['Модификационная изменчивость', 'Мутационная изменчивость', 'Комбинативная изменчивость', 'Методы селекции', 'Биотехнология'] },
      { id: 'b9', title: 'Многообразие организмов', children: ['Вирусы', 'Бактерии', 'Археи', 'Грибы', 'Растения', 'Животные', 'Систематика'] },
      { id: 'b10', title: 'Растения', children: ['Ткани растений', 'Органы растений', 'Корень и побег', 'Цветок и плод', 'Жизненные циклы растений', 'Отделы растений'] },
      { id: 'b11', title: 'Животные', children: ['Типы тканей животных', 'Беспозвоночные', 'Хордовые', 'Системы органов', 'Эволюция животных'] },
      { id: 'b12', title: 'Анатомия и физиология человека', children: ['Нервная система', 'Эндокринная система', 'Кровь и кровообращение', 'Дыхание', 'Пищеварение', 'Выделение', 'Опорно-двигательная система', 'Иммунитет', 'Размножение человека', 'Органы чувств'] },
      { id: 'b13', title: 'Эволюция', children: ['Доказательства эволюции', 'Естественный отбор', 'Борьба за существование', 'Видообразование', 'Макроэволюция', 'Антропогенез'] },
      { id: 'b14', title: 'Экология', children: ['Экологические факторы', 'Популяции', 'Экосистемы', 'Пищевые цепи', 'Круговорот веществ', 'Биосфера', 'Влияние человека'] }
    ]
  },
  russian: {
    name: 'Русский язык',
    icon: 'А',
    color: 'orange',
    topics: [
      { id: 'r1', title: 'Орфография', children: ['Корни с чередованием', 'Проверяемые и непроверяемые гласные', 'Приставки', 'Н и НН в разных частях речи', 'НЕ и НИ', 'Слитное и раздельное написание', 'Правописание суффиксов', 'Правописание окончаний', 'Задания №9–15 ЕГЭ'] },
      { id: 'r2', title: 'Пунктуация', children: ['Однородные члены', 'Обособленные определения', 'Обособленные обстоятельства', 'Вводные конструкции', 'Обращения', 'Сложносочинённые предложения', 'Сложноподчинённые предложения', 'Бессоюзные предложения', 'Задания №16–21 ЕГЭ'] },
      { id: 'r3', title: 'Грамматика и нормы', children: ['Морфологические нормы', 'Синтаксические нормы', 'Лексические нормы', 'Паронимы', 'Грамматические ошибки', 'Задания №4–8 ЕГЭ'] },
      { id: 'r4', title: 'Речь и текст', children: ['Типы речи', 'Стили речи', 'Средства выразительности', 'Логика текста', 'Информационная обработка текста', 'Задания №1–3 и №22–26 ЕГЭ'] },
      { id: 'r5', title: 'Сочинение', children: ['Понимание проблемы', 'Комментарий к проблеме', 'Примеры-иллюстрации', 'Смысловая связь', 'Позиция автора', 'Собственная позиция', 'Аргументация', 'Композиция сочинения', 'Критерии оценивания'] }
    ]
  }
}

const STORAGE = 'examia-progress-v1'
let completed = new Set<string>()
let activePage = 'dashboard'

try {
  completed = new Set(JSON.parse(localStorage.getItem(STORAGE) || '[]'))
} catch {
  completed = new Set()
}

function save() {
  localStorage.setItem(STORAGE, JSON.stringify([...completed]))
}

function getCounts() {
  const all = Object.values(subjects).flatMap(s => s.topics.flatMap(t => t.children.map((_, i) => `${t.id}-${i}`)))
  return { total: all.length, done: all.filter(id => completed.has(id)).length }
}

function subjectProgress(subject: Subject) {
  const ids = subjects[subject].topics.flatMap(t => t.children.map((_, i) => `${t.id}-${i}`))
  return ids.length ? Math.round(ids.filter(id => completed.has(id)).length / ids.length * 100) : 0
}

function render() {
  const app = document.querySelector<HTMLDivElement>('#app')!
  const counts = getCounts()
  const today = new Date()
  const dateText = today.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })

  app.innerHTML = `
    <div class="layout">
      <aside class="sidebar">
        <div class="logo"><span>✿</span> EXAMIA</div>
        <div class="side-caption">ТВОЯ ПОДГОТОВКА</div>
        <button class="nav-item ${activePage === 'dashboard' ? 'selected' : ''}" data-page="dashboard">⌂ Обзор</button>
        <button class="nav-item ${activePage === 'calendar' ? 'selected' : ''}" data-page="calendar">▦ Календарь</button>
        <div class="side-caption">ПРЕДМЕТЫ</div>
        ${Object.entries(subjects).map(([key, s]) => `<button class="nav-item ${activePage === key ? 'selected' : ''}" data-subject="${key}"><span class="subject-dot ${s.color}"></span>${s.name}</button>`).join('')}
        <div class="sidebar-bottom"><span class="live-dot"></span> Прогресс сохраняется автоматически</div>
      </aside>

      <main class="main">
        <header class="topbar">
          <div><div class="eyebrow">ЕГЭ · 2027</div><div class="date">${dateText}</div></div>
          <div class="top-pill">✦ Подготовка началась</div>
        </header>

        ${activePage === 'dashboard' ? dashboard(counts) : activePage === 'calendar' ? calendar() : subjectPage(activePage as Subject)}
      </main>
    </div>
  `
  bindEvents()
}

function dashboard(counts: { total: number; done: number }) {
  const percent = Math.round(counts.done / counts.total * 100)
  return `
    <section class="welcome">
      <div><div class="eyebrow">ТВОЯ ЦЕЛЬ — 85+ БАЛЛОВ</div><h1>Большая цель.<br><span>Маленькие шаги.</span></h1><p>Системная подготовка к трём экзаменам — без хаоса и потери прогресса.</p></div>
      <div class="welcome-symbol">✿</div>
    </section>
    <section class="stats-grid">
      <article class="stat-card"><span>Изучено тем</span><strong>${counts.done}<small> / ${counts.total}</small></strong><div class="progress-track"><div style="width:${percent}%"></div></div><small>${percent}% общей программы</small></article>
      <article class="stat-card"><span>До экзаменов</span><strong>ЕГЭ<small> 2027</small></strong><small>Весна и лето — твой финиш</small></article>
      <article class="stat-card"><span>Режим</span><strong>7<small> дней в неделю</small></strong><small>1 час в будни · 2 часа в выходные</small></article>
    </section>
    <div class="section-heading"><div><div class="eyebrow">ТРИ НАПРАВЛЕНИЯ</div><h2>Твой прогресс</h2></div></div>
    <section class="subject-cards">
      ${Object.entries(subjects).map(([key, s]) => `<article class="subject-card ${s.color}"><div class="subject-card-top"><span class="subject-icon">${s.icon}</span><span>${subjectProgress(key as Subject)}%</span></div><h3>${s.name}</h3><div class="progress-track"><div style="width:${subjectProgress(key as Subject)}%"></div></div><div class="card-bottom"><span>${s.topics.reduce((n, t) => n + t.children.length, 0)} пунктов программы</span><button data-subject="${key}">Открыть →</button></div></article>`).join('')}
    </section>
    <div class="section-heading"><div><div class="eyebrow">НАЧНИ СЕГОДНЯ</div><h2>Первый учебный блок</h2></div></div>
    <section class="today-card"><div class="today-icon">∑</div><div><span class="eyebrow">ПРОФИЛЬНАЯ МАТЕМАТИКА · 60 МИНУТ</span><h3>Числа, выражения и базовые вычисления</h3><p>Начни с диагностики школьной базы и повторения основных правил.</p></div><button data-subject="math">Перейти к темам →</button></section>
    <p class="footnote">Отмечай изученные пункты — EXAMIA автоматически сохранит твой прогресс на этом компьютере.</p>
  `
}

function subjectPage(subject: Subject) {
  const s = subjects[subject]
  const total = s.topics.reduce((n, t) => n + t.children.length, 0)
  const done = s.topics.reduce((n, t) => n + t.children.filter((_, i) => completed.has(`${t.id}-${i}`)).length, 0)
  return `
    <section class="page-heading ${s.color}"><div class="subject-icon large">${s.icon}</div><div><div class="eyebrow">ПРОГРАММА ЕГЭ · 2027</div><h1>${s.name}</h1><p>${done} из ${total} пунктов отмечено · ${subjectProgress(subject)}%</p></div></section>
    <div class="progress-track large-track"><div style="width:${subjectProgress(subject)}%"></div></div>
    <div class="section-heading"><div><div class="eyebrow">ПОЛНАЯ ПРОГРАММА</div><h2>Темы и подтемы</h2></div><span class="muted">${s.topics.length} тематических разделов</span></div>
    <div class="topic-list">
      ${s.topics.map((t, index) => {
        const checked = t.children.filter((_, i) => completed.has(`${t.id}-${i}`)).length
        return `<details class="topic" ${index === 0 ? 'open' : ''}><summary><span class="topic-number">${String(index + 1).padStart(2, '0')}</span><span class="topic-name">${t.title}<small>${checked} / ${t.children.length} выполнено</small></span><span class="topic-progress">${Math.round(checked / t.children.length * 100)}%</span><span class="chevron">⌄</span></summary><div class="topic-children">${t.children.map((child, i) => {
          const id = `${t.id}-${i}`
          return `<label class="check-row"><input type="checkbox" data-topic="${id}" ${completed.has(id) ? 'checked' : ''}><span>${child}</span></label>`
        }).join('')}</div></details>`
      }).join('')}
    </div>
  `
}

function calendar() {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
  const rotation: Subject[] = ['math', 'biology', 'math', 'russian', 'biology', 'math', 'russian']
  return `
    <section class="page-heading"><div><div class="eyebrow">ТВОЙ РИТМ</div><h1>Календарь подготовки</h1><p>Повторяющаяся недельная схема. Пропущенные блоки можно будет переносить.</p></div></section>
    <div class="week-list">${days.map((day, i) => {
      const s = subjects[rotation[i]]
      return `<article class="week-row"><div class="week-day">${day}</div><div class="week-icon ${s.color}">${s.icon}</div><div class="week-info"><strong>${s.name}</strong><small>${i === 5 || i === 6 ? '120 минут' : rotation[i] === 'russian' ? '45–60 минут' : '60 минут'}</small></div><span class="week-tag">${i === 5 || i === 6 ? 'Углублённая практика' : 'Теория + практика'}</span></article>`
    }).join('')}</div>
    <div class="note-card"><strong>Как устроен график</strong><p>Математика и биология получают больше учебного времени. Русский язык распределён немного легче. Раз в месяц предусмотрен полноценный пробник по одному из предметов.</p></div>
  `
}

function bindEvents() {
  document.querySelectorAll<HTMLElement>('[data-subject]').forEach(el => el.addEventListener('click', () => {
    activePage = el.dataset.subject!
    render()
  }))
  document.querySelectorAll<HTMLElement>('[data-page]').forEach(el => el.addEventListener('click', () => {
    activePage = el.dataset.page!
    render()
  }))
  document.querySelectorAll<HTMLInputElement>('[data-topic]').forEach(el => el.addEventListener('change', () => {
    const id = el.dataset.topic!
    if (el.checked) completed.add(id)
    else completed.delete(id)
    save()
    render()
  }))
}

render()