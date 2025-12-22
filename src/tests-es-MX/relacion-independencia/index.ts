// Test de Independencia en Pareja

export const questions = [
  {
    id: 1,
    text: "¿Con qué frecuencia haces actividades solo/a sin tu pareja?",
    options: [
      { text: "Seguido, mantengo mi vida independiente", type: "A" },
      { text: "A veces, cuando surge algo", type: "B" },
      { text: "Poco, prefiero hacer todo juntos", type: "C" },
      { text: "Casi nunca, no me gusta estar sin él/ella", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Tienes amigos propios que tu pareja no conoce bien?",
    options: [
      { text: "Sí, mantengo mis círculos separados", type: "A" },
      { text: "Algunos, aunque la mayoría son compartidos", type: "B" },
      { text: "No muchos, todos nuestros amigos son de ambos", type: "C" },
      { text: "No, todos mis amigos son nuestros amigos", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Cómo manejan las decisiones financieras personales?",
    options: [
      { text: "Cada quien maneja su dinero como quiere", type: "A" },
      { text: "Consultamos lo grande, lo chico es personal", type: "B" },
      { text: "Todo se decide juntos", type: "C" },
      { text: "Uno maneja todo el dinero", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Qué haces si tu pareja no quiere ir a un evento que te interesa?",
    options: [
      { text: "Voy solo/a o con amigos, sin problema", type: "A" },
      { text: "Le insisto un poco y si no, voy solo/a", type: "B" },
      { text: "Prefiero no ir si él/ella no va", type: "C" },
      { text: "Me molesto porque deberíamos ir juntos", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Tienes hobbies o pasatiempos que tu pareja no comparte?",
    options: [
      { text: "Sí, varios, es importante tener lo mío", type: "A" },
      { text: "Uno o dos cosas que hago por mi cuenta", type: "B" },
      { text: "Intentamos compartir todos nuestros hobbies", type: "C" },
      { text: "No, todo lo hacemos juntos", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo te sientes cuando tu pareja sale sin ti?",
    options: [
      { text: "Bien, aprovecho para hacer mis cosas", type: "A" },
      { text: "Normal, confío en él/ella", type: "B" },
      { text: "Un poco incómodo/a pero lo acepto", type: "C" },
      { text: "No me gusta, prefiero que vayamos juntos", type: "D" },
    ],
  },
  {
    id: 7,
    text: "¿Tomas decisiones importantes sobre tu vida sin consultar a tu pareja?",
    options: [
      { text: "Algunas, especialmente las que solo me afectan a mí", type: "A" },
      { text: "Las comento pero la decisión final es mía", type: "B" },
      { text: "Casi siempre consulto primero", type: "C" },
      { text: "Nunca, todo lo decidimos juntos", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Mantienes contacto con tu familia sin que tu pareja participe?",
    options: [
      { text: "Sí, tengo relación independiente con mi familia", type: "A" },
      { text: "A veces, aunque generalmente vamos juntos", type: "B" },
      { text: "Casi siempre incluyo a mi pareja", type: "C" },
      { text: "Mi pareja siempre está presente", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Cómo manejan los viajes? ¿Viajan separados a veces?",
    options: [
      { text: "Sí, cada quien hace sus viajes también", type: "A" },
      { text: "Ocasionalmente, por trabajo o con amigos", type: "B" },
      { text: "Raramente, preferimos viajar juntos", type: "C" },
      { text: "Nunca, todos los viajes son de pareja", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Sientes que has perdido parte de tu identidad en la relación?",
    options: [
      { text: "No, sigo siendo yo mismo/a", type: "A" },
      { text: "Un poco, pero es normal en pareja", type: "B" },
      { text: "Sí, a veces me cuesta reconocerme", type: "C" },
      { text: "Somos uno solo, no lo veo como pérdida", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué opina tu pareja de tu independencia?",
    options: [
      { text: "La respeta y valora, tiene la suya también", type: "A" },
      { text: "La acepta aunque a veces quisiera más tiempo juntos", type: "B" },
      { text: "A veces le molesta que haga cosas solo/a", type: "C" },
      { text: "Prefiere que hagamos todo juntos", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, la independencia en pareja significa:",
    options: [
      { text: "Esencial para una relación sana", type: "A" },
      { text: "Importante pero con balance", type: "B" },
      { text: "Algo que puede generar distancia", type: "C" },
      { text: "No es prioridad, lo nuestro es estar juntos", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "🦅 Altamente Independiente",
    description: "Mantienes tu identidad y vida personal muy activa dentro de la relación. Valoras tu espacio, tus amigos y tus actividades propias. Esto es muy saludable siempre que tu pareja se sienta también importante.",
    traits: ["Independiente", "Seguro/a", "Autónomo/a", "Equilibrado/a"],
    advice: "Excelente nivel de independencia. Solo asegúrate de que tu pareja no se sienta excluida.",
  },
  B: {
    title: "⚖️ Independencia Equilibrada",
    description: "Tienes un buen balance entre tu vida individual y la de pareja. Haces cosas por tu cuenta pero también priorizas el tiempo juntos. Este equilibrio es muy saludable para relaciones duraderas.",
    traits: ["Balanceado/a", "Maduro/a", "Flexible", "Comunicativo/a"],
    advice: "¡Tienes el balance perfecto! Sigue cultivando tanto tu individualidad como tu relación.",
  },
  C: {
    title: "🤝 Interdependiente",
    description: "Prefieres hacer la mayoría de las cosas en pareja. Aunque valoras la relación, podrías estar sacrificando algo de tu individualidad. Un poco más de independencia podría ser beneficioso.",
    traits: ["Colaborativo/a", "Cercano/a", "Dependiente", "Unido/a"],
    advice: "Intenta cultivar algunos intereses propios. Esto enriquecerá tu relación y tu bienestar personal.",
  },
  D: {
    title: "💞 Fusión Total",
    description: "Tu vida está muy entrelazada con la de tu pareja. Casi todo lo hacen juntos y tomas pocas decisiones solo/a. Esto puede ser reconfortante pero también riesgoso para tu identidad.",
    traits: ["Fusionado/a", "Dependiente", "Inseparable", "Necesitado/a"],
    advice: "Es importante mantener tu propia identidad. Empieza con pequeñas actividades solo/a.",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
