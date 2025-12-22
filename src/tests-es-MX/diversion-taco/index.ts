// ¿Qué Taco Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo llegas a una fiesta?',
    options: [
      { text: 'Bien arreglado y listo para el reventón', type: 'A' },
      { text: 'Casual pero con estilo', type: 'B' },
      { text: 'Como me levanté, así voy', type: 'C' },
      { text: 'No voy a fiestas, prefiero estar en mi casa', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué salsa le pones a tu taco?',
    options: [
      { text: 'La más picosa que haya, güey', type: 'A' },
      { text: 'Verde con aguacate', type: 'B' },
      { text: 'Roja pero suavecita', type: 'C' },
      { text: 'Nada de salsa, así está chido', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿A qué hora llegas a la taquería?',
    options: [
      { text: 'A las 2am después del antro', type: 'A' },
      { text: 'A la hora de la comida, como Dios manda', type: 'B' },
      { text: 'En la noche, como cena tranqui', type: 'C' },
      { text: 'Cuando sea, me adapto', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Intenso y apasionado', type: 'A' },
      { text: 'Tradicional pero con mi toque', type: 'B' },
      { text: 'Sencillo y directo', type: 'C' },
      { text: 'Tranquilo y relajado', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué haces un domingo por la mañana?',
    options: [
      { text: 'Apenas voy llegando de la fiesta', type: 'A' },
      { text: 'Desayuno con la familia', type: 'B' },
      { text: 'Me echo una carnita asada', type: 'C' },
      { text: 'Me quedo en cama viendo series', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cuál es tu tortilla favorita?',
    options: [
      { text: 'De maíz azul, bien especial', type: 'A' },
      { text: 'De maíz normal, la clásica', type: 'B' },
      { text: 'De harina, norteño style', type: 'C' },
      { text: 'La que sea, todas me laten', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas ante los problemas?',
    options: [
      { text: 'De frente, sin miedo al éxito', type: 'A' },
      { text: 'Con calma pero decidido', type: 'B' },
      { text: 'Me hago güey un rato', type: 'C' },
      { text: 'Evito el drama, mejor me relajo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué acompañamiento le pones a tu taco?',
    options: [
      { text: 'Piña, cilantro y cebolla con todo', type: 'A' },
      { text: 'Limoncito y sal', type: 'B' },
      { text: 'Guacamole del bueno', type: 'C' },
      { text: 'Solo la carnita, sin inventos', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo es tu grupo de amigos?',
    options: [
      { text: 'Fiesteros y bien alegres', type: 'A' },
      { text: 'De toda la vida, los de siempre', type: 'B' },
      { text: 'Poquitos pero bien seleccionados', type: 'C' },
      { text: 'Prefiero andar solo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuántos tacos te echas?',
    options: [
      { text: 'Los que aguante, sin límite', type: 'A' },
      { text: 'Unos 5-6, lo normal', type: 'B' },
      { text: '3-4, controlado', type: 'C' },
      { text: '1-2, no soy de mucho comer', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌮 Taco al Pastor',
    description: 'Eres el alma de la fiesta, güey. Vibrante, lleno de sabor y siempre listo para el reventón. La gente te busca porque donde estás tú, hay buen ambiente. Eres ese amigo que nunca falla para el after.',
    traits: ['Fiestero', 'Carismático', 'Intenso', 'Popular'],
    advice: 'No te pases de rosca, también hay que saber descansar. Tu energía es chida pero cuídate.',
  },
  B: {
    title: '🥩 Taco de Bistec',
    description: 'Clásico y confiable, como los tacos de tu taquería favorita. No necesitas ser extravagante para brillar. La gente te respeta porque eres auténtico y siempre cumples.',
    traits: ['Tradicional', 'Confiable', 'Auténtico', 'Leal'],
    advice: 'Está padre ser clásico, pero no tengas miedo de probar cosas nuevas de vez en cuando.',
  },
  C: {
    title: '🐷 Taco de Carnitas',
    description: 'Eres sencillo pero sustancioso, güey. No necesitas tanto show para ser memorable. Tienes un círculo pequeño pero muy leal. Eres de gustos simples pero refinados.',
    traits: ['Sencillo', 'Sustancioso', 'Selectivo', 'Leal'],
    advice: 'Tu autenticidad es tu fuerza. No cambies por quedar bien con nadie.',
  },
  D: {
    title: '🌱 Taco de Nopales',
    description: 'Tranquilo y saludable, prefieres la paz a la fiesta. Eres reflexivo y te gusta tu espacio. No sigues la corriente, tienes tu propio estilo de vida y estás a gusto así.',
    traits: ['Tranquilo', 'Reflexivo', 'Independiente', 'Equilibrado'],
    advice: 'Tu paz interior es admirable. Solo no te aísles tanto, de vez en cuando sale con la banda.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
