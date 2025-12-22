// Test de Ética Laboral - 직업 윤리 테스트
export const questions = [
  {
    id: 1,
    text: '¿Qué haces si encuentras un error que beneficia a tu empresa pero perjudica al cliente?',
    options: [
      { text: 'Lo reporto de inmediato, el cliente no debe pagar por errores', type: 'integro' },
      { text: 'Lo comento con mi jefe y dejo que él decida', type: 'cauteloso' },
      { text: 'Si nadie se da cuenta, mejor no decir nada', type: 'flexible' },
      { text: 'Lo aprovecho, en los negocios todos hacen lo mismo', type: 'pragmatico' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas los gastos de representación de tu trabajo?',
    options: [
      { text: 'Solo gasto lo estrictamente necesario y transparento todo', type: 'integro' },
      { text: 'Me apego a las políticas aunque a veces son grises', type: 'cauteloso' },
      { text: 'Si hay oportunidad de estirarlos un poco, la aprovecho', type: 'flexible' },
      { text: 'Todos lo hacen, es parte de los beneficios del puesto', type: 'pragmatico' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando un compañero te pide que cubras algo indebido?',
    options: [
      { text: 'Me niego, no voy a comprometerme por nadie', type: 'integro' },
      { text: 'Depende de qué tan grave sea y quién me lo pida', type: 'cauteloso' },
      { text: 'Le ayudo si es algo menor y somos cuates', type: 'flexible' },
      { text: 'Hoy por ti, mañana por mí, así funcionan las cosas', type: 'pragmatico' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo utilizas los recursos de la empresa (papelería, impresiones, etc.)?',
    options: [
      { text: 'Solo para cosas del trabajo, nunca para uso personal', type: 'integro' },
      { text: 'Casi siempre para trabajo, con excepciones mínimas', type: 'cauteloso' },
      { text: 'A veces uso cosas para mí, todos lo hacen', type: 'flexible' },
      { text: 'Es parte de lo que la empresa me debe por mi trabajo', type: 'pragmatico' },
    ],
  },
  {
    id: 5,
    text: '¿Qué piensas sobre reportar a un compañero que hace algo indebido?',
    options: [
      { text: 'Es mi responsabilidad reportarlo, por el bien de todos', type: 'integro' },
      { text: 'Solo si es algo grave que afecta a muchos', type: 'cauteloso' },
      { text: 'Prefiero hablar primero con él antes de reportar', type: 'flexible' },
      { text: 'No soy soplón, cada quien sus broncas', type: 'pragmatico' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas información confidencial de tu trabajo?',
    options: [
      { text: 'Nunca la comparto, ni con mi familia más cercana', type: 'integro' },
      { text: 'La cuido mucho aunque a veces comento cosas generales', type: 'cauteloso' },
      { text: 'A veces platico cosas con amigos de confianza', type: 'flexible' },
      { text: 'Si me beneficia compartirla, lo hago discretamente', type: 'pragmatico' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces con las horas de trabajo?',
    options: [
      { text: 'Trabajo mis horas completas y productivas', type: 'integro' },
      { text: 'La mayoría del tiempo trabajo, con pequeños breaks', type: 'cauteloso' },
      { text: 'A veces me distraigo más de la cuenta pero cumplo', type: 'flexible' },
      { text: 'Hago lo mínimo necesario, me pagan por resultados', type: 'pragmatico' },
    ],
  },
  {
    id: 8,
    text: '¿Qué opinas de dar o recibir "mordidas" para agilizar trámites?',
    options: [
      { text: 'Nunca, es corrupción sin importar el monto', type: 'integro' },
      { text: 'En teoría está mal, pero entiendo que a veces no hay de otra', type: 'cauteloso' },
      { text: 'Si es algo menor para agilizar, no veo el problema', type: 'flexible' },
      { text: 'Es parte de cómo funcionan las cosas en México', type: 'pragmatico' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo reaccionas si te ofrecen un ascenso pero sabes que otro lo merece más?',
    options: [
      { text: 'Hablo con mi jefe sobre quién realmente lo merece', type: 'integro' },
      { text: 'Lo acepto pero recomiendo al otro para futuras oportunidades', type: 'cauteloso' },
      { text: 'Lo acepto, él tendría que luchar por lo suyo', type: 'flexible' },
      { text: 'Lo acepto sin dudarlo, cada quien vela por sí mismo', type: 'pragmatico' },
    ],
  },
  {
    id: 10,
    text: '¿Qué haces si te das cuenta que tu empresa hace algo ilegal?',
    options: [
      { text: 'Lo denuncio aunque me cueste el trabajo', type: 'integro' },
      { text: 'Busco la manera de alejarme de eso sin hacer ruido', type: 'cauteloso' },
      { text: 'No es mi bronca mientras no me involucren directamente', type: 'flexible' },
      { text: 'Si me conviene seguir ahí, me hago de la vista gorda', type: 'pragmatico' },
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
  integro: {
    type: 'integro',
    title: 'Ética Intachable',
    emoji: '⭐🛡️',
    percentage: 'Integridad laboral: 95%',
    description: 'Eres de los pocos que mantiene sus valores sin importar las circunstancias. No te doblas ante la presión y prefieres perder oportunidades antes que comprometer tu integridad. Eres un ejemplo a seguir.',
    characteristics: ['Valores inquebrantables', 'Transparencia total', 'No cede ante presiones', 'Confiable al 100%', 'Principios sobre conveniencia'],
    advice: 'Tu integridad es admirable pero cuida no ser inflexible o juzgar muy duro a otros. A veces la vida pone a la gente en situaciones difíciles.',
  },
  cauteloso: {
    type: 'cauteloso',
    title: 'Ética Cautelosa',
    emoji: '⚖️🤔',
    percentage: 'Integridad laboral: 75%',
    description: 'Tienes buenos valores pero reconoces que la vida no siempre es blanco y negro. Buscas hacer lo correcto mientras navegas las complejidades del mundo laboral. Equilibras principios con realidad.',
    characteristics: ['Valores con flexibilidad', 'Evalúa cada situación', 'Busca el bien común', 'Pragmático cuando necesario', 'Protege su posición'],
    advice: 'Tu equilibrio es valioso pero no dejes que las "excepciones" se vuelvan la regla. Define qué líneas nunca cruzarás.',
  },
  flexible: {
    type: 'flexible',
    title: 'Ética Flexible',
    emoji: '🌊🎭',
    percentage: 'Integridad laboral: 50%',
    description: 'Te adaptas a las circunstancias y no eres muy rígido con las reglas. Crees que hay formas de hacer las cosas que funcionan mejor que seguir todo al pie de la letra. El contexto importa.',
    characteristics: ['Se adapta al contexto', 'Reglas como guías', 'Prioriza resultados', 'Lealtad selectiva', 'Zona gris cómoda'],
    advice: 'Cuidado con normalizar conductas cuestionables. Lo que parece pequeño puede crecer. Revisa tus límites antes de que sea tarde.',
  },
  pragmatico: {
    type: 'pragmatico',
    title: 'Ética Pragmática',
    emoji: '💼🔧',
    percentage: 'Integridad laboral: 30%',
    description: 'Para ti, lo que importa son los resultados. Las reglas son obstáculos a navegar y en el mundo de los negocios "todos lo hacen". Priorizas tu beneficio y el de los tuyos sobre códigos abstractos.',
    characteristics: ['Resultados sobre procesos', 'Reglas como obstáculos', 'Beneficio personal primero', 'Justifica medios por fines', 'Mentalidad competitiva'],
    advice: 'La ética no es un lujo, es protección. Las conductas que hoy justificas pueden costarte caro mañana. Piensa en las consecuencias a largo plazo.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { integro: 0, cauteloso: 0, flexible: 0, pragmatico: 0 };

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
