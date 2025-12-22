// Qual Tipo de Pet Lover Você É?
// Descubra seu estilo de amar os bichinhos!

export const questions = [
  {
    id: 1,
    question: "Seu pet é...",
    options: [
      { text: "Membro da família, tem até mesada", type: "A" },
      { text: "Companheiro amado, trato muito bem", type: "B" },
      { text: "Animal de estimação, gosto mas com limites", type: "C" },
      { text: "Não tenho pet, mas gosto de animais", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre gastos com pet, você...",
    options: [
      { text: "Gasto mais com ele do que comigo", type: "A" },
      { text: "Invisto em qualidade: ração boa, veterinário", type: "B" },
      { text: "O necessário, sem exageros", type: "C" },
      { text: "Acho que pessoal gasta demais com pet", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Pet dormindo na cama. Você...",
    options: [
      { text: "Claro! Ele escolhe o lado que quer", type: "A" },
      { text: "Às vezes, quando tá frio ou ele insiste", type: "B" },
      { text: "Nunca, cada um no seu lugar", type: "C" },
      { text: "Nem pensar!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quantas fotos do pet você tem no celular?",
    options: [
      { text: "Centenas! Mais que fotos de gente", type: "A" },
      { text: "Bastante, ele é fotogênico", type: "B" },
      { text: "Algumas, o básico", type: "C" },
      { text: "Poucas ou nenhuma", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você conversa com seu pet?",
    options: [
      { text: "Toda hora! Ele entende tudo", type: "A" },
      { text: "Sim, é natural falar com eles", type: "B" },
      { text: "Pouco, só comandos básicos", type: "C" },
      { text: "Acho estranho conversar com animal", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Sobre roupinha e acessórios de pet...",
    options: [
      { text: "Guarda-roupa completo, fantasia de Halloween", type: "A" },
      { text: "Tenho algumas coisas, pra ocasiões especiais", type: "B" },
      { text: "Só coleira básica", type: "C" },
      { text: "Acho desnecessário, é só um animal", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Viagem sem o pet. Você...",
    options: [
      { text: "Sofro muito, quase não viajo por isso", type: "A" },
      { text: "Deixo com alguém de confiança, mas sinto falta", type: "B" },
      { text: "Normal, deixo em petshop ou com alguém", type: "C" },
      { text: "Alívio, uma coisa a menos pra cuidar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Seu pet faz aniversário. Você...",
    options: [
      { text: "Festa completa, bolo, convidados", type: "A" },
      { text: "Presente especial, mimo extra", type: "B" },
      { text: "Nem lembro a data exata", type: "C" },
      { text: "Cachorro não liga pra aniversário", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Quando vê um cachorro na rua, você...",
    options: [
      { text: "Paro pra fazer carinho, converso com o dono", type: "A" },
      { text: "Sorrio, acho fofo, às vezes faço carinho", type: "B" },
      { text: "Olho de longe, sem muita interação", type: "C" },
      { text: "Nem noto muito", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Sua relação com pets em geral é...",
    options: [
      { text: "Amo todos os animais, militante da causa", type: "A" },
      { text: "Gosto muito, tenho carinho especial", type: "B" },
      { text: "Normal, gosto mas não sou fanático", type: "C" },
      { text: "Indiferente ou prefiro manter distância", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Pet Parent Raiz",
    emoji: "🐕",
    percentage: 95,
    description: "Você é O Pet Parent Raiz! Seu pet é seu filho de quatro patas. Festa de aniversário, roupinha, veterinário particular - amor sem limites!",
    characteristics: ["Apaixonado(a)", "Dedicado(a)", "Carinhoso(a)", "Protetor(a)"],
    advice: "Seu amor pelos animais é lindo! Continue dando essa vida maravilhosa pro seu bichinho. Ele é muito sortudo de ter você!",
  },
  B: {
    type: "B",
    title: "O Pet Lover Equilibrado",
    emoji: "🐱",
    percentage: 80,
    description: "Você é O Pet Lover Equilibrado! Ama seu pet, cuida bem, mas sem exageros. Carinho, cuidado e responsabilidade na medida certa!",
    characteristics: ["Responsável", "Carinhoso(a)", "Sensato(a)", "Cuidadoso(a)"],
    advice: "Ótimo equilíbrio! Você dá amor e cuidado sem perder a mão. Seu pet é feliz e bem tratado!",
  },
  C: {
    type: "C",
    title: "O Pet Owner Prático",
    emoji: "🐾",
    percentage: 65,
    description: "Você é O Pet Owner Prático! Gosta do seu pet, cuida do essencial, mas mantém limites claros. Animal é animal, pessoa é pessoa!",
    characteristics: ["Prático(a)", "Objetivo(a)", "Racional", "Equilibrado(a)"],
    advice: "Seu jeito é válido! Mas às vezes um carinho extra, um mimo diferente, faz bem pro bichinho e pra você também!",
  },
  D: {
    type: "D",
    title: "O Não-Pet-Person",
    emoji: "🤷",
    percentage: 45,
    description: "Você é O Não-Pet-Person! Não é muito ligado em animais de estimação. Respeita quem tem, mas não é sua praia!",
    characteristics: ["Independente", "Prático(a)", "Honesto(a)", "Objetivo(a)"],
    advice: "Tudo bem não ser fã de pets! Cada um tem seu jeito. Mas quem sabe um dia você não se apaixona por um bichinho?",
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
