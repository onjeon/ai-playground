// Test de Estilo de Apego - 애착 유형 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando tu pareja no te contesta rápido?',
    options: [
      { text: 'Tranquilo, entiendo que está ocupado/a', type: 'seguro' },
      { text: 'Prefiero no depender de nadie para estar bien', type: 'evitativo' },
      { text: 'Me preocupo y pienso que algo está mal', type: 'ansioso' },
      { text: 'A veces me preocupo, a veces prefiero alejado/a', type: 'desorganizado' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan cómodo te sientes con la intimidad emocional?',
    options: [
      { text: 'Muy cómodo, me gusta conectar profundamente', type: 'seguro' },
      { text: 'Prefiero mantener cierta distancia', type: 'evitativo' },
      { text: 'La deseo mucho pero me da miedo el rechazo', type: 'ansioso' },
      { text: 'A veces la deseo, a veces me abruma', type: 'desorganizado' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas cuando alguien cercano se aleja un poco?',
    options: [
      { text: 'Les doy espacio, confío en la relación', type: 'seguro' },
      { text: 'Bien, así tengo mi espacio también', type: 'evitativo' },
      { text: 'Me angustio y trato de acercarme más', type: 'ansioso' },
      { text: 'Me confundo, no sé si acercarme o alejarme', type: 'desorganizado' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan dependiente eres en tus relaciones?',
    options: [
      { text: 'Equilibrado, disfruto la compañía y el tiempo solo', type: 'seguro' },
      { text: 'Muy independiente, no me gusta depender de nadie', type: 'evitativo' },
      { text: 'Tiendo a necesitar mucha cercanía y validación', type: 'ansioso' },
      { text: 'Varía mucho, a veces necesito mucho, a veces me alejo', type: 'desorganizado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo describes tu confianza en las relaciones?',
    options: [
      { text: 'Confío fácilmente y me siento seguro', type: 'seguro' },
      { text: 'Prefiero no confiar demasiado en nadie', type: 'evitativo' },
      { text: 'Quiero confiar pero me cuesta, temo que me lastimen', type: 'ansioso' },
      { text: 'A veces confío mucho, a veces no confío nada', type: 'desorganizado' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes cuando te piden compromiso?',
    options: [
      { text: 'Bien, si la relación lo amerita', type: 'seguro' },
      { text: 'Me siento atrapado/a, me da miedo', type: 'evitativo' },
      { text: 'Lo deseo mucho, me da seguridad', type: 'ansioso' },
      { text: 'Parte de mí lo quiere, parte quiere huir', type: 'desorganizado' },
    ],
  },
  {
    id: 7,
    text: '¿Qué piensas cuando una relación termina?',
    options: [
      { text: 'Duele pero proceso mis emociones sanamente', type: 'seguro' },
      { text: 'Lo supero rápido, no me apego tanto', type: 'evitativo' },
      { text: 'Me devastan las rupturas, me cuesta superarlas', type: 'ansioso' },
      { text: 'Es muy confuso, mezcla de alivio y desesperación', type: 'desorganizado' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes respecto a la vulnerabilidad?',
    options: [
      { text: 'Cómodo mostrándome vulnerable con personas de confianza', type: 'seguro' },
      { text: 'Evito mostrar vulnerabilidad, es debilidad', type: 'evitativo' },
      { text: 'Me muestro vulnerable pero luego me arrepiento', type: 'ansioso' },
      { text: 'A veces me abro demasiado, a veces me cierro completamente', type: 'desorganizado' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan frecuentemente piensas en tus relaciones?',
    options: [
      { text: 'Lo normal, sin obsesionarme', type: 'seguro' },
      { text: 'Poco, no me gusta dar tantas vueltas', type: 'evitativo' },
      { text: 'Mucho, analizo todo constantemente', type: 'ansioso' },
      { text: 'A veces mucho, a veces me desconecto completamente', type: 'desorganizado' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo fue tu relación con tus padres de pequeño?',
    options: [
      { text: 'Generalmente segura y afectuosa', type: 'seguro' },
      { text: 'Distante, aprendí a no necesitar mucho', type: 'evitativo' },
      { text: 'Inconsistente, a veces cariñosos, a veces no', type: 'ansioso' },
      { text: 'Confusa o difícil, no me sentía seguro', type: 'desorganizado' },
    ],
  },
  {
    id: 11,
    text: '¿Qué haces cuando sientes que alguien te quiere menos?',
    options: [
      { text: 'Hablo sobre mis preocupaciones tranquilamente', type: 'seguro' },
      { text: 'Me alejo para protegerme', type: 'evitativo' },
      { text: 'Me esfuerzo más para recuperar su amor', type: 'ansioso' },
      { text: 'Me confundo entre acercarme o alejarme', type: 'desorganizado' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo te sentirías si tu pareja quisiera más espacio?',
    options: [
      { text: 'Lo respeto y aprovecho mi tiempo', type: 'seguro' },
      { text: 'Aliviado/a, también necesito mi espacio', type: 'evitativo' },
      { text: 'Ansioso/a, pensaría que ya no me quiere', type: 'ansioso' },
      { text: 'Muy confundido/a con emociones contradictorias', type: 'desorganizado' },
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
  seguro: {
    type: 'seguro',
    title: 'Apego Seguro',
    emoji: '💚🤝',
    percentage: 'Estilo: Seguro',
    description: 'Tienes un apego seguro. Te sientes cómodo con la intimidad y la independencia. Confías en ti y en los demás, y puedes manejar las relaciones de forma saludable.',
    characteristics: ['Confía en los demás', 'Cómodo con intimidad', 'Buena autoestima', 'Comunicación abierta', 'Relaciones estables'],
    advice: 'Tu estilo de apego es el más saludable. Sigue cultivando estas cualidades y ayuda a otros a sentirse seguros.',
  },
  evitativo: {
    type: 'evitativo',
    title: 'Apego Evitativo',
    emoji: '🛡️💨',
    percentage: 'Estilo: Evitativo',
    description: 'Tienes un apego evitativo. Valoras mucho tu independencia y te cuesta la intimidad emocional. Tiendes a alejarte cuando las cosas se ponen serias.',
    characteristics: ['Muy independiente', 'Evita intimidad profunda', 'Se aleja bajo presión', 'Dificultad para confiar', 'Parece distante'],
    advice: 'Trabajar en aceptar la vulnerabilidad puede mejorar mucho tus relaciones. Considera terapia para explorar estos patrones.',
  },
  ansioso: {
    type: 'ansioso',
    title: 'Apego Ansioso',
    emoji: '💔😰',
    percentage: 'Estilo: Ansioso',
    description: 'Tienes un apego ansioso. Deseas mucha cercanía y te preocupas constantemente por tus relaciones. Temes el abandono y puedes ser muy dependiente.',
    characteristics: ['Necesita mucha validación', 'Miedo al abandono', 'Se preocupa mucho', 'Muy sensible al rechazo', 'Busca cercanía constante'],
    advice: 'Trabajar en tu autoestima y seguridad personal te ayudará mucho. La terapia puede ser muy útil para desarrollar un apego más seguro.',
  },
  desorganizado: {
    type: 'desorganizado',
    title: 'Apego Desorganizado',
    emoji: '🌀😵',
    percentage: 'Estilo: Desorganizado',
    description: 'Tienes un apego desorganizado. Tus patrones en las relaciones son inconsistentes. A veces deseas cercanía, otras veces huyes. Esto puede ser confuso para ti y otros.',
    characteristics: ['Patrones inconsistentes', 'Miedo e deseo de intimidad', 'Confusión emocional', 'Relaciones intensas', 'Puede estar relacionado con trauma'],
    advice: 'Este estilo de apego a menudo está relacionado con experiencias difíciles en la infancia. La terapia especializada puede ser muy beneficiosa.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { seguro: 0, evitativo: 0, ansioso: 0, desorganizado: 0 };

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
