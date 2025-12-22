// Test de Maduración en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Cómo ha evolucionado tu relación con el tiempo?",
    options: [
      { text: "Se ha fortalecido y profundizado", type: "A" },
      { text: "Ha tenido altas y bajas pero aquí seguimos", type: "B" },
      { text: "Se siente diferente, no sé si mejor o peor", type: "C" },
      { text: "Ha perdido chispa y emoción", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo resuelven los conflictos ahora comparado con el inicio?",
    options: [
      { text: "Mucho mejor, hemos aprendido a comunicarnos", type: "A" },
      { text: "Algo mejor, aunque aún hay que trabajar", type: "B" },
      { text: "Igual que siempre, no hemos cambiado mucho", type: "C" },
      { text: "Peor, ya ni discutimos o es muy intenso", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Han crecido juntos como personas?",
    options: [
      { text: "Sí, nos hemos hecho mejores personas juntos", type: "A" },
      { text: "En algunos aspectos sí, en otros no tanto", type: "B" },
      { text: "Cada quien ha crecido por su lado", type: "C" },
      { text: "Siento que me he estancado en esta relación", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo manejan las crisis mejor que antes?",
    options: [
      { text: "Somos un equipo sólido ante cualquier adversidad", type: "A" },
      { text: "Hemos mejorado, aunque las crisis aún son difíciles", type: "B" },
      { text: "No mucho, las crisis nos desequilibran igual", type: "C" },
      { text: "Las crisis nos alejan cada vez más", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿La confianza ha aumentado con el tiempo?",
    options: [
      { text: "Sí, es inquebrantable", type: "A" },
      { text: "Ha crecido, aunque ha tenido sus pruebas", type: "B" },
      { text: "Se mantiene igual que al principio", type: "C" },
      { text: "Ha disminuido por diferentes razones", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo ha evolucionado su intimidad?",
    options: [
      { text: "Es más profunda y significativa", type: "A" },
      { text: "Diferente pero satisfactoria", type: "B" },
      { text: "Ha bajado pero es normal", type: "C" },
      { text: "Prácticamente no existe ya", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Conocen mejor sus necesidades mutuas ahora?",
    options: [
      { text: "Totalmente, nos entendemos sin palabras", type: "A" },
      { text: "Bastante bien, aunque siempre hay sorpresas", type: "B" },
      { text: "Más o menos, a veces no nos entendemos", type: "C" },
      { text: "Siento que no me conoce/conozco después de tanto tiempo", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Han superado patrones negativos que tenían al inicio?",
    options: [
      { text: "Sí, identificamos y cambiamos juntos", type: "A" },
      { text: "Algunos sí, otros siguen ahí", type: "B" },
      { text: "No mucho, repetimos los mismos errores", type: "C" },
      { text: "Hemos desarrollado más patrones negativos", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿La relación les da paz o estrés?",
    options: [
      { text: "Paz, es mi refugio seguro", type: "A" },
      { text: "Mayormente paz, con momentos de tensión", type: "B" },
      { text: "Mitad y mitad", type: "C" },
      { text: "Más estrés que paz últimamente", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Celebran los logros de la relación (aniversarios, metas cumplidas)?",
    options: [
      { text: "Sí, reconocemos lo que hemos construido", type: "A" },
      { text: "A veces, cuando nos acordamos", type: "B" },
      { text: "Poco, la rutina nos absorbe", type: "C" },
      { text: "No, no hay mucho que celebrar", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Se ven juntos en 10 años?",
    options: [
      { text: "Sin duda, es el amor de mi vida", type: "A" },
      { text: "Sí, si seguimos trabajando en esto", type: "B" },
      { text: "No estoy seguro/a", type: "C" },
      { text: "Honestamente, lo dudo", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, madurar en pareja significa:",
    options: [
      { text: "Crecer juntos, superar retos y amarse más profundo", type: "A" },
      { text: "Aprender a convivir y aceptar diferencias", type: "B" },
      { text: "Adaptarse a lo que hay", type: "C" },
      { text: "Perder la emoción del principio", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🌳 Madurez Plena",
    description: "Su relación ha madurado de la mejor manera posible. Han crecido juntos, superado crisis y construido algo sólido. El amor inicial se ha transformado en algo más profundo y duradero.",
    traits: ["Maduros", "Sólidos", "Evolucionados", "Conectados"],
    advice: "¡Felicidades! Han logrado lo que muchos sueñan. Sigan cultivando ese amor.",
  },
  B: {
    title: "🌱 Madurez en Proceso",
    description: "Su relación está madurando positivamente aunque con áreas por trabajar. Han aprendido mucho pero aún hay camino por recorrer. Van en la dirección correcta.",
    traits: ["En crecimiento", "Resilientes", "Comprometidos", "Trabajando"],
    advice: "Van bien. Identifiquen las áreas que aún necesitan trabajo y sigan adelante juntos.",
  },
  C: {
    title: "😐 Madurez Estancada",
    description: "La relación parece haberse estancado. No han empeorado pero tampoco han crecido significativamente. Hay una sensación de rutina y falta de evolución.",
    traits: ["Estancados", "Rutinarios", "Conformistas", "Desconectados"],
    advice: "Es momento de sacudir la relación. Busquen nuevas experiencias juntos y reconecten.",
  },
  D: {
    title: "🥀 Madurez en Crisis",
    description: "La relación muestra señales de deterioro. En lugar de fortalecerse con el tiempo, parece haberse debilitado. Es importante tomar acción antes de que sea tarde.",
    traits: ["En crisis", "Deteriorados", "Desconectados", "En riesgo"],
    advice: "No ignoren las señales. Consideren buscar ayuda profesional para reconectar o tomar decisiones.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
