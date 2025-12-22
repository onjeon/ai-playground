// Test de Responsabilidad en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Quién se encarga de pagar las cuentas del hogar?",
    options: [
      { text: "Lo dividimos equitativamente", type: "A" },
      { text: "Uno paga más pero está acordado", type: "B" },
      { text: "Quien tenga dinero en el momento", type: "C" },
      { text: "Siempre termina siendo uno solo", type: "D" },
    ],
  },
  {
    id: 2,
    text: "Cuando hay un problema grave, ¿quién lo enfrenta?",
    options: [
      { text: "Ambos, somos equipo", type: "A" },
      { text: "Depende de qué tipo de problema sea", type: "B" },
      { text: "Generalmente uno toma la iniciativa", type: "C" },
      { text: "El que pueda o quiera, no hay regla", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo manejan las responsabilidades de los hijos (si los tienen)?",
    options: [
      { text: "50/50 en todo: escuela, salud, actividades", type: "A" },
      { text: "Según nuestras fortalezas y tiempos", type: "B" },
      { text: "Uno hace más pero funciona", type: "C" },
      { text: "Casi todo recae en uno solo", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Quién agenda las citas médicas, trámites y pendientes familiares?",
    options: [
      { text: "Nos dividimos las tareas", type: "A" },
      { text: "Uno es más organizado y lo hace", type: "B" },
      { text: "El que se acuerde primero", type: "C" },
      { text: "Siempre el mismo, el otro no lo hace", type: "D" },
    ],
  },
  {
    id: 5,
    text: "Si algo sale mal en casa (fuga, electrodoméstico descompuesto), ¿qué pasa?",
    options: [
      { text: "Vemos quién puede resolverlo o lo hacemos juntos", type: "A" },
      { text: "Cada quien tiene su área de expertise", type: "B" },
      { text: "Esperamos a que el otro lo resuelva", type: "C" },
      { text: "Hay discusión sobre quién debería encargarse", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Quién se acuerda de los cumpleaños y eventos familiares?",
    options: [
      { text: "Ambos estamos al pendiente", type: "A" },
      { text: "Uno más que el otro pero nos recordamos", type: "B" },
      { text: "Solo uno se acuerda y avisa", type: "C" },
      { text: "A veces se nos pasan a ambos", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Cómo manejan el mantenimiento del carro(s)?",
    options: [
      { text: "Cada quien el suyo o nos turnamos", type: "A" },
      { text: "Uno se encarga porque le interesa más", type: "B" },
      { text: "Lo hacemos cuando ya es urgente", type: "C" },
      { text: "Hay conflicto porque nadie quiere hacerlo", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Quién planea las vacaciones y viajes?",
    options: [
      { text: "Juntos, cada quien aporta ideas", type: "A" },
      { text: "Uno planea más pero el otro opina", type: "B" },
      { text: "El que tenga ganas, el otro solo acepta", type: "C" },
      { text: "Raramente planeamos, todo es improvisado", type: "D" },
    ],
  },
  {
    id: 9,
    text: "Si hay que cuidar a un familiar enfermo, ¿cómo se organizan?",
    options: [
      { text: "Nos turnamos o vamos juntos", type: "A" },
      { text: "Según disponibilidad de cada uno", type: "B" },
      { text: "Generalmente uno asume más responsabilidad", type: "C" },
      { text: "Es fuente de tensión entre nosotros", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Quién se asegura de que haya despensa en casa?",
    options: [
      { text: "Ambos, tenemos lista compartida", type: "A" },
      { text: "Uno hace el súper, el otro otras cosas", type: "B" },
      { text: "El que note que falta algo", type: "C" },
      { text: "Siempre el mismo termina haciéndolo", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Cómo manejan las emergencias económicas?",
    options: [
      { text: "Tenemos un fondo conjunto para eso", type: "A" },
      { text: "Vemos de dónde sacamos entre los dos", type: "B" },
      { text: "Quien tenga dinero lo pone", type: "C" },
      { text: "Es causa de estrés y discusiones", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, compartir responsabilidades significa:",
    options: [
      { text: "La base de una relación equitativa", type: "A" },
      { text: "Dividir según fortalezas de cada uno", type: "B" },
      { text: "Hacer lo que se pueda cuando se pueda", type: "C" },
      { text: "Algo difícil de lograr en pareja", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🤝 Responsabilidad Compartida",
    description: "Son un equipo ejemplar. Dividen las responsabilidades de manera equitativa y ambos están comprometidos con el funcionamiento del hogar y la familia. Esta colaboración fortalece su relación.",
    traits: ["Equitativos", "Organizados", "Colaboradores", "Comprometidos"],
    advice: "¡Excelente trabajo en equipo! Sigan comunicándose para mantener este balance.",
  },
  B: {
    title: "⚖️ Responsabilidad Funcional",
    description: "Tienen una división de responsabilidades que funciona para ustedes. Cada quien tiene sus áreas y se complementan bien. Aunque no es 50/50 exacto, hay equilibrio y respeto.",
    traits: ["Funcionales", "Flexibles", "Complementarios", "Adaptables"],
    advice: "Van bien. Revisen de vez en cuando si la distribución sigue siendo justa para ambos.",
  },
  C: {
    title: "🔄 Responsabilidad Desbalanceada",
    description: "Hay un desbalance en cómo se reparten las responsabilidades. Uno asume más que el otro, lo cual puede generar resentimiento a largo plazo. Es importante hablar de esto.",
    traits: ["Desbalanceados", "Reactivos", "Desorganizados", "En riesgo"],
    advice: "Es momento de sentarse a hablar y redistribuir las responsabilidades de forma más equitativa.",
  },
  D: {
    title: "⚠️ Responsabilidad Conflictiva",
    description: "Las responsabilidades son fuente de tensión constante. No hay claridad de quién hace qué y esto genera conflictos. Es urgente establecer acuerdos claros.",
    traits: ["En conflicto", "Desorganizados", "Frustrados", "Desconectados"],
    advice: "Necesitan urgentemente sentarse a definir responsabilidades claras. Consideren hacer una lista y dividir.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
