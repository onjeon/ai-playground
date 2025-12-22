// Sua Postura Ética Profissional
// Descubra como você lida com dilemas éticos no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando descobre algo antiético na empresa, você:",
    options: [
      { text: "Reporto imediatamente pelos canais adequados", type: "A" },
      { text: "Avalio a situação e busco resolver internamente", type: "B" },
      { text: "Comento com colegas mas não tomo ação formal", type: "C" },
      { text: "Finjo que não vi, não é problema meu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Se seu chefe pedir para você fazer algo antiético:",
    options: [
      { text: "Recuso claramente e documento", type: "A" },
      { text: "Questiono e busco alternativas éticas", type: "B" },
      { text: "Faço mas me sinto mal", type: "C" },
      { text: "Faço sem questionar, é ordem", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com despesas/benefícios da empresa?",
    options: [
      { text: "Rigorosamente dentro das regras", type: "A" },
      { text: "Sigo as regras com bom senso", type: "B" },
      { text: "Aproveito zonas cinzentas às vezes", type: "C" },
      { text: "Uso ao máximo o que puder", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Se souber de um colega fazendo algo errado:",
    options: [
      { text: "Converso ou reporto dependendo da gravidade", type: "A" },
      { text: "Converso primeiro com a pessoa", type: "B" },
      { text: "Não é da minha conta", type: "C" },
      { text: "Até participo se for vantajoso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua relação com honestidade no trabalho?",
    options: [
      { text: "Sou sempre honesto, mesmo quando dói", type: "A" },
      { text: "Honesto, mas sei dosar como falar", type: "B" },
      { text: "Maquio a verdade quando conveniente", type: "C" },
      { text: "Minto se for melhor para mim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você vê informações confidenciais da empresa?",
    options: [
      { text: "Sagradas, nunca compartilho inadequadamente", type: "A" },
      { text: "Protejo com cuidado e critério", type: "B" },
      { text: "Cuidado básico, mas já vazei algo sem querer", type: "C" },
      { text: "Uso como achar melhor", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando pode tirar vantagem sem ser pego:",
    options: [
      { text: "Não faço, meus valores não dependem de fiscalização", type: "A" },
      { text: "Geralmente não, mas depende da situação", type: "B" },
      { text: "Às vezes, se for algo pequeno", type: "C" },
      { text: "Aproveito a oportunidade", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com conflitos de interesse?",
    options: [
      { text: "Declaro e me abstenho de decisões relacionadas", type: "A" },
      { text: "Tento ser justo mesmo com interesse pessoal", type: "B" },
      { text: "Não declaro, mas tento ser justo", type: "C" },
      { text: "Uso para minha vantagem", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se você cometesse um erro grave no trabalho:",
    options: [
      { text: "Assumiria imediatamente e totalmente", type: "A" },
      { text: "Assumiria, mas pensaria em como falar", type: "B" },
      { text: "Tentaria minimizar ou esconder parcialmente", type: "C" },
      { text: "Esconderia ou culparia outros", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual sua postura sobre trabalhar em empresas antiéticas?",
    options: [
      { text: "Não aceito, valores são inegociáveis", type: "A" },
      { text: "Evito, mas avaliaria caso a caso", type: "B" },
      { text: "Se pagar bem, releevo algumas coisas", type: "C" },
      { text: "Não me importo, negócios são negócios", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você vê quem faz sucesso de forma antiética?",
    options: [
      { text: "Não admiro, sucesso sem ética não vale", type: "A" },
      { text: "Questiono se valeu a pena", type: "B" },
      { text: "Cada um sabe de si", type: "C" },
      { text: "Esperto, fez o que precisava", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que mais define sua postura ética?",
    options: [
      { text: "Meus valores são consistentes sempre", type: "A" },
      { text: "Busco fazer o certo na maioria das vezes", type: "B" },
      { text: "Depende muito da situação", type: "C" },
      { text: "Ética é relativa, cada um por si", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Integridade Inabalável",
    emoji: "⭐",
    description: "Você tem integridade excepcional! Seus valores são consistentes e inegociáveis. Você é uma referência ética e inspira confiança absoluta.",
    traits: ["Íntegro", "Consistente", "Confiável", "Corajoso"],
    strengths: ["Confiança total", "Reputação impecável", "Modelo para outros", "Decisões claras"],
    weaknesses: ["Pode parecer inflexível", "Pode criar atritos com antiéticos"],
    tips: ["Continue assim!", "Ajude a construir cultura ética", "Escolha empresas alinhadas aos seus valores"],
  },
  B: {
    type: "B",
    title: "Ética Sólida",
    emoji: "✅",
    description: "Você tem boa postura ética! Busca fazer o certo e tem valores claros. Às vezes enfrenta dilemas mas geralmente escolhe o caminho certo.",
    traits: ["Ético", "Consciente", "Equilibrado", "Responsável"],
    strengths: ["Boa reputação", "Confiança dos colegas", "Decisões geralmente éticas"],
    weaknesses: ["Às vezes hesita em situações difíceis"],
    tips: ["Fortaleça seus valores", "Não relativize demais", "Seja referência de ética"],
  },
  C: {
    type: "C",
    title: "Ética Situacional",
    emoji: "⚠️",
    description: "Sua ética depende muito da situação. Você faz algumas coisas questionáveis quando conveniente. Isso pode prejudicar sua reputação e carreira.",
    traits: ["Flexível demais", "Oportunista", "Relativista", "Arriscado"],
    strengths: ["Adaptável (nem sempre positivo)"],
    weaknesses: ["Reputação em risco", "Pode se envolver em problemas", "Não é totalmente confiável"],
    tips: ["ATENÇÃO: Ética situacional é perigosa", "Defina limites claros", "Pense no longo prazo"],
  },
  D: {
    type: "D",
    title: "Postura Antiética",
    emoji: "🚨",
    description: "Você tem postura antiética! Prioriza vantagem pessoal sobre valores. Isso é um problema sério que pode destruir sua carreira e prejudicar outros.",
    traits: ["Antiético", "Desonesto", "Interesseiro", "Arriscado"],
    strengths: ["Talvez ganhos de curto prazo"],
    weaknesses: ["Risco enorme de carreira", "Reputação destruída quando descoberto", "Consequências legais possíveis", "Impacto negativo em outros"],
    tips: ["ALERTA VERMELHO", "Essa postura destruirá sua carreira eventualmente", "Reavalie seus valores urgentemente", "O preço de ser antiético sempre chega"],
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
