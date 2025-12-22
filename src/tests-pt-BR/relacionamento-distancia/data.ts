// Relacionamento a Distância
// Descubra como você lidaria com um amor à distância!

export const questions = [
  {
    id: 1,
    question: "Se seu amor precisasse morar em outra cidade por um ano, você:",
    options: [
      { text: "Toparia, com muito planejamento e comunicação", type: "A" },
      { text: "Tentaria, mas confesso que seria muito difícil", type: "B" },
      { text: "Teria muitas dúvidas se conseguiria manter", type: "C" },
      { text: "Provavelmente não funcionaria pra mim", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre videochamadas diárias com parceiro(a) à distância:",
    options: [
      { text: "Essencial! Faria questão de ter esse ritual", type: "A" },
      { text: "Importante, mas nem todo dia seria possível", type: "B" },
      { text: "Bom ter, mas não gosto de obrigação", type: "C" },
      { text: "Cansativo, prefiro menos frequente mas com qualidade", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que mais te preocuparia em um relacionamento à distância?",
    options: [
      { text: "A saudade, mas daria pra lidar com planejamento", type: "A" },
      { text: "A falta de contato físico e presença", type: "B" },
      { text: "A confiança e insegurança que poderia surgir", type: "C" },
      { text: "Achar que não vale a pena tanto sacrifício", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quanto à confiança em relacionamentos à distância:",
    options: [
      { text: "Confio plenamente, distância não muda isso", type: "A" },
      { text: "Confio, mas preciso de comunicação constante", type: "B" },
      { text: "Seria difícil manter a confiança inabalada", type: "C" },
      { text: "Distância me deixaria muito inseguro(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre os reencontros em um namoro à distância:",
    options: [
      { text: "Seriam super especiais, valeria toda espera", type: "A" },
      { text: "Bons, mas preferia o cotidiano junto", type: "B" },
      { text: "Poucos reencontros não seriam suficientes pra mim", type: "C" },
      { text: "Acho que a expectativa seria maior que a realidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você já considerou ou consideraria um relacionamento que começasse online?",
    options: [
      { text: "Sim, se a conexão for real, a distância é detalhe", type: "A" },
      { text: "Talvez, mas com planos concretos de se encontrar", type: "B" },
      { text: "Tenho receio, gosto de presença física", type: "C" },
      { text: "Não, preciso de contato real desde o início", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual seria sua maior estratégia pra manter a relação à distância?",
    options: [
      { text: "Comunicação constante e criativa, sempre conectados", type: "A" },
      { text: "Visitas regulares planejadas com antecedência", type: "B" },
      { text: "Focar no objetivo final de ficar juntos", type: "C" },
      { text: "Honestamente, não sei se teria estratégia", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Se surgisse uma oportunidade incrível mas longe do seu amor:",
    options: [
      { text: "Conversaria pra ver se conseguimos fazer funcionar à distância", type: "A" },
      { text: "Pensaria muito, oportunidade vs relacionamento", type: "B" },
      { text: "Provavelmente escolheria a relação", type: "C" },
      { text: "Provavelmente escolheria a oportunidade", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sobre mandar mensagens e manter contato ao longo do dia:",
    options: [
      { text: "Faria questão de estar sempre conectado(a)", type: "A" },
      { text: "Mandaria mensagens frequentes, mas com moderação", type: "B" },
      { text: "Cada um na sua rotina, falamos quando der", type: "C" },
      { text: "Não gosto de ficar no celular o tempo todo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pra você, relacionamento à distância funciona quando:",
    options: [
      { text: "Há muito amor, confiança e data pra acabar a distância", type: "A" },
      { text: "As duas pessoas se esforçam muito e são maduras", type: "B" },
      { text: "É por pouco tempo e tem encontros frequentes", type: "C" },
      { text: "Sinceramente, acho muito difícil funcionar bem", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Preparado(a) pra Distância",
    emoji: "💌",
    percentage: 92,
    description: "Você tem perfil pra lidar bem com relacionamentos à distância! Valoriza comunicação, tem maturidade emocional e acredita que amor forte supera quilômetros. Com planejamento, faria funcionar!",
    characteristics: ["Comunicativo(a)", "Confiante", "Paciente", "Comprometido(a)"],
    advice: "Você tem as ferramentas certas! Só lembre-se de definir datas e planos concretos pra terminar a distância. Relacionamento à distância funciona melhor quando há um objetivo claro!",
  },
  B: {
    type: "B",
    title: "Adaptável com Esforço",
    emoji: "📱",
    percentage: 72,
    description: "Você conseguiria manter um relacionamento à distância, mas precisaria de muito esforço e estrutura! Não é seu cenário ideal, mas com a pessoa certa e planos claros, daria seu melhor!",
    characteristics: ["Esforçado(a)", "Realista", "Precisa de estrutura", "Comprometido(a) com limites"],
    advice: "Se entrar num relacionamento à distância, estabeleça logo a frequência de comunicação e visitas. Ter expectativas claras vai ajudar a lidar melhor com a situação!",
  },
  C: {
    type: "C",
    title: "Desafiado(a) pela Distância",
    emoji: "🤔",
    percentage: 50,
    description: "Relacionamento à distância seria um grande desafio pra você! Valoriza presença física e tem dificuldade em manter conexão sem o cotidiano junto. Precisaria de circunstâncias muito especiais!",
    characteristics: ["Precisa de presença", "Valoriza o físico", "Inseguro(a) com distância", "Tradicional"],
    advice: "Se se encontrar numa situação de distância, seja honesto(a) sobre suas necessidades. Talvez funcione por períodos curtos, mas pense bem antes de se comprometer com algo longo!",
  },
  D: {
    type: "D",
    title: "Não é pra Mim",
    emoji: "🏠",
    percentage: 30,
    description: "Relacionamento à distância definitivamente não é pra você! Precisa de contato físico, presença constante e não se adapta bem à separação. Sabe que esse formato não funcionaria!",
    characteristics: ["Precisa de proximidade", "Valoriza presença física", "Não se adapta à distância", "Direto(a)"],
    advice: "Tudo bem saber seus limites! Se uma situação de distância surgir, seja honesto(a) desde o início. Forçar algo que não funciona pra você só trará sofrimento!",
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
