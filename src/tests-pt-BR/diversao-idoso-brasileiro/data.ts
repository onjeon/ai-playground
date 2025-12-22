// Qual Tipo de Idoso Você Será?
// Descubra que tipo de velhinho(a) você vai virar!

export const questions = [
  {
    id: 1,
    question: "Você imagina sua aposentadoria como?",
    options: [
      { text: "Viajando o mundo, aproveitando cada momento", type: "A" },
      { text: "Cuidando dos netos, fazendo comida gostosa", type: "B" },
      { text: "Aprendendo coisas novas, fazendo cursos", type: "C" },
      { text: "Reclamando da vida, do governo, de tudo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Na pracinha do bairro, você vai ser aquele(a) que...",
    options: [
      { text: "Faz amizade com todo mundo, organiza eventos", type: "A" },
      { text: "Leva os netos pra brincar, conversa com outros avós", type: "B" },
      { text: "Lê jornal, faz palavras cruzadas", type: "C" },
      { text: "Reclama do barulho das crianças", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Sobre tecnologia na terceira idade, você...",
    options: [
      { text: "Vou estar por dentro de tudo, moderninho(a)", type: "A" },
      { text: "Uso o básico, WhatsApp e videochamada", type: "B" },
      { text: "Vou fazer cursos pra não ficar pra trás", type: "C" },
      { text: "Celular é coisa do capeta, prefiro telefone fixo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sua relação com médicos vai ser...",
    options: [
      { text: "Raramente vou, saúde de ferro", type: "A" },
      { text: "Acompanhamento regular, prevenção é tudo", type: "B" },
      { text: "Pesquiso tudo antes, chego sabendo mais que o médico", type: "C" },
      { text: "Agenda lotada, vou em todos os especialistas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Café da manhã na padaria. Você vai ser...",
    options: [
      { text: "O figurinha carimbada, todo mundo conhece", type: "A" },
      { text: "Vou de vez em quando, levo a família", type: "B" },
      { text: "Prefiro fazer em casa, mais saudável", type: "C" },
      { text: "Vou pra reclamar do preço do pão", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você vai contar histórias do passado?",
    options: [
      { text: "Com humor e exagero, todo mundo ri", type: "A" },
      { text: "Com carinho, ensinando lições de vida", type: "B" },
      { text: "Com detalhes precisos, memória afiada", type: "C" },
      { text: "Repetindo 300 vezes a mesma história", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre dar opinião na vida dos outros, você vai...",
    options: [
      { text: "Só quando pedirem, respeito cada um", type: "A" },
      { text: "Dar conselhos com amor e cuidado", type: "B" },
      { text: "Opinar baseado em fatos e experiência", type: "C" },
      { text: "Dar pitaco em tudo, quer queira quer não", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Dinheiro na velhice: você vai ser...",
    options: [
      { text: "Generoso(a), gastando com viagem e prazer", type: "A" },
      { text: "Equilibrado(a), guardando pros netos", type: "B" },
      { text: "Poupador(a), investindo pro futuro", type: "C" },
      { text: "Sovina, contando cada centavo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sobre a juventude de hoje, você vai achar que...",
    options: [
      { text: "Cada geração tem seu jeito, tudo bem", type: "A" },
      { text: "Tem muito a ensinar e aprender com eles", type: "B" },
      { text: "São diferentes, mas têm potencial", type: "C" },
      { text: "No meu tempo era melhor, essa geração é perdida", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu lema na terceira idade vai ser...",
    options: [
      { text: "A vida começa aos 60!", type: "A" },
      { text: "Família é tudo!", type: "B" },
      { text: "Nunca é tarde pra aprender!", type: "C" },
      { text: "Respeitem os mais velhos!", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Idoso Aventureiro",
    emoji: "✈️",
    percentage: 95,
    description: "Você vai ser O Idoso Aventureiro! Aposentadoria pra você é liberdade. Viagens, festas, amigos novos - você vai aproveitar cada segundo com energia de jovem!",
    characteristics: ["Animado(a)", "Sociável", "Positivo(a)", "Ativo(a)"],
    advice: "Seu espírito jovem é inspirador! Só não esquece de cuidar da saúde pra continuar aproveitando. Você vai ser aquele idoso que todo mundo quer ser!",
  },
  B: {
    type: "B",
    title: "O Vovô/Vovó Coruja",
    emoji: "👴",
    percentage: 85,
    description: "Você vai ser O Vovô/Vovó Coruja! Netos são sua vida, família é prioridade. Sua casa vai ser ponto de encontro, com comida gostosa e muito amor!",
    characteristics: ["Carinhoso(a)", "Dedicado(a)", "Acolhedor(a)", "Tradicional"],
    advice: "Sua dedicação à família é linda! Só lembra de ter tempo pra você também. Vovó/vovô feliz faz neto feliz!",
  },
  C: {
    type: "C",
    title: "O Idoso Intelectual",
    emoji: "📚",
    percentage: 75,
    description: "Você vai ser O Idoso Intelectual! Aposentadoria é tempo de estudar, aprender, se atualizar. Você vai ter mais diplomas que muito jovem por aí!",
    characteristics: ["Curioso(a)", "Estudioso(a)", "Atualizado(a)", "Reflexivo(a)"],
    advice: "Sua sede de conhecimento é admirável! Continue exercitando o cérebro, isso ajuda a manter a mente afiada por muito mais tempo!",
  },
  D: {
    type: "D",
    title: "O Idoso Ranzinza",
    emoji: "😤",
    percentage: 50,
    description: "Você vai ser O Idoso Ranzinza! Clássico velhinho reclamão. Tudo era melhor antes, a juventude é perdida, o mundo tá acabando. Mas no fundo tem um coração de ouro!",
    characteristics: ["Crítico(a)", "Nostálgico(a)", "Sincero(a)", "Tradicional"],
    advice: "Tá bom reclamar às vezes, mas não deixa isso consumir sua velhice! Tenta ver o lado bom das coisas, a vida é curta demais pra tanto mau humor!",
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
