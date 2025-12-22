// Qual Seu Perfil de Instagram?
// Descubra como você usa o Instagram!

export const questions = [
  {
    id: 1,
    question: "Com que frequência você posta?",
    options: [
      { text: "Todo dia, stories e feed", type: "A" },
      { text: "Algumas vezes por semana", type: "B" },
      { text: "De vez em quando, quando algo é especial", type: "C" },
      { text: "Quase nunca, só olho", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você edita muito suas fotos?",
    options: [
      { text: "Muito! Filtros, apps, produção total", type: "A" },
      { text: "Um pouco, ajustes básicos", type: "B" },
      { text: "Quase nada, foto natural", type: "C" },
      { text: "Não posto foto", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você se preocupa com número de likes?",
    options: [
      { text: "Muito! Fico olhando", type: "A" },
      { text: "Um pouco, é bom receber", type: "B" },
      { text: "Não muito", type: "C" },
      { text: "Nem reparo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você posta stories do que está comendo?",
    options: [
      { text: "Sempre! Comida merece foto", type: "A" },
      { text: "Às vezes, quando é especial", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, acho desnecessário", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Quantas fotos você tira pra escolher uma?",
    options: [
      { text: "Muitas! Até achar a perfeita", type: "A" },
      { text: "Algumas, escolho a melhor", type: "B" },
      { text: "Poucas, a primeira geralmente serve", type: "C" },
      { text: "Não tiro pra postar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você segue muitos influenciadores?",
    options: [
      { text: "Muitos! Adoro acompanhar", type: "A" },
      { text: "Alguns que gosto", type: "B" },
      { text: "Poucos, prefiro amigos", type: "C" },
      { text: "Nenhum, não me interessa", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você responde todas as mensagens?",
    options: [
      { text: "Todas! Engajamento é importante", type: "A" },
      { text: "A maioria", type: "B" },
      { text: "Só de pessoas próximas", type: "C" },
      { text: "Quase nenhuma", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você já deletou post por ter poucos likes?",
    options: [
      { text: "Sim, várias vezes", type: "A" },
      { text: "Uma ou outra vez", type: "B" },
      { text: "Não, deixo lá", type: "C" },
      { text: "Não posto pra me preocupar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você usa hashtags?",
    options: [
      { text: "Sempre! Várias por post", type: "A" },
      { text: "Algumas relevantes", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Quanto tempo você passa no Instagram por dia?",
    options: [
      { text: "Horas, é minha rede favorita", type: "A" },
      { text: "1-2 horas, normal", type: "B" },
      { text: "Menos de uma hora", type: "C" },
      { text: "Quase nada, raramente abro", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você compra coisas que vê no Instagram?",
    options: [
      { text: "Frequentemente, vejo e quero", type: "A" },
      { text: "Às vezes, se interessar", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no Instagram?",
    options: [
      { text: "'Minha vida é um feed organizado'", type: "A" },
      { text: "'Compartilho momentos legais'", type: "B" },
      { text: "'Uso pra ver os outros'", type: "C" },
      { text: "'Instagram? Tenho mas não uso'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Instagrammer Profissional",
    emoji: "📸",
    description: "Você é Instagrammer Profissional! Feed organizado, stories constantes, engajamento alto. Você leva o Instagram a sério. Quase um influencer!",
    traits: ["Engajado(a)", "Produzido(a)", "Ativo(a)", "Digital"],
    strengths: ["Presença digital forte", "Rede de contatos", "Atualizado(a)"],
    weaknesses: ["Dependência de likes", "Tempo excessivo", "Vida pra mostrar"],
    tips: ["Cuidado com a autoestima", "Realidade nem sempre é feed", "Às vezes desconecte"],
  },
  B: {
    type: "B",
    title: "Usuário Normal",
    emoji: "👤",
    description: "Você é Usuário Normal! Usa o Instagram de forma saudável. Posta quando quer, curte o que gosta, sem obsessão. O equilíbrio ideal!",
    traits: ["Equilibrado(a)", "Saudável", "Presente", "Moderado(a)"],
    strengths: ["Uso saudável", "Sem dependência", "Vida real preservada"],
    weaknesses: ["Pode parecer desconectado", "Menos visibilidade"],
    tips: ["Ótimo equilíbrio", "Continue assim", "Não precisa ser influencer"],
  },
  C: {
    type: "C",
    title: "Observador Silencioso",
    emoji: "👀",
    description: "Você é o Observador Silencioso! Tem Instagram mas mais olha do que posta. Stalker profissional, sabe da vida de todo mundo mas ninguém sabe da sua!",
    traits: ["Observador(a)", "Discreto(a)", "Privado(a)", "Curioso(a)"],
    strengths: ["Privacidade", "Sem exposição", "Informado(a)"],
    weaknesses: ["Pode parecer misterioso(a)", "Amigos cobram posts"],
    tips: ["Tá tudo bem ser assim", "Nem todo mundo precisa postar", "Sua privacidade é valiosa"],
  },
  D: {
    type: "D",
    title: "Anti-Instagram",
    emoji: "🚫",
    description: "Você é Anti-Instagram! Tem a conta mas não usa, acha perda de tempo ou não se interessa. Enquanto outros postam, você vive a vida real!",
    traits: ["Desconectado(a)", "Real", "Independente", "Analógico(a)"],
    strengths: ["Vida real plena", "Sem comparações", "Tempo livre", "Saúde mental"],
    weaknesses: ["Pode perder informações", "Amigos reclamam", "Fora do loop"],
    tips: ["Sua escolha é válida", "Mas às vezes é útil", "Cada um no seu ritmo"],
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
