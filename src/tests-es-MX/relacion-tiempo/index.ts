// Manejo del Tiempo en Pareja - ¿Cómo manejas el tiempo con tu pareja?
// Test de Tiempo de Calidad para México

export const questions = [
  {
    id: 1,
    question: "¿Cuánto tiempo necesitas pasar con tu pareja para estar bien?",
    options: [
      { text: "Todo el tiempo posible, no me canso", type: "A" },
      { text: "Bastante pero también necesito mi espacio", type: "B" },
      { text: "Lo justo, cada quien sus cosas", type: "C" },
      { text: "Poco está bien, valoro mi independencia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tu pareja está muy ocupado/a con el trabajo últimamente...",
    options: [
      { text: "Me siento muy solo/a y abandonado/a", type: "A" },
      { text: "Lo entiendo pero necesito que haga tiempo", type: "B" },
      { text: "Normal, yo también tengo mis cosas", type: "C" },
      { text: "Mejor, así tengo tiempo para mí", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Un fin de semana ideal con tu pareja sería...",
    options: [
      { text: "Juntos 24/7 haciendo todo juntos", type: "A" },
      { text: "Actividades juntos pero también ratos separados", type: "B" },
      { text: "Vernos un día y el otro cada quien", type: "C" },
      { text: "Hacer planes pero no necesariamente todo el fin", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Tu pareja quiere salir con sus amigos sin ti...",
    options: [
      { text: "Me da mucha tristeza que no me incluya", type: "A" },
      { text: "Está bien pero me gustaría ir a veces", type: "B" },
      { text: "Normal, cada quien sus amistades", type: "C" },
      { text: "Qué bueno, yo también haré algo por mi cuenta", type: "D" },
    ],
  },
  {
    id: 5,
    question: "En las noches, ¿qué prefieres?",
    options: [
      { text: "Hablar por teléfono hasta dormirnos", type: "A" },
      { text: "Un mensaje de buenas noches está bien", type: "B" },
      { text: "No es necesario hablar todas las noches", type: "C" },
      { text: "Cada quien duerme tranquilo, ya nos veremos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Durante el día laboral, ¿qué tan seguido te comunicas con tu pareja?",
    options: [
      { text: "Constantemente, todo el día", type: "A" },
      { text: "Varios mensajes durante el día", type: "B" },
      { text: "Uno que otro mensaje cuando hay tiempo", type: "C" },
      { text: "Casi no, cada quien en sus cosas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "¿Qué tanto sacrificarías tus hobbies por tiempo con tu pareja?",
    options: [
      { text: "Todo, mi pareja es mi prioridad", type: "A" },
      { text: "Algo, pero también necesito mis actividades", type: "B" },
      { text: "Poco, mis hobbies son importantes", type: "C" },
      { text: "Nada, no debería tener que sacrificarlos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Si no ves a tu pareja en un día...",
    options: [
      { text: "Lo extraño muchísimo, me afecta", type: "A" },
      { text: "Lo extraño pero está bien", type: "B" },
      { text: "Normal, mañana nos vemos", type: "C" },
      { text: "Ni lo noto tanto", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Vacaciones ideales serían...",
    options: [
      { text: "Solo nosotros dos, sin nadie más", type: "A" },
      { text: "Juntos pero con actividades separadas también", type: "B" },
      { text: "Viaje en grupo o con familia", type: "C" },
      { text: "A veces por separado está bien también", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Tu pareja tiene un hobby que consume mucho tiempo...",
    options: [
      { text: "Me gustaría que lo dejara por mí", type: "A" },
      { text: "Que lo haga pero también haga tiempo para mí", type: "B" },
      { text: "Está bien, es su pasión", type: "C" },
      { text: "Qué bueno, así yo también tengo mi tiempo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "¿Harían home office juntos si pudieran?",
    options: [
      { text: "Sí, sería genial estar todo el día juntos", type: "A" },
      { text: "Algunos días sí, otros mejor separados", type: "B" },
      { text: "Mejor separados, cada quien necesita concentrarse", type: "C" },
      { text: "No, mezclar trabajo y pareja no es bueno", type: "D" },
    ],
  },
  {
    id: 12,
    question: "El tiempo de calidad para ti significa...",
    options: [
      { text: "Estar juntos físicamente siempre", type: "A" },
      { text: "Momentos significativos aunque sean pocos", type: "B" },
      { text: "Actividades compartidas de vez en cuando", type: "C" },
      { text: "Respetarnos el espacio es lo más importante", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Muy Dependiente del Tiempo",
    emoji: "🔗",
    description: "Necesitas mucho tiempo con tu pareja para sentirte bien. La cercanía constante es tu zona de confort. Puedes ser muy demandante con el tiempo del otro.",
    traits: ["Dependiente", "Necesitado/a", "Intenso/a", "Cercano/a"],
    strengths: ["Tu pareja se siente muy querido/a", "Mucha conexión", "Prioridad clara"],
    weaknesses: ["Puedes asfixiar", "Dependencia emocional", "Celos por el tiempo del otro"],
    tips: ["El espacio también es amor", "Desarrolla tus propios intereses", "No dependas tanto de la presencia física"],
  },
  B: {
    type: "B",
    title: "Balance Saludable",
    emoji: "⚖️",
    description: "Tienes un balance sano entre tiempo juntos y tiempo separados. Valoras la calidad sobre la cantidad. Sabes que la independencia fortalece la relación.",
    traits: ["Equilibrado/a", "Maduro/a", "Independiente", "Conectado/a"],
    strengths: ["Relación sana", "Respetas el espacio del otro", "Tiempo de calidad"],
    weaknesses: ["A veces podrías parecer distante", "Tu pareja podría querer más tiempo"],
    tips: ["Tu equilibrio es saludable", "Sigue así", "Comunica tus necesidades"],
  },
  C: {
    type: "C",
    title: "Muy Independiente",
    emoji: "🦋",
    description: "Valoras mucho tu espacio e independencia. No necesitas tanto tiempo físico con tu pareja. Puedes parecer distante para parejas más necesitadas.",
    traits: ["Independiente", "Autónomo/a", "Distante", "Libre"],
    strengths: ["No eres demandante", "Tienes vida propia", "No asfixias"],
    weaknesses: ["Podrías descuidar la relación", "Tu pareja puede sentirse sola", "Falta de conexión"],
    tips: ["Asegúrate de conectar lo suficiente", "La independencia tiene límites", "Tu pareja necesita sentirse querida"],
  },
  D: {
    type: "D",
    title: "Demasiado Independiente",
    emoji: "🏃",
    description: "Tu independencia puede estar afectando la relación. Priorizas tu espacio tanto que tu pareja puede sentirse abandonada o poco importante.",
    traits: ["Muy independiente", "Desapegado/a", "Distante", "Solitario/a"],
    strengths: ["Muy autosuficiente", "No dependes de nadie", "Vida propia rica"],
    weaknesses: ["Tu pareja se siente sola", "Falta de intimidad", "Relación superficial"],
    tips: ["Una relación requiere tiempo", "No confundas independencia con abandono", "Evalúa si realmente quieres una pareja"],
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
