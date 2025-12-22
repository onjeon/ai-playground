// Compatibilidade de Casal
// Descubra o que você mais valoriza na compatibilidade!

export const questions = [
  {
    id: 1,
    question: "O que é mais importante pra você na escolha de um parceiro(a)?",
    options: [
      { text: "Valores e visão de vida parecidos", type: "A" },
      { text: "Química e atração física forte", type: "B" },
      { text: "Interesses e hobbies em comum", type: "C" },
      { text: "Complementaridade - diferenças que se encaixam", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sobre diferenças no casal, você acredita que:",
    options: [
      { text: "Quanto mais parecidos, melhor a compatibilidade", type: "A" },
      { text: "Algumas diferenças são saudáveis e até excitantes", type: "B" },
      { text: "Diferenças são boas desde que nos valores essenciais batam", type: "C" },
      { text: "Os opostos se atraem e se complementam", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Na prática do dia a dia, o que mais importa?",
    options: [
      { text: "Ter os mesmos objetivos de vida e sonhos", type: "A" },
      { text: "Manter a paixão e desejo acesos", type: "B" },
      { text: "Curtir fazer as mesmas coisas juntos", type: "C" },
      { text: "Respeitar e aprender com as diferenças", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sobre religião e espiritualidade no casal:",
    options: [
      { text: "Precisa ser igual ou muito parecida", type: "A" },
      { text: "Não é o mais importante, tem outras prioridades", type: "B" },
      { text: "Bom se puderem compartilhar juntos", type: "C" },
      { text: "Pode ser diferente, desde que haja respeito", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Sobre política e visões sociais:",
    options: [
      { text: "Fundamental pensar igual nas questões importantes", type: "A" },
      { text: "Não é prioridade na compatibilidade", type: "B" },
      { text: "Bom poder debater e ter opiniões parecidas", type: "C" },
      { text: "Pode divergir, debates são interessantes", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Um casal compatível pra você é aquele que:",
    options: [
      { text: "Quer as mesmas coisas da vida", type: "A" },
      { text: "Tem uma conexão intensa e magnética", type: "B" },
      { text: "Se diverte junto e compartilha momentos", type: "C" },
      { text: "Se equilibra e compensa as fraquezas um do outro", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Sobre o círculo social e amizades:",
    options: [
      { text: "Importante gostar dos amigos um do outro", type: "A" },
      { text: "Não importa muito, o que vale é a relação entre nós", type: "B" },
      { text: "Legal ter amigos em comum pra programas juntos", type: "C" },
      { text: "Cada um pode ter seu círculo, tudo bem", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quanto à rotina e estilo de vida:",
    options: [
      { text: "Precisa ser compatível - horários, hábitos parecidos", type: "A" },
      { text: "Dá pra adaptar se a conexão for forte", type: "B" },
      { text: "Bom ter rotinas que permitam fazer coisas juntos", type: "C" },
      { text: "Cada um pode ter sua rotina, nos encontramos quando dá", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sobre planejamento financeiro no casal:",
    options: [
      { text: "Visões financeiras precisam estar alinhadas", type: "A" },
      { text: "Não é prioridade, vai se ajeitando", type: "B" },
      { text: "Bom ter objetivos financeiros em comum", type: "C" },
      { text: "Cada um cuida do seu, junta o necessário", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que mais destrói a compatibilidade na sua visão?",
    options: [
      { text: "Valores fundamentais diferentes", type: "A" },
      { text: "Perder a atração e conexão emocional", type: "B" },
      { text: "Não ter nada pra fazer junto, vida paralela", type: "C" },
      { text: "Não aceitar e respeitar as diferenças", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Compatibilidade de Valores",
    emoji: "⚖️",
    percentage: 92,
    description: "Pra você, compatibilidade é ter valores e visão de vida alinhados! Acredita que o casal precisa querer as mesmas coisas e pensar parecido no que é essencial. O resto é detalhe!",
    characteristics: ["Focado(a) em valores", "Busca alinhamento", "Pensa no longo prazo", "Estruturado(a)"],
    advice: "Valores alinhados são fundamentais! Mas cuidado pra não criar uma lista rígida demais - algumas diferenças podem enriquecer a relação. Flexibilidade também é importante!",
  },
  B: {
    type: "B",
    title: "Compatibilidade de Química",
    emoji: "⚡",
    percentage: 85,
    description: "Pra você, compatibilidade é aquela conexão magnética! A química, atração e intensidade emocional são o mais importante. Se tiver isso, o resto se resolve!",
    characteristics: ["Valoriza química", "Intenso(a)", "Emocional", "Apaixonado(a)"],
    advice: "Química é maravilhosa, mas não sustenta tudo sozinha! Fique atento(a) também à compatibilidade prática e de valores pra construir algo duradouro!",
  },
  C: {
    type: "C",
    title: "Compatibilidade de Companheirismo",
    emoji: "🎯",
    percentage: 78,
    description: "Pra você, compatibilidade é curtir fazer coisas juntos! Ter hobbies em comum, se divertir junto e compartilhar momentos. O casal precisa ser parceiro de vida!",
    characteristics: ["Busca companheirismo", "Gosta de atividades juntos", "Valoriza tempo de qualidade", "Prático(a)"],
    advice: "Companheirismo é lindo! Mas lembre-se que ter momentos individuais também é saudável. E às vezes diferenças de interesses podem trazer novidades pro casal!",
  },
  D: {
    type: "D",
    title: "Compatibilidade de Complemento",
    emoji: "🧩",
    percentage: 72,
    description: "Pra você, compatibilidade é se complementar! Acredita que diferenças se encaixam e que o casal cresce aprendendo um com o outro. Os opostos se atraem!",
    characteristics: ["Valoriza diferenças", "Flexível", "Aberto(a) a aprender", "Adaptável"],
    advice: "Complementaridade é enriquecedora! Só fique atento(a) a diferenças em valores fundamentais - algumas diferenças são saudáveis, mas outras podem gerar conflitos sérios!",
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
