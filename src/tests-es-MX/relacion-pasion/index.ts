// Test de Pasión en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Cómo describirías la pasión actual en tu relación?",
    options: [
      { text: "Intensa, como al principio o más", type: "A" },
      { text: "Buena, con momentos muy apasionados", type: "B" },
      { text: "Moderada, ha bajado pero existe", type: "C" },
      { text: "Casi inexistente", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Con qué frecuencia tienen momentos apasionados?",
    options: [
      { text: "Muy seguido, es parte de nuestra rutina", type: "A" },
      { text: "Regularmente, cada semana", type: "B" },
      { text: "Ocasionalmente, cuando se da", type: "C" },
      { text: "Rara vez o nunca", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Hacen cosas espontáneas y apasionadas?",
    options: [
      { text: "Sí, nos sorprendemos constantemente", type: "A" },
      { text: "A veces, cuando hay oportunidad", type: "B" },
      { text: "Poco, todo es muy planeado", type: "C" },
      { text: "Ya no, todo es rutina", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Se siguen coqueteando como al principio?",
    options: [
      { text: "Sí, el coqueteo nunca ha parado", type: "A" },
      { text: "A veces, cuando estamos de humor", type: "B" },
      { text: "Poco, ya somos muy de confianza", type: "C" },
      { text: "No, ya ni nos fijamos en eso", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Cuándo fue la última vez que tuvieron un momento muy apasionado?",
    options: [
      { text: "Esta semana o hace pocos días", type: "A" },
      { text: "Hace unas semanas", type: "B" },
      { text: "Hace meses", type: "C" },
      { text: "No recuerdo, hace mucho tiempo", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Experimentan cosas nuevas para mantener la pasión?",
    options: [
      { text: "Sí, siempre estamos explorando", type: "A" },
      { text: "A veces, cuando surge algo interesante", type: "B" },
      { text: "Poco, nos quedamos con lo conocido", type: "C" },
      { text: "No, todo es igual siempre", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Cómo afecta la pasión a tu relación general?",
    options: [
      { text: "La fortalece enormemente, nos une más", type: "A" },
      { text: "Es importante para nuestra conexión", type: "B" },
      { text: "No afecta mucho, otras cosas son más importantes", type: "C" },
      { text: "La falta de pasión nos está afectando", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Te sientes deseado/a y apasionadamente amado/a?",
    options: [
      { text: "Totalmente, mi pareja me hace sentir muy deseado/a", type: "A" },
      { text: "Sí, aunque no siempre lo expresa", type: "B" },
      { text: "A veces, pero no constantemente", type: "C" },
      { text: "No, siento que falta pasión hacia mí", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿La vida diaria (trabajo, hijos, estrés) ha afectado la pasión?",
    options: [
      { text: "No mucho, hacemos espacio para nosotros", type: "A" },
      { text: "Algo, pero lo manejamos", type: "B" },
      { text: "Sí, bastante, ya no hay tiempo", type: "C" },
      { text: "Completamente, ya no somos pareja apasionada", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Se besan apasionadamente todavía?",
    options: [
      { text: "Sí, frecuentemente, no solo piquitos", type: "A" },
      { text: "A veces, en momentos especiales", type: "B" },
      { text: "Poco, solo besos cortos", type: "C" },
      { text: "Ya casi no nos besamos", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Planean escapadas románticas o noches especiales?",
    options: [
      { text: "Sí, regularmente hacemos algo especial", type: "A" },
      { text: "De vez en cuando, cuando podemos", type: "B" },
      { text: "Rara vez, es difícil organizarlo", type: "C" },
      { text: "Ya no, no es prioridad", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, la pasión en una relación larga:",
    options: [
      { text: "Es fundamental y hay que cultivarla siempre", type: "A" },
      { text: "Es importante aunque cambie con el tiempo", type: "B" },
      { text: "Es normal que disminuya, otras cosas importan más", type: "C" },
      { text: "Es algo que se pierde inevitablemente", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🔥 Pasión Ardiente",
    description: "La pasión en tu relación sigue muy viva. Se desean, se seducen y mantienen activa esa chispa que los enamoró. Esto es fundamental para una relación satisfactoria.",
    traits: ["Apasionados", "Intensos", "Conectados", "Activos"],
    advice: "¡Increíble! Sigan cultivando esa pasión. Es un tesoro en relaciones largas.",
  },
  B: {
    title: "✨ Pasión Saludable",
    description: "Mantienen una pasión saludable que ha evolucionado con el tiempo. Saben encontrar momentos para conectar íntimamente aunque la vida esté ocupada.",
    traits: ["Equilibrados", "Presentes", "Adaptados", "Cariñosos"],
    advice: "Van muy bien. Sigan buscando formas de sorprenderse y mantener viva la llama.",
  },
  C: {
    title: "🌅 Pasión Tibia",
    description: "La pasión ha disminuido significativamente. La rutina, el estrés y la vida diaria han tomado prioridad. Aunque hay amor, falta esa chispa que hace especial la relación.",
    traits: ["Rutinarios", "Ocupados", "Distantes", "Cómodos"],
    advice: "Es momento de reconectar. Planeen tiempo solo para ustedes dos y recuperen la pasión.",
  },
  D: {
    title: "❄️ Pasión Apagada",
    description: "La pasión prácticamente ha desaparecido. Se han convertido más en compañeros de vida que en amantes. Esto puede afectar seriamente la satisfacción en la relación.",
    traits: ["Apagados", "Rutinarios", "Desconectados", "En crisis"],
    advice: "Esta situación necesita atención urgente. Hablen abiertamente y consideren buscar ayuda.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
