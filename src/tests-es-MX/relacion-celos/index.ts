// Tipo de Celos - ¿Qué tan celoso/a eres?
// Test de Celos para México

export const questions = [
  {
    id: 1,
    question: "Tu pareja recibe un mensaje de texto tarde en la noche. ¿Qué haces?",
    options: [
      { text: "No pasa nada, confío completamente", type: "A" },
      { text: "Pregunto casual quién es, sin drama", type: "B" },
      { text: "Me quedo pensando pero no digo nada", type: "C" },
      { text: "Necesito saber quién es y qué quiere", type: "D" },
    ],
  },
  {
    id: 2,
    question: "En una fiesta, alguien atractivo se acerca a platicar con tu pareja...",
    options: [
      { text: "Qué bueno que es sociable mi pareja", type: "A" },
      { text: "Me acerco a presentarme tranquilamente", type: "B" },
      { text: "Los observo de lejos con incomodidad", type: "C" },
      { text: "Voy de inmediato a marcar territorio", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tu pareja menciona que un/a ex le mandó mensaje...",
    options: [
      { text: "Me da igual, el pasado es pasado", type: "A" },
      { text: "Pregunto qué quería, pero confío", type: "B" },
      { text: "Me molesta aunque trato de ocultarlo", type: "C" },
      { text: "Me urge saber qué dijo y bloquear a esa persona", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Ves que tu pareja le dio like a fotos de alguien atractivo...",
    options: [
      { text: "Normal, yo también doy likes sin significado", type: "A" },
      { text: "Lo noto pero no le doy importancia", type: "B" },
      { text: "Me incomoda pero no digo nada", type: "C" },
      { text: "Necesito saber quién es y por qué le dio like", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Tu pareja tiene un/a mejor amigo/a del sexo opuesto...",
    options: [
      { text: "Perfecto, me alegra que tenga amistades", type: "A" },
      { text: "Lo acepto aunque a veces me da cosa", type: "B" },
      { text: "Preferiría que no fueran tan cercanos", type: "C" },
      { text: "Eso no está bien, no me late nada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja va a salir con amigos y no te invita...",
    options: [
      { text: "Genial, yo también haré algo por mi cuenta", type: "A" },
      { text: "Está bien, pero me hubiera gustado ir", type: "B" },
      { text: "Me molesta pero no quiero parecer intenso/a", type: "C" },
      { text: "¿Por qué no me invita? Algo anda mal", type: "D" },
    ],
  },
  {
    id: 7,
    question: "En una reunión familiar, tu pareja platica mucho con un/a primo/a lejano/a...",
    options: [
      { text: "Qué buena onda que se lleva con mi familia", type: "A" },
      { text: "Normal, es familia al fin y al cabo", type: "B" },
      { text: "Me incomoda aunque sé que es exagerado", type: "C" },
      { text: "Eso de 'primo/a lejano/a' no me convence", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Tu pareja tiene contraseña en su celular que no conoces...",
    options: [
      { text: "Está bien, todos tenemos privacidad", type: "A" },
      { text: "No me importa, pero si me la diera estaría bien", type: "B" },
      { text: "Me intriga un poco, ¿qué esconde?", type: "C" },
      { text: "No hay secretos en una relación, necesito saberla", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Un/a compañero/a del trabajo de tu pareja le escribe seguido...",
    options: [
      { text: "Son colegas, es normal", type: "A" },
      { text: "Pregunto de qué platican pero sin drama", type: "B" },
      { text: "Me pone nervioso/a aunque no lo admita", type: "C" },
      { text: "Necesito conocer a esa persona ya", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu pareja le hace un cumplido a alguien más frente a ti...",
    options: [
      { text: "Es amable, qué tiene de malo", type: "A" },
      { text: "No me encanta pero lo entiendo", type: "B" },
      { text: "Me molesta aunque sé que exagero", type: "C" },
      { text: "¿Por qué no me dice esas cosas a mí?", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Ves una foto vieja de tu pareja con su ex...",
    options: [
      { text: "Es pasado, no me afecta", type: "A" },
      { text: "Siento algo pero lo supero rápido", type: "B" },
      { text: "Me quedo pensando en ellos más de lo que debería", type: "C" },
      { text: "Necesito que borre todo de su pasado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Tu pareja tarda mucho en contestar tus mensajes...",
    options: [
      { text: "Estará ocupado/a, no pasa nada", type: "A" },
      { text: "Pregunto si todo bien cuando conteste", type: "B" },
      { text: "Empiezo a imaginar cosas malas", type: "C" },
      { text: "¿Con quién estará que no me contesta?", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cero Celos",
    emoji: "😎",
    description: "Eres una persona súper segura y confiada. Los celos no son parte de tu vocabulario. Confías plenamente en tu pareja y entiendes que cada quien puede tener su espacio. En México dirían que eres muy 'relajado/a'.",
    traits: ["Seguro/a", "Confiado/a", "Relajado/a", "Maduro/a"],
    strengths: ["Das libertad a tu pareja", "No generas conflictos por celos", "Tienes autoestima alta"],
    weaknesses: ["Podrías ignorar señales reales", "A veces pareces indiferente"],
    tips: ["Está bien confiar pero mantén comunicación", "No confundas confianza con desinterés", "Escucha tu intuición también"],
  },
  B: {
    type: "B",
    title: "Celos Saludables",
    emoji: "💚",
    description: "Tienes un nivel de celos normal y saludable. Te importa tu relación pero no te obsesionas. Sabes comunicar cuando algo te incomoda sin hacer drama. Buscas el equilibrio entre confianza y cuidado.",
    traits: ["Equilibrado/a", "Comunicativo/a", "Consciente", "Sensato/a"],
    strengths: ["Expresas tus sentimientos sanamente", "No exageras pero tampoco ignoras", "Mantienes buena comunicación"],
    weaknesses: ["A veces dudas de más", "Puedes preocuparte sin razón"],
    tips: ["Sigue comunicando tus sentimientos", "Confía en tu buen juicio", "No te guardes lo que sientes"],
  },
  C: {
    type: "C",
    title: "Celos Ocultos",
    emoji: "🙈",
    description: "Sientes celos pero te los guardas. No quieres parecer 'intenso/a' pero por dentro te carcome. En la cultura mexicana, esto es común: aguantarse para no hacer el ridículo. Pero guardártelo no es sano.",
    traits: ["Reservado/a", "Inseguro/a", "Callado/a", "Pensativo/a"],
    strengths: ["No haces escenas", "Intentas ser razonable", "Reflexionas antes de actuar"],
    weaknesses: ["Te guardas mucho", "El resentimiento crece", "No comunicas tus necesidades"],
    tips: ["Expresa lo que sientes de buena manera", "No te comas las cosas", "Tu pareja no lee mentes"],
  },
  D: {
    type: "D",
    title: "Muy Celoso/a",
    emoji: "😤",
    description: "Tienes un nivel alto de celos. Todo te hace sospechar y necesitas tener control. En México dirían que 'te clavan bien cañón'. Los celos extremos pueden dañar tu relación y tu paz mental.",
    traits: ["Celoso/a", "Controlador/a", "Desconfiado/a", "Intenso/a"],
    strengths: ["Te importa mucho tu relación", "Estás atento/a a todo", "Proteges lo que amas"],
    weaknesses: ["Puedes asfixiar a tu pareja", "Generas conflictos innecesarios", "La desconfianza te consume"],
    tips: ["Trabaja en tu autoestima", "Confía más en tu pareja", "Los celos excesivos alejan, no acercan"],
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
