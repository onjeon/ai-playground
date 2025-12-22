// ¿Qué Tamal Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes en las reuniones familiares?',
    options: [
      { text: 'En mi elemento, amo el desmadre', type: 'A' },
      { text: 'Cómodo con la familia cercana', type: 'B' },
      { text: 'Me gusta pero me canso rápido', type: 'C' },
      { text: 'Prefiero estar en mi cuarto', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de música te prende más?',
    options: [
      { text: 'Cumbia para bailar', type: 'A' },
      { text: 'Banda o norteñas', type: 'B' },
      { text: 'Pop tranquilo', type: 'C' },
      { text: 'Lo que sea, no soy exigente', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo es tu personalidad?',
    options: [
      { text: 'Dulce y cariñoso', type: 'A' },
      { text: 'Fuerte y con carácter', type: 'B' },
      { text: 'Equilibrado y versátil', type: 'C' },
      { text: 'Reservado pero profundo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces en las posadas?',
    options: [
      { text: 'Rompo la piñata como campeón', type: 'A' },
      { text: 'Ayudo a hacer los tamales', type: 'B' },
      { text: 'Platico con todo mundo', type: 'C' },
      { text: 'Me quedo en una esquina comiendo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te defines en el trabajo?',
    options: [
      { text: 'Creativo y diferente', type: 'A' },
      { text: 'Trabajador y constante', type: 'B' },
      { text: 'Adaptable a todo', type: 'C' },
      { text: 'Eficiente pero invisible', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan tradicional eres?',
    options: [
      { text: 'Me gustan las cosas nuevas', type: 'A' },
      { text: 'Muy tradicional', type: 'B' },
      { text: 'Un poco de ambos', type: 'C' },
      { text: 'No me fijo en eso', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te llevas con tu familia?',
    options: [
      { text: 'Somos muy unidos y cariñosos', type: 'A' },
      { text: 'Tradicional pero con respeto', type: 'B' },
      { text: 'Normal, sin dramas', type: 'C' },
      { text: 'Cada quien su espacio', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué ingrediente extra te define?',
    options: [
      { text: 'Pasitas y frutas', type: 'A' },
      { text: 'Chile y especias', type: 'B' },
      { text: 'Un poco de todo', type: 'C' },
      { text: 'Nada extra, así natural', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo celebras las fiestas?',
    options: [
      { text: 'Con todo: decoración, música, comida', type: 'A' },
      { text: 'Tradicional como siempre', type: 'B' },
      { text: 'Lo que salga', type: 'C' },
      { text: 'Prefiero no celebrar mucho', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿En qué hoja te envuelves?',
    options: [
      { text: 'De plátano, diferente y especial', type: 'A' },
      { text: 'De maíz, lo tradicional', type: 'B' },
      { text: 'La que haya disponible', type: 'C' },
      { text: 'No me importa el envoltorio', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🍬 Tamal de Dulce',
    description: 'Eres dulce, cariñoso y diferente. Tienes ese toque especial que te hace único. No todos te entienden al principio, pero los que te conocen te adoran.',
    traits: ['Dulce', 'Único', 'Creativo', 'Cariñoso'],
    advice: 'Tu dulzura es un don. No dejes que el mundo te amargue, pero tampoco seas tan inocente.',
  },
  B: {
    title: '🌶️ Tamal de Rajas con Queso',
    description: 'Picosito pero con equilibrio. Tradicional mexicano de corazón. Tienes carácter pero también sabes ser suave cuando toca. El favorito de muchos.',
    traits: ['Tradicional', 'Equilibrado', 'Con carácter', 'Popular'],
    advice: 'Tu balance de sabores es perfecto. Sigue siendo esa mezcla de fuego y calma.',
  },
  C: {
    title: '🐔 Tamal de Mole',
    description: 'Versátil y complejo. Como el mole, tienes muchas capas y sabores. Te adaptas a todo pero nunca pierdes tu esencia. Eres resultado de muchas influencias.',
    traits: ['Versátil', 'Complejo', 'Adaptable', 'Profundo'],
    advice: 'Tu complejidad es tu riqueza. Sigue explorando todas tus facetas.',
  },
  D: {
    title: '🥬 Tamal de Elote',
    description: 'Sencillo pero delicioso. No necesitas muchos ingredientes para brillar. Prefieres lo simple y natural. Tu autenticidad es tu mayor fortaleza.',
    traits: ['Sencillo', 'Auténtico', 'Natural', 'Reservado'],
    advice: 'Tu simplicidad es refrescante. No cambies, pero sal de tu zona de confort a veces.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
