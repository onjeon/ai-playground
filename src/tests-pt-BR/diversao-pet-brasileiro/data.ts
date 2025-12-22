// Dono de Pet Brasileiro
// Descubra que tipo de dono(a) de pet você é!

export const questions = [
  {
    id: 1,
    question: "Seu pet dorme onde?",
    options: [
      { text: "Na minha cama, junto comigo", type: "A" },
      { text: "Na caminha dele, no meu quarto", type: "B" },
      { text: "Onde ele quiser, a casa é dele", type: "C" },
      { text: "No lugar dele, com regras claras", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Na hora de comer, seu pet...",
    options: [
      { text: "Come comida natural que eu preparo", type: "A" },
      { text: "Ração premium de qualidade", type: "B" },
      { text: "Ração normal e uns petiscos de vez em quando", type: "C" },
      { text: "Come no horário certo, sem manha", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Seu celular tá cheio de fotos do seu pet?",
    options: [
      { text: "99% das fotos são dele, óbvio", type: "A" },
      { text: "Bastante, tenho até álbum separado", type: "B" },
      { text: "Algumas, quando ele tá engraçado", type: "C" },
      { text: "Poucas, normal", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você viaja e precisa deixar o pet. Como se sente?",
    options: [
      { text: "Péssimo, ligo todo dia pra saber dele", type: "A" },
      { text: "Preocupado, deixo com alguém de confiança", type: "B" },
      { text: "Tranquilo, ele fica bem", type: "C" },
      { text: "Normal, faz parte", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Seu pet faz aniversário. Você...",
    options: [
      { text: "Festa completa com bolo pet-friendly", type: "A" },
      { text: "Um petisco especial e foto bonita", type: "B" },
      { text: "Lembro e faço carinho extra", type: "C" },
      { text: "Nem lembro a data exata", type: "D" },
    ],
  },
  {
    id: 6,
    question: "No pet shop, você...",
    options: [
      { text: "Compro tudo de melhor, ele merece", type: "A" },
      { text: "Escolho produtos bons com preço justo", type: "B" },
      { text: "Levo o básico: ração e alguns brinquedos", type: "C" },
      { text: "Só o necessário, sem exageros", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Seu pet fica doentinho. Sua reação?",
    options: [
      { text: "Desespero total, corro pro vet 24h", type: "A" },
      { text: "Preocupo e levo ao veterinário logo", type: "B" },
      { text: "Observo primeiro, se piorar levo", type: "C" },
      { text: "Vejo se passa, animais se recuperam", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você conversa com seu pet?",
    options: [
      { text: "O tempo todo, ele é meu confidente", type: "A" },
      { text: "Bastante, é uma companhia", type: "B" },
      { text: "Às vezes, quando tô de bom humor", type: "C" },
      { text: "Só comandos básicos", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Seu pet nas redes sociais...",
    options: [
      { text: "Tem perfil próprio com seguidores", type: "A" },
      { text: "Aparece sempre nas minhas fotos", type: "B" },
      { text: "Posto de vez em quando", type: "C" },
      { text: "Raramente ou nunca posto", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Se seu pet pudesse falar, diria que você é...",
    options: [
      { text: "A melhor mãe/pai do mundo!", type: "A" },
      { text: "Um(a) dono(a) muito dedicado(a)", type: "B" },
      { text: "Um(a) companheiro(a) legal", type: "C" },
      { text: "Alguém que cuida bem de mim", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "O Pai/Mãe de Pet",
    emoji: "🥹",
    percentage: 95,
    description: "Você é O Pai/Mãe de Pet! Seu bichinho é literalmente seu filho. Dorme junto, come gourmet, tem guarda-roupa e festinha de aniversário. Os veterinários te conhecem pelo nome e seu pet é sua foto de perfil!",
    characteristics: ["Dedicado(a)", "Apaixonado(a)", "Protetor(a)", "Generoso(a)"],
    advice: "Seu amor é lindo! Só lembra que ele também é um animal e precisa de limites. Mas continue dando todo esse carinho - pets amados são pets felizes!",
  },
  B: {
    type: "B",
    title: "O Dono(a) Responsável",
    emoji: "💚",
    percentage: 80,
    description: "Você é O Dono(a) Responsável! Cuida com carinho mas sem exageros. Vacina em dia, ração de qualidade, passeios regulares. Seu pet é bem cuidado e você é o exemplo de equilíbrio!",
    characteristics: ["Responsável", "Equilibrado(a)", "Carinhoso(a)", "Organizado(a)"],
    advice: "Você acertou a dose! Continue assim, dando amor com responsabilidade. Seu pet tem muita sorte de ter você.",
  },
  C: {
    type: "C",
    title: "O Companheiro Descontraído",
    emoji: "😎",
    percentage: 70,
    description: "Você é O Companheiro Descontraído! Seu pet é um parceiro de vida, sem frescura. Vocês têm uma relação tranquila e natural. Nada de exageros, só companheirismo de verdade!",
    characteristics: ["Tranquilo(a)", "Natural", "Prático(a)", "Amigável"],
    advice: "Sua relação com seu pet é leve e gostosa! Só não esquece dos cuidados básicos - saúde e carinho nunca são demais.",
  },
  D: {
    type: "D",
    title: "O Dono(a) Prático",
    emoji: "📋",
    percentage: 60,
    description: "Você é O Dono(a) Prático! Cuida do que precisa, sem drama. Pet é pet, humano é humano. Você dá o básico com qualidade e espera que o bichinho seja independente. Relação funcional e direta!",
    characteristics: ["Prático(a)", "Objetivo(a)", "Independente", "Racional"],
    advice: "Seu pet tá bem cuidado, mas talvez um carinho extra faça bem pra vocês dois. Animais respondem muito ao afeto - experimente um pouco mais de conexão!",
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
