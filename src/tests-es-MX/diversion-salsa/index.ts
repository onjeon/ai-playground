// ¿Qué Salsa Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo manejas el estrés?',
    options: [
      { text: 'Exploto y luego me calmo', type: 'A' },
      { text: 'Me aguanto y proceso todo', type: 'B' },
      { text: 'Busco apoyo en alguien', type: 'C' },
      { text: 'Me vale, no me estreso', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan directo eres al hablar?',
    options: [
      { text: 'Digo las cosas sin filtro, así soy', type: 'A' },
      { text: 'Soy directo pero con tacto', type: 'B' },
      { text: 'Suavizo todo para no herir', type: 'C' },
      { text: 'Prefiero no meterme en pedos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te describen tus amigos?',
    options: [
      { text: 'Intenso y apasionado', type: 'A' },
      { text: 'Equilibrado y tranquilo', type: 'B' },
      { text: 'Amable y suavecito', type: 'C' },
      { text: 'Relajado y sin complicaciones', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces cuando alguien te cae mal?',
    options: [
      { text: 'Se lo hago saber de una', type: 'A' },
      { text: 'Lo ignoro elegantemente', type: 'B' },
      { text: 'Trato de llevar la fiesta en paz', type: 'C' },
      { text: 'Me vale, ni le hago caso', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo es tu estilo de vida?',
    options: [
      { text: 'Extremo, vivo al límite', type: 'A' },
      { text: 'Balanceado, de todo un poco', type: 'B' },
      { text: 'Tranquilo y relajado', type: 'C' },
      { text: 'Minimalista, sin complicaciones', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tanto aguantas el picante?',
    options: [
      { text: 'Entre más picoso mejor', type: 'A' },
      { text: 'Picante pero controlado', type: 'B' },
      { text: 'Un poquito nada más', type: 'C' },
      { text: 'Cero picante, gracias', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo eres en las relaciones amorosas?',
    options: [
      { text: 'Intenso y apasionado', type: 'A' },
      { text: 'Estable y comprometido', type: 'B' },
      { text: 'Romántico y tierno', type: 'C' },
      { text: 'Independiente y libre', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué música escuchas cuando estás enojado?',
    options: [
      { text: 'Rock o metal bien pesado', type: 'A' },
      { text: 'Banda o norteñas con sentimiento', type: 'B' },
      { text: 'Algo tranquilo para calmarme', type: 'C' },
      { text: 'No escucho música, me relajo solo', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo reaccionas ante una injusticia?',
    options: [
      { text: 'Me prendo y reclamo de una vez', type: 'A' },
      { text: 'Busco la forma correcta de actuar', type: 'B' },
      { text: 'Me molesta pero no hago show', type: 'C' },
      { text: 'No es mi pedo, que cada quien', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué impresión das al conocerte?',
    options: [
      { text: 'Fuerte y con carácter', type: 'A' },
      { text: 'Confiable y serio', type: 'B' },
      { text: 'Agradable y amigable', type: 'C' },
      { text: 'Misterioso y reservado', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌶️ Salsa Habanero',
    description: '¡Eres puro fuego, güey! Intenso, apasionado y sin filtros. La gente sabe que contigo no hay medias tintas. Eres de los que dejan huella, para bien o para mal.',
    traits: ['Intenso', 'Apasionado', 'Directo', 'Valiente'],
    advice: 'Tu intensidad es tu fuerza, pero aprende a dosificarla. No todos aguantan tanto chile.',
  },
  B: {
    title: '🥑 Salsa Verde con Aguacate',
    description: 'Equilibrado y versátil. Tienes picante pero también suavidad. Eres de los que saben adaptarse a cualquier situación sin perder su esencia.',
    traits: ['Equilibrado', 'Versátil', 'Confiable', 'Adaptable'],
    advice: 'Tu balance es admirable. Sigue así pero no tengas miedo de mostrar más tu lado picoso.',
  },
  C: {
    title: '🍅 Salsa Roja Casera',
    description: 'Clásico y reconfortante. Eres como la salsa de la abuela, siempre bienvenido. Tu calidez hace que la gente se sienta cómoda contigo.',
    traits: ['Cálido', 'Tradicional', 'Reconfortante', 'Amable'],
    advice: 'Tu amabilidad es un don. No dejes que la gente abuse de tu buena voluntad.',
  },
  D: {
    title: '🧅 Salsa Pico de Gallo',
    description: 'Fresco y sin complicaciones. No te calientas la cabeza por nada. Prefieres la simplicidad y la paz. Eres como una brisa de aire fresco.',
    traits: ['Relajado', 'Simple', 'Independiente', 'Fresco'],
    advice: 'Tu paz es envidiable, pero a veces hay que tomar postura. No te hagas tan güey.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
