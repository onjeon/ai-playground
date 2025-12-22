// ¿Qué Ciudad Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo es tu ritmo de vida?',
    options: [
      { text: 'Muy acelerado, siempre ocupado', type: 'A' },
      { text: 'Activo pero con pausas', type: 'B' },
      { text: 'Tranquilo y relajado', type: 'C' },
      { text: 'Lento y sin prisas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tamaño de ciudad prefieres?',
    options: [
      { text: 'Enorme, con todo cerca', type: 'A' },
      { text: 'Grande pero manejable', type: 'B' },
      { text: 'Mediana con encanto', type: 'C' },
      { text: 'Pequeña y tranquila', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué es esencial para ti en una ciudad?',
    options: [
      { text: 'Cultura, museos y vida nocturna', type: 'A' },
      { text: 'Trabajo y oportunidades', type: 'B' },
      { text: 'Playas y buen clima', type: 'C' },
      { text: 'Paz y naturaleza', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te mueves en la ciudad?',
    options: [
      { text: 'Metro, uber y caminando', type: 'A' },
      { text: 'En mi carro siempre', type: 'B' },
      { text: 'Bici o caminando', type: 'C' },
      { text: 'Casi no me muevo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tipo de comida buscas?',
    options: [
      { text: 'De todo el mundo, variedad', type: 'A' },
      { text: 'Carne asada y norteña', type: 'B' },
      { text: 'Mariscos y pescados', type: 'C' },
      { text: 'Tradicional y casera', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan importante es la vida nocturna?',
    options: [
      { text: 'Esencial, salgo mucho', type: 'A' },
      { text: 'De vez en cuando', type: 'B' },
      { text: 'Solo en vacaciones', type: 'C' },
      { text: 'No me interesa', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuál es tu prioridad laboral?',
    options: [
      { text: 'Muchas oportunidades y networking', type: 'A' },
      { text: 'Buenos salarios y empresas', type: 'B' },
      { text: 'Balance vida-trabajo', type: 'C' },
      { text: 'Trabajar lo mínimo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué clima toleras mejor?',
    options: [
      { text: 'Variable, de todo un poco', type: 'A' },
      { text: 'Calor extremo', type: 'B' },
      { text: 'Tropical con brisa', type: 'C' },
      { text: 'Templado y fresco', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan sociable eres?',
    options: [
      { text: 'Muy sociable, muchos amigos', type: 'A' },
      { text: 'Sociable con mi círculo', type: 'B' },
      { text: 'Selectivo pero amigable', type: 'C' },
      { text: 'Prefiero la soledad', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué arquitectura te atrae más?',
    options: [
      { text: 'Rascacielos y modernidad', type: 'A' },
      { text: 'Industrial y contemporánea', type: 'B' },
      { text: 'Tropical y colorida', type: 'C' },
      { text: 'Colonial y tradicional', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌆 Ciudad de México',
    description: '¡Eres la capital! Grande, diverso e imposible de aburrir. Tu vida es intensa, llena de cultura, comida y oportunidades. El caos es tu orden y nunca paras.',
    traits: ['Intenso', 'Cultural', 'Diverso', 'Acelerado'],
    advice: 'Tu energía es admirable. Solo recuerda que también hay vida fuera del Periférico.',
  },
  B: {
    title: '🏙️ Monterrey',
    description: 'Trabajador y emprendedor. La Sultana del Norte te representa. Eres ambicioso, productivo y siempre buscas el éxito. Tu mentalidad es de negocios y progreso.',
    traits: ['Trabajador', 'Ambicioso', 'Productivo', 'Empresarial'],
    advice: 'Tu ética de trabajo es envidiable. Pero la vida no es solo chamba, güey.',
  },
  C: {
    title: '🏝️ Cancún/Puerto Vallarta',
    description: 'Relajado y playero. Las ciudades costeras son tu vibe. Prefieres el mar, el sol y la buena vida. Tu filosofía es disfrutar cada momento.',
    traits: ['Relajado', 'Playero', 'Disfrutón', 'Tropical'],
    advice: 'Tu actitud vacacional es envidiable. Solo recuerda que a veces hay que trabajar.',
  },
  D: {
    title: '🏘️ San Miguel de Allende/Guanajuato',
    description: 'Tranquilo y tradicional. Las ciudades coloniales te representan. Valoras la paz, la historia y el ritmo de vida pausado. Tu alma es bohemia.',
    traits: ['Tranquilo', 'Tradicional', 'Bohemio', 'Pausado'],
    advice: 'Tu paz es un tesoro. Sigue disfrutando de la vida lenta y con sentido.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
