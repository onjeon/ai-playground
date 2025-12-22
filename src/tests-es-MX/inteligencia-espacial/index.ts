// Test de Inteligencia Espacial
export const questions = [
  {
    id: 1,
    text: 'Si giras un cubo 90° a la derecha y luego 90° hacia adelante, ¿qué cara quedará arriba si inicialmente la cara 1 estaba arriba y la 2 al frente?',
    options: [
      { text: 'La cara 2', type: 'wrong' },
      { text: 'La cara 3', type: 'wrong' },
      { text: 'La cara 4', type: 'correct' },
      { text: 'La cara 1', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: '¿Cuántos cubos pequeños se necesitan para formar un cubo de 3x3x3?',
    options: [
      { text: '9', type: 'wrong' },
      { text: '18', type: 'wrong' },
      { text: '27', type: 'correct' },
      { text: '36', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'Si una figura se refleja en un espejo vertical, ¿qué cambia?',
    options: [
      { text: 'Arriba y abajo se invierten', type: 'wrong' },
      { text: 'Izquierda y derecha se invierten', type: 'correct' },
      { text: 'El tamaño cambia', type: 'wrong' },
      { text: 'Los colores cambian', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: '¿Cuántas caras tiene un dodecaedro?',
    options: [
      { text: '10', type: 'wrong' },
      { text: '12', type: 'correct' },
      { text: '14', type: 'wrong' },
      { text: '20', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: 'Si caminas 3 cuadras al norte, 2 al este, 3 al sur y 4 al oeste, ¿dónde estás respecto al inicio?',
    options: [
      { text: '2 cuadras al este', type: 'wrong' },
      { text: '2 cuadras al oeste', type: 'correct' },
      { text: 'En el punto de inicio', type: 'wrong' },
      { text: '1 cuadra al norte', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Un papel cuadrado se dobla por la mitad dos veces y se corta una esquina. Al desdoblar, ¿cuántos agujeros hay?',
    options: [
      { text: '1', type: 'wrong' },
      { text: '2', type: 'wrong' },
      { text: '4', type: 'correct' },
      { text: '8', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: '¿Cuál es la vista superior de una pirámide de base cuadrada?',
    options: [
      { text: 'Un triángulo', type: 'wrong' },
      { text: 'Un cuadrado con diagonales', type: 'correct' },
      { text: 'Un círculo', type: 'wrong' },
      { text: 'Solo un cuadrado', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'Si un cubo tiene aristas de 4 cm, ¿cuál es su volumen?',
    options: [
      { text: '16 cm³', type: 'wrong' },
      { text: '48 cm³', type: 'wrong' },
      { text: '64 cm³', type: 'correct' },
      { text: '96 cm³', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: '¿Cuántos vértices tiene un prisma triangular?',
    options: [
      { text: '4', type: 'wrong' },
      { text: '5', type: 'wrong' },
      { text: '6', type: 'correct' },
      { text: '8', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Si giras la letra "N" 180°, ¿qué obtienes?',
    options: [
      { text: 'Z', type: 'wrong' },
      { text: 'N', type: 'correct' },
      { text: 'И', type: 'wrong' },
      { text: 'M', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: '¿Cuántos triángulos ves en una estrella de David?',
    options: [
      { text: '2', type: 'wrong' },
      { text: '6', type: 'wrong' },
      { text: '8', type: 'correct' },
      { text: '12', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'Una escalera está apoyada en una pared. Si la base se aleja, ¿qué pasa con la altura que alcanza?',
    options: [
      { text: 'Aumenta', type: 'wrong' },
      { text: 'Disminuye', type: 'correct' },
      { text: 'Permanece igual', type: 'wrong' },
      { text: 'Se duplica', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: '¿Cuál figura 3D se forma al girar un rectángulo sobre uno de sus lados?',
    options: [
      { text: 'Esfera', type: 'wrong' },
      { text: 'Cono', type: 'wrong' },
      { text: 'Cilindro', type: 'correct' },
      { text: 'Cubo', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: '¿Cuántas aristas tiene un cubo?',
    options: [
      { text: '6', type: 'wrong' },
      { text: '8', type: 'wrong' },
      { text: '12', type: 'correct' },
      { text: '14', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: 'Si un espejo está en el piso, ¿cómo se ve tu reflejo?',
    options: [
      { text: 'Invertido izquierda-derecha', type: 'wrong' },
      { text: 'Invertido arriba-abajo', type: 'correct' },
      { text: 'Igual que tú', type: 'wrong' },
      { text: 'Más pequeño', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🔮 Visionario Espacial',
    minScore: 12,
    description: '¡Extraordinario! Tu mente puede visualizar y manipular objetos en 3D con facilidad. Tienes una capacidad espacial excepcional.',
    traits: ['Visual', 'Geométrico', 'Ingenioso', 'Tridimensional'],
    advice: 'Considera carreras en arquitectura, diseño, ingeniería o artes visuales donde tu talento brille.',
  },
  medium: {
    title: '📐 Navegante Capaz',
    minScore: 8,
    description: '¡Bien hecho! Tienes buena capacidad para visualizar formas y espacios. Puedes resolver problemas espaciales con algo de esfuerzo.',
    traits: ['Orientado', 'Práctico', 'Observador', 'Dimensional'],
    advice: 'Practica con rompecabezas 3D, origami o videojuegos de construcción para mejorar tu visión espacial.',
  },
  low: {
    title: '🌱 Explorador Espacial',
    minScore: 0,
    description: 'La visualización espacial requiere práctica. Con ejercicios específicos puedes mejorar esta habilidad.',
    traits: ['Verbal', 'Secuencial', 'Abstracto', 'Analítico'],
    advice: 'Juega con cubos Rubik, arma modelos 3D y practica dibujo técnico. La habilidad espacial se desarrolla.',
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
