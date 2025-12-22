// Qual Animal Brasileiro é Seu Espírito?
// Descubra qual animal da fauna brasileira representa sua alma!

export const questions = [
  {
    id: 1,
    question: "Como você se comporta em grupo?",
    options: [
      { text: "Sou o líder natural, guio o grupo", type: "A" },
      { text: "Prefiro ficar na minha, observando", type: "B" },
      { text: "Sou sociável e me dou bem com todos", type: "C" },
      { text: "Sou protetor(a) e cuido dos meus", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual ambiente você prefere?",
    options: [
      { text: "Lugares abertos e com vista ampla", type: "A" },
      { text: "Lugares calmos e tranquilos", type: "B" },
      { text: "Próximo à água, rios ou praias", type: "C" },
      { text: "Matas e florestas densas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com ameaças?",
    options: [
      { text: "Enfrento de frente, sem medo", type: "A" },
      { text: "Prefiro evitar conflitos", type: "B" },
      { text: "Me adapto e encontro saídas", type: "C" },
      { text: "Protejo os meus com toda força", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua maior qualidade?",
    options: [
      { text: "Minha força e determinação", type: "A" },
      { text: "Minha calma e paciência", type: "B" },
      { text: "Minha inteligência e adaptabilidade", type: "C" },
      { text: "Minha lealdade e proteção", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você faz quando está estressado(a)?",
    options: [
      { text: "Preciso de espaço e liberdade", type: "A" },
      { text: "Fico quieto(a) e descanso", type: "B" },
      { text: "Busco água ou natureza para relaxar", type: "C" },
      { text: "Fico perto de quem amo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é seu estilo de comunicação?",
    options: [
      { text: "Direto e imponente", type: "A" },
      { text: "Quieto e reservado", type: "B" },
      { text: "Expressivo e musical", type: "C" },
      { text: "Protetor e cuidadoso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que mais valoriza na vida?",
    options: [
      { text: "Liberdade e domínio do meu território", type: "A" },
      { text: "Paz e tranquilidade", type: "B" },
      { text: "Diversão e experiências", type: "C" },
      { text: "Família e conexões", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você é no trabalho?",
    options: [
      { text: "Assumo o comando e lidero", type: "A" },
      { text: "Faço meu trabalho no meu ritmo", type: "B" },
      { text: "Sou versátil e me adapto a tudo", type: "C" },
      { text: "Sou confiável e trabalho em equipe", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual hora do dia você prefere?",
    options: [
      { text: "O amanhecer, quando tudo começa", type: "A" },
      { text: "A noite, quando há silêncio", type: "B" },
      { text: "Qualquer hora, me adapto", type: "C" },
      { text: "O entardecer, momento de reunir", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que te faz único(a)?",
    options: [
      { text: "Minha presença marcante", type: "A" },
      { text: "Minha resistência silenciosa", type: "B" },
      { text: "Minha habilidade de me reinventar", type: "C" },
      { text: "Meu instinto de proteção", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você celebra conquistas?",
    options: [
      { text: "Com orgulho e demonstração de força", type: "A" },
      { text: "Internamente, com satisfação quieta", type: "B" },
      { text: "Com festa e compartilhando a alegria", type: "C" },
      { text: "Com minha família e amigos próximos", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais te define?",
    options: [
      { text: "Sou o rei/rainha do meu mundo", type: "A" },
      { text: "Na calma também se chega longe", type: "B" },
      { text: "A vida é uma aventura!", type: "C" },
      { text: "Juntos somos mais fortes", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Onça-Pintada",
    emoji: "🐆",
    description: "Seu animal espírito é a Onça-Pintada! Majestoso(a), poderoso(a) e respeitado(a). Assim como o maior felino das Américas, você comanda respeito natural e é líder nato do seu território!",
    traits: ["Poderoso(a)", "Líder", "Imponente", "Determinado(a)"],
    strengths: ["Presença marcante", "Liderança natural", "Força e determinação", "Autoconfiança"],
    weaknesses: ["Pode ser solitário(a)", "Dificuldade em ceder", "Às vezes intimidador(a)"],
    tips: ["Aceite companhia às vezes", "Nem sempre precisa liderar", "Vulnerabilidade também é força"],
  },
  B: {
    type: "B",
    title: "Bicho-Preguiça",
    emoji: "🦥",
    description: "Seu animal espírito é o Bicho-Preguiça! Calmo(a), paciente e cheio(a) de sabedoria. Assim como esse animal único brasileiro, você sabe que não é preciso pressa para viver bem!",
    traits: ["Calmo(a)", "Paciente", "Sábio(a)", "Tranquilo(a)"],
    strengths: ["Paciência infinita", "Capacidade de observar", "Baixo estresse", "Sabedoria natural"],
    weaknesses: ["Pode parecer lento(a)", "Dificuldade com urgências", "Às vezes passivo(a) demais"],
    tips: ["Às vezes velocidade é necessária", "Tome mais iniciativa", "Ação também é importante"],
  },
  C: {
    type: "C",
    title: "Golfinho Rosa",
    emoji: "🐬",
    description: "Seu animal espírito é o Boto-Cor-de-Rosa! Inteligente, sociável e cheio(a) de mistério. Assim como o famoso golfinho da Amazônia, você encanta a todos e se adapta a qualquer situação!",
    traits: ["Inteligente", "Sociável", "Adaptável", "Encantador(a)"],
    strengths: ["Inteligência social", "Capacidade de adaptação", "Carisma natural", "Habilidade de comunicação"],
    weaknesses: ["Pode ser misterioso(a) demais", "Dificuldade em criar raízes", "Às vezes superficial"],
    tips: ["Crie conexões mais profundas", "Permita que te conheçam", "Nem tudo precisa ser leve"],
  },
  D: {
    type: "D",
    title: "Lobo-Guará",
    emoji: "🐺",
    description: "Seu animal espírito é o Lobo-Guará! Leal, protetor(a) e com forte senso de família. Assim como esse canídeo brasileiro único, você cuida dos seus com amor e dedicação!",
    traits: ["Leal", "Protetor(a)", "Familiar", "Forte"],
    strengths: ["Lealdade inabalável", "Instinto de proteção", "Conexões profundas", "Determinação"],
    weaknesses: ["Pode ser superprotetor(a)", "Dificuldade em se abrir para novos", "Desconfiado(a) inicialmente"],
    tips: ["Confie em pessoas novas também", "Não carregue tudo sozinho(a)", "Permita-se ser cuidado(a)"],
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
