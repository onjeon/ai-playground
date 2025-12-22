// ¿Qué Michelada Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te gusta tu michelada?',
    options: [
      { text: 'Con todo: camarón, chamoy, chile', type: 'A' },
      { text: 'Clásica: limón, sal, salsa', type: 'B' },
      { text: 'Cubana: clamato y especias', type: 'C' },
      { text: 'Simple: solo con limón y sal', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cuándo tomas michelada?',
    options: [
      { text: 'En cualquier momento, siempre es buena hora', type: 'A' },
      { text: 'En la comida o con botana', type: 'B' },
      { text: 'Para curar la cruda', type: 'C' },
      { text: 'Solo en ocasiones especiales', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan picoso/a eres?',
    options: [
      { text: 'Bien picoso, entre más chile mejor', type: 'A' },
      { text: 'Picante pero controlado', type: 'B' },
      { text: 'Un poquito nada más', type: 'C' },
      { text: 'Nada de picante', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Intenso y con mucho sabor', type: 'A' },
      { text: 'Clásico pero efectivo', type: 'B' },
      { text: 'Complejo y con capas', type: 'C' },
      { text: 'Simple y directo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Dónde prefieres tomar tu michelada?',
    options: [
      { text: 'En un bar con ambiente', type: 'A' },
      { text: 'En un restaurante de mariscos', type: 'B' },
      { text: 'En casa con los amigos', type: 'C' },
      { text: 'Donde sea', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué botana acompaña tu michelada?',
    options: [
      { text: 'Cóctel de camarón o aguachile', type: 'A' },
      { text: 'Chicharrones con salsa', type: 'B' },
      { text: 'Tacos de pescado', type: 'C' },
      { text: 'Nada, solo la michelada', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuántas micheladas te echas?',
    options: [
      { text: 'Las que aguante', type: 'A' },
      { text: 'Dos o tres está bien', type: 'B' },
      { text: 'Una está perfecta', type: 'C' },
      { text: 'Media y ya', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué cerveza prefieres para tu michelada?',
    options: [
      { text: 'La más oscura y con cuerpo', type: 'A' },
      { text: 'Una clara tipo lager', type: 'B' },
      { text: 'Cualquiera funciona', type: 'C' },
      { text: 'La más ligera posible', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo pides tu michelada?',
    options: [
      { text: 'Con instrucciones específicas', type: 'A' },
      { text: 'Como la hagan está bien', type: 'B' },
      { text: 'Pregunto cómo la preparan', type: 'C' },
      { text: 'La más simple que tengan', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué opinas de las micheladas preparadas?',
    options: [
      { text: 'Son arte, me encantan', type: 'A' },
      { text: 'Están bien pero prefiero clásica', type: 'B' },
      { text: 'Depende del lugar', type: 'C' },
      { text: 'Son demasiado', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🦐 La Michelada Preparada',
    description: '¡Eres todo un espectáculo! Como la michelada preparada, tienes de todo: camarón, chamoy, chile y más. No te conformas con lo básico. Tu personalidad es intensa y llamativa.',
    traits: ['Intenso', 'Extravagante', 'Completo', 'Llamativo'],
    advice: 'Tu intensidad es tu marca. Solo recuerda que a veces menos es más.',
  },
  B: {
    title: '🍺 La Michelada Clásica',
    description: 'Tradicional y efectiva. Como la michelada clásica, no necesitas adornos para ser deliciosa. Tu fórmula probada nunca falla: limón, sal, salsa y cerveza.',
    traits: ['Clásico', 'Confiable', 'Tradicional', 'Efectivo'],
    advice: 'Tu consistencia es tu fuerza. Sigue siendo ese clásico que nunca decepciona.',
  },
  C: {
    title: '🍅 La Michelada Cubana',
    description: 'Compleja y con profundidad. El clamato y las especias te dan ese sabor único. Tienes capas de personalidad que la gente va descubriendo poco a poco.',
    traits: ['Complejo', 'Profundo', 'Especial', 'Misterioso'],
    advice: 'Tu complejidad te hace interesante. Sigue siendo ese sabor único.',
  },
  D: {
    title: '🍋 La Chelada',
    description: 'Simple y directa. Solo cerveza con limón y sal. No necesitas complicarte la vida para pasarla bien. Tu simplicidad es refrescante.',
    traits: ['Simple', 'Refrescante', 'Directo', 'Relajado'],
    advice: 'Tu simplicidad es tu encanto. No te compliques, así estás perfecto.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
