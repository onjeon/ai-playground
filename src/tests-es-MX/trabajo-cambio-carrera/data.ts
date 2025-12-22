// Test de Cambio de Carrera - 커리어 전환 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes actualmente en tu trabajo?',
    options: [
      { text: 'Satisfecho y motivado, me gusta lo que hago', type: 'quedarse' },
      { text: 'Está bien, pero a veces pienso en hacer algo diferente', type: 'explorar' },
      { text: 'Aburrido, siento que ya no crezco aquí', type: 'preparar' },
      { text: 'Desesperado por salir y hacer algo nuevo', type: 'cambiar' },
    ],
  },
  {
    id: 2,
    text: '¿Qué opinas sobre empezar de cero en algo nuevo?',
    options: [
      { text: 'Me da miedo perder todo lo que he construido', type: 'quedarse' },
      { text: 'Me intriga pero quiero estar seguro antes', type: 'explorar' },
      { text: 'Estoy dispuesto si significa ser más feliz', type: 'preparar' },
      { text: 'Es exactamente lo que necesito, ya no aguanto más', type: 'cambiar' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionaría tu familia si cambiaras de carrera?',
    options: [
      { text: 'Les preocuparía mucho y no me apoyarían', type: 'quedarse' },
      { text: 'Tendrían dudas pero me escucharían', type: 'explorar' },
      { text: 'Me apoyarían si les explico bien mis razones', type: 'preparar' },
      { text: 'Me respaldarían completamente, saben que no soy feliz', type: 'cambiar' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan estable es tu situación económica para un cambio?',
    options: [
      { text: 'No tengo ahorros, dependemos de mi sueldo actual', type: 'quedarse' },
      { text: 'Tengo algo guardado pero no para mucho tiempo', type: 'explorar' },
      { text: 'Tengo un colchón que me permitiría una transición', type: 'preparar' },
      { text: 'Estoy listo económicamente para dar el salto', type: 'cambiar' },
    ],
  },
  {
    id: 5,
    text: '¿Tienes claridad sobre qué te gustaría hacer diferente?',
    options: [
      { text: 'No tengo idea, solo sé que algo no está bien', type: 'quedarse' },
      { text: 'Tengo algunas ideas pero nada concreto', type: 'explorar' },
      { text: 'Sé lo que quiero hacer pero me falta preparación', type: 'preparar' },
      { text: 'Tengo muy claro mi nuevo camino', type: 'cambiar' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan dispuesto estás a invertir tiempo en capacitarte?',
    options: [
      { text: 'No tengo tiempo ni energía para estudiar algo nuevo', type: 'quedarse' },
      { text: 'Podría tomar algunos cursos en mis tiempos libres', type: 'explorar' },
      { text: 'Estoy tomando cursos y preparándome activamente', type: 'preparar' },
      { text: 'Ya tengo la preparación necesaria para el cambio', type: 'cambiar' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas la incertidumbre?',
    options: [
      { text: 'Me paraliza, prefiero la seguridad aunque no sea feliz', type: 'quedarse' },
      { text: 'Me pone nervioso pero puedo manejarlo', type: 'explorar' },
      { text: 'La acepto como parte del crecimiento', type: 'preparar' },
      { text: 'La incertidumbre me emociona, es señal de cambio', type: 'cambiar' },
    ],
  },
  {
    id: 8,
    text: '¿Qué te detiene de hacer un cambio hoy?',
    options: [
      { text: 'El miedo a fracasar y quedarme sin nada', type: 'quedarse' },
      { text: 'Necesito más información antes de decidir', type: 'explorar' },
      { text: 'Solo me falta afinar algunos detalles del plan', type: 'preparar' },
      { text: 'Honestamente, nada, ya tomé la decisión', type: 'cambiar' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan conectado estás con personas en el área que te interesa?',
    options: [
      { text: 'No conozco a nadie en ese mundo', type: 'quedarse' },
      { text: 'Tengo algunos contactos pero no cercanos', type: 'explorar' },
      { text: 'Estoy construyendo mi red activamente', type: 'preparar' },
      { text: 'Tengo buenas conexiones y hasta ofertas potenciales', type: 'cambiar' },
    ],
  },
  {
    id: 10,
    text: '¿Qué piensas cuando ves a alguien que cambió de carrera exitosamente?',
    options: [
      { text: 'Tuvo suerte, no todos pueden hacerlo', type: 'quedarse' },
      { text: 'Me da curiosidad cómo lo logró', type: 'explorar' },
      { text: 'Me inspira y quiero aprender de su experiencia', type: 'preparar' },
      { text: 'Sé que yo también puedo lograrlo', type: 'cambiar' },
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
  quedarse: {
    type: 'quedarse',
    title: 'Momento de Quedarte',
    emoji: '🏠💼',
    percentage: 'Preparación para cambio: 20%',
    description: 'Ahora no es el momento para un cambio drástico. Puede que necesites más estabilidad económica, claridad sobre qué quieres, o simplemente tu trabajo actual no está tan mal. Y eso está bien.',
    characteristics: ['Prioriza la estabilidad', 'Necesita más claridad', 'Base económica por construir', 'Zona de confort actual', 'Miedo al cambio presente'],
    advice: 'No te presiones a cambiar si no estás listo. Usa este tiempo para ahorrar, explorar opciones y ganar claridad. El cambio puede esperar hasta que estés preparado.',
  },
  explorar: {
    type: 'explorar',
    title: 'Tiempo de Explorar',
    emoji: '🔍🌱',
    percentage: 'Preparación para cambio: 45%',
    description: 'Sientes que algo no está del todo bien, pero no tienes claridad total. Estás en fase de exploración: probando cosas, haciendo preguntas, imaginando posibilidades. Es un momento emocionante.',
    characteristics: ['Curiosidad activa', 'Buscando opciones', 'Abierto a posibilidades', 'Todavía procesando', 'Necesita más información'],
    advice: 'Sigue explorando sin presión. Toma cursos, habla con gente en áreas que te interesan, prueba cosas nuevas. La claridad vendrá si sigues buscando.',
  },
  preparar: {
    type: 'preparar',
    title: 'Preparándote para el Salto',
    emoji: '🎯📚',
    percentage: 'Preparación para cambio: 70%',
    description: 'Sabes lo que quieres y estás trabajando para lograrlo. Estás en la fase de preparación: capacitándote, ahorrando, haciendo contactos. El cambio está cerca, solo necesitas afinar detalles.',
    characteristics: ['Visión clara', 'Preparación activa', 'Construyendo base', 'Determinación', 'Plan en desarrollo'],
    advice: 'Sigue preparándote pero pon una fecha límite. A veces esperamos el momento perfecto que nunca llega. Confía en tu preparación y da el salto cuando estés listo.',
  },
  cambiar: {
    type: 'cambiar',
    title: 'Listo para el Cambio',
    emoji: '🚀✨',
    percentage: 'Preparación para cambio: 95%',
    description: '¡Estás listo! Tienes claridad, preparación, apoyo y las ganas de hacer el cambio. Solo falta ejecutar. El siguiente capítulo de tu vida te está esperando.',
    characteristics: ['Totalmente decidido', 'Preparación completa', 'Red de apoyo sólida', 'Claridad total', 'Valentía presente'],
    advice: '¡Es hora de dar el salto! No lo sigas posponiendo. Tienes todo lo que necesitas. Confía en ti mismo y ve por ese nuevo camino. ¡Éxito!',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { quedarse: 0, explorar: 0, preparar: 0, cambiar: 0 };

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
