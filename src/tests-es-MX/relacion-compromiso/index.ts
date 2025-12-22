// Nivel de Compromiso - ¿Qué tan comprometido/a eres?
// Test de Compromiso en Relaciones para México

export const questions = [
  {
    id: 1,
    question: "¿Cómo ves tu relación actual o futura?",
    options: [
      { text: "Es para siempre, hasta que la muerte nos separe", type: "A" },
      { text: "Vamos bien, pero un paso a la vez", type: "B" },
      { text: "Estamos bien por ahora, ya veremos", type: "C" },
      { text: "Prefiero no pensar tan lejos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja te propone mudarse juntos...",
    options: [
      { text: "¡Sí! Es el siguiente paso natural", type: "A" },
      { text: "Lo pensamos bien y decidimos juntos", type: "B" },
      { text: "No sé, me gusta mi espacio", type: "C" },
      { text: "Es muy pronto, no quiero presiones", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Incluyes a tu pareja en tus planes a futuro?",
    options: [
      { text: "En todos, no imagino mi vida sin él/ella", type: "A" },
      { text: "En la mayoría, pero también tengo planes propios", type: "B" },
      { text: "En algunos, depende del plan", type: "C" },
      { text: "Prefiero hacer planes solo/a por si acaso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu familia te pregunta cuándo se casan...",
    options: [
      { text: "Ya tenemos fecha, ¡pronto!", type: "A" },
      { text: "Cuando estemos listos, todo a su tiempo", type: "B" },
      { text: "No sé, el matrimonio no es prioridad", type: "C" },
      { text: "El papel no define el amor, no me urge", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Surge una oportunidad de trabajo en otra ciudad...",
    options: [
      { text: "Lo hablamos y decidimos juntos qué es mejor", type: "A" },
      { text: "Evaluamos si la relación aguanta la distancia", type: "B" },
      { text: "Mi carrera es importante, ya veremos qué pasa", type: "C" },
      { text: "Si es buena oportunidad, la tomo sin dudarlo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo manejas las crisis en la relación?",
    options: [
      { text: "Luchamos juntos, no me rindo fácilmente", type: "A" },
      { text: "Hablamos y buscamos soluciones", type: "B" },
      { text: "Si es muy difícil, quizá no somos el uno para el otro", type: "C" },
      { text: "Prefiero evitar los problemas o terminar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Conoces a la familia de tu pareja y viceversa?",
    options: [
      { text: "Sí, somos como una gran familia ya", type: "A" },
      { text: "Sí, nos llevamos bien con ambas familias", type: "B" },
      { text: "Un poco, pero no somos muy cercanos", type: "C" },
      { text: "Prefiero mantener las familias separadas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Comparten metas financieras como pareja?",
    options: [
      { text: "Sí, ahorramos juntos para nuestro futuro", type: "A" },
      { text: "Tenemos algunas metas en común", type: "B" },
      { text: "Cada quien maneja su dinero", type: "C" },
      { text: "No hablamos de dinero, es tema delicado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Han hablado de tener hijos?",
    options: [
      { text: "Sí, ya tenemos planes claros", type: "A" },
      { text: "Lo hemos platicado, pero sin prisa", type: "B" },
      { text: "No estoy seguro/a de querer hijos", type: "C" },
      { text: "No es tema que me interese hablar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu pareja está pasando por un momento difícil...",
    options: [
      { text: "Estoy ahí al 100%, en las buenas y en las malas", type: "A" },
      { text: "Lo apoyo pero también cuido mi bienestar", type: "B" },
      { text: "Ayudo en lo que puedo pero no quiero drama", type: "C" },
      { text: "Cada quien debe resolver sus problemas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Cómo describes tu nivel de compromiso?",
    options: [
      { text: "Entregado/a al 100%, sin reservas", type: "A" },
      { text: "Comprometido/a pero con equilibrio", type: "B" },
      { text: "Cauteloso/a, no quiero salir lastimado/a", type: "C" },
      { text: "Prefiero mantener opciones abiertas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Harías sacrificios importantes por tu relación?",
    options: [
      { text: "Claro, el amor requiere sacrificios", type: "A" },
      { text: "Depende del sacrificio, hay límites", type: "B" },
      { text: "No me gusta perder cosas por una relación", type: "C" },
      { text: "El amor no debería requerir sacrificios", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Compromiso Total",
    emoji: "💍",
    description: "Eres de los que se entregan al 100% en una relación. El compromiso mexicano tradicional: 'hasta que la muerte nos separe'. Valoras la familia, el matrimonio y construir algo duradero. Eres leal y dedicado/a.",
    traits: ["Leal", "Entregado/a", "Tradicional", "Dedicado/a"],
    strengths: ["Tu pareja se siente segura", "Construyes relaciones sólidas", "Eres confiable"],
    weaknesses: ["Puedes perder tu identidad", "A veces te quedas en relaciones que no funcionan"],
    tips: ["Mantén tu individualidad también", "El compromiso es de dos", "No te aferres a algo que no funciona"],
  },
  B: {
    type: "B",
    title: "Compromiso Equilibrado",
    emoji: "⚖️",
    description: "Tienes un nivel de compromiso sano y equilibrado. Te entregas a la relación pero sin perder tu esencia. Valoras tanto la pareja como tu crecimiento personal. Sabes que el amor se construye día a día.",
    traits: ["Equilibrado/a", "Maduro/a", "Consciente", "Estable"],
    strengths: ["Mantienes balance vida-pareja", "No dependes emocionalmente", "Eres realista"],
    weaknesses: ["A veces pareces poco romántico/a", "Puedes ser muy racional"],
    tips: ["Tu equilibrio es saludable", "Sigue comunicándote abiertamente", "No pierdas la espontaneidad"],
  },
  C: {
    type: "C",
    title: "Compromiso Cauteloso",
    emoji: "🤔",
    description: "Te cuesta comprometerte completamente. Quizá experiencias pasadas te hicieron cauteloso/a, o simplemente valoras mucho tu independencia. Tienes un pie adentro y otro afuera de la relación.",
    traits: ["Cauteloso/a", "Independiente", "Reservado/a", "Precavido/a"],
    strengths: ["Proteges tu corazón", "No te apresuras", "Valoras tu libertad"],
    weaknesses: ["Tu pareja puede sentirse insegura", "Evitas profundizar", "Podrías perder buenas relaciones"],
    tips: ["El miedo no debe controlarte", "Arriésgate a veces", "Comunica tus miedos a tu pareja"],
  },
  D: {
    type: "D",
    title: "Bajo Compromiso",
    emoji: "🦋",
    description: "El compromiso no es lo tuyo. Prefieres vivir el momento sin atarte a planes a largo plazo. En México dirían que 'no te quieres amarrar'. Valoras tu libertad por encima de la estabilidad de pareja.",
    traits: ["Libre", "Desapegado/a", "Independiente", "Volátil"],
    strengths: ["Vives el presente", "No te aferras", "Eres independiente"],
    weaknesses: ["Difícilmente construyes algo duradero", "Tu pareja se siente insegura", "Evitas responsabilidades"],
    tips: ["El compromiso no es prisión", "Una buena relación vale el esfuerzo", "Reflexiona qué es lo que realmente quieres"],
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
