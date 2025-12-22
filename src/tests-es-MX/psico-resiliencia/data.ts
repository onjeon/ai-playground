// Test de Resiliencia - 회복탄력성 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas cuando enfrentas un problema grave?',
    options: [
      { text: 'Busco soluciones y me adapto rápido', type: 'muy_resiliente' },
      { text: 'Me afecta pero encuentro la forma de seguir', type: 'resiliente' },
      { text: 'Me cuesta mucho recuperarme', type: 'poco_resiliente' },
      { text: 'Me derrumbo y no sé qué hacer', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan rápido te recuperas de las decepciones?',
    options: [
      { text: 'Rápido, proceso y sigo adelante', type: 'muy_resiliente' },
      { text: 'Me toma tiempo pero lo logro', type: 'resiliente' },
      { text: 'Me cuesta bastante superarlas', type: 'poco_resiliente' },
      { text: 'Tardo mucho, me afectan profundamente', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo ves los fracasos o errores?',
    options: [
      { text: 'Como oportunidades de aprendizaje', type: 'muy_resiliente' },
      { text: 'Me duelen pero aprendo de ellos', type: 'resiliente' },
      { text: 'Me afectan mucho mi autoestima', type: 'poco_resiliente' },
      { text: 'Confirman que no soy capaz', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan optimista eres ante las dificultades?',
    options: [
      { text: 'Muy optimista, sé que voy a salir adelante', type: 'muy_resiliente' },
      { text: 'Generalmente positivo/a', type: 'resiliente' },
      { text: 'Tiendo al pesimismo', type: 'poco_resiliente' },
      { text: 'Muy pesimista, pienso lo peor', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 5,
    text: '¿Tienes una red de apoyo cuando las cosas se ponen difíciles?',
    options: [
      { text: 'Sí, tengo personas en quien confiar', type: 'muy_resiliente' },
      { text: 'Algunas personas, aunque pocas', type: 'resiliente' },
      { text: 'Muy pocas o ninguna', type: 'poco_resiliente' },
      { text: 'Nadie, enfrento todo solo/a', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan flexible eres para adaptarte a cambios?',
    options: [
      { text: 'Muy flexible, me adapto fácil', type: 'muy_resiliente' },
      { text: 'Bastante flexible', type: 'resiliente' },
      { text: 'Me cuesta adaptarme', type: 'poco_resiliente' },
      { text: 'Muy rígido/a, los cambios me destruyen', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas el estrés intenso?',
    options: [
      { text: 'Tengo estrategias efectivas', type: 'muy_resiliente' },
      { text: 'Lo manejo aunque me cueste', type: 'resiliente' },
      { text: 'Me abruma frecuentemente', type: 'poco_resiliente' },
      { text: 'Me paraliza completamente', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 8,
    text: '¿Puedes encontrar algo positivo en situaciones difíciles?',
    options: [
      { text: 'Sí, siempre busco el lado bueno', type: 'muy_resiliente' },
      { text: 'Generalmente encuentro algo', type: 'resiliente' },
      { text: 'Me cuesta mucho ver lo positivo', type: 'poco_resiliente' },
      { text: 'No, solo veo lo negativo', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan fuerte es tu sentido de propósito en la vida?',
    options: [
      { text: 'Muy fuerte, sé para qué vivo', type: 'muy_resiliente' },
      { text: 'Tengo propósitos aunque a veces dudo', type: 'resiliente' },
      { text: 'Débil, frecuentemente me cuestiono', type: 'poco_resiliente' },
      { text: 'Inexistente, no sé para qué estoy', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo afrontas la incertidumbre del futuro?',
    options: [
      { text: 'Con confianza, sé que me adaptaré', type: 'muy_resiliente' },
      { text: 'Con algo de ansiedad pero bien', type: 'resiliente' },
      { text: 'Con mucha ansiedad', type: 'poco_resiliente' },
      { text: 'Me paraliza, no puedo con la incertidumbre', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 11,
    text: '¿Has superado situaciones muy difíciles en el pasado?',
    options: [
      { text: 'Sí, y me han hecho más fuerte', type: 'muy_resiliente' },
      { text: 'Sí, aunque me costó mucho', type: 'resiliente' },
      { text: 'Algunas, otras me siguen afectando', type: 'poco_resiliente' },
      { text: 'No, las cargo todas conmigo', type: 'muy_poco_resiliente' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu capacidad de recuperarte?',
    options: [
      { text: 'Excelente, soy muy resiliente', type: 'muy_resiliente' },
      { text: 'Buena, me recupero aunque tome tiempo', type: 'resiliente' },
      { text: 'Limitada, me cuesta mucho', type: 'poco_resiliente' },
      { text: 'Muy baja, no sé cómo seguir adelante', type: 'muy_poco_resiliente' },
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
  muy_resiliente: {
    type: 'muy_resiliente',
    title: 'Súper Resiliente',
    emoji: '💪🌟',
    percentage: 'Resiliencia: 95%',
    description: '¡Impresionante! Tienes una resiliencia extraordinaria. Sabes adaptarte, aprender de las dificultades y salir adelante sin importar qué tan difícil sea la situación.',
    characteristics: ['Muy adaptable', 'Optimista', 'Aprende de todo', 'Red de apoyo fuerte', 'Propósito claro'],
    advice: 'Tu resiliencia es admirable. Comparte tus estrategias con otros y ayúdales a desarrollar su propia fortaleza.',
  },
  resiliente: {
    type: 'resiliente',
    title: 'Resiliente',
    emoji: '💚🌱',
    percentage: 'Resiliencia: 70%',
    description: 'Tienes buena resiliencia. Aunque las dificultades te afectan, encuentras la forma de superarlas y seguir adelante. Puedes fortalecerla aún más.',
    characteristics: ['Se recupera bien', 'Generalmente positivo/a', 'Busca soluciones', 'Alguna red de apoyo', 'Funcional'],
    advice: 'Vas muy bien. Sigue cultivando tus estrategias de afrontamiento y fortalece tu red de apoyo.',
  },
  poco_resiliente: {
    type: 'poco_resiliente',
    title: 'Resiliencia Limitada',
    emoji: '🌧️😔',
    percentage: 'Resiliencia: 35%',
    description: 'Tu resiliencia necesita fortalecerse. Las dificultades te afectan mucho y te cuesta recuperarte. La buena noticia es que la resiliencia se puede desarrollar.',
    characteristics: ['Se recupera lento', 'Tendencia al pesimismo', 'Poca red de apoyo', 'Le cuesta adaptarse', 'Necesita herramientas'],
    advice: 'Trabaja en desarrollar tu resiliencia. Busca apoyo, cultiva el optimismo y aprende estrategias de afrontamiento.',
  },
  muy_poco_resiliente: {
    type: 'muy_poco_resiliente',
    title: 'Resiliencia Muy Baja',
    emoji: '🆘😢',
    percentage: 'Resiliencia: 10%',
    description: 'Tu capacidad de recuperarte está muy afectada. Las dificultades te paralizan y no sabes cómo seguir adelante. Necesitas apoyo para desarrollar esta capacidad.',
    characteristics: ['Dificultad para recuperarse', 'Muy pesimista', 'Sin red de apoyo', 'Se siente solo/a', 'Necesita ayuda'],
    advice: 'Es importante que busques ayuda profesional. La resiliencia se puede desarrollar con apoyo adecuado.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_resiliente: 0, resiliente: 0, poco_resiliente: 0, muy_poco_resiliente: 0 };

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
