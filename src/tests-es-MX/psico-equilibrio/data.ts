// Test de Equilibrio Emocional - 감정 균형 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan estables son tus emociones durante el día?',
    options: [
      { text: 'Muy estables, rara vez cambio de humor', type: 'muy_equilibrado' },
      { text: 'Bastante estables con algunos cambios', type: 'equilibrado' },
      { text: 'Variables, tengo muchos altibajos', type: 'desequilibrado' },
      { text: 'Muy inestables, soy una montaña rusa', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo reaccionas ante situaciones estresantes?',
    options: [
      { text: 'Mantengo la calma y busco soluciones', type: 'muy_equilibrado' },
      { text: 'Me estreso pero lo manejo', type: 'equilibrado' },
      { text: 'Me afecta mucho emocionalmente', type: 'desequilibrado' },
      { text: 'Pierdo el control de mis emociones', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan rápido te recuperas después de un disgusto?',
    options: [
      { text: 'Muy rápido, lo proceso y sigo adelante', type: 'muy_equilibrado' },
      { text: 'Me toma un rato pero me recupero', type: 'equilibrado' },
      { text: 'Me cuesta bastante recuperarme', type: 'desequilibrado' },
      { text: 'Tardo mucho, me afecta profundamente', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan bien equilibras trabajo, familia y tiempo personal?',
    options: [
      { text: 'Muy bien, tengo buen balance', type: 'muy_equilibrado' },
      { text: 'Bastante bien, aunque a veces me cuesta', type: 'equilibrado' },
      { text: 'Mal, siempre descuido algo', type: 'desequilibrado' },
      { text: 'Terrible, mi vida está desbalanceada', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas las críticas o comentarios negativos?',
    options: [
      { text: 'Las proceso objetivamente sin afectarme', type: 'muy_equilibrado' },
      { text: 'Me molestan pero las supero', type: 'equilibrado' },
      { text: 'Me afectan mucho emocionalmente', type: 'desequilibrado' },
      { text: 'Me destruyen por dentro', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan frecuentemente sientes que tu vida está en orden?',
    options: [
      { text: 'Casi siempre, tengo las cosas claras', type: 'muy_equilibrado' },
      { text: 'La mayor parte del tiempo', type: 'equilibrado' },
      { text: 'Pocas veces, frecuentemente me siento caótico', type: 'desequilibrado' },
      { text: 'Nunca, mi vida es un desorden constante', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo es tu relación entre pensamientos, emociones y acciones?',
    options: [
      { text: 'Están alineados, actúo según pienso y siento', type: 'muy_equilibrado' },
      { text: 'Generalmente coherentes', type: 'equilibrado' },
      { text: 'Frecuentemente en conflicto', type: 'desequilibrado' },
      { text: 'Constantemente en contradicción', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan bien duermes normalmente?',
    options: [
      { text: 'Muy bien, descanso profundamente', type: 'muy_equilibrado' },
      { text: 'Bien, con algunas noches difíciles', type: 'equilibrado' },
      { text: 'Mal, frecuentemente no descanso', type: 'desequilibrado' },
      { text: 'Terrible, casi siempre tengo problemas de sueño', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan seguido te sientes abrumado/a por las emociones?',
    options: [
      { text: 'Casi nunca', type: 'muy_equilibrado' },
      { text: 'Ocasionalmente', type: 'equilibrado' },
      { text: 'Frecuentemente', type: 'desequilibrado' },
      { text: 'Casi siempre', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo está tu energía física y emocional?',
    options: [
      { text: 'Muy buena, me siento vital', type: 'muy_equilibrado' },
      { text: 'Buena, con algunos días de cansancio', type: 'equilibrado' },
      { text: 'Baja, frecuentemente me siento agotado/a', type: 'desequilibrado' },
      { text: 'Muy baja, siempre estoy exhausto/a', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan bien manejas los cambios inesperados?',
    options: [
      { text: 'Muy bien, me adapto fácilmente', type: 'muy_equilibrado' },
      { text: 'Bien, aunque me cuestan un poco', type: 'equilibrado' },
      { text: 'Mal, me desestabilizan mucho', type: 'desequilibrado' },
      { text: 'Terrible, me paralizan completamente', type: 'muy_desequilibrado' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu equilibrio emocional general?',
    options: [
      { text: 'Excelente, me siento en paz', type: 'muy_equilibrado' },
      { text: 'Bueno, estoy bastante estable', type: 'equilibrado' },
      { text: 'Regular, tengo muchos altibajos', type: 'desequilibrado' },
      { text: 'Malo, me siento emocionalmente inestable', type: 'muy_desequilibrado' },
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
  muy_equilibrado: {
    type: 'muy_equilibrado',
    title: 'Equilibrio Excepcional',
    emoji: '⚖️🌟',
    percentage: 'Equilibrio emocional: 95%',
    description: '¡Impresionante! Tienes un equilibrio emocional excepcional. Sabes manejar tus emociones, adaptarte a los cambios y mantener la estabilidad en tu vida.',
    characteristics: ['Muy estable', 'Adaptable', 'Resiliente', 'Buena autorregulación', 'Vida balanceada'],
    advice: 'Sigue cultivando este equilibrio. Puedes ayudar a otros a encontrar su propia estabilidad emocional.',
  },
  equilibrado: {
    type: 'equilibrado',
    title: 'Buen Equilibrio',
    emoji: '⚖️😊',
    percentage: 'Equilibrio emocional: 70%',
    description: 'Tienes un buen equilibrio emocional. Aunque experimentas altibajos normales, generalmente mantienes la estabilidad y te recuperas bien.',
    characteristics: ['Generalmente estable', 'Se recupera bien', 'Funcional', 'Algunos altibajos normales', 'Buena adaptación'],
    advice: 'Vas muy bien. Sigue cuidando tu bienestar emocional con hábitos saludables y tiempo para ti.',
  },
  desequilibrado: {
    type: 'desequilibrado',
    title: 'Equilibrio Inestable',
    emoji: '🎢😔',
    percentage: 'Equilibrio emocional: 35%',
    description: 'Tu equilibrio emocional necesita atención. Experimentas muchos altibajos y te cuesta mantener la estabilidad. Esto puede estar afectando tu bienestar.',
    characteristics: ['Inestable', 'Altibajos frecuentes', 'Dificultad para recuperarse', 'Afecta funcionamiento', 'Necesita herramientas'],
    advice: 'Es momento de trabajar en tu equilibrio. Considera terapia, ejercicio, meditación y mejores hábitos de sueño.',
  },
  muy_desequilibrado: {
    type: 'muy_desequilibrado',
    title: 'Desequilibrio Severo',
    emoji: '🌀😰',
    percentage: 'Equilibrio emocional: 10%',
    description: 'Tu equilibrio emocional está muy afectado. Esto puede estar impactando seriamente tu vida, relaciones y bienestar. Necesitas apoyo profesional.',
    characteristics: ['Muy inestable', 'Emociones abrumadoras', 'Dificultad para funcionar', 'Agotamiento', 'Necesita ayuda urgente'],
    advice: 'Por favor busca ayuda profesional lo antes posible. Un psicólogo puede ayudarte a recuperar tu equilibrio.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_equilibrado: 0, equilibrado: 0, desequilibrado: 0, muy_desequilibrado: 0 };

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
