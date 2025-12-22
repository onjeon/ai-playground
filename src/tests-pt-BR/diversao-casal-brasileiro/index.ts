// Que Tipo de Casal Brasileiro Vocês São?
// Descubra o perfil do seu relacionamento!

export const questions = [
  {
    id: 1,
    question: "Como vocês passam o fim de semana?",
    options: [
      { text: "Sempre juntos, grudados", type: "A" },
      { text: "Juntos mas com atividades próprias também", type: "B" },
      { text: "Cada um faz sua coisa, depois se encontram", type: "C" },
      { text: "Com amigos ou família, sempre social", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Vocês postam o relacionamento nas redes?",
    options: [
      { text: "Muito! Fotos, stories, tudo junto", type: "A" },
      { text: "De vez em quando, em momentos especiais", type: "B" },
      { text: "Raramente, relacionamento é privado", type: "C" },
      { text: "Sim, em eventos com amigos e família", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como vocês resolvem discussões?",
    options: [
      { text: "Conversamos muito até resolver", type: "A" },
      { text: "Damos um tempo e depois conversamos", type: "B" },
      { text: "Cada um processa sozinho antes de falar", type: "C" },
      { text: "Pedimos opinião de amigos/família", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Vocês têm senhas compartilhadas?",
    options: [
      { text: "Todas! Não temos segredos", type: "A" },
      { text: "Algumas, as importantes", type: "B" },
      { text: "Não, cada um com sua privacidade", type: "C" },
      { text: "Depende, nunca pensamos nisso", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é a divisão de tarefas?",
    options: [
      { text: "Fazemos tudo juntos", type: "A" },
      { text: "Dividido de forma justa", type: "B" },
      { text: "Cada um cuida do seu", type: "C" },
      { text: "Depende de quem está disponível", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quanto tempo vocês passam separados?",
    options: [
      { text: "O mínimo possível, sentimos falta", type: "A" },
      { text: "O necessário, trabalho e compromissos", type: "B" },
      { text: "Bastante, individualidade é importante", type: "C" },
      { text: "Variável, depende da agenda social", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como vocês decidem coisas importantes?",
    options: [
      { text: "Sempre juntos, em tudo", type: "A" },
      { text: "Juntos nas grandes, individual nas pequenas", type: "B" },
      { text: "Cada um tem autonomia em suas áreas", type: "C" },
      { text: "Consultamos família e amigos também", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como é a vida social de vocês?",
    options: [
      { text: "Tudo junto, os amigos são compartilhados", type: "A" },
      { text: "Amigos em comum e individuais", type: "B" },
      { text: "Cada um mantém seus círculos", type: "C" },
      { text: "Muito social, sempre em grupo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Vocês têm apelidos carinhosos?",
    options: [
      { text: "Vários! Amor, neném, bebê...", type: "A" },
      { text: "Alguns, usamos às vezes", type: "B" },
      { text: "Não, chamamos pelo nome", type: "C" },
      { text: "Sim, e os amigos zoam a gente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como vocês comemoram datas especiais?",
    options: [
      { text: "Com muita produção e romance", type: "A" },
      { text: "De forma especial mas simples", type: "B" },
      { text: "Normal, não ligamos muito pra datas", type: "C" },
      { text: "Com festa e todo mundo junto", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Vocês brigam com que frequência?",
    options: [
      { text: "Quase nunca, somos muito unidos", type: "A" },
      { text: "De vez em quando, normal", type: "B" },
      { text: "Raramente, evitamos confronto", type: "C" },
      { text: "Às vezes, mas logo passa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define o relacionamento?",
    options: [
      { text: "'Duas metades de uma laranja'", type: "A" },
      { text: "'Parceria e respeito'", type: "B" },
      { text: "'Juntos mas com espaço'", type: "C" },
      { text: "'O casal mais animado da galera'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Casal Grudado",
    emoji: "💑",
    description: "Vocês são o Casal Grudado! Inseparáveis, apaixonados e muito conectados. Vocês fazem tudo juntos e a distância é inimiga!",
    traits: ["Apaixonados", "Unidos", "Intensos", "Românticos"],
    strengths: ["Conexão profunda", "Companheirismo total", "Romance vivo", "Sintonia"],
    weaknesses: ["Dependência", "Falta de individualidade", "Pode sufocar"],
    tips: ["Mantenham hobbies individuais", "Espaço fortalece", "Independência é saudável"],
  },
  B: {
    type: "B",
    title: "Casal Equilibrado",
    emoji: "⚖️",
    description: "Vocês são o Casal Equilibrado! Juntos nas horas certas, individuais quando precisa. Vocês encontraram o ponto perfeito do relacionamento!",
    traits: ["Equilibrados", "Maduros", "Parceiros", "Saudáveis"],
    strengths: ["Equilíbrio saudável", "Respeito mútuo", "Individualidade preservada", "Parceria real"],
    weaknesses: ["Pode parecer menos apaixonado", "Às vezes racional demais", "Falta de intensidade"],
    tips: ["Vocês são referência", "Continuem assim", "Romance também é bom"],
  },
  C: {
    type: "C",
    title: "Casal Independente",
    emoji: "🦋",
    description: "Vocês são o Casal Independente! Cada um com sua vida, se encontram por escolha não necessidade. Liberdade e respeito são as bases!",
    traits: ["Independentes", "Livres", "Respeitosos", "Autônomos"],
    strengths: ["Liberdade", "Respeito ao espaço", "Sem dependência", "Individualidade forte"],
    weaknesses: ["Pode parecer distante", "Falta de conexão", "Relacionamento frio"],
    tips: ["Invistam mais tempo juntos", "Conexão precisa de presença", "Romance requer dedicação"],
  },
  D: {
    type: "D",
    title: "Casal Social",
    emoji: "🎊",
    description: "Vocês são o Casal Social! Sempre rodeados de amigos e família. O relacionamento de vocês é coletivo e a diversão é garantida!",
    traits: ["Sociais", "Animados", "Extrovertidos", "Populares"],
    strengths: ["Vida social rica", "Diversão constante", "Rede de apoio", "Memórias com muita gente"],
    weaknesses: ["Pouca intimidade", "Dependência social", "Falta de momentos a dois"],
    tips: ["Reservem tempo só pra vocês", "Intimidade é importante", "Nem tudo precisa ser em grupo"],
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
