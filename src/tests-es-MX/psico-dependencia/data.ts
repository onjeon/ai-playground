// Test de Dependencia Emocional - 감정 의존 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan difícil es para ti estar solo/a?',
    options: [
      { text: 'Disfruto mi tiempo a solas', type: 'independiente' },
      { text: 'Está bien, aunque prefiero compañía', type: 'equilibrado' },
      { text: 'Me cuesta mucho estar solo/a', type: 'dependiente' },
      { text: 'No soporto la soledad', type: 'muy_dependiente' },
    ],
  },
  {
    id: 2,
    text: '¿Necesitas aprobación constante de tu pareja o seres queridos?',
    options: [
      { text: 'No, me valoro independientemente', type: 'independiente' },
      { text: 'A veces me gusta que me validen', type: 'equilibrado' },
      { text: 'Sí, necesito que me aprueben frecuentemente', type: 'dependiente' },
      { text: 'Constantemente, no puedo funcionar sin su aprobación', type: 'muy_dependiente' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes cuando tu pareja no te contesta rápido?',
    options: [
      { text: 'Sin problema, tiene su vida', type: 'independiente' },
      { text: 'Un poco curioso/a pero tranquilo/a', type: 'equilibrado' },
      { text: 'Me preocupo y le mando más mensajes', type: 'dependiente' },
      { text: 'Me angustio mucho, pienso lo peor', type: 'muy_dependiente' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tanto sacrificas por mantener una relación?',
    options: [
      { text: 'Mantengo mis límites y necesidades', type: 'independiente' },
      { text: 'Hago compromisos razonables', type: 'equilibrado' },
      { text: 'Sacrifico mucho para no perder la relación', type: 'dependiente' },
      { text: 'Todo, pierdo mi identidad en las relaciones', type: 'muy_dependiente' },
    ],
  },
  {
    id: 5,
    text: '¿Tu felicidad depende de otra persona?',
    options: [
      { text: 'No, soy responsable de mi felicidad', type: 'independiente' },
      { text: 'Parcialmente, las relaciones suman', type: 'equilibrado' },
      { text: 'Bastante, sin mi pareja no soy feliz', type: 'dependiente' },
      { text: 'Totalmente, mi felicidad depende de otros', type: 'muy_dependiente' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan difícil es para ti tomar decisiones sin consultar a otros?',
    options: [
      { text: 'Fácil, confío en mi criterio', type: 'independiente' },
      { text: 'Algunas las consulto, otras no', type: 'equilibrado' },
      { text: 'Me cuesta decidir solo/a', type: 'dependiente' },
      { text: 'No puedo decidir nada sin aprobación', type: 'muy_dependiente' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes ante la idea de una ruptura?',
    options: [
      { text: 'Sería difícil pero saldría adelante', type: 'independiente' },
      { text: 'Me dolería mucho pero me recuperaría', type: 'equilibrado' },
      { text: 'Me aterra, no podría vivir sin mi pareja', type: 'dependiente' },
      { text: 'Haría cualquier cosa por evitarlo', type: 'muy_dependiente' },
    ],
  },
  {
    id: 8,
    text: '¿Descuidas tus amistades o intereses por tu pareja?',
    options: [
      { text: 'No, mantengo mis espacios', type: 'independiente' },
      { text: 'A veces, pero trato de equilibrar', type: 'equilibrado' },
      { text: 'Frecuentemente, mi pareja es prioridad', type: 'dependiente' },
      { text: 'Totalmente, solo existe mi pareja', type: 'muy_dependiente' },
    ],
  },
  {
    id: 9,
    text: '¿Tolerarías maltratos por no perder la relación?',
    options: [
      { text: 'Nunca, me valoro demasiado', type: 'independiente' },
      { text: 'Tendría que ser algo muy menor', type: 'equilibrado' },
      { text: 'Probablemente aguantaría algunas cosas', type: 'dependiente' },
      { text: 'Sí, con tal de no estar solo/a', type: 'muy_dependiente' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te describes sin pareja?',
    options: [
      { text: 'Completo/a, una relación suma pero no define', type: 'independiente' },
      { text: 'Bien, aunque me gustaría tener compañía', type: 'equilibrado' },
      { text: 'Incompleto/a, necesito una pareja', type: 'dependiente' },
      { text: 'No soy nadie sin pareja', type: 'muy_dependiente' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan celoso/a eres en tus relaciones?',
    options: [
      { text: 'Confío en mi pareja, no soy celoso/a', type: 'independiente' },
      { text: 'Un poco, pero lo controlo', type: 'equilibrado' },
      { text: 'Bastante, me preocupa perderla', type: 'dependiente' },
      { text: 'Mucho, los celos me controlan', type: 'muy_dependiente' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu nivel de dependencia emocional?',
    options: [
      { text: 'Bajo, soy emocionalmente independiente', type: 'independiente' },
      { text: 'Normal, disfruto las relaciones sanamente', type: 'equilibrado' },
      { text: 'Alto, necesito mucho a los demás', type: 'dependiente' },
      { text: 'Muy alto, no puedo estar sin alguien', type: 'muy_dependiente' },
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
  independiente: {
    type: 'independiente',
    title: 'Emocionalmente Independiente',
    emoji: '💪🌟',
    percentage: 'Independencia: 95%',
    description: 'Tienes una excelente independencia emocional. Te valoras, disfrutas las relaciones pero no dependes de ellas para ser feliz. Esto es muy saludable.',
    characteristics: ['Autoestima alta', 'Decisiones propias', 'Relaciones sanas', 'No necesita validación', 'Completo/a solo/a'],
    advice: 'Tu independencia es admirable. Cuida de no cerrarte a la intimidad emocional por protegerte.',
  },
  equilibrado: {
    type: 'equilibrado',
    title: 'Equilibrio Emocional',
    emoji: '⚖️💚',
    percentage: 'Equilibrio: 70%',
    description: 'Tienes un buen equilibrio entre independencia y conexión. Disfrutas las relaciones sin depender completamente de ellas.',
    characteristics: ['Buen balance', 'Disfruta compañía', 'Funciona solo/a', 'Relaciones saludables', 'Interdependiente'],
    advice: 'Vas muy bien. Sigue cultivando este equilibrio entre cercanía e independencia.',
  },
  dependiente: {
    type: 'dependiente',
    title: 'Dependencia Emocional',
    emoji: '💔🔗',
    percentage: 'Dependencia: 70%',
    description: 'Presentas signos de dependencia emocional. Tiendes a necesitar demasiado a otros para sentirte bien, lo cual puede afectar tus relaciones.',
    characteristics: ['Necesita validación', 'Miedo a la soledad', 'Sacrifica mucho', 'Celos frecuentes', 'Relaciones desbalanceadas'],
    advice: 'Trabaja en tu autoestima e independencia. Considera terapia para desarrollar una relación más sana contigo.',
  },
  muy_dependiente: {
    type: 'muy_dependiente',
    title: 'Dependencia Emocional Severa',
    emoji: '🆘😰',
    percentage: 'Dependencia: 95%',
    description: 'Tu nivel de dependencia emocional es muy alto y puede estar afectando seriamente tu bienestar y relaciones. Necesitas apoyo profesional.',
    characteristics: ['No puede estar solo/a', 'Pierde identidad', 'Tolera maltratos', 'Celos intensos', 'Necesita ayuda'],
    advice: 'Es muy importante que busques ayuda profesional. La dependencia emocional se puede trabajar y superar.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { independiente: 0, equilibrado: 0, dependiente: 0, muy_dependiente: 0 };

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
