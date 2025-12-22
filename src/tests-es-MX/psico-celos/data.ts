// Test de Nivel de Celos - 질투 수준 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando tu pareja habla con alguien atractivo?',
    options: [
      { text: 'Sin problema, confío en mi relación', type: 'sin_celos' },
      { text: 'Un poco incómodo/a pero lo manejo', type: 'celos_normales' },
      { text: 'Me molesta y quiero que termine la conversación', type: 'celos_altos' },
      { text: 'Me enojo mucho, no lo soporto', type: 'celos_extremos' },
    ],
  },
  {
    id: 2,
    text: '¿Revisas el celular de tu pareja?',
    options: [
      { text: 'Nunca, respeto su privacidad', type: 'sin_celos' },
      { text: 'Solo si me lo presta para algo', type: 'celos_normales' },
      { text: 'A veces cuando no está', type: 'celos_altos' },
      { text: 'Frecuentemente o siempre', type: 'celos_extremos' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas cuando tu pareja sale con amigos sin ti?',
    options: [
      { text: 'Me parece bien, tiene su vida', type: 'sin_celos' },
      { text: 'Está bien aunque a veces quisiera ir', type: 'celos_normales' },
      { text: 'Me molesta que salga sin mí', type: 'celos_altos' },
      { text: 'Le pido que no salga o discutimos', type: 'celos_extremos' },
    ],
  },
  {
    id: 4,
    text: '¿Le preguntas constantemente a tu pareja dónde está y con quién?',
    options: [
      { text: 'No, confío en ella/él', type: 'sin_celos' },
      { text: 'A veces por curiosidad', type: 'celos_normales' },
      { text: 'Frecuentemente necesito saber', type: 'celos_altos' },
      { text: 'Siempre, no puedo estar tranquilo/a sin saber', type: 'celos_extremos' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes cuando tu pareja habla de su ex?',
    options: [
      { text: 'Normal, es parte de su pasado', type: 'sin_celos' },
      { text: 'Un poco incómodo/a pero entiendo', type: 'celos_normales' },
      { text: 'Me molesta mucho que lo mencione', type: 'celos_altos' },
      { text: 'No tolero que hable de su ex', type: 'celos_extremos' },
    ],
  },
  {
    id: 6,
    text: '¿Has discutido por celos en tus relaciones?',
    options: [
      { text: 'Casi nunca o nunca', type: 'sin_celos' },
      { text: 'Pocas veces', type: 'celos_normales' },
      { text: 'Frecuentemente', type: 'celos_altos' },
      { text: 'Constantemente, es un problema serio', type: 'celos_extremos' },
    ],
  },
  {
    id: 7,
    text: '¿Te molesta que tu pareja le dé like a fotos de otras personas?',
    options: [
      { text: 'No, es normal', type: 'sin_celos' },
      { text: 'Depende de quién sea', type: 'celos_normales' },
      { text: 'Sí, me molesta bastante', type: 'celos_altos' },
      { text: 'Mucho, le he pedido que no lo haga', type: 'celos_extremos' },
    ],
  },
  {
    id: 8,
    text: '¿Has intentado alejar a tu pareja de ciertas personas?',
    options: [
      { text: 'No, respeto sus relaciones', type: 'sin_celos' },
      { text: 'Solo si esa persona es irrespetuosa', type: 'celos_normales' },
      { text: 'Sí, de personas que me dan desconfianza', type: 'celos_altos' },
      { text: 'Sí, de varias personas', type: 'celos_extremos' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan inseguro/a te sientes en tus relaciones?',
    options: [
      { text: 'Seguro/a, confío en mi pareja y en mí', type: 'sin_celos' },
      { text: 'Generalmente seguro/a', type: 'celos_normales' },
      { text: 'Frecuentemente inseguro/a', type: 'celos_altos' },
      { text: 'Muy inseguro/a, siempre temo que me dejen', type: 'celos_extremos' },
    ],
  },
  {
    id: 10,
    text: '¿Tus celos han afectado relaciones pasadas?',
    options: [
      { text: 'No, nunca han sido un problema', type: 'sin_celos' },
      { text: 'Tal vez un poco', type: 'celos_normales' },
      { text: 'Sí, han causado problemas', type: 'celos_altos' },
      { text: 'Sí, han destruido relaciones', type: 'celos_extremos' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te sientes cuando tu pareja recibe atención de otros?',
    options: [
      { text: 'Orgulloso/a, tengo una pareja atractiva', type: 'sin_celos' },
      { text: 'Normal, es inevitable', type: 'celos_normales' },
      { text: 'Incómodo/a, me pone en alerta', type: 'celos_altos' },
      { text: 'Furioso/a, no lo tolero', type: 'celos_extremos' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu nivel de celos?',
    options: [
      { text: 'Muy bajo o nulo', type: 'sin_celos' },
      { text: 'Normal, como cualquiera', type: 'celos_normales' },
      { text: 'Alto, reconozco que tengo celos', type: 'celos_altos' },
      { text: 'Muy alto, los celos me controlan', type: 'celos_extremos' },
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
  sin_celos: {
    type: 'sin_celos',
    title: 'Sin Celos - Confianza Total',
    emoji: '💚🤝',
    percentage: 'Nivel de celos: 5%',
    description: 'Tienes un nivel de celos muy bajo o nulo. Confías en tu pareja y en ti mismo/a. Esto permite relaciones sanas y libres.',
    characteristics: ['Confianza alta', 'Seguridad personal', 'Respeta privacidad', 'Relaciones libres', 'Autoestima sana'],
    advice: 'Tu confianza es admirable. Sigue cultivando esta seguridad en ti y en tus relaciones.',
  },
  celos_normales: {
    type: 'celos_normales',
    title: 'Celos Normales',
    emoji: '💛👀',
    percentage: 'Nivel de celos: 35%',
    description: 'Tienes un nivel de celos normal. A veces sientes algo de celos pero los manejas bien y no afectan tu relación.',
    characteristics: ['Celos ocasionales', 'Los controla bien', 'No afectan la relación', 'Confianza moderada', 'Funcional'],
    advice: 'Tus celos son normales. Sigue trabajando en la comunicación con tu pareja cuando sientas inseguridad.',
  },
  celos_altos: {
    type: 'celos_altos',
    title: 'Celos Elevados',
    emoji: '🟠😰',
    percentage: 'Nivel de celos: 70%',
    description: 'Tus celos están afectando tu bienestar y probablemente tu relación. Esto puede surgir de inseguridad o experiencias pasadas.',
    characteristics: ['Celos frecuentes', 'Conductas controladoras', 'Inseguridad', 'Afecta la relación', 'Necesita trabajo'],
    advice: 'Es importante trabajar en tus celos. Considera terapia para explorar el origen de esta inseguridad.',
  },
  celos_extremos: {
    type: 'celos_extremos',
    title: 'Celos Extremos - Necesitas Ayuda',
    emoji: '🔴🆘',
    percentage: 'Nivel de celos: 95%',
    description: 'Tus celos son extremos y probablemente están dañando tus relaciones y tu bienestar. Este nivel de celos no es sano ni para ti ni para tu pareja.',
    characteristics: ['Celos constantes', 'Control excesivo', 'Desconfianza total', 'Daña relaciones', 'Necesita ayuda urgente'],
    advice: 'Es muy importante que busques ayuda profesional. Los celos extremos pueden ser un signo de problemas más profundos que se pueden tratar.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sin_celos: 0, celos_normales: 0, celos_altos: 0, celos_extremos: 0 };

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
