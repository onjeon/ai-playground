// Seu Perfil de Inovação
// Descubra como você se relaciona com inovação no trabalho!

export const questions = [
  {
    id: 1,
    question: "Qual sua reação quando surge uma nova tecnologia no seu campo?",
    options: [
      { text: "Sou o primeiro a testar e adotar", type: "A" },
      { text: "Acompanho e avalio antes de adotar", type: "B" },
      { text: "Espero outros testarem primeiro", type: "C" },
      { text: "Resisto até ser obrigatório", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você lida com mudanças de processos?",
    options: [
      { text: "Proponho mudanças constantemente", type: "A" },
      { text: "Abraço mudanças que fazem sentido", type: "B" },
      { text: "Aceito mas prefiro o jeito antigo", type: "C" },
      { text: "Resisto a qualquer mudança", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você experimenta novas formas de trabalhar?",
    options: [
      { text: "Sempre, adoro testar coisas novas", type: "A" },
      { text: "Frequentemente, busco melhorar", type: "B" },
      { text: "Às vezes, quando vejo necessidade", type: "C" },
      { text: "Raramente, prefiro o que já sei", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você vê erros em tentativas de inovação?",
    options: [
      { text: "Parte essencial do processo", type: "A" },
      { text: "Aceitáveis se aprendermos", type: "B" },
      { text: "Preocupantes, devem ser evitados", type: "C" },
      { text: "Inaceitáveis, melhor não arriscar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você traz ideias de fora para seu trabalho?",
    options: [
      { text: "Constantemente, busco inspiração em tudo", type: "A" },
      { text: "Frequentemente, quando vejo oportunidade", type: "B" },
      { text: "Às vezes, se parecer relevante", type: "C" },
      { text: "Raramente, foco no que já fazemos", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você reage quando sua ideia é rejeitada?",
    options: [
      { text: "Refino e tento de novo, ou proponho outra", type: "A" },
      { text: "Entendo e busco outras formas de contribuir", type: "B" },
      { text: "Fico frustrado e paro de propor por um tempo", type: "C" },
      { text: "Desisto de propor ideias novas", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você questiona o jeito que as coisas são feitas?",
    options: [
      { text: "Sempre, por que fazemos assim?", type: "A" },
      { text: "Frequentemente, quando vejo espaço para melhoria", type: "B" },
      { text: "Às vezes, mas geralmente aceito", type: "C" },
      { text: "Nunca, se funciona não mexo", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual sua relação com ferramentas de IA no trabalho?",
    options: [
      { text: "Já uso várias e busco mais", type: "A" },
      { text: "Estou experimentando e aprendendo", type: "B" },
      { text: "Ainda não comecei a usar", type: "C" },
      { text: "Não pretendo usar, não confio", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você participa de projetos de inovação na empresa?",
    options: [
      { text: "Lidero ou participo ativamente", type: "A" },
      { text: "Participo quando convidado", type: "B" },
      { text: "Prefiro ficar no meu trabalho regular", type: "C" },
      { text: "Evito, é perda de tempo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com incerteza em projetos inovadores?",
    options: [
      { text: "Adoro! Faz parte do jogo", type: "A" },
      { text: "Aceito como necessário", type: "B" },
      { text: "Me desconforta bastante", type: "C" },
      { text: "Não consigo trabalhar sem certeza", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você lê/acompanha sobre tendências e inovações?",
    options: [
      { text: "Diariamente, é prioridade", type: "A" },
      { text: "Regularmente, me mantenho atualizado", type: "B" },
      { text: "Ocasionalmente, quando aparece algo", type: "C" },
      { text: "Quase nunca", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase melhor te define em relação a inovação?",
    options: [
      { text: "Disrupção é meu combustível", type: "A" },
      { text: "Inovação contínua é importante", type: "B" },
      { text: "Evolução gradual é melhor", type: "C" },
      { text: "Em time que está ganhando não se mexe", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Inovador Nato",
    emoji: "🚀",
    description: "Você respira inovação! Sempre buscando o novo, questionando o status quo e adotando tecnologias antes de todos. Você é agente de mudança.",
    traits: ["Inovador", "Early adopter", "Disruptivo", "Visionário"],
    strengths: ["Antecipa tendências", "Traz novidades", "Impulsiona mudança", "Adaptável"],
    weaknesses: ["Pode inovar demais", "Impaciente com tradicionalistas", "Às vezes prematuro"],
    tips: ["Equilibre inovação com execução", "Traga os outros junto", "Nem toda inovação é útil"],
  },
  B: {
    type: "B",
    title: "Inovador Pragmático",
    emoji: "💡",
    description: "Você inova com inteligência! Aberto ao novo mas avalia antes de adotar. Você é a ponte entre visionários e conservadores.",
    traits: ["Pragmático", "Aberto", "Avaliador", "Equilibrado"],
    strengths: ["Inovação com critério", "Adoção sustentável", "Credibilidade"],
    weaknesses: ["Pode perder algumas oportunidades", "Às vezes lento demais"],
    tips: ["Continue assim!", "Às vezes vale arriscar mais", "Seja mais early adopter em áreas-chave"],
  },
  C: {
    type: "C",
    title: "Conservador Cauteloso",
    emoji: "🐢",
    description: "Você é conservador com inovação. Prefere esperar outros testarem antes de adotar. Isso é seguro mas pode te deixar para trás.",
    traits: ["Cauteloso", "Conservador", "Seguro", "Late adopter"],
    strengths: ["Evita erros de early adoption", "Estável"],
    weaknesses: ["Fica para trás", "Perde oportunidades", "Pode se tornar obsoleto"],
    tips: ["O mundo está mudando rápido!", "Seja mais aberto a experimentar", "Não espere ser forçado a mudar"],
  },
  D: {
    type: "D",
    title: "Resistente à Inovação",
    emoji: "⚓",
    description: "Você resiste ativamente à inovação! Prefere o que já conhece e evita mudanças. No mundo atual, isso é um risco sério para sua carreira.",
    traits: ["Resistente", "Tradicional", "Rígido", "Avesso a mudança"],
    strengths: ["Domina bem o que já sabe"],
    weaknesses: ["Alto risco de obsolescência", "Carreira ameaçada", "Visto como retrógrado", "Perde oportunidades"],
    tips: ["ALERTA: Você precisa mudar!", "O mercado não espera os conservadores", "Comece pequeno mas comece", "Sua empregabilidade está em risco"],
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
