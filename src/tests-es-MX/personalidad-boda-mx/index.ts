// Personalidad en las Bodas Mexicanas
export const questions = [
  {
    id: 1,
    text: '¿Qué es lo primero que piensas cuando te invitan a una boda?',
    options: [
      { text: '¡Qué emoción! Hora de bailar y celebrar', type: 'A' },
      { text: 'Qué bonito, me alegro por los novios', type: 'B' },
      { text: 'A ver cuánto me va a costar', type: 'C' },
      { text: 'Ugh, otra boda más', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo llegas a las bodas?',
    options: [
      { text: 'De los primeros, no me pierdo nada', type: 'A' },
      { text: 'A la hora, puntual', type: 'B' },
      { text: 'En la hora del coctel', type: 'C' },
      { text: 'Cuando ya empezó el baile', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo eres en la pista de baile?',
    options: [
      { text: 'El alma de la fiesta, no me siento', type: 'A' },
      { text: 'Bailo cuando ponen buenas canciones', type: 'B' },
      { text: 'Me animo después de unos drinks', type: 'C' },
      { text: 'Prefiero quedarme en mi mesa', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan importante es la comida en una boda para ti?',
    options: [
      { text: 'Importante pero la fiesta es lo mejor', type: 'A' },
      { text: 'Muy importante, vine a comer bien', type: 'B' },
      { text: 'Mientras haya barra libre, todo bien', type: 'C' },
      { text: 'Es lo único que me interesa', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo eliges tu outfit para una boda?',
    options: [
      { text: 'Me arreglo mucho, quiero verme increíble', type: 'A' },
      { text: 'Algo bonito y apropiado', type: 'B' },
      { text: 'Lo que tenga en el closet que sirva', type: 'C' },
      { text: 'Lo mínimo necesario', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tanto interactúas con otros invitados?',
    options: [
      { text: 'Conozco a todos, soy muy social', type: 'A' },
      { text: 'Platico con varios, me gusta socializar', type: 'B' },
      { text: 'Solo con los que conozco', type: 'C' },
      { text: 'Me quedo en mi mesa', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te portas con la barra libre?',
    options: [
      { text: 'La disfruto sin pasarme', type: 'A' },
      { text: 'Tomo moderadamente', type: 'B' },
      { text: 'La aprovecho bien', type: 'C' },
      { text: 'La exprimo hasta la última gota', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué opinas de la hora loca o los rituales de boda?',
    options: [
      { text: 'Me encantan, son lo mejor', type: 'A' },
      { text: 'Son divertidos, participo', type: 'B' },
      { text: 'Están bien, a veces participo', type: 'C' },
      { text: 'Me parecen cursis o incómodos', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿A qué hora te vas de las bodas?',
    options: [
      { text: 'De los últimos, hasta que corran', type: 'A' },
      { text: 'Cuando termina el evento formal', type: 'B' },
      { text: 'Temprano, ya cumplí', type: 'C' },
      { text: 'En cuanto puedo escaparme', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Te emociona la idea de las bodas en general?',
    options: [
      { text: 'Sí, amo las bodas', type: 'A' },
      { text: 'Son lindas cuando son de gente cercana', type: 'B' },
      { text: 'Me son indiferentes', type: 'C' },
      { text: 'Prefiero evitarlas', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💃 El/La Bodero/a Profesional',
    description: 'Las bodas son tu elemento. Llegas arreglado/a, bailas toda la noche, conoces a todos y eres de los últimos en irte. Cada boda es una fiesta para ti.',
    traits: ['Fiestero', 'Social', 'Alegre', 'Entusiasta'],
    advice: 'Tu energía hace mejores las bodas. Solo no olvides que a veces los novios quieren atención también.',
  },
  B: {
    title: '🥂 El/La Invitado/a Ideal',
    description: 'Eres el invitado perfecto. Llegas a tiempo, te arreglas bien, disfrutas la fiesta sin excesos y te vas cuando es apropiado. Equilibrado y considerado.',
    traits: ['Equilibrado', 'Considerado', 'Elegante', 'Sociable'],
    advice: 'Eres el tipo de invitado que todos quieren en su boda. Sigue siendo así.',
  },
  C: {
    title: '🍻 El/La Aprovechado/a',
    description: 'Vas a las bodas por la barra libre y la comida. No te emociona mucho el evento pero aprovechas lo que ofrece. Práctico y honesto.',
    traits: ['Práctico', 'Honesto', 'Oportunista', 'Relajado'],
    advice: 'Está bien ir por la fiesta, pero recuerda que es el día de los novios. Un poco de entusiasmo no cae mal.',
  },
  D: {
    title: '😩 El/La Anti-Bodas',
    description: 'Las bodas no son lo tuyo. Vas por compromiso, te quedas lo mínimo y prefieres estar en otro lado. No hay nada malo en eso, cada quien sus gustos.',
    traits: ['Independiente', 'Selectivo', 'Honesto', 'Diferente'],
    advice: 'No tienes que amar las bodas. Pero cuando vayas, intenta disfrutar aunque sea un poco por los novios.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
