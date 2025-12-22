// Personalidad con tu Papá
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido hablas con tu papá?',
    options: [
      { text: 'Todos los días, somos muy cercanos', type: 'A' },
      { text: 'Varias veces a la semana', type: 'B' },
      { text: 'Una vez a la semana o menos', type: 'C' },
      { text: 'Muy rara vez', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Tu papá te dice que te quiere?',
    options: [
      { text: 'Sí, todo el tiempo', type: 'A' },
      { text: 'A veces, a su manera', type: 'B' },
      { text: 'Casi nunca, pero lo demuestra con acciones', type: 'C' },
      { text: 'No, no es de expresar sentimientos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo describes a tu papá cuando eras niño/a?',
    options: [
      { text: 'Muy presente, jugaba conmigo', type: 'A' },
      { text: 'Trabajador pero hacía tiempo para mí', type: 'B' },
      { text: 'Ausente por el trabajo', type: 'C' },
      { text: 'Distante o no estaba', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Le pides consejos a tu papá?',
    options: [
      { text: 'Sí, en todo le pregunto', type: 'A' },
      { text: 'Para cosas importantes sí', type: 'B' },
      { text: 'A veces, depende del tema', type: 'C' },
      { text: 'No, resuelvo solo/a', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué haces en el Día del Padre?',
    options: [
      { text: 'Festejo grande con toda la familia', type: 'A' },
      { text: 'Lo llevo a comer o le regalo algo especial', type: 'B' },
      { text: 'Le llamo y lo felicito', type: 'C' },
      { text: 'A veces se me pasa o no celebro', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tu papá te ha enseñado cosas prácticas de la vida?',
    options: [
      { text: 'Sí, todo lo que sé es por él', type: 'A' },
      { text: 'Varias cosas importantes', type: 'B' },
      { text: 'Algunas cosas', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas los desacuerdos con tu papá?',
    options: [
      { text: 'Hablamos y lo resolvemos', type: 'A' },
      { text: 'Discutimos pero nos reconciliamos', type: 'B' },
      { text: 'Evito el conflicto', type: 'C' },
      { text: 'Terminamos peleados', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan parecido/a eres a tu papá?',
    options: [
      { text: 'Mucho, soy igualito/a', type: 'A' },
      { text: 'En varias cosas me parezco', type: 'B' },
      { text: 'En algunas cosas, en otras no', type: 'C' },
      { text: 'Nada, somos muy diferentes', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo describes el apoyo de tu papá en tu vida?',
    options: [
      { text: 'Incondicional, siempre está', type: 'A' },
      { text: 'Presente cuando lo necesito', type: 'B' },
      { text: 'A veces presente', type: 'C' },
      { text: 'Ausente o limitado', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu relación actual con tu papá?',
    options: [
      { text: 'Excelente, somos muy unidos', type: 'A' },
      { text: 'Buena, con sus altas y bajas', type: 'B' },
      { text: 'Regular, hay distancia', type: 'C' },
      { text: 'Complicada o distante', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👨‍👧 El/La Consentido/a de Papá',
    description: 'Tu papá es tu héroe. Tienes una relación cercana llena de amor y comunicación. Él ha sido una figura fundamental en tu vida y lo admiras profundamente.',
    traits: ['Cercano', 'Amoroso', 'Comunicativo', 'Agradecido'],
    advice: 'Esa relación es un tesoro. Sigue cultivándola y aprende de su sabiduría.',
  },
  B: {
    title: '🤝 El Equilibrado',
    description: 'Tienes una relación sana con tu papá. Lo quieres y respetas, mantienen contacto pero cada quien tiene su espacio. Has encontrado un balance saludable.',
    traits: ['Equilibrado', 'Respetuoso', 'Independiente', 'Maduro'],
    advice: 'Tu relación balanceada es admirable. No olvides decirle lo que significa para ti.',
  },
  C: {
    title: '🌿 El Independiente',
    description: 'Quieres a tu papá pero la relación tiene sus distancias. Puede ser por trabajo, personalidades o circunstancias. El cariño existe aunque no siempre se exprese.',
    traits: ['Independiente', 'Autónomo', 'Reservado', 'Resiliente'],
    advice: 'A veces los papás no saben expresarse. Un pequeño acercamiento puede hacer la diferencia.',
  },
  D: {
    title: '🌊 El Distante',
    description: 'Tu relación con tu papá es complicada o distante. Puede haber razones válidas. No todas las relaciones padre-hijo son iguales y eso está bien.',
    traits: ['Autónomo', 'Resiliente', 'Independiente', 'Fuerte'],
    advice: 'Cada historia es diferente. Si quieres reconectar, nunca es tarde. Si no, está bien seguir tu camino.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
