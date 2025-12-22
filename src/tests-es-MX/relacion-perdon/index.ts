// Capacidad de Perdón - ¿Qué tan fácil perdonas?
// Test de Perdón para México

export const questions = [
  {
    id: 1,
    question: "Tu pareja te mintió en algo importante...",
    options: [
      { text: "Perdono si se arrepiente de verdad", type: "A" },
      { text: "Lo hablo pero me cuesta perdonar", type: "B" },
      { text: "Perdono pero no olvido", type: "C" },
      { text: "Eso es imperdonable para mí", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja te fue infiel...",
    options: [
      { text: "Podría perdonar dependiendo de las circunstancias", type: "A" },
      { text: "Sería muy difícil pero quizá", type: "B" },
      { text: "Nunca lo superaría aunque lo intentara", type: "C" },
      { text: "Termino de inmediato, sin vuelta atrás", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tu pareja te dijo algo muy hiriente en una pelea...",
    options: [
      { text: "Lo hablamos, pide perdón y ya", type: "A" },
      { text: "Me duele pero con tiempo lo supero", type: "B" },
      { text: "Me cuesta olvidar esas palabras", type: "C" },
      { text: "Eso no se perdona, las palabras duelen", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Cuánto te tarda perdonar cuando te lastiman?",
    options: [
      { text: "Rápido, no me gusta guardar rencor", type: "A" },
      { text: "Depende de qué tan grave fue", type: "B" },
      { text: "Mucho tiempo, proceso lento", type: "C" },
      { text: "Casi nunca perdono de verdad", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tu pareja olvidó tu cumpleaños...",
    options: [
      { text: "Me enojo pero lo perdono rápido", type: "A" },
      { text: "Me duele pero con una disculpa bien", type: "B" },
      { text: "Me cuesta superarlo, me sentí olvidado/a", type: "C" },
      { text: "Eso demuestra que no le importo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja te pide perdón llorando...",
    options: [
      { text: "Me conmueve y lo perdono", type: "A" },
      { text: "Necesito ver que cambie, no solo lágrimas", type: "B" },
      { text: "Las lágrimas no borran lo que hizo", type: "C" },
      { text: "No me manipula con llanto", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Ya perdonaste pero sigues recordando lo que pasó...",
    options: [
      { text: "Es normal, pero ya quedó atrás", type: "A" },
      { text: "A veces me viene a la mente pero no lo menciono", type: "B" },
      { text: "Lo saco en las peleas aunque ya perdoné", type: "C" },
      { text: "Si lo recuerdo es que no perdoné de verdad", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Qué es lo más difícil de perdonar para ti?",
    options: [
      { text: "Todo se puede perdonar con esfuerzo", type: "A" },
      { text: "La infidelidad y las mentiras graves", type: "B" },
      { text: "Que me falten al respeto", type: "C" },
      { text: "Cualquier traición a mi confianza", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Perdonar significa para ti...",
    options: [
      { text: "Dejar ir y seguir adelante", type: "A" },
      { text: "Dar una segunda oportunidad con precaución", type: "B" },
      { text: "Aceptar pero sin olvidar para protegerme", type: "C" },
      { text: "No cobrar venganza, pero la relación cambia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu familia opina que deberías perdonar a tu pareja...",
    options: [
      { text: "Escucho su consejo, tienen experiencia", type: "A" },
      { text: "Lo considero pero decido yo", type: "B" },
      { text: "No es su problema, yo decido", type: "C" },
      { text: "Nadie sabe lo que viví, no pueden opinar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Has perdonado algo grave y te arrepentiste?",
    options: [
      { text: "No, cuando perdono es de verdad", type: "A" },
      { text: "Sí, a veces la gente no cambia", type: "B" },
      { text: "Por eso ahora me cuesta más perdonar", type: "C" },
      { text: "Sí, y aprendí a no perdonar tan fácil", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Crees que perdonar es señal de debilidad o fortaleza?",
    options: [
      { text: "Fortaleza, se necesita valor para perdonar", type: "A" },
      { text: "Depende de la situación", type: "B" },
      { text: "A veces se confunde con dejar que te pisoteen", type: "C" },
      { text: "Puede ser debilidad si perdonas todo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Corazón Perdonador",
    emoji: "💝",
    description: "Tienes un gran corazón y perdonas con facilidad. No te gusta guardar rencor y crees en las segundas oportunidades. En México dirían que eres 'muy noble'.",
    traits: ["Noble", "Compasivo/a", "Generoso/a", "Esperanzado/a"],
    strengths: ["Vives sin rencores", "Das oportunidades", "Paz interior"],
    weaknesses: ["Podrían aprovecharse de ti", "Perdonas demasiado rápido", "No aprendes de errores"],
    tips: ["Perdonar está bien pero pon límites", "No todo merece perdón", "Tu nobleza es valiosa, protégela"],
  },
  B: {
    type: "B",
    title: "Perdón Cauteloso",
    emoji: "🔍",
    description: "Puedes perdonar pero con condiciones. Necesitas ver arrepentimiento genuino y cambio real. Das segundas oportunidades pero no terceras.",
    traits: ["Cauteloso/a", "Razonable", "Justo/a", "Observador/a"],
    strengths: ["No perdonas todo ciegamente", "Evalúas la situación", "Proteges tu corazón"],
    weaknesses: ["A veces tardas mucho", "Puede parecer que guardas rencor"],
    tips: ["Tu cautela es sana", "Sigue escuchando tu intuición", "No prolongues el proceso"],
  },
  C: {
    type: "C",
    title: "Perdón Difícil",
    emoji: "🔒",
    description: "Te cuesta mucho perdonar. Puedes decir que perdonaste pero por dentro no olvidas. Guardas las cosas y pueden salir después. El perdón genuino es un reto para ti.",
    traits: ["Rencoroso/a", "Protector/a", "Desconfiado/a", "Memorioso/a"],
    strengths: ["No te lastiman dos veces igual", "Proteges tus límites", "Aprendes de errores"],
    weaknesses: ["El rencor te pesa", "Afecta tus relaciones", "Vives en el pasado"],
    tips: ["El rencor te hace más daño a ti", "Perdonar es liberarte", "Busca ayuda si lo necesitas"],
  },
  D: {
    type: "D",
    title: "Perdón Casi Imposible",
    emoji: "🚫",
    description: "Para ti hay cosas imperdonables y punto. Una traición marca el fin. No crees en segundas oportunidades en temas graves. Cuando alguien cruza la línea, no hay vuelta.",
    traits: ["Inflexible", "Firme", "Radical", "Definitivo/a"],
    strengths: ["Nadie te pisotea dos veces", "Límites muy claros", "Te proteges bien"],
    weaknesses: ["Podrías perder relaciones valiosas", "El rencor te consume", "Muy extremo"],
    tips: ["La vida no es blanco y negro", "A veces las personas cambian", "No todo merece la sentencia máxima"],
  },
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
