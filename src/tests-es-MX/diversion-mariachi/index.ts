// ¿Qué Tipo de Mariachi Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te expresas mejor?',
    options: [
      { text: 'Cantando a todo pulmón', type: 'A' },
      { text: 'Tocando un instrumento', type: 'B' },
      { text: 'Siendo el líder del grupo', type: 'C' },
      { text: 'Acompañando y apoyando', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué canción te representa?',
    options: [
      { text: 'Una ranchera bien sentida', type: 'A' },
      { text: 'Un son jarocho alegre', type: 'B' },
      { text: 'Un corrido con mensaje', type: 'C' },
      { text: 'Una serenata romántica', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te comportas en las fiestas?',
    options: [
      { text: 'Soy el centro de atención', type: 'A' },
      { text: 'Pongo el ambiente con música', type: 'B' },
      { text: 'Organizo todo', type: 'C' },
      { text: 'Disfruto desde un rincón', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué valoras más en la música?',
    options: [
      { text: 'La pasión y el sentimiento', type: 'A' },
      { text: 'La técnica y el ritmo', type: 'B' },
      { text: 'La tradición y las raíces', type: 'C' },
      { text: 'La armonía y el equilibrio', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas las emociones?',
    options: [
      { text: 'Las expreso sin pena', type: 'A' },
      { text: 'Las canalizo en algo creativo', type: 'B' },
      { text: 'Las proceso con la cabeza fría', type: 'C' },
      { text: 'Prefiero guardarlas', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué rol tienes en tu grupo de amigos?',
    options: [
      { text: 'El que pone el ambiente', type: 'A' },
      { text: 'El talentoso', type: 'B' },
      { text: 'El líder', type: 'C' },
      { text: 'El que apoya a todos', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te vistes para una ocasión especial?',
    options: [
      { text: 'Muy elegante y llamativo', type: 'A' },
      { text: 'Con mi mejor outfit', type: 'B' },
      { text: 'Tradicional y con clase', type: 'C' },
      { text: 'Cómodo pero presentable', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué te motiva en la vida?',
    options: [
      { text: 'Ser reconocido por mi talento', type: 'A' },
      { text: 'Perfeccionar lo que hago', type: 'B' },
      { text: 'Preservar las tradiciones', type: 'C' },
      { text: 'Hacer feliz a los demás', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo reaccionas ante el rechazo?',
    options: [
      { text: 'Me duele pero sigo adelante', type: 'A' },
      { text: 'Practico más para mejorar', type: 'B' },
      { text: 'Analizo qué salió mal', type: 'C' },
      { text: 'No me afecta tanto', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu momento favorito del día?',
    options: [
      { text: 'La noche, cuando hay serenatas', type: 'A' },
      { text: 'Cuando puedo practicar mi arte', type: 'B' },
      { text: 'Cuando puedo liderar y organizar', type: 'C' },
      { text: 'Cuando estoy con mi gente', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎤 El Vocalista',
    description: '¡Eres la voz del mariachi! Expresivo, apasionado y siempre listo para cantar desde el corazón. La gente te busca porque transmites emociones como nadie. Eres el que hace llorar con una ranchera.',
    traits: ['Expresivo', 'Apasionado', 'Carismático', 'Emotivo'],
    advice: 'Tu voz es tu don. Solo recuerda que también hay que saber escuchar y no siempre ser el protagonista.',
  },
  B: {
    title: '🎺 El Trompetista',
    description: 'Talentoso y dedicado. Eres la melodía que hace brillar al grupo. Tu técnica y pasión te distinguen. Sin ti, el mariachi no suena igual.',
    traits: ['Talentoso', 'Dedicado', 'Técnico', 'Brillante'],
    advice: 'Tu talento es admirable. Sigue practicando pero no olvides disfrutar el proceso.',
  },
  C: {
    title: '🎸 El Director',
    description: 'El líder natural del grupo. Sabes organizar, dirigir y mantener las tradiciones vivas. Tu visión y respeto por las raíces te hacen indispensable.',
    traits: ['Líder', 'Tradicional', 'Organizado', 'Respetado'],
    advice: 'Tu liderazgo es valioso. Solo recuerda delegar y confiar más en los demás.',
  },
  D: {
    title: '🎻 El Violinista',
    description: 'El equilibrio del grupo. Armonioso, discreto pero esencial. Sin ti, la música no tendría esa profundidad. Eres el apoyo que todos necesitan.',
    traits: ['Armonioso', 'Discreto', 'Esencial', 'Leal'],
    advice: 'Tu apoyo es invaluable. Pero también mereces brillar, no te escondas tanto.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
