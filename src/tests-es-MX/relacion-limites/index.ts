// Test de Límites en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Pones límites claros sobre lo que toleras y lo que no en la relación?",
    options: [
      { text: "Sí, siempre comunico mis límites claramente", type: "A" },
      { text: "La mayoría de las veces, aunque me cuesta", type: "B" },
      { text: "A veces, depende de la situación", type: "C" },
      { text: "No, prefiero evitar conflictos", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Tu pareja respeta tus límites cuando los expresas?",
    options: [
      { text: "Siempre, los respeta sin cuestionarlos", type: "A" },
      { text: "Generalmente sí, con algunas excepciones", type: "B" },
      { text: "A veces los ignora o los minimiza", type: "C" },
      { text: "Frecuentemente los cruza", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo reaccionas cuando tu pareja cruza un límite tuyo?",
    options: [
      { text: "Lo hablo de inmediato con firmeza pero respeto", type: "A" },
      { text: "Me molesto pero eventualmente lo discuto", type: "B" },
      { text: "Me callo aunque me afecte", type: "C" },
      { text: "Exploto o lo dejo pasar sin decir nada", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Respetas los límites que tu pareja establece?",
    options: [
      { text: "Siempre, son importantes para él/ella", type: "A" },
      { text: "Casi siempre, a veces me cuesta entenderlos", type: "B" },
      { text: "A veces los cuestiono o los ignoro", type: "C" },
      { text: "No entiendo por qué debería haber límites", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Tienes límites sobre tu espacio y tiempo personal?",
    options: [
      { text: "Sí, mi pareja sabe que necesito mi espacio", type: "A" },
      { text: "Algo, aunque a veces cedo más de lo que quisiera", type: "B" },
      { text: "No realmente, todo mi tiempo es de la pareja", type: "C" },
      { text: "No tengo tiempo personal, la relación absorbe todo", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo manejan los límites con las familias de cada uno?",
    options: [
      { text: "Hay límites claros y ambas familias los respetan", type: "A" },
      { text: "Intentamos ponerlos pero no siempre funciona", type: "B" },
      { text: "Las familias se meten mucho, no hay límites", type: "C" },
      { text: "Es fuente de conflicto constante", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Hay cosas que consideras inaceptables en la relación?",
    options: [
      { text: "Sí, y mi pareja las conoce claramente", type: "A" },
      { text: "Sí, aunque no las hemos discutido todas", type: "B" },
      { text: "No he pensado mucho en eso", type: "C" },
      { text: "Todo es negociable si hay amor", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Cómo manejas cuando tu pareja revisa tu celular o redes?",
    options: [
      { text: "Hemos acordado límites claros sobre privacidad", type: "A" },
      { text: "No me gusta pero lo tolero por confianza", type: "B" },
      { text: "Me incomoda pero no digo nada", type: "C" },
      { text: "Es normal, no tengo nada que esconder", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Has terminado una relación por falta de respeto a tus límites?",
    options: [
      { text: "Sí, mis límites son innegociables", type: "A" },
      { text: "Sí, aunque me costó mucho", type: "B" },
      { text: "No, pero he pensado en hacerlo", type: "C" },
      { text: "No, prefiero adaptar mis límites", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo te sientes cuando dices que no a tu pareja?",
    options: [
      { text: "Bien, es mi derecho decir que no", type: "A" },
      { text: "Un poco culpable pero lo hago cuando es necesario", type: "B" },
      { text: "Me cuesta mucho, me siento mal", type: "C" },
      { text: "Casi nunca digo que no", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Han discutido qué comportamientos son inaceptables en la relación?",
    options: [
      { text: "Sí, tenemos acuerdos claros sobre esto", type: "A" },
      { text: "Algo, pero podríamos ser más específicos", type: "B" },
      { text: "No directamente, asumimos cosas", type: "C" },
      { text: "No, dejamos que las cosas fluyan", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, los límites en una relación son:",
    options: [
      { text: "Esenciales para el respeto mutuo", type: "A" },
      { text: "Importantes pero flexibles", type: "B" },
      { text: "Algo que puede generar conflicto", type: "C" },
      { text: "Innecesarios si hay verdadero amor", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🛡️ Límites Saludables",
    description: "Tienes una excelente capacidad de establecer y mantener límites en tu relación. Sabes lo que es aceptable e inaceptable para ti y lo comunicas claramente. Esto es fundamental para una relación sana.",
    traits: ["Asertivo/a", "Claro/a", "Respetado/a", "Saludable"],
    advice: "¡Excelente! Tu capacidad de poner límites protege tu bienestar y tu relación. Sigue así.",
  },
  B: {
    title: "⚖️ Límites en Desarrollo",
    description: "Tienes límites pero a veces te cuesta mantenerlos o comunicarlos. Estás en el proceso de aprender a ser más asertivo/a. Vas por buen camino pero hay espacio para crecer.",
    traits: ["En desarrollo", "Aprendiendo", "Flexible", "Consciente"],
    advice: "Sigue trabajando en expresar tus límites con claridad. Es una habilidad que se desarrolla.",
  },
  C: {
    title: "🔓 Límites Débiles",
    description: "Tus límites son difusos o inexistentes. Esto puede llevar a que te sientas irrespetado/a o agotado/a en la relación. Es importante que empieces a definir qué es aceptable para ti.",
    traits: ["Permisivo/a", "Adaptable", "Complaciente", "Vulnerable"],
    advice: "Es urgente que empieces a establecer límites. Tu bienestar depende de ello.",
  },
  D: {
    title: "❌ Sin Límites",
    description: "No tienes límites claros en tu relación, lo cual puede ser dañino para ti. Permitir que todo sea negociable te pone en riesgo de perder tu identidad y bienestar.",
    traits: ["Sin límites", "Dependiente", "Vulnerable", "En riesgo"],
    advice: "Es fundamental que trabajes en establecer límites. Considera buscar ayuda profesional.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
