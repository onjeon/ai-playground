// Personalidad Musical Mexicana
export const questions = [
  {
    id: 1,
    text: '¿Qué género musical mexicano te representa más?',
    options: [
      { text: 'Banda y corridos', type: 'A' },
      { text: 'Regional mexicano (mariachi, norteño)', type: 'B' },
      { text: 'Música urbana y reggaetón', type: 'C' },
      { text: 'Rock en español o alternativo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo escuchas música normalmente?',
    options: [
      { text: 'A todo volumen, que se oiga', type: 'A' },
      { text: 'En audífonos, mi mundo privado', type: 'B' },
      { text: 'De fondo mientras hago otras cosas', type: 'C' },
      { text: 'En conciertos y en vivo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué artista mexicano pondrías en una fiesta?',
    options: [
      { text: 'Grupo Firme o Luis R Conriquez', type: 'A' },
      { text: 'Los Ángeles Azules o Sonora Santanera', type: 'B' },
      { text: 'Bad Bunny o Peso Pluma', type: 'C' },
      { text: 'Café Tacvba o Zoé', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué canción te hace llorar?',
    options: [
      { text: 'Una de desamor con banda', type: 'A' },
      { text: 'Amor Eterno o alguna de Juan Gabriel', type: 'B' },
      { text: 'Algún reggaetón romántico', type: 'C' },
      { text: 'Una de rock emotivo en español', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo es tu playlist ideal para un viaje en carretera?',
    options: [
      { text: 'Puro corrido y música norteña', type: 'A' },
      { text: 'Variada: cumbia, baladas y lo clásico', type: 'B' },
      { text: 'Lo más nuevo y pegajoso del momento', type: 'C' },
      { text: 'Rock, indie y alternativo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué haces cuando suena tu canción favorita?',
    options: [
      { text: 'La canto a todo pulmón', type: 'A' },
      { text: 'La disfruto y me muevo al ritmo', type: 'B' },
      { text: 'Subo el volumen y la presumo', type: 'C' },
      { text: 'La escucho concentrado, sintiendo cada letra', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Has ido a un concierto recientemente?',
    options: [
      { text: 'Sí, de algún artista regional mexicano', type: 'A' },
      { text: 'Sí, a un festival o concierto grande', type: 'B' },
      { text: 'Sí, de artistas urbanos o de moda', type: 'C' },
      { text: 'Sí, de alguna banda de rock o indie', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué opinas de la música para pistear?',
    options: [
      { text: 'Es esencial, no hay peda sin banda', type: 'A' },
      { text: 'Me gusta la cumbia para bailar', type: 'B' },
      { text: 'Prefiero perrear con reggaetón', type: 'C' },
      { text: 'Me gusta algo más tranquilo o diferente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Tocas algún instrumento?',
    options: [
      { text: 'Guitarra o acordeón', type: 'A' },
      { text: 'Algo clásico como piano o violín', type: 'B' },
      { text: 'No, pero sé hacer beats', type: 'C' },
      { text: 'Bajo, batería o guitarra eléctrica', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué opinas de los corridos tumbados?',
    options: [
      { text: 'Me encantan, es la nueva onda', type: 'A' },
      { text: 'Algunos están bien, otros no tanto', type: 'B' },
      { text: 'Son lo de hoy, hay que estar al día', type: 'C' },
      { text: 'No son mi estilo para nada', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎺 El Regionalero de Corazón',
    description: 'La música regional mexicana es tu vida. Banda, norteño, corridos... todo lo que suene a México te mueve el corazón. Probablemente tienes un repertorio de canciones para cada ocasión y puedes cantarlas todas de memoria.',
    traits: ['Tradicional', 'Apasionado', 'Fiestero', 'Mexicano de corazón'],
    advice: 'Tu amor por la música regional es hermoso. Mantén vivas las tradiciones pero también date chance de explorar otros géneros.',
  },
  B: {
    title: '🎵 El Melómano Versátil',
    description: 'Tu gusto musical es amplio y variado. Puedes pasar de Juan Gabriel a la cumbia sin problema. Aprecias lo clásico pero también lo nuevo. Tu playlist es un viaje por todos los géneros.',
    traits: ['Versátil', 'Nostálgico', 'Abierto', 'Cultural'],
    advice: 'Tu apertura musical te hace disfrutar mucho más. Sigue explorando y descubriendo nuevos artistas.',
  },
  C: {
    title: '🔥 El Trendsetter Musical',
    description: 'Siempre estás al día con lo más nuevo. Si hay un artista de moda, ya lo conoces. Te gusta lo urbano, lo pegajoso y lo que está sonando en el momento. Eres quien pone las canciones en las fiestas.',
    traits: ['Moderno', 'Actualizado', 'Social', 'Trendy'],
    advice: 'Está bien estar al día, pero no te olvides de los clásicos. La buena música no tiene fecha de vencimiento.',
  },
  D: {
    title: '🎸 El Alternativo Independiente',
    description: 'Tu gusto musical va más allá de lo mainstream. Prefieres el rock, el indie o lo alternativo. Valoras las letras profundas y la música con mensaje. Eres selectivo con lo que escuchas.',
    traits: ['Independiente', 'Profundo', 'Selectivo', 'Cultural'],
    advice: 'Tu criterio musical es respetable. Solo recuerda que a veces la música comercial también tiene su valor.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
