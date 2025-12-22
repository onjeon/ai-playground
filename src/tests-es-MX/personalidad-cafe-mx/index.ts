// Personalidad del Café Mexicano
export const questions = [
  {
    id: 1,
    text: '¿Cuántas tazas de café tomas al día?',
    options: [
      { text: 'Más de 4, vivo de café', type: 'A' },
      { text: '2-3 tazas, lo normal', type: 'B' },
      { text: '1 taza para despertar', type: 'C' },
      { text: 'No tomo café o muy rara vez', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo prefieres tu café?',
    options: [
      { text: 'Negro, sin nada, como debe ser', type: 'A' },
      { text: 'Con leche y un poco de azúcar', type: 'B' },
      { text: 'De olla con piloncillo', type: 'C' },
      { text: 'Tipo Starbucks con todo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué café mexicano conoces?',
    options: [
      { text: 'Café de Chiapas, Oaxaca, Veracruz', type: 'A' },
      { text: 'Sé que hay buenos cafés mexicanos', type: 'B' },
      { text: 'He escuchado pero no distingo', type: 'C' },
      { text: 'No tengo idea de cafés', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes si no tomas café en la mañana?',
    options: [
      { text: 'No funciono, me da dolor de cabeza', type: 'A' },
      { text: 'Me cuesta pero aguanto', type: 'B' },
      { text: 'Normal, no dependo del café', type: 'C' },
      { text: 'Ni lo noto', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Dónde compras tu café?',
    options: [
      { text: 'En tostadores locales o de especialidad', type: 'A' },
      { text: 'En el súper, marcas normales', type: 'B' },
      { text: 'Nescafé instantáneo y ya', type: 'C' },
      { text: 'No compro, lo tomo donde haya', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tienes cafetera en casa?',
    options: [
      { text: 'Sí, y es de las buenas', type: 'A' },
      { text: 'Una cafetera normal', type: 'B' },
      { text: 'Solo una olla para hervir', type: 'C' },
      { text: 'No, solo instantáneo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuál es tu cafetería favorita?',
    options: [
      { text: 'Cafeterías de especialidad locales', type: 'A' },
      { text: 'Starbucks o cadenas similares', type: 'B' },
      { text: 'Los típicos Vips o Sanborns', type: 'C' },
      { text: 'No tengo, el de OXXO está bien', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Tomas café después de las 6pm?',
    options: [
      { text: 'Sí, no me afecta para dormir', type: 'A' },
      { text: 'A veces, si necesito', type: 'B' },
      { text: 'Rara vez, me desvela', type: 'C' },
      { text: 'Nunca, no podría dormir', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué acompañas con tu café?',
    options: [
      { text: 'Pan dulce, el combo perfecto', type: 'A' },
      { text: 'Algo de desayunar', type: 'B' },
      { text: 'Nada, solo el café', type: 'C' },
      { text: 'No me fijo en eso', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu relación con el café?',
    options: [
      { text: 'Es una adicción que acepto feliz', type: 'A' },
      { text: 'Es parte de mi rutina diaria', type: 'B' },
      { text: 'Lo tomo por gusto, no por necesidad', type: 'C' },
      { text: 'Podría vivir sin él', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '☕ El Cafeinómano Experto',
    description: 'El café corre por tus venas. Conoces de orígenes, tuestes y preparaciones. No funcionas sin tu dosis y probablemente tienes equipo profesional en casa.',
    traits: ['Conocedor', 'Dependiente', 'Apasionado', 'Exigente'],
    advice: 'Tu amor por el café es admirable, pero cuida la cantidad. La moderación también aplica aquí.',
  },
  B: {
    title: '🫖 El Cafetero Cotidiano',
    description: 'El café es parte de tu vida sin ser obsesión. Disfrutas una buena taza, tienes tus preferencias pero eres flexible. Tu relación con el café es saludable.',
    traits: ['Equilibrado', 'Rutinario', 'Práctico', 'Flexible'],
    advice: 'Tu relación moderada con el café es perfecta. Sigue disfrutándolo sin depender.',
  },
  C: {
    title: '🌅 El Cafetero Casual',
    description: 'El café está bien pero no es esencial. Lo tomas para despertar pero puedes pasar sin él. No eres exigente ni dependiente.',
    traits: ['Independiente', 'Casual', 'Flexible', 'Libre'],
    advice: 'Tu independencia del café es envidiable. Disfrútalo cuando quieras sin presión.',
  },
  D: {
    title: '🍵 El No-Cafetero',
    description: 'El café no es lo tuyo. Prefieres té, agua o simplemente no necesitas estimulantes para funcionar. Eres raro en México pero auténtico.',
    traits: ['Diferente', 'Saludable', 'Alternativo', 'Natural'],
    advice: 'No necesitar café es una ventaja. Tienes más opciones y menos dependencias.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
