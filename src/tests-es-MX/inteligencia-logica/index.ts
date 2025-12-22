// Test de Inteligencia Lógica
export const questions = [
  {
    id: 1,
    text: 'Si todos los perros son animales, y algunos animales son mascotas, ¿cuál afirmación es correcta?',
    options: [
      { text: 'Todos los perros son mascotas', type: 'wrong' },
      { text: 'Algunos perros pueden ser mascotas', type: 'correct' },
      { text: 'Ningún perro es mascota', type: 'wrong' },
      { text: 'Todas las mascotas son perros', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'María es más alta que Ana. Ana es más alta que Sofía. ¿Quién es la más baja?',
    options: [
      { text: 'María', type: 'wrong' },
      { text: 'Ana', type: 'wrong' },
      { text: 'Sofía', type: 'correct' },
      { text: 'No se puede saber', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'Si llueve, el piso se moja. El piso está mojado. ¿Qué podemos concluir?',
    options: [
      { text: 'Seguro llovió', type: 'wrong' },
      { text: 'Probablemente llovió, pero pudo ser otra causa', type: 'correct' },
      { text: 'No llovió', type: 'wrong' },
      { text: 'El piso siempre está mojado', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'Todos los médicos son profesionistas. Algunos profesionistas son bien pagados. ¿Qué es verdad?',
    options: [
      { text: 'Todos los médicos son bien pagados', type: 'wrong' },
      { text: 'Ningún médico es bien pagado', type: 'wrong' },
      { text: 'Algunos médicos podrían ser bien pagados', type: 'correct' },
      { text: 'Solo los médicos son bien pagados', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: 'Si A > B, B > C, y C > D, ¿cuál de las siguientes es FALSA?',
    options: [
      { text: 'A > D', type: 'wrong' },
      { text: 'B > D', type: 'wrong' },
      { text: 'A > C', type: 'wrong' },
      { text: 'D > A', type: 'correct' },
    ],
  },
  {
    id: 6,
    text: 'Pedro dice: "Si paso el examen, iré a la fiesta". Pedro fue a la fiesta. ¿Qué sabemos?',
    options: [
      { text: 'Pedro pasó el examen', type: 'wrong' },
      { text: 'Pedro no pasó el examen', type: 'wrong' },
      { text: 'No podemos estar seguros si pasó el examen', type: 'correct' },
      { text: 'Pedro mintió', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: 'Ningún gato es verde. Algunos animales son verdes. ¿Qué conclusión es válida?',
    options: [
      { text: 'Algunos animales no son gatos', type: 'correct' },
      { text: 'Todos los animales verdes son gatos', type: 'wrong' },
      { text: 'Los gatos no son animales', type: 'wrong' },
      { text: 'Todos los animales son gatos', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'En una fila, Juan está en la posición 5 desde el frente y 8 desde atrás. ¿Cuántas personas hay?',
    options: [
      { text: '12 personas', type: 'correct' },
      { text: '13 personas', type: 'wrong' },
      { text: '11 personas', type: 'wrong' },
      { text: '14 personas', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: 'Si todos los políticos mienten, y Juan es honesto, entonces:',
    options: [
      { text: 'Juan es político', type: 'wrong' },
      { text: 'Juan no es político', type: 'correct' },
      { text: 'Juan a veces miente', type: 'wrong' },
      { text: 'No se puede determinar', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Rosa es hermana de Luis. Luis es padre de Carlos. ¿Qué es Rosa de Carlos?',
    options: [
      { text: 'Madre', type: 'wrong' },
      { text: 'Abuela', type: 'wrong' },
      { text: 'Tía', type: 'correct' },
      { text: 'Prima', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'Si "no todos los estudiantes aprobaron" es verdadero, ¿cuál es falsa?',
    options: [
      { text: 'Algunos estudiantes reprobaron', type: 'wrong' },
      { text: 'Al menos un estudiante no aprobó', type: 'wrong' },
      { text: 'Todos los estudiantes aprobaron', type: 'correct' },
      { text: 'Es posible que algunos aprobaran', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'Tres amigos: Ale, Beto y Carlos. Uno miente siempre, otro dice verdades, otro alterna. Ale dice "Beto miente". Beto dice "Carlos alterna". ¿Quién dice siempre la verdad si Carlos dice "Ale miente siempre"?',
    options: [
      { text: 'Ale', type: 'wrong' },
      { text: 'Beto', type: 'correct' },
      { text: 'Carlos', type: 'wrong' },
      { text: 'Ninguno', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: 'Un reloj marca las 3:15. ¿Cuál es el ángulo entre la manecilla de la hora y la del minuto?',
    options: [
      { text: '0 grados', type: 'wrong' },
      { text: '7.5 grados', type: 'correct' },
      { text: '15 grados', type: 'wrong' },
      { text: '90 grados', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'Si la negación de "Todos aman a alguien" es verdadera, entonces:',
    options: [
      { text: 'Nadie ama a nadie', type: 'wrong' },
      { text: 'Al menos una persona no ama a nadie', type: 'correct' },
      { text: 'Todos odian a todos', type: 'wrong' },
      { text: 'Alguien ama a todos', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: 'En una isla hay dos tribus: una siempre dice la verdad, otra siempre miente. Un nativo dice: "Soy de la tribu que miente". ¿Qué concluyes?',
    options: [
      { text: 'Es de la tribu veraz', type: 'wrong' },
      { text: 'Es de la tribu mentirosa', type: 'wrong' },
      { text: 'Es imposible que diga eso', type: 'correct' },
      { text: 'Puede ser de cualquiera', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🧠 Genio Lógico',
    minScore: 12,
    description: '¡Increíble! Tu capacidad lógica es excepcional. Resuelves problemas complejos con facilidad y tu razonamiento deductivo es impecable.',
    traits: ['Analítico', 'Racional', 'Perspicaz', 'Metódico'],
    advice: 'Tu mente lógica es un don. Considera carreras en matemáticas, filosofía, programación o ciencias.',
  },
  medium: {
    title: '💡 Pensador Brillante',
    minScore: 8,
    description: '¡Muy bien! Tienes buena capacidad de razonamiento lógico. Puedes resolver la mayoría de problemas con algo de reflexión.',
    traits: ['Reflexivo', 'Curioso', 'Ordenado', 'Crítico'],
    advice: 'Practica más acertijos lógicos y juegos de estrategia para seguir desarrollando tu potencial.',
  },
  low: {
    title: '🌱 Mente en Desarrollo',
    minScore: 0,
    description: 'Tienes potencial para mejorar tu razonamiento lógico. Con práctica y dedicación puedes fortalecer estas habilidades.',
    traits: ['Intuitivo', 'Creativo', 'Emocional', 'Flexible'],
    advice: 'Comienza con sudokus simples y acertijos básicos. La lógica se aprende con práctica constante.',
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
