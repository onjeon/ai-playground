// Qual Seu Estilo de TikToker?
// Descubra que tipo de criador você seria no TikTok!

export const questions = [
  {
    id: 1,
    question: "Que tipo de conteúdo você mais faria?",
    options: [
      { text: "Dancinhas e trends do momento", type: "A" },
      { text: "Humor e esquetes engraçadas", type: "B" },
      { text: "Conteúdo informativo e educativo", type: "C" },
      { text: "Rotina e lifestyle do dia a dia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Uma trend viral está bombando. Você...",
    options: [
      { text: "Faço imediatamente antes que passe", type: "A" },
      { text: "Faço minha versão cômica", type: "B" },
      { text: "Ignoro se não tiver a ver com meu nicho", type: "C" },
      { text: "Faço de um jeito único e autêntico", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu maior medo no TikTok seria...",
    options: [
      { text: "Errar a dancinha e virar meme", type: "A" },
      { text: "Ninguém achar graça do meu humor", type: "B" },
      { text: "Falar besteira e ser cancelado", type: "C" },
      { text: "Parecer forçado(a) ou fake", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Quantas tomadas você faria pra um vídeo ficar bom?",
    options: [
      { text: "Quantas precisar até ficar perfeito", type: "A" },
      { text: "Umas 5-10, mas tem que ter timing", type: "B" },
      { text: "Poucas, conteúdo importa mais que edição", type: "C" },
      { text: "Uma ou duas, autenticidade em primeiro lugar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Qual seria sua edição de vídeo?",
    options: [
      { text: "Super editado, efeitos, transições perfeitas", type: "A" },
      { text: "Cortes rápidos e memes inseridos", type: "B" },
      { text: "Clean, texto na tela e foco no conteúdo", type: "C" },
      { text: "Minimalista, quase sem edição", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Um comentário negativo aparece. Você...",
    options: [
      { text: "Fico mal e repenso meu conteúdo", type: "A" },
      { text: "Respondo com humor e zoeira", type: "B" },
      { text: "Ignoro e sigo firme", type: "C" },
      { text: "Reflito se tem algo válido na crítica", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O que te faria virar um TikToker famoso?",
    options: [
      { text: "Ser muito bom(a) nas trends", type: "A" },
      { text: "Fazer rir com originalidade", type: "B" },
      { text: "Ensinar algo útil e interessante", type: "C" },
      { text: "Ser autêntico(a) e conectar com a galera", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você receberia publi de...",
    options: [
      { text: "Qualquer marca que pague bem", type: "A" },
      { text: "Marcas que combinem com meu humor", type: "B" },
      { text: "Só do meu nicho e que eu confie", type: "C" },
      { text: "Marcas que eu realmente uso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seu setup de gravação seria...",
    options: [
      { text: "Ring light, cenário pensado, tudo certo", type: "A" },
      { text: "Qualquer lugar que dê pra zoar", type: "B" },
      { text: "Um cantinho organizado e bem iluminado", type: "C" },
      { text: "Minha casa real, do jeito que é", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seria sua legenda típica?",
    options: [
      { text: "Algo com música e hashtags do momento", type: "A" },
      { text: "Piada ou referência engraçada", type: "B" },
      { text: "Resumo do que vou ensinar no vídeo", type: "C" },
      { text: "Algo pessoal ou reflexivo", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Trend Hunter",
    emoji: "💃",
    percentage: 95,
    description: "Você seria O Trend Hunter! Sempre por dentro das trends, dancinhas e virais do momento. Seu TikTok seria cheio de conteúdo do hype, perfeitamente executado. For You Page seria sua casa!",
    characteristics: ["Antenado(a)", "Dedicado(a)", "Perfeccionista", "Popular"],
    advice: "Sua capacidade de surfar trends é incrível! Mas lembre-se: autenticidade também viraliza. Mostre quem você é além das dancinhas!",
  },
  B: {
    type: "B",
    title: "O Humorista Digital",
    emoji: "😂",
    percentage: 90,
    description: "Você seria O Humorista Digital! Seu TikTok seria para fazer rir. Esquetes, paródias, zoeiras... A galera seguiria você pra ter sua dose diária de humor brasileiro!",
    characteristics: ["Engraçado(a)", "Criativo(a)", "Carismático(a)", "Espontâneo(a)"],
    advice: "Seu humor é seu maior trunfo! Continue fazendo a galera rir, mas diversifique pra não virar repetitivo. Humor inteligente dura mais!",
  },
  C: {
    type: "C",
    title: "O Professor TikToker",
    emoji: "📚",
    percentage: 85,
    description: "Você seria O Professor TikToker! Seu conteúdo seria educativo e informativo. Da sua área de expertise, você ensinaria de forma acessível e interessante. Conhecimento viraliza!",
    characteristics: ["Conhecedor(a)", "Didático(a)", "Responsável", "Confiável"],
    advice: "Seu conteúdo agrega valor! Continue educando, mas não esqueça de entreter também. Os melhores professores do TikTok fazem as duas coisas!",
  },
  D: {
    type: "D",
    title: "O Lifestyle Autêntico",
    emoji: "✨",
    percentage: 80,
    description: "Você seria O Lifestyle Autêntico! Seu TikTok mostraria seu dia a dia real, sem filtros excessivos. A galera seguiria pela sua vibe genuína e relatable!",
    characteristics: ["Autêntico(a)", "Relatable", "Verdadeiro(a)", "Conectado(a)"],
    advice: "Sua autenticidade é rara e valiosa! Continue sendo você mesmo(a), mas experimente também explorar formatos novos. Autêntico não significa estático!",
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
