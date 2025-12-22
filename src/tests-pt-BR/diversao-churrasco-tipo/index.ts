// Qual Seu Papel no Churrasco?
// Descubra qual é sua função em um churrasco brasileiro!

export const questions = [
  {
    id: 1,
    question: "Quando você chega no churrasco, o que faz primeiro?",
    options: [
      { text: "Já vou pra churrasqueira ver a carne", type: "A" },
      { text: "Cumprimento todo mundo com calma", type: "B" },
      { text: "Vou direto pegar uma cerveja", type: "C" },
      { text: "Ajudo a organizar as coisas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se comporta durante o churrasco?",
    options: [
      { text: "No comando da churrasqueira", type: "A" },
      { text: "Batendo papo com todo mundo", type: "B" },
      { text: "Animando a galera, fazendo piadas", type: "C" },
      { text: "Cuidando da organização e limpeza", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual sua bebida favorita no churrasco?",
    options: [
      { text: "Cerveja gelada, muita cerveja", type: "A" },
      { text: "Uma boa caipirinha artesanal", type: "B" },
      { text: "O que tiver, o importante é brindar", type: "C" },
      { text: "Água ou refrigerante, tenho que dirigir", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual carne você mais espera no churrasco?",
    options: [
      { text: "Picanha! Mal passada por favor", type: "A" },
      { text: "Gosto de variedade, um pouco de cada", type: "B" },
      { text: "Qualquer uma, desde que venha logo", type: "C" },
      { text: "Linguiça, frango ou algo mais leve", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você lida com o ponto da carne?",
    options: [
      { text: "Tenho opinião forte e defendo", type: "A" },
      { text: "Cada um no seu, respeito todos", type: "B" },
      { text: "Tanto faz, só não queima!", type: "C" },
      { text: "Prefiro bem passada, por segurança", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual acompanhamento você não abre mão?",
    options: [
      { text: "Farofa especial e vinagrete", type: "A" },
      { text: "Arroz, salada e pão de alho", type: "B" },
      { text: "Cerveja é o acompanhamento!", type: "C" },
      { text: "Salada verde e legumes na brasa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você contribui com o churrasco?",
    options: [
      { text: "Levo a carne, é minha especialidade", type: "A" },
      { text: "Levo bebida ou acompanhamentos", type: "B" },
      { text: "Levo minha presença e bom humor", type: "C" },
      { text: "Levo sobremesa ou ajudo na limpeza", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que você faz quando a carne demora?",
    options: [
      { text: "Vou lá ver se precisa de ajuda", type: "A" },
      { text: "Continuo conversando, sem pressa", type: "B" },
      { text: "Reclamo brincando e bebo mais", type: "C" },
      { text: "Aproveito pra arrumar algo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual música combina com seu churrasco?",
    options: [
      { text: "Sertanejo ou pagode", type: "A" },
      { text: "MPB ou uma playlist variada", type: "B" },
      { text: "Funk ou o que animar a galera", type: "C" },
      { text: "Algo mais tranquilo, som ambiente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você reage se acabar a carne?",
    options: [
      { text: "Impossível, eu controlei as quantidades!", type: "A" },
      { text: "Normal, a companhia é o que importa", type: "B" },
      { text: "Faço drama brincando", type: "C" },
      { text: "Sugiro pedir delivery ou fazer algo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "No final do churrasco, você...",
    options: [
      { text: "Fico orgulhoso(a) da carne que fiz", type: "A" },
      { text: "Agradeço a todos pelo dia", type: "B" },
      { text: "Sou o último a ir embora", type: "C" },
      { text: "Já estou ajudando a limpar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual é o segredo de um bom churrasco?",
    options: [
      { text: "Carne de qualidade e bom churrasqueiro", type: "A" },
      { text: "Boa companhia e clima agradável", type: "B" },
      { text: "Muita bebida e diversão", type: "C" },
      { text: "Organização e todos ajudando", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Churrasqueiro Oficial",
    emoji: "🥩",
    description: "Você é o Churrasqueiro Oficial! Ninguém toca na sua churrasqueira. Com orgulho, você domina o fogo, conhece os pontos e faz a melhor picanha do grupo!",
    traits: ["Especialista", "Perfeccionista", "Líder", "Orgulhoso(a)"],
    strengths: ["Habilidade na churrasqueira", "Liderança natural", "Conhecimento técnico", "Dedicação"],
    weaknesses: ["Possessivo(a) com a churrasqueira", "Pode ser exigente", "Não aceita críticas"],
    tips: ["Deixe outros aprenderem", "Relaxe e curta também", "A perfeição não existe"],
  },
  B: {
    type: "B",
    title: "O/A Sociável",
    emoji: "🤝",
    description: "Você é o Sociável! Para você, churrasco é sobre as pessoas. Você circula, conversa com todos e faz todo mundo se sentir incluído e à vontade!",
    traits: ["Sociável", "Acolhedor(a)", "Diplomático(a)", "Amigável"],
    strengths: ["Conectar pessoas", "Criar clima agradável", "Inclusão de todos", "Boa companhia"],
    weaknesses: ["Pode ignorar a comida", "Às vezes disperso(a)", "Não ajuda tanto na prática"],
    tips: ["Ofereça ajuda prática também", "Coma algo!", "Equilibre socialização e participação"],
  },
  C: {
    type: "C",
    title: "O/A Animador(a)",
    emoji: "🎉",
    description: "Você é o Animador! Sem você, o churrasco seria só comida. Você traz a energia, as piadas, os brindes e faz todo mundo rir e se divertir!",
    traits: ["Animado(a)", "Engraçado(a)", "Festeiro(a)", "Carismático(a)"],
    strengths: ["Animar qualquer ambiente", "Fazer todos rirem", "Energia inesgotável", "Memórias divertidas"],
    weaknesses: ["Pode beber demais", "Às vezes inconveniente", "Não ajuda muito"],
    tips: ["Modere na bebida", "Ajude em algo também", "Nem sempre precisa ser o centro"],
  },
  D: {
    type: "D",
    title: "O/A Organizador(a)",
    emoji: "🧹",
    description: "Você é o Organizador! Você é quem garante que tudo funcione. Arruma, limpa, organiza e no final já está lavando a louça. O herói silencioso do churrasco!",
    traits: ["Organizado(a)", "Responsável", "Prestativo(a)", "Discreto(a)"],
    strengths: ["Manter tudo funcionando", "Ajudar sem pedir", "Responsabilidade", "Pensar nos outros"],
    weaknesses: ["Pode esquecer de curtir", "Muito focado(a) em tarefas", "Não relaxa nunca"],
    tips: ["Sente e curta também!", "Deixe outros ajudarem", "Você merece aproveitar"],
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
