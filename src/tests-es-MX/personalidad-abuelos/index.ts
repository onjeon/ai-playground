// Personalidad con tus Abuelos
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido ves o hablas con tus abuelos?',
    options: [
      { text: 'Muy seguido, son parte de mi día a día', type: 'A' },
      { text: 'Cada semana o cada quince días', type: 'B' },
      { text: 'En reuniones familiares o fechas especiales', type: 'C' },
      { text: 'Muy poco o ya no están', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Tus abuelos te consienten?',
    options: [
      { text: 'Demasiado, soy su adoración', type: 'A' },
      { text: 'Sí, siempre me dan algo especial', type: 'B' },
      { text: 'A veces, cuando los veo', type: 'C' },
      { text: 'No mucho o no los conozco bien', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Te gustaba quedarte en casa de tus abuelos de niño/a?',
    options: [
      { text: 'Era lo mejor del mundo', type: 'A' },
      { text: 'Sí, me gustaba mucho', type: 'B' },
      { text: 'A veces, dependía', type: 'C' },
      { text: 'No me quedaba o no tenía esa oportunidad', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Tus abuelos te cuentan historias del pasado?',
    options: [
      { text: 'Sí, amo escuchar sus historias', type: 'A' },
      { text: 'A veces, son muy interesantes', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'No mucho o no he tenido esa oportunidad', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué platillo de tus abuelos te trae más recuerdos?',
    options: [
      { text: 'Muchos, cocina/n increíble', type: 'A' },
      { text: 'Hay uno especial que extraño', type: 'B' },
      { text: 'Algunos que me gustan', type: 'C' },
      { text: 'No recuerdo o no cocinaban para mí', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Te han enseñado algo importante tus abuelos?',
    options: [
      { text: 'Sí, valores y sabiduría de vida', type: 'A' },
      { text: 'Algunas cosas que no olvido', type: 'B' },
      { text: 'Pocas cosas', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo describes el cariño de tus abuelos?',
    options: [
      { text: 'Incondicional y abundante', type: 'A' },
      { text: 'Muy especial y único', type: 'B' },
      { text: 'Presente pero discreto', type: 'C' },
      { text: 'Distante o no lo conocí', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Visitabas a tus abuelos en vacaciones?',
    options: [
      { text: 'Siempre, era tradición', type: 'A' },
      { text: 'Seguido, me encantaba', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No o vivían lejos', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Sientes que te pareces a alguno de tus abuelos?',
    options: [
      { text: 'Sí, mucho en personalidad o físico', type: 'A' },
      { text: 'En algunas cosas', type: 'B' },
      { text: 'Un poco', type: 'C' },
      { text: 'No sé o no creo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué representan tus abuelos para ti?',
    options: [
      { text: 'Son mis raíces y mi adoración', type: 'A' },
      { text: 'Figuras importantes en mi vida', type: 'B' },
      { text: 'Familia que quiero', type: 'C' },
      { text: 'No tuve mucha relación con ellos', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👴👵 El/La Nieto/a Consentido/a',
    description: 'Tus abuelos son tu adoración y tú la de ellos. Creciste con su amor incondicional, sus historias y su comida. Esos recuerdos son un tesoro que cargas siempre.',
    traits: ['Cercano', 'Amoroso', 'Tradicional', 'Agradecido'],
    advice: 'Ese amor es único. Si aún los tienes, aprovecha cada momento. Si ya no están, honra su memoria.',
  },
  B: {
    title: '💝 El Nieto/a Cariñoso/a',
    description: 'Tienes bonitos recuerdos con tus abuelos. Aunque quizás no los ves tanto, el cariño es fuerte. Valoras lo que te enseñaron y los momentos compartidos.',
    traits: ['Cariñoso', 'Nostálgico', 'Respetuoso', 'Familiar'],
    advice: 'Esos lazos son especiales. Una llamada o visita puede alegrarles el día.',
  },
  C: {
    title: '🌿 El Nieto/a Ocasional',
    description: 'Tu relación con tus abuelos ha sido más distante pero hay cariño. Las circunstancias de la vida a veces limitan el contacto pero el lazo familiar existe.',
    traits: ['Independiente', 'Respetuoso', 'Ocupado', 'Familiar'],
    advice: 'Nunca es tarde para acercarte más. Un pequeño gesto puede crear grandes recuerdos.',
  },
  D: {
    title: '🕊️ El Nieto/a Distante',
    description: 'Por diversas razones, no tuviste una relación cercana con tus abuelos. Puede ser por distancia, circunstancias familiares o que ya no están. Cada historia es diferente.',
    traits: ['Independiente', 'Resiliente', 'Autónomo', 'Diferente'],
    advice: 'No todos tenemos la misma experiencia con los abuelos. Tu historia es válida como es.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
