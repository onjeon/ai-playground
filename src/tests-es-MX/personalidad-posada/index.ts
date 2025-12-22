// Personalidad en las Posadas
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes con las posadas?',
    options: [
      { text: 'Las amo, son mi época favorita del año', type: 'A' },
      { text: 'Me gustan, son divertidas', type: 'B' },
      { text: 'Van, pero no me vuelven loco', type: 'C' },
      { text: 'Prefiero evitarlas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cuál es tu rol en las posadas?',
    options: [
      { text: 'El anfitrión que organiza todo', type: 'A' },
      { text: 'El que lleva la piñata o los aguinaldos', type: 'B' },
      { text: 'El invitado que llega a disfrutar', type: 'C' },
      { text: 'El que se esconde para no ir', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué es lo mejor de las posadas para ti?',
    options: [
      { text: 'El ponche y la comida tradicional', type: 'A' },
      { text: 'Romper la piñata', type: 'B' },
      { text: 'Ver a familia y amigos', type: 'C' },
      { text: 'Cuando se acaban', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo cantas los villancicos?',
    options: [
      { text: 'A todo pulmón, me sé todos', type: 'A' },
      { text: 'Canto cuando los demás cantan', type: 'B' },
      { text: 'Solo muevo los labios', type: 'C' },
      { text: 'No canto, me quedo callado', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas del ritual de pedir posada?',
    options: [
      { text: 'Es hermoso, tradición pura', type: 'A' },
      { text: 'Está bien, le da sabor a la fiesta', type: 'B' },
      { text: 'Es largo pero lo aguanto', type: 'C' },
      { text: 'Prefiero saltármelo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo eres con la piñata?',
    options: [
      { text: 'Soy el primero en pegarle con fuerza', type: 'A' },
      { text: 'Le pego cuando me toca', type: 'B' },
      { text: 'Prefiero recoger los dulces', type: 'C' },
      { text: 'Me alejo para no recibir un palazo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuántas posadas vas normalmente?',
    options: [
      { text: 'A todas las que me inviten', type: 'A' },
      { text: 'Las importantes: familia, trabajo, amigos', type: 'B' },
      { text: 'Una o dos máximo', type: 'C' },
      { text: 'Trato de evitarlas', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué ponche prefieres?',
    options: [
      { text: 'Con piquete, bien cargado', type: 'A' },
      { text: 'Con un toque de alcohol', type: 'B' },
      { text: 'Sin alcohol, el tradicional', type: 'C' },
      { text: 'No me gusta el ponche', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Participas en el intercambio de regalos?',
    options: [
      { text: 'Siempre, me encanta dar y recibir', type: 'A' },
      { text: 'Cuando hay, participo', type: 'B' },
      { text: 'A veces me estresa elegir regalos', type: 'C' },
      { text: 'Prefiero no participar', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes el espíritu navideño en ti?',
    options: [
      { text: 'Soy la Navidad en persona', type: 'A' },
      { text: 'Me pongo en modo navideño', type: 'B' },
      { text: 'Me adapto al ambiente', type: 'C' },
      { text: 'Soy más tipo Grinch', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎄 El Rey/Reina de las Posadas',
    description: 'Las posadas son tu momento de brillar. Organizas, cantas, rompes piñatas y tomas ponche como profesional. La Navidad mexicana no sería lo mismo sin gente como tú.',
    traits: ['Festivo', 'Tradicional', 'Social', 'Organizador'],
    advice: 'Tu espíritu posadero es contagioso. Sigue manteniendo vivas las tradiciones pero no te estreses tratando de hacer todo perfecto.',
  },
  B: {
    title: '🎁 El Posadero Equilibrado',
    description: 'Disfrutas las posadas sin volverte loco. Participas, te diviertes y valoras las tradiciones. Sabes cuándo ir y cuándo descansar.',
    traits: ['Equilibrado', 'Social', 'Festivo', 'Selectivo'],
    advice: 'Tu balance es perfecto para disfrutar la temporada. Sigue así, participando sin agotarte.',
  },
  C: {
    title: '😌 El Posadero Relajado',
    description: 'Las posadas están bien pero no te quitan el sueño. Vas a las importantes, disfrutas lo que hay y no te complicas. La temporada navideña te gusta en dosis moderadas.',
    traits: ['Relajado', 'Práctico', 'Selectivo', 'Tranquilo'],
    advice: 'Tu actitud relajada te evita el estrés navideño. Pero date chance de disfrutar más, las posadas son momentos especiales.',
  },
  D: {
    title: '💚 El Grinch Mexicano',
    description: 'Las posadas no son lo tuyo. Prefieres evitar el caos, las multitudes y el exceso de festividad. Valoras tu tranquilidad sobre las tradiciones.',
    traits: ['Introvertido', 'Independiente', 'Tranquilo', 'Selectivo'],
    advice: 'Está bien si las posadas no son tu estilo. Pero de vez en cuando, date una oportunidad de disfrutar la calidez de las tradiciones mexicanas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
