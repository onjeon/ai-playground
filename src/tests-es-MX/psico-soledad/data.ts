// Test de Índice de Soledad - 외로움 지수 테스트
export const questions = [
  {
    id: 1,
    text: '¿Con qué frecuencia te sientes solo/a aunque estés rodeado de gente?',
    options: [
      { text: 'Casi nunca', type: 'conectado' },
      { text: 'De vez en cuando', type: 'moderado' },
      { text: 'Frecuentemente', type: 'solo' },
      { text: 'Casi siempre', type: 'muy_solo' },
    ],
  },
  {
    id: 2,
    text: '¿Tienes personas con las que puedes hablar de cosas importantes?',
    options: [
      { text: 'Sí, varias personas de confianza', type: 'conectado' },
      { text: 'Algunas, aunque pocas', type: 'moderado' },
      { text: 'Muy pocas o casi ninguna', type: 'solo' },
      { text: 'Nadie realmente', type: 'muy_solo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes los fines de semana si no tienes planes?',
    options: [
      { text: 'Bien, disfruto mi tiempo a solas', type: 'conectado' },
      { text: 'A veces me aburro un poco', type: 'moderado' },
      { text: 'Me siento solo/a y triste', type: 'solo' },
      { text: 'Me deprimo mucho', type: 'muy_solo' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan entendido/a te sientes por los demás?',
    options: [
      { text: 'Muy entendido/a, me conocen bien', type: 'conectado' },
      { text: 'Parcialmente, en algunas cosas', type: 'moderado' },
      { text: 'Poco, siento que no me entienden', type: 'solo' },
      { text: 'Nadie me entiende realmente', type: 'muy_solo' },
    ],
  },
  {
    id: 5,
    text: '¿Cuántas personas te buscan para convivir?',
    options: [
      { text: 'Varias, tengo buen círculo social', type: 'conectado' },
      { text: 'Algunas, de vez en cuando', type: 'moderado' },
      { text: 'Muy pocas, casi nadie', type: 'solo' },
      { text: 'Nadie me busca', type: 'muy_solo' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes respecto a tus relaciones actuales?',
    options: [
      { text: 'Satisfecho/a, me siento querido/a', type: 'conectado' },
      { text: 'Bien, aunque podrían ser más profundas', type: 'moderado' },
      { text: 'Insatisfecho/a, me falta conexión', type: 'solo' },
      { text: 'Muy solo/a, no tengo relaciones significativas', type: 'muy_solo' },
    ],
  },
  {
    id: 7,
    text: '¿Con qué frecuencia te sientes aislado/a de los demás?',
    options: [
      { text: 'Casi nunca', type: 'conectado' },
      { text: 'Ocasionalmente', type: 'moderado' },
      { text: 'Frecuentemente', type: 'solo' },
      { text: 'Casi siempre me siento aislado/a', type: 'muy_solo' },
    ],
  },
  {
    id: 8,
    text: '¿Tienes a quién llamar si necesitas ayuda urgente?',
    options: [
      { text: 'Sí, varias personas', type: 'conectado' },
      { text: 'Una o dos personas', type: 'moderado' },
      { text: 'No estoy seguro/a, tal vez una', type: 'solo' },
      { text: 'No tengo a nadie', type: 'muy_solo' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan fácil te resulta hacer nuevos amigos?',
    options: [
      { text: 'Fácil, conecto rápido con la gente', type: 'conectado' },
      { text: 'Normal, toma algo de tiempo', type: 'moderado' },
      { text: 'Difícil, me cuesta mucho', type: 'solo' },
      { text: 'Muy difícil, casi imposible', type: 'muy_solo' },
    ],
  },
  {
    id: 10,
    text: '¿Cuánto tiempo pasas sin hablar con alguien significativo?',
    options: [
      { text: 'Máximo un día, siempre hablo con alguien', type: 'conectado' },
      { text: 'A veces pasan varios días', type: 'moderado' },
      { text: 'Pueden pasar semanas', type: 'solo' },
      { text: 'Meses sin conexión real', type: 'muy_solo' },
    ],
  },
  {
    id: 11,
    text: '¿Sientes que perteneces a algún grupo o comunidad?',
    options: [
      { text: 'Sí, a varios grupos donde me siento parte', type: 'conectado' },
      { text: 'A algunos, aunque no tanto', type: 'moderado' },
      { text: 'A ninguno realmente', type: 'solo' },
      { text: 'Me siento excluido/a de todo', type: 'muy_solo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu nivel de soledad?',
    options: [
      { text: 'Bajo, me siento conectado/a', type: 'conectado' },
      { text: 'Normal, a veces me siento solo/a', type: 'moderado' },
      { text: 'Alto, me siento solo/a frecuentemente', type: 'solo' },
      { text: 'Muy alto, la soledad es constante', type: 'muy_solo' },
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
  conectado: {
    type: 'conectado',
    title: 'Socialmente Conectado',
    emoji: '🤗💖',
    percentage: 'Índice de soledad: 10%',
    description: 'Tienes buenas conexiones sociales y te sientes acompañado/a. Cuentas con personas de confianza y sientes que perteneces. Tu bienestar social es muy bueno.',
    characteristics: ['Buen círculo social', 'Se siente querido/a', 'Conexiones profundas', 'Pertenencia', 'Red de apoyo'],
    advice: 'Sigue cultivando estas relaciones. También ayuda a otros que puedan sentirse solos.',
  },
  moderado: {
    type: 'moderado',
    title: 'Soledad Ocasional',
    emoji: '🙂😔',
    percentage: 'Índice de soledad: 40%',
    description: 'Tienes algunas conexiones pero a veces te sientes solo/a. Es normal experimentar soledad ocasionalmente, pero podrías beneficiarte de fortalecer tus relaciones.',
    characteristics: ['Algunas conexiones', 'Soledad ocasional', 'Podría mejorar', 'Funcional socialmente', 'Espacio para crecer'],
    advice: 'Invierte más tiempo en cultivar relaciones significativas. Busca actividades donde conozcas gente nueva.',
  },
  solo: {
    type: 'solo',
    title: 'Soledad Frecuente',
    emoji: '😞🌧️',
    percentage: 'Índice de soledad: 70%',
    description: 'Te sientes solo/a con frecuencia y te faltan conexiones significativas. La soledad puede afectar tu bienestar emocional y físico. Es importante buscar formas de conectar.',
    characteristics: ['Pocas conexiones', 'Soledad frecuente', 'Falta de pertenencia', 'Aislamiento', 'Necesita apoyo'],
    advice: 'Considera unirte a grupos, tomar clases, o buscar terapia. La conexión social es fundamental para el bienestar.',
  },
  muy_solo: {
    type: 'muy_solo',
    title: 'Soledad Severa',
    emoji: '😢💔',
    percentage: 'Índice de soledad: 95%',
    description: 'Tu nivel de soledad es muy alto y probablemente está afectando mucho tu vida. No tienes que estar solo/a. Hay ayuda disponible y formas de conectar con otros.',
    characteristics: ['Aislamiento severo', 'Sin red de apoyo', 'Soledad constante', 'Afecta bienestar', 'Necesita ayuda urgente'],
    advice: 'Por favor busca ayuda profesional. Un terapeuta puede ayudarte a desarrollar conexiones y superar la soledad.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { conectado: 0, moderado: 0, solo: 0, muy_solo: 0 };

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
