// Tu Pareja Ideal - ¿Qué tipo de pareja buscas?
// Test de Pareja Ideal para México

export const questions = [
  {
    id: 1,
    question: "Lo más importante que buscas en una pareja es...",
    options: [
      { text: "Que sea cariñoso/a y romántico/a", type: "A" },
      { text: "Que sea estable y responsable", type: "B" },
      { text: "Que sea divertido/a y aventurero/a", type: "C" },
      { text: "Que me dé mi espacio y libertad", type: "D" },
    ],
  },
  {
    id: 2,
    question: "En cuanto al físico...",
    options: [
      { text: "Muy importante, tiene que gustarme mucho", type: "A" },
      { text: "Importa pero no es lo principal", type: "B" },
      { text: "Me fijo más en la personalidad", type: "C" },
      { text: "El físico es lo de menos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Qué tan importante es que se lleve bien con tu familia?",
    options: [
      { text: "Indispensable, mi familia es todo", type: "A" },
      { text: "Muy importante pero no determinante", type: "B" },
      { text: "Sería bueno pero no es requisito", type: "C" },
      { text: "Mi familia no tiene que opinar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "En el tema económico, tu pareja ideal...",
    options: [
      { text: "Debe tener buen trabajo y ser proveedor/a", type: "A" },
      { text: "Debe ser responsable con el dinero", type: "B" },
      { text: "Que tenga lo básico, no me importa tanto", type: "C" },
      { text: "El dinero no importa si hay amor", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Qué tanto debe compartir tus gustos e intereses?",
    options: [
      { text: "Todo, quiero hacer todo juntos", type: "A" },
      { text: "Lo importante, pero que tenga lo suyo", type: "B" },
      { text: "Algunas cosas, cada quien sus hobbies", type: "C" },
      { text: "No es necesario, los opuestos se atraen", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja ideal es alguien que...",
    options: [
      { text: "Me demuestre amor todo el tiempo", type: "A" },
      { text: "Sea mi compañero/a de vida", type: "B" },
      { text: "Me haga reír y la pasemos bien", type: "C" },
      { text: "Me respete y me deje ser yo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "En cuanto a los hijos...",
    options: [
      { text: "Debe querer formar una familia conmigo", type: "A" },
      { text: "Que esté abierto/a a la posibilidad", type: "B" },
      { text: "No es indispensable que quiera hijos", type: "C" },
      { text: "Prefiero alguien que tampoco quiera", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Qué edad preferirías en tu pareja?",
    options: [
      { text: "Mayor que yo, más maduro/a", type: "A" },
      { text: "Similar a mi edad", type: "B" },
      { text: "Menor que yo, más joven", type: "C" },
      { text: "La edad no me importa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu pareja ideal y la religión...",
    options: [
      { text: "Debe compartir mi fe y creencias", type: "A" },
      { text: "Que respete mis creencias está bien", type: "B" },
      { text: "No me importa su religión", type: "C" },
      { text: "Prefiero alguien no religioso/a", type: "D" },
    ],
  },
  {
    id: 10,
    question: "En la intimidad, buscas alguien...",
    options: [
      { text: "Muy apasionado/a y expresivo/a", type: "A" },
      { text: "Con quien haya buena química", type: "B" },
      { text: "Que respete mis tiempos y ritmos", type: "C" },
      { text: "Eso no es lo más importante para mí", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tu pareja ideal debe ser...",
    options: [
      { text: "Tradicional y de buenos valores", type: "A" },
      { text: "Equilibrada entre tradición y modernidad", type: "B" },
      { text: "Moderna y de mente abierta", type: "C" },
      { text: "Independiente y libre pensador/a", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Qué NO tolerarías en una pareja?",
    options: [
      { text: "Que no sea detallista ni romántico/a", type: "A" },
      { text: "Que sea irresponsable o inmaduro/a", type: "B" },
      { text: "Que sea aburrido/a y rutinario/a", type: "C" },
      { text: "Que sea controlador/a y celoso/a", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Buscas Romance Total",
    emoji: "💕",
    description: "Tu pareja ideal es alguien súper romántico/a y detallista. Quieres amor de telenovela mexicana: flores, serenatas, y demostraciones constantes de amor. Buscas a alguien que te haga sentir especial todos los días.",
    traits: ["Romántico/a", "Tradicional", "Detallista", "Apasionado/a"],
    strengths: ["Sabes lo que quieres", "Valorarás a quien te conquiste", "Relación intensa"],
    weaknesses: ["Expectativas muy altas", "La realidad puede decepcionar", "Dependencia emocional"],
    tips: ["El romance del día a día es diferente", "Nadie es perfecto", "Aprecia los gestos pequeños"],
  },
  B: {
    type: "B",
    title: "Buscas Estabilidad",
    emoji: "🏠",
    description: "Tu pareja ideal es alguien estable, responsable y confiable. Buscas un/a compañero/a de vida más que un amor de película. Alguien con quien construir un futuro seguro.",
    traits: ["Práctico/a", "Maduro/a", "Responsable", "Comprometido/a"],
    strengths: ["Buscarás relaciones sanas", "Valorás lo importante", "Relación duradera"],
    weaknesses: ["Podrías aburrirte", "Falta de pasión", "Muy enfocado/a en lo práctico"],
    tips: ["No olvides el romance", "La estabilidad también necesita chispa", "Busca equilibrio"],
  },
  C: {
    type: "C",
    title: "Buscas Diversión",
    emoji: "🎉",
    description: "Tu pareja ideal es alguien divertido/a, espontáneo/a y aventurero/a. No quieres una relación aburrida sino alguien que te haga reír y con quien vivir experiencias increíbles.",
    traits: ["Divertido/a", "Aventurero/a", "Espontáneo/a", "Joven de espíritu"],
    strengths: ["Relación emocionante", "Nunca te aburrirás", "Muchas experiencias juntos"],
    weaknesses: ["Puede faltar estabilidad", "Evitar temas serios", "Relaciones superficiales"],
    tips: ["La diversión no lo es todo", "También necesitas compromiso", "Busca profundidad además de risas"],
  },
  D: {
    type: "D",
    title: "Buscas Independencia",
    emoji: "🦋",
    description: "Tu pareja ideal es alguien que respete tu espacio y libertad. No quieres a alguien encimoso/a sino una relación madura donde cada quien tenga su vida también.",
    traits: ["Independiente", "Respetuoso/a", "Maduro/a", "Libre"],
    strengths: ["Relación sin asfixia", "Mantienes tu identidad", "Respeto mutuo"],
    weaknesses: ["Podrías parecer frío/a", "Falta de conexión emocional", "Demasiada distancia"],
    tips: ["La cercanía también es importante", "No confundas libertad con desapego", "El amor requiere entrega"],
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
