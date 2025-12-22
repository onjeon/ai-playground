// Estilo de Comunicación en Pareja - ¿Cómo te comunicas?
// Test de Comunicación para México

export const questions = [
  {
    id: 1,
    question: "Cuando algo te molesta de tu pareja, ¿qué haces?",
    options: [
      { text: "Se lo digo directo y sin rodeos", type: "A" },
      { text: "Busco el momento adecuado para platicarlo", type: "B" },
      { text: "Hago indirectas hasta que lo capte", type: "C" },
      { text: "Me lo guardo para no pelear", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja te pregunta '¿qué tienes?' y estás molesto/a...",
    options: [
      { text: "Le explico exactamente qué me pasa", type: "A" },
      { text: "Le digo que estoy bien pero luego lo hablamos", type: "B" },
      { text: "'Nada' pero con tono de que sí hay algo", type: "C" },
      { text: "'Nada' y cambio el tema", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Necesitas pedirle algo importante a tu pareja...",
    options: [
      { text: "Se lo pido directo sin pensarlo mucho", type: "A" },
      { text: "Preparo lo que voy a decir y busco buen momento", type: "B" },
      { text: "Espero que lo adivine o le doy pistas", type: "C" },
      { text: "Mejor no le pido nada, no quiero molestar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "En medio de una discusión acalorada...",
    options: [
      { text: "Digo todo lo que pienso, sin filtro", type: "A" },
      { text: "Intento mantener la calma y escuchar", type: "B" },
      { text: "Me cierro y dejo de hablar", type: "C" },
      { text: "Digo 'sí, tienes razón' para que termine", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo expresas tus sentimientos a tu pareja?",
    options: [
      { text: "Con palabras claras y directas", type: "A" },
      { text: "Con cariño y en el momento indicado", type: "B" },
      { text: "Más con acciones que con palabras", type: "C" },
      { text: "Me cuesta mucho expresar lo que siento", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja hace algo que te lastimó...",
    options: [
      { text: "Le digo exactamente cómo me hizo sentir", type: "A" },
      { text: "Espero tranquilizarme y lo platico después", type: "B" },
      { text: "Me pongo cortante hasta que lo note", type: "C" },
      { text: "Lo dejo pasar, no vale la pena pelear", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Cómo reaccionas cuando tu pareja quiere hablar de algo serio?",
    options: [
      { text: "Vamos, dime qué pasa, sin vueltas", type: "A" },
      { text: "Le pongo atención y trato de entender", type: "B" },
      { text: "Me pongo nervioso/a, ¿será algo malo?", type: "C" },
      { text: "Prefiero evitar esas conversaciones", type: "D" },
    ],
  },
  {
    id: 8,
    question: "En una comida familiar, ¿cómo manejan los temas de pareja?",
    options: [
      { text: "Hablamos de todo abiertamente", type: "A" },
      { text: "Algunas cosas en privado, otras con la familia", type: "B" },
      { text: "No hablamos de nuestros problemas frente a otros", type: "C" },
      { text: "Dejamos que la familia opine mucho", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu pareja no está de acuerdo contigo en algo importante...",
    options: [
      { text: "Defiendo mi punto hasta convencerlo/a", type: "A" },
      { text: "Escucho su punto y buscamos un acuerdo", type: "B" },
      { text: "Cedo aunque no esté convencido/a", type: "C" },
      { text: "Evito el tema para no discutir", type: "D" },
    ],
  },
  {
    id: 10,
    question: "¿Con qué frecuencia hablan de su relación?",
    options: [
      { text: "Siempre, todo el tiempo analizamos todo", type: "A" },
      { text: "Regularmente, tenemos buena comunicación", type: "B" },
      { text: "Solo cuando hay problemas", type: "C" },
      { text: "Casi nunca, preferimos no complicarnos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Cuando piden perdón, ¿cómo lo hacen?",
    options: [
      { text: "Reconozco exactamente qué hice mal", type: "A" },
      { text: "Pido disculpas y busco hacer las paces", type: "B" },
      { text: "Lo demuestro con acciones, no palabras", type: "C" },
      { text: "Me cuesta mucho pedir perdón", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Cómo te comunicas por mensaje con tu pareja?",
    options: [
      { text: "Directo al punto, sin emojis ni rodeos", type: "A" },
      { text: "Cariñoso y claro, con emojis de amor", type: "B" },
      { text: "Cortito, las cosas importantes en persona", type: "C" },
      { text: "Solo lo necesario, no soy de mucho texto", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Comunicación Directa",
    emoji: "🎯",
    description: "Eres directo/a y sin filtros. En México dirían que 'no te andas por las ramas'. Dices las cosas como son, sin endulzarlas. Esto puede ser bueno para la claridad, pero a veces puede sentirse agresivo.",
    traits: ["Directo/a", "Honesto/a", "Frontal", "Sin rodeos"],
    strengths: ["No dejas dudas", "Eres muy claro/a", "No acumulas resentimientos"],
    weaknesses: ["Puedes lastimar con tus palabras", "A veces te falta tacto", "Puedes parecer agresivo/a"],
    tips: ["Busca el momento adecuado para hablar", "La forma importa tanto como el contenido", "Escucha también, no solo hables"],
  },
  B: {
    type: "B",
    title: "Comunicación Asertiva",
    emoji: "💬",
    description: "Tienes una comunicación sana y equilibrada. Sabes expresarte claramente pero con respeto y en el momento indicado. Buscas el diálogo y la comprensión mutua. Eres el/la que arregla las cosas hablando.",
    traits: ["Asertivo/a", "Respetuoso/a", "Empático/a", "Equilibrado/a"],
    strengths: ["Te expresas con claridad y respeto", "Escuchas activamente", "Buscas soluciones juntos"],
    weaknesses: ["A veces te tardas en decir las cosas", "Puedes sobre-analizar"],
    tips: ["Sigue así, tu comunicación es sana", "No pierdas la paciencia", "Confía en tu forma de comunicar"],
  },
  C: {
    type: "C",
    title: "Comunicación Indirecta",
    emoji: "🙊",
    description: "Prefieres las indirectas y que tu pareja 'capte' las cosas. En la cultura mexicana esto es muy común: esperar que el otro adivine. Pero tu pareja no lee mentes, y esto puede causar muchos malentendidos.",
    traits: ["Indirecto/a", "Reservado/a", "Pasivo/a", "Sutil"],
    strengths: ["Evitas conflictos directos", "Eres prudente", "Piensas antes de hablar"],
    weaknesses: ["Generas confusión", "Acumulas resentimiento", "Tu pareja no sabe qué quieres"],
    tips: ["Practica decir lo que sientes directamente", "No esperes que adivinen", "Las indirectas no funcionan"],
  },
  D: {
    type: "D",
    title: "Comunicación Evasiva",
    emoji: "🤐",
    description: "Evitas las conversaciones difíciles. Prefieres quedarte callado/a a confrontar. En México esto es común: 'mejor me aguanto'. Pero guardarte todo solo acumula problemas y resentimientos.",
    traits: ["Evasivo/a", "Callado/a", "Evita conflictos", "Guardado/a"],
    strengths: ["No generas pleitos", "Eres paciente", "No dices cosas de las que te arrepientas"],
    weaknesses: ["Acumulas frustración", "Tu pareja no sabe qué piensas", "Los problemas crecen"],
    tips: ["Practica expresar tus sentimientos", "Guardarte todo no es sano", "Una conversación difícil previene problemas mayores"],
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
