// Personalidad con el Tiempo
export const questions = [
  {
    id: 1,
    text: '¿Cómo llegas normalmente a tus citas?',
    options: [
      { text: 'Siempre temprano, odio hacer esperar', type: 'A' },
      { text: 'Puntual, a la hora exacta', type: 'B' },
      { text: 'Unos minutitos tarde, lo normal', type: 'C' },
      { text: 'La hora mexicana es mi estilo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo planeas tu día a día?',
    options: [
      { text: 'Tengo agenda y horarios bien definidos', type: 'A' },
      { text: 'Hago listas de pendientes', type: 'B' },
      { text: 'Tengo una idea general de qué hacer', type: 'C' },
      { text: 'Improviso según el día', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando tienes un deadline importante?',
    options: [
      { text: 'Lo tengo listo días antes', type: 'A' },
      { text: 'Lo entrego a tiempo, bien planeado', type: 'B' },
      { text: 'Lo termino justo antes del deadline', type: 'C' },
      { text: 'A veces pido extensión o lo entrego tarde', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas cuando tienes muchas cosas que hacer?',
    options: [
      { text: 'Priorizo y hago un plan de acción', type: 'A' },
      { text: 'Voy una por una hasta terminar', type: 'B' },
      { text: 'Me estreso pero las saco adelante', type: 'C' },
      { text: 'Algunas se quedan pendientes', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tanto procrastinas?',
    options: [
      { text: 'Casi nunca, hago las cosas cuando debo', type: 'A' },
      { text: 'A veces, pero me controlo', type: 'B' },
      { text: 'Bastante, me cuesta empezar las cosas', type: 'C' },
      { text: 'Soy profesional de la procrastinación', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes cuando alguien llega tarde?',
    options: [
      { text: 'Me molesta mucho, el tiempo es valioso', type: 'A' },
      { text: 'Me incomoda pero entiendo que pasan cosas', type: 'B' },
      { text: 'No me fijo mucho, yo también llego tarde', type: 'C' },
      { text: 'Normal, así es la vida', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuánto tiempo antes te preparas para salir?',
    options: [
      { text: 'Una hora o más de anticipación', type: 'A' },
      { text: 'Media hora, lo justo', type: 'B' },
      { text: '15 minutos o menos, soy rápido', type: 'C' },
      { text: 'Me preparo sobre la marcha', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo es tu relación con las alarmas?',
    options: [
      { text: 'Me despierto antes de que suene', type: 'A' },
      { text: 'Una alarma y me levanto', type: 'B' },
      { text: 'Necesito varias alarmas para despertar', type: 'C' },
      { text: 'Las ignoro y me quedo dormido', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces en tu tiempo libre?',
    options: [
      { text: 'Actividades productivas o que me mejoren', type: 'A' },
      { text: 'Balance entre ocio y cosas útiles', type: 'B' },
      { text: 'Descansar y no hacer nada', type: 'C' },
      { text: 'Scrollear redes sociales por horas', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué opinas del dicho "el tiempo es oro"?',
    options: [
      { text: 'Totalmente de acuerdo, es muy valioso', type: 'A' },
      { text: 'Es importante pero no todo en la vida', type: 'B' },
      { text: 'A veces hay que tomarse las cosas con calma', type: 'C' },
      { text: 'El tiempo es para disfrutarlo, no para apurarse', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '⏰ El Reloj Suizo',
    description: 'Eres la puntualidad en persona. Tu tiempo está perfectamente organizado y respetas el tiempo de los demás como el tuyo propio. Llegas temprano, cumples deadlines y tu productividad es admirable.',
    traits: ['Puntual', 'Organizado', 'Productivo', 'Responsable'],
    advice: 'Tu manejo del tiempo es excelente, pero recuerda que a veces está bien relajarse y no ser esclavo del reloj.',
  },
  B: {
    title: '📅 El Administrador Consciente',
    description: 'Manejas bien tu tiempo sin ser extremo. Llegas puntual a lo importante, cumples con tus responsabilidades y sabes cuándo hay que ser flexible. Has encontrado un buen balance.',
    traits: ['Equilibrado', 'Eficiente', 'Práctico', 'Adaptable'],
    advice: 'Tu enfoque balanceado funciona bien. Sigue así, respetando el tiempo pero sin obsesionarte.',
  },
  C: {
    title: '🕐 El Mexicano Promedio',
    description: 'La hora mexicana no te es ajena. Llegas "en un ratito" que pueden ser 20 minutos y las deadlines son más bien sugerencias. No lo haces de mala fe, así fluyes con el tiempo.',
    traits: ['Relajado', 'Flexible', 'Sociable', 'Optimista'],
    advice: 'Tu actitud relajada reduce el estrés, pero ser más puntual podría abrirte puertas y evitarte problemas.',
  },
  D: {
    title: '🌊 El Fluir con el Tiempo',
    description: 'El tiempo es un concepto flexible para ti. Los horarios son sugerencias y los deadlines son relativos. Vives en el presente sin preocuparte mucho por el reloj.',
    traits: ['Despreocupado', 'Libre', 'Espontáneo', 'Relajado'],
    advice: 'Tu libertad con el tiempo puede ser liberadora pero también problemática. Intenta ser más consciente en compromisos importantes.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
