// Qual Profissão Brasileira Combina Com Você?
// Descubra sua carreira ideal no Brasil!

export const questions = [
  {
    id: 1,
    question: "O que você mais valoriza no trabalho?",
    options: [
      { text: "Ajudar pessoas, fazer diferença na sociedade", type: "A" },
      { text: "Criatividade, liberdade, expressão artística", type: "B" },
      { text: "Estabilidade, salário fixo, benefícios", type: "C" },
      { text: "Ganhar dinheiro, crescer, empreender", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você prefere trabalhar...",
    options: [
      { text: "Diretamente com pessoas, em equipe", type: "A" },
      { text: "De forma independente, com projetos criativos", type: "B" },
      { text: "Em ambiente organizado, rotina clara", type: "C" },
      { text: "Fechando negócios, vendendo, negociando", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu jeito de resolver problemas é...",
    options: [
      { text: "Conversando, entendendo todos os lados", type: "A" },
      { text: "Pensando fora da caixa, sendo criativo", type: "B" },
      { text: "Seguindo processos, métodos comprovados", type: "C" },
      { text: "Tomando decisões rápidas, assumindo riscos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre horário de trabalho, você prefere...",
    options: [
      { text: "Flexível, mas com propósito maior", type: "A" },
      { text: "Horários alternativos, trabalhar quando inspirar", type: "B" },
      { text: "Horário comercial, previsível", type: "C" },
      { text: "Trabalho muito, mas por resultados", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que te motiva a levantar pra trabalhar?",
    options: [
      { text: "Saber que vou impactar vidas positivamente", type: "A" },
      { text: "Criar algo novo, expressar minha visão", type: "B" },
      { text: "Segurança financeira, contas em dia", type: "C" },
      { text: "Conquistar mais, crescer profissionalmente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você lida com pressão no trabalho?",
    options: [
      { text: "Foco no porquê, no propósito maior", type: "A" },
      { text: "Transformo em inspiração criativa", type: "B" },
      { text: "Organizo, priorizo, sigo o plano", type: "C" },
      { text: "Adrenalina boa, trabalho melhor sob pressão", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu ambiente de trabalho ideal seria...",
    options: [
      { text: "Hospital, escola, ONG, onde ajudo pessoas", type: "A" },
      { text: "Estúdio, agência, espaço criativo", type: "B" },
      { text: "Escritório, empresa estabelecida, corporativo", type: "C" },
      { text: "Meu próprio negócio, startup, mercado", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você faria de graça?",
    options: [
      { text: "Voluntariado, ajudar causas sociais", type: "A" },
      { text: "Criar arte, música, conteúdo", type: "B" },
      { text: "Organizar, planejar, estruturar processos", type: "C" },
      { text: "Networking, conhecer pessoas influentes", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sobre salário, você pensa que...",
    options: [
      { text: "Importa menos que propósito e satisfação", type: "A" },
      { text: "Preciso viver bem, mas fazer o que amo", type: "B" },
      { text: "Estabilidade é fundamental, não abro mão", type: "C" },
      { text: "Quanto mais melhor, sem limite", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Daqui 10 anos, você quer ser lembrado(a) como...",
    options: [
      { text: "Alguém que fez diferença na vida das pessoas", type: "A" },
      { text: "Alguém criativo, que deixou uma marca artística", type: "B" },
      { text: "Profissional competente, confiável, estável", type: "C" },
      { text: "Alguém de sucesso, que construiu um império", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Profissões de Cuidado",
    emoji: "💚",
    percentage: 95,
    description: "Você combina com Profissões de Cuidado! Médico, professor, psicólogo, assistente social - você nasceu pra ajudar pessoas e fazer diferença na sociedade!",
    characteristics: ["Empático(a)", "Altruísta", "Paciente", "Dedicado(a)"],
    advice: "O Brasil precisa de pessoas como você! Continue seguindo seu coração. Profissões de cuidado são desafiadoras, mas extremamente recompensadoras!",
  },
  B: {
    type: "B",
    title: "Profissões Criativas",
    emoji: "🎨",
    percentage: 85,
    description: "Você combina com Profissões Criativas! Designer, publicitário, artista, arquiteto - sua mente precisa de liberdade pra criar e inovar!",
    characteristics: ["Criativo(a)", "Inovador(a)", "Expressivo(a)", "Visionário(a)"],
    advice: "Sua criatividade é um dom! O mercado brasileiro de economia criativa está em alta. Invista no seu talento e brilhe!",
  },
  C: {
    type: "C",
    title: "Profissões Estáveis",
    emoji: "🏢",
    percentage: 75,
    description: "Você combina com Profissões Estáveis! Concurso público, carreira corporativa, contador - você valoriza segurança e previsibilidade!",
    characteristics: ["Organizado(a)", "Confiável", "Metódico(a)", "Estável"],
    advice: "Estabilidade é importante! No Brasil, concursos públicos e carreiras corporativas oferecem segurança. Prepare-se bem e conquiste seu lugar!",
  },
  D: {
    type: "D",
    title: "Profissões de Negócios",
    emoji: "💼",
    percentage: 80,
    description: "Você combina com Profissões de Negócios! Empreendedor, executivo, vendedor, consultor - você quer crescer, ganhar e construir seu próprio caminho!",
    characteristics: ["Ambicioso(a)", "Determinado(a)", "Comunicativo(a)", "Estratégico(a)"],
    advice: "O Brasil é terra de oportunidades pra quem tem garra! Empreendedorismo é desafiador, mas você tem perfil pra vencer. Vai com tudo!",
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
