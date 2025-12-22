// Qual Estilo de Torcedor Você É?
// Descubra como você se comporta quando o assunto é futebol!

export const questions = [
  {
    id: 1,
    question: "Como você assiste aos jogos do seu time?",
    options: [
      { text: "No estádio, gritando até perder a voz", type: "A" },
      { text: "Em casa, analisando cada jogada", type: "B" },
      { text: "No bar com a galera, fazendo festa", type: "C" },
      { text: "Acompanho quando dá, sem neura", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você reage quando seu time perde?",
    options: [
      { text: "Fico arrasado(a) por dias", type: "A" },
      { text: "Analiso o que deu errado", type: "B" },
      { text: "Faço piada pra não chorar", type: "C" },
      { text: "Vida que segue, é só um jogo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz no dia de clássico?",
    options: [
      { text: "Me preparo como se fosse à guerra", type: "A" },
      { text: "Estudo as estatísticas e escalações", type: "B" },
      { text: "Junto a turma pra fazer zoeira", type: "C" },
      { text: "Assisto se der, sem pressão", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como é sua relação com o rival?",
    options: [
      { text: "Rivalidade é sagrada!", type: "A" },
      { text: "Respeito, mas torço contra sempre", type: "B" },
      { text: "Zoamos um ao outro na amizade", type: "C" },
      { text: "Tranquila, futebol não estraga amizade", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quantas camisas do time você tem?",
    options: [
      { text: "Várias! De todas as épocas", type: "A" },
      { text: "Algumas, as mais importantes", type: "B" },
      { text: "Uma ou duas, pra usar nos jogos", type: "C" },
      { text: "Nenhuma ou uma velha", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que você pensa sobre técnicos?",
    options: [
      { text: "Sou apaixonado(a) ou odeio, não tem meio termo", type: "A" },
      { text: "Avalio pelo trabalho tático", type: "B" },
      { text: "Enquanto ganhar, tá valendo", type: "C" },
      { text: "Não acompanho muito essas questões", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você comemora um título?",
    options: [
      { text: "Choro, pulo, grito, abraço desconhecidos", type: "A" },
      { text: "Comemoro feliz e relembro a campanha", type: "B" },
      { text: "Faço festa e zoeira com os amigos", type: "C" },
      { text: "Fico feliz, mas sem exagero", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você sabe sobre a história do seu time?",
    options: [
      { text: "Tudo! Cada título, cada jogador histórico", type: "A" },
      { text: "Bastante, gosto de conhecer", type: "B" },
      { text: "O básico, o suficiente pra zoar", type: "C" },
      { text: "Sei que é meu time e pronto", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você escolheu seu time?",
    options: [
      { text: "Tradição de família, sangue!", type: "A" },
      { text: "Me identifiquei com a história", type: "B" },
      { text: "Amigos me influenciaram", type: "C" },
      { text: "Nem lembro, sempre foi assim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você faz na concentração pré-jogo?",
    options: [
      { text: "Rituais e superstições", type: "A" },
      { text: "Vejo as prováveis escalações", type: "B" },
      { text: "Converso com os amigos sobre o jogo", type: "C" },
      { text: "Nada especial, é só um jogo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você lida com fase ruim do time?",
    options: [
      { text: "Sofro mas não abandono nunca!", type: "A" },
      { text: "Analiso o que precisa mudar", type: "B" },
      { text: "Faço piada pra não sofrer tanto", type: "C" },
      { text: "Acompanho menos até melhorar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual sua relação com o VAR?",
    options: [
      { text: "Roubam meu time sempre!", type: "A" },
      { text: "Necessário mas precisa melhorar", type: "B" },
      { text: "Só reclamo quando prejudica meu time", type: "C" },
      { text: "Tanto faz, faz parte do jogo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Torcedor Fanático",
    emoji: "🔥",
    description: "Você é o torcedor fanático! Vive e respira futebol, conhece tudo sobre seu time e sofre/comemora intensamente. Para você, futebol não é esporte, é religião!",
    traits: ["Apaixonado(a)", "Intenso(a)", "Fiel", "Conhecedor(a)"],
    strengths: ["Paixão inabalável", "Conhecimento profundo", "Lealdade total", "Energia nos jogos"],
    weaknesses: ["Sofre demais", "Pode ser radical", "Leva muito a sério"],
    tips: ["Cuide da saúde emocional", "Futebol é entretenimento", "Respeite opiniões diferentes"],
  },
  B: {
    type: "B",
    title: "Torcedor Analista",
    emoji: "📊",
    description: "Você é o torcedor analista! Acompanha estatísticas, táticas e formações. Sua paixão é temperada com conhecimento técnico e visão crítica do jogo!",
    traits: ["Analítico(a)", "Conhecedor(a)", "Crítico(a)", "Equilibrado(a)"],
    strengths: ["Visão tática", "Conhecimento técnico", "Análise equilibrada", "Opinião fundamentada"],
    weaknesses: ["Pode ser chato(a)", "Falta emoção às vezes", "Crítico demais"],
    tips: ["Deixe a emoção fluir", "Nem tudo é tática", "Divirta-se mais"],
  },
  C: {
    type: "C",
    title: "Torcedor Social",
    emoji: "🍺",
    description: "Você é o torcedor social! Curte o futebol como desculpa para reunir os amigos, fazer festa e zoar. O importante é a diversão e a companhia!",
    traits: ["Social", "Bem-humorado(a)", "Descontraído(a)", "Festeiro(a)"],
    strengths: ["Fazer amigos", "Bom humor", "Não sofrer demais", "Curtir o momento"],
    weaknesses: ["Conhecimento superficial", "Pode irritar fanáticos", "Às vezes disperso(a)"],
    tips: ["Aprofunde seu conhecimento", "Leve mais a sério quando preciso", "Valorize a história do time"],
  },
  D: {
    type: "D",
    title: "Torcedor Casual",
    emoji: "📺",
    description: "Você é o torcedor casual! Tem seu time mas não vive por ele. Acompanha quando dá, torce mas não sofre. Futebol é diversão, não drama!",
    traits: ["Tranquilo(a)", "Equilibrado(a)", "Desapegado(a)", "Saudável"],
    strengths: ["Equilíbrio emocional", "Não sofrer por jogo", "Vida além do futebol", "Paz interior"],
    weaknesses: ["Pode parecer desinteressado(a)", "Falta paixão", "Não entende os fanáticos"],
    tips: ["Se permita mais emoção", "Vá a um jogo no estádio", "A paixão pode ser boa"],
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
