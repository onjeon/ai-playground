// Qual Bloco de Carnaval Combina com Você?
// Descubra em qual tipo de bloco você se divertiria mais!

export const questions = [
  {
    id: 1,
    question: "Como você prefere curtir o Carnaval?",
    options: [
      { text: "No meio da multidão, suando a camisa", type: "A" },
      { text: "Com fantasias elaboradas e temáticas", type: "B" },
      { text: "Curtindo as músicas e dançando muito", type: "C" },
      { text: "Em grupo de amigos, sem estresse", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seu estilo de fantasia?",
    options: [
      { text: "Abadá do bloco e pronto!", type: "A" },
      { text: "Fantasia criativa e bem produzida", type: "B" },
      { text: "Roupa colorida e confortável", type: "C" },
      { text: "Algo simples, o importante é curtir", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual música te anima mais?",
    options: [
      { text: "Axé pesado, todo mundo pulando", type: "A" },
      { text: "Marchinhas clássicas e criativas", type: "B" },
      { text: "Samba e pagode pra sambar muito", type: "C" },
      { text: "Qualquer uma, o clima é que importa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que não pode faltar no seu Carnaval?",
    options: [
      { text: "Muita gente, energia alta", type: "A" },
      { text: "Criatividade e bom humor", type: "B" },
      { text: "Boa música ao vivo", type: "C" },
      { text: "Amigos e cerveja gelada", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual tamanho de bloco você prefere?",
    options: [
      { text: "Gigante, quanto maior melhor", type: "A" },
      { text: "Médio, mas com personalidade", type: "B" },
      { text: "Tradicional, com história", type: "C" },
      { text: "Pequeno, entre amigos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com a lotação do bloco?",
    options: [
      { text: "Amo! Faz parte da energia", type: "A" },
      { text: "Tolero pela experiência", type: "B" },
      { text: "Prefiro espaço pra dançar", type: "C" },
      { text: "Evito os mais cheios", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que te faz escolher um bloco?",
    options: [
      { text: "A fama e o hype", type: "A" },
      { text: "A temática e criatividade", type: "B" },
      { text: "O repertório musical", type: "C" },
      { text: "Onde meus amigos vão", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua bebida de Carnaval?",
    options: [
      { text: "O que vier, o importante é hidratar!", type: "A" },
      { text: "Drinks temáticos e criativos", type: "B" },
      { text: "Caipirinha tradicional", type: "C" },
      { text: "Cerveja gelada, clássico", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Que horas você começa a curtir?",
    options: [
      { text: "Cedo e vou até o fim!", type: "A" },
      { text: "Quando o bloco sai", type: "B" },
      { text: "No horário do samba", type: "C" },
      { text: "Quando a turma se junta", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você faz depois do bloco?",
    options: [
      { text: "Vou pra outro bloco!", type: "A" },
      { text: "Continuo a festa em algum lugar", type: "B" },
      { text: "Vou pro bar curtir mais samba", type: "C" },
      { text: "Vou descansar pra amanhã", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual sua maior preocupação no bloco?",
    options: [
      { text: "Não perder a energia", type: "A" },
      { text: "A fantasia ficar bonita", type: "B" },
      { text: "Curtir a música de verdade", type: "C" },
      { text: "Não perder os amigos", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você definiria o Carnaval perfeito?",
    options: [
      { text: "Intenso do começo ao fim", type: "A" },
      { text: "Criativo e memorável", type: "B" },
      { text: "Musical e cultural", type: "C" },
      { text: "Divertido e sem stress", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Blocos de Axé Gigantes",
    emoji: "🎉",
    description: "Seu bloco é o de Axé gigante! Você ama a energia de milhares de pessoas pulando juntas. Como os grandes blocos de Salvador e Rio, você não quer saber de frescura - é pular até o sol raiar!",
    traits: ["Energético(a)", "Festeiro(a)", "Resistente", "Intenso(a)"],
    strengths: ["Energia inesgotável", "Capacidade de se divertir", "Resistência física", "Espírito festivo"],
    weaknesses: ["Pode exagerar", "Dificuldade em relaxar", "Às vezes passa dos limites"],
    tips: ["Cuide da hidratação", "Nem todo dia precisa ser intenso", "Descanse também"],
  },
  B: {
    type: "B",
    title: "Blocos Temáticos e Criativos",
    emoji: "🎭",
    description: "Seu bloco é o temático! Você curte a criatividade, as fantasias elaboradas e o bom humor. Como os blocos cult do Rio, você prefere qualidade à quantidade e adora uma boa sátira!",
    traits: ["Criativo(a)", "Bem-humorado(a)", "Original", "Cultural"],
    strengths: ["Criatividade", "Senso de humor", "Originalidade", "Bom gosto"],
    weaknesses: ["Pode ser esnobe", "Às vezes elitista", "Dificuldade com o popular"],
    tips: ["Curta também o popular", "Nem tudo precisa ser sofisticado", "A simplicidade também diverte"],
  },
  C: {
    type: "C",
    title: "Blocos de Samba e Pagode",
    emoji: "🥁",
    description: "Seu bloco é o de samba! Você ama a música de verdade, a batucada e o gingado. Como os blocos tradicionais cariocas, você sabe que Carnaval de verdade é samba no pé!",
    traits: ["Musical", "Tradicional", "Gingado", "Cultural"],
    strengths: ["Apreciação musical", "Conexão com tradições", "Saber dançar", "Bom gosto"],
    weaknesses: ["Pode ser purista", "Dificuldade com novidades", "Às vezes seletivo(a)"],
    tips: ["Abra-se a outros ritmos", "O importante é se divertir", "Inovação também é válida"],
  },
  D: {
    type: "D",
    title: "Blocos de Amigos",
    emoji: "🍻",
    description: "Seu bloco é o de amigos! Você curte o Carnaval pela companhia, não pelo tamanho do bloco. Como os blocos de bairro, você sabe que a melhor festa é com quem você ama!",
    traits: ["Sociável", "Tranquilo(a)", "Leal", "Descomplicado(a)"],
    strengths: ["Valorizar amizades", "Não se estressar", "Curtir sem frescura", "Boa companhia"],
    weaknesses: ["Pode perder experiências", "Às vezes acomodado(a)", "Dificuldade em se jogar"],
    tips: ["Experimente blocos novos", "Saia da zona de conforto", "A aventura também é boa"],
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
