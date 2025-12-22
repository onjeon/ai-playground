// Teste de Ciúme
// Descubra seu nível de ciúme em relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Quando seu parceiro(a) conversa com alguém atraente, você:",
    options: [
      { text: "Fico tranquilo, confio na relação", type: "A" },
      { text: "Noto mas não me incomoda muito", type: "B" },
      { text: "Fico desconfortável e vigilante", type: "C" },
      { text: "Fico muito incomodado e posso confrontar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você checa o celular ou redes sociais do parceiro(a)?",
    options: [
      { text: "Nunca, confio plenamente", type: "A" },
      { text: "Raramente, e com permissão", type: "B" },
      { text: "Às vezes, escondido", type: "C" },
      { text: "Frequentemente, preciso saber tudo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você questiona seu parceiro(a) sobre onde esteve e com quem?",
    options: [
      { text: "Pergunto por interesse, não por desconfiança", type: "A" },
      { text: "Às vezes pergunto mais detalhes", type: "B" },
      { text: "Frequentemente interrogo", type: "C" },
      { text: "Sempre, em detalhes minuciosos", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você fica com ciúme de amizades do parceiro(a)?",
    options: [
      { text: "Não, amizades são saudáveis", type: "A" },
      { text: "Um pouco às vezes, mas controlo", type: "B" },
      { text: "Sim, especialmente de certas pessoas", type: "C" },
      { text: "Muito, quero ser a única pessoa importante", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você reage quando seu parceiro(a) elogia outra pessoa?",
    options: [
      { text: "Normal, elogios são só observações", type: "A" },
      { text: "Noto mas não me afeta muito", type: "B" },
      { text: "Fico incomodado internamente", type: "C" },
      { text: "Me magoa muito, me sinto comparado", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você exige saber a senha das redes sociais do parceiro(a)?",
    options: [
      { text: "Não, privacidade é importante", type: "A" },
      { text: "Não exijo, mas sabemos as senhas um do outro", type: "B" },
      { text: "Gostaria de saber, fico mais tranquilo", type: "C" },
      { text: "Sim, preciso ter acesso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você já terminou ou ameaçou terminar por ciúme?",
    options: [
      { text: "Nunca", type: "A" },
      { text: "Uma vez em situação extrema", type: "B" },
      { text: "Algumas vezes aconteceu", type: "C" },
      { text: "Frequentemente uso isso como arma", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você sente ciúme de ex-parceiros(as)?",
    options: [
      { text: "Não, o passado é passado", type: "A" },
      { text: "Um pouco, mas é controlável", type: "B" },
      { text: "Sim, me incomoda pensar neles", type: "C" },
      { text: "Muito, quero apagar o passado do parceiro", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você imagina cenários de traição sem motivo?",
    options: [
      { text: "Nunca ou muito raramente", type: "A" },
      { text: "Às vezes, mas descarto rápido", type: "B" },
      { text: "Frequentemente crio cenários na cabeça", type: "C" },
      { text: "Constantemente, não consigo parar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O ciúme já causou brigas significativas?",
    options: [
      { text: "Nunca ou muito raramente", type: "A" },
      { text: "Poucas vezes", type: "B" },
      { text: "Várias vezes", type: "C" },
      { text: "Frequentemente, é um tema constante", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você controlaria quem seu parceiro(a) pode ver?",
    options: [
      { text: "Nunca, isso é controle abusivo", type: "A" },
      { text: "Não, embora às vezes pense nisso", type: "B" },
      { text: "Já sugeri evitar certas pessoas", type: "C" },
      { text: "Sim, tenho vontade de controlar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu nível de ciúme?",
    options: [
      { text: "Baixo ou inexistente", type: "A" },
      { text: "Normal, controlável", type: "B" },
      { text: "Alto, me incomoda", type: "C" },
      { text: "Muito alto, afeta minha vida", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Baixo Ciúme",
    emoji: "💚",
    description: "Você tem baixo nível de ciúme! Confia no parceiro e na relação, sem criar cenários desnecessários. Isso é saudável para relacionamentos.",
    traits: ["Confiante", "Seguro", "Equilibrado", "Saudável"],
    strengths: ["Relacionamentos sem drama", "Parceiro se sente confiado", "Paz de espírito"],
    weaknesses: ["Pode parecer desinteressado para alguns", "Pode não notar sinais reais"],
    tips: ["Continue cultivando confiança", "Comunique suas necessidades sem controle", "Mantenha esse equilíbrio"],
  },
  B: {
    type: "B",
    title: "Ciúme Normal",
    emoji: "💛",
    description: "Você tem ciúme em níveis normais. Sente às vezes mas consegue controlar e não deixa afetar a relação. Um toque de ciúme é até esperado.",
    traits: ["Normal", "Controlado", "Consciente", "Funcional"],
    strengths: ["Ciúme não domina", "Consegue racionalizar", "Relação funcional"],
    weaknesses: ["Pode se intensificar em situações específicas"],
    tips: ["Continue gerenciando bem o ciúme", "Comunique inseguranças quando surgem", "Trabalhe autoconfiança"],
  },
  C: {
    type: "C",
    title: "Ciúme Elevado",
    emoji: "🔶",
    description: "Você tem ciúme elevado que está afetando sua relação e bem-estar. A insegurança pode estar na raiz disso. É importante trabalhar essa questão.",
    traits: ["Ciumento", "Inseguro", "Vigilante", "Ansioso"],
    strengths: ["Consciência do problema"],
    weaknesses: ["Relacionamento desgastado", "Parceiro pode se sentir sufocado", "Ansiedade frequente"],
    tips: ["Trabalhe sua autoestima", "Ciúme excessivo geralmente é sobre você, não o parceiro", "Considere terapia"],
  },
  D: {
    type: "D",
    title: "Ciúme Patológico",
    emoji: "🔴",
    description: "Você tem ciúme patológico que está prejudicando seriamente sua vida e relacionamentos. Isso pode estar relacionado a questões mais profundas. Ajuda é necessária.",
    traits: ["Obsessivo", "Controlador", "Muito inseguro", "Ansioso extremo"],
    strengths: ["Reconhecimento do problema"],
    weaknesses: ["Relacionamentos muito prejudicados", "Comportamentos possivelmente abusivos", "Sofrimento constante"],
    tips: ["Procure ajuda profissional urgentemente", "Ciúme nesse nível não é amor, é controle", "Você pode superar isso com tratamento"],
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
