const STORAGE_KEY = "chronicle-of-realm-state-v1";

const defaultState = {
  activeCharacterId: 1,
  nextIds: {
    character: 4,
    task: 1000,
    habit: 2000,
    quest: 3000,
  },
  team: [
    {
      id: 1,
      name: "Властитель Фокуса",
      role: "Работа и ключевые проекты",
      rank: "Молодой сенешаль",
      icon: "⚔",
      level: 2,
      xp: 42,
      gold: 95,
      streak: 4,
      tasksDone: 0,
      habitsKept: 0,
      upgradesBought: 0,
      journal: "",
      stats: {
        Сила: 4,
        Учёность: 7,
        Дисциплина: 6,
        Харизма: 3,
      },
      tasks: [
        {
          id: 101,
          title: "90 минут глубокой работы над главным проектом",
          meta: "Утренний совет • 45 опыта • 20 золота",
          xp: 45,
          gold: 20,
          done: false,
        },
        {
          id: 102,
          title: "Разобрать входящие и составить план до вечера",
          meta: "Канцелярия • 25 опыта • 12 золота",
          xp: 25,
          gold: 12,
          done: false,
        },
        {
          id: 103,
          title: "Подвести итоги дня и выбрать 1 приоритет на завтра",
          meta: "Ночная летопись • 20 опыта • 10 золота",
          xp: 20,
          gold: 10,
          done: false,
        },
      ],
      habits: [
        { id: 201, title: "Не открывать соцсети до первой задачи", streak: 4, positiveXp: 14, negativeXp: -12 },
        { id: 202, title: "Читать 20 минут профильную литературу", streak: 8, positiveXp: 15, negativeXp: -10 },
      ],
      bigQuests: [
        {
          id: 301,
          title: "Собрать военный план недели",
          description: "Закрой 2 дела совета и докажи устойчивую дисциплину.",
          requirements: { tasksDone: 2, habitsKept: 0, minStats: { Сила: 0, Учёность: 7, Дисциплина: 6, Харизма: 0 } },
          rewards: { xp: 90, gold: 45 },
          claimed: false,
        },
        {
          id: 302,
          title: "Укрепить столичный архив",
          description: "Стабилизируй ритуалы и накопи базовую серию привычек.",
          requirements: { tasksDone: 0, habitsKept: 2, minStats: { Сила: 0, Учёность: 7, Дисциплина: 0, Харизма: 0 } },
          rewards: { xp: 70, gold: 35 },
          claimed: false,
        },
      ],
    },
    {
      id: 2,
      name: "Хранитель Формы",
      role: "Тело, энергия и режим",
      rank: "Страж бастиона",
      icon: "🛡",
      level: 1,
      xp: 58,
      gold: 68,
      streak: 3,
      tasksDone: 0,
      habitsKept: 0,
      upgradesBought: 0,
      journal: "",
      stats: {
        Сила: 7,
        Учёность: 3,
        Дисциплина: 5,
        Харизма: 4,
      },
      tasks: [
        {
          id: 111,
          title: "Сделать тренировку или 8 000 шагов",
          meta: "Полевой смотр • 35 опыта • 18 золота",
          xp: 35,
          gold: 18,
          done: false,
        },
        {
          id: 112,
          title: "Приготовить нормальный приём пищи без перекусов на бегу",
          meta: "Кухни замка • 25 опыта • 12 золота",
          xp: 25,
          gold: 12,
          done: false,
        },
      ],
      habits: [
        { id: 211, title: "Лечь спать до 23:30", streak: 5, positiveXp: 13, negativeXp: -10 },
        { id: 212, title: "Пить воду в течение дня", streak: 6, positiveXp: 10, negativeXp: -6 },
      ],
      bigQuests: [
        {
          id: 311,
          title: "Подготовка к походу",
          description: "Подтверди силу и телесную устойчивость двумя действиями дня.",
          requirements: { tasksDone: 2, habitsKept: 0, minStats: { Сила: 7, Учёность: 0, Дисциплина: 5, Харизма: 0 } },
          rewards: { xp: 85, gold: 40 },
          claimed: false,
        },
      ],
    },
    {
      id: 3,
      name: "Магистр Бытия",
      role: "Дом, финансы и личный порядок",
      rank: "Смотритель казны",
      icon: "✦",
      level: 1,
      xp: 24,
      gold: 120,
      streak: 6,
      tasksDone: 0,
      habitsKept: 0,
      upgradesBought: 0,
      journal: "",
      stats: {
        Сила: 3,
        Учёность: 5,
        Дисциплина: 7,
        Харизма: 5,
      },
      tasks: [
        {
          id: 121,
          title: "Разобрать один бытовой хвост или участок дома",
          meta: "Домашняя палата • 30 опыта • 14 золота",
          xp: 30,
          gold: 14,
          done: false,
        },
        {
          id: 122,
          title: "Зафиксировать расходы и обновить бюджет",
          meta: "Казна • 28 опыта • 16 золота",
          xp: 28,
          gold: 16,
          done: false,
        },
      ],
      habits: [
        { id: 221, title: "10 минут вечернего порядка", streak: 10, positiveXp: 12, negativeXp: -8 },
        { id: 222, title: "Проверять бюджет без избегания", streak: 4, positiveXp: 16, negativeXp: -11 },
      ],
      bigQuests: [
        {
          id: 321,
          title: "Устроить процветающий двор",
          description: "Собери сочетание порядка, казны и устойчивой дисциплины.",
          requirements: { tasksDone: 1, habitsKept: 2, minStats: { Сила: 0, Учёность: 0, Дисциплина: 7, Харизма: 5 } },
          rewards: { xp: 95, gold: 55 },
          claimed: false,
        },
      ],
    },
  ],
  shop: [
    {
      id: 1,
      stat: "Сила",
      title: "Тренировочный двор",
      description: "Повышает устойчивость и темп выполнения сложных дел.",
      cost: 30,
    },
    {
      id: 2,
      stat: "Учёность",
      title: "Архив писцов",
      description: "Ускоряет рост через обучение и глубокую работу.",
      cost: 35,
    },
    {
      id: 3,
      stat: "Дисциплина",
      title: "Железный распорядок",
      description: "Укрепляет серии привычек и большие квесты.",
      cost: 40,
    },
    {
      id: 4,
      stat: "Харизма",
      title: "Дворцовое присутствие",
      description: "Добавляет лёгкость в общение и личные договорённости.",
      cost: 25,
    },
  ],
};

const state = loadState();

const rankTitles = [
  "Молодой сенешаль",
  "Надёжный управитель",
  "Верховный хранитель",
  "Повелитель державы",
  "Августейший правитель",
];

const elements = {
  team: document.querySelector("#team"),
  tasks: document.querySelector("#tasks"),
  habits: document.querySelector("#habits"),
  stats: document.querySelector("#stats"),
  shop: document.querySelector("#shop"),
  bigQuests: document.querySelector("#big-quests"),
  editor: document.querySelector("#editor"),
  xpFill: document.querySelector("#xp-fill"),
  xpPill: document.querySelector("#xp-pill"),
  goldPill: document.querySelector("#gold-pill"),
  levelPill: document.querySelector("#level-pill"),
  progressCopy: document.querySelector("#progress-copy"),
  streakCopy: document.querySelector("#streak-copy"),
  tasksDone: document.querySelector("#tasks-done"),
  habitsKept: document.querySelector("#habits-kept"),
  upgradesBought: document.querySelector("#upgrades-bought"),
  disciplineScore: document.querySelector("#discipline-score"),
  questSummary: document.querySelector("#quest-summary"),
  rankLabel: document.querySelector("#rank-label"),
  heroTitle: document.querySelector("#hero-title"),
  heroCopy: document.querySelector("#hero-copy"),
  characterName: document.querySelector("#character-name"),
  characterRole: document.querySelector("#character-role"),
  portraitIcon: document.querySelector("#portrait-icon"),
  journal: document.querySelector("#journal"),
};

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function withDefaults(saved) {
  const merged = deepClone(defaultState);
  if (!saved || typeof saved !== "object") return merged;

  merged.activeCharacterId = saved.activeCharacterId || merged.activeCharacterId;
  merged.nextIds = { ...merged.nextIds, ...(saved.nextIds || {}) };
  merged.shop = Array.isArray(saved.shop) && saved.shop.length ? saved.shop : merged.shop;
  merged.team = Array.isArray(saved.team) && saved.team.length ? saved.team : merged.team;

  merged.team = merged.team.map((character) => ({
    ...character,
    journal: character.journal || "",
    tasks: Array.isArray(character.tasks) ? character.tasks : [],
    habits: Array.isArray(character.habits) ? character.habits : [],
    bigQuests: Array.isArray(character.bigQuests) ? character.bigQuests : [],
    stats: {
      Сила: 0,
      Учёность: 0,
      Дисциплина: 0,
      Харизма: 0,
      ...(character.stats || {}),
    },
  }));

  if (!merged.team.some((member) => member.id === merged.activeCharacterId)) {
    merged.activeCharacterId = merged.team[0]?.id || 1;
  }

  return merged;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return deepClone(defaultState);
    return withDefaults(JSON.parse(raw));
  } catch {
    return deepClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function mutateAndRender(mutator) {
  mutator();
  saveState();
  render();
}

function getActiveCharacter() {
  return state.team.find((member) => member.id === state.activeCharacterId);
}

function nextId(kind) {
  const id = state.nextIds[kind];
  state.nextIds[kind] += 1;
  return id;
}

function rankForLevel(level) {
  return rankTitles[Math.min(rankTitles.length - 1, Math.max(0, level - 1))];
}

function xpNeeded(level) {
  return 100 + (level - 1) * 35;
}

function awardProgress(character, xp, gold) {
  character.xp += xp;
  character.gold += gold;

  while (character.xp >= xpNeeded(character.level)) {
    character.xp -= xpNeeded(character.level);
    character.level += 1;
    character.gold += 25;
  }

  character.rank = rankForLevel(character.level);
}

function penalizeProgress(character, xpPenalty) {
  character.xp = Math.max(0, character.xp + xpPenalty);
  character.streak = Math.max(0, character.streak - 1);
}

function toggleTask(taskId) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const task = character.tasks.find((entry) => entry.id === taskId);
    if (!task) return;

    if (task.done) {
      task.done = false;
      character.xp = Math.max(0, character.xp - task.xp);
      character.gold = Math.max(0, character.gold - task.gold);
      character.tasksDone = Math.max(0, character.tasksDone - 1);
    } else {
      task.done = true;
      awardProgress(character, task.xp, task.gold);
      character.tasksDone += 1;
      character.streak += 1;
    }
  });
}

function scoreHabit(habitId, direction) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const habit = character.habits.find((entry) => entry.id === habitId);
    if (!habit) return;

    if (direction === "up") {
      habit.streak += 1;
      character.habitsKept += 1;
      character.streak += 1;
      awardProgress(character, habit.positiveXp, 8);
    } else {
      habit.streak = Math.max(0, habit.streak - 1);
      penalizeProgress(character, habit.negativeXp);
    }
  });
}

function buyUpgrade(itemId) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const item = state.shop.find((entry) => entry.id === itemId);
    if (!item || character.gold < item.cost) return;

    character.gold -= item.cost;
    character.stats[item.stat] += 1;
    character.upgradesBought += 1;
  });
}

function normalizeQuestRequirements(requirements = {}) {
  return {
    tasksDone: Number(requirements.tasksDone) || 0,
    habitsKept: Number(requirements.habitsKept) || 0,
    minStats: {
      Сила: Number(requirements.minStats?.Сила) || 0,
      Учёность: Number(requirements.minStats?.Учёность) || 0,
      Дисциплина: Number(requirements.minStats?.Дисциплина) || 0,
      Харизма: Number(requirements.minStats?.Харизма) || 0,
    },
  };
}

function isQuestReady(character, quest) {
  const requirements = normalizeQuestRequirements(quest.requirements);
  const tasksReady = character.tasksDone >= requirements.tasksDone;
  const habitsReady = character.habitsKept >= requirements.habitsKept;
  const statsReady = Object.entries(requirements.minStats).every(
    ([stat, value]) => character.stats[stat] >= value
  );
  return tasksReady && habitsReady && statsReady;
}

function claimBigQuest(questId) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const quest = character.bigQuests.find((entry) => entry.id === questId);
    if (!quest || quest.claimed || !isQuestReady(character, quest)) return;

    quest.claimed = true;
    awardProgress(character, quest.rewards.xp, quest.rewards.gold);
    character.streak += 2;
  });
}

function renderTeam() {
  elements.team.innerHTML = state.team
    .map(
      (member) => `
        <button class="team-card ${member.id === state.activeCharacterId ? "active" : ""}" data-character-id="${member.id}">
          <div class="team-icon">${member.icon}</div>
          <div class="team-copy">
            <strong>${member.name}</strong>
            <span>${member.role}</span>
          </div>
        </button>
      `
    )
    .join("");
}

function renderTasks(character) {
  elements.tasks.innerHTML = character.tasks
    .map(
      (task) => `
        <article class="task-card ${task.done ? "done" : ""}">
          <button class="task-check" data-task-id="${task.id}" aria-label="Переключить задачу"></button>
          <div>
            <h4 class="task-title">${task.title}</h4>
            <p class="task-meta">${task.meta}</p>
          </div>
          <div class="task-reward">
            <strong>+${task.xp} опыта</strong><br />
            <span>+${task.gold} золота</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderHabits(character) {
  elements.habits.innerHTML = character.habits
    .map(
      (habit) => `
        <article class="habit-card">
          <div class="habit-head">
            <div>
              <h4>${habit.title}</h4>
              <p class="habit-meta">Серия ${habit.streak} дней</p>
            </div>
            <div class="habit-actions">
              <button class="habit-action positive" data-habit-id="${habit.id}" data-direction="up">Соблюдено</button>
              <button class="habit-action negative" data-habit-id="${habit.id}" data-direction="down">Сорвано</button>
            </div>
          </div>
          <p class="heading-note">Награда: +${habit.positiveXp} опыта • Штраф: ${habit.negativeXp} опыта</p>
        </article>
      `
    )
    .join("");
}

function renderStats(character) {
  elements.stats.innerHTML = Object.entries(character.stats)
    .map(
      ([name, value]) => `
        <div class="stat-row">
          <div>
            <p class="section-label">${name}</p>
            <strong>${value}</strong>
          </div>
          <span class="stat-value">${Math.round(value * 1.5)}%</span>
        </div>
      `
    )
    .join("");
}

function renderShop(character) {
  elements.shop.innerHTML = state.shop
    .map(
      (item) => `
        <article class="shop-item">
          <div>
            <p class="section-label">${item.stat}</p>
            <h4>${item.title}</h4>
            <p class="heading-note">${item.description}</p>
          </div>
          <button data-shop-id="${item.id}" ${character.gold < item.cost ? "disabled" : ""}>
            Улучшить за ${item.cost} золота
          </button>
        </article>
      `
    )
    .join("");
}

function questRequirementLine(character, quest) {
  const requirements = normalizeQuestRequirements(quest.requirements);
  return [
    `дел: ${character.tasksDone}/${requirements.tasksDone}`,
    `привычек: ${character.habitsKept}/${requirements.habitsKept}`,
    ...Object.entries(requirements.minStats).map(
      ([stat, value]) => `${stat.toLowerCase()}: ${character.stats[stat]}/${value}`
    ),
  ].join(" • ");
}

function renderBigQuests(character) {
  elements.bigQuests.innerHTML = character.bigQuests
    .map((quest) => {
      const ready = isQuestReady(character, quest);
      return `
        <article class="big-quest ${quest.claimed ? "claimed" : ready ? "ready" : ""}">
          <div class="big-quest-head">
            <div>
              <p class="section-label">Большой квест</p>
              <h4>${quest.title}</h4>
            </div>
            <span class="quest-state">${
              quest.claimed ? "Выполнен" : ready ? "Готов к сдаче" : "В процессе"
            }</span>
          </div>
          <p class="big-quest-copy">${quest.description}</p>
          <p class="heading-note">${questRequirementLine(character, quest)}</p>
          <div class="big-quest-foot">
            <span>Награда: +${quest.rewards.xp} опыта • +${quest.rewards.gold} золота</span>
            <button data-big-quest-id="${quest.id}" ${!ready || quest.claimed ? "disabled" : ""}>
              ${quest.claimed ? "Завершено" : "Получить награду"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function numberInput(label, name, value, min = 0) {
  return `
    <div class="editor-field">
      <label>${label}</label>
      <input type="number" name="${name}" min="${min}" value="${value}" />
    </div>
  `;
}

function textInput(label, name, value, wide = false) {
  return `
    <div class="${wide ? "editor-field-wide" : "editor-field"}">
      <label>${label}</label>
      <input type="text" name="${name}" value="${value}" />
    </div>
  `;
}

function renderEditor(character) {
  elements.editor.innerHTML = `
    <section class="editor-stack">
      <article class="editor-card">
        <h4>Профиль активного персонажа</h4>
        <form id="character-form" class="editor-subgrid">
          ${textInput("Имя", "name", character.name)}
          ${textInput("Сфера жизни", "role", character.role)}
          ${textInput("Иконка", "icon", character.icon)}
          ${textInput("Ранг", "rank", character.rank)}
          ${numberInput("Уровень", "level", character.level, 1)}
          ${numberInput("Опыт", "xp", character.xp)}
          ${numberInput("Золото", "gold", character.gold)}
          ${numberInput("Серия дней", "streak", character.streak)}
          ${numberInput("Сила", "strength", character.stats.Сила)}
          ${numberInput("Учёность", "learning", character.stats.Учёность)}
          ${numberInput("Дисциплина", "discipline", character.stats.Дисциплина)}
          ${numberInput("Харизма", "charisma", character.stats.Харизма)}
          <div class="editor-field-wide editor-actions">
            <button class="editor-button" type="submit">Сохранить профиль</button>
            <button class="editor-button secondary" type="button" id="create-character">Добавить персонажа</button>
            <button class="editor-button danger" type="button" id="delete-character" ${
              state.team.length <= 1 ? "disabled" : ""
            }>Удалить персонажа</button>
            <button class="editor-button secondary" type="button" id="reset-state">Сбросить всё</button>
          </div>
        </form>
      </article>

      <article class="editor-card">
        <h4>Добавить задачу</h4>
        <form id="task-create-form" class="editor-subgrid">
          ${textInput("Название", "title", "")}
          ${textInput("Короткая подпись", "meta", "")}
          ${numberInput("Опыт", "xp", 20)}
          ${numberInput("Золото", "gold", 10)}
          <div class="editor-field-wide editor-actions">
            <button class="editor-button" type="submit">Создать задачу</button>
          </div>
        </form>
        <div id="task-editor-list" class="editor-list"></div>
      </article>
    </section>

    <section class="editor-stack">
      <article class="editor-card">
        <h4>Добавить привычку</h4>
        <form id="habit-create-form" class="editor-subgrid">
          ${textInput("Название", "title", "", true)}
          ${numberInput("Стартовая серия", "streak", 0)}
          ${numberInput("Награда опыта", "positiveXp", 12)}
          ${numberInput("Штраф опыта", "negativeXp", -8)}
          <div class="editor-field-wide editor-actions">
            <button class="editor-button" type="submit">Создать привычку</button>
          </div>
        </form>
        <div id="habit-editor-list" class="editor-list"></div>
      </article>

      <article class="editor-card">
        <h4>Добавить большой квест</h4>
        <form id="quest-create-form" class="editor-subgrid">
          ${textInput("Название", "title", "", true)}
          <div class="editor-field-wide">
            <label>Описание</label>
            <textarea name="description"></textarea>
          </div>
          ${numberInput("Нужно дел", "tasksDone", 1)}
          ${numberInput("Нужно привычек", "habitsKept", 0)}
          ${numberInput("Мин. сила", "strength", 0)}
          ${numberInput("Мин. учёность", "learning", 0)}
          ${numberInput("Мин. дисциплина", "discipline", 0)}
          ${numberInput("Мин. харизма", "charisma", 0)}
          ${numberInput("Награда опыта", "rewardXp", 60)}
          ${numberInput("Награда золота", "rewardGold", 25)}
          <div class="editor-field-wide editor-actions">
            <button class="editor-button" type="submit">Создать большой квест</button>
          </div>
        </form>
        <div id="quest-editor-list" class="editor-list"></div>
      </article>
    </section>
  `;

  document.querySelector("#task-editor-list").innerHTML = character.tasks
    .map(
      (task) => `
        <form class="editor-item editor-subgrid" data-edit-kind="task" data-id="${task.id}">
          <div class="editor-item-head editor-field-wide">
            <strong>Задача</strong>
            <div class="editor-inline-actions">
              <button type="submit">Сохранить</button>
              <button class="danger" type="button" data-delete-kind="task" data-id="${task.id}">Удалить</button>
            </div>
          </div>
          ${textInput("Название", "title", task.title)}
          ${textInput("Подпись", "meta", task.meta)}
          ${numberInput("Опыт", "xp", task.xp)}
          ${numberInput("Золото", "gold", task.gold)}
          <label class="editor-checkbox editor-field-wide">
            <input type="checkbox" name="done" ${task.done ? "checked" : ""} />
            Отмечена как выполненная
          </label>
        </form>
      `
    )
    .join("");

  document.querySelector("#habit-editor-list").innerHTML = character.habits
    .map(
      (habit) => `
        <form class="editor-item editor-subgrid" data-edit-kind="habit" data-id="${habit.id}">
          <div class="editor-item-head editor-field-wide">
            <strong>Привычка</strong>
            <div class="editor-inline-actions">
              <button type="submit">Сохранить</button>
              <button class="danger" type="button" data-delete-kind="habit" data-id="${habit.id}">Удалить</button>
            </div>
          </div>
          ${textInput("Название", "title", habit.title, true)}
          ${numberInput("Серия", "streak", habit.streak)}
          ${numberInput("Награда опыта", "positiveXp", habit.positiveXp)}
          ${numberInput("Штраф опыта", "negativeXp", habit.negativeXp)}
        </form>
      `
    )
    .join("");

  document.querySelector("#quest-editor-list").innerHTML = character.bigQuests
    .map((quest) => {
      const requirements = normalizeQuestRequirements(quest.requirements);
      return `
        <form class="editor-item editor-subgrid" data-edit-kind="quest" data-id="${quest.id}">
          <div class="editor-item-head editor-field-wide">
            <strong>Большой квест</strong>
            <div class="editor-inline-actions">
              <button type="submit">Сохранить</button>
              <button class="danger" type="button" data-delete-kind="quest" data-id="${quest.id}">Удалить</button>
            </div>
          </div>
          ${textInput("Название", "title", quest.title, true)}
          <div class="editor-field-wide">
            <label>Описание</label>
            <textarea name="description">${quest.description}</textarea>
          </div>
          ${numberInput("Нужно дел", "tasksDone", requirements.tasksDone)}
          ${numberInput("Нужно привычек", "habitsKept", requirements.habitsKept)}
          ${numberInput("Мин. сила", "strength", requirements.minStats.Сила)}
          ${numberInput("Мин. учёность", "learning", requirements.minStats.Учёность)}
          ${numberInput("Мин. дисциплина", "discipline", requirements.minStats.Дисциплина)}
          ${numberInput("Мин. харизма", "charisma", requirements.minStats.Харизма)}
          ${numberInput("Награда опыта", "rewardXp", quest.rewards.xp)}
          ${numberInput("Награда золота", "rewardGold", quest.rewards.gold)}
          <label class="editor-checkbox editor-field-wide">
            <input type="checkbox" name="claimed" ${quest.claimed ? "checked" : ""} />
            Награда уже получена
          </label>
        </form>
      `;
    })
    .join("");
}

function renderSummary(character) {
  const needed = xpNeeded(character.level);
  const percent = Math.round((character.xp / needed) * 100);
  const completedTasks = character.tasks.filter((task) => task.done).length;

  elements.xpFill.style.width = `${percent}%`;
  elements.xpPill.textContent = `${character.xp} / ${needed}`;
  elements.goldPill.textContent = `${character.gold} золота`;
  elements.levelPill.textContent = `${character.level}`;
  elements.progressCopy.textContent = `${percent}%`;
  elements.streakCopy.textContent = `Серия ${character.streak} дней`;
  elements.tasksDone.textContent = `${character.tasksDone}`;
  elements.habitsKept.textContent = `${character.habitsKept}`;
  elements.upgradesBought.textContent = `${character.upgradesBought}`;
  elements.disciplineScore.textContent = `${character.stats.Дисциплина}`;
  elements.questSummary.textContent = `${completedTasks}/${character.tasks.length} закрыто`;
  elements.rankLabel.textContent = character.rank;
  elements.heroTitle.textContent = `${character.name} ведёт свою кампанию дня`;
  elements.heroCopy.textContent = `${character.role}. У этого персонажа свои задачи, привычки, валюта и большие квесты.`;
  elements.characterName.textContent = character.name;
  elements.characterRole.textContent = character.role;
  elements.portraitIcon.textContent = character.icon;
  elements.journal.value = character.journal || "";
}

function getFormData(form) {
  return new FormData(form);
}

function asNumber(formData, key, fallback = 0) {
  const value = Number(formData.get(key));
  return Number.isFinite(value) ? value : fallback;
}

function upsertCharacterFromForm(form) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const data = getFormData(form);
    character.name = String(data.get("name") || "").trim() || "Новый герой";
    character.role = String(data.get("role") || "").trim() || "Новая сфера жизни";
    character.icon = String(data.get("icon") || "").trim() || "✦";
    character.level = Math.max(1, asNumber(data, "level", character.level));
    character.xp = Math.max(0, asNumber(data, "xp", character.xp));
    character.gold = Math.max(0, asNumber(data, "gold", character.gold));
    character.streak = Math.max(0, asNumber(data, "streak", character.streak));
    character.stats.Сила = Math.max(0, asNumber(data, "strength", character.stats.Сила));
    character.stats.Учёность = Math.max(0, asNumber(data, "learning", character.stats.Учёность));
    character.stats.Дисциплина = Math.max(0, asNumber(data, "discipline", character.stats.Дисциплина));
    character.stats.Харизма = Math.max(0, asNumber(data, "charisma", character.stats.Харизма));
    const manualRank = String(data.get("rank") || "").trim();
    character.rank = manualRank || rankForLevel(character.level);
  });
}

function createCharacter() {
  mutateAndRender(() => {
    const id = nextId("character");
    state.team.push({
      id,
      name: "Новый персонаж",
      role: "Новая сфера жизни",
      rank: "Молодой сенешаль",
      icon: "✦",
      level: 1,
      xp: 0,
      gold: 0,
      streak: 0,
      tasksDone: 0,
      habitsKept: 0,
      upgradesBought: 0,
      journal: "",
      stats: { Сила: 1, Учёность: 1, Дисциплина: 1, Харизма: 1 },
      tasks: [],
      habits: [],
      bigQuests: [],
    });
    state.activeCharacterId = id;
  });
}

function deleteActiveCharacter() {
  if (state.team.length <= 1) return;
  mutateAndRender(() => {
    const index = state.team.findIndex((member) => member.id === state.activeCharacterId);
    state.team.splice(index, 1);
    state.activeCharacterId = state.team[Math.max(0, index - 1)].id;
  });
}

function resetAllState() {
  const fresh = deepClone(defaultState);
  Object.keys(state).forEach((key) => delete state[key]);
  Object.assign(state, fresh);
  saveState();
  render();
}

function createTask(form) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const data = getFormData(form);
    character.tasks.unshift({
      id: nextId("task"),
      title: String(data.get("title") || "").trim() || "Новая задача",
      meta: String(data.get("meta") || "").trim() || "Совет дня",
      xp: Math.max(0, asNumber(data, "xp", 20)),
      gold: Math.max(0, asNumber(data, "gold", 10)),
      done: false,
    });
  });
}

function updateTask(form, id) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const task = character.tasks.find((entry) => entry.id === id);
    if (!task) return;
    const data = getFormData(form);
    task.title = String(data.get("title") || "").trim() || task.title;
    task.meta = String(data.get("meta") || "").trim() || task.meta;
    task.xp = Math.max(0, asNumber(data, "xp", task.xp));
    task.gold = Math.max(0, asNumber(data, "gold", task.gold));
    task.done = data.get("done") === "on";
  });
}

function deleteTask(id) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    character.tasks = character.tasks.filter((entry) => entry.id !== id);
  });
}

function createHabit(form) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const data = getFormData(form);
    character.habits.unshift({
      id: nextId("habit"),
      title: String(data.get("title") || "").trim() || "Новая привычка",
      streak: Math.max(0, asNumber(data, "streak", 0)),
      positiveXp: Math.max(0, asNumber(data, "positiveXp", 12)),
      negativeXp: Math.min(0, asNumber(data, "negativeXp", -8)),
    });
  });
}

function updateHabit(form, id) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const habit = character.habits.find((entry) => entry.id === id);
    if (!habit) return;
    const data = getFormData(form);
    habit.title = String(data.get("title") || "").trim() || habit.title;
    habit.streak = Math.max(0, asNumber(data, "streak", habit.streak));
    habit.positiveXp = Math.max(0, asNumber(data, "positiveXp", habit.positiveXp));
    habit.negativeXp = Math.min(0, asNumber(data, "negativeXp", habit.negativeXp));
  });
}

function deleteHabit(id) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    character.habits = character.habits.filter((entry) => entry.id !== id);
  });
}

function questFromData(data, fallback = {}) {
  return {
    title: String(data.get("title") || fallback.title || "").trim() || "Новый большой квест",
    description: String(data.get("description") || fallback.description || "").trim() || "Опиши дальнюю кампанию этого героя.",
    requirements: {
      tasksDone: Math.max(0, asNumber(data, "tasksDone", fallback.requirements?.tasksDone || 0)),
      habitsKept: Math.max(0, asNumber(data, "habitsKept", fallback.requirements?.habitsKept || 0)),
      minStats: {
        Сила: Math.max(0, asNumber(data, "strength", fallback.requirements?.minStats?.Сила || 0)),
        Учёность: Math.max(0, asNumber(data, "learning", fallback.requirements?.minStats?.Учёность || 0)),
        Дисциплина: Math.max(0, asNumber(data, "discipline", fallback.requirements?.minStats?.Дисциплина || 0)),
        Харизма: Math.max(0, asNumber(data, "charisma", fallback.requirements?.minStats?.Харизма || 0)),
      },
    },
    rewards: {
      xp: Math.max(0, asNumber(data, "rewardXp", fallback.rewards?.xp || 60)),
      gold: Math.max(0, asNumber(data, "rewardGold", fallback.rewards?.gold || 25)),
    },
    claimed: data.get("claimed") === "on",
  };
}

function createQuest(form) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const data = getFormData(form);
    character.bigQuests.unshift({
      id: nextId("quest"),
      ...questFromData(data),
    });
  });
}

function updateQuest(form, id) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    const quest = character.bigQuests.find((entry) => entry.id === id);
    if (!quest) return;
    const data = getFormData(form);
    Object.assign(quest, questFromData(data, quest));
  });
}

function deleteQuest(id) {
  mutateAndRender(() => {
    const character = getActiveCharacter();
    character.bigQuests = character.bigQuests.filter((entry) => entry.id !== id);
  });
}

function attachEvents() {
  elements.team.addEventListener("click", (event) => {
    const button = event.target.closest("[data-character-id]");
    if (!button) return;
    mutateAndRender(() => {
      state.activeCharacterId = Number(button.dataset.characterId);
    });
  });

  elements.tasks.addEventListener("click", (event) => {
    const button = event.target.closest("[data-task-id]");
    if (!button) return;
    toggleTask(Number(button.dataset.taskId));
  });

  elements.habits.addEventListener("click", (event) => {
    const button = event.target.closest("[data-habit-id]");
    if (!button) return;
    scoreHabit(Number(button.dataset.habitId), button.dataset.direction);
  });

  elements.shop.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shop-id]");
    if (!button) return;
    buyUpgrade(Number(button.dataset.shopId));
  });

  elements.bigQuests.addEventListener("click", (event) => {
    const button = event.target.closest("[data-big-quest-id]");
    if (!button) return;
    claimBigQuest(Number(button.dataset.bigQuestId));
  });

  elements.journal.addEventListener("input", (event) => {
    const character = getActiveCharacter();
    character.journal = event.target.value;
    saveState();
  });

  elements.editor.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.id === "character-form") return upsertCharacterFromForm(form);
    if (form.id === "task-create-form") return createTask(form);
    if (form.id === "habit-create-form") return createHabit(form);
    if (form.id === "quest-create-form") return createQuest(form);

    const kind = form.dataset.editKind;
    const id = Number(form.dataset.id);
    if (kind === "task") return updateTask(form, id);
    if (kind === "habit") return updateHabit(form, id);
    if (kind === "quest") return updateQuest(form, id);
  });

  elements.editor.addEventListener("click", (event) => {
    const deleteButton = event.target.closest("[data-delete-kind]");
    if (deleteButton) {
      const id = Number(deleteButton.dataset.id);
      const kind = deleteButton.dataset.deleteKind;
      if (kind === "task") return deleteTask(id);
      if (kind === "habit") return deleteHabit(id);
      if (kind === "quest") return deleteQuest(id);
    }

    if (event.target.closest("#create-character")) return createCharacter();
    if (event.target.closest("#delete-character")) return deleteActiveCharacter();
    if (event.target.closest("#reset-state")) return resetAllState();
  });
}

function render() {
  const character = getActiveCharacter();
  renderTeam();
  renderTasks(character);
  renderHabits(character);
  renderStats(character);
  renderShop(character);
  renderBigQuests(character);
  renderEditor(character);
  renderSummary(character);
}

attachEvents();
saveState();
render();
