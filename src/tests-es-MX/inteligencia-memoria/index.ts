// Test de Inteligencia de Memoria
export const questions = [
  {
    id: 1,
    text: 'Memoriza esta secuencia: 7-3-9-1-5. ¿Cuál era el tercer número?',
    options: [
      { text: '3', type: 'wrong' },
      { text: '9', type: 'correct' },
      { text: '1', type: 'wrong' },
      { text: '7', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Las palabras eran: CASA, ÁRBOL, LUNA, PERRO, MAR. ¿Cuál era la cuarta palabra?',
    options: [
      { text: 'LUNA', type: 'wrong' },
      { text: 'ÁRBOL', type: 'wrong' },
      { text: 'PERRO', type: 'correct' },
      { text: 'MAR', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'La secuencia de colores era: ROJO, AZUL, VERDE, AMARILLO, MORADO. ¿Cuál venía después de VERDE?',
    options: [
      { text: 'AZUL', type: 'wrong' },
      { text: 'MORADO', type: 'wrong' },
      { text: 'AMARILLO', type: 'correct' },
      { text: 'ROJO', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'Los números eran: 15, 28, 42, 63, 81. ¿Cuál era el número más grande?',
    options: [
      { text: '63', type: 'wrong' },
      { text: '81', type: 'correct' },
      { text: '42', type: 'wrong' },
      { text: '28', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: 'El nombre era MARÍA GUADALUPE HERNÁNDEZ LÓPEZ. ¿Cuál era su segundo apellido?',
    options: [
      { text: 'GUADALUPE', type: 'wrong' },
      { text: 'HERNÁNDEZ', type: 'wrong' },
      { text: 'LÓPEZ', type: 'correct' },
      { text: 'MARÍA', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'La dirección era: Calle Reforma 245, Colonia Centro, CDMX. ¿Cuál era el número?',
    options: [
      { text: '254', type: 'wrong' },
      { text: '245', type: 'correct' },
      { text: '425', type: 'wrong' },
      { text: '524', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: 'Los ingredientes eran: TOMATE, CEBOLLA, CHILE, CILANTRO, LIMÓN. ¿Cuál era el segundo?',
    options: [
      { text: 'TOMATE', type: 'wrong' },
      { text: 'CHILE', type: 'wrong' },
      { text: 'CEBOLLA', type: 'correct' },
      { text: 'LIMÓN', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'La fecha era: 15 de septiembre de 1810. ¿Cuál era el día?',
    options: [
      { text: '16', type: 'wrong' },
      { text: '15', type: 'correct' },
      { text: '14', type: 'wrong' },
      { text: '17', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: 'El teléfono era: 55-3847-2956. ¿Cuáles eran los últimos 4 dígitos?',
    options: [
      { text: '3847', type: 'wrong' },
      { text: '2956', type: 'correct' },
      { text: '5538', type: 'wrong' },
      { text: '4729', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Los estados eran: JALISCO, NUEVO LEÓN, OAXACA, CHIAPAS, YUCATÁN. ¿Cuál era el primero?',
    options: [
      { text: 'NUEVO LEÓN', type: 'wrong' },
      { text: 'OAXACA', type: 'wrong' },
      { text: 'JALISCO', type: 'correct' },
      { text: 'YUCATÁN', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'La contraseña era: Sol@Luna2024. ¿Qué símbolo estaba en medio?',
    options: [
      { text: '#', type: 'wrong' },
      { text: '*', type: 'wrong' },
      { text: '@', type: 'correct' },
      { text: '&', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'Los precios eran: $45, $120, $89, $230, $67. ¿Cuál era el precio del tercer producto?',
    options: [
      { text: '$120', type: 'wrong' },
      { text: '$89', type: 'correct' },
      { text: '$230', type: 'wrong' },
      { text: '$67', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: 'Las ciudades eran: MONTERREY, GUADALAJARA, PUEBLA, TIJUANA, MÉRIDA. ¿Cuál era la última?',
    options: [
      { text: 'TIJUANA', type: 'wrong' },
      { text: 'PUEBLA', type: 'wrong' },
      { text: 'MÉRIDA', type: 'correct' },
      { text: 'MONTERREY', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'El código postal era: 06600. ¿Cuántos ceros tenía?',
    options: [
      { text: '1', type: 'wrong' },
      { text: '2', type: 'wrong' },
      { text: '3', type: 'correct' },
      { text: '4', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: 'Los animales eran: ÁGUILA, SERPIENTE, NOPAL, JAGUAR, QUETZAL. Espera... ¿cuál NO era un animal?',
    options: [
      { text: 'ÁGUILA', type: 'wrong' },
      { text: 'NOPAL', type: 'correct' },
      { text: 'JAGUAR', type: 'wrong' },
      { text: 'QUETZAL', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🎯 Memoria Prodigiosa',
    minScore: 12,
    description: '¡Increíble! Tu memoria es excepcional. Retienes información con facilidad y recuerdas detalles que otros olvidan.',
    traits: ['Retentivo', 'Detallista', 'Atento', 'Preciso'],
    advice: 'Tu memoria es un superpoder. Úsala para aprender idiomas, memorizar datos importantes o estudiar.',
  },
  medium: {
    title: '💾 Memoria Sólida',
    minScore: 8,
    description: '¡Muy bien! Tienes buena capacidad de retención. Puedes recordar la mayoría de información importante.',
    traits: ['Organizado', 'Concentrado', 'Metódico', 'Confiable'],
    advice: 'Usa técnicas mnemotécnicas y repasa información regularmente para fortalecer tu memoria.',
  },
  low: {
    title: '🌱 Memoria en Desarrollo',
    minScore: 0,
    description: 'Tu memoria puede mejorar con práctica. Existen muchas técnicas para fortalecer la retención.',
    traits: ['Creativo', 'Flexible', 'Presente', 'Intuitivo'],
    advice: 'Practica juegos de memoria, duerme bien y reduce el estrés. La memoria mejora con ejercicio mental.',
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
