// Tipo no Restaurante
// Descubra que tipo de cliente você é no restaurante!

export const questions = [
  {
    id: 1,
    question: "Chegando no restaurante, você...",
    options: [
      { text: "Já sei o que vou pedir antes de sentar", type: "A" },
      { text: "Peço o cardápio e analiso com calma", type: "B" },
      { text: "Pergunto pro garçom o que ele indica", type: "C" },
      { text: "Vejo o que os outros pediram e copio", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O prato chega diferente do que você imaginava. Você...",
    options: [
      { text: "Chamo o garçom na hora e reclamo", type: "A" },
      { text: "Como assim mesmo, não quero confusão", type: "B" },
      { text: "Peço gentilmente pra trocar ou ajustar", type: "C" },
      { text: "Tiro foto pro Instagram e reclamao depois", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Na hora de dividir a conta, você...",
    options: [
      { text: "Prefiro que cada um pague o seu", type: "A" },
      { text: "Divido igual, mais prático", type: "B" },
      { text: "Deixo alguém organizar e só pago", type: "C" },
      { text: "Sempre acabo pagando mais, fazer o quê", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O restaurante tá cheio e não tem mesa. Você...",
    options: [
      { text: "Vou embora, não espero por nada", type: "A" },
      { text: "Espero um pouco se valer a pena", type: "B" },
      { text: "Tomo algo no bar enquanto aguardo", type: "C" },
      { text: "Fico conversando com a galera, nem ligo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O rodízio de pizza/churrasco chegou. Você...",
    options: [
      { text: "Foco nas minhas favoritas e ignoro o resto", type: "A" },
      { text: "Experimento de tudo um pouco", type: "B" },
      { text: "Como como se não houvesse amanhã", type: "C" },
      { text: "Fico conversando e esqueço de comer", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você escolhe um restaurante novo?",
    options: [
      { text: "Pesquiso reviews e notas no Google/iFood", type: "A" },
      { text: "Indicação de amigos ou família", type: "B" },
      { text: "Passo na frente e pareço interessante, entro", type: "C" },
      { text: "Vou onde a galera decidir ir", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Na hora da sobremesa, você...",
    options: [
      { text: "Pulo, já comi demais", type: "A" },
      { text: "Peço se tiver algo que eu goste muito", type: "B" },
      { text: "Sempre! É a melhor parte", type: "C" },
      { text: "Divido com alguém, pra não exagerar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O garçom demora pra atender. Você...",
    options: [
      { text: "Faço sinal insistente até ele vir", type: "A" },
      { text: "Espero pacientemente, deve estar corrido", type: "B" },
      { text: "Vou até o balcão pedir", type: "C" },
      { text: "Continuo conversando, não tô com pressa", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Na hora de dar gorjeta, você...",
    options: [
      { text: "Dou os 10% se o serviço foi bom", type: "A" },
      { text: "Arredondo pra cima, generosamente", type: "B" },
      { text: "Depende muito do atendimento", type: "C" },
      { text: "Esqueço às vezes, confesso", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você define sua experiência ideal no restaurante como...",
    options: [
      { text: "Comida boa e atendimento rápido", type: "A" },
      { text: "Ambiente agradável e comida saborosa", type: "B" },
      { text: "Boa companhia, o resto é detalhe", type: "C" },
      { text: "Experiência completa: comida, ambiente e vibe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Cliente Exigente",
    emoji: "🧐",
    percentage: 85,
    description: "Você é O Cliente Exigente! Sabe o que quer, conhece seus direitos e não aceita menos que o melhor. Garçons te temem, mas te respeitam. Você é o crítico gastronômico que todo restaurante precisa!",
    characteristics: ["Criterioso(a)", "Decidido(a)", "Assertivo(a)", "Conhecedor(a)"],
    advice: "Sua exigência mantém a qualidade alta! Mas lembre-se que erros acontecem - às vezes um pouco de paciência pode transformar uma experiência ruim em boa.",
  },
  B: {
    type: "B",
    title: "O Cliente Tranquilo",
    emoji: "😌",
    percentage: 75,
    description: "Você é O Cliente Tranquilo! Aprecia uma boa refeição sem stress. Não reclama à toa, mas também sabe reconhecer quando algo está bom. Você é o sonho de todo garçom!",
    characteristics: ["Paciente", "Educado(a)", "Equilibrado(a)", "Agradável"],
    advice: "Sua tranquilidade é admirável! Só não deixe de expressar quando algo não está bom - feedback construtivo ajuda os restaurantes a melhorar.",
  },
  C: {
    type: "C",
    title: "O Explorador Gastronômico",
    emoji: "🍽️",
    percentage: 90,
    description: "Você é O Explorador Gastronômico! Adora experimentar, perguntar, conhecer. Cada restaurante é uma aventura, cada prato uma descoberta. Você coleciona experiências culinárias!",
    characteristics: ["Curioso(a)", "Aventureiro(a)", "Comunicativo(a)", "Entusiasta"],
    advice: "Sua curiosidade gastronômica é inspiradora! Continue explorando e compartilhando suas descobertas - você é um guia natural!",
  },
  D: {
    type: "D",
    title: "O Social do Restaurante",
    emoji: "🗣️",
    percentage: 80,
    description: "Você é O Social do Restaurante! Pra você, restaurante é sobre a companhia, não só a comida. Pode ser boteco ou fine dining - se a conversa for boa, tá perfeito!",
    characteristics: ["Sociável", "Descontraído(a)", "Flexível", "Bem-humorado(a)"],
    advice: "Sua energia social transforma qualquer refeição em festa! Só não esquece de prestar atenção no menu também - às vezes a comida merece sua atenção.",
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
