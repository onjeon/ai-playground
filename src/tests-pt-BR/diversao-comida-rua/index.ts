// Qual Comida de Rua Você É?
// Descubra qual street food combina com você!

export const questions = [
  {
    id: 1,
    question: "Como você é socialmente?",
    options: [
      { text: "Popular, todo mundo me conhece", type: "A" },
      { text: "Acessível, fácil de lidar", type: "B" },
      { text: "Simples mas marcante", type: "C" },
      { text: "Diferente, único(a)", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual seu estilo de vida?",
    options: [
      { text: "Agitado, sempre em movimento", type: "A" },
      { text: "Prático, direto ao ponto", type: "B" },
      { text: "Tradicional, raízes fortes", type: "C" },
      { text: "Diferente, fora do comum", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que as pessoas mais gostam em você?",
    options: [
      { text: "Sou completo(a), tenho de tudo", type: "A" },
      { text: "Sou prático(a) e eficiente", type: "B" },
      { text: "Sou autêntico(a) e verdadeiro(a)", type: "C" },
      { text: "Sou surpreendente e diferente", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você resolve problemas?",
    options: [
      { text: "Com várias soluções, sou versátil", type: "A" },
      { text: "Rápido e eficiente", type: "B" },
      { text: "Do jeito tradicional, que funciona", type: "C" },
      { text: "De forma criativa e diferente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual seu momento favorito do dia?",
    options: [
      { text: "Noite, quando a vida acontece", type: "A" },
      { text: "Almoço, intervalo produtivo", type: "B" },
      { text: "Fim de tarde, relaxando", type: "C" },
      { text: "Qualquer hora, sou imprevisível", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você se adapta fácil a novos ambientes?",
    options: [
      { text: "Sim, me dou bem em qualquer lugar", type: "A" },
      { text: "Sim, sou prático(a)", type: "B" },
      { text: "Prefiro o que conheço", type: "C" },
      { text: "Sim, adoro novidades", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você é numa festa?",
    options: [
      { text: "O centro, todo mundo quer", type: "A" },
      { text: "Presente, mas sem destaque", type: "B" },
      { text: "Clássico, sempre funciona", type: "C" },
      { text: "A novidade, o diferente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você prefere quantidade ou qualidade?",
    options: [
      { text: "Os dois! Completo é melhor", type: "A" },
      { text: "Eficiência, o suficiente", type: "B" },
      { text: "Qualidade, menos é mais", type: "C" },
      { text: "Experiência, o diferente", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você é no trabalho?",
    options: [
      { text: "Multitarefa, faço de tudo", type: "A" },
      { text: "Direto, resolvo rápido", type: "B" },
      { text: "Tradicional, método comprovado", type: "C" },
      { text: "Inovador, trago novidades", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que te irrita?",
    options: [
      { text: "Falta de opções e variedade", type: "A" },
      { text: "Lentidão e enrolação", type: "B" },
      { text: "Falta de autenticidade", type: "C" },
      { text: "Mesmice e rotina", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você é mais razão ou emoção?",
    options: [
      { text: "Os dois equilibrados", type: "A" },
      { text: "Razão, prático(a)", type: "B" },
      { text: "Emoção, sou intenso(a)", type: "C" },
      { text: "Nenhum, sou imprevisível", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'Tenho de tudo um pouco'", type: "A" },
      { text: "'Simples e eficiente'", type: "B" },
      { text: "'Clássico nunca sai de moda'", type: "C" },
      { text: "'Diferente é meu sobrenome'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cachorro-Quente Completo",
    emoji: "🌭",
    description: "Você é o Cachorro-Quente Completo! Popular, versátil, cheio de camadas. Todo mundo gosta, funciona em qualquer situação. Você é o clássico que nunca falha!",
    traits: ["Popular", "Versátil", "Completo(a)", "Adaptável"],
    strengths: ["Agrada todo mundo", "Versatilidade", "Sempre funciona"],
    weaknesses: ["Pode ser demais", "Confuso às vezes", "Tudo pra todo mundo"],
    tips: ["Sua versatilidade é rara", "Às vezes menos é mais", "Continue sendo completo"],
  },
  B: {
    type: "B",
    title: "Pastel de Feira",
    emoji: "🥟",
    description: "Você é o Pastel de Feira! Prático, eficiente, direto ao ponto. Você resolve sem frescura. Simples, rápido e satisfaz. O brasileiro raiz!",
    traits: ["Prático(a)", "Eficiente", "Direto(a)", "Acessível"],
    strengths: ["Praticidade", "Rapidez", "Sem enrolação", "Eficiência"],
    weaknesses: ["Pode parecer simples demais", "Sem sofisticação"],
    tips: ["Sua praticidade é virtude", "Simples funciona", "Você resolve"],
  },
  C: {
    type: "C",
    title: "Acarajé",
    emoji: "🫓",
    description: "Você é o Acarajé! Tradicional, autêntico, cheio de personalidade. Você tem raízes fortes e sabor marcante. Quem conhece, não esquece!",
    traits: ["Autêntico(a)", "Tradicional", "Marcante", "Cultural"],
    strengths: ["Autenticidade", "Personalidade forte", "Raízes", "Inesquecível"],
    weaknesses: ["Nem todos conhecem", "Forte demais pra alguns"],
    tips: ["Sua autenticidade é rara", "Suas raízes são força", "Continue marcante"],
  },
  D: {
    type: "D",
    title: "Espetinho Gourmet",
    emoji: "🍢",
    description: "Você é o Espetinho Gourmet! Diferente, surpreendente, fora do comum. Você pega o tradicional e transforma. Inovação é sua marca!",
    traits: ["Inovador(a)", "Diferente", "Criativo(a)", "Surpreendente"],
    strengths: ["Originalidade", "Surpresa", "Inovação", "Diferencial"],
    weaknesses: ["Nem todos entendem", "Pode parecer estranho(a)"],
    tips: ["Sua criatividade é dom", "Continue inovando", "Seja você mesmo(a)"],
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
