// Qual Sua Relação Com a Sogra?
// Descubra como você lida com sua sogra brasileira!

export const questions = [
  {
    id: 1,
    question: "Quando sua sogra liga, você...",
    options: [
      { text: "Atendo feliz, adoro conversar com ela", type: "A" },
      { text: "Atendo educadamente, converso bem", type: "B" },
      { text: "Passo pro(a) parceiro(a), não é pra mim", type: "C" },
      { text: "Finjo que não vi, ligo depois... talvez", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Almoço na casa da sogra. Você...",
    options: [
      { text: "Adoro! Como se fosse minha própria casa", type: "A" },
      { text: "Vou bem, fico à vontade", type: "B" },
      { text: "Vou por obrigação, fico contando as horas", type: "C" },
      { text: "Arrumo desculpa pra não ir sempre", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre a comida da sogra, você...",
    options: [
      { text: "É a melhor! Peço receita, elogio sempre", type: "A" },
      { text: "Gosto, como bem, agradeço", type: "B" },
      { text: "Como por educação, prefiro minha comida", type: "C" },
      { text: "Já comi cada coisa que nem comento", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sua sogra dá opinião sobre sua vida. Você...",
    options: [
      { text: "Ouço com carinho, ela só quer ajudar", type: "A" },
      { text: "Aceito algumas coisas, ignoro outras", type: "B" },
      { text: "Fico incomodado(a), mas disfarço", type: "C" },
      { text: "Respondo atravessado, não aguento mais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre dar presente pra sogra, você...",
    options: [
      { text: "Adoro! Pesquiso o que ela gosta, capricho", type: "A" },
      { text: "Compro algo legal, básico mas carinhoso", type: "B" },
      { text: "O(a) parceiro(a) escolhe, eu só assino", type: "C" },
      { text: "Dou qualquer coisa por obrigação", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sua sogra e sua mãe juntas. Você...",
    options: [
      { text: "Perfeito! Se dão super bem, adoro", type: "A" },
      { text: "Funciona, cada uma no seu canto", type: "B" },
      { text: "Evito que isso aconteça muito", type: "C" },
      { text: "Desastre esperando pra acontecer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre a sogra visitar sua casa, você...",
    options: [
      { text: "Pode vir sempre! Deixo tudo arrumado", type: "A" },
      { text: "Bem-vinda, mas com aviso prévio", type: "B" },
      { text: "Tolero, mas prefiro ir lá do que ela vir", type: "C" },
      { text: "Minha casa é meu castelo, sogra que ligue", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Se pudesse mudar algo na relação com a sogra, seria...",
    options: [
      { text: "Nada, nossa relação é ótima", type: "A" },
      { text: "Só pequenos ajustes, nada grave", type: "B" },
      { text: "Menos invasão na minha vida", type: "C" },
      { text: "Morar bem longe um do outro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sua sogra fica doente. Você...",
    options: [
      { text: "Corro pra ajudar, levo comida, cuido", type: "A" },
      { text: "Me preocupo, ofereço ajuda, visito", type: "B" },
      { text: "O(a) parceiro(a) cuida, dou apoio moral", type: "C" },
      { text: "Torço pra melhorar, mas não me envolvo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pra você, sogra é...",
    options: [
      { text: "Segunda mãe, família de verdade", type: "A" },
      { text: "Sogra boa é sogra longe... brincadeira, gosto dela", type: "B" },
      { text: "Parente do cônjuge, respeito mas com limites", type: "C" },
      { text: "Alguém que apareceu no pacote do casamento", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Genro/Nora Perfeito(a)",
    emoji: "💖",
    percentage: 95,
    description: "Você é O(A) Genro/Nora Perfeito(a)! Sua sogra te ama, você a ama de volta. Relação de carinho, respeito e harmonia. Você ganhou na loteria das sogras!",
    characteristics: ["Carinhoso(a)", "Respeitoso(a)", "Acolhedor(a)", "Família"],
    advice: "Parabéns pela relação maravilhosa! Continue cultivando esse carinho. Sogras como a sua são tesouros raros!",
  },
  B: {
    type: "B",
    title: "Genro/Nora Equilibrado(a)",
    emoji: "😊",
    percentage: 80,
    description: "Você é O(A) Genro/Nora Equilibrado(a)! Relação civilizada, educada, com respeito mútuo. Não são melhores amigos, mas funciona bem!",
    characteristics: ["Educado(a)", "Equilibrado(a)", "Diplomático(a)", "Sensato(a)"],
    advice: "Boa relação! Você sabe dosar proximidade e limites. Continue assim, mantendo o respeito sem forçar intimidade!",
  },
  C: {
    type: "C",
    title: "Genro/Nora Diplomático(a)",
    emoji: "🤝",
    percentage: 60,
    description: "Você é O(A) Genro/Nora Diplomático(a)! Mantém as aparências, é educado(a) quando precisa, mas prefere distância. Relação funcional, não afetiva!",
    characteristics: ["Distante", "Educado(a)", "Reservado(a)", "Prático(a)"],
    advice: "Nem toda relação precisa ser íntima! Mas às vezes um esforço extra melhora a convivência. Pense nisso!",
  },
  D: {
    type: "D",
    title: "Genro/Nora em Conflito",
    emoji: "😤",
    percentage: 40,
    description: "Você é O(A) Genro/Nora em Conflito! A relação com a sogra é complicada, difícil, às vezes tensa. O amor do(a) parceiro(a) te mantém firme!",
    characteristics: ["Sincero(a)", "Intenso(a)", "Resistente", "Direto(a)"],
    advice: "Relações difíceis com sogra são comuns no Brasil! Tenta ver pelo lado do(a) parceiro(a). Às vezes um diálogo honesto ajuda!",
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
