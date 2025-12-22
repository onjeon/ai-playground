// Como Você Age na Fila?
// Descubra seu estilo brasileiro de esperar na fila!

export const questions = [
  {
    id: 1,
    question: "A fila do banco está enorme. Você...",
    options: [
      { text: "Já saio bufando e reclamando pro primeiro que aparecer", type: "A" },
      { text: "Fico de boa mexendo no celular, nem vejo o tempo passar", type: "B" },
      { text: "Começo a puxar papo com quem tiver do lado", type: "C" },
      { text: "Tento furar discretamente ou achar outro jeito", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Alguém fura a fila na sua frente. Qual sua reação?",
    options: [
      { text: "Falo na hora: 'A fila é lá atrás, amigo!'", type: "A" },
      { text: "Finjo que não vi, não quero confusão", type: "B" },
      { text: "Comento com a pessoa do lado pra ver se alguém fala", type: "C" },
      { text: "Entendo, às vezes a pessoa tá com pressa mesmo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Na fila da padaria de manhã, você está...",
    options: [
      { text: "Impaciente, preciso do meu pão de sal urgente", type: "A" },
      { text: "Tranquilo, faz parte do ritual matinal", type: "B" },
      { text: "Conversando sobre a novela com as senhoras", type: "C" },
      { text: "Já sei o pedido de cor, só espero minha vez", type: "D" },
    ],
  },
  {
    id: 4,
    question: "A fila do supermercado só tem caixa com 15 itens. Você tem 20...",
    options: [
      { text: "Reclamo que deviam abrir mais caixas", type: "A" },
      { text: "Vou pro caixa normal e espero de boa", type: "B" },
      { text: "Peço pra alguém segurar meu lugar enquanto pego mais coisa", type: "C" },
      { text: "Dou um jeitinho e passo os 20 mesmo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Fila pra show do seu artista favorito. Como você lida?",
    options: [
      { text: "Fico nervoso, e se esgotar antes de eu chegar?", type: "A" },
      { text: "Curto o clima, já faz parte da experiência", type: "B" },
      { text: "Faço amizade com o pessoal da fila", type: "C" },
      { text: "Chego cedo pra garantir lugar na frente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Na fila do INSS ou cartório, você...",
    options: [
      { text: "Já vou preparado pra reclamar de alguma coisa", type: "A" },
      { text: "Levo um livro ou podcast, sei que vai demorar", type: "B" },
      { text: "Acabo sabendo da vida de todo mundo ali", type: "C" },
      { text: "Tento achar um despachante ou alguém que resolva", type: "D" },
    ],
  },
  {
    id: 7,
    question: "A fila anda um passo. Você...",
    options: [
      { text: "Já dou aquele passo firme, marcando território", type: "A" },
      { text: "Ando quando tiver espaço suficiente", type: "B" },
      { text: "Ando conversando, nem percebo direito", type: "C" },
      { text: "Fico colado na pessoa da frente pra ninguém furar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Na fila do drive-thru, você...",
    options: [
      { text: "Fico buzinando mentalmente pro carro da frente", type: "A" },
      { text: "Curto o som do carro, de boa", type: "B" },
      { text: "Converso com quem tiver no carro comigo", type: "C" },
      { text: "Já ensaio o pedido pra ser rápido na hora", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Uma senhora idosa chega depois mas parece cansada. Você...",
    options: [
      { text: "Penso 'deveria ter preferencial', mas não falo nada", type: "A" },
      { text: "Deixo ela passar na minha frente numa boa", type: "B" },
      { text: "Ofereço meu lugar e puxo papo enquanto espero", type: "C" },
      { text: "Aponto onde fica a fila preferencial", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se sente quando a fila finalmente acaba?",
    options: [
      { text: "Aliviado e ainda reclamando do tempo que demorou", type: "A" },
      { text: "De boa, faz parte da vida né", type: "B" },
      { text: "Triste porque a conversa tava boa", type: "C" },
      { text: "Vitorioso, missão cumprida", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Reclamão da Fila",
    emoji: "😤",
    percentage: 85,
    description: "Você é O Reclamão da Fila! Pra você, toda fila é uma afronta pessoal. Reclama do sistema, do governo, do atendente... mas no fundo só quer ser ouvido. Pelo menos você dá voz ao que todo mundo tá pensando!",
    characteristics: ["Impaciente", "Sincero(a)", "Expressivo(a)", "Passional"],
    advice: "Respira fundo, amigo! A fila vai andar do mesmo jeito. Que tal usar esse tempo pra ouvir um podcast ou meditar? Sua pressão arterial agradece!",
  },
  B: {
    type: "B",
    title: "O Zen da Fila",
    emoji: "🧘",
    percentage: 75,
    description: "Você é O Zen da Fila! Pra você, a fila é só mais um momento do dia. Celular carregado, paciência infinita e zero stress. Os outros se estressam enquanto você flutua acima de tudo!",
    characteristics: ["Paciente", "Calmo(a)", "Adaptável", "Desapegado(a)"],
    advice: "Continue assim! Sua calma é inspiradora. Só não deixe os outros passarem por cima de você - às vezes um pouquinho de assertividade não faz mal.",
  },
  C: {
    type: "C",
    title: "O Social da Fila",
    emoji: "🗣️",
    percentage: 90,
    description: "Você é O Social da Fila! Pra você, fila é networking, terapia em grupo e reality show ao vivo. Em 10 minutos você já sabe o nome dos netos da senhora do lado e deu conselho amoroso pro jovem atrás!",
    characteristics: ["Comunicativo(a)", "Sociável", "Curioso(a)", "Acolhedor(a)"],
    advice: "Sua energia social é um dom! Só cuidado pra não perder sua vez porque tava distraído conversando. E nem todo mundo quer papo, respeite os fones de ouvido!",
  },
  D: {
    type: "D",
    title: "O Estrategista da Fila",
    emoji: "🧠",
    percentage: 80,
    description: "Você é O Estrategista da Fila! Analisa qual fila é mais rápida, qual caixa é mais eficiente, e sempre tem um plano B. A fila é um jogo de xadrez e você veio pra vencer!",
    characteristics: ["Estratégico(a)", "Observador(a)", "Prático(a)", "Eficiente"],
    advice: "Sua eficiência é admirável! Mas às vezes a fila mais rápida não é a mais feliz. Relaxe um pouco e deixe a vida surpreender você.",
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
