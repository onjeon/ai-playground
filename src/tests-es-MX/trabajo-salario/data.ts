// Test de Actitud hacia el Salario - 급여 태도 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan cómodo te sientes negociando tu sueldo?',
    options: [
      { text: 'Muy cómodo, sé mi valor y lo defiendo', type: 'negociador' },
      { text: 'Lo hago cuando es necesario aunque me cuesta', type: 'equilibrado' },
      { text: 'Prefiero que me ofrezcan algo justo sin negociar', type: 'pasivo' },
      { text: 'Me da pena, acepto lo que me den', type: 'evitador' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo reaccionas cuando te enteras que un compañero gana más que tú por el mismo trabajo?',
    options: [
      { text: 'Voy directo a pedir una explicación y ajuste', type: 'negociador' },
      { text: 'Me molesta pero busco entender por qué', type: 'equilibrado' },
      { text: 'Me incomoda pero no digo nada', type: 'pasivo' },
      { text: 'Me resigno, seguro tiene sus razones', type: 'evitador' },
    ],
  },
  {
    id: 3,
    text: '¿Qué piensas sobre hablar de dinero en el trabajo?',
    options: [
      { text: 'Es normal y necesario, la transparencia es buena', type: 'negociador' },
      { text: 'Está bien en ciertos contextos y con ciertas personas', type: 'equilibrado' },
      { text: 'Es un tema incómodo que prefiero evitar', type: 'pasivo' },
      { text: 'Es de mal gusto, no se debe hablar de eso', type: 'evitador' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces cuando crees que mereces un aumento?',
    options: [
      { text: 'Preparo mis argumentos y lo pido directamente', type: 'negociador' },
      { text: 'Espero una buena oportunidad para mencionarlo', type: 'equilibrado' },
      { text: 'Espero a que se den cuenta y me lo ofrezcan', type: 'pasivo' },
      { text: 'Sigo trabajando igual, el dinero no es todo', type: 'evitador' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo evalúas si una oferta de trabajo tiene buen sueldo?',
    options: [
      { text: 'Investigo el mercado, negocio y pido lo que vale el puesto', type: 'negociador' },
      { text: 'Comparo con lo que gano ahora y decido', type: 'equilibrado' },
      { text: 'Si cubre mis gastos básicos está bien', type: 'pasivo' },
      { text: 'El sueldo no es lo más importante para mí', type: 'evitador' },
    ],
  },
  {
    id: 6,
    text: '¿Qué opinas sobre tener un trabajo que amas pero paga poco?',
    options: [
      { text: 'La pasión no paga las cuentas, buscaría mejorar el sueldo', type: 'negociador' },
      { text: 'Buscaría un balance entre pasión y buena paga', type: 'equilibrado' },
      { text: 'Lo aceptaría si me hace feliz', type: 'pasivo' },
      { text: 'La satisfacción personal vale más que el dinero', type: 'evitador' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes cuando ves a otros de tu edad ganando más?',
    options: [
      { text: 'Motivado a mejorar mi situación y negociar mejor', type: 'negociador' },
      { text: 'Reflexiono sobre qué podría hacer diferente', type: 'equilibrado' },
      { text: 'Cada quien tiene su camino, no me comparo', type: 'pasivo' },
      { text: 'El dinero no define el éxito ni la felicidad', type: 'evitador' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan importante es el sueldo al elegir un trabajo?',
    options: [
      { text: 'Es lo más importante, necesito ganar bien', type: 'negociador' },
      { text: 'Es muy importante junto con otros factores', type: 'equilibrado' },
      { text: 'Es importante pero no determinante', type: 'pasivo' },
      { text: 'Es secundario, hay cosas más importantes', type: 'evitador' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas cuando te ofrecen menos de lo que esperabas?',
    options: [
      { text: 'Contraoferto con datos de mercado y mi valor', type: 'negociador' },
      { text: 'Negocio un poco pero puedo ceder', type: 'equilibrado' },
      { text: 'Lo acepto si está dentro de un rango razonable', type: 'pasivo' },
      { text: 'Lo acepto, no me gusta regatear', type: 'evitador' },
    ],
  },
  {
    id: 10,
    text: '¿Qué piensas de la frase "el dinero no es todo en la vida"?',
    options: [
      { text: 'La dicen los que no saben negociar', type: 'negociador' },
      { text: 'Es verdad pero el dinero sí importa mucho', type: 'equilibrado' },
      { text: 'Estoy de acuerdo, hay cosas más importantes', type: 'pasivo' },
      { text: 'Totalmente de acuerdo, el dinero no da la felicidad', type: 'evitador' },
    ],
  },
];

export const results: Record<string, {
  type: string;
  title: string;
  emoji: string;
  percentage: string;
  description: string;
  characteristics: string[];
  advice: string;
}> = {
  negociador: {
    type: 'negociador',
    title: 'Negociador Nato',
    emoji: '💰🦁',
    percentage: 'Habilidad para negociar: 95%',
    description: 'Sabes tu valor y no te da pena exigirlo. Investigas el mercado, preparas tus argumentos y negocias sin miedo. El dinero te importa y no te avergüenza decirlo. Eres de los que le sacan jugo a cada oportunidad.',
    characteristics: ['Conoce su valor', 'Negocia activamente', 'Investigador del mercado', 'Directo con el tema', 'No le da pena hablar de dinero'],
    advice: 'Tu actitud es admirable pero cuida no parecer únicamente motivado por el dinero. Las relaciones y el ambiente laboral también importan.',
  },
  equilibrado: {
    type: 'equilibrado',
    title: 'Equilibrio Financiero',
    emoji: '⚖️💵',
    percentage: 'Habilidad para negociar: 70%',
    description: 'El dinero te importa pero no es lo único. Sabes negociar cuando es necesario pero también valoras otros aspectos del trabajo. Buscas un balance entre buena paga y satisfacción profesional.',
    characteristics: ['Balance dinero-satisfacción', 'Negocia cuando es necesario', 'Flexible en sus criterios', 'Valora el paquete completo', 'Realista'],
    advice: 'Tu enfoque es saludable. Solo asegúrate de no subvalorarte por buscar el balance. A veces hay que ser más firme con el tema salarial.',
  },
  pasivo: {
    type: 'pasivo',
    title: 'Actitud Pasiva',
    emoji: '🌱💭',
    percentage: 'Habilidad para negociar: 40%',
    description: 'Te cuesta hablar de dinero y prefieres que otros decidan tu sueldo. Crees que si trabajas bien, eventualmente te reconocerán. El dinero no es tu prioridad, pero a veces eso juega en tu contra.',
    characteristics: ['Evita negociar', 'Confía en el reconocimiento', 'Prioriza otros valores', 'Incómodo con el tema', 'Espera ser valorado'],
    advice: 'Nadie va a valorar tu trabajo más que tú. Aprende a negociar y pedir lo que mereces. Tu trabajo tiene valor, ¡defiéndelo!',
  },
  evitador: {
    type: 'evitador',
    title: 'Evitador del Tema',
    emoji: '🙈💸',
    percentage: 'Habilidad para negociar: 15%',
    description: 'El dinero te incomoda profundamente. Prefieres no hablar del tema y aceptas lo que te ofrecen. Crees que hay cosas más importantes y que hablar de sueldo es de mal gusto.',
    characteristics: ['Evita el tema activamente', 'Acepta lo que le dan', 'Cree que el dinero no importa', 'Incómodo negociando', 'Puede subvalorarse'],
    advice: 'Tu actitud puede estar costándote mucho dinero. El sueldo no define tu valor pero tampoco lo ignores. Aprende sobre finanzas y negociación, es una habilidad de vida.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { negociador: 0, equilibrado: 0, pasivo: 0, evitador: 0 };

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      scores[type]++;
    }
  });

  const resultType = Object.entries(scores).reduce((a, b) => (b[1] > a[1] ? b : a))[0];
  return results[resultType];
}
