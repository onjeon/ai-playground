// Test de Sentimiento de Culpa - 죄책감 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué tan frecuentemente te sientes culpable por cosas pequeñas?',
    options: [
      { text: 'Casi nunca, lo dejo pasar', type: 'sana' },
      { text: 'A veces, pero lo supero rápido', type: 'moderada' },
      { text: 'Frecuentemente, me cuesta soltar', type: 'excesiva' },
      { text: 'Siempre, todo me genera culpa', type: 'toxica' },
    ],
  },
  {
    id: 2,
    text: '¿Te disculpas constantemente aunque no sea tu culpa?',
    options: [
      { text: 'No, solo cuando es necesario', type: 'sana' },
      { text: 'A veces por educación', type: 'moderada' },
      { text: 'Frecuentemente, por si acaso', type: 'excesiva' },
      { text: 'Todo el tiempo, me disculpo por existir', type: 'toxica' },
    ],
  },
  {
    id: 3,
    text: '¿Te cuesta decir no sin sentirte mal?',
    options: [
      { text: 'No, establezco límites sin problema', type: 'sana' },
      { text: 'A veces me cuesta un poco', type: 'moderada' },
      { text: 'Frecuentemente digo sí para evitar culpa', type: 'excesiva' },
      { text: 'Siempre digo sí aunque me afecte', type: 'toxica' },
    ],
  },
  {
    id: 4,
    text: '¿Te sientes responsable por el bienestar de todos a tu alrededor?',
    options: [
      { text: 'No, cada quien es responsable de sí mismo', type: 'sana' },
      { text: 'Un poco, con personas cercanas', type: 'moderada' },
      { text: 'Bastante, me siento mal si no están bien', type: 'excesiva' },
      { text: 'Totalmente, su sufrimiento es mi culpa', type: 'toxica' },
    ],
  },
  {
    id: 5,
    text: '¿Te castigas mentalmente por errores del pasado?',
    options: [
      { text: 'No, aprendo y sigo adelante', type: 'sana' },
      { text: 'A veces los recuerdo pero los supero', type: 'moderada' },
      { text: 'Frecuentemente vuelvo a ellos', type: 'excesiva' },
      { text: 'Constantemente, no puedo perdonarme', type: 'toxica' },
    ],
  },
  {
    id: 6,
    text: '¿Te sientes culpable cuando te va bien y a otros no?',
    options: [
      { text: 'No, merezco mis logros', type: 'sana' },
      { text: 'Un poco incómodo/a a veces', type: 'moderada' },
      { text: 'Sí, siento que no lo merezco', type: 'excesiva' },
      { text: 'Mucho, el éxito me genera culpa', type: 'toxica' },
    ],
  },
  {
    id: 7,
    text: '¿Sientes que decepciones a otros constantemente?',
    options: [
      { text: 'No, hago lo que puedo', type: 'sana' },
      { text: 'A veces lo pienso', type: 'moderada' },
      { text: 'Frecuentemente me siento así', type: 'excesiva' },
      { text: 'Siempre, nunca soy suficiente', type: 'toxica' },
    ],
  },
  {
    id: 8,
    text: '¿Te cuesta disfrutar porque piensas en lo que deberías estar haciendo?',
    options: [
      { text: 'No, disfruto mis momentos libres', type: 'sana' },
      { text: 'A veces me cuesta desconectar', type: 'moderada' },
      { text: 'Frecuentemente me siento culpable por descansar', type: 'excesiva' },
      { text: 'Siempre, no puedo disfrutar nada', type: 'toxica' },
    ],
  },
  {
    id: 9,
    text: '¿Te sientes mal cuando priorizas tus necesidades?',
    options: [
      { text: 'No, es importante cuidarme', type: 'sana' },
      { text: 'A veces pienso que soy egoísta', type: 'moderada' },
      { text: 'Frecuentemente, me siento culpable', type: 'excesiva' },
      { text: 'Siempre, poner mis necesidades primero es egoísmo', type: 'toxica' },
    ],
  },
  {
    id: 10,
    text: '¿Asumes la culpa en conflictos para evitar problemas?',
    options: [
      { text: 'No, analizo quién tiene responsabilidad', type: 'sana' },
      { text: 'A veces cedo para mantener la paz', type: 'moderada' },
      { text: 'Frecuentemente asumo la culpa', type: 'excesiva' },
      { text: 'Siempre es mi culpa, aunque no lo sea', type: 'toxica' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te sientes respecto a decisiones pasadas?',
    options: [
      { text: 'En paz, hice lo mejor que pude', type: 'sana' },
      { text: 'Algunas las cuestiono pero lo acepto', type: 'moderada' },
      { text: 'Frecuentemente me arrepiento', type: 'excesiva' },
      { text: 'Me torturo por mis decisiones', type: 'toxica' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu relación con la culpa?',
    options: [
      { text: 'Saludable, la siento cuando es apropiado', type: 'sana' },
      { text: 'Normal, con algunas culpas ocasionales', type: 'moderada' },
      { text: 'Complicada, me siento culpable frecuentemente', type: 'excesiva' },
      { text: 'Tormentosa, la culpa me consume', type: 'toxica' },
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
  sana: {
    type: 'sana',
    title: 'Culpa Saludable',
    emoji: '💚✨',
    percentage: 'Culpa excesiva: 10%',
    description: 'Tienes una relación saludable con la culpa. La sientes cuando es apropiado pero no dejas que te controle. Puedes establecer límites y priorizarte sin sentirte mal.',
    characteristics: ['Límites claros', 'Se perdona a sí mismo/a', 'No carga culpa ajena', 'Disfruta sin culpa', 'Autocompasivo/a'],
    advice: 'Tu relación con la culpa es muy sana. Sigue manteniendo este equilibrio.',
  },
  moderada: {
    type: 'moderada',
    title: 'Culpa Moderada',
    emoji: '💛🔄',
    percentage: 'Culpa excesiva: 35%',
    description: 'Tienes algunos patrones de culpa que podrían trabajarse, pero en general manejas bien este sentimiento. A veces te cuesta priorizar tus necesidades.',
    characteristics: ['Culpa ocasional', 'A veces se disculpa de más', 'Le cuesta decir no', 'Generalmente se perdona', 'Espacio para mejorar'],
    advice: 'Vas bien. Practica la autocompasión y recuerda que priorizarte no es egoísmo.',
  },
  excesiva: {
    type: 'excesiva',
    title: 'Culpa Excesiva',
    emoji: '🟠😔',
    percentage: 'Culpa excesiva: 70%',
    description: 'Cargas demasiada culpa que no te corresponde. Esto puede venir de la educación o experiencias pasadas. Te cuesta ponerte primero y disfrutar.',
    characteristics: ['Se disculpa de más', 'Carga culpa ajena', 'Dificultad con límites', 'No disfruta sin culpa', 'Se castiga mucho'],
    advice: 'Trabaja en reconocer qué culpas son tuyas y cuáles no. La terapia puede ayudarte mucho con esto.',
  },
  toxica: {
    type: 'toxica',
    title: 'Culpa Tóxica',
    emoji: '🔴😢',
    percentage: 'Culpa excesiva: 95%',
    description: 'Tu nivel de culpa es tóxico y probablemente te está causando mucho sufrimiento. Cargas responsabilidades que no son tuyas y te castigas constantemente.',
    characteristics: ['Culpa constante', 'Se culpa de todo', 'No puede disfrutar nada', 'Autocastigo severo', 'Necesita ayuda'],
    advice: 'Es muy importante que busques ayuda profesional. Este nivel de culpa no es normal ni necesario y se puede trabajar.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { sana: 0, moderada: 0, excesiva: 0, toxica: 0 };

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
