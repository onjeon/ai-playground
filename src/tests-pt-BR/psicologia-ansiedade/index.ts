// Teste de Nível de Ansiedade
// Descubra seu nível de ansiedade!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você se sente preocupado sem motivo aparente?",
    options: [
      { text: "Raramente ou nunca", type: "A" },
      { text: "Ocasionalmente", type: "B" },
      { text: "Frequentemente", type: "C" },
      { text: "Quase sempre", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você tem dificuldade para relaxar?",
    options: [
      { text: "Não, relaxo facilmente", type: "A" },
      { text: "Às vezes demoro um pouco", type: "B" },
      { text: "Frequentemente tenho dificuldade", type: "C" },
      { text: "Não consigo relaxar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como está seu sono?",
    options: [
      { text: "Durmo bem e acordo descansado", type: "A" },
      { text: "Geralmente bom, com exceções", type: "B" },
      { text: "Frequentemente tenho insônia ou sono ruim", type: "C" },
      { text: "Sono terrível, sempre cansado", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você sente sintomas físicos como coração acelerado, tensão muscular?",
    options: [
      { text: "Raramente ou nunca", type: "A" },
      { text: "Ocasionalmente em situações específicas", type: "B" },
      { text: "Frequentemente durante o dia", type: "C" },
      { text: "Constantemente, quase todo dia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você costuma antecipar problemas que ainda não aconteceram?",
    options: [
      { text: "Não, lido com problemas quando surgem", type: "A" },
      { text: "Às vezes me preocupo antecipadamente", type: "B" },
      { text: "Frequentemente imagino o pior", type: "C" },
      { text: "Sempre, fico paralisado com preocupações futuras", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Situações sociais te deixam ansioso?",
    options: [
      { text: "Não, me sinto confortável", type: "A" },
      { text: "Um pouco nervoso no início", type: "B" },
      { text: "Bastante ansioso, evito quando posso", type: "C" },
      { text: "Extremamente ansioso, evito ao máximo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue controlar suas preocupações?",
    options: [
      { text: "Sim, facilmente", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho dificuldade em parar de pensar", type: "C" },
      { text: "Não consigo, os pensamentos me dominam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "A ansiedade afeta sua produtividade?",
    options: [
      { text: "Não, funciono bem", type: "A" },
      { text: "Às vezes atrapalha um pouco", type: "B" },
      { text: "Frequentemente prejudica meu trabalho", type: "C" },
      { text: "Muito, mal consigo funcionar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem medo de perder o controle ou enlouquecer?",
    options: [
      { text: "Nunca", type: "A" },
      { text: "Raramente", type: "B" },
      { text: "Às vezes tenho esse medo", type: "C" },
      { text: "Frequentemente, é assustador", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você evita situações por causa da ansiedade?",
    options: [
      { text: "Não, enfrento normalmente", type: "A" },
      { text: "Ocasionalmente evito algumas coisas", type: "B" },
      { text: "Frequentemente evito situações", type: "C" },
      { text: "Evito muitas coisas, minha vida é limitada", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você sente falta de ar ou sensação de sufocamento?",
    options: [
      { text: "Nunca ou raramente", type: "A" },
      { text: "Ocasionalmente em momentos de stress", type: "B" },
      { text: "Frequentemente", type: "C" },
      { text: "Quase diariamente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu nível geral de ansiedade?",
    options: [
      { text: "Baixo e controlável", type: "A" },
      { text: "Normal, como a maioria das pessoas", type: "B" },
      { text: "Alto, me incomoda frequentemente", type: "C" },
      { text: "Muito alto, domina minha vida", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ansiedade Baixa",
    emoji: "😌",
    description: "Você tem baixo nível de ansiedade! Consegue lidar bem com o estresse e preocupações do dia a dia. Continue cultivando esse equilíbrio emocional.",
    traits: ["Tranquilo", "Equilibrado", "Resiliente", "Centrado"],
    strengths: ["Boa gestão do estresse", "Sono saudável", "Funcionamento normal", "Qualidade de vida"],
    weaknesses: ["Pode subestimar situações de risco", "Pode parecer despreocupado demais"],
    tips: ["Mantenha seus hábitos saudáveis", "Continue praticando autocuidado", "Ajude outros que sofrem com ansiedade"],
  },
  B: {
    type: "B",
    title: "Ansiedade Normal",
    emoji: "😊",
    description: "Você tem níveis normais de ansiedade. Algumas situações te deixam ansioso, mas você consegue lidar. Isso é completamente saudável e esperado.",
    traits: ["Adaptável", "Normal", "Funcional", "Consciente"],
    strengths: ["Ansiedade funcional", "Motivação adequada", "Resposta saudável ao estresse"],
    weaknesses: ["Momentos de preocupação excessiva", "Pode melhorar em algumas áreas"],
    tips: ["Pratique técnicas de relaxamento", "Mantenha rotinas saudáveis", "Fique atento a aumentos na ansiedade"],
  },
  C: {
    type: "C",
    title: "Ansiedade Moderada a Alta",
    emoji: "😰",
    description: "Você apresenta níveis elevados de ansiedade que estão afetando sua qualidade de vida. É importante buscar estratégias de manejo e possivelmente ajuda profissional.",
    traits: ["Preocupado", "Tenso", "Vigilante", "Inquieto"],
    strengths: ["Consciência do problema", "Atenção a detalhes"],
    weaknesses: ["Sono prejudicado", "Produtividade afetada", "Evitação de situações", "Sintomas físicos"],
    tips: ["Busque ajuda de um psicólogo", "Pratique respiração e mindfulness", "Exercícios físicos ajudam muito"],
  },
  D: {
    type: "D",
    title: "Ansiedade Severa",
    emoji: "🆘",
    description: "Você está experienciando ansiedade severa que está prejudicando significativamente sua vida. É urgente buscar ajuda profissional. Você não precisa sofrer sozinho.",
    traits: ["Sobrecarregado", "Paralisado", "Assustado", "Exausto"],
    strengths: ["Reconhecimento da necessidade de ajuda"],
    weaknesses: ["Funcionamento muito prejudicado", "Sintomas físicos intensos", "Evitação extrema", "Sofrimento constante"],
    tips: ["Procure um psiquiatra ou psicólogo urgentemente", "Considere medicação junto com terapia", "Você pode melhorar com tratamento adequado"],
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
