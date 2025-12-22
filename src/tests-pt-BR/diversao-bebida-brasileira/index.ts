// Qual Bebida Brasileira Você Seria?
// Descubra qual bebida típica do Brasil representa sua essência!

export const questions = [
  {
    id: 1,
    question: "Como você é em uma festa?",
    options: [
      { text: "O/A animador(a), faço a festa acontecer", type: "A" },
      { text: "O/A sofisticado(a), aprecio com calma", type: "B" },
      { text: "O/A energético(a), sempre em movimento", type: "C" },
      { text: "O/A tranquilo(a), curto no meu canto", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua hora favorita do dia?",
    options: [
      { text: "Fim de tarde, hora do happy hour", type: "A" },
      { text: "Noite, para apreciar com calma", type: "B" },
      { text: "Manhã, para começar o dia com energia", type: "C" },
      { text: "Qualquer hora de descanso", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com o calor brasileiro?",
    options: [
      { text: "Procuro algo refrescante imediatamente", type: "A" },
      { text: "Prefiro ambientes climatizados", type: "B" },
      { text: "Bebo algo energizante e sigo em frente", type: "C" },
      { text: "Relaxo na sombra e aproveito", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual sua personalidade social?",
    options: [
      { text: "Festeiro(a) e popular", type: "A" },
      { text: "Seletivo(a) e refinado(a)", type: "B" },
      { text: "Dinâmico(a) e versátil", type: "C" },
      { text: "Tranquilo(a) e acessível", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que as pessoas mais admiram em você?",
    options: [
      { text: "Minha capacidade de animar", type: "A" },
      { text: "Meu bom gosto e refinamento", type: "B" },
      { text: "Minha energia e disposição", type: "C" },
      { text: "Minha simpatia e acessibilidade", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual ambiente mais combina com você?",
    options: [
      { text: "Bar animado ou festa", type: "A" },
      { text: "Restaurante elegante ou lounge", type: "B" },
      { text: "Academia ou trabalho", type: "C" },
      { text: "Casa ou boteco simples", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você se sente pela manhã?",
    options: [
      { text: "Precisando me recuperar...", type: "A" },
      { text: "Pronto(a) para um bom café", type: "B" },
      { text: "Cheio(a) de energia!", type: "C" },
      { text: "Tranquilo(a), sem pressa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que te define melhor?",
    options: [
      { text: "Intenso(a) e marcante", type: "A" },
      { text: "Equilibrado(a) e harmonioso(a)", type: "B" },
      { text: "Estimulante e vibrante", type: "C" },
      { text: "Simples e genuíno(a)", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual sua relação com tradições?",
    options: [
      { text: "Amo tradições festivas!", type: "A" },
      { text: "Aprecio tradições refinadas", type: "B" },
      { text: "Prefiro coisas modernas", type: "C" },
      { text: "Valorizo tradições simples", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você relaxa?",
    options: [
      { text: "Com amigos e diversão", type: "A" },
      { text: "Com boa música e algo especial", type: "B" },
      { text: "Me exercitando ou em atividade", type: "C" },
      { text: "Em casa, na paz", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual seu lema de vida?",
    options: [
      { text: "Viver é celebrar!", type: "A" },
      { text: "Qualidade acima de quantidade", type: "B" },
      { text: "Energia e foco sempre!", type: "C" },
      { text: "Simplicidade é a chave", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que você combina melhor?",
    options: [
      { text: "Comida de boteco e festa", type: "A" },
      { text: "Boa gastronomia e conversas", type: "B" },
      { text: "Produtividade e movimento", type: "C" },
      { text: "Qualquer coisa, sou versátil", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Caipirinha",
    emoji: "🍹",
    description: "Você é a Caipirinha! Refrescante, festeira e a cara do Brasil. Assim como o drink mais famoso do país, você é presença garantida em qualquer celebração e deixa tudo mais animado!",
    traits: ["Festeiro(a)", "Refrescante", "Popular", "Marcante"],
    strengths: ["Capacidade de animar", "Ser adorado(a) por todos", "Presença marcante", "Versatilidade"],
    weaknesses: ["Pode ser intenso(a) demais", "Às vezes exagera", "Dificuldade em ser discreto(a)"],
    tips: ["Saiba a hora de parar", "Nem sempre é hora de festa", "Cuide de si também"],
  },
  B: {
    type: "B",
    title: "Cachaça Premium",
    emoji: "🥃",
    description: "Você é a Cachaça Premium! Sofisticado(a), complexo(a) e de qualidade superior. Assim como as melhores cachaças artesanais, você é para paladares refinados que sabem apreciar!",
    traits: ["Sofisticado(a)", "Complexo(a)", "Refinado(a)", "Seletivo(a)"],
    strengths: ["Qualidade inegável", "Profundidade de caráter", "Bom gosto", "Exclusividade"],
    weaknesses: ["Pode parecer elitista", "Dificuldade em ser popular", "Às vezes inacessível"],
    tips: ["Seja mais acessível", "Nem todos precisam te entender", "Simplicidade também é virtude"],
  },
  C: {
    type: "C",
    title: "Guaraná",
    emoji: "⚡",
    description: "Você é o Guaraná! Energético(a), brasileiro(a) até a alma e sempre em movimento. Assim como essa bebida amazônica, você dá energia para todos ao redor e nunca para!",
    traits: ["Energético(a)", "Dinâmico(a)", "Brasileiro(a)", "Estimulante"],
    strengths: ["Energia natural", "Capacidade de motivar", "Estar sempre ativo(a)", "Positividade"],
    weaknesses: ["Pode ser hiperativo(a)", "Dificuldade em relaxar", "Às vezes cansativo(a)"],
    tips: ["Descanse quando precisar", "Energia também se repõe", "Calma também é produtiva"],
  },
  D: {
    type: "D",
    title: "Café Brasileiro",
    emoji: "☕",
    description: "Você é o Café! Simples, essencial e amado por todos. Assim como o cafezinho que une o Brasil de ponta a ponta, você é acessível, confortável e indispensável no dia a dia!",
    traits: ["Simples", "Essencial", "Acolhedor(a)", "Democrático(a)"],
    strengths: ["Acessibilidade", "Ser indispensável", "Conforto que traz", "Versatilidade"],
    weaknesses: ["Pode parecer comum", "Às vezes subestimado(a)", "Dificuldade em se destacar"],
    tips: ["Você é mais especial do que pensa", "Valorize suas qualidades", "Simplicidade é sua força"],
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
