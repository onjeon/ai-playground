// Personalidad con tu Mamá
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido hablas con tu mamá?',
    options: [
      { text: 'Todos los días, es mi mejor amiga', type: 'A' },
      { text: 'Varias veces a la semana', type: 'B' },
      { text: 'Una vez a la semana o menos', type: 'C' },
      { text: 'Muy rara vez', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Le cuentas tus problemas a tu mamá?',
    options: [
      { text: 'Todo, ella siempre sabe qué hacer', type: 'A' },
      { text: 'Las cosas importantes sí', type: 'B' },
      { text: 'Algunas cosas, no todo', type: 'C' },
      { text: 'Prefiero no preocuparla', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo describes la comida de tu mamá?',
    options: [
      { text: 'La mejor del mundo, insuperable', type: 'A' },
      { text: 'Muy rica, cocina muy bien', type: 'B' },
      { text: 'Normal, hay cosas que sí y otras que no', type: 'C' },
      { text: 'No cocina mucho o no como de su comida', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo reaccionas a los consejos de tu mamá?',
    options: [
      { text: 'Los sigo porque siempre tiene razón', type: 'A' },
      { text: 'Los escucho y considero', type: 'B' },
      { text: 'A veces los ignoro, me conoce de otra época', type: 'C' },
      { text: 'No me da consejos o no le pido', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué haces en el Día de las Madres?',
    options: [
      { text: 'Festejo grande con toda la familia', type: 'A' },
      { text: 'La llevo a comer o le hago algo especial', type: 'B' },
      { text: 'Le llamo y la felicito', type: 'C' },
      { text: 'A veces se me pasa o no celebro', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tu mamá conoce a tus parejas o amigos?',
    options: [
      { text: 'Sí, todos pasan por su aprobación', type: 'A' },
      { text: 'A los importantes sí', type: 'B' },
      { text: 'A algunos, no a todos', type: 'C' },
      { text: 'Prefiero separar esos mundos', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas cuando tu mamá se mete en tus decisiones?',
    options: [
      { text: 'Le agradezco, su opinión me importa', type: 'A' },
      { text: 'La escucho pero decido yo', type: 'B' },
      { text: 'Me molesta un poco pero la entiendo', type: 'C' },
      { text: 'Ponemos límites claros', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan parecido eres a tu mamá?',
    options: [
      { text: 'Mucho, soy igualito/a', type: 'A' },
      { text: 'En varias cosas me parezco', type: 'B' },
      { text: 'En algunas cosas, en otras no', type: 'C' },
      { text: 'Nada, somos muy diferentes', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Te da culpa cuando no le llamas a tu mamá?',
    options: [
      { text: 'Sí, mucha culpa', type: 'A' },
      { text: 'Un poco, pero ella entiende', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu relación actual con tu mamá?',
    options: [
      { text: 'Perfecta, somos muy unidas/os', type: 'A' },
      { text: 'Buena, con sus altas y bajas', type: 'B' },
      { text: 'Regular, hay distancia', type: 'C' },
      { text: 'Complicada o distante', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👩‍👧 El/La Hijo/a de Mamá',
    description: 'Tu mamá es el centro de tu vida. Hablan todos los días, su opinión es la más importante y no imaginas la vida sin ella. La relación es cercana y llena de amor.',
    traits: ['Devoto', 'Cercano', 'Amoroso', 'Agradecido'],
    advice: 'Tu amor por tu mamá es hermoso. Solo asegúrate de también tener tu propia identidad.',
  },
  B: {
    title: '💕 El Equilibrado Familiar',
    description: 'Tienes una relación sana con tu mamá. La quieres, la respetas y mantienes el contacto pero también tienes tu espacio. Has encontrado el balance.',
    traits: ['Equilibrado', 'Cariñoso', 'Independiente', 'Maduro'],
    advice: 'Tu relación balanceada es muy saludable. Sigue cultivándola con amor y respeto.',
  },
  C: {
    title: '🕊️ El Independiente',
    description: 'Quieres a tu mamá pero has construido tu vida aparte. Hay distancia pero no significa falta de amor. Has aprendido a ser tú mismo/a fuera de su influencia.',
    traits: ['Independiente', 'Autónomo', 'Maduro', 'Reservado'],
    advice: 'La independencia es sana, pero no olvides mantener el vínculo. El tiempo pasa rápido.',
  },
  D: {
    title: '🌊 El Distante',
    description: 'Tu relación con tu mamá es complicada o distante. Puede haber razones válidas para esto. Cada familia es diferente y no todas las relaciones son iguales.',
    traits: ['Distante', 'Independiente', 'Diferente', 'Autónomo'],
    advice: 'Cada relación es única. Si hay algo que sanar, nunca es tarde. Si no, respeta tu camino.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
