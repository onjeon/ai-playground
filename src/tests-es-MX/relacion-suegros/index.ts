// Relación con los Suegros - ¿Cómo te llevas con tus suegros?
// Test de Relación con Suegros para México

export const questions = [
  {
    id: 1,
    question: "Cuando tu suegra te invita a comer a su casa...",
    options: [
      { text: "¡Voy encantado/a! Me cae muy bien", type: "A" },
      { text: "Voy con gusto, es importante para mi pareja", type: "B" },
      { text: "Voy pero preferiría no ir", type: "C" },
      { text: "Busco excusas para no ir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu suegra opina sobre cómo deberían hacer las cosas en su relación...",
    options: [
      { text: "Escucho su consejo, tiene experiencia", type: "A" },
      { text: "La escucho por respeto pero decido yo", type: "B" },
      { text: "Me molesta pero no digo nada", type: "C" },
      { text: "Le digo que no se meta en nuestra vida", type: "D" },
    ],
  },
  {
    id: 3,
    question: "El Día de las Madres hay que decidir con quién pasarlo...",
    options: [
      { text: "Fácil, vamos con las dos mamás juntas", type: "A" },
      { text: "Dividimos el día, un rato con cada una", type: "B" },
      { text: "Siempre hay drama por esto", type: "C" },
      { text: "Cada quien con su mamá, problema resuelto", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu suegro te pide ayuda con algo del hogar...",
    options: [
      { text: "Con gusto, es como mi segundo papá", type: "A" },
      { text: "Le ayudo, es parte de la familia", type: "B" },
      { text: "Lo hago pero sin muchas ganas", type: "C" },
      { text: "Prefiero no involucrarme", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo describes tu relación con tus suegros?",
    options: [
      { text: "Excelente, los quiero como a mis papás", type: "A" },
      { text: "Buena, nos llevamos bien", type: "B" },
      { text: "Cordial pero distante", type: "C" },
      { text: "Difícil o conflictiva", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tus suegros vienen de visita por varios días...",
    options: [
      { text: "¡Qué bueno! Me da gusto verlos", type: "A" },
      { text: "Está bien, los recibimos con gusto", type: "B" },
      { text: "Aguanto pero cuento los días", type: "C" },
      { text: "Es mi peor pesadilla", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tu suegra cocina diferente a como te gusta...",
    options: [
      { text: "Su comida es deliciosa, me encanta", type: "A" },
      { text: "Como con gusto aunque no sea mi favorita", type: "B" },
      { text: "Como por educación pero no disfruto", type: "C" },
      { text: "Prefiero no comer su comida", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Hay un desacuerdo entre tú y tus suegros...",
    options: [
      { text: "Lo platicamos y lo resolvemos con respeto", type: "A" },
      { text: "Mi pareja media y buscamos solución", type: "B" },
      { text: "Evito el conflicto pero guardo resentimiento", type: "C" },
      { text: "Exploto y hay pleito", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu pareja es muy unido/a a sus papás...",
    options: [
      { text: "Me parece bien, también lo soy con los míos", type: "A" },
      { text: "Lo respeto y apoyo esa relación", type: "B" },
      { text: "A veces siento que los prefiere a mí", type: "C" },
      { text: "Me molesta, debe priorizar nuestra relación", type: "D" },
    ],
  },
  {
    id: 10,
    question: "¿Ayudarías económicamente a tus suegros si lo necesitan?",
    options: [
      { text: "Claro, son familia también", type: "A" },
      { text: "Si mi pareja quiere, lo apoyamos", type: "B" },
      { text: "Solo si realmente es necesario", type: "C" },
      { text: "Que su familia se haga cargo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "En Navidad, ¿cómo organizan las celebraciones?",
    options: [
      { text: "Todos juntos, una gran celebración", type: "A" },
      { text: "Alternamos años o dividimos el día", type: "B" },
      { text: "Es un tema complicado cada año", type: "C" },
      { text: "Cada familia por separado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Si pudieras elegir la relación ideal con tus suegros...",
    options: [
      { text: "Ya la tengo, me saqué la lotería", type: "A" },
      { text: "Cercana pero con límites", type: "B" },
      { text: "Cordial y a distancia", type: "C" },
      { text: "Mientras menos los vea, mejor", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Suegros de Oro",
    emoji: "🥇",
    description: "¡Te sacaste la lotería con tus suegros! Los quieres como a tu propia familia. En México esto es una bendición porque la familia política puede ser complicada. Valoras esta relación y la cultivas.",
    traits: ["Afortunado/a", "Familiero/a", "Agradecido/a", "Armonioso/a"],
    strengths: ["Tienes apoyo extra", "No hay conflictos familiares", "Tu pareja está feliz"],
    weaknesses: ["Cuidado con perder límites", "No todo es perfecto siempre"],
    tips: ["Aprecia esta bendición", "Mantén límites sanos aunque te lleves bien", "Sigue cultivando la relación"],
  },
  B: {
    type: "B",
    title: "Relación Cordial",
    emoji: "🤝",
    description: "Tienes una relación sana y equilibrada con tus suegros. Te llevas bien sin pretender ser mejores amigos. Mantienes el respeto y la cordialidad. Es una relación funcional y madura.",
    traits: ["Respetuoso/a", "Equilibrado/a", "Diplomático/a", "Maduro/a"],
    strengths: ["Hay respeto mutuo", "No hay dramas innecesarios", "Funcionan bien como familia extendida"],
    weaknesses: ["Puede faltar cercanía emocional", "A veces se siente distante"],
    tips: ["Tu relación es saludable", "Busca momentos para acercarte más", "La cordialidad es valiosa"],
  },
  C: {
    type: "C",
    title: "Relación Tensa",
    emoji: "😬",
    description: "Tu relación con los suegros no es la mejor. Hay tensión aunque trates de ocultarla. Los clásicos problemas de 'la suegra' mexicana pueden estar presentes. Aguantas más de lo que deberías.",
    traits: ["Tenso/a", "Aguantador/a", "Incómodo/a", "Resentido/a"],
    strengths: ["Mantienes la paz por tu pareja", "Evitas conflictos abiertos", "Eres paciente"],
    weaknesses: ["Acumulas resentimiento", "Afecta tu relación de pareja", "Vives incómodo/a"],
    tips: ["Habla con tu pareja sobre cómo te sientes", "Pon límites con respeto", "No aguantes lo que te lastima"],
  },
  D: {
    type: "D",
    title: "Relación Difícil",
    emoji: "⚠️",
    description: "La relación con tus suegros es complicada o conflictiva. Hay roces, desacuerdos o simplemente no se llevan. En la cultura mexicana donde la familia es central, esto puede ser muy difícil de manejar.",
    traits: ["Conflictivo/a", "Distante", "Frustrado/a", "A la defensiva"],
    strengths: ["Has puesto límites claros", "Proteges tu relación de pareja", "No finges lo que no sientes"],
    weaknesses: ["Genera tensión con tu pareja", "Las reuniones son difíciles", "Puede afectar a toda la familia"],
    tips: ["Busquen terapia de pareja si es necesario", "Tu pareja debe poner límites a su familia", "No todo se puede arreglar pero sí manejar"],
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
