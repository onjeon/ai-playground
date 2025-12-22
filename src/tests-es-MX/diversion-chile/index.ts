// ¿Qué Chile Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas cuando te hacen enojar?',
    options: [
      { text: 'Exploto de una vez, sin filtro', type: 'A' },
      { text: 'Me prendo pero me controlo', type: 'B' },
      { text: 'Me molesto pero lo proceso', type: 'C' },
      { text: 'Casi nada me enoja', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan directo eres al hablar?',
    options: [
      { text: 'Digo las cosas tal cual', type: 'A' },
      { text: 'Soy claro pero con tacto', type: 'B' },
      { text: 'Prefiero suavizar las cosas', type: 'C' },
      { text: 'Evito los conflictos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te describen tus amigos?',
    options: [
      { text: 'Intenso y apasionado', type: 'A' },
      { text: 'Fuerte pero justo', type: 'B' },
      { text: 'Tranquilo pero con carácter', type: 'C' },
      { text: 'Suave y relajado', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tanto picante aguantas en la comida?',
    options: [
      { text: 'El más picoso que haya', type: 'A' },
      { text: 'Picante fuerte pero controlado', type: 'B' },
      { text: 'Un poco nada más', type: 'C' },
      { text: 'Nada de picante, gracias', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo enfrentas los problemas?',
    options: [
      { text: 'De frente y sin miedo', type: 'A' },
      { text: 'Con estrategia y firmeza', type: 'B' },
      { text: 'Con calma y paciencia', type: 'C' },
      { text: 'Los evito si puedo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué impresión das al conocerte?',
    options: [
      { text: 'Fuerte y dominante', type: 'A' },
      { text: 'Serio pero accesible', type: 'B' },
      { text: 'Amigable y cálido', type: 'C' },
      { text: 'Tímido o reservado', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo eres en las relaciones?',
    options: [
      { text: 'Intenso y apasionado', type: 'A' },
      { text: 'Comprometido y leal', type: 'B' },
      { text: 'Cariñoso y tranquilo', type: 'C' },
      { text: 'Independiente y libre', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué música escuchas cuando estás enojado?',
    options: [
      { text: 'Rock o metal pesado', type: 'A' },
      { text: 'Corridos o banda', type: 'B' },
      { text: 'Algo para calmarme', type: 'C' },
      { text: 'Prefiero el silencio', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas las críticas?',
    options: [
      { text: 'Me defiendo de una', type: 'A' },
      { text: 'Las analizo y respondo', type: 'B' },
      { text: 'Me afectan pero no lo muestro', type: 'C' },
      { text: 'Me dan igual', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu lema de vida?',
    options: [
      { text: 'Sin miedo al éxito', type: 'A' },
      { text: 'Con todo o nada', type: 'B' },
      { text: 'Todo con calma', type: 'C' },
      { text: 'Dejarse llevar', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌶️ Chile Habanero',
    description: '¡Eres puro fuego, güey! El más picoso de todos. Tu personalidad es intensa y dejas huella en todos los que te conocen. No te andas con rodeos y dices las cosas como son.',
    traits: ['Intenso', 'Directo', 'Apasionado', 'Valiente'],
    advice: 'Tu intensidad es admirable, pero a veces hay que bajarle dos rayitas para no quemar a los demás.',
  },
  B: {
    title: '🫑 Chile Serrano',
    description: 'Fuerte pero equilibrado. Tienes carácter pero sabes cuándo usarlo. Eres el chile que está en todas las cocinas porque eres confiable y versátil.',
    traits: ['Equilibrado', 'Versátil', 'Fuerte', 'Confiable'],
    advice: 'Tu balance es tu fuerza. Sigue así pero no tengas miedo de mostrar tu lado más picoso.',
  },
  C: {
    title: '🌶️ Chile Poblano',
    description: 'Suave con su toque. No eres el más picoso pero tienes personalidad. Eres como un chile relleno: sustancioso y reconfortante. La gente te aprecia por tu calidez.',
    traits: ['Cálido', 'Sustancioso', 'Accesible', 'Reconfortante'],
    advice: 'Tu calidez es tu don. No sientas que tienes que ser más picoso para destacar.',
  },
  D: {
    title: '🫑 Chile Morrón',
    description: 'Dulce y sin picante. Prefieres la paz y la armonía. No todos tienen que ser picosos para ser valiosos. Tu dulzura es tu fortaleza.',
    traits: ['Dulce', 'Pacífico', 'Armonioso', 'Relajado'],
    advice: 'Tu paz es envidiable. Solo recuerda que a veces hay que ponerse picoso para defender lo tuyo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
