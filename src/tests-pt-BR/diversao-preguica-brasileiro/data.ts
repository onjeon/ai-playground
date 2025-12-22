// Nível de Preguiça
// Descubra seu nível de preguiça no estilo brasileiro!

export const questions = [
  {
    id: 1,
    question: "O despertador toca de manhã. Você...",
    options: [
      { text: "Levanto na hora, sem drama", type: "A" },
      { text: "Soneco uma ou duas vezes, depois levanto", type: "B" },
      { text: "Soneco até o limite do aceitável", type: "C" },
      { text: "Ignoro completamente e durmo mais", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Tem que lavar a louça. Sua estratégia é...",
    options: [
      { text: "Lavo na hora, odeio louça suja", type: "A" },
      { text: "Deixo de molho e lavo depois", type: "B" },
      { text: "Espero juntar bastante pra valer a pena", type: "C" },
      { text: "Uso descartável ou peço delivery", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O controle remoto caiu no chão. Você...",
    options: [
      { text: "Levanto e pego sem pensar", type: "A" },
      { text: "Espero um momento oportuno pra pegar", type: "B" },
      { text: "Tento pegar com o pé ou algo por perto", type: "C" },
      { text: "Mudo de canal no próprio aparelho... ou assisto o que tiver", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Domingo de sol lindo. Seu plano é...",
    options: [
      { text: "Praia, parque ou atividade ao ar livre", type: "A" },
      { text: "Talvez saia, talvez fique... vou ver", type: "B" },
      { text: "Fico em casa, mas pelo menos abro a janela", type: "C" },
      { text: "Netflix, ar-condicionado e delivery", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você precisa ir na padaria que fica a 2 quadras. Você...",
    options: [
      { text: "Vou andando, faz bem caminhar", type: "A" },
      { text: "Vou de bike ou patinete", type: "B" },
      { text: "Vou de carro, mais prático", type: "C" },
      { text: "Peço delivery do pão", type: "D" },
    ],
  },
  {
    id: 6,
    question: "A academia te espera. Qual sua frequência?",
    options: [
      { text: "Vou regularmente, faz parte da rotina", type: "A" },
      { text: "Vou quando dá, algumas vezes por semana", type: "B" },
      { text: "Pago mas vou pouco... tô pagando pra não ir", type: "C" },
      { text: "Cancela todo início de ano e nunca vou", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Precisa mandar uma mensagem importante. Você...",
    options: [
      { text: "Mando na hora, resolvo logo", type: "A" },
      { text: "Vou responder, só deixa eu ver mais uma coisa", type: "B" },
      { text: "Marco como 'importante' e respondo depois", type: "C" },
      { text: "Esqueço e lembro 3 dias depois", type: "D" },
    ],
  },
  {
    id: 8,
    question: "A roupa tá no varal seca. Você...",
    options: [
      { text: "Tiro, dobro e guardo no mesmo dia", type: "A" },
      { text: "Tiro e deixo na cama pra guardar depois", type: "B" },
      { text: "Deixo no varal uns dias, não vai fazer mal", type: "C" },
      { text: "Pego direto do varal quando vou usar", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Alguém te chama pra sair. Sua primeira reação é...",
    options: [
      { text: "Bora! Adoro sair", type: "A" },
      { text: "Deixa eu ver se não tenho nada", type: "B" },
      { text: "Ai, tenho que me arrumar...", type: "C" },
      { text: "Invento desculpa pra ficar em casa", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você definiria sua preguiça como...",
    options: [
      { text: "Inexistente, sou produtivo(a)", type: "A" },
      { text: "Normal, todo mundo tem um pouco", type: "B" },
      { text: "Considerável, mas funciono", type: "C" },
      { text: "Arte, elevei a preguiça a outro nível", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Produtivo",
    emoji: "⚡",
    percentage: 20,
    description: "Você é O Produtivo! Preguiça não existe no seu vocabulário. Acorda cedo, faz exercício, responde mensagens na hora e ainda sobra tempo. Você é a pessoa que os outros invejam (ou acham alien)!",
    characteristics: ["Ativo(a)", "Disciplinado(a)", "Energético(a)", "Organizado(a)"],
    advice: "Sua energia é admirável! Mas não esquece de descansar também. Uma preguicinha de vez em quando faz bem pra alma - você não é máquina!",
  },
  B: {
    type: "B",
    title: "O Equilibrado",
    emoji: "⚖️",
    percentage: 45,
    description: "Você é O Equilibrado! Tem seus momentos de preguiça, mas não deixa acumular. Sabe a hora de relaxar e a hora de agir. Você encontrou o segredo do brasileiro médio!",
    characteristics: ["Equilibrado(a)", "Flexível", "Sensato(a)", "Adaptável"],
    advice: "Você acertou a dose! Continue assim, sabendo dosar produtividade e descanso. A vida é sobre equilíbrio mesmo.",
  },
  C: {
    type: "C",
    title: "O Preguiçoso Funcional",
    emoji: "🦥",
    percentage: 75,
    description: "Você é O Preguiçoso Funcional! A preguiça é sua companheira, mas você ainda dá conta do recado. Deixa pra depois, mas faz. Adia, mas entrega. É a arte de fazer o mínimo viável!",
    characteristics: ["Relaxado(a)", "Criativo(a)", "Procrastinador(a)", "Sobrevivente"],
    advice: "Você domina a arte do 'depois eu faço'. Só cuidado pra 'depois' não virar 'nunca'. Um pouquinho de disciplina pode ajudar!",
  },
  D: {
    type: "D",
    title: "O Mestre da Preguiça",
    emoji: "😴",
    percentage: 95,
    description: "Você é O Mestre da Preguiça! Elevou o ócio a uma forma de arte. Sua cama é seu templo, delivery é seu melhor amigo, e 'pra que fazer hoje o que posso fazer amanhã?' é seu mantra!",
    characteristics: ["Expert em conforto", "Criativo(a) pra evitar esforço", "Zen demais", "Especialista em relaxar"],
    advice: "Sua dedicação ao descanso é impressionante! Mas de vez em quando, a vida exige movimento. Tenta colocar uma meta pequenininha por dia - vai com calma!",
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
