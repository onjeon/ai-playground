// Qual Tipo de Cunhado(a) Você É?
// Descubra seu perfil de cunhado(a)!

export const questions = [
  {
    id: 1,
    question: "Como é sua relação com seu cunhado(a)?",
    options: [
      { text: "Somos melhores amigos!", type: "A" },
      { text: "Boa, nos damos bem", type: "B" },
      { text: "Cordial, só nas festas de família", type: "C" },
      { text: "Complicada, evito ao máximo", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Você convida seu cunhado(a) pra rolês?",
    options: [
      { text: "Sempre! Sai mais comigo que com irmão/irmã", type: "A" },
      { text: "Às vezes, quando o programa é bom", type: "B" },
      { text: "Raramente, só eventos de família", type: "C" },
      { text: "Nunca, prefiro distância", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Você pede/empresta coisas pro cunhado(a)?",
    options: [
      { text: "O tempo todo! Compartilhamos tudo", type: "A" },
      { text: "Às vezes, sem problema", type: "B" },
      { text: "Raramente, só em emergência", type: "C" },
      { text: "Nunca, prefiro não dever nada", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você sabe dos segredos do cunhado(a)?",
    options: [
      { text: "Todos! Somos confidentes", type: "A" },
      { text: "Alguns, o que conta por aí", type: "B" },
      { text: "Poucos, não somos tão próximos", type: "C" },
      { text: "Nenhum, não tenho interesse", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Como você é nos churrascos de família?",
    options: [
      { text: "Fico com o cunhado(a), somos a dupla", type: "A" },
      { text: "Conversamos, tudo tranquilo", type: "B" },
      { text: "Cumprimento e vou pro meu canto", type: "C" },
      { text: "Evito ficar perto", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Você defende seu cunhado(a) em brigas familiares?",
    options: [
      { text: "Sempre! Somos aliados", type: "A" },
      { text: "Quando ele/ela tem razão", type: "B" },
      { text: "Fico neutro, não me meto", type: "C" },
      { text: "Fico do lado do meu sangue", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você dá presente de aniversário pro cunhado(a)?",
    options: [
      { text: "Presente pensado, conheço os gostos", type: "A" },
      { text: "Sim, algo legal mas simples", type: "B" },
      { text: "Junto com o do meu par", type: "C" },
      { text: "Não, nem lembro a data", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Você conta pro cunhado(a) quando o irmão/irmã faz besteira?",
    options: [
      { text: "Claro! Somos do mesmo time", type: "A" },
      { text: "Depende da besteira", type: "B" },
      { text: "Não, lealdade familiar primeiro", type: "C" },
      { text: "Não somos próximos pra isso", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você assistiria jogo/série com seu cunhado(a)?",
    options: [
      { text: "Fazemos isso direto!", type: "A" },
      { text: "Sim, seria divertido", type: "B" },
      { text: "Talvez, se não tiver opção", type: "C" },
      { text: "Prefiro não", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você descreve seu cunhado(a)?",
    options: [
      { text: "Irmão/irmã que a vida me deu", type: "A" },
      { text: "Pessoa legal, boa adição na família", type: "B" },
      { text: "O par do meu irmão/irmã", type: "C" },
      { text: "Uma pessoa que tolero", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você viajaria só com seu cunhado(a)?",
    options: [
      { text: "Já fizemos isso, foi ótimo!", type: "A" },
      { text: "Poderia ser divertido", type: "B" },
      { text: "Só se tivesse mais gente", type: "C" },
      { text: "Nem pensar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define sua relação com cunhado(a)?",
    options: [
      { text: "'Cunhado(a) é irmão(ã) que você escolhe'", type: "A" },
      { text: "'Família que a vida trouxe'", type: "B" },
      { text: "'Convivência pacífica'", type: "C" },
      { text: "'Mal necessário'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Cunhado(a) Melhor Amigo",
    emoji: "🤝",
    description: "Você é Cunhado(a) Melhor Amigo! Vocês são irmãos por escolha. Rolês, segredos, confiança total. Seu cunhado(a) ganhou na loteria com você!",
    traits: ["Amigo(a)", "Próximo(a)", "Leal", "Parceiro(a)"],
    strengths: ["Amizade verdadeira", "Família unida", "Apoio mútuo"],
    weaknesses: ["Pode gerar ciúmes", "Às vezes mais próximo que do irmão/irmã"],
    tips: ["Que relação linda!", "Continue cultivando", "Família agradece"],
  },
  B: {
    type: "B",
    title: "Cunhado(a) Gente Boa",
    emoji: "👍",
    description: "Você é Cunhado(a) Gente Boa! Relação saudável, sem drama. Vocês se dão bem, respeitam os espaços e curtem as festas de família juntos!",
    traits: ["Equilibrado(a)", "Respeitoso(a)", "Cordial", "Simpático(a)"],
    strengths: ["Relação saudável", "Sem conflitos", "Boa convivência"],
    weaknesses: ["Não tão profundo", "Mantém distância saudável"],
    tips: ["Ótima relação", "Equilíbrio é bom", "Continue assim"],
  },
  C: {
    type: "C",
    title: "Cunhado(a) de Evento",
    emoji: "🎄",
    description: "Você é Cunhado(a) de Evento! Vocês se veem nas festas, se cumprimentam, e é isso. Relação cordial mas distante. Funciona!",
    traits: ["Distante", "Cordial", "Formal", "Reservado(a)"],
    strengths: ["Sem conflitos", "Respeito mútuo", "Cada um no seu espaço"],
    weaknesses: ["Relação superficial", "Poderia ser mais próximo"],
    tips: ["Tá bom assim se funciona", "Mas poderia investir mais", "Família é importante"],
  },
  D: {
    type: "D",
    title: "Cunhado(a) de Guerra",
    emoji: "⚔️",
    description: "Você é Cunhado(a) de Guerra! Relação difícil, muitos conflitos ou simplesmente não vai. Festas de família são campos minados!",
    traits: ["Conflituoso(a)", "Distante", "Resistente", "Complicado(a)"],
    strengths: ["Honesto(a)", "Não finge", "Limites claros"],
    weaknesses: ["Tensão familiar", "Eventos difíceis", "Sobra pro seu par"],
    tips: ["Tente melhorar", "Pelo bem da família", "Nem sempre é fácil, mas vale tentar"],
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
