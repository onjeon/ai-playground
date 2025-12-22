// Personalidad en las Vacaciones
export const questions = [
  {
    id: 1,
    text: '¿Cómo planeas tus vacaciones?',
    options: [
      { text: 'Con meses de anticipación, todo reservado', type: 'A' },
      { text: 'Con algo de anticipación', type: 'B' },
      { text: 'Sobre la marcha, improvisando', type: 'C' },
      { text: 'No planeo vacaciones', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Playa o montaña?',
    options: [
      { text: 'Playa, siempre playa', type: 'A' },
      { text: 'Montaña o naturaleza', type: 'B' },
      { text: 'Ciudades y cultura', type: 'C' },
      { text: 'Mi casa, es mi lugar favorito', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan activo/a eres en vacaciones?',
    options: [
      { text: 'Muy activo/a, quiero ver y hacer todo', type: 'A' },
      { text: 'Balanceado, actividades y descanso', type: 'B' },
      { text: 'Más relajado/a, pocas actividades', type: 'C' },
      { text: 'Solo quiero descansar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Hotel, Airbnb o casa de familiares?',
    options: [
      { text: 'Hotel, quiero que me atiendan', type: 'A' },
      { text: 'Airbnb, más espacio y privacidad', type: 'B' },
      { text: 'Casa de familiares, económico', type: 'C' },
      { text: 'Mi casa, no salgo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Con quién prefieres vacacionar?',
    options: [
      { text: 'Con familia, es tiempo de unión', type: 'A' },
      { text: 'Con mi pareja o amigos cercanos', type: 'B' },
      { text: 'Solo/a, necesito mi espacio', type: 'C' },
      { text: 'No me gustan las vacaciones', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tanto gastas en vacaciones?',
    options: [
      { text: 'Lo necesario para disfrutar bien', type: 'A' },
      { text: 'Con presupuesto pero sin limitarme', type: 'B' },
      { text: 'Lo mínimo posible', type: 'C' },
      { text: 'Nada, no vacationo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Te desconectas del trabajo en vacaciones?',
    options: [
      { text: 'Totalmente, ni reviso el correo', type: 'A' },
      { text: 'Casi, solo emergencias', type: 'B' },
      { text: 'Un poco, sigo conectado/a', type: 'C' },
      { text: 'No puedo desconectarme', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan importante es la comida local en tus vacaciones?',
    options: [
      { text: 'Fundamental, quiero probar todo', type: 'A' },
      { text: 'Importante, disfruto probar cosas nuevas', type: 'B' },
      { text: 'Normal, como lo que haya', type: 'C' },
      { text: 'No me importa mucho', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo regresas de vacaciones?',
    options: [
      { text: 'Renovado/a y lleno/a de energía', type: 'A' },
      { text: 'Descansado/a pero con nostalgia', type: 'B' },
      { text: 'Cansado/a de tanto viaje', type: 'C' },
      { text: 'Aliviado/a de volver a mi rutina', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan importantes son las vacaciones para ti?',
    options: [
      { text: 'Esenciales, las necesito para vivir', type: 'A' },
      { text: 'Muy importantes, recargo energía', type: 'B' },
      { text: 'Importantes pero no indispensables', type: 'C' },
      { text: 'Me dan igual o las evito', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌴 El/La Vacacionista Pro',
    description: 'Las vacaciones son sagradas para ti. Planeas, disfrutas, exploras y regresas renovado/a. Sabes que descansar es tan importante como trabajar.',
    traits: ['Planificador', 'Aventurero', 'Equilibrado', 'Viajero'],
    advice: 'Tu actitud hacia las vacaciones es muy sana. Sigue disfrutando y explorando.',
  },
  B: {
    title: '😊 El/La Vacacionista Equilibrado',
    description: 'Disfrutas las vacaciones de forma balanceada. Ni muy intenso ni muy flojo. Descansas, conoces y regresas listo/a para la rutina.',
    traits: ['Equilibrado', 'Relajado', 'Organizado', 'Sensato'],
    advice: 'Tu balance vacacional es admirable. Disfrutas sin excesos.',
  },
  C: {
    title: '🏠 El/La Vacacionista Casero',
    description: 'Prefieres vacaciones tranquilas, económicas o de plano quedarte en casa. Viajar te estresa y tu hogar es tu lugar de descanso favorito.',
    traits: ['Hogareño', 'Económico', 'Tranquilo', 'Sencillo'],
    advice: 'El descanso en casa también cuenta. Pero de vez en cuando cambiar de ambiente ayuda.',
  },
  D: {
    title: '💼 El/La Anti-Vacaciones',
    description: 'Las vacaciones no son lo tuyo. Te estresa planearlas, gastar o desconectarte. Prefieres tu rutina y el trabajo te da más satisfacción que el descanso.',
    traits: ['Trabajador', 'Rutinario', 'Constante', 'Enfocado'],
    advice: 'El descanso es necesario para rendir. Considera tomarte aunque sea unos días.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
