// Test de Tradiciones en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Cómo celebran la Navidad y las posadas?",
    options: [
      { text: "Tradición completa: posadas, misa, cena familiar", type: "A" },
      { text: "Combinamos tradiciones de ambas familias", type: "B" },
      { text: "Solo lo básico, cena y regalos", type: "C" },
      { text: "No le damos mucha importancia", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Con qué familia pasan las fiestas importantes?",
    options: [
      { text: "Rotamos equitativamente entre ambas familias", type: "A" },
      { text: "Intentamos ver a ambas en el mismo día", type: "B" },
      { text: "Generalmente con una más que con la otra", type: "C" },
      { text: "Cada quien con su familia, nos vemos después", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo celebran el Día de las Madres?",
    options: [
      { text: "Serenata, comida con ambas mamás, el paquete completo", type: "A" },
      { text: "Visitamos a ambas y les llevamos detalle", type: "B" },
      { text: "Cada quien ve a su mamá por separado", type: "C" },
      { text: "Un mensaje o llamada es suficiente", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Qué hacen el Día de Muertos?",
    options: [
      { text: "Altar con ofrenda, visita al panteón, la tradición completa", type: "A" },
      { text: "Ponemos algo simbólico y recordamos a los que ya no están", type: "B" },
      { text: "Solo si la familia lo organiza", type: "C" },
      { text: "No lo celebramos realmente", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Cómo manejan los cumpleaños y fiestas familiares?",
    options: [
      { text: "Fiesta grande con toda la familia extendida", type: "A" },
      { text: "Celebración íntima pero significativa", type: "B" },
      { text: "Depende de quién cumple años", type: "C" },
      { text: "Algo sencillo, no nos gustan las fiestas", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Han creado tradiciones propias como pareja?",
    options: [
      { text: "Sí, varias que son solo nuestras", type: "A" },
      { text: "Algunas, mezclando lo de ambas familias", type: "B" },
      { text: "Estamos empezando a crear las nuestras", type: "C" },
      { text: "No, seguimos las de nuestras familias", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Qué tan importante es para ti mantener las tradiciones mexicanas?",
    options: [
      { text: "Muy importante, son parte de nuestra identidad", type: "A" },
      { text: "Importante, pero adaptándolas a nosotros", type: "B" },
      { text: "Algunas sí, otras no tanto", type: "C" },
      { text: "No me aferro a las tradiciones", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Cómo manejan las comidas tradicionales en fechas especiales?",
    options: [
      { text: "Preparamos todo casero: tamales, bacalao, romeritos", type: "A" },
      { text: "Combinamos lo casero con algo comprado", type: "B" },
      { text: "Pedimos o compramos todo ya hecho", type: "C" },
      { text: "No nos complicamos con la comida tradicional", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Participan en tradiciones religiosas juntos?",
    options: [
      { text: "Sí, misa, bendiciones, todo lo que corresponde", type: "A" },
      { text: "En fechas importantes como Navidad o Semana Santa", type: "B" },
      { text: "Uno es más religioso que el otro", type: "C" },
      { text: "No somos religiosos", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo ven el Día del Amor y la Amistad?",
    options: [
      { text: "Súper importante, cena romántica y regalos", type: "A" },
      { text: "Un detallito y salida especial", type: "B" },
      { text: "No es la gran cosa pero algo hacemos", type: "C" },
      { text: "Día comercial, no lo celebramos", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Han tenido conflictos por diferencias en tradiciones familiares?",
    options: [
      { text: "Nunca, nos adaptamos bien", type: "A" },
      { text: "Algunas veces pero lo resolvemos", type: "B" },
      { text: "Sí, es causa de tensión", type: "C" },
      { text: "Mejor evitamos el tema", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ustedes, las tradiciones en pareja son:",
    options: [
      { text: "El pegamento que une a la familia", type: "A" },
      { text: "Una forma bonita de crear recuerdos", type: "B" },
      { text: "Algo que hay que negociar entre los dos", type: "C" },
      { text: "Opcional, no define nuestra relación", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🎉 Guardianes de la Tradición",
    description: "Son una pareja que honra y mantiene vivas las tradiciones mexicanas. Para ustedes, cada fecha especial es una oportunidad de conectar con sus raíces y crear recuerdos familiares.",
    traits: ["Tradicionales", "Familieros", "Culturales", "Unidos"],
    advice: "¡Sus hijos crecerán con una rica herencia cultural! Sigan celebrando juntos.",
  },
  B: {
    title: "🌱 Creadores de Nuevas Tradiciones",
    description: "Respetan las tradiciones pero también las adaptan a su realidad. Están creando su propia identidad como pareja, mezclando lo mejor de ambas familias.",
    traits: ["Adaptables", "Creativos", "Equilibrados", "Modernos"],
    advice: "Este equilibrio es muy saludable. Sigan construyendo sus propias tradiciones.",
  },
  C: {
    title: "🎭 Selectivos con las Tradiciones",
    description: "Participan en algunas tradiciones pero no son esenciales para ustedes. A veces esto causa tensión con las familias.",
    traits: ["Selectivos", "Independientes", "Prácticos", "Variables"],
    advice: "Vale la pena hablar sobre qué tradiciones quieren mantener como pareja.",
  },
  D: {
    title: "🦋 Libres de Tradiciones",
    description: "No se sienten obligados a seguir tradiciones establecidas. Prefieren hacer las cosas a su manera.",
    traits: ["Libres", "Independientes", "No convencionales", "Modernos"],
    advice: "Está bien ir a su ritmo, pero cuiden de no alejarse de sus familias por esto.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
