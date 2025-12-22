// Personalidad en los Puentes/Días Festivos
export const questions = [
  {
    id: 1,
    text: '¿Cómo planeas los puentes?',
    options: [
      { text: 'Con anticipación, viaje y todo', type: 'A' },
      { text: 'Algo sencillo pero planeado', type: 'B' },
      { text: 'Sobre la marcha, lo que salga', type: 'C' },
      { text: 'No planeo, me quedo en casa', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué prefieres hacer en un puente?',
    options: [
      { text: 'Viajar a algún lado', type: 'A' },
      { text: 'Descansar y hacer algo divertido', type: 'B' },
      { text: 'Ponerme al corriente de pendientes', type: 'C' },
      { text: 'Nada, solo dormir', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Te estresas por el tráfico de puente?',
    options: [
      { text: 'No, salgo temprano y lo evito', type: 'A' },
      { text: 'Un poco, pero vale la pena', type: 'B' },
      { text: 'Sí, por eso mejor no salgo', type: 'C' },
      { text: 'No salgo en puentes', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Gastas de más en los puentes?',
    options: [
      { text: 'Sí, vale la pena invertir en experiencias', type: 'A' },
      { text: 'Un poco más de lo normal', type: 'B' },
      { text: 'Trato de no gastar mucho', type: 'C' },
      { text: 'Nada, me quedo en casa', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Con quién pasas los puentes?',
    options: [
      { text: 'Con familia o amigos, es para compartir', type: 'A' },
      { text: 'Con mi pareja o familia cercana', type: 'B' },
      { text: 'A veces solo/a, a veces acompañado/a', type: 'C' },
      { text: 'Solo/a, es mi tiempo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan importante es desconectarte del trabajo en puentes?',
    options: [
      { text: 'Fundamental, no contesto nada', type: 'A' },
      { text: 'Importante, solo lo urgente', type: 'B' },
      { text: 'Reviso de vez en cuando', type: 'C' },
      { text: 'No me desconecto nunca', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Aprovechas para conocer lugares nuevos?',
    options: [
      { text: 'Sí, siempre busco explorar', type: 'A' },
      { text: 'A veces, si se puede', type: 'B' },
      { text: 'Prefiero lugares conocidos', type: 'C' },
      { text: 'No salgo de mi zona', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo regresas de un puente?',
    options: [
      { text: 'Renovado/a y con energía', type: 'A' },
      { text: 'Descansado/a, listo/a para la semana', type: 'B' },
      { text: 'Cansado/a de tanto descansar', type: 'C' },
      { text: 'Igual que antes', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Haces el "puente" cuando el día festivo cae en medio de la semana?',
    options: [
      { text: 'Siempre, hay que aprovechar', type: 'A' },
      { text: 'Si se puede sí', type: 'B' },
      { text: 'Rara vez', type: 'C' },
      { text: 'Nunca, no me gusta faltar', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan importante son los puentes para ti?',
    options: [
      { text: 'Muy importantes, los espero con ansias', type: 'A' },
      { text: 'Importantes, son un respiro', type: 'B' },
      { text: 'Normal, un descanso más', type: 'C' },
      { text: 'Me dan igual', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '✈️ El/La Viajero/a de Puentes',
    description: 'Los puentes son sagrados para ti. Planeas con anticipación, viajas, exploras y aprovechas cada día libre al máximo. No desperdicias ni un momento.',
    traits: ['Aventurero', 'Planificador', 'Activo', 'Explorador'],
    advice: 'Tu espíritu viajero es admirable. Solo recuerda que a veces descansar también es productivo.',
  },
  B: {
    title: '😎 El/La Puente Equilibrado',
    description: 'Aprovechas los puentes de forma balanceada. Descansas, haces algo divertido y regresas renovado/a. Ni muy intenso ni muy flojo.',
    traits: ['Equilibrado', 'Relajado', 'Organizado', 'Sensato'],
    advice: 'Tu balance es perfecto. Disfrutas sin agotarte.',
  },
  C: {
    title: '🏠 El/La Puente Casero',
    description: 'Prefieres quedarte en casa en los puentes. El tráfico, los gastos y el estrés de viajar no valen la pena. Tu hogar es tu refugio.',
    traits: ['Hogareño', 'Tranquilo', 'Ahorrativo', 'Relajado'],
    advice: 'Está bien quedarse en casa. Pero de vez en cuando una escapadita renueva el espíritu.',
  },
  D: {
    title: '🤷 El/La Indiferente al Puente',
    description: 'Los puentes te dan igual. Son días como cualquier otro. No planeas nada especial ni te emocionan particularmente.',
    traits: ['Constante', 'Indiferente', 'Rutinario', 'Estable'],
    advice: 'Cada quien vive los puentes a su manera. Si te funciona, adelante.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
