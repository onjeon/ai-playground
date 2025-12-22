// Estilo de Boda - ¿Qué tipo de boda quieres?
// Test de Estilo de Boda para México

export const questions = [
  {
    id: 1,
    question: "Tu boda ideal sería...",
    options: [
      { text: "Grande, con toda la familia y muchos invitados", type: "A" },
      { text: "Mediana, los cercanos y una fiesta bonita", type: "B" },
      { text: "Pequeña e íntima, solo los más queridos", type: "C" },
      { text: "Por el civil y ya, sin fiesta", type: "D" },
    ],
  },
  {
    id: 2,
    question: "El presupuesto para la boda...",
    options: [
      { text: "Lo que sea necesario, es el día más importante", type: "A" },
      { text: "Algo razonable pero sin escatimar", type: "B" },
      { text: "Prefiero ahorrar para otras cosas", type: "C" },
      { text: "El mínimo posible", type: "D" },
    ],
  },
  {
    id: 3,
    question: "La ceremonia religiosa...",
    options: [
      { text: "Indispensable, en la iglesia como Dios manda", type: "A" },
      { text: "Me gustaría pero no es obligatorio", type: "B" },
      { text: "Prefiero una ceremonia simbólica", type: "C" },
      { text: "Solo civil, sin ceremonias extras", type: "D" },
    ],
  },
  {
    id: 4,
    question: "¿Qué tan importante es la opinión de tu familia en la boda?",
    options: [
      { text: "Muy importante, ellos también celebran", type: "A" },
      { text: "La consideramos pero decidimos nosotros", type: "B" },
      { text: "Es nuestra boda, ellos solo asisten", type: "C" },
      { text: "No me importa lo que opinen", type: "D" },
    ],
  },
  {
    id: 5,
    question: "El vestido/traje de la boda...",
    options: [
      { text: "El más hermoso, de diseñador si se puede", type: "A" },
      { text: "Algo bonito pero sin exagerar", type: "B" },
      { text: "Algo sencillo y elegante", type: "C" },
      { text: "Lo que tenga o algo simple", type: "D" },
    ],
  },
  {
    id: 6,
    question: "La fiesta después de la ceremonia...",
    options: [
      { text: "Banda o grupo, mariachi, ¡toda la noche!", type: "A" },
      { text: "Buena música, comida y baile", type: "B" },
      { text: "Una cena tranquila con los cercanos", type: "C" },
      { text: "Prefiero no hacer fiesta", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Pedirías lazo, arras y padrinos de todo?",
    options: [
      { text: "¡Claro! Es la tradición mexicana", type: "A" },
      { text: "Algunos padrinos, los más importantes", type: "B" },
      { text: "Solo los indispensables", type: "C" },
      { text: "Prefiero no tener padrinos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "La luna de miel...",
    options: [
      { text: "Un viaje espectacular, de ensueño", type: "A" },
      { text: "Un viaje bonito dentro de presupuesto", type: "B" },
      { text: "Algo sencillo o dejarlo para después", type: "C" },
      { text: "No es necesaria", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Las fotos y video de la boda...",
    options: [
      { text: "Profesionales y espectaculares, de revista", type: "A" },
      { text: "Buenos profesionales que capturen el momento", type: "B" },
      { text: "Alguien conocido que sepa de fotos", type: "C" },
      { text: "Las fotos del celular están bien", type: "D" },
    ],
  },
  {
    id: 10,
    question: "¿Harías despedida de soltero/a?",
    options: [
      { text: "¡Obvio! Tiene que ser épica", type: "A" },
      { text: "Sí, algo divertido con amigos", type: "B" },
      { text: "Algo tranquilo, una cenita", type: "C" },
      { text: "No me llaman la atención", type: "D" },
    ],
  },
  {
    id: 11,
    question: "El pastel y la comida de la boda...",
    options: [
      { text: "De los mejores, banquete completo", type: "A" },
      { text: "Buena comida y pastel tradicional", type: "B" },
      { text: "Algo rico pero sencillo", type: "C" },
      { text: "Lo básico está bien", type: "D" },
    ],
  },
  {
    id: 12,
    question: "¿Cuánto llevas planeando tu boda ideal?",
    options: [
      { text: "Desde que era niño/a, tengo todo pensado", type: "A" },
      { text: "Tengo algunas ideas pero nada fijo", type: "B" },
      { text: "No lo pienso mucho, ya veremos", type: "C" },
      { text: "Nunca me ha importado mucho el tema", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Boda de Ensueño",
    emoji: "👰",
    description: "Quieres la boda mexicana completa: iglesia, fiesta grande, mariachi, vals, víbora de la mar y todo. Para ti es el día más importante y debe ser perfecto. Sueñas con una boda de película.",
    traits: ["Tradicional", "Soñador/a", "Detallista", "Romántico/a"],
    strengths: ["Sabes lo que quieres", "Valoras las tradiciones", "Harás un día memorable"],
    weaknesses: ["Puede ser muy costoso", "El estrés de la planeación", "Expectativas muy altas"],
    tips: ["Establece un presupuesto realista", "Lo importante es el matrimonio, no solo la boda", "Delega para no estresarte"],
  },
  B: {
    type: "B",
    title: "Boda Equilibrada",
    emoji: "💒",
    description: "Quieres una boda bonita pero sin exagerar. Balanceas tradición con practicidad. Tendrás una celebración linda sin endeudarte ni estresarte de más. El equilibrio perfecto.",
    traits: ["Equilibrado/a", "Práctico/a", "Sensato/a", "Alegre"],
    strengths: ["No te obsesionas con perfección", "Balanceas presupuesto y gusto", "Disfrutas sin estrés"],
    weaknesses: ["Podrías arrepentirte de no hacer más", "Presión familiar por hacer más"],
    tips: ["Tu enfoque es muy sano", "No dejes que te presionen", "Disfruta el proceso"],
  },
  C: {
    type: "C",
    title: "Boda Íntima",
    emoji: "🌿",
    description: "Prefieres algo pequeño e íntimo. No te va el show ni la fiesta grande. Valoras más el significado que el espectáculo. Una ceremonia con los más queridos es más que suficiente.",
    traits: ["Íntimo/a", "Sencillo/a", "Auténtico/a", "Práctico/a"],
    strengths: ["No te dejas llevar por lo superficial", "Ahorras para lo importante", "Una boda personal y significativa"],
    weaknesses: ["La familia puede querer más", "Podrías arrepentirte después"],
    tips: ["Haz lo que te haga feliz", "Comunica a la familia tu visión", "Una boda pequeña puede ser muy especial"],
  },
  D: {
    type: "D",
    title: "Sin Boda Grande",
    emoji: "📝",
    description: "La boda no es lo tuyo. Prefieres firmar y ya. No ves el sentido de gastar tanto en una fiesta. Para ti el matrimonio es lo importante, no la celebración.",
    traits: ["Minimalista", "Práctico/a", "Anti-tradicional", "Directo/a"],
    strengths: ["No te dejas presionar", "Ahorras mucho dinero", "Evitas el estrés de planear"],
    weaknesses: ["Tu pareja podría querer más", "La familia no lo entenderá", "Podrías arrepentirte"],
    tips: ["Asegúrate de que tu pareja piense igual", "Considera un punto medio", "El día sí puede ser especial sin gastar mucho"],
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
