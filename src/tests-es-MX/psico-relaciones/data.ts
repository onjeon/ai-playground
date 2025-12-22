// Test de Psicología en Relaciones - 관계 심리 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo te comunicas cuando hay un problema en la relación?',
    options: [
      { text: 'Hablo abiertamente sobre lo que siento', type: 'comunicativo' },
      { text: 'Me cuesta, pero eventualmente hablo', type: 'reservado' },
      { text: 'Evito el conflicto, espero que pase', type: 'evitador' },
      { text: 'Me cierro o reacciono emocionalmente', type: 'reactivo' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan cómodo estás expresando tus necesidades?',
    options: [
      { text: 'Muy cómodo, las expreso claramente', type: 'comunicativo' },
      { text: 'A veces me cuesta pero lo intento', type: 'reservado' },
      { text: 'Espero que adivinen lo que necesito', type: 'evitador' },
      { text: 'Me frustro cuando no me entienden', type: 'reactivo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas ante los celos?',
    options: [
      { text: 'Los reconozco y hablo sobre ellos', type: 'comunicativo' },
      { text: 'Los siento pero trato de controlarlos', type: 'reservado' },
      { text: 'Finjo que no me afecta', type: 'evitador' },
      { text: 'Me pueden dominar y reacciono mal', type: 'reactivo' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces cuando tu pareja te decepciona?',
    options: [
      { text: 'Se lo expreso y buscamos solución', type: 'comunicativo' },
      { text: 'Me tomo tiempo para procesarlo', type: 'reservado' },
      { text: 'Lo guardo y sigo como si nada', type: 'evitador' },
      { text: 'Me enojo y puede haber discusión fuerte', type: 'reactivo' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas los desacuerdos?',
    options: [
      { text: 'Busco un punto medio, negociamos', type: 'comunicativo' },
      { text: 'Cedo para evitar conflicto', type: 'reservado' },
      { text: 'Evito tocar el tema', type: 'evitador' },
      { text: 'Insisto en mi punto hasta convencer', type: 'reactivo' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan importante es el espacio personal para ti?',
    options: [
      { text: 'Importante, pero equilibrado con tiempo juntos', type: 'comunicativo' },
      { text: 'Necesito bastante espacio', type: 'reservado' },
      { text: 'No me gusta estar solo/a', type: 'evitador' },
      { text: 'A veces necesito mucho, a veces nada', type: 'reactivo' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo expresas el amor a tu pareja?',
    options: [
      { text: 'Con palabras, acciones y tiempo de calidad', type: 'comunicativo' },
      { text: 'Más con acciones que con palabras', type: 'reservado' },
      { text: 'Asumo que lo sabe, no necesito decirlo', type: 'evitador' },
      { text: 'Intensamente cuando estoy bien, poco cuando estoy mal', type: 'reactivo' },
    ],
  },
  {
    id: 8,
    text: '¿Qué haces cuando cometes un error en la relación?',
    options: [
      { text: 'Me disculpo sinceramente y busco reparar', type: 'comunicativo' },
      { text: 'Me cuesta pero pido perdón', type: 'reservado' },
      { text: 'Espero que se olvide con el tiempo', type: 'evitador' },
      { text: 'Me pongo a la defensiva primero', type: 'reactivo' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes con el compromiso a largo plazo?',
    options: [
      { text: 'Cómodo si la relación es sana', type: 'comunicativo' },
      { text: 'Necesito ir paso a paso', type: 'reservado' },
      { text: 'Me asusta perder mi libertad', type: 'evitador' },
      { text: 'Lo quiero pero me genera ansiedad', type: 'reactivo' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan importante es la vida social fuera de la relación?',
    options: [
      { text: 'Muy importante, ambos necesitamos amigos', type: 'comunicativo' },
      { text: 'Importante para mí, respeto su espacio', type: 'reservado' },
      { text: 'Prefiero que pasemos tiempo juntos', type: 'evitador' },
      { text: 'Me molesta cuando sale sin mí', type: 'reactivo' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo manejas las críticas de tu pareja?',
    options: [
      { text: 'Las escucho y reflexiono si son válidas', type: 'comunicativo' },
      { text: 'Me duelen pero trato de entender', type: 'reservado' },
      { text: 'Las ignoro, no me gustan los conflictos', type: 'evitador' },
      { text: 'Me pongo a la defensiva o contraataco', type: 'reactivo' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu estilo en las relaciones?',
    options: [
      { text: 'Abierto, comunicativo y colaborativo', type: 'comunicativo' },
      { text: 'Tranquilo, necesito mi espacio', type: 'reservado' },
      { text: 'Evito conflictos, busco paz', type: 'evitador' },
      { text: 'Intenso, con altibajos emocionales', type: 'reactivo' },
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
  comunicativo: {
    type: 'comunicativo',
    title: 'El Comunicador Saludable',
    emoji: '💬💚',
    percentage: 'Estilo: Comunicativo',
    description: 'Tienes un estilo de relación muy saludable. Te comunicas abiertamente, expresas tus necesidades y sabes manejar los conflictos de forma constructiva.',
    characteristics: ['Comunicación abierta', 'Maneja conflictos bien', 'Expresa necesidades', 'Equilibrado', 'Relaciones estables'],
    advice: 'Tu estilo es muy saludable. Sigue cultivando estas cualidades y busca parejas con estilos similares.',
  },
  reservado: {
    type: 'reservado',
    title: 'El Reservado Cauteloso',
    emoji: '🤫🐢',
    percentage: 'Estilo: Reservado',
    description: 'Eres más reservado en tus relaciones. Te cuesta un poco abrirte y expresar tus emociones, pero cuando lo haces eres sincero. Valoras tu espacio personal.',
    characteristics: ['Cauteloso', 'Valora el espacio', 'Acciones sobre palabras', 'Se abre lentamente', 'Leal cuando confía'],
    advice: 'Trabaja en abrirte más con tu pareja. La comunicación es clave para relaciones profundas y duraderas.',
  },
  evitador: {
    type: 'evitador',
    title: 'El Evitador de Conflictos',
    emoji: '🙈🕊️',
    percentage: 'Estilo: Evitador',
    description: 'Tiendes a evitar conflictos y guardar tus sentimientos. Esto puede parecer que mantienes la paz, pero puede generar problemas a largo plazo.',
    characteristics: ['Evita conflictos', 'Guarda sentimientos', 'Busca paz superficial', 'Dificultad para expresarse', 'Puede acumular resentimiento'],
    advice: 'Los conflictos evitados no desaparecen. Aprende a comunicarte asertivamente para tener relaciones más auténticas.',
  },
  reactivo: {
    type: 'reactivo',
    title: 'El Reactivo Emocional',
    emoji: '🌊😤',
    percentage: 'Estilo: Reactivo',
    description: 'Tus emociones son intensas y a veces te dominan en las relaciones. Puedes tener reacciones fuertes que después lamentas.',
    characteristics: ['Emociones intensas', 'Reacciones impulsivas', 'Altibajos', 'Pasional', 'Puede ser volátil'],
    advice: 'Trabaja en regular tus emociones antes de reaccionar. La terapia puede ayudarte a tener relaciones más estables.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { comunicativo: 0, reservado: 0, evitador: 0, reactivo: 0 };

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
