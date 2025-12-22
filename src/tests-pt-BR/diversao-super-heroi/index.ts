// Qual Super-Herói Brasileiro Você Seria?
// Descubra qual tipo de herói você seria se tivesse superpoderes no Brasil!

export const questions = [
  {
    id: 1,
    question: "Qual seria seu superpoder ideal?",
    options: [
      { text: "Super força e resistência", type: "A" },
      { text: "Inteligência e tecnologia avançada", type: "B" },
      { text: "Velocidade sobre-humana", type: "C" },
      { text: "Poderes místicos e espirituais", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você combateria o crime?",
    options: [
      { text: "Na linha de frente, enfrentando vilões", type: "A" },
      { text: "Com estratégia e planejamento", type: "B" },
      { text: "Com agilidade e ataques rápidos", type: "C" },
      { text: "Usando sabedoria e poderes ancestrais", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual cidade brasileira você protegeria?",
    options: [
      { text: "São Paulo - a maior e mais desafiadora", type: "A" },
      { text: "Brasília - o centro do poder", type: "B" },
      { text: "Rio de Janeiro - a cidade que nunca dorme", type: "C" },
      { text: "Amazônia - protetor da natureza", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual seria sua fraqueza?",
    options: [
      { text: "Meu próprio ego e orgulho", type: "A" },
      { text: "Confiar demais na lógica", type: "B" },
      { text: "Agir sem pensar às vezes", type: "C" },
      { text: "Ser muito ligado ao passado", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que te motivaria a ser herói?",
    options: [
      { text: "Proteger os inocentes e fazer justiça", type: "A" },
      { text: "Usar minhas habilidades para o bem", type: "B" },
      { text: "A adrenalina e a aventura", type: "C" },
      { text: "Honrar meus ancestrais e tradições", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual seria seu uniforme?",
    options: [
      { text: "Armadura resistente e imponente", type: "A" },
      { text: "Traje tecnológico com gadgets", type: "B" },
      { text: "Roupa leve para máxima mobilidade", type: "C" },
      { text: "Traje inspirado em culturas brasileiras", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você trabalharia?",
    options: [
      { text: "Sozinho(a), sou autossuficiente", type: "A" },
      { text: "Com uma equipe bem coordenada", type: "B" },
      { text: "Com um parceiro(a) de confiança", type: "C" },
      { text: "Conectado(a) com forças maiores", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual vilão você mais gostaria de enfrentar?",
    options: [
      { text: "Um criminoso poderoso e brutal", type: "A" },
      { text: "Um gênio do mal com planos elaborados", type: "B" },
      { text: "Uma organização criminosa ágil", type: "C" },
      { text: "Forças sobrenaturais malignas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você faria no seu tempo livre?",
    options: [
      { text: "Treinaria para ficar mais forte", type: "A" },
      { text: "Desenvolveria novas tecnologias", type: "B" },
      { text: "Aproveitaria a vida normal", type: "C" },
      { text: "Meditaria e me conectaria espiritualmente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como a população te veria?",
    options: [
      { text: "Como um símbolo de força e proteção", type: "A" },
      { text: "Como um gênio misterioso", type: "B" },
      { text: "Como um herói popular e carismático", type: "C" },
      { text: "Como um guardião místico", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual seria seu lema?",
    options: [
      { text: "Com grande poder, grande responsabilidade", type: "A" },
      { text: "Conhecimento é poder", type: "B" },
      { text: "Mais rápido que uma bala!", type: "C" },
      { text: "A força dos ancestrais me guia", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que você salvaria primeiro?",
    options: [
      { text: "As pessoas em perigo imediato", type: "A" },
      { text: "A infraestrutura essencial", type: "B" },
      { text: "Quem conseguir alcançar mais rápido", type: "C" },
      { text: "O meio ambiente e a natureza", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Capitão Brasil",
    emoji: "🦸",
    description: "Você seria o Capitão Brasil! Forte, corajoso e símbolo de proteção. Assim como os grandes heróis de força, você está sempre na linha de frente, defendendo os inocentes com toda sua determinação!",
    traits: ["Corajoso", "Forte", "Protetor", "Determinado"],
    strengths: ["Força física", "Coragem inabalável", "Senso de justiça", "Liderança"],
    weaknesses: ["Orgulho excessivo", "Dificuldade em pedir ajuda", "Pode ser teimoso"],
    tips: ["Aceite ajuda dos outros", "Força não resolve tudo", "Vulnerabilidade não é fraqueza"],
  },
  B: {
    type: "B",
    title: "Gênio Tropical",
    emoji: "🧠",
    description: "Você seria o Gênio Tropical! Inteligente, estratégico e sempre um passo à frente. Assim como os heróis tecnológicos, você usa o cérebro como sua maior arma!",
    traits: ["Inteligente", "Estratégico", "Inovador", "Analítico"],
    strengths: ["Inteligência superior", "Capacidade de planejamento", "Inovação tecnológica", "Visão ampla"],
    weaknesses: ["Pode ser frio", "Overthinking", "Dificuldade com emoções"],
    tips: ["Confie também na intuição", "Conexões humanas importam", "Nem tudo tem solução lógica"],
  },
  C: {
    type: "C",
    title: "Relâmpago Carioca",
    emoji: "⚡",
    description: "Você seria o Relâmpago Carioca! Rápido, carismático e sempre onde precisam. Assim como os heróis velozes, você chega antes do perigo e resolve tudo num piscar de olhos!",
    traits: ["Veloz", "Carismático", "Ágil", "Espontâneo"],
    strengths: ["Velocidade incrível", "Carisma popular", "Reflexos apurados", "Adaptabilidade"],
    weaknesses: ["Impulsivo às vezes", "Dificuldade em parar", "Pode ser superficial"],
    tips: ["Pense antes de agir", "Às vezes devagar é melhor", "Profundidade também importa"],
  },
  D: {
    type: "D",
    title: "Guardião da Floresta",
    emoji: "🌿",
    description: "Você seria o Guardião da Floresta! Místico, sábio e conectado com forças ancestrais. Assim como os heróis espirituais, você protege não só as pessoas, mas toda a natureza brasileira!",
    traits: ["Sábio", "Místico", "Conectado", "Protetor"],
    strengths: ["Sabedoria ancestral", "Conexão espiritual", "Harmonia com a natureza", "Poderes únicos"],
    weaknesses: ["Pode parecer distante", "Dificuldade com modernidade", "Muito contemplativo"],
    tips: ["Equilibre tradição e modernidade", "Ação também é necessária", "Compartilhe sua sabedoria"],
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
