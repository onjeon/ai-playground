// Qual Tipo de Chefe Brasileiro Você É?
// Descubra seu perfil de liderança!

export const questions = [
  {
    id: 1,
    question: "Como você lidera sua equipe?",
    options: [
      { text: "Com proximidade, somos uma família", type: "A" },
      { text: "Profissional mas acessível", type: "B" },
      { text: "Cobrando resultados, foco total", type: "C" },
      { text: "Deixo cada um fazer seu trabalho", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você dá feedback negativo?",
    options: [
      { text: "Com jeitinho, pra não magoar", type: "A" },
      { text: "Direto mas respeitoso", type: "B" },
      { text: "Direto ao ponto, sem rodeios", type: "C" },
      { text: "Evito confronto, mando por e-mail", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você é amigo dos subordinados?",
    options: [
      { text: "Sim! Saímos juntos, somos amigos", type: "A" },
      { text: "Tenho boa relação, mas com limites", type: "B" },
      { text: "Não, prefiro manter distância profissional", type: "C" },
      { text: "Não me envolvo muito com ninguém", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com erros da equipe?",
    options: [
      { text: "Entendo, erro é humano, ajudo a corrigir", type: "A" },
      { text: "Corrijo e oriento pra não repetir", type: "B" },
      { text: "Cobro resultado, erro tem consequência", type: "C" },
      { text: "Deixo pra lá, cada um sabe o que faz", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você faz reuniões frequentes?",
    options: [
      { text: "Sim, gosto de estar próximo da equipe", type: "A" },
      { text: "As necessárias, com pauta definida", type: "B" },
      { text: "Poucas, só quando precisa decidir algo", type: "C" },
      { text: "Quase nunca, prefiro e-mail", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você celebra conquistas da equipe?",
    options: [
      { text: "Festa! Happy hour, comemoração", type: "A" },
      { text: "Reconhecimento e agradecimento", type: "B" },
      { text: "Parabenizo e já foco no próximo desafio", type: "C" },
      { text: "Normal, é obrigação deles", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você delega bem as tarefas?",
    options: [
      { text: "Delego e ajudo quando precisam", type: "A" },
      { text: "Delego com clareza e acompanho", type: "B" },
      { text: "Delego e cobro resultado", type: "C" },
      { text: "Faço eu mesmo, é mais rápido", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você aceita sugestões da equipe?",
    options: [
      { text: "Sempre! Adoro ouvir ideias", type: "A" },
      { text: "Sim, se fizerem sentido", type: "B" },
      { text: "Às vezes, mas a decisão é minha", type: "C" },
      { text: "Raramente, eu sei o que faço", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com pressão?",
    options: [
      { text: "Divido com a equipe, somos um time", type: "A" },
      { text: "Absorvo parte, passo parte", type: "B" },
      { text: "Passo pra equipe, eles que se virem", type: "C" },
      { text: "Fico nervoso e cobro muito", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você promove pessoas da equipe?",
    options: [
      { text: "Sempre que posso, quero ver crescerem", type: "A" },
      { text: "Quando merecem, com critério", type: "B" },
      { text: "Raramente, difícil alguém se destacar", type: "C" },
      { text: "Não me envolvo com isso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "A equipe gosta de você?",
    options: [
      { text: "Sim! Somos muito próximos", type: "A" },
      { text: "Acho que sim, me respeitam", type: "B" },
      { text: "Não sei, não é minha preocupação", type: "C" },
      { text: "Provavelmente não, sou exigente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como chefe?",
    options: [
      { text: "'Somos uma família!'", type: "A" },
      { text: "'Trabalho sério, ambiente leve'", type: "B" },
      { text: "'Resultados falam mais que palavras'", type: "C" },
      { text: "'Cada um faz sua parte'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Chefe Paizão/Mãezona",
    emoji: "🤗",
    description: "Você é o Chefe Paizão/Mãezona! Cuida da equipe como família, é próximo, celebra junto, sofre junto. Sua equipe te ama, mas cuidado pra não perder a autoridade!",
    traits: ["Acolhedor(a)", "Próximo(a)", "Empático(a)", "Protetor(a)"],
    strengths: ["Equipe engajada", "Ambiente bom", "Lealdade", "Conexão"],
    weaknesses: ["Pode perder autoridade", "Dificuldade em cobrar", "Mistura pessoal com profissional"],
    tips: ["Seu carinho é valioso", "Mas mantenha limites", "Equilíbrio é importante"],
  },
  B: {
    type: "B",
    title: "Chefe Profissional",
    emoji: "💼",
    description: "Você é o Chefe Profissional! Equilíbrio perfeito entre proximidade e autoridade. Você respeita, é respeitado, e entrega resultados com um time engajado!",
    traits: ["Profissional", "Equilibrado(a)", "Respeitado(a)", "Justo(a)"],
    strengths: ["Equilíbrio", "Respeito mútuo", "Resultados", "Ambiente saudável"],
    weaknesses: ["Pode parecer distante às vezes", "Difícil manter sempre"],
    tips: ["Ótima liderança", "Continue assim", "Você é referência"],
  },
  C: {
    type: "C",
    title: "Chefe Cobrador",
    emoji: "📊",
    description: "Você é o Chefe Cobrador! Foco total em resultados. Você cobra, pressiona e espera excelência. A equipe pode não gostar, mas entrega!",
    traits: ["Exigente", "Focado(a)", "Direto(a)", "Resultista"],
    strengths: ["Resultados", "Clareza", "Alta performance", "Sem enrolação"],
    weaknesses: ["Equipe estressada", "Alta rotatividade", "Ambiente tenso"],
    tips: ["Resultados importam, mas pessoas também", "Humanize um pouco", "Reconheça a equipe"],
  },
  D: {
    type: "D",
    title: "Chefe Ausente",
    emoji: "👻",
    description: "Você é o Chefe Ausente! Deixa a equipe se virar, não se envolve muito. Pode ser liberdade ou abandono, depende de como a equipe vê!",
    traits: ["Ausente", "Delegador(a)", "Distante", "Autônomo(a)"],
    strengths: ["Dá autonomia", "Não microgerencia", "Equipe independente"],
    weaknesses: ["Falta direção", "Equipe perdida", "Sem feedback", "Desconexão"],
    tips: ["Presença é importante", "Sua equipe precisa de você", "Liderar é estar junto"],
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
