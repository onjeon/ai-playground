// Qual Lenda do Folclore Brasileiro Você Seria?
// Descubra qual personagem do folclore brasileiro representa sua essência!

export const questions = [
  {
    id: 1,
    question: "Qual ambiente mais te atrai?",
    options: [
      { text: "Florestas e natureza selvagem", type: "A" },
      { text: "Rios, lagos e cachoeiras", type: "B" },
      { text: "Noite e escuridão", type: "C" },
      { text: "Estradas e caminhos misteriosos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que você mais protege?",
    options: [
      { text: "A natureza e os animais", type: "A" },
      { text: "Segredos e mistérios", type: "B" },
      { text: "A justiça e punir os errados", type: "C" },
      { text: "Os viajantes e desgarrados", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com pessoas más?",
    options: [
      { text: "Aplico lições sobre respeito à natureza", type: "A" },
      { text: "Encanto e confundo suas mentes", type: "B" },
      { text: "Assusto para que aprendam", type: "C" },
      { text: "Mostro a eles o caminho certo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seria seu poder especial?",
    options: [
      { text: "Controlar a floresta e os animais", type: "A" },
      { text: "Hipnotizar e seduzir", type: "B" },
      { text: "Transformação e terror", type: "C" },
      { text: "Ilusões e orientação", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você é percebido pelos outros?",
    options: [
      { text: "Respeitado(a) e temido(a)", type: "A" },
      { text: "Misterioso(a) e irresistível", type: "B" },
      { text: "Assustador(a) mas justo(a)", type: "C" },
      { text: "Travesso(a) mas útil", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual seu horário preferido?",
    options: [
      { text: "O dia todo, especialmente na natureza", type: "A" },
      { text: "O entardecer e início da noite", type: "B" },
      { text: "A noite escura, sem lua", type: "C" },
      { text: "Qualquer hora, quando há movimento", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que mais te irrita nas pessoas?",
    options: [
      { text: "Destruição da natureza", type: "A" },
      { text: "Falta de atenção aos sinais", type: "B" },
      { text: "Maldade e crueldade", type: "C" },
      { text: "Arrogância e pressa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se move pelo mundo?",
    options: [
      { text: "Por dentro das matas, como um protetor", type: "A" },
      { text: "Pelas águas, livre e fluido", type: "B" },
      { text: "Nas sombras, observando", type: "C" },
      { text: "Pelos caminhos, sempre em movimento", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual sua característica mais marcante?",
    options: [
      { text: "Minha conexão profunda com a natureza", type: "A" },
      { text: "Meu carisma e mistério", type: "B" },
      { text: "Minha capacidade de assustar", type: "C" },
      { text: "Minha capacidade de confundir e ajudar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você ensina às pessoas?",
    options: [
      { text: "Respeitar a natureza e seus limites", type: "A" },
      { text: "Não confiar em tudo que parece bom", type: "B" },
      { text: "Que más ações têm consequências", type: "C" },
      { text: "Que nem todos os caminhos são diretos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como é sua relação com os humanos?",
    options: [
      { text: "De proteção quando respeitam a natureza", type: "A" },
      { text: "De fascínio e sedução", type: "B" },
      { text: "De punição aos que erram", type: "C" },
      { text: "De travessura e aprendizado", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual seria seu domínio?",
    options: [
      { text: "Toda a floresta Amazônica", type: "A" },
      { text: "Todos os rios e águas do Brasil", type: "B" },
      { text: "As noites e cemitérios", type: "C" },
      { text: "As estradas e encruzilhadas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Curupira",
    emoji: "🌿",
    description: "Você é o Curupira! Protetor da floresta, com seus cabelos de fogo e pés virados. Assim como essa lenda, você defende a natureza com paixão e ensina lições a quem não a respeita!",
    traits: ["Protetor(a)", "Feroz", "Natural", "Justo(a)"],
    strengths: ["Conexão com natureza", "Senso de justiça", "Proteção feroz", "Sabedoria ancestral"],
    weaknesses: ["Pode ser radical", "Dificuldade com humanos", "Julgamento severo"],
    tips: ["Seja mais paciente com os humanos", "Nem todos são inimigos", "Eduque antes de punir"],
  },
  B: {
    type: "B",
    title: "Iara (Mãe d'Água)",
    emoji: "🧜‍♀️",
    description: "Você é a Iara! Sereia das águas doces, bela e misteriosa. Assim como essa lenda, você encanta com seu carisma e guarda segredos profundos como as águas!",
    traits: ["Encantador(a)", "Misterioso(a)", "Sedutor(a)", "Profundo(a)"],
    strengths: ["Carisma irresistível", "Mistério atraente", "Profundidade emocional", "Beleza única"],
    weaknesses: ["Pode iludir", "Distância emocional", "Segredos demais"],
    tips: ["Seja mais transparente", "Nem todos são presas", "Conexões reais são valiosas"],
  },
  C: {
    type: "C",
    title: "Saci-Pererê / Mula Sem Cabeça",
    emoji: "👻",
    description: "Você é o lado assustador do folclore! Como o Saci ou a Mula, você pode parecer assustador(a), mas no fundo tem um propósito: ensinar lições importantes!",
    traits: ["Intimidador(a)", "Justo(a)", "Intenso(a)", "Educador(a)"],
    strengths: ["Fazer respeitar regras", "Ensinar pelo medo", "Presença marcante", "Senso de justiça"],
    weaknesses: ["Muito assustador(a)", "Dificuldade em ser amável", "Pode afastar pessoas"],
    tips: ["Suavize sua abordagem", "O medo não é a única ferramenta", "Mostre seu lado bom também"],
  },
  D: {
    type: "D",
    title: "Saci Travesso",
    emoji: "🔴",
    description: "Você é o Saci travesso! Com sua carapuça vermelha, você prega peças mas também ajuda os perdidos. Assim como ele, você mistura travessura com sabedoria!",
    traits: ["Travesso(a)", "Sábio(a)", "Divertido(a)", "Guia"],
    strengths: ["Humor", "Ajudar de forma indireta", "Sabedoria popular", "Criatividade"],
    weaknesses: ["Nem todos entendem suas brincadeiras", "Pode confundir", "Às vezes impaciente"],
    tips: ["Seja mais direto às vezes", "Nem todos curtem travessuras", "Use sua sabedoria abertamente"],
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
