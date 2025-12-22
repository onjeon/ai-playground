// Qual Seu Tipo no Natal Brasileiro?
// Descubra seu perfil nas festas de fim de ano!

export const questions = [
  {
    id: 1,
    question: "Como você se prepara para o Natal?",
    options: [
      { text: "Organizo tudo: decoração, ceia, presentes", type: "A" },
      { text: "Ajudo no que precisar, sem estresse", type: "B" },
      { text: "Apareço na hora, pronto(a) pra comer", type: "C" },
      { text: "Queria poder pular essa época", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sua relação com a ceia de Natal é...",
    options: [
      { text: "Eu que cozinho! Chester, rabanada, tudo", type: "A" },
      { text: "Ajudo na cozinha e curto o processo", type: "B" },
      { text: "Só como e elogio, minha especialidade", type: "C" },
      { text: "Como por obrigação, preferia pizza", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você escolhe presentes?",
    options: [
      { text: "Com meses de antecedência, pensado pra cada um", type: "A" },
      { text: "Participo do amigo secreto com carinho", type: "B" },
      { text: "Compro tudo na véspera, qualquer coisa serve", type: "C" },
      { text: "Prefiro não trocar presentes", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Meia-noite de Natal, você está...",
    options: [
      { text: "Brindando, abraçando todo mundo", type: "A" },
      { text: "Curtindo o momento com quem amo", type: "B" },
      { text: "Atacando a sobremesa", type: "C" },
      { text: "Contando os minutos pra ir embora", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sua decoração de Natal é...",
    options: [
      { text: "Caprichada! Árvore, luzes, presépio", type: "A" },
      { text: "Simples mas aconchegante", type: "B" },
      { text: "Mínima, só o essencial", type: "C" },
      { text: "Zero, não decoro nada", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com a família reunida?",
    options: [
      { text: "Adoro! Quanto mais gente, melhor", type: "A" },
      { text: "Gosto, é época de união", type: "B" },
      { text: "Aguento bem, faz parte", type: "C" },
      { text: "Prefiro encontros menores", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual prato de Natal você mais espera?",
    options: [
      { text: "Chester/Peru com todas as guarnições", type: "A" },
      { text: "Sobremesas: rabanada, pavê, panetone", type: "B" },
      { text: "Tudo! Como até não aguentar mais", type: "C" },
      { text: "Tanto faz, comida é comida", type: "D" },
    ],
  },
  {
    id: 8,
    question: "No amigo secreto, você...",
    options: [
      { text: "Organizo as regras e a brincadeira", type: "A" },
      { text: "Participo animado(a), é divertido", type: "B" },
      { text: "Vou levando, mas sem muito empenho", type: "C" },
      { text: "Prefiro não participar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Calor de 40 graus no Natal brasileiro, você...",
    options: [
      { text: "Não importa, o espírito natalino é o que vale", type: "A" },
      { text: "Adapto a ceia pra comidas mais leves", type: "B" },
      { text: "Reclamo mas como tudo igual", type: "C" },
      { text: "Acho bizarro Natal no calor", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Dia 26 de dezembro, você...",
    options: [
      { text: "Já estou planejando o Ano Novo", type: "A" },
      { text: "Descanso e curto as sobras da ceia", type: "B" },
      { text: "Acordo tarde, de ressaca de comida", type: "C" },
      { text: "Alívio, acabou!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Papai/Mamãe Noel",
    emoji: "🎅",
    percentage: 95,
    description: "Você é O Papai/Mamãe Noel! Natal é sua época favorita e você faz questão que tudo seja perfeito. Da decoração à ceia, você espalha o espírito natalino por onde passa!",
    characteristics: ["Festivo(a)", "Generoso(a)", "Organizador(a)", "Acolhedor(a)"],
    advice: "Seu entusiasmo é contagiante! Mas lembre-se de curtir também, não só trabalhar. O Natal é pra você aproveitar, não só pra você organizar.",
  },
  B: {
    type: "B",
    title: "O Natalino Tranquilo",
    emoji: "🎄",
    percentage: 80,
    description: "Você é O Natalino Tranquilo! Curte a época sem estresse, participa com alegria mas sem neuras. Pra você, Natal é sobre estar junto, não sobre perfeição!",
    characteristics: ["Equilibrado(a)", "Presente", "Afetuoso(a)", "Sereno(a)"],
    advice: "Você entendeu a essência do Natal! Continue assim, valorizando os momentos e as pessoas sem se perder em excessos ou cobranças.",
  },
  C: {
    type: "C",
    title: "O Comilão Festivo",
    emoji: "🍗",
    percentage: 70,
    description: "Você é O Comilão Festivo! Pra você, Natal é sobre comida - muita comida. Chester, tender, rabanada, pavê... Você espera o ano todo por essa ceia!",
    characteristics: ["Bom de garfo", "Descontraído(a)", "Prático(a)", "Sincero(a)"],
    advice: "Nada como apreciar uma boa ceia! Mas tente também curtir os outros aspectos do Natal. As conversas e memórias duram mais que a digestão!",
  },
  D: {
    type: "D",
    title: "O Grinch Brasileiro",
    emoji: "😒",
    percentage: 40,
    description: "Você é O Grinch Brasileiro! Natal não é sua praia. O calor, a obrigação de reunir a família toda, os presentes... Você preferia que pulasse de novembro pra janeiro!",
    characteristics: ["Honesto(a)", "Introvertido(a)", "Independente", "Realista"],
    advice: "Tudo bem não amar o Natal! Mas talvez você possa encontrar sua própria forma de curtir a época - nem que seja só as folgas e as sobremesas.",
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
