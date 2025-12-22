// Personalidad en los XV Años
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando te invitan a unos XV años?',
    options: [
      { text: '¡Qué emoción! Amo las quinceañeras', type: 'A' },
      { text: 'Bien, es una bonita tradición', type: 'B' },
      { text: 'Depende de quién sea', type: 'C' },
      { text: 'Uf, otra fiesta de tres horas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué opinas del vals de los XV años?',
    options: [
      { text: 'Es hermoso, siempre me emociono', type: 'A' },
      { text: 'Es bonito, parte de la tradición', type: 'B' },
      { text: 'Está largo pero se aguanta', type: 'C' },
      { text: 'Me aburre', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo eras/serías como chambelán/dama?',
    options: [
      { text: 'Súper comprometido/a, ensayando y todo', type: 'A' },
      { text: 'Cumplido/a, haciendo mi parte', type: 'B' },
      { text: 'Lo mínimo necesario', type: 'C' },
      { text: 'Prefiero no participar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué es lo mejor de una fiesta de XV años?',
    options: [
      { text: 'Todo: la ceremonia, el baile, la fiesta', type: 'A' },
      { text: 'El baile y la música', type: 'B' },
      { text: 'La comida y la barra', type: 'C' },
      { text: 'Cuando se acaba', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas de los vestidos de quinceañera?',
    options: [
      { text: 'Hermosos, sueño con uno así', type: 'A' },
      { text: 'Bonitos, parte de la tradición', type: 'B' },
      { text: 'A veces exagerados pero bien', type: 'C' },
      { text: 'Demasiado para mi gusto', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Participas en los juegos y dinámicas de XV años?',
    options: [
      { text: 'Sí, en todo, soy muy participativo/a', type: 'A' },
      { text: 'En algunos, me divierte', type: 'B' },
      { text: 'Solo si me obligan', type: 'C' },
      { text: 'No, me quedo en mi lugar', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te comportas en la pista de baile de unos XV?',
    options: [
      { text: 'Bailo toda la noche sin parar', type: 'A' },
      { text: 'Bailo bastante, me gusta', type: 'B' },
      { text: 'Algunas canciones nada más', type: 'C' },
      { text: 'Prefiero no bailar', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Tuviste o te gustaría tener fiesta de XV años?',
    options: [
      { text: 'Sí, fue/sería increíble, lo máximo', type: 'A' },
      { text: 'Sí, algo sencillo pero bonito', type: 'B' },
      { text: 'Prefiero/preferiría un viaje', type: 'C' },
      { text: 'No, no es lo mío', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan importante es la tradición de los XV años para ti?',
    options: [
      { text: 'Muy importante, es nuestra cultura', type: 'A' },
      { text: 'Importante, vale la pena celebrar', type: 'B' },
      { text: 'Normal, una tradición más', type: 'C' },
      { text: 'No le veo mucho sentido', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿A qué hora te vas de una fiesta de XV años?',
    options: [
      { text: 'De los últimos, hasta que cierren', type: 'A' },
      { text: 'Después del pastel y un rato de baile', type: 'B' },
      { text: 'Temprano, después de la cena', type: 'C' },
      { text: 'Lo antes posible', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👑 El/La Quinceañero/a de Corazón',
    description: 'Los XV años son mágicos para ti. Amas la tradición, el vals, los vestidos y toda la celebración. Te emocionas en cada fiesta y la disfrutas al máximo.',
    traits: ['Tradicional', 'Festivo', 'Romántico', 'Entusiasta'],
    advice: 'Tu amor por esta tradición es hermoso. Sigue disfrutando y compartiendo esa alegría.',
  },
  B: {
    title: '🎀 El/La Invitado/a Feliz',
    description: 'Disfrutas las fiestas de XV años de manera equilibrada. Aprecias la tradición, bailas, comes y pasas un buen rato sin exagerar.',
    traits: ['Equilibrado', 'Respetuoso', 'Alegre', 'Social'],
    advice: 'Tienes la actitud perfecta para disfrutar estas celebraciones. Sigue así.',
  },
  C: {
    title: '🤷 El/La Quinceañero/a Tibio',
    description: 'Los XV años te son indiferentes. Vas si es alguien cercano, te quedas lo necesario y disfrutas más la comida que la ceremonia.',
    traits: ['Práctico', 'Selectivo', 'Neutral', 'Honesto'],
    advice: 'No tienes que emocionarte por todo. Pero cuando vayas, intenta disfrutar el momento.',
  },
  D: {
    title: '😅 El/La Anti-XV',
    description: 'Las fiestas de XV años no son lo tuyo. Te parecen largas, exageradas o simplemente no te conectan. Y está bien, no todo es para todos.',
    traits: ['Diferente', 'Independiente', 'Selectivo', 'Directo'],
    advice: 'Respeta que otros lo disfrutan. Si tienes que ir, piensa que es un rato y ya.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
