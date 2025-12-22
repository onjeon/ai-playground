// Lenguaje del Amor - ¿Cuál es tu lenguaje del amor?
// Test de Lenguaje del Amor para México

export const questions = [
  {
    id: 1,
    question: "¿Cómo prefieres que tu pareja te demuestre su amor?",
    options: [
      { text: "Con palabras bonitas y cumplidos sinceros", type: "A" },
      { text: "Pasando tiempo de calidad juntos sin distracciones", type: "B" },
      { text: "Con regalos y detalles especiales", type: "C" },
      { text: "Con abrazos, besos y caricias", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Qué te hace sentir más querido/a en tu relación?",
    options: [
      { text: "Que me digan 'te amo' y me echen porras", type: "A" },
      { text: "Que dejen el celular y me pongan atención", type: "B" },
      { text: "Que me sorprendan con algo que me gusta", type: "C" },
      { text: "Que me abracen fuerte cuando llego a casa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "En un día difícil, ¿qué te reconforta más?",
    options: [
      { text: "Que me digan que todo va a estar bien", type: "A" },
      { text: "Que se sienten conmigo a platicar", type: "B" },
      { text: "Que me traigan mi comida favorita", type: "C" },
      { text: "Un abrazo largo sin decir nada", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Qué detalle del 14 de febrero te haría más feliz?",
    options: [
      { text: "Una carta de amor escrita a mano", type: "A" },
      { text: "Una cena romántica solo nosotros dos", type: "B" },
      { text: "Flores, chocolates y un regalo especial", type: "C" },
      { text: "Un día de spa en pareja con masajes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Qué te duele más en una relación?",
    options: [
      { text: "Que nunca me digan cosas bonitas", type: "A" },
      { text: "Que siempre estén ocupados para mí", type: "B" },
      { text: "Que se olviden de fechas importantes", type: "C" },
      { text: "Que nunca me toquen ni me abracen", type: "D" },
    ],
  },
  {
    id: 6,
    question: "¿Cómo demuestras tú el amor?",
    options: [
      { text: "Con palabras de aliento y cumplidos", type: "A" },
      { text: "Dedicando tiempo exclusivo a mi pareja", type: "B" },
      { text: "Comprando detalles y haciendo regalos", type: "C" },
      { text: "Con caricias, besos y contacto físico", type: "D" },
    ],
  },
  {
    id: 7,
    question: "En una reunión familiar mexicana, ¿qué valoras más de tu pareja?",
    options: [
      { text: "Que me presuma con su familia", type: "A" },
      { text: "Que esté a mi lado toda la fiesta", type: "B" },
      { text: "Que me sirva mi plato y me cuide", type: "C" },
      { text: "Que me tome de la mano frente a todos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Qué gesto diario te hace sentir amado/a?",
    options: [
      { text: "Buenos días mi amor, te extraño", type: "A" },
      { text: "Ver una serie juntos sin celular", type: "B" },
      { text: "Que me traigan un cafecito sin pedirlo", type: "C" },
      { text: "Un beso de despedida cada mañana", type: "D" },
    ],
  },
  {
    id: 9,
    question: "¿Cómo prefieres hacer las paces después de un pleito?",
    options: [
      { text: "Que me pidan perdón con palabras sinceras", type: "A" },
      { text: "Sentarnos a hablar las cosas con calma", type: "B" },
      { text: "Un detalle de reconciliación", type: "C" },
      { text: "Un abrazo fuerte y un beso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "En tu aniversario, ¿qué te gustaría más?",
    options: [
      { text: "Una declaración de amor pública", type: "A" },
      { text: "Un viaje romántico solo nosotros", type: "B" },
      { text: "Una joya o regalo significativo", type: "C" },
      { text: "Un día de pareja con masajes y mimos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Qué te enamora más de alguien?",
    options: [
      { text: "Que sepa expresar sus sentimientos", type: "A" },
      { text: "Que siempre tenga tiempo para mí", type: "B" },
      { text: "Que sea detallista y atento", type: "C" },
      { text: "Que sea cariñoso y le guste el contacto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Qué frase describe mejor tu forma de amar?",
    options: [
      { text: "El amor se dice, hay que expresarlo", type: "A" },
      { text: "El amor es estar presente cuando importa", type: "B" },
      { text: "El amor se demuestra con acciones y detalles", type: "C" },
      { text: "El amor se siente en cada caricia", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Palabras de Afirmación",
    emoji: "💬",
    description: "Tu lenguaje del amor son las palabras. Necesitas escuchar 'te amo', cumplidos y palabras de aliento. Un mensaje bonito puede alegrarte todo el día. En la cultura mexicana, valoras mucho los piropos sinceros y las declaraciones de amor.",
    traits: ["Expresivo", "Comunicativo", "Sensible a las palabras", "Romántico verbal"],
    strengths: ["Sabes expresar tus sentimientos", "Motivas a tu pareja", "Comunicas bien el amor"],
    weaknesses: ["Te duelen mucho las críticas", "Necesitas validación constante"],
    tips: ["Dile a tu pareja que necesitas escuchar palabras bonitas", "No interpretes el silencio como falta de amor", "Aprecia otros gestos de cariño"],
  },
  B: {
    type: "B",
    title: "Tiempo de Calidad",
    emoji: "⏰",
    description: "Tu lenguaje del amor es el tiempo. Necesitas atención completa, sin celular, sin distracciones. Para ti, el amor se demuestra estando presente. En México, valoras los momentos en familia y las sobremesas largas.",
    traits: ["Presente", "Atento", "Valora la compañía", "Rechaza distracciones"],
    strengths: ["Sabes escuchar", "Creas momentos memorables", "Eres muy presente"],
    weaknesses: ["Te frustras cuando hay distracciones", "Puedes sentirte abandonado fácilmente"],
    tips: ["Planea citas regulares sin tecnología", "Comunica tu necesidad de atención", "Dale espacio también a tu pareja"],
  },
  C: {
    type: "C",
    title: "Regalos y Detalles",
    emoji: "🎁",
    description: "Tu lenguaje del amor son los regalos. No es materialismo, es el significado detrás del detalle. Valoras que piensen en ti y te sorprendan. En la cultura mexicana, aprecias los detalles como flores, serenatas o sorpresas.",
    traits: ["Detallista", "Valora los símbolos", "Le gusta sorprender", "Guarda recuerdos"],
    strengths: ["Eres muy generoso", "Recuerdas fechas importantes", "Sabes dar regalos significativos"],
    weaknesses: ["Te duele que olviden fechas", "Puedes parecer materialista"],
    tips: ["Explica que valoras el gesto, no el precio", "Aprecia otros tipos de amor", "No compares regalos"],
  },
  D: {
    type: "D",
    title: "Contacto Físico",
    emoji: "🤗",
    description: "Tu lenguaje del amor es el contacto físico. Necesitas abrazos, besos, caricias y cercanía. Para ti, el amor se siente en la piel. En México, eres de los que valoran el saludo con beso y los abrazos largos de tu familia.",
    traits: ["Cariñoso", "Expresivo físicamente", "Necesita cercanía", "Afectuoso"],
    strengths: ["Demuestras amor fácilmente", "Haces sentir queridos a otros", "Eres reconfortante"],
    weaknesses: ["Te sientes rechazado sin contacto", "Puedes parecer muy intenso"],
    tips: ["Respeta el espacio de tu pareja", "Comunica tu necesidad de contacto", "No todos expresan amor igual"],
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
