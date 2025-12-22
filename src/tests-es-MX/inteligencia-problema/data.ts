// Test de Resolución de Problemas - 문제 해결 스타일 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo enfrentas un problema en tu trabajo cuando no hay solución obvia?',
    options: [
      { text: 'Analizo todas las opciones paso a paso', type: 'analitico' },
      { text: 'Confío en mi intuición y actúo rápido', type: 'intuitivo' },
      { text: 'Pido opiniones a varios colegas', type: 'colaborativo' },
      { text: 'Busco soluciones creativas fuera de lo común', type: 'creativo' },
    ],
  },
  {
    id: 2,
    text: '¿Qué haces cuando tu carro se descompone a medio camino?',
    options: [
      { text: 'Checo el manual y trato de identificar la falla', type: 'analitico' },
      { text: 'Llamo a un conocido que sabe de mecánica', type: 'colaborativo' },
      { text: 'Busco una solución improvisada para llegar al taller', type: 'creativo' },
      { text: 'Evalúo rápidamente si puedo seguir o mejor paro', type: 'intuitivo' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo organizas una fiesta familiar cuando el presupuesto está limitado?',
    options: [
      { text: 'Hago una lista detallada de gastos y priorizo', type: 'analitico' },
      { text: 'Organizo una cooperacha entre todos', type: 'colaborativo' },
      { text: 'Busco alternativas creativas para ahorrar', type: 'creativo' },
      { text: 'Decido en el momento qué vale la pena gastar', type: 'intuitivo' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces cuando dos amigos se pelean y te piden intervenir?',
    options: [
      { text: 'Escucho ambos lados y analizo quién tiene razón', type: 'analitico' },
      { text: 'Los junto para que hablen y encuentren solución juntos', type: 'colaborativo' },
      { text: 'Sigo mi instinto sobre cómo calmar las aguas', type: 'intuitivo' },
      { text: 'Propongo una actividad divertida para que se olviden del tema', type: 'creativo' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo resuelves un platillo que salió mal en la cocina?',
    options: [
      { text: 'Identifico qué salió mal y lo corrijo paso a paso', type: 'analitico' },
      { text: 'Improviso ingredientes para salvar el sabor', type: 'creativo' },
      { text: 'Llamo a mi mamá o abuela para que me asesore', type: 'colaborativo' },
      { text: 'Pruebo y ajusto según mi paladar', type: 'intuitivo' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo planeas las vacaciones familiares?',
    options: [
      { text: 'Investigo destinos, precios y hago un itinerario detallado', type: 'analitico' },
      { text: 'Pregunto a todos qué quieren y buscamos consenso', type: 'colaborativo' },
      { text: 'Elijo un destino que me late sin pensarlo mucho', type: 'intuitivo' },
      { text: 'Busco experiencias únicas fuera de lo típico', type: 'creativo' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces cuando un proyecto en el trabajo se complica inesperadamente?',
    options: [
      { text: 'Desgloso el problema en partes más pequeñas', type: 'analitico' },
      { text: 'Reúno al equipo para una lluvia de ideas', type: 'colaborativo' },
      { text: 'Busco un enfoque totalmente diferente al original', type: 'creativo' },
      { text: 'Confío en mi experiencia y ajusto sobre la marcha', type: 'intuitivo' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo decides qué comprar cuando hay muchas opciones?',
    options: [
      { text: 'Comparo especificaciones y precios detalladamente', type: 'analitico' },
      { text: 'Pregunto a amigos o familiares qué recomiendan', type: 'colaborativo' },
      { text: 'Voy con el que me da buena espina', type: 'intuitivo' },
      { text: 'Busco algo diferente que nadie más tenga', type: 'creativo' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces cuando te toca organizar la posada y hay muchos invitados?',
    options: [
      { text: 'Hago una lista de tareas y asigno responsables', type: 'analitico' },
      { text: 'Delego y entre todos sacamos el evento adelante', type: 'colaborativo' },
      { text: 'Fluyo con lo que vaya surgiendo', type: 'intuitivo' },
      { text: 'Invento dinámicas nuevas para sorprender a todos', type: 'creativo' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo enfrentas una emergencia familiar inesperada?',
    options: [
      { text: 'Evalúo la situación y hago un plan de acción claro', type: 'analitico' },
      { text: 'Llamo a toda la familia para organizarnos juntos', type: 'colaborativo' },
      { text: 'Actúo por instinto para resolver lo más urgente', type: 'intuitivo' },
      { text: 'Busco soluciones alternativas que otros no ven', type: 'creativo' },
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
  analitico: {
    type: 'analitico',
    title: 'Solucionador Analítico',
    emoji: '🔍🧠',
    percentage: 'Estilo analítico: 85%',
    description: 'Eres el típico ingeniero mental. Antes de actuar, analizas cada detalle, comparas opciones y tomas decisiones informadas. En la familia, eres el que hace las cuentas de la cooperacha y siempre tiene un plan B.',
    characteristics: ['Metódico y ordenado', 'Excelente para planear', 'Toma decisiones basadas en datos', 'Paciente ante los problemas', 'Le gusta investigar antes de actuar'],
    advice: 'Tu análisis es tu fortaleza, pero no te paralices buscando la opción perfecta. A veces hay que lanzarse aunque no tengas toda la información.',
  },
  intuitivo: {
    type: 'intuitivo',
    title: 'Solucionador Intuitivo',
    emoji: '⚡💡',
    percentage: 'Estilo intuitivo: 85%',
    description: 'Confías en tu sexto sentido y casi siempre le atinas. Como buen mexicano, tienes ese olfato para saber qué hacer sin pensarlo mucho. En las pedas familiares, eres el que sabe cuándo es hora de irse.',
    characteristics: ['Decisiones rápidas', 'Confía en su instinto', 'Adaptable a los cambios', 'No se paraliza ante los problemas', 'Experiencia como guía'],
    advice: 'Tu intuición es valiosa, pero de vez en cuando vale la pena detenerte a analizar. No todas las corazonadas son correctas.',
  },
  colaborativo: {
    type: 'colaborativo',
    title: 'Solucionador Colaborativo',
    emoji: '🤝👨‍👩‍👧‍👦',
    percentage: 'Estilo colaborativo: 85%',
    description: 'Para ti, los problemas se resuelven mejor en equipo. Sabes que dos cabezas piensan mejor que una, y cuatro aún mejor. Eres el que organiza las juntas familiares y siempre busca que todos opinen.',
    characteristics: ['Excelente trabajo en equipo', 'Sabe escuchar a otros', 'Construye consensos', 'Valora diferentes perspectivas', 'Red de apoyo sólida'],
    advice: 'Colaborar es genial, pero no dependas siempre de otros. A veces hay que tomar decisiones solo y confiar en ti mismo.',
  },
  creativo: {
    type: 'creativo',
    title: 'Solucionador Creativo',
    emoji: '🎨✨',
    percentage: 'Estilo creativo: 85%',
    description: 'Donde otros ven un callejón sin salida, tú ves una puerta oculta. Tienes el ingenio mexicano en las venas: si no hay cómo, lo inventas. Eres el que saca las soluciones más locas que terminan funcionando.',
    characteristics: ['Pensamiento fuera de la caja', 'Innovador por naturaleza', 'Ve oportunidades en los problemas', 'Soluciones originales', 'No le tiene miedo a lo nuevo'],
    advice: 'Tu creatividad es tu superpoder, pero no descartes las soluciones tradicionales solo por ser aburridas. A veces lo simple funciona mejor.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { analitico: 0, intuitivo: 0, colaborativo: 0, creativo: 0 };

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
