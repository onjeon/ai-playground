// Qual Feriado Brasileiro Você Seria?
// Descubra qual data comemorativa do Brasil representa sua personalidade!

export const questions = [
  {
    id: 1,
    question: "O que você mais valoriza em uma comemoração?",
    options: [
      { text: "Festa, alegria e muita energia", type: "A" },
      { text: "Família reunida e tradição", type: "B" },
      { text: "Descanso e relaxamento", type: "C" },
      { text: "Reflexão e significado profundo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você prefere passar um feriado?",
    options: [
      { text: "Na rua, em festas e eventos", type: "A" },
      { text: "Em casa, com a família toda", type: "B" },
      { text: "Viajando ou descansando", type: "C" },
      { text: "Em atividades significativas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz de melhor?",
    options: [
      { text: "Animo e faço todos sorrirem", type: "A" },
      { text: "Reúno e cuido das pessoas", type: "B" },
      { text: "Relaxo e ajudo outros a relaxar", type: "C" },
      { text: "Trago significado às coisas", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual música combina com seu feriado?",
    options: [
      { text: "Samba, axé, marchinhas", type: "A" },
      { text: "Músicas tradicionais e clássicas", type: "B" },
      { text: "Qualquer coisa relaxante", type: "C" },
      { text: "Músicas significativas e emocionantes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você traz para um encontro?",
    options: [
      { text: "Energia e animação", type: "A" },
      { text: "Comida caseira e carinho", type: "B" },
      { text: "Paz e tranquilidade", type: "C" },
      { text: "Conversas profundas e significativas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com tradições?",
    options: [
      { text: "Amo as festivas e animadas!", type: "A" },
      { text: "Valorizo e mantenho sempre", type: "B" },
      { text: "Respeito mas não me prendo", type: "C" },
      { text: "Busco entender seu significado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual roupa você veste em comemorações?",
    options: [
      { text: "Fantasia ou algo bem chamativo", type: "A" },
      { text: "Algo especial mas tradicional", type: "B" },
      { text: "Confortável e casual", type: "C" },
      { text: "Algo sóbrio e significativo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você come em comemorações?",
    options: [
      { text: "Comida de festa, finger food", type: "A" },
      { text: "Pratos tradicionais elaborados", type: "B" },
      { text: "Churrasco ou algo prático", type: "C" },
      { text: "Comidas com significado especial", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que mais te emociona?",
    options: [
      { text: "A energia coletiva da festa", type: "A" },
      { text: "Ver a família toda reunida", type: "B" },
      { text: "Ter tempo livre de verdade", type: "C" },
      { text: "Momentos de reflexão profunda", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você termina um feriado?",
    options: [
      { text: "Exausto(a) de tanta festa", type: "A" },
      { text: "Feliz por estar com quem amo", type: "B" },
      { text: "Descansado(a) e renovado(a)", type: "C" },
      { text: "Reflexivo(a) e grato(a)", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que você não abre mão?",
    options: [
      { text: "Da festa e diversão", type: "A" },
      { text: "De estar com a família", type: "B" },
      { text: "Do descanso merecido", type: "C" },
      { text: "De entender o porquê da data", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Bora que o show tem que continuar!", type: "A" },
      { text: "O importante é estar juntos", type: "B" },
      { text: "Finalmente um descanso!", type: "C" },
      { text: "Tudo tem um propósito maior", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Carnaval",
    emoji: "🎭",
    description: "Você é o Carnaval! A maior festa do Brasil é sua cara: alegria, energia e diversão. Assim como essa data, você transforma qualquer momento em celebração!",
    traits: ["Festivo(a)", "Energético(a)", "Alegre", "Carismático(a)"],
    strengths: ["Capacidade de animar", "Energia contagiante", "Fazer todos felizes", "Protagonismo natural"],
    weaknesses: ["Pode ser intenso demais", "Dificuldade em parar", "Às vezes exagerado(a)"],
    tips: ["Descanse também", "Nem sempre é hora de festa", "Equilibre energia e repouso"],
  },
  B: {
    type: "B",
    title: "Natal/Ano Novo",
    emoji: "🎄",
    description: "Você é o Natal ou Ano Novo! Família, tradição e união são seus valores. Assim como essas datas especiais, você valoriza estar junto de quem ama!",
    traits: ["Familiar", "Tradicional", "Acolhedor(a)", "Generoso(a)"],
    strengths: ["Reunir pessoas", "Manter tradições", "Acolher a todos", "Generosidade"],
    weaknesses: ["Pode ser conservador(a)", "Dificuldade com mudanças", "Às vezes controlador(a)"],
    tips: ["Aceite diferentes formas de família", "Novas tradições também valem", "Não carregue tudo sozinho(a)"],
  },
  C: {
    type: "C",
    title: "Tiradentes/Feriado Nacional",
    emoji: "🏖️",
    description: "Você é o Feriado Nacional! Descanso, viagem e relaxamento são prioridade. Assim como esses feriados prolongados, você valoriza tempo de qualidade para recarregar!",
    traits: ["Relaxado(a)", "Prático(a)", "Equilibrado(a)", "Tranquilo(a)"],
    strengths: ["Saber descansar", "Equilíbrio vida/trabalho", "Aproveitar o tempo", "Paz interior"],
    weaknesses: ["Pode parecer desinteressado(a)", "Falta de entusiasmo", "Às vezes passivo(a)"],
    tips: ["Envolva-se mais", "Celebrar também é bom", "Nem tudo é descanso"],
  },
  D: {
    type: "D",
    title: "Dia da Consciência Negra/Finados",
    emoji: "✊",
    description: "Você é uma data de reflexão! Significado profundo, consciência e propósito te definem. Assim como essas datas importantes, você busca sentido em tudo!",
    traits: ["Reflexivo(a)", "Consciente", "Profundo(a)", "Significativo(a)"],
    strengths: ["Dar significado às coisas", "Consciência social", "Profundidade", "Valores fortes"],
    weaknesses: ["Pode ser sério(a) demais", "Dificuldade em relaxar", "Às vezes pesado(a)"],
    tips: ["Permita-se leveza", "Nem tudo precisa de significado", "Diversão também é válida"],
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
