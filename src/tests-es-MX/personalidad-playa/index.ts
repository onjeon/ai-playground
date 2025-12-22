// Personalidad en la Playa
export const questions = [
  {
    id: 1,
    text: '¿Qué playa mexicana prefieres?',
    options: [
      { text: 'Cancún o la Riviera Maya', type: 'A' },
      { text: 'Puerto Vallarta o Los Cabos', type: 'B' },
      { text: 'Playas más tranquilas y locales', type: 'C' },
      { text: 'No me gustan mucho las playas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces principalmente en la playa?',
    options: [
      { text: 'Nadar y meterme al mar', type: 'A' },
      { text: 'Tomar el sol y relajarme', type: 'B' },
      { text: 'Deportes acuáticos y actividades', type: 'C' },
      { text: 'Comer mariscos y tomar cerveza', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo es tu traje de baño ideal?',
    options: [
      { text: 'El más de moda, que se vea bien', type: 'A' },
      { text: 'Cómodo y práctico', type: 'B' },
      { text: 'El que tenga a la mano', type: 'C' },
      { text: 'Prefiero shorts o ropa normal', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué no puede faltar en tu día de playa?',
    options: [
      { text: 'Bloqueador y buena música', type: 'A' },
      { text: 'Cerveza y botanas', type: 'B' },
      { text: 'Una buena lectura o podcast', type: 'C' },
      { text: 'Mis amigos o familia', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo prefieres tu hospedaje de playa?',
    options: [
      { text: 'Hotel todo incluido, sin preocupaciones', type: 'A' },
      { text: 'Hotel bonito pero con libertad de salir', type: 'B' },
      { text: 'Airbnb o casa rentada', type: 'C' },
      { text: 'Lo más barato que funcione', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Madrugador de playa o tarde y noche?',
    options: [
      { text: 'Temprano, para aprovechar el sol', type: 'A' },
      { text: 'Mediodía, con calma', type: 'B' },
      { text: 'Tarde, cuando baja el sol', type: 'C' },
      { text: 'Noche, la playa de noche es mágica', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué mariscos prefieres en la playa?',
    options: [
      { text: 'Ceviche, el clásico', type: 'A' },
      { text: 'Camarones en cualquier presentación', type: 'B' },
      { text: 'Pescado zarandeado', type: 'C' },
      { text: 'No me gustan mucho los mariscos', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo reaccionas al calor intenso de la playa?',
    options: [
      { text: 'Me encanta, entre más calor mejor', type: 'A' },
      { text: 'Me adapto pero busco sombra', type: 'B' },
      { text: 'Necesito aire acondicionado seguido', type: 'C' },
      { text: 'Lo sufro, no soy de clima caliente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué opinas de la arena?',
    options: [
      { text: 'Me encanta, es parte de la experiencia', type: 'A' },
      { text: 'Está bien pero prefiero evitar que se meta en todo', type: 'B' },
      { text: 'Me molesta un poco pero la tolero', type: 'C' },
      { text: 'La odio, se mete en todos lados', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Con qué frecuencia vas a la playa?',
    options: [
      { text: 'Varias veces al año, es mi escape', type: 'A' },
      { text: 'Una o dos veces al año', type: 'B' },
      { text: 'Cuando se puede, no muy seguido', type: 'C' },
      { text: 'Casi nunca, no es mi prioridad', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏖️ El Playero de Corazón',
    description: 'La playa es tu lugar feliz. El mar, el sol y la arena son tu terapia. Probablemente ya tienes tus destinos favoritos y no hay nada que te haga más feliz que unas vacaciones playeras.',
    traits: ['Relajado', 'Amante del sol', 'Tropical', 'Aventurero'],
    advice: 'Tu amor por la playa es envidiable. Sigue disfrutando de las hermosas costas mexicanas.',
  },
  B: {
    title: '🌊 El Turista Playero',
    description: 'Disfrutas la playa como escape pero con moderación. Te gusta el mar, el sol y los mariscos pero también aprecias el aire acondicionado y la comodidad del hotel.',
    traits: ['Equilibrado', 'Turista', 'Adaptable', 'Práctico'],
    advice: 'Tu enfoque equilibrado te permite disfrutar sin sufrir. Sigue explorando nuevas playas.',
  },
  C: {
    title: '🐚 El Playero Ocasional',
    description: 'La playa está bien pero no es tu obsesión. Vas cuando se puede, disfrutas el momento pero también te gusta regresar a tu rutina. Prefieres playas tranquilas sobre las turísticas.',
    traits: ['Selectivo', 'Tranquilo', 'Práctico', 'Independiente'],
    advice: 'Tu preferencia por lo tranquilo es válida. Las playas menos conocidas de México son tesoros por descubrir.',
  },
  D: {
    title: '🏔️ El Terrestre',
    description: 'La playa no es realmente lo tuyo. Prefieres otros destinos como montañas, ciudades o simplemente estar en casa. El calor, la arena y el sol intenso no son tu ambiente ideal.',
    traits: ['Diferente', 'Honesto', 'Prefiere otros destinos', 'Independiente'],
    advice: 'Está bien si la playa no es lo tuyo. México tiene montañas, bosques y ciudades increíbles que explorar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
