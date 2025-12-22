// Qual Tipo de Aposentado Você Será?
// Descubra seu perfil de aposentadoria!

export const questions = [
  {
    id: 1,
    question: "O que você faria no primeiro dia de aposentado?",
    options: [
      { text: "Viajaria imediatamente", type: "A" },
      { text: "Descansaria em casa, finalmente", type: "B" },
      { text: "Começaria um novo projeto/hobby", type: "C" },
      { text: "Ficaria perdido, sem saber o que fazer", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você ocuparia seu tempo?",
    options: [
      { text: "Viagens, passeios, conhecer lugares", type: "A" },
      { text: "Casa, família, netos, tranquilidade", type: "B" },
      { text: "Trabalho voluntário ou novo negócio", type: "C" },
      { text: "TV, sofá, descanso total", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Qual seria seu hobby principal?",
    options: [
      { text: "Viajar e conhecer culturas", type: "A" },
      { text: "Jardinagem, cozinhar, artesanato", type: "B" },
      { text: "Aprender algo novo, cursos, estudos", type: "C" },
      { text: "Assistir séries e descansar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você continuaria trabalhando?",
    options: [
      { text: "Não! Trabalhei demais, agora é curtir", type: "A" },
      { text: "Talvez algo leve, em casa", type: "B" },
      { text: "Sim, mas em algo que amo", type: "C" },
      { text: "Se precisar de dinheiro, sim", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Onde você gostaria de morar aposentado?",
    options: [
      { text: "Lugar diferente a cada temporada", type: "A" },
      { text: "Na mesma casa de sempre", type: "B" },
      { text: "Interior ou praia, mais calmo", type: "C" },
      { text: "Onde for mais barato", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como seria sua rotina?",
    options: [
      { text: "Sem rotina! Cada dia uma aventura", type: "A" },
      { text: "Tranquila, café com os amigos, netos", type: "B" },
      { text: "Organizada com projetos e atividades", type: "C" },
      { text: "Dormir, comer, TV, repetir", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você está planejando sua aposentadoria?",
    options: [
      { text: "Sim! Lista de lugares pra conhecer", type: "A" },
      { text: "Um pouco, pensando no futuro", type: "B" },
      { text: "Sim, já tenho projetos em mente", type: "C" },
      { text: "Não, prefiro não pensar nisso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você lidaria com mais tempo livre?",
    options: [
      { text: "Finalmente! Vou aproveitar tudo", type: "A" },
      { text: "Bem, iria curtir a família", type: "B" },
      { text: "Preencheria com atividades produtivas", type: "C" },
      { text: "Provavelmente ficaria entediado", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você seria aquele avô/avó que...",
    options: [
      { text: "Leva os netos pra viajar", type: "A" },
      { text: "Cuida com amor e paciência", type: "B" },
      { text: "Ensina coisas novas e interessantes", type: "C" },
      { text: "Deixa fazer tudo, é o mais legal", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Qual seria seu maior medo na aposentadoria?",
    options: [
      { text: "Não ter saúde pra aproveitar", type: "A" },
      { text: "Ficar longe da família", type: "B" },
      { text: "Ficar sem propósito", type: "C" },
      { text: "Não ter dinheiro suficiente", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você participaria de grupos de terceira idade?",
    options: [
      { text: "Sim, os de viagem e dança!", type: "A" },
      { text: "Talvez, pra socializar", type: "B" },
      { text: "Se tivesse algo interessante", type: "C" },
      { text: "Não, prefiro ficar no meu canto", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define sua aposentadoria ideal?",
    options: [
      { text: "'Enfim, livre pra conhecer o mundo!'", type: "A" },
      { text: "'Tempo de qualidade com quem amo'", type: "B" },
      { text: "'Nova fase, novos projetos!'", type: "C" },
      { text: "'Finalmente posso descansar'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Aposentado Aventureiro",
    emoji: "🌍",
    description: "Você será o Aposentado Aventureiro! Mal pode esperar pra pegar a estrada e conhecer o mundo. Sua aposentadoria será cheia de viagens, experiências e aventuras!",
    traits: ["Aventureiro(a)", "Energético(a)", "Curioso(a)", "Livre"],
    strengths: ["Vida plena", "Muitas experiências", "Juventude de espírito"],
    weaknesses: ["Pode gastar muito", "Saúde pode limitar", "Longe da família"],
    tips: ["Cuide da saúde pra aproveitar", "Planeje financeiramente", "Vai ser incrível!"],
  },
  B: {
    type: "B",
    title: "Aposentado Família",
    emoji: "👴",
    description: "Você será o Aposentado Família! Sua maior alegria será curtir a família, os netos, a casa. Uma aposentadoria tranquila, cheia de amor e momentos especiais!",
    traits: ["Familiar", "Amoroso(a)", "Tranquilo(a)", "Dedicado(a)"],
    strengths: ["Laços fortes", "Paz", "Propósito na família"],
    weaknesses: ["Pode depender muito da família", "Rotina monótona"],
    tips: ["Família é tudo", "Mantenha outras atividades também", "Aproveite cada momento"],
  },
  C: {
    type: "C",
    title: "Aposentado Produtivo",
    emoji: "🎯",
    description: "Você será o Aposentado Produtivo! Aposentadoria não é parar, é recomeçar. Você terá projetos, estudos, talvez um novo negócio. Sempre em movimento!",
    traits: ["Produtivo(a)", "Ativo(a)", "Empreendedor(a)", "Focado(a)"],
    strengths: ["Propósito", "Mente ativa", "Realização pessoal"],
    weaknesses: ["Dificuldade em desacelerar", "Pode virar workaholic de novo"],
    tips: ["Equilibre trabalho e descanso", "Você merece relaxar também", "Projetos são ótimos!"],
  },
  D: {
    type: "D",
    title: "Aposentado Zen",
    emoji: "🛋️",
    description: "Você será o Aposentado Zen! Finalmente o descanso merecido. Sofá, séries, tranquilidade total. Você trabalhou a vida toda pra isso, agora é hora de não fazer nada!",
    traits: ["Tranquilo(a)", "Descansado(a)", "Simples", "Despreocupado(a)"],
    strengths: ["Paz total", "Sem estresse", "Aproveitando o merecido descanso"],
    weaknesses: ["Pode ficar sedentário", "Risco de tédio", "Isolamento social"],
    tips: ["Descanse, você merece", "Mas mexa o corpo de vez em quando", "Socializar é importante"],
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
