// Personalidad en el Fútbol
export const questions = [
  {
    id: 1,
    text: '¿Cuál es tu equipo de fútbol mexicano?',
    options: [
      { text: 'América, el más grande', type: 'A' },
      { text: 'Chivas, el rebaño sagrado', type: 'B' },
      { text: 'Otro equipo con pasión', type: 'C' },
      { text: 'No le voy a ninguno en particular', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo vives los partidos de tu equipo?',
    options: [
      { text: 'Con todo: grito, lloro y celebro', type: 'A' },
      { text: 'Me emociono pero con control', type: 'B' },
      { text: 'Los veo tranquilo, sin tanto drama', type: 'C' },
      { text: 'Casi no veo partidos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas cuando tu equipo pierde?',
    options: [
      { text: 'Se me arruina el día completo', type: 'A' },
      { text: 'Me enojo un rato pero se me pasa', type: 'B' },
      { text: 'Ni modo, es solo un juego', type: 'C' },
      { text: 'No me afecta mucho realmente', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo ves los partidos?',
    options: [
      { text: 'En el estadio, con la afición', type: 'A' },
      { text: 'En casa con la familia y amigos', type: 'B' },
      { text: 'En un sports bar o restaurante', type: 'C' },
      { text: 'Solo cuando está la Selección', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas del arbitraje en el fútbol mexicano?',
    options: [
      { text: 'Siempre nos roban, están comprados', type: 'A' },
      { text: 'A veces fallan pero es parte del juego', type: 'B' },
      { text: 'Hacen lo que pueden, es difícil', type: 'C' },
      { text: 'No me fijo mucho en eso', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te llevas con los aficionados del equipo rival?',
    options: [
      { text: 'Ni los puedo ver, rivalidad total', type: 'A' },
      { text: 'Los carrillo pero con respeto', type: 'B' },
      { text: 'Normal, cada quien con su equipo', type: 'C' },
      { text: 'No tengo problema con nadie', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuánta mercancía de tu equipo tienes?',
    options: [
      { text: 'De todo: jerseys, bufandas, tazas, todo', type: 'A' },
      { text: 'Algunos jerseys y alguna cosa más', type: 'B' },
      { text: 'Solo uno que otro artículo', type: 'C' },
      { text: 'Nada en realidad', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué opinas de la Selección Mexicana?',
    options: [
      { text: 'La apoyo siempre, es México', type: 'A' },
      { text: 'Me ilusiono pero ya sé que van a fallar', type: 'B' },
      { text: 'La veo en mundiales nada más', type: 'C' },
      { text: 'Ya me dejaron de importar', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Juegas fútbol regularmente?',
    options: [
      { text: 'Sí, tengo mi reta semanal', type: 'A' },
      { text: 'De vez en cuando con los amigos', type: 'B' },
      { text: 'Ya no, pero antes sí', type: 'C' },
      { text: 'No me gusta jugarlo, solo verlo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo celebras cuando tu equipo mete gol?',
    options: [
      { text: 'Grito, brinco y abrazo a quien esté cerca', type: 'A' },
      { text: 'Celebro emocionado pero sentado', type: 'B' },
      { text: 'Sonrío y aplaudo', type: 'C' },
      { text: 'Normal, espero a ver si ganan', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '⚽ El Ultra Apasionado',
    description: 'El fútbol corre por tus venas. Vives y respiras por tu equipo, sufres cada derrota y celebras cada victoria como si fuera la final del mundo. Eres el que nunca falta al estadio y tiene todo el merchandising posible.',
    traits: ['Apasionado', 'Leal', 'Intenso', 'Comprometido'],
    advice: 'Tu pasión es admirable, pero recuerda que al final es solo un juego. No dejes que una derrota arruine tus relaciones o tu día.',
  },
  B: {
    title: '🎽 El Aficionado Equilibrado',
    description: 'Amas el fútbol y a tu equipo pero con medida. Disfrutas los partidos, celebras los triunfos y superas las derrotas con madurez. Entiendes que es un deporte y lo disfrutas como tal.',
    traits: ['Apasionado con control', 'Sociable', 'Leal', 'Maduro'],
    advice: 'Tienes la actitud perfecta hacia el fútbol. Sigue disfrutándolo con esa pasión saludable.',
  },
  C: {
    title: '📺 El Espectador Casual',
    description: 'Te gusta el fútbol pero no te quita el sueño. Lo ves cuando puedes, le vas a un equipo pero sin fanatismo. Prefieres disfrutar el deporte sin el drama que conlleva.',
    traits: ['Relajado', 'Flexible', 'Práctico', 'Objetivo'],
    advice: 'Tu enfoque relajado te evita estrés innecesario. Está bien no ser fanático pero disfruta los momentos especiales del fútbol.',
  },
  D: {
    title: '🤷 El Indiferente Futbolero',
    description: 'El fútbol no es lo tuyo y está bien. Quizás lo ves en Mundiales o cuando hay algo especial pero no es parte de tu vida. Tienes otros intereses más importantes.',
    traits: ['Independiente', 'Diferente', 'Honesto', 'Auténtico'],
    advice: 'No hay problema si el fútbol no te apasiona. México tiene mucho más que ofrecer que solo el balón.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
