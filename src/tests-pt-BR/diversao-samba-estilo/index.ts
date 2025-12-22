// Qual Seu Estilo de Samba?
// Descubra qual ritmo do samba mais combina com sua personalidade!

export const questions = [
  {
    id: 1,
    question: "Como você se comporta em uma roda de samba?",
    options: [
      { text: "Puxo o canto e animo todo mundo", type: "A" },
      { text: "Fico no cavaquinho ou pandeiro", type: "B" },
      { text: "Danço a noite toda sem parar", type: "C" },
      { text: "Curto de boa, tomando uma cervejinha", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual ambiente você prefere para curtir um samba?",
    options: [
      { text: "Avenida do Carnaval, com milhares de pessoas", type: "A" },
      { text: "Bar tradicional no centro da cidade", type: "B" },
      { text: "Bloco de rua animado", type: "C" },
      { text: "Quintal de casa com os amigos", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual instrumento te atrai mais?",
    options: [
      { text: "Surdo - marca o ritmo forte", type: "A" },
      { text: "Cavaquinho - melodia e harmonia", type: "B" },
      { text: "Tamborim - agudo e animado", type: "C" },
      { text: "Violão de 7 cordas - base suave", type: "D" },
    ],
  },
  {
    id: 4,
    question: "O que mais te emociona no samba?",
    options: [
      { text: "A energia contagiante da bateria", type: "A" },
      { text: "As letras poéticas e profundas", type: "B" },
      { text: "O gingado e a dança", type: "C" },
      { text: "A união das pessoas", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você descreveria seu jeito de dançar?",
    options: [
      { text: "Intenso e cheio de energia", type: "A" },
      { text: "Técnico e elegante", type: "B" },
      { text: "Solto e improvisado", type: "C" },
      { text: "Tranquilo, só balançando", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Qual época do samba você mais curte?",
    options: [
      { text: "Carnaval - desfiles e escola de samba", type: "A" },
      { text: "Samba de raiz dos anos dourados", type: "B" },
      { text: "Pagode dos anos 90", type: "C" },
      { text: "Samba atual, misturado com outros ritmos", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você lida com os problemas da vida?",
    options: [
      { text: "Enfrento de peito aberto", type: "A" },
      { text: "Reflito e busco sabedoria", type: "B" },
      { text: "Danço e canto pra esquecer", type: "C" },
      { text: "Deixo a vida me levar", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Qual bebida combina mais com você no samba?",
    options: [
      { text: "Caipirinha bem forte", type: "A" },
      { text: "Cerveja artesanal", type: "B" },
      { text: "Batidinha de coco", type: "C" },
      { text: "Cerveja gelada simples", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você mais valoriza em uma música?",
    options: [
      { text: "Ritmo forte e dançante", type: "A" },
      { text: "Letra elaborada e significado", type: "B" },
      { text: "Melodia alegre e cativante", type: "C" },
      { text: "Harmonia suave e relaxante", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como seus amigos te descreveriam?",
    options: [
      { text: "O/A mais animado(a) da turma", type: "A" },
      { text: "O/A mais culto(a) e refinado(a)", type: "B" },
      { text: "O/A mais divertido(a) e solto(a)", type: "C" },
      { text: "O/A mais tranquilo(a) e de boa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual tipo de fantasia de Carnaval você usaria?",
    options: [
      { text: "Destaque de escola de samba", type: "A" },
      { text: "Malandro carioca clássico", type: "B" },
      { text: "Abadá colorido e confortável", type: "C" },
      { text: "Algo simples, o importante é curtir", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase mais representa você?",
    options: [
      { text: "O show tem que continuar!", type: "A" },
      { text: "Samba é cultura, é história", type: "B" },
      { text: "Enquanto houver samba, haverá alegria", type: "C" },
      { text: "Deixa a vida me levar, vida leva eu", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Samba-Enredo",
    emoji: "🎭",
    description: "Você é pura energia e grandiosidade! Assim como o samba-enredo que embala os desfiles das escolas de samba, você adora estar no centro das atenções e fazer tudo em grande estilo!",
    traits: ["Energético(a)", "Carismático(a)", "Grandioso(a)", "Líder"],
    strengths: ["Capacidade de motivar", "Presença marcante", "Entusiasmo contagiante", "Determinação"],
    weaknesses: ["Pode ser intenso demais", "Dificuldade em relaxar", "Gosta de holofotes"],
    tips: ["Aprenda a curtir momentos menores", "Nem tudo precisa ser épico", "Descanse às vezes"],
  },
  B: {
    type: "B",
    title: "Samba de Raiz",
    emoji: "🎸",
    description: "Você é tradição e profundidade! Como o samba de raiz, você valoriza a autenticidade, a história e as letras que falam da alma. Refinado(a) e culto(a), você é um verdadeiro conhecedor!",
    traits: ["Culto(a)", "Tradicional", "Profundo(a)", "Autêntico(a)"],
    strengths: ["Conhecimento cultural", "Apreciação artística", "Conexão com raízes", "Bom gosto"],
    weaknesses: ["Pode ser nostálgico demais", "Resistência ao novo", "Às vezes elitista"],
    tips: ["Abra-se para novas experiências", "O novo também pode ser bom", "Compartilhe seu conhecimento"],
  },
  C: {
    type: "C",
    title: "Pagode",
    emoji: "🥁",
    description: "Você é alegria e diversão! Como o pagode, você é descontraído(a), animado(a) e adora uma boa festa. Sua energia positiva contagia todos ao redor e você faz amigos facilmente!",
    traits: ["Alegre", "Sociável", "Descontraído(a)", "Festeiro(a)"],
    strengths: ["Facilidade em fazer amigos", "Energia positiva", "Espontaneidade", "Bom humor"],
    weaknesses: ["Pode ser superficial", "Dificuldade em momentos sérios", "Disperso(a) às vezes"],
    tips: ["Cultive conexões mais profundas", "Reserve tempo para reflexão", "Equilibre diversão e responsabilidade"],
  },
  D: {
    type: "D",
    title: "Samba de Roda",
    emoji: "🌴",
    description: "Você é paz e conexão! Como o samba de roda baiano, você valoriza a simplicidade, a comunidade e os momentos autênticos. Tranquilo(a) e acolhedor(a), você faz todos se sentirem em casa!",
    traits: ["Tranquilo(a)", "Acolhedor(a)", "Simples", "Conectado(a)"],
    strengths: ["Capacidade de relaxar", "Criar ambiente acolhedor", "Valorizar o simples", "Boa companhia"],
    weaknesses: ["Pode parecer passivo(a)", "Falta de iniciativa às vezes", "Muito casual"],
    tips: ["Tome mais iniciativa", "Às vezes a intensidade é boa", "Saia da zona de conforto"],
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
