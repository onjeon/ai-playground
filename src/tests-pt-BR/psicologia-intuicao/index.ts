// Teste de Intuição
// Descubra o quanto você usa sua intuição!

export const questions = [
  {
    id: 1,
    question: "Você costuma ter pressentimentos sobre situações?",
    options: [
      { text: "Sim, frequentemente e geralmente acerto", type: "A" },
      { text: "Às vezes tenho e presto atenção", type: "B" },
      { text: "Raramente, prefiro fatos concretos", type: "C" },
      { text: "Não acredito em pressentimentos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você toma decisões importantes?",
    options: [
      { text: "Confio muito na minha intuição", type: "A" },
      { text: "Mistura de intuição e análise", type: "B" },
      { text: "Principalmente análise racional", type: "C" },
      { text: "Só com dados e fatos concretos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue ler bem as pessoas ao conhecê-las?",
    options: [
      { text: "Sim, geralmente acerto sobre elas", type: "A" },
      { text: "Frequentemente tenho boas impressões", type: "B" },
      { text: "Às vezes, mas prefiro conhecer melhor", type: "C" },
      { text: "Não, só julgo com o tempo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você presta atenção aos seus sonhos?",
    options: [
      { text: "Sim, às vezes trazem insights", type: "A" },
      { text: "Às vezes, quando são marcantes", type: "B" },
      { text: "Não muito, são só sonhos", type: "C" },
      { text: "Não, não têm significado", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você já ignorou sua intuição e se arrependeu?",
    options: [
      { text: "Sim, várias vezes! Aprendi a confiar nela", type: "A" },
      { text: "Algumas vezes aconteceu", type: "B" },
      { text: "Não lembro de situações assim", type: "C" },
      { text: "Não, minhas decisões são racionais", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você percebe a energia de ambientes?",
    options: [
      { text: "Sim, sinto claramente se é boa ou ruim", type: "A" },
      { text: "Às vezes percebo algo", type: "B" },
      { text: "Não presto muita atenção nisso", type: "C" },
      { text: "Não acredito nisso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você confia na sua primeira impressão?",
    options: [
      { text: "Muito, geralmente está certa", type: "A" },
      { text: "Considero, mas verifico depois", type: "B" },
      { text: "Não muito, prefiro evidências", type: "C" },
      { text: "Não, primeiras impressões enganam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você já soube algo sem saber explicar como?",
    options: [
      { text: "Sim, acontece frequentemente", type: "A" },
      { text: "Às vezes, é estranho", type: "B" },
      { text: "Raramente ou nunca", type: "C" },
      { text: "Não, sempre sei explicar meu raciocínio", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você se sente sobre decisões intuitivas?",
    options: [
      { text: "Confio nelas como em decisões racionais", type: "A" },
      { text: "As considero como um fator", type: "B" },
      { text: "Prefiro ter razões concretas", type: "C" },
      { text: "Não são confiáveis", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue antecipar problemas antes que aconteçam?",
    options: [
      { text: "Sim, frequentemente vejo sinais", type: "A" },
      { text: "Às vezes percebo algo errado", type: "B" },
      { text: "Só quando há sinais óbvios", type: "C" },
      { text: "Geralmente sou pego de surpresa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se considera uma pessoa intuitiva?",
    options: [
      { text: "Muito, é uma das minhas forças", type: "A" },
      { text: "Razoavelmente intuitivo", type: "B" },
      { text: "Mais racional do que intuitivo", type: "C" },
      { text: "Nada intuitivo, sou 100% racional", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Você acredita que intuição pode ser desenvolvida?",
    options: [
      { text: "Sim, e pratico desenvolvê-la", type: "A" },
      { text: "Acredito que sim", type: "B" },
      { text: "Não sei se é possível", type: "C" },
      { text: "Não, é algo que você tem ou não tem", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Intuitivo",
    emoji: "🔮",
    description: "Você é altamente intuitivo! Confia nos seus pressentimentos e eles geralmente estão certos. Sua intuição é uma ferramenta poderosa na sua vida.",
    traits: ["Intuitivo", "Perceptivo", "Sensível", "Conectado"],
    strengths: ["Leitura de pessoas e situações", "Decisões rápidas e acertadas", "Percepção além do óbvio", "Conexão com o inconsciente"],
    weaknesses: ["Pode parecer irracional para alguns", "Às vezes difícil de explicar decisões"],
    tips: ["Continue confiando na sua intuição", "Combine-a com análise quando necessário", "Use esse dom para ajudar outros"],
  },
  B: {
    type: "B",
    title: "Intuição Equilibrada",
    emoji: "⚖️",
    description: "Você equilibra intuição e razão! Presta atenção nos pressentimentos mas também usa análise. Este é um equilíbrio saudável e eficaz.",
    traits: ["Equilibrado", "Perceptivo", "Ponderado", "Flexível"],
    strengths: ["Melhor dos dois mundos", "Decisões bem fundamentadas", "Abertura para insights"],
    weaknesses: ["Pode duvidar da intuição às vezes"],
    tips: ["Confie mais na intuição quando apropriado", "Continue equilibrando ambas abordagens", "Preste atenção nos padrões"],
  },
  C: {
    type: "C",
    title: "Mais Racional",
    emoji: "🧠",
    description: "Você é predominantemente racional, preferindo fatos e análise. Isso é válido, mas desenvolver mais intuição pode complementar suas habilidades.",
    traits: ["Racional", "Analítico", "Lógico", "Cético"],
    strengths: ["Decisões bem fundamentadas", "Pensamento claro", "Confiabilidade"],
    weaknesses: ["Pode perder insights intuitivos", "Pode ser lento em decisões rápidas"],
    tips: ["Experimente confiar mais na intuição", "Às vezes a primeira impressão está certa", "Intuição é processamento inconsciente de informação"],
  },
  D: {
    type: "D",
    title: "Puramente Racional",
    emoji: "📊",
    description: "Você é puramente racional, descartando intuição como ferramenta. Isso funciona, mas você pode estar ignorando uma fonte valiosa de informação.",
    traits: ["Super racional", "Cético", "Analítico", "Factual"],
    strengths: ["Pensamento muito estruturado", "Decisões baseadas em dados"],
    weaknesses: ["Perde insights valiosos", "Pode demorar demais em decisões", "Desconectado de percepções sutis"],
    tips: ["Intuição é real - é processamento inconsciente", "Experimente prestar atenção em pressentimentos", "Nem tudo pode ser quantificado"],
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
