// Qual Tipo de Adolescente Brasileiro Você Era?
// Descubra seu perfil de adolescência!

export const questions = [
  {
    id: 1,
    question: "O que você mais fazia na escola?",
    options: [
      { text: "Estudava muito, queria ir bem", type: "A" },
      { text: "Fazia amigos e curtia a vida social", type: "B" },
      { text: "Ficava no meu canto, meio na minha", type: "C" },
      { text: "Aprontava todas, era o bagunceiro", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Sua turma de amigos era como?",
    options: [
      { text: "Os nerds, focados em estudar", type: "A" },
      { text: "Galera popular, todo mundo conhecia", type: "B" },
      { text: "Poucos mas bons amigos", type: "C" },
      { text: "A galera da zoeira e bagunça", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você fazia nos fins de semana?",
    options: [
      { text: "Estudava ou fazia cursos extras", type: "A" },
      { text: "Saía com amigos, festas, shopping", type: "B" },
      { text: "Ficava em casa, jogos, internet", type: "C" },
      { text: "Aprontava na rua com a galera", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como era sua relação com os pais?",
    options: [
      { text: "Boa, era filho(a) exemplar", type: "A" },
      { text: "Normal, alguns atritos típicos", type: "B" },
      { text: "Quieto(a), cada um no seu canto", type: "C" },
      { text: "Turbulenta, brigava muito", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual era seu maior interesse?",
    options: [
      { text: "Estudos e futuro profissional", type: "A" },
      { text: "Vida social e relacionamentos", type: "B" },
      { text: "Hobbies pessoais, games, música", type: "C" },
      { text: "Aventuras e adrenalina", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como eram suas notas?",
    options: [
      { text: "Excelentes, sempre acima da média", type: "A" },
      { text: "Boas, suficientes pra passar bem", type: "B" },
      { text: "Irregulares, bom no que gostava", type: "C" },
      { text: "Baixas, escola não era prioridade", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu estilo de roupa era como?",
    options: [
      { text: "Básico, sem muito estilo definido", type: "A" },
      { text: "Na moda, antenado com tendências", type: "B" },
      { text: "Alternativo, diferente da maioria", type: "C" },
      { text: "Largado, qualquer coisa servia", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como era sua vida amorosa?",
    options: [
      { text: "Focado(a) em estudos, não tinha tempo", type: "A" },
      { text: "Sempre namorando ou ficando", type: "B" },
      { text: "Crushes secretos, tímido(a)", type: "C" },
      { text: "Muitas ficadas, nada sério", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Os professores te viam como...",
    options: [
      { text: "Aluno(a) exemplar, orgulho da turma", type: "A" },
      { text: "Bom(a) aluno(a), participativo(a)", type: "B" },
      { text: "Quieto(a) mas inteligente", type: "C" },
      { text: "Problema, vivia na diretoria", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você mais sente falta daquela época?",
    options: [
      { text: "A falta de responsabilidades adultas", type: "A" },
      { text: "Os amigos e as festas", type: "B" },
      { text: "O tempo livre pra meus hobbies", type: "C" },
      { text: "A liberdade e a loucura", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Se pudesse voltar, o que faria diferente?",
    options: [
      { text: "Aproveitaria mais, estudei demais", type: "A" },
      { text: "Estudaria um pouco mais", type: "B" },
      { text: "Seria mais sociável", type: "C" },
      { text: "Nada, foi divertido", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te definia?",
    options: [
      { text: "'Preciso estudar pro vestibular'", type: "A" },
      { text: "'Bora sair hoje?'", type: "B" },
      { text: "'Prefiro ficar em casa'", type: "C" },
      { text: "'Que se dane a escola!'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "CDF Dedicado",
    emoji: "📚",
    description: "Você era o CDF Dedicado! Focado nos estudos e no futuro. Enquanto outros curtiam, você construía sua carreira. Provavelmente hoje colhe os frutos dessa dedicação!",
    traits: ["Dedicado(a)", "Responsável", "Focado(a)", "Ambicioso(a)"],
    strengths: ["Base sólida", "Disciplina desde cedo", "Boa carreira"],
    weaknesses: ["Pode ter perdido momentos", "Pressão demais", "Infância abreviada"],
    tips: ["Aproveite a vida adulta", "Não seja tão duro consigo", "O sucesso veio, relaxe"],
  },
  B: {
    type: "B",
    title: "Popular Social",
    emoji: "🎉",
    description: "Você era o Popular Social! A vida social era sua prioridade. Festas, amigos, relacionamentos... você viveu intensamente a adolescência. Memórias não faltam!",
    traits: ["Sociável", "Popular", "Extrovertido(a)", "Carismático(a)"],
    strengths: ["Muitas memórias boas", "Rede de amigos", "Habilidades sociais"],
    weaknesses: ["Pode ter prejudicado estudos", "Superficialidade", "Dependência social"],
    tips: ["Use suas habilidades sociais", "As amizades valem ouro", "Equilibre agora"],
  },
  C: {
    type: "C",
    title: "Introspectivo Criativo",
    emoji: "🎮",
    description: "Você era o Introspectivo Criativo! Preferia seu mundo interior aos grupos sociais. Games, música, arte... você desenvolveu hobbies e profundidade emocional!",
    traits: ["Introspectivo(a)", "Criativo(a)", "Independente", "Sensível"],
    strengths: ["Autoconhecimento", "Hobbies desenvolvidos", "Independência emocional"],
    weaknesses: ["Poucos amigos da época", "Possível solidão", "Oportunidades perdidas"],
    tips: ["Sua profundidade é rara", "Conecte-se mais agora", "Seus hobbies são valiosos"],
  },
  D: {
    type: "D",
    title: "Rebelde Sem Causa",
    emoji: "🔥",
    description: "Você era o Rebelde Sem Causa! Escola era secundária, viver era prioridade. Aprontou, brigou com os pais, fez loucuras. Histórias não faltam pra contar!",
    traits: ["Rebelde", "Aventureiro(a)", "Intenso(a)", "Impulsivo(a)"],
    strengths: ["Muitas histórias", "Viveu intensamente", "Coragem", "Sem arrependimentos"],
    weaknesses: ["Base educacional fraca", "Possíveis consequências", "Imaturidade prolongada"],
    tips: ["Amadureceu com a vida", "Use a coragem pro bem", "Nunca é tarde pra estudar"],
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
