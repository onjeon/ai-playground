// Test de Nivel de Paciencia - 인내심 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas cuando el internet está muy lento?',
    options: [
      { text: 'Espero tranquilo, hago otra cosa mientras', type: 'muy_paciente' },
      { text: 'Me desespero un poco pero aguanto', type: 'paciente' },
      { text: 'Me irrita bastante', type: 'impaciente' },
      { text: 'Me enojo mucho, quiero tirar la computadora', type: 'muy_impaciente' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces cuando alguien habla muy lento?',
    options: [
      { text: 'Lo escucho con calma, cada quien tiene su ritmo', type: 'muy_paciente' },
      { text: 'A veces me desespero pero lo disimulo', type: 'paciente' },
      { text: 'Frecuentemente quiero completar sus frases', type: 'impaciente' },
      { text: 'No aguanto, lo interrumpo', type: 'muy_impaciente' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes cuando enseñas algo y la persona no entiende?',
    options: [
      { text: 'Le explico de diferentes formas con paciencia', type: 'muy_paciente' },
      { text: 'Repito pero me cuesta un poco', type: 'paciente' },
      { text: 'Me frustra tener que repetir mucho', type: 'impaciente' },
      { text: 'Pierdo la paciencia rápidamente', type: 'muy_impaciente' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tal manejas el tráfico pesado en la ciudad?',
    options: [
      { text: 'Pongo música o podcast y disfruto el momento', type: 'muy_paciente' },
      { text: 'Me desespero un poco pero lo tolero', type: 'paciente' },
      { text: 'Me pongo de mal humor', type: 'impaciente' },
      { text: 'Grito a otros conductores, me estreso mucho', type: 'muy_impaciente' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo esperas cuando tu comida tarda en llegar al restaurante?',
    options: [
      { text: 'Platico y disfruto la espera', type: 'muy_paciente' },
      { text: 'Espero pero voy mirando la hora', type: 'paciente' },
      { text: 'Empiezo a molestarme visiblemente', type: 'impaciente' },
      { text: 'Llamo al mesero varias veces, me desespero', type: 'muy_impaciente' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan bien manejas esperar resultados importantes?',
    options: [
      { text: 'Confío en que llegará cuando deba llegar', type: 'muy_paciente' },
      { text: 'Me pone ansioso pero lo manejo', type: 'paciente' },
      { text: 'Me cuesta mucho, reviso constantemente', type: 'impaciente' },
      { text: 'No puedo con la espera, me consume', type: 'muy_impaciente' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas cuando un niño hace muchas preguntas?',
    options: [
      { text: 'Me encanta, respondo todas con gusto', type: 'muy_paciente' },
      { text: 'Respondo pero a veces me canso', type: 'paciente' },
      { text: 'Me agota, busco pretextos para no responder', type: 'impaciente' },
      { text: 'Pierdo la paciencia y lo callo', type: 'muy_impaciente' },
    ],
  },
  {
    id: 8,
    text: '¿Qué haces cuando las cosas no salen a la primera?',
    options: [
      { text: 'Intento de nuevo sin frustrarme', type: 'muy_paciente' },
      { text: 'Lo intento pero me va costando más', type: 'paciente' },
      { text: 'Me frustro y me cuesta seguir intentando', type: 'impaciente' },
      { text: 'Me rindo rápido o me enojo', type: 'muy_impaciente' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas las largas filas del banco o supermercado?',
    options: [
      { text: 'Sin problema, aprovecho para revisar algo', type: 'muy_paciente' },
      { text: 'Me desespero un poco pero aguanto', type: 'paciente' },
      { text: 'Me pongo de mal humor visiblemente', type: 'impaciente' },
      { text: 'No aguanto, busco otra opción o me voy', type: 'muy_impaciente' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan paciente eres con tus propios errores?',
    options: [
      { text: 'Muy paciente, es parte de aprender', type: 'muy_paciente' },
      { text: 'Generalmente tolerante conmigo', type: 'paciente' },
      { text: 'Me frustro bastante con mis errores', type: 'impaciente' },
      { text: 'Soy muy duro conmigo, no me perdono', type: 'muy_impaciente' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te va cuando tienes que esperar a que alguien llegue?',
    options: [
      { text: 'Sin problema, disfruto el momento', type: 'muy_paciente' },
      { text: 'Espero pero voy viendo la hora', type: 'paciente' },
      { text: 'Me desespero y le mando mensajes', type: 'impaciente' },
      { text: 'Me enojo mucho, no tolero la impuntualidad', type: 'muy_impaciente' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirías tu paciencia en general?',
    options: [
      { text: 'Muy alta, casi nada me desespera', type: 'muy_paciente' },
      { text: 'Normal, tengo buena paciencia', type: 'paciente' },
      { text: 'Poca, me desespero seguido', type: 'impaciente' },
      { text: 'Muy poca, pierdo la paciencia fácilmente', type: 'muy_impaciente' },
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
  muy_paciente: {
    type: 'muy_paciente',
    title: 'Paciencia de Santo',
    emoji: '🧘‍♀️✨',
    percentage: 'Nivel de paciencia: 95%',
    description: '¡Impresionante! Tienes una paciencia extraordinaria. Pocas cosas logran sacarte de tu centro. Sabes esperar, tolerar y mantener la calma en situaciones que desesperarían a otros.',
    characteristics: ['Extremadamente paciente', 'Tolerante', 'Calma bajo presión', 'Buenos para enseñar', 'Zen total'],
    advice: 'Tu paciencia es un don. Úsala para ayudar a otros y enseñar con tu ejemplo. Eres un modelo a seguir.',
  },
  paciente: {
    type: 'paciente',
    title: 'Paciencia Saludable',
    emoji: '😌👍',
    percentage: 'Nivel de paciencia: 70%',
    description: 'Tienes una buena paciencia. Sabes esperar y tolerar las situaciones difíciles, aunque a veces te cueste un poco. Tu nivel de paciencia es saludable y funcional.',
    characteristics: ['Paciente en general', 'Algunas cosas le cuestan', 'Tolera bien', 'Se recupera rápido', 'Funcional'],
    advice: 'Vas muy bien. Sigue practicando la paciencia y recuerda que respirar profundo siempre ayuda.',
  },
  impaciente: {
    type: 'impaciente',
    title: 'Paciencia Limitada',
    emoji: '😤⏰',
    percentage: 'Nivel de paciencia: 35%',
    description: 'Tu paciencia es limitada y te desesperas con facilidad. Esto puede afectar tu bienestar y tus relaciones. La buena noticia es que la paciencia se puede desarrollar.',
    characteristics: ['Se desespera fácil', 'Baja tolerancia', 'Reacciones impulsivas', 'Estrés frecuente', 'Necesita herramientas'],
    advice: 'Practica técnicas de respiración y mindfulness. La paciencia es un músculo que se puede entrenar.',
  },
  muy_impaciente: {
    type: 'muy_impaciente',
    title: 'Cero Paciencia',
    emoji: '🌋😡',
    percentage: 'Nivel de paciencia: 10%',
    description: 'Tu nivel de paciencia es muy bajo y probablemente te causa problemas frecuentemente. La falta de paciencia puede afectar tu salud, trabajo y relaciones.',
    characteristics: ['Se desespera muy rápido', 'Explosiones frecuentes', 'Poca tolerancia', 'Afecta relaciones', 'Necesita apoyo'],
    advice: 'Es importante trabajar en tu paciencia. Considera terapia para manejar la frustración y técnicas de relajación.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { muy_paciente: 0, paciente: 0, impaciente: 0, muy_impaciente: 0 };

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
