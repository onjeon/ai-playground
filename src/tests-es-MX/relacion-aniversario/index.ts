// Test de Celebración de Aniversarios

export const questions = [
  {
    id: 1,
    text: "¿Cómo celebran su aniversario de pareja?",
    options: [
      { text: "A lo grande: viaje, cena elegante, el paquete completo", type: "A" },
      { text: "Algo especial pero íntimo, solo nosotros dos", type: "B" },
      { text: "Depende del año y de cómo estemos de dinero", type: "C" },
      { text: "No le damos mucha importancia, es un día más", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Quién se acuerda primero de las fechas importantes?",
    options: [
      { text: "Los dos, lo tenemos bien presente", type: "A" },
      { text: "Yo generalmente, soy el/la detallista", type: "B" },
      { text: "Mi pareja, yo a veces se me pasa", type: "C" },
      { text: "A veces se nos olvida a ambos", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Qué tipo de regalos se dan en aniversarios?",
    options: [
      { text: "Significativos y personalizados, con mucho pensamiento", type: "A" },
      { text: "Algo que el otro necesita o quiere", type: "B" },
      { text: "A veces regalos, a veces solo una salida", type: "C" },
      { text: "No nos regalamos cosas generalmente", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Celebran otros aniversarios además del principal (primer beso, primera cita)?",
    options: [
      { text: "Sí, tenemos varias fechas especiales", type: "A" },
      { text: "Algunas, las más significativas", type: "B" },
      { text: "Solo el aniversario principal", type: "C" },
      { text: "Ninguno realmente, son muchas fechas", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Cómo reaccionarías si tu pareja olvida su aniversario?",
    options: [
      { text: "Me dolería mucho pero lo hablaríamos", type: "A" },
      { text: "Me molestaría pero entiendo que pasa", type: "B" },
      { text: "No es gran cosa, lo importante es estar juntos", type: "C" },
      { text: "Normal, a mí también se me podría olvidar", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Publican en redes sociales sobre su aniversario?",
    options: [
      { text: "Sí, con foto y dedicatoria romántica", type: "A" },
      { text: "A veces, algo sencillo", type: "B" },
      { text: "No, lo nuestro es privado", type: "C" },
      { text: "No usamos mucho redes para esas cosas", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Involucran a familia o amigos en sus celebraciones de aniversario?",
    options: [
      { text: "A veces hacemos algo con ellos, nos gusta compartir", type: "A" },
      { text: "El día es solo para nosotros, después celebramos con otros", type: "B" },
      { text: "Preferimos que sea privado siempre", type: "C" },
      { text: "No es algo que celebremos públicamente", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Han tenido un aniversario que los decepcionó?",
    options: [
      { text: "No, siempre hacemos algo lindo aunque sea pequeño", type: "A" },
      { text: "Alguna vez, pero aprendimos de eso", type: "B" },
      { text: "Sí, varios no han sido como esperábamos", type: "C" },
      { text: "No esperamos mucho así que no hay decepción", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Planean sus aniversarios con anticipación?",
    options: [
      { text: "Sí, semanas o meses antes", type: "A" },
      { text: "Con algo de tiempo, para tener reservaciones", type: "B" },
      { text: "Unos días antes, lo que salga", type: "C" },
      { text: "Sobre la marcha, sin mucho plan", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Qué importancia tiene el aniversario de bodas vs. el de novios?",
    options: [
      { text: "Ambos son igual de importantes", type: "A" },
      { text: "El de bodas es más formal, el de novios más romántico", type: "B" },
      { text: "Solo celebramos uno de los dos", type: "C" },
      { text: "Ninguno tiene mucha importancia ya", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Escriben cartas o mensajes especiales en aniversarios?",
    options: [
      { text: "Siempre, es tradición nuestra", type: "A" },
      { text: "A veces, cuando sale del corazón", type: "B" },
      { text: "Raramente, no somos muy de palabras escritas", type: "C" },
      { text: "No, preferimos demostrarlo de otras formas", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, celebrar el aniversario significa:",
    options: [
      { text: "Honrar el amor y el tiempo juntos", type: "A" },
      { text: "Una oportunidad para reconectar y recordar", type: "B" },
      { text: "Un día para hacer algo diferente", type: "C" },
      { text: "Una fecha más en el calendario", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💝 Celebradores Románticos",
    description: "Los aniversarios son sagrados para ustedes. Planean con anticipación, se dan detalles significativos y aprovechan cada fecha para demostrar su amor. ¡Son la pareja que todos envidian!",
    traits: ["Románticos", "Detallistas", "Planificadores", "Apasionados"],
    advice: "¡Sigan así! Solo cuiden de que la presión por celebrar no quite espontaneidad al resto del año.",
  },
  B: {
    title: "🎉 Celebradores Equilibrados",
    description: "Valoran sus aniversarios y hacen algo especial sin exagerar. Encuentran el balance entre lo romántico y lo práctico, haciendo que cada celebración sea significativa pero relajada.",
    traits: ["Equilibrados", "Atentos", "Flexibles", "Cariñosos"],
    advice: "Tienen el balance perfecto. Quizá podrían agregar un detalle sorpresa de vez en cuando.",
  },
  C: {
    title: "🌟 Celebradores Casuales",
    description: "Los aniversarios existen pero no son prioridad. A veces celebran, a veces no, dependiendo de las circunstancias. Para ustedes, el amor se demuestra todos los días, no solo en fechas.",
    traits: ["Casuales", "Prácticos", "Relajados", "Flexibles"],
    advice: "Está bien no obsesionarse con fechas, pero un detalle ocasional puede fortalecer mucho la relación.",
  },
  D: {
    title: "📅 No Celebradores",
    description: "Los aniversarios no son importantes en su dinámica de pareja. Prefieren demostrar amor de otras formas y las fechas especiales son solo eso: fechas.",
    traits: ["Prácticos", "Desapegados", "Minimalistas", "Directos"],
    advice: "Si ambos están felices así, perfecto. Pero confirmen que ninguno secretamente desea más celebración.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
