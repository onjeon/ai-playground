// Estilo de Apego
// Descubra como você se conecta emocionalmente nos relacionamentos!

export const questions = [
  {
    id: 1,
    question: "Quando você começa um relacionamento, como se sente?",
    options: [
      { text: "Animado(a) e confiante de que vai dar certo", type: "A" },
      { text: "Empolgado(a), mas com medo de me machucar", type: "B" },
      { text: "Cauteloso(a), prefiro manter certa distância", type: "C" },
      { text: "Confuso(a), quero e não quero ao mesmo tempo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Seu(sua) parceiro(a) não responde a mensagem. O que você pensa?",
    options: [
      { text: "Deve estar ocupado(a), responde depois", type: "A" },
      { text: "Fico ansioso(a), será que está brava(o) comigo?", type: "B" },
      { text: "Normal, também demoro pra responder", type: "C" },
      { text: "Às vezes me preocupo, às vezes nem ligo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Como você reage quando seu par quer mais proximidade?",
    options: [
      { text: "Adoro, retribuo na mesma intensidade", type: "A" },
      { text: "Fico muito feliz, é o que eu preciso!", type: "B" },
      { text: "Me sinto sufocado(a), preciso de espaço", type: "C" },
      { text: "Depende do dia, às vezes quero, às vezes não", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Em momentos de conflito no relacionamento, você...",
    options: [
      { text: "Converso com calma pra resolver", type: "A" },
      { text: "Fico muito ansioso(a), tenho medo do término", type: "B" },
      { text: "Me afasto, preciso de tempo sozinho(a)", type: "C" },
      { text: "Às vezes explodo, às vezes fujo", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você se sente sobre depender emocionalmente de alguém?",
    options: [
      { text: "Saudável, faz parte de um relacionamento", type: "A" },
      { text: "Preciso muito, me sinto incompleto(a) sozinho(a)", type: "B" },
      { text: "Evito ao máximo, prefiro me bastar", type: "C" },
      { text: "Tenho vontade mas tenho medo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Quando a pessoa que você ama se afasta um pouco...",
    options: [
      { text: "Entendo que precisa de espaço", type: "A" },
      { text: "Fico desesperado(a), faço de tudo pra me aproximar", type: "B" },
      { text: "Fico aliviado(a), também gosto do meu espaço", type: "C" },
      { text: "Fico confuso(a), não sei como reagir", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual sua maior insegurança em relacionamentos?",
    options: [
      { text: "Não tenho muitas inseguranças profundas", type: "A" },
      { text: "Medo de ser abandonado(a) ou trocado(a)", type: "B" },
      { text: "Medo de perder minha liberdade e independência", type: "C" },
      { text: "Medo de me machucar e de machucar o outro", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você demonstra amor?",
    options: [
      { text: "De forma equilibrada, com carinho e respeito", type: "A" },
      { text: "Intensamente, me dedico 100%", type: "B" },
      { text: "Sutilmente, prefiro mostrar por ações", type: "C" },
      { text: "De forma inconsistente, depende do momento", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você acha fácil confiar nas pessoas?",
    options: [
      { text: "Sim, confio até que provem o contrário", type: "A" },
      { text: "Confio, mas sempre com medo de me decepcionar", type: "B" },
      { text: "Demoro muito pra confiar em alguém", type: "C" },
      { text: "Quero confiar, mas é muito difícil pra mim", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Depois de um término, como você fica?",
    options: [
      { text: "Triste, mas me recupero com o tempo", type: "A" },
      { text: "Devastado(a), demoro muito pra superar", type: "B" },
      { text: "Sigo em frente relativamente rápido", type: "C" },
      { text: "Entre alívio e desespero, sentimentos misturados", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Apego Seguro",
    emoji: "🌟",
    percentage: 90,
    description: "Você tem um estilo de apego seguro! Se sente confortável com intimidade e independência. Confia nas pessoas, comunica suas necessidades e mantém relacionamentos saudáveis.",
    characteristics: ["Confiante", "Equilibrado(a)", "Boa comunicação", "Seguro(a) emocionalmente"],
    advice: "Você tem uma base emocional sólida. Continue cultivando relacionamentos saudáveis e seja paciente com parceiros que têm estilos de apego diferentes do seu.",
  },
  B: {
    type: "B",
    title: "Apego Ansioso",
    emoji: "💭",
    percentage: 75,
    description: "Você tem um estilo de apego ansioso. Precisa de muita validação e proximidade. Tem medo de abandono e às vezes se cobra demais pra manter o relacionamento.",
    characteristics: ["Intenso(a)", "Carente de validação", "Medo de abandono", "Muito dedicado(a)"],
    advice: "Trabalhe sua autoestima! Você não precisa da validação do outro pra ser completo(a). Pratique autocuidado e considere terapia pra entender suas necessidades emocionais.",
  },
  C: {
    type: "C",
    title: "Apego Evitativo",
    emoji: "🏔️",
    percentage: 65,
    description: "Você tem um estilo de apego evitativo. Valoriza muito sua independência e tem dificuldade com intimidade profunda. Tende a se afastar quando as coisas ficam muito intensas.",
    characteristics: ["Independente", "Reservado(a)", "Evita intimidade", "Autossuficiente"],
    advice: "Intimidade não significa perda de liberdade. Tente se abrir aos poucos com pessoas de confiança. Vulnerabilidade pode ser assustadora, mas é essencial pra conexões profundas.",
  },
  D: {
    type: "D",
    title: "Apego Desorganizado",
    emoji: "🌀",
    percentage: 55,
    description: "Você tem um estilo de apego desorganizado. Oscila entre querer intimidade e ter medo dela. Seus relacionamentos podem ser intensos e confusos, com altos e baixos.",
    characteristics: ["Ambivalente", "Intenso(a)", "Conflituoso(a) internamente", "Imprevisível"],
    advice: "Esse padrão geralmente vem de experiências passadas. Terapia pode ajudar muito a entender e trabalhar essas questões. Você merece relacionamentos estáveis e saudáveis!",
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
