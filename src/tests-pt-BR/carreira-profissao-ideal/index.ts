// Qual Sua Profissão Ideal?
// Descubra qual área profissional combina com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "O que te dá mais satisfação no trabalho?",
    options: [
      { text: "Resolver problemas complexos", type: "A" },
      { text: "Criar coisas novas e expressar ideias", type: "B" },
      { text: "Ajudar e cuidar de pessoas", type: "C" },
      { text: "Liderar e influenciar resultados", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você prefere passar seu dia de trabalho?",
    options: [
      { text: "Analisando dados e informações", type: "A" },
      { text: "Criando, desenhando ou escrevendo", type: "B" },
      { text: "Conversando e interagindo com pessoas", type: "C" },
      { text: "Tomando decisões e organizando equipes", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual ambiente de trabalho te atrai mais?",
    options: [
      { text: "Laboratório, escritório técnico", type: "A" },
      { text: "Estúdio criativo, agência", type: "B" },
      { text: "Hospital, escola, ONG", type: "C" },
      { text: "Sala de reuniões, escritório executivo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Qual matéria você mais gostava na escola?",
    options: [
      { text: "Matemática, Física ou Química", type: "A" },
      { text: "Artes, Literatura ou Música", type: "B" },
      { text: "Biologia, Sociologia ou Psicologia", type: "C" },
      { text: "História, Geografia ou Filosofia", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você toma decisões importantes?",
    options: [
      { text: "Com lógica e análise de dados", type: "A" },
      { text: "Seguindo minha intuição e criatividade", type: "B" },
      { text: "Pensando no impacto nas pessoas", type: "C" },
      { text: "Avaliando resultados e estratégias", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que te motiva a levantar da cama para trabalhar?",
    options: [
      { text: "Desafios intelectuais para resolver", type: "A" },
      { text: "Possibilidade de criar algo único", type: "B" },
      { text: "Fazer diferença na vida de alguém", type: "C" },
      { text: "Conquistar objetivos e crescer", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual dessas atividades você faria de graça?",
    options: [
      { text: "Montar quebra-cabeças ou programar", type: "A" },
      { text: "Pintar, fotografar ou escrever", type: "B" },
      { text: "Voluntariado ou ensinar algo", type: "C" },
      { text: "Organizar eventos ou liderar projetos", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você prefere ser reconhecido?",
    options: [
      { text: "Pela minha expertise técnica", type: "A" },
      { text: "Pela minha originalidade e talento", type: "B" },
      { text: "Pelo meu impacto positivo nas pessoas", type: "C" },
      { text: "Pelos resultados que entrego", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual seu maior medo profissional?",
    options: [
      { text: "Fazer algo sem sentido ou superficial", type: "A" },
      { text: "Ficar preso em rotina sem criatividade", type: "B" },
      { text: "Não conseguir ajudar quem precisa", type: "C" },
      { text: "Não alcançar meu potencial máximo", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Nas férias, o que você mais gosta de fazer?",
    options: [
      { text: "Aprender algo novo, fazer cursos", type: "A" },
      { text: "Visitar museus, shows, exposições", type: "B" },
      { text: "Passar tempo com família e amigos", type: "C" },
      { text: "Planejar viagens e explorar lugares", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual frase mais te representa?",
    options: [
      { text: "A verdade está nos detalhes", type: "A" },
      { text: "A criatividade não tem limites", type: "B" },
      { text: "Pessoas são o que importa", type: "C" },
      { text: "O céu é o limite", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Se pudesse escolher um superpoder, qual seria?",
    options: [
      { text: "Super inteligência", type: "A" },
      { text: "Criar qualquer coisa do nada", type: "B" },
      { text: "Curar pessoas", type: "C" },
      { text: "Poder de convencimento", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Perfil Analítico-Técnico",
    emoji: "🔬",
    description: "Você tem mente lógica e analítica! Profissões que envolvem análise, tecnologia e resolução de problemas são perfeitas para você. Engenharia, TI, Ciências e Finanças são suas áreas.",
    traits: ["Lógico", "Detalhista", "Curioso", "Metódico"],
    strengths: ["Resolução de problemas", "Análise de dados", "Pensamento crítico", "Precisão"],
    weaknesses: ["Pode ser muito técnico", "Dificuldade com subjetividade", "Comunicação interpessoal"],
    tips: ["Desenvolva soft skills", "Considere áreas como Data Science, Engenharia, Programação", "Aprenda a comunicar ideias complexas"],
  },
  B: {
    type: "B",
    title: "Perfil Criativo-Artístico",
    emoji: "🎨",
    description: "Você é uma alma criativa! Precisa de liberdade para se expressar e criar. Design, Publicidade, Artes, Música, Escrita e Audiovisual são áreas onde você brilha.",
    traits: ["Criativo", "Expressivo", "Inovador", "Sensível"],
    strengths: ["Originalidade", "Visão estética", "Pensamento lateral", "Expressão"],
    weaknesses: ["Pode ter dificuldade com rotina", "Sensível a críticas", "Organização"],
    tips: ["Busque ambientes que valorizem criatividade", "Considere Design, Publicidade, Artes, Cinema", "Equilibre criação com disciplina"],
  },
  C: {
    type: "C",
    title: "Perfil Social-Cuidador",
    emoji: "💚",
    description: "Você tem vocação para ajudar pessoas! Profissões de cuidado, educação e impacto social são seu chamado. Saúde, Educação, Psicologia e Serviço Social são suas áreas.",
    traits: ["Empático", "Cuidador", "Altruísta", "Paciente"],
    strengths: ["Inteligência emocional", "Conexão com pessoas", "Escuta ativa", "Compaixão"],
    weaknesses: ["Pode absorver problemas dos outros", "Dificuldade em dizer não", "Esgotamento emocional"],
    tips: ["Cuide de si para cuidar dos outros", "Considere Medicina, Psicologia, Pedagogia, Enfermagem", "Estabeleça limites saudáveis"],
  },
  D: {
    type: "D",
    title: "Perfil Empreendedor-Líder",
    emoji: "🚀",
    description: "Você nasceu para liderar e empreender! Quer impactar, crescer e conquistar. Administração, Direito, Vendas, Gestão e Empreendedorismo são suas áreas de destaque.",
    traits: ["Ambicioso", "Estratégico", "Persuasivo", "Visionário"],
    strengths: ["Liderança", "Visão de negócios", "Comunicação", "Tomada de decisão"],
    weaknesses: ["Pode ser impaciente", "Foco excessivo em resultados", "Dificuldade em delegar"],
    tips: ["Desenvolva escuta ativa", "Considere Administração, Direito, MBA, Empreendedorismo", "Aprenda a valorizar o processo"],
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
