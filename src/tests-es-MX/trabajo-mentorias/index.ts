// Test de Mentoría - ¿Necesitas un mentor o puedes ser uno?
export const questions = [
  {
    id: 1,
    text: '¿Tienes claridad sobre tu camino profesional?',
    options: [
      { text: 'Sí, y puedo guiar a otros', type: 'A' },
      { text: 'Bastante clara, voy bien', type: 'B' },
      { text: 'Algo confuso, necesito guía', type: 'C' },
      { text: 'Perdido, no sé qué hacer', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Disfrutas enseñando y compartiendo conocimiento?',
    options: [
      { text: 'Mucho, me realiza ayudar a otros', type: 'A' },
      { text: 'Sí, cuando puedo', type: 'B' },
      { text: 'A veces, depende', type: 'C' },
      { text: 'No mucho, prefiero enfocarme en mí', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cuánta experiencia tienes en tu campo?',
    options: [
      { text: 'Muchos años, soy experto', type: 'A' },
      { text: 'Considerable, bastante sólida', type: 'B' },
      { text: 'Algo, todavía aprendiendo', type: 'C' },
      { text: 'Poca, apenas empezando', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan bueno eres escuchando y dando consejos?',
    options: [
      { text: 'Muy bueno, la gente me busca para consejos', type: 'A' },
      { text: 'Bueno, puedo ayudar', type: 'B' },
      { text: 'Regular, a veces acierto', type: 'C' },
      { text: 'Prefiero recibir consejos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Tienes o has tenido un mentor?',
    options: [
      { text: 'Sí, y ahora quiero serlo para otros', type: 'A' },
      { text: 'Sí, me ha ayudado mucho', type: 'B' },
      { text: 'No, pero me gustaría tener uno', type: 'C' },
      { text: 'No, y no creo necesitarlo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tienes tiempo para dedicar a una relación de mentoría?',
    options: [
      { text: 'Sí, lo priorizaría', type: 'A' },
      { text: 'Algo de tiempo', type: 'B' },
      { text: 'Muy poco', type: 'C' },
      { text: 'No tengo tiempo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas ver a otros cometer errores que tú ya superaste?',
    options: [
      { text: 'Con paciencia, es parte del aprendizaje', type: 'A' },
      { text: 'Trato de guiarlos', type: 'B' },
      { text: 'Me frustra un poco', type: 'C' },
      { text: 'Que aprendan solos', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué buscas en este momento de tu carrera?',
    options: [
      { text: 'Dejar legado y desarrollar talento', type: 'A' },
      { text: 'Consolidar y quizás empezar a guiar', type: 'B' },
      { text: 'Crecer con ayuda de alguien experimentado', type: 'C' },
      { text: 'Encontrar mi camino', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo describirían otros tu liderazgo?',
    options: [
      { text: 'Inspirador y desarrollador de personas', type: 'A' },
      { text: 'Bueno, apoyo a mi equipo', type: 'B' },
      { text: 'En desarrollo', type: 'C' },
      { text: 'No tengo rol de liderazgo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan paciente eres con el proceso de aprendizaje de otros?',
    options: [
      { text: 'Muy paciente, entiendo que toma tiempo', type: 'A' },
      { text: 'Bastante paciente', type: 'B' },
      { text: 'A veces me desespero', type: 'C' },
      { text: 'Poco paciente', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Tienes red de contactos que podrías compartir?',
    options: [
      { text: 'Sí, amplia y dispuesto a conectar', type: 'A' },
      { text: 'Algo, puedo hacer introducciones', type: 'B' },
      { text: 'Limitada', type: 'C' },
      { text: 'No tengo red que compartir', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué papel te ves en una relación de mentoría?',
    options: [
      { text: 'Mentor, guiando a otros', type: 'A' },
      { text: 'Ambos, aprender y enseñar', type: 'B' },
      { text: 'Mentee, recibiendo guía', type: 'C' },
      { text: 'No me interesa la mentoría', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🧭 Listo para Mentorear',
    description: 'Tienes la experiencia, paciencia y deseo de ayudar a otros. Ser mentor sería muy valioso para ti y para quienes guides.',
    traits: ['Experimentado', 'Paciente', 'Generoso', 'Líder'],
    advice: 'Busca programas de mentoría en tu empresa o plataformas como MentorCruise. Tu experiencia puede cambiar carreras.',
  },
  B: {
    title: '⚖️ Mentor-Mentee Híbrido',
    description: 'Estás en un punto donde puedes tanto dar como recibir mentoría. Podrías mentorear juniors mientras buscas guía de seniors.',
    traits: ['En transición', 'Versátil', 'Aprendiz eterno', 'Colaborativo'],
    advice: 'Busca mentoría para tu siguiente nivel mientras empiezas a guiar a quienes vienen detrás.',
  },
  C: {
    title: '🌱 Necesitas un Mentor',
    description: 'Estás en un punto de tu carrera donde la guía de alguien experimentado sería muy valiosa. Buscar un mentor puede acelerar tu crecimiento.',
    traits: ['En desarrollo', 'Receptivo', 'Buscando guía', 'Potencial'],
    advice: 'Identifica a alguien que admires y proponle una relación de mentoría. Prepárate para recibir y actuar sobre sus consejos.',
  },
  D: {
    title: '🤔 Reflexiona sobre Mentoría',
    description: 'Pareces no ver valor en la mentoría, pero puede ser una herramienta poderosa para tu desarrollo. Vale la pena reconsiderarlo.',
    traits: ['Independiente', 'Autodidacta', 'Cerrado', 'Inicial'],
    advice: 'La mentoría no es debilidad, es inteligencia. Considera los beneficios de tener guía de alguien con más experiencia.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
