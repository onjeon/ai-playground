// Test de Amor Propio en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Mantienes tu identidad individual dentro de la relación?",
    options: [
      { text: "Sí, sigo siendo yo mismo/a completamente", type: "A" },
      { text: "En su mayoría sí, con algunos ajustes", type: "B" },
      { text: "He cambiado bastante por la relación", type: "C" },
      { text: "Siento que me he perdido un poco", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo manejas cuando tu pareja critica algo de ti?",
    options: [
      { text: "Escucho, evalúo y decido si tiene razón", type: "A" },
      { text: "Me afecta pero trato de ser objetivo/a", type: "B" },
      { text: "Me duele mucho y me cuestiono", type: "C" },
      { text: "Cambio para complacerle aunque no esté de acuerdo", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Te cuidas físicamente y emocionalmente aunque estés en pareja?",
    options: [
      { text: "Sí, mi bienestar es prioridad", type: "A" },
      { text: "Lo intento aunque a veces me descuido", type: "B" },
      { text: "Me he descuidado bastante", type: "C" },
      { text: "Ya no me importa mucho", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Expresas tus necesidades en la relación?",
    options: [
      { text: "Sí, siempre comunico lo que necesito", type: "A" },
      { text: "La mayoría de las veces", type: "B" },
      { text: "Me cuesta, prefiero no causar problemas", type: "C" },
      { text: "No, pongo las necesidades de mi pareja primero", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Mantienes relaciones con amigos y familia independientes de tu pareja?",
    options: [
      { text: "Sí, tengo mi propia red de apoyo", type: "A" },
      { text: "Sí, aunque menos que antes", type: "B" },
      { text: "Poco, la relación absorbe mi tiempo", type: "C" },
      { text: "No, ya no veo a nadie sin mi pareja", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo te sientes con tu valor personal en la relación?",
    options: [
      { text: "Muy bien, sé lo que valgo", type: "A" },
      { text: "Bien, aunque a veces dudo", type: "B" },
      { text: "A veces me siento menos que mi pareja", type: "C" },
      { text: "Siento que no merezco algo mejor", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Toleras comportamientos irrespetuosos de tu pareja?",
    options: [
      { text: "Nunca, tengo límites claros", type: "A" },
      { text: "Rara vez, solo si hay circunstancias atenuantes", type: "B" },
      { text: "A veces lo dejo pasar para evitar conflicto", type: "C" },
      { text: "Frecuentemente, no quiero perderle", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Persigues tus propios sueños y metas?",
    options: [
      { text: "Sí, son importantes para mí", type: "A" },
      { text: "Algunos, los que son compatibles con la relación", type: "B" },
      { text: "Los he dejado de lado por ahora", type: "C" },
      { text: "Ya no tengo metas propias", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Cómo reaccionas si tu pareja no está de acuerdo con algo importante para ti?",
    options: [
      { text: "Defiendo mi posición con respeto", type: "A" },
      { text: "Intento llegar a un acuerdo", type: "B" },
      { text: "Generalmente cedo para mantener la paz", type: "C" },
      { text: "Siempre hago lo que mi pareja quiere", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Te sientes feliz contigo mismo/a independientemente de la relación?",
    options: [
      { text: "Sí, mi felicidad no depende solo de la pareja", type: "A" },
      { text: "Mayormente sí, la relación complementa", type: "B" },
      { text: "Mi felicidad depende mucho de cómo esté la relación", type: "C" },
      { text: "Solo soy feliz si mi pareja lo es", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Podrías estar bien si la relación terminara?",
    options: [
      { text: "Sería difícil pero estaría bien eventualmente", type: "A" },
      { text: "Me costaría mucho pero lo superaría", type: "B" },
      { text: "No sé si podría manejarlo", type: "C" },
      { text: "No, mi vida no tiene sentido sin él/ella", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, el amor propio en pareja significa:",
    options: [
      { text: "Amarte a ti mismo/a tanto como a tu pareja", type: "A" },
      { text: "Mantener tu identidad y valor personal", type: "B" },
      { text: "Algo difícil cuando amas profundamente", type: "C" },
      { text: "Egoísmo que puede dañar la relación", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💫 Amor Propio Sólido",
    description: "Tienes un excelente nivel de amor propio dentro de la relación. Sabes quién eres, conoces tu valor y no te pierdes en el otro. Esta base te permite amar sanamente.",
    traits: ["Seguro/a", "Equilibrado/a", "Independiente", "Saludable"],
    advice: "¡Excelente! Tu amor propio es la base de una relación sana. Sigue cultivándolo.",
  },
  B: {
    title: "🌸 Amor Propio Saludable",
    description: "Mantienes un buen nivel de amor propio aunque a veces te descuidas. Reconoces tu valor pero la relación a veces afecta cómo te ves. Vas por buen camino.",
    traits: ["Mayormente seguro/a", "Consciente", "Trabajando", "Creciendo"],
    advice: "Vas bien. Recuerda priorizarte de vez en cuando. No es egoísmo, es salud.",
  },
  C: {
    title: "💛 Amor Propio Debilitado",
    description: "Tu amor propio se ha visto afectado por la relación. Cedes demasiado, te cuestionas mucho y a veces pones las necesidades del otro muy por encima de las tuyas.",
    traits: ["Inseguro/a", "Complaciente", "Dependiente", "Descuidado/a"],
    advice: "Es importante que reconectes contigo mismo/a. Tu bienestar es fundamental para una relación sana.",
  },
  D: {
    title: "❤️‍🩹 Amor Propio en Crisis",
    description: "Has perdido mucho de ti en esta relación. Tu valor, identidad y bienestar dependen casi completamente de tu pareja. Esto no es saludable para ninguno de los dos.",
    traits: ["Perdido/a", "Dependiente", "Inseguro/a", "En crisis"],
    advice: "Busca ayuda. Es urgente que recuperes tu sentido de identidad y valor personal.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
