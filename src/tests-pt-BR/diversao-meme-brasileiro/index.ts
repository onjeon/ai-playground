// Qual Meme Brasileiro Você Seria?
// Descubra qual meme clássico da internet brasileira representa sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você reage a situações inesperadas?",
    options: [
      { text: "Fico em choque sem palavras", type: "A" },
      { text: "Levo na zoeira e rio da situação", type: "B" },
      { text: "Fico confuso(a) tentando entender", type: "C" },
      { text: "Mantenho a calma e sigo em frente", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua expressão facial mais comum?",
    options: [
      { text: "Cara de surpresa ou indignação", type: "A" },
      { text: "Rindo de tudo", type: "B" },
      { text: "Cara de 'não entendi nada'", type: "C" },
      { text: "Expressão tranquila, de boa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com problemas?",
    options: [
      { text: "Entro em desespero primeiro", type: "A" },
      { text: "Faço piada pra não chorar", type: "B" },
      { text: "Fico pensando no que fazer", type: "C" },
      { text: "Aceito e sigo a vida", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seu papel nos grupos de WhatsApp?",
    options: [
      { text: "Mando os memes mais pesados", type: "A" },
      { text: "Faço todo mundo rir", type: "B" },
      { text: "Faço perguntas aleatórias", type: "C" },
      { text: "Fico mais observando", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como seus amigos te descreveriam?",
    options: [
      { text: "Dramático(a) e intenso(a)", type: "A" },
      { text: "Engraçado(a) e zoeiro(a)", type: "B" },
      { text: "Confuso(a) mas amável", type: "C" },
      { text: "Tranquilo(a) e na sua", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua reação favorita em conversas?",
    options: [
      { text: "'Não acredito nisso!'", type: "A" },
      { text: "'KKKKKK morri!'", type: "B" },
      { text: "'Hã? Como assim?'", type: "C" },
      { text: "'De boa, tranquilo'", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que te deixa mais irritado(a)?",
    options: [
      { text: "Injustiças e coisas erradas", type: "A" },
      { text: "Gente sem senso de humor", type: "B" },
      { text: "Coisas que não fazem sentido", type: "C" },
      { text: "Quase nada me irrita", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual tipo de humor você mais curte?",
    options: [
      { text: "Humor de reação e indignação", type: "A" },
      { text: "Humor debochado e irônico", type: "B" },
      { text: "Humor nonsense e absurdo", type: "C" },
      { text: "Humor leve e cotidiano", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você termina discussões?",
    options: [
      { text: "Fico indignado(a) e expresso isso", type: "A" },
      { text: "Faço uma piada e encerro", type: "B" },
      { text: "Fico mais confuso(a) ainda", type: "C" },
      { text: "Deixo pra lá, não vale a pena", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual situação mais te define?",
    options: [
      { text: "Quando algo absurdo acontece comigo", type: "A" },
      { text: "Quando estou zoando meus amigos", type: "B" },
      { text: "Quando não entendo o que está acontecendo", type: "C" },
      { text: "Quando estou de boa fazendo nada", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual emoji você mais usa?",
    options: [
      { text: "😱 ou 😤", type: "A" },
      { text: "😂 ou 🤣", type: "B" },
      { text: "🤔 ou 😅", type: "C" },
      { text: "😎 ou 👍", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que as pessoas lembram de você?",
    options: [
      { text: "Minhas reações exageradas", type: "A" },
      { text: "Minhas piadas e zoeiras", type: "B" },
      { text: "Minhas perguntas inusitadas", type: "C" },
      { text: "Minha tranquilidade", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Nazaré Confusa / Calculando",
    emoji: "🤯",
    description: "Você é a Nazaré! Intenso(a), dramático(a) e suas reações são sempre memoráveis. Como o famoso meme da vilã de novela calculando, você vive intensamente cada emoção!",
    traits: ["Dramático(a)", "Intenso(a)", "Expressivo(a)", "Reativo(a)"],
    strengths: ["Reações genuínas", "Entretenimento garantido", "Expressividade", "Autenticidade"],
    weaknesses: ["Pode exagerar", "Drama constante", "Leva tudo muito a sério"],
    tips: ["Respire antes de reagir", "Nem tudo é tão intenso", "O drama cansa às vezes"],
  },
  B: {
    type: "B",
    title: "Zoeiro Clássico",
    emoji: "😎",
    description: "Você é o meme zoeiro! Irônico, debochado e sempre com uma piada na ponta da língua. Como os melhores memes de zoeira, você transforma tudo em entretenimento!",
    traits: ["Zoeiro(a)", "Irônico(a)", "Debochado(a)", "Carismático(a)"],
    strengths: ["Fazer todos rirem", "Descontrair ambientes", "Criatividade", "Popularidade"],
    weaknesses: ["Pode magoar sem querer", "Dificuldade em ser sério", "Às vezes passa do limite"],
    tips: ["Saiba a hora de parar", "Nem todos levam na esportiva", "Momentos sérios existem"],
  },
  C: {
    type: "C",
    title: "Chapolin Confuso",
    emoji: "🤔",
    description: "Você é o Chapolin! Confuso(a), desastrado(a) mas muito querido(a). Como o herói atrapalhado, você pode não entender tudo, mas seu coração está no lugar certo!",
    traits: ["Confuso(a)", "Desastrado(a)", "Querido(a)", "Inocente"],
    strengths: ["Carisma natural", "Fazer rir sem querer", "Sinceridade", "Ser amado(a) por todos"],
    weaknesses: ["Distração frequente", "Não entender situações", "Gafes sociais"],
    tips: ["Preste mais atenção às vezes", "Pergunte quando não entender", "Sua confusão é charmosa"],
  },
  D: {
    type: "D",
    title: "De Boa na Lagoa",
    emoji: "🦥",
    description: "Você é o 'de boa na lagoa'! Tranquilo(a), zen e nada te afeta. Como os memes de paz e tranquilidade, você leva a vida leve e sem estresse!",
    traits: ["Tranquilo(a)", "Zen", "Desapegado(a)", "Equilibrado(a)"],
    strengths: ["Paz interior", "Não se estressar", "Equilíbrio emocional", "Boa companhia"],
    weaknesses: ["Pode parecer indiferente", "Falta de reação", "Às vezes passivo(a) demais"],
    tips: ["Expresse mais suas emoções", "Intensidade às vezes é boa", "Posicione-se quando preciso"],
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
