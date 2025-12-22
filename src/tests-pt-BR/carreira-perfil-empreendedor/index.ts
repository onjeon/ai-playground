// Seu Perfil Empreendedor
// Descubra se você tem DNA de empreendedor!

export const questions = [
  {
    id: 1,
    question: "Qual sua relação com riscos financeiros?",
    options: [
      { text: "Topo investir tudo em uma ideia em que acredito", type: "A" },
      { text: "Aceito riscos calculados com plano B", type: "B" },
      { text: "Prefiro segurança, mas aceito pequenos riscos", type: "C" },
      { text: "Evito riscos ao máximo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com incertezas sobre o futuro?",
    options: [
      { text: "Adoro! Incerteza é oportunidade", type: "A" },
      { text: "Aceito bem, faz parte do jogo", type: "B" },
      { text: "Me incomoda mas consigo lidar", type: "C" },
      { text: "Preciso de previsibilidade para funcionar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando você tem uma ideia de negócio:",
    options: [
      { text: "Começo a trabalhar nela imediatamente", type: "A" },
      { text: "Pesquiso, planejo e depois executo", type: "B" },
      { text: "Penso bastante mas raramente executo", type: "C" },
      { text: "Não costumo ter ideias de negócio", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua relação com fracasso?",
    options: [
      { text: "Fracasso é aprendizado, parte do processo", type: "A" },
      { text: "Dói mas aprendo e sigo em frente", type: "B" },
      { text: "Tenho medo de fracassar", type: "C" },
      { text: "Fracasso me paralisa, evito riscos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você se sente trabalhando sem salário fixo?",
    options: [
      { text: "Tranquilo, meu esforço define meu ganho", type: "A" },
      { text: "Desafiador mas possível por um tempo", type: "B" },
      { text: "Muito desconfortável", type: "C" },
      { text: "Impossível, preciso de segurança", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sua capacidade de vender ideias ou produtos é:",
    options: [
      { text: "Alta, sou um vendedor nato", type: "A" },
      { text: "Boa quando acredito no que estou vendendo", type: "B" },
      { text: "Razoável, não é minha zona de conforto", type: "C" },
      { text: "Baixa, não gosto de vender", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com trabalhar longas horas por um sonho?",
    options: [
      { text: "Normal, faço isso por escolha e com paixão", type: "A" },
      { text: "Faço quando necessário por um objetivo", type: "B" },
      { text: "Prefiro equilíbrio, mesmo para sonhos", type: "C" },
      { text: "Valorizo meu tempo livre acima de tudo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando encontra um problema no mercado, você:",
    options: [
      { text: "Vejo oportunidade de negócio", type: "A" },
      { text: "Penso em como poderia resolver", type: "B" },
      { text: "Reclamo e sigo em frente", type: "C" },
      { text: "Não é meu problema resolver", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sua capacidade de persistir apesar de obstáculos é:",
    options: [
      { text: "Inabalável, nunca desisto", type: "A" },
      { text: "Alta, mas sei quando pivotar", type: "B" },
      { text: "Moderada, depende do obstáculo", type: "C" },
      { text: "Baixa, desisto quando fica difícil", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se sente sobre ser responsável por tudo?",
    options: [
      { text: "Adoro! Quero ter controle total", type: "A" },
      { text: "Aceito bem a responsabilidade", type: "B" },
      { text: "Prefiro dividir responsabilidades", type: "C" },
      { text: "Me assusta, prefiro papéis definidos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Sua rede de contatos e habilidade de networking é:",
    options: [
      { text: "Ampla e ativa, sempre fazendo conexões", type: "A" },
      { text: "Boa, cultivo relacionamentos importantes", type: "B" },
      { text: "Básica, não invisto muito nisso", type: "C" },
      { text: "Mínima, prefiro trabalhar sozinho", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Se pudesse, você:",
    options: [
      { text: "Largaria tudo amanhã para empreender", type: "A" },
      { text: "Empreenderia com planejamento adequado", type: "B" },
      { text: "Talvez um dia, mas não agora", type: "C" },
      { text: "Nunca empreenderia, prefiro emprego", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Empreendedor Nato",
    emoji: "🚀",
    description: "Você tem DNA empreendedor puro! Aceita riscos, persiste diante de obstáculos e vê oportunidades onde outros veem problemas. Empreender é seu destino.",
    traits: ["Visionário", "Arrojado", "Resiliente", "Vendedor"],
    strengths: ["Tolerância ao risco", "Persistência", "Visão de oportunidades", "Execução"],
    weaknesses: ["Pode subestimar riscos", "Impaciente", "Pode queimar pontes"],
    tips: ["Cerque-se de pessoas complementares", "Tenha reserva financeira", "Aprenda com fracassos dos outros"],
  },
  B: {
    type: "B",
    title: "Empreendedor Estratégico",
    emoji: "🎯",
    description: "Você tem perfil empreendedor equilibrado! Combina visão com planejamento. Pode empreender com sucesso escolhendo bem o momento e a oportunidade.",
    traits: ["Estratégico", "Calculista", "Determinado", "Equilibrado"],
    strengths: ["Riscos calculados", "Planejamento", "Execução consciente"],
    weaknesses: ["Pode demorar a agir", "Muito planejamento às vezes"],
    tips: ["Não espere o momento perfeito", "Comece pequeno e valide", "Confie mais na sua intuição"],
  },
  C: {
    type: "C",
    title: "Empreendedor em Potencial",
    emoji: "🌱",
    description: "Você tem interesse mas ainda não está pronto para empreender. Falta tolerância a riscos e incertezas. Pode desenvolver essas habilidades se quiser.",
    traits: ["Cauteloso", "Em desenvolvimento", "Potencial", "Seguro"],
    strengths: ["Consciência das próprias limitações", "Prudência"],
    weaknesses: ["Medo de fracasso", "Baixa tolerância a risco", "Falta de execução"],
    tips: ["Comece com projetos paralelos de baixo risco", "Desenvolva tolerância a incerteza", "Trabalhe em startups antes de fundar"],
  },
  D: {
    type: "D",
    title: "Perfil Colaborador",
    emoji: "🏢",
    description: "Empreender não é para você, e tudo bem! Você valoriza segurança, estabilidade e papéis definidos. Brilhe como colaborador em empresas que valorizem seus talentos.",
    traits: ["Seguro", "Estável", "Colaborador", "Previsível"],
    strengths: ["Consistência", "Confiabilidade", "Especialização"],
    weaknesses: ["Sem perfil empreendedor", "Dependência de estruturas"],
    tips: ["Aceite seu perfil e encontre boas empresas", "Pode intraempreender em ambientes seguros", "Valorize suas forças como colaborador"],
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
