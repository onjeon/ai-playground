// Relação com o Ex
// Descubra como você lida com relacionamentos passados!

export const questions = [
  {
    id: 1,
    question: "Como você se sente quando pensa no seu ex?",
    options: [
      { text: "Indiferente, faz parte do passado", type: "A" },
      { text: "Com carinho, mas sem saudade romântica", type: "B" },
      { text: "Ainda sinto alguma coisa, confusa", type: "C" },
      { text: "Com raiva ou mágoa ainda", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você stalka o ex nas redes sociais?",
    options: [
      { text: "Nunca, nem tenho interesse", type: "A" },
      { text: "Muito raramente, por curiosidade", type: "B" },
      { text: "De vez em quando, mais do que gostaria", type: "C" },
      { text: "Frequentemente, preciso saber da vida dele(a)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Se seu ex te mandar mensagem hoje, você...",
    options: [
      { text: "Respondo educadamente e sigo minha vida", type: "A" },
      { text: "Respondo com curiosidade, depende do assunto", type: "B" },
      { text: "Fico ansioso(a), coração acelera", type: "C" },
      { text: "Ignoro ou respondo com frieza/raiva", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você ainda guarda coisas do ex (fotos, presentes, lembranças)?",
    options: [
      { text: "Guardei só o que tem valor prático, sem apego", type: "A" },
      { text: "Tenho algumas coisas, mas não fico olhando", type: "B" },
      { text: "Guardo tudo, às vezes fico olhando com saudade", type: "C" },
      { text: "Joguei/queimei tudo com raiva", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você seria amigo(a) do seu ex?",
    options: [
      { text: "Sim, se for saudável pros dois", type: "A" },
      { text: "Talvez, mas com limites claros", type: "B" },
      { text: "Queria, mas ainda tenho sentimentos", type: "C" },
      { text: "Nunca, não quero perto de mim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você reage quando vê seu ex com outra pessoa?",
    options: [
      { text: "Normal, desejo felicidade", type: "A" },
      { text: "Um leve desconforto, mas passa", type: "B" },
      { text: "Dói bastante, fico comparando", type: "C" },
      { text: "Sinto raiva ou ciúmes intensos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você fala do seu ex pro seu atual?",
    options: [
      { text: "Só se for relevante, sem drama", type: "A" },
      { text: "Raramente, evito o assunto", type: "B" },
      { text: "Às vezes sem querer, ainda penso nele(a)", type: "C" },
      { text: "Nunca, mas comparo os dois mentalmente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quanto tempo você demorou pra superar seu último término?",
    options: [
      { text: "Alguns meses, chorei e segui em frente", type: "A" },
      { text: "Um bom tempo, mas superei", type: "B" },
      { text: "Ainda estou superando", type: "C" },
      { text: "Anos, ou ainda não superei direito", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você já voltou com um ex?",
    options: [
      { text: "Não, quando acaba, acaba", type: "A" },
      { text: "Uma vez, mas aprendi que não funciona", type: "B" },
      { text: "Sim, algumas vezes, esperando dar certo", type: "C" },
      { text: "Volto sempre, é um ciclo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase combina mais com você sobre ex?",
    options: [
      { text: "O passado fica no passado", type: "A" },
      { text: "Guardo boas memórias, mas sigo em frente", type: "B" },
      { text: "Ainda penso no que poderia ter sido", type: "C" },
      { text: "Não consigo esquecer ou perdoar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Desapegado(a) Saudável",
    emoji: "✌️",
    percentage: 95,
    description: "Você lida super bem com o passado! Consegue seguir em frente sem carregar mágoas ou saudades excessivas. Ex é ex, e você está focado(a) no presente e futuro.",
    characteristics: ["Maduro(a)", "Resolvido(a)", "Focado(a) no presente", "Equilibrado(a)"],
    advice: "Parabéns pela maturidade! Você sabe que término faz parte da vida. Continue assim, sempre aberto(a) a novas experiências sem carregar bagagens do passado.",
  },
  B: {
    type: "B",
    title: "Em Paz com o Passado",
    emoji: "🌅",
    percentage: 75,
    description: "Você está em paz com o passado! Guarda boas memórias mas não fica preso(a) a elas. Ocasionalmente pensa no ex, mas não deixa atrapalhar sua vida.",
    characteristics: ["Nostálgico(a) saudável", "Processando bem", "Aberto(a) ao novo", "Equilibrado(a)"],
    advice: "Você está no caminho certo! Permita-se sentir saudade às vezes, é normal. O importante é não deixar o passado te impedir de viver o presente plenamente.",
  },
  C: {
    type: "C",
    title: "Ainda Processando",
    emoji: "💭",
    percentage: 50,
    description: "Você ainda está processando o fim do relacionamento. Pensa no ex mais do que gostaria e tem sentimentos confusos. O término ainda não foi totalmente digerido.",
    characteristics: ["Saudosista", "Confuso(a)", "Em processo", "Precisando de tempo"],
    advice: "Dê tempo ao tempo! Evite stalkar, guardar muita coisa do passado. Foque em você, em novas experiências. Se não melhorar, terapia pode ajudar a processar esse luto.",
  },
  D: {
    type: "D",
    title: "Preso(a) ao Passado",
    emoji: "⛓️",
    percentage: 30,
    description: "Você está preso(a) ao passado! Seja por mágoa, saudade ou raiva, o ex ainda ocupa muito espaço na sua mente e coração. Isso te impede de seguir em frente.",
    characteristics: ["Ressentido(a) ou saudosista", "Preso(a)", "Ciclo repetitivo", "Precisando de ajuda"],
    advice: "É hora de se libertar! Esse apego ao passado está te prejudicando. Considere terapia pra trabalhar essas emoções. Você merece seguir em frente e viver novas histórias!",
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
