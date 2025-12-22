// Qual Emoji Mais Representa Você?
// Descubra qual emoji seria sua representação digital perfeita!

export const questions = [
  {
    id: 1,
    question: "Como você responde uma mensagem de bom dia?",
    options: [
      { text: "Com vários emojis e animação!", type: "A" },
      { text: "Com um coração ou emoji fofo", type: "B" },
      { text: "Com uma risada ou emoji engraçado", type: "C" },
      { text: "Com um joinha ou emoji prático", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua reação quando recebe uma boa notícia?",
    options: [
      { text: "Comemoro efusivamente!", type: "A" },
      { text: "Fico emocionado(a) e agradeço", type: "B" },
      { text: "Faço uma piada sobre", type: "C" },
      { text: "Comemoro por dentro, tranquilo(a)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você é nas redes sociais?",
    options: [
      { text: "Posto sempre, stories toda hora", type: "A" },
      { text: "Só posto coisas significativas", type: "B" },
      { text: "Posto memes e coisas engraçadas", type: "C" },
      { text: "Quase não posto, só vejo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que seus amigos mais gostam em você?",
    options: [
      { text: "Minha energia e animação", type: "A" },
      { text: "Meu carinho e apoio", type: "B" },
      { text: "Meu humor e piadas", type: "C" },
      { text: "Minha lealdade e confiança", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com problemas?",
    options: [
      { text: "Com otimismo e energia pra resolver", type: "A" },
      { text: "Procuro apoio emocional", type: "B" },
      { text: "Rio da situação pra não chorar", type: "C" },
      { text: "Resolvo de forma prática e direta", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual cor mais te atrai?",
    options: [
      { text: "Amarelo ou laranja - cores vibrantes", type: "A" },
      { text: "Rosa ou vermelho - cores do amor", type: "B" },
      { text: "Verde ou azul - cores divertidas", type: "C" },
      { text: "Preto ou azul escuro - cores clássicas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você termina uma conversa no WhatsApp?",
    options: [
      { text: "Com vários emojis de despedida", type: "A" },
      { text: "Com corações e beijos", type: "B" },
      { text: "Com uma risada ou piada final", type: "C" },
      { text: "Com um simples 'ok' ou 'blz'", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que mais te diverte?",
    options: [
      { text: "Festas e encontros animados", type: "A" },
      { text: "Momentos íntimos com quem amo", type: "B" },
      { text: "Assistir comédias e rir muito", type: "C" },
      { text: "Hobbies tranquilos que gosto", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você é em uma segunda-feira?",
    options: [
      { text: "Animado(a), cada dia é uma chance nova!", type: "A" },
      { text: "Pensando nas pessoas que amo", type: "B" },
      { text: "Fazendo piada sobre odiar segunda", type: "C" },
      { text: "Focado(a), vamos trabalhar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seu estilo de humor?",
    options: [
      { text: "Animado e expressivo", type: "A" },
      { text: "Doce e afetuoso", type: "B" },
      { text: "Sarcástico e irônico", type: "C" },
      { text: "Sutil e inteligente", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você demonstra que gostou de algo?",
    options: [
      { text: "Elogio muito e faço festa", type: "A" },
      { text: "Demonstro carinho e gratidão", type: "B" },
      { text: "Faço uma piada elogiando", type: "C" },
      { text: "Simplesmente digo que gostei", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Bora! Vamos nessa!", type: "A" },
      { text: "Te amo, você é especial!", type: "B" },
      { text: "Kkkkkk, essa foi boa!", type: "C" },
      { text: "Entendi. Fechado.", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "😄 Carinha Feliz",
    emoji: "😄",
    description: "Você é o emoji de felicidade! Radiante, otimista e sempre espalhando energia positiva. Assim como esse emoji, você ilumina qualquer conversa e faz as pessoas sorrirem!",
    traits: ["Otimista", "Energético(a)", "Alegre", "Contagiante"],
    strengths: ["Positividade natural", "Facilidade em animar", "Energia alta", "Acessibilidade"],
    weaknesses: ["Pode parecer superficial", "Dificuldade em momentos tristes", "Otimismo excessivo"],
    tips: ["Está tudo bem sentir tristeza", "Nem sempre precisa estar feliz", "Valide também as emoções difíceis"],
  },
  B: {
    type: "B",
    title: "❤️ Coração Vermelho",
    emoji: "❤️",
    description: "Você é o emoji do amor! Carinhoso(a), afetuoso(a) e sempre demonstrando sentimentos. Assim como o coração vermelho, você espalha amor por onde passa!",
    traits: ["Carinhoso(a)", "Afetuoso(a)", "Emotivo(a)", "Generoso(a)"],
    strengths: ["Capacidade de amar", "Demonstração de afeto", "Conexões profundas", "Empatia"],
    weaknesses: ["Muito emotivo(a)", "Pode se magoar fácil", "Dependência afetiva"],
    tips: ["Proteja seu coração também", "Nem todos merecem seu amor", "Ame a si mesmo(a) primeiro"],
  },
  C: {
    type: "C",
    title: "😂 Chorando de Rir",
    emoji: "😂",
    description: "Você é o emoji da risada! Divertido(a), bem-humorado(a) e sempre com uma piada na ponta da língua. Assim como o famoso emoji de rir, você faz todos gargalharem!",
    traits: ["Engraçado(a)", "Bem-humorado(a)", "Leve", "Carismático(a)"],
    strengths: ["Humor afiado", "Capacidade de descontrair", "Fazer todos rirem", "Leveza"],
    weaknesses: ["Usa humor pra esconder", "Dificuldade em ser sério", "Pode parecer debochado"],
    tips: ["Está tudo bem ser vulnerável", "Nem tudo precisa virar piada", "Permita-se a seriedade"],
  },
  D: {
    type: "D",
    title: "👍 Joinha",
    emoji: "👍",
    description: "Você é o emoji da aprovação! Prático(a), confiável e direto(a) ao ponto. Assim como o joinha, você é eficiente, objetivo(a) e as pessoas sabem que podem contar com você!",
    traits: ["Prático(a)", "Confiável", "Direto(a)", "Eficiente"],
    strengths: ["Objetividade", "Confiabilidade", "Praticidade", "Estabilidade"],
    weaknesses: ["Pode parecer frio(a)", "Pouca expressividade", "Dificuldade em demonstrar"],
    tips: ["Expresse mais seus sentimentos", "Emojis não mordem!", "Seja um pouco mais caloroso(a)"],
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
