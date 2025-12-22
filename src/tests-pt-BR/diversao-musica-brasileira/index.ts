// Qual Gênero Musical Brasileiro Você Seria?
// Descubra qual estilo de música brasileira combina com sua alma!

export const questions = [
  {
    id: 1,
    question: "Como você prefere curtir uma música?",
    options: [
      { text: "Dançando muito, corpo em movimento", type: "A" },
      { text: "Ouvindo com atenção, sentindo a letra", type: "B" },
      { text: "Cantando junto com os amigos", type: "C" },
      { text: "No show, pulando e se jogando", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual ambiente musical mais te atrai?",
    options: [
      { text: "Baile funk ou bloco de carnaval", type: "A" },
      { text: "Bar intimista com voz e violão", type: "B" },
      { text: "Rodeio ou festa do interior", type: "C" },
      { text: "Festival de rock ou show na praia", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual tema de música mais te toca?",
    options: [
      { text: "Festa, autoestima, empoderamento", type: "A" },
      { text: "Amor, saudade, reflexões da vida", type: "B" },
      { text: "Amor impossível, sofrência, coração partido", type: "C" },
      { text: "Liberdade, juventude, curtir a vida", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você descreveria seu estilo?",
    options: [
      { text: "Ousado(a) e cheio(a) de atitude", type: "A" },
      { text: "Sofisticado(a) e introspectivo(a)", type: "B" },
      { text: "Raiz, autêntico(a), pé no chão", type: "C" },
      { text: "Descolado(a) e alternativo(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual época da música brasileira mais te encanta?",
    options: [
      { text: "Anos 2000 pra cá, o que está tocando agora", type: "A" },
      { text: "Anos 60/70, época de ouro da MPB", type: "B" },
      { text: "Anos 90/2000, explosão do sertanejo", type: "C" },
      { text: "Anos 80/90, rock brasileiro", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que uma boa música precisa ter?",
    options: [
      { text: "Batida forte e envolvente", type: "A" },
      { text: "Letra poética e melodia marcante", type: "B" },
      { text: "Emoção que faz chorar ou cantar junto", type: "C" },
      { text: "Guitarra, energia e atitude", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Com qual artista você mais se identifica?",
    options: [
      { text: "Anitta, Ludmilla, MC's atuais", type: "A" },
      { text: "Caetano, Gil, Marisa Monte", type: "B" },
      { text: "Marília Mendonça, Zé Neto e Cristiano", type: "C" },
      { text: "Legião Urbana, Titãs, Pitty", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Em uma festa, você...",
    options: [
      { text: "Vou pra pista e danço até o fim", type: "A" },
      { text: "Fico conversando e apreciando", type: "B" },
      { text: "Canto todas as músicas bem alto", type: "C" },
      { text: "Curto com os amigos, bebo e me divirto", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual sentimento a música mais desperta em você?",
    options: [
      { text: "Energia e vontade de me movimentar", type: "A" },
      { text: "Nostalgia e reflexão profunda", type: "B" },
      { text: "Emoção forte, às vezes choro", type: "C" },
      { text: "Liberdade e vontade de viver", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual instrumento te atrai mais?",
    options: [
      { text: "Bateria eletrônica, beats", type: "A" },
      { text: "Violão, piano, voz", type: "B" },
      { text: "Viola, sanfona, violão", type: "C" },
      { text: "Guitarra elétrica, bateria, baixo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você lida com términos de relacionamento?",
    options: [
      { text: "Saio pra balada e supero dançando", type: "A" },
      { text: "Fico em casa ouvindo músicas tristes", type: "B" },
      { text: "Choro litros ouvindo sofrência", type: "C" },
      { text: "Ouço rock pesado e coloco pra fora", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais combina com você?",
    options: [
      { text: "Tá tranquilo, tá favorável!", type: "A" },
      { text: "Fundamental é mesmo o amor", type: "B" },
      { text: "Eu só quero um xodó", type: "C" },
      { text: "Somos quem podemos ser", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Funk/Pop Brasileiro",
    emoji: "🎤",
    description: "Você é o Funk e Pop Brasileiro! Cheio(a) de energia, atitude e sempre antenado(a) no que está em alta. Assim como esse gênero que domina as paradas, você é moderno(a), ousado(a) e adora uma boa festa!",
    traits: ["Energético(a)", "Moderno(a)", "Ousado(a)", "Popular"],
    strengths: ["Facilidade em se divertir", "Estar sempre atualizado(a)", "Energia contagiante", "Autoestima alta"],
    weaknesses: ["Pode ser superficial", "Dificuldade em momentos sérios", "Busca de validação"],
    tips: ["Explore músicas mais introspectivas", "Nem tudo precisa ser festa", "Cultive momentos de silêncio"],
  },
  B: {
    type: "B",
    title: "MPB/Bossa Nova",
    emoji: "🎸",
    description: "Você é a MPB! Sofisticado(a), profundo(a) e com uma sensibilidade artística única. Assim como os grandes mestres da música brasileira, você aprecia a arte, a poesia e as coisas que fazem sentido!",
    traits: ["Sofisticado(a)", "Sensível", "Culto(a)", "Introspectivo(a)"],
    strengths: ["Apreciação artística", "Profundidade emocional", "Bom gosto", "Capacidade de reflexão"],
    weaknesses: ["Pode ser melancólico(a)", "Às vezes distante", "Dificuldade em se soltar"],
    tips: ["Permita-se ser mais leve", "Nem tudo precisa ser profundo", "Dance um pouco mais"],
  },
  C: {
    type: "C",
    title: "Sertanejo",
    emoji: "🤠",
    description: "Você é o Sertanejo! Emotivo(a), autêntico(a) e com o coração na mão. Assim como esse gênero que conquistou o Brasil, você vive intensamente os sentimentos e não tem medo de se emocionar!",
    traits: ["Emotivo(a)", "Autêntico(a)", "Passional", "Tradicional"],
    strengths: ["Capacidade de sentir profundamente", "Conexão com as pessoas", "Genuinidade", "Expressividade"],
    weaknesses: ["Muito emotivo(a)", "Tendência ao drama", "Dificuldade em superar"],
    tips: ["Nem tudo é fim do mundo", "Use a razão também", "Celebre as alegrias, não só as dores"],
  },
  D: {
    type: "D",
    title: "Rock Nacional",
    emoji: "🎸",
    description: "Você é o Rock Nacional! Intenso(a), questionador(a) e com espírito de liberdade. Assim como as grandes bandas brasileiras, você tem atitude, não segue modinha e vive de forma autêntica!",
    traits: ["Intenso(a)", "Autêntico(a)", "Questionador(a)", "Livre"],
    strengths: ["Pensamento crítico", "Autenticidade", "Espírito de liberdade", "Lealdade aos valores"],
    weaknesses: ["Pode ser rebelde demais", "Dificuldade com autoridade", "Às vezes negativista"],
    tips: ["Nem tudo precisa ser contestado", "Aceite ajuda dos outros", "A leveza também é força"],
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
