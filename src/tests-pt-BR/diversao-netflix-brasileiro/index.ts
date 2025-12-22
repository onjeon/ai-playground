// Como Você Assiste Netflix?
// Descubra seu perfil de maratonista de streaming!

export const questions = [
  {
    id: 1,
    question: "Quantos episódios você assiste de uma vez?",
    options: [
      { text: "A série inteira! Maratona até o fim", type: "A" },
      { text: "2 ou 3, com moderação", type: "B" },
      { text: "1 por dia, gosto de saborear", type: "C" },
      { text: "Depende, às vezes 10, às vezes 1", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você escolhe o que assistir?",
    options: [
      { text: "O que está bombando, quero participar das conversas", type: "A" },
      { text: "Pelo gênero ou recomendações", type: "B" },
      { text: "Pesquiso muito antes de começar", type: "C" },
      { text: "Rolo a tela até algo me chamar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você pula a intro das séries?",
    options: [
      { text: "Sempre! Quero logo a ação", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Nunca, faz parte da experiência", type: "C" },
      { text: "Depende da intro", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você faz enquanto assiste?",
    options: [
      { text: "Focado(a) 100% na tela", type: "A" },
      { text: "Às vezes mexo no celular", type: "B" },
      { text: "Faço anotações ou pesquiso sobre", type: "C" },
      { text: "Como, mexo no cel, multitarefa total", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com spoilers?",
    options: [
      { text: "ODEIO! Por isso assisto rápido", type: "A" },
      { text: "Tento evitar mas não é o fim do mundo", type: "B" },
      { text: "Às vezes leio spoiler de propósito", type: "C" },
      { text: "Nem ligo muito", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quantos perfis você tem/usa?",
    options: [
      { text: "Vários! Um pra cada humor", type: "A" },
      { text: "Só o meu, organizado", type: "B" },
      { text: "O principal da conta", type: "C" },
      { text: "Uso qualquer um que aparecer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que você faz quando a série acaba?",
    options: [
      { text: "Procuro outra imediatamente", type: "A" },
      { text: "Descanso um pouco e começo outra", type: "B" },
      { text: "Fico pensando sobre por dias", type: "C" },
      { text: "Nem lembro direito, já fui pra outra", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você reassiste séries?",
    options: [
      { text: "Não! Muita coisa nova pra ver", type: "A" },
      { text: "As favoritas, sim", type: "B" },
      { text: "Muitas vezes, adoro rever", type: "C" },
      { text: "Às vezes, quando não sei o que ver", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você lê descrições e reviews?",
    options: [
      { text: "Não, confio no hype", type: "A" },
      { text: "Sim, antes de começar", type: "B" },
      { text: "Sim, e pesquiso sobre elenco e produção", type: "C" },
      { text: "Raramente, vou pelo feeling", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seu gênero favorito?",
    options: [
      { text: "O que está em alta no momento", type: "A" },
      { text: "Tenho preferências claras", type: "B" },
      { text: "Documentários ou coisas cult", type: "C" },
      { text: "Qualquer coisa leve e divertida", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você lida com séries ruins?",
    options: [
      { text: "Paro e vou pra outra", type: "A" },
      { text: "Dou mais alguns episódios de chance", type: "B" },
      { text: "Termino mesmo assim", type: "C" },
      { text: "Durmo no meio e esqueço", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Você compartilha conta?",
    options: [
      { text: "Sim, e reclamo quando alguém muda minhas coisas", type: "A" },
      { text: "Sim, cada um no seu perfil", type: "B" },
      { text: "Não, tenho minha própria", type: "C" },
      { text: "Uso a de alguém", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Maratonista Hardcore",
    emoji: "📺",
    description: "Você é o Maratonista Hardcore! Quando começa uma série, não para até acabar. Noites viradas e finais de semana inteiros dedicados a streaming. Você vive na frente da tela!",
    traits: ["Intenso(a)", "Dedicado(a)", "Rápido(a)", "Conectado(a)"],
    strengths: ["Não leva spoiler", "Sempre por dentro", "Pode participar de conversas", "Experiência imersiva"],
    weaknesses: ["Sono irregular", "Vida social comprometida", "Cansa rápido de séries"],
    tips: ["Durma mais", "Vida real também existe", "Às vezes pausar é bom"],
  },
  B: {
    type: "B",
    title: "Espectador Equilibrado",
    emoji: "⚖️",
    description: "Você é o Equilibrado! Assiste com moderação, sabe parar e tem outras atividades além do streaming. Você aproveita sem deixar dominar sua vida!",
    traits: ["Equilibrado(a)", "Consciente", "Organizado(a)", "Saudável"],
    strengths: ["Vida equilibrada", "Aproveita sem exagerar", "Sono regular", "Outras atividades"],
    weaknesses: ["Pode levar spoiler", "Demora pra terminar séries", "Às vezes perde o hype"],
    tips: ["Seu ritmo é saudável", "Ignore a pressão de maratonar", "Continue assim"],
  },
  C: {
    type: "C",
    title: "Cinéfilo/Seriéfilo",
    emoji: "🎬",
    description: "Você é o Cinéfilo! Não só assiste, mas aprecia. Pesquisa, analisa, discute. Pra você, streaming é arte e cultura, não só entretenimento!",
    traits: ["Analítico(a)", "Culto(a)", "Criterioso(a)", "Profundo(a)"],
    strengths: ["Conhecimento cinematográfico", "Apreciação profunda", "Bom gosto", "Conversas interessantes"],
    weaknesses: ["Pode ser chato(a) com séries populares", "Demora pra escolher", "Muito crítico(a)"],
    tips: ["Nem tudo precisa ser arte", "Diversão leve também vale", "Relaxe às vezes"],
  },
  D: {
    type: "D",
    title: "Espectador Casual",
    emoji: "😴",
    description: "Você é o Casual! Streaming é pano de fundo, distração leve. Não se compromete, assiste o que vier e às vezes dorme no meio. E está tudo bem!",
    traits: ["Casual", "Relaxado(a)", "Desapegado(a)", "Flexível"],
    strengths: ["Não se estressa", "Usa como relaxamento", "Não perde tempo escolhendo", "Vida lá fora"],
    weaknesses: ["Nunca termina nada", "Não acompanha conversas", "Perde tramas"],
    tips: ["Tente terminar pelo menos uma série", "Algumas valem a pena de verdade", "Foque um pouco mais"],
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
