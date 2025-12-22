// ¿Qué Género Musical Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Alegre y fiestero', type: 'A' },
      { text: 'Romántico y sentimental', type: 'B' },
      { text: 'Intenso y con carácter', type: 'C' },
      { text: 'Tradicional y arraigado', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces cuando estás triste?',
    options: [
      { text: 'Pongo música y bailo', type: 'A' },
      { text: 'Escucho baladas y lloro', type: 'B' },
      { text: 'Escucho corridos con sentimiento', type: 'C' },
      { text: 'Busco música que me conecte con mis raíces', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo celebras una buena noticia?',
    options: [
      { text: '¡Fiesta con cumbia!', type: 'A' },
      { text: 'Con una serenata', type: 'B' },
      { text: 'Con un buen tequila y música', type: 'C' },
      { text: 'Con los míos escuchando lo tradicional', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué instrumento te representa?',
    options: [
      { text: 'La güira y el acordeón', type: 'A' },
      { text: 'La guitarra romántica', type: 'B' },
      { text: 'El bajo quinto y la tuba', type: 'C' },
      { text: 'La trompeta del mariachi', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cuál es tu hora favorita para escuchar música?',
    options: [
      { text: 'En la fiesta, de noche', type: 'A' },
      { text: 'En la noche, tranquilo', type: 'B' },
      { text: 'Cuando ando en el carro', type: 'C' },
      { text: 'En las reuniones familiares', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué te hace bailar?',
    options: [
      { text: 'Un buen ritmo tropical', type: 'A' },
      { text: 'Una canción romántica', type: 'B' },
      { text: 'Una banda o norteña', type: 'C' },
      { text: 'El mariachi tradicional', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo es tu forma de amar?',
    options: [
      { text: 'Alegre y sin complicaciones', type: 'A' },
      { text: 'Romántico y entregado', type: 'B' },
      { text: 'Intenso y apasionado', type: 'C' },
      { text: 'Tradicional y leal', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué región de México te atrae más?',
    options: [
      { text: 'La costa y el trópico', type: 'A' },
      { text: 'Las ciudades románticas', type: 'B' },
      { text: 'El norte y sus ranchos', type: 'C' },
      { text: 'Jalisco y el centro', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tipo de letras prefieres?',
    options: [
      { text: 'Alegres y para bailar', type: 'A' },
      { text: 'De amor y desamor', type: 'B' },
      { text: 'De historias y aventuras', type: 'C' },
      { text: 'Tradicionales y con mensaje', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te describen tus amigos?',
    options: [
      { text: 'El fiestero del grupo', type: 'A' },
      { text: 'El romántico empedernido', type: 'B' },
      { text: 'El intenso con carácter', type: 'C' },
      { text: 'El tradicional de la familia', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💃 Cumbia',
    description: '¡Eres pura fiesta y alegría! La cumbia corre por tus venas. No hay problema que un buen baile no pueda resolver. Tu energía contagia a todos y donde llegas, la fiesta empieza.',
    traits: ['Alegre', 'Fiestero', 'Energético', 'Sociable'],
    advice: 'Tu alegría es contagiosa. Solo recuerda que también hay momentos para la calma.',
  },
  B: {
    title: '🎸 Balada Romántica',
    description: 'El amor es tu lenguaje. Eres sentimental, romántico y con el corazón en la mano. Una buena canción de amor puede hacerte llorar. Valoras las conexiones profundas.',
    traits: ['Romántico', 'Sentimental', 'Profundo', 'Emotivo'],
    advice: 'Tu sensibilidad es hermosa. Solo cuida tu corazón, no todos lo merecen.',
  },
  C: {
    title: '🤠 Banda/Norteño',
    description: 'Intenso y con carácter. La banda y las norteñas son tu vida. Tienes sangre de rancho y no te da pena mostrarlo. Tu pasión es tan grande como el norte de México.',
    traits: ['Intenso', 'Apasionado', 'Auténtico', 'Con carácter'],
    advice: 'Tu intensidad es tu marca. Sigue siendo auténtico, eso te hace especial.',
  },
  D: {
    title: '🎺 Mariachi',
    description: 'Tradicional y con raíces profundas. El mariachi representa lo mejor de México y tú también. Respetas las tradiciones y valoras la familia. Eres el alma de las reuniones.',
    traits: ['Tradicional', 'Arraigado', 'Familiar', 'Orgulloso'],
    advice: 'Tus raíces son tu fuerza. Sigue honrando las tradiciones pero abre espacio a lo nuevo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
