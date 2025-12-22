// Test de Autoestima - 자존감 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando te miras al espejo?',
    options: [
      { text: 'Me gusto tal como soy', type: 'alta' },
      { text: 'Estoy bien, aunque hay cosas que cambiaría', type: 'moderada' },
      { text: 'No me gusta mucho lo que veo', type: 'baja' },
      { text: 'Evito mirarme, no me soporto', type: 'muy_baja' },
    ],
  },
  {
    id: 2,
    text: '¿Qué piensas cuando cometes un error?',
    options: [
      { text: 'Es normal, todos nos equivocamos', type: 'alta' },
      { text: 'Me molesta pero lo supero', type: 'moderada' },
      { text: 'Me critico mucho a mí mismo', type: 'baja' },
      { text: 'Confirma que soy un fracaso', type: 'muy_baja' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas cuando alguien te hace un cumplido?',
    options: [
      { text: 'Lo acepto con gusto y digo gracias', type: 'alta' },
      { text: 'Me da un poco de pena pero lo agradezco', type: 'moderada' },
      { text: 'No me lo creo, pienso que exageran', type: 'baja' },
      { text: 'Pienso que se burlan de mí', type: 'muy_baja' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan cómodo te sientes expresando tu opinión?',
    options: [
      { text: 'Muy cómodo, me gusta compartir mis ideas', type: 'alta' },
      { text: 'Depende del tema y las personas', type: 'moderada' },
      { text: 'Prefiero quedarme callado', type: 'baja' },
      { text: 'Mi opinión no vale la pena', type: 'muy_baja' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes cuando te comparan con otros?',
    options: [
      { text: 'Seguro de mí, cada quien es diferente', type: 'alta' },
      { text: 'A veces me afecta un poco', type: 'moderada' },
      { text: 'Siempre salgo perdiendo en las comparaciones', type: 'baja' },
      { text: 'Me hace sentir que no valgo nada', type: 'muy_baja' },
    ],
  },
  {
    id: 6,
    text: '¿Qué piensas de tus logros en la vida?',
    options: [
      { text: 'Estoy orgulloso de lo que he conseguido', type: 'alta' },
      { text: 'He logrado algunas cosas buenas', type: 'moderada' },
      { text: 'Debería haber logrado más', type: 'baja' },
      { text: 'No he logrado nada importante', type: 'muy_baja' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes cuando alguien te rechaza o critica?',
    options: [
      { text: 'Lo proceso y sigo adelante', type: 'alta' },
      { text: 'Me duele pero lo supero', type: 'moderada' },
      { text: 'Me afecta mucho y por mucho tiempo', type: 'baja' },
      { text: 'Confirma lo que ya sabía: no valgo', type: 'muy_baja' },
    ],
  },
  {
    id: 8,
    text: '¿Te cuesta pedir lo que necesitas o mereces?',
    options: [
      { text: 'No, pido lo que necesito sin problema', type: 'alta' },
      { text: 'A veces me cuesta un poco', type: 'moderada' },
      { text: 'Sí, me da mucha pena pedir cosas', type: 'baja' },
      { text: 'No merezco pedir nada', type: 'muy_baja' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo describirías tu relación contigo mismo?',
    options: [
      { text: 'Soy mi mejor amigo', type: 'alta' },
      { text: 'Nos llevamos bien la mayor parte del tiempo', type: 'moderada' },
      { text: 'Soy muy duro conmigo mismo', type: 'baja' },
      { text: 'Me odio la mayor parte del tiempo', type: 'muy_baja' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan seguido te disculpas por cosas que no son tu culpa?',
    options: [
      { text: 'Casi nunca, solo cuando es necesario', type: 'alta' },
      { text: 'A veces, por cortesía', type: 'moderada' },
      { text: 'Frecuentemente, aunque no sea mi culpa', type: 'baja' },
      { text: 'Todo el tiempo, siempre siento que estorbo', type: 'muy_baja' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te sientes cuando logras algo importante?',
    options: [
      { text: 'Muy orgulloso y lo celebro', type: 'alta' },
      { text: 'Contento pero sigo adelante', type: 'moderada' },
      { text: 'Pienso que fue suerte o no fue tan difícil', type: 'baja' },
      { text: 'Siento que no lo merecía', type: 'muy_baja' },
    ],
  },
  {
    id: 12,
    text: '¿Qué tan valioso te sientes como persona?',
    options: [
      { text: 'Muy valioso, sé lo que aporto al mundo', type: 'alta' },
      { text: 'Valioso, aunque a veces lo dudo', type: 'moderada' },
      { text: 'No muy valioso comparado con otros', type: 'baja' },
      { text: 'Siento que no valgo nada', type: 'muy_baja' },
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
  alta: {
    type: 'alta',
    title: 'Autoestima Alta - Te Quieres Bien',
    emoji: '🌟💪',
    percentage: 'Nivel de autoestima: 90%',
    description: '¡Excelente! Tienes una autoestima saludable. Te valoras, te respetas y sabes lo que vales. Esto te permite enfrentar la vida con confianza y tener relaciones sanas.',
    characteristics: ['Seguro de sí mismo', 'Se acepta', 'Resiliente', 'Asertivo', 'Positivo'],
    advice: 'Sigue cultivando esa relación tan bonita contigo mismo. Tu autoestima es un ejemplo para otros.',
  },
  moderada: {
    type: 'moderada',
    title: 'Autoestima Moderada - En Construcción',
    emoji: '🙂🔨',
    percentage: 'Nivel de autoestima: 60%',
    description: 'Tu autoestima es estable pero tiene espacio para crecer. Te valoras pero a veces dudas de ti mismo. Esto es normal, todos pasamos por momentos de inseguridad.',
    characteristics: ['Generalmente seguro', 'Algunos días de duda', 'Busca aprobación a veces', 'Funcional', 'En proceso'],
    advice: 'Trabaja en reconocer tus logros y cualidades. Haz una lista de lo que te gusta de ti y revísala cuando dudes.',
  },
  baja: {
    type: 'baja',
    title: 'Autoestima Baja - Necesitas Quererte Más',
    emoji: '😔💔',
    percentage: 'Nivel de autoestima: 30%',
    description: 'Tu autoestima está afectando tu bienestar. Eres muy duro contigo mismo y te cuesta reconocer tu valor. Mereces tratarte con más amor y compasión.',
    characteristics: ['Autocrítico', 'Inseguro', 'Busca aprobación constante', 'Se compara mucho', 'Duda de sí mismo'],
    advice: 'Empieza a hablarte como le hablarías a tu mejor amigo. Considera buscar ayuda profesional para trabajar en tu autoestima.',
  },
  muy_baja: {
    type: 'muy_baja',
    title: 'Autoestima Muy Baja - Necesitas Apoyo',
    emoji: '😢🆘',
    percentage: 'Nivel de autoestima: 10%',
    description: 'Tu autoestima está muy lastimada y probablemente estás sufriendo mucho. Mereces sentirte mejor y hay ayuda disponible. No tienes que seguir sintiéndote así.',
    characteristics: ['Autodesprecio', 'Aislamiento', 'Sentimientos de inutilidad', 'Dificultad para funcionar', 'Tristeza profunda'],
    advice: 'Por favor busca ayuda profesional. Un psicólogo puede ayudarte a sanar y a descubrir lo valioso que realmente eres.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { alta: 0, moderada: 0, baja: 0, muy_baja: 0 };

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
