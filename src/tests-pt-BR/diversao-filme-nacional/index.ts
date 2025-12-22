// Qual Gênero de Filme Brasileiro Você Seria?
// Descubra qual estilo de cinema nacional representa sua vida!

export const questions = [
  {
    id: 1,
    question: "Como você contaria sua história de vida?",
    options: [
      { text: "Com drama, emoção e superação", type: "A" },
      { text: "Com muito humor e piadas", type: "B" },
      { text: "Com romance e sentimentos intensos", type: "C" },
      { text: "Com ação, aventura e adrenalina", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual tipo de história mais te emociona?",
    options: [
      { text: "Histórias de luta e vitória", type: "A" },
      { text: "Situações engraçadas do cotidiano", type: "B" },
      { text: "Grandes histórias de amor", type: "C" },
      { text: "Aventuras emocionantes", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com problemas?",
    options: [
      { text: "Com determinação e garra", type: "A" },
      { text: "Rindo das situações difíceis", type: "B" },
      { text: "Buscando apoio em quem amo", type: "C" },
      { text: "Enfrentando de frente, com ação", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que mais te define?",
    options: [
      { text: "Minha história de superação", type: "A" },
      { text: "Meu senso de humor", type: "B" },
      { text: "Minha capacidade de amar", type: "C" },
      { text: "Minha coragem e energia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual cenário brasileiro mais te representa?",
    options: [
      { text: "Comunidades e periferias reais", type: "A" },
      { text: "Cidades com gente comum engraçada", type: "B" },
      { text: "Paisagens românticas e bonitas", type: "C" },
      { text: "Natureza selvagem e aventura", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Que música tocaria no seu filme?",
    options: [
      { text: "Rap, funk, música de luta", type: "A" },
      { text: "Música popular, pagode, axé", type: "B" },
      { text: "MPB romântica, bossa nova", type: "C" },
      { text: "Rock, trilha de ação", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual seria o tema do seu filme?",
    options: [
      { text: "Desigualdade e luta por justiça", type: "A" },
      { text: "As loucuras do brasileiro comum", type: "B" },
      { text: "O poder transformador do amor", type: "C" },
      { text: "Aventuras pelo Brasil", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como terminaria seu filme?",
    options: [
      { text: "Com uma vitória sobre adversidades", type: "A" },
      { text: "Com todo mundo rindo", type: "B" },
      { text: "Com o casal junto e feliz", type: "C" },
      { text: "Com a missão cumprida", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual ator/atriz brasileiro(a) te representaria?",
    options: [
      { text: "Wagner Moura, Fernanda Montenegro", type: "A" },
      { text: "Paulo Gustavo, Ingrid Guimarães", type: "B" },
      { text: "Rodrigo Santoro, Isis Valverde", type: "C" },
      { text: "Cauã Reymond, Giovanna Antonelli", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você busca ao assistir um filme?",
    options: [
      { text: "Reflexão sobre a sociedade", type: "A" },
      { text: "Rir e me divertir", type: "B" },
      { text: "Me emocionar e suspirar", type: "C" },
      { text: "Emoção e adrenalina", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual seria seu papel no filme?",
    options: [
      { text: "O protagonista que luta por justiça", type: "A" },
      { text: "O personagem engraçado que alivia tensões", type: "B" },
      { text: "O par romântico apaixonado", type: "C" },
      { text: "O herói de ação destemido", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual filme brasileiro mais te marca?",
    options: [
      { text: "Cidade de Deus, Tropa de Elite", type: "A" },
      { text: "Os Saltimbancos Trapalhões, Minha Mãe é Uma Peça", type: "B" },
      { text: "Central do Brasil, Dois Filhos de Francisco", type: "C" },
      { text: "O Cangaceiro, filmes de aventura", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Drama Social Brasileiro",
    emoji: "🎬",
    description: "Você é o Drama Social! Sua vida é marcada por luta, superação e realidade crua. Como 'Cidade de Deus' e 'Tropa de Elite', sua história inspira pela garra e determinação!",
    traits: ["Lutador(a)", "Realista", "Determinado(a)", "Consciente"],
    strengths: ["Capacidade de superação", "Consciência social", "Força interior", "Autenticidade"],
    weaknesses: ["Pode ser pesado(a)", "Dificuldade em descontrair", "Leva tudo muito a sério"],
    tips: ["Permita-se momentos leves", "Rir também é resistência", "Cuide da sua saúde mental"],
  },
  B: {
    type: "B",
    title: "Comédia Brasileira",
    emoji: "😂",
    description: "Você é a Comédia! Sua vida é leve, divertida e cheia de situações engraçadas. Como as comédias de Paulo Gustavo, você faz todos rirem e esquece os problemas!",
    traits: ["Bem-humorado(a)", "Leve", "Carismático(a)", "Popular"],
    strengths: ["Fazer todos rirem", "Leveza na vida", "Carisma natural", "Descontrair ambientes"],
    weaknesses: ["Pode fugir de assuntos sérios", "Às vezes superficial", "Dificuldade com drama"],
    tips: ["Nem tudo é piada", "Profundidade também importa", "Permita-se vulnerabilidade"],
  },
  C: {
    type: "C",
    title: "Romance Brasileiro",
    emoji: "❤️",
    description: "Você é o Romance! Sua vida é guiada pelo coração e pelas emoções. Como os grandes romances brasileiros, você acredita no poder transformador do amor!",
    traits: ["Romântico(a)", "Emotivo(a)", "Sensível", "Apaixonado(a)"],
    strengths: ["Capacidade de amar", "Sensibilidade", "Conexões profundas", "Emoção genuína"],
    weaknesses: ["Muito emotivo(a)", "Pode se magoar fácil", "Dependência emocional"],
    tips: ["Ame também a si mesmo(a)", "Razão e emoção em equilíbrio", "Nem todos merecem seu coração"],
  },
  D: {
    type: "D",
    title: "Aventura/Ação Brasileira",
    emoji: "🎯",
    description: "Você é a Aventura! Sua vida é cheia de ação, coragem e desafios. Como os filmes de ação brasileiros, você não para e está sempre em busca da próxima aventura!",
    traits: ["Corajoso(a)", "Energético(a)", "Aventureiro(a)", "Destemido(a)"],
    strengths: ["Coragem natural", "Energia para ação", "Não ter medo de desafios", "Determinação"],
    weaknesses: ["Pode ser impulsivo(a)", "Dificuldade em parar", "Às vezes imprudente"],
    tips: ["Pense antes de agir", "Descanso também é importante", "Nem toda situação precisa de ação"],
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
