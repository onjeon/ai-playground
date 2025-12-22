// Teste de Sabedoria
// Descubra seu nível de sabedoria de vida!

export const questions = [
  {
    id: 1,
    question: "Você aprende com seus erros?",
    options: [
      { text: "Sempre, erros são professores", type: "A" },
      { text: "Geralmente extraio lições", type: "B" },
      { text: "Às vezes repito os mesmos erros", type: "C" },
      { text: "Frequentemente repito os mesmos erros", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você consegue ver múltiplas perspectivas em situações?",
    options: [
      { text: "Sim, considero vários ângulos", type: "A" },
      { text: "Geralmente tento ver outros lados", type: "B" },
      { text: "Tenho dificuldade, vejo só meu ponto", type: "C" },
      { text: "Minha perspectiva é a correta", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você distingue o que pode e não pode controlar?",
    options: [
      { text: "Sim, foco no que posso mudar", type: "A" },
      { text: "Geralmente consigo distinguir", type: "B" },
      { text: "Às vezes me frustro com o incontrolável", type: "C" },
      { text: "Quero controlar tudo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você pensa nas consequências antes de agir?",
    options: [
      { text: "Sempre, pondero impactos", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes ajo impulsivamente", type: "C" },
      { text: "Frequentemente me arrependo das ações", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você aceita incertezas e ambiguidades da vida?",
    options: [
      { text: "Sim, nem tudo tem resposta clara", type: "A" },
      { text: "Geralmente aceito", type: "B" },
      { text: "Tenho dificuldade com incertezas", type: "C" },
      { text: "Preciso de certezas absolutas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você busca conselho de pessoas mais experientes?",
    options: [
      { text: "Sim, valorizo a experiência alheia", type: "A" },
      { text: "Frequentemente busco", type: "B" },
      { text: "Às vezes, quando conveniente", type: "C" },
      { text: "Não preciso de conselhos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você reconhece que não sabe tudo?",
    options: [
      { text: "Absolutamente, quanto mais sei, mais vejo que não sei", type: "A" },
      { text: "Sim, há muito a aprender", type: "B" },
      { text: "Tenho dificuldade em admitir ignorância", type: "C" },
      { text: "Sei bastante sobre o que importa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você mantém a calma em crises?",
    options: [
      { text: "Sim, pânico não ajuda", type: "A" },
      { text: "Geralmente mantenho compostura", type: "B" },
      { text: "Tenho dificuldade em manter calma", type: "C" },
      { text: "Entro em pânico facilmente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você equilibra razão e emoção nas decisões?",
    options: [
      { text: "Sim, ambas têm valor", type: "A" },
      { text: "Tento equilibrar", type: "B" },
      { text: "Uma tende a dominar a outra", type: "C" },
      { text: "Sou dominado por uma ou outra", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você reflete sobre suas experiências?",
    options: [
      { text: "Sim, reflexão traz sabedoria", type: "A" },
      { text: "Frequentemente reflito", type: "B" },
      { text: "Às vezes, quando algo marcante acontece", type: "C" },
      { text: "Não, vivo o momento", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você distingue o que é realmente importante na vida?",
    options: [
      { text: "Sim, tenho clareza de prioridades", type: "A" },
      { text: "Geralmente sei o que importa", type: "B" },
      { text: "Às vezes me perco em trivialidades", type: "C" },
      { text: "Tudo parece igualmente importante", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua sabedoria de vida?",
    options: [
      { text: "Alta, aprendi muito com a vida", type: "A" },
      { text: "Boa, estou em evolução", type: "B" },
      { text: "Em desenvolvimento", type: "C" },
      { text: "Baixa, ainda tenho muito a aprender", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Sábio",
    emoji: "🦉",
    description: "Você demonstra sabedoria! Aprende com experiências, vê múltiplas perspectivas e toma decisões ponderadas. Sabedoria é diferente de inteligência.",
    traits: ["Sábio", "Ponderado", "Reflexivo", "Equilibrado"],
    strengths: ["Boas decisões", "Perspectiva ampla", "Calma em crises", "Aprendizado constante"],
    weaknesses: ["Pode parecer lento para decidir"],
    tips: ["Continue cultivando sabedoria", "Compartilhe com os mais jovens", "Sabedoria cresce com humildade"],
  },
  B: {
    type: "B",
    title: "Sabedoria em Crescimento",
    emoji: "🌿",
    description: "Você está desenvolvendo sabedoria. Aprende com a vida e busca equilíbrio, com espaço para amadurecer ainda mais.",
    traits: ["Aprendiz", "Em evolução", "Ponderado", "Aberto"],
    strengths: ["Bom caminho de crescimento", "Abertura para aprender"],
    weaknesses: ["Algumas áreas ainda imaturas"],
    tips: ["Continue refletindo sobre experiências", "Busque mentores sábios", "Cada desafio é oportunidade de sabedoria"],
  },
  C: {
    type: "C",
    title: "Sabedoria Limitada",
    emoji: "🌱",
    description: "Sua sabedoria ainda está em estágios iniciais. Pode repetir erros e ter dificuldade em ver além da própria perspectiva. Há muito potencial de crescimento.",
    traits: ["Imaturo", "Em desenvolvimento", "Reativo", "Limitado"],
    strengths: ["Potencial de crescimento", "Vida como professora"],
    weaknesses: ["Erros repetidos", "Perspectiva limitada", "Decisões impulsivas"],
    tips: ["Pare e reflita antes de agir", "Busque perspectivas diferentes", "Sabedoria vem de experiência refletida"],
  },
  D: {
    type: "D",
    title: "Falta de Sabedoria",
    emoji: "🔍",
    description: "Você demonstra pouca sabedoria em suas abordagens de vida. Isso pode estar causando erros repetidos e dificuldades evitáveis. Desenvolver sabedoria é possível.",
    traits: ["Impulsivo", "Fechado", "Repetitivo", "Imaturo"],
    strengths: ["Muito espaço para crescer"],
    weaknesses: ["Erros constantes", "Visão limitada", "Crises frequentes", "Decisões ruins"],
    tips: ["Sabedoria pode ser desenvolvida em qualquer idade", "Reflita sobre padrões de sua vida", "Considere buscar orientação"],
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
