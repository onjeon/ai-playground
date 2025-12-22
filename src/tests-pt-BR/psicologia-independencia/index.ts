// Teste de Independência
// Descubra seu nível de independência pessoal!

export const questions = [
  {
    id: 1,
    question: "Você consegue tomar decisões importantes sem consultar outros?",
    options: [
      { text: "Sim, confio no meu julgamento", type: "A" },
      { text: "Geralmente sim, mas às vezes peço opinião", type: "B" },
      { text: "Prefiro consultar antes de decidir", type: "C" },
      { text: "Tenho muita dificuldade em decidir sozinho", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você gosta de fazer coisas sozinho?",
    options: [
      { text: "Adoro, é meu estado preferido", type: "A" },
      { text: "Sim, mas também gosto de companhia", type: "B" },
      { text: "Às vezes, mas prefiro estar acompanhado", type: "C" },
      { text: "Não gosto de ficar sozinho", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você depende financeiramente de alguém?",
    options: [
      { text: "Não, sou totalmente independente", type: "A" },
      { text: "Sou independente com alguma ajuda pontual", type: "B" },
      { text: "Dependo parcialmente de alguém", type: "C" },
      { text: "Dependo totalmente de outros", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você iria a um restaurante ou cinema sozinho?",
    options: [
      { text: "Com prazer, faço isso frequentemente", type: "A" },
      { text: "Sim, não tenho problema com isso", type: "B" },
      { text: "Teria um pouco de desconforto", type: "C" },
      { text: "Nunca, preciso de companhia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você resolve problemas práticos (consertos, burocracia)?",
    options: [
      { text: "Sozinho, gosto de resolver minhas coisas", type: "A" },
      { text: "Geralmente dou conta, peço ajuda quando necessário", type: "B" },
      { text: "Prefiro que alguém me ajude", type: "C" },
      { text: "Dependo muito dos outros para isso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você consegue se divertir sozinho?",
    options: [
      { text: "Absolutamente, tenho muitos hobbies solo", type: "A" },
      { text: "Sim, consigo me entreter bem", type: "B" },
      { text: "Um pouco, mas prefiro companhia", type: "C" },
      { text: "Não, fico entediado sozinho", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você precisa de aprovação dos outros para suas escolhas?",
    options: [
      { text: "Não, confio nas minhas decisões", type: "A" },
      { text: "Às vezes gosto de validação, mas não preciso", type: "B" },
      { text: "Frequentemente busco aprovação", type: "C" },
      { text: "Sempre preciso que aprovem minhas escolhas", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você viajaria sozinho?",
    options: [
      { text: "Sim, adoro viajar solo", type: "A" },
      { text: "Sim, não teria problema", type: "B" },
      { text: "Teria certa insegurança", type: "C" },
      { text: "Nunca, preciso de companhia", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com solidão?",
    options: [
      { text: "Bem, gosto do meu espaço", type: "A" },
      { text: "Tranquilo na maioria das vezes", type: "B" },
      { text: "Tenho dificuldade, me sinto mal", type: "C" },
      { text: "Muito mal, não suporto estar só", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você mora ou moraria sozinho?",
    options: [
      { text: "Sim, prefiro assim", type: "A" },
      { text: "Sim, sem problema", type: "B" },
      { text: "Preferiria ter alguém", type: "C" },
      { text: "Não conseguiria morar só", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você forma suas próprias opiniões ou segue as dos outros?",
    options: [
      { text: "Sempre formo minhas próprias opiniões", type: "A" },
      { text: "Geralmente tenho minhas opiniões", type: "B" },
      { text: "Às vezes sigo o que outros pensam", type: "C" },
      { text: "Frequentemente adoto opiniões alheias", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua independência?",
    options: [
      { text: "Muito independente em tudo", type: "A" },
      { text: "Independente na maioria das áreas", type: "B" },
      { text: "Parcialmente dependente de outros", type: "C" },
      { text: "Muito dependente de outras pessoas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Independente",
    emoji: "🦅",
    description: "Você é altamente independente! Toma suas decisões, cuida de si mesmo e não tem problema em estar só. Valoriza autonomia acima de tudo.",
    traits: ["Autônomo", "Autoconfiante", "Autossuficiente", "Livre"],
    strengths: ["Não depende dos outros", "Toma decisões com confiança", "Confortável consigo mesmo", "Liberdade pessoal"],
    weaknesses: ["Pode ter dificuldade em pedir ajuda", "Pode parecer distante", "Risco de isolamento"],
    tips: ["Independência é ótima, mas conexão também importa", "Saiba pedir ajuda quando necessário", "Não confunda independência com isolamento"],
  },
  B: {
    type: "B",
    title: "Independência Saudável",
    emoji: "🌿",
    description: "Você tem independência saudável! É autônomo mas também valoriza conexões. Consegue cuidar de si enquanto mantém relacionamentos importantes.",
    traits: ["Equilibrado", "Autônomo", "Conectado", "Flexível"],
    strengths: ["Equilíbrio entre autonomia e conexão", "Capaz de estar só ou acompanhado", "Decisões próprias com input dos outros"],
    weaknesses: ["Nenhuma fraqueza significativa nesta área"],
    tips: ["Continue mantendo esse equilíbrio saudável", "Valorize tanto independência quanto interdependência"],
  },
  C: {
    type: "C",
    title: "Parcialmente Dependente",
    emoji: "🌱",
    description: "Você tem tendência à dependência em algumas áreas. Pode se beneficiar desenvolvendo mais autonomia e confiança em si mesmo.",
    traits: ["Dependente", "Inseguro", "Busca apoio", "Em desenvolvimento"],
    strengths: ["Valoriza relacionamentos", "Sabe pedir ajuda"],
    weaknesses: ["Dificuldade em ficar só", "Depende da aprovação alheia", "Pode se perder sem os outros"],
    tips: ["Pratique fazer coisas sozinho", "Desenvolva confiança nas suas decisões", "Independência é uma habilidade que se aprende"],
  },
  D: {
    type: "D",
    title: "Alta Dependência",
    emoji: "🔗",
    description: "Você tem alta dependência dos outros. Isso pode estar limitando sua vida e criando relacionamentos desequilibrados. Desenvolver independência é importante.",
    traits: ["Muito dependente", "Inseguro", "Carente", "Limitado"],
    strengths: ["Capacidade de conexão"],
    weaknesses: ["Vida limitada pela dependência", "Vulnerável em relacionamentos", "Dificuldade em funcionar só"],
    tips: ["Considere terapia para desenvolver autonomia", "Comece com pequenos passos de independência", "Sua vida pode melhorar muito com mais autonomia"],
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
