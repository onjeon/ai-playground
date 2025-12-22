// Personalidad en los Bautizos
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando te invitan a un bautizo?',
    options: [
      { text: 'Me encanta, es un evento familiar especial', type: 'A' },
      { text: 'Bien, me gusta celebrar con la familia', type: 'B' },
      { text: 'Neutral, voy si es alguien cercano', type: 'C' },
      { text: 'Prefiero evitarlos', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan importante es la ceremonia religiosa para ti?',
    options: [
      { text: 'Muy importante, es el centro del evento', type: 'A' },
      { text: 'Importante, es una bonita tradición', type: 'B' },
      { text: 'Menos importante que la fiesta', type: 'C' },
      { text: 'No me interesa mucho', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Serías padrino/madrina de bautizo?',
    options: [
      { text: 'Sí, es un honor y responsabilidad hermosa', type: 'A' },
      { text: 'Sí, para alguien especial', type: 'B' },
      { text: 'Depende de quién me lo pida', type: 'C' },
      { text: 'Prefiero no, es mucha responsabilidad', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué esperas de la comida en un bautizo?',
    options: [
      { text: 'Barbacoa o birria, la tradición', type: 'A' },
      { text: 'Algo rico, lo que sea', type: 'B' },
      { text: 'Mientras haya que comer, todo bien', type: 'C' },
      { text: 'No me importa mucho la comida', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te comportas con los otros invitados?',
    options: [
      { text: 'Muy social, platico con todos', type: 'A' },
      { text: 'Convivo con familia y conocidos', type: 'B' },
      { text: 'Solo con los más cercanos', type: 'C' },
      { text: 'Me mantengo apartado/a', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué opinas de los recuerditos de bautizo?',
    options: [
      { text: 'Me gustan, los guardo todos', type: 'A' },
      { text: 'Están bien, parte de la tradición', type: 'B' },
      { text: 'Me dan igual', type: 'C' },
      { text: 'Terminan en la basura', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Te emociona cargar al bebé o verlo en la ceremonia?',
    options: [
      { text: 'Sí, me encantan los bebés', type: 'A' },
      { text: 'Es tierno, me gusta', type: 'B' },
      { text: 'Normal, no me emociona tanto', type: 'C' },
      { text: 'Prefiero no cargar bebés', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo ves la tradición del bolo?',
    options: [
      { text: 'Genial, los niños se emocionan', type: 'A' },
      { text: 'Está bien, es tradición', type: 'B' },
      { text: 'Es un poco caótico', type: 'C' },
      { text: 'No me gusta el desmadre', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cuánto tiempo te quedas en los bautizos?',
    options: [
      { text: 'Todo el evento, hasta el final', type: 'A' },
      { text: 'Varias horas, lo disfruto', type: 'B' },
      { text: 'Lo necesario', type: 'C' },
      { text: 'Lo mínimo posible', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan importante es la tradición del bautizo para ti?',
    options: [
      { text: 'Muy importante, es nuestra cultura', type: 'A' },
      { text: 'Importante, vale la pena celebrar', type: 'B' },
      { text: 'Normal, una tradición más', type: 'C' },
      { text: 'No le doy mucha importancia', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '⛪ El/La Devoto/a de los Bautizos',
    description: 'Los bautizos son eventos especiales para ti. Valoras la tradición religiosa, la familia y cada detalle de la celebración. Eres el/la invitado/a ideal.',
    traits: ['Tradicional', 'Familiar', 'Devoto', 'Social'],
    advice: 'Tu aprecio por estas tradiciones es hermoso. Sigue cultivando esos valores familiares.',
  },
  B: {
    title: '🎉 El/La Buen Invitado',
    description: 'Disfrutas los bautizos de manera equilibrada. Aprecias la ceremonia, convives con la familia y pasas un buen rato sin complicarte.',
    traits: ['Equilibrado', 'Familiar', 'Alegre', 'Respetuoso'],
    advice: 'Tienes la actitud correcta para estos eventos. Sigue disfrutando las celebraciones familiares.',
  },
  C: {
    title: '😐 El/La Bautizado Tibio',
    description: 'Los bautizos te son un poco indiferentes. Vas por compromiso familiar pero no te emocionan particularmente. Cumples y ya.',
    traits: ['Neutral', 'Práctico', 'Cumplidor', 'Independiente'],
    advice: 'No tienes que emocionarte por todo. Pero recuerda que para otros es un día muy especial.',
  },
  D: {
    title: '🏃 El/La Escape de Bautizos',
    description: 'Los bautizos no son lo tuyo. Prefieres evitarlos o irte pronto. Las reuniones familiares grandes te abruman un poco.',
    traits: ['Independiente', 'Selectivo', 'Introvertido', 'Directo'],
    advice: 'Está bien que no te emocionen, pero a veces vale la pena ir por la familia.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
