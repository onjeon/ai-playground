// Qual Tipo de Pai Brasileiro Você É?
// Descubra seu estilo de paternidade!

export const questions = [
  {
    id: 1,
    question: "Filho(a) pede dinheiro. Você...",
    options: [
      { text: "Dou sem perguntar, meu filho merece", type: "A" },
      { text: "Pergunto pra quê, depois decido", type: "B" },
      { text: "Proponho que trabalhe pra ganhar", type: "C" },
      { text: "Faço um sermão sobre economia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Churrasco em família. Você...",
    options: [
      { text: "Sou o churrasqueiro oficial, ninguém mexe", type: "A" },
      { text: "Divido tarefas, todo mundo ajuda", type: "B" },
      { text: "Deixo outros fazerem, só como", type: "C" },
      { text: "Fico dando pitaco em tudo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Filho(a) traz namorado(a) em casa. Você...",
    options: [
      { text: "Recebo super bem, quero que se sinta à vontade", type: "A" },
      { text: "Educado, mas observando tudo", type: "B" },
      { text: "Faço interrogatório disfarçado de conversa", type: "C" },
      { text: "Fico sério, olho intimidador", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre ajudar nas tarefas de casa, você...",
    options: [
      { text: "Faço de tudo, lavo, cozinho, limpo", type: "A" },
      { text: "Faço minha parte, divido responsabilidades", type: "B" },
      { text: "Ajudo quando pedem ou precisa muito", type: "C" },
      { text: "Isso é coisa de mulher... brincadeira, ajudo sim", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seu estilo de dar conselho é...",
    options: [
      { text: "Converso abertamente, sem julgamentos", type: "A" },
      { text: "Uso exemplos da minha vida pra ensinar", type: "B" },
      { text: "Vou direto ao ponto, sem rodeios", type: "C" },
      { text: "No meu tempo era diferente...", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Jogo do seu time com filho(a). Você...",
    options: [
      { text: "Momento sagrado, ritual de pai e filho", type: "A" },
      { text: "Curto, mas não sou fanático", type: "B" },
      { text: "Prefiro que cada um veja no seu canto", type: "C" },
      { text: "Ensino sobre futebol, conto histórias do time", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre demonstrar afeto, você...",
    options: [
      { text: "Abraço, beijo, falo 'te amo' sempre", type: "A" },
      { text: "Demonstro do meu jeito, nos atos", type: "B" },
      { text: "Sou mais reservado, mas eles sabem", type: "C" },
      { text: "Homem não chora, mas amo meus filhos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Filho(a) faz algo errado. Você...",
    options: [
      { text: "Converso, explico as consequências", type: "A" },
      { text: "Dou bronca na hora, depois converso", type: "B" },
      { text: "Castigo primeiro, explico depois", type: "C" },
      { text: "Minha palavra é lei, sem discussão", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Reunião de pais na escola. Você...",
    options: [
      { text: "Vou sempre, participo ativamente", type: "A" },
      { text: "Vou quando posso, me interesso", type: "B" },
      { text: "Mando a mãe, depois pergunto", type: "C" },
      { text: "Só vou se chamarem por problema", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu lema como pai é...",
    options: [
      { text: "Pai é amigo primeiro, autoridade depois", type: "A" },
      { text: "Equilíbrio entre amor e disciplina", type: "B" },
      { text: "Preparar pro mundo, sem mimar", type: "C" },
      { text: "Quem ama, educa com firmeza", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Paizão Moderno",
    emoji: "🤗",
    percentage: 95,
    description: "Você é O Paizão Moderno! Participativo, carinhoso, presente. Você quebra estereótipos e mostra que pai também é abraço, cuidado e diálogo aberto!",
    characteristics: ["Carinhoso", "Presente", "Aberto", "Participativo"],
    advice: "Seu modelo de paternidade é inspirador! Continue sendo essa referência positiva pros seus filhos. Eles vão lembrar disso pra sempre!",
  },
  B: {
    type: "B",
    title: "O Pai Equilibrado",
    emoji: "⚖️",
    percentage: 85,
    description: "Você é O Pai Equilibrado! Sabe dosar carinho e firmeza, presença e espaço. Você é a rocha da família, mas com flexibilidade quando precisa!",
    characteristics: ["Equilibrado", "Sensato", "Justo", "Estável"],
    advice: "Seu equilíbrio é admirável! Continue dosando autoridade com afeto, seus filhos vão crescer seguros e amados!",
  },
  C: {
    type: "C",
    title: "O Pai Prático",
    emoji: "🔧",
    percentage: 70,
    description: "Você é O Pai Prático! Menos palavras, mais ações. Você demonstra amor provendo, protegendo e preparando os filhos pro mundo real!",
    characteristics: ["Objetivo", "Protetor", "Provedor", "Direto"],
    advice: "Seu amor é real, mesmo que não seja tão demonstrado! Mas às vezes um abraço a mais, uma conversa mais longa, faz toda diferença!",
  },
  D: {
    type: "D",
    title: "O Pai Tradicional",
    emoji: "👔",
    percentage: 55,
    description: "Você é O Pai Tradicional! Educação firme, valores antigos, jeito de pai de antigamente. Você acredita que disciplina forma caráter!",
    characteristics: ["Firme", "Tradicional", "Respeitado", "Disciplinador"],
    advice: "A firmeza tem seu valor, mas o mundo mudou! Tenta abrir mais espaço pro diálogo. Autoridade e carinho podem andar juntos!",
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
