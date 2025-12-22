// Tipo de Amigo/a - ¿Qué tipo de amigo/a eres?
// Test de Amistad para México

export const questions = [
  {
    id: 1,
    question: "Tu mejor amigo/a te llama a las 3am con un problema...",
    options: [
      { text: "Voy para allá de inmediato", type: "A" },
      { text: "Le ayudo por teléfono hasta que se calme", type: "B" },
      { text: "Le digo que hablamos mañana temprano", type: "C" },
      { text: "Silencio el teléfono en la noche", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Cuántos amigos cercanos dirías que tienes?",
    options: [
      { text: "Muchos, soy muy sociable", type: "A" },
      { text: "Un grupo pequeño pero leal", type: "B" },
      { text: "Uno o dos de verdad cercanos", type: "C" },
      { text: "Prefiero conocidos que amigos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "En una fiesta mexicana, ¿cómo te comportas?",
    options: [
      { text: "Soy el alma de la fiesta, conozco a todos", type: "A" },
      { text: "Disfruto con mi grupo de amigos", type: "B" },
      { text: "Me quedo en un rincón con uno o dos", type: "C" },
      { text: "Prefiero irme temprano", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu amigo/a necesita dinero prestado...",
    options: [
      { text: "Le presto sin pensarlo", type: "A" },
      { text: "Depende de la cantidad y situación", type: "B" },
      { text: "Prefiero no mezclar dinero con amistad", type: "C" },
      { text: "Nunca presto dinero", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo mantienes contacto con tus amigos?",
    options: [
      { text: "Hablo con ellos casi diario", type: "A" },
      { text: "Nos escribimos seguido", type: "B" },
      { text: "De vez en cuando, cada quien su vida", type: "C" },
      { text: "Solo cuando necesito algo o me buscan", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Un amigo/a de años te traiciona...",
    options: [
      { text: "Me duele pero trato de perdonar", type: "A" },
      { text: "Hablo con él/ella para entender qué pasó", type: "B" },
      { text: "Tomo distancia pero no cierro la puerta", type: "C" },
      { text: "Se acabó, no perdono traiciones", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tu amigo/a tiene una opinión muy diferente a la tuya...",
    options: [
      { text: "Respeto su opinión aunque no la comparta", type: "A" },
      { text: "Debatimos con respeto", type: "B" },
      { text: "Evito ese tema para no pelear", type: "C" },
      { text: "Si piensa muy diferente, no es mi amigo/a", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Cómo celebras los cumpleaños de tus amigos?",
    options: [
      { text: "Organizo fiestas sorpresa y regalos especiales", type: "A" },
      { text: "Siempre felicito y trato de verlos", type: "B" },
      { text: "Un mensaje de WhatsApp está bien", type: "C" },
      { text: "A veces se me olvida", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu amigo/a te cuenta un secreto importante...",
    options: [
      { text: "Muere conmigo, jamás lo contaría", type: "A" },
      { text: "Lo guardo aunque me cueste", type: "B" },
      { text: "Depende del secreto si lo cuento", type: "C" },
      { text: "No me gusta que me cuenten secretos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Te invitan a un viaje de amigos...",
    options: [
      { text: "¡Me apunto siempre!", type: "A" },
      { text: "Evalúo y si puedo, voy con gusto", type: "B" },
      { text: "A veces, depende de quién vaya", type: "C" },
      { text: "Prefiero viajar solo/a o con mi pareja", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Cómo describes la amistad ideal?",
    options: [
      { text: "Estar siempre ahí, como hermanos", type: "A" },
      { text: "Apoyo mutuo y confianza", type: "B" },
      { text: "Respeto y buena onda sin exigencias", type: "C" },
      { text: "Cada quien su vida, vernos cuando se pueda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tus amigos de la infancia...",
    options: [
      { text: "Siguen siendo mis mejores amigos", type: "A" },
      { text: "Mantengo contacto con algunos", type: "B" },
      { text: "Ya no los veo pero los recuerdo", type: "C" },
      { text: "Las personas van y vienen, es normal", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Amigo/a Incondicional",
    emoji: "💪",
    description: "Eres el/la amigo/a que todos quieren tener. Leal, presente, siempre dispuesto/a a ayudar. En la cultura mexicana del 'cuate' y la 'comadre', tú representas lo mejor. Te entregas al 100% en tus amistades.",
    traits: ["Leal", "Presente", "Generoso/a", "Confiable"],
    strengths: ["Tus amigos confían ciegamente en ti", "Creas lazos profundos", "Eres muy querido/a"],
    weaknesses: ["Puedes dar más de lo que recibes", "A veces se aprovechan de ti"],
    tips: ["Asegúrate de que la amistad sea recíproca", "No te vacíes por otros", "Mereces amigos igual de entregados"],
  },
  B: {
    type: "B",
    title: "Amigo/a Equilibrado/a",
    emoji: "⚖️",
    description: "Eres un/a buen/a amigo/a con balance. Estás presente cuando importa pero también tienes tu vida. Sabes mantener amistades sanas sin dependencia. Ofreces apoyo sin descuidarte.",
    traits: ["Equilibrado/a", "Confiable", "Maduro/a", "Selectivo/a"],
    strengths: ["Tienes amistades sanas", "Das sin vaciarte", "Mantienes límites"],
    weaknesses: ["A veces pareces distante", "No eres el más expresivo/a"],
    tips: ["Tu balance es saludable", "Sigue cultivando tus amistades", "No pierdas conexión con los que importan"],
  },
  C: {
    type: "C",
    title: "Amigo/a Reservado/a",
    emoji: "🐚",
    description: "Eres selectivo/a con tus amistades. Prefieres pocos amigos de calidad que muchos superficiales. Te cuesta abrirte pero cuando lo haces eres muy leal. Valoras tu espacio personal.",
    traits: ["Reservado/a", "Selectivo/a", "Introvertido/a", "Leal"],
    strengths: ["Tus pocos amigos son de verdad", "No finges amistad", "Eres profundo/a"],
    weaknesses: ["Puedes parecer antisocial", "Te pierdes de conocer gente"],
    tips: ["Está bien ser selectivo pero date oportunidades", "Los amigos enriquecen la vida", "Abre un poco más tu círculo"],
  },
  D: {
    type: "D",
    title: "Amigo/a Independiente",
    emoji: "🦅",
    description: "No le das mucha importancia a la amistad. Prefieres tu independencia y no generar compromisos sociales. En México esto puede parecer 'raro' pero tú valoras tu soledad.",
    traits: ["Independiente", "Solitario/a", "Autosuficiente", "Desapegado/a"],
    strengths: ["No dependes de nadie", "Eres autosuficiente", "No te afectan los dramas sociales"],
    weaknesses: ["Puedes sentirte solo/a en momentos difíciles", "Te pierdes de conexiones valiosas", "Pareces frío/a"],
    tips: ["Los humanos necesitamos conexión", "La amistad no es debilidad", "Considera abrirte un poco más"],
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
