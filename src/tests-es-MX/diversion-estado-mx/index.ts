// ¿Qué Estado de México Eres?
export const questions = [
  {
    id: 1,
    text: '¿Qué clima prefieres?',
    options: [
      { text: 'Calor de playa todo el año', type: 'A' },
      { text: 'Templado y agradable', type: 'B' },
      { text: 'Desértico y seco', type: 'C' },
      { text: 'Variado con montañas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué actividad te atrae más?',
    options: [
      { text: 'Ir a la playa y disfrutar el mar', type: 'A' },
      { text: 'Visitar museos y cultura', type: 'B' },
      { text: 'Aventuras en el desierto', type: 'C' },
      { text: 'Senderismo y naturaleza', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué comida prefieres?',
    options: [
      { text: 'Mariscos y pescados', type: 'A' },
      { text: 'Mole y comida tradicional', type: 'B' },
      { text: 'Carne asada y cabrito', type: 'C' },
      { text: 'Antojitos locales', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Relajado y playero', type: 'A' },
      { text: 'Culto y tradicional', type: 'B' },
      { text: 'Trabajador y emprendedor', type: 'C' },
      { text: 'Aventurero y explorador', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué música te gusta más?',
    options: [
      { text: 'Tropical y para bailar', type: 'A' },
      { text: 'Mariachi y son', type: 'B' },
      { text: 'Banda y norteñas', type: 'C' },
      { text: 'De todo un poco', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cuál es tu plan ideal de vacaciones?',
    options: [
      { text: 'Resort en la playa', type: 'A' },
      { text: 'Ciudad colonial con historia', type: 'B' },
      { text: 'Rancho con naturaleza', type: 'C' },
      { text: 'Pueblo mágico tranquilo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué valoras más?',
    options: [
      { text: 'La diversión y el relax', type: 'A' },
      { text: 'Las tradiciones y la historia', type: 'B' },
      { text: 'El trabajo y el progreso', type: 'C' },
      { text: 'La naturaleza y la paz', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo es tu estilo de vida?',
    options: [
      { text: 'Tranquilo y sin prisas', type: 'A' },
      { text: 'Cultural y refinado', type: 'B' },
      { text: 'Activo y productivo', type: 'C' },
      { text: 'Equilibrado y natural', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué bebida prefieres?',
    options: [
      { text: 'Una piña colada o cerveza fría', type: 'A' },
      { text: 'Mezcal o tequila tradicional', type: 'B' },
      { text: 'Cerveza artesanal del norte', type: 'C' },
      { text: 'Agua fresca o café de olla', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué paisaje te relaja más?',
    options: [
      { text: 'El mar y la arena', type: 'A' },
      { text: 'Iglesias coloniales y plazas', type: 'B' },
      { text: 'El desierto y los atardeceres', type: 'C' },
      { text: 'Montañas y bosques', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏖️ Quintana Roo/Nayarit',
    description: '¡Eres pura playa y relax! Los estados costeros son tu alma. Prefieres el mar, el sol y la vida tranquila. Tu personalidad es relajada y siempre buscas disfrutar el momento.',
    traits: ['Relajado', 'Playero', 'Tranquilo', 'Disfrutón'],
    advice: 'Tu calma es envidiable. Solo recuerda que a veces hay que moverse del camastro.',
  },
  B: {
    title: '🏛️ Oaxaca/Jalisco',
    description: 'Cultural y tradicional. Los estados con rica herencia cultural te representan. Valoras las tradiciones, la gastronomía y la historia. Eres el orgullo de México.',
    traits: ['Cultural', 'Tradicional', 'Orgulloso', 'Refinado'],
    advice: 'Tu amor por las tradiciones es admirable. Sigue preservando nuestra cultura.',
  },
  C: {
    title: '🏜️ Nuevo León/Chihuahua',
    description: 'Trabajador y emprendedor. Los estados del norte te definen. Eres de los que trabajan duro y disfrutan la carne asada. Tu mentalidad es de progreso y logros.',
    traits: ['Trabajador', 'Emprendedor', 'Productivo', 'Ambicioso'],
    advice: 'Tu ética de trabajo es admirable. Solo recuerda también descansar y disfrutar.',
  },
  D: {
    title: '🌲 Michoacán/Guanajuato',
    description: 'Equilibrado y natural. Los estados del centro con su mezcla de cultura y naturaleza te representan. Buscas balance entre tradición y modernidad.',
    traits: ['Equilibrado', 'Natural', 'Tradicional', 'Explorador'],
    advice: 'Tu equilibrio es tu fuerza. Sigue explorando los tesoros de México.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
