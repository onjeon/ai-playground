// ¿Qué Personaje de Telenovela Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas ante una traición?',
    options: [
      { text: '¡Me vengo! Nadie me ve la cara', type: 'A' },
      { text: 'Lloro pero perdono', type: 'B' },
      { text: 'Investigo antes de actuar', type: 'C' },
      { text: 'Me hago la víctima', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo es tu vida amorosa?',
    options: [
      { text: 'Intensa y llena de drama', type: 'A' },
      { text: 'Romántica y soñadora', type: 'B' },
      { text: 'Complicada pero apasionada', type: 'C' },
      { text: 'Siempre buscando a mi amor', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cuál es tu mayor secreto?',
    options: [
      { text: 'Uno que podría destruir familias', type: 'A' },
      { text: 'Mi origen humilde', type: 'B' },
      { text: 'Algo de mi pasado oscuro', type: 'C' },
      { text: 'Un amor prohibido', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te vistes normalmente?',
    options: [
      { text: 'Siempre de gala, muy elegante', type: 'A' },
      { text: 'Sencilla pero bonita', type: 'B' },
      { text: 'Misteriosa y atractiva', type: 'C' },
      { text: 'Según mi estado de ánimo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué harías por amor?',
    options: [
      { text: 'Todo, incluso cosas malas', type: 'A' },
      { text: 'Sacrificar mi felicidad', type: 'B' },
      { text: 'Luchar contra todo', type: 'C' },
      { text: 'Esperar pacientemente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te llevas con tu familia?',
    options: [
      { text: 'Hay muchos secretos y drama', type: 'A' },
      { text: 'Los adoro aunque sean humildes', type: 'B' },
      { text: 'Complicado, hay rencores', type: 'C' },
      { text: 'Busco su aprobación', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cuál es tu frase favorita?',
    options: [
      { text: '¡Esto no se va a quedar así!', type: 'A' },
      { text: 'El amor todo lo puede', type: 'B' },
      { text: 'La verdad siempre sale a la luz', type: 'C' },
      { text: '¿Por qué a mí?', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo manejas los chismes?',
    options: [
      { text: 'Los uso a mi favor', type: 'A' },
      { text: 'Me hacen llorar', type: 'B' },
      { text: 'Los investigo', type: 'C' },
      { text: 'Me afectan mucho', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué papel tendrías en la hacienda?',
    options: [
      { text: 'La dueña o el dueño', type: 'A' },
      { text: 'La empleada o empleado noble', type: 'B' },
      { text: 'El administrador misterioso', type: 'C' },
      { text: 'La hija o hijo perdido', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo termina tu historia?',
    options: [
      { text: 'Triunfando sobre mis enemigos', type: 'A' },
      { text: 'Casándome con mi amor verdadero', type: 'B' },
      { text: 'Revelando la verdad', type: 'C' },
      { text: 'Encontrando mi lugar', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👑 La Villana / El Villano',
    description: '¡Eres el personaje que todos aman odiar! Ambicioso, astuto y sin miedo a hacer lo necesario para conseguir lo que quieres. Tu presencia domina cada escena.',
    traits: ['Ambicioso', 'Astuto', 'Dominante', 'Intenso'],
    advice: 'Tu determinación es admirable, pero recuerda que la maldad tiene su precio. A veces ser bueno también paga.',
  },
  B: {
    title: '💝 La Protagonista / El Protagonista',
    description: 'El corazón de la historia. Noble, soñador y siempre buscando el amor verdadero. Tu bondad eventualmente triunfa sobre la maldad. Todos quieren que seas feliz.',
    traits: ['Noble', 'Soñador', 'Bondadoso', 'Romántico'],
    advice: 'Tu bondad es tu mayor fuerza. Solo cuídate de los que quieren aprovecharse de ella.',
  },
  C: {
    title: '🕵️ El Misterioso / La Misteriosa',
    description: 'El personaje que guarda todos los secretos. Tienes un pasado oscuro pero un corazón dividido. Tu historia es la más compleja de todas.',
    traits: ['Misterioso', 'Complejo', 'Profundo', 'Dividido'],
    advice: 'Tu misterio es fascinante, pero a veces hay que revelar la verdad para encontrar la paz.',
  },
  D: {
    title: '🥺 La Sufrida / El Sufrido',
    description: 'El personaje que más llora pero que al final encuentra la redención. Tu sufrimiento te hace fuerte y eventualmente encuentras tu lugar en el mundo.',
    traits: ['Sensible', 'Resiliente', 'Buscador', 'Emotivo'],
    advice: 'Tu sensibilidad es tu don. Pero no dejes que el sufrimiento te defina, tú mereces ser feliz.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
