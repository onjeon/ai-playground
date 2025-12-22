// Redes Sociales y Pareja - ¿Cómo manejas las redes con tu pareja?
// Test de Redes Sociales en Pareja para México

export const questions = [
  {
    id: 1,
    question: "¿Subes fotos con tu pareja a tus redes sociales?",
    options: [
      { text: "Siempre, me encanta presumirlo/a", type: "A" },
      { text: "A veces, en ocasiones especiales", type: "B" },
      { text: "Casi nunca, mi vida es privada", type: "C" },
      { text: "Nunca, no me gusta exponer mi relación", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja no te tiene en su foto de perfil ni te menciona...",
    options: [
      { text: "Me molestaría mucho, ¿qué oculta?", type: "A" },
      { text: "Me da un poco de cosa pero lo entiendo", type: "B" },
      { text: "Normal, cada quien maneja sus redes", type: "C" },
      { text: "Mejor, yo tampoco quiero exponerme", type: "D" },
    ],
  },
  {
    id: 3,
    question: "¿Revisas las redes sociales de tu pareja?",
    options: [
      { text: "Sí, seguido checo qué publica y quién le da like", type: "A" },
      { text: "De vez en cuando, por curiosidad", type: "B" },
      { text: "No mucho, confío en él/ella", type: "C" },
      { text: "Nunca, no me importa su actividad en redes", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu pareja le da like a fotos de alguien atractivo/a...",
    options: [
      { text: "Me molesta y se lo reclamo", type: "A" },
      { text: "Me incomoda pero no digo nada", type: "B" },
      { text: "Normal, yo también doy likes sin significado", type: "C" },
      { text: "Ni me entero, no lo checo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "¿Conoces las contraseñas de redes de tu pareja?",
    options: [
      { text: "Sí, y las mías también las tiene, sin secretos", type: "A" },
      { text: "Sí pero nunca entro a revisar", type: "B" },
      { text: "No, cada quien su privacidad", type: "C" },
      { text: "No me interesan para nada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "El 14 de febrero, ¿esperarías un post romántico de tu pareja?",
    options: [
      { text: "Sí, y me ofendería si no lo hace", type: "A" },
      { text: "Me gustaría pero no es obligatorio", type: "B" },
      { text: "No es necesario, lo celebramos en privado", type: "C" },
      { text: "Me daría pena que me exhibiera", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tu pareja mantiene amistad en redes con su ex...",
    options: [
      { text: "No está bien, debería bloquearlo/a", type: "A" },
      { text: "Me incomoda pero confío", type: "B" },
      { text: "Normal, son el pasado", type: "C" },
      { text: "Me da igual, no controlo eso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Qué tan importante es que tu pareja interactúe con tus publicaciones?",
    options: [
      { text: "Muy importante, quiero que me apoye", type: "A" },
      { text: "Me gusta pero no es obligatorio", type: "B" },
      { text: "No me importa mucho", type: "C" },
      { text: "Prefiero que no, es raro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Si discuten, ¿lo expresarías en redes sociales?",
    options: [
      { text: "Podría poner indirectas", type: "A" },
      { text: "Nunca, eso es privado", type: "B" },
      { text: "Quizá borraría fotos juntos", type: "C" },
      { text: "Mis redes no reflejan mi vida real", type: "D" },
    ],
  },
  {
    id: 10,
    question: "¿Qué opinas de las parejas que suben todo en redes?",
    options: [
      { text: "Me parecen lindos, ojalá yo pudiera así", type: "A" },
      { text: "Está bien pero con límites", type: "B" },
      { text: "Es demasiado, no me gusta", type: "C" },
      { text: "Son inseguros, necesitan validación", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tu pareja recibe mensajes de pretendientes por DM...",
    options: [
      { text: "Tiene que bloquearlo/a y mostrármelo", type: "A" },
      { text: "Confío en que los ignore", type: "B" },
      { text: "No me importa si no pasa nada", type: "C" },
      { text: "Ni me entero, no pregunto esas cosas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Para oficializar la relación, ¿hay que ponerlo en redes?",
    options: [
      { text: "Sí, si no está en redes, no es oficial", type: "A" },
      { text: "Ayuda pero no es obligatorio", type: "B" },
      { text: "Para nada, la relación es entre dos", type: "C" },
      { text: "Eso es muy superficial", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Relación Pública",
    emoji: "📱",
    description: "Para ti, si no está en redes, no existe. Te gusta presumir tu relación y que el mundo sepa que están juntos. Las redes son parte importante de cómo vives tu amor.",
    traits: ["Exhibicionista", "Necesita validación", "Celoso/a digital", "Público/a"],
    strengths: ["Orgulloso/a de tu relación", "Expresas amor públicamente", "Quieres que todos sepan"],
    weaknesses: ["Podrías ser controlador/a", "Dependes de validación externa", "Celos por redes"],
    tips: ["La relación real importa más que la digital", "No todo tiene que estar en redes", "Los celos digitales son tóxicos"],
  },
  B: {
    type: "B",
    title: "Equilibrio Digital",
    emoji: "⚖️",
    description: "Tienes un balance sano con las redes en tu relación. Compartes en ocasiones especiales pero no dependes de ello. Ni muy público ni muy privado.",
    traits: ["Equilibrado/a", "Sensato/a", "Moderado/a", "Sano/a"],
    strengths: ["No dependes de validación", "Compartes cuando quieres", "Respetas privacidad"],
    weaknesses: ["A veces podrías querer más", "Podrías parecer poco romántico/a"],
    tips: ["Tu equilibrio es saludable", "Sigue así", "Comunica si algo te molesta"],
  },
  C: {
    type: "C",
    title: "Relación Privada",
    emoji: "🔒",
    description: "Tu relación es privada y así te gusta. No necesitas que el mundo sepa de tu amor para que sea real. Valoras la intimidad sobre las apariencias.",
    traits: ["Privado/a", "Reservado/a", "Seguro/a", "Discreto/a"],
    strengths: ["No te afectan las redes", "Relación auténtica", "Sin drama digital"],
    weaknesses: ["Tu pareja podría querer más público", "Podrías parecer que ocultas algo"],
    tips: ["Tu privacidad es válida", "Comunica por qué prefieres así", "A veces un detalle público no hace daño"],
  },
  D: {
    type: "D",
    title: "Desconectado/a",
    emoji: "📵",
    description: "Las redes no tienen nada que ver con tu relación. Te da igual lo que pase en el mundo digital. Tu amor existe en el mundo real, no en likes y posts.",
    traits: ["Desconectado/a", "Indiferente", "Independiente", "Real"],
    strengths: ["No te afecta el drama digital", "Vives el momento real", "Sin celos virtuales"],
    weaknesses: ["Podrías parecer frío/a", "Tu pareja podría querer más", "Desconexión total"],
    tips: ["Está bien tu postura", "Pero considera los sentimientos de tu pareja", "A veces un gesto digital importa"],
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
