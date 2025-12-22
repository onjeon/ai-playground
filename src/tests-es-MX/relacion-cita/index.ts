// Estilo de Cita - ¿Cómo eres en las citas?
// Test de Citas para México

export const questions = [
  {
    id: 1,
    question: "La primera cita ideal sería...",
    options: [
      { text: "Cena romántica en un restaurante elegante", type: "A" },
      { text: "Algo casual como café o tacos", type: "B" },
      { text: "Una actividad divertida como boliche o escape room", type: "C" },
      { text: "En mi casa o la suya, más íntimo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Quién debería pagar en la primera cita?",
    options: [
      { text: "El hombre siempre, es lo tradicional", type: "A" },
      { text: "Quien invitó paga", type: "B" },
      { text: "Mitad y mitad, es lo justo", type: "C" },
      { text: "No me importa, depende del momento", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Antes de una cita, tú...",
    options: [
      { text: "Me arreglo mucho, quiero verme increíble", type: "A" },
      { text: "Me arreglo bien pero sin exagerar", type: "B" },
      { text: "Voy casual, que me conozca como soy", type: "C" },
      { text: "Depende de a dónde vayamos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "La conversación en una primera cita...",
    options: [
      { text: "Romántica, con cumplidos y coqueteo", type: "A" },
      { text: "Conocernos, preguntas sobre vida y gustos", type: "B" },
      { text: "Divertida, que haya muchas risas", type: "C" },
      { text: "Profunda, hablar de cosas importantes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Si la cita va muy bien, ¿besarías en la primera cita?",
    options: [
      { text: "Sí, si hay química ¿por qué no?", type: "A" },
      { text: "Quizá un besito, nada más", type: "B" },
      { text: "Prefiero esperar a conocernos más", type: "C" },
      { text: "Depende completamente del momento", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Cuánto tiempo debe pasar una primera cita?",
    options: [
      { text: "Toda la noche si hay conexión", type: "A" },
      { text: "Un par de horas está bien", type: "B" },
      { text: "Una hora máximo, corto y conciso", type: "C" },
      { text: "Lo que surja naturalmente", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Después de la cita, ¿cuándo escribirías?",
    options: [
      { text: "Esa misma noche para decir que la pasé bien", type: "A" },
      { text: "Al día siguiente, tranquilo", type: "B" },
      { text: "Espero a que me escriba primero", type: "C" },
      { text: "Cuando tenga ganas, sin reglas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Si la cita va mal, tú...",
    options: [
      { text: "Me quedo por educación hasta el final", type: "A" },
      { text: "Invento una excusa y me voy temprano", type: "B" },
      { text: "Soy honesto/a y digo que no hay química", type: "C" },
      { text: "Aguanto pero no habrá segunda cita", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Investigas a tu cita en redes sociales antes?",
    options: [
      { text: "Sí, reviso todo lo que puedo", type: "A" },
      { text: "Echo un vistazo rápido", type: "B" },
      { text: "No, prefiero conocerlo/a en persona", type: "C" },
      { text: "Solo si tenemos conocidos en común", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu red flag en una cita sería...",
    options: [
      { text: "Que esté pegado/a al celular todo el tiempo", type: "A" },
      { text: "Que hable mal de sus ex", type: "B" },
      { text: "Que sea grosero/a con el mesero", type: "C" },
      { text: "Que no haga preguntas sobre mí", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Cuántas citas antes de ser exclusivos?",
    options: [
      { text: "Si hay amor, desde la primera", type: "A" },
      { text: "Varias, hay que conocerse bien", type: "B" },
      { text: "Mínimo un mes saliendo", type: "C" },
      { text: "No tengo un número fijo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Las citas por apps de ligue...",
    options: [
      { text: "No son para mí, prefiero conocer en persona", type: "A" },
      { text: "Están bien, he tenido buenas experiencias", type: "B" },
      { text: "Las uso pero con precaución", type: "C" },
      { text: "Son mi principal forma de conocer gente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Romántico/a Tradicional",
    emoji: "🌹",
    description: "Eres de la vieja escuela en las citas. Te gusta el romance tradicional mexicano: que te conquisten, flores, cenas elegantes. Crees en el cortejo y los gestos románticos.",
    traits: ["Romántico/a", "Tradicional", "Detallista", "Expresivo/a"],
    strengths: ["Haces citas memorables", "Eres muy detallista", "Sabes conquistar"],
    weaknesses: ["Expectativas muy altas", "Puede parecer anticuado/a", "Muy intenso/a muy rápido"],
    tips: ["No todos son igual de románticos", "Relájate un poco", "Lo simple también es bonito"],
  },
  B: {
    type: "B",
    title: "Equilibrado/a en Citas",
    emoji: "☕",
    description: "Tienes un enfoque equilibrado en las citas. Ni muy formal ni muy casual. Te gusta conocer a la persona sin presiones ni expectativas exageradas. Eres fácil de tratar.",
    traits: ["Equilibrado/a", "Relajado/a", "Amigable", "Natural"],
    strengths: ["Haces sentir cómoda a la gente", "Sin presiones", "Conversaciones naturales"],
    weaknesses: ["Podrías parecer poco interesado/a", "Falta de chispa romántica"],
    tips: ["A veces un poco más de romance no hace daño", "Muestra más interés", "El equilibrio es bueno pero la pasión también"],
  },
  C: {
    type: "C",
    title: "Cauteloso/a en Citas",
    emoji: "🔍",
    description: "Eres cauteloso/a y selectivo/a en las citas. No te entregas fácil y prefieres conocer bien a alguien antes de abrirte. Proteges tu corazón.",
    traits: ["Cauteloso/a", "Selectivo/a", "Reservado/a", "Protector/a"],
    strengths: ["No te ilusionas rápido", "Elecciones pensadas", "Evitas decepciones"],
    weaknesses: ["Podrías perder oportunidades", "Pareces distante", "Mucha desconfianza"],
    tips: ["A veces hay que arriesgarse", "No todo el mundo te va a lastimar", "Ábrirte un poco más podría ser bueno"],
  },
  D: {
    type: "D",
    title: "Espontáneo/a en Citas",
    emoji: "🎲",
    description: "No sigues reglas ni protocolos en las citas. Vas con el flujo y dejas que las cosas pasen naturalmente. No te complicas ni sobre-analizas.",
    traits: ["Espontáneo/a", "Relajado/a", "Flexible", "Auténtico/a"],
    strengths: ["Sin presiones ni dramas", "Muy auténtico/a", "Adaptable"],
    weaknesses: ["Puede parecer que no te importa", "Falta de iniciativa", "Poco predecible"],
    tips: ["A veces un poco de planeación ayuda", "Muestra más interés activo", "La espontaneidad tiene límites"],
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
