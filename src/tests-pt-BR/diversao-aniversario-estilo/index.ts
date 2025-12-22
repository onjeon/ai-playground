// Qual Seu Estilo de Aniversário?
// Descubra como você celebra seu dia!

export const questions = [
  {
    id: 1,
    question: "Como você prefere comemorar seu aniversário?",
    options: [
      { text: "Festão com muita gente", type: "A" },
      { text: "Jantar especial com pessoas próximas", type: "B" },
      { text: "Viagem ou experiência diferente", type: "C" },
      { text: "Quieto em casa, dia normal", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você gosta de receber parabéns?",
    options: [
      { text: "Amo! Quanto mais, melhor", type: "A" },
      { text: "Gosto, fico feliz", type: "B" },
      { text: "Aceito bem, mas não preciso de muitos", type: "C" },
      { text: "Fico sem graça, prefiro que esqueçam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você espera de presente?",
    options: [
      { text: "Muitos presentes, amo ganhar coisas", type: "A" },
      { text: "Algo significativo de pessoas queridas", type: "B" },
      { text: "Prefiro experiências a objetos", type: "C" },
      { text: "Não ligo muito, dinheiro resolve", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você posta nas redes no seu aniversário?",
    options: [
      { text: "Sim! Stories, posts, agradeço a todos", type: "A" },
      { text: "Um post simples de agradecimento", type: "B" },
      { text: "Talvez um story discreto", type: "C" },
      { text: "Não, nem curto muito redes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você se sente ficando mais velho?",
    options: [
      { text: "Amo! Mais um ano de vida pra celebrar", type: "A" },
      { text: "Normal, faz parte", type: "B" },
      { text: "Um pouco reflexivo sobre a vida", type: "C" },
      { text: "Prefiro não pensar muito nisso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você organiza sua própria festa?",
    options: [
      { text: "Sim, sou o(a) anfitrião(ã) perfeito(a)", type: "A" },
      { text: "Organizo algo simples", type: "B" },
      { text: "Deixo os outros organizarem se quiserem", type: "C" },
      { text: "Não faço nada, é só mais um dia", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que não pode faltar no seu aniversário?",
    options: [
      { text: "Muita gente, música e festa", type: "A" },
      { text: "Bolo e pessoas queridas", type: "B" },
      { text: "Fazer algo especial e diferente", type: "C" },
      { text: "Paz e sossego", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você cobra presença dos amigos?",
    options: [
      { text: "Sim! Quem não for, eu lembro", type: "A" },
      { text: "Convido mas entendo se não puderem", type: "B" },
      { text: "Não cobro, quem quiser aparece", type: "C" },
      { text: "Nem convido, evito expectativas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual seu bolo de aniversário ideal?",
    options: [
      { text: "Enorme, decorado, impressionante", type: "A" },
      { text: "Gostoso, caseiro, com carinho", type: "B" },
      { text: "Algo diferente, sabor exótico", type: "C" },
      { text: "Qualquer um tá bom, ou nem precisa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você reage a festas surpresa?",
    options: [
      { text: "Amo! Sonho com isso", type: "A" },
      { text: "Acho fofo, fico feliz", type: "B" },
      { text: "Gosto mas fico sem graça", type: "C" },
      { text: "Odeio, detesto surpresas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você faz lista de desejos de presente?",
    options: [
      { text: "Sim, e compartilho com todo mundo", type: "A" },
      { text: "Tenho algumas ideias se perguntarem", type: "B" },
      { text: "Não, prefiro surpresas", type: "C" },
      { text: "Não preciso de nada, sério", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no aniversário?",
    options: [
      { text: "'Hoje é MEU dia!'", type: "A" },
      { text: "'Mais um ano de bênçãos'", type: "B" },
      { text: "'Vou fazer algo especial'", type: "C" },
      { text: "'É só mais um dia normal'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Rei/Rainha do Aniversário",
    emoji: "👑",
    description: "Você é Rei/Rainha do Aniversário! Seu dia é sagrado e você faz questão de celebrar com pompa. Festa grande, muita gente, é seu momento de brilhar!",
    traits: ["Festeiro(a)", "Extrovertido(a)", "Centro das atenções", "Celebrador(a)"],
    strengths: ["Sabe celebrar a vida", "Reúne pessoas", "Energia contagiante"],
    weaknesses: ["Expectativas altas", "Pode se frustrar", "Demanda atenção"],
    tips: ["Aproveite seu dia ao máximo", "Nem sempre será perfeito", "A intenção conta"],
  },
  B: {
    type: "B",
    title: "Celebrador Afetuoso",
    emoji: "🎂",
    description: "Você é o Celebrador Afetuoso! Valoriza as pessoas queridas mais que a festa em si. Um bolo, algumas pessoas especiais e muito carinho é tudo que precisa!",
    traits: ["Afetuoso(a)", "Valoriza relacionamentos", "Simples", "Grato(a)"],
    strengths: ["Foco no que importa", "Gratidão", "Celebra com significado"],
    weaknesses: ["Pode parecer sem graça pros outros", "Poucas fotos", "Discreto demais"],
    tips: ["Seu jeito é perfeito", "Qualidade > quantidade", "Continue assim"],
  },
  C: {
    type: "C",
    title: "Aventureiro de Aniversário",
    emoji: "✈️",
    description: "Você é o Aventureiro de Aniversário! Prefere experiências a festas tradicionais. Viajar, fazer algo diferente, criar memórias únicas é sua forma de celebrar!",
    traits: ["Aventureiro(a)", "Experiencial", "Diferente", "Criativo(a)"],
    strengths: ["Memórias únicas", "Não segue padrões", "Aproveita de verdade"],
    weaknesses: ["Pode parecer distante", "Nem sempre tem companhia", "Caro às vezes"],
    tips: ["Suas experiências são valiosas", "Convide alguém especial", "Registre os momentos"],
  },
  D: {
    type: "D",
    title: "Anti-Aniversário",
    emoji: "😶",
    description: "Você é o Anti-Aniversário! Prefere que a data passe despercebida. Não é que você não goste de você, só não curte a pressão de celebrar. E tá tudo bem!",
    traits: ["Discreto(a)", "Introvertido(a)", "Desapegado(a)", "Tranquilo(a)"],
    strengths: ["Sem expectativas", "Sem frustração", "Paz interior", "Autêntico"],
    weaknesses: ["Pode parecer triste", "As pessoas querem celebrar você", "Foge de atenção"],
    tips: ["Tá tudo bem ser assim", "Aceite o carinho dos outros", "Não precisa de festa"],
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
