// Personalidad de Viaje
export const questions = [
  {
    id: 1,
    text: '¿Cómo planeas tus viajes?',
    options: [
      { text: 'Todo organizado: vuelos, hoteles y actividades', type: 'A' },
      { text: 'Lo básico reservado y lo demás improvisado', type: 'B' },
      { text: 'Solo el destino, lo demás se va dando', type: 'C' },
      { text: 'Aventurero total, sin plan fijo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de destino prefieres?',
    options: [
      { text: 'Playa mexicana: Cancún, Vallarta, Los Cabos', type: 'A' },
      { text: 'Pueblo Mágico con historia y cultura', type: 'B' },
      { text: 'Ciudad grande con mucho que hacer', type: 'C' },
      { text: 'Aventura: montaña, selva o desierto', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo es tu maleta cuando viajas?',
    options: [
      { text: 'Enorme, llevo de todo por si acaso', type: 'A' },
      { text: 'Mediana, lo necesario y un poco más', type: 'B' },
      { text: 'Ligera, solo lo esencial', type: 'C' },
      { text: 'Mochila pequeña, viajo super ligero', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué es lo primero que haces al llegar a un lugar nuevo?',
    options: [
      { text: 'Ir al hotel a descansar y organizarme', type: 'A' },
      { text: 'Buscar dónde comer algo típico del lugar', type: 'B' },
      { text: 'Salir a caminar y explorar los alrededores', type: 'C' },
      { text: 'Buscar la vida nocturna o la acción', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Con quién prefieres viajar?',
    options: [
      { text: 'Con mi familia, momentos para recordar', type: 'A' },
      { text: 'Con mi pareja, viaje romántico', type: 'B' },
      { text: 'Con amigos, puro desmadre', type: 'C' },
      { text: 'Solo, a mi propio ritmo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas el presupuesto de viaje?',
    options: [
      { text: 'Ahorro con anticipación y tengo todo calculado', type: 'A' },
      { text: 'Tengo un presupuesto flexible', type: 'B' },
      { text: 'Gasto lo que sea necesario para disfrutar', type: 'C' },
      { text: 'La tarjeta de crédito es mi amiga', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué no puede faltar en tu viaje?',
    options: [
      { text: 'Fotos para el Instagram y recuerdos', type: 'A' },
      { text: 'Probar la comida local del lugar', type: 'B' },
      { text: 'Conocer la historia y cultura', type: 'C' },
      { text: 'Actividades extremas o aventura', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes con los tours organizados?',
    options: [
      { text: 'Me gustan, te explican todo y no te pierdes nada', type: 'A' },
      { text: 'A veces están bien para ciertos lugares', type: 'B' },
      { text: 'Prefiero explorar por mi cuenta', type: 'C' },
      { text: 'Los odio, me siento como ganado', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces si algo sale mal en el viaje?',
    options: [
      { text: 'Me estreso y trato de arreglarlo inmediatamente', type: 'A' },
      { text: 'Busco solución pero sin perder la calma', type: 'B' },
      { text: 'Lo tomo como parte de la aventura', type: 'C' },
      { text: 'Me adapto, todo es experiencia', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué extrañas más de México cuando viajas?',
    options: [
      { text: 'La comida, nada como la comida mexicana', type: 'A' },
      { text: 'Mi familia y amigos', type: 'B' },
      { text: 'El ambiente y la calidez de la gente', type: 'C' },
      { text: 'Nada, disfruto estar en otro lugar', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📋 El Viajero Planificador',
    description: 'Eres de los que tienen todo organizado antes de partir. Itinerario, reservaciones y hasta los outfits planeados. Te gusta la seguridad de saber qué esperar y no dejar nada al azar. Tus viajes son eficientes y bien aprovechados.',
    traits: ['Organizado', 'Previsor', 'Detallista', 'Seguro'],
    advice: 'Tu organización es envidiable, pero de vez en cuando déjate sorprender. Los mejores momentos a veces no están en el itinerario.',
  },
  B: {
    title: '🎒 El Turista Equilibrado',
    description: 'Tienes lo esencial planeado pero dejas espacio para la espontaneidad. Sabes que un viaje necesita estructura pero también flexibilidad. Disfrutas tanto de las atracciones principales como de los descubrimientos casuales.',
    traits: ['Flexible', 'Adaptable', 'Práctico', 'Curioso'],
    advice: 'Has encontrado el balance perfecto para viajar. Sigue explorando con esa mentalidad abierta.',
  },
  C: {
    title: '🗺️ El Explorador Curioso',
    description: 'Para ti, viajar es descubrir. Te gusta perderte en las calles, probar comida random y conocer gente local. Los planes están para romperse y las mejores historias vienen de lo inesperado.',
    traits: ['Aventurero', 'Curioso', 'Espontáneo', 'Cultural'],
    advice: 'Tu espíritu explorador te lleva a experiencias únicas. Solo asegúrate de tener un plan B para emergencias.',
  },
  D: {
    title: '🌍 El Nómada Aventurero',
    description: 'Viajas con la mochila en la espalda y el corazón abierto. No necesitas lujos ni planes detallados. Para ti, el viaje es el destino y cada experiencia, buena o mala, es parte de la aventura.',
    traits: ['Libre', 'Intrépido', 'Minimalista', 'Independiente'],
    advice: 'Tu libertad es inspiradora. Solo recuerda que a veces está bien tener un colchón de seguridad, especialmente en destinos desconocidos.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
