// Test de Manejo de Trauma - 트라우마 대처 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan frecuentemente vienen a tu mente recuerdos dolorosos del pasado?',
    options: [
      { text: 'Rara vez, he procesado mi pasado', type: 'procesado' },
      { text: 'A veces, pero los manejo', type: 'en_proceso' },
      { text: 'Frecuentemente, me cuesta soltarlos', type: 'afectado' },
      { text: 'Constantemente, me persiguen', type: 'muy_afectado' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo afectan tus experiencias difíciles del pasado a tu vida actual?',
    options: [
      { text: 'Poco, las he integrado y aprendido', type: 'procesado' },
      { text: 'Algo, pero funciono bien', type: 'en_proceso' },
      { text: 'Bastante, afectan mis decisiones', type: 'afectado' },
      { text: 'Mucho, controlan mi vida', type: 'muy_afectado' },
    ],
  },
  {
    id: 3,
    text: '¿Tienes reacciones intensas ante cosas que te recuerdan situaciones difíciles?',
    options: [
      { text: 'No, puedo manejar los triggers', type: 'procesado' },
      { text: 'A veces, pero los supero', type: 'en_proceso' },
      { text: 'Frecuentemente, me afectan mucho', type: 'afectado' },
      { text: 'Siempre, me paralizan o descontrolan', type: 'muy_afectado' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo duermes normalmente?',
    options: [
      { text: 'Bien, rara vez tengo pesadillas', type: 'procesado' },
      { text: 'Regular, algunas noches difíciles', type: 'en_proceso' },
      { text: 'Mal, frecuentes problemas de sueño', type: 'afectado' },
      { text: 'Muy mal, pesadillas o insomnio constante', type: 'muy_afectado' },
    ],
  },
  {
    id: 5,
    text: '¿Evitas lugares, personas o situaciones que te recuerden algo difícil?',
    options: [
      { text: 'No, puedo enfrentarlos sin problema', type: 'procesado' },
      { text: 'A veces, pero me esfuerzo en no evitar', type: 'en_proceso' },
      { text: 'Frecuentemente, prefiero evitar', type: 'afectado' },
      { text: 'Siempre, mi vida está limitada por eso', type: 'muy_afectado' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo está tu capacidad de confiar en otros?',
    options: [
      { text: 'Buena, confío de forma saludable', type: 'procesado' },
      { text: 'Regular, me cuesta un poco', type: 'en_proceso' },
      { text: 'Limitada, desconfío mucho', type: 'afectado' },
      { text: 'Muy afectada, no puedo confiar en nadie', type: 'muy_afectado' },
    ],
  },
  {
    id: 7,
    text: '¿Experimentas sentimientos de culpa o vergüenza por cosas del pasado?',
    options: [
      { text: 'No, me he perdonado y he sanado', type: 'procesado' },
      { text: 'A veces, pero los trabajo', type: 'en_proceso' },
      { text: 'Frecuentemente, me pesan mucho', type: 'afectado' },
      { text: 'Constantemente, no puedo superarlos', type: 'muy_afectado' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes emocionalmente la mayor parte del tiempo?',
    options: [
      { text: 'Bien, conectado/a con mis emociones', type: 'procesado' },
      { text: 'Regular, con altibajos manejables', type: 'en_proceso' },
      { text: 'Mal, frecuentemente adormecido/a o ansioso/a', type: 'afectado' },
      { text: 'Muy mal, desconectado/a o en crisis frecuentes', type: 'muy_afectado' },
    ],
  },
  {
    id: 9,
    text: '¿Has buscado ayuda profesional para procesar experiencias difíciles?',
    options: [
      { text: 'Sí, y me ha ayudado mucho', type: 'procesado' },
      { text: 'Sí, estoy en proceso', type: 'en_proceso' },
      { text: 'No, pero sé que debería', type: 'afectado' },
      { text: 'No, y no creo que ayude', type: 'muy_afectado' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo manejas el estrés actualmente?',
    options: [
      { text: 'Bien, tengo herramientas efectivas', type: 'procesado' },
      { text: 'Regular, a veces me cuesta', type: 'en_proceso' },
      { text: 'Mal, me abruma fácilmente', type: 'afectado' },
      { text: 'Muy mal, entro en crisis', type: 'muy_afectado' },
    ],
  },
  {
    id: 11,
    text: '¿Sientes que mereces ser feliz y tener una buena vida?',
    options: [
      { text: 'Sí, totalmente', type: 'procesado' },
      { text: 'La mayor parte del tiempo', type: 'en_proceso' },
      { text: 'A veces lo dudo', type: 'afectado' },
      { text: 'No, siento que no lo merezco', type: 'muy_afectado' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu proceso de sanación?',
    options: [
      { text: 'Avanzado, he sanado mucho', type: 'procesado' },
      { text: 'En progreso, voy avanzando', type: 'en_proceso' },
      { text: 'Estancado, no veo progreso', type: 'afectado' },
      { text: 'No iniciado, no sé cómo empezar', type: 'muy_afectado' },
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
  procesado: {
    type: 'procesado',
    title: 'Trauma Procesado',
    emoji: '🌱💚',
    percentage: 'Procesamiento: 90%',
    description: 'Has hecho un gran trabajo procesando tus experiencias difíciles. Aunque el pasado dejó marcas, has sanado mucho y puedes vivir plenamente en el presente.',
    characteristics: ['Ha procesado el pasado', 'Herramientas de sanación', 'Vive en el presente', 'Resiliente', 'Sano emocionalmente'],
    advice: 'Sigue cuidándote y ayuda a otros en su proceso de sanación. Tu experiencia puede inspirar.',
  },
  en_proceso: {
    type: 'en_proceso',
    title: 'En Proceso de Sanación',
    emoji: '🔄💛',
    percentage: 'Procesamiento: 60%',
    description: 'Estás trabajando en sanar tus experiencias difíciles. Vas avanzando aunque a veces el pasado todavía te afecta. Sigue adelante, vas por buen camino.',
    characteristics: ['Trabajando en sanar', 'Algunos triggers', 'Progreso visible', 'Buscando herramientas', 'Esperanza'],
    advice: 'Continúa con tu proceso de sanación. La terapia puede acelerar mucho tu recuperación.',
  },
  afectado: {
    type: 'afectado',
    title: 'Trauma No Procesado',
    emoji: '🌧️😔',
    percentage: 'Procesamiento: 30%',
    description: 'Tus experiencias difíciles del pasado siguen afectando significativamente tu vida actual. Necesitas apoyo para procesar y sanar.',
    characteristics: ['Pasado afecta presente', 'Evitación', 'Triggers frecuentes', 'Dificultad para funcionar', 'Necesita ayuda'],
    advice: 'Es muy importante que busques ayuda profesional. Un terapeuta especializado en trauma puede ayudarte mucho.',
  },
  muy_afectado: {
    type: 'muy_afectado',
    title: 'Trauma Severo - Necesitas Ayuda',
    emoji: '🆘❤️',
    percentage: 'Procesamiento: 10%',
    description: 'Tus experiencias traumáticas están controlando tu vida. Esto es muy difícil pero hay esperanza. Con ayuda profesional puedes sanar.',
    characteristics: ['Trauma activo', 'Crisis frecuentes', 'Vida limitada', 'Sufrimiento intenso', 'Necesita ayuda urgente'],
    advice: 'Por favor busca ayuda profesional especializada en trauma lo antes posible. No tienes que cargar esto solo/a.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { procesado: 0, en_proceso: 0, afectado: 0, muy_afectado: 0 };

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
