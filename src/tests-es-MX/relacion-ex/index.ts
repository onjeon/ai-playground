// Relación con el Ex - ¿Cómo manejas a tu ex?
// Test de Ex Parejas para México

export const questions = [
  {
    id: 1,
    question: "¿Mantienes contacto con tu ex?",
    options: [
      { text: "Sí, somos amigos y hablamos seguido", type: "A" },
      { text: "A veces, solo lo necesario", type: "B" },
      { text: "No, corté todo contacto", type: "C" },
      { text: "Solo si me busca, no inicio yo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja actual mantiene contacto con su ex...",
    options: [
      { text: "Me parece bien si hay confianza", type: "A" },
      { text: "Me incomoda pero respeto", type: "B" },
      { text: "No me gusta para nada", type: "C" },
      { text: "Depende de cómo terminaron", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tu ex te escribe para tu cumpleaños...",
    options: [
      { text: "Le contesto normal, es educado", type: "A" },
      { text: "Un gracias y ya, cortito", type: "B" },
      { text: "No contesto o lo ignoro", type: "C" },
      { text: "Le digo a mi pareja y decidimos juntos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Podrías ser amigo/a de tu ex?",
    options: [
      { text: "Sí, no tiene nada de malo", type: "A" },
      { text: "Depende de cómo terminamos", type: "B" },
      { text: "No, prefiero alejarlo/a de mi vida", type: "C" },
      { text: "Solo con el tiempo y si hay respeto", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tu ex quiere verte para 'platicar'...",
    options: [
      { text: "Acepto, no tiene nada de malo", type: "A" },
      { text: "Le pregunto a mi pareja primero", type: "B" },
      { text: "No, eso no lleva a nada bueno", type: "C" },
      { text: "Depende de qué quiera hablar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ves a tu ex en una fiesta...",
    options: [
      { text: "Lo saludo normal, sin drama", type: "A" },
      { text: "Un saludo de lejos y ya", type: "B" },
      { text: "Lo evito completamente", type: "C" },
      { text: "Depende de cómo terminamos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Guardas fotos o recuerdos de tu ex?",
    options: [
      { text: "Sí, son parte de mi historia", type: "A" },
      { text: "Algunas guardadas pero no visibles", type: "B" },
      { text: "No, borré todo al terminar", type: "C" },
      { text: "Las tengo pero a mi pareja no le molesta", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tu pareja te pide que bloquees a tu ex...",
    options: [
      { text: "Me parece exagerado, no lo haría", type: "A" },
      { text: "Lo hago si le da tranquilidad", type: "B" },
      { text: "Ya lo tengo bloqueado de todas formas", type: "C" },
      { text: "Platicamos por qué le molesta primero", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Compararías a tu pareja actual con tu ex?",
    options: [
      { text: "A veces, es inevitable", type: "A" },
      { text: "Trato de no hacerlo", type: "B" },
      { text: "Nunca, son personas diferentes", type: "C" },
      { text: "Solo en mi cabeza, nunca en voz alta", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu ex habla mal de ti con conocidos...",
    options: [
      { text: "Me da igual, sé quién soy", type: "A" },
      { text: "Me molesta pero no respondo", type: "B" },
      { text: "Aclaro la situación con esas personas", type: "C" },
      { text: "Me afecta más de lo que debería", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Alguna vez regresaste con un ex?",
    options: [
      { text: "Sí, y funcionó", type: "A" },
      { text: "Sí, pero fue un error", type: "B" },
      { text: "Nunca, lo que terminó, terminó", type: "C" },
      { text: "Lo he pensado pero no lo hice", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Qué opinas de la frase 'donde hubo fuego, cenizas quedan'?",
    options: [
      { text: "Es verdad, siempre queda algo", type: "A" },
      { text: "Depende de la relación", type: "B" },
      { text: "No, cuando termina, termina", type: "C" },
      { text: "Es verdad pero hay que dejarlo ir", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Amigo/a de Ex",
    emoji: "🤝",
    description: "Mantienes buena relación con tus ex. Crees que se puede ser amigos después de terminar. En México esto puede generar desconfianza pero tú lo ves como madurez.",
    traits: ["Maduro/a", "Amigable", "Sin rencores", "Abierto/a"],
    strengths: ["No guardas resentimientos", "Cierras ciclos sanamente", "Puedes ser amigo/a"],
    weaknesses: ["Tu pareja puede sentirse insegura", "Límites difusos", "Posibles problemas"],
    tips: ["Asegúrate de que tu pareja esté cómoda", "Pon límites claros", "No confundas amistad con algo más"],
  },
  B: {
    type: "B",
    title: "Distancia Respetuosa",
    emoji: "👋",
    description: "Mantienes distancia pero eres respetuoso/a con tus ex. No son amigos pero tampoco enemigos. Un saludo cordial y cada quien su vida.",
    traits: ["Respetuoso/a", "Distante", "Cortés", "Equilibrado/a"],
    strengths: ["No hay drama", "Relación cordial", "Tu pareja no se preocupa"],
    weaknesses: ["Puede parecer frío/a", "A veces la distancia es incómoda"],
    tips: ["Tu postura es sana", "Mantén los límites", "La cordialidad está bien"],
  },
  C: {
    type: "C",
    title: "Corte Total",
    emoji: "✂️",
    description: "Cuando terminas, cortas todo contacto. No hay vuelta atrás. Bloqueas, borras y sigues adelante. En México dirían que eres 'radical' pero tú lo ves como necesario.",
    traits: ["Radical", "Decidido/a", "Sin vuelta atrás", "Protector/a"],
    strengths: ["Cierras ciclos definitivamente", "Tu pareja no tiene preocupaciones", "No hay confusiones"],
    weaknesses: ["Podrías parecer rencoroso/a", "A veces es exagerado", "No resuelves pendientes"],
    tips: ["Cortar está bien pero sin rencor", "A veces cerrar bien es mejor", "No todo tiene que ser radical"],
  },
  D: {
    type: "D",
    title: "Caso por Caso",
    emoji: "🤔",
    description: "Tu relación con los ex depende de cómo terminaron. No tienes una regla fija, evalúas cada situación. Eres flexible pero considerado/a con tu pareja actual.",
    traits: ["Flexible", "Considerado/a", "Analítico/a", "Contextual"],
    strengths: ["No eres extremista", "Evalúas cada caso", "Consideras a tu pareja"],
    weaknesses: ["Puede parecer indeciso/a", "Sin reglas claras"],
    tips: ["Tu flexibilidad es buena", "Pero establece límites claros", "Comunica con tu pareja"],
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
