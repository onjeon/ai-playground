// Teste de Habilidade de Persuasão
// Descubra sua capacidade de persuasão e influência!

export const questions = [
  {
    id: 1,
    question: "Você consegue convencer pessoas a verem seu ponto de vista?",
    options: [
      { text: "Sim, frequentemente convenço os outros", type: "A" },
      { text: "Geralmente consigo, com bons argumentos", type: "B" },
      { text: "Às vezes, depende da pessoa", type: "C" },
      { text: "Raramente, as pessoas não me ouvem", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você adapta sua comunicação ao público?",
    options: [
      { text: "Sim, ajusto linguagem e argumentos", type: "A" },
      { text: "Geralmente tento adaptar", type: "B" },
      { text: "Às vezes, mas não é natural", type: "C" },
      { text: "Não, falo do mesmo jeito com todos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue ler o que motiva as pessoas?",
    options: [
      { text: "Sim, percebo o que as pessoas querem", type: "A" },
      { text: "Frequentemente percebo", type: "B" },
      { text: "Às vezes acerto, às vezes erro", type: "C" },
      { text: "Não, tenho dificuldade com isso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Em negociações, como você se sai?",
    options: [
      { text: "Muito bem, geralmente consigo o que quero", type: "A" },
      { text: "Bem, chego a acordos satisfatórios", type: "B" },
      { text: "Razoável, às vezes cedo demais", type: "C" },
      { text: "Mal, não sei negociar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você usa histórias e exemplos para persuadir?",
    options: [
      { text: "Sim, histórias são minha ferramenta principal", type: "A" },
      { text: "Frequentemente uso quando apropriado", type: "B" },
      { text: "Às vezes, mas não é natural", type: "C" },
      { text: "Não, foco em argumentos lógicos apenas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você escuta o outro antes de tentar persuadir?",
    options: [
      { text: "Sempre, entender é o primeiro passo", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes pulo essa etapa", type: "C" },
      { text: "Não, já sei o que quero dizer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você consegue superar objeções durante uma persuasão?",
    options: [
      { text: "Sim, antecipo e respondo objeções", type: "A" },
      { text: "Geralmente consigo lidar com elas", type: "B" },
      { text: "Tenho dificuldade com objeções", type: "C" },
      { text: "Objeções me paralisam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você transmite confiança quando fala?",
    options: [
      { text: "Sim, pessoas percebem minha convicção", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes pareço inseguro", type: "C" },
      { text: "Não, demonstro insegurança", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você sabe quando pressionar e quando recuar?",
    options: [
      { text: "Sim, leio bem o momento", type: "A" },
      { text: "Geralmente percebo os sinais", type: "B" },
      { text: "Às vezes pressiono demais ou de menos", type: "C" },
      { text: "Não tenho essa sensibilidade", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue vender ideias ou produtos?",
    options: [
      { text: "Sim, tenho facilidade com vendas", type: "A" },
      { text: "Razoavelmente bem", type: "B" },
      { text: "Tenho alguma dificuldade", type: "C" },
      { text: "Péssimo, não sei vender nada", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você cria rapport facilmente com desconhecidos?",
    options: [
      { text: "Sim, conecto rapidamente com pessoas", type: "A" },
      { text: "Geralmente consigo criar conexão", type: "B" },
      { text: "Tenho alguma dificuldade inicial", type: "C" },
      { text: "Não, demoro muito para conectar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua capacidade de persuasão?",
    options: [
      { text: "Excelente, é uma das minhas forças", type: "A" },
      { text: "Boa, me saio bem", type: "B" },
      { text: "Mediana, poderia melhorar", type: "C" },
      { text: "Fraca, não sei persuadir", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Persuasivo Nato",
    emoji: "🎯",
    description: "Você é naturalmente persuasivo! Sabe ler pessoas, adaptar sua comunicação e influenciar outros de forma ética. Isso é uma habilidade muito valiosa.",
    traits: ["Influente", "Comunicativo", "Adaptável", "Carismático"],
    strengths: ["Consegue o que quer frequentemente", "Liderança natural", "Vendas e negociação", "Conexões fáceis"],
    weaknesses: ["Pode manipular sem perceber", "Outros podem desconfiar"],
    tips: ["Use sua persuasão de forma ética", "Equilibre influência com integridade", "Ajude outros a desenvolverem essa habilidade"],
  },
  B: {
    type: "B",
    title: "Bom Persuasor",
    emoji: "💬",
    description: "Você tem boa capacidade de persuasão. Consegue influenciar pessoas e convencer com argumentos, embora tenha espaço para aprimoramento.",
    traits: ["Comunicativo", "Convincente", "Adaptável", "Em evolução"],
    strengths: ["Boa comunicação", "Capacidade de convencer", "Flexibilidade"],
    weaknesses: ["Pode melhorar em algumas áreas", "Nem sempre lê bem as pessoas"],
    tips: ["Estude mais sobre influência e persuasão", "Pratique escuta ativa", "Observe persuasores naturais"],
  },
  C: {
    type: "C",
    title: "Persuasão em Desenvolvimento",
    emoji: "🌱",
    description: "Sua capacidade de persuasão pode ser mais desenvolvida. Você tem dificuldade em convencer outros e influenciar situações. Isso é uma habilidade que se aprende.",
    traits: ["Direto", "Não adaptável", "Lógico", "Em desenvolvimento"],
    strengths: ["Honestidade na comunicação", "Potencial de melhoria"],
    weaknesses: ["Dificuldade em convencer", "Comunicação pode não ressoar", "Negociações podem ser difíceis"],
    tips: ["Aprenda técnicas de persuasão", "Pratique adaptar sua comunicação", "Estude livros sobre influência"],
  },
  D: {
    type: "D",
    title: "Baixa Persuasão",
    emoji: "😶",
    description: "Você tem baixa capacidade de persuasão. Isso pode estar limitando oportunidades na sua vida pessoal e profissional. A boa notícia é que persuasão se aprende.",
    traits: ["Não influente", "Direto demais", "Inflexível na comunicação", "Desconectado"],
    strengths: ["Autenticidade"],
    weaknesses: ["Dificuldade em influenciar", "Negociações desfavoráveis", "Menos oportunidades"],
    tips: ["Persuasão é uma habilidade, não um dom", "Invista em cursos de comunicação", "Comece praticando em situações de baixo risco"],
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
