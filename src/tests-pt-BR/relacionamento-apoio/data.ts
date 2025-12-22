// Como Você Oferece Apoio
// Descubra seu estilo de dar suporte no relacionamento!

export const questions = [
  {
    id: 1,
    question: "Seu parceiro(a) chega em casa depois de um dia péssimo no trabalho. O que você faz primeiro?",
    options: [
      { text: "Pergunto o que aconteceu e deixo desabafar à vontade", type: "A" },
      { text: "Já puxo pro abraço e faço carinho sem perguntar nada", type: "B" },
      { text: "Começo a pensar em soluções práticas pro problema", type: "C" },
      { text: "Preparo o jantar favorito e deixo o ambiente acolhedor", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Quando a pessoa que você ama está passando por uma fase difícil, você:",
    options: [
      { text: "Fico disponível pra conversar a qualquer hora", type: "A" },
      { text: "Aumento o carinho físico - mais beijos, mais abraços", type: "B" },
      { text: "Pesquiso sobre o problema e trago informações úteis", type: "C" },
      { text: "Assumo tarefas do dia a dia pra aliviar a carga", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu amor está ansioso(a) com uma prova importante. Como você ajuda?",
    options: [
      { text: "Encorajo com palavras de confiança e incentivo", type: "A" },
      { text: "Fico do lado, fazendo companhia enquanto estuda", type: "B" },
      { text: "Ajudo a montar um plano de estudos eficiente", type: "C" },
      { text: "Cuido de tudo em casa pra poder focar nos estudos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando seu parceiro(a) recebe uma notícia ruim, você normalmente:",
    options: [
      { text: "Ouço tudo com atenção e valido os sentimentos", type: "A" },
      { text: "Abraço forte e deixo chorar no meu ombro", type: "B" },
      { text: "Tento entender a situação pra ajudar a resolver", type: "C" },
      { text: "Faço coisas práticas pra mostrar que estou ali", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seu amor está doente em casa. Qual sua primeira atitude?",
    options: [
      { text: "Fico conversando e fazendo companhia", type: "A" },
      { text: "Deito junto fazendo carinho até melhorar", type: "B" },
      { text: "Corro pra farmácia e marco médico se precisar", type: "C" },
      { text: "Faço sopinha, chá e cuido de tudo em casa", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando a pessoa que você ama está insegura, você:",
    options: [
      { text: "Reforço todas as qualidades e o quanto admiro", type: "A" },
      { text: "Fico grudado(a) mostrando afeto constante", type: "B" },
      { text: "Ajudo a ver a situação de forma mais racional", type: "C" },
      { text: "Mostro através de atitudes que pode contar comigo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu parceiro(a) perdeu o emprego. Como você reage?",
    options: [
      { text: "Converso sobre sentimentos e tranquilizo", type: "A" },
      { text: "Dou muito carinho pra não se sentir sozinho(a)", type: "B" },
      { text: "Ajudo a atualizar currículo e procurar vagas", type: "C" },
      { text: "Reorganizo as finanças e assumo mais responsabilidades", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando seu amor está estressado(a), você prefere:",
    options: [
      { text: "Ser um ouvido atento e paciente", type: "A" },
      { text: "Oferecer massagem e momentos de relaxamento juntos", type: "B" },
      { text: "Ajudar a organizar e priorizar as tarefas pendentes", type: "C" },
      { text: "Resolver algumas coisas sem ser pedido(a)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seu parceiro(a) está triste mas não quer falar. O que você faz?",
    options: [
      { text: "Digo que estou ali quando quiser conversar", type: "A" },
      { text: "Fico por perto em silêncio, só fazendo carinho", type: "B" },
      { text: "Sugiro atividades que possam ajudar a distrair", type: "C" },
      { text: "Faço as coisas que sei que deixam feliz", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase melhor define seu jeito de apoiar?",
    options: [
      { text: "Estou aqui pra te ouvir, pode desabafar", type: "A" },
      { text: "Vem cá que eu te abraço", type: "B" },
      { text: "Vamos resolver isso juntos, tenho algumas ideias", type: "C" },
      { text: "Deixa que eu cuido de tudo, você só descansa", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Apoiador(a) Emocional",
    emoji: "💬",
    percentage: 92,
    description: "Você oferece apoio através da escuta ativa e do acolhimento emocional! Sabe que às vezes a pessoa só precisa desabafar e ser ouvida sem julgamentos. Suas palavras de conforto e incentivo fazem toda diferença!",
    characteristics: ["Excelente ouvinte", "Empático(a)", "Paciente", "Acolhedor(a)"],
    advice: "Seu apoio emocional é valioso, mas lembre-se que algumas pessoas também precisam de ajuda prática. Às vezes, além de ouvir, ofereça soluções concretas se a pessoa pedir!",
  },
  B: {
    type: "B",
    title: "Apoiador(a) Físico",
    emoji: "🤗",
    percentage: 88,
    description: "Você oferece apoio através do carinho e da presença física! Acredita no poder do abraço, do cafuné e de simplesmente estar ali junto. Sua presença afetuosa é um porto seguro!",
    characteristics: ["Carinhoso(a)", "Presente", "Afetuoso(a)", "Reconfortante"],
    advice: "Seu carinho é maravilhoso, mas algumas pessoas processam melhor através de conversa. Pergunte como pode ajudar - às vezes a pessoa precisa falar mais do que de abraços!",
  },
  C: {
    type: "C",
    title: "Apoiador(a) Prático",
    emoji: "🔧",
    percentage: 85,
    description: "Você oferece apoio através de soluções e ações concretas! Quando alguém tem um problema, você já pensa em como resolver. Seu lado prático traz resultados reais!",
    characteristics: ["Resolutivo(a)", "Analítico(a)", "Proativo(a)", "Eficiente"],
    advice: "Sua ajuda prática é muito valiosa, mas às vezes a pessoa só quer desabafar. Antes de entrar no modo solução, pergunte: 'Você quer que eu te ajude a resolver ou só quer que eu te ouça?'",
  },
  D: {
    type: "D",
    title: "Apoiador(a) Cuidador",
    emoji: "🍲",
    percentage: 80,
    description: "Você oferece apoio através de atos de cuidado e serviço! Demonstra amor cuidando das necessidades práticas do dia a dia, aliviando a carga da pessoa amada com gestos concretos de carinho!",
    characteristics: ["Atencioso(a)", "Dedicado(a)", "Prestativo(a)", "Protetor(a)"],
    advice: "Seus cuidados são lindos, mas cuidado pra não se sobrecarregar assumindo tudo. Lembre-se também de perguntar o que a pessoa precisa - às vezes ela só quer conversar!",
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
