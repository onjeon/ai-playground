// Test de Fidelidad en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Qué es fidelidad para ti?",
    options: [
      { text: "Compromiso total: físico, emocional y mental", type: "A" },
      { text: "No tener relaciones físicas con otra persona", type: "B" },
      { text: "No enamorarse de alguien más", type: "C" },
      { text: "Depende de lo que acordemos como pareja", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo reaccionarías si descubres que tu pareja coquetea con alguien?",
    options: [
      { text: "Lo platico con calma para entender qué pasó", type: "A" },
      { text: "Me molesta pero depende de qué tan serio fue", type: "B" },
      { text: "Es inaceptable, coquetear ya es infidelidad", type: "C" },
      { text: "Si solo fue coqueteo, no es gran cosa", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Tienes amigos/as del sexo opuesto muy cercanos?",
    options: [
      { text: "Sí, y mi pareja los conoce y confía en mí", type: "A" },
      { text: "Algunos, pero mantengo límites claros", type: "B" },
      { text: "No, prefiero evitar situaciones incómodas", type: "C" },
      { text: "No me parece relevante para la fidelidad", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Compartes las contraseñas de tu celular y redes con tu pareja?",
    options: [
      { text: "Sí, no tengo nada que esconder", type: "A" },
      { text: "Las sabe pero no revisa, es confianza mutua", type: "B" },
      { text: "No, cada quien merece privacidad", type: "C" },
      { text: "No, pero me molestaría si me las pidiera", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Cómo manejas cuando alguien te tira la onda estando en pareja?",
    options: [
      { text: "Dejo claro que estoy en una relación y pongo límites", type: "A" },
      { text: "Lo ignoro y no le doy importancia", type: "B" },
      { text: "Me halaga pero no pasa de ahí", type: "C" },
      { text: "Depende de quién sea, puedo seguir la plática", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Qué opinas de los mensajes cariñosos con ex parejas?",
    options: [
      { text: "Inaceptable, los ex son ex por algo", type: "A" },
      { text: "Depende del contexto y la confianza", type: "B" },
      { text: "Si es solo amistad, no hay problema", type: "C" },
      { text: "Cada quien maneja sus relaciones pasadas", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Han tenido conversaciones claras sobre qué es infidelidad para ustedes?",
    options: [
      { text: "Sí, tenemos muy claro los límites", type: "A" },
      { text: "Lo hemos hablado de forma general", type: "B" },
      { text: "No directamente, asumimos que pensamos igual", type: "C" },
      { text: "No, es un tema incómodo", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Perdonarías una infidelidad?",
    options: [
      { text: "Depende de las circunstancias, pero sería muy difícil", type: "A" },
      { text: "Lo intentaría pero necesitaría mucho trabajo", type: "B" },
      { text: "No, es algo que no perdono", type: "C" },
      { text: "Sí, todos cometemos errores", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Te sientes seguro/a de la fidelidad de tu pareja?",
    options: [
      { text: "Totalmente, confío al 100%", type: "A" },
      { text: "Sí, aunque a veces me pongo algo celoso/a", type: "B" },
      { text: "Tengo algunas dudas ocasionalmente", type: "C" },
      { text: "No mucho, he tenido razones para desconfiar", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo manejan las despedidas de soltero/a?",
    options: [
      { text: "Con confianza, sabemos que hay límites", type: "A" },
      { text: "Preferimos ir juntos o no hacer algo extremo", type: "B" },
      { text: "Con reglas muy claras de qué se puede y qué no", type: "C" },
      { text: "Son fuente de estrés y discusiones", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué tan importante es la transparencia en tu relación?",
    options: [
      { text: "Fundamental, nos contamos todo", type: "A" },
      { text: "Importante, aunque hay cosas que son solo mías", type: "B" },
      { text: "Regular, cada quien tiene derecho a su espacio", type: "C" },
      { text: "No me gusta tener que dar explicaciones", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, la fidelidad es:",
    options: [
      { text: "La base de cualquier relación seria", type: "A" },
      { text: "Muy importante pero construida con confianza, no control", type: "B" },
      { text: "Un ideal que a veces es difícil de mantener", type: "C" },
      { text: "Algo que cada pareja define a su manera", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💍 Fidelidad Total",
    description: "Para ti la fidelidad es innegociable y abarca todos los aspectos de la relación. Tienes límites claros y esperas lo mismo de tu pareja. La confianza es la base de todo para ti.",
    traits: ["Comprometido/a", "Claro/a", "Leal", "Comunicativo/a"],
    advice: "Tu compromiso es admirable. Solo asegúrate de que los límites sean acordados, no impuestos.",
  },
  B: {
    title: "⚖️ Fidelidad Equilibrada",
    description: "Valoras la fidelidad pero entiendes que la confianza se construye, no se exige. Tienes límites saludables y crees en la comunicación abierta sobre estos temas.",
    traits: ["Equilibrado/a", "Maduro/a", "Confiado/a", "Flexible"],
    advice: "Tu enfoque es muy saludable. Sigue cultivando esa comunicación abierta.",
  },
  C: {
    title: "🔐 Fidelidad Estricta",
    description: "Tienes reglas muy claras sobre qué es aceptable y qué no. A veces esto puede venir de experiencias pasadas o de una visión muy tradicional del compromiso.",
    traits: ["Estricto/a", "Tradicional", "Protector/a", "Celoso/a"],
    advice: "Tus límites son válidos, pero asegúrate de que no sean tan rígidos que generen tensión innecesaria.",
  },
  D: {
    title: "🦋 Fidelidad Flexible",
    description: "Tienes una visión más abierta de lo que significa ser fiel. Crees que cada pareja debe definir sus propios términos y no te aferras a definiciones tradicionales.",
    traits: ["Flexible", "Liberal", "Independiente", "Moderno/a"],
    advice: "Tu flexibilidad puede ser positiva si ambos están de acuerdo. Asegúrate de que haya claridad mutua.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
