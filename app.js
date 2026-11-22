const exercises = [
  {
    id: 'inhala-exhala',
    title: 'Inhalar y exhalar',
    level: 'básico',
    durationLabel: '2 min',
    cycles: 6,
    description: 'Ejercicio base para reconocer respiración baja sin levantar hombros ni pecho.',
    cue: 'Inhala relajado y suelta el aire silenciosamente, como si empañaras un vidrio muy fino.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Abdomen suave hacia afuera. Hombros quietos.' },
      { name: 'Exhala', seconds: 6, type: 'exhale', instruction: 'Suelta el aire sin apretar garganta.' }
    ]
  },
  {
    id: 's',
    title: 'Exhalación con S',
    level: 'control',
    durationLabel: '3 min',
    cycles: 6,
    description: 'Controla el flujo del aire usando una S constante y fina. La reina del canto, básicamente.',
    cue: 'Haz una S continua: sssss. Mantén presión estable, no explosiva.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Toma aire bajo, sin inflar pecho.' },
      { name: 'S', seconds: 8, type: 'exhale', instruction: 'Sostén una S pareja hasta el final.' }
    ]
  },
  {
    id: 'ch',
    title: 'Exhalación con CH',
    level: 'articulación',
    durationLabel: '3 min',
    cycles: 6,
    description: 'Activa soporte y precisión con un flujo más marcado, útil para ataques limpios.',
    cue: 'Haz CH continuo: chhhhh. Mantén mandíbula suelta.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Abdomen responde, cuello libre.' },
      { name: 'CH', seconds: 7, type: 'exhale', instruction: 'Exhala con CH parejo, sin endurecer la lengua.' }
    ]
  },
  {
    id: 'f',
    title: 'Exhalación con F',
    level: 'control',
    durationLabel: '3 min',
    cycles: 6,
    description: 'Entrena aire delgado y sostenido para frases largas.',
    cue: 'Haz F continua: fffff. El aire sale pequeño, no como escape de llanta dramática.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Costillas y abdomen suaves. Nada de hombros.' },
      { name: 'F', seconds: 9, type: 'exhale', instruction: 'Mantén la F estable y ligera.' }
    ]
  },
  {
    id: 'j',
    title: 'Exhalación con J',
    level: 'articulación',
    durationLabel: '2 min',
    cycles: 5,
    description: 'Trabaja salida de aire amplia y sensación de garganta libre.',
    cue: 'Haz J suave: jjjjj. Debe sentirse abierto, no forzado.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Toma aire cómodo.' },
      { name: 'J', seconds: 7, type: 'exhale', instruction: 'Exhala con J suave, sin raspar garganta.' }
    ]
  },
  {
    id: 'r',
    title: 'Exhalación con R',
    level: 'articulación',
    durationLabel: '3 min',
    cycles: 5,
    description: 'Coordina aire y lengua con R sostenida o vibrante según capacidad del estudiante.',
    cue: 'Haz R o ere vibrante. Si no sale, usa una R suave sin pelearte con tu lengua.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Respira bajo y relaja mandíbula.' },
      { name: 'R', seconds: 6, type: 'exhale', instruction: 'Permite vibración sin empujar aire de más.' },
      { name: 'Descansa', seconds: 2, type: 'rest', instruction: 'Suelta tensión de lengua y labios.' }
    ]
  },
  {
    id: 'v',
    title: 'Exhalación con V',
    level: 'control',
    durationLabel: '3 min',
    cycles: 6,
    description: 'Conecta aire con vibración ligera en labios y dientes, ideal antes de vocalizar.',
    cue: 'Haz V continua: vvvvv. Busca vibración suave, sin morder.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Abdomen activo, hombros quietos.' },
      { name: 'V', seconds: 8, type: 'exhale', instruction: 'Sostén la V con vibración constante.' }
    ]
  },
  {
    id: 'br',
    title: 'Sonido BR / lip trill',
    level: 'control',
    durationLabel: '3 min',
    cycles: 5,
    description: 'Activa flujo de aire y relajación labial. Muy útil antes de cantar melodías.',
    cue: 'Haz BR con labios vibrando. Si se corta, reduce presión de aire.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Toma aire bajo, sin tensión facial.' },
      { name: 'BR', seconds: 7, type: 'exhale', instruction: 'Deja vibrar los labios con aire constante.' },
      { name: 'Descansa', seconds: 2, type: 'rest', instruction: 'Relaja mejillas y mandíbula.' }
    ]
  },
  {
    id: 'pausa',
    title: 'Inhalar, pausar y exhalar',
    level: 'control',
    durationLabel: '3 min',
    cycles: 6,
    description: 'Entrena estabilidad antes de iniciar una frase cantada.',
    cue: 'La pausa no es apretar. Es suspender el aire con calma.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Aire bajo, cuerpo tranquilo.' },
      { name: 'Pausa', seconds: 2, type: 'hold', instruction: 'Sostén sin cerrar garganta ni subir hombros.' },
      { name: 'Exhala', seconds: 7, type: 'exhale', instruction: 'Suelta el aire largo y estable.' }
    ]
  },
  {
    id: 'pausa-s',
    title: 'Inhalar, pausar y exhalar con S',
    level: 'reto',
    durationLabel: '4 min',
    cycles: 6,
    description: 'Combina preparación, suspensión y control de aire con S sostenida.',
    cue: 'Pausa tranquila y S estable. Ni pelea, ni drama, ni garganta secuestrada.',
    phases: [
      { name: 'Inhala', seconds: 4, type: 'inhale', instruction: 'Abdomen se expande suave.' },
      { name: 'Pausa', seconds: 3, type: 'hold', instruction: 'Mantén apertura. No aprietes.' },
      { name: 'S', seconds: 10, type: 'exhale', instruction: 'S constante hasta el final.' },
      { name: 'Descansa', seconds: 2, type: 'rest', instruction: 'Recupera sin jadear.' }
    ]
  },
  {
    id: 'escalera-s',
    title: 'Escalera de S',
    level: 'reto',
    durationLabel: '5 min',
    cycles: 1,
    description: 'Reto progresivo: cada ciclo aumenta la exhalación con S para medir control.',
    cue: 'No gana quien sufre más. Gana quien mantiene la S limpia.',
    variable: true,
    phases: []
  },
  {
    id: 'pulso-ch',
    title: 'Pulsos con CH',
    level: 'articulación',
    durationLabel: '2 min',
    cycles: 8,
    description: 'Entrena activación rápida del apoyo con pequeñas expulsiones controladas.',
    cue: 'Haz CH cortos: CH-CH-CH-CH. El abdomen acompaña, la garganta no manda.',
    phases: [
      { name: 'Inhala', seconds: 3, type: 'inhale', instruction: 'Aire cómodo y bajo.' },
      { name: 'CH pulsos', seconds: 6, type: 'pulse', instruction: 'Haz pulsos CH regulares, sin levantar pecho.' },
      { name: 'Descansa', seconds: 2, type: 'rest', instruction: 'Suelta abdomen y mandíbula.' }
    ]
  },
  {
    id: 'frase-cantada',
    title: 'Respirar para una frase',
    level: 'reto',
    durationLabel: '4 min',
    cycles: 5,
    description: 'Simula la preparación antes de cantar una frase musical larga.',
    cue: 'Respira, pausa y exhala como si cantaras una frase sin gastar todo al inicio.',
    phases: [
      { name: 'Prepara', seconds: 2, type: 'rest', instruction: 'Mira el punto de inicio de la frase.' },
      { name: 'Inhala', seconds: 3, type: 'inhale', instruction: 'Toma aire útil, no excesivo.' },
      { name: 'Pausa', seconds: 1, type: 'hold', instruction: 'Organiza el inicio.' },
      { name: 'Exhala', seconds: 12, type: 'exhale', instruction: 'Dosifica el aire como si cantaras una frase larga.' }
    ]
  }
];

const recommendedRoutine = ['inhala-exhala', 's', 'f', 'pausa-s', 'br'];

const state = {
  routine: [],
  currentRoutineIndex: 0,
  exercise: null,
  phaseIndex: 0,
  cycle: 1,
  running: false,
  phaseStartedAt: null,
  elapsedBeforePause: 0,
  sound: true,
  stats: JSON.parse(localStorage.getItem('respiraCantoStats') || '{"sessions":0,"seconds":0,"cycles":0}')
};

const els = {
  soundToggle: document.getElementById('soundToggle'),
  startRecommended: document.getElementById('startRecommended'),
  buildRoutine: document.getElementById('buildRoutine'),
  exerciseTitle: document.getElementById('exerciseTitle'),
  exerciseLevel: document.getElementById('exerciseLevel'),
  exerciseDescription: document.getElementById('exerciseDescription'),
  phaseInstruction: document.getElementById('phaseInstruction'),
  soundCue: document.getElementById('soundCue'),
  postureVisual: document.getElementById('postureVisual'),
  postureCue: document.getElementById('postureCue'),
  abdomenDirection: document.getElementById('abdomenDirection'),
  timerOrb: document.getElementById('timerOrb'),
  phaseName: document.getElementById('phaseName'),
  timeLeft: document.getElementById('timeLeft'),
  cycleCounter: document.getElementById('cycleCounter'),
  phaseTimeline: document.getElementById('phaseTimeline'),
  playPauseBtn: document.getElementById('playPauseBtn'),
  resetBtn: document.getElementById('resetBtn'),
  nextBtn: document.getElementById('nextBtn'),
  exerciseCards: document.getElementById('exerciseCards'),
  template: document.getElementById('exerciseCardTemplate'),
  sessionMinutes: document.getElementById('sessionMinutes'),
  completedCycles: document.getElementById('completedCycles'),
  totalSessions: document.getElementById('totalSessions'),
  routineBuilder: document.getElementById('routineBuilder'),
  closeRoutine: document.getElementById('closeRoutine'),
  routineOptions: document.getElementById('routineOptions'),
  selectedRoutine: document.getElementById('selectedRoutine'),
  startCustomRoutine: document.getElementById('startCustomRoutine'),
  clearRoutine: document.getElementById('clearRoutine'),
  librarySection: document.getElementById('librarySection')
};

let audioCtx;
let frameId;
let sessionStartTime = null;
let selectedIds = new Set();

function getExerciseById(id) {
  return exercises.find(exercise => exercise.id === id);
}

function getPhases(exercise) {
  if (!exercise.variable) return exercise.phases;

  const exhaleTimes = [6, 8, 10, 12, 14, 16];
  return exhaleTimes.flatMap((seconds, index) => [
    { name: `Inhala ${index + 1}`, seconds: 4, type: 'inhale', instruction: 'Respira bajo y prepara una S limpia.' },
    { name: `S ${seconds}s`, seconds, type: 'exhale', instruction: `Sostén la S durante ${seconds} segundos sin romper el flujo.` },
    { name: 'Descansa', seconds: 2, type: 'rest', instruction: 'Recupera sin levantar hombros.' }
  ]);
}

function getTotalSeconds(exercise) {
  return getPhases(exercise).reduce((total, phase) => total + phase.seconds, 0) * exercise.cycles;
}

function formatDuration(seconds) {
  const minutes = Math.max(1, Math.round(seconds / 60));
  return `${minutes} min`;
}

function beep(freq = 660, duration = 0.08, type = 'sine') {
  if (!state.sound) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.18, audioCtx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration + 0.02);
  } catch (error) {
    console.warn('Audio no disponible:', error);
  }
}

function renderCards(filter = 'todos') {
  els.exerciseCards.innerHTML = '';
  const filtered = filter === 'todos' ? exercises : exercises.filter(exercise => exercise.level === filter);

  filtered.forEach(exercise => {
    const node = els.template.content.cloneNode(true);
    const button = node.querySelector('.exercise-card');
    button.dataset.id = exercise.id;
    node.querySelector('.card-tag').textContent = exercise.level;
    node.querySelector('h3').textContent = exercise.title;
    node.querySelector('p').textContent = exercise.description;
    const meta = node.querySelectorAll('.card-meta span');
    meta[0].textContent = exercise.durationLabel || formatDuration(getTotalSeconds(exercise));
    meta[1].textContent = `${exercise.cycles} ciclo${exercise.cycles === 1 ? '' : 's'}`;
    button.addEventListener('click', () => loadSingleExercise(exercise.id));
    els.exerciseCards.appendChild(node);
  });
}

function renderRoutineOptions() {
  els.routineOptions.innerHTML = '';
  exercises.forEach(exercise => {
    const label = document.createElement('label');
    label.className = 'routine-option';
    label.innerHTML = `
      <input type="checkbox" value="${exercise.id}" ${selectedIds.has(exercise.id) ? 'checked' : ''} />
      <span><strong>${exercise.title}</strong><small>${exercise.level} · ${exercise.durationLabel || formatDuration(getTotalSeconds(exercise))}</small></span>
    `;
    const input = label.querySelector('input');
    input.addEventListener('change', () => {
      if (input.checked) selectedIds.add(exercise.id);
      else selectedIds.delete(exercise.id);
      renderSelectedRoutine();
    });
    els.routineOptions.appendChild(label);
  });
  renderSelectedRoutine();
}

function renderSelectedRoutine() {
  els.selectedRoutine.innerHTML = '';
  [...selectedIds].forEach(id => {
    const exercise = getExerciseById(id);
    const li = document.createElement('li');
    li.textContent = exercise.title;
    els.selectedRoutine.appendChild(li);
  });

  if (selectedIds.size === 0) {
    const li = document.createElement('li');
    li.textContent = 'Aún no has elegido ejercicios.';
    els.selectedRoutine.appendChild(li);
  }
}

function loadSingleExercise(id) {
  state.routine = [id];
  state.currentRoutineIndex = 0;
  loadExercise(id);
  document.getElementById('practicePanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function loadRoutine(ids) {
  state.routine = ids;
  state.currentRoutineIndex = 0;
  loadExercise(ids[0]);
  document.getElementById('practicePanel').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function loadExercise(id) {
  stopTimer();
  const exercise = getExerciseById(id);
  state.exercise = exercise;
  state.phaseIndex = 0;
  state.cycle = 1;
  state.elapsedBeforePause = 0;
  sessionStartTime = null;

  els.exerciseTitle.textContent = exercise.title;
  els.exerciseLevel.textContent = exercise.level;
  els.exerciseDescription.textContent = exercise.description;
  els.soundCue.textContent = exercise.cue;
  els.playPauseBtn.textContent = '▶ Iniciar';
  renderTimeline();
  updatePhaseUI();
  updateCounters();
}

function renderTimeline() {
  els.phaseTimeline.innerHTML = '';
  if (!state.exercise) return;

  getPhases(state.exercise).forEach((phase, index) => {
    const chip = document.createElement('div');
    chip.className = 'phase-chip';
    chip.dataset.index = index;
    chip.innerHTML = `
      <span>${phase.name}</span>
      <div class="phase-bar"><span></span></div>
      <small>${phase.seconds}s</small>
    `;
    els.phaseTimeline.appendChild(chip);
  });
}

const postureCues = {
  inhale: { direction: '←', text: 'Abdomen hacia afuera' },
  hold: { direction: 'Ⅱ', text: 'Mantén la postura' },
  exhale: { direction: '→', text: 'Abdomen vuelve suavemente' },
  pulse: { direction: '⇢', text: 'Suelta el aire en pulsos' },
  rest: { direction: '', text: 'Relaja hombros y mandíbula' }
};

function showPosture(phaseType) {
  if (els.postureVisual.dataset.phase === phaseType) return;

  const cue = postureCues[phaseType];
  els.postureVisual.dataset.phase = phaseType;
  els.postureCue.textContent = cue.text;
  els.abdomenDirection.textContent = cue.direction;
}

function updatePhaseUI(progressRatio = 0) {
  if (!state.exercise) {
    els.timeLeft.textContent = '00';
    return;
  }

  const phases = getPhases(state.exercise);
  const phase = phases[state.phaseIndex];
  if (!phase) return;

  els.phaseName.textContent = phase.name;
  els.phaseInstruction.textContent = phase.instruction;
  els.cycleCounter.textContent = `Ciclo ${state.cycle} / ${state.exercise.cycles}`;
  els.timeLeft.textContent = String(Math.ceil(phase.seconds * (1 - progressRatio))).padStart(2, '0');
  els.timerOrb.style.setProperty('--progress', `${Math.min(360, progressRatio * 360)}deg`);

  els.timerOrb.classList.remove('inhale', 'exhale', 'hold', 'rest', 'pulse');
  els.timerOrb.classList.add(phase.type);
  showPosture(phase.type);

  document.querySelectorAll('.phase-chip').forEach((chip, index) => {
    const bar = chip.querySelector('.phase-bar span');
    chip.classList.toggle('active', index === state.phaseIndex);
    if (index < state.phaseIndex) bar.style.width = '100%';
    else if (index === state.phaseIndex) bar.style.width = `${progressRatio * 100}%`;
    else bar.style.width = '0%';
  });
}

function startTimer() {
  if (!state.exercise) loadRoutine(recommendedRoutine);
  if (state.running) return;

  state.running = true;
  state.phaseStartedAt = performance.now() - state.elapsedBeforePause;
  sessionStartTime = sessionStartTime || Date.now();
  els.playPauseBtn.textContent = '⏸ Pausar';
  beep(780, 0.08);
  tick();
}

function stopTimer() {
  state.running = false;
  state.elapsedBeforePause = 0;
  cancelAnimationFrame(frameId);
}

function pauseTimer() {
  if (!state.running) return;
  state.running = false;
  state.elapsedBeforePause = performance.now() - state.phaseStartedAt;
  els.playPauseBtn.textContent = '▶ Continuar';
  cancelAnimationFrame(frameId);
}

function resetCurrentExercise() {
  if (!state.exercise) return;
  stopTimer();
  state.phaseIndex = 0;
  state.cycle = 1;
  state.elapsedBeforePause = 0;
  sessionStartTime = null;
  els.playPauseBtn.textContent = '▶ Iniciar';
  updatePhaseUI();
  renderTimeline();
}

function tick() {
  if (!state.running || !state.exercise) return;
  const phases = getPhases(state.exercise);
  const phase = phases[state.phaseIndex];
  const elapsed = (performance.now() - state.phaseStartedAt) / 1000;
  const progress = Math.min(1, elapsed / phase.seconds);

  updatePhaseUI(progress);

  if (phase.type === 'pulse' && Math.floor(elapsed * 2) !== Math.floor((elapsed - 0.04) * 2)) {
    beep(460, 0.035, 'square');
  }

  if (progress >= 1) {
    advancePhase();
    return;
  }

  frameId = requestAnimationFrame(tick);
}

function advancePhase() {
  const phases = getPhases(state.exercise);
  state.phaseIndex += 1;
  state.elapsedBeforePause = 0;

  if (state.phaseIndex >= phases.length) {
    state.phaseIndex = 0;
    state.cycle += 1;
    state.stats.cycles += 1;

    if (state.cycle > state.exercise.cycles) {
      completeExercise();
      return;
    }
  }

  state.phaseStartedAt = performance.now();
  updateCounters();
  updatePhaseUI();
  beepForPhase();
  frameId = requestAnimationFrame(tick);
}

function beepForPhase() {
  if (!state.exercise) return;
  const phase = getPhases(state.exercise)[state.phaseIndex];
  const freqMap = { inhale: 720, hold: 520, exhale: 380, rest: 300, pulse: 460 };
  beep(freqMap[phase.type] || 520, 0.07, phase.type === 'pulse' ? 'square' : 'sine');
}

function completeExercise() {
  const now = Date.now();
  const seconds = sessionStartTime ? Math.round((now - sessionStartTime) / 1000) : getTotalSeconds(state.exercise);
  state.stats.sessions += 1;
  state.stats.seconds += seconds;
  saveStats();

  const hasNext = state.routine[state.currentRoutineIndex + 1];
  if (hasNext) {
    state.currentRoutineIndex += 1;
    loadExercise(hasNext);
    startTimer();
    return;
  }

  state.running = false;
  cancelAnimationFrame(frameId);
  showPosture('rest');
  els.phaseName.textContent = 'Completado';
  els.timeLeft.textContent = '✓';
  els.phaseInstruction.textContent = 'Rutina completada. Respira normal y nota cómo quedó tu cuerpo.';
  els.soundCue.textContent = 'Buen trabajo. El aire fue administrado, cosa rara en esta economía emocional.';
  els.playPauseBtn.textContent = '▶ Repetir';
  beep(880, 0.12);
  setTimeout(() => beep(1040, 0.12), 160);
  updateCounters();
}

function nextExercise() {
  if (!state.routine.length) {
    loadRoutine(recommendedRoutine);
    return;
  }
  const nextIndex = (state.currentRoutineIndex + 1) % state.routine.length;
  state.currentRoutineIndex = nextIndex;
  loadExercise(state.routine[nextIndex]);
}

function saveStats() {
  localStorage.setItem('respiraCantoStats', JSON.stringify(state.stats));
}

function updateCounters() {
  els.sessionMinutes.textContent = Math.round(state.stats.seconds / 60);
  els.completedCycles.textContent = state.stats.cycles;
  els.totalSessions.textContent = state.stats.sessions;
}

function bindEvents() {
  els.soundToggle.addEventListener('click', () => {
    state.sound = !state.sound;
    els.soundToggle.textContent = state.sound ? '🔊 Sonido' : '🔇 Silencio';
    els.soundToggle.setAttribute('aria-pressed', String(state.sound));
    if (state.sound) beep(660, 0.06);
  });

  els.startRecommended.addEventListener('click', () => loadRoutine(recommendedRoutine));
  els.buildRoutine.addEventListener('click', () => {
    els.routineBuilder.classList.add('open');
    els.routineBuilder.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  els.closeRoutine.addEventListener('click', () => els.routineBuilder.classList.remove('open'));

  els.playPauseBtn.addEventListener('click', () => {
    if (!state.exercise) loadRoutine(recommendedRoutine);
    if (state.running) pauseTimer();
    else startTimer();
  });

  els.resetBtn.addEventListener('click', resetCurrentExercise);
  els.nextBtn.addEventListener('click', nextExercise);

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderCards(button.dataset.filter);
    });
  });

  els.startCustomRoutine.addEventListener('click', () => {
    const ids = [...selectedIds];
    if (!ids.length) {
      els.startCustomRoutine.textContent = 'Selecciona al menos uno';
      setTimeout(() => els.startCustomRoutine.textContent = 'Iniciar rutina personalizada', 1200);
      return;
    }
    loadRoutine(ids);
  });

  els.clearRoutine.addEventListener('click', () => {
    selectedIds.clear();
    renderRoutineOptions();
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'Space' && !['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
      event.preventDefault();
      els.playPauseBtn.click();
    }
  });
}

function init() {
  selectedIds = new Set(recommendedRoutine);
  renderCards();
  renderRoutineOptions();
  updateCounters();
  bindEvents();
}

init();
