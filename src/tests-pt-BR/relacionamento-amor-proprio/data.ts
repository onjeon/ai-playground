// Amor Próprio
// Descubra como está sua relação consigo mesmo(a)!

export const questions = [
  {
    id: 1,
    question: "Quando você se olha no espelho, qual é seu primeiro pensamento?",
    options: [
      { text: "Gosto do que vejo, me acho bonito(a)", type: "A" },
      { text: "Tô bem, mas sempre pode melhorar", type: "B" },
      { text: "Fico procurando defeitos", type: "C" },
      { text: "Evito me olhar muito", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você reage quando recebe um elogio?",
    options: [
      { text: "Agradeço de coração e aceito numa boa", type: "A" },
      { text: "Fico feliz, mas meio sem graça", type: "B" },
      { text: "Desconto o elogio, acho que é exagero", type: "C" },
      { text: "Não acredito e penso que é educação", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você consegue dizer 'não' quando não quer fazer algo?",
    options: [
      { text: "Sim, tranquilo(a), respeito meus limites", type: "A" },
      { text: "Na maioria das vezes, com um pouco de culpa", type: "B" },
      { text: "Tenho dificuldade, acabo cedendo", type: "C" },
      { text: "Quase nunca, não quero decepcionar ninguém", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você lida com críticas?",
    options: [
      { text: "Avalio se faz sentido e sigo em frente", type: "A" },
      { text: "Fico chateado(a) mas tento refletir", type: "B" },
      { text: "Me afeta muito, fico ruminando", type: "C" },
      { text: "Me destruo internamente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você se compara muito com outras pessoas?",
    options: [
      { text: "Quase nunca, cada um tem sua jornada", type: "A" },
      { text: "Às vezes, mas tento não me cobrar", type: "B" },
      { text: "Frequentemente, e sempre saio perdendo", type: "C" },
      { text: "O tempo todo, me sinto sempre inferior", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você dedica tempo pra cuidar de si mesmo(a)?",
    options: [
      { text: "Sim, meu autocuidado é prioridade", type: "A" },
      { text: "Tento, mas às vezes a rotina atrapalha", type: "B" },
      { text: "Pouco, sempre coloco os outros primeiro", type: "C" },
      { text: "Quase nunca, não me sinto merecedor(a)", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Quando você erra, como você se trata?",
    options: [
      { text: "Com compaixão, erro é humano", type: "A" },
      { text: "Me cobro, mas tento aprender", type: "B" },
      { text: "Sou muito duro(a) comigo", type: "C" },
      { text: "Me crucifíco, não me perdoo fácil", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você acredita que merece ser feliz?",
    options: [
      { text: "Com certeza, mereço o melhor!", type: "A" },
      { text: "Sim, estou trabalhando nisso", type: "B" },
      { text: "Tenho dúvidas às vezes", type: "C" },
      { text: "Não sei se mereço", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Como você se sente quando está sozinho(a)?",
    options: [
      { text: "Amo minha própria companhia", type: "A" },
      { text: "Gosto, mas prefiro ter gente por perto", type: "B" },
      { text: "Fico inquieto(a), pensamentos ruins vêm", type: "C" },
      { text: "Detesto, me sinto vazio(a)", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você coloca suas necessidades como prioridade?",
    options: [
      { text: "Sim, sempre me coloco em primeiro lugar", type: "A" },
      { text: "Tento equilibrar minhas necessidades e as dos outros", type: "B" },
      { text: "Geralmente os outros vêm antes", type: "C" },
      { text: "Nunca, sempre me anulo pelos outros", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Amor Próprio em Alta",
    emoji: "💖",
    percentage: 95,
    description: "Você tem um amor próprio elevado! Se conhece, se respeita e se valoriza. Sabe que merece o melhor e não aceita menos. Isso reflete em todos os seus relacionamentos!",
    characteristics: ["Autoconfiante", "Seguro(a)", "Equilibrado(a)", "Autêntico(a)"],
    advice: "Continue cultivando esse amor por si. Mas lembre-se: amor próprio não é egoísmo. Continue sendo generoso(a) com os outros enquanto cuida de você!",
  },
  B: {
    type: "B",
    title: "Amor Próprio em Construção",
    emoji: "🌱",
    percentage: 75,
    description: "Seu amor próprio está em desenvolvimento! Você está no caminho certo, trabalhando sua autoestima dia a dia. Tem momentos de insegurança, mas está aprendendo a se valorizar.",
    characteristics: ["Em evolução", "Consciente", "Esforçado(a)", "Resiliente"],
    advice: "Você está indo muito bem! Continue investindo em autoconhecimento. Faça uma lista das suas qualidades e releia quando se sentir pra baixo. O amor próprio é uma jornada!",
  },
  C: {
    type: "C",
    title: "Amor Próprio Precisando de Atenção",
    emoji: "🌧️",
    percentage: 50,
    description: "Seu amor próprio precisa de mais cuidado. Você tende a se colocar em segundo plano e se criticar demais. É hora de começar a se tratar com mais carinho!",
    characteristics: ["Autocrítico(a)", "Exigente consigo", "Carente de autocuidado", "Em busca de equilíbrio"],
    advice: "Comece hoje: fale consigo como falaria com seu melhor amigo. Você merece gentileza, principalmente de si mesmo(a). Considere terapia para trabalhar essas questões!",
  },
  D: {
    type: "D",
    title: "Amor Próprio em Crise",
    emoji: "💔",
    percentage: 30,
    description: "Seu amor próprio está muito fragilizado. Você tem dificuldade em se valorizar e frequentemente se coloca pra baixo. É importante buscar ajuda para reconstruir essa relação consigo.",
    characteristics: ["Autoestima baixa", "Autocrítica severa", "Dificuldade de se valorizar", "Precisando de apoio"],
    advice: "Você precisa de suporte! Busque ajuda profissional - um psicólogo pode te ajudar a reconstruir sua autoestima. Você é digno(a) de amor, especialmente o seu próprio. Não desista de si!",
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
