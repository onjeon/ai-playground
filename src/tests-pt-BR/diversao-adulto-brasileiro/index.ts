// Qual Tipo de Adulto Brasileiro Você É?
// Descubra seu perfil de adulto!

export const questions = [
  {
    id: 1,
    question: "Como você lida com as contas do mês?",
    options: [
      { text: "Planilha, tudo controlado, sobra dinheiro", type: "A" },
      { text: "Pago tudo em dia, sem luxo", type: "B" },
      { text: "Aperto mas dou conta", type: "C" },
      { text: "Vivo no vermelho, cartão estourado", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua relação com o trabalho?",
    options: [
      { text: "Amo o que faço, trabalho é prazer", type: "A" },
      { text: "Trabalho bem, vida equilibrada", type: "B" },
      { text: "Trabalho pra pagar boleto", type: "C" },
      { text: "Odeio, quero largar tudo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como está sua vida amorosa?",
    options: [
      { text: "Casado(a)/relacionamento estável e feliz", type: "A" },
      { text: "Namorando, tá indo bem", type: "B" },
      { text: "Solteiro(a), aproveitando", type: "C" },
      { text: "Complicado, nem sei explicar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você faz no tempo livre?",
    options: [
      { text: "Hobbies produtivos, cursos, academia", type: "A" },
      { text: "Descanso, séries, família", type: "B" },
      { text: "Bar com amigos, rolês", type: "C" },
      { text: "Nada, só durmo e trabalho", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como é sua alimentação?",
    options: [
      { text: "Saudável, como bem, cozinho em casa", type: "A" },
      { text: "Tento equilibrar, às vezes peço delivery", type: "B" },
      { text: "Muito delivery e fast food", type: "C" },
      { text: "Como o que tiver, quando lembro", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você faz check-up médico?",
    options: [
      { text: "Anualmente, sem falta, tudo em dia", type: "A" },
      { text: "De vez em quando, quando lembro", type: "B" },
      { text: "Só quando algo dói", type: "C" },
      { text: "Tenho medo de médico, evito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual seu nível de responsabilidade?",
    options: [
      { text: "100%, adulto exemplar", type: "A" },
      { text: "Alto, dou conta do que preciso", type: "B" },
      { text: "Médio, vou levando", type: "C" },
      { text: "Baixo, ainda me sinto adolescente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você se sente sobre o futuro?",
    options: [
      { text: "Planejado, tenho metas claras", type: "A" },
      { text: "Otimista, vai dar certo", type: "B" },
      { text: "Incerto, vivo um dia de cada vez", type: "C" },
      { text: "Ansioso, não quero pensar nisso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você tem investimentos ou poupança?",
    options: [
      { text: "Sim, carteira diversificada", type: "A" },
      { text: "Um pouco na poupança", type: "B" },
      { text: "Quase nada, gasto tudo", type: "C" },
      { text: "Devo mais do que tenho", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como é sua moradia?",
    options: [
      { text: "Casa/apto próprio, organizado", type: "A" },
      { text: "Aluguel confortável", type: "B" },
      { text: "República ou dividindo", type: "C" },
      { text: "Com os pais ainda", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se sente adulto de verdade?",
    options: [
      { text: "Sim, totalmente, sou referência", type: "A" },
      { text: "Sim, mas ainda aprendendo", type: "B" },
      { text: "Mais ou menos, finjo bem", type: "C" },
      { text: "Não, sou criança grande", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'Adultar é minha especialidade'", type: "A" },
      { text: "'Vou levando, tá tudo bem'", type: "B" },
      { text: "'Adulto? Eu? Às vezes'", type: "C" },
      { text: "'Ninguém me avisou que era assim'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Adulto Exemplar",
    emoji: "👔",
    description: "Você é o Adulto Exemplar! Tudo organizado, vida financeira em dia, carreira em ascensão. Você é o adulto que todos deveriam ser. Parabéns por ter tudo sob controle!",
    traits: ["Responsável", "Organizado(a)", "Bem-sucedido(a)", "Equilibrado(a)"],
    strengths: ["Vida organizada", "Segurança financeira", "Exemplo pros outros"],
    weaknesses: ["Pode ser exigente demais", "Dificuldade em relaxar", "Pressão interna"],
    tips: ["Relaxe às vezes", "Você já é ótimo", "Aproveite o que construiu"],
  },
  B: {
    type: "B",
    title: "Adulto Normal",
    emoji: "🙂",
    description: "Você é o Adulto Normal! Vida equilibrada, nem muito certinho nem caótico. Você representa a maioria dos brasileiros que vão levando a vida do melhor jeito possível!",
    traits: ["Equilibrado(a)", "Realista", "Adaptável", "Prático(a)"],
    strengths: ["Equilíbrio", "Flexibilidade", "Pés no chão", "Sem extremos"],
    weaknesses: ["Zona de conforto", "Pode acomodar", "Sem grandes ambições"],
    tips: ["Tá bom assim", "Sonhe um pouco mais", "Você está bem"],
  },
  C: {
    type: "C",
    title: "Adulto em Construção",
    emoji: "🔧",
    description: "Você é o Adulto em Construção! Ainda descobrindo como funciona essa coisa de ser adulto. Não é perfeito, mas está tentando. O importante é não desistir!",
    traits: ["Aprendiz", "Tentando", "Incerto(a)", "Em evolução"],
    strengths: ["Humildade", "Espaço pra crescer", "Não finge ser perfeito"],
    weaknesses: ["Instabilidade", "Falta de direção", "Dificuldades financeiras"],
    tips: ["Um dia de cada vez", "Peça ajuda quando precisar", "Vai melhorar"],
  },
  D: {
    type: "D",
    title: "Adulto Relutante",
    emoji: "😅",
    description: "Você é o Adulto Relutante! Ser adulto não era bem o que você esperava. Ainda se sente um adolescente perdido num corpo adulto. Bem-vindo ao clube!",
    traits: ["Perdido(a)", "Jovem de espírito", "Desorganizado(a)", "Autêntico(a)"],
    strengths: ["Honestidade", "Jovialidade", "Não finge", "Espírito jovem"],
    weaknesses: ["Caos na vida", "Irresponsabilidade", "Futuro incerto"],
    tips: ["Adultar é difícil mesmo", "Pequenos passos ajudam", "Nunca é tarde pra organizar"],
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
