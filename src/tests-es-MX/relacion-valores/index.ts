// Test de Valores en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Qué tan importante es la familia para ambos?",
    options: [
      { text: "Es lo más importante, siempre primero la familia", type: "A" },
      { text: "Muy importante, pero con límites sanos", type: "B" },
      { text: "Importante, aunque a veces hay roces", type: "C" },
      { text: "Tenemos visiones muy diferentes de familia", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo ven el tema de la religión o espiritualidad?",
    options: [
      { text: "Compartimos las mismas creencias", type: "A" },
      { text: "Respetamos las creencias del otro", type: "B" },
      { text: "No lo hemos discutido a fondo", type: "C" },
      { text: "Tenemos conflictos por esto", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Qué opinan sobre la honestidad en la relación?",
    options: [
      { text: "Somos 100% honestos, sin secretos", type: "A" },
      { text: "Honestos en lo importante, algunos temas son privados", type: "B" },
      { text: "A veces hay mentiritas blancas", type: "C" },
      { text: "Cada quien tiene derecho a sus secretos", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo ven el rol de cada uno en el hogar?",
    options: [
      { text: "Compartimos todo 50/50", type: "A" },
      { text: "Cada quien según sus fortalezas", type: "B" },
      { text: "Uno hace más que el otro", type: "C" },
      { text: "Hay conflicto sobre quién hace qué", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Qué tan importante es la lealtad para ustedes?",
    options: [
      { text: "Es innegociable, lo más sagrado", type: "A" },
      { text: "Muy importante para ambos", type: "B" },
      { text: "Importante pero cada quien lo define diferente", type: "C" },
      { text: "Hemos tenido problemas con esto", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo manejan el tema del dinero y gastos?",
    options: [
      { text: "Mismo enfoque: ahorradores o gastadores", type: "A" },
      { text: "Diferentes pero nos complementamos", type: "B" },
      { text: "A veces hay tensión por el dinero", type: "C" },
      { text: "Es causa constante de conflicto", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Qué piensan sobre ayudar a los demás?",
    options: [
      { text: "Ambos somos muy dadivosos", type: "A" },
      { text: "Ayudamos cuando podemos, equilibradamente", type: "B" },
      { text: "Uno es más generoso que el otro", type: "C" },
      { text: "Tenemos visiones muy diferentes", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Cómo ven el respeto hacia los mayores?",
    options: [
      { text: "Es fundamental, los respetamos profundamente", type: "A" },
      { text: "Los respetamos pero con límites", type: "B" },
      { text: "Tenemos diferencias en cómo tratar a los mayores", type: "C" },
      { text: "Uno es más tradicional que el otro", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Qué opinan sobre el trabajo y la carrera?",
    options: [
      { text: "Ambos valoramos el éxito profesional igual", type: "A" },
      { text: "Respetamos las ambiciones del otro", type: "B" },
      { text: "Uno es más ambicioso que el otro", type: "C" },
      { text: "Hay tensión porque no valoramos lo mismo", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo ven la crianza de hijos (actuales o futuros)?",
    options: [
      { text: "Mismos valores y estilo de crianza", type: "A" },
      { text: "Parecidos, con pequeñas diferencias", type: "B" },
      { text: "Bastante diferentes, negociamos", type: "C" },
      { text: "Es fuente de conflicto entre nosotros", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué tan importante es el tiempo de calidad juntos?",
    options: [
      { text: "Es prioridad para ambos", type: "A" },
      { text: "Lo valoramos pero a veces falta tiempo", type: "B" },
      { text: "Uno lo necesita más que el otro", type: "C" },
      { text: "No es tan importante para nosotros", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ustedes, tener valores compartidos significa:",
    options: [
      { text: "La base de una relación sólida y duradera", type: "A" },
      { text: "Importante pero no tiene que ser idéntico", type: "B" },
      { text: "Algo en lo que podemos trabajar", type: "C" },
      { text: "No es tan relevante si hay amor", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💎 Valores Alineados",
    description: "¡Felicidades! Comparten los valores fundamentales que hacen una relación duradera. Esto no significa que sean iguales, sino que tienen la misma brújula moral.",
    traits: ["Alineados", "Compatibles", "Unidos", "Sólidos"],
    advice: "Su compatibilidad es envidiable. Sigan cultivando esos valores compartidos.",
  },
  B: {
    title: "🤝 Valores Compatibles",
    description: "Tienen valores similares con diferencias menores que enriquecen la relación. Se respetan mutuamente y saben negociar cuando hay diferencias.",
    traits: ["Respetuosos", "Flexibles", "Tolerantes", "Complementarios"],
    advice: "Esta flexibilidad es muy saludable para crecer juntos. Sigan comunicándose.",
  },
  C: {
    title: "⚖️ Valores en Negociación",
    description: "Hay diferencias importantes en algunos valores, lo cual requiere trabajo constante. No es imposible tener una relación así, pero necesitan comunicación abierta.",
    traits: ["Diferentes", "En proceso", "Negociadores", "Trabajando"],
    advice: "Vale la pena sentarse a hablar de sus valores y encontrar puntos medios que funcionen para ambos.",
  },
  D: {
    title: "🔀 Valores Divergentes",
    description: "Tienen diferencias significativas en valores fundamentales. Esto puede causar conflictos recurrentes si no se trabaja en ello.",
    traits: ["Divergentes", "Diferentes", "En conflicto", "Distantes"],
    advice: "Es importante reflexionar si pueden construir un futuro juntos con estas diferencias.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
