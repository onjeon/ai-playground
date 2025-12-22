// Test de Perfeccionismo - 완벽주의 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando algo no sale perfecto?',
    options: [
      { text: 'Lo acepto, hice mi mejor esfuerzo', type: 'sano' },
      { text: 'Me frustra un poco pero lo supero', type: 'moderado' },
      { text: 'Me molesta mucho, pienso en qué hice mal', type: 'alto' },
      { text: 'Me devasta, siento que fracasé', type: 'extremo' },
    ],
  },
  {
    id: 2,
    text: '¿Cuántas veces revisas tu trabajo antes de entregarlo?',
    options: [
      { text: 'Una o dos veces y listo', type: 'sano' },
      { text: 'Algunas veces para asegurarme', type: 'moderado' },
      { text: 'Muchas veces, busco cada error', type: 'alto' },
      { text: 'Nunca está suficientemente bien', type: 'extremo' },
    ],
  },
  {
    id: 3,
    text: '¿Procrastinas por miedo a no hacerlo perfecto?',
    options: [
      { text: 'No, empiezo aunque no sea perfecto', type: 'sano' },
      { text: 'A veces me cuesta empezar', type: 'moderado' },
      { text: 'Frecuentemente postergo por miedo', type: 'alto' },
      { text: 'Siempre, prefiero no hacer nada a hacerlo mal', type: 'extremo' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan crítico/a eres contigo mismo/a?',
    options: [
      { text: 'Me trato con compasión', type: 'sano' },
      { text: 'A veces soy duro/a conmigo', type: 'moderado' },
      { text: 'Frecuentemente me critico', type: 'alto' },
      { text: 'Soy mi peor crítico, nunca es suficiente', type: 'extremo' },
    ],
  },
  {
    id: 5,
    text: '¿Te cuesta delegar porque otros no lo hacen tan bien?',
    options: [
      { text: 'No, confío en otros', type: 'sano' },
      { text: 'A veces prefiero hacerlo yo', type: 'moderado' },
      { text: 'Frecuentemente, nadie lo hace bien', type: 'alto' },
      { text: 'Siempre, solo yo puedo hacerlo bien', type: 'extremo' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas los errores?',
    options: [
      { text: 'Son oportunidades de aprender', type: 'sano' },
      { text: 'Me molestan pero los supero', type: 'moderado' },
      { text: 'Me afectan mucho, me cuesta superarlos', type: 'alto' },
      { text: 'Son inaceptables, no puedo perdonármelos', type: 'extremo' },
    ],
  },
  {
    id: 7,
    text: '¿Tus estándares para ti son más altos que para otros?',
    options: [
      { text: 'No, me trato como a los demás', type: 'sano' },
      { text: 'Un poco más exigente conmigo', type: 'moderado' },
      { text: 'Mucho más exigente conmigo', type: 'alto' },
      { text: 'Me exijo la perfección, a otros no', type: 'extremo' },
    ],
  },
  {
    id: 8,
    text: '¿Tu valor personal depende de tus logros?',
    options: [
      { text: 'No, valgo independientemente de mis logros', type: 'sano' },
      { text: 'Parcialmente, pero me valoro de otras formas', type: 'moderado' },
      { text: 'Bastante, mis logros definen mi valor', type: 'alto' },
      { text: 'Totalmente, sin logros no valgo nada', type: 'extremo' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes con el "suficientemente bien"?',
    options: [
      { text: 'Es un buen estándar', type: 'sano' },
      { text: 'Puedo aceptarlo a veces', type: 'moderado' },
      { text: 'Me cuesta mucho conformarme', type: 'alto' },
      { text: 'Es inaceptable, todo o nada', type: 'extremo' },
    ],
  },
  {
    id: 10,
    text: '¿Tu perfeccionismo afecta tu bienestar o relaciones?',
    options: [
      { text: 'No, mantengo un balance', type: 'sano' },
      { text: 'A veces causa algo de estrés', type: 'moderado' },
      { text: 'Frecuentemente me agota o causa conflictos', type: 'alto' },
      { text: 'Mucho, me ha costado salud y relaciones', type: 'extremo' },
    ],
  },
  {
    id: 11,
    text: '¿Sientes que siempre podrías haber hecho más o mejor?',
    options: [
      { text: 'No, estoy satisfecho/a con mi esfuerzo', type: 'sano' },
      { text: 'A veces lo pienso', type: 'moderado' },
      { text: 'Frecuentemente, nunca es suficiente', type: 'alto' },
      { text: 'Siempre, nada de lo que hago está bien', type: 'extremo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu nivel de perfeccionismo?',
    options: [
      { text: 'Saludable, busco calidad sin obsesionarme', type: 'sano' },
      { text: 'Moderado, a veces me exijo de más', type: 'moderado' },
      { text: 'Alto, me cuesta aceptar lo imperfecto', type: 'alto' },
      { text: 'Extremo, la perfección me controla', type: 'extremo' },
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
  sano: {
    type: 'sano',
    title: 'Perfeccionismo Saludable',
    emoji: '✨💚',
    percentage: 'Perfeccionismo: 20%',
    description: 'Tienes estándares altos pero saludables. Buscas la calidad sin obsesionarte con la perfección. Sabes que los errores son parte del crecimiento.',
    characteristics: ['Estándares realistas', 'Acepta errores', 'Se valora más allá de logros', 'Delega bien', 'Equilibrado'],
    advice: 'Tu relación con la excelencia es muy sana. Sigue manteniendo este equilibrio.',
  },
  moderado: {
    type: 'moderado',
    title: 'Perfeccionismo Moderado',
    emoji: '💛🎯',
    percentage: 'Perfeccionismo: 45%',
    description: 'A veces te exiges de más pero generalmente lo manejas. Tienes espacio para ser más compasivo/a contigo mismo/a.',
    characteristics: ['Exigente a veces', 'Autocrítico/a ocasional', 'Puede mejorar autocompasión', 'Funcional', 'En proceso'],
    advice: 'Practica tratarte como tratarías a un buen amigo. El "suficientemente bien" es un estándar válido.',
  },
  alto: {
    type: 'alto',
    title: 'Perfeccionismo Alto',
    emoji: '🟠😰',
    percentage: 'Perfeccionismo: 75%',
    description: 'Tu perfeccionismo está afectando tu bienestar. Te exiges demasiado y te cuesta aceptar errores. Esto puede causar estrés y agotamiento.',
    characteristics: ['Muy autocrítico/a', 'Procrastina por miedo', 'Estándares irreales', 'Afecta bienestar', 'Necesita trabajo'],
    advice: 'Trabaja en aceptar que la perfección no existe. Considera terapia para explorar de dónde viene esta exigencia.',
  },
  extremo: {
    type: 'extremo',
    title: 'Perfeccionismo Extremo',
    emoji: '🔴😫',
    percentage: 'Perfeccionismo: 95%',
    description: 'Tu perfeccionismo es extremo y probablemente te está causando mucho sufrimiento. La búsqueda de la perfección te paraliza y te impide disfrutar.',
    characteristics: ['Perfección obligatoria', 'Parálisis por miedo', 'Todo o nada', 'Daña salud y relaciones', 'Necesita ayuda'],
    advice: 'Es muy importante que busques ayuda profesional. El perfeccionismo extremo se puede trabajar y superar.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sano: 0, moderado: 0, alto: 0, extremo: 0 };

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
