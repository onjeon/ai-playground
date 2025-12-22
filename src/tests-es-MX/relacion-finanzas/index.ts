// Finanzas en Pareja - ¿Cómo manejan el dinero?
// Test de Finanzas en Pareja para México

export const questions = [
  {
    id: 1,
    question: "¿Cómo deberían ser las finanzas en pareja?",
    options: [
      { text: "Todo junto, lo mío es tuyo y viceversa", type: "A" },
      { text: "Cuenta conjunta para gastos comunes y cada quien la suya", type: "B" },
      { text: "Cada quien su dinero, gastos divididos", type: "C" },
      { text: "Finanzas completamente separadas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja quiere hacer una compra grande sin consultarte...",
    options: [
      { text: "Debería consultarme siempre", type: "A" },
      { text: "Si es de dinero compartido sí, si es suyo no", type: "B" },
      { text: "Es su dinero, puede hacer lo que quiera", type: "C" },
      { text: "No tengo por qué opinar en sus gastos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Cuando salen a cenar, ¿quién paga?",
    options: [
      { text: "El hombre siempre, es lo tradicional", type: "A" },
      { text: "Alternamos o dividimos", type: "B" },
      { text: "Quien invita paga", type: "C" },
      { text: "Cada quien paga lo suyo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu pareja gana mucho más que tú...",
    options: [
      { text: "Debería cubrir más gastos proporcionalmente", type: "A" },
      { text: "Compartimos parejo aunque gane más", type: "B" },
      { text: "Cada quien aporta lo que puede", type: "C" },
      { text: "Cada quien se hace cargo de lo suyo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ahorrar para el futuro juntos...",
    options: [
      { text: "Es fundamental, tenemos metas claras", type: "A" },
      { text: "Ahorramos algo juntos y algo por separado", type: "B" },
      { text: "Cada quien ahorra por su cuenta", type: "C" },
      { text: "No hemos hablado de eso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja tiene deudas...",
    options: [
      { text: "Son nuestras deudas, las pagamos juntos", type: "A" },
      { text: "Le ayudo si puede pero son suyas", type: "B" },
      { text: "Son sus deudas, las paga él/ella", type: "C" },
      { text: "No es mi problema, que las resuelva", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Hablan abiertamente de dinero?",
    options: [
      { text: "Sí, transparencia total en todo", type: "A" },
      { text: "Sí, en lo que nos compete como pareja", type: "B" },
      { text: "Algo, pero cada quien tiene lo suyo privado", type: "C" },
      { text: "No mucho, es tema delicado", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Comprar una casa juntos...",
    options: [
      { text: "Es nuestra meta, ya estamos planeando", type: "A" },
      { text: "Sí, cuando estemos más establecidos", type: "B" },
      { text: "Quizá, pero cada quien aportaría según pueda", type: "C" },
      { text: "Prefiero que cada quien tenga lo suyo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu pareja gasta en algo que consideras innecesario...",
    options: [
      { text: "Le digo que no debería gastarlo", type: "A" },
      { text: "Doy mi opinión pero respeto su decisión", type: "B" },
      { text: "Es su dinero, puede gastarlo como quiera", type: "C" },
      { text: "No es mi asunto", type: "D" },
    ],
  },
  {
    id: 10,
    question: "En una crisis económica...",
    options: [
      { text: "Enfrentamos juntos, con todo compartido", type: "A" },
      { text: "Nos apoyamos pero cada quien con sus recursos", type: "B" },
      { text: "Cada quien resuelve lo suyo pero nos apoyamos moralmente", type: "C" },
      { text: "Cada quien tiene que salir adelante solo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Gastos de la casa (renta, servicios)...",
    options: [
      { text: "50/50 exacto o todo de una sola cuenta", type: "A" },
      { text: "Proporcional a lo que cada quien gana", type: "B" },
      { text: "Dividimos pero cada quien los suyos", type: "C" },
      { text: "Quien más usa, más paga", type: "D" },
    ],
  },
  {
    id: 12,
    question: "El dinero en pareja genera...",
    options: [
      { text: "Unión, si lo manejamos bien juntos", type: "A" },
      { text: "Conversaciones importantes que hay que tener", type: "B" },
      { text: "A veces tensión, mejor separarlo", type: "C" },
      { text: "Problemas, por eso prefiero mantenerlo aparte", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Finanzas Unidas",
    emoji: "💑",
    description: "Crees en unir las finanzas completamente. Lo de uno es de ambos. Es el modelo tradicional mexicano donde todo se comparte. Requiere mucha confianza y comunicación.",
    traits: ["Tradicional", "Compartido", "Confiado", "Unido"],
    strengths: ["Metas claras juntos", "Transparencia total", "Trabajo en equipo"],
    weaknesses: ["Conflictos si uno gasta más", "Pérdida de independencia", "Riesgo si algo sale mal"],
    tips: ["Comunicación es clave", "Establezcan presupuestos", "Acuerden en gastos grandes"],
  },
  B: {
    type: "B",
    title: "Finanzas Equilibradas",
    emoji: "⚖️",
    description: "Tienes el balance ideal: cuenta conjunta para gastos comunes y cuentas individuales para lo personal. Lo mejor de ambos mundos: unión e independencia.",
    traits: ["Equilibrado", "Práctico", "Organizado", "Justo"],
    strengths: ["Independencia financiera", "Responsabilidades claras", "Menos conflictos"],
    weaknesses: ["Requiere organización", "A veces confuso"],
    tips: ["Tu modelo es muy sano", "Sigan comunicándose", "Revisen el sistema regularmente"],
  },
  C: {
    type: "C",
    title: "Finanzas Separadas",
    emoji: "📊",
    description: "Prefieres mantener las finanzas separadas. Cada quien es responsable de lo suyo. Valoras tu independencia financiera pero comparten gastos específicos.",
    traits: ["Independiente", "Práctico", "Autónomo", "Cauteloso"],
    strengths: ["Total independencia", "Sin conflictos por dinero", "Cada quien responsable de lo suyo"],
    weaknesses: ["Puede parecer desconfiado", "Menos sentido de equipo", "Difícil en metas grandes"],
    tips: ["Está bien si ambos están de acuerdo", "Piensen en metas grandes juntos", "Comuniquen expectativas"],
  },
  D: {
    type: "D",
    title: "Finanzas Individuales",
    emoji: "🔒",
    description: "Quieres finanzas completamente individuales. Cada quien lo suyo sin mezclarse. Esto puede funcionar pero también puede indicar falta de compromiso o desconfianza.",
    traits: ["Muy independiente", "Desconfiado", "Separado", "Autosuficiente"],
    strengths: ["Total control de tu dinero", "Sin compromisos financieros", "Libertad total"],
    weaknesses: ["Falta de unión", "Difícil construir juntos", "Puede indicar problemas"],
    tips: ["Evalúa por qué no quieres compartir", "Una relación requiere algo de interdependencia", "Comunica tus miedos"],
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
