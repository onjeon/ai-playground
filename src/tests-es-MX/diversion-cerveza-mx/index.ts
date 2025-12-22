// ¿Qué Cerveza Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo prefieres tomar tu chela?',
    options: [
      { text: 'Bien helada con limón y sal', type: 'A' },
      { text: 'En michelada con todo', type: 'B' },
      { text: 'Natural, sin nada', type: 'C' },
      { text: 'En caguama con los compas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cuántas chelas aguantas?',
    options: [
      { text: 'Las que caigan, güey', type: 'A' },
      { text: 'Un six y ya', type: 'B' },
      { text: 'Dos o tres máximo', type: 'C' },
      { text: 'Depende del día', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Dónde prefieres tomar?',
    options: [
      { text: 'En la calle con los compas', type: 'A' },
      { text: 'En un bar o cantina', type: 'B' },
      { text: 'En un restaurante', type: 'C' },
      { text: 'En mi casa tranquilo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué día prefieres para echarte unas?',
    options: [
      { text: 'Cualquier día es bueno', type: 'A' },
      { text: 'Viernes o sábado', type: 'B' },
      { text: 'Solo en ocasiones especiales', type: 'C' },
      { text: 'Domingo viendo el fut', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué botana acompaña tu chela?',
    options: [
      { text: 'Chicharrones y salsa', type: 'A' },
      { text: 'Cacahuates y limón', type: 'B' },
      { text: 'Algo más elaborado', type: 'C' },
      { text: 'Solo la chela', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo eres cuando tomas?',
    options: [
      { text: 'Me pongo bien alegre', type: 'A' },
      { text: 'Platicador y sociable', type: 'B' },
      { text: 'Igual que siempre', type: 'C' },
      { text: 'Me da sueño', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué música pones cuando tomas?',
    options: [
      { text: 'Cumbia para bailar', type: 'A' },
      { text: 'Banda y norteñas', type: 'B' },
      { text: 'Rock o lo que sea', type: 'C' },
      { text: 'Lo que pongan los demás', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Fiestero y alegre', type: 'A' },
      { text: 'Sociable y amigable', type: 'B' },
      { text: 'Tranquilo pero buena onda', type: 'C' },
      { text: 'Relajado y sin pretensiones', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces al día siguiente de la peda?',
    options: [
      { text: 'Me echo una michelada para la cruda', type: 'A' },
      { text: 'Descanso todo el día', type: 'B' },
      { text: 'Sigo con mi vida normal', type: 'C' },
      { text: 'Me arrepiento de todo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu lema para tomar?',
    options: [
      { text: 'El que no arriesga no gana', type: 'A' },
      { text: 'Con medida pero con gusto', type: 'B' },
      { text: 'Calidad sobre cantidad', type: 'C' },
      { text: 'Una y ya', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🍺 Corona',
    description: '¡El alma de la fiesta! Eres como la Corona: popular, refrescante y siempre presente en los buenos momentos. Te adaptas a cualquier situación y todos quieren que estés en la reunión.',
    traits: ['Popular', 'Fiestero', 'Adaptable', 'Alegre'],
    advice: 'Tu energía es contagiosa, pero recuerda que también hay que saber cuándo parar.',
  },
  B: {
    title: '🍻 Victoria',
    description: 'Clásico y confiable. Como la Victoria, eres tradicional y siempre cumples. La gente sabe qué esperar de ti y por eso te buscan. Eres el amigo de toda la vida.',
    traits: ['Tradicional', 'Confiable', 'Sociable', 'Leal'],
    advice: 'Tu consistencia es tu fuerza. Pero atrévete a probar cosas nuevas de vez en cuando.',
  },
  C: {
    title: '🍺 Modelo Especial',
    description: 'Con clase y buen gusto. Eres selectivo y prefieres la calidad sobre la cantidad. No necesitas tomar mucho para pasarla bien. Tu refinamiento te distingue.',
    traits: ['Selectivo', 'Refinado', 'Con clase', 'Moderado'],
    advice: 'Tu buen gusto es admirable. Solo no te pongas muy especial con los demás.',
  },
  D: {
    title: '🍺 Indio',
    description: 'Relajado y sin pretensiones. Como la Indio, eres accesible y buena onda. No necesitas ser el centro de atención para pasarla chido. Tu sencillez es tu encanto.',
    traits: ['Relajado', 'Sencillo', 'Accesible', 'Tranquilo'],
    advice: 'Tu sencillez es refrescante. Pero a veces hay que echarle más ganas a la fiesta.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
