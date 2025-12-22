// Personalidad en el Trabajo
export const questions = [
  {
    id: 1,
    text: '¿Cómo llegas normalmente al trabajo?',
    options: [
      { text: 'Siempre temprano, antes que el jefe', type: 'A' },
      { text: 'Puntual, justo a mi hora de entrada', type: 'B' },
      { text: 'A veces me retraso por el tráfico', type: 'C' },
      { text: 'La hora mexicana es mi especialidad', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo es tu escritorio o espacio de trabajo?',
    options: [
      { text: 'Impecable, todo organizado y limpio', type: 'A' },
      { text: 'Ordenado pero con mi toque personal', type: 'B' },
      { text: 'Un poco desordenado pero sé dónde está todo', type: 'C' },
      { text: 'Caótico, pero funciona para mí', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas las juntas de trabajo?',
    options: [
      { text: 'Participo activamente y doy ideas', type: 'A' },
      { text: 'Atento, tomo notas y hablo cuando es necesario', type: 'B' },
      { text: 'Escucho pero prefiero no hablar mucho', type: 'C' },
      { text: 'Sobrevivo pensando en qué voy a comer', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces cuando tienes mucha chamba?',
    options: [
      { text: 'Hago un plan y voy tachando pendientes', type: 'A' },
      { text: 'Priorizo y ataco lo más urgente primero', type: 'B' },
      { text: 'Me estreso pero la saco adelante', type: 'C' },
      { text: 'Procrastino hasta que no hay de otra', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te llevas con tus compañeros de trabajo?',
    options: [
      { text: 'Súper bien, somos como familia', type: 'A' },
      { text: 'Bien, tengo buenos amigos ahí', type: 'B' },
      { text: 'Profesional, cordial pero sin mezclar', type: 'C' },
      { text: 'Lo mínimo necesario, cada quien lo suyo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué opinas de quedarte horas extra?',
    options: [
      { text: 'Si es necesario, me quedo sin problema', type: 'A' },
      { text: 'A veces está bien, pero no de costumbre', type: 'B' },
      { text: 'Solo si de verdad es urgente', type: 'C' },
      { text: 'Ni de chiste, mi tiempo es mi tiempo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas a las críticas de tu jefe?',
    options: [
      { text: 'Las tomo como oportunidad de mejorar', type: 'A' },
      { text: 'Las escucho y analizo si tienen razón', type: 'B' },
      { text: 'Me molestan pero las acepto', type: 'C' },
      { text: 'Me afectan mucho o las ignoro', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan importante es el sueldo vs. el ambiente laboral?',
    options: [
      { text: 'Prefiero buen sueldo aunque el ambiente no sea el mejor', type: 'A' },
      { text: 'Busco un balance entre ambos', type: 'B' },
      { text: 'El ambiente es más importante para mí', type: 'C' },
      { text: 'Solo quiero que me paguen y ya', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes los domingos pensando en el lunes?',
    options: [
      { text: 'Normal, me gusta mi trabajo', type: 'A' },
      { text: 'Un poco de hueva pero va', type: 'B' },
      { text: 'Me da ansiedad el domingo por la noche', type: 'C' },
      { text: 'Depresión dominguera total', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu relación con el café en el trabajo?',
    options: [
      { text: 'Es mi combustible, no funciono sin él', type: 'A' },
      { text: 'Tomo uno o dos al día, moderado', type: 'B' },
      { text: 'De vez en cuando, no dependo de él', type: 'C' },
      { text: 'No tomo café, tengo otras maneras de despertar', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💼 El Godínez Ejemplar',
    description: 'Eres el empleado que todo jefe sueña tener. Llegas temprano, cumples con todo, y te llevas bien con todos. Tu dedicación es admirable y seguramente tienes buen futuro en cualquier empresa. Eres el orgullo del departamento.',
    traits: ['Dedicado', 'Profesional', 'Puntual', 'Comprometido'],
    advice: 'Tu ética laboral es excelente, pero no olvides que hay vida fuera del trabajo. El balance es clave para no quemarte.',
  },
  B: {
    title: '⚖️ El Profesional Equilibrado',
    description: 'Sabes hacer bien tu trabajo sin volverte loco. Cumples con tus responsabilidades pero también cuidas tu tiempo personal. Has encontrado el balance entre ser productivo y tener vida propia.',
    traits: ['Balanceado', 'Eficiente', 'Maduro', 'Organizado'],
    advice: 'Vas muy bien con ese equilibrio. Sigue así y no dejes que la presión te quite ese balance que has logrado.',
  },
  C: {
    title: '😌 El Chambitas Relajado',
    description: 'Haces tu trabajo pero sin matarte. Sabes que la vida es más que el trabajo y priorizas tu bienestar. A veces te estresas pero siempre encuentras la manera de salir adelante sin perder la calma.',
    traits: ['Relajado', 'Práctico', 'Resiliente', 'Realista'],
    advice: 'Tu actitud relajada te protege del burnout, pero intenta ser un poco más proactivo para avanzar en tu carrera si eso te interesa.',
  },
  D: {
    title: '🏃 El Sobreviviente Laboral',
    description: 'El trabajo es un mal necesario para ti. Vas día a día tratando de sobrevivir la semana hasta el viernes. No es tu pasión pero haces lo que tienes que hacer para pagar las cuentas.',
    traits: ['Honesto', 'Realista', 'Soñador', 'Independiente'],
    advice: 'Si el trabajo no te llena, quizás es momento de explorar otras opciones. Mereces hacer algo que al menos no te haga sufrir.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
