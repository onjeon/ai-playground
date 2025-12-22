// Relación a Distancia - ¿Sobrevivirías una relación a distancia?
// Test de Relación a Distancia para México

export const questions = [
  {
    id: 1,
    question: "Tu pareja tiene que irse a trabajar a otro estado por 6 meses...",
    options: [
      { text: "Podemos con esto, el amor puede más", type: "A" },
      { text: "Será difícil pero lo intentamos", type: "B" },
      { text: "Me preocupa mucho pero lo acepto", type: "C" },
      { text: "No sé si nuestra relación aguante eso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Cada cuánto necesitas ver a tu pareja para estar bien?",
    options: [
      { text: "Puedo aguantar semanas si nos comunicamos bien", type: "A" },
      { text: "Al menos cada dos semanas necesito verlo/a", type: "B" },
      { text: "Una semana máximo sin vernos", type: "C" },
      { text: "Necesito verlo/a casi diario", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo manejarías la comunicación a distancia?",
    options: [
      { text: "Videollamadas, mensajes y mucha creatividad", type: "A" },
      { text: "Llamadas diarias y buenos días/noches", type: "B" },
      { text: "Lo que se pueda, pero no es lo mismo", type: "C" },
      { text: "Me frustraría mucho no estar juntos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu pareja no contesta por unas horas estando lejos...",
    options: [
      { text: "Estará ocupado/a, confío plenamente", type: "A" },
      { text: "Me pregunto qué hace pero no me angustio", type: "B" },
      { text: "Me pongo ansioso/a y le mando varios mensajes", type: "C" },
      { text: "Empiezo a imaginar lo peor", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Qué tanto confías en tu pareja estando lejos?",
    options: [
      { text: "100%, la distancia no cambia eso", type: "A" },
      { text: "Confío pero a veces tengo dudas", type: "B" },
      { text: "Me cuesta confiar sin poder verlo/a", type: "C" },
      { text: "La distancia me haría muy desconfiado/a", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo mantendrías la chispa a distancia?",
    options: [
      { text: "Sorpresas, cartas, videollamadas románticas", type: "A" },
      { text: "Planeando el siguiente encuentro siempre", type: "B" },
      { text: "Es difícil, la chispa se apaga sin presencia", type: "C" },
      { text: "No creo que se pueda mantener igual", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Van a estar separados en fechas importantes (tu cumpleaños)...",
    options: [
      { text: "Lo celebramos virtual y cuando nos veamos", type: "A" },
      { text: "Me da tristeza pero lo entiendo", type: "B" },
      { text: "Me afectaría mucho no estar juntos", type: "C" },
      { text: "Eso sería muy difícil de aceptar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tu pareja hace nuevos amigos donde está...",
    options: [
      { text: "Qué bueno, necesita su vida social", type: "A" },
      { text: "Me alegra pero me da algo de celos", type: "B" },
      { text: "Me incomoda que tenga vida sin mí", type: "C" },
      { text: "Me preocupa que me reemplace", type: "D" },
    ],
  },
  {
    id: 9,
    question: "El reencuentro después de semanas separados...",
    options: [
      { text: "¡Es lo más emocionante! Vale la pena todo", type: "A" },
      { text: "Es bonito pero preferiría no separarnos", type: "B" },
      { text: "Ya se siente un poco extraño", type: "C" },
      { text: "Temo que ya no sea igual", type: "D" },
    ],
  },
  {
    id: 10,
    question: "¿Cuánto tiempo máximo aguantarías una relación a distancia?",
    options: [
      { text: "El que sea necesario si hay un plan", type: "A" },
      { text: "Un año máximo", type: "B" },
      { text: "Unos meses nada más", type: "C" },
      { text: "No creo en las relaciones a distancia", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Has tenido o tendrías una relación a distancia?",
    options: [
      { text: "Sí, y funcionó/funcionaría", type: "A" },
      { text: "Lo intentaría si vale la pena", type: "B" },
      { text: "Preferiría evitarlo", type: "C" },
      { text: "Nunca, no funcionan", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Lo más importante para que funcione una relación a distancia es...",
    options: [
      { text: "Confianza y comunicación constante", type: "A" },
      { text: "Tener una fecha de fin para la distancia", type: "B" },
      { text: "Verse lo más seguido posible", type: "C" },
      { text: "Honestamente no creo que funcionen", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Experto/a en Distancia",
    emoji: "✈️",
    description: "Podrías sobrevivir una relación a distancia sin problema. Tienes la confianza, madurez y creatividad necesarias. Sabes que el amor no depende de la cercanía física sino de la conexión emocional.",
    traits: ["Confiado/a", "Independiente", "Comunicativo/a", "Maduro/a"],
    strengths: ["No te consumen los celos", "Mantienes la chispa creativamente", "Confías en tu pareja"],
    weaknesses: ["Podrías parecer muy desapegado/a", "A veces la distancia sí afecta"],
    tips: ["Tu actitud es ideal para la distancia", "No descuides los detalles románticos", "Siempre ten un plan de reunión"],
  },
  B: {
    type: "B",
    title: "Adaptable a la Distancia",
    emoji: "💪",
    description: "Podrías manejar una relación a distancia aunque no sea lo ideal. Te adaptarías si la relación vale la pena, pero necesitarías esfuerzo constante y un plan claro de cuándo termina la distancia.",
    traits: ["Adaptable", "Realista", "Comprometido/a", "Esperanzado/a"],
    strengths: ["Te esfuerzas por hacer que funcione", "Eres realista sobre los retos", "Valoras la relación"],
    weaknesses: ["La distancia te desgasta", "Necesitas certeza de reunión"],
    tips: ["Comunica tus necesidades claramente", "Establece fechas de visita", "No dejes que la rutina mate la relación"],
  },
  C: {
    type: "C",
    title: "Difícil a Distancia",
    emoji: "😰",
    description: "Te costaría mucho una relación a distancia. Necesitas la presencia física y la cercanía constante. La distancia te generaría ansiedad, celos e inseguridad. No es tu fuerte.",
    traits: ["Necesitado/a de cercanía", "Ansioso/a", "Inseguro/a", "Dependiente"],
    strengths: ["Valoras la presencia física", "Eres muy cariñoso/a", "Te entregas completamente"],
    weaknesses: ["La distancia te angustia", "Puedes volverte controlador/a", "Te consumen los celos"],
    tips: ["Trabaja en tu seguridad personal", "La distancia no siempre significa el fin", "Confía más en tu pareja y en ti"],
  },
  D: {
    type: "D",
    title: "No para Distancia",
    emoji: "🚫",
    description: "Una relación a distancia definitivamente no es para ti. Necesitas la presencia constante de tu pareja. Preferirías terminar antes que vivir con la incertidumbre y la lejanía.",
    traits: ["Muy dependiente", "Desconfiado/a", "Necesita presencia", "Celoso/a"],
    strengths: ["Sabes lo que necesitas", "Eres honesto/a sobre tus límites", "Prefieres relaciones presenciales"],
    weaknesses: ["Podrías perder relaciones valiosas", "Tu dependencia es alta", "Te falta flexibilidad"],
    tips: ["A veces la vida requiere distancia temporal", "Trabaja en tu independencia emocional", "No toda distancia es abandono"],
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
