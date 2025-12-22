// Test de Deseo en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Cómo describirías el nivel de deseo en tu relación actualmente?",
    options: [
      { text: "Muy alto, seguimos muy atraídos", type: "A" },
      { text: "Bueno, aunque diferente al inicio", type: "B" },
      { text: "Ha bajado bastante", type: "C" },
      { text: "Casi inexistente", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Con qué frecuencia sientes deseo hacia tu pareja?",
    options: [
      { text: "Muy seguido, casi diario", type: "A" },
      { text: "Varias veces por semana", type: "B" },
      { text: "Ocasionalmente", type: "C" },
      { text: "Rara vez o nunca", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo ha evolucionado el deseo desde que iniciaron la relación?",
    options: [
      { text: "Se mantiene alto o incluso ha crecido", type: "A" },
      { text: "Ha cambiado pero sigue presente", type: "B" },
      { text: "Ha disminuido considerablemente", type: "C" },
      { text: "Ya no siento el mismo deseo", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Cómo manejan cuando tienen niveles de deseo diferentes?",
    options: [
      { text: "Lo hablamos y encontramos formas de conectar", type: "A" },
      { text: "Nos adaptamos al ritmo del otro", type: "B" },
      { text: "Causa tensión pero lo manejamos", type: "C" },
      { text: "Es fuente constante de conflicto", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Sientes que tu pareja te desea?",
    options: [
      { text: "Sí, me lo demuestra constantemente", type: "A" },
      { text: "Sí, aunque no siempre lo expresa", type: "B" },
      { text: "A veces, pero tengo dudas", type: "C" },
      { text: "No, siento que ya no me desea", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Hacen cosas para mantener vivo el deseo?",
    options: [
      { text: "Sí, nos esforzamos en seducirnos", type: "A" },
      { text: "A veces, cuando podemos", type: "B" },
      { text: "Poco, la rutina nos absorbe", type: "C" },
      { text: "No, ya no nos esforzamos en eso", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿El estrés de la vida afecta tu deseo?",
    options: [
      { text: "Poco, mantenemos nuestra conexión", type: "A" },
      { text: "Algo, pero lo recuperamos", type: "B" },
      { text: "Mucho, el estrés mata mi deseo", type: "C" },
      { text: "Completamente, ya no hay espacio para el deseo", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Cómo te sientes con tu atractivo físico en la relación?",
    options: [
      { text: "Muy bien, me siento deseado/a", type: "A" },
      { text: "Bien, con algunos días mejores que otros", type: "B" },
      { text: "Regular, a veces me siento poco atractivo/a", type: "C" },
      { text: "Mal, siento que ya no atraigo a mi pareja", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Tienes fantasías que involucren a tu pareja?",
    options: [
      { text: "Sí, frecuentemente", type: "A" },
      { text: "A veces, de vez en cuando", type: "B" },
      { text: "Rara vez", type: "C" },
      { text: "No, ya no fantaseo con él/ella", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Cómo responden cuando uno inicia y el otro no tiene ganas?",
    options: [
      { text: "Con comprensión y cariño", type: "A" },
      { text: "Generalmente bien, sin drama", type: "B" },
      { text: "A veces hay frustración o molestia", type: "C" },
      { text: "Causa conflicto o resentimiento", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿La rutina ha afectado la pasión en tu relación?",
    options: [
      { text: "No mucho, encontramos formas de romperla", type: "A" },
      { text: "Algo, pero trabajamos en ello", type: "B" },
      { text: "Sí, la rutina ha matado la pasión", type: "C" },
      { text: "Completamente, ya no hay espontaneidad", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, el deseo en una relación larga es:",
    options: [
      { text: "Algo que se cultiva y mantiene activamente", type: "A" },
      { text: "Normal que cambie pero importante mantener", type: "B" },
      { text: "Inevitable que disminuya con el tiempo", type: "C" },
      { text: "Algo que se pierde y es difícil recuperar", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🔥 Deseo Encendido",
    description: "El deseo en tu relación sigue muy vivo. Se atraen mutuamente y trabajan en mantener esa llama encendida. Esto es admirable y muy importante para la conexión de pareja.",
    traits: ["Apasionados", "Conectados", "Activos", "Deseantes"],
    advice: "¡Excelente! Sigan cultivando ese deseo y esa atracción mutua.",
  },
  B: {
    title: "✨ Deseo Saludable",
    description: "El deseo ha evolucionado desde el inicio pero sigue presente. Han logrado adaptarse a los cambios normales de una relación madura manteniendo la conexión íntima.",
    traits: ["Evolucionando", "Adaptados", "Presentes", "Conectados"],
    advice: "Van muy bien. Sigan buscando formas de mantener viva la chispa.",
  },
  C: {
    title: "🌙 Deseo Dormido",
    description: "El deseo ha disminuido significativamente. La rutina, el estrés u otros factores han afectado la atracción. Es importante abordar esto antes de que se convierta en un problema mayor.",
    traits: ["Disminuido", "Afectado", "Rutinario", "Desconectados"],
    advice: "Es momento de trabajar en reconectar. Hablen de esto y busquen formas de reavivar la llama.",
  },
  D: {
    title: "❄️ Deseo Apagado",
    description: "El deseo prácticamente ha desaparecido de la relación. Esto puede ser síntoma de problemas más profundos o simplemente consecuencia del tiempo sin atención a este aspecto.",
    traits: ["Apagado", "Distantes", "Desconectados", "En crisis"],
    advice: "Esta situación requiere atención urgente. Consideren buscar ayuda profesional.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
