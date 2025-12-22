// Personalidad con tus Primos
export const questions = [
  {
    id: 1,
    text: '¿Qué tan cercano/a eres a tus primos?',
    options: [
      { text: 'Son como mis hermanos', type: 'A' },
      { text: 'Cercano/a con algunos', type: 'B' },
      { text: 'Solo los veo en reuniones', type: 'C' },
      { text: 'Casi no tengo relación', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Jugabas mucho con tus primos de niño/a?',
    options: [
      { text: 'Sí, eran mis mejores compañeros', type: 'A' },
      { text: 'Sí, cuando nos veíamos', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No mucho o no tengo primos de mi edad', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tienes un primo/a favorito/a?',
    options: [
      { text: 'Sí, es mi cómplice de toda la vida', type: 'A' },
      { text: 'Sí, hay uno/a con quien me llevo mejor', type: 'B' },
      { text: 'No realmente', type: 'C' },
      { text: 'No tengo primos cercanos', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Le cuentas secretos a tus primos?',
    options: [
      { text: 'Sí, son mis confidentes', type: 'A' },
      { text: 'A algunos de confianza sí', type: 'B' },
      { text: 'Pocos secretos', type: 'C' },
      { text: 'No, no tengo esa confianza', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo son las reuniones con tus primos?',
    options: [
      { text: 'Las mejores, puro desmadre y risas', type: 'A' },
      { text: 'Divertidas, la pasamos bien', type: 'B' },
      { text: 'Normales, convivimos', type: 'C' },
      { text: 'Incómodas o no nos vemos', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Hay rivalidad o comparaciones entre primos?',
    options: [
      { text: 'No, nos apoyamos mutuamente', type: 'A' },
      { text: 'Un poco, lo normal', type: 'B' },
      { text: 'Sí, siempre nos comparan', type: 'C' },
      { text: 'Mucha, hay competencia fuerte', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Sales con tus primos fuera de reuniones familiares?',
    options: [
      { text: 'Sí, somos amigos además de primos', type: 'A' },
      { text: 'A veces, cuando se puede', type: 'B' },
      { text: 'Rara vez', type: 'C' },
      { text: 'Nunca', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Tus primos conocen tu vida personal?',
    options: [
      { text: 'Sí, saben todo de mí', type: 'A' },
      { text: 'Lo importante sí', type: 'B' },
      { text: 'Poco, lo básico', type: 'C' },
      { text: 'No, no compartimos eso', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Han pasado por conflictos tú y tus primos?',
    options: [
      { text: 'Casi nunca, nos llevamos muy bien', type: 'A' },
      { text: 'Alguna vez pero lo resolvimos', type: 'B' },
      { text: 'Sí, hay tensiones', type: 'C' },
      { text: 'Sí, hay problemas serios', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Extrañas a tus primos cuando pasa tiempo sin verlos?',
    options: [
      { text: 'Mucho, me hacen falta', type: 'A' },
      { text: 'Sí, los extraño', type: 'B' },
      { text: 'Un poco', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👯 Los Primos Hermanos',
    description: 'Tus primos son como tus hermanos. Crecieron juntos, comparten secretos y las reuniones familiares son su momento favorito. Esa conexión es para toda la vida.',
    traits: ['Unido', 'Cómplice', 'Familiar', 'Leal'],
    advice: 'Esa relación con tus primos es única. Sigan cultivándola aunque la vida los separe.',
  },
  B: {
    title: '💝 Los Primos Cercanos',
    description: 'Tienes buena relación con tus primos, especialmente con algunos. Hay cariño, buenos recuerdos y disfrutan el tiempo juntos cuando se ven.',
    traits: ['Cariñoso', 'Selectivo', 'Familiar', 'Amistoso'],
    advice: 'Mantén esos lazos especiales. Los primos cercanos son amigos de por vida.',
  },
  C: {
    title: '🌿 Los Primos Lejanos',
    description: 'Tu relación con tus primos es más distante o formal. Se ven en reuniones familiares pero no hay una conexión profunda del día a día.',
    traits: ['Independiente', 'Formal', 'Distante', 'Autónomo'],
    advice: 'No todas las relaciones con primos son cercanas y está bien. Cada familia es diferente.',
  },
  D: {
    title: '🕊️ El Primo Solitario',
    description: 'No tienes mucha relación con tus primos o hay conflictos. Las circunstancias familiares son diversas y no siempre hay cercanía.',
    traits: ['Solitario', 'Independiente', 'Diferente', 'Autónomo'],
    advice: 'La familia elegida también cuenta. Construye las relaciones que te hagan feliz.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
