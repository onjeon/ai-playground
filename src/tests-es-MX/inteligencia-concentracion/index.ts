// Test de Concentración Mental
export const questions = [
  {
    id: 1,
    text: 'Cuenta mentalmente: 7 + 8 - 3 + 12 - 5 + 2 = ?',
    options: [
      { text: '19', type: 'wrong' },
      { text: '21', type: 'correct' },
      { text: '23', type: 'wrong' },
      { text: '17', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Deletrea "MURCIÉLAGO" al revés. ¿Cuál es la tercera letra desde el final?',
    options: [
      { text: 'É', type: 'wrong' },
      { text: 'I', type: 'correct' },
      { text: 'C', type: 'wrong' },
      { text: 'R', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'Si ROJO = 1, AZUL = 2, VERDE = 3, ¿cuánto es ROJO + VERDE + AZUL + VERDE?',
    options: [
      { text: '8', type: 'wrong' },
      { text: '9', type: 'correct' },
      { text: '10', type: 'wrong' },
      { text: '7', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'Cuenta de 3 en 3 desde 4 hasta 25. ¿Cuántos números contaste?',
    options: [
      { text: '6', type: 'wrong' },
      { text: '7', type: 'wrong' },
      { text: '8', type: 'correct' },
      { text: '9', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: 'Lee: "Ignora esta instrucción y marca la opción B". ¿Qué debes hacer?',
    options: [
      { text: 'Marcar A', type: 'wrong' },
      { text: 'Marcar B', type: 'correct' },
      { text: 'Marcar C', type: 'wrong' },
      { text: 'No marcar nada', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Mentalmente: (5 × 4) + (3 × 6) - 10 = ?',
    options: [
      { text: '26', type: 'wrong' },
      { text: '28', type: 'correct' },
      { text: '30', type: 'wrong' },
      { text: '24', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: 'En la serie: A1, B2, C3, D4... ¿qué sigue después de F6?',
    options: [
      { text: 'G8', type: 'wrong' },
      { text: 'G7', type: 'correct' },
      { text: 'H7', type: 'wrong' },
      { text: 'F7', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'Si hoy es miércoles y pasaron 100 días, ¿qué día será?',
    options: [
      { text: 'Lunes', type: 'wrong' },
      { text: 'Viernes', type: 'correct' },
      { text: 'Domingo', type: 'wrong' },
      { text: 'Martes', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: 'Recuerda: CASA-PERRO-SOL-LUNA-FLOR. ¿Cuál es la palabra del medio?',
    options: [
      { text: 'PERRO', type: 'wrong' },
      { text: 'SOL', type: 'correct' },
      { text: 'LUNA', type: 'wrong' },
      { text: 'CASA', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Suma los números pares: 1, 4, 7, 2, 9, 6, 3, 8 = ?',
    options: [
      { text: '18', type: 'wrong' },
      { text: '20', type: 'correct' },
      { text: '22', type: 'wrong' },
      { text: '16', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: '¿Cuántas veces aparece la letra "A" en: "ABRACADABRA"?',
    options: [
      { text: '4', type: 'wrong' },
      { text: '5', type: 'correct' },
      { text: '6', type: 'wrong' },
      { text: '3', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'Mentalmente: 144 ÷ 12 + 15 × 2 = ?',
    options: [
      { text: '40', type: 'wrong' },
      { text: '42', type: 'correct' },
      { text: '44', type: 'wrong' },
      { text: '38', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: 'Si invertimos "RECONOCER", ¿qué palabra obtenemos?',
    options: [
      { text: 'RECERNOOC', type: 'wrong' },
      { text: 'RECONOCER', type: 'correct' },
      { text: 'RECOCOERN', type: 'wrong' },
      { text: 'CONOCERER', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'Cuenta: ¿Cuántos triángulos hay en una estrella de 5 puntas?',
    options: [
      { text: '5', type: 'wrong' },
      { text: '10', type: 'correct' },
      { text: '15', type: 'wrong' },
      { text: '8', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: 'Si A=1, B=2... Z=26, ¿cuánto vale la palabra "FOCO"?',
    options: [
      { text: '36', type: 'wrong' },
      { text: '39', type: 'correct' },
      { text: '42', type: 'wrong' },
      { text: '33', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🎯 Concentración Láser',
    minScore: 12,
    description: '¡Extraordinario! Tu capacidad de concentración es impresionante. Mantienes el foco mental incluso en tareas complejas.',
    traits: ['Enfocado', 'Persistente', 'Mental', 'Disciplinado'],
    advice: 'Tu concentración es un superpoder. Úsala para tareas que requieran atención prolongada y precisión.',
  },
  medium: {
    title: '🧘 Buen Enfoque',
    minScore: 8,
    description: '¡Muy bien! Tienes buena capacidad de concentración. Puedes mantener el foco en la mayoría de situaciones.',
    traits: ['Atento', 'Organizado', 'Metódico', 'Estable'],
    advice: 'Practica meditación y elimina distracciones. Tu concentración puede mejorar aún más.',
  },
  low: {
    title: '🌱 Enfoque en Desarrollo',
    minScore: 0,
    description: 'Tu concentración puede fortalecerse con práctica. Técnicas de mindfulness te ayudarán mucho.',
    traits: ['Multitarea', 'Dinámico', 'Flexible', 'Activo'],
    advice: 'Comienza con sesiones cortas de concentración y ve aumentando. Reduce distracciones digitales.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  let score = 0;
  Object.values(answers).forEach(answer => {
    if (answer === 'correct') score++;
  });
  if (score >= 12) return 'high';
  if (score >= 8) return 'medium';
  return 'low';
}
