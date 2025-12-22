// Qual Seu Perfil de Café?
// Descubra como você é com o cafezinho brasileiro!

export const questions = [
  {
    id: 1,
    question: "Quantos cafés você toma por dia?",
    options: [
      { text: "Mais de 5, sou movido a café", type: "A" },
      { text: "2-3, o normal", type: "B" },
      { text: "1 ou menos", type: "C" },
      { text: "Depende do dia e do stress", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você toma seu café?",
    options: [
      { text: "Puro e forte, sem frescura", type: "A" },
      { text: "Com um pouco de leite ou açúcar", type: "B" },
      { text: "Cappuccino, latte, bem elaborado", type: "C" },
      { text: "Qualquer jeito que tiver café", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O que acontece se você não tomar café?",
    options: [
      { text: "Dor de cabeça e mau humor garantidos", type: "A" },
      { text: "Fico um pouco mais lento", type: "B" },
      { text: "Normal, não sou dependente", type: "C" },
      { text: "Depende, às vezes nem percebo", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Seu café da manhã é...",
    options: [
      { text: "Café. Só café. Talvez pão.", type: "A" },
      { text: "Café com pão, manteiga, o básico", type: "B" },
      { text: "Café elaborado com frutas e tal", type: "C" },
      { text: "O que der tempo de tomar", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Alguém oferece café. Você...",
    options: [
      { text: "Aceito sempre, mesmo tendo tomado", type: "A" },
      { text: "Aceito se não tiver tomado recente", type: "B" },
      { text: "Só se for um café bom", type: "C" },
      { text: "Depende da hora e do lugar", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você toma café antes de dormir?",
    options: [
      { text: "Sim, não afeta meu sono", type: "A" },
      { text: "Não, senão não durmo", type: "B" },
      { text: "Às vezes, um descafeinado", type: "C" },
      { text: "Depende de quanto estou cansado", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você entende de tipos de café?",
    options: [
      { text: "Não, café é café", type: "A" },
      { text: "O básico, conheço algumas marcas", type: "B" },
      { text: "Sim! Grãos, torras, origens", type: "C" },
      { text: "Um pouco, o suficiente", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você faz seu próprio café ou compra?",
    options: [
      { text: "Faço em casa, rende mais", type: "A" },
      { text: "Faço mas também compro fora", type: "B" },
      { text: "Prefiro cafeterias boas", type: "C" },
      { text: "O que for mais prático no momento", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Café combina com o quê pra você?",
    options: [
      { text: "Com tudo! Qualquer hora, qualquer lugar", type: "A" },
      { text: "Pão de queijo ou bolo", type: "B" },
      { text: "Sobremesas e momentos especiais", type: "C" },
      { text: "Trabalho e tarefas", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Você já tentou parar de tomar café?",
    options: [
      { text: "Nunca, nem penso nisso", type: "A" },
      { text: "Já tentei reduzir, sem sucesso", type: "B" },
      { text: "Sim, e consegui controlar", type: "C" },
      { text: "Não preciso, tomo pouco", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual hora é a melhor pro café?",
    options: [
      { text: "Todas as horas são boas", type: "A" },
      { text: "De manhã e depois do almoço", type: "B" },
      { text: "De manhã ou em momentos especiais", type: "C" },
      { text: "Quando preciso de energia", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'Primeiro o café, depois as pessoas'", type: "A" },
      { text: "'Um cafezinho sempre cai bem'", type: "B" },
      { text: "'Café é ritual, não rotina'", type: "C" },
      { text: "'Café quando precisa'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Viciado em Café",
    emoji: "☕",
    description: "Você é Viciado em Café! Seu sangue é praticamente cafeína. Sem café você não funciona e ninguém deve falar com você antes da primeira xícara!",
    traits: ["Dependente", "Intenso(a)", "Energético(a)", "Café-lover"],
    strengths: ["Energia constante", "Nunca recusa café", "Sabe apreciar", "Ritual sagrado"],
    weaknesses: ["Dependência química", "Dor de cabeça sem café", "Gasta muito em café"],
    tips: ["Tente reduzir aos poucos", "Hidrate-se também", "Café demais faz mal"],
  },
  B: {
    type: "B",
    title: "Café Brasileiro Clássico",
    emoji: "🫘",
    description: "Você é o Café Brasileiro Clássico! O cafezinho tradicional, na medida certa. Você representa o brasileiro médio que não vive sem mas não exagera!",
    traits: ["Equilibrado(a)", "Tradicional", "Brasileiro(a)", "Prático(a)"],
    strengths: ["Equilíbrio", "Aprecia sem exagerar", "Tradição", "Praticidade"],
    weaknesses: ["Nada muito especial", "Pode virar rotina", "Sem sofisticação"],
    tips: ["Experimente cafés diferentes", "Você está bem assim", "Tradição é boa"],
  },
  C: {
    type: "C",
    title: "Sommelier de Café",
    emoji: "🎩",
    description: "Você é o Sommelier de Café! Conhece grãos, torras, métodos. Café pra você é experiência, não apenas cafeína. Você eleva o cafezinho à arte!",
    traits: ["Conhecedor(a)", "Sofisticado(a)", "Seletivo(a)", "Apreciador(a)"],
    strengths: ["Conhecimento", "Bom gosto", "Experiências únicas", "Apreciação real"],
    weaknesses: ["Pode ser esnobe", "Gasta muito", "Nem sempre tem café bom"],
    tips: ["Café simples também é bom", "Nem todo mundo entende", "Compartilhe seu conhecimento"],
  },
  D: {
    type: "D",
    title: "Café Funcional",
    emoji: "⚡",
    description: "Você é o Café Funcional! Café é ferramenta, combustível pra funcionar. Você toma quando precisa, não por prazer ou vício, mas por necessidade!",
    traits: ["Prático(a)", "Funcional", "Equilibrado(a)", "Objetivo(a)"],
    strengths: ["Sem dependência", "Uso consciente", "Flexibilidade", "Praticidade"],
    weaknesses: ["Pode não apreciar", "Perde a experiência", "Muito utilitário"],
    tips: ["Aprecie o momento do café", "Nem tudo é função", "Experimente apreciar mais"],
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
