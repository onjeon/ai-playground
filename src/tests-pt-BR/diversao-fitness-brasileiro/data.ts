// Qual Seu Estilo Fitness Brasileiro?
// Descubra como você se relaciona com exercícios!

export const questions = [
  {
    id: 1,
    question: "Qual sua relação atual com exercícios?",
    options: [
      { text: "Treino todo dia, é minha vida", type: "A" },
      { text: "Faço regularmente, com disciplina", type: "B" },
      { text: "Vou e volto, depende da fase", type: "C" },
      { text: "Academia? Só se tiver ar-condicionado", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu exercício favorito seria...",
    options: [
      { text: "Musculação pesada, hipertrofia é meta", type: "A" },
      { text: "Corrida na orla ou parque", type: "B" },
      { text: "Futebol, vôlei ou esporte coletivo", type: "C" },
      { text: "Caminhada leve até a padaria conta?", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você se motiva pra treinar?",
    options: [
      { text: "O espelho e os resultados me motivam", type: "A" },
      { text: "Saúde e bem-estar são prioridade", type: "B" },
      { text: "Só quando tenho companhia", type: "C" },
      { text: "Preciso de muita motivação externa", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Sua alimentação é...",
    options: [
      { text: "Controlada: frango, batata doce, whey", type: "A" },
      { text: "Equilibrada, mas sem neuras", type: "B" },
      { text: "Como de tudo, mas tento me cuidar", type: "C" },
      { text: "Churrasco, cerveja e açaí gigante", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Domingo de sol, você prefere...",
    options: [
      { text: "Treinar cedo e curtir o dia depois", type: "A" },
      { text: "Pedalar ou correr ao ar livre", type: "B" },
      { text: "Pelada com os amigos", type: "C" },
      { text: "Praia, mas só pra deitar na areia", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual atividade brasileira mais te atrai?",
    options: [
      { text: "Crossfit ou treino funcional pesado", type: "A" },
      { text: "Corrida de rua ou ciclismo", type: "B" },
      { text: "Futevôlei ou beach tennis", type: "C" },
      { text: "Altinha na praia (bem de leve)", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu look de exercício é...",
    options: [
      { text: "Roupas técnicas de marca, tudo combinando", type: "A" },
      { text: "Funcional, confortável e prático", type: "B" },
      { text: "Qualquer coisa, o importante é jogar", type: "C" },
      { text: "Chinelo e bermuda servem, né?", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Suas metas fitness são...",
    options: [
      { text: "Definidas, com prazos e métricas", type: "A" },
      { text: "Manter saúde e disposição", type: "B" },
      { text: "Me divertir e socializar", type: "C" },
      { text: "Sobreviver sem cansar na escada", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você lida com o verão brasileiro?",
    options: [
      { text: "Projeto verão começa em março", type: "A" },
      { text: "Mantenho o ritmo normal de treino", type: "B" },
      { text: "Aumento as atividades na praia", type: "C" },
      { text: "Foco em manter hidratado (com cerveja)", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Seu personal trainer ideal seria...",
    options: [
      { text: "Intenso, que puxa até o limite", type: "A" },
      { text: "Equilibrado, focado em saúde", type: "B" },
      { text: "Divertido, que faz o tempo passar", type: "C" },
      { text: "Não preciso, só preciso de motivação", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Maromba",
    emoji: "💪",
    percentage: 95,
    description: "Você é O Maromba! Treino é religião, dieta é lei, e o espelho é seu melhor amigo. Seu comprometimento é de dar inveja e os resultados falam por si!",
    characteristics: ["Dedicado(a)", "Disciplinado(a)", "Focado(a)", "Determinado(a)"],
    advice: "Sua dedicação é inspiradora! Mas lembre-se de que descanso também é parte do treino. E às vezes, um churrasquinho não vai destruir seus ganhos!",
  },
  B: {
    type: "B",
    title: "O Saudável",
    emoji: "🏃",
    percentage: 80,
    description: "Você é O Saudável! Exercício faz parte da sua rotina por amor à saúde, não por obsessão. Você encontrou o equilíbrio perfeito entre cuidado e prazer!",
    characteristics: ["Equilibrado(a)", "Consistente", "Consciente", "Motivado(a)"],
    advice: "Seu equilíbrio é invejável! Continue assim, mantendo a consistência sem extremos. Você é exemplo de que saúde não precisa ser sofrimento.",
  },
  C: {
    type: "C",
    title: "O Esportista Social",
    emoji: "⚽",
    percentage: 70,
    description: "Você é O Esportista Social! Exercício pra você tem que ter galera, diversão e de preferência uma cerveja depois. Pelada, vôlei, futevôlei - seu negócio é coletivo!",
    characteristics: ["Social", "Divertido(a)", "Competitivo(a)", "Descontraído(a)"],
    advice: "Unir exercício com amizade é genial! Mas considere adicionar alguma atividade individual para os dias que a galera não aparecer.",
  },
  D: {
    type: "D",
    title: "O Sedentário Assumido",
    emoji: "🛋️",
    percentage: 40,
    description: "Você é O Sedentário Assumido! E tudo bem, pelo menos você é honesto(a)! Exercício não é sua praia (literalmente, você prefere só deitar na areia). Mas nunca é tarde!",
    characteristics: ["Honesto(a)", "Relaxado(a)", "Bem-humorado(a)", "Realista"],
    advice: "Sua honestidade é refrescante! Mas que tal começar com algo leve? Uma caminhada, uma dança, qualquer movimento. Seu corpo vai agradecer!",
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
