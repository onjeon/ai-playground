// Qual Tipo de Bairro Brasileiro Combina com Você?
// Descubra em qual tipo de bairro você deveria morar!

export const questions = [
  {
    id: 1,
    question: "O que você mais valoriza em um bairro?",
    options: [
      { text: "Agitação, bares e vida noturna", type: "A" },
      { text: "Segurança, organização e conforto", type: "B" },
      { text: "Comunidade, vizinhos e simplicidade", type: "C" },
      { text: "Cultura, arte e diversidade", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como é seu ritmo de vida?",
    options: [
      { text: "Intenso, sempre tem algo acontecendo", type: "A" },
      { text: "Organizado e equilibrado", type: "B" },
      { text: "Tranquilo, sem correria", type: "C" },
      { text: "Criativo e fora do convencional", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que você faz no tempo livre?",
    options: [
      { text: "Frequento bares, restaurantes, eventos", type: "A" },
      { text: "Academia, shopping, passeios", type: "B" },
      { text: "Fico em casa ou na casa de vizinhos", type: "C" },
      { text: "Eventos culturais, exposições, música", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você se relaciona com vizinhos?",
    options: [
      { text: "Nem sei quem são, cada um na sua", type: "A" },
      { text: "Educado mas com distância", type: "B" },
      { text: "Amigos próximos, sempre por perto", type: "C" },
      { text: "Parcerias para projetos e eventos", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que combina com seu estilo?",
    options: [
      { text: "Apartamento moderno e compacto", type: "A" },
      { text: "Apartamento espaçoso em condomínio", type: "B" },
      { text: "Casa com quintal e varanda", type: "C" },
      { text: "Loft ou espaço alternativo", type: "D" },
    ],
  },
  {
    id: 6,
    question: "O que você não suportaria?",
    options: [
      { text: "Bairro parado e sem opções", type: "A" },
      { text: "Barulho e falta de organização", type: "B" },
      { text: "Vizinhos distantes e frios", type: "C" },
      { text: "Bairro sem personalidade", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Qual seu meio de transporte ideal?",
    options: [
      { text: "A pé ou app, tudo perto", type: "A" },
      { text: "Carro próprio, conforto", type: "B" },
      { text: "A pé, conheço todo mundo", type: "C" },
      { text: "Bicicleta, sustentável e livre", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como é seu fim de semana ideal?",
    options: [
      { text: "Balada na sexta, brunch no sábado", type: "A" },
      { text: "Clube, shopping, almoço em família", type: "B" },
      { text: "Churrasco com vizinhos, futebol", type: "C" },
      { text: "Feira, exposição, show alternativo", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O que você prioriza em compras?",
    options: [
      { text: "Conveniência 24h perto de casa", type: "A" },
      { text: "Shopping e mercados de qualidade", type: "B" },
      { text: "Mercadinho do bairro, padaria local", type: "C" },
      { text: "Feiras orgânicas e lojas locais", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual barulho você tolera?",
    options: [
      { text: "Som de bares e música", type: "A" },
      { text: "Nenhum, quero silêncio", type: "B" },
      { text: "Vizinhos conversando, crianças", type: "C" },
      { text: "Eventos culturais e feiras", type: "D" },
    ],
  },
  {
    id: 11,
    question: "O que te define?",
    options: [
      { text: "Urbano(a) e conectado(a)", type: "A" },
      { text: "Organizado(a) e prático(a)", type: "B" },
      { text: "Simples e comunitário(a)", type: "C" },
      { text: "Criativo(a) e alternativo(a)", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual bairro seria sua cara?",
    options: [
      { text: "Vila Madalena, Leblon, Augusta", type: "A" },
      { text: "Alphaville, Barra, bairros nobres", type: "B" },
      { text: "Bairro tradicional, subúrbio", type: "C" },
      { text: "Centro histórico, bairros culturais", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Bairro Boêmio/Agitado",
    emoji: "🌃",
    description: "Seu bairro é boêmio! Vila Madalena em SP, Lapa no Rio, ou qualquer lugar com bares, cultura e vida noturna. Você precisa de agitação e opções a qualquer hora!",
    traits: ["Urbano(a)", "Sociável", "Noturno(a)", "Conectado(a)"],
    strengths: ["Vida social ativa", "Cultura e entretenimento", "Conexões diversas", "Energia urbana"],
    weaknesses: ["Barulho constante", "Pouco descanso", "Custo de vida alto"],
    tips: ["Reserve tempo para descanso", "Nem sempre é preciso sair", "Silêncio também é bom"],
  },
  B: {
    type: "B",
    title: "Bairro Nobre/Organizado",
    emoji: "🏢",
    description: "Seu bairro é nobre e organizado! Alphaville, Barra ou condomínios planejados. Você valoriza segurança, conforto e infraestrutura de qualidade!",
    traits: ["Organizado(a)", "Exigente", "Confortável", "Prático(a)"],
    strengths: ["Segurança e conforto", "Infraestrutura completa", "Qualidade de vida", "Organização"],
    weaknesses: ["Pode ser isolado(a)", "Menos diversidade", "Vida em bolha"],
    tips: ["Explore outros bairros", "Diversidade enriquece", "Saia da zona de conforto"],
  },
  C: {
    type: "C",
    title: "Bairro Tradicional/Subúrbio",
    emoji: "🏠",
    description: "Seu bairro é tradicional! Onde todo mundo se conhece, tem padaria do seu Zé e churrasco de domingo. Você valoriza comunidade e relações de verdade!",
    traits: ["Comunitário(a)", "Tradicional", "Simples", "Acolhedor(a)"],
    strengths: ["Comunidade unida", "Relações de verdade", "Custo menor", "Qualidade de vida"],
    weaknesses: ["Menos opções", "Pode ser limitado", "Distância de centros"],
    tips: ["Experimente novidades", "Explore a cidade toda", "Mudança às vezes é boa"],
  },
  D: {
    type: "D",
    title: "Bairro Cultural/Alternativo",
    emoji: "🎨",
    description: "Seu bairro é cultural! Centro histórico, bairros de arte ou áreas revitalizadas. Você busca personalidade, diversidade e experiências autênticas!",
    traits: ["Criativo(a)", "Alternativo(a)", "Cultural", "Diverso(a)"],
    strengths: ["Diversidade cultural", "Autenticidade", "Experiências únicas", "Criatividade"],
    weaknesses: ["Infraestrutura irregular", "Gentrificação", "Às vezes caótico"],
    tips: ["Aceite alguma estrutura", "Nem tudo precisa ser único", "Conforto também importa"],
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
