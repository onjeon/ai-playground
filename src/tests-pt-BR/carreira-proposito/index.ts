// Seu Propósito Profissional
// Descubra como o propósito guia sua carreira!

export const questions = [
  {
    id: 1,
    question: "Você sabe qual é seu propósito profissional?",
    options: [
      { text: "Sim, é muito claro para mim", type: "A" },
      { text: "Tenho uma boa noção", type: "B" },
      { text: "Ainda estou descobrindo", type: "C" },
      { text: "Não faço ideia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu trabalho atual está alinhado com seu propósito?",
    options: [
      { text: "Totalmente, é exatamente isso", type: "A" },
      { text: "Em grande parte sim", type: "B" },
      { text: "Parcialmente, tem pontos de conexão", type: "C" },
      { text: "Não, é só pelo dinheiro", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que mais te motiva no trabalho?",
    options: [
      { text: "Impacto e contribuição para algo maior", type: "A" },
      { text: "Fazer bem feito algo que importa", type: "B" },
      { text: "Crescimento pessoal e profissional", type: "C" },
      { text: "Dinheiro e segurança", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você aceitaria ganhar menos por um trabalho com mais propósito?",
    options: [
      { text: "Sim, já fiz isso", type: "A" },
      { text: "Provavelmente, se fizesse sentido", type: "B" },
      { text: "Talvez, dependeria de quanto menos", type: "C" },
      { text: "Não, dinheiro é prioridade", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você vê significado no que faz?",
    options: [
      { text: "Muito, cada dia tem sentido", type: "A" },
      { text: "Sim, na maioria das tarefas", type: "B" },
      { text: "Às vezes, em algumas coisas", type: "C" },
      { text: "Não, é só um meio para um fim", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual legado você quer deixar profissionalmente?",
    options: [
      { text: "Tenho visão clara do impacto que quero ter", type: "A" },
      { text: "Tenho ideias do que gostaria", type: "B" },
      { text: "Penso nisso às vezes", type: "C" },
      { text: "Nunca penso sobre legado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você escolhe oportunidades de carreira?",
    options: [
      { text: "Alinhamento com meu propósito é essencial", type: "A" },
      { text: "Propósito é importante entre outros fatores", type: "B" },
      { text: "Considero mas não é decisivo", type: "C" },
      { text: "Não é um critério, foco em cargo e salário", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você sente que contribui para algo maior?",
    options: [
      { text: "Sim, isso é central no meu trabalho", type: "A" },
      { text: "Frequentemente sim", type: "B" },
      { text: "Às vezes, quando penso nisso", type: "C" },
      { text: "Não, meu trabalho é só funcional", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se dinheiro não fosse problema, você continuaria trabalhando?",
    options: [
      { text: "Sim, continuaria fazendo algo significativo", type: "A" },
      { text: "Provavelmente, com mais liberdade de escolha", type: "B" },
      { text: "Não sei, talvez mudasse muito", type: "C" },
      { text: "Não, pararia imediatamente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você fala do seu propósito para outros?",
    options: [
      { text: "Sim, é parte de quem eu sou", type: "A" },
      { text: "Às vezes, quando relevante", type: "B" },
      { text: "Raramente, é algo pessoal", type: "C" },
      { text: "Não tenho o que falar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você lida com tarefas que não têm propósito claro?",
    options: [
      { text: "Encontro o propósito maior por trás", type: "A" },
      { text: "Faço sabendo que são necessárias", type: "B" },
      { text: "Fico desmotivado mas faço", type: "C" },
      { text: "Normal, a maioria do trabalho é assim", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais te representa?",
    options: [
      { text: "Trabalho é expressão do meu propósito", type: "A" },
      { text: "Busco significado no que faço", type: "B" },
      { text: "Trabalho é trabalho, propósito busco fora", type: "C" },
      { text: "Trabalho é meio de sobrevivência", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Guiado pelo Propósito",
    emoji: "⭐",
    description: "Seu propósito é bússola da sua carreira! Você sabe por que faz o que faz e isso te dá energia, direção e realização. Isso é poderoso e raro.",
    traits: ["Propositivo", "Motivado", "Claro", "Impactante"],
    strengths: ["Motivação intrínseca", "Resiliência", "Decisões claras", "Realização profunda"],
    weaknesses: ["Pode ser inflexível", "Pode julgar quem não tem propósito claro"],
    tips: ["Continue alimentando seu propósito", "Ajude outros a encontrar o deles", "Equilibre propósito com pragmatismo"],
  },
  B: {
    type: "B",
    title: "Buscador de Significado",
    emoji: "🔍",
    description: "Você valoriza propósito e busca significado! Ainda está refinando mas já tem direção. Está no caminho certo para uma carreira significativa.",
    traits: ["Buscador", "Consciente", "Em evolução", "Motivado"],
    strengths: ["Consciência da importância do propósito", "Abertura para significado"],
    weaknesses: ["Ainda refinando propósito", "Às vezes desconectado"],
    tips: ["Continue explorando seu propósito", "Conecte mais trabalho com significado", "Reflita regularmente sobre isso"],
  },
  C: {
    type: "C",
    title: "Propósito em Segundo Plano",
    emoji: "🤔",
    description: "Propósito não é central na sua carreira. Você trabalha por outros motivos e isso pode estar faltando na sua vida profissional. Vale refletir.",
    traits: ["Pragmático", "Funcional", "Desconectado", "Potencial"],
    strengths: ["Funciona sem propósito claro", "Pragmático"],
    weaknesses: ["Motivação pode ser mais baixa", "Realização limitada", "Vulnerável a crises de sentido"],
    tips: ["Vale explorar o que te motiva de verdade", "Propósito aumenta satisfação e performance", "Não é tarde para encontrar"],
  },
  D: {
    type: "D",
    title: "Sem Propósito Definido",
    emoji: "❓",
    description: "Você trabalha sem propósito claro, apenas por necessidade. Isso pode explicar falta de motivação ou realização. Encontrar significado pode transformar sua vida.",
    traits: ["Sem propósito", "Funcional apenas", "Potencialmente insatisfeito", "Oportunidade"],
    strengths: ["Pode funcionar mesmo sem propósito"],
    weaknesses: ["Motivação limitada", "Realização baixa", "Vulnerável a crises", "Vida profissional sem sentido"],
    tips: ["Propósito não é luxo, é necessidade!", "Comece a explorar o que te move", "Pode transformar completamente sua carreira e vida"],
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
