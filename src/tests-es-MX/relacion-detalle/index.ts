// Test de Detalles en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Con qué frecuencia le das detalles a tu pareja?",
    options: [
      { text: "Muy seguido, me encanta sorprender", type: "A" },
      { text: "En ocasiones especiales y a veces sin razón", type: "B" },
      { text: "Solo en fechas importantes", type: "C" },
      { text: "Casi nunca, no soy muy detallista", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Qué tipo de detalles prefieres dar?",
    options: [
      { text: "Personalizados, algo que sé que le encantará", type: "A" },
      { text: "Una mezcla de prácticos y románticos", type: "B" },
      { text: "Lo que encuentro o se me ocurre", type: "C" },
      { text: "Prefiero experiencias a cosas materiales", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo reaccionas cuando tu pareja te da un detalle?",
    options: [
      { text: "Me emociono mucho, significa todo para mí", type: "A" },
      { text: "Me hace feliz y lo agradezco genuinamente", type: "B" },
      { text: "Lo aprecio pero no es indispensable", type: "C" },
      { text: "A veces me incomoda, no sé cómo responder", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Recuerdas los pequeños gustos y preferencias de tu pareja?",
    options: [
      { text: "Sí, todos. Me fijo en cada detalle", type: "A" },
      { text: "La mayoría, los más importantes", type: "B" },
      { text: "Algunos, a veces se me olvidan", type: "C" },
      { text: "No mucho, me cuesta recordar esas cosas", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Qué opinas de las flores o chocolates como detalle?",
    options: [
      { text: "Clásicos pero efectivos, me gustan", type: "A" },
      { text: "Están bien pero prefiero algo más original", type: "B" },
      { text: "Son algo cliché pero los acepto", type: "C" },
      { text: "Prefiero algo práctico", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Escribes notas o mensajes románticos a tu pareja?",
    options: [
      { text: "Sí, seguido. Me encanta expresarme así", type: "A" },
      { text: "A veces, cuando sale del corazón", type: "B" },
      { text: "Rara vez, no es mi fuerte", type: "C" },
      { text: "Nunca, me da pena o no sé qué escribir", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Planeas sorpresas para tu pareja?",
    options: [
      { text: "Sí, me encanta ver su cara de sorpresa", type: "A" },
      { text: "Ocasionalmente, cuando se me ocurre algo bueno", type: "B" },
      { text: "Casi nunca, no soy muy de sorpresas", type: "C" },
      { text: "Prefiero que las cosas sean predecibles", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Tu pareja es detallista contigo?",
    options: [
      { text: "Muy detallista, me consiente mucho", type: "A" },
      { text: "Lo suficiente, me siento querido/a", type: "B" },
      { text: "Poco, quisiera más detalles", type: "C" },
      { text: "Casi nada, no es su forma de expresar amor", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Cómo celebras fechas como San Valentín o aniversarios?",
    options: [
      { text: "A lo grande, con todo preparado", type: "A" },
      { text: "Algo especial pero sin exagerar", type: "B" },
      { text: "Lo básico, una salida o regalo", type: "C" },
      { text: "No le doy mucha importancia a esas fechas", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Los detalles que das reflejan cuánto conoces a tu pareja?",
    options: [
      { text: "Siempre, son muy personalizados", type: "A" },
      { text: "Generalmente sí, me esfuerzo en eso", type: "B" },
      { text: "A veces sí, a veces compro lo primero que veo", type: "C" },
      { text: "No mucho, me cuesta elegir", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué tan importante es recibir detalles para ti?",
    options: [
      { text: "Muy importante, es mi lenguaje del amor", type: "A" },
      { text: "Importante, aunque no indispensable", type: "B" },
      { text: "Apreciado pero no fundamental", type: "C" },
      { text: "No me afecta si no los recibo", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, ser detallista significa:",
    options: [
      { text: "Demostrar amor con actos pequeños pero significativos", type: "A" },
      { text: "Recordar lo que le gusta a tu pareja", type: "B" },
      { text: "Hacer algo especial de vez en cuando", type: "C" },
      { text: "Algo que no todos saben hacer", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🎁 Ultra Detallista",
    description: "Los detalles son tu lenguaje del amor. Disfrutas sorprendiendo a tu pareja y recuerdas hasta el más mínimo gusto. Tu pareja es muy afortunada de tener a alguien tan atento.",
    traits: ["Detallista", "Atento/a", "Romántico/a", "Generoso/a"],
    advice: "Tu capacidad de dar es hermosa. Solo asegúrate de también saber recibir con gracia.",
  },
  B: {
    title: "💐 Detallista Equilibrado/a",
    description: "Tienes un buen balance en cuanto a detalles. Sabes cuándo y cómo sorprender a tu pareja sin excederte. Tus detalles son significativos porque no son constantes.",
    traits: ["Equilibrado/a", "Considerado/a", "Oportuno/a", "Genuino/a"],
    advice: "Tienes el balance perfecto. Sigue siendo espontáneo/a con tus detalles.",
  },
  C: {
    title: "🌸 Detallista Ocasional",
    description: "Los detalles no son tu fuerte pero los haces cuando es importante. Podrías trabajar en ser más atento/a a las pequeñas cosas que alegran a tu pareja.",
    traits: ["Ocasional", "Práctico/a", "Funcional", "Selectivo/a"],
    advice: "Intenta notar más los pequeños gustos de tu pareja. Un detalle inesperado puede hacer magia.",
  },
  D: {
    title: "🤷 No Detallista",
    description: "Los detalles no son tu forma de expresar amor y está bien. Solo asegúrate de que tu pareja entienda cómo demuestras cariño y que sus necesidades estén cubiertas.",
    traits: ["Práctico/a", "Directo/a", "Funcional", "Diferente"],
    advice: "Si tu pareja valora los detalles, considera hacer un esfuerzo ocasional. No tiene que ser grande.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
