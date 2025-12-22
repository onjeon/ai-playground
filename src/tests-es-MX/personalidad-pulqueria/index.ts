// Personalidad en la Pulquería
export const questions = [
  {
    id: 1,
    text: '¿Has ido a una pulquería?',
    options: [
      { text: 'Sí, soy cliente frecuente', type: 'A' },
      { text: 'Sí, algunas veces', type: 'B' },
      { text: 'Una o dos veces', type: 'C' },
      { text: 'Nunca he ido', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué opinas del pulque?',
    options: [
      { text: 'Me encanta, es mi bebida favorita', type: 'A' },
      { text: 'Me gusta, sobre todo los curados', type: 'B' },
      { text: 'No es mi favorito pero lo tomo', type: 'C' },
      { text: 'No me gusta o nunca lo he probado', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cuál es tu curado favorito?',
    options: [
      { text: 'Varios: avena, piñón, nuez', type: 'A' },
      { text: 'Los clásicos: fresa, guayaba', type: 'B' },
      { text: 'No tengo preferencia', type: 'C' },
      { text: 'No tomo curados o pulque', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué ambiente prefieres en una pulquería?',
    options: [
      { text: 'Tradicional, con murales y música en vivo', type: 'A' },
      { text: 'Cualquiera que tenga buen ambiente', type: 'B' },
      { text: 'Las más modernas e hipster', type: 'C' },
      { text: 'No me gustan las pulquerías', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes con la tradición pulquera?',
    options: [
      { text: 'Es parte de nuestra cultura, hay que preservarla', type: 'A' },
      { text: 'Interesante, vale la pena conocerla', type: 'B' },
      { text: 'Me da igual, es solo una bebida', type: 'C' },
      { text: 'No me interesa', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Acompañas el pulque con algo de comer?',
    options: [
      { text: 'Siempre, unas tlayudas o tacos', type: 'A' },
      { text: 'A veces, si hay botana', type: 'B' },
      { text: 'Rara vez', type: 'C' },
      { text: 'No voy a pulquerías', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Llevarías a alguien a una pulquería en su primera vez?',
    options: [
      { text: 'Sí, me encanta compartir esa experiencia', type: 'A' },
      { text: 'Sí, si le interesa', type: 'B' },
      { text: 'No sé si sería buena idea', type: 'C' },
      { text: 'No, no voy a pulquerías', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan resistente eres al pulque?',
    options: [
      { text: 'Muy resistente, aguanto varios litros', type: 'A' },
      { text: 'Normal, me mido', type: 'B' },
      { text: 'Me pega rápido', type: 'C' },
      { text: 'No tomo pulque', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Conoces la historia del pulque?',
    options: [
      { text: 'Sí, me fascina su historia prehispánica', type: 'A' },
      { text: 'Algo, lo básico', type: 'B' },
      { text: 'Muy poco', type: 'C' },
      { text: 'No me interesa', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Pulquería vs. bar convencional?',
    options: [
      { text: 'Pulquería siempre, más auténtico', type: 'A' },
      { text: 'Depende del mood', type: 'B' },
      { text: 'Prefiero bares convencionales', type: 'C' },
      { text: 'No voy a ninguno o solo a bares', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌵 El/La Pulquero/a de Corazón',
    description: 'El pulque corre por tus venas. Amas la tradición, conoces las mejores pulquerías y disfrutas compartir esta bebida ancestral con quien quiera probarla.',
    traits: ['Tradicional', 'Cultural', 'Social', 'Conocedor'],
    advice: 'Eres un embajador del pulque. Sigue preservando y compartiendo esta tradición.',
  },
  B: {
    title: '🍹 El/La Pulquero/a Casual',
    description: 'Te gusta el pulque y las pulquerías pero no eres fanático/a. Disfrutas un buen curado de vez en cuando y aprecias el ambiente único de estos lugares.',
    traits: ['Equilibrado', 'Curioso', 'Adaptable', 'Social'],
    advice: 'Sigue explorando el mundo del pulque. Hay mucho por descubrir.',
  },
  C: {
    title: '🤔 El/La Pulquero/a Novato',
    description: 'El pulque no es tu primera opción pero no le haces el feo. Has probado, conoces un poco pero prefieres otras bebidas o ambientes.',
    traits: ['Abierto', 'Explorador', 'Selectivo', 'Curioso'],
    advice: 'Dale otra oportunidad al pulque. Prueba diferentes curados y pulquerías.',
  },
  D: {
    title: '🚫 El/La Anti-Pulque',
    description: 'El pulque y las pulquerías no son lo tuyo. Ya sea por gusto, costumbre o simplemente no te llama la atención. Cada quien sus preferencias.',
    traits: ['Diferente', 'Selectivo', 'Independiente', 'Decidido'],
    advice: 'Está bien que no te guste todo. Pero si nunca has probado, al menos date una oportunidad.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
