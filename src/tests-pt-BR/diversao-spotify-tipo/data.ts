// Seu Tipo no Spotify
// Descubra que tipo de usuário de Spotify você é!

export const questions = [
  {
    id: 1,
    question: "Sua forma favorita de ouvir música é...",
    options: [
      { text: "Minhas playlists cuidadosamente montadas", type: "A" },
      { text: "Playlists do Spotify tipo 'Descobertas da Semana'", type: "B" },
      { text: "Álbuns completos, do início ao fim", type: "C" },
      { text: "Botão aleatório em tudo que aparece", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quantas playlists você tem?",
    options: [
      { text: "Dezenas, uma pra cada humor e momento", type: "A" },
      { text: "Algumas bem organizadas", type: "B" },
      { text: "Poucas, prefiro álbuns e artistas", type: "C" },
      { text: "Uso as prontas do Spotify mesmo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Uma música nova que você gosta. Você...",
    options: [
      { text: "Adiciono em pelo menos 3 playlists diferentes", type: "A" },
      { text: "Curto e deixo o algoritmo lembrar por mim", type: "B" },
      { text: "Ouço o álbum inteiro do artista", type: "C" },
      { text: "Boto no repeat até enjoar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seu Spotify Wrapped revelaria que você...",
    options: [
      { text: "Tem gosto eclético, ouve de tudo", type: "A" },
      { text: "Descobriu muitos artistas novos", type: "B" },
      { text: "É super fã de poucos artistas específicos", type: "C" },
      { text: "Ouviu as mesmas 20 músicas o ano todo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você descobre músicas novas?",
    options: [
      { text: "TikTok, Reels, virais da internet", type: "A" },
      { text: "Recomendações do Spotify e algoritmo", type: "B" },
      { text: "Pesquiso artistas e gêneros ativamente", type: "C" },
      { text: "Indicação de amigos ou do que tá tocando", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você é daqueles que...",
    options: [
      { text: "Pula música no meio se não gostar", type: "A" },
      { text: "Dá uma chance até o refrão pelo menos", type: "B" },
      { text: "Ouve até o final por respeito ao artista", type: "C" },
      { text: "Deixo tocar sem prestar muita atenção", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual funcionalidade do Spotify você mais usa?",
    options: [
      { text: "Criar e organizar playlists", type: "A" },
      { text: "Descobertas da Semana e Mix Diário", type: "B" },
      { text: "Seguir artistas e ver lançamentos", type: "C" },
      { text: "Só dar play e deixar rolar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você compartilha o que tá ouvindo?",
    options: [
      { text: "Sempre, meus stories são trilha sonora", type: "A" },
      { text: "Às vezes, quando é muito bom", type: "B" },
      { text: "Raramente, música é pessoal", type: "C" },
      { text: "Nem lembro que dá pra compartilhar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sua relação com podcast no Spotify é...",
    options: [
      { text: "Ouço vários, é minha segunda casa", type: "A" },
      { text: "Alguns que gosto bastante", type: "B" },
      { text: "Spotify é só pra música", type: "C" },
      { text: "Tentei, mas prefiro só música", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você paga Spotify Premium?",
    options: [
      { text: "Óbvio, vida sem propagandas é melhor", type: "A" },
      { text: "Sim, e ainda divido com a família", type: "B" },
      { text: "Não, as propagandas não me incomodam tanto", type: "C" },
      { text: "Uso versão pirata/alternativa, confesso", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Curador Musical",
    emoji: "🎵",
    percentage: 95,
    description: "Você é O Curador Musical! Suas playlists são obras de arte. Você organiza por humor, momento, estação... Amigos te pedem playlist pra festa porque sabem que você manda bem demais!",
    characteristics: ["Organizado(a)", "Criativo(a)", "Perfeccionista", "Influenciador(a)"],
    advice: "Suas playlists são tesouros! Continue curando essas pérolas e compartilhando. Só não passa o dia todo organizando ao invés de ouvir!",
  },
  B: {
    type: "B",
    title: "O Explorador Algorítmico",
    emoji: "🔮",
    percentage: 85,
    description: "Você é O Explorador Algorítmico! Confia no Spotify pra te mostrar coisas novas e raramente se decepciona. Descobertas da Semana é seu momento sagrado. O algoritmo te conhece melhor que você mesmo!",
    characteristics: ["Curioso(a)", "Aberto(a)", "Confiante", "Descobridor(a)"],
    advice: "Sua abertura pra novidades é incrível! Continue deixando o algoritmo te surpreender, mas de vez em quando explore por conta própria também.",
  },
  C: {
    type: "C",
    title: "O Purista Musical",
    emoji: "💿",
    percentage: 80,
    description: "Você é O Purista Musical! Ouve álbuns completos, conhece a discografia dos seus artistas favoritos. Pra você, música é arte que merece atenção e respeito. Você é fã de verdade!",
    characteristics: ["Dedicado(a)", "Conhecedor(a)", "Fiel", "Apreciador(a)"],
    advice: "Seu amor pela música é inspirador! Continue apreciando a arte em sua forma completa. Só não deixe de explorar novos artistas de vez em quando.",
  },
  D: {
    type: "D",
    title: "O Ouvinte Casual",
    emoji: "🎧",
    percentage: 70,
    description: "Você é O Ouvinte Casual! Música é trilha sonora de fundo pra vida. Não precisa de playlist perfeita, não liga pra organização. Dá play e deixa rolar - simplicidade é a chave!",
    characteristics: ["Relaxado(a)", "Descomplicado(a)", "Prático(a)", "Flexível"],
    advice: "Sua simplicidade é refrescante! Às vezes a gente complica demais. Continue curtindo música sem stress, do seu jeito.",
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
