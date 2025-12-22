// Test de Manejo del Enojo - 분노 관리 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué pasa cuando alguien te interrumpe mientras hablas?',
    options: [
      { text: 'Lo dejo pasar, no es para tanto', type: 'tranquilo' },
      { text: 'Me molesta un poco pero lo manejo', type: 'controlado' },
      { text: 'Me irrita bastante', type: 'irritable' },
      { text: 'Me dan ganas de explotar', type: 'explosivo' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo reaccionas cuando te hacen esperar mucho tiempo?',
    options: [
      { text: 'Sin problema, aprovecho el tiempo', type: 'tranquilo' },
      { text: 'Me desespero un poco pero aguanto', type: 'controlado' },
      { text: 'Me pongo de mal humor', type: 'irritable' },
      { text: 'Siento que voy a perder la paciencia', type: 'explosivo' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando alguien te culpa de algo injustamente?',
    options: [
      { text: 'Aclaro las cosas con calma', type: 'tranquilo' },
      { text: 'Me defiendo pero sin perder la compostura', type: 'controlado' },
      { text: 'Me enojo mucho y discuto', type: 'irritable' },
      { text: 'Exploto y puedo decir cosas de las que me arrepiento', type: 'explosivo' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes cuando las cosas no salen como planeaste?',
    options: [
      { text: 'Lo acepto y me adapto', type: 'tranquilo' },
      { text: 'Me frustra pero busco soluciones', type: 'controlado' },
      { text: 'Me enojo conmigo o con otros', type: 'irritable' },
      { text: 'Siento rabia intensa', type: 'explosivo' },
    ],
  },
  {
    id: 5,
    text: '¿Qué pasa cuando alguien te falta al respeto?',
    options: [
      { text: 'Lo pongo en su lugar con calma', type: 'tranquilo' },
      { text: 'Me molesto pero mantengo el control', type: 'controlado' },
      { text: 'Me enojo mucho y se lo hago saber', type: 'irritable' },
      { text: 'Reacciono agresivamente', type: 'explosivo' },
    ],
  },
  {
    id: 6,
    text: '¿Con qué frecuencia sientes enojo durante el día?',
    options: [
      { text: 'Casi nunca', type: 'tranquilo' },
      { text: 'De vez en cuando', type: 'controlado' },
      { text: 'Varias veces al día', type: 'irritable' },
      { text: 'Casi todo el tiempo', type: 'explosivo' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te describirían tus amigos o familia?',
    options: [
      { text: 'Muy tranquilo, difícil de enojar', type: 'tranquilo' },
      { text: 'Normal, se enoja como cualquiera', type: 'controlado' },
      { text: 'Un poco enojón', type: 'irritable' },
      { text: 'De carácter fuerte, se enoja fácil', type: 'explosivo' },
    ],
  },
  {
    id: 8,
    text: '¿Qué haces cuando estás enojado?',
    options: [
      { text: 'Respiro y me calmo antes de actuar', type: 'tranquilo' },
      { text: 'Me alejo un momento para calmarme', type: 'controlado' },
      { text: 'Discuto o me pongo de mal humor', type: 'irritable' },
      { text: 'Grito, insulto o rompo cosas', type: 'explosivo' },
    ],
  },
  {
    id: 9,
    text: '¿Cuánto tiempo te dura el enojo?',
    options: [
      { text: 'Minutos, se me pasa rápido', type: 'tranquilo' },
      { text: 'Unas horas', type: 'controlado' },
      { text: 'Todo el día o más', type: 'irritable' },
      { text: 'Días, me cuesta mucho soltar', type: 'explosivo' },
    ],
  },
  {
    id: 10,
    text: '¿Tu enojo ha afectado tus relaciones?',
    options: [
      { text: 'No, manejo bien mi enojo', type: 'tranquilo' },
      { text: 'A veces, pero lo arreglo', type: 'controlado' },
      { text: 'Sí, he tenido problemas por mi carácter', type: 'irritable' },
      { text: 'Sí, he perdido relaciones por mi enojo', type: 'explosivo' },
    ],
  },
  {
    id: 11,
    text: '¿Te arrepientes de cosas que dices o haces cuando te enojas?',
    options: [
      { text: 'Casi nunca, actúo con control', type: 'tranquilo' },
      { text: 'A veces', type: 'controlado' },
      { text: 'Frecuentemente', type: 'irritable' },
      { text: 'Siempre me arrepiento después', type: 'explosivo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo te sientes después de un episodio de enojo?',
    options: [
      { text: 'Bien, porque manejo mis emociones', type: 'tranquilo' },
      { text: 'Un poco cansado pero bien', type: 'controlado' },
      { text: 'Mal, culpable o agotado', type: 'irritable' },
      { text: 'Muy mal, vacío o avergonzado', type: 'explosivo' },
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
  tranquilo: {
    type: 'tranquilo',
    title: 'Maestro Zen del Enojo',
    emoji: '🧘‍♂️☮️',
    percentage: 'Control del enojo: 95%',
    description: '¡Impresionante! Tienes un excelente control de tu enojo. Sabes mantener la calma en situaciones difíciles y no dejas que la rabia te controle. Eres un ejemplo de madurez emocional.',
    characteristics: ['Muy paciente', 'Respuestas calmadas', 'No guarda rencores', 'Resuelve conflictos', 'Emocionalmente estable'],
    advice: 'Sigue así. Tu capacidad de mantener la calma es valiosa. Comparte tus técnicas con quienes luchan con el enojo.',
  },
  controlado: {
    type: 'controlado',
    title: 'Enojo Controlado',
    emoji: '😤➡️😌',
    percentage: 'Control del enojo: 70%',
    description: 'Tienes un buen manejo del enojo. Te molestas como cualquier persona pero sabes controlarte y no dejas que el enojo tome malas decisiones por ti.',
    characteristics: ['Se enoja normalmente', 'Busca calmarse', 'Evita conflictos grandes', 'Se recupera rápido', 'Funcional'],
    advice: 'Vas bien. Sigue practicando técnicas de respiración y tómate pausas cuando sientas que te enojas.',
  },
  irritable: {
    type: 'irritable',
    title: 'Enojo Frecuente',
    emoji: '😠🔥',
    percentage: 'Control del enojo: 40%',
    description: 'Tu enojo está afectando tu vida más de lo que debería. Te irritas con frecuencia y a veces reaccionas de formas que después lamentas. Es momento de trabajar en esto.',
    characteristics: ['Se irrita fácilmente', 'Reacciones fuertes', 'Arrepentimiento frecuente', 'Afecta relaciones', 'Necesita herramientas'],
    advice: 'Considera técnicas de manejo de ira como el timeout, ejercicio, o hablar con un profesional que te ayude.',
  },
  explosivo: {
    type: 'explosivo',
    title: 'Enojo Explosivo - Necesitas Ayuda',
    emoji: '🌋😡',
    percentage: 'Control del enojo: 15%',
    description: 'Tu enojo está fuera de control y probablemente está dañando tu vida y relaciones. No tienes que vivir así. Hay ayuda disponible y puedes aprender a manejar mejor tu enojo.',
    characteristics: ['Explosiones frecuentes', 'Pérdida de control', 'Daño a relaciones', 'Arrepentimiento severo', 'Necesita apoyo urgente'],
    advice: 'Es muy importante que busques ayuda profesional. Un psicólogo especializado en manejo de ira puede ayudarte mucho.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { tranquilo: 0, controlado: 0, irritable: 0, explosivo: 0 };

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
