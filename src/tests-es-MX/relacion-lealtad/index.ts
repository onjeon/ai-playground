// Test de Lealtad en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Defiendes a tu pareja cuando otros hablan mal de él/ella?",
    options: [
      { text: "Siempre, nadie habla mal de mi pareja", type: "A" },
      { text: "Sí, aunque a veces entiendo las críticas", type: "B" },
      { text: "Depende de si tiene razón o no", type: "C" },
      { text: "No me meto, que cada quien se defienda", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Compartes problemas de tu relación con amigos o familia?",
    options: [
      { text: "Nunca, lo nuestro es privado", type: "A" },
      { text: "Solo lo importante con alguien de confianza", type: "B" },
      { text: "A veces, necesito desahogarme", type: "C" },
      { text: "Frecuentemente, todos saben de nuestros problemas", type: "D" },
    ],
  },
  {
    id: 3,
    text: "Si tu pareja cometiera un error grave, ¿qué harías?",
    options: [
      { text: "Lo apoyaría incondicionalmente", type: "A" },
      { text: "Lo apoyaría pero le diría la verdad", type: "B" },
      { text: "Dependería del error", type: "C" },
      { text: "No tengo obligación de cubrir sus errores", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Pones a tu pareja antes que a amigos cuando hay conflicto?",
    options: [
      { text: "Siempre, mi pareja es prioridad", type: "A" },
      { text: "Generalmente sí, salvo casos especiales", type: "B" },
      { text: "Depende de quién tenga la razón", type: "C" },
      { text: "Mis amigos también son importantes", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Guardas secretos de tu pareja de otras personas?",
    options: [
      { text: "Absolutamente, sus secretos son sagrados", type: "A" },
      { text: "Los importantes sí, los menores a veces se me escapan", type: "B" },
      { text: "No me fijo mucho en eso", type: "C" },
      { text: "A veces cuento cosas sin pensar", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Qué harías si tu familia criticara a tu pareja injustamente?",
    options: [
      { text: "Defendería a mi pareja sin dudarlo", type: "A" },
      { text: "Mediaría pero dejaría claro mi posición", type: "B" },
      { text: "Me quedaría neutral para no crear conflicto", type: "C" },
      { text: "Escucharía a mi familia, quizá tienen razón", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Mantienes contacto inapropiado con ex parejas?",
    options: [
      { text: "Nunca, eso sería desleal", type: "A" },
      { text: "Solo amistad respetuosa y transparente", type: "B" },
      { text: "A veces hablo con algún ex", type: "C" },
      { text: "Sí, pero no es asunto de nadie", type: "D" },
    ],
  },
  {
    id: 8,
    text: "En momentos difíciles económicamente, ¿qué prioridad tiene tu pareja?",
    options: [
      { text: "La máxima, compartimos todo", type: "A" },
      { text: "Alta, nos apoyamos mutuamente", type: "B" },
      { text: "Cada quien resuelve lo suyo", type: "C" },
      { text: "Primero yo, luego lo demás", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Coqueteas con otras personas estando en relación?",
    options: [
      { text: "Jamás, sería una falta de respeto", type: "A" },
      { text: "No intencionalmente, soy amable con todos", type: "B" },
      { text: "A veces, pero es inofensivo", type: "C" },
      { text: "Sí, no veo el problema", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cumples las promesas que le haces a tu pareja?",
    options: [
      { text: "Siempre, mi palabra es sagrada", type: "A" },
      { text: "Casi siempre, hago mi mejor esfuerzo", type: "B" },
      { text: "A veces no puedo cumplirlas", type: "C" },
      { text: "No soy muy bueno/a cumpliendo promesas", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Estarías con tu pareja en enfermedad grave o crisis?",
    options: [
      { text: "Sin duda, en las buenas y en las malas", type: "A" },
      { text: "Sí, aunque sería muy difícil", type: "B" },
      { text: "Dependería de la situación", type: "C" },
      { text: "No estoy seguro/a de poder manejarlo", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, la lealtad en pareja significa:",
    options: [
      { text: "Estar siempre del lado de tu pareja, sin importar qué", type: "A" },
      { text: "Apoyar, proteger y ser fiel en todo sentido", type: "B" },
      { text: "No traicionar la confianza", type: "C" },
      { text: "Algo que se gana, no se da automáticamente", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🛡️ Lealtad Absoluta",
    description: "Tu lealtad hacia tu pareja es inquebrantable. Defiendes, proteges y priorizas la relación sobre todo. Tu pareja puede confiar completamente en ti.",
    traits: ["Leal", "Protector/a", "Comprometido/a", "Confiable"],
    advice: "Tu lealtad es admirable. Solo cuida que no te ciegue ante situaciones donde tu pareja esté equivocada.",
  },
  B: {
    title: "⚖️ Lealtad Equilibrada",
    description: "Eres leal pero también objetivo/a. Apoyas a tu pareja pero puedes ver cuando se equivoca. Este balance es muy saludable para una relación madura.",
    traits: ["Leal", "Objetivo/a", "Maduro/a", "Justo/a"],
    advice: "Tienes el balance perfecto entre lealtad y objetividad. Sigue así.",
  },
  C: {
    title: "🔄 Lealtad Condicional",
    description: "Tu lealtad depende de las circunstancias. Esto puede hacer que tu pareja se sienta insegura sobre tu apoyo en momentos difíciles.",
    traits: ["Condicional", "Variable", "Cauteloso/a", "Selectivo/a"],
    advice: "La lealtad incondicional no significa estar de acuerdo siempre, pero sí apoyar siempre. Reflexiona sobre esto.",
  },
  D: {
    title: "🚧 Lealtad Débil",
    description: "Tu compromiso de lealtad no es muy fuerte. Esto puede dañar la confianza en la relación y hacer que tu pareja se sienta vulnerable.",
    traits: ["Distante", "Individual", "Desapegado/a", "Independiente"],
    advice: "Una relación sin lealtad es frágil. Si quieres que funcione, necesitas trabajar en este aspecto.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
