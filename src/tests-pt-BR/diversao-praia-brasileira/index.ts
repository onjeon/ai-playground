// Qual Praia Brasileira Combina com Você?
// Descubra qual praia do Brasil é a sua cara!

export const questions = [
  {
    id: 1,
    question: "Como você prefere curtir a praia?",
    options: [
      { text: "Com muito agito, música e gente bonita", type: "A" },
      { text: "Tranquila, com natureza preservada", type: "B" },
      { text: "Com esportes e aventura", type: "C" },
      { text: "Relaxando, sem pressa nenhuma", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual estrutura você precisa na praia?",
    options: [
      { text: "Quiosques, vendedores, banheiros", type: "A" },
      { text: "Mínima, só a natureza basta", type: "B" },
      { text: "Estrutura para esportes aquáticos", type: "C" },
      { text: "Uma boa barraca e sombra", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Com quem você prefere ir à praia?",
    options: [
      { text: "Com a galera toda, quanto mais melhor", type: "A" },
      { text: "Sozinho(a) ou com poucos amigos", type: "B" },
      { text: "Com amigos que curtem aventura", type: "C" },
      { text: "Com a família, tranquilo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que não pode faltar na sua praia?",
    options: [
      { text: "Cerveja gelada e petiscos", type: "A" },
      { text: "Água cristalina e natureza intocada", type: "B" },
      { text: "Ondas boas para surf ou windsurf", type: "C" },
      { text: "Águas calmas e mornas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual seu horário favorito na praia?",
    options: [
      { text: "Meio-dia, quando está lotado e animado", type: "A" },
      { text: "Bem cedo, quando está vazio", type: "B" },
      { text: "Quando o vento está perfeito para esportes", type: "C" },
      { text: "Fim de tarde, para ver o pôr do sol", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se desloca para a praia?",
    options: [
      { text: "Vou de carro ou transporte público, fácil", type: "A" },
      { text: "Encaro trilha se precisar", type: "B" },
      { text: "Levo todo meu equipamento esportivo", type: "C" },
      { text: "Prefiro estar hospedado pertinho", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que mais te atrai em uma praia?",
    options: [
      { text: "A vida social e o movimento", type: "A" },
      { text: "A beleza natural preservada", type: "B" },
      { text: "As condições para esportes", type: "C" },
      { text: "A paz e o relaxamento", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual comida de praia você prefere?",
    options: [
      { text: "Camarão, caipirinha, tudo do vendedor", type: "A" },
      { text: "Levo minha própria comida saudável", type: "B" },
      { text: "Algo rápido e energético", type: "C" },
      { text: "Moqueca no restaurante da praia", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você faz na água?",
    options: [
      { text: "Fico batendo papo com os amigos", type: "A" },
      { text: "Mergulho para ver peixes e corais", type: "B" },
      { text: "Surfo, nado, faço standup paddle", type: "C" },
      { text: "Relaxo boiando ou nas ondas calmas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual é sua maior preocupação na praia?",
    options: [
      { text: "O bronze e a aparência", type: "A" },
      { text: "A preservação do ambiente", type: "B" },
      { text: "As condições climáticas para esportes", type: "C" },
      { text: "Ter uma boa sombra e conforto", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você volta da praia?",
    options: [
      { text: "Passo em algum lugar para estender a festa", type: "A" },
      { text: "Direto pra casa, satisfeito com a natureza", type: "B" },
      { text: "Cansado(a) mas feliz com a atividade", type: "C" },
      { text: "Relaxado(a) e pronto(a) para descansar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual é a praia dos seus sonhos?",
    options: [
      { text: "Famosa, com muita gente e agito", type: "A" },
      { text: "Deserta, só eu e a natureza", type: "B" },
      { text: "Perfeita para meu esporte favorito", type: "C" },
      { text: "Paradisíaca e super relaxante", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Ipanema/Leblon (RJ)",
    emoji: "🏖️",
    description: "Sua praia é Ipanema ou Leblon! Você adora o agito, a vida social e o glamour carioca. Assim como essas praias icônicas, você gosta de ver e ser visto(a), sempre no meio da ação!",
    traits: ["Sociável", "Estiloso(a)", "Urbano(a)", "Animado(a)"],
    strengths: ["Facilidade social", "Estar sempre atualizado(a)", "Energia para agito", "Networking natural"],
    weaknesses: ["Pode ser superficial", "Dependência de validação", "Dificuldade em desacelerar"],
    tips: ["Busque momentos de quietude", "Nem tudo é aparência", "Aprecie a natureza também"],
  },
  B: {
    type: "B",
    title: "Fernando de Noronha (PE)",
    emoji: "🐢",
    description: "Sua praia é Fernando de Noronha! Você valoriza a natureza preservada, a paz e experiências autênticas. Assim como esse paraíso ecológico, você busca o que é genuíno e intocado!",
    traits: ["Consciente", "Autêntico(a)", "Reservado(a)", "Apreciador(a)"],
    strengths: ["Consciência ambiental", "Apreciação da natureza", "Busca por autenticidade", "Autoconhecimento"],
    weaknesses: ["Pode ser elitista", "Dificuldade com multidões", "Às vezes distante demais"],
    tips: ["Aceite também os lugares populares", "Conecte-se mais com pessoas", "Nem todo agito é superficial"],
  },
  C: {
    type: "C",
    title: "Jericoacoara (CE)",
    emoji: "🏄",
    description: "Sua praia é Jericoacoara! Você ama aventura, esportes e emoção. Assim como a meca do windsurf brasileiro, você está sempre buscando a próxima onda de adrenalina!",
    traits: ["Aventureiro(a)", "Esportivo(a)", "Energético(a)", "Destemido(a)"],
    strengths: ["Disposição física", "Busca por aventura", "Coragem", "Vida ativa"],
    weaknesses: ["Pode ser inquieto(a)", "Dificuldade em relaxar", "Competitividade excessiva"],
    tips: ["Reserve tempo para descanso", "Nem tudo precisa ser competição", "Aprecie também a calmaria"],
  },
  D: {
    type: "D",
    title: "Praia do Forte (BA)",
    emoji: "🌴",
    description: "Sua praia é Praia do Forte! Você busca relaxamento, conforto e paz. Assim como esse destino baiano de águas mornas e calmas, você valoriza tranquilidade e momentos de descanso!",
    traits: ["Relaxado(a)", "Tranquilo(a)", "Familiar", "Confortável"],
    strengths: ["Capacidade de relaxar", "Valorização do descanso", "Equilíbrio", "Boa companhia"],
    weaknesses: ["Pode parecer preguiçoso(a)", "Dificuldade com agitação", "Acomodação"],
    tips: ["Experimente novas aventuras", "Um pouco de agito faz bem", "Saia da zona de conforto às vezes"],
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
