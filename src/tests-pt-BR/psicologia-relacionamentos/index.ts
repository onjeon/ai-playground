// Teste de Habilidades em Relacionamentos
// Descubra como você se relaciona com os outros!

export const questions = [
  {
    id: 1,
    question: "Você mantém amizades de longo prazo?",
    options: [
      { text: "Sim, tenho amigos de décadas", type: "A" },
      { text: "Algumas amizades duram, outras não", type: "B" },
      { text: "Tenho dificuldade em manter amizades", type: "C" },
      { text: "Minhas amizades geralmente são curtas", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você expressa seus sentimentos em relacionamentos?",
    options: [
      { text: "Sim, de forma clara e saudável", type: "A" },
      { text: "Geralmente consigo expressar", type: "B" },
      { text: "Tenho dificuldade em me abrir", type: "C" },
      { text: "Guardo tudo para mim", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com conflitos em relacionamentos?",
    options: [
      { text: "Busco diálogo e resolução", type: "A" },
      { text: "Tento resolver, às vezes com dificuldade", type: "B" },
      { text: "Evito conflitos a todo custo", type: "C" },
      { text: "Conflitos geralmente acabam mal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você consegue estabelecer limites saudáveis?",
    options: [
      { text: "Sim, comunico meus limites claramente", type: "A" },
      { text: "Na maioria das vezes", type: "B" },
      { text: "Tenho dificuldade em dizer não", type: "C" },
      { text: "Não consigo estabelecer limites", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você demonstra carinho e apreciação pelos outros?",
    options: [
      { text: "Sim, expresso frequentemente", type: "A" },
      { text: "Geralmente demonstro", type: "B" },
      { text: "Tenho dificuldade em expressar carinho", type: "C" },
      { text: "Raramente demonstro afeto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você escuta de verdade quando alguém fala?",
    options: [
      { text: "Sim, pratico escuta ativa", type: "A" },
      { text: "Geralmente escuto bem", type: "B" },
      { text: "Às vezes me distraio ou penso na resposta", type: "C" },
      { text: "Admito que não escuto bem", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você confia facilmente em outras pessoas?",
    options: [
      { text: "Confio com sabedoria, sem extremos", type: "A" },
      { text: "Geralmente confio em pessoas boas", type: "B" },
      { text: "Tenho dificuldade em confiar", type: "C" },
      { text: "Não confio em quase ninguém", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você perdoa quando alguém te machuca?",
    options: [
      { text: "Sim, o perdão é libertador", type: "A" },
      { text: "Eventualmente perdoo", type: "B" },
      { text: "Tenho muita dificuldade em perdoar", type: "C" },
      { text: "Guardo rancor por muito tempo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você está presente para pessoas importantes na sua vida?",
    options: [
      { text: "Sim, priorizo estar disponível", type: "A" },
      { text: "Geralmente estou presente", type: "B" },
      { text: "Nem sempre consigo estar", type: "C" },
      { text: "Estou frequentemente ausente", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você assume responsabilidade quando erra em relacionamentos?",
    options: [
      { text: "Sim, peço desculpas genuínas", type: "A" },
      { text: "Geralmente assumo meus erros", type: "B" },
      { text: "Tenho dificuldade em admitir erros", type: "C" },
      { text: "Raramente assumo culpa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você se sente satisfeito com seus relacionamentos atuais?",
    options: [
      { text: "Sim, tenho relações saudáveis e satisfatórias", type: "A" },
      { text: "Em geral sim, com alguns desafios", type: "B" },
      { text: "Não muito, há muitos problemas", type: "C" },
      { text: "Não, meus relacionamentos são difíceis", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria suas habilidades em relacionamentos?",
    options: [
      { text: "Excelentes, me relaciono bem", type: "A" },
      { text: "Boas, com espaço para melhorar", type: "B" },
      { text: "Medianas, tenho dificuldades", type: "C" },
      { text: "Fracas, relacionamentos são difíceis", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Excelente em Relacionamentos",
    emoji: "💕",
    description: "Você tem excelentes habilidades em relacionamentos! Sabe se comunicar, estabelecer limites, expressar carinho e resolver conflitos de forma saudável.",
    traits: ["Conectado", "Comunicativo", "Empático", "Saudável"],
    strengths: ["Relacionamentos duradouros", "Comunicação efetiva", "Resolução de conflitos", "Bem-estar emocional"],
    weaknesses: ["Pode se doar demais", "Expectativas altas dos outros"],
    tips: ["Continue cultivando suas relações", "Mantenha o equilíbrio entre dar e receber", "Ajude outros a melhorarem suas habilidades"],
  },
  B: {
    type: "B",
    title: "Bom em Relacionamentos",
    emoji: "🤝",
    description: "Você tem boas habilidades em relacionamentos, com espaço para desenvolvimento. Consegue manter relações, embora enfrente alguns desafios.",
    traits: ["Funcional", "Consciente", "Em evolução", "Conectado"],
    strengths: ["Relacionamentos funcionais", "Capacidade de melhoria", "Boa base de habilidades"],
    weaknesses: ["Algumas áreas precisam de atenção", "Comunicação pode melhorar em alguns pontos"],
    tips: ["Identifique suas áreas de dificuldade", "Pratique comunicação não-violenta", "Busque feedback de pessoas próximas"],
  },
  C: {
    type: "C",
    title: "Dificuldades em Relacionamentos",
    emoji: "💔",
    description: "Você enfrenta dificuldades significativas em relacionamentos. Isso pode estar causando solidão e sofrimento. Desenvolver essas habilidades pode transformar sua vida.",
    traits: ["Desconectado", "Conflituoso", "Evitativo", "Em dificuldade"],
    strengths: ["Consciência das dificuldades", "Potencial de crescimento"],
    weaknesses: ["Relacionamentos instáveis", "Comunicação problemática", "Solidão possível"],
    tips: ["Considere terapia para trabalhar essas questões", "Aprenda sobre comunicação saudável", "Relacionamentos se aprendem"],
  },
  D: {
    type: "D",
    title: "Sérias Dificuldades Relacionais",
    emoji: "🆘",
    description: "Você tem sérias dificuldades em relacionamentos. Isso está provavelmente causando muito sofrimento. Buscar ajuda profissional é muito importante.",
    traits: ["Muito desconectado", "Conflitos frequentes", "Isolado", "Em sofrimento"],
    strengths: ["Reconhecimento do problema"],
    weaknesses: ["Relacionamentos muito prejudicados", "Solidão e isolamento", "Saúde mental afetada"],
    tips: ["Busque ajuda de um psicólogo urgentemente", "Você pode aprender a se relacionar melhor", "Não precisa ficar assim para sempre"],
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
