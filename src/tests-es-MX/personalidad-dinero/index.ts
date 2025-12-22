// Personalidad con el Dinero
export const questions = [
  {
    id: 1,
    text: '¿Cómo manejas tu quincena?',
    options: [
      { text: 'Tengo un presupuesto y lo sigo al pie de la letra', type: 'A' },
      { text: 'Pago lo importante primero y lo demás veo', type: 'B' },
      { text: 'Gasto lo que necesito y ya veré después', type: 'C' },
      { text: 'Se me va como agua entre las manos', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces cuando ves algo que te gusta pero no necesitas?',
    options: [
      { text: 'Lo pienso mucho antes de comprarlo', type: 'A' },
      { text: 'Lo dejo y si sigo pensando en ello, regreso', type: 'B' },
      { text: 'Si tengo lana, me lo llevo', type: 'C' },
      { text: 'Me lo compro sin pensarlo mucho', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te va con el ahorro?',
    options: [
      { text: 'Ahorro un porcentaje fijo cada mes', type: 'A' },
      { text: 'Ahorro cuando puedo, no siempre', type: 'B' },
      { text: 'Intento pero siempre sale algo', type: 'C' },
      { text: '¿Ahorro? ¿Qué es eso?', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo pagas tus compras grandes?',
    options: [
      { text: 'Ahorro y pago de contado', type: 'A' },
      { text: 'A meses sin intereses, bien planeado', type: 'B' },
      { text: 'Tarjeta de crédito y voy pagando', type: 'C' },
      { text: 'Préstamos o apartados', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas de las tandas?',
    options: [
      { text: 'No me gustan, prefiero ahorrar solo', type: 'A' },
      { text: 'Están bien si las organiza alguien confiable', type: 'B' },
      { text: 'Me han salvado varias veces', type: 'C' },
      { text: 'Soy el que organiza las tandas', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes cuando te prestan dinero?',
    options: [
      { text: 'Incómodo, no me gusta deber nada', type: 'A' },
      { text: 'Está bien si es necesario y puedo pagar', type: 'B' },
      { text: 'Me da pena pero a veces no hay de otra', type: 'C' },
      { text: 'Normal, entre familia y amigos se apoya uno', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces con tu aguinaldo?',
    options: [
      { text: 'Lo invierto o ahorro para emergencias', type: 'A' },
      { text: 'Pago deudas y guardo algo', type: 'B' },
      { text: 'Regalos y gastos de temporada', type: 'C' },
      { text: 'Me lo gasto todo en el Buen Fin', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes con las deudas?',
    options: [
      { text: 'No tengo, las evito a toda costa', type: 'A' },
      { text: 'Las manejo bien, están controladas', type: 'B' },
      { text: 'Tengo algunas y me estresan', type: 'C' },
      { text: 'Siempre debo algo a alguien', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan seguido revisas tu estado de cuenta?',
    options: [
      { text: 'Todos los días, llevo un control estricto', type: 'A' },
      { text: 'Cada semana más o menos', type: 'B' },
      { text: 'Cuando me llega el estado de cuenta', type: 'C' },
      { text: 'Prefiero no saber, me deprime', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo divides la cuenta en una salida con amigos?',
    options: [
      { text: 'Cada quien paga lo suyo exactamente', type: 'A' },
      { text: 'Dividimos parejo si es similar', type: 'B' },
      { text: 'Uno paga y después nos arreglamos', type: 'C' },
      { text: 'Invito yo si puedo, no me fijo mucho', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💰 El Administrador Experto',
    description: 'Eres un maestro de las finanzas personales. Cada peso está contabilizado, tienes ahorros y no te gusta deber nada a nadie. Tu disciplina financiera es envidiable y seguramente tienes un buen colchón para emergencias.',
    traits: ['Disciplinado', 'Ahorrador', 'Previsor', 'Organizado'],
    advice: 'Tu control financiero es excelente, pero recuerda que el dinero también es para disfrutarlo. De vez en cuando date un gusto sin culpa.',
  },
  B: {
    title: '⚖️ El Equilibrista Financiero',
    description: 'Manejas bien tu dinero sin ser extremo. Ahorras cuando puedes, gastas con moderación y tienes tus finanzas más o menos controladas. Sabes que hay que disfrutar pero también ser responsable.',
    traits: ['Balanceado', 'Práctico', 'Responsable', 'Flexible'],
    advice: 'Vas por buen camino. Intenta aumentar un poco tu ahorro mensual para tener más tranquilidad financiera.',
  },
  C: {
    title: '🎢 El Gastador Optimista',
    description: 'El dinero va y viene, y tú vives el presente. A veces te pasas de gastos pero siempre encuentras la manera de salir adelante. Confías en que las cosas se acomodarán.',
    traits: ['Optimista', 'Generoso', 'Espontáneo', 'Confiado'],
    advice: 'Tu actitud positiva es buena, pero un poco más de control te evitaría muchos dolores de cabeza. Intenta hacer un presupuesto simple.',
  },
  D: {
    title: '🦋 El Vividor del Momento',
    description: 'Para ti el dinero es para gastarse. Vives al día y no te preocupas mucho por el futuro financiero. Disfrutas lo que tienes cuando lo tienes y confías en que todo se resolverá.',
    traits: ['Desprendido', 'Vividor', 'Generoso', 'Despreocupado'],
    advice: 'La vida es para disfrutarse, pero el futuro llegará. Empieza con pequeños hábitos de ahorro para no llevarte sorpresas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
