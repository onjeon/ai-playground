// Teste de Zona de Conforto
// Descubra como você lida com a zona de conforto!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você faz coisas novas que te assustam um pouco?",
    options: [
      { text: "Frequentemente, busco crescimento", type: "A" },
      { text: "De vez em quando, me desafio", type: "B" },
      { text: "Raramente, prefiro o familiar", type: "C" },
      { text: "Nunca, evito desconforto", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você se sente confortável com mudanças na rotina?",
    options: [
      { text: "Sim, mudanças são revigorantes", type: "A" },
      { text: "Geralmente me adapto bem", type: "B" },
      { text: "Tenho dificuldade com mudanças", type: "C" },
      { text: "Odeio mudanças, me perturbam muito", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você busca oportunidades que te fazem crescer?",
    options: [
      { text: "Ativamente, é assim que evoluo", type: "A" },
      { text: "Sim, quando aparecem", type: "B" },
      { text: "Às vezes, se não forem muito desafiadoras", type: "C" },
      { text: "Não, prefiro onde estou", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se sente em situações sociais novas?",
    options: [
      { text: "Animado com as possibilidades", type: "A" },
      { text: "Um pouco nervoso mas encaro", type: "B" },
      { text: "Muito desconfortável", type: "C" },
      { text: "Evito ao máximo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você aprende coisas novas por iniciativa própria?",
    options: [
      { text: "Sempre, amo aprender", type: "A" },
      { text: "Frequentemente, quando me interessa", type: "B" },
      { text: "Às vezes, se for necessário", type: "C" },
      { text: "Raramente, prefiro o que já sei", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você já recusou uma oportunidade boa por medo?",
    options: [
      { text: "Não, encaro desafios", type: "A" },
      { text: "Talvez uma ou outra vez", type: "B" },
      { text: "Algumas vezes já aconteceu", type: "C" },
      { text: "Frequentemente, o medo vence", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você viajaria sozinho para um lugar desconhecido?",
    options: [
      { text: "Com certeza, seria uma aventura", type: "A" },
      { text: "Sim, embora com alguma ansiedade", type: "B" },
      { text: "Teria muita dificuldade", type: "C" },
      { text: "Jamais, muito assustador", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você se desafia profissionalmente?",
    options: [
      { text: "Sim, busco projetos desafiadores", type: "A" },
      { text: "De vez em quando aceito desafios", type: "B" },
      { text: "Prefiro ficar no que domino", type: "C" },
      { text: "Evito qualquer desafio novo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você experimenta comidas, músicas ou culturas diferentes?",
    options: [
      { text: "Adoro explorar o novo!", type: "A" },
      { text: "Frequentemente experimento", type: "B" },
      { text: "Às vezes, com resistência", type: "C" },
      { text: "Não, prefiro o que conheço", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você iniciaria uma conversa com um desconhecido interessante?",
    options: [
      { text: "Sim, sem hesitar", type: "A" },
      { text: "Provavelmente sim", type: "B" },
      { text: "Teria muita dificuldade", type: "C" },
      { text: "Nunca, muito desconfortável", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você já se arrependeu de não ter saído da zona de conforto?",
    options: [
      { text: "Não, geralmente encaro", type: "A" },
      { text: "Às vezes, aprendi com isso", type: "B" },
      { text: "Sim, várias vezes", type: "C" },
      { text: "Frequentemente, mas não mudo", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua relação com a zona de conforto?",
    options: [
      { text: "Saio frequentemente para crescer", type: "A" },
      { text: "Saio quando necessário", type: "B" },
      { text: "Prefiro ficar nela", type: "C" },
      { text: "Nunca saio, é muito assustador", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Expandidor de Fronteiras",
    emoji: "🚀",
    description: "Você busca ativamente sair da zona de conforto! Entende que crescimento acontece fora do familiar e abraça desafios. Isso te leva longe na vida.",
    traits: ["Corajoso", "Aventureiro", "Em crescimento", "Curioso"],
    strengths: ["Crescimento constante", "Muitas experiências", "Adaptabilidade", "Coragem admirável"],
    weaknesses: ["Pode se sobrecarregar", "Pode parecer inquieto"],
    tips: ["Continue expandindo fronteiras", "Equilibre desafio com descanso", "Inspire outros a saírem da zona de conforto"],
  },
  B: {
    type: "B",
    title: "Equilibrado",
    emoji: "🌿",
    description: "Você sai da zona de conforto quando necessário ou quando faz sentido. Há equilíbrio entre conforto e crescimento, que é saudável.",
    traits: ["Equilibrado", "Ponderado", "Aberto", "Funcional"],
    strengths: ["Equilíbrio saudável", "Crescimento adequado", "Conforto quando necessário"],
    weaknesses: ["Pode perder oportunidades por não se desafiar mais"],
    tips: ["Considere se desafiar um pouco mais", "O crescimento está fora do conforto", "Você tem capacidade para mais"],
  },
  C: {
    type: "C",
    title: "Apegado ao Conforto",
    emoji: "🏠",
    description: "Você prefere a zona de conforto e evita desafios. Isso pode estar limitando seu crescimento e fazendo você perder oportunidades importantes.",
    traits: ["Cauteloso", "Rotineiro", "Estagnado", "Seguro"],
    strengths: ["Estabilidade", "Segurança", "Previsibilidade"],
    weaknesses: ["Crescimento limitado", "Oportunidades perdidas", "Vida pode ficar monótona"],
    tips: ["Comece com pequenos desafios", "Pergunte-se o que perdeu por não tentar", "Crescimento requer desconforto temporário"],
  },
  D: {
    type: "D",
    title: "Preso na Zona de Conforto",
    emoji: "🔒",
    description: "Você está preso na zona de conforto, evitando qualquer desafio ou mudança. Isso pode estar causando estagnação significativa na sua vida.",
    traits: ["Medroso", "Estagnado", "Evitativo", "Limitado"],
    strengths: ["Sensação temporária de segurança"],
    weaknesses: ["Vida muito limitada", "Crescimento zero", "Arrependimentos possíveis", "Potencial desperdiçado"],
    tips: ["O medo está controlando sua vida", "Considere ajuda profissional", "Você é capaz de muito mais do que imagina"],
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
