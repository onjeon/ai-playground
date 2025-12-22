// Teste de Dependência Emocional
// Descubra seu nível de dependência emocional em relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Você se sente completo(a) sem estar em um relacionamento?",
    options: [
      { text: "Sim, sou feliz sozinho(a) ou acompanhado(a)", type: "A" },
      { text: "Geralmente sim, mas gosto de ter alguém", type: "B" },
      { text: "Tenho dificuldade em ficar sozinho(a)", type: "C" },
      { text: "Não, preciso de alguém para me sentir bem", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você reage quando seu parceiro(a) precisa de espaço?",
    options: [
      { text: "Entendo e respeito, uso o tempo para mim", type: "A" },
      { text: "Aceito, mas sinto um pouco de insegurança", type: "B" },
      { text: "Fico ansioso(a) e preciso de reasseguramento", type: "C" },
      { text: "Fico desesperado(a), acho que vou ser abandonado(a)", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você muda sua personalidade para agradar parceiros?",
    options: [
      { text: "Não, sou autêntico(a) em relacionamentos", type: "A" },
      { text: "Às vezes faço pequenos ajustes", type: "B" },
      { text: "Frequentemente me adapto demais", type: "C" },
      { text: "Me transformo completamente por amor", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você consegue tomar decisões importantes sem consultar o parceiro(a)?",
    options: [
      { text: "Sim, tenho autonomia nas minhas decisões", type: "A" },
      { text: "Geralmente sim, mas gosto de compartilhar", type: "B" },
      { text: "Tenho dificuldade, preciso da opinião dele(a)", type: "C" },
      { text: "Não consigo decidir nada sozinho(a)", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Após um término, quanto tempo você leva para se recuperar?",
    options: [
      { text: "Sofro, mas me recupero em tempo saudável", type: "A" },
      { text: "Demoro um pouco mais que o esperado", type: "B" },
      { text: "Muito tempo, fico devastado(a)", type: "C" },
      { text: "Quase não consigo seguir em frente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você tem medo intenso de ser abandonado(a)?",
    options: [
      { text: "Não, confio em mim e nos outros", type: "A" },
      { text: "Um pouco, mas consigo controlar", type: "B" },
      { text: "Sim, esse medo me afeta bastante", type: "C" },
      { text: "Constantemente, domina meus pensamentos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você mantém suas amizades e hobbies quando em relacionamento?",
    options: [
      { text: "Sim, mantenho minha vida própria", type: "A" },
      { text: "Geralmente sim, mas com menos frequência", type: "B" },
      { text: "Tendo a abandonar por causa do relacionamento", type: "C" },
      { text: "O relacionamento consome toda minha vida", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você aceita comportamentos ruins do parceiro(a) por medo de perder?",
    options: [
      { text: "Não, tenho limites claros e os mantenho", type: "A" },
      { text: "Às vezes tolero mais do que deveria", type: "B" },
      { text: "Frequentemente aceito coisas que me machucam", type: "C" },
      { text: "Aceito qualquer coisa para não ficar sozinho(a)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Sua felicidade depende muito do estado do relacionamento?",
    options: [
      { text: "Não, tenho outras fontes de felicidade", type: "A" },
      { text: "Influencia, mas não domina", type: "B" },
      { text: "Muito, meu humor depende do parceiro(a)", type: "C" },
      { text: "Totalmente, não tenho felicidade fora disso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você checa constantemente o celular do parceiro(a) ou suas redes?",
    options: [
      { text: "Não, confio plenamente", type: "A" },
      { text: "Raramente, mas já fiz isso", type: "B" },
      { text: "Frequentemente, tenho essa compulsão", type: "C" },
      { text: "Obsessivamente, preciso saber de tudo", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você já ficou em relacionamentos ruins por medo de ficar sozinho(a)?",
    options: [
      { text: "Não, prefiro estar só a mal acompanhado(a)", type: "A" },
      { text: "Uma vez ou outra demorei a sair", type: "B" },
      { text: "Sim, várias vezes permaneci por medo", type: "C" },
      { text: "Sempre, qualquer relacionamento é melhor que nenhum", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua necessidade de aprovação do parceiro(a)?",
    options: [
      { text: "Gosto, mas não preciso constantemente", type: "A" },
      { text: "Importante para mim, mas não excessiva", type: "B" },
      { text: "Alta, preciso muito de validação", type: "C" },
      { text: "Extrema, não funciono sem aprovação", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Emocionalmente Independente",
    emoji: "🦋",
    description: "Você é emocionalmente independente! Consegue amar e se relacionar de forma saudável, sem perder sua identidade. Valoriza relacionamentos mas não depende deles.",
    traits: ["Autônomo", "Seguro", "Equilibrado", "Autoconfiante"],
    strengths: ["Relacionamentos saudáveis", "Identidade preservada", "Capacidade de estar só", "Amor sem dependência"],
    weaknesses: ["Pode parecer distante para dependentes", "Risco de independência excessiva"],
    tips: ["Continue cultivando sua independência saudável", "Esteja atento a parceiros muito dependentes", "Vulnerabilidade também é importante"],
  },
  B: {
    type: "B",
    title: "Levemente Dependente",
    emoji: "🌿",
    description: "Você tem leve tendência à dependência emocional, mas consegue manter equilíbrio. Há áreas para desenvolver mais autonomia emocional.",
    traits: ["Equilibrado", "Consciente", "Adaptável", "Em desenvolvimento"],
    strengths: ["Boa capacidade de relacionar", "Consciência das tendências", "Abertura para melhoria"],
    weaknesses: ["Algumas inseguranças", "Pode tolerar demais às vezes"],
    tips: ["Fortaleça sua autoestima", "Mantenha suas amizades e hobbies", "Trabalhe medos de abandono se surgirem"],
  },
  C: {
    type: "C",
    title: "Dependência Emocional Moderada",
    emoji: "💔",
    description: "Você apresenta dependência emocional significativa. Sua felicidade e identidade estão muito ligadas aos relacionamentos. Isso pode causar sofrimento.",
    traits: ["Dependente", "Inseguro", "Ansioso", "Carente"],
    strengths: ["Capacidade de amar intensamente", "Desejo de conexão"],
    weaknesses: ["Perde identidade em relacionamentos", "Aceita maus tratos", "Medo intenso de abandono"],
    tips: ["Busque terapia para trabalhar isso", "Desenvolva vida própria fora de relacionamentos", "Trabalhe sua autoestima"],
  },
  D: {
    type: "D",
    title: "Dependência Emocional Severa",
    emoji: "🆘",
    description: "Você tem dependência emocional severa. Sua vida gira em torno de relacionamentos de forma que prejudica sua saúde mental. Ajuda profissional é urgente.",
    traits: ["Codependente", "Desesperado", "Sem identidade própria", "Vulnerável"],
    strengths: ["Grande capacidade de amar"],
    weaknesses: ["Vulnerável a relacionamentos abusivos", "Identidade anulada", "Sofrimento constante"],
    tips: ["Procure um psicólogo urgentemente", "Isso é tratável com ajuda adequada", "Você merece amor saudável, não dependência"],
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
