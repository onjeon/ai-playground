// Personalidad en las Parrilladas/Carnes Asadas
export const questions = [
  {
    id: 1,
    text: '¿Qué rol tomas en una carne asada?',
    options: [
      { text: 'El parrillero/a, yo controlo el asador', type: 'A' },
      { text: 'El/La organizador/a, coordino todo', type: 'B' },
      { text: 'El invitado/a que lleva algo', type: 'C' },
      { text: 'Solo voy a comer', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te gusta la carne?',
    options: [
      { text: 'Término medio, jugosa', type: 'A' },
      { text: 'Bien cocida, sin sangre', type: 'B' },
      { text: 'Como la hagan está bien', type: 'C' },
      { text: 'No como carne', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan importante es la salsa en la carne asada?',
    options: [
      { text: 'Fundamental, sin salsa no hay fiesta', type: 'A' },
      { text: 'Importante, le da el toque', type: 'B' },
      { text: 'Nice to have', type: 'C' },
      { text: 'No me gusta la salsa', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué llevas cuando te invitan a una carne asada?',
    options: [
      { text: 'La carne o algo importante', type: 'A' },
      { text: 'Cerveza o bebidas', type: 'B' },
      { text: 'Algo para compartir', type: 'C' },
      { text: 'Nada o mi presencia', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Tortilla de harina o de maíz para los tacos?',
    options: [
      { text: 'Harina, siempre', type: 'A' },
      { text: 'Maíz, es lo tradicional', type: 'B' },
      { text: 'Ambas están bien', type: 'C' },
      { text: 'No como tacos de carne asada', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan social eres en las carnes asadas?',
    options: [
      { text: 'Muy social, platico con todos', type: 'A' },
      { text: 'Convivo con los que conozco', type: 'B' },
      { text: 'Me quedo en mi grupito', type: 'C' },
      { text: 'Voy, como y me voy', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan seguido organizas o vas a carnes asadas?',
    options: [
      { text: 'Muy seguido, es tradición', type: 'A' },
      { text: 'Regularmente, cuando se puede', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'Casi nunca', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Aguacate en la carne asada?',
    options: [
      { text: 'Indispensable, siempre debe haber', type: 'A' },
      { text: 'Sí me gusta, es un buen extra', type: 'B' },
      { text: 'Me da igual', type: 'C' },
      { text: 'No me gusta', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan exigente eres con la calidad de la carne?',
    options: [
      { text: 'Mucho, tiene que ser buena carne', type: 'A' },
      { text: 'Prefiero buena calidad', type: 'B' },
      { text: 'Lo que haya está bien', type: 'C' },
      { text: 'No me fijo mucho', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿A qué hora te vas de una carne asada?',
    options: [
      { text: 'De los últimos, hasta que se acabe', type: 'A' },
      { text: 'Cuando termina la comida y un rato más', type: 'B' },
      { text: 'Temprano, después de comer', type: 'C' },
      { text: 'Lo antes posible', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🥩 El/La Asador/a Profesional',
    description: 'Las carnes asadas son tu elemento. Ya seas parrillero/a o súper anfitrión/a, sabes que una buena carne asada es un arte y tú lo dominas.',
    traits: ['Experto', 'Social', 'Anfitrión', 'Tradicional'],
    advice: 'Eres el alma de las carnes asadas. Sigue compartiendo ese don con los demás.',
  },
  B: {
    title: '🍖 El/La Carnívoro/a Social',
    description: 'Te encantan las carnes asadas por la comida y la compañía. Disfrutas el evento completo: la carne, las bebidas, la plática y el buen ambiente.',
    traits: ['Equilibrado', 'Social', 'Disfrutón', 'Participativo'],
    advice: 'Tienes el balance perfecto. Disfrutas todo lo que una carne asada ofrece.',
  },
  C: {
    title: '🌮 El/La Invitado/a Casual',
    description: 'Vas a las carnes asadas cuando te invitan y la pasas bien. No eres el más entusiasta pero disfrutas la comida y el momento.',
    traits: ['Relajado', 'Adaptable', 'Tranquilo', 'Casual'],
    advice: 'No tienes que ser el más fiestero. Disfruta a tu ritmo.',
  },
  D: {
    title: '🥗 El/La Anti-Asado',
    description: 'Las carnes asadas no son lo tuyo. Ya sea porque no comes carne, no te gusta el ambiente o simplemente no es tu plan favorito.',
    traits: ['Diferente', 'Selectivo', 'Independiente', 'Único'],
    advice: 'Cada quien sus gustos. Hay mil formas de disfrutar con amigos y familia.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
