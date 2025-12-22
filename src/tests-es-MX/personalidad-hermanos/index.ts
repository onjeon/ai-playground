// Personalidad con tus Hermanos
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido hablas con tus hermanos?',
    options: [
      { text: 'Todos los días, somos muy unidos', type: 'A' },
      { text: 'Varias veces a la semana', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'Casi nunca o soy hijo/a único/a', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo era tu relación con tus hermanos de niños?',
    options: [
      { text: 'Éramos inseparables', type: 'A' },
      { text: 'Nos llevábamos bien con sus peleas', type: 'B' },
      { text: 'Peleábamos más de lo que nos llevábamos', type: 'C' },
      { text: 'Muy distante o no tengo hermanos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Le cuentas tus problemas a tus hermanos?',
    options: [
      { text: 'Sí, son mis confidentes', type: 'A' },
      { text: 'Las cosas importantes sí', type: 'B' },
      { text: 'Algunas cosas', type: 'C' },
      { text: 'No, prefiero no mezclar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Has peleado fuerte con tus hermanos?',
    options: [
      { text: 'Casi nunca, nos entendemos bien', type: 'A' },
      { text: 'A veces pero lo resolvemos rápido', type: 'B' },
      { text: 'Sí, tenemos conflictos frecuentes', type: 'C' },
      { text: 'No tengo hermanos o no hablamos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes si tu hermano/a tiene éxito?',
    options: [
      { text: 'Súper feliz, es mi orgullo', type: 'A' },
      { text: 'Contento/a por él/ella', type: 'B' },
      { text: 'Bien, aunque a veces me comparo', type: 'C' },
      { text: 'Me es indiferente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tus hermanos te han apoyado en momentos difíciles?',
    options: [
      { text: 'Siempre, son mi roca', type: 'A' },
      { text: 'Sí, cuando realmente lo necesito', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No mucho o no tengo hermanos', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Compartes gustos o hobbies con tus hermanos?',
    options: [
      { text: 'Sí, muchos, somos muy parecidos', type: 'A' },
      { text: 'Algunos gustos en común', type: 'B' },
      { text: 'Pocos, somos muy diferentes', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo describes las reuniones familiares con tus hermanos?',
    options: [
      { text: 'Las mejores, nos divertimos mucho', type: 'A' },
      { text: 'Agradables, la pasamos bien', type: 'B' },
      { text: 'Pueden ser tensas a veces', type: 'C' },
      { text: 'Incómodas o prefiero evitarlas', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Te comparan con tus hermanos en la familia?',
    options: [
      { text: 'No, nos valoran por igual', type: 'A' },
      { text: 'A veces, pero no me afecta', type: 'B' },
      { text: 'Sí, y me molesta', type: 'C' },
      { text: 'Mucho, siempre hay preferencias', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu relación actual con tus hermanos?',
    options: [
      { text: 'Excelente, somos mejores amigos', type: 'A' },
      { text: 'Buena, con cariño y respeto', type: 'B' },
      { text: 'Regular, hay distancia', type: 'C' },
      { text: 'Complicada o no tengo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👫 Los Hermanos Unidos',
    description: 'Tus hermanos son tus mejores amigos. Han estado juntos en todo, se apoyan incondicionalmente y la relación es de amor y complicidad total.',
    traits: ['Unido', 'Leal', 'Cariñoso', 'Compañero'],
    advice: 'Esa relación es un regalo. Sigan cultivándola, es de las más importantes de la vida.',
  },
  B: {
    title: '🤝 Los Hermanos Equilibrados',
    description: 'Tienes una buena relación con tus hermanos. Hay cariño y respeto, aunque cada quien tiene su vida. Se apoyan cuando es necesario y disfrutan el tiempo juntos.',
    traits: ['Equilibrado', 'Respetuoso', 'Independiente', 'Cariñoso'],
    advice: 'Una relación sana entre hermanos. No olvides mantener el contacto aunque estén ocupados.',
  },
  C: {
    title: '🌊 Los Hermanos Complicados',
    description: 'Tu relación con tus hermanos tiene altibajos. Puede haber comparaciones, diferencias o conflictos. El cariño existe pero la relación es compleja.',
    traits: ['Independiente', 'Diferente', 'Complejo', 'En proceso'],
    advice: 'Las relaciones entre hermanos pueden sanar. A veces solo necesitan tiempo y comunicación.',
  },
  D: {
    title: '🕊️ El Solitario',
    description: 'No tienes hermanos o la relación es muy distante. Cada familia es diferente y no todas las relaciones fraternales son cercanas.',
    traits: ['Independiente', 'Autónomo', 'Único', 'Diferente'],
    advice: 'Si no tienes hermanos, los amigos pueden ser familia elegida. Si los tienes, nunca es tarde para reconectar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
