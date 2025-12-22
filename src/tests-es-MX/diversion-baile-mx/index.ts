// ¿Qué Baile Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te mueves en la pista de baile?',
    options: [
      { text: 'Con energía y sin parar', type: 'A' },
      { text: 'Elegante y coordinado', type: 'B' },
      { text: 'Apasionado y con sentimiento', type: 'C' },
      { text: 'Prefiero no bailar', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué ropa usarías para bailar?',
    options: [
      { text: 'Algo colorido y llamativo', type: 'A' },
      { text: 'Traje típico elegante', type: 'B' },
      { text: 'Botas y sombrero vaquero', type: 'C' },
      { text: 'Ropa cómoda y casual', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Con quién prefieres bailar?',
    options: [
      { text: 'En grupo, entre más mejor', type: 'A' },
      { text: 'En pareja coordinada', type: 'B' },
      { text: 'Con mi pareja romántica', type: 'C' },
      { text: 'Solo o no bailar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué música te hace bailar?',
    options: [
      { text: 'Cumbia o música tropical', type: 'A' },
      { text: 'Son jarocho o danzón', type: 'B' },
      { text: 'Banda o norteñas', type: 'C' },
      { text: 'No tengo preferencia', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cuándo bailas?',
    options: [
      { text: 'En cualquier fiesta', type: 'A' },
      { text: 'En eventos especiales', type: 'B' },
      { text: 'Cuando hay sentimiento', type: 'C' },
      { text: 'Casi nunca', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo describes tu estilo de baile?',
    options: [
      { text: 'Alegre y contagioso', type: 'A' },
      { text: 'Técnico y tradicional', type: 'B' },
      { text: 'Romántico y cercano', type: 'C' },
      { text: 'Improvisado o inexistente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué región de México te atrae más?',
    options: [
      { text: 'La costa y el trópico', type: 'A' },
      { text: 'Veracruz y el centro', type: 'B' },
      { text: 'El norte y sus ranchos', type: 'C' },
      { text: 'Las ciudades grandes', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan importante es el baile para ti?',
    options: [
      { text: 'Esencial, me hace feliz', type: 'A' },
      { text: 'Una tradición que respeto', type: 'B' },
      { text: 'Una forma de conectar', type: 'C' },
      { text: 'No es tan importante', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué zapatos usas para bailar?',
    options: [
      { text: 'Los más cómodos para moverme', type: 'A' },
      { text: 'Zapatos de baile tradicionales', type: 'B' },
      { text: 'Botas vaqueras', type: 'C' },
      { text: 'Cualquier cosa', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué sientes cuando bailas?',
    options: [
      { text: 'Pura alegría y libertad', type: 'A' },
      { text: 'Orgullo por mis raíces', type: 'B' },
      { text: 'Conexión con mi pareja', type: 'C' },
      { text: 'Nada especial', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💃 Cumbia',
    description: '¡Eres pura energía y movimiento! La cumbia es tu baile porque no puedes quedarte quieto. Tu alegría es contagiosa y donde llegas, la fiesta empieza. ¡A mover el esqueleto!',
    traits: ['Energético', 'Alegre', 'Contagioso', 'Fiestero'],
    advice: 'Tu energía es tu don. Sigue bailando y contagiando alegría a todos.',
  },
  B: {
    title: '🎭 Danzón',
    description: 'Elegante y tradicional. El danzón es tu baile porque valoras la técnica, la elegancia y las tradiciones. Tu forma de moverte refleja clase y respeto por las raíces.',
    traits: ['Elegante', 'Tradicional', 'Técnico', 'Refinado'],
    advice: 'Tu elegancia es admirable. Sigue honrando las tradiciones con cada paso.',
  },
  C: {
    title: '🤠 Quebradita/Zapateado',
    description: 'Apasionado y con garra. Los bailes norteños son lo tuyo porque bailas con el corazón. Tu conexión con la tierra y la pareja es intensa. ¡Arriba el norte!',
    traits: ['Apasionado', 'Intenso', 'Romántico', 'Auténtico'],
    advice: 'Tu pasión es tu fuerza. Sigue bailando con el corazón en cada paso.',
  },
  D: {
    title: '🧘 Observador',
    description: 'Prefieres observar que participar. El baile no es tu fuerte, pero eso está bien. Cada quien tiene sus talentos y tú brillas en otras áreas.',
    traits: ['Observador', 'Tranquilo', 'Reservado', 'Independiente'],
    advice: 'No hay problema si no bailas. Pero atrévete a intentarlo alguna vez, podría sorprenderte.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
