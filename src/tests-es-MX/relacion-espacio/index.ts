// Espacio Personal en Pareja - ¿Cómo manejas el espacio personal?
// Test de Espacio Personal para México

export const questions = [
  {
    id: 1,
    question: "Tu pareja te dice que necesita un día solo/a...",
    options: [
      { text: "Lo respeto completamente, todos lo necesitamos", type: "A" },
      { text: "Lo entiendo aunque me da un poco de cosa", type: "B" },
      { text: "Me preocupa, ¿por qué necesita estar sin mí?", type: "C" },
      { text: "Me molesta, deberíamos estar juntos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "¿Cuánto espacio físico necesitas en tu casa con tu pareja?",
    options: [
      { text: "Cada quien su rincón o espacio personal", type: "A" },
      { text: "Comparto todo pero a veces necesito estar solo/a", type: "B" },
      { text: "Todo lo hacemos juntos en los mismos espacios", type: "C" },
      { text: "No necesito espacio separado del de mi pareja", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Tu pareja tiene un hobby que practica solo/a...",
    options: [
      { text: "Qué bueno, es importante tener cosas propias", type: "A" },
      { text: "Está bien pero me gustaría participar a veces", type: "B" },
      { text: "Preferiría que hiciéramos actividades juntos", type: "C" },
      { text: "Deberíamos compartir los mismos hobbies", type: "D" },
    ],
  },
  {
    id: 4,
    question: "En cuanto a las amistades individuales...",
    options: [
      { text: "Cada quien debe tener sus propios amigos", type: "A" },
      { text: "Tenemos amigos en común y propios", type: "B" },
      { text: "Prefiero que todos nuestros amigos sean compartidos", type: "C" },
      { text: "No me gustan las amistades que no incluyen al otro", type: "D" },
    ],
  },
  {
    id: 5,
    question: "El celular de tu pareja...",
    options: [
      { text: "Es privado, no tengo por qué verlo", type: "A" },
      { text: "Podría verlo pero no lo hago", type: "B" },
      { text: "Me gustaría tener acceso", type: "C" },
      { text: "No deberíamos tener secretos, quiero verlo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Tu pareja no te cuenta todo lo que hace...",
    options: [
      { text: "Normal, no tiene que reportarme todo", type: "A" },
      { text: "Me gustaría saber más pero lo respeto", type: "B" },
      { text: "Me incomoda no saber qué hace", type: "C" },
      { text: "Debería contarme todo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "En las redes sociales de tu pareja...",
    options: [
      { text: "No me meto, es su espacio digital", type: "A" },
      { text: "A veces checo pero sin obsesionarme", type: "B" },
      { text: "Reviso seguido para saber qué publica", type: "C" },
      { text: "Necesito saber todo lo que hace en redes", type: "D" },
    ],
  },
  {
    id: 8,
    question: "¿Compartirían cuenta bancaria?",
    options: [
      { text: "Cada quien la suya y una en común para gastos", type: "A" },
      { text: "Probablemente sí cuando estemos más establecidos", type: "B" },
      { text: "Sí, todo debe ser compartido", type: "C" },
      { text: "Por supuesto, sin secretos financieros", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Tu pareja cierra la puerta del baño...",
    options: [
      { text: "Normal, todos necesitamos privacidad", type: "A" },
      { text: "Está bien aunque en confianza no pasa nada", type: "B" },
      { text: "¿Por qué necesita cerrarla?", type: "C" },
      { text: "No deberíamos tener esa separación", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Las contraseñas de tu pareja...",
    options: [
      { text: "Son suyas, no las necesito", type: "A" },
      { text: "Las sé pero no las uso", type: "B" },
      { text: "Debería conocerlas todas", type: "C" },
      { text: "Las necesito para sentirme tranquilo/a", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Un viaje solo/a sin tu pareja...",
    options: [
      { text: "Sería genial, me haría bien", type: "A" },
      { text: "Podría hacerlo si fuera necesario", type: "B" },
      { text: "No me gustaría mucho", type: "C" },
      { text: "No podría disfrutarlo sin él/ella", type: "D" },
    ],
  },
  {
    id: 12,
    question: "El espacio personal en pareja...",
    options: [
      { text: "Es fundamental para una relación sana", type: "A" },
      { text: "Es importante pero también la cercanía", type: "B" },
      { text: "No es tan necesario si hay amor", type: "C" },
      { text: "Si te aman no necesitas espacio", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Espacio Saludable",
    emoji: "🌿",
    description: "Entiendes perfectamente la importancia del espacio personal. Respetas la individualidad de tu pareja y también cuidas la tuya. Una visión muy madura de las relaciones.",
    traits: ["Respetuoso/a", "Maduro/a", "Independiente", "Equilibrado/a"],
    strengths: ["Relación sin asfixia", "Respeto mutuo", "Individualidad preservada"],
    weaknesses: ["Podrías parecer distante", "Tu pareja podría querer más cercanía"],
    tips: ["Tu visión es muy sana", "Asegúrate de que tu pareja esté cómoda", "El balance es clave"],
  },
  B: {
    type: "B",
    title: "Balance de Espacio",
    emoji: "⚖️",
    description: "Tienes un balance entre dar espacio y necesitar cercanía. A veces te cuesta pero entiendes la importancia de la individualidad en la pareja.",
    traits: ["Equilibrado/a", "Adaptable", "Consciente", "En proceso"],
    strengths: ["Buscas el balance", "Respetas aunque te cueste", "Comunicación abierta"],
    weaknesses: ["A veces dudas", "Inseguridades ocasionales"],
    tips: ["Confía más en tu pareja", "El espacio fortalece", "Sigue trabajando en ello"],
  },
  C: {
    type: "C",
    title: "Poco Espacio",
    emoji: "📎",
    description: "Te cuesta dar y aceptar espacio personal. Prefieres la cercanía constante y te incomoda cuando tu pareja busca su espacio. Esto puede generar tensión.",
    traits: ["Dependiente", "Ansioso/a", "Controlador/a ligero", "Necesitado/a"],
    strengths: ["Te importa mucho tu pareja", "Eres muy presente", "Dedicado/a"],
    weaknesses: ["Puedes asfixiar", "Genera ansiedad", "Tu pareja necesita respirar"],
    tips: ["El espacio no es abandono", "Trabaja en tu seguridad", "Respira y confía"],
  },
  D: {
    type: "D",
    title: "Sin Espacio",
    emoji: "🔐",
    description: "No crees en el espacio personal en pareja. Quieres saberlo todo y estar en todo. Esto puede ser señal de control y puede ser tóxico para la relación.",
    traits: ["Muy controlador/a", "Posesivo/a", "Inseguro/a", "Asfixiante"],
    strengths: ["Intensidad en el amor", "Compromiso total"],
    weaknesses: ["Relación tóxica", "Tu pareja no puede respirar", "Control excesivo"],
    tips: ["Esto no es sano", "Busca ayuda profesional", "El amor no es control"],
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
