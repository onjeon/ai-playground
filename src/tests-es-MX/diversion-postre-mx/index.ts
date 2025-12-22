// ¿Qué Postre Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Dulce y cariñoso/a', type: 'A' },
      { text: 'Tradicional y hogareño/a', type: 'B' },
      { text: 'Creativo/a y diferente', type: 'C' },
      { text: 'Simple pero memorable', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué prefieres en una tarde de domingo?',
    options: [
      { text: 'Ir por un café con pan dulce', type: 'A' },
      { text: 'Comer en casa de la abuela', type: 'B' },
      { text: 'Probar algo nuevo en un restaurante', type: 'C' },
      { text: 'Quedarme en casa relajado', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te comportas en una fiesta?',
    options: [
      { text: 'Soy el consentido de todos', type: 'A' },
      { text: 'Platico con la familia', type: 'B' },
      { text: 'Busco gente interesante', type: 'C' },
      { text: 'Me quedo tranquilo en una esquina', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tipo de música te gusta?',
    options: [
      { text: 'Pop y música alegre', type: 'A' },
      { text: 'Boleros y música tradicional', type: 'B' },
      { text: 'Indie y cosas diferentes', type: 'C' },
      { text: 'Lo que sea, no soy exigente', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo eres en el amor?',
    options: [
      { text: 'Muy romántico y detallista', type: 'A' },
      { text: 'Tradicional y comprometido', type: 'B' },
      { text: 'Intenso y apasionado', type: 'C' },
      { text: 'Tranquilo y sin dramas', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cuál es tu plan ideal para un cumpleaños?',
    options: [
      { text: 'Una fiesta con todos mis seres queridos', type: 'A' },
      { text: 'Comida en familia con pastel', type: 'B' },
      { text: 'Algo diferente y original', type: 'C' },
      { text: 'Nada especial, un día normal', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan goloso/a eres?',
    options: [
      { text: 'Muchísimo, amo lo dulce', type: 'A' },
      { text: 'Me gusta pero con medida', type: 'B' },
      { text: 'Solo cosas especiales', type: 'C' },
      { text: 'No soy tan dulcero', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te describen tus amigos?',
    options: [
      { text: 'El consentido del grupo', type: 'A' },
      { text: 'El de siempre, confiable', type: 'B' },
      { text: 'El diferente y creativo', type: 'C' },
      { text: 'El tranquilo y relajado', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué bebida acompaña tu postre?',
    options: [
      { text: 'Café con leche', type: 'A' },
      { text: 'Café de olla', type: 'B' },
      { text: 'Algo diferente como té', type: 'C' },
      { text: 'Solo agua', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿En qué momento del día eres más feliz?',
    options: [
      { text: 'En la merienda con algo dulce', type: 'A' },
      { text: 'En la sobremesa familiar', type: 'B' },
      { text: 'En la noche cuando hay calma', type: 'C' },
      { text: 'Me da igual, cualquier momento', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🍰 Tres Leches',
    description: '¡Eres pura dulzura! Esponjoso, lleno de sabor y el consentido de todos. La gente te adora porque irradias cariño y siempre haces sentir bien a los demás. Eres el postre que todos quieren en su fiesta.',
    traits: ['Dulce', 'Cariñoso', 'Popular', 'Generoso'],
    advice: 'Tu dulzura es tu encanto. Solo cuida de no endulzar tanto que empalagues, güey.',
  },
  B: {
    title: '🍮 Flan Napolitano',
    description: 'Clásico y tradicional. Eres el postre que recuerda a la abuela. Tu sabor es reconfortante y familiar. No necesitas ser extravagante para ser el favorito.',
    traits: ['Tradicional', 'Reconfortante', 'Familiar', 'Clásico'],
    advice: 'Tu esencia tradicional es invaluable. Pero atrévete a probar nuevas recetas de vez en cuando.',
  },
  C: {
    title: '🍫 Chongos Zamoranos',
    description: 'Único y diferente. No todos te entienden al principio, pero los que te conocen te adoran. Tienes ese sabor especial que te hace memorable y diferente al resto.',
    traits: ['Único', 'Especial', 'Memorable', 'Diferente'],
    advice: 'Tu singularidad es tu tesoro. No cambies por encajar, los que valen te apreciarán como eres.',
  },
  D: {
    title: '🍨 Nieve de Garrafa',
    description: 'Simple pero delicioso. Refrescante y sin complicaciones. No necesitas ser elaborado para alegrar el día de alguien. Tu sencillez es tu mayor fortaleza.',
    traits: ['Simple', 'Refrescante', 'Accesible', 'Relajado'],
    advice: 'Tu simplicidad es encantadora. Pero a veces vale la pena añadir un toque especial.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
