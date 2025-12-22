// Teste de Estilo de Apego
// Descubra seu estilo de apego emocional em relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Como você se sente quando seu parceiro(a) quer passar tempo longe de você?",
    options: [
      { text: "Tranquilo, cada um precisa do seu espaço", type: "A" },
      { text: "Entendo, mas sinto falta", type: "B" },
      { text: "Ansioso, penso que algo está errado", type: "C" },
      { text: "Aliviado, preciso do meu espaço", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você se abre emocionalmente em relacionamentos?",
    options: [
      { text: "Sim, de forma natural e gradual", type: "A" },
      { text: "Me abro muito, às vezes rápido demais", type: "B" },
      { text: "Tenho medo de me abrir e ser machucado", type: "C" },
      { text: "Mantenho distância emocional", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quando está em um relacionamento, você:",
    options: [
      { text: "Mantenho minha individualidade e conexão", type: "A" },
      { text: "Foco muito no parceiro, às vezes demais", type: "B" },
      { text: "Oscilo entre querer proximidade e medo", type: "C" },
      { text: "Valorizo muito minha independência", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você reage quando o parceiro(a) demora para responder mensagens?",
    options: [
      { text: "Normal, cada um tem sua rotina", type: "A" },
      { text: "Fico um pouco ansioso pensando no porquê", type: "B" },
      { text: "Fico muito ansioso, penso o pior", type: "C" },
      { text: "Nem noto, também demoro para responder", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você expressa suas necessidades em relacionamentos?",
    options: [
      { text: "Sim, de forma clara e direta", type: "A" },
      { text: "Sim, às vezes intensamente demais", type: "B" },
      { text: "Tenho medo de pedir e ser rejeitado", type: "C" },
      { text: "Não, prefiro não depender de ninguém", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando uma relação termina, você:",
    options: [
      { text: "Sofro mas me recupero em tempo saudável", type: "A" },
      { text: "Sofro muito e demoro a superar", type: "B" },
      { text: "Sofro e confirma meus medos de abandono", type: "C" },
      { text: "Sigo em frente relativamente rápido", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você confia facilmente em parceiros românticos?",
    options: [
      { text: "Sim, com cautela saudável", type: "A" },
      { text: "Confio rápido, às vezes me decepciono", type: "B" },
      { text: "Tenho muita dificuldade em confiar", type: "C" },
      { text: "Não confio plenamente em ninguém", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Quando há conflito no relacionamento, você:",
    options: [
      { text: "Busco resolver com comunicação", type: "A" },
      { text: "Fico muito ansioso e preciso resolver já", type: "B" },
      { text: "Oscilo entre confrontar e fugir", type: "C" },
      { text: "Me afasto e preciso de espaço", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você se sente confortável com intimidade emocional?",
    options: [
      { text: "Sim, é o que busco em relacionamentos", type: "A" },
      { text: "Sim, às vezes quero ainda mais", type: "B" },
      { text: "Quero mas tenho medo ao mesmo tempo", type: "C" },
      { text: "Tenho dificuldade com muita proximidade", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você tem medo de abandono?",
    options: [
      { text: "Não particularmente", type: "A" },
      { text: "Sim, frequentemente penso nisso", type: "B" },
      { text: "Muito, é um medo constante", type: "C" },
      { text: "Não, prefiro não depender de ninguém assim", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você lida com a necessidade de reasseguramento?",
    options: [
      { text: "Preciso de pouco, me sinto seguro", type: "A" },
      { text: "Preciso frequentemente de confirmação", type: "B" },
      { text: "Preciso muito, nunca parece suficiente", type: "C" },
      { text: "Não gosto de precisar de reasseguramento", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você descreveria seu padrão em relacionamentos?",
    options: [
      { text: "Equilibrado e seguro", type: "A" },
      { text: "Ansioso por conexão e proximidade", type: "B" },
      { text: "Conflituado entre querer e temer", type: "C" },
      { text: "Valorizo mais independência que conexão", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Apego Seguro",
    emoji: "💚",
    description: "Você tem apego seguro! Se sente confortável com intimidade e independência, confia em parceiros e em si mesmo. Este é o padrão mais saudável.",
    traits: ["Seguro", "Equilibrado", "Confiante", "Conectado"],
    strengths: ["Relacionamentos saudáveis", "Boa comunicação", "Equilíbrio intimidade-autonomia", "Recuperação saudável"],
    weaknesses: ["Pode não entender estilos inseguros", "Expectativa de reciprocidade"],
    tips: ["Continue cultivando relacionamentos saudáveis", "Ajude parceiros inseguros com paciência", "Mantenha seu equilíbrio"],
  },
  B: {
    type: "B",
    title: "Apego Ansioso",
    emoji: "💛",
    description: "Você tem apego ansioso. Busca muita proximidade, teme abandono e precisa de reasseguramento constante. Isso pode criar dinâmicas difíceis.",
    traits: ["Ansioso", "Carente", "Emocional", "Necessitado"],
    strengths: ["Capacidade de amar intensamente", "Desejo de conexão", "Empatia"],
    weaknesses: ["Dependência emocional", "Ciúmes e insegurança", "Pode sufocar parceiros"],
    tips: ["Trabalhe sua autoestima", "Aprenda a se acalmar sozinho", "Terapia pode ajudar muito"],
  },
  C: {
    type: "C",
    title: "Apego Desorganizado",
    emoji: "🧩",
    description: "Você tem apego desorganizado. Quer intimidade mas tem medo, oscila entre aproximação e afastamento. Geralmente relacionado a experiências passadas difíceis.",
    traits: ["Conflituado", "Temeroso", "Instável", "Ambivalente"],
    strengths: ["Desejo de conexão", "Consciência das dificuldades"],
    weaknesses: ["Relacionamentos instáveis", "Confusão emocional", "Medo e desejo simultâneos"],
    tips: ["Busque terapia especializada", "Provavelmente há traumas a processar", "Cura é possível com trabalho"],
  },
  D: {
    type: "D",
    title: "Apego Evitativo",
    emoji: "💙",
    description: "Você tem apego evitativo. Valoriza independência, tem dificuldade com intimidade e tende a se afastar quando as coisas ficam intensas.",
    traits: ["Independente", "Distante", "Autossuficiente", "Evitativo"],
    strengths: ["Independência", "Não sufoca parceiros", "Estabilidade emocional aparente"],
    weaknesses: ["Dificuldade com intimidade", "Relacionamentos superficiais", "Parceiros podem se sentir rejeitados"],
    tips: ["Investigue por que evita proximidade", "Vulnerabilidade não é fraqueza", "Terapia pode ajudar a abrir-se"],
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
