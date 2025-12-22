// Test de Gestión Emocional - 감정 관리 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan fácil te resulta identificar lo que estás sintiendo?',
    options: [
      { text: 'Muy fácil, siempre sé qué siento', type: 'excelente' },
      { text: 'Generalmente lo identifico', type: 'buena' },
      { text: 'A veces me cuesta entender mis emociones', type: 'regular' },
      { text: 'Casi nunca sé qué estoy sintiendo', type: 'baja' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo expresas tu tristeza?',
    options: [
      { text: 'La expreso sanamente, lloro si lo necesito', type: 'excelente' },
      { text: 'A veces la expreso, a veces la guardo', type: 'buena' },
      { text: 'Me cuesta mucho expresar tristeza', type: 'regular' },
      { text: 'La reprimo completamente', type: 'baja' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando sientes enojo?',
    options: [
      { text: 'Lo expreso de forma controlada y constructiva', type: 'excelente' },
      { text: 'Me tomo un momento para calmarme', type: 'buena' },
      { text: 'A veces exploto, a veces lo reprimo', type: 'regular' },
      { text: 'Exploto o me guardo todo hasta que no aguanto', type: 'baja' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan cómodo te sientes hablando de tus sentimientos?',
    options: [
      { text: 'Muy cómodo, es importante comunicarlos', type: 'excelente' },
      { text: 'Cómodo con personas de confianza', type: 'buena' },
      { text: 'Me cuesta trabajo abrirme', type: 'regular' },
      { text: 'No hablo de mis sentimientos', type: 'baja' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas la frustración cuando algo no sale como quieres?',
    options: [
      { text: 'La acepto y busco alternativas', type: 'excelente' },
      { text: 'Me molesta pero lo proceso', type: 'buena' },
      { text: 'Me cuesta mucho, me quedo enganchado', type: 'regular' },
      { text: 'No lo manejo bien, me afecta mucho', type: 'baja' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan consciente eres de cómo tus emociones afectan a otros?',
    options: [
      { text: 'Muy consciente, cuido mi impacto', type: 'excelente' },
      { text: 'Generalmente lo tengo presente', type: 'buena' },
      { text: 'A veces no me doy cuenta', type: 'regular' },
      { text: 'No pienso mucho en eso', type: 'baja' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas cuando sientes miedo o nervios?',
    options: [
      { text: 'Los reconozco y los enfrento', type: 'excelente' },
      { text: 'Me preparo y los manejo', type: 'buena' },
      { text: 'Me paralizan un poco', type: 'regular' },
      { text: 'Me dominan completamente', type: 'baja' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan seguido te dejas llevar por impulsos emocionales?',
    options: [
      { text: 'Casi nunca, pienso antes de actuar', type: 'excelente' },
      { text: 'A veces, pero lo controlo', type: 'buena' },
      { text: 'Frecuentemente me dejo llevar', type: 'regular' },
      { text: 'Siempre actúo por impulso', type: 'baja' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te recuperas después de un momento emocional intenso?',
    options: [
      { text: 'Rápidamente, tengo técnicas para calmarme', type: 'excelente' },
      { text: 'Me toma un rato pero lo logro', type: 'buena' },
      { text: 'Me cuesta mucho recuperarme', type: 'regular' },
      { text: 'Tardo días en estar bien', type: 'baja' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan bien manejas los cambios emocionales durante el día?',
    options: [
      { text: 'Muy bien, mantengo estabilidad', type: 'excelente' },
      { text: 'Bien, con algunos altibajos normales', type: 'buena' },
      { text: 'Tengo muchos cambios de humor', type: 'regular' },
      { text: 'Soy una montaña rusa emocional', type: 'baja' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te sientes respecto a mostrar vulnerabilidad?',
    options: [
      { text: 'Es valiente y necesario ser vulnerable', type: 'excelente' },
      { text: 'Lo hago con personas de confianza', type: 'buena' },
      { text: 'Me cuesta mucho, me siento débil', type: 'regular' },
      { text: 'Nunca muestro vulnerabilidad', type: 'baja' },
    ],
  },
  {
    id: 12,
    text: '¿Qué tanto entiendes las emociones de los demás?',
    options: [
      { text: 'Muy bien, soy muy empático', type: 'excelente' },
      { text: 'Generalmente las percibo', type: 'buena' },
      { text: 'A veces no las capto', type: 'regular' },
      { text: 'Me cuesta mucho entender a otros', type: 'baja' },
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
  excelente: {
    type: 'excelente',
    title: 'Inteligencia Emocional Excelente',
    emoji: '🎯💝',
    percentage: 'Gestión emocional: 95%',
    description: '¡Impresionante! Tienes una inteligencia emocional muy desarrollada. Entiendes tus emociones, las expresas sanamente y sabes regularlas. Esto te permite tener relaciones saludables y bienestar personal.',
    characteristics: ['Autoconsciente', 'Empático', 'Expresivo sanamente', 'Autorregulado', 'Emocionalmente maduro'],
    advice: 'Sigue cultivando esta habilidad tan valiosa. Puedes ayudar a otros a desarrollar su inteligencia emocional.',
  },
  buena: {
    type: 'buena',
    title: 'Buena Gestión Emocional',
    emoji: '😊🌱',
    percentage: 'Gestión emocional: 70%',
    description: 'Tienes una buena capacidad para manejar tus emociones. Puedes identificarlas y expresarlas de forma adecuada la mayor parte del tiempo. Hay espacio para crecer pero vas bien.',
    characteristics: ['Consciente de sus emociones', 'Se expresa cuando es necesario', 'Generalmente estable', 'Empático', 'En desarrollo'],
    advice: 'Sigue practicando la autoconciencia emocional. Escribir un diario puede ayudarte a entenderte mejor.',
  },
  regular: {
    type: 'regular',
    title: 'Gestión Emocional en Desarrollo',
    emoji: '🔄😐',
    percentage: 'Gestión emocional: 40%',
    description: 'Tu manejo emocional necesita trabajo. A veces te cuesta identificar o expresar lo que sientes, y puedes reaccionar de formas que no te ayudan. La buena noticia es que esto se puede mejorar.',
    characteristics: ['Dificultad para identificar emociones', 'Expresión inconsistente', 'Reacciones impulsivas a veces', 'Empatía variable', 'Necesita herramientas'],
    advice: 'Considera tomar un curso de inteligencia emocional o trabajar con un terapeuta. Aprende técnicas de respiración y mindfulness.',
  },
  baja: {
    type: 'baja',
    title: 'Necesitas Apoyo Emocional',
    emoji: '😔🆘',
    percentage: 'Gestión emocional: 15%',
    description: 'Estás teniendo dificultades serias con el manejo de tus emociones. Esto puede estar afectando tu vida y relaciones. Pero no te preocupes, con ayuda adecuada puedes mejorar mucho.',
    characteristics: ['Desconexión emocional', 'Explosiones o represión', 'Dificultad en relaciones', 'Impulsividad', 'Necesita apoyo profesional'],
    advice: 'Es importante que busques ayuda profesional. Un psicólogo puede enseñarte herramientas valiosas para manejar tus emociones.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { excelente: 0, buena: 0, regular: 0, baja: 0 };

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
