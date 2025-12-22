// Autoconhecimento no Amor
// Descubra quanto você se conhece nos relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Quando um relacionamento termina, você costuma:",
    options: [
      { text: "Refletir profundamente sobre o que deu errado e minha parte nisso", type: "A" },
      { text: "Buscar feedback de amigos pra entender melhor", type: "B" },
      { text: "Seguir em frente sem pensar muito no passado", type: "C" },
      { text: "Ficar confuso(a) sem saber bem o que aconteceu", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você consegue identificar seus padrões em relacionamentos?",
    options: [
      { text: "Sim, conheço bem meus padrões e trabalho neles", type: "A" },
      { text: "Mais ou menos, estou começando a perceber", type: "B" },
      { text: "Acho que repito algumas coisas, mas não sei bem o quê", type: "C" },
      { text: "Nunca parei pra pensar nisso", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre suas necessidades emocionais no amor, você:",
    options: [
      { text: "Sei exatamente o que preciso e comunico ao parceiro(a)", type: "A" },
      { text: "Tenho uma boa ideia, mas nem sempre consigo expressar", type: "B" },
      { text: "Ainda estou descobrindo o que realmente preciso", type: "C" },
      { text: "Depende muito da outra pessoa, me adapto", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando você fica com ciúme, normalmente:",
    options: [
      { text: "Reconheço, entendo a origem e lido de forma madura", type: "A" },
      { text: "Sei que é ciúme, mas às vezes deixo afetar", type: "B" },
      { text: "Demoro pra perceber que é ciúme", type: "C" },
      { text: "Nego ou disfarço o que estou sentindo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sabe quais são seus limites em um relacionamento?",
    options: [
      { text: "Sim, tenho limites claros e os respeito", type: "A" },
      { text: "Sei na teoria, mas às vezes deixo ultrapassar", type: "B" },
      { text: "Estou aprendendo a identificar meus limites", type: "C" },
      { text: "Não penso muito em limites, vou levando", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando você se irrita com o parceiro(a), consegue identificar o real motivo?",
    options: [
      { text: "Sim, sei diferenciar o gatilho da causa real", type: "A" },
      { text: "Geralmente consigo, depois de pensar um pouco", type: "B" },
      { text: "Às vezes me confundo sobre o motivo real", type: "C" },
      { text: "Só sei que estou irritado(a), não entendo bem", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você conhece seu estilo de apego nos relacionamentos?",
    options: [
      { text: "Sim, já estudei sobre isso e me conheço bem", type: "A" },
      { text: "Tenho uma noção, mas não aprofundei muito", type: "B" },
      { text: "Já ouvi falar, mas não sei qual é o meu", type: "C" },
      { text: "Não sei o que é isso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sobre o que você busca em um relacionamento:",
    options: [
      { text: "Tenho clareza total dos meus valores e prioridades", type: "A" },
      { text: "Sei o básico, mas detalhes vou descobrindo", type: "B" },
      { text: "Muda dependendo da pessoa e do momento", type: "C" },
      { text: "Vou descobrindo conforme acontece", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você reconhece quando está projetando coisas no parceiro(a)?",
    options: [
      { text: "Sim, consigo perceber quando faço isso", type: "A" },
      { text: "Às vezes percebo, geralmente depois", type: "B" },
      { text: "Raramente percebo, outros me apontam", type: "C" },
      { text: "Não sei bem o que é projeção", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com suas inseguranças nos relacionamentos?",
    options: [
      { text: "Conheço minhas inseguranças e trabalho nelas ativamente", type: "A" },
      { text: "Reconheço algumas, mas ainda me afetam bastante", type: "B" },
      { text: "Sei que tenho, mas prefiro não pensar muito", type: "C" },
      { text: "Não me considero uma pessoa insegura", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Autoconhecimento Elevado",
    emoji: "🪞",
    percentage: 95,
    description: "Você tem um alto nível de autoconhecimento no amor! Sabe identificar seus padrões, entende suas necessidades emocionais e trabalha conscientemente em seus pontos de melhoria. Isso te dá uma base sólida pra relacionamentos saudáveis!",
    characteristics: ["Consciente", "Reflexivo(a)", "Maduro(a) emocionalmente", "Em constante evolução"],
    advice: "Continue investindo em autoconhecimento! Cuidado apenas pra não ficar analisando demais - às vezes é bom só viver e sentir. O equilíbrio entre reflexão e espontaneidade é o ideal!",
  },
  B: {
    type: "B",
    title: "Autoconhecimento em Desenvolvimento",
    emoji: "🌱",
    percentage: 75,
    description: "Você está no caminho do autoconhecimento! Já tem consciência de muitas coisas sobre si mesmo(a) no amor, mas ainda está desenvolvendo a habilidade de aplicar isso no dia a dia dos relacionamentos!",
    characteristics: ["Curioso(a)", "Em evolução", "Aberto(a) a aprender", "Esforçado(a)"],
    advice: "Você está no caminho certo! Continue se observando e refletindo. Terapia, livros sobre relacionamentos e conversas honestas podem acelerar muito seu processo de autoconhecimento!",
  },
  C: {
    type: "C",
    title: "Autoconhecimento Inicial",
    emoji: "🔍",
    percentage: 55,
    description: "Você está começando sua jornada de autoconhecimento no amor! Percebe que existem padrões e questões a entender, mas ainda não se aprofundou muito. É um ótimo momento pra investir nisso!",
    characteristics: ["Iniciante", "Potencial de crescimento", "Intuitivo(a)", "Adaptável"],
    advice: "Este é um momento valioso! Comece a prestar mais atenção em como você se sente e reage nos relacionamentos. Anotar pensamentos e sentimentos pode ajudar muito a se conhecer melhor!",
  },
  D: {
    type: "D",
    title: "Autoconhecimento a Explorar",
    emoji: "🗺️",
    percentage: 40,
    description: "Você ainda tem muito a descobrir sobre si mesmo(a) no amor! Tende a ir levando os relacionamentos sem refletir muito sobre seus padrões e necessidades. Há um mundo de autoconhecimento esperando por você!",
    characteristics: ["Espontâneo(a)", "Desconectado(a) de si", "Reativo(a)", "Em modo automático"],
    advice: "Invista em se conhecer melhor! Entender seus padrões, necessidades e limites vai transformar sua vida amorosa. Considere terapia ou leituras sobre o tema - o retorno é imenso!",
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
