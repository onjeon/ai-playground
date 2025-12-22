// Qual Tipo de Pessoa Você É no Ano Novo?
// Descubra seu papel na virada!

export const questions = [
  {
    id: 1,
    question: "Qual seu papel na organização da festa?",
    options: [
      { text: "Eu organizo tudo, sou o(a) anfitrião(ã)", type: "A" },
      { text: "Ajudo no que precisar", type: "B" },
      { text: "Só apareço na hora", type: "C" },
      { text: "Vou se me chamarem", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você está às 23h59?",
    options: [
      { text: "No centro, pronto pra gritar", type: "A" },
      { text: "Com minha turma, animado", type: "B" },
      { text: "Procurando onde está todo mundo", type: "C" },
      { text: "Sentado num canto, esperando passar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz depois da meia-noite?",
    options: [
      { text: "Continuo festejando até o amanhecer", type: "A" },
      { text: "Curto mais um pouco e vou embora", type: "B" },
      { text: "Já começo a pensar em ir", type: "C" },
      { text: "Finalmente posso ir dormir", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quantas pessoas você abraça na virada?",
    options: [
      { text: "Todo mundo que eu ver", type: "A" },
      { text: "Família e amigos próximos", type: "B" },
      { text: "Algumas pessoas importantes", type: "C" },
      { text: "Ninguém ou quase ninguém", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você chora na virada?",
    options: [
      { text: "Sempre! É muita emoção", type: "A" },
      { text: "Às vezes, depende do ano", type: "B" },
      { text: "Raramente, não sou de chorar", type: "C" },
      { text: "Nunca, não é pra tanto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você brinda?",
    options: [
      { text: "Champanhe, discurso e tudo", type: "A" },
      { text: "Um brinde simples com quem tá perto", type: "B" },
      { text: "Um golinho e pronto", type: "C" },
      { text: "Nem bebo, só observo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você faz discurso de agradecimento?",
    options: [
      { text: "Sim, preparo antes inclusive", type: "A" },
      { text: "Improviso algo se pedirem", type: "B" },
      { text: "Só escuto os outros", type: "C" },
      { text: "Fujo de discursos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Sua roupa de Réveillon é...",
    options: [
      { text: "Produção completa, brilho e glamour", type: "A" },
      { text: "Bonita, adequada pra ocasião", type: "B" },
      { text: "Confortável mas apresentável", type: "C" },
      { text: "O que tiver limpo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tira muitas fotos na virada?",
    options: [
      { text: "Milhares! Registro tudo", type: "A" },
      { text: "Algumas fotos importantes", type: "B" },
      { text: "Uma ou duas no máximo", type: "C" },
      { text: "Nenhuma, prefiro viver o momento", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que te irrita no Ano Novo?",
    options: [
      { text: "Quando a festa não é boa", type: "A" },
      { text: "Gente negativa", type: "B" },
      { text: "Muita gente e barulho", type: "C" },
      { text: "Ter que sair de casa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você assiste os fogos de onde?",
    options: [
      { text: "Na praia/praça, bem no meio", type: "A" },
      { text: "De um lugar bom com os amigos", type: "B" },
      { text: "Da janela de casa", type: "C" },
      { text: "Não assisto, tanto faz", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase você mais diz na virada?",
    options: [
      { text: "'Feliz Ano Novo!!! Vamos festejar!'", type: "A" },
      { text: "'Que venha um ano abençoado!'", type: "B" },
      { text: "'Feliz ano novo' (baixinho)", type: "C" },
      { text: "'Enfim acabou o ano'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Alma da Festa",
    emoji: "🎊",
    description: "Você é a Alma da Festa! Réveillon sem você não é a mesma coisa. Você anima, organiza, chora, abraça todo mundo e fica até o sol nascer. Energia pura!",
    traits: ["Animado(a)", "Organizador(a)", "Emocional", "Centro das atenções"],
    strengths: ["Energia contagiante", "Organização", "Celebra de verdade"],
    weaknesses: ["Pode exagerar", "Ressaca pesada", "Cobra muito dos outros"],
    tips: ["Cuide de você também", "Nem todo ano será perfeito", "Sua energia é incrível"],
  },
  B: {
    type: "B",
    title: "Celebrador Equilibrado",
    emoji: "🥂",
    description: "Você é o Celebrador Equilibrado! Curte o momento, celebra com quem ama, mas não exagera. Você encontra o ponto perfeito entre festa e tranquilidade!",
    traits: ["Equilibrado(a)", "Sociável", "Presente", "Moderado(a)"],
    strengths: ["Equilíbrio", "Aproveita sem exagero", "Boa companhia"],
    weaknesses: ["Pode parecer sem graça pros festeiros", "Vai embora cedo"],
    tips: ["Seu equilíbrio é raro", "Continue aproveitando assim", "Ótima forma de celebrar"],
  },
  C: {
    type: "C",
    title: "Participante Relutante",
    emoji: "🙄",
    description: "Você é o Participante Relutante! Vai porque tem que ir, participa mas sem muito entusiasmo. A virada é mais uma obrigação social do que uma celebração!",
    traits: ["Introvertido(a)", "Desanimado(a)", "Reservado(a)", "Cansado(a)"],
    strengths: ["Não cria expectativas", "Econômico", "Não tem ressaca"],
    weaknesses: ["Pode estragar o clima", "Não aproveita", "Energia baixa"],
    tips: ["Tente se soltar mais", "Ou fique em casa mesmo", "Escolha o que te faz feliz"],
  },
  D: {
    type: "D",
    title: "Anti-Réveillon",
    emoji: "😑",
    description: "Você é Anti-Réveillon! Pra você, 31 de dezembro é só mais um dia. Não entende a euforia, prefere evitar a confusão e dormir cedo. E tá tudo bem!",
    traits: ["Realista", "Caseiro(a)", "Avesso a festas", "Pragmático(a)"],
    strengths: ["Paz", "Sem estresse", "Autêntico", "Descansado dia 1º"],
    weaknesses: ["Pode parecer amargo", "Perde momentos com amigos", "Isolamento"],
    tips: ["Tá tudo bem não gostar", "Faça do seu jeito", "Sua paz importa"],
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
