// Que Tipo de Jogador de Futebol Você Seria?
// Descubra qual posição e estilo de jogador combina com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você age em situações de pressão?",
    options: [
      { text: "Assumo a responsabilidade e vou pra cima", type: "A" },
      { text: "Organizo a jogada e distribuo as tarefas", type: "B" },
      { text: "Protejo o que é meu e defendo com garra", type: "C" },
      { text: "Fico firme no meu posto e não deixo passar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seu papel em um grupo de amigos?",
    options: [
      { text: "O que decide e executa as ideias", type: "A" },
      { text: "O que conecta todo mundo e faz acontecer", type: "B" },
      { text: "O que protege os amigos de problemas", type: "C" },
      { text: "O que dá a última palavra e resolve", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que te dá mais satisfação?",
    options: [
      { text: "Fazer o gol da vitória", type: "A" },
      { text: "Dar o passe perfeito pro gol", type: "B" },
      { text: "Fazer o carrinho salvador", type: "C" },
      { text: "Defender um pênalti decisivo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com críticas?",
    options: [
      { text: "Uso como motivação pra provar que sou bom", type: "A" },
      { text: "Analiso e melhoro o que for preciso", type: "B" },
      { text: "Defendo meu trabalho com argumentos", type: "C" },
      { text: "Fico firme na minha posição", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual característica mais te define?",
    options: [
      { text: "Velocidade e finalização", type: "A" },
      { text: "Visão de jogo e inteligência", type: "B" },
      { text: "Marcação e combatividade", type: "C" },
      { text: "Reflexos e concentração", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Em um projeto de trabalho, você prefere...",
    options: [
      { text: "Executar e entregar resultados", type: "A" },
      { text: "Coordenar e fazer tudo fluir", type: "B" },
      { text: "Garantir que nada dê errado", type: "C" },
      { text: "Ser a última linha de defesa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que mais te irrita?",
    options: [
      { text: "Perder oportunidades", type: "A" },
      { text: "Falta de colaboração da equipe", type: "B" },
      { text: "Ver alguém ser injustiçado", type: "C" },
      { text: "Erros por falta de atenção", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual jogador brasileiro mais te inspira?",
    options: [
      { text: "Romário, Ronaldo - artilheiros natos", type: "A" },
      { text: "Zico, Rivaldo - craques do passe", type: "B" },
      { text: "Cafu, Roberto Carlos - marcadores incansáveis", type: "C" },
      { text: "Taffarel, Dida - goleiros decisivos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você comemora uma conquista?",
    options: [
      { text: "Comemorando efusivamente, sou protagonista", type: "A" },
      { text: "Agradecendo a todos que ajudaram", type: "B" },
      { text: "Com orgulho pelo trabalho bem feito", type: "C" },
      { text: "Com alívio e satisfação interior", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seu maior medo?",
    options: [
      { text: "Não conseguir entregar quando mais precisam", type: "A" },
      { text: "Ver a equipe desorganizada", type: "B" },
      { text: "Falhar na proteção dos meus", type: "C" },
      { text: "Deixar passar algo que poderia ter evitado", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Em uma discussão, você...",
    options: [
      { text: "Vai direto ao ponto e resolve", type: "A" },
      { text: "Media e busca consenso", type: "B" },
      { text: "Defende sua posição com firmeza", type: "C" },
      { text: "Analisa tudo antes de falar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "É gol! Pode soltar o grito!", type: "A" },
      { text: "Futebol se joga com a cabeça", type: "B" },
      { text: "Aqui não passa ninguém!", type: "C" },
      { text: "Pode vir que eu pego!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Atacante Matador",
    emoji: "⚽",
    description: "Você é o atacante! Decisivo, corajoso e sempre pronto para fazer a diferença. Como Romário e Ronaldo, você brilha nos momentos importantes e adora a responsabilidade de decidir jogos!",
    traits: ["Decisivo", "Corajoso", "Protagonista", "Ambicioso"],
    strengths: ["Capacidade de finalizar", "Frieza sob pressão", "Confiança inabalável", "Instinto de gol"],
    weaknesses: ["Pode ser individualista", "Frustração quando não marca", "Às vezes esquece do coletivo"],
    tips: ["Valorize também o trabalho em equipe", "Nem todo dia você será o herói", "Celebre os gols dos outros também"],
  },
  B: {
    type: "B",
    title: "Meia Armador",
    emoji: "🎯",
    description: "Você é o camisa 10! Inteligente, criativo e com visão de jogo única. Como Zico e Rivaldo, você faz a equipe jogar e tem o dom de encontrar espaços onde ninguém vê!",
    traits: ["Inteligente", "Criativo", "Visionário", "Colaborativo"],
    strengths: ["Visão de jogo", "Capacidade de criar", "Liderança técnica", "Passe preciso"],
    weaknesses: ["Pode se frustrar com limitações alheias", "Às vezes muito perfeccionista", "Cobrança excessiva"],
    tips: ["Aceite que nem todos pensam rápido como você", "Às vezes o simples funciona", "Delegue mais"],
  },
  C: {
    type: "C",
    title: "Zagueiro/Volante Guerreiro",
    emoji: "🛡️",
    description: "Você é o defensor! Forte, leal e incansável. Como Cafu e Roberto Carlos, você dá tudo pelo time e não deixa ninguém ameaçar o que você protege!",
    traits: ["Forte", "Leal", "Determinado", "Protetor"],
    strengths: ["Marcação feroz", "Entrega total", "Liderança pelo exemplo", "Combatividade"],
    weaknesses: ["Pode ser agressivo demais", "Dificuldade em criar", "Às vezes muito reativo"],
    tips: ["Calcule mais suas ações", "Use a força com sabedoria", "Contribua também na criação"],
  },
  D: {
    type: "D",
    title: "Goleiro Seguro",
    emoji: "🧤",
    description: "Você é o goleiro! Concentrado, confiável e decisivo nos momentos cruciais. Como Taffarel e Alisson, você é a última linha de defesa e todos confiam em você!",
    traits: ["Concentrado", "Confiável", "Paciente", "Decisivo"],
    strengths: ["Reflexos apurados", "Calma sob pressão", "Liderança silenciosa", "Posicionamento"],
    weaknesses: ["Pode parecer passivo", "Solidão da posição", "Cobrança pesada por erros"],
    tips: ["Comunique-se mais com a defesa", "Erros fazem parte", "Você é mais importante do que parece"],
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
