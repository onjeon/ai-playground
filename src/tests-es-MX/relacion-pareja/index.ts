// Estilo de Pareja - ¿Qué tipo de pareja eres?
// Test de Estilo de Pareja para México

export const questions = [
  {
    id: 1,
    question: "¿Cómo describes tu relación ideal?",
    options: [
      { text: "Súper románticos y melosos todo el tiempo", type: "A" },
      { text: "Compañeros de vida que se apoyan", type: "B" },
      { text: "Independientes pero unidos", type: "C" },
      { text: "Aventureros que viven al máximo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Un domingo típico con tu pareja sería...",
    options: [
      { text: "Desayuno en la cama con películas románticas", type: "A" },
      { text: "Visita a la familia y comida en casa de la suegra", type: "B" },
      { text: "Cada quien en sus actividades y luego juntarnos", type: "C" },
      { text: "Explorar un lugar nuevo o hacer algo extremo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo manejas los desacuerdos con tu pareja?",
    options: [
      { text: "Los hablamos de inmediato con mucho amor", type: "A" },
      { text: "Lo platicamos en familia para pedir consejos", type: "B" },
      { text: "Nos damos espacio y luego lo resolvemos", type: "C" },
      { text: "Lo convertimos en algo divertido o broma", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Qué rol tienes usualmente en la relación?",
    options: [
      { text: "El/la romántico/a que planea sorpresas", type: "A" },
      { text: "El/la que mantiene la estabilidad y el hogar", type: "B" },
      { text: "El/la que pone límites saludables", type: "C" },
      { text: "El/la que propone cosas nuevas y locas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "En las fiestas familiares mexicanas, ¿cómo son como pareja?",
    options: [
      { text: "De la mano todo el tiempo, muy cariñosos", type: "A" },
      { text: "Ayudando juntos en la cocina y con los niños", type: "B" },
      { text: "Cada quien platica con su grupo pero nos vemos", type: "C" },
      { text: "Los que ponen el ambiente y sacan a bailar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo toman decisiones importantes?",
    options: [
      { text: "Lo que sea que nos haga felices juntos", type: "A" },
      { text: "Consultamos con la familia y pensamos a futuro", type: "B" },
      { text: "Respetamos la opinión del otro y negociamos", type: "C" },
      { text: "Seguimos nuestra intuición y nos aventamos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Qué tipo de vacaciones prefieren?",
    options: [
      { text: "Playa romántica, solo nosotros dos", type: "A" },
      { text: "Viaje familiar a visitar parientes", type: "B" },
      { text: "Viajes separados a veces, juntos otras", type: "C" },
      { text: "Mochileros explorando destinos nuevos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Cómo es su comunicación diaria?",
    options: [
      { text: "Mensajes de amor todo el día", type: "A" },
      { text: "Lo importante y organización del hogar", type: "B" },
      { text: "Check-ins cortos, cada quien en lo suyo", type: "C" },
      { text: "Memes, bromas y planes locos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Qué es lo más importante en su relación?",
    options: [
      { text: "El romance y la pasión constante", type: "A" },
      { text: "La familia, el respeto y la tradición", type: "B" },
      { text: "El respeto mutuo y la individualidad", type: "C" },
      { text: "La diversión y vivir experiencias juntos", type: "D" },
    ],
  },
  {
    id: 10,
    question: "¿Cómo celebran su aniversario?",
    options: [
      { text: "Cena romántica con velas y música", type: "A" },
      { text: "Misa de acción de gracias y comida familiar", type: "B" },
      { text: "Algo especial pero sin exagerar", type: "C" },
      { text: "Una aventura loca o viaje sorpresa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Cómo manejan el dinero en pareja?",
    options: [
      { text: "Todo junto, lo mío es tuyo", type: "A" },
      { text: "Cuenta conjunta para gastos del hogar", type: "B" },
      { text: "Cada quien su dinero, gastos compartidos", type: "C" },
      { text: "No nos complicamos, vivimos el momento", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Cuál es su mayor fortaleza como pareja?",
    options: [
      { text: "El amor intenso que nos tenemos", type: "A" },
      { text: "Somos un gran equipo y familia", type: "B" },
      { text: "Nos respetamos y damos libertad", type: "C" },
      { text: "Nunca nos aburrimos juntos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Pareja Romántica",
    emoji: "💕",
    description: "Son la pareja romántica por excelencia. Viven en una telenovela de amor constante. Les encanta el romance mexicano: serenatas, flores y declaraciones de amor. Son melosos y no les importa demostrarlo.",
    traits: ["Apasionados", "Expresivos", "Cariñosos", "Soñadores"],
    strengths: ["Mantienen viva la chispa", "Son muy expresivos", "Hacen sentir especial al otro"],
    weaknesses: ["Pueden ser muy intensos", "A veces poco prácticos"],
    tips: ["Balanceen romance con realidad", "Den espacio también", "No olviden los aspectos prácticos"],
  },
  B: {
    type: "B",
    title: "Pareja Familiar",
    emoji: "👨‍👩‍👧‍👦",
    description: "Son la pareja tradicional mexicana. La familia es lo primero. Valoran las tradiciones, el respeto y construir un hogar sólido. Los domingos en casa de la abuela son sagrados para ustedes.",
    traits: ["Tradicionales", "Familieros", "Estables", "Comprometidos"],
    strengths: ["Construyen bases sólidas", "Tienen valores firmes", "Son confiables"],
    weaknesses: ["Pueden ser muy tradicionales", "A veces les falta espontaneidad"],
    tips: ["Hagan cosas solo de pareja también", "No dejen que la familia opine todo", "Innoven de vez en cuando"],
  },
  C: {
    type: "C",
    title: "Pareja Independiente",
    emoji: "🦋",
    description: "Son una pareja moderna que valora el espacio personal. Se aman pero también aman su individualidad. No necesitan estar pegados 24/7 para saber que se quieren. Respetan la libertad del otro.",
    traits: ["Independientes", "Respetuosos", "Maduros", "Equilibrados"],
    strengths: ["Se dan espacio saludable", "No son celosos", "Tienen identidad propia"],
    weaknesses: ["Pueden parecer distantes", "A veces falta conexión emocional"],
    tips: ["Asegúrense de tener momentos de pareja", "Comuniquen sus necesidades", "No sean tan independientes que se alejen"],
  },
  D: {
    type: "D",
    title: "Pareja Aventurera",
    emoji: "🎢",
    description: "Son la pareja que nunca se aburre. Siempre están planeando la siguiente aventura. Desde probar tacos en la calle hasta viajar a lugares desconocidos. La vida con ustedes es una fiesta constante.",
    traits: ["Aventureros", "Espontáneos", "Divertidos", "Creativos"],
    strengths: ["Nunca se aburren", "Crean memorias increíbles", "Son muy divertidos"],
    weaknesses: ["Pueden evitar temas serios", "A veces falta estabilidad"],
    tips: ["Equilibren diversión con responsabilidad", "Hablen de temas importantes también", "No huyan de la rutina necesaria"],
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
