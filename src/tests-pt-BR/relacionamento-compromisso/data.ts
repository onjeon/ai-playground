// Nível de Compromisso
// Descubra como você lida com compromisso no amor!

export const questions = [
  {
    id: 1,
    question: "Quando você começa a namorar alguém, você:",
    options: [
      { text: "Já me entrego de corpo e alma, 100% comprometido(a)", type: "A" },
      { text: "Vou me envolvendo aos poucos conforme a confiança cresce", type: "B" },
      { text: "Mantenho uma certa reserva até ter certeza", type: "C" },
      { text: "Curto o momento sem pensar muito em compromisso", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre planos de longo prazo com parceiro(a), você:",
    options: [
      { text: "Adoro planejar o futuro juntos desde cedo", type: "A" },
      { text: "Faço planos quando a relação está sólida", type: "B" },
      { text: "Prefiro ver como as coisas vão antes de planejar", type: "C" },
      { text: "Não gosto de fazer planos muito distantes", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Se surge uma oportunidade de emprego incrível em outra cidade, você:",
    options: [
      { text: "Converso com meu amor, só vou se formos juntos", type: "A" },
      { text: "Avalio com cuidado, pesando a relação na decisão", type: "B" },
      { text: "Considero seriamente, relação não pode me prender", type: "C" },
      { text: "Provavelmente vou, a vida é feita de oportunidades", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Na hora de assumir o relacionamento publicamente, você:",
    options: [
      { text: "Faço questão de apresentar pra todo mundo logo", type: "A" },
      { text: "Apresento quando sinto que é hora certa", type: "B" },
      { text: "Sou discreto(a), prefiro esperar pra ver se dá certo", type: "C" },
      { text: "Não ligo muito pra isso, cada um sabe da sua vida", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quando surgem problemas sérios no relacionamento, você:",
    options: [
      { text: "Luto até o fim pra resolver e manter a relação", type: "A" },
      { text: "Tento resolver, mas tenho meus limites", type: "B" },
      { text: "Avalio se vale a pena o esforço de continuar", type: "C" },
      { text: "Se está ruim, melhor partir pra outra", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre exclusividade no relacionamento, pra você:",
    options: [
      { text: "É fundamental desde o início, não aceito menos", type: "A" },
      { text: "É importante, mas precisa ser conversado", type: "B" },
      { text: "Depende do estágio da relação", type: "C" },
      { text: "Não me prendo a rótulos ou regras fixas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quanto ao futuro do relacionamento, você costuma:",
    options: [
      { text: "Ter visão clara: namoro, noivado, casamento", type: "A" },
      { text: "Ter algumas expectativas mas sem rigidez", type: "B" },
      { text: "Deixar fluir e ver o que acontece", type: "C" },
      { text: "Viver o presente, futuro é incerto demais", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando o parceiro(a) precisa de você, mas é inconveniente:",
    options: [
      { text: "Largo tudo e vou, prioridade absoluta", type: "A" },
      { text: "Faço o possível pra ajudar dentro do possível", type: "B" },
      { text: "Avalio a urgência e vejo se consigo", type: "C" },
      { text: "Depende muito da situação e do que tenho pra fazer", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Abrir mão de coisas pessoais pelo relacionamento é:",
    options: [
      { text: "Natural, faz parte de construir algo a dois", type: "A" },
      { text: "Aceitável em alguns casos importantes", type: "B" },
      { text: "Preciso ponderar muito antes de abrir mão", type: "C" },
      { text: "Difícil, não gosto de abrir mão da minha vida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais combina com você no amor?",
    options: [
      { text: "Quando amo, amo de verdade, sem meias medidas", type: "A" },
      { text: "Me comprometo quando encontro a pessoa certa", type: "B" },
      { text: "Gosto de manter minha independência mesmo amando", type: "C" },
      { text: "Prefiro relações mais leves, sem muita pressão", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Compromisso Total",
    emoji: "💯",
    percentage: 95,
    description: "Você é extremamente comprometido(a) nos relacionamentos! Quando ama, se entrega de corpo e alma, faz planos de longo prazo e coloca a relação como prioridade. Seu parceiro(a) pode contar com você!",
    characteristics: ["Dedicado(a)", "Leal", "Confiável", "Focado(a) no futuro juntos"],
    advice: "Seu comprometimento é admirável! Só cuide pra não se anular ou deixar de lado suas próprias necessidades. Relacionamento saudável precisa de dois indivíduos inteiros!",
  },
  B: {
    type: "B",
    title: "Compromisso Equilibrado",
    emoji: "⚖️",
    percentage: 75,
    description: "Você tem um nível saudável de compromisso! Se envolve de verdade, mas de forma gradual e ponderada. Sabe equilibrar a relação com sua vida individual e tem expectativas realistas!",
    characteristics: ["Equilibrado(a)", "Ponderado(a)", "Maduro(a)", "Realista"],
    advice: "Você tem uma abordagem muito saudável! Continue mantendo esse equilíbrio entre compromisso e individualidade. Comunicação clara é sua aliada!",
  },
  C: {
    type: "C",
    title: "Compromisso Cauteloso",
    emoji: "🔍",
    percentage: 55,
    description: "Você é cauteloso(a) com compromissos amorosos! Prefere ir devagar, manter sua independência e só se comprometer quando tem muita certeza. Protege seu coração!",
    characteristics: ["Cauteloso(a)", "Independente", "Analítico(a)", "Protetor(a) de si"],
    advice: "É bom se proteger, mas cuidado pra não deixar passar oportunidades de amor! Às vezes arriscar faz parte. Reflita se o medo não está limitando suas experiências!",
  },
  D: {
    type: "D",
    title: "Compromisso Livre",
    emoji: "🦅",
    percentage: 35,
    description: "Você prefere relações mais leves, sem muita pressão de compromisso! Valoriza sua liberdade e independência acima de tudo. Curte o momento presente sem se prender a planos futuros!",
    characteristics: ["Livre", "Espontâneo(a)", "Independente", "Vive o presente"],
    advice: "Sua liberdade é válida! Mas se quiser construir algo duradouro um dia, vai precisar estar aberto(a) a algum nível de compromisso. Reflita sobre o que realmente quer!",
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
