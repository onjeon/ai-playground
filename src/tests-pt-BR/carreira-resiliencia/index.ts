// Sua Resiliência Profissional
// Descubra como você lida com adversidades no trabalho!

export const questions = [
  {
    id: 1,
    question: "Quando um projeto seu fracassa, você:",
    options: [
      { text: "Analiso, aprendo e já começo outro", type: "A" },
      { text: "Levo um tempo para processar e sigo em frente", type: "B" },
      { text: "Fico abalado mas eventualmente supero", type: "C" },
      { text: "Demoro muito para me recuperar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você reage a críticas duras ao seu trabalho?",
    options: [
      { text: "Agradeço o feedback e busco melhorar", type: "A" },
      { text: "Reflito sobre o que faz sentido e ignoro o resto", type: "B" },
      { text: "Fico chateado mas tento usar construtivamente", type: "C" },
      { text: "Levo muito a sério e me abalo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando enfrenta uma crise no trabalho, você:",
    options: [
      { text: "Mantenho a calma e foco na solução", type: "A" },
      { text: "Fico tenso mas consigo agir", type: "B" },
      { text: "Fico ansioso mas sigo em frente", type: "C" },
      { text: "Paraliso e tenho dificuldade de reagir", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se sente sobre mudanças inesperadas?",
    options: [
      { text: "Adoro! Mudança traz oportunidade", type: "A" },
      { text: "Aceito bem após entender o motivo", type: "B" },
      { text: "Tenho dificuldade mas me adapto", type: "C" },
      { text: "Odeio mudanças, me desestabilizam", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Após um dia muito difícil no trabalho, você:",
    options: [
      { text: "Desligo e amanhã é um novo dia", type: "A" },
      { text: "Processo um pouco e consigo relaxar", type: "B" },
      { text: "Levo as preocupações para casa", type: "C" },
      { text: "Não consigo parar de pensar nisso", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando não atinge uma meta, você:",
    options: [
      { text: "Ajusto a estratégia e tento de novo", type: "A" },
      { text: "Analiso o que deu errado e sigo", type: "B" },
      { text: "Fico frustrado mas continuo tentando", type: "C" },
      { text: "Questiono minha capacidade", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com rejeição (não ser escolhido, promovido, etc)?",
    options: [
      { text: "Faz parte, busco a próxima oportunidade", type: "A" },
      { text: "Fico decepcionado mas sigo em frente", type: "B" },
      { text: "Demoro a superar mas consigo", type: "C" },
      { text: "Levo muito a sério e afeta minha confiança", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua relação com erros no trabalho?",
    options: [
      { text: "Erros são aprendizado, não fracasso", type: "A" },
      { text: "Aceito que erros acontecem e aprendo", type: "B" },
      { text: "Me incomodam bastante mas supero", type: "C" },
      { text: "Tenho muito medo de errar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Em períodos de grande pressão, você:",
    options: [
      { text: "Funciono até melhor sob pressão", type: "A" },
      { text: "Mantenho performance com esforço", type: "B" },
      { text: "Minha performance cai um pouco", type: "C" },
      { text: "Fico muito impactado e não rendo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quando perde o emprego ou uma oportunidade importante:",
    options: [
      { text: "Vejo como redirecionamento, não fim", type: "A" },
      { text: "Processo a perda e busco novas portas", type: "B" },
      { text: "Fico abalado mas me recupero com tempo", type: "C" },
      { text: "É devastador, demoro muito a superar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você mantém a motivação em momentos difíceis?",
    options: [
      { text: "Foco no propósito maior e nos objetivos", type: "A" },
      { text: "Busco apoio e lembro das conquistas", type: "B" },
      { text: "É difícil mas tento manter a fé", type: "C" },
      { text: "Minha motivação desaparece facilmente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais te representa em momentos difíceis?",
    options: [
      { text: "O que não me mata me fortalece", type: "A" },
      { text: "Isso também vai passar", type: "B" },
      { text: "É difícil mas vou conseguir", type: "C" },
      { text: "Por que essas coisas acontecem comigo?", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Altamente Resiliente",
    emoji: "💪",
    description: "Você é extremamente resiliente! Adversidades não te derrubam, te fortalecem. Sua capacidade de recuperação é admirável e inspiradora.",
    traits: ["Forte", "Adaptável", "Otimista", "Determinado"],
    strengths: ["Recuperação rápida", "Aprende com fracassos", "Mantém performance sob pressão", "Inspira outros"],
    weaknesses: ["Pode ignorar emoções", "Às vezes parece insensível", "Pode não pedir ajuda quando precisa"],
    tips: ["Permita-se sentir as dificuldades", "Não precisa ser forte o tempo todo", "Aceite apoio dos outros"],
  },
  B: {
    type: "B",
    title: "Resiliente Equilibrado",
    emoji: "🌳",
    description: "Você tem boa resiliência! Enfrenta dificuldades, processa e segue em frente. Equilibra reconhecer a dor com não se deixar paralisar.",
    traits: ["Equilibrado", "Adaptável", "Realista", "Perseverante"],
    strengths: ["Processa emoções de forma saudável", "Recuperação consistente", "Boa perspectiva"],
    weaknesses: ["Pode demorar um pouco a se recuperar", "Às vezes precisa de mais suporte"],
    tips: ["Continue desenvolvendo sua resiliência", "Construa uma rede de apoio", "Pratique autocuidado em momentos difíceis"],
  },
  C: {
    type: "C",
    title: "Resiliência em Desenvolvimento",
    emoji: "🌱",
    description: "Você enfrenta dificuldades mas demora a se recuperar. Há espaço para desenvolver mais resiliência e lidar melhor com adversidades.",
    traits: ["Sensível", "Esforçado", "Em desenvolvimento", "Perseverante"],
    strengths: ["Consciência emocional", "Perseverança", "Reconhece necessidade de melhoria"],
    weaknesses: ["Recuperação lenta", "Afetado por críticas", "Ansiedade em crises"],
    tips: ["Trabalhe sua mentalidade sobre fracassos", "Busque apoio profissional se necessário", "Desenvolva técnicas de autorregulação"],
  },
  D: {
    type: "D",
    title: "Baixa Resiliência",
    emoji: "🩹",
    description: "Você tem dificuldade em lidar com adversidades. Crises te afetam profundamente e a recuperação é longa. Isso impacta sua vida profissional.",
    traits: ["Sensível", "Vulnerável", "Impactado", "Precisa de suporte"],
    strengths: ["Sensibilidade emocional", "Empatia com dificuldades dos outros"],
    weaknesses: ["Paralisia em crises", "Baixa tolerância à frustração", "Recuperação muito lenta"],
    tips: ["IMPORTANTE: Considere buscar ajuda profissional", "Desenvolva rede de apoio sólida", "Trabalhe autoestima e mentalidade de crescimento"],
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
