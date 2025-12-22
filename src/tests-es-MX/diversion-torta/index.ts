// ¿Qué Torta Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te defines en una palabra?',
    options: [
      { text: 'Completo', type: 'A' },
      { text: 'Tradicional', type: 'B' },
      { text: 'Sabroso', type: 'C' },
      { text: 'Ligero', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo es tu día ideal?',
    options: [
      { text: 'Lleno de actividades y planes', type: 'A' },
      { text: 'Tranquilo pero productivo', type: 'B' },
      { text: 'Con buena comida y amigos', type: 'C' },
      { text: 'Relajado sin hacer mucho', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué valoras más en una amistad?',
    options: [
      { text: 'Que esté en las buenas y en las malas', type: 'A' },
      { text: 'Lealtad de toda la vida', type: 'B' },
      { text: 'Que sea divertido y buena onda', type: 'C' },
      { text: 'Que no sea intenso', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿A qué hora comes torta?',
    options: [
      { text: 'A cualquier hora, cuando se antoje', type: 'A' },
      { text: 'A la hora del almuerzo', type: 'B' },
      { text: 'En la noche después del trabajo', type: 'C' },
      { text: 'Casi no como tortas', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te vistes para salir?',
    options: [
      { text: 'Con todo, bien arreglado', type: 'A' },
      { text: 'Clásico pero elegante', type: 'B' },
      { text: 'Cómodo pero presentable', type: 'C' },
      { text: 'Como sea, no me fijo mucho', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan organizado eres?',
    options: [
      { text: 'Tengo todo controlado', type: 'A' },
      { text: 'Sigo mis rutinas', type: 'B' },
      { text: 'Más o menos, ahí la llevo', type: 'C' },
      { text: 'El caos es mi orden', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas tus finanzas?',
    options: [
      { text: 'Tengo de todo guardado', type: 'A' },
      { text: 'Ahorro lo que puedo', type: 'B' },
      { text: 'Gasto en lo que me hace feliz', type: 'C' },
      { text: 'Vivo al día', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué bebida acompaña tu torta?',
    options: [
      { text: 'Refresco bien helado', type: 'A' },
      { text: 'Agua de jamaica', type: 'B' },
      { text: 'Una chela bien fría', type: 'C' },
      { text: 'Agua simple', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo eres en el trabajo?',
    options: [
      { text: 'Doy el 100% siempre', type: 'A' },
      { text: 'Cumplo con lo mío', type: 'B' },
      { text: 'Hago lo que toca pero disfruto', type: 'C' },
      { text: 'Hago lo mínimo necesario', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué ingrediente extra le pones a tu torta?',
    options: [
      { text: 'De todo: aguacate, queso, jamón extra', type: 'A' },
      { text: 'Lo clásico: frijoles y chile', type: 'B' },
      { text: 'Algo especial que la haga única', type: 'C' },
      { text: 'Nada extra, así está bien', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🥪 Torta Cubana',
    description: '¡Eres la torta más completa! Tienes de todo: carisma, energía, habilidades. Nunca te quedas corto en nada. La gente te admira porque siempre das más de lo esperado.',
    traits: ['Completo', 'Generoso', 'Abundante', 'Trabajador'],
    advice: 'Está chido ser tan completo, pero no te agotes. A veces menos es más.',
  },
  B: {
    title: '🐷 Torta de Milanesa',
    description: 'El clásico que nunca falla. Tradicional, confiable y siempre satisfactorio. No necesitas ser extravagante para ser el favorito de todos.',
    traits: ['Clásico', 'Confiable', 'Tradicional', 'Satisfactorio'],
    advice: 'Tu consistencia es tu fuerza. Pero atrévete a probar algo nuevo de vez en cuando.',
  },
  C: {
    title: '🐖 Torta de Carnitas',
    description: 'Sabroso y con sustancia. No eres el más llamativo pero los que te conocen saben que eres de lo mejor. Tienes ese sabor especial que te hace memorable.',
    traits: ['Sabroso', 'Auténtico', 'Sustancioso', 'Memorable'],
    advice: 'Tu autenticidad es tu sello. Sigue siendo tú mismo, eso es lo que te hace especial.',
  },
  D: {
    title: '🥑 Torta de Aguacate',
    description: 'Ligero y sin complicaciones. Prefieres la simplicidad a lo elaborado. Eres de gustos sencillos y eso está perfecto. No todos necesitan ser intensos.',
    traits: ['Ligero', 'Simple', 'Relajado', 'Sencillo'],
    advice: 'Tu simplicidad es refrescante. Solo no te quedes tan en tu zona de confort.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
