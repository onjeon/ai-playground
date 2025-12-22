// Personalidad con tus Tíos
export const questions = [
  {
    id: 1,
    text: '¿Qué tan cercano/a eres a tus tíos?',
    options: [
      { text: 'Muy cercano/a, son como segundos padres', type: 'A' },
      { text: 'Cercano/a con algunos favoritos', type: 'B' },
      { text: 'Solo los veo en reuniones familiares', type: 'C' },
      { text: 'Casi no tengo relación con ellos', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Tienes un tío/a favorito/a?',
    options: [
      { text: 'Sí, es mi cómplice y confidente', type: 'A' },
      { text: 'Sí, hay uno que me cae muy bien', type: 'B' },
      { text: 'No realmente, todos son iguales', type: 'C' },
      { text: 'No tengo preferidos o no los conozco bien', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tus tíos te consentían de niño/a?',
    options: [
      { text: 'Demasiado, era su adoración', type: 'A' },
      { text: 'Sí, me daban regalos y atención', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No mucho o no los veía', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Algún tío te ha dado consejos de vida importantes?',
    options: [
      { text: 'Sí, han sido mentores para mí', type: 'A' },
      { text: 'Algunos consejos útiles', type: 'B' },
      { text: 'Pocos', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo son las fiestas familiares con tus tíos?',
    options: [
      { text: 'Las mejores, son la fiesta', type: 'A' },
      { text: 'Divertidas, la pasamos bien', type: 'B' },
      { text: 'Normales, típicas reuniones', type: 'C' },
      { text: 'Tensas o prefiero evitarlas', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tus tíos se meten en tu vida personal?',
    options: [
      { text: 'Sí, pero no me molesta, es con cariño', type: 'A' },
      { text: 'A veces, lo típico de familia', type: 'B' },
      { text: 'Sí y me incomoda', type: 'C' },
      { text: 'No, no tienen esa confianza', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Has vivido o te has quedado en casa de tus tíos?',
    options: [
      { text: 'Sí, muchas veces, era como mi segunda casa', type: 'A' },
      { text: 'Algunas veces de visita', type: 'B' },
      { text: 'Pocas veces', type: 'C' },
      { text: 'Nunca', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Te llevas bien con los hijos de tus tíos (primos)?',
    options: [
      { text: 'Sí, crecimos juntos como hermanos', type: 'A' },
      { text: 'Sí, nos llevamos bien', type: 'B' },
      { text: 'Con algunos sí, con otros no', type: 'C' },
      { text: 'No mucho o no los conozco', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Hay drama o chismes entre tus tíos?',
    options: [
      { text: 'No, todos se llevan muy bien', type: 'A' },
      { text: 'Un poco, lo normal de familia', type: 'B' },
      { text: 'Sí, siempre hay conflictos', type: 'C' },
      { text: 'Mucho, hay divisiones fuertes', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan importante es la relación con tus tíos para ti?',
    options: [
      { text: 'Muy importante, son familia cercana', type: 'A' },
      { text: 'Importante, los quiero', type: 'B' },
      { text: 'Normal, como familia extendida', type: 'C' },
      { text: 'No mucho, no soy cercano/a', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👨‍👩‍👧 El/La Sobrino/a Consentido/a',
    description: 'Tus tíos son como segundos padres para ti. Creciste rodeado/a de su cariño, consejos y apoyo. Las reuniones familiares son tu lugar feliz.',
    traits: ['Familiar', 'Cercano', 'Querido', 'Tradicional'],
    advice: 'Ese lazo con tus tíos es especial. Sigue cultivándolo y agradéceles su amor.',
  },
  B: {
    title: '💕 El/La Sobrino/a Querido/a',
    description: 'Tienes buena relación con tus tíos, especialmente con algunos favoritos. Te sientes parte de la familia extendida y disfrutas el tiempo con ellos.',
    traits: ['Cariñoso', 'Selectivo', 'Familiar', 'Equilibrado'],
    advice: 'Las relaciones con los tíos enriquecen la vida. Mantén esos lazos especiales.',
  },
  C: {
    title: '🌿 El/La Sobrino/a Ocasional',
    description: 'Tu relación con tus tíos es más formal o distante. Los ves en reuniones pero no hay una conexión profunda. Es la típica relación de familia extendida.',
    traits: ['Independiente', 'Formal', 'Distante', 'Respetuoso'],
    advice: 'No todas las relaciones familiares son cercanas y está bien. Respeta tu ritmo.',
  },
  D: {
    title: '🕊️ El/La Sobrino/a Distante',
    description: 'No tienes mucha relación con tus tíos o hay conflictos familiares. Cada familia es diferente y no siempre hay cercanía con la familia extendida.',
    traits: ['Autónomo', 'Independiente', 'Diferente', 'Reservado'],
    advice: 'La familia no siempre es cercana. Construye tu propia red de apoyo como mejor te funcione.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
