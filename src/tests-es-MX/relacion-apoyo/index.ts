// Test de Apoyo en Pareja

export const questions = [
  {
    id: 1,
    text: "Tu pareja tuvo un día horrible en la chamba. ¿Qué haces?",
    options: [
      { text: "Le preparo su comida favorita y lo/la escucho", type: "A" },
      { text: "Le doy su espacio y cuando quiera hablar, ahí estoy", type: "B" },
      { text: "Le doy consejos para solucionar el problema", type: "C" },
      { text: "Le digo que no se estrese tanto, que ya pasará", type: "D" },
    ],
  },
  {
    id: 2,
    text: "Tu pareja quiere emprender un negocio arriesgado. ¿Tu reacción?",
    options: [
      { text: "¡Ándale! Te apoyo en todo, vamos con todo", type: "A" },
      { text: "Analicemos juntos los pros y contras", type: "B" },
      { text: "Me preocupa pero si es su sueño, adelante", type: "C" },
      { text: "Le advierto todos los riesgos para que lo piense bien", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo celebras los logros de tu pareja?",
    options: [
      { text: "Fiesta con la familia, hay que celebrar en grande", type: "A" },
      { text: "Cena romántica y le digo lo orgulloso/a que estoy", type: "B" },
      { text: "Un abrazo fuerte y felicitación sincera", type: "C" },
      { text: "Lo reconozco pero sin exagerar, no se le vaya a subir", type: "D" },
    ],
  },
  {
    id: 4,
    text: "Tu pareja está pasando por una depresión. ¿Cómo actúas?",
    options: [
      { text: "Estoy ahí 24/7, busco ayuda profesional si es necesario", type: "A" },
      { text: "Le doy amor y paciencia, sin presionar", type: "B" },
      { text: "Trato de animarlo/a con actividades y salidas", type: "C" },
      { text: "Le digo que le eche ganas, que tiene mucho por qué estar bien", type: "D" },
    ],
  },
  {
    id: 5,
    text: "Tu pareja tiene un conflicto con su familia. ¿Qué haces?",
    options: [
      { text: "Lo/la apoyo incondicionalmente, su familia está mal", type: "A" },
      { text: "Escucho ambas partes y trato de ser objetivo/a", type: "B" },
      { text: "Le ayudo a encontrar soluciones pacíficas", type: "C" },
      { text: "Prefiero no meterme en asuntos familiares", type: "D" },
    ],
  },
  {
    id: 6,
    text: "Tu pareja quiere estudiar una carrera nueva a los 35. ¿Tu opinión?",
    options: [
      { text: "¡Nunca es tarde! Te apoyo al 100%", type: "A" },
      { text: "Si es lo que te hace feliz, le entramos juntos", type: "B" },
      { text: "Me preocupa lo económico pero hay que intentarlo", type: "C" },
      { text: "¿A estas alturas? Mejor enfócate en lo que ya tienes", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Qué tan seguido le dices a tu pareja que estás orgulloso/a de él/ella?",
    options: [
      { text: "Todos los días, es importante que lo sepa", type: "A" },
      { text: "Seguido, cuando hace algo especial", type: "B" },
      { text: "De vez en cuando, no quiero que suene falso", type: "C" },
      { text: "Casi nunca, ya sabe que lo/la quiero", type: "D" },
    ],
  },
  {
    id: 8,
    text: "Tu pareja fracasó en algo importante. ¿Cómo reaccionas?",
    options: [
      { text: "Lo abrazo y le digo que lo volveremos a intentar juntos", type: "A" },
      { text: "Le ayudo a analizar qué salió mal para mejorar", type: "B" },
      { text: "Le doy ánimos y le recuerdo sus otros éxitos", type: "C" },
      { text: "Le digo 'te lo dije' si yo había visto el problema", type: "D" },
    ],
  },
  {
    id: 9,
    text: "Tu pareja necesita dinero para un proyecto personal. ¿Qué haces?",
    options: [
      { text: "Sin pensarlo, lo que tengo es de los dos", type: "A" },
      { text: "Le ayudo con lo que pueda, hacemos cuentas juntos", type: "B" },
      { text: "Le presto pero con un plan de pago", type: "C" },
      { text: "Que busque otra forma, el dinero es delicado", type: "D" },
    ],
  },
  {
    id: 10,
    text: "Tu pareja tiene un sueño que tú crees imposible. ¿Qué le dices?",
    options: [
      { text: "Si tú crees, yo creo. Vamos por ello", type: "A" },
      { text: "Busquemos cómo hacerlo realidad paso a paso", type: "B" },
      { text: "Es difícil pero si te esfuerzas, quién sabe", type: "C" },
      { text: "Hay que ser realistas, mejor piensa en otra cosa", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Cómo manejas cuando tu pareja te necesita pero tú también estás mal?",
    options: [
      { text: "Su bienestar primero, luego veo lo mío", type: "A" },
      { text: "Le digo cómo me siento y nos apoyamos mutuamente", type: "B" },
      { text: "Hago lo que puedo pero le explico mi situación", type: "C" },
      { text: "No puedo dar lo que no tengo, necesito mi espacio", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, apoyar a tu pareja significa:",
    options: [
      { text: "Estar en las buenas y en las malas, siempre", type: "A" },
      { text: "Ser su compañero/a de vida y crecimiento", type: "B" },
      { text: "Ayudarle cuando me lo pide", type: "C" },
      { text: "No estorbar y dejar que resuelva sus cosas", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💪 Apoyo Incondicional",
    description: "Eres el pilar de tu relación. Tu pareja sabe que contigo tiene un apoyo inquebrantable en cada momento. Te entregas al 100% y celebras sus triunfos como propios.",
    traits: ["Incondicional", "Entregado/a", "Presente", "Generoso/a"],
    advice: "Tu apoyo es invaluable. Solo cuida de no descuidarte a ti mismo/a por apoyar tanto a los demás.",
  },
  B: {
    title: "⚖️ Apoyo Equilibrado",
    description: "Tienes el balance perfecto entre apoyar y mantener tu individualidad. Sabes cuándo estar presente y cuándo dar espacio. Tu pareja te valora porque eres objetivo/a y siempre buscas soluciones juntos.",
    traits: ["Equilibrado/a", "Objetivo/a", "Colaborador/a", "Maduro/a"],
    advice: "Tu enfoque balanceado es excelente para una relación sana. ¡Sigan trabajando en equipo!",
  },
  C: {
    title: "🤔 Apoyo Cauteloso",
    description: "Apoyas a tu pareja pero con reservas. Te preocupa ser realista y a veces eso puede percibirse como falta de fe. Tu intención es buena, pero podrías trabajar en demostrar más entusiasmo.",
    traits: ["Cauteloso/a", "Realista", "Práctico/a", "Reservado/a"],
    advice: "El realismo es bueno, pero a veces tu pareja solo necesita que creas en él/ella. Inténtalo.",
  },
  D: {
    title: "🚶 Apoyo Distante",
    description: "Te cuesta un poco involucrarte emocionalmente en el apoyo. Prefieres que cada quien resuelva sus temas. Esto puede hacer que tu pareja se sienta sola en momentos difíciles.",
    traits: ["Independiente", "Distante", "Práctico/a", "Reservado/a"],
    advice: "Una relación es un equipo. Tu pareja necesita saber que estás ahí. Pequeños gestos hacen la diferencia.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
