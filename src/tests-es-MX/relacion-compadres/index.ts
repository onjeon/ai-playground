// Test de Relación con Compadres

export const questions = [
  {
    id: 1,
    text: "¿Cómo eligieron a los padrinos de sus hijos o de ustedes como pareja?",
    options: [
      { text: "Entre los dos, buscando a los mejores candidatos", type: "A" },
      { text: "Cada quien propuso opciones y llegamos a un acuerdo", type: "B" },
      { text: "Uno decidió más que el otro", type: "C" },
      { text: "Fue una decisión difícil con algo de conflicto", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Qué tan cercanos son con sus compadres?",
    options: [
      { text: "Muy cercanos, son como familia", type: "A" },
      { text: "Nos vemos seguido y nos llevamos bien", type: "B" },
      { text: "Solo en eventos especiales", type: "C" },
      { text: "La relación es distante o complicada", type: "D" },
    ],
  },
  {
    id: 3,
    text: "Cuando hay reuniones con compadres, ¿cómo la pasan?",
    options: [
      { text: "Increíble, son de las mejores convivencias", type: "A" },
      { text: "Bien, nos divertimos y la pasamos rico", type: "B" },
      { text: "Normal, a veces hay tensiones", type: "C" },
      { text: "Incómodo, preferimos evitar", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo manejan si un compadre les pide un favor grande?",
    options: [
      { text: "Lo consultamos y si podemos, ayudamos sin dudar", type: "A" },
      { text: "Analizamos si es viable antes de comprometernos", type: "B" },
      { text: "Uno quiere ayudar más que el otro", type: "C" },
      { text: "Preferimos no meternos en compromisos grandes", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Qué opinan sobre pedirle dinero prestado a un compadre?",
    options: [
      { text: "Si es necesario, la confianza está", type: "A" },
      { text: "Solo en emergencias y con plan de pago", type: "B" },
      { text: "Preferimos evitarlo para no complicar la relación", type: "C" },
      { text: "Nunca, el dinero y la amistad no se mezclan", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Los compadres se meten en sus decisiones de pareja?",
    options: [
      { text: "No, respetan nuestro espacio", type: "A" },
      { text: "A veces opinan pero sin pasarse", type: "B" },
      { text: "Más de lo que quisiéramos", type: "C" },
      { text: "Sí y causa problemas entre nosotros", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Cómo celebran el Día del Compadre?",
    options: [
      { text: "Con fiesta, regalos y todo el cariño", type: "A" },
      { text: "Un detallito y felicitación sincera", type: "B" },
      { text: "Un mensaje de WhatsApp", type: "C" },
      { text: "No lo celebramos", type: "D" },
    ],
  },
  {
    id: 8,
    text: "Si un compadre tiene problemas matrimoniales, ¿qué hacen?",
    options: [
      { text: "Estamos ahí para apoyar y escuchar", type: "A" },
      { text: "Damos consejo si nos lo piden", type: "B" },
      { text: "Preferimos no meternos en esos temas", type: "C" },
      { text: "Nos incomoda y no sabemos qué hacer", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Confían en sus compadres para cuidar a sus hijos?",
    options: [
      { text: "Totalmente, son como segundos padres", type: "A" },
      { text: "Sí, aunque no muy seguido", type: "B" },
      { text: "Con algunas reservas", type: "C" },
      { text: "Preferimos no dejarlos con ellos", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Han tenido conflictos serios con algún compadre?",
    options: [
      { text: "Nunca, todo fluye muy bien", type: "A" },
      { text: "Alguna vez pero lo resolvimos", type: "B" },
      { text: "Sí, y afectó la relación", type: "C" },
      { text: "Sí, ya no nos hablamos con alguno", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué tan involucrados están los compadres en la vida de sus ahijados?",
    options: [
      { text: "Muy involucrados, cumplen su rol perfectamente", type: "A" },
      { text: "Presentes en momentos importantes", type: "B" },
      { text: "Poco involucrados pero la intención está", type: "C" },
      { text: "Casi nada, solo fueron al bautizo", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ustedes, el compadrazgo significa:",
    options: [
      { text: "Un vínculo sagrado y para toda la vida", type: "A" },
      { text: "Una extensión de la familia", type: "B" },
      { text: "Una tradición importante pero flexible", type: "C" },
      { text: "Un compromiso social más que personal", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🤝 Compadrazgo Ejemplar",
    description: "Tienen una relación de compadrazgo como debe ser: cercana, respetuosa y llena de cariño. Sus compadres son familia elegida y el vínculo es fuerte. Son ejemplo de cómo mantener esta hermosa tradición mexicana.",
    traits: ["Unidos", "Tradicionales", "Cercanos", "Comprometidos"],
    advice: "¡Sigan cultivando esa relación! Los buenos compadres son un tesoro.",
  },
  B: {
    title: "👍 Compadrazgo Saludable",
    description: "Mantienen una buena relación con sus compadres, con el balance adecuado entre cercanía y espacio. Se apoyan cuando es necesario y celebran juntos los momentos importantes.",
    traits: ["Equilibrados", "Respetuosos", "Presentes", "Armoniosos"],
    advice: "Van muy bien. Podrían buscar más momentos de convivencia para fortalecer el vínculo.",
  },
  C: {
    title: "😐 Compadrazgo Tibio",
    description: "La relación con sus compadres existe pero no es tan cercana como podría ser. Quizá hubo expectativas diferentes o simplemente la vida los ha alejado un poco.",
    traits: ["Distantes", "Formales", "Ocupados", "Neutrales"],
    advice: "El compadrazgo es una bendición cuando se cultiva. Intenten reconectar.",
  },
  D: {
    title: "😔 Compadrazgo Complicado",
    description: "Hay tensiones o distancia significativa en su relación de compadrazgo. Esto puede ser incómodo, especialmente en reuniones familiares o eventos importantes.",
    traits: ["Distanciados", "En conflicto", "Incómodos", "Separados"],
    advice: "Si es posible, vale la pena intentar sanar la relación. Si no, está bien aceptarlo y seguir adelante.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
