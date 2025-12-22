// Test de Crecimiento en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Se apoyan mutuamente en su crecimiento personal?",
    options: [
      { text: "Totalmente, somos el mayor fan del otro", type: "A" },
      { text: "Sí, nos apoyamos aunque no siempre entendamos", type: "B" },
      { text: "A veces, depende del tema", type: "C" },
      { text: "No mucho, cada quien hace lo suyo", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Tienen metas de crecimiento como pareja?",
    options: [
      { text: "Sí, planeamos aprender y crecer juntos", type: "A" },
      { text: "Algunas, las vamos definiendo", type: "B" },
      { text: "No realmente, pero quizá deberíamos", type: "C" },
      { text: "No, cada quien sus propias metas", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo manejan cuando uno quiere cambiar algo significativo en su vida?",
    options: [
      { text: "Lo apoyamos aunque implique sacrificios", type: "A" },
      { text: "Lo discutimos y buscamos cómo adaptarnos", type: "B" },
      { text: "Depende de cómo afecte a la relación", type: "C" },
      { text: "Suele ser fuente de conflicto", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Se inspiran mutuamente a ser mejores personas?",
    options: [
      { text: "Sí, constantemente quiero ser mejor por él/ella", type: "A" },
      { text: "A veces, cuando veo su ejemplo", type: "B" },
      { text: "No particularmente", type: "C" },
      { text: "Honestamente, a veces siento lo contrario", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Leen libros, toman cursos o hacen actividades de crecimiento juntos?",
    options: [
      { text: "Sí, nos gusta crecer intelectualmente juntos", type: "A" },
      { text: "Ocasionalmente, cuando encontramos algo interesante", type: "B" },
      { text: "Cada quien por su cuenta", type: "C" },
      { text: "No es algo que hagamos", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Se dan feedback honesto para mejorar?",
    options: [
      { text: "Sí, siempre con amor y respeto", type: "A" },
      { text: "A veces, cuando es necesario", type: "B" },
      { text: "Nos cuesta dar o recibir críticas", type: "C" },
      { text: "No, preferimos evitar esos temas", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Han superado juntos retos que los hicieron crecer?",
    options: [
      { text: "Sí, varios, y salimos más fuertes", type: "A" },
      { text: "Algunos, hemos aprendido de ellos", type: "B" },
      { text: "No muchos significativos", type: "C" },
      { text: "Los retos nos han debilitado más que fortalecido", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Se sienten estancados o en constante evolución?",
    options: [
      { text: "En constante evolución, siempre hay algo nuevo", type: "A" },
      { text: "Mayormente evolucionando, con pausas", type: "B" },
      { text: "Algo estancados, la rutina nos absorbe", type: "C" },
      { text: "Muy estancados, nada cambia", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Hablan sobre sueños y aspiraciones regularmente?",
    options: [
      { text: "Sí, nos encanta soñar juntos", type: "A" },
      { text: "A veces, cuando surge el tema", type: "B" },
      { text: "Poco, estamos enfocados en el presente", type: "C" },
      { text: "No, evitamos esos temas", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Han trabajado en mejorar la comunicación de la relación?",
    options: [
      { text: "Sí, constantemente buscamos mejorar", type: "A" },
      { text: "Hemos hecho esfuerzos cuando hay problemas", type: "B" },
      { text: "No activamente, pero funciona", type: "C" },
      { text: "No, y a veces es problemático", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Celebran los avances y crecimiento del otro?",
    options: [
      { text: "Siempre, sus logros son mis logros", type: "A" },
      { text: "Sí, reconocemos los avances importantes", type: "B" },
      { text: "A veces, si es algo grande", type: "C" },
      { text: "No mucho, no le damos importancia", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, crecer en pareja significa:",
    options: [
      { text: "Evolucionar juntos hacia la mejor versión de ambos", type: "A" },
      { text: "Apoyarse mutuamente en sus metas", type: "B" },
      { text: "No estorbarse en el crecimiento individual", type: "C" },
      { text: "Algo difícil de lograr en pareja", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🚀 Crecimiento Acelerado",
    description: "Son una pareja que prioriza el crecimiento mutuo. Se inspiran, se apoyan y trabajan juntos para ser mejores. Este enfoque garantiza una relación dinámica y en constante evolución.",
    traits: ["Evolucionando", "Inspiradores", "Comprometidos", "Dinámicos"],
    advice: "¡Excelente! Sigan cultivando ese deseo de crecer juntos. Es la clave de relaciones duraderas.",
  },
  B: {
    title: "🌱 Crecimiento Saludable",
    description: "Apoyan el crecimiento del otro aunque no siempre sea el enfoque principal. Hay espacio para mejorar pero van por buen camino. El amor y el respeto facilitan el crecimiento.",
    traits: ["Creciendo", "Apoyadores", "Equilibrados", "Respetuosos"],
    advice: "Van bien. Consideren establecer algunas metas de crecimiento juntos.",
  },
  C: {
    title: "🌾 Crecimiento Lento",
    description: "El crecimiento como pareja no ha sido prioridad. Cada quien crece por su lado y eso puede crear distancia con el tiempo. Sería bueno reconectar en este aspecto.",
    traits: ["Individuales", "Separados", "Estables", "Rutinarios"],
    advice: "Intenten encontrar actividades o metas que puedan perseguir juntos. El crecimiento compartido une.",
  },
  D: {
    title: "🥀 Crecimiento Estancado",
    description: "La relación no está fomentando el crecimiento de ninguno. Puede haber sensación de estancamiento o incluso de retroceso. Es importante abordar esto.",
    traits: ["Estancados", "Desconectados", "En pausa", "Sin dirección"],
    advice: "Es momento de tener una conversación honesta sobre hacia dónde quieren ir como pareja.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
