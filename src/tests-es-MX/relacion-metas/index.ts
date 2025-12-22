// Test de Metas en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Han hablado de dónde se ven en 5 años como pareja?",
    options: [
      { text: "Sí, tenemos un plan detallado juntos", type: "A" },
      { text: "Lo hemos platicado de manera general", type: "B" },
      { text: "Algunas veces, pero sin profundizar", type: "C" },
      { text: "No, vivimos el día a día", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Qué opinan sobre comprar casa juntos?",
    options: [
      { text: "Ya estamos ahorrando para eso", type: "A" },
      { text: "Es una meta que queremos lograr", type: "B" },
      { text: "No lo hemos discutido a fondo", type: "C" },
      { text: "Cada quien con su patrimonio", type: "D" },
    ],
  },
  {
    id: 3,
    text: "Cuando uno tiene una meta personal importante, ¿cómo la manejan?",
    options: [
      { text: "La convertimos en meta de pareja", type: "A" },
      { text: "Nos apoyamos aunque sea individual", type: "B" },
      { text: "Cada quien trabaja en lo suyo", type: "C" },
      { text: "A veces hay conflicto de intereses", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Han hablado sobre tener hijos?",
    options: [
      { text: "Sí, tenemos claro cuántos y cuándo", type: "A" },
      { text: "Lo hemos platicado, estamos de acuerdo", type: "B" },
      { text: "No hemos llegado a un acuerdo aún", type: "C" },
      { text: "Preferimos no pensar en eso todavía", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Tienen metas financieras como pareja?",
    options: [
      { text: "Sí, presupuesto, ahorro e inversiones juntos", type: "A" },
      { text: "Ahorramos juntos para cosas específicas", type: "B" },
      { text: "Cada quien maneja su dinero", type: "C" },
      { text: "No hablamos mucho de dinero", type: "D" },
    ],
  },
  {
    id: 6,
    text: "Si te ofrecen un trabajo en otra ciudad, ¿qué harían?",
    options: [
      { text: "Lo decidimos juntos, la pareja es prioridad", type: "A" },
      { text: "Analizamos pros y contras entre los dos", type: "B" },
      { text: "Tomaría la decisión yo, pero le aviso", type: "C" },
      { text: "Mi carrera es primero, luego vemos", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Cómo manejan cuando sus metas chocan entre sí?",
    options: [
      { text: "Negociamos y encontramos un punto medio", type: "A" },
      { text: "Nos turnamos, a veces gana uno, a veces otro", type: "B" },
      { text: "Generalmente uno cede más que el otro", type: "C" },
      { text: "Hay conflicto y no siempre lo resolvemos", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Han planeado viajes o experiencias importantes juntos?",
    options: [
      { text: "Sí, tenemos una lista y vamos tachando", type: "A" },
      { text: "Hemos hablado de algunos lugares", type: "B" },
      { text: "Viajamos cuando se puede, sin plan", type: "C" },
      { text: "No es prioridad para nosotros", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Qué tan alineados están en sus metas profesionales?",
    options: [
      { text: "Muy alineados, nos apoyamos en crecer", type: "A" },
      { text: "Respetamos las metas del otro", type: "B" },
      { text: "A veces chocan pero lo manejamos", type: "C" },
      { text: "Son muy diferentes y causa tensión", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Han hablado sobre el retiro o vejez juntos?",
    options: [
      { text: "Sí, ya planeamos dónde y cómo vivir", type: "A" },
      { text: "Lo hemos mencionado de forma general", type: "B" },
      { text: "Falta mucho para eso, no lo pensamos", type: "C" },
      { text: "Quién sabe si seguiremos juntos para entonces", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Celebran cuando logran una meta juntos?",
    options: [
      { text: "¡Claro! Con fiesta y todo", type: "A" },
      { text: "Sí, nos damos un gusto especial", type: "B" },
      { text: "Lo reconocemos pero sin exagerar", type: "C" },
      { text: "No mucho, seguimos con lo siguiente", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ustedes, tener metas en pareja significa:",
    options: [
      { text: "Construir un futuro sólido juntos", type: "A" },
      { text: "Tener una visión compartida de vida", type: "B" },
      { text: "Apoyarse en metas individuales", type: "C" },
      { text: "No es tan importante, lo que tenga que ser será", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🎯 Socios de Vida",
    description: "Son un verdadero equipo con una visión compartida del futuro. Planean, sueñan y trabajan juntos hacia metas comunes. Su relación tiene cimientos sólidos porque saben a dónde van.",
    traits: ["Planificadores", "Unidos", "Visionarios", "Comprometidos"],
    advice: "¡Sigan así! Son ejemplo de pareja. Solo recuerden disfrutar el camino, no solo la meta.",
  },
  B: {
    title: "🛤️ Compañeros de Camino",
    description: "Tienen buena comunicación sobre el futuro y se apoyan mutuamente. Aunque no todo está planeado al detalle, van en la misma dirección.",
    traits: ["Comunicativos", "Flexibles", "Colaboradores", "Adaptables"],
    advice: "Van muy bien. Podrían beneficiarse de sentarse a definir metas más específicas juntos.",
  },
  C: {
    title: "🚶 Caminantes Paralelos",
    description: "Cada quien tiene sus propias metas y a veces cuesta integrarlas. No está mal tener individualidad, pero una relación se fortalece cuando hay proyectos compartidos.",
    traits: ["Independientes", "Individualistas", "Autónomos", "Separados"],
    advice: "Es momento de soñar juntos. Siéntense a hablar de qué quieren lograr como pareja.",
  },
  D: {
    title: "🌊 Navegantes sin Mapa",
    description: "Viven el presente sin pensar mucho en el futuro conjunto. Esto puede funcionar por un tiempo, pero las parejas sin metas compartidas a veces se desconectan.",
    traits: ["Espontáneos", "Presentes", "Sin rumbo fijo", "Inciertos"],
    advice: "¿Qué tal si empiezan a soñar juntos? No tiene que ser algo grande, pero sí compartido.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
