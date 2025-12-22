// Test de Intimidad en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Cómo te sientes hablando de temas íntimos con tu pareja?",
    options: [
      { text: "Súper natural, hablamos de todo sin pena", type: "A" },
      { text: "Me cuesta un poco pero lo intento", type: "B" },
      { text: "Prefiero que las cosas fluyan sin hablar tanto", type: "C" },
      { text: "Me da mucha pena, mejor lo evito", type: "D" },
    ],
  },
  {
    id: 2,
    text: "En una noche romántica en casa, ¿qué prefieres?",
    options: [
      { text: "Cenar rico, platicar y ver qué surge", type: "A" },
      { text: "Peli con mantita y muchos abrazos", type: "B" },
      { text: "Música suave y momento especial planeado", type: "C" },
      { text: "Que todo sea espontáneo, sin plan", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Qué tan importante es el contacto físico diario para ti?",
    options: [
      { text: "Esencial, necesito abrazos y besos todos los días", type: "A" },
      { text: "Importante pero no indispensable", type: "B" },
      { text: "Depende de mi estado de ánimo", type: "C" },
      { text: "No soy muy de andar de cariñoso/a", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo reaccionas cuando tu pareja quiere más cercanía y tú no estás de humor?",
    options: [
      { text: "Le explico con cariño cómo me siento", type: "A" },
      { text: "Hago el esfuerzo porque sé que es importante", type: "B" },
      { text: "Me incomoda y a veces me alejo", type: "C" },
      { text: "Me molesta que no entienda", type: "D" },
    ],
  },
  {
    id: 5,
    text: "Para ti, la intimidad perfecta incluye:",
    options: [
      { text: "Conexión emocional profunda primero", type: "A" },
      { text: "Balance entre lo emocional y lo físico", type: "B" },
      { text: "Pasión y espontaneidad ante todo", type: "C" },
      { text: "Comodidad y confianza total", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Qué tanto hablas con tu pareja sobre sus necesidades íntimas?",
    options: [
      { text: "Constantemente, es parte de nuestra relación", type: "A" },
      { text: "A veces, cuando surge el tema", type: "B" },
      { text: "Casi nunca, me cuesta trabajo", type: "C" },
      { text: "Nunca, es algo que no discutimos", type: "D" },
    ],
  },
  {
    id: 7,
    text: "Cuando hay estrés en tu vida (chamba, familia), tu intimidad:",
    options: [
      { text: "Se mantiene, es mi forma de desestresarme", type: "A" },
      { text: "Baja un poco pero regresa", type: "B" },
      { text: "Se afecta mucho, no tengo cabeza para eso", type: "C" },
      { text: "Desaparece completamente", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Cómo te sientes con las demostraciones de cariño en público?",
    options: [
      { text: "Me encantan, que el mundo vea nuestro amor", type: "A" },
      { text: "Un besito y tomarnos de la mano está bien", type: "B" },
      { text: "Prefiero ser discreto/a en público", type: "C" },
      { text: "Nada de nada, es muy privado", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Qué opinas de sorprender a tu pareja con algo íntimo especial?",
    options: [
      { text: "¡Me encanta! Lo hago seguido", type: "A" },
      { text: "A veces, en ocasiones especiales", type: "B" },
      { text: "No es muy mi estilo pero lo intentaría", type: "C" },
      { text: "Me da pena, mejor que todo sea natural", type: "D" },
    ],
  },
  {
    id: 10,
    text: "Si tu pareja te dice que necesita más intimidad, tú:",
    options: [
      { text: "Agradezco la honestidad y busco soluciones juntos", type: "A" },
      { text: "Me preocupo y trato de mejorar", type: "B" },
      { text: "Me siento presionado/a y me cuesta reaccionar", type: "C" },
      { text: "Me ofendo, ¿qué no es suficiente lo que doy?", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué tan cómodo/a te sientes con tu cuerpo frente a tu pareja?",
    options: [
      { text: "Totalmente cómodo/a, sin pena alguna", type: "A" },
      { text: "Bastante cómodo/a, con pequeñas inseguridades", type: "B" },
      { text: "Regular, a veces me da cosa", type: "C" },
      { text: "Me cuesta mucho, siempre me tapo", type: "D" },
    ],
  },
  {
    id: 12,
    text: "La intimidad para ti es sinónimo de:",
    options: [
      { text: "Amor y conexión del alma", type: "A" },
      { text: "Confianza y vulnerabilidad compartida", type: "B" },
      { text: "Pasión y deseo", type: "C" },
      { text: "Compromiso de pareja", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💫 Intimidad Plena",
    description: "Tienes una conexión íntima excepcional. Te sientes completamente cómodo/a expresando tus necesidades y deseos, y valoras profundamente la comunicación abierta. Para ti, la intimidad es la base de una relación sólida.",
    traits: ["Comunicativo/a", "Abierto/a", "Conectado/a", "Expresivo/a"],
    advice: "Tu apertura es admirable. Sigue cultivando esa comunicación honesta con tu pareja.",
  },
  B: {
    title: "⚖️ Intimidad Equilibrada",
    description: "Manejas la intimidad de forma saludable y balanceada. Aunque a veces te cuesta expresarte, haces el esfuerzo por mantener esa conexión especial. Valoras tanto lo emocional como lo físico.",
    traits: ["Equilibrado/a", "Esforzado/a", "Comprometido/a", "Adaptable"],
    advice: "Tu balance es excelente. Continúa trabajando en la comunicación para fortalecer aún más tu relación.",
  },
  C: {
    title: "🌙 Intimidad Reservada",
    description: "Prefieres que la intimidad fluya de manera natural sin forzar nada. Te cuesta un poco hablar de temas delicados y a veces te refugias en la espontaneidad. Necesitas tu espacio y tiempo.",
    traits: ["Reservado/a", "Espontáneo/a", "Independiente", "Cauteloso/a"],
    advice: "Está bien ir a tu ritmo, pero intenta abrirte un poco más. La comunicación fortalece la intimidad.",
  },
  D: {
    title: "🔒 Intimidad en Construcción",
    description: "La intimidad es un área que aún estás explorando. Te cuesta expresar tus necesidades y a veces prefieres evitar el tema. Con comunicación y paciencia puedes construir una conexión más profunda.",
    traits: ["Tímido/a", "Protector/a", "Privado/a", "En crecimiento"],
    advice: "El primer paso es reconocer que está bien pedir lo que necesitas. Tu pareja quiere conectar contigo.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
