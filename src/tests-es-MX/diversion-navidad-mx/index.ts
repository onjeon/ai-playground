// ¿Qué Personaje de Navidad Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo celebras la Navidad?',
    options: [
      { text: 'Con toda la familia, a lo grande', type: 'A' },
      { text: 'Tradicional con posadas y villancicos', type: 'B' },
      { text: 'Tranquilo en casa', type: 'C' },
      { text: 'No celebro mucho', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué es lo mejor de la Navidad mexicana?',
    options: [
      { text: 'Los regalos y la fiesta', type: 'A' },
      { text: 'Las posadas y tradiciones', type: 'B' },
      { text: 'La comida y el ponche', type: 'C' },
      { text: 'El descanso laboral', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué rol tienes en la cena de Navidad?',
    options: [
      { text: 'El que organiza todo', type: 'A' },
      { text: 'El que mantiene las tradiciones', type: 'B' },
      { text: 'El que solo viene a comer', type: 'C' },
      { text: 'El que llega tarde', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cuál es tu comida navideña favorita?',
    options: [
      { text: 'Pavo o pierna al horno', type: 'A' },
      { text: 'Bacalao a la vizcaína', type: 'B' },
      { text: 'Tamales de todo tipo', type: 'C' },
      { text: 'Lo que haya', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué bebida navideña prefieres?',
    options: [
      { text: 'Champagne o vino', type: 'A' },
      { text: 'Ponche calientito', type: 'B' },
      { text: 'Rompope casero', type: 'C' },
      { text: 'Lo que me den', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo decoras tu casa?',
    options: [
      { text: 'Con todo: árbol, luces, nacimiento', type: 'A' },
      { text: 'Nacimiento tradicional', type: 'B' },
      { text: 'Algo sencillo', type: 'C' },
      { text: 'No decoro', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces en Nochebuena?',
    options: [
      { text: 'Fiesta hasta el amanecer', type: 'A' },
      { text: 'Misa de gallo y cena familiar', type: 'B' },
      { text: 'Cena tranquila y a dormir', type: 'C' },
      { text: 'Nada especial', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cuándo abres los regalos?',
    options: [
      { text: 'A las 12 en punto', type: 'A' },
      { text: 'El 25 en la mañana', type: 'B' },
      { text: 'Cuando se presente', type: 'C' },
      { text: 'No intercambio regalos', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué música navideña te gusta?',
    options: [
      { text: 'Pop navideño moderno', type: 'A' },
      { text: 'Villancicos tradicionales', type: 'B' },
      { text: 'José Feliciano y clásicos', type: 'C' },
      { text: 'No me gusta la música navideña', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué esperas con más ganas de la Navidad?',
    options: [
      { text: 'Ver a toda la familia', type: 'A' },
      { text: 'Vivir las tradiciones', type: 'B' },
      { text: 'Comer rico y descansar', type: 'C' },
      { text: 'Que termine', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎄 El Anfitrión Navideño',
    description: '¡Eres el alma de la Navidad! Organizas, decoras y recibes a todos. Tu casa es donde la familia se reúne. La Navidad sin ti no sería lo mismo.',
    traits: ['Organizador', 'Festivo', 'Generoso', 'Familiar'],
    advice: 'Tu dedicación es admirable. Solo recuerda también disfrutar tú de la fiesta.',
  },
  B: {
    title: '👼 El Guardián de las Tradiciones',
    description: 'Tradicional hasta la médula. Las posadas, los villancicos, el nacimiento... todo debe ser como siempre. Eres quien mantiene vivas las costumbres mexicanas.',
    traits: ['Tradicional', 'Devoto', 'Nostálgico', 'Cultural'],
    advice: 'Tu amor por las tradiciones es valioso. Sigue pasándolas a las nuevas generaciones.',
  },
  C: {
    title: '🍽️ El Comelón Navideño',
    description: 'Para ti la Navidad es comida y descanso. El pavo, los tamales, el ponche... eso es lo que importa. Disfrutas sin complicarte la vida.',
    traits: ['Relajado', 'Disfrutón', 'Práctico', 'Comelón'],
    advice: 'Tu actitud relajada es sana. Disfruta cada bocado y cada momento de paz.',
  },
  D: {
    title: '🎅 El Grinch Mexicano',
    description: 'La Navidad no es lo tuyo y está bien. Prefieres evitar el ajetreo y las fiestas. Tu espíritu navideño está en modo avión, pero eso no te hace mala persona.',
    traits: ['Independiente', 'Práctico', 'Introvertido', 'Realista'],
    advice: 'Respetamos tu postura. Pero a veces unirse a la celebración puede sorprenderte gratamente.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
