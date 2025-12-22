// Nivel de Confianza - ¿Qué tanto confías en tu pareja?
// Test de Confianza para México

export const questions = [
  {
    id: 1,
    question: "Tu pareja sale con amigos sin ti un viernes por la noche...",
    options: [
      { text: "Que se divierta, confío totalmente", type: "A" },
      { text: "Está bien, pero que me avise cuando llegue", type: "B" },
      { text: "Me quedo con pendiente hasta que llegue", type: "C" },
      { text: "Preferiría que no saliera sin mí", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja tiene la contraseña de todas sus redes sociales...",
    options: [
      { text: "No necesito saberlas, confío plenamente", type: "A" },
      { text: "Las sé pero nunca reviso nada", type: "B" },
      { text: "Las sé y a veces le doy una checadita", type: "C" },
      { text: "Las necesito saber y reviso frecuentemente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tu pareja menciona a un/a nuevo/a compañero/a de trabajo muy seguido...",
    options: [
      { text: "Qué bueno que hizo un amigo/a en el trabajo", type: "A" },
      { text: "Me da curiosidad conocerlo/a", type: "B" },
      { text: "Me pone un poco incómodo/a pero no digo nada", type: "C" },
      { text: "Me preocupa esa relación", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu pareja va a un viaje de trabajo por una semana...",
    options: [
      { text: "Que le vaya bien, lo/la extrañaré", type: "A" },
      { text: "Hablamos todos los días y todo bien", type: "B" },
      { text: "Estaré pendiente de todo lo que haga", type: "C" },
      { text: "Me cuesta mucho confiar en esa situación", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Ves que tu pareja borró unos mensajes de su celular...",
    options: [
      { text: "Seguro era spam o algo sin importancia", type: "A" },
      { text: "Pregunto casual qué era", type: "B" },
      { text: "Me quedo pensando qué habrá borrado", type: "C" },
      { text: "Eso es sospechoso, algo esconde", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja tiene una amistad muy cercana de toda la vida del sexo opuesto...",
    options: [
      { text: "Me alegra que tenga amistades valiosas", type: "A" },
      { text: "Lo respeto aunque me da un poco de cosa", type: "B" },
      { text: "Preferiría que no fueran tan cercanos", type: "C" },
      { text: "Eso no me gusta nada, es una amenaza", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Tu pareja llegó tarde y dice que fue por el tráfico...",
    options: [
      { text: "El tráfico en México está horrible, le creo", type: "A" },
      { text: "Le creo pero pregunto más detalles", type: "B" },
      { text: "Mmm... ¿será cierto?", type: "C" },
      { text: "Necesito pruebas de que dice la verdad", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tu pareja recibe una llamada y sale a contestar...",
    options: [
      { text: "Seguro es algo personal, no me importa", type: "A" },
      { text: "Le pregunto después quién era", type: "B" },
      { text: "Me inquieta que no conteste frente a mí", type: "C" },
      { text: "¿Por qué tiene que esconderse para hablar?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Te enteras de algo del pasado de tu pareja que no sabías...",
    options: [
      { text: "El pasado es pasado, no me afecta", type: "A" },
      { text: "Me sorprende pero no cambia nada", type: "B" },
      { text: "Me pregunto qué más no me ha contado", type: "C" },
      { text: "Si ocultó esto, ¿qué más esconde?", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu pareja va a ver a su ex porque tienen un hijo juntos...",
    options: [
      { text: "Es normal, tienen que coordinar cosas del niño", type: "A" },
      { text: "Me avisa y todo bien, confío", type: "B" },
      { text: "Me cuesta aceptarlo aunque entiendo", type: "C" },
      { text: "No me gusta que se vean, me incomoda mucho", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Tu pareja te dice que confíes en él/ella porque nunca te fallaría...",
    options: [
      { text: "Le creo completamente, es sincero/a", type: "A" },
      { text: "Confío pero las acciones lo confirman", type: "B" },
      { text: "Quiero creer pero tengo mis dudas", type: "C" },
      { text: "Las palabras no bastan, necesito pruebas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "En general, ¿cómo describirías tu nivel de confianza?",
    options: [
      { text: "Confío ciegamente hasta que me demuestren lo contrario", type: "A" },
      { text: "Confío pero verifico de vez en cuando", type: "B" },
      { text: "Me cuesta confiar aunque lo intento", type: "C" },
      { text: "La confianza se gana con el tiempo y pruebas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Confianza Total",
    emoji: "💯",
    description: "Confías ciegamente en tu pareja. Le das toda tu confianza sin dudarlo. En México dirían que eres 'muy buena onda' con tu pareja. Tu nivel de confianza es admirable, pero no ignores tu intuición.",
    traits: ["Confiado/a", "Seguro/a", "Tranquilo/a", "Relajado/a"],
    strengths: ["No generas conflictos por desconfianza", "Tu pareja se siente libre", "Vives tranquilo/a"],
    weaknesses: ["Podrías ignorar señales de alerta", "A veces confías demasiado"],
    tips: ["Confiar está bien pero escucha tu intuición", "No seas ingenuo/a", "La confianza se alimenta con comunicación"],
  },
  B: {
    type: "B",
    title: "Confianza Equilibrada",
    emoji: "⚖️",
    description: "Tienes un nivel de confianza sano y equilibrado. Confías en tu pareja pero mantienes los ojos abiertos. No eres celoso/a ni paranoico/a, pero tampoco eres ingenuo/a. Tu balance es ideal.",
    traits: ["Equilibrado/a", "Sensato/a", "Comunicativo/a", "Realista"],
    strengths: ["Confías pero verificas sanamente", "Mantienes buena comunicación", "Eres realista"],
    weaknesses: ["A veces puedes dudar un poco", "Necesitas confirmación"],
    tips: ["Tu nivel de confianza es saludable", "Sigue comunicándote abiertamente", "Confía en tu juicio"],
  },
  C: {
    type: "C",
    title: "Confianza Frágil",
    emoji: "🥺",
    description: "Te cuesta confiar aunque lo intentas. Tienes inseguridades que afectan tu capacidad de confiar plenamente. Quizá experiencias pasadas te han hecho desconfiado/a. Es algo que puedes trabajar.",
    traits: ["Inseguro/a", "Dudoso/a", "Ansioso/a", "Cauteloso/a"],
    strengths: ["Eres precavido/a", "Proteges tu corazón", "No te dejas engañar fácil"],
    weaknesses: ["La desconfianza te genera ansiedad", "Puedes asfixiar la relación", "Vives con preocupación"],
    tips: ["Trabaja en tus inseguridades", "Comunica tus miedos a tu pareja", "El pasado no define el presente"],
  },
  D: {
    type: "D",
    title: "Desconfianza Alta",
    emoji: "🚨",
    description: "Tienes un nivel alto de desconfianza. Necesitas pruebas de todo y vives con sospecha constante. En México dirían que eres 'bien desconfiado/a'. Esto puede dañar tu relación y tu paz mental.",
    traits: ["Desconfiado/a", "Controlador/a", "Paranoico/a", "Demandante"],
    strengths: ["Difícilmente te engañan", "Eres muy observador/a", "Proteges tu relación"],
    weaknesses: ["Generas un ambiente tóxico", "Tu pareja se siente vigilada", "Vives estresado/a"],
    tips: ["La desconfianza excesiva destruye relaciones", "Busca ayuda profesional si es necesario", "No todos son como quien te lastimó antes"],
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
