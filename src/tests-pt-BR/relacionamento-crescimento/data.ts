// Crescimento a Dois
// Descubra como você lida com crescimento no relacionamento!

export const questions = [
  {
    id: 1,
    question: "Quando você percebe que precisa melhorar algo em si, você:",
    options: [
      { text: "Compartilho com meu amor e peço apoio no processo", type: "A" },
      { text: "Trabalho nisso sozinho(a) e mostro os resultados depois", type: "B" },
      { text: "Gosto quando meu par me ajuda a identificar o que melhorar", type: "C" },
      { text: "Prefiro que cada um cuide do próprio crescimento", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre apontar aspectos que seu parceiro(a) pode melhorar:",
    options: [
      { text: "Faço com carinho, crescimento é junto", type: "A" },
      { text: "Espero ser perguntado(a), não gosto de criticar", type: "B" },
      { text: "Dou feedbacks construtivos quando acho necessário", type: "C" },
      { text: "Evito, cada um sabe o que precisa melhorar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando vocês têm objetivos diferentes na vida:",
    options: [
      { text: "Conversamos até achar um caminho que contemple os dois", type: "A" },
      { text: "Cada um segue seu objetivo, nos apoiamos à distância", type: "B" },
      { text: "Trabalhamos pra alinhar os objetivos ao longo do tempo", type: "C" },
      { text: "Se for muito diferente, pode ser incompatibilidade", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre terapia de casal ou livros sobre relacionamento:",
    options: [
      { text: "Adoro! Investir na relação é prioridade", type: "A" },
      { text: "Faria se fosse realmente necessário", type: "B" },
      { text: "Acho válido, conhecimento sempre ajuda", type: "C" },
      { text: "Prefiro resolver as coisas entre nós mesmos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando um dos dois está evoluindo mais rápido profissionalmente:",
    options: [
      { text: "Celebramos juntos, a vitória de um é do casal", type: "A" },
      { text: "Cada um no seu ritmo, sem comparações", type: "B" },
      { text: "O que cresce mais ajuda a puxar o outro", type: "C" },
      { text: "Pode gerar desconforto se a diferença for grande", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você vê a relação entre crescimento individual e do casal?",
    options: [
      { text: "Crescer junto é o mais bonito, evolução compartilhada", type: "A" },
      { text: "Primeiro cuido do meu, depois pensamos no nosso", type: "B" },
      { text: "Os dois precisam andar juntos, se equilibram", type: "C" },
      { text: "Crescimento individual é mais importante", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando seu amor te dá um feedback difícil de ouvir:",
    options: [
      { text: "Agradeço, reflito e tento melhorar", type: "A" },
      { text: "Fico na defensiva primeiro, depois processo", type: "B" },
      { text: "Avalio se faz sentido e converso sobre", type: "C" },
      { text: "Não gosto que me digam o que preciso mudar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Vocês costumam revisar e conversar sobre como o relacionamento está?",
    options: [
      { text: "Sim, fazemos check-ins regulares sobre nós", type: "A" },
      { text: "Às vezes, quando surge a necessidade", type: "B" },
      { text: "Conversamos quando algo não está bem", type: "C" },
      { text: "Não muito, deixamos fluir naturalmente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se seu parceiro(a) quisesse fazer uma grande mudança de vida:",
    options: [
      { text: "Apoio e encontramos um jeito de fazer juntos", type: "A" },
      { text: "Apoio, mas preciso ver como me afeta também", type: "B" },
      { text: "Discutimos os prós e contras antes de decidir", type: "C" },
      { text: "Ele(a) decide, eu decido se acompanho ou não", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual é sua visão sobre crescer em um relacionamento?",
    options: [
      { text: "O casal ideal cresce junto e se transforma junto", type: "A" },
      { text: "Cada um cresce no seu ritmo, mantendo a parceria", type: "B" },
      { text: "O relacionamento deve impulsionar o crescimento de ambos", type: "C" },
      { text: "Crescimento pessoal vem primeiro, relação vem depois", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Crescimento em Simbiose",
    emoji: "🌻",
    percentage: 95,
    description: "Você acredita profundamente em crescer junto! Vê o relacionamento como uma parceria de evolução, onde um impulsiona o outro. Compartilham processos, feedbacks e celebram vitórias juntos!",
    characteristics: ["Parceiro(a) de evolução", "Aberto(a) a feedback", "Investidor(a) na relação", "Celebrador(a)"],
    advice: "Crescer junto é lindo! Só cuide pra não perder sua individualidade no processo. Ter espaço pra crescimento pessoal também é importante!",
  },
  B: {
    type: "B",
    title: "Crescimento Paralelo",
    emoji: "🌿",
    percentage: 75,
    description: "Você acredita que cada um cresce no seu ritmo e espaço! Apoia o parceiro(a), mas prefere cuidar do próprio desenvolvimento primeiro. A relação se beneficia quando ambos estão bem!",
    characteristics: ["Independente", "Respeitador(a) de espaço", "Autocentrado(a) positivamente", "Prático(a)"],
    advice: "Respeitar o espaço individual é saudável! Mas inclua seu par em alguns processos de crescimento - compartilhar vulnerabilidades fortalece a intimidade!",
  },
  C: {
    type: "C",
    title: "Crescimento Equilibrado",
    emoji: "⚖️",
    percentage: 80,
    description: "Você busca equilibrar crescimento individual e do casal! Acredita que os dois aspectos precisam andar juntos e se retroalimentar. Dá e recebe feedbacks construtivos!",
    characteristics: ["Equilibrado(a)", "Construtivo(a)", "Analítico(a)", "Comunicativo(a)"],
    advice: "Você achou um bom equilíbrio! Continue mantendo essa postura. Lembre-se que às vezes é ok crescer de forma desigual em certas áreas - o importante é o apoio mútuo!",
  },
  D: {
    type: "D",
    title: "Crescimento Independente",
    emoji: "🦋",
    percentage: 55,
    description: "Você prioriza o crescimento individual! Acredita que cada um é responsável por sua própria evolução e que a relação não deve ser o foco principal de desenvolvimento!",
    characteristics: ["Muito independente", "Autossuficiente", "Focado(a) em si", "Individualista"],
    advice: "Independência é válida, mas relacionamentos precisam de investimento conjunto. Se quiser construir algo duradouro, encontre formas de crescer junto também!",
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
