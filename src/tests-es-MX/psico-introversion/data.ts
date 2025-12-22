// Test de Introversión/Extroversión - 내향/외향 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo recargas tu energía después de una semana agotadora?',
    options: [
      { text: 'En casa tranquilo/a, leyendo o viendo algo', type: 'introvertido' },
      { text: 'Depende, a veces solo/a, a veces con gente', type: 'ambivertido' },
      { text: 'Saliendo con amigos a divertirme', type: 'extrovertido' },
      { text: 'En una fiesta o evento social', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes en fiestas con mucha gente?',
    options: [
      { text: 'Incómodo/a, prefiero irme pronto', type: 'introvertido' },
      { text: 'Bien por un rato, pero me canso', type: 'ambivertido' },
      { text: 'Muy bien, me encanta socializar', type: 'extrovertido' },
      { text: 'En mi elemento, soy el alma de la fiesta', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 3,
    text: '¿Cuántos amigos cercanos tienes?',
    options: [
      { text: 'Pocos pero muy cercanos', type: 'introvertido' },
      { text: 'Un grupo moderado', type: 'ambivertido' },
      { text: 'Bastantes amigos', type: 'extrovertido' },
      { text: 'Muchos, conozco a todo el mundo', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 4,
    text: '¿Qué prefieres un viernes por la noche?',
    options: [
      { text: 'Netflix y tranquilidad en casa', type: 'introvertido' },
      { text: 'Una cena tranquila con amigos cercanos', type: 'ambivertido' },
      { text: 'Ir a un bar o restaurante animado', type: 'extrovertido' },
      { text: 'Un antro o fiesta grande', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo procesas tus pensamientos?',
    options: [
      { text: 'Internamente, necesito tiempo para pensar', type: 'introvertido' },
      { text: 'A veces solo/a, a veces platicando', type: 'ambivertido' },
      { text: 'Hablando con otros me ayuda a pensar', type: 'extrovertido' },
      { text: 'Siempre pensando en voz alta con gente', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan cómodo/a te sientes siendo el centro de atención?',
    options: [
      { text: 'Muy incómodo/a, lo evito', type: 'introvertido' },
      { text: 'Depende de la situación', type: 'ambivertido' },
      { text: 'Bastante cómodo/a', type: 'extrovertido' },
      { text: 'Me encanta, lo disfruto mucho', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo inicias conversaciones con desconocidos?',
    options: [
      { text: 'Me cuesta mucho, prefiero no hacerlo', type: 'introvertido' },
      { text: 'Puedo pero no es mi fuerte', type: 'ambivertido' },
      { text: 'Con facilidad, me gusta conocer gente', type: 'extrovertido' },
      { text: 'Naturalmente, hablo con cualquiera', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 8,
    text: '¿Cuánto tiempo necesitas a solas?',
    options: [
      { text: 'Mucho, lo necesito para funcionar', type: 'introvertido' },
      { text: 'Un balance, ni mucho ni poco', type: 'ambivertido' },
      { text: 'Poco, prefiero estar acompañado/a', type: 'extrovertido' },
      { text: 'Casi nada, me aburre la soledad', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes después de socializar mucho tiempo?',
    options: [
      { text: 'Agotado/a, necesito recuperarme solo/a', type: 'introvertido' },
      { text: 'Un poco cansado/a pero bien', type: 'ambivertido' },
      { text: 'Energizado/a, me recarga', type: 'extrovertido' },
      { text: 'Súper energizado/a, quiero más', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo prefieres trabajar?',
    options: [
      { text: 'Solo/a, en silencio y concentrado/a', type: 'introvertido' },
      { text: 'Un balance de solo/a y en equipo', type: 'ambivertido' },
      { text: 'En equipo, me motiva la colaboración', type: 'extrovertido' },
      { text: 'Siempre rodeado/a de gente', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan rápido respondes mensajes y llamadas?',
    options: [
      { text: 'Me tomo mi tiempo, a veces los ignoro', type: 'introvertido' },
      { text: 'Depende de quién sea', type: 'ambivertido' },
      { text: 'Bastante rápido', type: 'extrovertido' },
      { text: 'Inmediatamente, siempre estoy disponible', type: 'muy_extrovertido' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu personalidad social?',
    options: [
      { text: 'Introvertido/a, prefiero lo tranquilo', type: 'introvertido' },
      { text: 'Ambivertido/a, depende del día', type: 'ambivertido' },
      { text: 'Extrovertido/a, me gusta la gente', type: 'extrovertido' },
      { text: 'Muy extrovertido/a, entre más gente mejor', type: 'muy_extrovertido' },
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
  introvertido: {
    type: 'introvertido',
    title: 'Introvertido/a',
    emoji: '📚🌙',
    percentage: 'Introversión: 85%',
    description: 'Eres introvertido/a. Recargas energía en soledad, prefieres conversaciones profundas a charlas superficiales y tienes un mundo interior muy rico.',
    characteristics: ['Recarga en soledad', 'Pocos amigos cercanos', 'Reflexivo/a', 'Observador/a', 'Mundo interior rico'],
    advice: 'Tu introversión es un don. Respeta tu necesidad de tiempo a solas pero no te aísles completamente.',
  },
  ambivertido: {
    type: 'ambivertido',
    title: 'Ambivertido/a',
    emoji: '⚖️😊',
    percentage: 'Balance: 50%',
    description: 'Eres ambivertido/a, un balance entre introversión y extroversión. Te adaptas bien a diferentes situaciones sociales y sabes cuándo necesitas tiempo solo/a.',
    characteristics: ['Adaptable', 'Balance social', 'Flexible', 'Lee situaciones bien', 'Versátil'],
    advice: 'Tu flexibilidad es una fortaleza. Disfruta tu capacidad de adaptarte a diferentes contextos sociales.',
  },
  extrovertido: {
    type: 'extrovertido',
    title: 'Extrovertido/a',
    emoji: '🎉👋',
    percentage: 'Extroversión: 75%',
    description: 'Eres extrovertido/a. Recargas energía con la gente, disfrutas socializar y te sientes en tu elemento en reuniones sociales.',
    characteristics: ['Recarga con gente', 'Muchos amigos', 'Sociable', 'Expresivo/a', 'Le gusta la acción'],
    advice: 'Disfruta tu naturaleza social pero recuerda también valorar los momentos de reflexión en soledad.',
  },
  muy_extrovertido: {
    type: 'muy_extrovertido',
    title: 'Súper Extrovertido/a',
    emoji: '🌟🎊',
    percentage: 'Extroversión: 95%',
    description: 'Eres muy extrovertido/a. Eres el alma de la fiesta, conoces a todo el mundo y te energiza estar rodeado/a de personas constantemente.',
    characteristics: ['Muy sociable', 'Centro de atención', 'Energía social alta', 'Carismático/a', 'Conecta fácil'],
    advice: 'Tu energía social es contagiosa. Solo recuerda que los demás pueden necesitar más espacio que tú.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { introvertido: 0, ambivertido: 0, extrovertido: 0, muy_extrovertido: 0 };

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
