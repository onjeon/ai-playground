// ¿Qué Pan Dulce Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cuándo prefieres comer pan dulce?',
    options: [
      { text: 'En la merienda con café', type: 'A' },
      { text: 'De desayuno tempranito', type: 'B' },
      { text: 'Cuando se me antoja', type: 'C' },
      { text: 'Casi no como pan dulce', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Dulce y tradicional', type: 'A' },
      { text: 'Sencillo pero sustancioso', type: 'B' },
      { text: 'Con mucho relleno y sabor', type: 'C' },
      { text: 'Diferente y único', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué bebida acompaña tu pan?',
    options: [
      { text: 'Café con leche calientito', type: 'A' },
      { text: 'Chocolate abuelita', type: 'B' },
      { text: 'Atole de varios sabores', type: 'C' },
      { text: 'Leche fría', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo eres en las reuniones familiares?',
    options: [
      { text: 'El consentido de todos', type: 'A' },
      { text: 'Presente pero discreto', type: 'B' },
      { text: 'El que tiene de todo', type: 'C' },
      { text: 'El diferente de la familia', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan goloso/a eres?',
    options: [
      { text: 'Muchísimo, amo lo dulce', type: 'A' },
      { text: 'Me gusta pero con medida', type: 'B' },
      { text: 'Solo cosas especiales', type: 'C' },
      { text: 'Prefiero lo salado', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Dónde compras tu pan dulce?',
    options: [
      { text: 'En la panadería del barrio', type: 'A' },
      { text: 'En el súper', type: 'B' },
      { text: 'Donde lo encuentre', type: 'C' },
      { text: 'No compro pan dulce', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo eliges tu pan en la panadería?',
    options: [
      { text: 'Voy directo a mi favorito', type: 'A' },
      { text: 'Con las pinzas pruebo todo', type: 'B' },
      { text: 'El que se vea más fresco', type: 'C' },
      { text: 'No voy a panaderías', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan tradicional eres?',
    options: [
      { text: 'Muy tradicional', type: 'A' },
      { text: 'Bastante', type: 'B' },
      { text: 'Un poco moderno', type: 'C' },
      { text: 'Nada tradicional', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Compartes tu pan dulce?',
    options: [
      { text: 'Sí, con todos', type: 'A' },
      { text: 'Solo con mi familia', type: 'B' },
      { text: 'A veces si sobra', type: 'C' },
      { text: 'Es mío, no comparto', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué característica te define mejor?',
    options: [
      { text: 'Clásico y querido por todos', type: 'A' },
      { text: 'Simple pero reconfortante', type: 'B' },
      { text: 'Lleno de sorpresas', type: 'C' },
      { text: 'Único e irrepetible', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🥐 La Concha',
    description: '¡Eres el pan dulce más querido de México! Clásico, tradicional y presente en cada panadería. Tu capa crujiente por fuera y suavecita por dentro representa tu personalidad: dulce con carácter.',
    traits: ['Clásico', 'Querido', 'Tradicional', 'Dulce'],
    advice: 'Eres el favorito de muchos. Sigue siendo ese pan que alegra las meriendas.',
  },
  B: {
    title: '🍞 El Cuerno',
    description: 'Sencillo pero satisfactorio. No necesitas ser el más llamativo para ser delicioso. Tu simplicidad es tu encanto y siempre cumples con lo que prometes.',
    traits: ['Sencillo', 'Confiable', 'Satisfactorio', 'Humilde'],
    advice: 'Tu sencillez es tu fuerza. No necesitas adornos para brillar.',
  },
  C: {
    title: '🎂 El Polvorón Relleno',
    description: 'Lleno de sorpresas y sabor. Cuando la gente te conoce, descubre que tienes mucho más que ofrecer de lo que parece. Tu relleno dulce es tu personalidad escondida.',
    traits: ['Sorprendente', 'Completo', 'Dulce', 'Generoso'],
    advice: 'Tus capas te hacen especial. Sigue sorprendiendo a quien te conozca.',
  },
  D: {
    title: '🥯 El Ojo de Buey',
    description: 'Diferente y único. No eres el típico pan dulce y eso está bien. Tu forma distinta te hace memorable. Los que te conocen, te aprecian.',
    traits: ['Único', 'Diferente', 'Memorable', 'Especial'],
    advice: 'Tu singularidad es tu tesoro. No cambies por encajar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
