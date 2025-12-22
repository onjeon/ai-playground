// Test de Actitud hacia la Jubilación - 은퇴 태도 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo imaginas tu vida después de jubilarte?',
    options: [
      { text: 'Descansando, viajando y disfrutando sin preocupaciones', type: 'relajado' },
      { text: 'Haciendo proyectos personales que siempre quise', type: 'activo' },
      { text: 'Seguiré trabajando en algo, no puedo estar sin hacer nada', type: 'workaholic' },
      { text: 'No lo he pensado mucho, falta mucho para eso', type: 'evasivo' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan preparado estás económicamente para tu retiro?',
    options: [
      { text: 'Tengo un plan sólido: Afore, inversiones y ahorros', type: 'activo' },
      { text: 'Tengo algo pero sé que debería tener más', type: 'relajado' },
      { text: 'Planeo trabajar hasta que no pueda más', type: 'workaholic' },
      { text: 'No he pensado en eso, ya veré cuando llegue', type: 'evasivo' },
    ],
  },
  {
    id: 3,
    text: '¿Qué opinas sobre la edad de jubilación?',
    options: [
      { text: 'Quiero jubilarme lo antes posible y disfrutar', type: 'relajado' },
      { text: 'Cuando sienta que logré lo que quería profesionalmente', type: 'activo' },
      { text: 'Mientras pueda trabajar, seguiré haciéndolo', type: 'workaholic' },
      { text: 'No tengo una edad definida, no lo he pensado', type: 'evasivo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes cuando ves a personas jubiladas?',
    options: [
      { text: 'Envidia sana, quiero llegar a ese punto', type: 'relajado' },
      { text: 'Inspirado si están activos y realizando cosas', type: 'activo' },
      { text: 'Preocupado por ellos si no tienen qué hacer', type: 'workaholic' },
      { text: 'No pienso mucho en eso, está muy lejos para mí', type: 'evasivo' },
    ],
  },
  {
    id: 5,
    text: '¿Qué harías si mañana te dieran la opción de jubilarte con buena pensión?',
    options: [
      { text: '¡Acepto de inmediato! A disfrutar la vida', type: 'relajado' },
      { text: 'Lo pensaría, depende de qué proyectos tenga pendientes', type: 'activo' },
      { text: 'No la aceptaría, necesito sentirme productivo', type: 'workaholic' },
      { text: 'No sé, es una decisión muy difícil', type: 'evasivo' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan importante es para ti dejar un legado profesional?',
    options: [
      { text: 'No mucho, quiero disfrutar mi vida sin presiones', type: 'relajado' },
      { text: 'Importante, pero también quiero disfrutar el proceso', type: 'activo' },
      { text: 'Muy importante, mi trabajo es mi legado', type: 'workaholic' },
      { text: 'No he pensado en eso todavía', type: 'evasivo' },
    ],
  },
  {
    id: 7,
    text: '¿Tienes hobbies o actividades que harías al jubilarte?',
    options: [
      { text: 'Muchos, ya tengo una lista de cosas que quiero hacer', type: 'relajado' },
      { text: 'Sí, proyectos que combinen pasión y propósito', type: 'activo' },
      { text: 'Mi trabajo es mi hobby, no necesito otro', type: 'workaholic' },
      { text: 'No realmente, no he pensado en eso', type: 'evasivo' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo manejarías el cambio de rutina al jubilarte?',
    options: [
      { text: 'Feliz, por fin tendré tiempo para mí', type: 'relajado' },
      { text: 'Crearía una nueva rutina con actividades significativas', type: 'activo' },
      { text: 'Me costaría mucho, necesito estructura y propósito', type: 'workaholic' },
      { text: 'No sé, nunca lo he pensado', type: 'evasivo' },
    ],
  },
  {
    id: 9,
    text: '¿Qué papel juega tu familia en tus planes de jubilación?',
    options: [
      { text: 'Central, quiero pasar más tiempo con ellos', type: 'relajado' },
      { text: 'Importante, pero también quiero mis proyectos personales', type: 'activo' },
      { text: 'Mi trabajo también es para ellos, no puedo parar', type: 'workaholic' },
      { text: 'No lo hemos hablado mucho', type: 'evasivo' },
    ],
  },
  {
    id: 10,
    text: '¿Qué te da más miedo de jubilarte?',
    options: [
      { text: 'Nada, lo espero con ganas', type: 'relajado' },
      { text: 'No tener proyectos que me mantengan activo', type: 'activo' },
      { text: 'Perder mi identidad y propósito', type: 'workaholic' },
      { text: 'No lo he pensado, prefiero no pensar en eso', type: 'evasivo' },
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
  relajado: {
    type: 'relajado',
    title: 'Jubilación Soñada',
    emoji: '🏖️🌴',
    percentage: 'Preparación mental: 85%',
    description: 'Sueñas con el día de tu jubilación. Tienes claro que quieres descansar, viajar y disfrutar sin las presiones del trabajo. El retiro es tu meta y trabajas para llegar ahí lo antes posible.',
    characteristics: ['Ansía el retiro', 'Valora el tiempo libre', 'Hobbies definidos', 'Familia como centro', 'Disfrutar sobre producir'],
    advice: 'Tu actitud es saludable pero asegúrate de tener los recursos para sostener ese estilo de vida. Planea bien tus finanzas para que el sueño no se vuelva pesadilla.',
  },
  activo: {
    type: 'activo',
    title: 'Jubilación Activa',
    emoji: '🎯✨',
    percentage: 'Preparación mental: 80%',
    description: 'Ves la jubilación como una nueva etapa llena de oportunidades. No quieres solo descansar, quieres hacer proyectos que siempre postergaste. El retiro es libertad para hacer lo que realmente amas.',
    characteristics: ['Proyectos pendientes', 'Activo con propósito', 'Balance trabajo-pasión', 'Planificador', 'Visión de largo plazo'],
    advice: 'Tu enfoque es ideal. Sigue planeando tus proyectos de retiro y prepárate financieramente. Tendrás una jubilación significativa y satisfactoria.',
  },
  workaholic: {
    type: 'workaholic',
    title: 'Trabajo es Vida',
    emoji: '💼♾️',
    percentage: 'Preparación mental: 40%',
    description: 'La idea de no trabajar te aterra. Tu identidad está tan ligada a tu profesión que no sabes quién serías sin ella. Planeas trabajar hasta que el cuerpo aguante.',
    characteristics: ['Identidad = trabajo', 'Miedo al vacío', 'No se ve sin trabajar', 'Productividad como valor', 'Dificultad para soltar'],
    advice: 'Cuidado. Tu trabajo no debería ser todo lo que eres. Empieza a desarrollar otros aspectos de tu vida: hobbies, relaciones, intereses. La jubilación llegará quieras o no.',
  },
  evasivo: {
    type: 'evasivo',
    title: 'Cabeza en la Arena',
    emoji: '🙈⏰',
    percentage: 'Preparación mental: 20%',
    description: 'Prefieres no pensar en la jubilación porque se siente muy lejana o muy aterradora. No tienes planes claros ni económicos ni de vida para esa etapa. Es un tema que evitas.',
    characteristics: ['Evita el tema', 'Sin planes claros', 'Vive el presente', 'Preparación mínima', 'Puede ser sorprendido'],
    advice: '¡Despierta! La jubilación llega más rápido de lo que crees. Empieza a planear ahora: financieramente y personalmente. Ignorar el tema solo hará más difícil la transición.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { relajado: 0, activo: 0, workaholic: 0, evasivo: 0 };

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
