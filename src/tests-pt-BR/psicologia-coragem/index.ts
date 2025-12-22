// Teste de Coragem
// Descubra seu nível de coragem emocional!

export const questions = [
  {
    id: 1,
    question: "Você enfrenta seus medos ativamente?",
    options: [
      { text: "Sim, encaro de frente quando necessário", type: "A" },
      { text: "Geralmente enfrento, com esforço", type: "B" },
      { text: "Tenho dificuldade, prefiro evitar", type: "C" },
      { text: "Evito meus medos a todo custo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você defende suas opiniões mesmo quando impopulares?",
    options: [
      { text: "Sim, com respeito mas firmeza", type: "A" },
      { text: "Geralmente sim, quando importante", type: "B" },
      { text: "Às vezes guardo para mim", type: "C" },
      { text: "Não, evito discordância", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você toma iniciativas arriscadas quando acredita nelas?",
    options: [
      { text: "Sim, corro riscos calculados", type: "A" },
      { text: "Às vezes, quando vale a pena", type: "B" },
      { text: "Raramente, o risco me paralisa", type: "C" },
      { text: "Nunca, evito riscos totalmente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você fala a verdade mesmo quando difícil?",
    options: [
      { text: "Sim, honestidade é fundamental", type: "A" },
      { text: "Geralmente sim, com tato", type: "B" },
      { text: "Às vezes omito para evitar problemas", type: "C" },
      { text: "Prefiro não criar conflitos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você admite vulnerabilidades para outros?",
    options: [
      { text: "Sim, é preciso coragem mas faço", type: "A" },
      { text: "Com pessoas próximas, sim", type: "B" },
      { text: "Raramente, me sinto fraco", type: "C" },
      { text: "Nunca, escondo minhas fraquezas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você se levanta após fracassos?",
    options: [
      { text: "Sim, fracasso faz parte do sucesso", type: "A" },
      { text: "Geralmente consigo após processar", type: "B" },
      { text: "Tenho dificuldade, fico abalado", type: "C" },
      { text: "Fracassos me destroem", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você confronta situações injustas?",
    options: [
      { text: "Sim, não fico calado com injustiça", type: "A" },
      { text: "Quando me afeta ou a pessoas próximas", type: "B" },
      { text: "Raramente, não é meu papel", type: "C" },
      { text: "Nunca, não quero me envolver", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você assume responsabilidade por suas ações?",
    options: [
      { text: "Sempre, mesmo quando há consequências", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes justifico ou culpo outros", type: "C" },
      { text: "Prefiro não assumir culpa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você persegue seus sonhos apesar dos obstáculos?",
    options: [
      { text: "Sim, obstáculos não me param", type: "A" },
      { text: "Persisto com determinação", type: "B" },
      { text: "Desisto quando fica muito difícil", type: "C" },
      { text: "Abandonei meus sonhos há tempo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você inicia conversas difíceis quando necessário?",
    options: [
      { text: "Sim, são importantes", type: "A" },
      { text: "Quando necessário, com preparo", type: "B" },
      { text: "Tenho muita dificuldade", type: "C" },
      { text: "Evito a todo custo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você é autêntico mesmo que não agrede a todos?",
    options: [
      { text: "Sim, autenticidade é fundamental", type: "A" },
      { text: "Geralmente sim", type: "B" },
      { text: "Às vezes me escondo para agradar", type: "C" },
      { text: "Me adapto ao que esperam de mim", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua coragem?",
    options: [
      { text: "Alta, enfrento o que precisa", type: "A" },
      { text: "Boa, com espaço para crescer", type: "B" },
      { text: "Baixa, o medo frequentemente vence", type: "C" },
      { text: "Muito baixa, vivo com medo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Corajoso",
    emoji: "🦁",
    description: "Você é altamente corajoso! Enfrenta medos, fala verdades difíceis e age apesar da incerteza. Coragem não é ausência de medo, é agir apesar dele.",
    traits: ["Corajoso", "Autêntico", "Resiliente", "Determinado"],
    strengths: ["Enfrenta desafios", "Vive autenticamente", "Inspira outros", "Progride na vida"],
    weaknesses: ["Pode parecer imprudente às vezes", "Pode criar conflitos"],
    tips: ["Continue exercitando coragem", "Equilibre com sabedoria", "Use sua coragem para ajudar outros"],
  },
  B: {
    type: "B",
    title: "Coragem Funcional",
    emoji: "💪",
    description: "Você tem boa coragem funcional. Enfrenta situações difíceis quando necessário, embora nem sempre com facilidade. Está no caminho certo.",
    traits: ["Corajoso", "Ponderado", "Equilibrado", "Crescendo"],
    strengths: ["Coragem quando conta", "Equilíbrio entre cautela e ação", "Capacidade de crescimento"],
    weaknesses: ["Pode hesitar em algumas situações", "Espaço para mais coragem"],
    tips: ["Pratique coragem em situações de baixo risco", "Lembre-se de vitórias passadas", "Coragem se fortalece com uso"],
  },
  C: {
    type: "C",
    title: "Coragem Baixa",
    emoji: "😰",
    description: "Você tem baixa coragem, sendo dominado por medos frequentemente. Isso pode estar limitando sua vida e impedindo seu progresso.",
    traits: ["Temeroso", "Evitativo", "Hesitante", "Inseguro"],
    strengths: ["Cautela", "Evita riscos imprudentes"],
    weaknesses: ["Vida limitada pelo medo", "Oportunidades perdidas", "Autenticidade comprometida"],
    tips: ["Coragem pode ser desenvolvida", "Comece com pequenos enfrentamentos", "Cada vitória sobre medo fortalece"],
  },
  D: {
    type: "D",
    title: "Dominado pelo Medo",
    emoji: "😱",
    description: "Você está dominado pelo medo. Isso está impedindo você de viver plenamente e pode estar causando muito sofrimento. Ajuda pode transformar isso.",
    traits: ["Paralisado", "Muito temeroso", "Evitativo", "Limitado"],
    strengths: ["Potencial de transformação"],
    weaknesses: ["Vida severamente limitada", "Sofrimento constante", "Potencial desperdiçado"],
    tips: ["Busque ajuda profissional", "O medo pode ser trabalhado", "Você é mais capaz do que acredita"],
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
