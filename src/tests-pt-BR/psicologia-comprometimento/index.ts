// Teste de Comprometimento
// Descubra seu nível de comprometimento com objetivos e relações!

export const questions = [
  {
    id: 1,
    question: "Quando você faz uma promessa, você:",
    options: [
      { text: "Cumpro sempre, minha palavra é sagrada", type: "A" },
      { text: "Cumpro na grande maioria das vezes", type: "B" },
      { text: "Às vezes não consigo cumprir", type: "C" },
      { text: "Frequentemente não cumpro o que prometo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Em relacionamentos, você:",
    options: [
      { text: "Me entrego totalmente quando comprometo", type: "A" },
      { text: "Me comprometo seriamente", type: "B" },
      { text: "Tenho dificuldade com compromisso", type: "C" },
      { text: "Evito compromissos sérios", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você termina projetos que começa?",
    options: [
      { text: "Sempre, não desisto no meio", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Às vezes abandono projetos", type: "C" },
      { text: "Frequentemente deixo pela metade", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se sente com responsabilidades de longo prazo?",
    options: [
      { text: "Confortável, é parte da vida adulta", type: "A" },
      { text: "Aceito bem, com alguma resistência inicial", type: "B" },
      { text: "Desconfortável, prefiro evitar", type: "C" },
      { text: "Ansioso, evito ao máximo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você cumpre prazos?",
    options: [
      { text: "Sempre ou quase sempre", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Frequentemente atraso", type: "C" },
      { text: "Raramente cumpro prazos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você permanece em empregos por muito tempo?",
    options: [
      { text: "Sim, sou leal onde me comprometo", type: "A" },
      { text: "Razoavelmente, alguns anos em cada", type: "B" },
      { text: "Mudo frequentemente", type: "C" },
      { text: "Nunca fico muito tempo no mesmo lugar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você persiste em objetivos mesmo quando difíceis?",
    options: [
      { text: "Sim, compromisso significa persistir", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes desisto quando fica difícil", type: "C" },
      { text: "Frequentemente mudo de objetivo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "As pessoas confiam em você para cumprir acordos?",
    options: [
      { text: "Sim, sou conhecido pela confiabilidade", type: "A" },
      { text: "Geralmente confiam", type: "B" },
      { text: "Alguns têm dúvidas", type: "C" },
      { text: "Não sou visto como confiável", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem medo de compromisso?",
    options: [
      { text: "Não, compromisso é natural para mim", type: "A" },
      { text: "Um pouco às vezes, mas supero", type: "B" },
      { text: "Sim, frequentemente me assusto", type: "C" },
      { text: "Muito, evito compromissos sempre que posso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você honra compromissos mesmo quando inconvenientes?",
    options: [
      { text: "Sim, compromisso é compromisso", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes cancelo por conveniência", type: "C" },
      { text: "Se não for conveniente, cancelo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se compromete com seu desenvolvimento pessoal?",
    options: [
      { text: "Sim, invisto constantemente em mim", type: "A" },
      { text: "Frequentemente trabalho nisso", type: "B" },
      { text: "Às vezes, sem consistência", type: "C" },
      { text: "Não, deixo as coisas como estão", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu nível de comprometimento?",
    options: [
      { text: "Muito alto, sou pessoa de palavra", type: "A" },
      { text: "Alto, me esforço para cumprir", type: "B" },
      { text: "Médio, tenho dificuldades", type: "C" },
      { text: "Baixo, compromisso me assusta", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Comprometido",
    emoji: "💎",
    description: "Você é altamente comprometido! Sua palavra é sua honra e você persiste nos seus compromissos. Isso gera confiança e resultados.",
    traits: ["Confiável", "Dedicado", "Persistente", "Leal"],
    strengths: ["Confiança dos outros", "Resultados consistentes", "Relacionamentos sólidos", "Carreira estável"],
    weaknesses: ["Pode ter dificuldade em sair de situações ruins", "Pode se sobrecarregar"],
    tips: ["Continue honrando compromissos", "Saiba quando um compromisso não serve mais", "Não confunda comprometimento com auto-sacrifício"],
  },
  B: {
    type: "B",
    title: "Bom Comprometimento",
    emoji: "🌿",
    description: "Você tem bom nível de comprometimento. Cumpre a maioria dos compromissos e é geralmente confiável, com espaço para fortalecer ainda mais.",
    traits: ["Confiável", "Funcional", "Consistente", "Equilibrado"],
    strengths: ["Boa reputação", "Resultados adequados", "Flexibilidade quando necessário"],
    weaknesses: ["Alguns deslizes ocasionais", "Pode melhorar em áreas específicas"],
    tips: ["Fortaleça seus compromissos", "Identifique onde falha mais", "Sua palavra é seu maior ativo"],
  },
  C: {
    type: "C",
    title: "Dificuldade com Compromisso",
    emoji: "😰",
    description: "Você tem dificuldade com comprometimento. Promessas não cumpridas e projetos abandonados podem estar afetando sua reputação e relacionamentos.",
    traits: ["Inconsistente", "Hesitante", "Evitativo", "Inconstante"],
    strengths: ["Flexibilidade", "Potencial de melhoria"],
    weaknesses: ["Confiança abalada", "Oportunidades perdidas", "Relacionamentos instáveis"],
    tips: ["Faça menos promessas e cumpra todas", "Explore por que compromisso te assusta", "Pequenos compromissos cumpridos constroem confiança"],
  },
  D: {
    type: "D",
    title: "Fobia de Compromisso",
    emoji: "🚫",
    description: "Você evita compromissos ativamente. Isso pode estar relacionado a medos profundos e está provavelmente prejudicando sua vida significativamente.",
    traits: ["Evitativo", "Temeroso", "Inconstante", "Desconectado"],
    strengths: ["Liberdade percebida"],
    weaknesses: ["Relacionamentos muito prejudicados", "Carreira instável", "Vida sem direção", "Potencial não realizado"],
    tips: ["Explore as razões do medo de compromisso", "Terapia pode ajudar muito", "Compromisso não é prisão, é construção"],
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
