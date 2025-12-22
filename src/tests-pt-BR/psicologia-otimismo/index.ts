// Teste de Otimismo
// Descubra seu nível de otimismo!

export const questions = [
  {
    id: 1,
    question: "Como você geralmente vê o futuro?",
    options: [
      { text: "Com esperança, coisas boas virão", type: "A" },
      { text: "De forma equilibrada, haverá altos e baixos", type: "B" },
      { text: "Com certa preocupação sobre o que virá", type: "C" },
      { text: "Com pessimismo, espero o pior", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando algo dá errado, você pensa:",
    options: [
      { text: "Isso vai passar, coisas boas virão", type: "A" },
      { text: "É temporário, vou superar", type: "B" },
      { text: "Por que sempre acontece comigo?", type: "C" },
      { text: "Sabia que ia dar errado, sempre dá", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você acredita que pode influenciar seu próprio destino?",
    options: [
      { text: "Sim, sou o principal responsável pela minha vida", type: "A" },
      { text: "Em grande parte sim", type: "B" },
      { text: "Um pouco, mas muito está fora do meu controle", type: "C" },
      { text: "Não, a vida acontece comigo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Diante de um novo projeto ou desafio, você:",
    options: [
      { text: "Fico animado com as possibilidades", type: "A" },
      { text: "Encaro com expectativa positiva", type: "B" },
      { text: "Fico apreensivo sobre o que pode dar errado", type: "C" },
      { text: "Espero que vá fracassar como sempre", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você vê o copo meio cheio ou meio vazio?",
    options: [
      { text: "Definitivamente meio cheio!", type: "A" },
      { text: "Geralmente meio cheio", type: "B" },
      { text: "Frequentemente meio vazio", type: "C" },
      { text: "Sempre meio vazio", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você interpreta contratempos?",
    options: [
      { text: "Como oportunidades de aprendizado", type: "A" },
      { text: "Como parte normal da vida", type: "B" },
      { text: "Como sinais de que algo está errado", type: "C" },
      { text: "Como prova de que nada funciona", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você acorda de manhã com que sentimento?",
    options: [
      { text: "Animado para o dia", type: "A" },
      { text: "Neutro, pronto para enfrentar", type: "B" },
      { text: "Cansado ou sem vontade", type: "C" },
      { text: "Temendo o que virá", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando espera resultados (prova, entrevista), você:",
    options: [
      { text: "Espero o melhor, confio em mim", type: "A" },
      { text: "Espero que tenha ido bem", type: "B" },
      { text: "Me preparo para o pior", type: "C" },
      { text: "Tenho certeza que foi mal", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você acredita que pessoas são essencialmente boas?",
    options: [
      { text: "Sim, a maioria tem boas intenções", type: "A" },
      { text: "Em geral sim, com exceções", type: "B" },
      { text: "Desconfio da maioria", type: "C" },
      { text: "Não, pessoas são egoístas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue encontrar algo positivo em situações difíceis?",
    options: [
      { text: "Quase sempre encontro o lado bom", type: "A" },
      { text: "Frequentemente consigo", type: "B" },
      { text: "Raramente, foco mais no problema", type: "C" },
      { text: "Não, situações ruins são só ruins", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você acredita que o mundo está melhorando?",
    options: [
      { text: "Sim, apesar dos problemas", type: "A" },
      { text: "Algumas coisas melhoram, outras não", type: "B" },
      { text: "Acho que está piorando", type: "C" },
      { text: "Definitivamente está cada vez pior", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua perspectiva de vida?",
    options: [
      { text: "Muito otimista", type: "A" },
      { text: "Moderadamente positiva", type: "B" },
      { text: "Mais para pessimista", type: "C" },
      { text: "Muito pessimista", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Otimista",
    emoji: "☀️",
    description: "Você é otimista! Vê o lado bom das situações, espera o melhor e acredita em possibilidades. Esse mindset contribui para sua resiliência e bem-estar.",
    traits: ["Esperançoso", "Positivo", "Resiliente", "Confiante"],
    strengths: ["Melhor saúde mental", "Maior resiliência", "Atrai pessoas e oportunidades", "Maior satisfação na vida"],
    weaknesses: ["Pode ignorar riscos reais", "Pode parecer ingênuo"],
    tips: ["Continue cultivando o otimismo", "Equilibre com realismo quando necessário", "Use sua positividade para ajudar outros"],
  },
  B: {
    type: "B",
    title: "Realista Positivo",
    emoji: "🌤️",
    description: "Você é um realista com tendência positiva. Vê as coisas como são, mas mantém esperança. Este é um equilíbrio saudável e funcional.",
    traits: ["Equilibrado", "Realista", "Esperançoso", "Ponderado"],
    strengths: ["Visão equilibrada", "Não ignora problemas", "Mantém esperança"],
    weaknesses: ["Pode ser menos resiliente que otimistas em crises"],
    tips: ["Cultive mais pensamentos positivos", "Seu equilíbrio é saudável", "Não deixe o realismo virar pessimismo"],
  },
  C: {
    type: "C",
    title: "Tendência Pessimista",
    emoji: "🌧️",
    description: "Você tem tendência ao pessimismo, focando mais nos problemas e riscos. Isso pode afetar sua felicidade e criar profecias autorrealizáveis.",
    traits: ["Cauteloso", "Preocupado", "Cético", "Defensivo"],
    strengths: ["Preparado para problemas", "Não se decepciona facilmente"],
    weaknesses: ["Felicidade reduzida", "Pode perder oportunidades", "Estresse aumentado"],
    tips: ["Pratique gratidão diariamente", "Questione pensamentos negativos", "Otimismo pode ser desenvolvido"],
  },
  D: {
    type: "D",
    title: "Pessimista",
    emoji: "⛈️",
    description: "Você é pessimista, esperando o pior e focando no negativo. Isso está provavelmente afetando sua qualidade de vida. Pode ser sinal de algo mais profundo.",
    traits: ["Negativo", "Desesperançoso", "Cínico", "Derrotista"],
    strengths: ["Raramente se decepciona"],
    weaknesses: ["Felicidade muito comprometida", "Profecias autorrealizáveis", "Relacionamentos afetados", "Pode indicar depressão"],
    tips: ["Considere buscar ajuda profissional", "Pessimismo extremo pode ser sintoma de depressão", "Você merece ver a vida de forma mais positiva"],
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
