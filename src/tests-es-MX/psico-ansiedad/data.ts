// Test de Nivel de Ansiedad - 불안 지수 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan seguido te preocupas por cosas que podrían pasar?',
    options: [
      { text: 'Casi nunca, vivo el presente', type: 'bajo' },
      { text: 'A veces, pero lo controlo', type: 'moderado' },
      { text: 'Frecuentemente me preocupo', type: 'alto' },
      { text: 'Todo el tiempo estoy pensando en lo peor', type: 'muy_alto' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes antes de una cita importante o entrevista?',
    options: [
      { text: 'Tranquilo y preparado', type: 'bajo' },
      { text: 'Un poco nervioso pero emocionado', type: 'moderado' },
      { text: 'Muy nervioso, me cuesta concentrarme', type: 'alto' },
      { text: 'Paralizado de miedo, quisiera cancelar', type: 'muy_alto' },
    ],
  },
  {
    id: 3,
    text: '¿Qué pasa cuando suena tu teléfono de forma inesperada?',
    options: [
      { text: 'Contesto sin problema', type: 'bajo' },
      { text: 'Me sobresalto un poco pero contesto', type: 'moderado' },
      { text: 'Me pongo nervioso, pienso que es algo malo', type: 'alto' },
      { text: 'El corazón se me acelera y temo contestar', type: 'muy_alto' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes en lugares con mucha gente?',
    options: [
      { text: 'Cómodo, me gusta socializar', type: 'bajo' },
      { text: 'Bien, aunque prefiero grupos pequeños', type: 'moderado' },
      { text: 'Incómodo, me quiero ir pronto', type: 'alto' },
      { text: 'Angustiado, siento que no puedo respirar', type: 'muy_alto' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan frecuentemente revisas que todo esté bien (cerrado, apagado, etc.)?',
    options: [
      { text: 'Una vez y listo', type: 'bajo' },
      { text: 'A veces reviso dos veces', type: 'moderado' },
      { text: 'Varias veces, necesito estar seguro', type: 'alto' },
      { text: 'Muchas veces, no puedo evitarlo', type: 'muy_alto' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes cuando alguien tarda en responder un mensaje?',
    options: [
      { text: 'Ni lo pienso, contestarán cuando puedan', type: 'bajo' },
      { text: 'Me pregunto qué pasó pero lo dejo ir', type: 'moderado' },
      { text: 'Me preocupo, pienso que hice algo mal', type: 'alto' },
      { text: 'Me angustio mucho, pienso lo peor', type: 'muy_alto' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan seguido sientes el corazón acelerado sin razón aparente?',
    options: [
      { text: 'Casi nunca', type: 'bajo' },
      { text: 'De vez en cuando', type: 'moderado' },
      { text: 'Frecuentemente', type: 'alto' },
      { text: 'Casi todos los días', type: 'muy_alto' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes cuando tienes que tomar una decisión importante?',
    options: [
      { text: 'Evalúo y decido con confianza', type: 'bajo' },
      { text: 'Me tomo mi tiempo pero decido', type: 'moderado' },
      { text: 'Me cuesta mucho, dudo demasiado', type: 'alto' },
      { text: 'Me paralizo, tengo miedo de equivocarme', type: 'muy_alto' },
    ],
  },
  {
    id: 9,
    text: '¿Qué pasa con tu mente cuando intentas dormir?',
    options: [
      { text: 'Se apaga y duermo tranquilo', type: 'bajo' },
      { text: 'Pienso un poco pero me duermo pronto', type: 'moderado' },
      { text: 'Da muchas vueltas, me cuesta dormir', type: 'alto' },
      { text: 'No puedo parar de pensar, paso horas despierto', type: 'muy_alto' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te sientes cuando algo no sale como esperabas?',
    options: [
      { text: 'Lo acepto y busco otra solución', type: 'bajo' },
      { text: 'Me frustra pero lo supero', type: 'moderado' },
      { text: 'Me angustio mucho', type: 'alto' },
      { text: 'Siento que todo está mal, me desespero', type: 'muy_alto' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan seguido evitas situaciones por miedo a lo que pueda pasar?',
    options: [
      { text: 'Casi nunca, me gusta enfrentar las cosas', type: 'bajo' },
      { text: 'A veces, depende de la situación', type: 'moderado' },
      { text: 'Frecuentemente evito cosas que me dan miedo', type: 'alto' },
      { text: 'Siempre evito todo lo que me genera ansiedad', type: 'muy_alto' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu nivel de preocupación general?',
    options: [
      { text: 'Muy bajo, fluyo con la vida', type: 'bajo' },
      { text: 'Normal, me preocupo por lo importante', type: 'moderado' },
      { text: 'Alto, me preocupo por muchas cosas', type: 'alto' },
      { text: 'Extremo, vivo preocupado constantemente', type: 'muy_alto' },
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
  bajo: {
    type: 'bajo',
    title: 'Ansiedad Baja - Mente Tranquila',
    emoji: '😊🌊',
    percentage: 'Nivel de ansiedad: 10%',
    description: 'Tienes una mente muy tranquila. No te preocupas de más y sabes vivir el presente. Tu capacidad para manejar la incertidumbre es envidiable.',
    characteristics: ['Mente clara', 'Vive el presente', 'Toma decisiones fácilmente', 'Duerme bien', 'Relajado'],
    advice: 'Sigue cultivando esa paz mental. Eres un ejemplo de cómo manejar la vida sin preocupaciones excesivas.',
  },
  moderado: {
    type: 'moderado',
    title: 'Ansiedad Moderada - Nivel Normal',
    emoji: '🙂💭',
    percentage: 'Nivel de ansiedad: 40%',
    description: 'Tu nivel de ansiedad es normal. Te preocupas por las cosas importantes pero no dejas que te controlen. Tienes un buen equilibrio emocional.',
    characteristics: ['Preocupación normal', 'Funcional', 'Se adapta bien', 'Maneja el estrés', 'Equilibrado'],
    advice: 'Estás bien. Sigue practicando técnicas de relajación para mantener este equilibrio saludable.',
  },
  alto: {
    type: 'alto',
    title: 'Ansiedad Alta - Mente Inquieta',
    emoji: '😟⚡',
    percentage: 'Nivel de ansiedad: 70%',
    description: 'Tu ansiedad está afectando tu calidad de vida. Te preocupas demasiado y te cuesta relajarte. Es momento de buscar formas de calmar tu mente.',
    characteristics: ['Preocupación excesiva', 'Nerviosismo frecuente', 'Dificultad para relajarse', 'Mente acelerada', 'Evita situaciones'],
    advice: 'Considera técnicas de respiración, meditación o ejercicio. Si no mejora, busca ayuda profesional.',
  },
  muy_alto: {
    type: 'muy_alto',
    title: 'Ansiedad Muy Alta - Necesitas Apoyo',
    emoji: '😰🆘',
    percentage: 'Nivel de ansiedad: 90%',
    description: 'Tu nivel de ansiedad es muy alto y probablemente está afectando muchas áreas de tu vida. No tienes que vivir así. Hay ayuda disponible.',
    characteristics: ['Angustia constante', 'Ataques de ansiedad', 'Evitación severa', 'Problemas físicos', 'Interferencia con vida diaria'],
    advice: 'Es importante que busques ayuda profesional. Un psicólogo o psiquiatra puede ayudarte a sentirte mejor.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { bajo: 0, moderado: 0, alto: 0, muy_alto: 0 };

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
