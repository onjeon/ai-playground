// Qual Seu Perfil de Ano Novo?
// Descubra como você celebra a virada!

export const questions = [
  {
    id: 1,
    question: "Onde você passa o Réveillon?",
    options: [
      { text: "Praia, fogos e multidão", type: "A" },
      { text: "Festa ou casa de família/amigos", type: "B" },
      { text: "Viagem para lugar diferente", type: "C" },
      { text: "Em casa, tranquilo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você usa roupa branca?",
    options: [
      { text: "Com certeza! Tradição é tradição", type: "A" },
      { text: "Sim, pelo menos uma peça branca", type: "B" },
      { text: "Às vezes, depende do destino", type: "C" },
      { text: "Não ligo pra isso", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você faz simpatias de Ano Novo?",
    options: [
      { text: "Todas! Lentilha, romã, pular onda...", type: "A" },
      { text: "Algumas, as mais conhecidas", type: "B" },
      { text: "Uma ou outra por diversão", type: "C" },
      { text: "Não acredito nisso", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que você faz à meia-noite?",
    options: [
      { text: "Pulo, grito, abraço todo mundo", type: "A" },
      { text: "Abraço a família e brindo", type: "B" },
      { text: "Faço um pedido especial", type: "C" },
      { text: "Vejo os fogos e vou dormir", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você faz lista de metas pro ano novo?",
    options: [
      { text: "Sim! Lista enorme e detalhada", type: "A" },
      { text: "Algumas metas principais", type: "B" },
      { text: "Penso sobre, mas não escrevo", type: "C" },
      { text: "Não, nunca cumpro mesmo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é a ceia de Ano Novo?",
    options: [
      { text: "Mesa farta, chester, salpicão, tudo!", type: "A" },
      { text: "Comida boa em família", type: "B" },
      { text: "Algo diferente, às vezes delivery", type: "C" },
      { text: "Como qualquer coisa, não ligo", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você assiste a retrospectiva na TV?",
    options: [
      { text: "Sim, chorando com as músicas", type: "A" },
      { text: "Fica ligada de fundo", type: "B" },
      { text: "Não, prefiro fazer outras coisas", type: "C" },
      { text: "TV? Nem tenho/ligo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você fica acordado até que horas?",
    options: [
      { text: "Varada toda, até o sol nascer", type: "A" },
      { text: "Umas 2-3h da manhã", type: "B" },
      { text: "Logo depois da meia-noite", type: "C" },
      { text: "Durmo antes da virada às vezes", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você se sente no dia 1º de janeiro?",
    options: [
      { text: "Energizado, pronto pro ano!", type: "A" },
      { text: "De ressaca mas feliz", type: "B" },
      { text: "Reflexivo sobre o novo ano", type: "C" },
      { text: "Normal, é só mais um dia", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você acredita que o ano novo muda as coisas?",
    options: [
      { text: "Sim! Energia nova, vida nova", type: "A" },
      { text: "Um pouco, é bom recomeçar", type: "B" },
      { text: "Simbolicamente, sim", type: "C" },
      { text: "Não, é só uma data", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você vai à praia no Réveillon?",
    options: [
      { text: "Sempre! Copacabana, aqui vou eu", type: "A" },
      { text: "Às vezes, quando dá", type: "B" },
      { text: "Prefiro lugares menos cheios", type: "C" },
      { text: "Nunca, odeio multidão", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define no Ano Novo?",
    options: [
      { text: "'Esse ano vai ser diferente!'", type: "A" },
      { text: "'Gratidão pelo ano que passou'", type: "B" },
      { text: "'Novos começos, novas chances'", type: "C" },
      { text: "'É só mais uma virada de calendário'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Festeiro do Réveillon",
    emoji: "🎆",
    description: "Você é o Festeiro do Réveillon! Ano novo é sua festa favorita. Roupa branca, simpatias, praia, fogos... você celebra com toda intensidade e acredita no poder da virada!",
    traits: ["Festeiro(a)", "Otimista", "Tradicional", "Energético(a)"],
    strengths: ["Sabe celebrar", "Energia contagiante", "Esperança renovada"],
    weaknesses: ["Expectativas altas", "Ressaca pesada", "Janeiro difícil"],
    tips: ["Aproveite a energia", "Cuidado com as promessas", "Divirta-se!"],
  },
  B: {
    type: "B",
    title: "Familiar Tradicional",
    emoji: "👨‍👩‍👧‍👦",
    description: "Você é o Familiar Tradicional! Ano novo é momento de família, ceia, abraços e gratidão. Você valoriza as pessoas queridas e celebra com carinho e tradição!",
    traits: ["Familiar", "Tradicional", "Grato(a)", "Afetuoso(a)"],
    strengths: ["Valores familiares", "Gratidão", "Memórias afetivas"],
    weaknesses: ["Pode ser monótono", "Sempre igual", "Depende da família"],
    tips: ["Família é tudo", "Crie novas tradições", "Valorize os momentos"],
  },
  C: {
    type: "C",
    title: "Viajante de Réveillon",
    emoji: "✈️",
    description: "Você é o Viajante de Réveillon! Prefere celebrar em lugares diferentes, criando experiências únicas. Cada virada é uma nova aventura em um novo destino!",
    traits: ["Aventureiro(a)", "Experiencial", "Livre", "Curioso(a)"],
    strengths: ["Experiências únicas", "Flexibilidade", "Memórias incríveis"],
    weaknesses: ["Caro", "Longe da família", "Logística complicada"],
    tips: ["Planeje com antecedência", "Às vezes ficar também é bom", "Registre tudo"],
  },
  D: {
    type: "D",
    title: "Réveillon Zen",
    emoji: "😴",
    description: "Você é o Réveillon Zen! Pra você, ano novo é só mais uma noite. Sem estresse, sem multidões, sem expectativas. Você prefere a tranquilidade à festa!",
    traits: ["Tranquilo(a)", "Realista", "Introvertido(a)", "Desapegado(a)"],
    strengths: ["Sem ressaca", "Paz", "Sem frustração", "Autêntico"],
    weaknesses: ["Pode parecer chato", "Perde a festa", "Isolamento"],
    tips: ["Tudo bem ser assim", "Cada um celebra do seu jeito", "Sua paz é válida"],
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
