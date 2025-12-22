// Teste de Criatividade
// Descubra seu perfil criativo!

export const questions = [
  {
    id: 1,
    question: "Quando enfrenta um problema, você geralmente:",
    options: [
      { text: "Penso em várias soluções diferentes e inusitadas", type: "A" },
      { text: "Busco soluções criativas mas viáveis", type: "B" },
      { text: "Sigo métodos que já funcionaram antes", type: "C" },
      { text: "Peço para alguém mais criativo resolver", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se sente com regras e estruturas?",
    options: [
      { text: "Prefiro quebrar regras e criar as minhas", type: "A" },
      { text: "Adapto regras quando necessário", type: "B" },
      { text: "Sigo as regras na maioria das vezes", type: "C" },
      { text: "Me sinto seguro seguindo estruturas definidas", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você costuma ter ideias novas e originais?",
    options: [
      { text: "Constantemente, minha mente não para", type: "A" },
      { text: "Frequentemente em áreas que me interessam", type: "B" },
      { text: "Às vezes, mas nada muito original", type: "C" },
      { text: "Raramente, não me considero criativo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com a incerteza?",
    options: [
      { text: "Adoro! É onde a criatividade floresce", type: "A" },
      { text: "Me adapto e vejo oportunidades", type: "B" },
      { text: "Prefiro situações mais previsíveis", type: "C" },
      { text: "Me sinto muito desconfortável", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você se considera uma pessoa curiosa?",
    options: [
      { text: "Extremamente! Quero saber de tudo", type: "A" },
      { text: "Sim, em assuntos que me interessam", type: "B" },
      { text: "Moderadamente curioso", type: "C" },
      { text: "Não muito, prefiro o que já conheço", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se expressa artisticamente?",
    options: [
      { text: "De várias formas: música, arte, escrita, etc", type: "A" },
      { text: "Tenho uma ou duas formas de expressão", type: "B" },
      { text: "Aprecio arte mas não crio muito", type: "C" },
      { text: "Não tenho interesse em expressão artística", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você faz conexões entre ideias não relacionadas?",
    options: [
      { text: "O tempo todo! Vejo padrões em tudo", type: "A" },
      { text: "Frequentemente faço associações interessantes", type: "B" },
      { text: "Às vezes percebo conexões", type: "C" },
      { text: "Raramente, penso de forma mais linear", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você reage a ideias malucas ou absurdas?",
    options: [
      { text: "Adoro explorar o absurdo!", type: "A" },
      { text: "Acho interessante e considero", type: "B" },
      { text: "Descarto se não forem práticas", type: "C" },
      { text: "Perda de tempo, prefiro o concreto", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você costuma sonhar acordado ou fantasiar?",
    options: [
      { text: "Constantemente, tenho um mundo interior rico", type: "A" },
      { text: "Com frequência, especialmente quando relaxado", type: "B" },
      { text: "Às vezes, mas prefiro focar no real", type: "C" },
      { text: "Raramente, sou muito pé no chão", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você se sente tentando coisas novas?",
    options: [
      { text: "Adoro! Sou sempre o primeiro a tentar", type: "A" },
      { text: "Gosto quando parece interessante", type: "B" },
      { text: "Prefiro esperar outros testarem primeiro", type: "C" },
      { text: "Evito novidades, prefiro o familiar", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você desafia o status quo?",
    options: [
      { text: "Sempre questiono e proponho alternativas", type: "A" },
      { text: "Questiono quando não faz sentido", type: "B" },
      { text: "Geralmente aceito como as coisas são", type: "C" },
      { text: "Prefiro não causar problemas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria sua imaginação?",
    options: [
      { text: "Ilimitada e sempre ativa", type: "A" },
      { text: "Rica em certas áreas", type: "B" },
      { text: "Presente mas não muito forte", type: "C" },
      { text: "Limitada, sou mais prático", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Gênio Criativo",
    emoji: "🎨",
    description: "Você é altamente criativo! Sua mente faz conexões únicas, desafia convenções e está sempre gerando novas ideias. O mundo precisa de pessoas como você para inovar.",
    traits: ["Inovador", "Original", "Imaginativo", "Questionador"],
    strengths: ["Solução criativa de problemas", "Pensamento original", "Inovação constante", "Visão única"],
    weaknesses: ["Pode ter dificuldade com rotinas", "Ideias demais, execução de menos às vezes"],
    tips: ["Equilibre criação com execução", "Documente suas ideias", "Encontre colaboradores que complementem suas habilidades"],
  },
  B: {
    type: "B",
    title: "Criativo Aplicado",
    emoji: "💡",
    description: "Você tem criatividade equilibrada! Consegue ter ideias inovadoras e também transformá-las em realidade. Este é um perfil muito valioso no mercado de trabalho.",
    traits: ["Inventivo", "Prático", "Adaptável", "Curioso"],
    strengths: ["Ideias viáveis", "Execução criativa", "Adaptação de conceitos", "Inovação prática"],
    weaknesses: ["Pode ser menos ousado que gênios criativos", "Às vezes limita ideias pela praticidade"],
    tips: ["Permita-se ser mais ousado às vezes", "Sua combinação de criatividade e praticidade é rara", "Continue desenvolvendo ambos os lados"],
  },
  C: {
    type: "C",
    title: "Criativo Latente",
    emoji: "🌱",
    description: "Você tem potencial criativo que pode ser mais desenvolvido! Tende a seguir caminhos conhecidos, mas há criatividade esperando ser explorada dentro de você.",
    traits: ["Cauteloso", "Metódico", "Confiável", "Potencial"],
    strengths: ["Execução consistente", "Segue processos bem", "Confiabilidade"],
    weaknesses: ["Pode perder oportunidades de inovação", "Zona de conforto limitante"],
    tips: ["Pratique brainstorming sem julgamento", "Tente uma atividade criativa nova", "A criatividade é um músculo que pode ser desenvolvido"],
  },
  D: {
    type: "D",
    title: "Pragmático",
    emoji: "📐",
    description: "Você é mais pragmático que criativo, preferindo o concreto e conhecido. Isso não é ruim - o mundo precisa de executores! Mas talvez haja criatividade inexplorada em você.",
    traits: ["Prático", "Concreto", "Executor", "Estruturado"],
    strengths: ["Execução excelente", "Pensamento lógico", "Foco em resultados"],
    weaknesses: ["Pode resistir a mudanças", "Perde oportunidades de inovação"],
    tips: ["Todo mundo tem alguma criatividade", "Tente exercícios de pensamento lateral", "Colabore com pessoas mais criativas"],
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
