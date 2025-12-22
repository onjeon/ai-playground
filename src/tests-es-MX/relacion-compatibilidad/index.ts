// Compatibilidad de Pareja - ¿Qué tan compatible eres?
// Test de Compatibilidad para México

export const questions = [
  {
    id: 1,
    question: "En los fines de semana, prefieres...",
    options: [
      { text: "Salir a fiestas, bares o eventos sociales", type: "A" },
      { text: "Actividades al aire libre o deportes", type: "B" },
      { text: "Quedarte en casa viendo series o leyendo", type: "C" },
      { text: "Depende del ánimo, varío mucho", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu relación ideal con el dinero es...",
    options: [
      { text: "Gastar y disfrutar la vida", type: "A" },
      { text: "Ahorrar para el futuro", type: "B" },
      { text: "Balance entre gastar y ahorrar", type: "C" },
      { text: "El dinero no me importa mucho", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Qué tan importante es la familia para ti?",
    options: [
      { text: "Es lo más importante, los veo siempre", type: "A" },
      { text: "Muy importante pero tengo mi espacio", type: "B" },
      { text: "Los quiero pero a distancia", type: "C" },
      { text: "No tengo relación cercana con ellos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "En cuanto a tener hijos...",
    options: [
      { text: "Quiero una familia grande", type: "A" },
      { text: "Uno o dos hijos estaría bien", type: "B" },
      { text: "No estoy seguro/a", type: "C" },
      { text: "Definitivamente no quiero hijos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tu nivel de orden y limpieza es...",
    options: [
      { text: "Todo tiene que estar perfecto", type: "A" },
      { text: "Ordenado pero no obsesivo", type: "B" },
      { text: "Un poco desordenado pero funcional", type: "C" },
      { text: "El desorden no me molesta", type: "D" },
    ],
  },
  {
    id: 6,
    question: "En las discusiones de pareja...",
    options: [
      { text: "Soy muy directo/a, digo todo", type: "A" },
      { text: "Hablo las cosas con calma", type: "B" },
      { text: "Prefiero evitar el conflicto", type: "C" },
      { text: "Me cierro y necesito tiempo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tu posición sobre la religión es...",
    options: [
      { text: "Muy importante, practico activamente", type: "A" },
      { text: "Creo pero no practico mucho", type: "B" },
      { text: "Soy espiritual pero no religioso/a", type: "C" },
      { text: "No soy religioso/a en absoluto", type: "D" },
    ],
  },
  {
    id: 8,
    question: "En la intimidad eres...",
    options: [
      { text: "Muy apasionado/a y frecuente", type: "A" },
      { text: "Activo/a pero no obsesionado/a", type: "B" },
      { text: "Moderado/a, calidad sobre cantidad", type: "C" },
      { text: "No es mi prioridad", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu estilo de comunicación es...",
    options: [
      { text: "Hablo mucho, expreso todo", type: "A" },
      { text: "Comunicativo cuando es importante", type: "B" },
      { text: "Más de acciones que palabras", type: "C" },
      { text: "Reservado/a, hablo poco", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tus metas de vida son...",
    options: [
      { text: "Éxito profesional y económico", type: "A" },
      { text: "Familia y estabilidad", type: "B" },
      { text: "Experiencias y aventuras", type: "C" },
      { text: "Paz interior y felicidad simple", type: "D" },
    ],
  },
  {
    id: 11,
    question: "En cuanto al tiempo en pareja...",
    options: [
      { text: "Quiero estar juntos siempre", type: "A" },
      { text: "Tiempo de calidad pero también mi espacio", type: "B" },
      { text: "Bastante tiempo solo/a, soy independiente", type: "C" },
      { text: "Cada quien su vida, nos vemos cuando se pueda", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tu política y valores sociales son...",
    options: [
      { text: "Conservadores y tradicionales", type: "A" },
      { text: "Moderados, de centro", type: "B" },
      { text: "Progresistas y liberales", type: "C" },
      { text: "No me interesa la política", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Perfil Intenso",
    emoji: "🔥",
    description: "Eres intenso/a en todos los aspectos: social, familiar, romántico y apasionado. Necesitas una pareja que pueda seguir tu ritmo y que comparta tu energía. El aburrimiento no es opción.",
    traits: ["Intenso/a", "Social", "Apasionado/a", "Activo/a"],
    strengths: ["Relaciones emocionantes", "Mucha conexión", "Vida social activa"],
    weaknesses: ["Puedes agotar a parejas tranquilas", "Conflictos frecuentes", "Demasiada intensidad"],
    tips: ["Compatible con personalidades similares", "Busca quien te siga el paso", "Cuidado con los extremos"],
  },
  B: {
    type: "B",
    title: "Perfil Equilibrado",
    emoji: "⚖️",
    description: "Tienes un perfil equilibrado que te hace compatible con muchos tipos de personas. Ni muy intenso ni muy relajado. Buscas balance en todos los aspectos de la vida.",
    traits: ["Equilibrado/a", "Adaptable", "Sensato/a", "Flexible"],
    strengths: ["Amplia compatibilidad", "Relaciones estables", "Buen comunicador/a"],
    weaknesses: ["Podrías aburrirte con extremos", "A veces indeciso/a"],
    tips: ["Eres compatible con muchos perfiles", "Busca quien comparta tus valores básicos", "El equilibrio es tu fuerza"],
  },
  C: {
    type: "C",
    title: "Perfil Tranquilo",
    emoji: "🌿",
    description: "Eres una persona tranquila, independiente y que valora su espacio. Necesitas una pareja que respete tu ritmo y no te presione. Prefieres la calma sobre la intensidad.",
    traits: ["Tranquilo/a", "Independiente", "Introvertido/a", "Pacífico/a"],
    strengths: ["Relaciones sin drama", "Mucho respeto mutuo", "Paz en la relación"],
    weaknesses: ["Podrías parecer frío/a", "Falta de pasión visible", "Dificultad con parejas intensas"],
    tips: ["Compatible con personalidades similares", "Comunica tus necesidades", "No confundan tu calma con desinterés"],
  },
  D: {
    type: "D",
    title: "Perfil Libre",
    emoji: "🦅",
    description: "Eres muy independiente y libre. No te defines por una sola cosa y valoras mucho tu autonomía. Necesitas una pareja que entienda que no eres de moldes tradicionales.",
    traits: ["Libre", "Independiente", "Impredecible", "Único/a"],
    strengths: ["No eres convencional", "Mucha libertad", "Relación sin ataduras"],
    weaknesses: ["Difícil de entender", "Poco comprometido/a", "Compatibilidad limitada"],
    tips: ["Busca alguien igual de libre", "La libertad no es excusa para huir del compromiso", "Sé claro/a con lo que ofreces"],
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
