// Teste de Autoconhecimento
// Descubra seu nível de autoconhecimento!

export const questions = [
  {
    id: 1,
    question: "Você conhece bem seus pontos fortes e fracos?",
    options: [
      { text: "Sim, tenho clareza sobre ambos", type: "A" },
      { text: "Conheço razoavelmente bem", type: "B" },
      { text: "Tenho uma ideia vaga", type: "C" },
      { text: "Não sei bem quais são", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você sabe o que te motiva na vida?",
    options: [
      { text: "Sim, tenho clareza sobre meus motivadores", type: "A" },
      { text: "Tenho uma boa noção", type: "B" },
      { text: "Às vezes me pergunto sobre isso", type: "C" },
      { text: "Não faço ideia do que me motiva", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você entende por que reage de certas formas?",
    options: [
      { text: "Sim, compreendo minhas reações", type: "A" },
      { text: "Na maioria das vezes entendo", type: "B" },
      { text: "Às vezes me surpreendo com minhas reações", type: "C" },
      { text: "Frequentemente não entendo por que reajo assim", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você conhece seus valores fundamentais?",
    options: [
      { text: "Sim, sei exatamente o que é importante para mim", type: "A" },
      { text: "Tenho uma boa ideia dos meus valores", type: "B" },
      { text: "Tenho uma noção vaga", type: "C" },
      { text: "Nunca pensei muito sobre isso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sabe como o estresse te afeta?",
    options: [
      { text: "Sim, conheço meus padrões de resposta ao estresse", type: "A" },
      { text: "Tenho uma boa noção", type: "B" },
      { text: "Percebo às vezes, outras não", type: "C" },
      { text: "O estresse me pega de surpresa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você pratica autorreflexão regularmente?",
    options: [
      { text: "Sim, é um hábito frequente", type: "A" },
      { text: "De vez em quando reflito", type: "B" },
      { text: "Raramente paro para refletir", type: "C" },
      { text: "Nunca reflito sobre mim mesmo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você conhece seus gatilhos emocionais?",
    options: [
      { text: "Sim, sei o que me desestabiliza", type: "A" },
      { text: "Conheço alguns dos principais", type: "B" },
      { text: "Às vezes sou pego de surpresa", type: "C" },
      { text: "Não sei o que me afeta", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você sabe que tipo de relacionamentos te fazem bem?",
    options: [
      { text: "Sim, sei exatamente o que busco", type: "A" },
      { text: "Tenho uma boa ideia", type: "B" },
      { text: "Ainda estou descobrindo", type: "C" },
      { text: "Não penso muito sobre isso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você entende suas necessidades emocionais?",
    options: [
      { text: "Sim, sei do que preciso emocionalmente", type: "A" },
      { text: "Tenho uma noção razoável", type: "B" },
      { text: "Às vezes entendo, outras não", type: "C" },
      { text: "Não sei o que preciso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você reconhece padrões repetitivos na sua vida?",
    options: [
      { text: "Sim, identifico padrões e trabalho neles", type: "A" },
      { text: "Percebo alguns padrões", type: "B" },
      { text: "Às vezes percebo depois que aconteceu", type: "C" },
      { text: "Não vejo padrões no meu comportamento", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você sabe o que te faz feliz?",
    options: [
      { text: "Sim, tenho clareza sobre isso", type: "A" },
      { text: "Tenho uma boa ideia", type: "B" },
      { text: "Ainda estou descobrindo", type: "C" },
      { text: "Não sei o que me faz feliz", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Você busca feedback dos outros sobre si mesmo?",
    options: [
      { text: "Sim, valorizo perspectivas externas", type: "A" },
      { text: "Às vezes peço feedback", type: "B" },
      { text: "Raramente busco opinião dos outros", type: "C" },
      { text: "Não me interessa o que pensam de mim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alto Autoconhecimento",
    emoji: "🔮",
    description: "Você possui alto nível de autoconhecimento! Entende suas emoções, motivações, padrões e necessidades. Esse é um fundamento essencial para crescimento pessoal.",
    traits: ["Autoconsciente", "Reflexivo", "Intencional", "Maduro"],
    strengths: ["Decisões alinhadas com valores", "Relacionamentos saudáveis", "Gestão emocional", "Crescimento contínuo"],
    weaknesses: ["Pode ser muito introspectivo", "Risco de paralisia por análise"],
    tips: ["Continue o trabalho de autoconhecimento", "Use esse conhecimento para ajudar outros", "Equilibre reflexão com ação"],
  },
  B: {
    type: "B",
    title: "Bom Autoconhecimento",
    emoji: "🌟",
    description: "Você tem bom nível de autoconhecimento. Entende muitas coisas sobre si mesmo, mas ainda há áreas para explorar e compreender melhor.",
    traits: ["Consciente", "Em evolução", "Curioso", "Reflexivo"],
    strengths: ["Boa base de autoconsciência", "Abertura para aprendizado", "Algumas decisões alinhadas"],
    weaknesses: ["Áreas cegas ainda existentes", "Inconsistência na reflexão"],
    tips: ["Aprofunde em áreas menos conhecidas", "Mantenha práticas de reflexão", "Busque feedback regularmente"],
  },
  C: {
    type: "C",
    title: "Autoconhecimento em Desenvolvimento",
    emoji: "🌱",
    description: "Seu autoconhecimento está em fase inicial. Você tem noções sobre si mesmo, mas muita coisa ainda é nebulosa. Investir nessa área pode transformar sua vida.",
    traits: ["Iniciante", "Descobrindo", "Potencial", "Em construção"],
    strengths: ["Potencial de crescimento", "Vida como descoberta"],
    weaknesses: ["Decisões podem não ser alinhadas", "Padrões repetitivos não percebidos", "Surpresas frequentes consigo mesmo"],
    tips: ["Comece um diário de reflexão", "Faça terapia ou coaching", "Peça feedback sincero de pessoas próximas"],
  },
  D: {
    type: "D",
    title: "Baixo Autoconhecimento",
    emoji: "🔍",
    description: "Você tem baixo nível de autoconhecimento. Muitas coisas sobre você mesmo são desconhecidas. Isso pode levar a decisões desalinhadas e padrões repetitivos.",
    traits: ["Desconectado", "Reativo", "Inconsciente", "Automático"],
    strengths: ["Grande potencial de descoberta", "Vida pode melhorar muito com autoconhecimento"],
    weaknesses: ["Decisões podem ser confusas", "Relacionamentos podem sofrer", "Padrões negativos se repetem"],
    tips: ["Invista em terapia ou autodesenvolvimento", "Comece a prestar atenção em si mesmo", "Autoconhecimento é a base de tudo"],
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
