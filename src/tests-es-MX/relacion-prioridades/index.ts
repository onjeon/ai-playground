// Test de Prioridades en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Qué es lo más importante en tu vida actualmente?",
    options: [
      { text: "Mi relación de pareja", type: "A" },
      { text: "Mi familia (incluyendo pareja e hijos)", type: "B" },
      { text: "Mi carrera y desarrollo profesional", type: "C" },
      { text: "Mi bienestar personal y crecimiento", type: "D" },
    ],
  },
  {
    id: 2,
    text: "Si tuvieras que elegir entre un ascenso que implica viajar mucho y tu relación, ¿qué harías?",
    options: [
      { text: "Rechazaría el ascenso, mi pareja es prioridad", type: "A" },
      { text: "Lo discutiríamos juntos y decidiríamos", type: "B" },
      { text: "Aceptaría y buscaríamos adaptarnos", type: "C" },
      { text: "Mi carrera es importante, lo aceptaría", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cuánto tiempo de calidad le dedicas a tu pareja semanalmente?",
    options: [
      { text: "Mucho, es mi prioridad número uno", type: "A" },
      { text: "Suficiente, balanceamos bien", type: "B" },
      { text: "Podría ser más pero la vida está ocupada", type: "C" },
      { text: "Poco, otras cosas demandan mi tiempo", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo priorizas entre tu familia de origen y tu pareja?",
    options: [
      { text: "Mi pareja siempre es primero", type: "A" },
      { text: "Depende de la situación, ambos son importantes", type: "B" },
      { text: "Mi familia de origen tiene mucho peso", type: "C" },
      { text: "Mi familia de origen es mi prioridad", type: "D" },
    ],
  },
  {
    id: 5,
    text: "Cuando tienes un logro importante, ¿con quién lo celebras primero?",
    options: [
      { text: "Con mi pareja, es quien más me importa", type: "A" },
      { text: "Con mi pareja y después con otros", type: "B" },
      { text: "Con quien esté disponible en el momento", type: "C" },
      { text: "Con mis amigos o familia, luego mi pareja", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo distribuyes tu tiempo libre?",
    options: [
      { text: "Principalmente con mi pareja", type: "A" },
      { text: "Balanceado entre pareja, amigos y solo/a", type: "B" },
      { text: "Más con amigos o hobbies que con pareja", type: "C" },
      { text: "Principalmente solo/a o con otros", type: "D" },
    ],
  },
  {
    id: 7,
    text: "Si tu pareja y tu mejor amigo/a tienen un conflicto, ¿de qué lado estás?",
    options: [
      { text: "De mi pareja, siempre", type: "A" },
      { text: "Escucho ambos lados y busco ser justo/a", type: "B" },
      { text: "Depende de quién tenga la razón", type: "C" },
      { text: "De mi amigo/a si creo que tiene razón", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Sacrificarías un sueño personal importante por tu relación?",
    options: [
      { text: "Sí, mi relación vale más", type: "A" },
      { text: "Buscaría cómo hacer ambas cosas", type: "B" },
      { text: "Lo pensaría mucho, es difícil", type: "C" },
      { text: "No, mis sueños son fundamentales", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Tu pareja sabe cuáles son tus prioridades en la vida?",
    options: [
      { text: "Sí, y él/ella es la número uno", type: "A" },
      { text: "Sí, hemos hablado de ello", type: "B" },
      { text: "Más o menos, no lo hemos discutido", type: "C" },
      { text: "No estoy seguro/a de que lo sepa", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo manejas cuando el trabajo demanda más tiempo del normal?",
    options: [
      { text: "Pongo límites, mi pareja es más importante", type: "A" },
      { text: "Busco compensar con tiempo de calidad después", type: "B" },
      { text: "El trabajo es trabajo, mi pareja entiende", type: "C" },
      { text: "El trabajo es prioridad cuando es necesario", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Están alineadas las prioridades tuyas con las de tu pareja?",
    options: [
      { text: "Sí, compartimos la misma visión", type: "A" },
      { text: "En lo importante sí, en detalles no", type: "B" },
      { text: "Hay diferencias que a veces chocan", type: "C" },
      { text: "Tenemos prioridades muy diferentes", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, tener claras las prioridades en pareja significa:",
    options: [
      { text: "Poner la relación por encima de todo", type: "A" },
      { text: "Balancear lo que importa sin descuidar nada", type: "B" },
      { text: "Cada quien sabe qué es importante para sí", type: "C" },
      { text: "No me gusta priorizar, todo es importante", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💕 Pareja como Prioridad",
    description: "Tu relación de pareja es tu máxima prioridad. Estás dispuesto/a a sacrificar otras cosas por mantener y nutrir tu relación. Esto demuestra gran compromiso pero cuida no perderte a ti mismo/a.",
    traits: ["Comprometido/a", "Romántico/a", "Dedicado/a", "Sacrificado/a"],
    advice: "Tu dedicación es admirable. Solo asegúrate de no descuidar otros aspectos importantes de tu vida.",
  },
  B: {
    title: "⚖️ Prioridades Balanceadas",
    description: "Logras balancear tu relación con otras áreas importantes de tu vida. Valoras a tu pareja pero también cuidas tu carrera, amistades y bienestar personal. Este equilibrio es muy saludable.",
    traits: ["Equilibrado/a", "Organizado/a", "Maduro/a", "Integrado/a"],
    advice: "¡Excelente balance! Sigue comunicando tus prioridades a tu pareja para mantener la armonía.",
  },
  C: {
    title: "🔀 Prioridades Variables",
    description: "Tus prioridades fluctúan según las circunstancias. A veces la pareja, a veces el trabajo, a veces otras cosas. Esta flexibilidad puede ser buena pero también generar incertidumbre.",
    traits: ["Flexible", "Adaptable", "Variable", "Situacional"],
    advice: "Sería bueno definir más claramente tus prioridades y comunicarlas a tu pareja.",
  },
  D: {
    title: "🎯 Prioridades Personales",
    description: "Tus metas personales, carrera o intereses individuales están por encima de la relación. Esto no es malo per se, pero es importante que tu pareja lo entienda y lo acepte.",
    traits: ["Individualista", "Ambicioso/a", "Enfocado/a", "Independiente"],
    advice: "Asegúrate de que tu pareja entienda tus prioridades. Si no coinciden, puede haber conflicto.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
