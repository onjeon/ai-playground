// Relación con la Familia - ¿Cómo te llevas con tu familia?
// Test de Relaciones Familiares para México

export const questions = [
  {
    id: 1,
    question: "Los domingos en familia son...",
    options: [
      { text: "Sagrados, nunca me los pierdo", type: "A" },
      { text: "Importantes, voy seguido pero no siempre", type: "B" },
      { text: "Opcionales, voy cuando puedo", type: "C" },
      { text: "Prefiero hacer otras cosas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Cuando tienes un problema importante, ¿a quién recurres?",
    options: [
      { text: "A mi mamá o papá primero", type: "A" },
      { text: "A un familiar cercano de confianza", type: "B" },
      { text: "A mis amigos más que a mi familia", type: "C" },
      { text: "Lo resuelvo solo/a", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Qué tan involucrada está tu familia en tus decisiones?",
    options: [
      { text: "Mucho, siempre pido opinión y consejo", type: "A" },
      { text: "En las importantes sí les consulto", type: "B" },
      { text: "Les cuento después de decidir", type: "C" },
      { text: "Mi vida es mía, ellos no opinan", type: "D" },
    ],
  },
  {
    id: 4,
    question: "En las fiestas familiares mexicanas (Navidad, 15 de septiembre)...",
    options: [
      { text: "¡Son lo máximo! Ahí estoy siempre", type: "A" },
      { text: "Me gustan, participo con gusto", type: "B" },
      { text: "Voy por compromiso más que por gusto", type: "C" },
      { text: "Prefiero celebrar por mi cuenta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo es tu relación con tus papás?",
    options: [
      { text: "Muy cercana, hablo con ellos todos los días", type: "A" },
      { text: "Buena, nos comunicamos seguido", type: "B" },
      { text: "Distante pero respetuosa", type: "C" },
      { text: "Complicada o casi no hablamos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tus hermanos o primos...",
    options: [
      { text: "Son mis mejores amigos", type: "A" },
      { text: "Me llevo bien, nos vemos seguido", type: "B" },
      { text: "Los veo solo en reuniones familiares", type: "C" },
      { text: "Casi no tenemos relación", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Ayudarías económicamente a tu familia si lo necesitan?",
    options: [
      { text: "Sin dudarlo, la familia es primero", type: "A" },
      { text: "Sí, dentro de mis posibilidades", type: "B" },
      { text: "Depende de la situación", type: "C" },
      { text: "Cada quien debe resolver lo suyo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Qué opinas de vivir cerca de tu familia?",
    options: [
      { text: "Ideal, ojalá viviéramos en la misma calle", type: "A" },
      { text: "Está bien, cerca pero no encima", type: "B" },
      { text: "Prefiero cierta distancia", type: "C" },
      { text: "Mientras más lejos, mejor", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu familia opina sobre tu pareja...",
    options: [
      { text: "Su opinión es muy importante para mí", type: "A" },
      { text: "La escucho pero la decisión es mía", type: "B" },
      { text: "Agradezco pero no me afecta", type: "C" },
      { text: "No tienen derecho a opinar de mi vida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "El Día de las Madres...",
    options: [
      { text: "Es el día más importante, siempre con ella", type: "A" },
      { text: "La festejo con gusto y cariño", type: "B" },
      { text: "Una llamada o mensaje está bien", type: "C" },
      { text: "No le doy tanta importancia", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Llevarías a tu pareja a vivir con tus papás si fuera necesario?",
    options: [
      { text: "Sí, es lo más natural", type: "A" },
      { text: "Solo temporalmente si no hay opción", type: "B" },
      { text: "Preferiría evitarlo", type: "C" },
      { text: "Jamás, necesito mi espacio", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Cómo describes tu relación familiar?",
    options: [
      { text: "Somos muy unidos, casi todos los días nos vemos", type: "A" },
      { text: "Buena relación, nos queremos mucho", type: "B" },
      { text: "Normal, como cualquier familia", type: "C" },
      { text: "Complicada o distante", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Súper Familiero/a",
    emoji: "👨‍👩‍👧‍👦",
    description: "La familia es TODO para ti. Representas la cultura mexicana de familia unida al máximo. Los domingos en casa de la abuela son sagrados, el Día de las Madres es intocable, y tu familia siempre será prioridad.",
    traits: ["Familiero/a", "Tradicional", "Leal", "Unido/a"],
    strengths: ["Tienes una red de apoyo fuerte", "Valoras los lazos familiares", "Eres muy querido/a"],
    weaknesses: ["Puede ser difícil poner límites", "Tu pareja puede sentirse desplazada"],
    tips: ["Balancea familia y pareja", "Tu familia de origen no es más importante que la que formes", "Los límites sanos son necesarios"],
  },
  B: {
    type: "B",
    title: "Equilibrio Familiar",
    emoji: "⚖️",
    description: "Tienes un balance sano con tu familia. Los quieres, los ves seguido, pero también tienes tu vida propia. Sabes que la familia es importante sin dejar que controle tu vida. Eres el término medio ideal.",
    traits: ["Equilibrado/a", "Independiente", "Cariñoso/a", "Maduro/a"],
    strengths: ["Mantienes relaciones sanas", "Tienes límites claros", "Balanceas todas tus relaciones"],
    weaknesses: ["A veces pareces menos 'familiero/a'", "Puede haber presión de la familia"],
    tips: ["Tu balance es saludable", "Sigue poniendo límites con amor", "No dejes que te hagan sentir culpable"],
  },
  C: {
    type: "C",
    title: "Distancia Saludable",
    emoji: "🌿",
    description: "Mantienes cierta distancia con tu familia. No es que no los quieras, pero valoras tu independencia y espacio. Quizá hubo situaciones difíciles o simplemente eres muy independiente.",
    traits: ["Independiente", "Reservado/a", "Autónomo/a", "Distante"],
    strengths: ["Has desarrollado independencia", "No dependes emocionalmente de ellos", "Tienes tu propia vida"],
    weaknesses: ["Puedes perderte momentos importantes", "La familia puede sentirse rechazada"],
    tips: ["Mantén el contacto aunque sea mínimo", "Los lazos familiares son valiosos", "No cierres la puerta completamente"],
  },
  D: {
    type: "D",
    title: "Muy Independiente",
    emoji: "🦅",
    description: "Tu familia no es tu prioridad. Prefieres vivir tu vida sin la influencia o presencia constante de ellos. En la cultura mexicana esto puede ser visto como 'raro', pero tú valoras tu autonomía.",
    traits: ["Muy independiente", "Solitario/a", "Autosuficiente", "Desapegado/a"],
    strengths: ["Eres completamente autónomo/a", "No te dejas influenciar", "Has construido tu propia vida"],
    weaknesses: ["Puedes sentirte solo/a en momentos difíciles", "Pierdes apoyo familiar", "Las relaciones pueden sufrir"],
    tips: ["La familia puede ser un recurso valioso", "No tienes que alejarte para ser independiente", "Evalúa si hay heridas que sanar"],
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
