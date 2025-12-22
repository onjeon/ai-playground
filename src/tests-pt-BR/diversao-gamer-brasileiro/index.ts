// Que Tipo de Gamer Brasileiro Você É?
// Descubra seu perfil de jogador!

export const questions = [
  {
    id: 1,
    question: "Quanto tempo você joga por dia?",
    options: [
      { text: "Várias horas, é minha vida", type: "A" },
      { text: "1-2 horas, com moderação", type: "B" },
      { text: "De vez em quando, casual", type: "C" },
      { text: "Só quando os amigos chamam", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual tipo de jogo você prefere?",
    options: [
      { text: "Competitivos, ranqueados, e-sports", type: "A" },
      { text: "Single-player com boa história", type: "B" },
      { text: "Mobile, jogos casuais", type: "C" },
      { text: "Multiplayer com amigos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage quando perde?",
    options: [
      { text: "Fico muito bravo, xingo tudo", type: "A" },
      { text: "Analiso o que errei pra melhorar", type: "B" },
      { text: "Tanto faz, é só um jogo", type: "C" },
      { text: "Rio junto com os amigos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seu setup de jogo?",
    options: [
      { text: "PC gamer completo ou console top", type: "A" },
      { text: "Console ou PC bom", type: "B" },
      { text: "Celular ou computador básico", type: "C" },
      { text: "O que tiver, compartilho com amigos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você assiste streams/e-sports?",
    options: [
      { text: "Sim! Acompanho campeonatos e streamers", type: "A" },
      { text: "De vez em quando", type: "B" },
      { text: "Raramente ou nunca", type: "C" },
      { text: "Só quando é com amigos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é sua comunicação no jogo?",
    options: [
      { text: "Mic aberto, chamo estratégias", type: "A" },
      { text: "Falo quando precisa", type: "B" },
      { text: "Mudo, só jogo", type: "C" },
      { text: "Só com amigos, zoeira total", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você gasta dinheiro em jogos?",
    options: [
      { text: "Sim, skins, battle pass, tudo", type: "A" },
      { text: "Só nos jogos que vale a pena", type: "B" },
      { text: "Não, só jogo grátis", type: "C" },
      { text: "Rachamos os custos entre amigos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você joga pra quê?",
    options: [
      { text: "Pra ser o melhor, subir rank", type: "A" },
      { text: "Pra relaxar e me divertir", type: "B" },
      { text: "Pra passar o tempo", type: "C" },
      { text: "Pra ficar com os amigos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você conhece novos jogos?",
    options: [
      { text: "Acompanho lançamentos e streamers", type: "A" },
      { text: "Reviews e recomendações", type: "B" },
      { text: "Anúncios ou o que aparece", type: "C" },
      { text: "Amigos indicam", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se considera viciado em jogos?",
    options: [
      { text: "Talvez... mas não quero parar", type: "A" },
      { text: "Não, tenho controle", type: "B" },
      { text: "Definitivamente não, jogo pouco", type: "C" },
      { text: "É mais sobre os amigos que o jogo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você já virou a noite jogando?",
    options: [
      { text: "Muitas vezes!", type: "A" },
      { text: "Algumas vezes", type: "B" },
      { text: "Nunca, sono é sagrado", type: "C" },
      { text: "Só quando é com a galera", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como gamer?",
    options: [
      { text: "'GG EZ' ou 'Vai pro competitivo!'", type: "A" },
      { text: "'Bom jogo, pessoal'", type: "B" },
      { text: "'É só um jogo'", type: "C" },
      { text: "'Bora jogar junto!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gamer Hardcore/Competitivo",
    emoji: "🎮",
    description: "Você é o Gamer Hardcore! Ranqueado, competitivo e sempre buscando melhorar. Jogar é sério pra você e você quer ser o melhor!",
    traits: ["Competitivo(a)", "Dedicado(a)", "Intenso(a)", "Focado(a)"],
    strengths: ["Habilidade alta", "Conhecimento profundo", "Determinação", "Comunidade"],
    weaknesses: ["Pode ser tóxico(a)", "Vício potencial", "Estresse alto"],
    tips: ["Cuide da saúde", "É só um jogo no fim das contas", "Divirta-se também"],
  },
  B: {
    type: "B",
    title: "Gamer Equilibrado",
    emoji: "⚖️",
    description: "Você é o Gamer Equilibrado! Joga pra se divertir mas com moderação. Você encontrou o ponto perfeito entre hobby e vida real!",
    traits: ["Equilibrado(a)", "Saudável", "Diversificado(a)", "Consciente"],
    strengths: ["Vida equilibrada", "Sem vício", "Aproveita sem exagerar", "Variedade de jogos"],
    weaknesses: ["Pode não ser top em nada", "Às vezes fica pra trás dos amigos", "Menos tempo pra jogar"],
    tips: ["Seu equilíbrio é perfeito", "Continue assim", "Qualidade sobre quantidade"],
  },
  C: {
    type: "C",
    title: "Gamer Casual",
    emoji: "📱",
    description: "Você é o Gamer Casual! Joga pra passar o tempo, sem compromisso. Jogos são diversão, não obrigação, e você tem outras prioridades!",
    traits: ["Casual", "Desapegado(a)", "Prático(a)", "Diversificado(a)"],
    strengths: ["Vida fora dos jogos", "Sem estresse", "Flexibilidade", "Outras atividades"],
    weaknesses: ["Não entende referências", "Skill mais baixo", "Perde eventos de jogos"],
    tips: ["Tá tudo bem ser casual", "Nem todo mundo precisa ser hardcore", "Aproveite do seu jeito"],
  },
  D: {
    type: "D",
    title: "Gamer Social",
    emoji: "👥",
    description: "Você é o Gamer Social! Pra você, o jogo é desculpa pra estar com os amigos. O importante não é ganhar, é a zoeira e a companhia!",
    traits: ["Social", "Divertido(a)", "Leal", "Descontraído(a)"],
    strengths: ["Amizades fortes", "Diversão garantida", "Sem estresse", "Memórias boas"],
    weaknesses: ["Depende dos amigos pra jogar", "Skill variável", "Pode não curtir solo"],
    tips: ["Tente jogar sozinho às vezes", "Expanda os jogos", "Amizade é o melhor loot"],
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
