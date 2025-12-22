// Rutina en Pareja - ¿Cómo manejas la rutina?
// Test de Rutina en Pareja para México

export const questions = [
  {
    id: 1,
    question: "Después de años juntos, la rutina diaria...",
    options: [
      { text: "Es cómoda y reconfortante", type: "A" },
      { text: "Está bien pero necesita variación", type: "B" },
      { text: "Me aburre un poco", type: "C" },
      { text: "Me sofoca, necesito novedad", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Los fines de semana en pareja suelen ser...",
    options: [
      { text: "Siempre igual y está bien así", type: "A" },
      { text: "Alternamos entre rutina y algo nuevo", type: "B" },
      { text: "Deberían ser más variados", type: "C" },
      { text: "Necesito hacer cosas diferentes cada fin", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Cada cuánto hacen algo nuevo o diferente como pareja?",
    options: [
      { text: "Casi nunca, estamos bien con lo de siempre", type: "A" },
      { text: "De vez en cuando, cuando surge", type: "B" },
      { text: "Intento que sea seguido", type: "C" },
      { text: "Todo el tiempo, la rutina me mata", type: "D" },
    ],
  },
  {
    id: 4,
    question: "La famosa 'chispa' en una relación larga...",
    options: [
      { text: "Se transforma en algo más profundo", type: "A" },
      { text: "Hay que mantenerla con esfuerzo", type: "B" },
      { text: "Es difícil que no se apague", type: "C" },
      { text: "Se pierde inevitablemente con la rutina", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Las cenas diarias con tu pareja son...",
    options: [
      { text: "Un momento especial aunque sea igual", type: "A" },
      { text: "Agradables, platicamos de nuestro día", type: "B" },
      { text: "A veces aburridas, falta conversación", type: "C" },
      { text: "Cada quien en su celular, la verdad", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Planean citas aunque ya vivan juntos?",
    options: [
      { text: "Sí, es importante mantener el romance", type: "A" },
      { text: "A veces, cuando hay ocasión", type: "B" },
      { text: "Casi nunca, ¿para qué si ya vivimos juntos?", type: "C" },
      { text: "No, la verdad se perdió esa costumbre", type: "D" },
    ],
  },
  {
    id: 7,
    question: "El romance después de años juntos...",
    options: [
      { text: "Sigue presente de forma diferente", type: "A" },
      { text: "Hay que trabajarlo constantemente", type: "B" },
      { text: "Ha disminuido bastante", type: "C" },
      { text: "Prácticamente no existe ya", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Qué tanto conoces la rutina de tu pareja?",
    options: [
      { text: "Todo, y me gusta así", type: "A" },
      { text: "Bastante, somos predecibles", type: "B" },
      { text: "Demasiado, ya no hay sorpresas", type: "C" },
      { text: "Nos conocemos tanto que es aburrido", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sorprender a tu pareja después de años...",
    options: [
      { text: "Aún lo hago con detalles pequeños", type: "A" },
      { text: "Lo intento en ocasiones especiales", type: "B" },
      { text: "Es difícil ya sorprendernos", type: "C" },
      { text: "Ya no sé cómo sorprenderlo/a", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Los domingos típicos en pareja...",
    options: [
      { text: "Son mi día favorito, tranquilos juntos", type: "A" },
      { text: "Agradables aunque a veces predecibles", type: "B" },
      { text: "A veces quisiera hacer algo diferente", type: "C" },
      { text: "Son bastante aburridos la verdad", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ver la misma serie todas las noches...",
    options: [
      { text: "Es nuestro ritual y me encanta", type: "A" },
      { text: "Está bien, es tiempo juntos", type: "B" },
      { text: "A veces quisiera hacer otra cosa", type: "C" },
      { text: "Ya me aburrí de eso", type: "D" },
    ],
  },
  {
    id: 12,
    question: "La rutina en pareja es...",
    options: [
      { text: "Señal de estabilidad y amor", type: "A" },
      { text: "Natural pero hay que balancearla", type: "B" },
      { text: "Un riesgo para la relación", type: "C" },
      { text: "El enemigo del amor", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Amante de la Rutina",
    emoji: "🏠",
    description: "La rutina te da seguridad y la disfrutas. Los pequeños rituales diarios con tu pareja son tu forma de amor. No necesitas novedad constante para ser feliz.",
    traits: ["Estable", "Tradicional", "Hogareño/a", "Consistente"],
    strengths: ["Relación estable", "Valoras lo cotidiano", "No te aburres fácil"],
    weaknesses: ["Podrías caer en monotonía", "Tu pareja podría querer más variedad"],
    tips: ["Sorprende de vez en cuando", "La rutina está bien pero un poco de novedad ayuda"],
  },
  B: {
    type: "B",
    title: "Balance Rutina-Novedad",
    emoji: "⚖️",
    description: "Encuentras el equilibrio perfecto entre rutina y novedad. Valoras la estabilidad pero también sabes que hay que mantener las cosas frescas.",
    traits: ["Equilibrado/a", "Adaptable", "Consciente", "Creativo/a"],
    strengths: ["Mejor balance", "Mantienes la chispa", "No caes en extremos"],
    weaknesses: ["A veces te cuesta decidir qué priorizar"],
    tips: ["Tu enfoque es muy sano", "Sigue alternando", "Comunica con tu pareja"],
  },
  C: {
    type: "C",
    title: "Cansado/a de la Rutina",
    emoji: "😴",
    description: "La rutina te está afectando. Sientes que la relación se ha vuelto predecible y aburrida. Necesitas más novedad y emoción.",
    traits: ["Inquieto/a", "Aburrido/a", "Buscador de novedad", "Insatisfecho/a"],
    strengths: ["Reconoces el problema", "Quieres mejorar", "Buscas cambio"],
    weaknesses: ["La insatisfacción puede crecer", "Podrías buscar novedad fuera"],
    tips: ["Habla con tu pareja", "Propongan cosas nuevas juntos", "La rutina no tiene que ser aburrida"],
  },
  D: {
    type: "D",
    title: "Anti-Rutina",
    emoji: "🏃",
    description: "La rutina te sofoca. Necesitas constante novedad y emoción. Esto puede ser un reto en relaciones largas donde cierta rutina es inevitable.",
    traits: ["Aventurero/a", "Inquieto/a", "Impaciente", "Buscador de emociones"],
    strengths: ["Mucha energía", "Ideas frescas", "Nunca aburrido/a"],
    weaknesses: ["Difícil en relaciones largas", "Podrías huir de compromisos", "Insatisfacción crónica"],
    tips: ["La estabilidad no es enemiga", "Aprende a disfrutar lo cotidiano", "No confundas rutina con falta de amor"],
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
