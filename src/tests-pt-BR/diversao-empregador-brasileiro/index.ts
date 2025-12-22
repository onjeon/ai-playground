// Qual Tipo de Empregador Brasileiro Você É?
// Descubra seu perfil como chefe/dono de negócio!

export const questions = [
  {
    id: 1,
    question: "Como você contrata funcionários?",
    options: [
      { text: "Processo seletivo estruturado, entrevistas", type: "A" },
      { text: "Indicações de confiança e entrevista", type: "B" },
      { text: "Indicação de família e amigos", type: "C" },
      { text: "Quem aparecer e servir", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você paga todos os direitos trabalhistas?",
    options: [
      { text: "Tudo certinho, CLT completa", type: "A" },
      { text: "O básico, tento fazer o certo", type: "B" },
      { text: "Alguns, o que dá", type: "C" },
      { text: "Prefiro informal, menos burocracia", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com atrasos de funcionários?",
    options: [
      { text: "Converso, registro, aplico políticas", type: "A" },
      { text: "Dou uma bronca, mas entendo", type: "B" },
      { text: "Deixo passar, acontece", type: "C" },
      { text: "Desconto no salário", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você dá aumento pros funcionários?",
    options: [
      { text: "Sim, baseado em desempenho e mercado", type: "A" },
      { text: "Quando pedem e merecem", type: "B" },
      { text: "Raramente, quando dá", type: "C" },
      { text: "Não, o combinado foi o combinado", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você oferece benefícios além do salário?",
    options: [
      { text: "VT, VR, plano de saúde, tudo", type: "A" },
      { text: "O básico obrigatório", type: "B" },
      { text: "Quando posso, ofereço algo", type: "C" },
      { text: "Não, só o salário", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você demite um funcionário?",
    options: [
      { text: "Processo formal, aviso prévio, direitos", type: "A" },
      { text: "Conversa honesta e pago o que devo", type: "B" },
      { text: "Peço pra pedir demissão", type: "C" },
      { text: "Mando embora e vejo depois", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você investe em treinamento?",
    options: [
      { text: "Sim, capacitação constante", type: "A" },
      { text: "Quando surge oportunidade", type: "B" },
      { text: "Raramente, aprendem no trabalho", type: "C" },
      { text: "Não, contrato quem já sabe", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você ouve sugestões dos funcionários?",
    options: [
      { text: "Sempre! Tenho canal aberto", type: "A" },
      { text: "Sim, quando fazem sentido", type: "B" },
      { text: "Às vezes, mas decido eu", type: "C" },
      { text: "Não, eu sei o que é melhor", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como é o ambiente de trabalho?",
    options: [
      { text: "Profissional, organizado, bom clima", type: "A" },
      { text: "Bom, como uma família", type: "B" },
      { text: "Normal, cada um faz seu trabalho", type: "C" },
      { text: "Tenso, cobro muito resultado", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você cumpre as férias dos funcionários?",
    options: [
      { text: "Sempre, no prazo certinho", type: "A" },
      { text: "Sim, às vezes nego a data", type: "B" },
      { text: "Quando dá, peço pra vender às vezes", type: "C" },
      { text: "Férias? Só se sobrar tempo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você reconhece o trabalho dos funcionários?",
    options: [
      { text: "Sim, elogios, bônus, reconhecimento", type: "A" },
      { text: "Quando merecem, falo", type: "B" },
      { text: "Raramente, é obrigação deles", type: "C" },
      { text: "Não, fazem o que são pagos pra fazer", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define como empregador?",
    options: [
      { text: "'Funcionário feliz trabalha melhor'", type: "A" },
      { text: "'Faço o que posso pelo time'", type: "B" },
      { text: "'É difícil, mas tento ser justo'", type: "C" },
      { text: "'Negócio é negócio'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Empregador Exemplar",
    emoji: "⭐",
    description: "Você é o Empregador Exemplar! Todos os direitos, bom ambiente, investimento em pessoas. Seus funcionários têm sorte. Continue assim!",
    traits: ["Justo(a)", "Profissional", "Investidor em pessoas", "Respeitoso(a)"],
    strengths: ["Funcionários engajados", "Baixa rotatividade", "Boa reputação"],
    weaknesses: ["Custos mais altos", "Pode ser aproveitado"],
    tips: ["Continue assim!", "Você é referência", "Bons funcionários ficam"],
  },
  B: {
    type: "B",
    title: "Empregador Família",
    emoji: "👨‍👩‍👧‍👦",
    description: "Você é o Empregador Família! Trata funcionários como família, faz o certo na medida do possível. Relação próxima e humana!",
    traits: ["Humano(a)", "Próximo(a)", "Bem intencionado(a)", "Flexível"],
    strengths: ["Lealdade", "Ambiente familiar", "Relações fortes"],
    weaknesses: ["Pode misturar demais", "Dificuldade em cobrar"],
    tips: ["Bom equilíbrio", "Mas mantenha profissionalismo", "Família é bom, empresa precisa de limites"],
  },
  C: {
    type: "C",
    title: "Empregador Apertado",
    emoji: "💸",
    description: "Você é o Empregador Apertado! Faz o que pode com recursos limitados. Nem sempre consegue dar tudo, mas tenta ser justo. A realidade aperta!",
    traits: ["Limitado(a)", "Bem intencionado(a)", "Realista", "Apertado(a)"],
    strengths: ["Honestidade sobre limitações", "Tenta fazer o certo"],
    weaknesses: ["Funcionários descontentes", "Pode perder bons profissionais"],
    tips: ["Entendemos as dificuldades", "Mas direitos são direitos", "Planeje melhor"],
  },
  D: {
    type: "D",
    title: "Empregador Complicado",
    emoji: "😬",
    description: "Você é o Empregador Complicado! Foco total em resultados, pouca atenção aos direitos. Cuidado com processos trabalhistas e rotatividade!",
    traits: ["Exigente", "Focado em lucro", "Informal demais", "Arriscado(a)"],
    strengths: ["Foco em resultado", "Decisões rápidas"],
    weaknesses: ["Risco trabalhista", "Alta rotatividade", "Má reputação"],
    tips: ["Cuidado com a lei", "Funcionários insatisfeitos prejudicam", "Invista em pessoas"],
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
