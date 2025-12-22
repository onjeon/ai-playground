// Test de Consentimiento en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Tu pareja siempre respeta cuando dices 'no' a algo íntimo?",
    options: [
      { text: "Siempre, sin insistir ni presionar", type: "A" },
      { text: "Generalmente sí, a veces insiste un poco", type: "B" },
      { text: "A veces me hace sentir culpable por decir no", type: "C" },
      { text: "No siempre respeta mi decisión", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Comunican abiertamente sus deseos y límites íntimos?",
    options: [
      { text: "Sí, hablamos de todo con confianza", type: "A" },
      { text: "En su mayoría, aunque hay temas difíciles", type: "B" },
      { text: "Poco, me cuesta hablar de eso", type: "C" },
      { text: "No, evitamos esos temas", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Sientes que puedes cambiar de opinión en cualquier momento sin consecuencias?",
    options: [
      { text: "Sí, mi pareja respeta si cambio de parecer", type: "A" },
      { text: "Generalmente sí, aunque a veces se molesta", type: "B" },
      { text: "Me siento presionado/a a continuar", type: "C" },
      { text: "No puedo cambiar de opinión una vez que inicio", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo maneja tu pareja el rechazo?",
    options: [
      { text: "Con madurez, entiende que no siempre estamos de humor", type: "A" },
      { text: "A veces se decepciona pero lo acepta", type: "B" },
      { text: "Se enoja o se pone de mal humor", type: "C" },
      { text: "Me hace sentir culpable o me presiona", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Hacen cosas íntimas que no te gustan solo por complacer a tu pareja?",
    options: [
      { text: "Nunca, solo hacemos lo que ambos disfrutamos", type: "A" },
      { text: "Rara vez, si es importante para él/ella", type: "B" },
      { text: "A veces, aunque no me siento cómodo/a", type: "C" },
      { text: "Frecuentemente, para mantenerlo/a contento/a", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Tu pareja pregunta cómo te sientes durante momentos íntimos?",
    options: [
      { text: "Sí, siempre verifica que esté cómodo/a", type: "A" },
      { text: "A veces, cuando nota algo diferente", type: "B" },
      { text: "Rara vez pregunta", type: "C" },
      { text: "Nunca, asume que todo está bien", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Respetas completamente cuando tu pareja no quiere algo?",
    options: [
      { text: "Siempre, su consentimiento es prioridad", type: "A" },
      { text: "Sí, aunque a veces me cuesta", type: "B" },
      { text: "Intento convencerle a veces", type: "C" },
      { text: "Insisto porque sé que al final cede", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Has sentido que no puedes decir 'no' en tu relación?",
    options: [
      { text: "Nunca, siempre puedo expresarme libremente", type: "A" },
      { text: "Rara vez, pero ha pasado", type: "B" },
      { text: "A veces, me cuesta negarme", type: "C" },
      { text: "Frecuentemente, no sé cómo decir no", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Cómo manejan probar cosas nuevas en la intimidad?",
    options: [
      { text: "Lo discutimos antes y ambos decidimos juntos", type: "A" },
      { text: "Generalmente uno propone y el otro acepta o rechaza", type: "B" },
      { text: "Uno decide y el otro se adapta", type: "C" },
      { text: "Se imponen cosas sin preguntar", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Te sientes seguro/a expresando incomodidad durante la intimidad?",
    options: [
      { text: "Completamente, puedo parar en cualquier momento", type: "A" },
      { text: "Mayormente sí, con algo de dificultad", type: "B" },
      { text: "Me cuesta mucho interrumpir", type: "C" },
      { text: "No, prefiero que termine rápido", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿El consentimiento en tu relación es verbal y claro o asumido?",
    options: [
      { text: "Siempre claro y verificado", type: "A" },
      { text: "Mayormente claro, con algunas suposiciones", type: "B" },
      { text: "Generalmente asumido", type: "C" },
      { text: "Nunca se habla de eso", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, el consentimiento en pareja significa:",
    options: [
      { text: "Un proceso continuo de comunicación y respeto", type: "A" },
      { text: "Respetar los 'no' y verificar los 'sí'", type: "B" },
      { text: "Algo implícito cuando estás en pareja", type: "C" },
      { text: "No aplica tanto cuando hay confianza", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💚 Consentimiento Pleno",
    description: "Tu relación tiene una cultura de consentimiento ejemplar. Hay comunicación abierta, respeto absoluto por los límites y libertad de expresión. Esto es fundamental para una relación sana y feliz.",
    traits: ["Respetuosos", "Comunicativos", "Seguros", "Saludables"],
    advice: "¡Excelente! Sigan cultivando esta comunicación abierta y respetuosa.",
  },
  B: {
    title: "💛 Consentimiento Saludable",
    description: "Hay respeto por el consentimiento en tu relación aunque hay áreas donde podría mejorar la comunicación. Vas por buen camino pero pueden trabajar en ser más explícitos.",
    traits: ["Respetuosos", "En desarrollo", "Conscientes", "Comunicándose"],
    advice: "Van bien. Trabajen en hacer el consentimiento más explícito y continuo.",
  },
  C: {
    title: "🧡 Consentimiento Comprometido",
    description: "Hay señales de que el consentimiento no es tan respetado como debería. Puede haber presión, culpa o dificultad para expresar incomodidad. Esto necesita atención.",
    traits: ["Comprometido", "Presionado/a", "Incómodo/a", "Necesita trabajo"],
    advice: "Es importante que hables con tu pareja sobre esto. El consentimiento es fundamental.",
  },
  D: {
    title: "❤️ Consentimiento en Riesgo",
    description: "Hay problemas serios de consentimiento en tu relación. La presión, la falta de comunicación y la incapacidad de decir 'no' son señales de alarma importantes.",
    traits: ["En riesgo", "Presionado/a", "Sin voz", "Vulnerado/a"],
    advice: "Esta situación es seria. Considera buscar ayuda profesional o hablar con alguien de confianza.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
