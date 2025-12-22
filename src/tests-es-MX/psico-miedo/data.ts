// Test de Tipo de Miedo - 두려움 유형 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cuál de estos miedos te afecta más?',
    options: [
      { text: 'Miedo al rechazo o a no ser aceptado', type: 'rechazo' },
      { text: 'Miedo al fracaso o a no lograr mis metas', type: 'fracaso' },
      { text: 'Miedo a lo desconocido o al cambio', type: 'incertidumbre' },
      { text: 'Miedo a perder a las personas que amo', type: 'perdida' },
    ],
  },
  {
    id: 2,
    text: '¿Qué situación te genera más ansiedad?',
    options: [
      { text: 'Hablar en público o ser el centro de atención', type: 'rechazo' },
      { text: 'Exámenes, evaluaciones o competencias', type: 'fracaso' },
      { text: 'Empezar algo nuevo o tomar decisiones', type: 'incertidumbre' },
      { text: 'Despedidas o ver a alguien alejarse', type: 'perdida' },
    ],
  },
  {
    id: 3,
    text: '¿Qué pensamiento te quita el sueño?',
    options: [
      { text: 'Que la gente me juzgue o critique', type: 'rechazo' },
      { text: 'Que mis esfuerzos no sean suficientes', type: 'fracaso' },
      { text: 'Que algo malo e inesperado suceda', type: 'incertidumbre' },
      { text: 'Que alguien querido ya no esté', type: 'perdida' },
    ],
  },
  {
    id: 4,
    text: '¿Qué evitas con más frecuencia?',
    options: [
      { text: 'Situaciones sociales donde pueda ser juzgado', type: 'rechazo' },
      { text: 'Retos donde pueda quedar mal', type: 'fracaso' },
      { text: 'Cambios importantes en mi vida', type: 'incertidumbre' },
      { text: 'Apegarme demasiado a alguien', type: 'perdida' },
    ],
  },
  {
    id: 5,
    text: '¿Qué te cuesta más aceptar?',
    options: [
      { text: 'Que no le caigo bien a todos', type: 'rechazo' },
      { text: 'Que a veces las cosas no salen como quiero', type: 'fracaso' },
      { text: 'Que no puedo controlar todo', type: 'incertidumbre' },
      { text: 'Que las personas cambian o se van', type: 'perdida' },
    ],
  },
  {
    id: 6,
    text: '¿Cuál sería tu peor pesadilla?',
    options: [
      { text: 'Ser humillado frente a todos', type: 'rechazo' },
      { text: 'Fracasar rotundamente en algo importante', type: 'fracaso' },
      { text: 'Perder el control de mi vida', type: 'incertidumbre' },
      { text: 'Quedarme completamente solo', type: 'perdida' },
    ],
  },
  {
    id: 7,
    text: '¿Qué te hace sentir más vulnerable?',
    options: [
      { text: 'Mostrarme tal cual soy', type: 'rechazo' },
      { text: 'Intentar algo y no lograrlo', type: 'fracaso' },
      { text: 'No saber qué va a pasar', type: 'incertidumbre' },
      { text: 'Depender emocionalmente de alguien', type: 'perdida' },
    ],
  },
  {
    id: 8,
    text: '¿Qué te preocupa más del futuro?',
    options: [
      { text: 'No encontrar mi lugar o pertenecer', type: 'rechazo' },
      { text: 'No alcanzar mis sueños', type: 'fracaso' },
      { text: 'La incertidumbre de lo que vendrá', type: 'incertidumbre' },
      { text: 'Perder a quienes amo', type: 'perdida' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo reaccionas ante tus miedos?',
    options: [
      { text: 'Busco agradar a todos para evitar rechazo', type: 'rechazo' },
      { text: 'Me esfuerzo el doble para no fallar', type: 'fracaso' },
      { text: 'Evito los cambios y me quedo en lo seguro', type: 'incertidumbre' },
      { text: 'Me aferro a las personas que quiero', type: 'perdida' },
    ],
  },
  {
    id: 10,
    text: '¿Qué frase te identifica más?',
    options: [
      { text: '"Necesito que me acepten"', type: 'rechazo' },
      { text: '"No puedo fallar"', type: 'fracaso' },
      { text: '"Necesito saber qué va a pasar"', type: 'incertidumbre' },
      { text: '"No soporto las despedidas"', type: 'perdida' },
    ],
  },
  {
    id: 11,
    text: '¿Cuál crees que es el origen de tus miedos?',
    options: [
      { text: 'Experiencias de rechazo o burla', type: 'rechazo' },
      { text: 'Presión para ser exitoso/a', type: 'fracaso' },
      { text: 'Cambios traumáticos o inesperados', type: 'incertidumbre' },
      { text: 'Pérdidas o abandonos en el pasado', type: 'perdida' },
    ],
  },
  {
    id: 12,
    text: '¿Qué necesitas más para sentirte seguro/a?',
    options: [
      { text: 'Sentirme aceptado/a y valorado/a', type: 'rechazo' },
      { text: 'Lograr mis metas y tener éxito', type: 'fracaso' },
      { text: 'Tener todo bajo control y planificado', type: 'incertidumbre' },
      { text: 'Tener a mis seres queridos cerca', type: 'perdida' },
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
  rechazo: {
    type: 'rechazo',
    title: 'Miedo al Rechazo',
    emoji: '😔🚪',
    percentage: 'Tipo: Miedo al rechazo',
    description: 'Tu principal miedo es no ser aceptado por los demás. Temes el juicio, la crítica y la exclusión. Esto puede llevarte a buscar aprobación constantemente o a evitar mostrarte tal cual eres.',
    characteristics: ['Busca aprobación', 'Sensible a la crítica', 'Evita conflictos', 'Puede ser complaciente', 'Teme ser auténtico'],
    advice: 'Trabaja en tu autoestima y en aceptarte tal como eres. El rechazo es parte de la vida y no define tu valor.',
  },
  fracaso: {
    type: 'fracaso',
    title: 'Miedo al Fracaso',
    emoji: '📉😰',
    percentage: 'Tipo: Miedo al fracaso',
    description: 'Tu principal miedo es no lograr tus metas o fallar. Te presionas mucho para tener éxito y puedes evitar intentar cosas nuevas por miedo a no lograrlo.',
    characteristics: ['Perfeccionista', 'Se presiona mucho', 'Evita riesgos', 'Miedo a intentar', 'Duro consigo mismo'],
    advice: 'El fracaso es parte del aprendizaje, no un veredicto final. Permítete equivocarte y aprender de ello.',
  },
  incertidumbre: {
    type: 'incertidumbre',
    title: 'Miedo a la Incertidumbre',
    emoji: '❓😨',
    percentage: 'Tipo: Miedo a lo desconocido',
    description: 'Tu principal miedo es lo desconocido y no tener control. Los cambios te generan ansiedad y prefieres quedarte en tu zona de confort.',
    characteristics: ['Necesita control', 'Evita cambios', 'Planifica todo', 'Ansiedad ante incertidumbre', 'Prefiere lo seguro'],
    advice: 'Aprende a abrazar la incertidumbre. La vida es impredecible y eso también puede traer cosas buenas.',
  },
  perdida: {
    type: 'perdida',
    title: 'Miedo a la Pérdida',
    emoji: '💔😢',
    percentage: 'Tipo: Miedo a perder',
    description: 'Tu principal miedo es perder a las personas que amas o quedarte solo. Puedes aferrarte demasiado a las relaciones o temer las despedidas.',
    characteristics: ['Se aferra a relaciones', 'Teme la soledad', 'Sensible a despedidas', 'Puede ser posesivo', 'Miedo al abandono'],
    advice: 'Trabaja en tu independencia emocional. El amor no desaparece con la distancia y puedes sobrevivir las pérdidas.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { rechazo: 0, fracaso: 0, incertidumbre: 0, perdida: 0 };

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
