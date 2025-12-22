// Estilo de Crianza - ¿Qué tipo de padre/madre serías?
// Test de Paternidad/Maternidad para México

export const questions = [
  {
    id: 1,
    question: "¿Quieres tener hijos?",
    options: [
      { text: "¡Sí! Quiero una familia grande", type: "A" },
      { text: "Sí, uno o dos estaría bien", type: "B" },
      { text: "No estoy seguro/a todavía", type: "C" },
      { text: "No, prefiero no tener hijos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Cómo educarías a tus hijos?",
    options: [
      { text: "Con valores tradicionales y mucho cariño", type: "A" },
      { text: "Balance entre límites y libertad", type: "B" },
      { text: "Muy liberal, que decidan por sí mismos", type: "C" },
      { text: "No me veo en ese rol", type: "D" },
    ],
  },
  {
    id: 3,
    question: "En cuanto a disciplina...",
    options: [
      { text: "Firme pero amorosa, como me criaron", type: "A" },
      { text: "Consecuencias lógicas y comunicación", type: "B" },
      { text: "Casi nada de castigos, puro diálogo", type: "C" },
      { text: "No sabría cómo manejar eso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Dejarías que los abuelos participen mucho en la crianza?",
    options: [
      { text: "Sí, la familia extendida es importante", type: "A" },
      { text: "Algo, pero nosotros decidimos", type: "B" },
      { text: "Prefiero que no se metan mucho", type: "C" },
      { text: "No aplica para mí", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Quién debería quedarse en casa con los hijos?",
    options: [
      { text: "La mamá, es lo tradicional", type: "A" },
      { text: "El que tenga mejor situación laboral", type: "B" },
      { text: "Ambos trabajan y comparten cuidados", type: "C" },
      { text: "No me imagino en esa situación", type: "D" },
    ],
  },
  {
    id: 6,
    question: "En cuanto a la religión de tus hijos...",
    options: [
      { text: "Los bautizo y educo en la fe católica", type: "A" },
      { text: "Les enseño valores pero ellos deciden", type: "B" },
      { text: "Sin religión, que escojan de grandes", type: "C" },
      { text: "No me importa el tema", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tu hijo/a tiene un problema en la escuela...",
    options: [
      { text: "Voy de inmediato a hablar con el maestro", type: "A" },
      { text: "Primero escucho a mi hijo y luego actúo", type: "B" },
      { text: "Dejo que lo resuelva solo/a primero", type: "C" },
      { text: "No sé cómo manejaría eso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Las actividades extracurriculares...",
    options: [
      { text: "Deportes, música, idiomas, ¡de todo!", type: "A" },
      { text: "Una o dos que le gusten al niño", type: "B" },
      { text: "Solo si él/ella quiere, sin presiones", type: "C" },
      { text: "No lo he pensado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Cómo manejarías los berrinches?",
    options: [
      { text: "Con firmeza pero sin gritar", type: "A" },
      { text: "Entendiendo qué lo causó y hablando", type: "B" },
      { text: "Dejándolo que se calme solo", type: "C" },
      { text: "No tengo paciencia para eso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "El tiempo de pantallas para los niños...",
    options: [
      { text: "Muy limitado, mejor que jueguen", type: "A" },
      { text: "Moderado, con horarios", type: "B" },
      { text: "No me preocupa mucho", type: "C" },
      { text: "No he pensado en eso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Cambiarías tu estilo de vida por tus hijos?",
    options: [
      { text: "Totalmente, ellos son la prioridad", type: "A" },
      { text: "Bastante pero sin perder mi identidad", type: "B" },
      { text: "Algo pero mi vida también importa", type: "C" },
      { text: "No quiero cambiar mi vida así", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Cuántos hijos te gustaría tener?",
    options: [
      { text: "Tres o más, una familia grande", type: "A" },
      { text: "Dos, el número perfecto", type: "B" },
      { text: "Uno, si acaso", type: "C" },
      { text: "Ninguno, no quiero hijos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Padre/Madre Tradicional",
    emoji: "👨‍👩‍👧‍👦",
    description: "Serías un padre/madre a la mexicana tradicional. Familia grande, valores, disciplina amorosa y mucha participación de los abuelos. Tus hijos crecerían con mucho amor y estructura.",
    traits: ["Tradicional", "Dedicado/a", "Protector/a", "Familiero/a"],
    strengths: ["Darás estabilidad y valores", "Familia muy unida", "Hijos con estructura clara"],
    weaknesses: ["Podrías ser muy estricto/a", "Poca flexibilidad", "Los hijos podrían rebelarse"],
    tips: ["Escucha también a tus hijos", "Los tiempos cambian", "Flexibilidad también es amor"],
  },
  B: {
    type: "B",
    title: "Padre/Madre Equilibrado/a",
    emoji: "⚖️",
    description: "Serías un padre/madre moderno con balance. Combinas lo mejor de la tradición mexicana con ideas actuales de crianza. Límites claros pero también espacio para que tus hijos crezcan.",
    traits: ["Equilibrado/a", "Comunicativo/a", "Moderno/a", "Amoroso/a"],
    strengths: ["Crianza sana y moderna", "Hijos seguros pero libres", "Buena comunicación"],
    weaknesses: ["A veces dudarás qué hacer", "Presión de familia tradicional"],
    tips: ["Confía en tu instinto", "No hay manual perfecto", "El equilibrio es clave"],
  },
  C: {
    type: "C",
    title: "Padre/Madre Liberal",
    emoji: "🌈",
    description: "Serías un padre/madre muy liberal y permisivo. Crees en dar libertad a los hijos para que encuentren su camino. Poco control, mucho diálogo y respeto por su individualidad.",
    traits: ["Liberal", "Permisivo/a", "Respetuoso/a", "Relajado/a"],
    strengths: ["Hijos creativos y libres", "Buena relación de confianza", "Respetas su autonomía"],
    weaknesses: ["Podrían faltar límites", "Hijos sin estructura", "Conflicto con familia tradicional"],
    tips: ["Los límites también son amor", "La libertad necesita guía", "No tengas miedo de poner reglas"],
  },
  D: {
    type: "D",
    title: "Sin Hijos",
    emoji: "🚫",
    description: "No te ves como padre/madre. Y está perfectamente bien. Sabes que la paternidad/maternidad no es para todos y prefieres enfocar tu vida en otras cosas.",
    traits: ["Decidido/a", "Honesto/a", "Independiente", "Consciente"],
    strengths: ["Conoces tus límites", "No traerás hijos que no quieres", "Vida libre de esa responsabilidad"],
    weaknesses: ["Presión social y familiar", "Tu pareja podría querer hijos", "Podrías arrepentirte"],
    tips: ["Tu decisión es válida", "Comunícalo claramente a tu pareja", "No dejes que te presionen"],
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
