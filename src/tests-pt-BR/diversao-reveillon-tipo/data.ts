// Qual Seu Tipo no Réveillon?
// Descubra como você curte a virada do ano!

export const questions = [
  {
    id: 1,
    question: "Onde você passa o Réveillon ideal?",
    options: [
      { text: "Praia! Copacabana, Bahia, litoral...", type: "A" },
      { text: "Festa grande com muita gente", type: "B" },
      { text: "Em casa com família e amigos próximos", type: "C" },
      { text: "Sozinho(a) ou com pouquíssimas pessoas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Roupa de Réveillon: você...",
    options: [
      { text: "Branco da cabeça aos pés, tradição!", type: "A" },
      { text: "Branco com detalhes da cor do meu desejo", type: "B" },
      { text: "Qualquer roupa clara, não sou tão tradicional", type: "C" },
      { text: "Qualquer cor, não ligo pra essas crenças", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre simpatias de Ano Novo:",
    options: [
      { text: "Faço várias! Uvas, pular onda, tudo", type: "A" },
      { text: "Algumas tradicionais, por diversão", type: "B" },
      { text: "Uma ou outra, mais por costume", type: "C" },
      { text: "Não acredito, não faço nenhuma", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Meia-noite: contagem regressiva. Você...",
    options: [
      { text: "Gritando, pulando, emocionado(a)!", type: "A" },
      { text: "Brindando e abraçando todo mundo", type: "B" },
      { text: "Curtindo o momento mais tranquilo(a)", type: "C" },
      { text: "Verificando se já posso ir embora", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Fogos de artifício no Réveillon:",
    options: [
      { text: "O melhor momento! Assisto emocionado(a)", type: "A" },
      { text: "Bonito, gosto de ver", type: "B" },
      { text: "Indiferente, é só barulho", type: "C" },
      { text: "Prefiro sem, incomoda animais e pessoas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Ceia de Réveillon. Você...",
    options: [
      { text: "Capricho! Mesa farta, comidas especiais", type: "A" },
      { text: "Faço algo gostoso mas sem exagerar", type: "B" },
      { text: "Como o que tiver, não é o foco", type: "C" },
      { text: "Qualquer coisa serve, até delivery", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Promessas de Ano Novo: você...",
    options: [
      { text: "Faço várias e tento cumprir seriamente", type: "A" },
      { text: "Faço algumas metas mais realistas", type: "B" },
      { text: "Faço mas sei que não vou cumprir", type: "C" },
      { text: "Não faço, é perda de tempo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dia 1º de janeiro: você...",
    options: [
      { text: "Acordo cedo, ano novo vida nova!", type: "A" },
      { text: "Acordo tarde, ressaca de comemoração", type: "B" },
      { text: "Dia normal, descanso tranquilo", type: "C" },
      { text: "Dormi mais cedo que meia-noite mesmo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Música de Réveillon favorita:",
    options: [
      { text: "Vai Virar! Farofa! Músicas de virada", type: "A" },
      { text: "O que tiver tocando na festa", type: "B" },
      { text: "Prefiro som ambiente ou mais calmo", type: "C" },
      { text: "Não ligo pra música na virada", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se sente sobre o Ano Novo?",
    options: [
      { text: "É minha época favorita, cheio de esperança!", type: "A" },
      { text: "Gosto, é bom pra refletir e celebrar", type: "B" },
      { text: "É só mais uma data, não muda muito", type: "C" },
      { text: "Preferia pular essa comemoração toda", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Rei/Rainha do Réveillon",
    emoji: "🎆",
    percentage: 95,
    description: "Você é O Rei/Rainha do Réveillon! Ano Novo é sua festa! Branco, simpatias, praia, fogos, emoção... Você vive intensamente a virada e espalha energia positiva por onde passa!",
    characteristics: ["Festeiro(a)", "Otimista", "Tradicional", "Energético(a)"],
    advice: "Sua energia de Ano Novo é contagiante! Continue espalhando essa alegria. Só lembra de curtir o momento presente além de planejar o futuro!",
  },
  B: {
    type: "B",
    title: "O Celebrador Equilibrado",
    emoji: "🥂",
    percentage: 80,
    description: "Você é O Celebrador Equilibrado! Curte o Réveillon sem exageros. Brinda, comemora, faz reflexões... Você encontrou a medida certa entre festa e significado!",
    characteristics: ["Equilibrado(a)", "Reflexivo(a)", "Social", "Presente"],
    advice: "Você tem a dose certa de celebração! Continue aproveitando o Ano Novo como um momento de alegria e renovação, do seu jeito!",
  },
  C: {
    type: "C",
    title: "O Passageiro do Ano",
    emoji: "🌙",
    percentage: 60,
    description: "Você é O Passageiro do Ano! Réveillon é só mais uma noite pra você. Participa se precisar, mas não é fã da hype toda. Você prefere tranquilidade a fogos e multidão!",
    characteristics: ["Tranquilo(a)", "Prático(a)", "Independente", "Realista"],
    advice: "Tudo bem não ser superfã do Réveillon! Mas talvez dê pra encontrar seu jeito de curtir a virada - nem que seja só com um bom filme e uma taça!",
  },
  D: {
    type: "D",
    title: "O Anti-Réveillon",
    emoji: "😴",
    percentage: 40,
    description: "Você é O Anti-Réveillon! Pra você, 31 de dezembro é um dia como qualquer outro. Não entende a hype, não faz questão de simpatias ou comemorações. Feliz Ano Novo? Feliz qualquer dia!",
    characteristics: ["Cético(a)", "Introvertido(a)", "Diferentão", "Racional"],
    advice: "Respeito sua visão! Mas às vezes participar de rituais coletivos pode ser bom pra conexão social. Não precisa acreditar, só curtir o momento!",
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
