// Qual Seu Nível de Criatividade Brasileira?
// Descubra seu jeitinho criativo!

export const questions = [
  {
    id: 1,
    question: "O que você faz quando falta um ingrediente na receita?",
    options: [
      { text: "Improviso com o que tem, sempre funciona", type: "A" },
      { text: "Adapto, mas tento manter a essência", type: "B" },
      { text: "Procuro uma receita alternativa", type: "C" },
      { text: "Desisto e faço outra coisa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você resolve problemas no dia a dia?",
    options: [
      { text: "Gambiarra! Se funciona, tá ótimo", type: "A" },
      { text: "Penso em soluções criativas mas funcionais", type: "B" },
      { text: "Sigo o manual ou peço ajuda", type: "C" },
      { text: "Contrato alguém que entende", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você já consertou algo com fita adesiva ou arame?",
    options: [
      { text: "Várias vezes! Funciona até hoje", type: "A" },
      { text: "Algumas vezes, como solução temporária", type: "B" },
      { text: "Raramente, prefiro arrumar direito", type: "C" },
      { text: "Nunca, chamo profissional", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como você dá presentes quando está sem dinheiro?",
    options: [
      { text: "Faço eu mesmo, artesanal", type: "A" },
      { text: "Dou algo simbólico ou serviço", type: "B" },
      { text: "Junto dinheiro e dou depois", type: "C" },
      { text: "Não dou presente", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Você já transformou algo velho em algo novo?",
    options: [
      { text: "Sempre! Upcycling é minha especialidade", type: "A" },
      { text: "Às vezes, quando vejo potencial", type: "B" },
      { text: "Raramente, prefiro comprar novo", type: "C" },
      { text: "Nunca, jogo fora", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você decora sua casa?",
    options: [
      { text: "Com coisas que eu mesmo faço/adapto", type: "A" },
      { text: "Mistura de comprado e improvisado", type: "B" },
      { text: "Compro tudo pronto", type: "C" },
      { text: "Não decoro muito", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você já inventou uma ferramenta pra resolver algo?",
    options: [
      { text: "Várias! Sou inventor nato", type: "A" },
      { text: "Algumas vezes, quando precisei", type: "B" },
      { text: "Raramente", type: "C" },
      { text: "Nunca, compro o que preciso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lida com regras e processos?",
    options: [
      { text: "Encontro atalhos e jeitinhos", type: "A" },
      { text: "Sigo mas adapto quando necessário", type: "B" },
      { text: "Sigo as regras certinho", type: "C" },
      { text: "Depende da situação", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você já fez algo funcionar de um jeito que ninguém esperava?",
    options: [
      { text: "Sempre! É meu talento", type: "A" },
      { text: "Várias vezes", type: "B" },
      { text: "Às vezes acontece", type: "C" },
      { text: "Não que eu lembre", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que você acha de tutoriais DIY?",
    options: [
      { text: "Adoro! Faço e adapto pro meu jeito", type: "A" },
      { text: "Gosto e sigo quando preciso", type: "B" },
      { text: "Vejo mas raramente faço", type: "C" },
      { text: "Não me interessa", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você acha que 'brasileiro não desiste nunca'?",
    options: [
      { text: "Sim! Somos reis da criatividade", type: "A" },
      { text: "Em parte, somos resilientes", type: "B" },
      { text: "Mais ou menos", type: "C" },
      { text: "Não concordo muito", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase te define?",
    options: [
      { text: "'Na falta do ideal, faço o possível'", type: "A" },
      { text: "'Adaptar é sobreviver'", type: "B" },
      { text: "'Prefiro fazer direito'", type: "C" },
      { text: "'Cada um no seu quadrado'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mestre da Gambiarra",
    emoji: "🔧",
    description: "Você é Mestre da Gambiarra! O brasileiro raiz, rei do improviso. Fita, arame, criatividade... você faz funcionar o impossível. MacGyver brasileiro!",
    traits: ["Criativo(a)", "Improvisador(a)", "Resiliente", "Inventor(a)"],
    strengths: ["Resolve qualquer problema", "Economia", "Criatividade infinita"],
    weaknesses: ["Pode dar errado", "Soluções temporárias", "Nem sempre é o ideal"],
    tips: ["Sua criatividade é dom", "Mas às vezes vale fazer direito", "Continue inventando"],
  },
  B: {
    type: "B",
    title: "Criativo Equilibrado",
    emoji: "💡",
    description: "Você é Criativo Equilibrado! Sabe improvisar quando precisa, mas também valoriza fazer bem feito. O equilíbrio perfeito entre criatividade e qualidade!",
    traits: ["Equilibrado(a)", "Criativo(a)", "Prático(a)", "Sensato(a)"],
    strengths: ["Flexibilidade", "Bom senso", "Criatividade aplicada"],
    weaknesses: ["Pode demorar mais", "Nem sempre improvisa"],
    tips: ["Ótimo equilíbrio", "Sua criatividade é útil", "Continue assim"],
  },
  C: {
    type: "C",
    title: "Tradicional Metódico",
    emoji: "📐",
    description: "Você é Tradicional Metódico! Prefere fazer as coisas do jeito certo, sem atalhos. Você valoriza qualidade e processo. Nem tudo precisa de gambiarra!",
    traits: ["Metódico(a)", "Organizado(a)", "Tradicional", "Perfeccionista"],
    strengths: ["Qualidade", "Durabilidade", "Profissionalismo"],
    weaknesses: ["Menos flexível", "Pode ser mais caro/demorado"],
    tips: ["Qualidade importa", "Mas flexibilidade ajuda", "Nem tudo precisa ser perfeito"],
  },
  D: {
    type: "D",
    title: "Terceirizador",
    emoji: "📞",
    description: "Você é o Terceirizador! Prefere chamar quem entende ou comprar pronto. Criatividade manual não é sua praia, e tá tudo bem!",
    traits: ["Prático(a)", "Delegador(a)", "Objetivo(a)", "Direto(a)"],
    strengths: ["Profissionalismo garantido", "Menos estresse", "Tempo livre"],
    weaknesses: ["Mais caro", "Depende de outros", "Menos autonomia"],
    tips: ["Cada um tem seus talentos", "Delegar também é válido", "Nem todo mundo precisa ser criativo"],
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
