// Teste de Inteligência Emocional
// Descubra seu nível de inteligência emocional!

export const questions = [
  {
    id: 1,
    question: "Quando alguém te irrita, como você reage?",
    options: [
      { text: "Respiro fundo e escolho como responder", type: "A" },
      { text: "Tento me controlar mas às vezes falho", type: "B" },
      { text: "Reajo impulsivamente na hora", type: "C" },
      { text: "Explodo e depois me arrependo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você consegue identificar o que está sentindo?",
    options: [
      { text: "Sim, tenho clareza sobre minhas emoções", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade em nomear sentimentos", type: "C" },
      { text: "Raramente sei o que estou sentindo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você lida com a tristeza de um amigo?",
    options: [
      { text: "Escuto com empatia e ofereço apoio", type: "A" },
      { text: "Tento ajudar, mas às vezes não sei como", type: "B" },
      { text: "Fico desconfortável e mudo de assunto", type: "C" },
      { text: "Não sei lidar e prefiro me afastar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quando está sob pressão, você:",
    options: [
      { text: "Mantenho a calma e penso com clareza", type: "A" },
      { text: "Fico um pouco ansioso mas funciono bem", type: "B" },
      { text: "Tenho dificuldade em me concentrar", type: "C" },
      { text: "Entro em pânico e não consigo pensar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você percebe quando outras pessoas estão desconfortáveis?",
    options: [
      { text: "Sim, noto sinais sutis facilmente", type: "A" },
      { text: "Geralmente percebo quando é mais óbvio", type: "B" },
      { text: "Às vezes passo despercebido", type: "C" },
      { text: "Raramente noto os sentimentos alheios", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você se motiva quando está desanimado?",
    options: [
      { text: "Tenho estratégias que funcionam para mim", type: "A" },
      { text: "Busco ajuda de amigos ou atividades", type: "B" },
      { text: "Demoro para sair do estado negativo", type: "C" },
      { text: "Fico paralisado sem saber o que fazer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Em conflitos interpessoais, você geralmente:",
    options: [
      { text: "Busco entender o outro lado e dialogar", type: "A" },
      { text: "Tento resolver, mas nem sempre funciona", type: "B" },
      { text: "Evito conflitos a todo custo", type: "C" },
      { text: "Fico na defensiva ou ataco", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você consegue expressar seus sentimentos claramente?",
    options: [
      { text: "Sim, comunico minhas emoções bem", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade em me expressar", type: "C" },
      { text: "Guardo tudo para mim mesmo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você reage a feedbacks negativos?",
    options: [
      { text: "Avalio com calma e extraio aprendizados", type: "A" },
      { text: "Fico um pouco chateado mas aceito", type: "B" },
      { text: "Me sinto atacado e me defendo", type: "C" },
      { text: "Fico devastado e levo muito pessoal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você consegue adiar gratificações para objetivos maiores?",
    options: [
      { text: "Sim, tenho boa disciplina emocional", type: "A" },
      { text: "Na maioria das vezes consigo", type: "B" },
      { text: "Tenho dificuldade com isso", type: "C" },
      { text: "Não consigo resistir a impulsos", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você se sente após uma discussão acalorada?",
    options: [
      { text: "Processo e busco reconciliação", type: "A" },
      { text: "Fico remoendo mas tento superar", type: "B" },
      { text: "Fico com raiva por muito tempo", type: "C" },
      { text: "Guardo rancor indefinidamente", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Você reconhece como suas emoções afetam suas decisões?",
    options: [
      { text: "Sim, tenho autoconsciência emocional", type: "A" },
      { text: "Às vezes percebo depois", type: "B" },
      { text: "Raramente faço essa conexão", type: "C" },
      { text: "Não vejo relação entre emoção e decisão", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mestre Emocional",
    emoji: "🧠",
    description: "Você possui alta inteligência emocional! Conhece bem suas emoções, sabe gerenciá-las e tem grande capacidade de empatia. Suas habilidades interpessoais são excepcionais.",
    traits: ["Autoconsciente", "Empático", "Autorregulado", "Socialmente hábil"],
    strengths: ["Excelente gestão emocional", "Comunicação efetiva", "Resolução de conflitos", "Liderança inspiradora"],
    weaknesses: ["Pode absorver emoções alheias demais", "Expectativa alta dos outros"],
    tips: ["Use suas habilidades para ajudar outros", "Mantenha limites emocionais saudáveis", "Continue desenvolvendo sua inteligência emocional"],
  },
  B: {
    type: "B",
    title: "Emocionalmente Competente",
    emoji: "💪",
    description: "Você tem boa inteligência emocional, com espaço para crescimento. Consegue lidar com a maioria das situações emocionais, mas ainda pode desenvolver mais algumas habilidades.",
    traits: ["Consciente", "Adaptável", "Empático", "Em desenvolvimento"],
    strengths: ["Boa percepção emocional", "Capacidade de aprendizado", "Relacionamentos saudáveis"],
    weaknesses: ["Oscilações em situações de stress", "Pode melhorar a autorregulação"],
    tips: ["Pratique mindfulness regularmente", "Busque feedback sobre suas reações", "Leia sobre inteligência emocional"],
  },
  C: {
    type: "C",
    title: "Em Desenvolvimento Emocional",
    emoji: "🌱",
    description: "Sua inteligência emocional precisa de mais atenção. Você tem dificuldade em identificar e gerenciar emoções, mas com prática pode desenvolver essas habilidades.",
    traits: ["Reativo", "Impulsivo", "Aprendiz", "Potencial"],
    strengths: ["Reconhecimento da necessidade de melhora", "Autenticidade emocional"],
    weaknesses: ["Dificuldade na regulação emocional", "Comunicação emocional limitada", "Reações impulsivas"],
    tips: ["Comece um diário emocional", "Pratique pausar antes de reagir", "Considere terapia ou coaching"],
  },
  D: {
    type: "D",
    title: "Alfabetização Emocional Necessária",
    emoji: "📚",
    description: "Você precisa desenvolver sua inteligência emocional urgentemente. A dificuldade em lidar com emoções está afetando seus relacionamentos e bem-estar. Buscar ajuda profissional é recomendado.",
    traits: ["Desconectado", "Reativo", "Evitativo", "Vulnerável"],
    strengths: ["Potencial de grande transformação", "Possibilidade de crescimento significativo"],
    weaknesses: ["Baixa consciência emocional", "Dificuldade em relacionamentos", "Impulsividade"],
    tips: ["Procure um profissional de saúde mental", "Comece identificando emoções básicas", "Não tenha vergonha de pedir ajuda"],
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
