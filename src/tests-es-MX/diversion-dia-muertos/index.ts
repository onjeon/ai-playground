// ¿Qué Personaje del Día de Muertos Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te relacionas con la muerte?',
    options: [
      { text: 'La celebro como parte de la vida', type: 'A' },
      { text: 'La respeto y honro a mis difuntos', type: 'B' },
      { text: 'Me da curiosidad y misterio', type: 'C' },
      { text: 'Prefiero no pensar en ella', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces el Día de Muertos?',
    options: [
      { text: 'Me pinto de catrina y voy al desfile', type: 'A' },
      { text: 'Pongo altar y visito el panteón', type: 'B' },
      { text: 'Reflexiono sobre la vida', type: 'C' },
      { text: 'Nada especial', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cuál es tu elemento favorito del altar?',
    options: [
      { text: 'Las calaveritas de azúcar', type: 'A' },
      { text: 'Las fotos de los difuntos', type: 'B' },
      { text: 'Las velas y el copal', type: 'C' },
      { text: 'El pan de muerto', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Alegre y colorido', type: 'A' },
      { text: 'Tradicional y respetuoso', type: 'B' },
      { text: 'Misterioso y profundo', type: 'C' },
      { text: 'Simple y práctico', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué flor del Día de Muertos te representa?',
    options: [
      { text: 'Cempasúchil brillante', type: 'A' },
      { text: 'Nube blanca y pura', type: 'B' },
      { text: 'Terciopelo oscuro', type: 'C' },
      { text: 'Cualquiera está bien', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo honras a tus difuntos?',
    options: [
      { text: 'Celebrando su vida con alegría', type: 'A' },
      { text: 'Con oraciones y tradiciones', type: 'B' },
      { text: 'Recordándolos en silencio', type: 'C' },
      { text: 'No tengo tradiciones específicas', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué calaverita te describe mejor?',
    options: [
      { text: 'Una muy decorada y elegante', type: 'A' },
      { text: 'Una tradicional y sencilla', type: 'B' },
      { text: 'Una oscura y misteriosa', type: 'C' },
      { text: 'Ninguna en particular', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué música pones en estas fechas?',
    options: [
      { text: 'Música alegre para celebrar', type: 'A' },
      { text: 'Canciones tradicionales', type: 'B' },
      { text: 'Algo melancólico y profundo', type: 'C' },
      { text: 'La misma de siempre', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cuál es tu comida favorita de la temporada?',
    options: [
      { text: 'Pan de muerto con chocolate', type: 'A' },
      { text: 'Mole negro tradicional', type: 'B' },
      { text: 'Tamales de muerto', type: 'C' },
      { text: 'No tengo preferencia', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué significa esta fecha para ti?',
    options: [
      { text: 'Una celebración de la vida', type: 'A' },
      { text: 'Conexión con mis ancestros', type: 'B' },
      { text: 'Un momento de reflexión', type: 'C' },
      { text: 'Un feriado más', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💀 La Catrina',
    description: '¡Eres la elegancia de la muerte! Como La Catrina, celebras la vida con color y alegría. Tu forma de honrar a los muertos es festiva y hermosa. Eres el alma del Día de Muertos.',
    traits: ['Elegante', 'Festivo', 'Colorido', 'Celebrador'],
    advice: 'Tu alegría ante la muerte es sabia. Sigue celebrando la vida con esa actitud.',
  },
  B: {
    title: '🕯️ El Guardián del Altar',
    description: 'Tradicional y respetuoso. Eres quien mantiene vivas las tradiciones. Tu devoción por los difuntos y las costumbres ancestrales te hace invaluable. Eres el corazón de la familia.',
    traits: ['Tradicional', 'Devoto', 'Respetuoso', 'Familiar'],
    advice: 'Tu respeto por las tradiciones es admirable. Sigue pasándolas a las nuevas generaciones.',
  },
  C: {
    title: '🌙 El Alma en Pena',
    description: 'Misterioso y profundo. Eres reflexivo y ves la muerte como un misterio fascinante. Tu conexión con el más allá es profunda. Piensas mucho en el sentido de la vida.',
    traits: ['Misterioso', 'Profundo', 'Reflexivo', 'Espiritual'],
    advice: 'Tu profundidad es un don. Pero no te pierdas tanto en el misterio que olvides vivir.',
  },
  D: {
    title: '🍞 El Come Pan de Muerto',
    description: 'Práctico y simple. Para ti el Día de Muertos es una tradición más. Disfrutas el pan de muerto y el chocolate pero sin tanto ritual. Y está bien, cada quien su forma.',
    traits: ['Práctico', 'Simple', 'Relajado', 'Moderno'],
    advice: 'Tu practicidad es válida. Pero conocer las tradiciones podría enriquecer tu experiencia.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
