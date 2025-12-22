// Seu Perfil de Mentoria
// Descubra se você é melhor como mentor ou mentorado!

export const questions = [
  {
    id: 1,
    question: "Você prefere compartilhar conhecimento ou absorver?",
    options: [
      { text: "Adoro ensinar e compartilhar o que sei", type: "A" },
      { text: "Gosto de ambos, depende do contexto", type: "B" },
      { text: "Prefiro aprender com quem sabe mais", type: "C" },
      { text: "Foco em mim mesmo, não em trocar conhecimento", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você se sente ajudando alguém a crescer?",
    options: [
      { text: "É uma das coisas mais gratificantes", type: "A" },
      { text: "Gosto quando tenho tempo e contexto", type: "B" },
      { text: "Faço quando pedem, mas não busco", type: "C" },
      { text: "Prefiro focar no meu próprio crescimento", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual sua relação com pedir ajuda e orientação?",
    options: [
      { text: "Prefiro descobrir sozinho ou orientar outros", type: "A" },
      { text: "Peço quando necessário mas também oriento", type: "B" },
      { text: "Busco ativamente mentores e orientação", type: "C" },
      { text: "Raramente peço ou ofereço ajuda", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você tem paciência para explicar algo várias vezes?",
    options: [
      { text: "Sim, adapto a explicação até funcionar", type: "A" },
      { text: "Tenho, mas prefiro que entendam rápido", type: "B" },
      { text: "Pouca, fico frustrado se preciso repetir", type: "C" },
      { text: "Não, prefiro que busquem em outro lugar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você se sente sendo mentorado?",
    options: [
      { text: "Desconfortável, prefiro ser o mentor", type: "A" },
      { text: "Bem, todos podemos aprender", type: "B" },
      { text: "Adoro! Acelera muito meu desenvolvimento", type: "C" },
      { text: "Indiferente, aprendo de outras formas", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando vê alguém cometendo um erro que você já cometeu:",
    options: [
      { text: "Ofereço ajuda proativamente", type: "A" },
      { text: "Ajudo se pedirem ou se for apropriado", type: "B" },
      { text: "Deixo a pessoa aprender sozinha", type: "C" },
      { text: "Não é da minha conta", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você investe tempo desenvolvendo pessoas mais juniores?",
    options: [
      { text: "Sim, é parte do meu papel como profissional", type: "A" },
      { text: "Quando consigo, dentro das minhas tarefas", type: "B" },
      { text: "Raramente, foco nas minhas entregas", type: "C" },
      { text: "Não, cada um cuida do seu desenvolvimento", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua relação com feedback de desenvolvimento?",
    options: [
      { text: "Dou frequentemente e de forma construtiva", type: "A" },
      { text: "Dou quando solicitado ou necessário", type: "B" },
      { text: "Prefiro receber do que dar", type: "C" },
      { text: "Evito dar feedback de desenvolvimento", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você se sente sobre legado profissional?",
    options: [
      { text: "Quero ser lembrado por desenvolver pessoas", type: "A" },
      { text: "Legado inclui pessoas e resultados", type: "B" },
      { text: "Foco mais em resultados que em pessoas", type: "C" },
      { text: "Não penso muito sobre legado", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você busca ativamente ter um mentor?",
    options: [
      { text: "Não preciso, sou mais mentor que mentorado", type: "A" },
      { text: "Tenho mentores e também sou mentor", type: "B" },
      { text: "Sim, busco sempre ter mentores", type: "C" },
      { text: "Não, aprendo de outras formas", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Como você reage quando mentorado(a) supera você?",
    options: [
      { text: "Orgulho imenso! Era esse o objetivo", type: "A" },
      { text: "Fico feliz, significa que fiz bem", type: "B" },
      { text: "Sentimentos mistos, mas aceito", type: "C" },
      { text: "Me incomoda um pouco", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que te motiva mais em relações de mentoria?",
    options: [
      { text: "Ver o crescimento e sucesso de quem ajudei", type: "A" },
      { text: "A troca de aprendizado mútuo", type: "B" },
      { text: "Meu próprio desenvolvimento com mentores", type: "C" },
      { text: "Não me motiva particularmente", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mentor Nato",
    emoji: "🌟",
    description: "Você nasceu para desenvolver pessoas! Sua paciência, experiência e vontade de ajudar fazem de você um mentor excepcional. Seu legado são as pessoas que você formou.",
    traits: ["Paciente", "Generoso", "Experiente", "Inspirador"],
    strengths: ["Desenvolve talentos", "Deixa legado", "Inspira outros", "Multiplica conhecimento"],
    weaknesses: ["Pode não buscar seu próprio desenvolvimento", "Às vezes dá demais"],
    tips: ["Continue mentorando!", "Mas lembre de buscar seus próprios mentores", "Equilibre dar e receber"],
  },
  B: {
    type: "B",
    title: "Mentor-Mentorado Equilibrado",
    emoji: "🔄",
    description: "Você equilibra bem os dois papéis! Sabe quando ensinar e quando aprender. Essa versatilidade é valiosa e te mantém em crescimento constante.",
    traits: ["Equilibrado", "Versátil", "Colaborativo", "Consciente"],
    strengths: ["Aprende e ensina", "Rede de desenvolvimento", "Humildade", "Crescimento contínuo"],
    weaknesses: ["Pode não se especializar em nenhum papel"],
    tips: ["Mantenha o equilíbrio", "Formalize relações de mentoria", "Seja intencional nos dois papéis"],
  },
  C: {
    type: "C",
    title: "Mentorado Focado",
    emoji: "📚",
    description: "Você está em fase de absorção! Busca ativamente mentores e orientação para acelerar seu crescimento. Isso é inteligente - aproveite ao máximo.",
    traits: ["Aprendiz", "Curioso", "Humilde", "Em desenvolvimento"],
    strengths: ["Mente aberta", "Busca ativa por desenvolvimento", "Aproveitamento de experiência alheia"],
    weaknesses: ["Pode não desenvolver outros", "Dependência de mentores"],
    tips: ["Continue buscando mentores", "Mas comece a devolver - ensine juniores", "Mentoria recíproca acelera crescimento"],
  },
  D: {
    type: "D",
    title: "Independente",
    emoji: "🏝️",
    description: "Você prefere trilhar seu caminho solo. Não busca mentores nem investe em desenvolver outros. Isso pode limitar seu crescimento e impacto.",
    traits: ["Independente", "Autodidata", "Isolado", "Individual"],
    strengths: ["Autonomia", "Não depende de outros"],
    weaknesses: ["Perde aceleração de mentoria", "Não deixa legado em pessoas", "Crescimento mais lento"],
    tips: ["Mentoria não é fraqueza, é alavanca", "Considere os benefícios de ter mentores", "Desenvolver outros também te desenvolve"],
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
