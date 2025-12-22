// Personalidad según tu Desayuno Mexicano
export const questions = [
  {
    id: 1,
    text: '¿Qué prefieres desayunar entre semana?',
    options: [
      { text: 'Chilaquiles o huevos con todo', type: 'A' },
      { text: 'Algo ligero: fruta o yogurt', type: 'B' },
      { text: 'Un café y ya, sin tiempo', type: 'C' },
      { text: 'No desayuno', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te gustan los huevos?',
    options: [
      { text: 'Rancheros, divorciados o con salsa', type: 'A' },
      { text: 'Revueltos o estrellados, sencillos', type: 'B' },
      { text: 'Me da igual, lo que haya', type: 'C' },
      { text: 'No como huevo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan importante es el desayuno para ti?',
    options: [
      { text: 'Sagrado, es la comida más importante', type: 'A' },
      { text: 'Importante, trato de desayunar siempre', type: 'B' },
      { text: 'Depende del día y mi tiempo', type: 'C' },
      { text: 'No me importa, me lo salto seguido', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Salsa o sin salsa en el desayuno?',
    options: [
      { text: 'Todo con salsa, siempre', type: 'A' },
      { text: 'Algo de salsa, moderado', type: 'B' },
      { text: 'Poca o nada de salsa', type: 'C' },
      { text: 'Nada de picante jamás', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué bebes con tu desayuno?',
    options: [
      { text: 'Jugo de naranja natural', type: 'A' },
      { text: 'Café, necesito mi cafeína', type: 'B' },
      { text: 'Agua o lo que haya', type: 'C' },
      { text: 'Nada o no desayuno', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué opinas de los tamales en el desayuno?',
    options: [
      { text: 'Perfectos, con su atole', type: 'A' },
      { text: 'Ricos pero muy pesados', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'No me gustan o no los como', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Desayunos en la calle o en casa?',
    options: [
      { text: 'En casa, hecho con amor', type: 'A' },
      { text: 'Ambos, depende del día', type: 'B' },
      { text: 'En la calle, más práctico', type: 'C' },
      { text: 'No desayuno o como cualquier cosa', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Los domingos desayunas diferente?',
    options: [
      { text: 'Sí, es el día del desayuno especial', type: 'A' },
      { text: 'Un poco más elaborado', type: 'B' },
      { text: 'Igual que siempre', type: 'C' },
      { text: 'Los domingos me levanto tarde y no desayuno', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Pan dulce con el café?',
    options: [
      { text: 'Siempre, no puede faltar', type: 'A' },
      { text: 'A veces, como antojo', type: 'B' },
      { text: 'Rara vez', type: 'C' },
      { text: 'No como pan dulce', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuánto tiempo le dedicas al desayuno?',
    options: [
      { text: 'El necesario, me lo disfruto', type: 'A' },
      { text: 'Unos 15-20 minutos', type: 'B' },
      { text: 'Lo como rápido, sin tiempo', type: 'C' },
      { text: 'Nada, no desayuno', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🍳 El/La Desayunador/a Tradicional',
    description: 'El desayuno es sagrado para ti. Chilaquiles, huevos rancheros, jugo y pan dulce. Empiezas el día como se debe, con un desayuno mexicano completo.',
    traits: ['Tradicional', 'Organizado', 'Madrugador', 'Casero'],
    advice: 'Un buen desayuno es clave para el día. Sigue disfrutando esas mañanas mexicanas.',
  },
  B: {
    title: '☕ El/La Desayunador/a Equilibrado',
    description: 'Desayunas bien pero sin excesos. Sabes balancear entre lo rico y lo práctico. El café es esencial y el desayuno importante pero no exagerado.',
    traits: ['Equilibrado', 'Práctico', 'Saludable', 'Organizado'],
    advice: 'Tu balance es bueno. El desayuno te da energía sin pesarte.',
  },
  C: {
    title: '🏃 El/La Desayunador/a Express',
    description: 'El tiempo no te alcanza para desayunos elaborados. Un café y algo rápido en el camino es tu estilo. Práctico pero quizás te falta combustible.',
    traits: ['Ocupado', 'Práctico', 'Rápido', 'Activo'],
    advice: 'Intenta dedicarle un poco más de tiempo al desayuno. Tu cuerpo te lo agradecerá.',
  },
  D: {
    title: '😴 El/La Anti-Desayuno',
    description: 'El desayuno no es lo tuyo. Prefieres dormir más o simplemente no tienes hambre en las mañanas. Tu primera comida es más bien brunch o directo la comida.',
    traits: ['Nocturno', 'Diferente', 'Flexible', 'Independiente'],
    advice: 'Cada cuerpo es diferente, pero considera al menos algo ligero en las mañanas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
