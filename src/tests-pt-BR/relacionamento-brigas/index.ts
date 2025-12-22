// Como Você Lida com Brigas no Relacionamento?
// Descubra seu estilo de resolver conflitos amorosos!

export const questions = [
  {
    id: 1,
    question: "Quando você e seu parceiro discordam de algo, como você reage?",
    options: [
      { text: "Quero resolver na hora conversando", type: "A" },
      { text: "Prefiro dar um tempo pra esfriar a cabeça", type: "B" },
      { text: "Fico na minha e espero ele(a) vir falar", type: "C" },
      { text: "Evito o assunto o máximo que posso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Durante uma briga, como você se comunica?",
    options: [
      { text: "Falo tudo que estou sentindo diretamente", type: "A" },
      { text: "Tento ser racional e focado no problema", type: "B" },
      { text: "Fico quieto(a) até me sentir pronto(a)", type: "C" },
      { text: "Acabo chorando ou ficando muito nervoso(a)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu parceiro fez algo que te magoou. O que você faz?",
    options: [
      { text: "Confronto imediatamente e peço explicações", type: "A" },
      { text: "Espero o momento certo pra conversar", type: "B" },
      { text: "Dou indiretas até ele(a) perceber", type: "C" },
      { text: "Guardo pra mim e tento superar sozinho(a)", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se sente após uma discussão intensa?",
    options: [
      { text: "Aliviado(a) por ter colocado tudo pra fora", type: "A" },
      { text: "Cansado(a), mas satisfeito(a) se resolvemos", type: "B" },
      { text: "Mal, preciso de tempo pra processar", type: "C" },
      { text: "Muito abalado(a) e ansioso(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual é sua maior dificuldade durante conflitos?",
    options: [
      { text: "Controlar minha intensidade e tom de voz", type: "A" },
      { text: "Expressar minhas emoções claramente", type: "B" },
      { text: "Não me fechar e fugir do assunto", type: "C" },
      { text: "Não levar tudo pro lado pessoal", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você pede desculpas depois de uma briga?",
    options: [
      { text: "Assumo meus erros e peço perdão diretamente", type: "A" },
      { text: "Analiso a situação e reconheço minha parte", type: "B" },
      { text: "Demoro mas eventualmente me desculpo", type: "C" },
      { text: "Mostro através de ações, não palavras", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Vocês brigaram e foram dormir sem resolver. Como você se sente?",
    options: [
      { text: "Preciso resolver antes de dormir", type: "A" },
      { text: "Às vezes é melhor dormir e conversar depois", type: "B" },
      { text: "Fico remoendo a noite toda", type: "C" },
      { text: "Finjo que está tudo bem pra evitar mais conflito", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você reage quando seu parceiro levanta a voz?",
    options: [
      { text: "Levanto a voz também pra me defender", type: "A" },
      { text: "Peço pra abaixar o tom e conversar civilizadamente", type: "B" },
      { text: "Me calo e me afasto da situação", type: "C" },
      { text: "Fico muito mal e posso chorar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Vocês discutem sobre o mesmo assunto repetidamente. O que você faz?",
    options: [
      { text: "Insisto até resolver de vez", type: "A" },
      { text: "Tento encontrar uma nova abordagem", type: "B" },
      { text: "Desisto de falar sobre isso", type: "C" },
      { text: "Questiono se o relacionamento funciona", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu parceiro quer fazer as pazes rapidamente. Como você reage?",
    options: [
      { text: "Aceito, também não gosto de ficar brigado(a)", type: "A" },
      { text: "Só se realmente conversarmos sobre", type: "B" },
      { text: "Preciso de mais tempo pra processar", type: "C" },
      { text: "Aceito pra acabar logo com o desconforto", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você lida com críticas do seu parceiro?",
    options: [
      { text: "Me defendo e explico meu lado", type: "A" },
      { text: "Ouço e reflito sobre o que foi dito", type: "B" },
      { text: "Me magoo e fico na defensiva", type: "C" },
      { text: "Guardo mágoa e penso nisso por dias", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Depois de resolver uma briga, como vocês ficam?",
    options: [
      { text: "Mais unidos e fortes do que antes", type: "A" },
      { text: "Aliviados e prontos pra seguir em frente", type: "B" },
      { text: "Um pouco distantes por um tempo", type: "C" },
      { text: "Fico com medo da próxima briga", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Confrontador(a) Direto(a)",
    emoji: "⚡",
    description: "Você enfrenta os conflitos de frente! Prefere resolver na hora e colocar tudo na mesa. Sua intensidade pode ser boa para não acumular problemas, mas às vezes pode escalar situações.",
    traits: ["Direto(a)", "Intenso(a)", "Expressivo(a)", "Não guarda mágoa"],
    strengths: ["Resolve conflitos rapidamente", "Não acumula ressentimento", "Comunicação clara", "Não foge de problemas"],
    weaknesses: ["Pode ser agressivo(a) demais", "Às vezes não dá espaço ao outro", "Pode escalar conflitos"],
    tips: ["Respire antes de reagir", "Dê espaço quando seu parceiro precisar", "Cuide do tom de voz", "Ouça mais, fale menos"],
  },
  B: {
    type: "B",
    title: "Mediador(a) Racional",
    emoji: "🧠",
    description: "Você aborda conflitos de forma equilibrada e racional! Prefere esperar o momento certo e conversar com calma. Busca soluções práticas e justas para ambos.",
    traits: ["Racional", "Equilibrado(a)", "Paciente", "Focado(a) em soluções"],
    strengths: ["Resolve conflitos de forma madura", "Sabe esperar o momento certo", "Busca compromisso", "Não escala situações"],
    weaknesses: ["Pode parecer frio(a) ou distante", "Às vezes demora demais pra agir"],
    tips: ["Mostre mais suas emoções", "Não seja racional demais", "Valide os sentimentos do outro", "Agir rápido às vezes é necessário"],
  },
  C: {
    type: "C",
    title: "Evitador(a) Passivo(a)",
    emoji: "🐢",
    description: "Você tende a se retrair durante conflitos. Precisa de tempo para processar e prefere evitar confrontos diretos. Pode acabar guardando sentimentos que deveriam ser expressos.",
    traits: ["Reservado(a)", "Precisa de espaço", "Evita confronto", "Processa internamente"],
    strengths: ["Não escala brigas", "Pensa antes de falar", "Evita dizer coisas que se arrepende"],
    weaknesses: ["Pode acumular ressentimento", "Parceiro pode se sentir ignorado", "Problemas não resolvidos voltam"],
    tips: ["Comunique quando precisar de espaço", "Não evite conversas importantes", "Expresse seus sentimentos", "Evitar não é resolver"],
  },
  D: {
    type: "D",
    title: "Sensível Emocional",
    emoji: "💧",
    description: "Você é muito sensível a conflitos e eles te afetam profundamente. Tende a evitar brigas por medo de se machucar e pode ficar ansioso(a) quando há tensão no ar.",
    traits: ["Muito sensível", "Emocional", "Evita conflito", "Ansioso(a) com brigas"],
    strengths: ["Empático(a)", "Não gosta de magoar o outro", "Busca harmonia"],
    weaknesses: ["Conflitos te afetam muito", "Pode aceitar coisas pra evitar briga", "Dificuldade em se expressar"],
    tips: ["Aprenda que conflito é normal", "Expresse suas necessidades", "Brigas saudáveis fortalecem relacionamentos", "Considere terapia se necessário"],
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
