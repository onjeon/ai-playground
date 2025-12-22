// Seu Nível de Ambição Profissional
// Descubra qual é o tamanho da sua ambição na carreira!

export const questions = [
  {
    id: 1,
    question: "Onde você se vê em 10 anos?",
    options: [
      { text: "CEO ou fundador de grande empresa", type: "A" },
      { text: "Líder sênior em empresa de prestígio", type: "B" },
      { text: "Bem posicionado, com vida equilibrada", type: "C" },
      { text: "Fazendo algo que me dê prazer, não importa o cargo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que te motiva mais na carreira?",
    options: [
      { text: "Poder, status e reconhecimento", type: "A" },
      { text: "Crescimento e conquistas profissionais", type: "B" },
      { text: "Segurança financeira e estabilidade", type: "C" },
      { text: "Satisfação pessoal e propósito", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage quando é promovido?",
    options: [
      { text: "Já penso na próxima promoção", type: "A" },
      { text: "Comemoro e traço novos objetivos", type: "B" },
      { text: "Fico satisfeito e aproveito a conquista", type: "C" },
      { text: "Avalio se vale a pena mais responsabilidade", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quanto você sacrificaria por um grande avanço na carreira?",
    options: [
      { text: "Tudo: tempo, relacionamentos, hobbies", type: "A" },
      { text: "Bastante, mas com alguns limites", type: "B" },
      { text: "Um pouco, desde que não afete muito a vida pessoal", type: "C" },
      { text: "Nada, minha vida pessoal vem primeiro", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual é sua relação com salário?",
    options: [
      { text: "Nunca é suficiente, sempre quero mais", type: "A" },
      { text: "Importante, busco ganhar bem", type: "B" },
      { text: "Desde que pague as contas e sobre um pouco", type: "C" },
      { text: "Dinheiro não é minha prioridade principal", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que você pensa sobre trabalhar nos finais de semana?",
    options: [
      { text: "Normal, faço o que for preciso para chegar lá", type: "A" },
      { text: "Aceito quando há projetos importantes", type: "B" },
      { text: "Evito, mas faço quando estritamente necessário", type: "C" },
      { text: "Nunca, meus finais de semana são sagrados", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com a competição no trabalho?",
    options: [
      { text: "Adoro! Competição me energiza", type: "A" },
      { text: "Aceito como parte do jogo", type: "B" },
      { text: "Prefiro colaboração a competição", type: "C" },
      { text: "Me incomoda, evito ambientes competitivos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual seria seu trabalho ideal?",
    options: [
      { text: "O que me dá mais poder e influência", type: "A" },
      { text: "O que oferece crescimento e desafios", type: "B" },
      { text: "O que tem bom equilíbrio vida-trabalho", type: "C" },
      { text: "O que me faz feliz, independente de cargo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você escolheria entre duas ofertas de emprego?",
    options: [
      { text: "Pela que oferece mais potencial de crescimento", type: "A" },
      { text: "Pelo pacote completo: salário, cargo, empresa", type: "B" },
      { text: "Pela que oferece melhor qualidade de vida", type: "C" },
      { text: "Pela que me parece mais interessante", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você acha de mudar de cidade ou país pelo trabalho?",
    options: [
      { text: "Faria sem pensar duas vezes pela oportunidade certa", type: "A" },
      { text: "Consideraria seriamente se for bom para a carreira", type: "B" },
      { text: "Só se fosse muito especial e valesse a pena", type: "C" },
      { text: "Não faria, minhas raízes são mais importantes", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quando você estará satisfeito com sua carreira?",
    options: [
      { text: "Nunca, sempre haverá algo mais a conquistar", type: "A" },
      { text: "Quando alcançar posições de liderança senior", type: "B" },
      { text: "Quando tiver segurança e conforto", type: "C" },
      { text: "Já estou, desde que faça o que gosto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que os outros diriam sobre sua ambição?",
    options: [
      { text: "Que sou extremamente ambicioso e determinado", type: "A" },
      { text: "Que sou focado e sei o que quero", type: "B" },
      { text: "Que sou equilibrado e realista", type: "C" },
      { text: "Que priorizo outras coisas além da carreira", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Ambicioso",
    emoji: "🔥",
    description: "Sua ambição não tem limites! Você está disposto a fazer qualquer sacrifício para chegar ao topo. O sucesso profissional é sua maior prioridade.",
    traits: ["Determinado", "Incansável", "Competitivo", "Focado no topo"],
    strengths: ["Drive excepcional", "Foco inabalável", "Alta performance", "Conquista objetivos"],
    weaknesses: ["Risco de burnout", "Pode sacrificar demais", "Relacionamentos em segundo plano"],
    tips: ["Cuide da sua saúde", "Não perca de vista o que realmente importa", "Sucesso vazio é vazio mesmo assim"],
  },
  B: {
    type: "B",
    title: "Ambicioso Equilibrado",
    emoji: "🎯",
    description: "Você tem ambição saudável! Busca crescimento e sucesso, mas com consciência dos trade-offs. Sabe que a jornada importa tanto quanto o destino.",
    traits: ["Focado", "Estratégico", "Consciente", "Determinado"],
    strengths: ["Ambição com limites", "Crescimento sustentável", "Equilíbrio razoável", "Visão de longo prazo"],
    weaknesses: ["Pode perder algumas oportunidades", "Às vezes falta agressividade"],
    tips: ["Continue equilibrando ambição com vida", "Não tenha medo de ir mais longe quando fizer sentido", "Confie no seu ritmo"],
  },
  C: {
    type: "C",
    title: "Realista Confortável",
    emoji: "☀️",
    description: "Você busca conforto e segurança, não necessariamente o topo. Prefere qualidade de vida a sacrifícios por status. Sabe o que é suficiente para você.",
    traits: ["Equilibrado", "Realista", "Satisfeito", "Consciente"],
    strengths: ["Não se estressa por status", "Valoriza qualidade de vida", "Felicidade sustentável"],
    weaknesses: ["Pode perder oportunidades", "Visto como pouco ambicioso", "Zona de conforto"],
    tips: ["Está tudo bem não querer mais", "Mas não deixe de crescer por medo", "Explore seus limites às vezes"],
  },
  D: {
    type: "D",
    title: "Buscador de Propósito",
    emoji: "🌈",
    description: "Para você, trabalho é sobre satisfação e propósito, não cargo ou salário. Busca felicidade acima de sucesso convencional. Carreira é meio, não fim.",
    traits: ["Autêntico", "Livre", "Satisfeito", "Propósito"],
    strengths: ["Não é escravo da carreira", "Felicidade genuína", "Valores claros", "Vida equilibrada"],
    weaknesses: ["Pode subutilizar potencial", "Menos recursos financeiros", "Visto como sem ambição"],
    tips: ["Sua escolha é válida", "Mas garanta segurança básica", "Propósito não paga as contas sozinho"],
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
