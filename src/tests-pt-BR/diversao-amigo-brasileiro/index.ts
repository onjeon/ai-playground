// Que Tipo de Amigo Brasileiro Você É?
// Descubra seu perfil de amizade!

export const questions = [
  {
    id: 1,
    question: "Um amigo liga às 3h da manhã com problema. Você...",
    options: [
      { text: "Atendo e vou ajudar imediatamente", type: "A" },
      { text: "Atendo e dou conselhos pelo telefone", type: "B" },
      { text: "Respondo mensagem quando acordar", type: "C" },
      { text: "Deixo tocar, amanhã resolvo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Com que frequência você fala com amigos?",
    options: [
      { text: "Todo dia, vários grupos e conversas", type: "A" },
      { text: "Algumas vezes por semana", type: "B" },
      { text: "Quando tem algo específico", type: "C" },
      { text: "Raramente, cada um na sua", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você demonstra amizade?",
    options: [
      { text: "Presença, ajuda, estar sempre lá", type: "A" },
      { text: "Conselhos e conversas profundas", type: "B" },
      { text: "Momentos de qualidade juntos", type: "C" },
      { text: "Respeitar o espaço do outro", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quantos amigos próximos você tem?",
    options: [
      { text: "Muitos! Sou amigo de todo mundo", type: "A" },
      { text: "Um grupo sólido de amigos", type: "B" },
      { text: "Poucos, mas verdadeiros", type: "C" },
      { text: "1 ou 2, no máximo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você reage quando um amigo te decepciona?",
    options: [
      { text: "Perdoo fácil, amizade é mais importante", type: "A" },
      { text: "Converso pra entender e resolver", type: "B" },
      { text: "Fico magoado mas supero", type: "C" },
      { text: "Afasto, confiança é difícil de recuperar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você lembra de datas importantes dos amigos?",
    options: [
      { text: "Todas! Aniversários, conquistas, tudo", type: "A" },
      { text: "As principais, com ajuda do Facebook", type: "B" },
      { text: "Algumas, faço meu melhor", type: "C" },
      { text: "Raramente, não sou bom com datas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você empresta dinheiro pra amigos?",
    options: [
      { text: "Sim, sem pensar duas vezes", type: "A" },
      { text: "Depende da situação e do valor", type: "B" },
      { text: "Raramente, dinheiro e amizade não combinam", type: "C" },
      { text: "Nunca, cada um com o seu", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você é em grupos de amigos?",
    options: [
      { text: "O que organiza, anima e reúne", type: "A" },
      { text: "O conselheiro que ouve a todos", type: "B" },
      { text: "O que participa quando chamado", type: "C" },
      { text: "O mais quieto do grupo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você conta seus problemas para amigos?",
    options: [
      { text: "Sim, compartilho tudo", type: "A" },
      { text: "Os importantes, sim", type: "B" },
      { text: "Às vezes, quando preciso", type: "C" },
      { text: "Raramente, resolvo sozinho(a)", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você faz novos amigos?",
    options: [
      { text: "Fácil! Converso com todo mundo", type: "A" },
      { text: "Naturalmente, através de atividades", type: "B" },
      { text: "Demora, mas quando faço é pra sempre", type: "C" },
      { text: "Difícil, prefiro os que já tenho", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Amizade de infância, você mantém?",
    options: [
      { text: "Sim! Amigos de sempre", type: "A" },
      { text: "Alguns, os mais importantes", type: "B" },
      { text: "Poucos, a vida muda", type: "C" },
      { text: "Não, cada fase tem seus amigos", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define sua amizade?",
    options: [
      { text: "'Amigo é família que escolhemos'", type: "A" },
      { text: "'Amigo de verdade é pra vida toda'", type: "B" },
      { text: "'Qualidade vale mais que quantidade'", type: "C" },
      { text: "'Cada um no seu quadrado'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Amigo do Peito",
    emoji: "🤗",
    description: "Você é o Amigo do Peito! Presente, leal e sempre disponível. Pra você, amizade é coisa séria e você está lá em todos os momentos!",
    traits: ["Leal", "Presente", "Generoso(a)", "Dedicado(a)"],
    strengths: ["Amizades profundas", "Confiabilidade", "Generosidade", "Estar sempre lá"],
    weaknesses: ["Pode se sobrecarregar", "Às vezes invasivo(a)", "Espera o mesmo dos outros"],
    tips: ["Cuide de você também", "Nem todos serão recíprocos", "Estabeleça limites saudáveis"],
  },
  B: {
    type: "B",
    title: "Amigo Conselheiro",
    emoji: "💬",
    description: "Você é o Amigo Conselheiro! Ouve, aconselha e apoia. Seus amigos sabem que podem contar com sua sabedoria e compreensão!",
    traits: ["Sábio(a)", "Compreensivo(a)", "Equilibrado(a)", "Confiável"],
    strengths: ["Bons conselhos", "Saber ouvir", "Equilíbrio", "Confiança dos amigos"],
    weaknesses: ["Às vezes muito conselheiro(a)", "Pode esquecer de se divertir", "Peso emocional"],
    tips: ["Nem sempre precisa dar conselho", "Divirta-se mais com amigos", "Cuide da sua energia"],
  },
  C: {
    type: "C",
    title: "Amigo Seletivo",
    emoji: "⭐",
    description: "Você é o Amigo Seletivo! Poucos amigos, mas de qualidade. Você valoriza conexões profundas sobre quantidade de pessoas!",
    traits: ["Seletivo(a)", "Profundo(a)", "Fiel", "Reservado(a)"],
    strengths: ["Amizades verdadeiras", "Profundidade", "Lealdade total", "Conexões significativas"],
    weaknesses: ["Poucos amigos", "Difícil se abrir", "Pode parecer distante"],
    tips: ["Às vezes vale ampliar o círculo", "Nem toda amizade precisa ser profunda", "Abra-se mais"],
  },
  D: {
    type: "D",
    title: "Amigo Independente",
    emoji: "🐺",
    description: "Você é o Amigo Independente! Valoriza seu espaço e espera o mesmo dos outros. Amizade pra você é respeitar a individualidade!",
    traits: ["Independente", "Reservado(a)", "Respeitoso(a)", "Autossuficiente"],
    strengths: ["Não depende de ninguém", "Respeita limites", "Autossuficiência", "Sem drama"],
    weaknesses: ["Pode parecer frio(a)", "Conexões superficiais", "Solidão às vezes"],
    tips: ["Amizade requer investimento", "Abra-se um pouco mais", "Vulnerabilidade não é fraqueza"],
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
