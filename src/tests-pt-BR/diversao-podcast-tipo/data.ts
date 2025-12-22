// Seu Tipo de Podcast
// Descubra que tipo de ouvinte de podcast você é!

export const questions = [
  {
    id: 1,
    question: "Quando você mais ouve podcast?",
    options: [
      { text: "No trânsito ou transporte público", type: "A" },
      { text: "Fazendo exercício ou correndo", type: "B" },
      { text: "Em casa, relaxando", type: "C" },
      { text: "Trabalhando ou fazendo tarefas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual tema te atrai mais?",
    options: [
      { text: "Notícias, política e atualidades", type: "A" },
      { text: "True crime, mistérios e histórias reais", type: "B" },
      { text: "Humor, entretenimento e cultura pop", type: "C" },
      { text: "Desenvolvimento pessoal e produtividade", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual duração ideal de episódio pra você?",
    options: [
      { text: "Curtinho, 20-30 minutos", type: "A" },
      { text: "Médio, 40-60 minutos", type: "B" },
      { text: "Longo, 1-2 horas", type: "C" },
      { text: "Tanto faz, depende do conteúdo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você descobre podcasts novos como?",
    options: [
      { text: "Indicação de amigos ou redes sociais", type: "A" },
      { text: "Algoritmo do Spotify ou plataforma", type: "B" },
      { text: "Pesquiso ativamente por temas", type: "C" },
      { text: "Fico nos mesmos de sempre", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você ouve podcast em qual velocidade?",
    options: [
      { text: "1x, normal", type: "A" },
      { text: "1.25x ou 1.5x, economizo tempo", type: "B" },
      { text: "2x, máxima eficiência", type: "C" },
      { text: "Varia conforme o podcast", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando gosta muito de um episódio, você...",
    options: [
      { text: "Mando pra todo mundo que conheço", type: "A" },
      { text: "Salvo pra ouvir de novo depois", type: "B" },
      { text: "Comento nas redes do podcast", type: "C" },
      { text: "Curto e sigo pro próximo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quantos podcasts você acompanha regularmente?",
    options: [
      { text: "Muitos! Tô sempre descobrindo novos", type: "A" },
      { text: "Uns 5-10 que são fixos", type: "B" },
      { text: "Poucos, 2-3 favoritos", type: "C" },
      { text: "Ouço episódios soltos, sem compromisso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Se um podcast favorito acabar, você...",
    options: [
      { text: "Fico triste, mas já tenho outros", type: "A" },
      { text: "Ouço tudo de novo desde o início", type: "B" },
      { text: "Busco algo parecido pra substituir", type: "C" },
      { text: "Nem ligo muito, sempre tem conteúdo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que te faz desistir de um podcast?",
    options: [
      { text: "Áudio ruim ou edição mal feita", type: "A" },
      { text: "Apresentadores chatos ou lentos", type: "B" },
      { text: "Conteúdo raso ou repetitivo", type: "C" },
      { text: "Propaganda demais", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Pra você, podcast é...",
    options: [
      { text: "Companhia pro dia a dia", type: "A" },
      { text: "Fonte de conhecimento e informação", type: "B" },
      { text: "Entretenimento puro", type: "C" },
      { text: "Forma de aproveitar melhor o tempo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Ouvinte Social",
    emoji: "📢",
    percentage: 85,
    description: "Você é O Ouvinte Social! Podcast pra você é experiência compartilhada. Adora indicar, comentar e discutir episódios. Você transforma cada podcast numa conversa e espalha conhecimento por onde passa!",
    characteristics: ["Comunicativo(a)", "Engajado(a)", "Curioso(a)", "Influenciador(a)"],
    advice: "Continue espalhando bons podcasts! Mas lembre que nem todo mundo quer ouvir 3 horas sobre true crime - respeite o gosto dos outros também!",
  },
  B: {
    type: "B",
    title: "O Ouvinte Fiel",
    emoji: "🎧",
    percentage: 80,
    description: "Você é O Ouvinte Fiel! Tem seus podcasts favoritos e acompanha religiosamente. Conhece a história dos apresentadores, espera ansioso por novos episódios. Você é fã de verdade!",
    characteristics: ["Leal", "Dedicado(a)", "Consistente", "Apaixonado(a)"],
    advice: "Sua dedicação é admirável! Só não deixe de explorar novos podcasts de vez em quando - pode encontrar novas paixões!",
  },
  C: {
    type: "C",
    title: "O Explorador de Podcasts",
    emoji: "🔍",
    percentage: 90,
    description: "Você é O Explorador de Podcasts! Sempre buscando novidades, experimentando gêneros diferentes. Sua playlist é um universo diverso de conteúdos. Você é o especialista que todo mundo consulta!",
    characteristics: ["Aventureiro(a)", "Curioso(a)", "Eclético(a)", "Conhecedor(a)"],
    advice: "Sua curiosidade é inspiradora! Continue explorando, você certamente tem indicações incríveis pra fazer.",
  },
  D: {
    type: "D",
    title: "O Ouvinte Produtivo",
    emoji: "⚡",
    percentage: 75,
    description: "Você é O Ouvinte Produtivo! Podcast é ferramenta de otimização do tempo. Ouve enquanto faz outras coisas, na velocidade 1.5x ou 2x. Cada minuto bem aproveitado é uma vitória!",
    characteristics: ["Eficiente", "Prático(a)", "Objetivo(a)", "Multitarefa"],
    advice: "Sua eficiência é impressionante! Mas às vezes vale desacelerar e curtir um episódio sem pressa. O conteúdo também é sobre a jornada!",
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
