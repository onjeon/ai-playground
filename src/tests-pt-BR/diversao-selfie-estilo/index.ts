// Qual Seu Estilo de Selfie?
// Descubra como você é na hora de tirar aquela foto!

export const questions = [
  {
    id: 1,
    question: "Quantas fotos você tira pra conseguir uma boa?",
    options: [
      { text: "Uma ou duas, a primeira já serve", type: "A" },
      { text: "Umas 10, até achar o ângulo perfeito", type: "B" },
      { text: "Nenhuma, não gosto de tirar selfie", type: "C" },
      { text: "Várias, mas pra fazer careta e zoar", type: "D" },
    ],
  },
  {
    id: 2,
    question: "O que mais importa na sua selfie?",
    options: [
      { text: "Ser natural e espontânea", type: "A" },
      { text: "Luz, ângulo e produção perfeita", type: "B" },
      { text: "Não ligo muito pra isso", type: "C" },
      { text: "Ser engraçada ou criativa", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você usa filtro nas fotos?",
    options: [
      { text: "Raramente, prefiro natural", type: "A" },
      { text: "Sempre, mas discreto", type: "B" },
      { text: "Nunca, nem tiro foto", type: "C" },
      { text: "Os mais loucos e engraçados", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Onde você mais tira selfie?",
    options: [
      { text: "Em qualquer lugar, espontaneamente", type: "A" },
      { text: "Lugares bonitos, com boa luz", type: "B" },
      { text: "Quase nunca tiro", type: "C" },
      { text: "Lugares inusitados pra zoar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você faz com as selfies?",
    options: [
      { text: "Posto no story de vez em quando", type: "A" },
      { text: "Seleciono bem e posto no feed", type: "B" },
      { text: "Guardo no celular e esqueço", type: "C" },
      { text: "Mando pros amigos pra fazer rir", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é sua expressão na selfie?",
    options: [
      { text: "Sorriso natural e relaxado", type: "A" },
      { text: "Pose estudada e favorável", type: "B" },
      { text: "Sem expressão ou incomodado(a)", type: "C" },
      { text: "Careta ou expressão engraçada", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Como você reage quando alguém quer tirar selfie com você?",
    options: [
      { text: "Normal, me junto e sorrio", type: "A" },
      { text: "Peço pra ver antes de postar!", type: "B" },
      { text: "Prefiro não, mas faço por educação", type: "C" },
      { text: "Já vou fazer careta", type: "D" },
    ],
  },
  {
    id: 8,
    question: "O que te incomoda em selfies?",
    options: [
      { text: "Nada, é só uma foto", type: "A" },
      { text: "Quando não fico bem", type: "B" },
      { text: "A obrigação de participar", type: "C" },
      { text: "Quando é séria demais", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Qual sua pose favorita?",
    options: [
      { text: "Sorriso simples e natural", type: "A" },
      { text: "O ângulo que me favorece mais", type: "B" },
      { text: "Não tenho, evito poses", type: "C" },
      { text: "A mais ridícula possível", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você edita suas selfies?",
    options: [
      { text: "No máximo um ajuste de luz", type: "A" },
      { text: "Sim, edito bem antes de postar", type: "B" },
      { text: "Não, nem tiro", type: "C" },
      { text: "Só pra ficar mais engraçada", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Quantas selfies você tem no celular?",
    options: [
      { text: "Algumas, o normal", type: "A" },
      { text: "Muitas! Nunca se sabe quando vai precisar", type: "B" },
      { text: "Quase nenhuma", type: "C" },
      { text: "Um monte de caretas salvas", type: "D" },
    ],
  },
  {
    id: 12,
    question: "O que define uma boa selfie pra você?",
    options: [
      { text: "Capturar um bom momento", type: "A" },
      { text: "Estar bonito(a) na foto", type: "B" },
      { text: "Não existir, prefiro sem foto", type: "C" },
      { text: "Fazer todo mundo rir", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Selfie Natural",
    emoji: "🤳",
    description: "Você é o tipo Natural! Tira selfie sem frescura, a primeira foto já serve e não se preocupa muito com perfeição. Autenticidade é seu lema!",
    traits: ["Natural", "Espontâneo(a)", "Descomplicado(a)", "Autêntico(a)"],
    strengths: ["Autenticidade", "Não perder tempo", "Fotos genuínas", "Sem ansiedade"],
    weaknesses: ["Pode parecer desleixado(a)", "Fotos nem sempre favoráveis", "Falta de cuidado"],
    tips: ["Às vezes vale caprichar", "Um filtro leve não faz mal", "Algumas fotos merecem mais atenção"],
  },
  B: {
    type: "B",
    title: "Selfie Produzida",
    emoji: "📸",
    description: "Você é o tipo Produzido! Sabe seu ângulo, iluminação favorita e não posta nada que não esteja perfeito. Suas fotos são sempre impecáveis!",
    traits: ["Perfeccionista", "Cuidadoso(a)", "Vaidoso(a)", "Detalhista"],
    strengths: ["Fotos sempre bonitas", "Cuidado com imagem", "Conhecimento técnico", "Apresentação"],
    weaknesses: ["Demora muito", "Pode parecer falso(a)", "Pressão por perfeição"],
    tips: ["Relaxe, nem tudo precisa ser perfeito", "Fotos naturais também são bonitas", "A vida não é Instagram"],
  },
  C: {
    type: "C",
    title: "Anti-Selfie",
    emoji: "🙈",
    description: "Você é o Anti-Selfie! Não curte tirar foto de si mesmo, prefere estar atrás da câmera ou simplesmente viver o momento sem registro!",
    traits: ["Reservado(a)", "Discreto(a)", "Presente no momento", "Avesso a exposição"],
    strengths: ["Viver o presente", "Não se preocupar com aparência", "Privacidade", "Autossuficiência"],
    weaknesses: ["Falta de registros", "Pode parecer antissocial", "Perde memórias visuais"],
    tips: ["Algumas fotos são boas memórias", "Não precisa postar, mas tire", "Seus amigos querem fotos com você"],
  },
  D: {
    type: "D",
    title: "Selfie Zoeira",
    emoji: "🤪",
    description: "Você é o tipo Zoeira! Suas selfies são pra fazer rir, não pra impressionar. Caretas, filtros loucos e situações absurdas são sua especialidade!",
    traits: ["Engraçado(a)", "Criativo(a)", "Descontraído(a)", "Carismático(a)"],
    strengths: ["Fazer todos rirem", "Criatividade", "Não se levar a sério", "Memórias divertidas"],
    weaknesses: ["Nunca tem foto séria", "Pode irritar em momentos formais", "Falta de fotos bonitas"],
    tips: ["Tire algumas fotos sérias também", "Às vezes é bom ter foto bonita", "Equilibre diversão e registro"],
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
