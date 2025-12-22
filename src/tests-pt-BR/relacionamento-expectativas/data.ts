// Expectativas no Amor
// Descubra como você lida com expectativas nos relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Quando você entra em um relacionamento, suas expectativas são:",
    options: [
      { text: "Altas - tenho uma visão clara do que quero e espero", type: "A" },
      { text: "Moderadas - tenho algumas expectativas básicas", type: "B" },
      { text: "Flexíveis - me adapto conforme a relação evolui", type: "C" },
      { text: "Baixas - prefiro não esperar muito pra não me frustrar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre o que você espera do parceiro(a) ideal:",
    options: [
      { text: "Tenho uma lista bem definida de características", type: "A" },
      { text: "Tenho algumas coisas importantes em mente", type: "B" },
      { text: "Estou aberto(a) a conhecer diferentes tipos de pessoa", type: "C" },
      { text: "Não tenho muitas expectativas específicas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando o parceiro(a) não corresponde a uma expectativa sua, você:",
    options: [
      { text: "Fico bastante frustrado(a), é importante pra mim", type: "A" },
      { text: "Converso sobre isso e tento resolver", type: "B" },
      { text: "Avalio se é algo realmente essencial ou se posso flexibilizar", type: "C" },
      { text: "Deixo pra lá, não gosto de cobrar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você comunica suas expectativas claramente ao parceiro(a)?",
    options: [
      { text: "Sim, deixo bem claro o que espero da relação", type: "A" },
      { text: "Geralmente sim, mas poderia ser mais direto(a)", type: "B" },
      { text: "Às vezes, depende da situação", type: "C" },
      { text: "Não muito, espero que perceba naturalmente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre datas comemorativas (aniversário de namoro, Dia dos Namorados):",
    options: [
      { text: "Tenho grandes expectativas e planejo algo especial", type: "A" },
      { text: "Gosto de comemorar, mas sem pressão excessiva", type: "B" },
      { text: "Legal se rolar algo, mas não fico mal se não", type: "C" },
      { text: "Não ligo muito pra essas datas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Suas expectativas são baseadas em:",
    options: [
      { text: "Filmes, livros e o que considero amor ideal", type: "A" },
      { text: "Experiências passadas e aprendizados", type: "B" },
      { text: "O que funciona pra mim e meu parceiro(a)", type: "C" },
      { text: "Não penso muito sobre isso, deixo acontecer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando você percebe que tinha uma expectativa irreal:",
    options: [
      { text: "É difícil aceitar, demoro pra me adaptar", type: "A" },
      { text: "Reconheço e trabalho pra ajustar", type: "B" },
      { text: "Flexibilizo com relativa facilidade", type: "C" },
      { text: "Não costumo criar muitas expectativas mesmo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre o ritmo do relacionamento (quando morar junto, casar, etc):",
    options: [
      { text: "Tenho um cronograma mental e expectativas claras", type: "A" },
      { text: "Tenho algumas expectativas, mas com flexibilidade", type: "B" },
      { text: "Vou sentindo o momento, sem pressa", type: "C" },
      { text: "Deixo fluir naturalmente, sem planos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você costuma comparar seu relacionamento com os dos outros?",
    options: [
      { text: "Às vezes sim, e isso afeta minhas expectativas", type: "A" },
      { text: "Comparo, mas sei que cada casal é diferente", type: "B" },
      { text: "Raramente, foco no meu relacionamento", type: "C" },
      { text: "Nunca, cada um vive o seu", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais te representa sobre expectativas no amor?",
    options: [
      { text: "Tenho um padrão alto e não abro mão", type: "A" },
      { text: "Tenho minhas expectativas, mas sou realista", type: "B" },
      { text: "Me adapto ao que o relacionamento oferece", type: "C" },
      { text: "Prefiro não esperar nada pra não me decepcionar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Expectativas Elevadas",
    emoji: "⭐",
    percentage: 92,
    description: "Você tem expectativas altas nos relacionamentos! Sabe exatamente o que quer e não se contenta com menos. Valoriza muito a qualidade do amor e tem uma visão clara do ideal!",
    characteristics: ["Exigente", "Determinado(a)", "Visionário(a)", "Alto padrão"],
    advice: "Ter padrões é bom! Mas cuidado pra não criar expectativas impossíveis ou baseadas em fantasias. Converse abertamente sobre o que espera e seja flexível quando necessário!",
  },
  B: {
    type: "B",
    title: "Expectativas Equilibradas",
    emoji: "⚖️",
    percentage: 75,
    description: "Você tem expectativas equilibradas e realistas! Sabe o que quer, mas também entende que relacionamentos são construções. Comunica suas necessidades e se adapta quando faz sentido!",
    characteristics: ["Realista", "Comunicativo(a)", "Adaptável", "Maduro(a)"],
    advice: "Você está num bom lugar! Continue comunicando suas expectativas e também ouvindo as do seu parceiro(a). O equilíbrio entre ter padrões e ser flexível é a chave!",
  },
  C: {
    type: "C",
    title: "Expectativas Flexíveis",
    emoji: "🌊",
    percentage: 58,
    description: "Você tem expectativas flexíveis e se adapta às circunstâncias! Prefere deixar o relacionamento fluir naturalmente do que ter uma lista rígida de demandas. Vai construindo junto!",
    characteristics: ["Flexível", "Adaptável", "Desapegado(a)", "Fluido(a)"],
    advice: "Flexibilidade é ótima! Mas não deixe de comunicar suas necessidades básicas. É possível ser adaptável e ainda assim ter clareza sobre o que é importante pra você!",
  },
  D: {
    type: "D",
    title: "Expectativas Mínimas",
    emoji: "🍃",
    percentage: 40,
    description: "Você evita criar muitas expectativas nos relacionamentos! Pode ser pra se proteger de frustrações ou simplesmente por preferir deixar acontecer. O lado bom é que se frustra menos!",
    characteristics: ["Protetor(a) de si", "Desapegado(a)", "Receoso(a)", "Evita frustração"],
    advice: "Cuidado pra não se anular! Ter expectativas saudáveis é parte de um relacionamento. Reflita se está evitando esperar por medo ou por preferência real. Você merece pedir o que precisa!",
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
