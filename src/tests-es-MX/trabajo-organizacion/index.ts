// Test de Organización Laboral - ¿Qué tan organizado eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo luce tu escritorio o espacio de trabajo?',
    options: [
      { text: 'Impecable, cada cosa en su lugar', type: 'A' },
      { text: 'Ordenado con sistema propio', type: 'B' },
      { text: 'Un poco revuelto pero sé dónde está todo', type: 'C' },
      { text: 'Caótico, ni yo sé qué hay ahí', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas tus pendientes y tareas?',
    options: [
      { text: 'Con listas, apps y sistemas de organización', type: 'A' },
      { text: 'Tengo mi método, no tan formal pero funciona', type: 'B' },
      { text: 'Lo llevo en la mente principalmente', type: 'C' },
      { text: 'Se me olvidan cosas frecuentemente', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo planeas tu día laboral?',
    options: [
      { text: 'Agenda bloqueada con horarios específicos', type: 'A' },
      { text: 'Lista de prioridades para el día', type: 'B' },
      { text: 'Voy viendo según surgen las cosas', type: 'C' },
      { text: 'No planeo, improviso todo el día', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Tienes un proyecto grande con fecha límite...',
    options: [
      { text: 'Lo divido en tareas con fechas intermedias', type: 'A' },
      { text: 'Hago un plan general y lo voy ajustando', type: 'B' },
      { text: 'Trabajo duro las últimas semanas', type: 'C' },
      { text: 'Espero hasta el último momento', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo organizas tus archivos y documentos?',
    options: [
      { text: 'Carpetas con sistema de nombres estructurado', type: 'A' },
      { text: 'Tengo carpetas pero no siempre las uso', type: 'B' },
      { text: 'Uso el buscador, están por todos lados', type: 'C' },
      { text: 'No tengo idea dónde están mis archivos', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan puntual eres a las reuniones?',
    options: [
      { text: 'Siempre llego antes, detesto llegar tarde', type: 'A' },
      { text: 'Puntual la mayoría de las veces', type: 'B' },
      { text: 'A veces llego unos minutos tarde', type: 'C' },
      { text: 'La hora mexicana es mi especialidad', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas tu correo electrónico?',
    options: [
      { text: 'Bandeja en cero, todo archivado y respondido', type: 'A' },
      { text: 'Lo reviso regular y atiendo lo importante', type: 'B' },
      { text: 'Se me acumulan pero eventualmente respondo', type: 'C' },
      { text: 'Cientos de correos sin leer, me abruma', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te preparas para una presentación importante?',
    options: [
      { text: 'Con días de anticipación, todo ensayado', type: 'A' },
      { text: 'Preparo con tiempo pero no tanto ensayo', type: 'B' },
      { text: 'La armo uno o dos días antes', type: 'C' },
      { text: 'La noche anterior o el mismo día', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Cuando tienes múltiples proyectos simultáneos...',
    options: [
      { text: 'Tengo sistema para dar seguimiento a cada uno', type: 'A' },
      { text: 'Priorizo y me enfoco en uno a la vez', type: 'B' },
      { text: 'Hago lo que puedo, a veces se me cruzan', type: 'C' },
      { text: 'Me abruma y no sé por dónde empezar', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan frecuente incumples fechas de entrega?',
    options: [
      { text: 'Nunca, siempre entrego a tiempo o antes', type: 'A' },
      { text: 'Rara vez, casi siempre cumplo', type: 'B' },
      { text: 'A veces, cuando se junta mucho trabajo', type: 'C' },
      { text: 'Seguido, me cuesta cumplir fechas', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo empiezas tu día laboral?',
    options: [
      { text: 'Revisando mi agenda y organizando prioridades', type: 'A' },
      { text: 'Con mi café y revisando correos', type: 'B' },
      { text: 'Atacando lo primero que me cae', type: 'C' },
      { text: 'Procrastinando un rato antes de empezar', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirían tu organización tus compañeros?',
    options: [
      { text: 'Súper organizado, admirable', type: 'A' },
      { text: 'Ordenado, cumplido', type: 'B' },
      { text: 'Normal, a veces se le olvidan cosas', type: 'C' },
      { text: 'Desorganizado, siempre anda perdido', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📋 Maestro de la Organización',
    description: 'Tu nivel de organización es admirable. Tienes sistemas para todo, nunca se te olvida nada y siempre cumples. Eres el tipo de persona a quien todos le piden tips de productividad.',
    traits: ['Metódico', 'Puntual', 'Sistemático', 'Confiable'],
    advice: 'Tu organización es envidiable, pero no te obsesiones. A veces la flexibilidad también es necesaria.',
  },
  B: {
    title: '⚖️ Organizado Funcional',
    description: 'Tienes buena organización sin ser obsesivo. Tu sistema funciona para ti y cumples con tus compromisos. Has encontrado un balance saludable.',
    traits: ['Equilibrado', 'Eficiente', 'Adaptable', 'Cumplido'],
    advice: 'Vas muy bien. Podrías mejorar algunos aspectos pero tu nivel es suficiente para ser exitoso.',
  },
  C: {
    title: '🌊 Organizado por Olas',
    description: 'Tu organización viene y va. A veces estás muy enfocado y otras veces te gana el caos. Cumples pero con algo de estrés cuando se acumulan las cosas.',
    traits: ['Variable', 'Adaptativo', 'Algo disperso', 'Esforzado'],
    advice: 'Implementar un sistema simple de organización podría reducir mucho tu estrés y mejorar tu rendimiento.',
  },
  D: {
    title: '🌀 Caos Creativo',
    description: 'La organización no es lo tuyo. Vives en el caos pero de alguna manera sobrevives. El problema es que el estrés y los olvidos te están afectando.',
    traits: ['Desorganizado', 'Improvisador', 'Estresado', 'Reactivo'],
    advice: 'Es momento de implementar sistemas básicos. No tienes que ser perfecto, solo un poco más organizado hará gran diferencia.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
