// Personalidad en las Fiestas
export const questions = [
  {
    id: 1,
    text: '¿Cómo llegas a una fiesta?',
    options: [
      { text: 'De los primeros, para ayudar a organizar', type: 'A' },
      { text: 'A la hora que dijeron, puntualito', type: 'B' },
      { text: 'Un poco tarde, la hora mexicana', type: 'C' },
      { text: 'Cuando ya está en su mejor momento', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué llevas cuando te invitan a una fiesta?',
    options: [
      { text: 'Las bebidas premium o comida especial', type: 'A' },
      { text: 'Un six de chelas o una botella', type: 'B' },
      { text: 'Botanas o refrescos', type: 'C' },
      { text: 'Mi presencia es el regalo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Dónde te encuentran generalmente en la fiesta?',
    options: [
      { text: 'En la pista de baile toda la noche', type: 'A' },
      { text: 'Platicando con diferentes grupos', type: 'B' },
      { text: 'Cerca de la comida y bebidas', type: 'C' },
      { text: 'En un rincón tranquilo con mis cercanos', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo eres para bailar?',
    options: [
      { text: 'Me aviento a la pista con todo', type: 'A' },
      { text: 'Bailo si me sacan, no me hago del rogar', type: 'B' },
      { text: 'Solo con unas copas encima', type: 'C' },
      { text: 'Prefiero sentadito viendo a los demás', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué música te prende más en una fiesta?',
    options: [
      { text: 'Cumbia y música tropical', type: 'A' },
      { text: 'Reggaetón y música urbana', type: 'B' },
      { text: 'Rock o música alternativa', type: 'C' },
      { text: 'Lo que sea, mientras haya ambiente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te comportas con las bebidas?',
    options: [
      { text: 'Tomo moderado, me gusta estar consciente', type: 'A' },
      { text: 'Me echo mis copas pero con control', type: 'B' },
      { text: 'A veces se me pasan las cucharadas', type: 'C' },
      { text: 'Hasta que el cuerpo aguante', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces si la fiesta está aburrida?',
    options: [
      { text: 'Trato de animar el ambiente', type: 'A' },
      { text: 'Propongo un juego o algo diferente', type: 'B' },
      { text: 'Aguanto un rato y luego me voy', type: 'C' },
      { text: 'Me voy sin avisar, tipo Batman', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo terminas generalmente las fiestas?',
    options: [
      { text: 'De los últimos, ayudando a recoger', type: 'A' },
      { text: 'Me voy a buena hora, cuando sigue divertido', type: 'B' },
      { text: 'Cuando ya estoy muy cansado o pasado', type: 'C' },
      { text: 'Temprano, me canso rápido de tanta gente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué rol tienes cuando alguien se pone mal por el alcohol?',
    options: [
      { text: 'Soy el que lo cuida y le da agua', type: 'A' },
      { text: 'Ayudo a buscarle un lugar para sentarse', type: 'B' },
      { text: 'Llamo a alguien más responsable', type: 'C' },
      { text: 'Me hago wey, no es mi problema', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te sientes al día siguiente de una buena fiesta?',
    options: [
      { text: 'Bien, me cuido durante la fiesta', type: 'A' },
      { text: 'Un poco crudo pero valió la pena', type: 'B' },
      { text: 'Destruido, necesito todo el día para recuperarme', type: 'C' },
      { text: 'Ya ni me acuerdo qué pasó', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎊 El Anfitrión Natural',
    description: 'Eres el alma de toda fiesta. Llegas preparado, ayudas a organizar, bailas toda la noche y cuidas a los que se pasan de copas. Las fiestas no serían lo mismo sin ti. Eres el MVP de cualquier reunión.',
    traits: ['Sociable', 'Responsable', 'Energético', 'Generoso'],
    advice: 'Tu energía festera es increíble, pero recuerda que también está bien descansar y disfrutar sin tener que cuidar a todos.',
  },
  B: {
    title: '🎈 El Fiestero Balanceado',
    description: 'Sabes cómo disfrutar una fiesta sin pasarte. Te diviertes, bailas, platicas con todos y te vas a buena hora. Has encontrado el equilibrio perfecto entre pasarla bien y no arrepentirte al día siguiente.',
    traits: ['Equilibrado', 'Sociable', 'Divertido', 'Maduro'],
    advice: 'Tienes la fórmula perfecta. Sigue así, disfrutando sin excesos pero sin ser aguafiestas.',
  },
  C: {
    title: '🍻 El Peda Ocasional',
    description: 'No eres el más fiestero pero cuando te lanzas, te lanzas con todo. A veces terminas más tomado de lo planeado pero son esas noches las que te dejan las mejores historias.',
    traits: ['Relajado', 'Espontáneo', 'Auténtico', 'Impredecible'],
    advice: 'Las mejores historias vienen de las mejores fiestas, pero cuídate. Conoce tus límites para que la diversión no se convierta en problema.',
  },
  D: {
    title: '🌙 El Observador Social',
    description: 'Las fiestas no son exactamente tu elemento. Prefieres reuniones más íntimas y tranquilas. Cuando vas a una fiesta, disfrutas más observando que participando activamente.',
    traits: ['Introvertido', 'Selectivo', 'Observador', 'Tranquilo'],
    advice: 'Está bien si las fiestas grandes no son lo tuyo. Busca reuniones más pequeñas donde te sientas cómodo siendo tú mismo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
