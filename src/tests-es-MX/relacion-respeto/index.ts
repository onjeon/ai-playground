// Nivel de Respeto - ¿Qué tan respetuoso/a eres en pareja?
// Test de Respeto para México

export const questions = [
  {
    id: 1,
    question: "Cuando tu pareja tiene una opinión diferente a la tuya...",
    options: [
      { text: "La escucho con atención aunque no esté de acuerdo", type: "A" },
      { text: "Intento entender su punto de vista", type: "B" },
      { text: "Me cuesta aceptar que piense diferente", type: "C" },
      { text: "Siento que tiene que pensar como yo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja quiere hacer algo que a ti no te gusta...",
    options: [
      { text: "Que lo haga, respeto sus gustos", type: "A" },
      { text: "Lo acompaño aunque no sea mi favorito", type: "B" },
      { text: "Le digo que no me gusta y mejor no vaya", type: "C" },
      { text: "Me molesta que quiera hacer cosas sin mí", type: "D" },
    ],
  },
  {
    id: 3,
    question: "En público, ¿cómo tratas a tu pareja?",
    options: [
      { text: "Con el mismo respeto que en privado", type: "A" },
      { text: "Bien, aunque a veces bromeo de más", type: "B" },
      { text: "A veces lo/la corrijo frente a otros", type: "C" },
      { text: "Puede que haga comentarios que lo/la incomoden", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu pareja te pide que no hagas algo que te molesta...",
    options: [
      { text: "Lo respeto y hago el esfuerzo de cambiarlo", type: "A" },
      { text: "Lo intento pero no siempre lo logro", type: "B" },
      { text: "Me cuesta cambiar mis hábitos por él/ella", type: "C" },
      { text: "Que me acepte como soy", type: "D" },
    ],
  },
  {
    id: 5,
    question: "El espacio personal de tu pareja...",
    options: [
      { text: "Lo respeto completamente, todos lo necesitamos", type: "A" },
      { text: "Lo entiendo aunque a veces me cuesta", type: "B" },
      { text: "No me gusta que necesite espacio sin mí", type: "C" },
      { text: "Si me quiere, no debería necesitarlo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Cuando discuten y tu pareja está muy molesto/a...",
    options: [
      { text: "Le doy espacio y hablamos cuando se calme", type: "A" },
      { text: "Trato de calmarlo/a aunque no siempre funciona", type: "B" },
      { text: "Insisto en hablar en ese momento", type: "C" },
      { text: "Me molesto más y sigo la discusión", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Las amistades de tu pareja del sexo opuesto...",
    options: [
      { text: "Las respeto, la confianza es importante", type: "A" },
      { text: "Me dan algo de celos pero las acepto", type: "B" },
      { text: "Preferiría que no las tuviera", type: "C" },
      { text: "No me parece correcto que las tenga", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tu pareja tiene sueños y metas muy diferentes a los tuyos...",
    options: [
      { text: "Los apoyo, aunque no los comparta", type: "A" },
      { text: "Trato de integrarlos con los míos", type: "B" },
      { text: "Me gustaría que tuviera metas más similares", type: "C" },
      { text: "Deberíamos tener las mismas metas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Cuando tu pareja te dice 'no' a algo...",
    options: [
      { text: "Lo respeto sin insistir", type: "A" },
      { text: "A veces insisto un poco pero lo acepto", type: "B" },
      { text: "Me molesta y trato de convencerlo/a", type: "C" },
      { text: "Debería hacer lo que le pido", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Los límites que pone tu pareja...",
    options: [
      { text: "Los respeto porque me ama y confío", type: "A" },
      { text: "A veces los cuestiono pero los acepto", type: "B" },
      { text: "Me cuesta aceptarlos", type: "C" },
      { text: "No deberían existir si nos amamos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Hablas de tu pareja con tus amigos o familia...",
    options: [
      { text: "Solo cosas buenas o neutrales", type: "A" },
      { text: "A veces me desahogo pero con respeto", type: "B" },
      { text: "Cuento los problemas para que opinen", type: "C" },
      { text: "Hablo mal de él/ella cuando estoy enojado/a", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tu pareja toma una decisión importante sin consultarte...",
    options: [
      { text: "Lo hablo con calma y expreso cómo me sentí", type: "A" },
      { text: "Me molesta pero trato de entender", type: "B" },
      { text: "Le reclamo por no tomarme en cuenta", type: "C" },
      { text: "Todas las decisiones deberían ser juntos", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Muy Respetuoso/a",
    emoji: "🙏",
    description: "Tienes un nivel de respeto muy alto en tus relaciones. Valoras la individualidad de tu pareja y respetas sus límites, opiniones y espacios. El respeto es la base de tu amor.",
    traits: ["Respetuoso/a", "Maduro/a", "Considerado/a", "Empático/a"],
    strengths: ["Tu pareja se siente valorado/a", "Relación sana", "Comunicación respetuosa"],
    weaknesses: ["Podrías ser demasiado pasivo/a", "A veces ceder demasiado"],
    tips: ["Tu nivel de respeto es admirable", "Asegúrate de que sea recíproco", "El respeto propio también importa"],
  },
  B: {
    type: "B",
    title: "Respeto con Esfuerzo",
    emoji: "💪",
    description: "Eres respetuoso/a pero a veces te cuesta. Reconoces la importancia del respeto y trabajas en ello aunque no siempre te sale natural. El esfuerzo cuenta.",
    traits: ["Esforzado/a", "Consciente", "En proceso", "Bien intencionado/a"],
    strengths: ["Reconoces áreas de mejora", "Haces el esfuerzo", "Comunicación en desarrollo"],
    weaknesses: ["A veces fallas", "Luchas con celos o control"],
    tips: ["Sigue trabajando en ello", "La práctica hace al maestro", "Reconoce tus triggers"],
  },
  C: {
    type: "C",
    title: "Falta de Respeto",
    emoji: "⚠️",
    description: "Te cuesta respetar ciertos aspectos de tu pareja. Puede ser su espacio, opiniones o límites. Esto puede generar conflictos y una relación desbalanceada.",
    traits: ["Controlador/a", "Celoso/a", "Inseguro/a", "Exigente"],
    strengths: ["Te importa la relación", "Eres apasionado/a", "Hay oportunidad de cambiar"],
    weaknesses: ["Generas tensión", "Tu pareja puede sentirse asfixiada", "Falta de límites"],
    tips: ["El respeto es fundamental", "Trabaja en tu seguridad", "Considera terapia de pareja"],
  },
  D: {
    type: "D",
    title: "Irrespetuoso/a",
    emoji: "🚨",
    description: "Tu nivel de respeto es bajo. Tiendes a controlar, invalidar o ignorar los límites de tu pareja. Esto puede ser tóxico para la relación y para ambos.",
    traits: ["Muy controlador/a", "Posesivo/a", "Irrespetuoso/a", "Tóxico/a"],
    strengths: ["Intensidad en el amor", "Posibilidad de cambio si reconoces"],
    weaknesses: ["Relación tóxica", "Tu pareja sufre", "Posible abuso emocional"],
    tips: ["Necesitas ayuda profesional", "El control no es amor", "Tu comportamiento daña"],
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
