// Personalidad en la Vecindad
export const questions = [
  {
    id: 1,
    text: '¿Cómo te llevas con tus vecinos?',
    options: [
      { text: 'Súper bien, somos como familia', type: 'A' },
      { text: 'Bien, saludamos y platicamos a veces', type: 'B' },
      { text: 'Normal, apenas nos conocemos', type: 'C' },
      { text: 'Mal o no los conozco', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Participas en juntas vecinales o de colonos?',
    options: [
      { text: 'Sí, soy de los más activos', type: 'A' },
      { text: 'A veces, cuando es importante', type: 'B' },
      { text: 'Rara vez, no me gusta meterme', type: 'C' },
      { text: 'Nunca, no me interesa', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces si tu vecino hace mucho ruido?',
    options: [
      { text: 'Voy a hablar con él directamente', type: 'A' },
      { text: 'Le mando un mensajito amable', type: 'B' },
      { text: 'Me aguanto, no quiero problemas', type: 'C' },
      { text: 'Me quejo con la autoridad', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Prestas cosas a tus vecinos?',
    options: [
      { text: 'Claro, lo que necesiten', type: 'A' },
      { text: 'Depende qué cosa y quién', type: 'B' },
      { text: 'Prefiero no prestar nada', type: 'C' },
      { text: 'No tengo relación para eso', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cooperas para las fiestas de la colonia?',
    options: [
      { text: 'Sí, con dinero y participando', type: 'A' },
      { text: 'Doy mi cooperación pero no voy', type: 'B' },
      { text: 'A veces, si me insisten', type: 'C' },
      { text: 'No coopero, no me interesan', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cuidas las casas de tus vecinos cuando viajan?',
    options: [
      { text: 'Sí, me dejan llaves y todo', type: 'A' },
      { text: 'Les echo un ojo de vez en cuando', type: 'B' },
      { text: 'Solo si me lo piden explícitamente', type: 'C' },
      { text: 'No, cada quien lo suyo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué opinas del chisme de vecindad?',
    options: [
      { text: 'Me entero de todo pero no participo', type: 'A' },
      { text: 'A veces escucho, es inevitable', type: 'B' },
      { text: 'Lo evito, no me gusta el drama', type: 'C' },
      { text: 'No sé nada de mis vecinos', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Has tenido conflictos con vecinos?',
    options: [
      { text: 'Nunca, nos llevamos muy bien', type: 'A' },
      { text: 'Alguna vez pero se resolvió', type: 'B' },
      { text: 'Sí, algunos problemas', type: 'C' },
      { text: 'Varios, no me llevo bien', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Saludas a tus vecinos cuando los ves?',
    options: [
      { text: 'Siempre, con gusto', type: 'A' },
      { text: 'Sí, lo normal', type: 'B' },
      { text: 'A veces, si me ven primero', type: 'C' },
      { text: 'No, prefiero evitar contacto', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu vecindario ideal?',
    options: [
      { text: 'Donde todos se conocen y ayudan', type: 'A' },
      { text: 'Tranquilo con vecinos amables', type: 'B' },
      { text: 'Donde cada quien está en lo suyo', type: 'C' },
      { text: 'Aislado, sin vecinos cerca', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏘️ El Vecino Estrella',
    description: 'Eres el vecino que todos quieren tener. Conoces a todos, ayudas cuando pueden, participas en las actividades y mantienes la armonía en tu cuadra. Eres como Don Ramón pero querido por todos.',
    traits: ['Sociable', 'Solidario', 'Participativo', 'Amigable'],
    advice: 'Tu espíritu comunitario es admirable. Solo cuida tus límites para no agotarte ayudando a todos.',
  },
  B: {
    title: '👋 El Vecino Equilibrado',
    description: 'Mantienes buenas relaciones vecinales sin excederte. Saludas, ayudas cuando es necesario y participas en lo importante. Has encontrado el balance perfecto entre comunidad y privacidad.',
    traits: ['Equilibrado', 'Respetuoso', 'Amable', 'Independiente'],
    advice: 'Tu enfoque balanceado es ideal. Mantienes buenas relaciones sin invadir ni ser invadido.',
  },
  C: {
    title: '🚪 El Vecino Reservado',
    description: 'Prefieres mantener tu vida privada separada de la vecindad. No buscas conflictos pero tampoco gran cercanía. Valoras tu espacio y tranquilidad sobre las relaciones vecinales.',
    traits: ['Reservado', 'Independiente', 'Privado', 'Tranquilo'],
    advice: 'Tu privacidad es válida, pero una buena relación vecinal puede ser muy útil en emergencias.',
  },
  D: {
    title: '🏃 El Vecino Fantasma',
    description: 'Prácticamente no existes para tus vecinos. No los conoces, no interactúas y prefieres que así sea. Tu casa es tu castillo y no necesitas a nadie más.',
    traits: ['Aislado', 'Muy privado', 'Independiente', 'Solitario'],
    advice: 'Cada quien su estilo, pero conocer a tus vecinos puede ser importante para tu seguridad.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
