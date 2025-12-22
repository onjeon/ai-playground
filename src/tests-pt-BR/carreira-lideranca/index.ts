// Seu Estilo de Liderança
// Descubra qual é o seu estilo de liderar equipes e projetos!

export const questions = [
  {
    id: 1,
    question: "Como você prefere tomar decisões importantes na equipe?",
    options: [
      { text: "Decido sozinho rapidamente", type: "A" },
      { text: "Consulto a equipe e depois decido", type: "B" },
      { text: "Deixo a equipe decidir em conjunto", type: "C" },
      { text: "Delego a decisão para quem tem mais experiência", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando um membro da equipe comete um erro, você:",
    options: [
      { text: "Corrijo imediatamente e mostro como fazer", type: "A" },
      { text: "Converso em particular e ofereço orientação", type: "B" },
      { text: "Peço para a equipe discutir o que aconteceu", type: "C" },
      { text: "Deixo a pessoa aprender com o próprio erro", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você motiva sua equipe?",
    options: [
      { text: "Estabelecendo metas claras e cobrando resultados", type: "A" },
      { text: "Reconhecendo conquistas e oferecendo feedback", type: "B" },
      { text: "Criando um ambiente colaborativo e inclusivo", type: "C" },
      { text: "Dando liberdade e confiando no potencial de cada um", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Em uma reunião de equipe, você geralmente:",
    options: [
      { text: "Conduz a reunião e define a pauta", type: "A" },
      { text: "Facilita a discussão e mantém o foco", type: "B" },
      { text: "Incentiva todos a participarem igualmente", type: "C" },
      { text: "Prefere ouvir e intervir só quando necessário", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando surge um conflito na equipe, você:",
    options: [
      { text: "Resolve rapidamente determinando quem está certo", type: "A" },
      { text: "Medeia a situação buscando um meio-termo", type: "B" },
      { text: "Reúne todos para resolver juntos", type: "C" },
      { text: "Deixa as partes resolverem entre si", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você define as tarefas da equipe?",
    options: [
      { text: "Distribuo as tarefas de acordo com minha visão", type: "A" },
      { text: "Alinho as habilidades de cada um com as tarefas", type: "B" },
      { text: "A equipe decide quem faz o quê", type: "C" },
      { text: "Deixo cada um escolher suas próprias tarefas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual frase melhor descreve sua filosofia de liderança?",
    options: [
      { text: "Resultados falam mais alto que desculpas", type: "A" },
      { text: "Um bom líder desenvolve outros líderes", type: "B" },
      { text: "Juntos somos mais fortes", type: "C" },
      { text: "Liberdade gera responsabilidade", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com prazos apertados?",
    options: [
      { text: "Assumo o controle e distribuo tarefas urgentes", type: "A" },
      { text: "Reorganizo prioridades com a equipe", type: "B" },
      { text: "Peço ideias de como podemos acelerar juntos", type: "C" },
      { text: "Confio que cada um vai entregar sua parte", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando precisa dar feedback negativo, você:",
    options: [
      { text: "Sou direto e objetivo sobre o problema", type: "A" },
      { text: "Equilibro críticas com pontos positivos", type: "B" },
      { text: "Faço perguntas para a pessoa refletir", type: "C" },
      { text: "Prefiro esperar o momento certo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você celebra conquistas da equipe?",
    options: [
      { text: "Reconheço publicamente e passo para o próximo desafio", type: "A" },
      { text: "Organizo algo especial para valorizar todos", type: "B" },
      { text: "Deixo a equipe decidir como quer comemorar", type: "C" },
      { text: "Comemoro de forma informal e espontânea", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual é sua abordagem para inovação na equipe?",
    options: [
      { text: "Defino a direção e a equipe executa", type: "A" },
      { text: "Incentivo ideias mas valido antes de implementar", type: "B" },
      { text: "Todas as ideias são discutidas em grupo", type: "C" },
      { text: "Dou liberdade total para experimentação", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que você considera mais importante em um líder?",
    options: [
      { text: "Visão clara e capacidade de execução", type: "A" },
      { text: "Habilidade de desenvolver pessoas", type: "B" },
      { text: "Capacidade de unir e inspirar o grupo", type: "C" },
      { text: "Confiança na autonomia da equipe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Líder Autoritário",
    emoji: "👑",
    description: "Você é um líder decisivo e orientado a resultados! Toma decisões rápidas e tem uma visão clara de onde quer chegar. Sua equipe sabe exatamente o que você espera.",
    traits: ["Decisivo", "Focado", "Determinado", "Direto"],
    strengths: ["Tomada de decisão rápida", "Clareza de objetivos", "Eficiência em crises", "Resultados consistentes"],
    weaknesses: ["Pode parecer inflexível", "Risco de desmotivar a equipe", "Pouco espaço para criatividade alheia"],
    tips: ["Ouça mais sua equipe", "Delegue mais responsabilidades", "Valorize as contribuições individuais"],
  },
  B: {
    type: "B",
    title: "Líder Coach",
    emoji: "🎯",
    description: "Você lidera desenvolvendo pessoas! Acredita que o sucesso vem do crescimento individual de cada membro. Equilibra orientação com autonomia de forma exemplar.",
    traits: ["Orientador", "Paciente", "Estratégico", "Empático"],
    strengths: ["Desenvolve talentos", "Feedback construtivo", "Relacionamentos fortes", "Visão de longo prazo"],
    weaknesses: ["Pode ser lento em decisões urgentes", "Muito foco no individual", "Dificuldade com baixo desempenho"],
    tips: ["Seja mais assertivo quando necessário", "Equilibre desenvolvimento com resultados", "Tome decisões mais rápidas em crises"],
  },
  C: {
    type: "C",
    title: "Líder Democrático",
    emoji: "🤝",
    description: "Você acredita no poder do coletivo! Valoriza a opinião de todos e constrói consenso. Sua equipe se sente valorizada e engajada nas decisões.",
    traits: ["Colaborativo", "Inclusivo", "Comunicativo", "Justo"],
    strengths: ["Alto engajamento da equipe", "Decisões bem aceitas", "Ambiente positivo", "Diversidade de ideias"],
    weaknesses: ["Decisões podem demorar", "Dificuldade em situações urgentes", "Nem todos querem participar"],
    tips: ["Seja mais decisivo quando necessário", "Nem tudo precisa de votação", "Assuma a liderança em crises"],
  },
  D: {
    type: "D",
    title: "Líder Liberal",
    emoji: "🦅",
    description: "Você confia na autonomia da sua equipe! Dá liberdade e espera responsabilidade em troca. Sua equipe tem espaço para crescer e se desenvolver sozinha.",
    traits: ["Confiante", "Flexível", "Descontraído", "Empoderador"],
    strengths: ["Estimula autonomia", "Ambiente criativo", "Equipe autogerenciável", "Baixo microgerenciamento"],
    weaknesses: ["Pode parecer ausente", "Falta de direção clara", "Risco de desorganização"],
    tips: ["Ofereça mais orientação inicial", "Acompanhe o progresso regularmente", "Estabeleça expectativas claras"],
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
