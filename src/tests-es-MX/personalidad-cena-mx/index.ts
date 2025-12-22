// Personalidad según tu Cena Mexicana
export const questions = [
  {
    id: 1,
    text: '¿A qué hora cenas normalmente?',
    options: [
      { text: 'Temprano, entre 7 y 8 pm', type: 'A' },
      { text: 'Normal, entre 8 y 9 pm', type: 'B' },
      { text: 'Tarde, después de las 10 pm', type: 'C' },
      { text: 'No ceno o pico algo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de cena prefieres?',
    options: [
      { text: 'Algo caliente y sustancioso', type: 'A' },
      { text: 'Algo ligero pero satisfactorio', type: 'B' },
      { text: 'Antojitos mexicanos', type: 'C' },
      { text: 'Cereal, fruta o nada', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué antojito elegirías para cenar?',
    options: [
      { text: 'Tacos de la esquina', type: 'A' },
      { text: 'Quesadillas o sincronizadas', type: 'B' },
      { text: 'Elotes o esquites', type: 'C' },
      { text: 'No como antojitos en la noche', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cenas en familia o solo/a?',
    options: [
      { text: 'En familia, es momento de reunirse', type: 'A' },
      { text: 'A veces en familia, a veces solo/a', type: 'B' },
      { text: 'Generalmente solo/a', type: 'C' },
      { text: 'No tengo hora fija de cena', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué bebida acompaña tu cena?',
    options: [
      { text: 'Agua de jamaica o horchata', type: 'A' },
      { text: 'Agua simple', type: 'B' },
      { text: 'Refresco o cerveza', type: 'C' },
      { text: 'Nada o lo que haya', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cocinas tu cena o la compras?',
    options: [
      { text: 'Cocino en casa', type: 'A' },
      { text: 'Ambas, depende del día', type: 'B' },
      { text: 'Generalmente la compro', type: 'C' },
      { text: 'Como lo que encuentre', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan pesada es tu cena?',
    options: [
      { text: 'Completa, como si fuera comida', type: 'A' },
      { text: 'Moderada, algo satisfactorio', type: 'B' },
      { text: 'Ligera, no me gusta acostarme lleno/a', type: 'C' },
      { text: 'Muy ligera o nada', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Pan dulce con café de noche?',
    options: [
      { text: 'Clásico, siempre', type: 'A' },
      { text: 'A veces, de antojo', type: 'B' },
      { text: 'Rara vez, engorda', type: 'C' },
      { text: 'No como pan de noche', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Comes mientras ves la tele?',
    options: [
      { text: 'Sí, es el momento de mis series', type: 'A' },
      { text: 'A veces, depende', type: 'B' },
      { text: 'Prefiero cenar sin distracciones', type: 'C' },
      { text: 'No ceno o ceno rápido', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Te da hambre antes de dormir después de cenar?',
    options: [
      { text: 'No, ceno bien y quedo satisfecho/a', type: 'A' },
      { text: 'A veces pico algo', type: 'B' },
      { text: 'Sí, siempre busco un snack', type: 'C' },
      { text: 'No aplica, no ceno', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌮 El/La Cenador/a Tradicional',
    description: 'Para ti la cena es importante. Comes bien, en familia si se puede, y disfrutas los sabores mexicanos de noche. Una buena cena cierra bien el día.',
    traits: ['Tradicional', 'Familiar', 'Organizado', 'Hogareño'],
    advice: 'Una cena en familia es invaluable. Sigue cultivando esos momentos.',
  },
  B: {
    title: '🥗 El/La Cenador/a Equilibrado',
    description: 'Cenas de manera balanceada. Ni muy pesado ni muy ligero. Sabes que es importante comer pero sin excederte antes de dormir.',
    traits: ['Equilibrado', 'Consciente', 'Moderado', 'Saludable'],
    advice: 'Tu balance nocturno es bueno para la digestión y el descanso.',
  },
  C: {
    title: '🌙 El/La Cenador/a Nocturno',
    description: 'Cenas tarde y a veces pesado. Los antojitos nocturnos son tu debilidad. La noche es para disfrutar y la comida es parte de eso.',
    traits: ['Nocturno', 'Flexible', 'Antojadizo', 'Relajado'],
    advice: 'Los antojitos nocturnos son ricos pero cuida no excederte. Tu estómago te lo agradecerá.',
  },
  D: {
    title: '🛌 El/La Anti-Cena',
    description: 'La cena no es prioridad para ti. Comes ligero o nada. Quizás prefieres cenar temprano o simplemente no tienes hambre de noche.',
    traits: ['Ligero', 'Práctico', 'Diferente', 'Flexible'],
    advice: 'Si te funciona está bien, pero asegúrate de no irte a dormir con hambre.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
