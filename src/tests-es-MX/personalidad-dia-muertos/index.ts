// Personalidad en el Día de Muertos
export const questions = [
  {
    id: 1,
    text: '¿Pones altar de muertos en tu casa?',
    options: [
      { text: 'Sí, completo con todo lo tradicional', type: 'A' },
      { text: 'Uno pequeño pero con cariño', type: 'B' },
      { text: 'A veces, cuando hay tiempo', type: 'C' },
      { text: 'No, no pongo altar', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Visitas el panteón en estas fechas?',
    options: [
      { text: 'Sí, es tradición familiar sagrada', type: 'A' },
      { text: 'Cuando puedo, trato de ir', type: 'B' },
      { text: 'Rara vez, no me gusta mucho', type: 'C' },
      { text: 'No, nunca voy', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué te parece el pan de muerto?',
    options: [
      { text: 'Lo amo, es mi favorito del año', type: 'A' },
      { text: 'Me gusta mucho, lo disfruto', type: 'B' },
      { text: 'Está rico pero no me vuelve loco', type: 'C' },
      { text: 'No me gusta mucho', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Te has disfrazado de catrina/catrin?',
    options: [
      { text: 'Sí, varias veces, me encanta', type: 'A' },
      { text: 'Una o dos veces', type: 'B' },
      { text: 'No, pero me gustaría', type: 'C' },
      { text: 'No, no es lo mío', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas de la tradición del Día de Muertos?',
    options: [
      { text: 'Es hermosa, muy especial y única', type: 'A' },
      { text: 'Me gusta, es parte de nuestra cultura', type: 'B' },
      { text: 'Está bien pero no la sigo mucho', type: 'C' },
      { text: 'No me identifico con ella', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Preparas comida especial para el altar?',
    options: [
      { text: 'Sí, lo que le gustaba al difunto', type: 'A' },
      { text: 'Algo simbólico al menos', type: 'B' },
      { text: 'Solo compro pan y fruta', type: 'C' },
      { text: 'No preparo nada especial', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Has ido a Pátzcuaro o Mixquic en Día de Muertos?',
    options: [
      { text: 'Sí, es una experiencia increíble', type: 'A' },
      { text: 'No pero me gustaría ir', type: 'B' },
      { text: 'No me llama mucho la atención', type: 'C' },
      { text: 'No, y no planeo ir', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué significa para ti el Día de Muertos?',
    options: [
      { text: 'Conexión con los seres queridos que ya no están', type: 'A' },
      { text: 'Una tradición bonita y cultural', type: 'B' },
      { text: 'Un día festivo más', type: 'C' },
      { text: 'No significa mucho para mí', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué te parece la película Coco?',
    options: [
      { text: 'Me hizo llorar, es hermosa', type: 'A' },
      { text: 'Muy bonita y bien hecha', type: 'B' },
      { text: 'Entretenida pero algo comercial', type: 'C' },
      { text: 'No la he visto o no me gustó', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Pones cempasúchil y veladoras?',
    options: [
      { text: 'Sí, es esencial para el altar', type: 'A' },
      { text: 'Al menos unas flores y velitas', type: 'B' },
      { text: 'A veces, si las consigo', type: 'C' },
      { text: 'No, no pongo nada', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💀 El Guardián de las Tradiciones',
    description: 'El Día de Muertos es sagrado para ti. Honras a tus difuntos con altares completos, visitas al panteón y mucho cariño. Mantienes viva una de las tradiciones más hermosas de México.',
    traits: ['Tradicional', 'Espiritual', 'Cultural', 'Emotivo'],
    advice: 'Tu conexión con esta tradición es invaluable. Sigue transmitiéndola a las nuevas generaciones.',
  },
  B: {
    title: '🌸 El Celebrador Cultural',
    description: 'Aprecias la tradición del Día de Muertos y participas a tu manera. No necesitas hacer todo pero valoras el significado y la belleza de esta fecha.',
    traits: ['Cultural', 'Respetuoso', 'Participativo', 'Sensible'],
    advice: 'Tu forma de honrar la tradición es válida. Lo importante es el sentimiento, no la magnitud.',
  },
  C: {
    title: '🍞 El Observador Casual',
    description: 'Conoces la tradición y la respetas pero no la sigues activamente. Disfrutas el pan de muerto y el ambiente pero sin involucrarte demasiado.',
    traits: ['Casual', 'Respetuoso', 'Observador', 'Moderno'],
    advice: 'Está bien celebrar a tu estilo. Pero date chance de profundizar más, la tradición tiene mucho que ofrecer.',
  },
  D: {
    title: '🌍 El Diferente',
    description: 'El Día de Muertos no resuena contigo. Tienes otras formas de recordar a tus seres queridos o simplemente no te identificas con esta tradición.',
    traits: ['Independiente', 'Diferente', 'Personal', 'Moderno'],
    advice: 'Cada quien tiene su forma de procesar la muerte y los recuerdos. Tu camino es válido.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
