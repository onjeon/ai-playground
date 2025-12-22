// ¿Qué Bebida Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿A qué hora te levantas los fines de semana?',
    options: [
      { text: 'Bien temprano, soy madrugador', type: 'A' },
      { text: 'A medio día, normal', type: 'B' },
      { text: 'Ya tarde, me desvelo mucho', type: 'C' },
      { text: 'Cuando mi cuerpo quiera', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo describes tu energía?',
    options: [
      { text: 'Bien arriba todo el día', type: 'A' },
      { text: 'Constante y estable', type: 'B' },
      { text: 'Sube y baja, depende', type: 'C' },
      { text: 'Más bien relajada', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces para refrescarte en el calor?',
    options: [
      { text: 'Busco algo bien helado', type: 'A' },
      { text: 'Algo tradicional y rico', type: 'B' },
      { text: 'Lo que haya disponible', type: 'C' },
      { text: 'Me quedo en la sombra', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te describes en una palabra?',
    options: [
      { text: 'Refrescante', type: 'A' },
      { text: 'Tradicional', type: 'B' },
      { text: 'Intenso', type: 'C' },
      { text: 'Tranquilo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tipo de persona eres en las fiestas?',
    options: [
      { text: 'El que anima el ambiente', type: 'A' },
      { text: 'El que trae lo tradicional', type: 'B' },
      { text: 'El que llega tarde pero con todo', type: 'C' },
      { text: 'El que observa desde lejos', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cuál es tu estación favorita?',
    options: [
      { text: 'Verano, me encanta el calor', type: 'A' },
      { text: 'Otoño, por las tradiciones', type: 'B' },
      { text: 'Invierno, para las fiestas', type: 'C' },
      { text: 'Primavera, clima perfecto', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas el estrés?',
    options: [
      { text: 'Con ejercicio y actividad', type: 'A' },
      { text: 'Platicando con la familia', type: 'B' },
      { text: 'Con algo que me relaje', type: 'C' },
      { text: 'Ignorándolo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué prefieres de desayuno?',
    options: [
      { text: 'Fruta fresca', type: 'A' },
      { text: 'Algo tradicional y completo', type: 'B' },
      { text: 'Café y algo ligero', type: 'C' },
      { text: 'No desayuno mucho', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo es tu círculo de amigos?',
    options: [
      { text: 'Grande y variado', type: 'A' },
      { text: 'Los de siempre, leales', type: 'B' },
      { text: 'Pocos pero intensos', type: 'C' },
      { text: 'Prefiero andar solo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué color te representa?',
    options: [
      { text: 'Verde o rosa vibrante', type: 'A' },
      { text: 'Café o beige', type: 'B' },
      { text: 'Rojo intenso', type: 'C' },
      { text: 'Azul o blanco', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🍹 Agua de Jamaica',
    description: '¡Refrescante y popular! Eres como esa bebida que todos buscan en el calor. Tu energía es contagiosa y siempre alegras el ambiente. Eres versátil y te adaptas a cualquier situación.',
    traits: ['Refrescante', 'Popular', 'Energético', 'Versátil'],
    advice: 'Tu frescura es tu don. Solo recuerda que no siempre tienes que estar al 100, date descanso.',
  },
  B: {
    title: '☕ Café de Olla',
    description: 'Tradicional y reconfortante. Eres como ese café que huele a hogar. Tu presencia da calidez y la gente se siente cómoda contigo. Representas las tradiciones y la familia.',
    traits: ['Tradicional', 'Cálido', 'Reconfortante', 'Hogareño'],
    advice: 'Tu calidez es invaluable. Pero atrévete a salir de tu zona de confort de vez en cuando.',
  },
  C: {
    title: '🥃 Mezcal',
    description: 'Intenso y con carácter. No eres para todos, pero los que te conocen te valoran mucho. Tienes profundidad y complejidad. Dejas huella en todos los que te prueban.',
    traits: ['Intenso', 'Profundo', 'Memorable', 'Con carácter'],
    advice: 'Tu intensidad es tu marca. Solo recuerda que no todos pueden con tanto, ve con calma.',
  },
  D: {
    title: '🥛 Horchata',
    description: 'Suave y tranquilo. Eres esa bebida que relaja y reconforta sin ser intensa. Tu calma es tu fortaleza. La gente busca tu paz en tiempos de caos.',
    traits: ['Tranquilo', 'Suave', 'Relajado', 'Reconfortante'],
    advice: 'Tu paz es admirable. Pero no te escondas tanto, el mundo necesita de tu calma.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
