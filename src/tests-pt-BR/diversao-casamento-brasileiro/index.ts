// Qual Tipo de Convidado de Casamento Você É?
// Descubra seu perfil em festas de casamento!

export const questions = [
  {
    id: 1,
    question: "Você vai à cerimônia ou só na festa?",
    options: [
      { text: "Cerimônia e festa, completo!", type: "A" },
      { text: "Cerimônia e festa, mas cerimônia é obrigação", type: "B" },
      { text: "Tento ir na festa pelo menos", type: "C" },
      { text: "Se puder só na festa, melhor", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você chora no casamento?",
    options: [
      { text: "Sempre! Muito emocionante", type: "A" },
      { text: "Às vezes, depende do casal", type: "B" },
      { text: "Raramente, não sou de chorar", type: "C" },
      { text: "Nunca, casamento é só festa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quanto você gasta no presente?",
    options: [
      { text: "Bastante, presente bom!", type: "A" },
      { text: "O suficiente, algo da lista", type: "B" },
      { text: "O básico, não sou rico", type: "C" },
      { text: "O mínimo ou dinheiro", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você dança no casamento?",
    options: [
      { text: "A noite toda! Sou o primeiro na pista", type: "A" },
      { text: "Bastante, quando a música é boa", type: "B" },
      { text: "Um pouco, nos momentos especiais", type: "C" },
      { text: "Quase nunca, fico na mesa", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você bebe muito em casamento?",
    options: [
      { text: "Sim! Open bar existe pra isso", type: "A" },
      { text: "Um pouco mais que o normal", type: "B" },
      { text: "Moderadamente", type: "C" },
      { text: "Quase nada ou nada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você conhece muita gente no casamento?",
    options: [
      { text: "Sim! Faço amizade com todo mundo", type: "A" },
      { text: "Conheço alguns, converso com outros", type: "B" },
      { text: "Fico com quem já conheço", type: "C" },
      { text: "Não conheço quase ninguém", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você vai com acompanhante?",
    options: [
      { text: "Sempre! Casamento é programa de casal", type: "A" },
      { text: "Se tiver, sim, mas vou sozinho também", type: "B" },
      { text: "Prefiro ir sozinho, mais liberdade", type: "C" },
      { text: "Não me importo, tanto faz", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você tira muitas fotos?",
    options: [
      { text: "Milhões! Registro tudo", type: "A" },
      { text: "Algumas boas fotos", type: "B" },
      { text: "Poucas, prefiro curtir", type: "C" },
      { text: "Quase nenhuma", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você come bastante no casamento?",
    options: [
      { text: "Tudo! Entrada, prato, sobremesa, tudo", type: "A" },
      { text: "Bem, aproveito a comida boa", type: "B" },
      { text: "Normal, como o suficiente", type: "C" },
      { text: "Pouco, não vou por comida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você pega o buquê/gravata?",
    options: [
      { text: "Sempre tento! É tradição", type: "A" },
      { text: "Participo por diversão", type: "B" },
      { text: "Fico de fora, já sou casado/não ligo", type: "C" },
      { text: "Evito, não gosto dessas coisas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Até que horas você fica?",
    options: [
      { text: "Até o final! Último a sair", type: "A" },
      { text: "Bastante tempo, 3-4h", type: "B" },
      { text: "Umas 2 horas, cumpro tabela", type: "C" },
      { text: "O mínimo possível", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define em casamento?",
    options: [
      { text: "'Casamento é a melhor festa!'", type: "A" },
      { text: "'Celebrar o amor é lindo'", type: "B" },
      { text: "'Vim pela amizade com os noivos'", type: "C" },
      { text: "'Mais um casamento...'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Convidado Festeiro",
    emoji: "🎊",
    description: "Você é o Convidado Festeiro! Casamento pra você é festa! Chora na cerimônia, dança até o fim, come tudo, bebe tudo. Os noivos amam ter você lá!",
    traits: ["Festeiro(a)", "Animado(a)", "Emocionado(a)", "Presente"],
    strengths: ["Anima a festa", "Curte de verdade", "Presença marcante"],
    weaknesses: ["Pode exagerar", "Gasta muito no presente por culpa", "Ressaca"],
    tips: ["Aproveite!", "Você faz a festa melhor", "Só não roube a cena dos noivos"],
  },
  B: {
    type: "B",
    title: "Convidado Equilibrado",
    emoji: "💒",
    description: "Você é o Convidado Equilibrado! Curte o casamento na medida certa. Participa, celebra, mas sem exageros. O convidado que todo noivo quer!",
    traits: ["Equilibrado(a)", "Presente", "Participativo(a)", "Consciente"],
    strengths: ["Equilíbrio", "Boa companhia", "Presença de qualidade"],
    weaknesses: ["Pode parecer contido", "Não é o mais animado"],
    tips: ["Ótimo estilo", "Continue assim", "Você honra o convite"],
  },
  C: {
    type: "C",
    title: "Convidado Obrigatório",
    emoji: "📋",
    description: "Você é o Convidado Obrigatório! Vai porque tem que ir, cumpre tabela e vai embora. Não é sua festa favorita, mas você respeita os noivos!",
    traits: ["Obrigado(a)", "Reservado(a)", "Cumpridor(a)", "Prático(a)"],
    strengths: ["Presença garantida", "Não incomoda", "Respeita os noivos"],
    weaknesses: ["Não curte muito", "Pode parecer desinteressado", "Sai cedo"],
    tips: ["Tente se soltar mais", "Casamentos podem ser legais", "Os noivos sentem"],
  },
  D: {
    type: "D",
    title: "Convidado Relutante",
    emoji: "😐",
    description: "Você é o Convidado Relutante! Casamento não é sua praia. Vai por obrigação social, fica o mínimo e não vê a hora de ir embora. E tá tudo bem!",
    traits: ["Relutante", "Antissocial", "Prático(a)", "Honesto(a)"],
    strengths: ["Honesto consigo", "Não finge", "Economiza energia"],
    weaknesses: ["Pode magoar os noivos", "Perde a festa", "Parece mal-humorado"],
    tips: ["Nem todo mundo gosta de casamento", "Mas tente se divertir", "Os noivos te convidaram por algo"],
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
