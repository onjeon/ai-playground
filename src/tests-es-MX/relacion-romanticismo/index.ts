// Nivel de Romanticismo - ¿Qué tan romántico/a eres?
// Test de Romanticismo para México

export const questions = [
  {
    id: 1,
    question: "El 14 de febrero es...",
    options: [
      { text: "El día más importante del año para mí", type: "A" },
      { text: "Un día bonito para celebrar el amor", type: "B" },
      { text: "Un día como cualquier otro", type: "C" },
      { text: "Puro comercio, no me interesa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Cada cuánto le dices 'te amo' a tu pareja?",
    options: [
      { text: "Varias veces al día, no puedo evitarlo", type: "A" },
      { text: "Todos los días, es importante", type: "B" },
      { text: "De vez en cuando, cuando lo siento", type: "C" },
      { text: "Casi nunca, prefiero demostrarlo con acciones", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Una serenata sería...",
    options: [
      { text: "El gesto más romántico que podría recibir", type: "A" },
      { text: "Muy lindo, me encantaría", type: "B" },
      { text: "Me daría un poco de pena pero lindo", type: "C" },
      { text: "Demasiado, no me gustan los shows públicos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Planeas sorpresas románticas para tu pareja?",
    options: [
      { text: "Sí, todo el tiempo, me encanta sorprender", type: "A" },
      { text: "En ocasiones especiales sí", type: "B" },
      { text: "A veces, cuando se me ocurre algo", type: "C" },
      { text: "No mucho, no soy de sorpresas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Las películas románticas...",
    options: [
      { text: "Me encantan, las veo siempre", type: "A" },
      { text: "Me gustan de vez en cuando", type: "B" },
      { text: "No son mi favoritas pero las veo", type: "C" },
      { text: "No me gustan para nada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Recuerdas fechas importantes como aniversarios?",
    options: [
      { text: "Todas, incluso nuestro primer beso", type: "A" },
      { text: "Las principales sí", type: "B" },
      { text: "A veces se me olvidan", type: "C" },
      { text: "No me fijo mucho en fechas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Le escribirías una carta de amor a tu pareja?",
    options: [
      { text: "Ya lo he hecho varias veces", type: "A" },
      { text: "Sí, en ocasiones especiales", type: "B" },
      { text: "Quizá, pero me cuesta expresarme así", type: "C" },
      { text: "No, me parece cursi", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Las demostraciones públicas de afecto (besos, abrazos)...",
    options: [
      { text: "Me encantan, no me importa quién vea", type: "A" },
      { text: "Están bien con moderación", type: "B" },
      { text: "Prefiero lo privado", type: "C" },
      { text: "Me incomodan mucho", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Qué tan importante son los detalles para ti?",
    options: [
      { text: "Muy importantes, los detalles lo son todo", type: "A" },
      { text: "Importantes, demuestran que piensan en ti", type: "B" },
      { text: "Están bien pero no son necesarios", type: "C" },
      { text: "No les doy mucha importancia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu cita perfecta incluiría...",
    options: [
      { text: "Velas, flores, música romántica y declaraciones", type: "A" },
      { text: "Una cena bonita y tiempo de calidad", type: "B" },
      { text: "Algo divertido y relajado", type: "C" },
      { text: "Lo que sea, no necesito nada elaborado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Crees en el amor de películas?",
    options: [
      { text: "Sí, y lo busco en mi vida", type: "A" },
      { text: "Es bonito pero la realidad es diferente", type: "B" },
      { text: "No mucho, es fantasía", type: "C" },
      { text: "Para nada, eso no existe", type: "D" },
    ],
  },
  {
    id: 12,
    question: "El romance en la vida diaria es...",
    options: [
      { text: "Esencial, hay que mantener la chispa siempre", type: "A" },
      { text: "Importante pero no todo el tiempo", type: "B" },
      { text: "Bonito pero la vida real es diferente", type: "C" },
      { text: "No es prioridad, hay cosas más importantes", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Súper Romántico/a",
    emoji: "💕",
    description: "Eres el/la más romántico/a que existe. Vives el amor como en las películas. Serenatas, cartas, flores y declaraciones son tu estilo. En México representas el romanticismo clásico.",
    traits: ["Muy romántico/a", "Expresivo/a", "Detallista", "Apasionado/a"],
    strengths: ["Tu pareja se siente muy amada", "Mantienes la chispa", "Creas momentos mágicos"],
    weaknesses: ["Expectativas muy altas", "Puede ser demasiado", "Decepción cuando no es recíproco"],
    tips: ["No todos son igual de románticos", "La realidad también es bonita", "Aprecia los gestos simples"],
  },
  B: {
    type: "B",
    title: "Romántico/a Equilibrado/a",
    emoji: "🌹",
    description: "Tienes un nivel de romanticismo sano y equilibrado. Valoras los gestos románticos pero sin exagerar. Sabes crear momentos especiales cuando importa.",
    traits: ["Equilibrado/a", "Considerado/a", "Presente", "Detallista"],
    strengths: ["Romance sin presión", "Gestos significativos", "Balance perfecto"],
    weaknesses: ["A veces podrías ser más expresivo/a", "Tu pareja podría querer más"],
    tips: ["Tu equilibrio es ideal", "No pierdas los detalles", "Sigue siendo atento/a"],
  },
  C: {
    type: "C",
    title: "Poco Romántico/a",
    emoji: "😐",
    description: "El romanticismo no es lo tuyo. Prefieres demostrar amor con acciones prácticas que con gestos cursis. No eres de flores y cartas, pero eso no significa que no ames.",
    traits: ["Práctico/a", "Reservado/a", "Directo/a", "Sincero/a"],
    strengths: ["Amor real, no de show", "Sin falsas expectativas", "Demuestras con hechos"],
    weaknesses: ["Tu pareja podría extrañar romance", "Pareces frío/a", "Te pierdes de momentos bonitos"],
    tips: ["Un poco de romance no hace daño", "Tu pareja podría necesitarlo", "Sal de tu zona de confort a veces"],
  },
  D: {
    type: "D",
    title: "Anti-Romántico/a",
    emoji: "🙅",
    description: "El romanticismo te parece cursi y superficial. No crees en gestos elaborados ni en fechas comerciales. Para ti el amor se demuestra en el día a día, no en shows.",
    traits: ["Práctico/a", "Escéptico/a", "Directo/a", "Realista"],
    strengths: ["No te dejas llevar por lo superficial", "Amor genuino", "Sin falsas ilusiones"],
    weaknesses: ["Puedes lastimar a parejas románticas", "Te pierdes de experiencias", "Pareces insensible"],
    tips: ["El romance tiene su lugar", "No todo es cursi", "Considera los sentimientos de tu pareja"],
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
