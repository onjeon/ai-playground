// Test de Expectativas en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Qué tan claras tienen las expectativas sobre su relación?",
    options: [
      { text: "Muy claras, hemos hablado de todo", type: "A" },
      { text: "Bastante, aunque hay cosas sin definir", type: "B" },
      { text: "Algo difusas, asumimos cosas", type: "C" },
      { text: "No las hemos discutido realmente", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Tu pareja cumple con lo que esperabas de la relación?",
    options: [
      { text: "Sí, completamente", type: "A" },
      { text: "En lo importante sí", type: "B" },
      { text: "Parcialmente, hay decepciones", type: "C" },
      { text: "No mucho, esperaba más", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo manejan cuando la realidad no cumple las expectativas?",
    options: [
      { text: "Lo hablamos y ajustamos expectativas juntos", type: "A" },
      { text: "Trato de adaptarme y ser realista", type: "B" },
      { text: "Me frustro pero no siempre lo comunico", type: "C" },
      { text: "Hay conflicto y resentimiento", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Esperas que tu pareja adivine lo que necesitas?",
    options: [
      { text: "No, comunico lo que necesito claramente", type: "A" },
      { text: "A veces, pero si no entiende lo digo", type: "B" },
      { text: "Frecuentemente, me molesta tener que pedirlo", type: "C" },
      { text: "Sí, si me quiere debería saberlo", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Qué esperabas del matrimonio/relación seria que no se ha cumplido?",
    options: [
      { text: "Casi todo se ha cumplido o superado", type: "A" },
      { text: "Algunas cosas, pero son menores", type: "B" },
      { text: "Varias cosas importantes", type: "C" },
      { text: "Muchas, la realidad es muy diferente", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Crees que tu pareja tiene expectativas realistas sobre ti?",
    options: [
      { text: "Sí, me acepta como soy", type: "A" },
      { text: "Mayormente sí, con detalles a ajustar", type: "B" },
      { text: "A veces me pide cosas que no puedo dar", type: "C" },
      { text: "Espera demasiado de mí", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Han hablado sobre expectativas de roles en el hogar?",
    options: [
      { text: "Sí, tenemos acuerdos claros", type: "A" },
      { text: "Algo, pero se fue dando naturalmente", type: "B" },
      { text: "No mucho, hay suposiciones", type: "C" },
      { text: "No, y causa problemas", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Qué expectativas tienes sobre la intimidad que no se cumplen?",
    options: [
      { text: "Ninguna, estamos bien en ese aspecto", type: "A" },
      { text: "Pequeñas cosas que podemos trabajar", type: "B" },
      { text: "Algunas importantes que me frustran", type: "C" },
      { text: "Muchas, hay desconexión", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Esperabas más apoyo emocional del que recibes?",
    options: [
      { text: "No, mi pareja me apoya completamente", type: "A" },
      { text: "A veces quisiera más pero está bien", type: "B" },
      { text: "Sí, frecuentemente me siento solo/a", type: "C" },
      { text: "Definitivamente, no me siento apoyado/a", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo manejas la diferencia entre la pareja real y la pareja ideal?",
    options: [
      { text: "Amo a mi pareja como es, no busco ideal", type: "A" },
      { text: "Acepto las diferencias, nadie es perfecto", type: "B" },
      { text: "A veces comparo y me decepciono", type: "C" },
      { text: "Constantemente pienso en lo que podría ser", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Tus expectativas han evolucionado con el tiempo?",
    options: [
      { text: "Sí, se han vuelto más realistas y maduras", type: "A" },
      { text: "Algo, he aprendido a ajustarlas", type: "B" },
      { text: "No mucho, sigo esperando lo mismo", type: "C" },
      { text: "Han bajado por decepciones", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, manejar expectativas en pareja significa:",
    options: [
      { text: "Comunicar claramente lo que necesito y escuchar", type: "A" },
      { text: "Ser realista y flexible con lo que espero", type: "B" },
      { text: "Aceptar lo que hay aunque no sea lo ideal", type: "C" },
      { text: "Algo difícil que genera frustración", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💎 Expectativas Saludables",
    description: "Tienes expectativas claras, realistas y bien comunicadas. Sabes lo que quieres y lo expresas, al mismo tiempo que aceptas a tu pareja como es. Este es el ideal para una relación sana.",
    traits: ["Comunicativo/a", "Realista", "Satisfecho/a", "Maduro/a"],
    advice: "¡Excelente! Sigue cultivando esa comunicación clara de necesidades y expectativas.",
  },
  B: {
    title: "⚖️ Expectativas Adaptables",
    description: "Has aprendido a balancear lo que esperas con la realidad. Tienes expectativas pero también flexibilidad para ajustarlas. Esto te permite mantener la armonía sin renunciar a lo importante.",
    traits: ["Flexible", "Adaptable", "Paciente", "Comprensivo/a"],
    advice: "Vas muy bien. Sigue trabajando en comunicar incluso las expectativas pequeñas.",
  },
  C: {
    title: "😔 Expectativas Frustradas",
    description: "Hay una brecha significativa entre lo que esperabas y lo que tienes. Esta discrepancia genera frustración que no siempre comunicas. Es importante abordar esto antes de que crezca.",
    traits: ["Frustrado/a", "Decepcionado/a", "Callado/a", "Insatisfecho/a"],
    advice: "Es momento de tener una conversación honesta con tu pareja sobre tus expectativas.",
  },
  D: {
    title: "💔 Expectativas Desconectadas",
    description: "Tus expectativas y la realidad están muy alejadas. Esto puede estar causando un daño profundo a la relación y a tu bienestar emocional. Es urgente trabajar en esto.",
    traits: ["Desilusionado/a", "Resentido/a", "Distante", "En crisis"],
    advice: "Consideren buscar ayuda profesional para trabajar en las expectativas y la comunicación.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
