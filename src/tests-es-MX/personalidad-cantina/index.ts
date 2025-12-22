// Personalidad en la Cantina
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido vas a la cantina?',
    options: [
      { text: 'Muy seguido, es mi lugar', type: 'A' },
      { text: 'De vez en cuando, cuando se arma', type: 'B' },
      { text: 'Rara vez, en ocasiones especiales', type: 'C' },
      { text: 'Nunca o casi nunca', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tomas en la cantina?',
    options: [
      { text: 'Tequila o mezcal, lo tradicional', type: 'A' },
      { text: 'Cerveza, es lo clásico', type: 'B' },
      { text: 'Lo que pidan los demás', type: 'C' },
      { text: 'No tomo o no voy a cantinas', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué opinas de la botana de cantina?',
    options: [
      { text: 'Lo mejor, voy por la comida también', type: 'A' },
      { text: 'Muy buena, un plus del lugar', type: 'B' },
      { text: 'Está bien, la como si hay', type: 'C' },
      { text: 'Me da igual o no voy a cantinas', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te comportas después de unas copas?',
    options: [
      { text: 'Más alegre y platicador/a', type: 'A' },
      { text: 'Normal, me controlo bien', type: 'B' },
      { text: 'Un poco más expresivo/a', type: 'C' },
      { text: 'No tomo o no sé', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cantas las canciones de la rockola?',
    options: [
      { text: 'A todo pulmón, sin pena', type: 'A' },
      { text: 'Las coro, me gusta', type: 'B' },
      { text: 'Bajito o en mi mente', type: 'C' },
      { text: 'No canto o no voy a cantinas', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Con quién vas a la cantina?',
    options: [
      { text: 'Con la banda, siempre en grupo', type: 'A' },
      { text: 'Con amigos cercanos', type: 'B' },
      { text: 'Con una o dos personas', type: 'C' },
      { text: 'No voy a cantinas', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Platicas con desconocidos en la cantina?',
    options: [
      { text: 'Sí, hago amigos fácilmente', type: 'A' },
      { text: 'A veces, si se da', type: 'B' },
      { text: 'No mucho, me quedo con mi grupo', type: 'C' },
      { text: 'No, o no voy a cantinas', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tipo de cantina prefieres?',
    options: [
      { text: 'Tradicional, con historia y carácter', type: 'A' },
      { text: 'Cualquiera con buen ambiente', type: 'B' },
      { text: 'Las más modernas y limpias', type: 'C' },
      { text: 'Ninguna, no me gustan', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿A qué hora te vas de la cantina?',
    options: [
      { text: 'Cuando cierran o ya muy tarde', type: 'A' },
      { text: 'A una hora razonable', type: 'B' },
      { text: 'Temprano, antes de que se ponga intenso', type: 'C' },
      { text: 'No aplica', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cantina vs. bar moderno?',
    options: [
      { text: 'Cantina siempre, más auténtica', type: 'A' },
      { text: 'Depende del mood y la compañía', type: 'B' },
      { text: 'Prefiero bares modernos', type: 'C' },
      { text: 'Ninguno o no salgo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🍺 El/La Cantinero/a de Hueso Colorado',
    description: 'La cantina es tu segundo hogar. Conoces las mejores, te sabes todas las canciones y la botana es tan importante como la bebida. Eres el alma de la fiesta.',
    traits: ['Tradicional', 'Fiestero', 'Social', 'Conocedor'],
    advice: 'La cantina es cultura mexicana. Solo recuerda siempre con moderación.',
  },
  B: {
    title: '🥃 El/La Cantinero/a Social',
    description: 'Te gusta la cantina para socializar y pasar un buen rato. Disfrutas el ambiente, la botana y la compañía sin necesidad de excederte.',
    traits: ['Equilibrado', 'Social', 'Moderado', 'Amigable'],
    advice: 'Tienes el balance perfecto. Disfrutas sin excesos.',
  },
  C: {
    title: '🍷 El/La Cantinero/a Ocasional',
    description: 'La cantina no es tu lugar favorito pero no le haces el feo. Vas cuando toca y pasas un buen rato aunque prefieres otros ambientes.',
    traits: ['Selectivo', 'Moderado', 'Adaptable', 'Tranquilo'],
    advice: 'Está bien que no sea tu lugar favorito. Cada quien sus espacios.',
  },
  D: {
    title: '🚫 El/La Anti-Cantina',
    description: 'Las cantinas no son lo tuyo. Ya sea porque no tomas, no te gusta el ambiente o simplemente prefieres otros planes. Y está perfectamente bien.',
    traits: ['Diferente', 'Independiente', 'Selectivo', 'Decidido'],
    advice: 'No tienes que ir a cantinas para divertirte. Hay mil formas de pasarla bien.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
