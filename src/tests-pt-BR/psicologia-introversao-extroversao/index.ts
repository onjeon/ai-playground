// Teste de Introversão vs Extroversão
// Descubra onde você está no espectro introversão-extroversão!

export const questions = [
  {
    id: 1,
    question: "Depois de um dia longo, como você prefere recarregar?",
    options: [
      { text: "Saindo com amigos para se divertir", type: "A" },
      { text: "Um encontro pequeno com pessoas próximas", type: "B" },
      { text: "Ficando em casa com um livro ou série", type: "C" },
      { text: "Completamente sozinho em silêncio", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Em uma festa, você geralmente:",
    options: [
      { text: "Conhece todo mundo e é o centro das atenções", type: "A" },
      { text: "Conversa com vários grupos diferentes", type: "B" },
      { text: "Fica com um grupo pequeno de conhecidos", type: "C" },
      { text: "Quer ir embora o mais rápido possível", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quantos amigos próximos você prefere ter?",
    options: [
      { text: "Muitos! Quanto mais, melhor", type: "A" },
      { text: "Um grupo médio de bons amigos", type: "B" },
      { text: "Poucos amigos muito íntimos", type: "C" },
      { text: "Um ou dois no máximo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você processa seus pensamentos?",
    options: [
      { text: "Falando com outras pessoas", type: "A" },
      { text: "Pensando em voz alta ou escrevendo", type: "B" },
      { text: "Refletindo internamente primeiro", type: "C" },
      { text: "Preciso de muito tempo sozinho para processar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você se sente energizado quando:",
    options: [
      { text: "Está rodeado de pessoas animadas", type: "A" },
      { text: "Tem interações sociais equilibradas", type: "B" },
      { text: "Tem momentos de qualidade a sós", type: "C" },
      { text: "Passa longos períodos em solitude", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Em reuniões de trabalho, você:",
    options: [
      { text: "Fala bastante e lidera discussões", type: "A" },
      { text: "Participa ativamente quando necessário", type: "B" },
      { text: "Prefere ouvir e falar quando tem certeza", type: "C" },
      { text: "Fala o mínimo possível", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Fim de semana ideal para você:",
    options: [
      { text: "Agenda cheia de eventos sociais", type: "A" },
      { text: "Mistura de atividades sociais e descanso", type: "B" },
      { text: "Maioria do tempo em casa com saídas pontuais", type: "C" },
      { text: "Completamente em casa, sem sair", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando conhece pessoas novas, você:",
    options: [
      { text: "Adora! Faz amigos facilmente", type: "A" },
      { text: "É amigável e aberto", type: "B" },
      { text: "É reservado no início mas se abre depois", type: "C" },
      { text: "Acha muito cansativo e desconfortável", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você prefere se comunicar?",
    options: [
      { text: "Pessoalmente ou por chamada de vídeo", type: "A" },
      { text: "Ligação ou mensagens de voz", type: "B" },
      { text: "Mensagens de texto", type: "C" },
      { text: "Email ou o mínimo de comunicação possível", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se considera uma pessoa:",
    options: [
      { text: "Que adora estar no centro das atenções", type: "A" },
      { text: "Sociável mas não precisa ser o centro", type: "B" },
      { text: "Que prefere observar a participar", type: "C" },
      { text: "Que evita atenção a todo custo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Depois de muita interação social, você se sente:",
    options: [
      { text: "Energizado e querendo mais", type: "A" },
      { text: "Bem, mas precisa de um tempinho", type: "B" },
      { text: "Cansado e precisando de solitude", type: "C" },
      { text: "Completamente drenado por dias", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Em qual ambiente você trabalha melhor?",
    options: [
      { text: "Escritório aberto e movimentado", type: "A" },
      { text: "Ambiente colaborativo com áreas quietas", type: "B" },
      { text: "Home office ou espaço mais reservado", type: "C" },
      { text: "Completamente isolado de pessoas", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Extrovertido Total",
    emoji: "🎉",
    description: "Você é energizado por pessoas e interações sociais! Adora estar rodeado de gente, fazer novos amigos e ser o centro das atenções. A solidão te drena.",
    traits: ["Sociável", "Comunicativo", "Energético", "Expressivo"],
    strengths: ["Facilidade em fazer conexões", "Liderança natural", "Networking eficiente", "Ambiente animado"],
    weaknesses: ["Pode falar demais", "Dificuldade em ficar sozinho", "Pode parecer superficial"],
    tips: ["Desenvolva habilidades de escuta", "Aprenda a apreciar momentos de solitude", "Profundidade é tão importante quanto quantidade"],
  },
  B: {
    type: "B",
    title: "Ambivertido Social",
    emoji: "🌈",
    description: "Você é um ambivertido com tendência extrovertida! Gosta de interações sociais mas também valoriza momentos de descanso. Consegue se adaptar a diferentes situações.",
    traits: ["Adaptável", "Equilibrado", "Flexível", "Sociável moderado"],
    strengths: ["Versatilidade social", "Equilíbrio energia", "Entende ambos os lados", "Adaptação situacional"],
    weaknesses: ["Pode se sentir dividido", "Às vezes não sabe o que precisa"],
    tips: ["Honre suas necessidades do momento", "Use sua flexibilidade como força", "Não se force a ser mais de nenhum lado"],
  },
  C: {
    type: "C",
    title: "Ambivertido Reservado",
    emoji: "🌙",
    description: "Você é um ambivertido com tendência introvertida! Aprecia conexões profundas e momentos de qualidade sozinho, mas também gosta de socializar em doses controladas.",
    traits: ["Reflexivo", "Seletivo", "Profundo", "Observador"],
    strengths: ["Relacionamentos profundos", "Boa escuta", "Autoconsciência", "Qualidade sobre quantidade"],
    weaknesses: ["Pode parecer distante", "Demora para se abrir"],
    tips: ["Não se pressione a ser mais extrovertido", "Comunique suas necessidades", "Valorize suas conexões profundas"],
  },
  D: {
    type: "D",
    title: "Introvertido Total",
    emoji: "📚",
    description: "Você é profundamente introvertido! Recarrega suas energias na solitude e interações sociais te drenam rapidamente. Você valoriza profundidade e seu mundo interior.",
    traits: ["Reflexivo", "Independente", "Profundo", "Reservado"],
    strengths: ["Rica vida interior", "Concentração intensa", "Relacionamentos muito profundos", "Autoconhecimento"],
    weaknesses: ["Networking difícil", "Pode isolar demais", "Comunicação pode ser desafio"],
    tips: ["Não há nada errado em ser introvertido", "Encontre formas confortáveis de socializar", "Comunique suas necessidades aos outros"],
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
