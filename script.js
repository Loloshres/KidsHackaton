const types = {
  logoped: {
    ru: "Логопед",
    ruPl: "Логопеды",
    kz: "Логопед",
    kzPl: "Логопедтер"
  },
  defect: {
    ru: "Дефектолог",
    ruPl: "Дефектологи",
    kz: "Дефектолог",
    kzPl: "Дефектологтар"
  },
  neuro: {
    ru: "Нейропсихолог",
    ruPl: "Нейропсихологи",
    kz: "Нейропсихолог",
    kzPl: "Нейропсихологтар"
  },
  aba: {
    ru: "ABA-терапевт",
    ruPl: "ABA-терапевты",
    kz: "ABA-терапевт",
    kzPl: "ABA-терапевттер"
  },
  psych: {
    ru: "Психолог",
    ruPl: "Психологи",
    kz: "Психолог",
    kzPl: "Психологтар"
  },
  sensory: {
    ru: "Сенсорная интеграция",
    ruPl: "Сенсорная интеграция",
    kz: "Сенсорлық интеграция",
    kzPl: "Сенсорлық интеграция"
  },
  ergo: {
    ru: "Эрготерапевт",
    ruPl: "Эрготерапевты",
    kz: "Эрготерапевт",
    kzPl: "Эрготерапевттер"
  },
  center: {
    ru: "Центр",
    ruPl: "Центры",
    kz: "Орталық",
    kzPl: "Орталықтар"
  },
  group: {
    ru: "Группа",
    ruPl: "Группы и программы",
    kz: "Топ",
    kzPl: "Топтар мен бағдарламалар"
  }
};

const specialistTypes = ["logoped", "defect", "neuro", "aba", "psych", "sensory", "ergo"];
const kinds = ["all", "specialist", "center", "group"];

const kindOf = type => type === "center" ? "center" : type === "group" ? "group" : "specialist";

const svgWrap = inner => `
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>
`;

const iconSized = (inner, size, stroke) => `
  <svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    stroke-width="${stroke || 2}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>
`;

const personPath = `
  <circle cx="12" cy="8" r="3.6"/>
  <path d="M4.5 20.5c0-4 3.3-6.5 7.5-6.5s7.5 2.5 7.5 6.5"/>
`;

const centerPath = `
  <path d="M3 21h18"/>
  <path d="M5 21V9l7-5.5L19 9v12"/>
  <path d="M9.5 21v-6h5v6"/>
`;

const groupPath = `
  <circle cx="9" cy="8" r="3.2"/>
  <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"/>
  <circle cx="17.5" cy="9" r="2.5"/>
  <path d="M17.5 14.5c2.4.3 4 2.2 4 4.7"/>
`;

const gridPath = `
  <rect x="3" y="3" width="7" height="7" rx="1.5"/>
  <rect x="14" y="3" width="7" height="7" rx="1.5"/>
  <rect x="3" y="14" width="7" height="7" rx="1.5"/>
  <rect x="14" y="14" width="7" height="7" rx="1.5"/>
`;

const kindIcons = {
  all: iconSized(gridPath, 15, 2.2),
  specialist: iconSized(personPath, 15, 2.2),
  center: iconSized(centerPath, 15, 2.2),
  group: iconSized(groupPath, 15, 2.2)
};

const needs = {
  sounds: {
    ru: "Произношение и речь",
    kz: "Дыбыс айту және сөйлеу",
    ruDesc: "Постановка звуков, дикция, дизартрия",
    kzDesc: "Дыбыстарды қою, дикция, дизартрия",
    icon: svgWrap('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 6 8.38 8.38 0 0 1-3.8-.9L3 21l1.6-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 6-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>')
  },
  delay: {
    ru: "Задержка речи",
    kz: "Сөйлеудің кешігуі",
    ruDesc: "Запуск речи, ЗРР и ЗПРР у детей",
    kzDesc: "Сөйлеуді дамыту, баланың даму ерекшеліктері",
    icon: svgWrap('<path d="M12 21v-9"/><path d="M12 13c0-3.5-2.5-6-7-6 0 4 2.5 6 7 6z"/><path d="M12 10c0-3 2-5.5 6.5-5.5 0 3.5-2.5 5.5-6.5 5.5z"/>')
  },
  autism: {
    ru: "Аутизм (РАС)",
    kz: "Аутизм (АСБ)",
    ruDesc: "ABA-терапия, общение и поддержка семьи",
    kzDesc: "ABA-терапия, қарым-қатынас және отбасын қолдау",
    icon: svgWrap('<path d="M7 9a3 3 0 1 0 0 6c2 0 3.5-1.5 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3.5-1.5-5-3s-3-3-5-3z"/>')
  },
  stutter: {
    ru: "Заикание",
    kz: "Тұтығу",
    ruDesc: "Плавная речь для детей и взрослых",
    kzDesc: "Балалар мен ересектерге арналған бірқалыпты сөйлеу",
    icon: svgWrap('<path d="M2 12h3l2-5 3 10 3-8 2 5 2-2h5"/>')
  },
  adhd: {
    ru: "СДВГ и внимание",
    kz: "СДВГ және зейін",
    ruDesc: "Нейрокоррекция, саморегуляция, усидчивость",
    kzDesc: "Нейрокоррекция, өзін-өзі реттеу, зейінді дамыту",
    icon: svgWrap('<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>')
  },
  aphasia: {
    ru: "Восстановление речи",
    kz: "Сөйлеуді қалпына келтіру",
    ruDesc: "Афазия после инсульта и травм у взрослых",
    kzDesc: "Инсульт пен жарақаттан кейінгі афазия",
    icon: svgWrap('<path d="M20 11a8 8 0 0 0-14.9-3M4 13a8 8 0 0 0 14.9 3"/><path d="M5 3v5h5M19 21v-5h-5"/>')
  },
  aac: {
    ru: "Альтернативная коммуникация",
    kz: "Баламалы коммуникация",
    ruDesc: "PECS, жесты и карточки для неговорящих детей",
    kzDesc: "PECS, ым-ишара және карточкалар",
    icon: svgWrap('<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>')
  }
};

const items = [
  {
    id: 3,
    name: "Мария Ким",
    initials: "МК",
    type: "aba",
    specialty: "Поведенческий аналитик · Дети 2–12 лет",
    detail: "Индивидуальные ABA-программы для детей с РАС: навыки общения, игры и самообслуживание, работа с нежелательным поведением.",
    price: 8500,
    rating: "4,9",
    reviews: 18,
    experience: 6,
    age: ["child"],
    formats: ["online", "offline"],
    needs: ["autism", "aac"],
    dateOffsets: [0, 1, 3],
    color: "sand",
    keywords: "аутизм рас аба поведение терапия прикладной анализ дети коммуникация"
  },
  {
    id: 1,
    name: "Анна Миронова",
    initials: "АМ",
    type: "logoped",
    specialty: "Логопед-дефектолог · Дети от 3 лет",
    detail: "Постановка звуков, развитие связной речи и подготовка к школе. Занятия проходят в игровой форме.",
    price: 6000,
    rating: "5,0",
    reviews: 24,
    experience: 8,
    age: ["child"],
    formats: ["online", "offline"],
    needs: ["sounds", "delay"],
    dateOffsets: [0, 1, 2],
    color: "",
    keywords: "звук р звуки речь постановка звуков дети логопед зрр"
  },
  {
    id: 12,
    name: "Инклюзивный центр «Открытый мир»",
    initials: "",
    type: "center",
    specialty: "Центр поддержки при РАС · Дети и подростки",
    detail: "ABA-программы, сенсорная комната, тьюторское сопровождение и подготовка к школе. Команда специалистов составляет для семьи единый план занятий.",
    price: 10000,
    rating: "4,9",
    reviews: 36,
    age: ["child", "teen"],
    formats: ["offline"],
    needs: ["autism", "aac", "adhd"],
    dateOffsets: [1, 3, 5],
    color: "sky",
    keywords: "центр аутизм рас аба тьютор сенсорная комната инклюзия школа реабилитация"
  },
  {
    id: 15,
    name: "Клуб плавной речи",
    initials: "",
    type: "group",
    specialty: "Группа поддержки · Подростки и взрослые с заиканием",
    detail: "Еженедельные встречи с логопедом и психологом: дыхание, практика разговоров и выступлений в безопасной обстановке.",
    price: 3000,
    rating: "4,9",
    reviews: 28,
    age: ["teen", "adult"],
    formats: ["online"],
    needs: ["stutter"],
    dateOffsets: [1, 2, 5],
    color: "rose",
    keywords: "заикание группа клуб поддержка взрослые подростки логоневроз выступления общение"
  },
  {
    id: 6,
    name: "Алия Нурланова",
    initials: "АН",
    type: "neuro",
    specialty: "Нейропсихолог · Дети и подростки",
    detail: "Нейропсихологическая диагностика и коррекция: внимание, память и саморегуляция при СДВГ и задержке развития.",
    price: 6500,
    rating: "4,9",
    reviews: 27,
    experience: 7,
    age: ["child", "teen"],
    formats: ["online", "offline"],
    needs: ["adhd", "delay"],
    dateOffsets: [0, 3, 6],
    color: "lilac",
    keywords: "сдвг гиперактивность внимание память нейрокоррекция зпр диагностика"
  },
  {
    id: 18,
    name: "Руслан Абенов",
    initials: "РА",
    type: "psych",
    specialty: "Психолог · Подростки и взрослые с РАС и СДВГ",
    detail: "Помогает подросткам и взрослым с аутизмом и СДВГ: навыки общения, учёба и работа, сенсорные перегрузки и самоорганизация.",
    price: 8000,
    rating: "4,9",
    reviews: 17,
    experience: 9,
    age: ["teen", "adult"],
    formats: ["online"],
    needs: ["autism", "adhd"],
    dateOffsets: [0, 1, 4],
    color: "mint",
    keywords: "психолог взрослые аутизм рас сдвг аспергер выгорание общение работа подростки"
  },
  {
    id: 11,
    name: "Центр ранней помощи «Первые слова»",
    initials: "",
    type: "center",
    specialty: "Центр развития · Дети от 1,5 до 7 лет",
    detail: "Комплексная диагностика и занятия с логопедом, дефектологом и психологом в одном месте. Специалисты составляют индивидуальный маршрут развития.",
    price: 9000,
    rating: "4,9",
    reviews: 41,
    age: ["child"],
    formats: ["offline"],
    needs: ["delay", "autism", "sounds"],
    dateOffsets: [0, 1, 2],
    color: "sand",
    keywords: "центр ранняя помощь диагностика комплексная запуск речи зрр зпрр аутизм рас малыши"
  },
  {
    id: 2,
    name: "Елена Соколова",
    initials: "ЕС",
    type: "logoped",
    specialty: "Логопед · Дети и взрослые",
    detail: "Коррекция произношения, дизартрия и работа с дикцией. Помогает говорить чётко и уверенно в любом возрасте.",
    price: 5000,
    rating: "4,9",
    reviews: 32,
    experience: 12,
    age: ["child", "teen", "adult"],
    formats: ["online"],
    needs: ["sounds", "stutter"],
    dateOffsets: [1, 3, 5],
    color: "rose",
    keywords: "произношение дикция речь взрослые дети дизартрия звук р"
  },
  {
    id: 14,
    name: "Группа социальных навыков",
    initials: "",
    type: "group",
    specialty: "Мини-группа до 6 человек · Подростки 11–16 лет",
    detail: "Подростки с РАС и СДВГ учатся знакомиться, поддерживать разговор, договариваться и справляться с конфликтами.",
    price: 4000,
    rating: "4,8",
    reviews: 19,
    age: ["teen"],
    formats: ["offline"],
    needs: ["autism", "adhd"],
    dateOffsets: [1, 4, 7],
    color: "lilac",
    keywords: "группа социальные навыки общение подростки аутизм рас сдвг друзья тренинг"
  },
  {
    id: 5,
    name: "Ольга Петрова",
    initials: "ОП",
    type: "defect",
    specialty: "Дефектолог · Дети от 4 лет",
    detail: "Развитие мышления, внимания и учебных навыков у детей с ЗПР и РАС. Подготовка к школе, чтение и письмо.",
    price: 5500,
    rating: "4,8",
    reviews: 21,
    experience: 9,
    age: ["child"],
    formats: ["offline"],
    needs: ["delay", "autism"],
    dateOffsets: [1, 2, 6],
    color: "rose",
    keywords: "зпр аутизм рас чтение письмо школа олигофренопедагог дети"
  },
  {
    id: 4,
    name: "Динара Ахметова",
    initials: "ДА",
    type: "logoped",
    specialty: "Логопед-афазиолог · Взрослые",
    detail: "Восстановление речи после инсульта и травм, работа с афазией и дизартрией. Консультирует родственников.",
    price: 7000,
    rating: "5,0",
    reviews: 15,
    experience: 10,
    age: ["adult"],
    formats: ["online"],
    needs: ["aphasia", "sounds"],
    dateOffsets: [3, 5, 7],
    color: "lilac",
    keywords: "взрослые восстановление речи инсульт афазия дизартрия дикция"
  },
  {
    id: 16,
    name: "Школа для родителей",
    initials: "",
    type: "group",
    specialty: "Онлайн-встречи · Родители детей с РАС и задержкой речи",
    detail: "Как заниматься дома, вводить карточки и жесты, справляться с истериками и не выгорать. Встречи ведут ABA-терапевт и семейный психолог.",
    price: 3500,
    rating: "5,0",
    reviews: 33,
    age: ["child", "adult"],
    formats: ["online"],
    needs: ["autism", "delay", "aac"],
    dateOffsets: [0, 4, 8],
    color: "sand",
    keywords: "родители школа семья поддержка аутизм рас задержка речи карточки pecs курс мама папа"
  },
  {
    id: 7,
    name: "Тимур Сагинтаев",
    initials: "ТС",
    type: "logoped",
    specialty: "Логопед · Специалист по заиканию",
    detail: "Комплексная работа с заиканием у детей, подростков и взрослых: дыхание, темп речи и уверенность в общении.",
    price: 6000,
    rating: "4,9",
    reviews: 19,
    experience: 11,
    age: ["child", "teen", "adult"],
    formats: ["online"],
    needs: ["stutter", "sounds"],
    dateOffsets: [1, 3, 6],
    color: "sky",
    keywords: "заикание логоневроз запинки темп речи взрослые подростки"
  },
  {
    id: 13,
    name: "Центр восстановления речи «Слово»",
    initials: "",
    type: "center",
    specialty: "Нейрореабилитация · Взрослые",
    detail: "Афазиолог, нейропсихолог и логопед работают в одной команде после инсульта и травм. Есть онлайн-сопровождение и занятия для родственников.",
    price: 8000,
    rating: "4,8",
    reviews: 23,
    age: ["adult"],
    formats: ["online", "offline"],
    needs: ["aphasia", "sounds"],
    dateOffsets: [1, 2, 5],
    color: "mint",
    keywords: "центр инсульт афазия восстановление речи реабилитация взрослые чмт травма дизартрия"
  },
  {
    id: 8,
    name: "Жанна Ибраева",
    initials: "ЖИ",
    type: "sensory",
    specialty: "Специалист по сенсорной интеграции · Дети 2–10 лет",
    detail: "Занятия в сенсорном зале для детей с РАС и СДВГ: моторика, баланс и снижение сенсорной перегрузки.",
    price: 7500,
    rating: "4,8",
    reviews: 14,
    experience: 5,
    age: ["child"],
    formats: ["offline"],
    needs: ["autism", "adhd"],
    dateOffsets: [0, 1, 4],
    color: "mint",
    keywords: "сенсорная интеграция эрготерапия моторика аутизм рас сдвг"
  },
  {
    id: 9,
    name: "Светлана Ли",
    initials: "СЛ",
    type: "psych",
    specialty: "Клинический психолог · Подростки и родители",
    detail: "Консультации для семей детей с РАС и СДВГ: принятие диагноза, эмоциональная поддержка и социальные навыки.",
    price: 9000,
    rating: "5,0",
    reviews: 22,
    experience: 13,
    age: ["teen", "adult"],
    formats: ["online"],
    needs: ["autism", "adhd"],
    dateOffsets: [3, 4, 6],
    color: "rose",
    keywords: "психолог родители семья поддержка аутизм рас сдвг подростки тревога"
  },
  {
    id: 17,
    name: "Клуб общения для взрослых с РАС",
    initials: "",
    type: "group",
    specialty: "Клуб по интересам · Взрослые 18+",
    detail: "Спокойная среда для общения без давления: настольные игры, разговоры о работе и быте, совместные выходы.",
    price: 2500,
    rating: "4,9",
    reviews: 12,
    age: ["adult"],
    formats: ["online", "offline"],
    needs: ["autism"],
    dateOffsets: [1, 4, 7],
    color: "sky",
    keywords: "клуб взрослые аутизм рас аспергер общение друзья встречи поддержка"
  },
  {
    id: 10,
    name: "Асель Тулегенова",
    initials: "АТ",
    type: "defect",
    specialty: "Дефектолог · Специалист по АДК",
    detail: "Запуск речи и альтернативная коммуникация: PECS, жесты и карточки для неговорящих детей.",
    price: 7000,
    rating: "4,9",
    reviews: 16,
    experience: 8,
    age: ["child"],
    formats: ["online", "offline"],
    needs: ["aac", "delay", "autism"],
    dateOffsets: [1, 2, 5],
    color: "sand",
    keywords: "адк pecs пекс карточки жесты неговорящий запуск речи аутизм рас"
  },
  {
    id: 19,
    name: "Дана Ергалиева",
    initials: "ДЕ",
    type: "ergo",
    specialty: "Эрготерапевт · Дети и подростки",
    detail: "Сенсорная моторика, пространственная ориентировка, графомоторные навыки и адаптация к нагрузкам.",
    price: 6500,
    rating: "4,9",
    reviews: 15,
    experience: 7,
    age: ["child", "teen"],
    formats: ["offline"],
    needs: ["autism", "adhd", "delay"],
    dateOffsets: [0, 2, 6],
    color: "lilac",
    keywords: "эрготерапия сенсорная моторика графомоторные навыки аутизм рас сдвг координация"
  }
];

const translations = {
  ru: {
    navDirections: "Направления",
    navCatalog: "Каталог",
    navHow: "Как записаться",
    navReviews: "Отзывы",
    headerCta: "Подобрать помощь",
    myBookings: "Мои записи",
    heroKicker: "Помощь с опорой на особенности",
    heroTitle: "Нарушения речи, аутизм и особенности развития",
    heroSubtitle: "Подберите логопеда, дефектолога, ABA-терапевта, психолога, профильного центра или группу поддержки — в одном каталоге.",
    heroNoteTitle: "Один каталог — разные форматы",
    heroNoteText: "Индивидуальные занятия, очные консультации, онлайн и групповые программы. Можно записаться без регистрации.",
    heroFeature1: "Проверенные специалисты",
    heroFeature2: "Актуальные даты",
    heroFeature3: "Без регистрации",
    directionsTitle: "С чем нужна помощь",
    unsureTitle: "Не знаете, с чего начать?",
    unsureText: "Посмотрите весь каталог — в карточках указано, с какими запросами работают специалисты, центры и группы.",
    unsureCta: "Весь каталог",
    catalogKicker: "Каталог помощи",
    catalogTitle: "Специалисты, центры и группы поддержки",
    catalogSubtitle: "Подбирайте помощь по запросу, возрасту, формату и стоимости. В каталоге есть специалисты разных направлений, комплексные центры и группы для детей, подростков, взрослых и родителей.",
    kindAll: "Всё",
    kindSpecialist: "Специалисты",
    kindCenter: "Центры",
    kindGroup: "Группы и программы",
    allProfiles: "Все профили",
    searchPlaceholder: "Поиск: «аутизм», «заикание», «звук Р», специалист или центр",
    searchAria: "Поиск по каталогу",
    clearSearch: "Очистить поиск",
    filtersTitle: "Фильтры",
    filterShow: "Показать фильтры",
    filterHide: "Скрыть фильтры",
    needLabel: "С чем нужна помощь",
    allNeeds: "Любой запрос",
    needShort: "Запрос",
    toolbarDefault: "Подходящие варианты",
    ageLabel: "Для кого",
    ageAll: "Все",
    ageChild: "Ребёнку",
    ageTeen: "Подростку",
    ageAdult: "Взрослому",
    formatLabel: "Формат",
    priceLabel: "Стоимость",
    availableLabel: "Есть запись сегодня или завтра",
    resetButton: "Сбросить фильтры",
    filtersResetToast: "Фильтры сброшены",
    showMore: "Показать ещё",
    stepsKicker: "Просто и быстро",
    stepsTitle: "Как записаться",
    step1Title: "Выберите направление",
    step1Copy: "Укажите, с чем нужна помощь, или воспользуйтесь поиском и фильтрами, чтобы подобрать подходящего специалиста, центр или группу.",
    step2Title: "Выберите время",
    step2Copy: "Посмотрите ближайшие свободные даты, формат работы и стоимость прямо в карточке.",
    step3Title: "Оставьте контакты",
    step3Copy: "Подтвердите заявку без регистрации. Запись появится в меню «Мои записи» и сохранится на этом устройстве.",
    footerText: "Помощь при нарушениях речи, аутизме и особенностях развития. © 2026",
    totalLabel: "Итого по записям",
    drawerCta: "Записаться ещё",
    popoverTitle: "Мои записи",
    popoverOpenAll: "Открыть все записи",
    popoverEmpty: "Записей пока нет",
    popoverEmptyHint: "Выберите специалиста, центр или группу и удобное время.",
    emptyTitle: "У вас пока нет записей",
    emptyText: "Выберите специалиста, центр или группу и удобное время — запись появится здесь и сохранится на этом устройстве.",
    emptyCta: "Перейти в каталог",
    statusPending: "Ожидает подтверждения",
    statusConfirmed: "Подтверждена",
    cancel: "Отменить",
    cancelConfirm: "Отменить эту запись?",
    cancelYes: "Да, отменить",
    cancelNo: "Оставить",
    cancelledToast: "Запись отменена",
    timeLabel: "Удобное время",
    dateLabel: "Дата",
    timeShort: "Время",
    lessonLabel: "Стоимость",
    doneBtn: "Готово",
    refLabel: "Запись",
    bookedToast: "Заявка отправлена. С вами свяжутся для подтверждения.",
    bookingTitle: "Оформить запись",
    bookingDescription: "Оставьте имя и номер телефона — с вами свяжутся, чтобы подтвердить запись. Регистрация не нужна.",
    yourName: "Ваше имя",
    namePlaceholder: "Как к вам обращаться?",
    nameError: "Введите ваше имя",
    phoneLabel: "Номер телефона",
    phoneError: "Введите корректный номер телефона",
    submitBooking: "Отправить заявку",
    privacyNote: "Нажимая кнопку, вы соглашаетесь на обработку контактных данных для связи по вашей заявке.",
    successTitle: "Заявка отправлена!",
    reviewsTitle: "Отзывы",
    nearbyDates: "Ближайшие даты",
    chooseDate: "Выберите дату"
  },
  kz: {
    navDirections: "Бағыттар",
    navCatalog: "Каталог",
    navHow: "Қалай жазылуға болады",
    navReviews: "Пікірлер",
    headerCta: "Көмек таңдау",
    myBookings: "Менің жазылуларым",
    heroKicker: "Ерекшеліктерге негізделген көмек",
    heroTitle: "Сөйлеу бұзылыстары, аутизм және даму ерекшеліктері",
    heroSubtitle: "Логопед, дефектолог, ABA-терапевт, психолог, мамандық орталық немесе қолдау тобын бір каталогтан таңдаңыз.",
    heroNoteTitle: "Бір каталог — түрлі форматтар",
    heroNoteText: "Жеке сабақтар, офлайн консультациялар, онлайн және топтық бағдарламалар. Тіркелусіз жазылуға болады.",
    heroFeature1: "Тексерілген мамандар",
    heroFeature2: "Соңғы күндер",
    heroFeature3: "Тіркелусіз",
    directionsTitle: "Қандай көмек қажет",
    unsureTitle: "Неден бастарыңызды білмейсіз бе?",
    unsureText: "Бүкіл каталогты қараңыз — әр карточкада маман, орталық және топтың жұмыс бағыттары көрсетілген.",
    unsureCta: "Бүкіл каталог",
    catalogKicker: "Көмек каталогы",
    catalogTitle: "Мамандар, орталықтар және қолдау топтары",
    catalogSubtitle: "Сұрау, жас, формат және баға бойынша көмек таңдаңыз. Балаларға, жасөспірімдерге, ересектерге және ата-аналарға арналған мамандар мен топтар бар.",
    kindAll: "Барлығы",
    kindSpecialist: "Мамандар",
    kindCenter: "Орталықтар",
    kindGroup: "Топтар мен бағдарламалар",
    allProfiles: "Барлық бейіндер",
    searchPlaceholder: "Іздеу: «аутизм», «тұтығу», «Р дыбысы», маман немесе орталық",
    searchAria: "Каталог бойынша іздеу",
    clearSearch: "Іздеуді тазалау",
    filtersTitle: "Сүзгілер",
    filterShow: "Сүзгілерді көрсету",
    filterHide: "Сүзгілерді жасыру",
    needLabel: "Қандай көмек қажет",
    allNeeds: "Кез келген сұрау",
    needShort: "Сұрау",
    toolbarDefault: "Сәйкес нұсқалар",
    ageLabel: "Кімге арналған",
    ageAll: "Барлығы",
    ageChild: "Балаға",
    ageTeen: "Жасөспірімге",
    ageAdult: "Ересекке",
    formatLabel: "Формат",
    priceLabel: "Бағасы",
    availableLabel: "Бүгін немесе ертең бос уақыты бар",
    resetButton: "Сүзгілерді тазалау",
    filtersResetToast: "Сүзгілер тазаланды",
    showMore: "Тағы көрсету",
    stepsKicker: "Оңай әрі жылдам",
    stepsTitle: "Қалай жазылуға болады",
    step1Title: "Бағытты таңдаңыз",
    step1Copy: "Қандай көмек қажет екенін көрсетіңіз немесе іздеу мен сүзгілер арқылы маман, орталық не топ таңдаңыз.",
    step2Title: "Уақытты таңдаңыз",
    step2Copy: "Бос күндерді, жұмыс форматын және бағаны карточкада тікелей қараңыз.",
    step3Title: "Байланыс деректерін қалдырыңыз",
    step3Copy: "Тіркелусіз өтінім жіберіңіз. Жазылу «Менің жазылуларым» мәзірінде сақталады.",
    footerText: "Сөйлеу бұзылыстары, аутизм және даму ерекшеліктері кезіндегі көмек. © 2026",
    totalLabel: "Жазылулар бойынша барлығы",
    drawerCta: "Тағы жазылу",
    popoverTitle: "Менің жазылуларым",
    popoverOpenAll: "Барлық жазылуды ашу",
    popoverEmpty: "Әзірге жазылулар жоқ",
    popoverEmptyHint: "Маман, орталық немесе топты және ыңғайлы уақытты таңдаңыз.",
    emptyTitle: "Әзірге жазылулар жоқ",
    emptyText: "Маман, орталық немесе топты және ыңғайлы уақытты таңдаңыз — жазылуыңыз осында сақталады.",
    emptyCta: "Каталогқа өту",
    statusPending: "Растауды күтуде",
    statusConfirmed: "Расталды",
    cancel: "Болдырмау",
    cancelConfirm: "Осы жазылуды болдырмау керек пе?",
    cancelYes: "Иә, болдырмау",
    cancelNo: "Қалдыру",
    cancelledToast: "Жазылу болдырылды",
    timeLabel: "Ыңғайлы уақыт",
    dateLabel: "Күні",
    timeShort: "Уақыты",
    lessonLabel: "Құны",
    doneBtn: "Дайын",
    refLabel: "Жазылу",
    bookedToast: "Өтінім жіберілді. Растау үшін сізге хабарласады.",
    bookingTitle: "Жазылуды рәсімдеу",
    bookingDescription: "Атыңыз мен телефон нөміріңізді қалдырыңыз — жазылуды растау үшін сізге хабарласады. Тіркелу қажет емес.",
    yourName: "Атыңыз",
    namePlaceholder: "Сізге қалай хабарласамыз?",
    nameError: "Атыңызды енгізіңіз",
    phoneLabel: "Телефон нөмірі",
    phoneError: "Телефон нөмірін дұрыс енгізіңіз",
    submitBooking: "Өтінім жіберу",
    privacyNote: "Түймені басу арқылы өтінім бойынша хабарласу үшін байланыс деректерін өңдеуге келісесіз.",
    successTitle: "Өтінім жіберілді!",
    reviewsTitle: "Пікірлер",
    nearbyDates: "Жақын күндер",
    chooseDate: "Күнді таңдаңыз"
  }
};

const comments = {
  ru: [
    ["Айгуль", "Очень внимательное отношение. Занятия проходят спокойно и с интересом, а первые изменения заметили уже через несколько недель."],
    ["Марина", "Всё объяснили понятно и без спешки, дали рекомендации для дома. Удобно, что можно подобрать время под наш режим."],
    ["Екатерина", "Профессиональный подход и тёплая атмосфера на каждой встрече. Чувствуется, что здесь понимают особенности и не торопят. Спасибо!"]
  ],
  kz: [
    ["Айгүл", "Өте жақсы қарым-қатынас. Сабақтар қызықты өтеді, ал алғашқы өзгерістер бірнеше аптадан кейін байқалды."],
    ["Марина", "Барлығы түсінікті және асықпай түсіндірілді, үйдегі ұсыныстар берілді. Уақытты біздің күнделіктіге қолайлы етіп таңдауға болады."],
    ["Екатерина", "Кәсіби көзқарас пен жылы атмосфера. Ерекшеліктерді түсініп, асықпайтын мамандар. Рақмет!"]
  ]
};

const timeOptions = ["09:00", "10:30", "12:00", "13:30", "15:00", "17:30", "19:00"];
const PAGE_SIZE = 6;
const BOOKINGS_KEY = "my_bookings_v2";
const LEGACY_KEY = "lr_bookings_v1";

let language = "ru";
let visibleCount = PAGE_SIZE;
let searchTerm = "";
let selectedDates = {};
let activeItem = null;
let lastFocus = null;
let drawerLastFocus = null;
let activeKind = "all";
let activeType = "all";
let activeAge = "all";
let selectedTime = timeOptions[1];
let confirmingId = null;

const $ = id => document.getElementById(id);
const t = key => (translations[language] && translations[language][key]) || key;

const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, character => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}[character]));

const plural = (number, forms) => {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n1 === 1 && n !== 11) return forms[0];
  if (n1 >= 2 && n1 <= 4 && (n < 12 || n > 14)) return forms[1];
  return forms[2];
};

const formatPrice = number => new Intl.NumberFormat(language === "ru" ? "ru-RU" : "kk-KZ", {
  maximumFractionDigits: 0
}).format(Number(number) || 0) + " ₸";

const reviewsLabel = number => language === "ru"
  ? `${number} ${plural(number, ["отзыв", "отзыва", "отзывов"])}`
  : `${number} пікір`;

const yearsLabel = number => language === "ru"
  ? `${number} ${plural(number, ["год", "года", "лет"])} опыта`
  : `${number} жыл тәжірибе`;

const optionsLabel = number => language === "ru"
  ? `${number} ${plural(number, ["вариант", "варианта", "вариантов"])}`
  : `${number} нұсқа`;

const formatLabel = format => format === "online"
  ? "Онлайн"
  : language === "ru" ? "Очно" : "Офлайн";

const typeLabel = key => (types[key] && types[key][language]) || "";
const typePluralLabel = key => (types[key] && types[key][language + "Pl"]) || "";
const needLabelOf = key => (needs[key] && needs[key][language]) || "";

const kindLabel = key => t({
  all: "kindAll",
  specialist: "kindSpecialist",
  center: "kindCenter",
  group: "kindGroup"
}[key]);

const sidePriceLabel = key => language === "ru" ? ({
  specialist: "Занятие от",
  center: "Первичный приём от",
  group: "Одна встреча от"
})[key] : ({
  specialist: "Сабақ бағасы",
  center: "Алғашқы қабылдау",
  group: "Бір кездесу"
})[key];

const bookLabel = key => language === "ru" ? ({
  specialist: "Записаться",
  center: "Записаться на приём",
  group: "Записаться в группу"
})[key] : ({
  specialist: "Жазылу",
  center: "Қабылдауға жазылу",
  group: "Топқа жазылу"
})[key];

const verifiedLabel = key => language === "ru" ? ({
  specialist: "Проверенный специалист",
  center: "Проверенный центр",
  group: "Проверенная программа"
})[key] : ({
  specialist: "Тексерілген маман",
  center: "Тексерілген орталық",
  group: "Тексерілген бағдарлама"
})[key];

const avatarInner = (type, initials) => {
  const kind = kindOf(type);
  if (kind === "center") {
    return `<svg width="1.45em" height="1.45em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${centerPath}</svg>`;
  }
  if (kind === "group") {
    return `<svg width="1.45em" height="1.45em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${groupPath}</svg>`;
  }
  return escapeHTML(initials || "—");
};

const arrowSVG = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
`;

const formatSVG = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="m22 8-6 4 6 4V8z"/>
    <rect x="2" y="6" width="13" height="12" rx="2"/>
  </svg>
`;

const calendarSmallSVG = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="17" rx="3"/>
    <path d="M8 2v4M16 2v4M3 10h18"/>
  </svg>
`;

const clockSVG = `
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </svg>
`;

const calendarBigSVG = `
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="17" rx="3"/>
    <path d="M8 2v4M16 2v4M3 10h18"/>
  </svg>
`;

function loadBookings() {
  try {
    const raw = localStorage.getItem(BOOKINGS_KEY);
    if (raw !== null) {
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    }

    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy !== null) {
      try {
        const parsed = JSON.parse(legacy);
        if (Array.isArray(parsed)) {
          const migrated = parsed.map(booking => ({
            ...booking,
            ref: String(booking.ref || "").replace(/^LR-/, "")
          }));
          localStorage.setItem(BOOKINGS_KEY, JSON.stringify(migrated));
          localStorage.removeItem(LEGACY_KEY);
          return migrated;
        }
      } catch (error) {
        localStorage.removeItem(LEGACY_KEY);
      }
    }
  } catch (error) {
    return [];
  }
  return [];
}

let myBookings = loadBookings();

function saveBookings() {
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(myBookings));
  } catch (error) {
    // Каталог и заявка продолжают работать, если хранилище недоступно.
  }
}

function showToast(message) {
  const element = $("toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => element.classList.remove("show"), 3400);
}

function itemDates(item) {
  return item.dateOffsets.map(offset => {
    if (offset === 0) return language === "ru" ? "Сегодня" : "Бүгін";
    if (offset === 1) return language === "ru" ? "Завтра" : "Ертең";
    if (offset === 2) return language === "ru" ? "Послезавтра" : "Ертең";

    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() + offset);
    return date.toLocaleDateString(language === "ru" ? "ru-RU" : "kk-KZ", {
      day: "numeric",
      month: "short"
    }).replace(".", "");
  });
}

function selectedDateIndex(item) {
  const selected = Number(selectedDates[item.id] ?? 0);
  return Math.min(Math.max(selected, 0), item.dateOffsets.length - 1);
}

function fillNeedOptions() {
  const select = $("needFilter");
  const current = select.value || "all";
  select.innerHTML = `<option value="all">${escapeHTML(t("allNeeds"))}</option>` +
    Object.keys(needs).map(key => `<option value="${key}">${escapeHTML(needs[key][language])}</option>`).join("");
  select.value = Object.prototype.hasOwnProperty.call(needs, current) || current === "all" ? current : "all";
}

function renderNeeds() {
  const current = $("needFilter").value;
  $("needGrid").innerHTML = Object.keys(needs).map(key => {
    const need = needs[key];
    const count = items.filter(item => item.needs.includes(key)).length;
    return `
      <button type="button" class="need-card${current === key ? " active" : ""}" data-need="${key}" aria-pressed="${current === key}">
        <span class="need-icon" aria-hidden="true">${need.icon}</span>
        <span class="need-title">${escapeHTML(need[language])}</span>
        <span class="need-desc">${escapeHTML(need[language + "Desc"])}</span>
        <span class="need-count">${escapeHTML(optionsLabel(count))} ${arrowSVG}</span>
      </button>
    `;
  }).join("") + `
    <button type="button" class="need-card unsure" data-need="all">
      <span class="need-icon" aria-hidden="true">${svgWrap('<circle cx="12" cy="12" r="9"/><path d="M9.3 9.2a2.8 2.8 0 0 1 5.4 1c0 1.9-2.7 2.3-2.7 4"/><path d="M12 17.4v.1"/>')}</span>
      <span class="need-title">${escapeHTML(t("unsureTitle"))}</span>
      <span class="need-desc">${escapeHTML(t("unsureText"))}</span>
      <span class="need-count">${escapeHTML(t("unsureCta"))} ${arrowSVG}</span>
    </button>
  `;
}

function clearSearch() {
  searchTerm = "";
  $("searchInput").value = "";
  $("searchClear").hidden = true;
}

function applyNeed(key, options = {}) {
  $("needFilter").value = key;
  if (options.resetType) {
    activeKind = "all";
    activeType = "all";
  }
  if (options.clearSearch) clearSearch();
  visibleCount = PAGE_SIZE;
  renderNeeds();
  renderCatalog();
  if (options.scroll) {
    $("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function getInitialFilters() {
  const params = new URLSearchParams(window.location.search);
  const requestedNeed = params.get("need");
  const requestedAge = params.get("age");
  const requestedFormat = params.get("format");

  return {
    need: requestedNeed && Object.prototype.hasOwnProperty.call(needs, requestedNeed)
      ? requestedNeed
      : "all",
    age: ["child", "teen", "adult"].includes(requestedAge) ? requestedAge : "all",
    format: ["offline", "online"].includes(requestedFormat) ? requestedFormat : "all",
  };
}

$("needGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-need]");
  if (button) {
    applyNeed(button.dataset.need, {
      scroll: true,
      resetType: true,
      clearSearch: true
    });
  }
});

function renderAge() {
  const options = [
    ["all", t("ageAll")],
    ["child", t("ageChild")],
    ["teen", t("ageTeen")],
    ["adult", t("ageAdult")]
  ];
  $("ageSeg").innerHTML = options.map(([key, label]) => `
    <button type="button" class="seg-btn${activeAge === key ? " active" : ""}" data-age="${key}" aria-pressed="${activeAge === key}">${escapeHTML(label)}</button>
  `).join("");
}

function baseItems() {
  const need = $("needFilter").value;
  const format = $("formatFilter").value;
  const price = $("priceFilter").value;
  const query = searchTerm.toLocaleLowerCase("ru-RU").trim();

  const list = items.filter(item => {
    const haystack = [
      item.name,
      item.specialty,
      item.detail,
      item.keywords,
      types[item.type].ru,
      types[item.type].kz,
      ...item.needs.map(key => `${needs[key].ru} ${needs[key].kz}`)
    ].join(" ").toLocaleLowerCase("ru-RU");

    const matchesNeed = need === "all" || item.needs.includes(need);
    const matchesAge = activeAge === "all" || item.age.includes(activeAge);
    const matchesFormat = format === "all" || item.formats.includes(format);
    const matchesPrice = price === "all" || item.price <= Number(price);
    const matchesAvailability = !$("availableFilter").checked ||
      item.dateOffsets.includes(0) || item.dateOffsets.includes(1);
    const matchesSearch = !query || haystack.includes(query);

    return matchesNeed && matchesAge && matchesFormat && matchesPrice && matchesAvailability && matchesSearch;
  });

  if ($("sortSelect").value === "priceAsc") {
    list.sort((a, b) => a.price - b.price);
  }

  if ($("sortSelect").value === "rating") {
    list.sort((a, b) =>
      parseFloat(b.rating.replace(",", ".")) - parseFloat(a.rating.replace(",", ".")) ||
      b.reviews - a.reviews
    );
  }

  return list;
}

function renderTabs(base) {
  $("kindTabs").innerHTML = kinds.map(kind => {
    const count = kind === "all"
      ? base.length
      : base.filter(item => kindOf(item.type) === kind).length;

    return `
      <button type="button" class="type-tab${activeKind === kind ? " active" : ""}${count === 0 && activeKind !== kind ? " dim" : ""}" data-kind="${kind}" aria-pressed="${activeKind === kind}">
        ${kindIcons[kind]}
        <span>${escapeHTML(kindLabel(kind))}</span>
        <i>${count}</i>
      </button>
    `;
  }).join("");

  const subTabs = $("typeTabs");
  subTabs.hidden = activeKind !== "specialist";

  if (!subTabs.hidden) {
    const specialists = base.filter(item => kindOf(item.type) === "specialist");
    const tabs = [
      ["all", t("allProfiles"), specialists.length],
      ...specialistTypes.map(type => [
        type,
        typePluralLabel(type),
        specialists.filter(item => item.type === type).length
      ])
    ];

    subTabs.innerHTML = tabs.map(([key, label, count]) => `
      <button type="button" class="sub-tab${activeType === key ? " active" : ""}${count === 0 && activeType !== key ? " dim" : ""}" data-type="${key}" aria-pressed="${activeType === key}">
        <span>${escapeHTML(label)}</span>
        <i>${count}</i>
      </button>
    `).join("");
  }
}

function updateFilterCount() {
  let count = 0;
  if ($("needFilter").value !== "all") count++;
  if (activeAge !== "all") count++;
  if ($("formatFilter").value !== "all") count++;
  if ($("priceFilter").value !== "all") count++;
  if ($("availableFilter").checked) count++;

  $("filterCount").textContent = count;
  $("filterCount").hidden = count === 0;
}

function renderCatalog() {
  const base = baseItems();
  const list = base.filter(item =>
    (activeKind === "all" || kindOf(item.type) === activeKind) &&
    (activeKind !== "specialist" || activeType === "all" || item.type === activeType)
  );
  const shown = list.slice(0, visibleCount);
  const need = $("needFilter").value;

  renderTabs(base);

  $("resultCount").textContent = language === "ru"
    ? `Найдено: ${list.length}`
    : `Табылды: ${list.length}`;

  $("toolbarText").textContent = need === "all"
    ? t("toolbarDefault")
    : `${t("needShort")}: ${needLabelOf(need)}`;

  $("doctorList").innerHTML = shown.length ? shown.map((item, index) => {
    const kind = kindOf(item.type);
    const dates = itemDates(item);
    const dateIndex = selectedDateIndex(item);

    return `
      <article class="doctor-card" style="animation-delay:${Math.min(index * 35, 210)}ms">
        <div>
          <div class="doctor-main">
            <div class="doctor-photo ${item.color}" aria-hidden="true">${avatarInner(item.type, item.initials)}</div>
            <div class="doctor-info">
              <span class="role-pill ${item.type}">${escapeHTML(typeLabel(item.type))}</span>
              <h3 class="doctor-name">${escapeHTML(item.name)}</h3>
              <p class="doctor-specialty">${escapeHTML(item.specialty)}${item.experience ? " · " + yearsLabel(item.experience) : ""}</p>
              <div class="rating">
                <span class="stars" aria-hidden="true">★★★★★</span>
                <strong>${escapeHTML(item.rating)}</strong>
                <button class="review-link" type="button" data-reviews="${item.id}">${escapeHTML(reviewsLabel(item.reviews))}</button>
              </div>
              <div class="verified">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>
                ${escapeHTML(verifiedLabel(kind))}
              </div>
            </div>
          </div>

          <p class="doctor-detail">${escapeHTML(item.detail)}</p>

          <div class="tag-row">
            ${item.needs.map(key => `
              <button type="button" class="need-tag${need === key ? " active" : ""}" data-need-tag="${key}" aria-pressed="${need === key}">${escapeHTML(needLabelOf(key))}</button>
            `).join("")}
            <span class="format-tag">${formatSVG}${item.formats.map(formatLabel).join(" / ")}</span>
          </div>
        </div>

        <div class="doctor-side">
          <span class="side-label">${escapeHTML(sidePriceLabel(kind))}</span>
          <div class="price">${escapeHTML(formatPrice(item.price))}</div>
          <div class="dates-label">${escapeHTML(t("nearbyDates"))}</div>
          <div class="dates" aria-label="${escapeHTML(t("chooseDate"))}">
            ${dates.map((date, dateItemIndex) => `
              <button type="button" class="date-chip${dateIndex === dateItemIndex ? " selected" : ""}" data-date-item="${item.id}" data-date-index="${dateItemIndex}" aria-pressed="${dateIndex === dateItemIndex}">${escapeHTML(date)}</button>
            `).join("")}
          </div>
          <button class="btn book-btn" type="button" data-book="${item.id}">${escapeHTML(bookLabel(kind))}</button>
        </div>
      </article>
    `;
  }).join("") : `
    <div class="empty-state">
      <strong>${language === "ru" ? "Ничего не найдено" : "Ештеңе табылмады"}</strong>
      ${language === "ru" ? "Попробуйте изменить запрос, выбрать другой раздел или сбросить фильтры." : "Сұрауды өзгертіңіз, басқа бөлімді таңдаңыз немесе сүзгілерді тазалаңыз."}
    </div>
  `;

  $("showMore").hidden = visibleCount >= list.length;
  updateFilterCount();
}

["needFilter", "formatFilter", "priceFilter", "availableFilter", "sortSelect"].forEach(id => {
  $(id).addEventListener("change", () => {
    visibleCount = PAGE_SIZE;
    if (id === "needFilter") renderNeeds();
    renderCatalog();
  });
});

$("ageSeg").addEventListener("click", event => {
  const button = event.target.closest("[data-age]");
  if (!button) return;
  activeAge = button.dataset.age;
  visibleCount = PAGE_SIZE;
  renderAge();
  renderCatalog();
});

$("kindTabs").addEventListener("click", event => {
  const tab = event.target.closest("[data-kind]");
  if (!tab) return;
  activeKind = tab.dataset.kind;
  activeType = "all";
  visibleCount = PAGE_SIZE;
  renderCatalog();
});

$("typeTabs").addEventListener("click", event => {
  const tab = event.target.closest("[data-type]");
  if (!tab) return;
  activeType = tab.dataset.type;
  visibleCount = PAGE_SIZE;
  renderCatalog();
});

$("resetFilters").addEventListener("click", () => {
  ["needFilter", "formatFilter", "priceFilter"].forEach(id => $(id).value = "all");
  $("availableFilter").checked = false;
  clearSearch();
  activeKind = "all";
  activeType = "all";
  activeAge = "all";
  visibleCount = PAGE_SIZE;
  renderAge();
  renderNeeds();
  renderCatalog();
  showToast(t("filtersResetToast"));
});

$("filtersToggle").addEventListener("click", () => {
  const panel = $("filtersPanel");
  const open = panel.classList.toggle("is-open");
  $("filtersToggle").setAttribute("aria-expanded", String(open));
  $("filtersToggle").querySelector("span").textContent = open ? t("filterHide") : t("filterShow");
});

$("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  $("searchInput").blur();
});

$("searchInput").addEventListener("input", event => {
  searchTerm = event.target.value;
  visibleCount = PAGE_SIZE;
  $("searchClear").hidden = !searchTerm;
  renderCatalog();
});

$("searchClear").addEventListener("click", () => {
  clearSearch();
  visibleCount = PAGE_SIZE;
  renderCatalog();
  $("searchInput").focus();
});

$("showMore").addEventListener("click", () => {
  visibleCount += PAGE_SIZE;
  renderCatalog();
});

$("doctorList").addEventListener("click", event => {
  const date = event.target.closest("[data-date-item]");
  if (date) {
    selectedDates[date.dataset.dateItem] = Number(date.dataset.dateIndex);
    renderCatalog();
    return;
  }

  const tag = event.target.closest("[data-need-tag]");
  if (tag) {
    applyNeed($("needFilter").value === tag.dataset.needTag ? "all" : tag.dataset.needTag);
    return;
  }

  const book = event.target.closest("[data-book]");
  if (book) {
    openBooking(items.find(item => item.id === Number(book.dataset.book)));
    return;
  }

  const reviews = event.target.closest("[data-reviews]");
  if (reviews) {
    openReviews(items.find(item => item.id === Number(reviews.dataset.reviews)));
  }
});

function openModal(id) {
  lastFocus = document.activeElement;
  $(id).classList.add("open");
  document.body.classList.add("modal-open");
  const closeButton = $(id).querySelector(".modal-close");
  if (closeButton) closeButton.focus();
}

function closeModals() {
  document.querySelectorAll(".modal-backdrop").forEach(modal => modal.classList.remove("open"));
  if (!$("bookingsDrawer").classList.contains("open")) {
    document.body.classList.remove("modal-open");
  }
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
}

function openBooking(item) {
  if (!item) return;
  activeItem = item;
  selectedTime = timeOptions[1];
  const dates = itemDates(item);
  const chosenDate = dates[selectedDateIndex(item)];

  $("bookingContent").innerHTML = `
    <h2 id="bookingTitle">${escapeHTML(t("bookingTitle"))}</h2>
    <p class="modal-description">${escapeHTML(t("bookingDescription"))}</p>

    <div class="appointment-summary">
      <strong>${escapeHTML(item.name)}</strong>
      <em> · ${escapeHTML(typeLabel(item.type))}</em><br>
      ${escapeHTML(t("dateLabel"))}: ${escapeHTML(chosenDate)} · ${escapeHTML(t("timeShort"))}: <span id="summaryTime">${escapeHTML(selectedTime)}</span><br>
      ${escapeHTML(t("lessonLabel"))}: ${escapeHTML(formatPrice(item.price))}
    </div>

    <form id="bookingForm" novalidate>
      <fieldset class="time-field">
        <legend>${escapeHTML(t("timeLabel"))}</legend>
        <div class="time-chips" id="timeChips">
          ${timeOptions.map(time => `
            <button type="button" class="time-chip${time === selectedTime ? " selected" : ""}" data-time="${time}" aria-pressed="${time === selectedTime}">${time}</button>
          `).join("")}
        </div>
      </fieldset>

      <label class="form-field">
        ${escapeHTML(t("yourName"))}
        <input id="clientName" type="text" autocomplete="name" placeholder="${escapeHTML(t("namePlaceholder"))}" required>
        <span class="form-error">${escapeHTML(t("nameError"))}</span>
      </label>

      <label class="form-field">
        ${escapeHTML(t("phoneLabel"))}
        <input id="clientPhone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+7 (___) ___-__-__" required>
        <span class="form-error">${escapeHTML(t("phoneError"))}</span>
      </label>

      <button class="btn form-submit" type="submit">${escapeHTML(t("submitBooking"))}</button>
      <p class="privacy-note">${escapeHTML(t("privacyNote"))}</p>
    </form>
  `;

  $("bookingForm").addEventListener("submit", submitBooking);

  const phoneInput = $("clientPhone");
  phoneInput.addEventListener("input", event => {
    let digits = event.target.value.replace(/\D/g, "");
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (digits && !digits.startsWith("7")) digits = "7" + digits;
    digits = digits.slice(0, 11);

    let formatted = "";
    if (digits.length) {
      formatted = "+7";
      const local = digits.slice(1);
      if (local.length) formatted += " (" + local.slice(0, 3);
      if (local.length >= 3) formatted += ") " + local.slice(3, 6);
      if (local.length > 6) formatted += "-" + local.slice(6, 8);
      if (local.length > 8) formatted += "-" + local.slice(8, 10);
    }

    event.target.value = formatted;
    event.target.classList.remove("invalid");
  });

  $("clientName").addEventListener("input", event => event.target.classList.remove("invalid"));
  openModal("bookingModal");
}

function submitBooking(event) {
  event.preventDefault();
  const name = $("clientName");
  const phone = $("clientPhone");
  const validName = name.value.trim().length >= 2;
  const validPhone = phone.value.replace(/\D/g, "").length === 11;

  name.classList.toggle("invalid", !validName);
  phone.classList.toggle("invalid", !validPhone);

  if (!validName || !validPhone) {
    (!validName ? name : phone).focus();
    return;
  }

  const item = activeItem;
  const dates = itemDates(item);
  const ref = Date.now().toString(36).toUpperCase().slice(-4) + "-" +
    Math.floor(Math.random() * 90 + 10);

  myBookings.unshift({
    id: Date.now(),
    ref,
    doctorId: item.id,
    doctorName: item.name,
    initials: item.initials || "",
    color: item.color || "",
    type: item.type,
    formats: item.formats.slice(),
    date: dates[selectedDateIndex(item)],
    time: selectedTime,
    price: item.price,
    clientName: name.value.trim(),
    status: "pending",
    createdAt: Date.now()
  });

  saveBookings();
  updateBookingsBadge(true);
  renderBookingsPopover();

  $("bookingContent").innerHTML = `
    <div class="success">
      <div class="success-icon">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>
      </div>
      <h2 id="bookingTitle">${escapeHTML(t("successTitle"))}</h2>
      <p>
        ${language === "ru"
          ? `${escapeHTML(name.value.trim())}, спасибо! Заявка передана: ${escapeHTML(item.name)}. С вами свяжутся по номеру ${escapeHTML(phone.value)}, чтобы подтвердить запись.`
          : `${escapeHTML(name.value.trim())}, рақмет! Өтініміңіз жіберілді: ${escapeHTML(item.name)}. Жазылуды растау үшін ${escapeHTML(phone.value)} нөміріне хабарласады.`}
      </p>
      <div class="booking-ref">${escapeHTML(t("refLabel"))} № ${escapeHTML(ref)}</div>
      <div class="success-actions">
        <button type="button" class="btn" data-view-bookings>${escapeHTML(t("myBookings"))}</button>
        <button type="button" class="outline-btn" data-close>${escapeHTML(t("doneBtn"))}</button>
      </div>
    </div>
  `;

  showToast(t("bookedToast"));
}

$("bookingContent").addEventListener("click", event => {
  const chip = event.target.closest("[data-time]");
  if (chip) {
    selectedTime = chip.dataset.time;
    const summary = $("summaryTime");
    if (summary) summary.textContent = selectedTime;
    $("bookingContent").querySelectorAll(".time-chip").forEach(timeChip => {
      const active = timeChip === chip;
      timeChip.classList.toggle("selected", active);
      timeChip.setAttribute("aria-pressed", String(active));
    });
    return;
  }

  if (event.target.closest("[data-view-bookings]")) {
    closeModals();
    openBookingsDrawer();
  }
});

function openReviews(item) {
  if (!item) return;
  $("reviewsTitle").textContent = `${t("reviewsTitle")}: ${item.name}`;
  $("reviewsDescription").textContent = `${typeLabel(item.type)} · ${item.rating} ${language === "ru" ? "из 5" : "/ 5"} · ${reviewsLabel(item.reviews)}`;
  $("reviewsContent").innerHTML = comments[language].map(([name, text]) => `
    <div class="review-item">
      <strong>${escapeHTML(name)}</strong>
      <span class="stars" aria-hidden="true">★★★★★</span>
      <p>${escapeHTML(text)}</p>
    </div>
  `).join("");
  openModal("reviewsModal");
}

document.querySelectorAll(".modal-backdrop").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal || event.target.closest("[data-close]")) closeModals();
  });
});

function bookingsTotalSum() {
  return myBookings.reduce((sum, booking) => sum + (Number(booking.price) || 0), 0);
}

function updateBookingsBadge(bump) {
  const badge = $("bookingsBadge");
  const mobileBadge = $("mobileBookingsBadge");
  badge.textContent = myBookings.length;
  mobileBadge.textContent = myBookings.length;
  badge.hidden = myBookings.length === 0;
  mobileBadge.hidden = myBookings.length === 0;

  if (bump && !badge.hidden) {
    badge.classList.remove("bump");
    void badge.offsetWidth;
    badge.classList.add("bump");
  }

  $("drawerCount").textContent = myBookings.length;
  $("bookingsTotal").textContent = formatPrice(bookingsTotalSum());
  $("popoverCount").textContent = myBookings.length;
  $("popoverTotal").textContent = formatPrice(bookingsTotalSum());
  $("drawerFoot").hidden = myBookings.length === 0;
  $("bookingsBtn").setAttribute("aria-label", `${t("myBookings")}: ${myBookings.length}`);
}

function renderBookings() {
  const listElement = $("bookingsList");

  if (!myBookings.length) {
    listElement.innerHTML = `
      <div class="bookings-empty">
        ${calendarBigSVG}
        <strong>${escapeHTML(t("emptyTitle"))}</strong>
        <p>${escapeHTML(t("emptyText"))}</p>
        <button type="button" class="btn" data-empty-cta>${escapeHTML(t("emptyCta"))}</button>
      </div>
    `;
  } else {
    listElement.innerHTML = myBookings.map(booking => {
      const isConfirmed = booking.status === "confirmed";
      const confirming = String(confirmingId) === String(booking.id);
      const source = items.find(item => item.id === Number(booking.doctorId));
      const type = booking.type || (source && source.type) || "logoped";
      const role = typeLabel(type);
      const formatsText = Array.isArray(booking.formats) && booking.formats.length
        ? booking.formats.map(formatLabel).join(" / ")
        : booking.formatText || formatLabel("online");

      return `
        <article class="booking-card" data-booking-id="${escapeHTML(booking.id)}">
          <div class="booking-top">
            <div class="booking-avatar ${escapeHTML(booking.color || "")}" aria-hidden="true">${avatarInner(type, booking.initials)}</div>
            <div class="booking-doc-wrap">
              <div class="booking-doc">${escapeHTML(booking.doctorName)}</div>
              ${role ? `<div class="booking-role">${escapeHTML(role)}</div>` : ""}
              <div class="booking-spec">${escapeHTML(t("refLabel"))} № ${escapeHTML(booking.ref || "—")}</div>
            </div>
            <span class="status-pill ${isConfirmed ? "status-confirmed" : "status-pending"}">${escapeHTML(isConfirmed ? t("statusConfirmed") : t("statusPending"))}</span>
          </div>

          <div class="booking-meta">
            <span class="meta-chip">${calendarSmallSVG}${escapeHTML(booking.date)}</span>
            <span class="meta-chip">${clockSVG}${escapeHTML(booking.time)}</span>
            <span class="meta-chip">${formatSVG}${escapeHTML(formatsText)}</span>
          </div>

          <div class="booking-foot">
            <div class="booking-price">
              ${escapeHTML(formatPrice(booking.price))}
              <small>${escapeHTML(t("lessonLabel"))}</small>
            </div>
            <button type="button" class="link-danger" data-cancel>${escapeHTML(t("cancel"))}</button>
          </div>

          ${confirming ? `
            <div class="confirm-row">
              <span>${escapeHTML(t("cancelConfirm"))}</span>
              <span class="confirm-actions">
                <button type="button" class="confirm-yes" data-cancel-yes>${escapeHTML(t("cancelYes"))}</button>
                <button type="button" class="confirm-no" data-cancel-no>${escapeHTML(t("cancelNo"))}</button>
              </span>
            </div>
          ` : ""}
        </article>
      `;
    }).join("");
  }

  updateBookingsBadge(false);
}

function renderBookingsPopover() {
  const listElement = $("popoverList");
  const recent = myBookings.slice(0, 3);

  if (!recent.length) {
    listElement.innerHTML = `
      <div class="popover-empty">
        <div class="popover-empty-icon">
          <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 10h18"/></svg>
        </div>
        <strong>${escapeHTML(t("popoverEmpty"))}</strong>
        <p>${escapeHTML(t("popoverEmptyHint"))}</p>
      </div>
    `;
  } else {
    listElement.innerHTML = recent.map(booking => `
      <button class="popover-booking" type="button" data-popover-booking="${escapeHTML(booking.id)}">
        <span class="popover-booking-icon" aria-hidden="true">${calendarSmallSVG}</span>
        <span>
          <span class="popover-booking-name">${escapeHTML(booking.doctorName)}</span>
          <span class="popover-booking-meta">
            <span>${escapeHTML(booking.date)}</span>
            <span>·</span>
            <span>${escapeHTML(booking.time)}</span>
          </span>
        </span>
      </button>
    `).join("");
  }

  updateBookingsBadge(false);
}

function closeBookingsPopover() {
  $("bookingsPopover").hidden = true;
  $("bookingsBtn").setAttribute("aria-expanded", "false");
}

function openBookingsDrawer() {
  closeBookingsPopover();
  drawerLastFocus = document.activeElement;
  confirmingId = null;
  renderBookings();
  $("bookingsDrawer").classList.add("open");
  document.body.classList.add("modal-open");
  $("drawerClose").focus();
}

function closeBookingsDrawer() {
  $("bookingsDrawer").classList.remove("open");
  if (!document.querySelector(".modal-backdrop.open")) {
    document.body.classList.remove("modal-open");
  }
  confirmingId = null;
  if (drawerLastFocus && document.contains(drawerLastFocus)) drawerLastFocus.focus();
}

$("bookingsBtn").addEventListener("click", event => {
  event.stopPropagation();
  const willOpen = $("bookingsPopover").hidden;
  if (willOpen) {
    renderBookingsPopover();
    $("bookingsPopover").hidden = false;
    $("bookingsBtn").setAttribute("aria-expanded", "true");
  } else {
    closeBookingsPopover();
  }
});

$("popoverOpenAll").addEventListener("click", openBookingsDrawer);

$("popoverList").addEventListener("click", event => {
  if (event.target.closest("[data-popover-booking]")) openBookingsDrawer();
});

document.addEventListener("click", event => {
  if (!$("bookingsMenu").contains(event.target)) closeBookingsPopover();
});

$("footerBookings").addEventListener("click", openBookingsDrawer);
$("drawerClose").addEventListener("click", closeBookingsDrawer);

$("bookingsDrawer").addEventListener("click", event => {
  if (event.target === $("bookingsDrawer")) closeBookingsDrawer();
});

$("drawerCta").addEventListener("click", () => {
  closeBookingsDrawer();
  $("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("bookingsList").addEventListener("click", event => {
  if (event.target.closest("[data-empty-cta]")) {
    closeBookingsDrawer();
    $("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const card = event.target.closest("[data-booking-id]");
  if (!card) return;
  const id = card.dataset.bookingId;

  if (event.target.closest("[data-cancel]")) {
    confirmingId = id;
    renderBookings();
    return;
  }

  if (event.target.closest("[data-cancel-yes]")) {
    myBookings = myBookings.filter(booking => String(booking.id) !== String(id));
    confirmingId = null;
    saveBookings();
    renderBookings();
    renderBookingsPopover();
    showToast(t("cancelledToast"));
    return;
  }

  if (event.target.closest("[data-cancel-no]")) {
    confirmingId = null;
    renderBookings();
  }
});

const menuIcon = `
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </svg>
`;

const closeIcon = `
  <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true">
    <path d="m6 6 12 12M18 6 6 18"/>
  </svg>
`;

function setMenu(open) {
  $("mainNav").classList.toggle("open", open);
  $("menuToggle").setAttribute("aria-expanded", String(open));
  $("menuToggle").setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  $("menuToggle").innerHTML = open ? closeIcon : menuIcon;
}

$("menuToggle").addEventListener("click", () => {
  setMenu(!$("mainNav").classList.contains("open"));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    setMenu(false);
    document.querySelectorAll(".nav a").forEach(navLink => navLink.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelectorAll("[data-open-bookings]").forEach(button => {
  button.addEventListener("click", () => {
    setMenu(false);
    openBookingsDrawer();
  });
});

$("navReviews").addEventListener("click", event => {
  event.preventDefault();
  $("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => openReviews(items[0]), 300);
});

$("homeLink").addEventListener("click", event => {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const headerElement = $("siteHeader");
window.addEventListener("scroll", () => {
  headerElement.classList.toggle("scrolled", window.scrollY > 8);
}, { passive: true });

function setLanguage(lang) {
  language = lang;
  document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  document.title = lang === "ru"
    ? "Каталог специалистов, центров и групп поддержки"
    : "Мамандар, орталықтар және қолдау топтары каталогы";

  $("langRu").classList.toggle("selected", lang === "ru");
  $("langKz").classList.toggle("selected", lang === "kz");
  $("langRu").setAttribute("aria-pressed", String(lang === "ru"));
  $("langKz").setAttribute("aria-pressed", String(lang === "kz"));

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = translations[lang][element.dataset.i18n];
    if (value) element.textContent = value;
  });

  $("searchInput").placeholder = t("searchPlaceholder");
  $("searchInput").setAttribute("aria-label", t("searchAria"));
  $("searchClear").setAttribute("aria-label", t("clearSearch"));

  const optionSets = lang === "ru" ? {
    format: ["Любой формат", "Онлайн", "Очно"],
    price: ["Любая стоимость", "До 4 000 ₸", "До 6 000 ₸", "До 8 000 ₸"],
    sort: ["По рекомендациям", "Сначала дешевле", "По рейтингу"]
  } : {
    format: ["Кез келген формат", "Онлайн", "Офлайн"],
    price: ["Кез келген баға", "4 000 ₸ дейін", "6 000 ₸ дейін", "8 000 ₸ дейін"],
    sort: ["Ұсыныстар бойынша", "Арзанынан бастап", "Рейтинг бойынша"]
  };

  [["formatFilter", optionSets.format], ["priceFilter", optionSets.price], ["sortSelect", optionSets.sort]].forEach(([id, labels]) => {
    Array.from($(id).options).forEach((option, index) => {
      option.textContent = labels[index];
    });
  });

  fillNeedOptions();
  renderAge();
  renderNeeds();
  renderCatalog();
  renderBookings();
  renderBookingsPopover();

  const filtersOpen = $("filtersPanel").classList.contains("is-open");
  $("filtersToggle").querySelector("span").textContent = filtersOpen ? t("filterHide") : t("filterShow");
}

$("langRu").addEventListener("click", () => setLanguage("ru"));
$("langKz").addEventListener("click", () => setLanguage("kz"));

function trapFocus(event, container) {
  if (event.key !== "Tab") return;
  const focusable = Array.from(container.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(element => element.offsetParent !== null);

  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if ($("bookingsDrawer").classList.contains("open")) {
      closeBookingsDrawer();
    } else if (document.querySelector(".modal-backdrop.open")) {
      closeModals();
    } else if (!$("bookingsPopover").hidden) {
      closeBookingsPopover();
      $("bookingsBtn").focus();
    } else if ($("mainNav").classList.contains("open")) {
      setMenu(false);
      $("menuToggle").focus();
    }
    return;
  }

  if (event.key === "Tab") {
    if ($("bookingsDrawer").classList.contains("open")) {
      trapFocus(event, $("bookingsDrawer").querySelector(".drawer"));
    } else {
      const modal = document.querySelector(".modal-backdrop.open .modal");
      if (modal) trapFocus(event, modal);
    }
  }
});

setLanguage("ru");
const initialFilters = getInitialFilters();
activeAge = initialFilters.age;
$("formatFilter").value = initialFilters.format;
renderAge();
applyNeed(initialFilters.need, {
  resetType: true,
  clearSearch: true
});

const initialParams = new URLSearchParams(window.location.search);
const shouldOpenCatalog = window.location.hash === "#catalog" ||
  ["need", "age", "format"].some(key => initialParams.has(key));

if (shouldOpenCatalog) {
  const scrollToCatalog = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        $("catalog").scrollIntoView({ behavior: "auto", block: "start" });
      });
    });
  };

  if (document.readyState === "complete") {
    scrollToCatalog();
  } else {
    window.addEventListener("load", scrollToCatalog, { once: true });
  }
}
