// Tipo de Conexão
// Descubra que tipo de conexão você mais valoriza no amor!

export const questions = [
  {
    id: 1,
    question: "O que te faz sentir mais conectado(a) com seu parceiro(a)?",
    options: [
      { text: "Conversas profundas sobre a vida, sentimentos e ideias", type: "A" },
      { text: "Momentos de intimidade física e química", type: "B" },
      { text: "Compartilhar atividades e experiências juntos", type: "C" },
      { text: "Ter uma sintonia espiritual e energética", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Numa noite perfeita a dois, você prefere:",
    options: [
      { text: "Conversar por horas sobre sonhos e filosofia", type: "A" },
      { text: "Uma noite de romance e paixão intensos", type: "B" },
      { text: "Fazer algo divertido juntos, tipo jogo ou passeio", type: "C" },
      { text: "Meditar juntos ou ter um momento de conexão silenciosa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você se sente mais próximo(a) de alguém quando:",
    options: [
      { text: "Pode ser completamente vulnerável e compartilhar tudo", type: "A" },
      { text: "Há uma atração física e desejo intenso", type: "B" },
      { text: "Vocês se divertem muito e riem juntos", type: "C" },
      { text: "Sentem que são almas gêmeas, uma conexão inexplicável", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que mantém seu interesse em um relacionamento longo?",
    options: [
      { text: "A capacidade de conversar sobre qualquer coisa", type: "A" },
      { text: "Manter a chama da paixão acesa", type: "B" },
      { text: "Sempre ter coisas novas pra fazer juntos", type: "C" },
      { text: "A conexão profunda que transcende o físico", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando você conhece alguém especial, o que te atrai primeiro?",
    options: [
      { text: "A forma como a pessoa pensa e se expressa", type: "A" },
      { text: "A química e atração física imediata", type: "B" },
      { text: "Os interesses e hobbies em comum", type: "C" },
      { text: "Uma sensação inexplicável de já conhecer a pessoa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que mais te machucaria em um relacionamento?",
    options: [
      { text: "Não poder mais ter conversas significativas", type: "A" },
      { text: "Perder a atração física e o desejo", type: "B" },
      { text: "Não ter mais nada pra fazer junto, virar rotina", type: "C" },
      { text: "Perder aquela conexão especial que vocês tinham", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você descreveria a conexão ideal?",
    options: [
      { text: "Mentalmente estimulante, intelectualmente conectados", type: "A" },
      { text: "Fisicamente intensa, com muita química", type: "B" },
      { text: "Parceria forte, melhor amigo(a) e amante", type: "C" },
      { text: "Espiritual, como se fossem feitos um pro outro", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Em momentos difíceis do casal, você busca reconexão através de:",
    options: [
      { text: "Conversa honesta e aberta sobre os problemas", type: "A" },
      { text: "Intimidade física, reacende a chama", type: "B" },
      { text: "Fazer algo juntos que gostem, quebrar a tensão", type: "C" },
      { text: "Momento de silêncio e reflexão juntos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você mais admira em casais de longa data?",
    options: [
      { text: "Quando ainda conversam como se tivessem acabado de se conhecer", type: "A" },
      { text: "Quando ainda tem aquele brilho nos olhos, paixão viva", type: "B" },
      { text: "Quando são melhores amigos e parceiros de aventuras", type: "C" },
      { text: "Quando parecem duas almas que se completam perfeitamente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais te representa no amor?",
    options: [
      { text: "Preciso de alguém que entenda minha mente", type: "A" },
      { text: "Preciso de alguém que me faça arrepiar", type: "B" },
      { text: "Preciso de alguém pra viver aventuras junto", type: "C" },
      { text: "Preciso de alguém que toque minha alma", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Conexão Intelectual",
    emoji: "🧠",
    percentage: 92,
    description: "Você valoriza a conexão intelectual acima de tudo! Precisa de alguém com quem possa ter conversas profundas, debater ideias e compartilhar pensamentos. Uma mente que estimula a sua é irresistível!",
    characteristics: ["Intelectual", "Comunicativo(a)", "Filosófico(a)", "Curioso(a)"],
    advice: "Conexão mental é maravilhosa! Mas não negligencie outras formas de conexão. Às vezes sair da cabeça e curtir momentos simples também fortalece a relação!",
  },
  B: {
    type: "B",
    title: "Conexão Física",
    emoji: "🔥",
    percentage: 88,
    description: "Você valoriza a conexão física e a química! A atração, o desejo e a intimidade são fundamentais pra você se sentir conectado(a). O toque e a paixão mantêm seu relacionamento vivo!",
    characteristics: ["Apaixonado(a)", "Sensual", "Intenso(a)", "Expressivo(a) fisicamente"],
    advice: "Química é importante! Mas lembre-se que ela pode oscilar. Investir em outras formas de conexão ajuda a manter o relacionamento forte mesmo nas fases menos intensas!",
  },
  C: {
    type: "C",
    title: "Conexão de Companheirismo",
    emoji: "🤝",
    percentage: 85,
    description: "Você valoriza a conexão de companheirismo! Quer alguém que seja parceiro(a) de vida, melhor amigo(a) e companhia pra todas as aventuras. Dividir experiências é sua forma de amor!",
    characteristics: ["Parceiro(a)", "Aventureiro(a)", "Amigável", "Presente"],
    advice: "Companheirismo é a base de casais duradouros! Continue cultivando experiências juntos, mas reserve também momentos só pra conexão emocional mais profunda!",
  },
  D: {
    type: "D",
    title: "Conexão Espiritual",
    emoji: "✨",
    percentage: 80,
    description: "Você valoriza a conexão espiritual e transcendente! Busca aquela sensação de almas gêmeas, uma sintonia que vai além do explicável. Acredita em conexões que são maiores que o físico!",
    characteristics: ["Espiritual", "Intuitivo(a)", "Profundo(a)", "Místico(a)"],
    advice: "Conexões espirituais são lindas! Mas também invista nos aspectos práticos do relacionamento. O amor transcendente precisa de base terrena pra florescer!",
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
