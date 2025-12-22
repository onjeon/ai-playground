// Personalidad en el Tianguis
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido vas al tianguis?',
    options: [
      { text: 'Cada semana sin falta', type: 'A' },
      { text: 'Seguido, me gusta ir', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'Casi nunca o nunca', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes regatando?',
    options: [
      { text: 'Es mi especialidad, siempre consigo buen precio', type: 'A' },
      { text: 'Lo intento, a veces funciona', type: 'B' },
      { text: 'Me da pena, prefiero pagar lo que piden', type: 'C' },
      { text: 'Odio regatear', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué es lo que más compras en el tianguis?',
    options: [
      { text: 'Fruta y verdura, está más fresca', type: 'A' },
      { text: 'De todo un poco', type: 'B' },
      { text: 'Ropa o cosas de segunda', type: 'C' },
      { text: 'Nada, no voy al tianguis', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Llevas tu bolsa o carrito al tianguis?',
    options: [
      { text: 'Siempre, voy preparado/a', type: 'A' },
      { text: 'A veces, cuando me acuerdo', type: 'B' },
      { text: 'No, compro bolsas ahí', type: 'C' },
      { text: 'No voy al tianguis', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Pruebas la fruta antes de comprarla?',
    options: [
      { text: 'Siempre, es el ritual', type: 'A' },
      { text: 'A veces, si me dejan', type: 'B' },
      { text: 'No, me da pena', type: 'C' },
      { text: 'No compro fruta en el tianguis', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Te quedas a comer en los puestos del tianguis?',
    options: [
      { text: 'Sí, unos tacos o quesadillas', type: 'A' },
      { text: 'A veces, si se antoja', type: 'B' },
      { text: 'Rara vez', type: 'C' },
      { text: 'No como en la calle', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Tienes tu marchante de confianza?',
    options: [
      { text: 'Sí, varios, me conocen ya', type: 'A' },
      { text: 'Uno o dos de siempre', type: 'B' },
      { text: 'No, compro donde sea', type: 'C' },
      { text: 'No voy al tianguis', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes con el ruido y la gente del tianguis?',
    options: [
      { text: 'Me encanta el ambiente', type: 'A' },
      { text: 'Está bien, parte de la experiencia', type: 'B' },
      { text: 'Me estresa un poco', type: 'C' },
      { text: 'Lo odio, prefiero el súper', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Comparas precios entre puestos?',
    options: [
      { text: 'Siempre, busco el mejor precio', type: 'A' },
      { text: 'A veces, si es algo caro', type: 'B' },
      { text: 'No, compro en el primero que veo', type: 'C' },
      { text: 'No voy al tianguis', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿El tianguis vs el supermercado?',
    options: [
      { text: 'Tianguis siempre, más fresco y barato', type: 'A' },
      { text: 'Tianguis para algunas cosas', type: 'B' },
      { text: 'Prefiero el súper, más cómodo', type: 'C' },
      { text: 'Solo supermercado', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🥬 El/La Tianguero/a Profesional',
    description: 'El tianguis es tu territorio. Conoces a todos los marchantes, regateas como experto/a y nunca te vas sin tu bolsa llena de productos frescos a buen precio.',
    traits: ['Experto', 'Ahorrativo', 'Social', 'Tradicional'],
    advice: 'Eres un maestro/a del tianguis. Comparte tus tips con los novatos.',
  },
  B: {
    title: '🛒 El/La Tianguero/a Casual',
    description: 'Te gusta el tianguis y vas seguido. Conoces algunos trucos, tienes tus puestos favoritos y disfrutas la experiencia aunque no seas experto/a.',
    traits: ['Regular', 'Práctico', 'Adaptable', 'Equilibrado'],
    advice: 'Vas por buen camino. Sigue explorando y pronto serás experto/a.',
  },
  C: {
    title: '😅 El/La Tianguero/a Tímido',
    description: 'El tianguis te intimida un poco. El ruido, el regateo y la multitud no son lo tuyo. Prefieres la comodidad del supermercado aunque a veces te das una vuelta.',
    traits: ['Tímido', 'Práctico', 'Cómodo', 'Selectivo'],
    advice: 'El tianguis tiene mucho que ofrecer. Date una oportunidad y ve poco a poco.',
  },
  D: {
    title: '🏪 El/La Anti-Tianguis',
    description: 'El tianguis no es lo tuyo para nada. Prefieres la comodidad, el aire acondicionado y los precios fijos del supermercado.',
    traits: ['Moderno', 'Cómodo', 'Práctico', 'Diferente'],
    advice: 'Cada quien su estilo. Pero algún día prueba los tacos del tianguis, no te arrepentirás.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
