// Qual Tipo de Vó/Vô Brasileiro Você É?
// Descubra seu perfil de avô/avó!

export const questions = [
  {
    id: 1,
    question: "Quando os netos chegam, você...",
    options: [
      { text: "Já tá com comida pronta esperando", type: "A" },
      { text: "Abraça forte e enche de beijos", type: "B" },
      { text: "Já puxa pro quarto pra brincar", type: "C" },
      { text: "Fala 'chegou a bagunça!'", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Os netos pedem algo que os pais não deixam. Você...",
    options: [
      { text: "Dou escondido, vó pode", type: "A" },
      { text: "Pergunto pros pais primeiro", type: "B" },
      { text: "Distraio com outra coisa", type: "C" },
      { text: "Também não deixo, regra é regra", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sua especialidade pra netos é...",
    options: [
      { text: "Comida caseira deliciosa", type: "A" },
      { text: "Muito amor e carinho", type: "B" },
      { text: "Brincadeiras e diversão", type: "C" },
      { text: "Histórias e conselhos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Os netos dormem na sua casa?",
    options: [
      { text: "Todo fim de semana se possível", type: "A" },
      { text: "Às vezes, adoro quando vêm", type: "B" },
      { text: "De vez em quando, é cansativo", type: "C" },
      { text: "Raramente, preciso do meu espaço", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você mima muito os netos?",
    options: [
      { text: "Sim! Vó/vô existe pra isso", type: "A" },
      { text: "Um pouco, com equilíbrio", type: "B" },
      { text: "Tento não mimar demais", type: "C" },
      { text: "Não, educação é importante", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você usa tecnologia pra falar com os netos?",
    options: [
      { text: "Sim! WhatsApp, vídeo chamada, tudo", type: "A" },
      { text: "O básico, WhatsApp funciona", type: "B" },
      { text: "Eles me ajudam a usar", type: "C" },
      { text: "Prefiro pessoalmente ou telefone", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você dá dinheiro pros netos?",
    options: [
      { text: "Sempre! Toda visita tem um trocado", type: "A" },
      { text: "Em ocasiões especiais", type: "B" },
      { text: "Às vezes, quando pedem", type: "C" },
      { text: "Não, prefiro dar presentes úteis", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você conta histórias de antigamente?",
    options: [
      { text: "Toda hora! Eles amam (ou fingem)", type: "A" },
      { text: "Às vezes, quando é relevante", type: "B" },
      { text: "Raramente, eles não têm paciência", type: "C" },
      { text: "Não muito, o passado ficou no passado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Os pais dos seus netos reclamam que você...",
    options: [
      { text: "Mima demais e deseduca", type: "A" },
      { text: "Dá muito doce e besteira", type: "B" },
      { text: "Não impõe limites", type: "C" },
      { text: "É muito rígido(a)", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seu programa favorito com os netos?",
    options: [
      { text: "Cozinhar junto e comer", type: "A" },
      { text: "Passeios e parques", type: "B" },
      { text: "Jogos e brincadeiras em casa", type: "C" },
      { text: "Conversar e assistir TV junto", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você guarda coisas dos netos?",
    options: [
      { text: "Tudo! Desenhos, fotos, lembranças", type: "A" },
      { text: "As mais especiais", type: "B" },
      { text: "Algumas coisas", type: "C" },
      { text: "Não muito, sou prático(a)", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como vó/vô?",
    options: [
      { text: "'Vem cá que a vó/vô fez comida!'", type: "A" },
      { text: "'Te amo até a lua e de volta'", type: "B" },
      { text: "'Bora brincar, vó/vô tá novo(a)!'", type: "C" },
      { text: "'Respeita seu vô/vó!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Vó/Vô Comida",
    emoji: "🍲",
    description: "Você é a Vó/Vô Comida! Amor passa pelo estômago na sua casa. Sempre tem comida pronta, quitute escondido e a cozinha é o coração do lar. Neto magro aqui não sai!",
    traits: ["Alimentador(a)", "Acolhedor(a)", "Tradicional", "Cuidador(a)"],
    strengths: ["Comida deliciosa", "Casa sempre acolhedora", "Amor em forma de comida"],
    weaknesses: ["Pode engordar os netos", "Difícil dizer não", "Os pais reclamam"],
    tips: ["Seu amor alimenta a alma", "Balanceie um pouco", "Continue acolhendo assim"],
  },
  B: {
    type: "B",
    title: "Vó/Vô Coração",
    emoji: "❤️",
    description: "Você é a Vó/Vô Coração! Puro amor e carinho. Abraços, beijos, palavras doces. Os netos sabem que na sua casa sempre terão amor incondicional!",
    traits: ["Amoroso(a)", "Carinhoso(a)", "Emotivo(a)", "Acolhedor(a)"],
    strengths: ["Amor incondicional", "Segurança emocional", "Laços fortes"],
    weaknesses: ["Muito emotivo(a)", "Pode sufocar de carinho", "Chora fácil"],
    tips: ["Seu amor é essencial", "Os netos têm sorte", "Continue sendo assim"],
  },
  C: {
    type: "C",
    title: "Vó/Vô Criança",
    emoji: "🎮",
    description: "Você é a Vó/Vô Criança! Jovem de espírito, entra em todas as brincadeiras. Jogar videogame, correr no quintal, fazer bagunça... você é o parceiro de aventuras!",
    traits: ["Brincalhão(a)", "Jovem de espírito", "Divertido(a)", "Energético(a)"],
    strengths: ["Conexão única", "Diversão garantida", "Memórias incríveis"],
    weaknesses: ["Pode cansar", "Os pais acham que mima", "Não impõe limites"],
    tips: ["Sua energia é rara", "Descanse também", "Os netos amam você"],
  },
  D: {
    type: "D",
    title: "Vó/Vô Sábio",
    emoji: "📖",
    description: "Você é a Vó/Vô Sábio! Respeito e sabedoria são sua marca. Você passa valores, conta histórias, dá conselhos. É a referência de autoridade e experiência da família!",
    traits: ["Sábio(a)", "Respeitado(a)", "Tradicional", "Conselheiro(a)"],
    strengths: ["Transmite valores", "Respeito", "Sabedoria", "Referência familiar"],
    weaknesses: ["Pode parecer distante", "Menos brincalhão(a)", "Os netos podem ter medo"],
    tips: ["Sua sabedoria é valiosa", "Brinque um pouco também", "Você é importante"],
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
