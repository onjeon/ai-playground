// Qual Criança do Interior Você Era?
// Descubra seu perfil de infância no interior!

export const questions = [
  {
    id: 1,
    question: "Onde você mais brincava?",
    options: [
      { text: "Na rua, com a vizinhança toda", type: "A" },
      { text: "No quintal, árvores e terra", type: "B" },
      { text: "Dentro de casa, mais quietinho", type: "C" },
      { text: "No rio/lagoa/represa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual era sua brincadeira favorita?",
    options: [
      { text: "Pique-esconde, pega-pega, queimada", type: "A" },
      { text: "Subir em árvore, fazer cabana", type: "B" },
      { text: "Desenhar, ler, brincar sozinho", type: "C" },
      { text: "Nadar, pescar, brincar na água", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você ajudava nos afazeres?",
    options: [
      { text: "Sim, mas fugia pra brincar", type: "A" },
      { text: "Sim, gostava de ajudar na roça/horta", type: "B" },
      { text: "Sim, tarefas de casa", type: "C" },
      { text: "Mais ou menos, preferia a água", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como era sua relação com animais?",
    options: [
      { text: "Brincava com os cachorros da rua", type: "A" },
      { text: "Cuidava das galinhas, vacas, bichos", type: "B" },
      { text: "Tinha um pet especial em casa", type: "C" },
      { text: "Pescava, conhecia os peixes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você era de turma grande ou pequena?",
    options: [
      { text: "Grande! Conhecia todo mundo", type: "A" },
      { text: "Média, alguns primos e vizinhos", type: "B" },
      { text: "Pequena, poucos amigos", type: "C" },
      { text: "Variava, depende da época", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como era a comida da sua infância?",
    options: [
      { text: "Comida na casa dos outros, todo mundo dividia", type: "A" },
      { text: "Direto da horta, frutas do pé", type: "B" },
      { text: "Comida da vó, caseira", type: "C" },
      { text: "Peixe frito, comida da pescaria", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você tomava banho de chuva?",
    options: [
      { text: "Sempre! Com a turma toda", type: "A" },
      { text: "Sim, aproveitava pra brincar na lama", type: "B" },
      { text: "Às vezes, mas não gostava muito", type: "C" },
      { text: "Sim, depois ia pro rio", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você fazia/soltava pipa?",
    options: [
      { text: "Sim! Competia com a galera", type: "A" },
      { text: "Sim, fazia a minha própria", type: "B" },
      { text: "Às vezes, quando chamavam", type: "C" },
      { text: "Preferia brincar na água", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você pegava frutas do vizinho?",
    options: [
      { text: "Sim! Todo mundo fazia isso", type: "A" },
      { text: "Tinha no meu quintal", type: "B" },
      { text: "Pedia permissão antes", type: "C" },
      { text: "Não muito, tinha outras diversões", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você ficava até tarde na rua?",
    options: [
      { text: "Até a mãe gritar pra entrar", type: "A" },
      { text: "Até escurecer, depois ia pra casa", type: "B" },
      { text: "Entrava cedo, não gostava muito", type: "C" },
      { text: "Dependia do dia e da diversão", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você apanhou/levou bronca por quê?",
    options: [
      { text: "Bagunça na rua, chegava sujo", type: "A" },
      { text: "Mexer onde não devia, curiosidade", type: "B" },
      { text: "Pouca coisa, era comportado", type: "C" },
      { text: "Ficar muito tempo fora de casa", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define sua infância?",
    options: [
      { text: "'A rua era meu parque de diversões'", type: "A" },
      { text: "'O quintal era meu mundo'", type: "B" },
      { text: "'Era quietinho mas feliz'", type: "C" },
      { text: "'Vivia na água!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Criança de Rua",
    emoji: "🏃",
    description: "Você era a Criança de Rua! A rua era sua casa, a vizinhança sua família. Pique-esconde, queimada, futebol... você conhecia todo mundo e vivia pra fora!",
    traits: ["Sociável", "Aventureiro(a)", "Popular", "Bagunceiro(a)"],
    strengths: ["Muitos amigos", "Memórias incríveis", "Habilidades sociais"],
    weaknesses: ["Apanhava da mãe", "Chegava sujo", "Desorganizado(a)"],
    tips: ["Sua infância foi incrível", "As memórias são ouro", "Saudade boa"],
  },
  B: {
    type: "B",
    title: "Criança de Quintal",
    emoji: "🌳",
    description: "Você era a Criança de Quintal! Árvores, horta, bichos, natureza. Você explorava cada canto do quintal e tinha conexão com a terra. Raízes fortes!",
    traits: ["Explorador(a)", "Conectado(a) à natureza", "Curioso(a)", "Independente"],
    strengths: ["Conexão com natureza", "Criatividade", "Autossuficiência"],
    weaknesses: ["Menos social", "Mais solitário(a)"],
    tips: ["Sua conexão com a terra é especial", "Mantenha esse vínculo", "Natureza cura"],
  },
  C: {
    type: "C",
    title: "Criança Caseira",
    emoji: "🏠",
    description: "Você era a Criança Caseira! Preferia ficar em casa, mais quietinho, brincando sozinho ou com poucos. Introvertido mas feliz no seu mundinho!",
    traits: ["Quieto(a)", "Introspectivo(a)", "Imaginativo(a)", "Tranquilo(a)"],
    strengths: ["Imaginação rica", "Independência", "Profundidade"],
    weaknesses: ["Poucos amigos da época", "Menos memórias de turma"],
    tips: ["Sua introspecção é dom", "Você desenvolveu outras habilidades", "Tudo bem ser assim"],
  },
  D: {
    type: "D",
    title: "Criança de Rio",
    emoji: "🏊",
    description: "Você era a Criança de Rio! Água era sua vida. Nadar, pescar, pular, mergulhar. O rio era seu parque aquático natural. Liberdade total!",
    traits: ["Aquático(a)", "Livre", "Aventureiro(a)", "Destemido(a)"],
    strengths: ["Liberdade", "Coragem", "Conexão com água", "Memórias únicas"],
    weaknesses: ["Riscos", "Preocupação dos pais"],
    tips: ["Que infância!", "A água te moldou", "Memórias de ouro"],
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
