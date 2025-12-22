// Test de Convivencia en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Cómo dividen las tareas del hogar?",
    options: [
      { text: "50/50 bien organizado, cada quien sabe qué le toca", type: "A" },
      { text: "Según las fortalezas de cada uno, flexible", type: "B" },
      { text: "Uno hace más que el otro pero funciona", type: "C" },
      { text: "Es fuente constante de discusión", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo manejan los diferentes horarios de sueño?",
    options: [
      { text: "Nos adaptamos bien, sin problemas", type: "A" },
      { text: "A veces hay roces pero lo manejamos", type: "B" },
      { text: "Es complicado, uno siempre molesta al otro", type: "C" },
      { text: "Dormimos en horarios muy diferentes y afecta", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Qué tanto respetan el espacio personal del otro en casa?",
    options: [
      { text: "Mucho, cada quien tiene su rincón", type: "A" },
      { text: "Lo intentamos aunque el espacio es limitado", type: "B" },
      { text: "A veces invadimos el espacio del otro", type: "C" },
      { text: "No hay espacio personal, todo es compartido", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo deciden qué ver en la tele o qué música poner?",
    options: [
      { text: "Nos turnamos o encontramos algo que a ambos guste", type: "A" },
      { text: "Generalmente uno cede al otro", type: "B" },
      { text: "Cada quien ve/escucha lo suyo en diferentes momentos", type: "C" },
      { text: "Es motivo de discusión frecuente", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Cómo manejan las visitas de familia o amigos a su casa?",
    options: [
      { text: "Nos consultamos y decidimos juntos", type: "A" },
      { text: "Avisamos con tiempo, rara vez hay problema", type: "B" },
      { text: "A veces hay sorpresas que molestan", type: "C" },
      { text: "Hay conflicto por las visitas frecuentes", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Quién cocina en casa?",
    options: [
      { text: "Nos turnamos o cocinamos juntos", type: "A" },
      { text: "Uno cocina más pero al otro no le molesta", type: "B" },
      { text: "Uno siempre cocina y a veces se queja", type: "C" },
      { text: "Pedimos comida o cada quien se hace lo suyo", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Cómo manejan el orden y la limpieza?",
    options: [
      { text: "Somos igual de ordenados/desordenados", type: "A" },
      { text: "Uno es más ordenado pero nos adaptamos", type: "B" },
      { text: "Hay tensión porque tenemos estándares diferentes", type: "C" },
      { text: "Es fuente de conflicto constante", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Tienen mascotas? ¿Cómo dividen su cuidado?",
    options: [
      { text: "Sí, y nos encargamos equitativamente", type: "A" },
      { text: "Sí, uno hace más pero no hay problema", type: "B" },
      { text: "Sí, y hay roces por quién hace qué", type: "C" },
      { text: "No tenemos o no coincidimos en querer una", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Cómo manejan cuando uno quiere silencio y el otro ruido?",
    options: [
      { text: "Respetamos las necesidades del otro, usamos audífonos", type: "A" },
      { text: "Negociamos según el momento", type: "B" },
      { text: "A veces hay tensión por esto", type: "C" },
      { text: "Termina en discusión frecuentemente", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo deciden la temperatura del aire o el ventilador?",
    options: [
      { text: "Tenemos gustos similares, fácil", type: "A" },
      { text: "Uno se adapta al otro sin problema", type: "B" },
      { text: "Guerra de termostato ocasional", type: "C" },
      { text: "Cada noche es una negociación", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Cómo es su convivencia en las mañanas?",
    options: [
      { text: "Armoniosa, cada quien su rutina sin chocar", type: "A" },
      { text: "Bien, aunque a veces uno está de malas", type: "B" },
      { text: "Complicada, los dos queremos el baño", type: "C" },
      { text: "Tensa, las mañanas son difíciles para nosotros", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, la convivencia diaria es:",
    options: [
      { text: "Lo mejor de vivir en pareja", type: "A" },
      { text: "Linda aunque tiene sus retos", type: "B" },
      { text: "Difícil, requiere mucha adaptación", type: "C" },
      { text: "Complicada, a veces extraño vivir solo/a", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🏠 Convivencia Armoniosa",
    description: "Viven juntos como un equipo bien sincronizado. Han logrado equilibrar las tareas, respetar espacios y adaptarse mutuamente. Su hogar es un lugar de paz y amor.",
    traits: ["Organizados", "Respetuosos", "Adaptables", "Unidos"],
    advice: "¡Excelente! Son ejemplo de cómo convivir en pareja. Sigan así.",
  },
  B: {
    title: "🛋️ Convivencia Funcional",
    description: "Tienen una buena dinámica de convivencia con algunos ajustes ocasionales. Saben ceder cuando es necesario y mantienen la armonía en casa la mayor parte del tiempo.",
    traits: ["Flexibles", "Comunicativos", "Prácticos", "Pacientes"],
    advice: "Van muy bien. Podrían establecer algunas reglas claras para evitar roces recurrentes.",
  },
  C: {
    title: "🔧 Convivencia en Ajuste",
    description: "Hay áreas de su convivencia que necesitan trabajo. Las diferencias en hábitos o expectativas generan tensión. Con comunicación y compromiso pueden mejorar mucho.",
    traits: ["En proceso", "Diferentes", "Adaptándose", "Retadores"],
    advice: "Siéntense a hablar de expectativas claras. Pequeños acuerdos pueden hacer gran diferencia.",
  },
  D: {
    title: "⚠️ Convivencia Difícil",
    description: "La convivencia diaria es fuente de estrés y conflicto. Las diferencias son significativas y afectan la armonía del hogar. Esto puede desgastar la relación.",
    traits: ["En conflicto", "Incompatibles", "Tensos", "Desgastados"],
    advice: "Es importante abordar esto antes de que dañe más la relación. Consideren buscar ayuda.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
