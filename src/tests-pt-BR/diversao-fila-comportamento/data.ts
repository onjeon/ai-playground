// Qual Seu Comportamento na Fila?
// Descubra como você se comporta esperando na fila!

export const questions = [
  {
    id: 1,
    question: "Fila grande no supermercado. Você...",
    options: [
      { text: "Fico tranquilo(a), puxo assunto com alguém", type: "A" },
      { text: "Espero pacientemente mexendo no celular", type: "B" },
      { text: "Fico contando pessoas, calculando tempo", type: "C" },
      { text: "Já fico irritado(a), bufando e reclamando", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Alguém fura a fila na sua frente. Você...",
    options: [
      { text: "Falo educadamente que tem fila", type: "A" },
      { text: "Olho feio mas não falo nada", type: "B" },
      { text: "Comento alto pra todo mundo ouvir", type: "C" },
      { text: "Faço um barraco, não aceito fura-fila", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Fila preferencial: você...",
    options: [
      { text: "Respeito 100%, nunca uso se não tenho direito", type: "A" },
      { text: "Uso só quando a fila normal tá absurda", type: "B" },
      { text: "Já pensei em fingir que manco", type: "C" },
      { text: "Acho injusto, deveria ser uma fila só", type: "D" },
    ],
  },
  {
    id: 4,
    question: "A pessoa da frente é lenta no caixa. Você...",
    options: [
      { text: "Sem problema, todos têm seu tempo", type: "A" },
      { text: "Respiro fundo e espero", type: "B" },
      { text: "Fico olhando pro relógio ostensivamente", type: "C" },
      { text: "Já tô pensando em trocar de fila", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Fila de banco/cartório. Como você se prepara?",
    options: [
      { text: "Levo livro, fone, tô preparado(a)", type: "A" },
      { text: "Vou cedo pra pegar logo", type: "B" },
      { text: "Fico ansioso(a) só de pensar", type: "C" },
      { text: "Pago alguém pra ir no meu lugar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Fila de restaurante badalado. Você...",
    options: [
      { text: "Espero feliz, vale a pena", type: "A" },
      { text: "Espero se não for muito tempo", type: "B" },
      { text: "Vou embora e volto outra hora", type: "C" },
      { text: "Nem vou, odeio esperar", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você está na fila e lembra que esqueceu algo. Você...",
    options: [
      { text: "Peço pra quem tá atrás guardar meu lugar", type: "A" },
      { text: "Perco o lugar e volto pro fim da fila", type: "B" },
      { text: "Mando alguém buscar pra mim", type: "C" },
      { text: "Desisto de comprar o que esqueci", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Fila andando devagar. Você começa a...",
    options: [
      { text: "Conversar com as pessoas ao redor", type: "A" },
      { text: "Maratonar vídeos no celular", type: "B" },
      { text: "Ficar impaciente, olhando pra frente", type: "C" },
      { text: "Reclamar alto da demora", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Idoso ou grávida pede pra passar na sua frente. Você...",
    options: [
      { text: "Claro! Deixo passar sem problema", type: "A" },
      { text: "Deixo, mas mostro a fila preferencial", type: "B" },
      { text: "Depende do meu humor e da pressa", type: "C" },
      { text: "Aponto a fila preferencial firmemente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Fila faz parte da vida, levo numa boa", type: "A" },
      { text: "Paciência é uma virtude que pratico", type: "B" },
      { text: "Fila é perda de tempo, tinha que acabar", type: "C" },
      { text: "Pago mais caro pra não pegar fila", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Zen da Fila",
    emoji: "🧘",
    percentage: 95,
    description: "Você é O Zen da Fila! Esperar não é problema pra você. Aproveita o tempo pra conversar, observar, relaxar. Fila é só mais uma oportunidade de desacelerar!",
    characteristics: ["Paciente", "Sociável", "Tranquilo(a)", "Adaptável"],
    advice: "Sua paciência é admirável! Continue assim, espalhando essa energia boa nas filas. O mundo precisa de mais gente como você!",
  },
  B: {
    type: "B",
    title: "O Estrategista da Fila",
    emoji: "📱",
    percentage: 80,
    description: "Você é O Estrategista da Fila! Não ama esperar, mas se prepara. Celular carregado, fone no ouvido - transforma o tempo de espera em tempo útil!",
    characteristics: ["Prático(a)", "Organizado(a)", "Resiliente", "Tecnológico(a)"],
    advice: "Ótima tática! Só não esqueça de prestar atenção quando a fila andar. Ninguém gosta de ficar chamando quem tá no celular!",
  },
  C: {
    type: "C",
    title: "O Impaciente Contido",
    emoji: "⏰",
    percentage: 60,
    description: "Você é O Impaciente Contido! Por fora tá calmo(a), por dentro tá contando cada segundo. Segura a onda, mas a fila te estressa mais do que deveria!",
    characteristics: ["Ansioso(a)", "Inquieto(a)", "Perfeccionista", "Crítico(a)"],
    advice: "Respira fundo! Toda essa ansiedade não faz a fila andar mais rápido. Tenta relaxar, escutar uma música, olhar menos pro relógio!",
  },
  D: {
    type: "D",
    title: "O Anti-Fila",
    emoji: "💢",
    percentage: 40,
    description: "Você é O Anti-Fila! Esperar é tortura pra você. Paga mais caro, acorda mais cedo, faz de tudo pra evitar. Se não der, o humor já foi pro espaço!",
    characteristics: ["Impaciente", "Objetivo(a)", "Intenso(a)", "Decidido(a)"],
    advice: "A vida tem filas, é inevitável! Tenta desenvolver mais paciência, ou seu estresse vai te consumir. Quem sabe não baixa um app de meditação?",
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
