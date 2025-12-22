// Como Você Lida com Conflitos?
// Descubra seu estilo de lidar com brigas e desentendimentos no relacionamento!

export const questions = [
  {
    id: 1,
    question: "Seu(sua) parceiro(a) faz algo que te irrita muito. Você...",
    options: [
      { text: "Respiro fundo e converso quando estiver calmo(a)", type: "A" },
      { text: "Falo na hora, mas tento manter a calma", type: "B" },
      { text: "Engulo e fico quieto(a), não vale a pena brigar", type: "C" },
      { text: "Explodo na hora, preciso colocar pra fora", type: "D" },
    ],
  },
  {
    id: 2,
    question: "No meio de uma discussão, você costuma...",
    options: [
      { text: "Ouvir o outro lado e buscar um acordo", type: "A" },
      { text: "Defender meu ponto, mas considerar o do outro", type: "B" },
      { text: "Ceder pra acabar logo com a briga", type: "C" },
      { text: "Insistir que estou certo(a) até o outro concordar", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando percebe que errou numa discussão, você...",
    options: [
      { text: "Admito o erro e peço desculpas sinceras", type: "A" },
      { text: "Peço desculpas, mas justifico minha reação", type: "B" },
      { text: "Fico quieto(a), espero o tempo resolver", type: "C" },
      { text: "Tenho dificuldade em admitir, orgulho fala mais alto", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Vocês discutem. Como fica o resto do dia?",
    options: [
      { text: "Resolvemos e seguimos normal", type: "A" },
      { text: "Fica um climinha, mas logo passa", type: "B" },
      { text: "Fico remoendo sozinho(a), mas não falo nada", type: "C" },
      { text: "O clima fica péssimo, dura dias às vezes", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual sua maior dificuldade em conflitos?",
    options: [
      { text: "Nenhuma específica, consigo lidar bem", type: "A" },
      { text: "Manter a calma e não levantar a voz", type: "B" },
      { text: "Falar o que realmente penso e sinto", type: "C" },
      { text: "Não transformar pequenas coisas em guerras", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Seu par traz uma crítica sobre você. Você...",
    options: [
      { text: "Ouço, reflito e agradeço pelo feedback", type: "A" },
      { text: "Ouço, mas me defendo em alguns pontos", type: "B" },
      { text: "Aceito tudo sem questionar, mesmo discordando", type: "C" },
      { text: "Reajo mal, me sinto atacado(a)", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você guarda mágoas de brigas passadas?",
    options: [
      { text: "Não, resolvo e deixo pra trás", type: "A" },
      { text: "Um pouco, mas tento não trazer à tona", type: "B" },
      { text: "Sim, guardo tudo mas não falo nada", type: "C" },
      { text: "Sim, e jogo na cara quando brigo de novo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando o clima esquenta demais, você...",
    options: [
      { text: "Peço uma pausa pra esfriar a cabeça", type: "A" },
      { text: "Continuo, mas tento baixar o tom", type: "B" },
      { text: "Me calo e espero passar", type: "C" },
      { text: "Escalo a briga, falo coisas que depois me arrependo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como vocês fazem as pazes?",
    options: [
      { text: "Conversamos sobre o que aconteceu e resolvemos", type: "A" },
      { text: "Um pede desculpas e segue a vida", type: "B" },
      { text: "Fingimos que nada aconteceu", type: "C" },
      { text: "Demora muito, às vezes nem resolvemos direito", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual frase mais combina com você em conflitos?",
    options: [
      { text: "Vamos resolver juntos, somos um time", type: "A" },
      { text: "Preciso dizer o que penso, mas ouço você também", type: "B" },
      { text: "Prefiro ceder do que brigar", type: "C" },
      { text: "Não vou aceitar isso calado(a)", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mediador(a) Nato(a)",
    emoji: "🕊️",
    percentage: 95,
    description: "Você é um(a) mediador(a) nato(a)! Lida com conflitos de forma madura, busca soluções e consegue manter a calma. Sabe que brigas são normais, mas devem ser construtivas.",
    characteristics: ["Equilibrado(a)", "Maduro(a)", "Comunicativo(a)", "Resolutivo(a)"],
    advice: "Você tem uma habilidade incrível de resolver conflitos! Continue assim, mas não deixe de expressar suas necessidades. Às vezes ser muito 'pacificador' pode fazer você engolir coisas importantes.",
  },
  B: {
    type: "B",
    title: "Combativo(a) Respeitoso(a)",
    emoji: "⚔️",
    percentage: 75,
    description: "Você é combativo(a), mas respeitoso(a). Não foge de conflitos, defende seu ponto, mas sabe ouvir o outro. Às vezes esquenta, mas consegue se controlar.",
    characteristics: ["Assertivo(a)", "Direto(a)", "Passional", "Expressivo(a)"],
    advice: "Sua assertividade é importante! Trabalhe pra não deixar as emoções tomarem conta. Quando sentir que vai explodir, peça uma pausa. Conflito saudável existe!",
  },
  C: {
    type: "C",
    title: "Evitador(a) de Conflitos",
    emoji: "🐢",
    percentage: 55,
    description: "Você evita conflitos a todo custo. Prefere engolir e ceder do que enfrentar uma briga. Isso pode parecer paz, mas os problemas se acumulam por dentro.",
    characteristics: ["Pacifista", "Evitativo(a)", "Acumulador(a)", "Conciliador(a)"],
    advice: "Evitar conflitos não resolve nada - só adia! Aprenda a expressar seu desconforto de forma respeitosa. Pequenas conversas frequentes evitam grandes explosões depois.",
  },
  D: {
    type: "D",
    title: "Explosivo(a)",
    emoji: "🌋",
    percentage: 40,
    description: "Você é explosivo(a) em conflitos! Reage com intensidade, diz coisas no calor do momento e tem dificuldade de controlar as emoções. Isso pode machucar o relacionamento.",
    characteristics: ["Intenso(a)", "Reativo(a)", "Impulsivo(a)", "Passional"],
    advice: "Sua intensidade mostra que se importa, mas a forma de expressar precisa mudar! Quando sentir raiva, saia do ambiente. Conte até 10. Considere terapia pra aprender a regular emoções.",
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
