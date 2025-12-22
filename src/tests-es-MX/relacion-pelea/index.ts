// Estilo de Pelea - ¿Cómo peleas con tu pareja?
// Test de Estilo de Discusión para México

export const questions = [
  {
    id: 1,
    question: "Cuando algo te molesta de tu pareja...",
    options: [
      { text: "Se lo digo de inmediato, sin rodeos", type: "A" },
      { text: "Busco el momento adecuado para platicarlo", type: "B" },
      { text: "Me guardo las cosas para no pelear", type: "C" },
      { text: "Exploto después de aguantar mucho", type: "D" },
    ],
  },
  {
    id: 2,
    question: "En medio de una discusión acalorada...",
    options: [
      { text: "Digo todo lo que pienso aunque duela", type: "A" },
      { text: "Intento mantener la calma y escuchar", type: "B" },
      { text: "Me cierro y dejo de hablar", type: "C" },
      { text: "Grito, lloro o hago drama", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tu pareja dice algo que te lastima...",
    options: [
      { text: "Le respondo con algo peor", type: "A" },
      { text: "Le digo que eso me dolió", type: "B" },
      { text: "Me quedo callado/a pero me duele", type: "C" },
      { text: "Me pongo a llorar o me voy", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Después de una pelea fuerte...",
    options: [
      { text: "Sigo enojado/a por varios días", type: "A" },
      { text: "Busco hacer las paces pronto", type: "B" },
      { text: "Finjo que nada pasó", type: "C" },
      { text: "Necesito mucho tiempo para procesar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Quién suele pedir perdón primero?",
    options: [
      { text: "Nunca yo, que pida el otro", type: "A" },
      { text: "El que estuvo mal, sin importar quién", type: "B" },
      { text: "Yo, aunque no tenga la culpa, por paz", type: "C" },
      { text: "Nadie, las cosas se quedan sin resolver", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja trae a colación algo del pasado en la discusión...",
    options: [
      { text: "Yo también saco mis trapos sucios", type: "A" },
      { text: "Le digo que eso ya lo hablamos", type: "B" },
      { text: "Me aguanto aunque no sea justo", type: "C" },
      { text: "Eso me hace sentir muy mal", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Cómo es tu tono de voz en las discusiones?",
    options: [
      { text: "Fuerte, grito cuando estoy enojado/a", type: "A" },
      { text: "Firme pero sin gritar", type: "B" },
      { text: "Bajo, casi no hablo", type: "C" },
      { text: "Varía mucho, a veces lloro", type: "D" },
    ],
  },
  {
    id: 8,
    question: "En una reunión familiar hay un desacuerdo con tu pareja...",
    options: [
      { text: "Lo discutimos ahí mismo", type: "A" },
      { text: "Lo dejamos para hablar en privado", type: "B" },
      { text: "Cedo para no hacer escena", type: "C" },
      { text: "Me pongo mal y se nota", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Cada cuánto pelean aproximadamente?",
    options: [
      { text: "Seguido, somos muy intensos", type: "A" },
      { text: "A veces, lo normal", type: "B" },
      { text: "Casi nunca, evito los conflictos", type: "C" },
      { text: "Poco pero cuando peleamos es fuerte", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu pareja te da el 'avión' (te ignora)...",
    options: [
      { text: "Me enojo más y le exijo que hable", type: "A" },
      { text: "Le doy espacio y después hablamos", type: "B" },
      { text: "También lo ignoro", type: "C" },
      { text: "Me siento muy mal y ansioso/a", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Cómo te reconcilias después de pelear?",
    options: [
      { text: "Con algo de tensión, cuesta perdonar", type: "A" },
      { text: "Hablamos, nos pedimos perdón y ya", type: "B" },
      { text: "Actuamos como si nada pero nada se resuelve", type: "C" },
      { text: "Con mucho cariño y promesas de cambio", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Qué frase te describe mejor peleando?",
    options: [
      { text: "Soy de sangre caliente, exploto fácil", type: "A" },
      { text: "Soy razonable, busco soluciones", type: "B" },
      { text: "Soy de los que se guardan todo", type: "C" },
      { text: "Soy muy emocional, todo me afecta", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Peleador/a Explosivo/a",
    emoji: "🌋",
    description: "Eres de sangre caliente, típico temperamento mexicano. Cuando te enojas, lo expresas fuerte y claro. No te guardas nada pero a veces puedes decir cosas de las que te arrepientas después.",
    traits: ["Explosivo/a", "Directo/a", "Intenso/a", "Confrontacional"],
    strengths: ["No acumulas resentimiento", "Dices lo que piensas", "Los problemas no se quedan sin hablar"],
    weaknesses: ["Puedes lastimar con palabras", "Escalas los conflictos", "Cuesta controlarte"],
    tips: ["Cuenta hasta 10 antes de responder", "Las palabras hieren y no se borran", "La calma ayuda a resolver mejor"],
  },
  B: {
    type: "B",
    title: "Peleador/a Asertivo/a",
    emoji: "🎯",
    description: "Peleas de manera sana y constructiva. Expresas lo que sientes sin agredir. Buscas soluciones más que ganar la discusión. Eres el modelo a seguir en resolución de conflictos.",
    traits: ["Asertivo/a", "Calmado/a", "Resolutivo/a", "Maduro/a"],
    strengths: ["Resuelves conflictos efectivamente", "No lastimas innecesariamente", "Escuchas antes de reaccionar"],
    weaknesses: ["A veces pareces frío/a", "Tu pareja puede sentir que no te importa"],
    tips: ["Sigue así, tu forma es la más sana", "Muestra también emoción", "No reprimas demasiado"],
  },
  C: {
    type: "C",
    title: "Evitador/a de Conflictos",
    emoji: "🙈",
    description: "Evitas las peleas a toda costa. Prefieres quedarte callado/a y aguantar antes que confrontar. En México es común 'aguantarse', pero esto acumula resentimiento que puede explotar después.",
    traits: ["Evitativo/a", "Pasivo/a", "Guardado/a", "Pacífico/a"],
    strengths: ["No generas conflictos", "Eres paciente", "Mantienes la paz"],
    weaknesses: ["Acumulas resentimiento", "Los problemas no se resuelven", "Puedes explotar después de mucho tiempo"],
    tips: ["Expresar lo que sientes no es pelear", "Guardarte todo no es sano", "Una conversación difícil previene explosiones"],
  },
  D: {
    type: "D",
    title: "Peleador/a Emocional",
    emoji: "😭",
    description: "Las peleas te afectan mucho emocionalmente. Puedes llorar, sentirte muy mal o necesitar mucho tiempo para recuperarte. Eres muy sensible y los conflictos te desgastan.",
    traits: ["Emocional", "Sensible", "Intenso/a", "Vulnerable"],
    strengths: ["Te importa mucho la relación", "Eres genuino/a en tus emociones", "Buscas conexión"],
    weaknesses: ["Te desgastas mucho", "Puede parecer manipulación", "Las peleas te afectan demasiado"],
    tips: ["Aprende a regular tus emociones", "No todo conflicto es el fin del mundo", "Trabaja en tu autoestima"],
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
