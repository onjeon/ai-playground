// Teste de Capacidade de Perdão
// Descubra sua capacidade de perdoar!

export const questions = [
  {
    id: 1,
    question: "Você consegue perdoar pessoas que te magoaram?",
    options: [
      { text: "Sim, perdão é libertador", type: "A" },
      { text: "Geralmente consigo, com tempo", type: "B" },
      { text: "Tenho muita dificuldade", type: "C" },
      { text: "Não, guardo rancor", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você guarda ressentimento por muito tempo?",
    options: [
      { text: "Não, processo e deixo ir", type: "A" },
      { text: "Por um tempo, mas supero", type: "B" },
      { text: "Sim, demoro muito para superar", type: "C" },
      { text: "Indefinidamente, não esqueço", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue perdoar sem receber desculpas?",
    options: [
      { text: "Sim, perdão é para mim, não para o outro", type: "A" },
      { text: "É mais difícil, mas consigo", type: "B" },
      { text: "Preciso de desculpas primeiro", type: "C" },
      { text: "Não, sem desculpas não perdoo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você perdoa a si mesmo por erros passados?",
    options: [
      { text: "Sim, sou humano e erro", type: "A" },
      { text: "Geralmente consigo me perdoar", type: "B" },
      { text: "Tenho dificuldade com autocompaixão", type: "C" },
      { text: "Não, carrego culpa sempre", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você acredita que todos merecem segunda chance?",
    options: [
      { text: "Na maioria dos casos, sim", type: "A" },
      { text: "Depende da situação", type: "B" },
      { text: "Em poucos casos", type: "C" },
      { text: "Não, uma vez é suficiente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você consegue perdoar traições de confiança?",
    options: [
      { text: "Com dificuldade, mas sim", type: "A" },
      { text: "Às vezes, depende da gravidade", type: "B" },
      { text: "Muito raramente", type: "C" },
      { text: "Nunca, traição é imperdoável", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O rancor afeta sua qualidade de vida?",
    options: [
      { text: "Não, não guardo rancor", type: "A" },
      { text: "Minimamente", type: "B" },
      { text: "Sim, me afeta", type: "C" },
      { text: "Muito, o rancor me consome", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue reconstruir relações após mágoas?",
    options: [
      { text: "Sim, quando vale a pena", type: "A" },
      { text: "Às vezes, com esforço", type: "B" },
      { text: "Raramente, prefiro afastar", type: "C" },
      { text: "Não, relação ferida está morta", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você entende que pessoas cometem erros?",
    options: [
      { text: "Sim, todos somos falíveis", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Em teoria sim, na prática difícil", type: "C" },
      { text: "Erros têm consequências permanentes", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você busca vingança quando magoado?",
    options: [
      { text: "Não, vingança não resolve", type: "A" },
      { text: "Raramente, prefiro superar", type: "B" },
      { text: "Às vezes penso nisso", type: "C" },
      { text: "Sim, gosto de ver justiça feita", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você vê perdão como fraqueza ou força?",
    options: [
      { text: "Força, requer muita coragem", type: "A" },
      { text: "Mais para força", type: "B" },
      { text: "Não sei, pode ser fraqueza", type: "C" },
      { text: "Fraqueza, não se deve perdoar fácil", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua capacidade de perdoar?",
    options: [
      { text: "Alta, perdoo com facilidade", type: "A" },
      { text: "Boa, consigo perdoar", type: "B" },
      { text: "Baixa, tenho dificuldade", type: "C" },
      { text: "Muito baixa, quase nunca perdoo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alta Capacidade de Perdão",
    emoji: "💚",
    description: "Você tem alta capacidade de perdoar! Entende que perdão é para você, não para o outro. Isso te liberta e permite seguir em frente.",
    traits: ["Compassivo", "Libertado", "Sábio", "Em paz"],
    strengths: ["Paz interior", "Relacionamentos podem ser reconstruídos", "Não carrega peso desnecessário"],
    weaknesses: ["Pode parecer que não estabelece limites"],
    tips: ["Continue perdoando", "Perdão não é aceitar abuso", "Você pode perdoar e ainda se proteger"],
  },
  B: {
    type: "B",
    title: "Boa Capacidade de Perdão",
    emoji: "🌿",
    description: "Você consegue perdoar, embora precise de tempo e processo. Um equilíbrio saudável entre proteção e libertação.",
    traits: ["Equilibrado", "Processador", "Compassivo", "Funcional"],
    strengths: ["Consegue perdoar quando importante", "Tempo de processamento adequado"],
    weaknesses: ["Pode carregar algumas mágoas desnecessárias"],
    tips: ["Continue desenvolvendo o perdão", "Lembre-se que é para você, não para o outro", "O perdão liberta"],
  },
  C: {
    type: "C",
    title: "Dificuldade em Perdoar",
    emoji: "💔",
    description: "Você tem dificuldade em perdoar, carregando mágoas e ressentimentos. Isso pode estar pesando em você mais do que no outro.",
    traits: ["Ressentido", "Guardador de mágoas", "Preso ao passado", "Pesado"],
    strengths: ["Memória de autoproteção"],
    weaknesses: ["Peso emocional", "Relacionamentos afetados", "Rancor consome energia"],
    tips: ["Perdão é um presente para você mesmo", "Guardar rancor é como beber veneno", "Considere terapia para trabalhar mágoas"],
  },
  D: {
    type: "D",
    title: "Incapacidade de Perdoar",
    emoji: "🔒",
    description: "Você tem grande dificuldade em perdoar, guardando rancor indefinidamente. Isso está provavelmente afetando sua paz e bem-estar.",
    traits: ["Rancoroso", "Preso", "Vingativo", "Amargurado"],
    strengths: ["Autoproteção extrema"],
    weaknesses: ["Grande peso emocional", "Amargura crônica", "Saúde mental afetada", "Relacionamentos impossíveis"],
    tips: ["Busque ajuda profissional", "O rancor machuca mais você do que o outro", "Perdão é possível de aprender"],
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
