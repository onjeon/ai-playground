// Qual Tipo de Casado Brasileiro Você É?
// Descubra seu perfil de pessoa casada!

export const questions = [
  {
    id: 1,
    question: "Como está seu casamento?",
    options: [
      { text: "Perfeito! Meu amor é minha vida", type: "A" },
      { text: "Bom, temos nossa rotina feliz", type: "B" },
      { text: "Normal, altos e baixos", type: "C" },
      { text: "Complicado, mas seguimos", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você ainda faz programas românticos?",
    options: [
      { text: "Sempre! Namoramos até hoje", type: "A" },
      { text: "De vez em quando, tentamos", type: "B" },
      { text: "Raramente, a rotina consome", type: "C" },
      { text: "Quase nunca, somos práticos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como vocês resolvem brigas?",
    options: [
      { text: "Conversamos e resolvemos rápido", type: "A" },
      { text: "Cada um esfria a cabeça e depois conversa", type: "B" },
      { text: "Brigamos, fica um climão, mas passa", type: "C" },
      { text: "Às vezes dura dias sem falar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Vocês têm conta conjunta?",
    options: [
      { text: "Sim, tudo junto, somos um só", type: "A" },
      { text: "Parte junto, parte separado", type: "B" },
      { text: "Cada um tem a sua, dividimos contas", type: "C" },
      { text: "Separado total, dinheiro é meu", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você sai sozinho(a) com amigos?",
    options: [
      { text: "Raramente, preferimos sair juntos", type: "A" },
      { text: "Às vezes, mas combinamos", type: "B" },
      { text: "Sim, cada um tem sua vida", type: "C" },
      { text: "Sempre, preciso do meu espaço", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é a divisão de tarefas em casa?",
    options: [
      { text: "Perfeita, cada um faz sua parte", type: "A" },
      { text: "Boa, com alguns ajustes", type: "B" },
      { text: "Desequilibrada, um faz mais", type: "C" },
      { text: "Sempre brigamos por isso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Vocês dormem juntos toda noite?",
    options: [
      { text: "Sempre! Não durmo sem", type: "A" },
      { text: "Quase sempre, exceto viagem", type: "B" },
      { text: "Às vezes dormimos separados", type: "C" },
      { text: "Quartos separados é normal", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você fala 'te amo' todo dia?",
    options: [
      { text: "Várias vezes ao dia!", type: "A" },
      { text: "Todo dia, pelo menos uma vez", type: "B" },
      { text: "De vez em quando", type: "C" },
      { text: "Raramente, não somos de falar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Vocês têm os mesmos amigos?",
    options: [
      { text: "Sim, fazemos tudo juntos", type: "A" },
      { text: "Alguns em comum, alguns separados", type: "B" },
      { text: "Cada um tem seu grupo", type: "C" },
      { text: "Totalmente separados", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como é a relação com sogros?",
    options: [
      { text: "Ótima! São minha segunda família", type: "A" },
      { text: "Boa, nos respeitamos", type: "B" },
      { text: "Cordial, o básico", type: "C" },
      { text: "Complicada, evito quando posso", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Vocês planejam o futuro juntos?",
    options: [
      { text: "Tudo! Viagens, aposentadoria, tudo", type: "A" },
      { text: "As coisas principais, sim", type: "B" },
      { text: "Às vezes, quando necessário", type: "C" },
      { text: "Cada um planeja o seu", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define seu casamento?",
    options: [
      { text: "'Almas gêmeas pra sempre!'", type: "A" },
      { text: "'Parceiros de vida'", type: "B" },
      { text: "'Companheiros de jornada'", type: "C" },
      { text: "'Dividimos o mesmo teto'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Casal Apaixonado",
    emoji: "💕",
    description: "Você é do Casal Apaixonado! Parecem namorados até hoje. Tudo junto, muito amor, conexão forte. Vocês são a prova de que o romance não precisa acabar no casamento!",
    traits: ["Apaixonado(a)", "Romântico(a)", "Conectado(a)", "Dedicado(a)"],
    strengths: ["Amor vivo", "Conexão forte", "Felicidade", "Parceria"],
    weaknesses: ["Pode ser grudento", "Dependência emocional", "Falta individualidade"],
    tips: ["Que lindo!", "Mantenham o espaço individual também", "Vocês inspiram"],
  },
  B: {
    type: "B",
    title: "Casal Parceiro",
    emoji: "🤝",
    description: "Você é do Casal Parceiro! Equilíbrio entre amor e individualidade. Vocês são time, se apoiam, mas cada um tem seu espaço. O casamento ideal!",
    traits: ["Equilibrado(a)", "Parceiro(a)", "Maduro(a)", "Respeitoso(a)"],
    strengths: ["Equilíbrio", "Respeito mútuo", "Individualidade preservada", "Parceria sólida"],
    weaknesses: ["Pode parecer menos romântico", "Risco de virar só amigos"],
    tips: ["Ótimo equilíbrio", "Mantenham o romance vivo", "Vocês acertaram"],
  },
  C: {
    type: "C",
    title: "Casal Real",
    emoji: "🏠",
    description: "Você é do Casal Real! Nem tudo são flores, mas vocês seguem firmes. A rotina dominou, mas o compromisso mantém. Casamento de verdade!",
    traits: ["Realista", "Comprometido(a)", "Prático(a)", "Persistente"],
    strengths: ["Compromisso", "Pés no chão", "Persistência", "Maturidade"],
    weaknesses: ["Falta romance", "Rotina demais", "Pode esfriar"],
    tips: ["Invistam no romance", "Não deixem a chama apagar", "Vocês podem reaquecer"],
  },
  D: {
    type: "D",
    title: "Casal Independente",
    emoji: "🔀",
    description: "Você é do Casal Independente! Cada um na sua, dividem a casa mas têm vidas separadas. Funciona pra vocês, mas pode ser sinal de distância emocional!",
    traits: ["Independente", "Distante", "Prático(a)", "Individual"],
    strengths: ["Liberdade", "Independência", "Sem drama", "Espaço próprio"],
    weaknesses: ["Desconexão", "Falta intimidade", "Risco de separação"],
    tips: ["Reflitam sobre a relação", "Ainda estão juntos por quê?", "Reconexão pode ajudar"],
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
