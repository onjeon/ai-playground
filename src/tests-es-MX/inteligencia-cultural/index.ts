// Test de Cultura General Mexicana
export const questions = [
  {
    id: 1,
    text: '¿En qué año comenzó la Independencia de México?',
    options: [
      { text: '1821', type: 'wrong' },
      { text: '1810', type: 'correct' },
      { text: '1910', type: 'wrong' },
      { text: '1800', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: '¿Cuál es la capital del estado de Nuevo León?',
    options: [
      { text: 'Saltillo', type: 'wrong' },
      { text: 'Monterrey', type: 'correct' },
      { text: 'Guadalajara', type: 'wrong' },
      { text: 'Torreón', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: '¿Quién pintó el mural "El hombre controlador del universo"?',
    options: [
      { text: 'Frida Kahlo', type: 'wrong' },
      { text: 'Diego Rivera', type: 'correct' },
      { text: 'David Alfaro Siqueiros', type: 'wrong' },
      { text: 'José Clemente Orozco', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: '¿Cuál es el volcán más alto de México?',
    options: [
      { text: 'Popocatépetl', type: 'wrong' },
      { text: 'Pico de Orizaba', type: 'correct' },
      { text: 'Iztaccíhuatl', type: 'wrong' },
      { text: 'Nevado de Toluca', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: '¿Qué civilización construyó Chichén Itzá?',
    options: [
      { text: 'Azteca', type: 'wrong' },
      { text: 'Maya', type: 'correct' },
      { text: 'Olmeca', type: 'wrong' },
      { text: 'Tolteca', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: '¿Cuántos estados tiene México?',
    options: [
      { text: '31', type: 'wrong' },
      { text: '32', type: 'correct' },
      { text: '30', type: 'wrong' },
      { text: '33', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: '¿Quién escribió "Pedro Páramo"?',
    options: [
      { text: 'Octavio Paz', type: 'wrong' },
      { text: 'Juan Rulfo', type: 'correct' },
      { text: 'Carlos Fuentes', type: 'wrong' },
      { text: 'Elena Poniatowska', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: '¿En qué estado se encuentra la zona arqueológica de Teotihuacán?',
    options: [
      { text: 'CDMX', type: 'wrong' },
      { text: 'Estado de México', type: 'correct' },
      { text: 'Puebla', type: 'wrong' },
      { text: 'Hidalgo', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: '¿Cuál es el río más largo de México?',
    options: [
      { text: 'Río Grande', type: 'wrong' },
      { text: 'Río Bravo', type: 'correct' },
      { text: 'Río Lerma', type: 'wrong' },
      { text: 'Río Usumacinta', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: '¿Qué presidente mexicano gobernó por más de 30 años?',
    options: [
      { text: 'Benito Juárez', type: 'wrong' },
      { text: 'Porfirio Díaz', type: 'correct' },
      { text: 'Lázaro Cárdenas', type: 'wrong' },
      { text: 'Antonio López de Santa Anna', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: '¿Cuál es el ingrediente principal del mole poblano además del chile?',
    options: [
      { text: 'Tomate', type: 'wrong' },
      { text: 'Chocolate', type: 'correct' },
      { text: 'Pimienta', type: 'wrong' },
      { text: 'Canela', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: '¿En qué año fue la Revolución Mexicana?',
    options: [
      { text: '1810', type: 'wrong' },
      { text: '1910', type: 'correct' },
      { text: '1920', type: 'wrong' },
      { text: '1900', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: '¿Cuál fue el nombre azteca de la Ciudad de México?',
    options: [
      { text: 'Teotihuacán', type: 'wrong' },
      { text: 'Tenochtitlán', type: 'correct' },
      { text: 'Tlatelolco', type: 'wrong' },
      { text: 'Texcoco', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: '¿Qué mexicano ganó el Premio Nobel de Literatura en 1990?',
    options: [
      { text: 'Carlos Fuentes', type: 'wrong' },
      { text: 'Octavio Paz', type: 'correct' },
      { text: 'Juan Rulfo', type: 'wrong' },
      { text: 'Alfonso Reyes', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: '¿Cuál es el estado más grande de México por superficie?',
    options: [
      { text: 'Sonora', type: 'wrong' },
      { text: 'Chihuahua', type: 'correct' },
      { text: 'Coahuila', type: 'wrong' },
      { text: 'Durango', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🇲🇽 Experto Cultural',
    minScore: 12,
    description: '¡Impresionante! Conoces México a profundidad. Tu cultura general sobre historia, geografía y arte mexicano es excepcional.',
    traits: ['Culto', 'Patriota', 'Conocedor', 'Informado'],
    advice: 'Tu conocimiento cultural es admirable. Compártelo con otros y sigue explorando las riquezas de México.',
  },
  medium: {
    title: '📚 Buen Conocedor',
    minScore: 8,
    description: '¡Muy bien! Tienes buenos conocimientos sobre México. Conoces los datos importantes de nuestra cultura e historia.',
    traits: ['Interesado', 'Curioso', 'Informado', 'Atento'],
    advice: 'Sigue leyendo sobre historia y cultura mexicana. Visita museos y zonas arqueológicas para aprender más.',
  },
  low: {
    title: '🌱 Explorador Cultural',
    minScore: 0,
    description: 'Hay mucho por descubrir sobre México. ¡Tienes todo un mundo de cultura e historia por explorar!',
    traits: ['Curioso', 'Abierto', 'En aprendizaje', 'Potencial'],
    advice: 'Lee sobre historia de México, visita museos y habla con tus abuelos. La cultura mexicana es fascinante.',
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
