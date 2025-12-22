// Teste de Maturidade Emocional
// Descubra seu nível de maturidade emocional!

export const questions = [
  {
    id: 1,
    question: "Você assume responsabilidade pelos seus erros?",
    options: [
      { text: "Sempre, mesmo quando é difícil", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Às vezes tento justificar ou culpar outros", type: "C" },
      { text: "Geralmente culpo circunstâncias ou outros", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com frustrações?",
    options: [
      { text: "Processo e encontro formas construtivas de lidar", type: "A" },
      { text: "Fico chateado mas supero relativamente rápido", type: "B" },
      { text: "Tenho dificuldade, às vezes reajo mal", type: "C" },
      { text: "Explodo ou me vitimizo frequentemente", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue adiar gratificação por objetivos maiores?",
    options: [
      { text: "Sim, tenho boa capacidade de esperar", type: "A" },
      { text: "Geralmente consigo", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Quero tudo para agora", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você reage quando não é o centro das atenções?",
    options: [
      { text: "Tranquilamente, não preciso de destaque", type: "A" },
      { text: "Bem, embora às vezes goste de atenção", type: "B" },
      { text: "Fico um pouco incomodado", type: "C" },
      { text: "Mal, preciso de atenção constante", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você consegue reconhecer quando está errado?",
    options: [
      { text: "Sim, e peço desculpas genuínas", type: "A" },
      { text: "Geralmente consigo admitir", type: "B" },
      { text: "Tenho dificuldade em admitir erros", type: "C" },
      { text: "Raramente admito que errei", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com as necessidades dos outros vs as suas?",
    options: [
      { text: "Equilibro bem, considerando ambas", type: "A" },
      { text: "Tento equilibrar, às vezes difícil", type: "B" },
      { text: "Geralmente priorizo as minhas ou só as dos outros", type: "C" },
      { text: "Só me importam as minhas necessidades", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue ter conversas difíceis de forma construtiva?",
    options: [
      { text: "Sim, com calma e foco em solução", type: "A" },
      { text: "Geralmente consigo, com algum esforço", type: "B" },
      { text: "Tenho dificuldade, às vezes evito ou brigo", type: "C" },
      { text: "Sempre acabo em briga ou fuga", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você aceita que não pode controlar tudo na vida?",
    options: [
      { text: "Sim, foco no que posso controlar", type: "A" },
      { text: "Geralmente aceito, embora às vezes lute", type: "B" },
      { text: "Tenho dificuldade em aceitar", type: "C" },
      { text: "Não, quero controlar tudo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com críticas?",
    options: [
      { text: "Avalio com calma e aprendo quando válidas", type: "A" },
      { text: "Aceito mas às vezes dói", type: "B" },
      { text: "Fico na defensiva frequentemente", type: "C" },
      { text: "Não aceito críticas, sempre reajo mal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue ser feliz pelo sucesso dos outros?",
    options: [
      { text: "Sim, genuinamente me alegro", type: "A" },
      { text: "Geralmente sim, com alguma inveja ocasional", type: "B" },
      { text: "Às vezes sinto mais inveja do que alegria", type: "C" },
      { text: "Não, o sucesso dos outros me incomoda", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você cumpre seus compromissos mesmo quando inconvenientes?",
    options: [
      { text: "Sim, minha palavra é importante", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes furo compromissos", type: "C" },
      { text: "Se não for conveniente, cancelo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua maturidade emocional?",
    options: [
      { text: "Alta, trabalho constantemente nisso", type: "A" },
      { text: "Boa, mas com espaço para crescer", type: "B" },
      { text: "Preciso desenvolver mais", type: "C" },
      { text: "Reconheço que sou imaturo em muitas áreas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alta Maturidade Emocional",
    emoji: "🌳",
    description: "Você demonstra alta maturidade emocional! Assume responsabilidade, lida bem com frustrações, considera os outros e mantém equilíbrio nas relações.",
    traits: ["Responsável", "Equilibrado", "Empático", "Autoconsciente"],
    strengths: ["Relacionamentos saudáveis", "Resiliência", "Liderança natural", "Confiança dos outros"],
    weaknesses: ["Pode esperar maturidade igual dos outros", "Pode carregar peso demais"],
    tips: ["Continue seu desenvolvimento", "Use sua maturidade para ajudar outros", "Mantenha a humildade"],
  },
  B: {
    type: "B",
    title: "Boa Maturidade",
    emoji: "🌿",
    description: "Você tem boa maturidade emocional, com espaço para crescimento. Na maioria das situações age de forma madura, com alguns deslizes ocasionais.",
    traits: ["Maduro", "Consciente", "Em evolução", "Equilibrado"],
    strengths: ["Bom funcionamento geral", "Consciência das áreas de melhoria", "Relacionamentos funcionais"],
    weaknesses: ["Algumas áreas precisam de desenvolvimento", "Oscilações em situações de stress"],
    tips: ["Identifique suas áreas de imaturidade", "Continue trabalhando seu crescimento", "Pratique especialmente nas áreas difíceis"],
  },
  C: {
    type: "C",
    title: "Maturidade em Desenvolvimento",
    emoji: "🌱",
    description: "Sua maturidade emocional está em desenvolvimento. Você tem comportamentos imaturos em várias áreas que podem estar afetando seus relacionamentos.",
    traits: ["Em desenvolvimento", "Inconsistente", "Reativo", "Potencial"],
    strengths: ["Consciência da necessidade de crescer", "Potencial de desenvolvimento"],
    weaknesses: ["Relacionamentos podem sofrer", "Reações imaturas frequentes", "Dificuldade com responsabilidade"],
    tips: ["Terapia pode acelerar muito o crescimento", "Assuma responsabilidade por suas ações", "Observe pessoas maduras e aprenda"],
  },
  D: {
    type: "D",
    title: "Baixa Maturidade Emocional",
    emoji: "🐣",
    description: "Você demonstra baixa maturidade emocional em muitas áreas. Isso está provavelmente afetando significativamente sua vida e relacionamentos.",
    traits: ["Imaturo", "Egocêntrico", "Reativo", "Irresponsável"],
    strengths: ["Reconhecimento do problema (se fizer o teste honestamente)"],
    weaknesses: ["Relacionamentos muito prejudicados", "Dificuldade profissional", "Conflitos frequentes"],
    tips: ["Busque ajuda profissional seriamente", "Maturidade pode ser desenvolvida em qualquer idade", "Este é um investimento vital para sua vida"],
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
