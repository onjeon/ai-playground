// Qual Tipo de Filho(a) no Dia das Mães Você É?
// Descubra seu perfil no Dia das Mães!

export const questions = [
  {
    id: 1,
    question: "Você lembra do Dia das Mães sem precisar de lembrança?",
    options: [
      { text: "Sempre! Já planejo semanas antes", type: "A" },
      { text: "Sim, lembro perto da data", type: "B" },
      { text: "Às vezes esqueço e lembro em cima da hora", type: "C" },
      { text: "Preciso que alguém me avise", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Que tipo de presente você dá?",
    options: [
      { text: "Algo especial, pensado com carinho", type: "A" },
      { text: "Um bom presente, tradicional", type: "B" },
      { text: "O que achar na hora", type: "C" },
      { text: "Dinheiro ou nada", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você passa o dia com sua mãe?",
    options: [
      { text: "O dia inteiro, faço de tudo", type: "A" },
      { text: "Almoço ou jantar especial", type: "B" },
      { text: "Dou uma passada rápida", type: "C" },
      { text: "Mando mensagem/ligo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você faz homenagem nas redes sociais?",
    options: [
      { text: "Sim! Post lindo e emocionante", type: "A" },
      { text: "Um post simples com foto", type: "B" },
      { text: "Só story ou nada", type: "C" },
      { text: "Não, prefiro pessoalmente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quanto você gasta no presente?",
    options: [
      { text: "Bastante, ela merece o melhor", type: "A" },
      { text: "Um valor razoável, bom presente", type: "B" },
      { text: "O possível, dentro do orçamento", type: "C" },
      { text: "Pouco ou nada, não ligo pra data", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você chora/emociona no Dia das Mães?",
    options: [
      { text: "Sempre! Data muito especial", type: "A" },
      { text: "Às vezes, fico emocionado", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, é só uma data", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você organiza algo especial pra ela?",
    options: [
      { text: "Sim! Festa, passeio, surpresa", type: "A" },
      { text: "Um almoço ou jantar legal", type: "B" },
      { text: "O básico, presente e parabéns", type: "C" },
      { text: "Não organizo nada especial", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você liga pro sua mãe no dia?",
    options: [
      { text: "Logo de manhã, primeira coisa", type: "A" },
      { text: "Sim, durante o dia", type: "B" },
      { text: "Às vezes esqueço", type: "C" },
      { text: "Só se ela ligar primeiro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Se mora longe, você viaja pra ver ela?",
    options: [
      { text: "Sempre que possível, é prioridade", type: "A" },
      { text: "Tento, quando dá", type: "B" },
      { text: "Raramente, é difícil", type: "C" },
      { text: "Não, mando presente/mensagem", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você compra flores pra sua mãe?",
    options: [
      { text: "Sempre! Ela ama", type: "A" },
      { text: "Às vezes, é um clássico", type: "B" },
      { text: "Prefiro outras coisas", type: "C" },
      { text: "Não, acho desnecessário", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você escreve cartão/carta pra ela?",
    options: [
      { text: "Sim, sempre! Com palavras do coração", type: "A" },
      { text: "Às vezes, quando lembro", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, não sou de escrever", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no Dia das Mães?",
    options: [
      { text: "'Minha mãe é minha rainha!'", type: "A" },
      { text: "'Mãe merece sempre o melhor'", type: "B" },
      { text: "'Faço o que dá na data'", type: "C" },
      { text: "'É só mais um dia'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Filho(a) Exemplar",
    emoji: "👑",
    description: "Você é Filho(a) Exemplar! O Dia das Mães é sagrado. Presente especial, dia inteiro com ela, emoção, carinho. Sua mãe tem orgulho de você!",
    traits: ["Dedicado(a)", "Carinhoso(a)", "Presente", "Emocionado(a)"],
    strengths: ["Mãe feliz", "Relação forte", "Memórias especiais"],
    weaknesses: ["Pode exagerar", "Pressão pra ser perfeito"],
    tips: ["Sua mãe te ama", "Continue assim", "Você faz ela feliz"],
  },
  B: {
    type: "B",
    title: "Filho(a) Tradicional",
    emoji: "🌹",
    description: "Você é Filho(a) Tradicional! Não esquece a data, dá presente, passa o dia ou liga. O clássico que funciona. Sua mãe sabe que pode contar com você!",
    traits: ["Tradicional", "Presente", "Consistente", "Respeitoso(a)"],
    strengths: ["Nunca falha", "Relação estável", "Respeito"],
    weaknesses: ["Pode ser repetitivo", "Sem surpresas"],
    tips: ["Funciona bem", "Sua mãe aprecia", "Continue lembrando"],
  },
  C: {
    type: "C",
    title: "Filho(a) de Última Hora",
    emoji: "⏰",
    description: "Você é Filho(a) de Última Hora! Às vezes esquece, às vezes lembra em cima da hora. Corre pra não deixar passar em branco. Sua mãe sabe que você ama, mesmo assim!",
    traits: ["Desorganizado(a)", "Bem intencionado(a)", "Corrido(a)", "Distraído(a)"],
    strengths: ["Sempre dá um jeito", "Amor verdadeiro apesar das falhas"],
    weaknesses: ["Pode magoar", "Presentes genéricos", "Parece desinteresse"],
    tips: ["Coloque alarme!", "Sua mãe merece mais atenção", "Tente melhorar"],
  },
  D: {
    type: "D",
    title: "Filho(a) Indiferente",
    emoji: "🤷",
    description: "Você é Filho(a) Indiferente! Não liga muito pra data comemorativa. Acha comercial ou desnecessário. Prefere demonstrar amor de outras formas!",
    traits: ["Indiferente", "Prático(a)", "Anti-comercial", "Distante"],
    strengths: ["Autêntico(a)", "Não segue padrões", "Honesto(a)"],
    weaknesses: ["Pode magoar profundamente", "Parece não se importar"],
    tips: ["Sua mãe pode sentir falta", "Uma mensagem não custa nada", "Pense nos sentimentos dela"],
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
