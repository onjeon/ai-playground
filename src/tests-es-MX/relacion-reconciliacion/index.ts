// Test de Reconciliación en Pareja

export const questions = [
  {
    id: 1,
    text: "Después de una pelea fuerte, ¿quién da el primer paso para reconciliarse?",
    options: [
      { text: "Nos turnamos, depende de quién haya estado mal", type: "A" },
      { text: "Generalmente yo, no me gusta estar enojados", type: "B" },
      { text: "Casi siempre mi pareja, me cuesta ceder", type: "C" },
      { text: "A veces nadie y el enojo dura mucho", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cuánto tiempo tardan en hacer las paces después de discutir?",
    options: [
      { text: "Horas, no nos gusta dormir enojados", type: "A" },
      { text: "Un día máximo, necesitamos tiempo para calmarnos", type: "B" },
      { text: "Varios días, nos cuesta hablar del tema", type: "C" },
      { text: "A veces semanas, somos muy orgullosos", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo pides perdón cuando te equivocas?",
    options: [
      { text: "Hablo honestamente y reconozco mi error", type: "A" },
      { text: "Con un detalle o gesto cariñoso además de palabras", type: "B" },
      { text: "Me cuesta, pero eventualmente lo hago", type: "C" },
      { text: "Casi nunca pido perdón directamente", type: "D" },
    ],
  },
  {
    id: 4,
    text: "Cuando tu pareja te pide perdón, ¿cómo reaccionas?",
    options: [
      { text: "Lo acepto si veo que es sincero y hablamos", type: "A" },
      { text: "Necesito un poco de tiempo pero perdono", type: "B" },
      { text: "Me cuesta mucho soltar el enojo", type: "C" },
      { text: "Depende de qué tan grave fue, a veces no perdono", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Sacan los errores del pasado en discusiones actuales?",
    options: [
      { text: "No, lo que pasó, pasó", type: "A" },
      { text: "A veces, pero tratamos de no hacerlo", type: "B" },
      { text: "Sí, es difícil olvidar ciertas cosas", type: "C" },
      { text: "Sí, todo cuenta y nada se olvida", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Qué papel juega el 'sexo de reconciliación' en su relación?",
    options: [
      { text: "A veces pasa pero primero resolvemos hablando", type: "A" },
      { text: "Es una forma válida de reconectarnos", type: "B" },
      { text: "No podemos estar íntimos si hay conflicto", type: "C" },
      { text: "Nunca, el enojo mata cualquier deseo", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Cómo manejan cuando ambos creen tener la razón?",
    options: [
      { text: "Buscamos el punto medio y cedemos ambos", type: "A" },
      { text: "Uno cede para no alargar el conflicto", type: "B" },
      { text: "Discutimos hasta que alguien 'gana'", type: "C" },
      { text: "Nos quedamos en nuestras posiciones", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Han buscado ayuda externa (terapia, consejero) para resolver conflictos?",
    options: [
      { text: "Sí, y nos ha ayudado mucho", type: "A" },
      { text: "Lo hemos considerado seriamente", type: "B" },
      { text: "No, preferimos resolverlo entre nosotros", type: "C" },
      { text: "No, sería admitir que estamos muy mal", type: "D" },
    ],
  },
  {
    id: 9,
    text: "Después de reconciliarse, ¿cómo se sienten?",
    options: [
      { text: "Más unidos y fuertes como pareja", type: "A" },
      { text: "Aliviados de que pasó el mal momento", type: "B" },
      { text: "Bien pero con algo de resentimiento", type: "C" },
      { text: "Como si nada hubiera cambiado realmente", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Aprenden de sus peleas para no repetir los mismos errores?",
    options: [
      { text: "Sí, cada conflicto nos enseña algo", type: "A" },
      { text: "Lo intentamos aunque a veces repetimos", type: "B" },
      { text: "No mucho, caemos en los mismos patrones", type: "C" },
      { text: "Peleamos por lo mismo una y otra vez", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué tan importante es para ti escuchar 'lo siento'?",
    options: [
      { text: "Importante, pero las acciones valen más", type: "A" },
      { text: "Muy importante, necesito escucharlo", type: "B" },
      { text: "No tanto si veo que cambió la actitud", type: "C" },
      { text: "Las palabras ya no me convencen", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, reconciliarse significa:",
    options: [
      { text: "Resolver el conflicto de raíz y crecer juntos", type: "A" },
      { text: "Perdonar y seguir adelante con amor", type: "B" },
      { text: "Dejar de pelear aunque no se resuelva todo", type: "C" },
      { text: "Aguantar y esperar que no vuelva a pasar", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💚 Reconciliación Madura",
    description: "Manejan los conflictos de forma ejemplar. Saben pedir perdón, perdonar y usar cada pelea como oportunidad de crecimiento. Su relación se fortalece después de cada tormenta.",
    traits: ["Maduros", "Comunicativos", "Resilientes", "Unidos"],
    advice: "¡Excelente trabajo! Sigan cultivando esa capacidad de resolver conflictos sanamente.",
  },
  B: {
    title: "💛 Reconciliación Sana",
    description: "Logran reconciliarse aunque a veces tome tiempo. Valoran la paz en la relación y están dispuestos a ceder para mantener la armonía. Van por buen camino.",
    traits: ["Pacíficos", "Flexibles", "Esforzados", "Cariñosos"],
    advice: "Van muy bien. Trabajen en comunicar más directamente durante el conflicto para resolverlo más rápido.",
  },
  C: {
    title: "🧡 Reconciliación Difícil",
    description: "Les cuesta trabajo reconciliarse después de pelear. El orgullo o el resentimiento a veces se interponen. Eventualmente hacen las paces pero el proceso es desgastante.",
    traits: ["Orgullosos", "Resentidos", "Lentos", "Tercos"],
    advice: "El orgullo es enemigo del amor. Intenten soltar más rápido y hablar antes de que el enojo crezca.",
  },
  D: {
    title: "❤️ Reconciliación Estancada",
    description: "Tienen dificultades serias para resolver conflictos. Las peleas se alargan, se acumulan resentimientos y a veces parece que no avanzan. Esto puede dañar la relación a largo plazo.",
    traits: ["Distantes", "Acumuladores", "Heridos", "Estancados"],
    advice: "Consideren buscar ayuda profesional. Merececen una relación donde los conflictos se resuelvan, no se acumulen.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
