// Test de Razonamiento - 추론 능력 테스트
export const questions = [
  {
    id: 1,
    text: '¿Cómo llegas a conclusiones cuando alguien te cuenta un problema?',
    options: [
      { text: 'Analizo los hechos y saco conclusiones lógicas', type: 'logico' },
      { text: 'Considero el contexto emocional de la situación', type: 'emocional' },
      { text: 'Relaciono con experiencias similares que conozco', type: 'experiencial' },
      { text: 'Busco patrones que me ayuden a entender el fondo', type: 'abstracto' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo evalúas si un negocio o inversión es buena idea?',
    options: [
      { text: 'Calculo números, riesgos y rendimientos posibles', type: 'logico' },
      { text: 'Me fijo si me genera confianza y buenas vibras', type: 'emocional' },
      { text: 'Pregunto a conocidos que ya hayan invertido', type: 'experiencial' },
      { text: 'Analizo tendencias del mercado a largo plazo', type: 'abstracto' },
    ],
  },
  {
    id: 3,
    text: '¿Qué consideras primero al elegir una carrera o trabajo?',
    options: [
      { text: 'El sueldo, prestaciones y oportunidades de crecimiento', type: 'logico' },
      { text: 'Que me apasione y me haga feliz', type: 'emocional' },
      { text: 'Lo que he visto que funciona en mi familia', type: 'experiencial' },
      { text: 'El impacto que puedo tener a futuro', type: 'abstracto' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo decides si confiar en alguien nuevo?',
    options: [
      { text: 'Observo sus acciones y verifico su coherencia', type: 'logico' },
      { text: 'Me guío por cómo me hace sentir al platicar', type: 'emocional' },
      { text: 'Pregunto referencias a conocidos en común', type: 'experiencial' },
      { text: 'Evalúo sus valores y principios a largo plazo', type: 'abstracto' },
    ],
  },
  {
    id: 5,
    text: '¿Qué haces cuando ves una noticia impactante en redes sociales?',
    options: [
      { text: 'Verifico la fuente y busco datos que la respalden', type: 'logico' },
      { text: 'Me fijo en cómo reacciona la gente antes de opinar', type: 'emocional' },
      { text: 'Comparo con noticias similares que recuerdo', type: 'experiencial' },
      { text: 'Analizo las implicaciones profundas del tema', type: 'abstracto' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo argumentas tu punto de vista en una discusión familiar?',
    options: [
      { text: 'Con hechos y datos concretos', type: 'logico' },
      { text: 'Apelando a los sentimientos y la unión familiar', type: 'emocional' },
      { text: 'Recordando situaciones pasadas como ejemplo', type: 'experiencial' },
      { text: 'Planteando los principios y valores que están en juego', type: 'abstracto' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo decides qué ruta tomar cuando hay mucho tráfico?',
    options: [
      { text: 'Checo Waze o Google Maps y sigo la más eficiente', type: 'logico' },
      { text: 'Voy por donde me siento más cómodo manejando', type: 'emocional' },
      { text: 'Tomo las calles que conozco bien aunque sean más largas', type: 'experiencial' },
      { text: 'Predigo cómo estará el tráfico más adelante y me adelanto', type: 'abstracto' },
    ],
  },
  {
    id: 8,
    text: '¿Qué factores consideras al elegir escuela para tus hijos o sobrinos?',
    options: [
      { text: 'Ranking académico, costos y resultados de egresados', type: 'logico' },
      { text: 'Que el ambiente sea cálido y los maestros comprensivos', type: 'emocional' },
      { text: 'Donde estudiaron otros familiares exitosos', type: 'experiencial' },
      { text: 'El tipo de persona que formará a largo plazo', type: 'abstracto' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo evalúas si una relación de amistad vale la pena mantener?',
    options: [
      { text: 'Analizo si es recíproca y beneficiosa para ambos', type: 'logico' },
      { text: 'Si me hace sentir bien cuando estamos juntos', type: 'emocional' },
      { text: 'Por cuánto tiempo llevamos de conocernos', type: 'experiencial' },
      { text: 'Si compartimos valores y visión de vida similar', type: 'abstracto' },
    ],
  },
  {
    id: 10,
    text: '¿Qué consideras al votar por un candidato político?',
    options: [
      { text: 'Sus propuestas concretas y plan de gobierno', type: 'logico' },
      { text: 'Si conecta conmigo y me inspira confianza', type: 'emocional' },
      { text: 'Su trayectoria y lo que ha hecho antes', type: 'experiencial' },
      { text: 'Su visión a largo plazo para el país', type: 'abstracto' },
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
  logico: {
    type: 'logico',
    title: 'Razonador Lógico',
    emoji: '🧮📊',
    percentage: 'Razonamiento lógico: 85%',
    description: 'Tu mente funciona como calculadora. Analizas datos, evalúas probabilidades y sacas conclusiones basadas en hechos. En la familia eres el que desarma las fake news del grupo de WhatsApp con argumentos.',
    characteristics: ['Pensamiento estructurado', 'Basado en evidencias', 'Detecta falacias fácilmente', 'Decisiones objetivas', 'Analítico por naturaleza'],
    advice: 'Tu lógica es admirable, pero no todo en la vida se puede calcular. A veces las decisiones más importantes requieren escuchar al corazón.',
  },
  emocional: {
    type: 'emocional',
    title: 'Razonador Emocional',
    emoji: '💖🎭',
    percentage: 'Razonamiento emocional: 85%',
    description: 'Para ti, las emociones son datos válidos. Consideras cómo se sienten las personas involucradas y tomas decisiones que cuidan el bienestar de todos. Eres el corazón de tu familia.',
    characteristics: ['Alta inteligencia emocional', 'Considera el impacto humano', 'Empático al razonar', 'Valora la armonía', 'Conecta con otros fácilmente'],
    advice: 'Tu sensibilidad es valiosa, pero cuidado con dejarte llevar solo por emociones. A veces hay que analizar fríamente para no tomar malas decisiones.',
  },
  experiencial: {
    type: 'experiencial',
    title: 'Razonador Experiencial',
    emoji: '📖👴',
    percentage: 'Razonamiento experiencial: 85%',
    description: 'La experiencia es tu mejor maestra. Aprendes de lo vivido y de lo que has visto en otros. Como dice tu abuela: "más sabe el diablo por viejo que por diablo". Eres el guardián de la sabiduría familiar.',
    characteristics: ['Aprende de la historia', 'Memoria de casos pasados', 'Sabiduría práctica', 'Tradición como guía', 'Conocimiento probado'],
    advice: 'Tu experiencia es oro, pero el mundo cambia. No asumas que lo que funcionó antes funcionará siempre. Mantente abierto a nuevas ideas.',
  },
  abstracto: {
    type: 'abstracto',
    title: 'Razonador Abstracto',
    emoji: '🌌🔮',
    percentage: 'Razonamiento abstracto: 85%',
    description: 'Ves más allá de lo obvio. Mientras otros se enfocan en el hoy, tú piensas en patrones, tendencias y el significado profundo de las cosas. Eres el filósofo de las reuniones familiares.',
    characteristics: ['Pensamiento profundo', 'Visión a largo plazo', 'Detecta patrones ocultos', 'Conceptos complejos', 'Reflexivo y contemplativo'],
    advice: 'Tu profundidad es única, pero no te pierdas en las nubes. A veces las soluciones más simples son las mejores. Baja a tierra de vez en cuando.',
  },
};

export function calculateResult(answers: number[]): typeof results[keyof typeof results] {
  const scores: Record<string, number> = { logico: 0, emocional: 0, experiencial: 0, abstracto: 0 };

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
