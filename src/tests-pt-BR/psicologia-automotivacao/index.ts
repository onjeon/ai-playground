// Teste de Automotivação
// Descubra seu nível de automotivação!

export const questions = [
  {
    id: 1,
    question: "Você consegue se motivar para fazer tarefas que não gosta?",
    options: [
      { text: "Sim, encontro motivação interna", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade, preciso de pressão externa", type: "C" },
      { text: "Só faço se alguém me obrigar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando você define uma meta pessoal, você:",
    options: [
      { text: "Persigo com determinação até alcançar", type: "A" },
      { text: "Me esforço bastante para alcançar", type: "B" },
      { text: "Começo motivado mas perco o gás", type: "C" },
      { text: "Raramente persigo metas por muito tempo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "De onde vem sua motivação principal?",
    options: [
      { text: "De dentro de mim, dos meus valores", type: "A" },
      { text: "Uma mistura de interno e externo", type: "B" },
      { text: "Principalmente de fatores externos", type: "C" },
      { text: "Não sei, raramente me sinto motivado", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Após uma falha ou rejeição, você:",
    options: [
      { text: "Me levanto rapidamente e tento de novo", type: "A" },
      { text: "Preciso de um tempo mas volto motivado", type: "B" },
      { text: "Fico desmotivado por um bom tempo", type: "C" },
      { text: "Desisto e não tento mais", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você tem projetos pessoais que persegue por conta própria?",
    options: [
      { text: "Sim, sempre tenho algo que me anima", type: "A" },
      { text: "Alguns projetos que desenvolvo", type: "B" },
      { text: "Às vezes começo, mas não continuo", type: "C" },
      { text: "Não, só faço o que é obrigatório", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se sente segunda-feira de manhã?",
    options: [
      { text: "Animado para a semana", type: "A" },
      { text: "Normal, pronto para trabalhar", type: "B" },
      { text: "Desmotivado, queria mais final de semana", type: "C" },
      { text: "Terrível, odeio minha rotina", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você busca aprender coisas novas por iniciativa própria?",
    options: [
      { text: "Sempre, adoro aprender", type: "A" },
      { text: "Frequentemente, quando me interessa", type: "B" },
      { text: "Às vezes, quando preciso", type: "C" },
      { text: "Raramente, só se for obrigatório", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue manter a motivação em tarefas longas e repetitivas?",
    options: [
      { text: "Sim, mantenho o foco no objetivo maior", type: "A" },
      { text: "Geralmente consigo, com esforço", type: "B" },
      { text: "Tenho muita dificuldade", type: "C" },
      { text: "Não consigo, desisto no meio", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem clareza sobre o que quer na vida?",
    options: [
      { text: "Sim, tenho objetivos claros que me motivam", type: "A" },
      { text: "Tenho uma boa ideia da direção", type: "B" },
      { text: "Estou meio perdido sobre o que quero", type: "C" },
      { text: "Não sei o que quero da vida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você se considera uma pessoa otimista?",
    options: [
      { text: "Sim, vejo possibilidades em tudo", type: "A" },
      { text: "Geralmente otimista", type: "B" },
      { text: "Mais para pessimista", type: "C" },
      { text: "Muito pessimista sobre o futuro", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você celebra suas pequenas vitórias?",
    options: [
      { text: "Sim, uso para me manter motivado", type: "A" },
      { text: "Às vezes reconheço minhas conquistas", type: "B" },
      { text: "Raramente, sempre foco no que falta", type: "C" },
      { text: "Nunca, nada parece suficiente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Quando acorda de manhã, como você se sente sobre o dia?",
    options: [
      { text: "Animado com as possibilidades", type: "A" },
      { text: "Normal, pronto para enfrentar", type: "B" },
      { text: "Cansado e sem vontade", type: "C" },
      { text: "Queria não ter que levantar", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Automotivado",
    emoji: "🚀",
    description: "Você é altamente automotivado! Encontra motivação interna para perseguir seus objetivos, se recupera de falhas e mantém entusiasmo. Isso é uma força poderosa.",
    traits: ["Determinado", "Otimista", "Proativo", "Energizado"],
    strengths: ["Alcança objetivos", "Resiliência", "Não depende dos outros para motivação", "Progresso constante"],
    weaknesses: ["Pode se frustrar com pessoas menos motivadas", "Risco de não descansar"],
    tips: ["Continue cultivando sua motivação", "Inspire outros com seu exemplo", "Lembre-se de descansar também"],
  },
  B: {
    type: "B",
    title: "Bem Motivado",
    emoji: "💪",
    description: "Você tem boa capacidade de automotivação. Consegue se motivar para a maioria das coisas, embora às vezes precise de estímulos externos.",
    traits: ["Equilibrado", "Funcional", "Adaptável", "Consistente"],
    strengths: ["Funciona bem na maioria das situações", "Capacidade de melhora", "Boa mistura de motivadores"],
    weaknesses: ["Pode depender de fatores externos às vezes", "Oscilações de motivação"],
    tips: ["Desenvolva mais motivação intrínseca", "Conecte tarefas com seus valores", "Crie sistemas que te apoiem"],
  },
  C: {
    type: "C",
    title: "Motivação em Desenvolvimento",
    emoji: "🌱",
    description: "Sua automotivação precisa ser desenvolvida. Você depende muito de fatores externos e tem dificuldade em manter o ânimo. Isso pode ser trabalhado.",
    traits: ["Dependente", "Oscilante", "Desmotivado", "Potencial"],
    strengths: ["Responde a incentivos externos", "Potencial de crescimento"],
    weaknesses: ["Objetivos não alcançados", "Procrastinação", "Dependência de pressão externa"],
    tips: ["Descubra seus valores e paixões", "Defina metas que te animam", "Busque um propósito maior"],
  },
  D: {
    type: "D",
    title: "Baixa Automotivação",
    emoji: "😔",
    description: "Você está com baixa automotivação, o que pode ser sinal de algo mais profundo. Falta de propósito, possível depressão ou burnout podem estar envolvidos.",
    traits: ["Desmotivado", "Apático", "Desanimado", "Esgotado"],
    strengths: ["Reconhecimento do problema"],
    weaknesses: ["Vida parece sem sentido", "Dificuldade em fazer qualquer coisa", "Possível sofrimento emocional"],
    tips: ["Considere buscar ajuda profissional", "Isso pode ser sinal de depressão", "Você não precisa se sentir assim para sempre"],
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
