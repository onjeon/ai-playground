// Personalidad del Taco
export const questions = [
  {
    id: 1,
    text: '¿Cuál es tu taco favorito?',
    options: [
      { text: 'De pastor, el rey de los tacos', type: 'A' },
      { text: 'De carnitas, bien doraditas', type: 'B' },
      { text: 'De bistec o carne asada', type: 'C' },
      { text: 'De birria, con su consomé', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo le pones salsa a tus tacos?',
    options: [
      { text: 'Bien bañados, que piquen', type: 'A' },
      { text: 'Un poco, pa que tenga sabor', type: 'B' },
      { text: 'Solo verde o roja, moderado', type: 'C' },
      { text: 'Sin salsa o muy poquita', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué no puede faltar en tus tacos?',
    options: [
      { text: 'Cilantro y cebolla, siempre', type: 'A' },
      { text: 'Limón, mucho limón', type: 'B' },
      { text: 'La salsa perfecta', type: 'C' },
      { text: 'Solo la carne, soy purista', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Dónde prefieres comer tacos?',
    options: [
      { text: 'En el puesto de la calle, los más greñudos', type: 'A' },
      { text: 'En una taquería de toda la vida', type: 'B' },
      { text: 'En un restaurante de tacos gourmet', type: 'C' },
      { text: 'En casa, hechos por mí o mi familia', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cuántos tacos te comes en una sentada?',
    options: [
      { text: 'Más de 6, soy tragón', type: 'A' },
      { text: 'Entre 4 y 6, lo normal', type: 'B' },
      { text: '3 o 4, moderado', type: 'C' },
      { text: '1 o 2, como poco', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué acompañas con tus tacos?',
    options: [
      { text: 'Refresco bien helado', type: 'A' },
      { text: 'Agua de horchata o jamaica', type: 'B' },
      { text: 'Cerveza o michelada', type: 'C' },
      { text: 'Lo que haya, no soy exigente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué hora es la hora del taco para ti?',
    options: [
      { text: 'Cualquier hora es hora de tacos', type: 'A' },
      { text: 'En la noche, tacos de media noche', type: 'B' },
      { text: 'En la comida o cena', type: 'C' },
      { text: 'Cuando se antoja, sin horario', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué opinas de los tacos gourmet o fusion?',
    options: [
      { text: 'Herejía, el taco es tradicional', type: 'A' },
      { text: 'Están bien pero prefiero los clásicos', type: 'B' },
      { text: 'Me gustan, son interesantes', type: 'C' },
      { text: 'Me da igual, un taco es un taco', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo describes el taco perfecto?',
    options: [
      { text: 'Tortilla pequeña, carne jugosa, salsa brava', type: 'A' },
      { text: 'Bien servido con todo y sus aderezos', type: 'B' },
      { text: 'Equilibrado en sabores y texturas', type: 'C' },
      { text: 'Cualquiera que me quite el hambre', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Tienes una taquería de cabecera?',
    options: [
      { text: 'Sí, varias y las defiendo con orgullo', type: 'A' },
      { text: 'Una o dos donde siempre voy', type: 'B' },
      { text: 'Voy a varias, me gusta explorar', type: 'C' },
      { text: 'No tengo favorita, como donde caiga', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌮 El Taquero de Corazón',
    description: 'Los tacos son tu religión. Conoces las mejores taquerías, tienes opiniones fuertes sobre qué hace un buen taco y probablemente has tenido debates acalorados sobre el tema. Para ti, el taco es arte.',
    traits: ['Apasionado', 'Tradicional', 'Conocedor', 'Intenso'],
    advice: 'Tu pasión por los tacos es admirable. Comparte tu conocimiento pero respeta que otros tengan gustos diferentes.',
  },
  B: {
    title: '🔥 El Taquero Clásico',
    description: 'Amas los tacos tradicionales y sabes apreciar una buena taquería. Tienes tus favoritos pero estás abierto a probar nuevos lugares. El taco para ti es un placer que hay que disfrutar.',
    traits: ['Equilibrado', 'Tradicional', 'Conocedor', 'Leal'],
    advice: 'Tu gusto clásico es respetable. Sigue explorando nuevas taquerías pero mantén tus favoritas.',
  },
  C: {
    title: '🌯 El Taquero Explorador',
    description: 'Te gustan los tacos pero también disfrutas la innovación. Puedes comer en un puesto callejero o en un lugar gourmet. Para ti, la experiencia importa tanto como el sabor.',
    traits: ['Aventurero', 'Abierto', 'Curioso', 'Moderno'],
    advice: 'Tu apertura te permite disfrutar de todo tipo de tacos. Sigue explorando, México tiene infinitas variaciones.',
  },
  D: {
    title: '😌 El Taquero Relajado',
    description: 'Los tacos te gustan pero no eres fanático. Comes lo que hay sin tanto análisis. Para ti un taco es comida, punto. No te complicas con detalles ni debates.',
    traits: ['Relajado', 'Práctico', 'Flexible', 'Simple'],
    advice: 'Tu actitud relajada está bien, pero los tacos mexicanos son un mundo. Date tiempo de explorar y descubrir sabores nuevos.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
