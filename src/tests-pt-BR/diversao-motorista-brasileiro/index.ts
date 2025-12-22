// Que Tipo de Motorista Brasileiro Você É?
// Descubra seu perfil no trânsito!

export const questions = [
  {
    id: 1,
    question: "Alguém te fecha no trânsito. Você...",
    options: [
      { text: "Buzino e xingo muito", type: "A" },
      { text: "Fico irritado mas não faço nada", type: "B" },
      { text: "Deixo pra lá, faz parte", type: "C" },
      { text: "Rio da situação e sigo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você é com a velocidade?",
    options: [
      { text: "Adoro velocidade, sou piloto!", type: "A" },
      { text: "Respeito os limites na maioria", type: "B" },
      { text: "Dirijo sempre devagar e com cuidado", type: "C" },
      { text: "Depende do humor e da música", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz em engarrafamento?",
    options: [
      { text: "Fico nervoso e tento furar", type: "A" },
      { text: "Aceito e espero com paciência", type: "B" },
      { text: "Aproveito pra ouvir podcast ou música", type: "C" },
      { text: "Canto junto com a música bem alto", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como está seu carro?",
    options: [
      { text: "Tunado, com som potente", type: "A" },
      { text: "Bem cuidado e limpo", type: "B" },
      { text: "Funcional, o importante é andar", type: "C" },
      { text: "Com adesivos e personalizações", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você dá passagem para pedestres?",
    options: [
      { text: "Só se tiver obrigação legal", type: "A" },
      { text: "Sempre, educação no trânsito", type: "B" },
      { text: "Sim, e às vezes até exagero", type: "C" },
      { text: "Sim, e ainda aceno sorrindo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual sua relação com a buzina?",
    options: [
      { text: "Uso muito, as pessoas precisam acordar", type: "A" },
      { text: "Uso quando necessário", type: "B" },
      { text: "Quase nunca, evito barulho", type: "C" },
      { text: "Uso pra cumprimentar conhecidos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você se sente dirigindo?",
    options: [
      { text: "Poderoso(a), o carro é meu reino", type: "A" },
      { text: "Concentrado(a) e responsável", type: "B" },
      { text: "Às vezes tenso(a), trânsito é estressante", type: "C" },
      { text: "Relaxado(a), é meu momento de zen", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você usa app de trânsito?",
    options: [
      { text: "Sempre! Preciso do caminho mais rápido", type: "A" },
      { text: "Sim, ajuda a evitar problemas", type: "B" },
      { text: "Às vezes, prefiro o caminho que conheço", type: "C" },
      { text: "Sim, mas às vezes ignoro e vou pela minha", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você estaciona?",
    options: [
      { text: "Na primeira vaga, não importa se está certo", type: "A" },
      { text: "Procuro vaga adequada com paciência", type: "B" },
      { text: "Dou muitas voltas até achar perfeito", type: "C" },
      { text: "Qualquer lugar serve, não me estresso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você ouve no carro?",
    options: [
      { text: "Som no máximo, graves pesados", type: "A" },
      { text: "Música ou podcast num volume ok", type: "B" },
      { text: "Às vezes silêncio, pra pensar", type: "C" },
      { text: "Tudo! Canto, falo sozinho, é meu show", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você deixaria alguém dirigir seu carro?",
    options: [
      { text: "Nunca! Ninguém dirige como eu", type: "A" },
      { text: "Pessoas de confiança sim", type: "B" },
      { text: "Sim, às vezes é bom descansar", type: "C" },
      { text: "Claro, prefiro ir de carona às vezes", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no trânsito?",
    options: [
      { text: "'Sai da frente, tartaruga!'", type: "A" },
      { text: "'Calma, vamos chegar'", type: "B" },
      { text: "'Cuidado nunca é demais'", type: "C" },
      { text: "'Bora! A vida é uma viagem!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Motorista Piloto de Fórmula 1",
    emoji: "🏎️",
    description: "Você é o Piloto! Velocidade, ultrapassagens e zero paciência com lentidão. Você trata cada trajeto como uma corrida e cada carro lento como adversário!",
    traits: ["Apressado(a)", "Impaciente", "Competitivo(a)", "Intenso(a)"],
    strengths: ["Chega rápido", "Reflexos bons", "Confiança ao volante", "Decisivo(a)"],
    weaknesses: ["Multas frequentes", "Estresse alto", "Risco de acidentes"],
    tips: ["Devagar também se chega", "Sua vida vale mais que 5 minutos", "Calma no trânsito"],
  },
  B: {
    type: "B",
    title: "Motorista Responsável",
    emoji: "🚗",
    description: "Você é o Motorista Responsável! Respeita regras, tem paciência e entende que trânsito é coletivo. Você é o exemplo que todos deveriam seguir!",
    traits: ["Responsável", "Paciente", "Educado(a)", "Consciente"],
    strengths: ["Segurança", "Sem multas", "Respeito aos outros", "Tranquilidade"],
    weaknesses: ["Pode ser lento pra alguns", "Às vezes passivo demais", "Frustração com outros motoristas"],
    tips: ["Continue assim", "Você está certo(a)", "Ignore os apressados"],
  },
  C: {
    type: "C",
    title: "Motorista Cauteloso",
    emoji: "🐢",
    description: "Você é o Cauteloso! Segurança em primeiro lugar, sem pressa e com muito cuidado. Você pode demorar mais, mas chega inteiro(a)!",
    traits: ["Cauteloso(a)", "Cuidadoso(a)", "Tenso(a)", "Atento(a)"],
    strengths: ["Muito seguro(a)", "Poucos acidentes", "Atenção máxima", "Responsabilidade"],
    weaknesses: ["Demora muito", "Trânsito te estressa", "Medo excessivo"],
    tips: ["Confie mais em você", "Dirigir pode ser relaxante", "Prática traz confiança"],
  },
  D: {
    type: "D",
    title: "Motorista Zen",
    emoji: "🎵",
    description: "Você é o Motorista Zen! O carro é seu espaço de paz. Música alta, cantando junto, sem estresse. Trânsito é só um momento de você com você mesmo(a)!",
    traits: ["Relaxado(a)", "Bem-humorado(a)", "Despreocupado(a)", "Musical"],
    strengths: ["Sem estresse", "Aproveita o trajeto", "Bom humor", "Saúde mental"],
    weaknesses: ["Às vezes desatento(a)", "Pode irritar outros", "Demora sem perceber"],
    tips: ["Mantenha algum foco na estrada", "Som alto pode distrair", "Equilíbrio entre curtir e atenção"],
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
