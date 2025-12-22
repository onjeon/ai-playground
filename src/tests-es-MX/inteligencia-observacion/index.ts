// Test de Capacidad de Observación
export const questions = [
  {
    id: 1,
    text: 'En la palabra "OBSERVACIÓN", ¿cuántas letras "O" hay?',
    options: [
      { text: '1', type: 'wrong' },
      { text: '2', type: 'correct' },
      { text: '3', type: 'wrong' },
      { text: '0', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Lee rápido: "En esta oración hay hay un error". ¿Cuál es el error?',
    options: [
      { text: 'Falta un punto', type: 'wrong' },
      { text: 'La palabra "hay" está repetida', type: 'correct' },
      { text: 'Falta una coma', type: 'wrong' },
      { text: 'No hay error', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'El semáforo tiene tres luces. De arriba a abajo el orden correcto es:',
    options: [
      { text: 'Verde, amarillo, rojo', type: 'wrong' },
      { text: 'Rojo, amarillo, verde', type: 'correct' },
      { text: 'Rojo, verde, amarillo', type: 'wrong' },
      { text: 'Amarillo, rojo, verde', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'En la bandera mexicana, ¿de qué lado está el color verde visto de frente?',
    options: [
      { text: 'A la derecha', type: 'wrong' },
      { text: 'A la izquierda', type: 'correct' },
      { text: 'En el centro', type: 'wrong' },
      { text: 'Arriba', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: '¿Cuántos lados tiene un hexágono?',
    options: [
      { text: '5', type: 'wrong' },
      { text: '6', type: 'correct' },
      { text: '7', type: 'wrong' },
      { text: '8', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'En un reloj analógico, cuando son las 6:00, ¿qué ángulo forman las manecillas?',
    options: [
      { text: '90 grados', type: 'wrong' },
      { text: '180 grados', type: 'correct' },
      { text: '120 grados', type: 'wrong' },
      { text: '0 grados', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: '¿Cuántas "E" hay en esta oración: "El elefante elegante pasea en el parque"?',
    options: [
      { text: '6', type: 'wrong' },
      { text: '7', type: 'correct' },
      { text: '8', type: 'wrong' },
      { text: '5', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'En el teclado QWERTY estándar, ¿qué letra está entre la "G" y la "J"?',
    options: [
      { text: 'F', type: 'wrong' },
      { text: 'H', type: 'correct' },
      { text: 'K', type: 'wrong' },
      { text: 'D', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: '¿De qué color es normalmente el botón de "encendido" en los dispositivos electrónicos?',
    options: [
      { text: 'Rojo', type: 'wrong' },
      { text: 'Verde', type: 'correct' },
      { text: 'Azul', type: 'wrong' },
      { text: 'Amarillo', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'En un dado estándar, ¿qué número está en la cara opuesta al 6?',
    options: [
      { text: '5', type: 'wrong' },
      { text: '1', type: 'correct' },
      { text: '2', type: 'wrong' },
      { text: '4', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: '¿Cuántas patas tiene una araña?',
    options: [
      { text: '6', type: 'wrong' },
      { text: '8', type: 'correct' },
      { text: '10', type: 'wrong' },
      { text: '4', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'En el logo de Facebook, ¿de qué color es la letra "f"?',
    options: [
      { text: 'Azul', type: 'wrong' },
      { text: 'Blanca', type: 'correct' },
      { text: 'Negra', type: 'wrong' },
      { text: 'Gris', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: '¿Cuántos anillos tiene el símbolo olímpico?',
    options: [
      { text: '4', type: 'wrong' },
      { text: '5', type: 'correct' },
      { text: '6', type: 'wrong' },
      { text: '3', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'En la baraja española, ¿cuántas cartas tiene cada palo (sin comodines)?',
    options: [
      { text: '10', type: 'wrong' },
      { text: '12', type: 'correct' },
      { text: '13', type: 'wrong' },
      { text: '14', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: '¿En qué mano usa normalmente el reloj la mayoría de la gente?',
    options: [
      { text: 'Derecha', type: 'wrong' },
      { text: 'Izquierda', type: 'correct' },
      { text: 'Cualquiera', type: 'wrong' },
      { text: 'No usan reloj', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🔍 Ojo de Águila',
    minScore: 12,
    description: '¡Increíble! Tu capacidad de observación es excepcional. Notas detalles que otros pasan por alto y tienes memoria visual notable.',
    traits: ['Detallista', 'Atento', 'Perceptivo', 'Minucioso'],
    advice: 'Tu agudeza visual es valiosa en diseño, investigación, seguridad o cualquier campo que requiera atención al detalle.',
  },
  medium: {
    title: '👀 Buen Observador',
    minScore: 8,
    description: '¡Muy bien! Tienes buena capacidad de observación. Notas la mayoría de detalles importantes en tu entorno.',
    traits: ['Atento', 'Cuidadoso', 'Observador', 'Consciente'],
    advice: 'Practica ejercicios de atención y memoria visual. Juegos de "encuentra las diferencias" te ayudarán.',
  },
  low: {
    title: '🌱 Observador en Desarrollo',
    minScore: 0,
    description: 'Tu capacidad de observación puede mejorar con práctica consciente. Hay un mundo de detalles por descubrir.',
    traits: ['Global', 'Rápido', 'Intuitivo', 'General'],
    advice: 'Practica la atención plena. Tómate tiempo para observar detalles en tu vida diaria.',
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
