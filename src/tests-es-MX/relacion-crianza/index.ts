// Test de Crianza en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Qué tan alineados están en su estilo de crianza?",
    options: [
      { text: "Muy alineados, pensamos igual en casi todo", type: "A" },
      { text: "Bastante, con diferencias menores", type: "B" },
      { text: "Hay diferencias importantes que negociamos", type: "C" },
      { text: "Muy diferentes, causa conflicto constante", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo manejan la disciplina con los hijos?",
    options: [
      { text: "Tenemos reglas claras y ambos las aplicamos igual", type: "A" },
      { text: "Generalmente de acuerdo, a veces uno es más flexible", type: "B" },
      { text: "Uno es más estricto y el otro más relajado", type: "C" },
      { text: "Nos contradicemos frente a los hijos", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Quién toma las decisiones importantes sobre los hijos?",
    options: [
      { text: "Ambos, siempre lo consultamos", type: "A" },
      { text: "Depende del tema, pero colaboramos", type: "B" },
      { text: "Generalmente uno decide más", type: "C" },
      { text: "Quien esté presente en el momento", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo manejan cuando los abuelos quieren opinar sobre la crianza?",
    options: [
      { text: "Somos un frente unido, nuestras reglas", type: "A" },
      { text: "Escuchamos pero decidimos nosotros", type: "B" },
      { text: "A veces les hacemos caso aunque no estemos de acuerdo", type: "C" },
      { text: "Hay conflicto porque uno apoya más a sus padres", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Dividen equitativamente las responsabilidades de los hijos?",
    options: [
      { text: "Sí, 50/50 en todo", type: "A" },
      { text: "Según nuestras fortalezas y tiempos", type: "B" },
      { text: "Uno hace más pero es funcional", type: "C" },
      { text: "Casi todo recae en uno solo", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo manejan los berrinches o mal comportamiento?",
    options: [
      { text: "Tenemos una estrategia acordada que seguimos", type: "A" },
      { text: "Generalmente actuamos similar", type: "B" },
      { text: "Cada quien reacciona diferente", type: "C" },
      { text: "Discutimos sobre cómo manejarlo", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Han hablado sobre valores que quieren transmitir a sus hijos?",
    options: [
      { text: "Sí, tenemos una visión clara compartida", type: "A" },
      { text: "En general sí, con algunos desacuerdos", type: "B" },
      { text: "No lo hemos discutido formalmente", type: "C" },
      { text: "Tenemos valores muy diferentes", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Cómo manejan la tecnología y tiempo de pantalla?",
    options: [
      { text: "Reglas claras que ambos respetamos", type: "A" },
      { text: "Límites generales, algo flexibles", type: "B" },
      { text: "Uno es más permisivo que el otro", type: "C" },
      { text: "Cada quien permite lo que quiere", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Mantienen tiempo de pareja a pesar de los hijos?",
    options: [
      { text: "Sí, es prioridad tener nuestros momentos", type: "A" },
      { text: "Lo intentamos aunque no siempre se puede", type: "B" },
      { text: "Poco, los hijos absorben todo el tiempo", type: "C" },
      { text: "Casi nunca, ya no hay tiempo para nosotros", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo resuelven desacuerdos de crianza frente a los hijos?",
    options: [
      { text: "Nunca frente a ellos, lo hablamos en privado", type: "A" },
      { text: "Tratamos de no contradicirnos en público", type: "B" },
      { text: "A veces se nos escapa discutir frente a ellos", type: "C" },
      { text: "Frecuentemente discutimos delante de ellos", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Están de acuerdo en temas de educación (escuela, extraescolares)?",
    options: [
      { text: "Sí, tenemos la misma visión", type: "A" },
      { text: "En lo general sí, con detalles por negociar", type: "B" },
      { text: "Hay diferencias importantes", type: "C" },
      { text: "Es fuente constante de discusión", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, criar en pareja significa:",
    options: [
      { text: "Ser un equipo unido con una misma visión", type: "A" },
      { text: "Complementarse y apoyarse mutuamente", type: "B" },
      { text: "Dividir tareas aunque no siempre coincidamos", type: "C" },
      { text: "Algo difícil que genera muchos conflictos", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "👨‍👩‍👧‍👦 Crianza en Equipo",
    description: "Son un equipo parental ejemplar. Están alineados en valores, disciplina y responsabilidades. Sus hijos tienen la seguridad de padres unidos y consistentes.",
    traits: ["Unidos", "Consistentes", "Organizados", "Comunicativos"],
    advice: "¡Excelente trabajo en equipo! Sigan comunicándose y adaptándose conforme los hijos crecen.",
  },
  B: {
    title: "👍 Crianza Colaborativa",
    description: "Tienen una buena dinámica de crianza con diferencias menores que saben manejar. Se complementan bien y generalmente logran acuerdos. Sus hijos tienen estabilidad.",
    traits: ["Colaboradores", "Flexibles", "Funcionales", "Adaptables"],
    advice: "Van muy bien. Sigan hablando de los temas donde hay diferencias para mantenerse alineados.",
  },
  C: {
    title: "⚠️ Crianza Desalineada",
    description: "Hay diferencias significativas en su enfoque de crianza. Esto puede confundir a los hijos y generar tensión entre ustedes. Es importante trabajar en esto.",
    traits: ["Diferentes", "Inconsistentes", "En negociación", "Desbalanceados"],
    advice: "Siéntense a hablar de sus enfoques de crianza y busquen puntos medios. Los hijos necesitan consistencia.",
  },
  D: {
    title: "🆘 Crianza en Conflicto",
    description: "La crianza es fuente de conflicto constante. Las diferencias son tan grandes que afectan a los hijos y a la relación. Es urgente buscar ayuda y soluciones.",
    traits: ["En conflicto", "Divididos", "Inconsistentes", "Estresados"],
    advice: "Consideren buscar ayuda profesional para alinear su enfoque de crianza. Sus hijos lo necesitan.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
