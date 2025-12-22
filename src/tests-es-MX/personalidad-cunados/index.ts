// Personalidad con tus Cuñados
export const questions = [
  {
    id: 1,
    text: '¿Cómo describes tu relación con tus cuñados?',
    options: [
      { text: 'Excelente, son como hermanos', type: 'A' },
      { text: 'Buena, nos llevamos bien', type: 'B' },
      { text: 'Cordial, lo necesario', type: 'C' },
      { text: 'Tensa o inexistente', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Sales o convives con tus cuñados fuera de reuniones familiares?',
    options: [
      { text: 'Sí, hacemos planes juntos', type: 'A' },
      { text: 'A veces, de vez en cuando', type: 'B' },
      { text: 'Rara vez', type: 'C' },
      { text: 'Nunca', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tus cuñados se meten en tu relación de pareja?',
    options: [
      { text: 'No, respetan nuestro espacio', type: 'A' },
      { text: 'A veces, pero con buena intención', type: 'B' },
      { text: 'Sí, y me molesta', type: 'C' },
      { text: 'Demasiado, es un problema', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes en reuniones con la familia de tu pareja?',
    options: [
      { text: 'Como en casa, muy cómodo/a', type: 'A' },
      { text: 'Bien, me siento bienvenido/a', type: 'B' },
      { text: 'Un poco incómodo/a', type: 'C' },
      { text: 'Muy incómodo/a, prefiero evitarlas', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Has tenido conflictos con algún cuñado/a?',
    options: [
      { text: 'No, nunca hemos tenido problemas', type: 'A' },
      { text: 'Pequeños desacuerdos, nada grave', type: 'B' },
      { text: 'Sí, algunos conflictos', type: 'C' },
      { text: 'Sí, conflictos serios', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tus cuñados te apoyan en momentos importantes?',
    options: [
      { text: 'Sí, siempre están ahí', type: 'A' },
      { text: 'Generalmente sí', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Compartes gustos o intereses con tus cuñados?',
    options: [
      { text: 'Sí, muchos, nos entendemos bien', type: 'A' },
      { text: 'Algunos', type: 'B' },
      { text: 'Pocos', type: 'C' },
      { text: 'Ninguno, somos muy diferentes', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Tu pareja te pide que hagas un esfuerzo con sus hermanos?',
    options: [
      { text: 'No, naturalmente nos llevamos bien', type: 'A' },
      { text: 'A veces, y lo intento', type: 'B' },
      { text: 'Sí, es un tema recurrente', type: 'C' },
      { text: 'Constantemente, es un conflicto', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Confiarías en tus cuñados en una emergencia?',
    options: [
      { text: 'Sí, absolutamente', type: 'A' },
      { text: 'Probablemente sí', type: 'B' },
      { text: 'Depende de la situación', type: 'C' },
      { text: 'No', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Crees que tus cuñados te aceptan como parte de la familia?',
    options: [
      { text: 'Sí, completamente', type: 'A' },
      { text: 'Creo que sí', type: 'B' },
      { text: 'No estoy seguro/a', type: 'C' },
      { text: 'No, siento que no me aceptan', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🤝 El/La Cuñado/a Ideal',
    description: 'Tu relación con tus cuñados es excelente. Te has ganado su cariño y confianza. Son como hermanos y las reuniones familiares son un placer.',
    traits: ['Integrado', 'Querido', 'Familiar', 'Armonioso'],
    advice: 'Has logrado algo difícil: una gran relación con tus cuñados. Sigue cultivándola.',
  },
  B: {
    title: '😊 El/La Cuñado/a Llevadero/a',
    description: 'Tienes una buena relación con tus cuñados. No son mejores amigos pero hay respeto y cordialidad. Las reuniones familiares son agradables.',
    traits: ['Cordial', 'Respetuoso', 'Adaptable', 'Tranquilo'],
    advice: 'Una relación sana con los cuñados. No todo tiene que ser amistad profunda, el respeto es suficiente.',
  },
  C: {
    title: '😐 El/La Cuñado/a Tolerado',
    description: 'La relación con tus cuñados es complicada. Hay tensiones o incomodidad. Las reuniones familiares pueden ser un desafío.',
    traits: ['Tolerante', 'Paciente', 'Cauteloso', 'Reservado'],
    advice: 'Las relaciones con cuñados son difíciles. Mantén la paz por tu pareja pero pon límites sanos.',
  },
  D: {
    title: '😬 El/La Cuñado/a Conflictivo',
    description: 'Tu relación con tus cuñados es difícil o inexistente. Hay conflictos o simplemente no hay conexión. Esto puede afectar tu relación de pareja.',
    traits: ['Distante', 'En conflicto', 'Firme', 'Independiente'],
    advice: 'Los problemas con cuñados son comunes. Habla con tu pareja y busquen soluciones juntos.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
