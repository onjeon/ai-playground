// Sua Habilidade de Networking
// Descubra como você constrói sua rede de contatos profissionais!

export const questions = [
  {
    id: 1,
    question: "Como você se sente em eventos de networking?",
    options: [
      { text: "Adoro! Saio de lá com 20 contatos novos", type: "A" },
      { text: "Gosto, mas prefiro conversas mais profundas", type: "B" },
      { text: "Vou por obrigação, é desconfortável", type: "C" },
      { text: "Evito ao máximo, prefiro outras formas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando conhece alguém interessante profissionalmente, você:",
    options: [
      { text: "Troco contatos e faço follow-up no mesmo dia", type: "A" },
      { text: "Conecto no LinkedIn com mensagem personalizada", type: "B" },
      { text: "Espero que a pessoa me procure", type: "C" },
      { text: "Raramente faço follow-up", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você mantém sua rede de contatos ativa?",
    options: [
      { text: "Organizo encontros e conecte pessoas", type: "A" },
      { text: "Mando mensagens e conteúdos relevantes", type: "B" },
      { text: "Interajo quando preciso de algo", type: "C" },
      { text: "Não tenho estratégia de manutenção", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua abordagem ao pedir ajuda para a rede?",
    options: [
      { text: "Natural, sempre ajudo e peço ajuda", type: "A" },
      { text: "Só peço após ter oferecido algo antes", type: "B" },
      { text: "Tenho vergonha, mas peço quando preciso", type: "C" },
      { text: "Evito pedir, prefiro me virar sozinho", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quantos contatos profissionais você fez no último mês?",
    options: [
      { text: "Mais de 10 novos contatos", type: "A" },
      { text: "Entre 3 e 10 contatos", type: "B" },
      { text: "1 ou 2 contatos", type: "C" },
      { text: "Nenhum novo contato", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se apresenta profissionalmente?",
    options: [
      { text: "Tenho elevator pitch ensaiado e cartão sempre", type: "A" },
      { text: "Me apresento bem, adapto ao contexto", type: "B" },
      { text: "Falo de forma básica sobre o que faço", type: "C" },
      { text: "Tenho dificuldade em me apresentar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua presença no LinkedIn?",
    options: [
      { text: "Muito ativo, posto e interajo diariamente", type: "A" },
      { text: "Ativo, posto regularmente e comento", type: "B" },
      { text: "Tenho perfil, mas uso pouco", type: "C" },
      { text: "Perfil abandonado ou inexistente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando alguém da sua rede consegue algo, você:",
    options: [
      { text: "Parabenizo publicamente e compartilho", type: "A" },
      { text: "Mando mensagem pessoal de parabéns", type: "B" },
      { text: "Curto a publicação", type: "C" },
      { text: "Nem fico sabendo normalmente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você conecta pessoas da sua rede?",
    options: [
      { text: "Frequentemente, adoro fazer pontes", type: "A" },
      { text: "Quando vejo uma oportunidade clara", type: "B" },
      { text: "Raramente, só se pedirem", type: "C" },
      { text: "Nunca pensei em fazer isso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Em uma conferência profissional, você:",
    options: [
      { text: "Falo com todos, palestrantes e participantes", type: "A" },
      { text: "Escolho algumas pessoas para conversar bem", type: "B" },
      { text: "Fico mais no meu canto, observando", type: "C" },
      { text: "Prefiro assistir online de casa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você usa sua rede para oportunidades?",
    options: [
      { text: "Todas minhas oportunidades vieram da rede", type: "A" },
      { text: "Boa parte das oportunidades vem de indicações", type: "B" },
      { text: "Às vezes recebo indicações", type: "C" },
      { text: "Dependo de processos seletivos tradicionais", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que melhor descreve sua rede profissional?",
    options: [
      { text: "Ampla, diversa e muito ativa", type: "A" },
      { text: "Média, com conexões de qualidade", type: "B" },
      { text: "Pequena, basicamente colegas atuais", type: "C" },
      { text: "Praticamente inexistente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Super Conector",
    emoji: "🌟",
    description: "Você é um networker nato! Sua rede é ampla, ativa e gera oportunidades constantemente. Você naturalmente conecta pessoas e é lembrado por todos.",
    traits: ["Sociável", "Estratégico", "Generoso", "Ativo"],
    strengths: ["Rede ampla e ativa", "Gera oportunidades", "Memória social", "Influenciador"],
    weaknesses: ["Pode parecer interesseiro", "Relacionamentos superficiais", "Dificuldade em aprofundar"],
    tips: ["Aprofunde algumas conexões-chave", "Seja genuíno, não só estratégico", "Qualidade também importa"],
  },
  B: {
    type: "B",
    title: "Networker Estratégico",
    emoji: "🎯",
    description: "Você faz networking de forma inteligente! Prioriza qualidade sobre quantidade e cultiva relacionamentos genuínos que geram valor mútuo.",
    traits: ["Seletivo", "Genuíno", "Consistente", "Reciprocidade"],
    strengths: ["Relacionamentos profundos", "Confiança mútua", "Indicações de qualidade", "Rede sustentável"],
    weaknesses: ["Rede pode ser pequena", "Demora a expandir", "Pode perder oportunidades"],
    tips: ["Expanda um pouco mais sua zona de conforto", "Participe de mais eventos", "Diversifique sua rede"],
  },
  C: {
    type: "C",
    title: "Networker em Desenvolvimento",
    emoji: "🌱",
    description: "Você reconhece a importância do networking mas ainda está desenvolvendo essa habilidade. Há muito potencial a ser explorado na construção da sua rede.",
    traits: ["Reservado", "Em desenvolvimento", "Potencial", "Tímido"],
    strengths: ["Autenticidade", "Relacionamentos sinceros", "Espaço para crescer"],
    weaknesses: ["Rede limitada", "Poucas oportunidades via rede", "Desconforto social"],
    tips: ["Comece devagar, um contato por semana", "Use LinkedIn ativamente", "Peça ajuda de networkers experientes"],
  },
  D: {
    type: "D",
    title: "Lobo Solitário",
    emoji: "🐺",
    description: "Networking não é sua praia, e você prefere construir carreira por mérito próprio. Sua rede profissional é mínima e você perde muitas oportunidades por isso.",
    traits: ["Independente", "Isolado", "Autoconfiante", "Avesso a networking"],
    strengths: ["Foco no trabalho", "Não depende de outros", "Autossuficiente"],
    weaknesses: ["Oportunidades limitadas", "Sem rede de apoio", "Crescimento mais lento"],
    tips: ["Networking é habilidade, não personalidade", "Comece com colegas mais próximos", "Defina metas pequenas de conexões"],
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
