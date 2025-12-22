// Qual Seu Nível de Jeitinho Brasileiro?
// Descubra como você lida com situações do dia a dia!

export const questions = [
  {
    id: 1,
    question: "A fila do banco está enorme. Você...",
    options: [
      { text: "Espero pacientemente na minha vez", type: "A" },
      { text: "Vejo se conheço alguém na frente", type: "B" },
      { text: "Tento resolver pelo app ou telefone", type: "C" },
      { text: "Peço pra quem está na frente guardar lugar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você precisa de um documento urgente. Você...",
    options: [
      { text: "Sigo o processo normal, mesmo demorando", type: "A" },
      { text: "Vejo se tenho algum contato que ajude", type: "B" },
      { text: "Explico a situação e peço prioridade", type: "C" },
      { text: "Dou um jeito, sempre dá", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O prazo tá apertado. Você...",
    options: [
      { text: "Me esforço ao máximo dentro das regras", type: "A" },
      { text: "Negocio uma extensão", type: "B" },
      { text: "Entrego o que der e explico depois", type: "C" },
      { text: "Sempre tem um jeito, improviso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você consegue desconto?",
    options: [
      { text: "Só se tiver promoção oficial", type: "A" },
      { text: "Pergunto educadamente se tem desconto", type: "B" },
      { text: "Pechincho sem dó", type: "C" },
      { text: "Conheço alguém que conhece alguém", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você precisa de uma reserva em restaurante lotado. Você...",
    options: [
      { text: "Aceito que não vai dar e vou a outro", type: "A" },
      { text: "Vou pessoalmente ver se encaixam", type: "B" },
      { text: "Ligo fazendo charme pra conseguir", type: "C" },
      { text: "Tenho um conhecido que trabalha lá", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O carro quebrou no meio da estrada. Você...",
    options: [
      { text: "Ligo pro reboque e espero", type: "A" },
      { text: "Peço ajuda pra quem está passando", type: "B" },
      { text: "Tento dar um jeito com o que tenho", type: "C" },
      { text: "Gambiarra resolve tudo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "A burocracia está travando seu processo. Você...",
    options: [
      { text: "Sigo cada passo exigido", type: "A" },
      { text: "Converso pra entender se há alternativa", type: "B" },
      { text: "Insisto até conseguir uma solução", type: "C" },
      { text: "Dou um jeito, sempre dá", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você está atrasado pra um compromisso. Você...",
    options: [
      { text: "Aviso que vou me atrasar", type: "A" },
      { text: "Invento uma desculpa criativa", type: "B" },
      { text: "Corro e torço pra dar tempo", type: "C" },
      { text: "Dou um jeito de chegar mais rápido", type: "D" },
    ],
  },
  {
    id: 9,
    question: "A regra não faz sentido pra sua situação. Você...",
    options: [
      { text: "Sigo a regra mesmo assim", type: "A" },
      { text: "Questiono e busco exceção", type: "B" },
      { text: "Interpreto a regra do meu jeito", type: "C" },
      { text: "Regra foi feita pra ter exceção", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você precisa de algo e não tem dinheiro. Você...",
    options: [
      { text: "Espero até poder comprar", type: "A" },
      { text: "Parcelo ou peço emprestado", type: "B" },
      { text: "Negocio uma troca ou favor", type: "C" },
      { text: "Sempre dá um jeito", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O sistema não permite o que você quer. Você...",
    options: [
      { text: "Aceito a limitação do sistema", type: "A" },
      { text: "Busco um supervisor pra autorizar", type: "B" },
      { text: "Encontro uma alternativa criativa", type: "C" },
      { text: "Sempre tem um workaround", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais te define?",
    options: [
      { text: "'Faço tudo certinho'", type: "A" },
      { text: "'Conversando a gente se entende'", type: "B" },
      { text: "'Brasileiro não desiste nunca'", type: "C" },
      { text: "'Deus é brasileiro'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Certinho(a) Zero Jeitinho",
    emoji: "📋",
    description: "Você é o Certinho! Segue regras, respeita processos e não dá jeitinho em nada. Você é a exceção que confirma a regra do brasileiro!",
    traits: ["Correto(a)", "Processual", "Paciente", "Íntegro(a)"],
    strengths: ["Integridade", "Credibilidade", "Tranquilidade legal", "Exemplo"],
    weaknesses: ["Pode demorar mais", "Inflexível", "Perde oportunidades"],
    tips: ["Às vezes flexibilidade ajuda", "Nem toda regra faz sentido", "Adapte-se quando preciso"],
  },
  B: {
    type: "B",
    title: "Jeitinho Light",
    emoji: "🤝",
    description: "Você é o Jeitinho Light! Negocia, conversa, busca alternativas dentro do razoável. Você é diplomático e encontra soluções sem ultrapassar limites!",
    traits: ["Diplomático(a)", "Negociador(a)", "Flexível", "Equilibrado(a)"],
    strengths: ["Diplomacia", "Soluções criativas", "Bom relacionamento", "Equilíbrio"],
    weaknesses: ["Às vezes na linha", "Pode parecer puxa-saco", "Gasta energia negociando"],
    tips: ["Seu equilíbrio é bom", "Continue diplomático", "Saiba seus limites"],
  },
  C: {
    type: "C",
    title: "Jeitinho Brasileiro Médio",
    emoji: "🇧🇷",
    description: "Você é o Jeitinho Brasileiro Médio! Encontra soluções criativas, interpreta regras e não desiste fácil. Você é a média do brasileiro típico!",
    traits: ["Criativo(a)", "Persistente", "Adaptável", "Brasileiro(a)"],
    strengths: ["Criatividade", "Resiliência", "Adaptação", "Resolver problemas"],
    weaknesses: ["Pode passar do limite", "Às vezes na zona cinza", "Ética questionável"],
    tips: ["Cuidado pra não exagerar", "Integridade importa", "Nem tudo se resolve com jeitinho"],
  },
  D: {
    type: "D",
    title: "Mestre do Jeitinho",
    emoji: "🧙",
    description: "Você é o Mestre do Jeitinho! Nada te para, sempre tem uma solução, e gambiarra é arte. Você é o brasileiro raiz que dá um jeito em tudo!",
    traits: ["Criativo(a)", "Resiliente", "Improvisador(a)", "Ousado(a)"],
    strengths: ["Nada te para", "Criatividade extrema", "Resiliência total", "Soluções impossíveis"],
    weaknesses: ["Pode dar problema", "Ética duvidosa", "Risco de consequências"],
    tips: ["Cuidado com a lei", "Nem todo jeitinho é ético", "Às vezes o certo é o melhor caminho"],
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
