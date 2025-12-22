// Personalidad con tus Compadres
export const questions = [
  {
    id: 1,
    text: '¿Cómo elegiste a tus compadres?',
    options: [
      { text: 'Son mis mejores amigos de toda la vida', type: 'A' },
      { text: 'Amigos cercanos que quiero mucho', type: 'B' },
      { text: 'Familiares o conocidos', type: 'C' },
      { text: 'Por compromiso o no tengo compadres', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan seguido ves a tus compadres?',
    options: [
      { text: 'Muy seguido, somos cercanos', type: 'A' },
      { text: 'Regularmente, mantenemos contacto', type: 'B' },
      { text: 'En eventos y fechas especiales', type: 'C' },
      { text: 'Casi nunca', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tus compadres cumplen con sus ahijados?',
    options: [
      { text: 'Sí, son excelentes padrinos', type: 'A' },
      { text: 'Sí, en lo importante', type: 'B' },
      { text: 'A veces, lo básico', type: 'C' },
      { text: 'No mucho o nada', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo son las reuniones con tus compadres?',
    options: [
      { text: 'Increíbles, la pasamos muy bien', type: 'A' },
      { text: 'Agradables, disfrutamos', type: 'B' },
      { text: 'Normales, convivimos', type: 'C' },
      { text: 'Incómodas o no nos reunimos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Confías en tus compadres para cuidar a tus hijos?',
    options: [
      { text: 'Totalmente, como a mí mismo/a', type: 'A' },
      { text: 'Sí, confío en ellos', type: 'B' },
      { text: 'Más o menos', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tus compadres te apoyan en momentos difíciles?',
    options: [
      { text: 'Siempre, son incondicionales', type: 'A' },
      { text: 'Sí, cuando los necesito', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No mucho', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo describirías el compadrazgo en tu vida?',
    options: [
      { text: 'Sagrado, es familia elegida', type: 'A' },
      { text: 'Importante, un lazo especial', type: 'B' },
      { text: 'Una tradición que se sigue', type: 'C' },
      { text: 'Solo un título', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Has tenido conflictos con tus compadres?',
    options: [
      { text: 'No, nunca', type: 'A' },
      { text: 'Pequeños malentendidos, nada grave', type: 'B' },
      { text: 'Sí, algunos problemas', type: 'C' },
      { text: 'Sí, conflictos serios', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Te arrepientes de tu elección de compadres?',
    options: [
      { text: 'Para nada, fueron la mejor elección', type: 'A' },
      { text: 'No, estoy contento/a', type: 'B' },
      { text: 'A veces pienso que pude elegir mejor', type: 'C' },
      { text: 'Sí, me arrepiento', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué esperas del compadrazgo?',
    options: [
      { text: 'Una relación de por vida, familia', type: 'A' },
      { text: 'Apoyo mutuo y cariño', type: 'B' },
      { text: 'Que cumplan con lo básico', type: 'C' },
      { text: 'Ya no espero nada', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🙏 El Compadrazgo Sagrado',
    description: 'Para ti el compadrazgo es sagrado. Elegiste bien y has cultivado una relación de familia verdadera. Son apoyo incondicional y amigos de por vida.',
    traits: ['Tradicional', 'Leal', 'Comprometido', 'Familiar'],
    advice: 'El compadrazgo bien llevado es una bendición. Sigue cultivando ese lazo especial.',
  },
  B: {
    title: '🤝 El Compadrazgo Sólido',
    description: 'Tienes una buena relación de compadrazgo. Hay cariño, respeto y cumplimiento. Es una relación significativa en tu vida.',
    traits: ['Respetuoso', 'Cumplidor', 'Cariñoso', 'Confiable'],
    advice: 'Una relación de compadrazgo sana. Mantén el contacto y fortalece ese lazo.',
  },
  C: {
    title: '😐 El Compadrazgo Formal',
    description: 'Tu relación de compadrazgo es más formal o distante. Se cumplen las obligaciones básicas pero no hay una conexión profunda.',
    traits: ['Formal', 'Distante', 'Cumplidor', 'Tradicional'],
    advice: 'No todas las relaciones de compadrazgo son cercanas. Está bien mantenerlo como tradición.',
  },
  D: {
    title: '💔 El Compadrazgo Roto',
    description: 'Tu experiencia de compadrazgo no ha sido la mejor. Hay distancia, incumplimiento o conflictos. A veces las elecciones no salen como esperamos.',
    traits: ['Decepcionado', 'Distante', 'Independiente', 'Realista'],
    advice: 'El compadrazgo es importante pero no siempre sale bien. Aprende de la experiencia para futuras decisiones.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
