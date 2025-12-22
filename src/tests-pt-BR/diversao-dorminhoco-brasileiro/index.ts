// Como Você Dorme?
// Descubra seu perfil de sono brasileiro!

export const questions = [
  {
    id: 1,
    question: "Que horas você geralmente dorme?",
    options: [
      { text: "Cedo, antes das 22h", type: "A" },
      { text: "Por volta da meia-noite", type: "B" },
      { text: "De madrugada, 2h ou mais", type: "C" },
      { text: "Horário variável, depende do dia", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Como você acorda pela manhã?",
    options: [
      { text: "Naturalmente, bem disposto(a)", type: "A" },
      { text: "Com despertador, mas de boa", type: "B" },
      { text: "Com muito sofrimento e snooze", type: "C" },
      { text: "Depende de quanto dormi", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Quantas horas você dorme por noite?",
    options: [
      { text: "7-8 horas, certinho", type: "A" },
      { text: "6-7 horas, o suficiente", type: "B" },
      { text: "5 ou menos, durmo pouco", type: "C" },
      { text: "Varia muito, de 4 a 10", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Você cochila durante o dia?",
    options: [
      { text: "Raramente, não preciso", type: "A" },
      { text: "Às vezes, quando dá", type: "B" },
      { text: "Sempre que possível", type: "C" },
      { text: "Cochilo substitui meu sono noturno", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O que você faz antes de dormir?",
    options: [
      { text: "Rotina de sono, desconecto tudo", type: "A" },
      { text: "Leio ou assisto algo leve", type: "B" },
      { text: "Celular até cair no sono", type: "C" },
      { text: "Depende, não tenho rotina", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como é seu sono?",
    options: [
      { text: "Profundo e restaurador", type: "A" },
      { text: "Geralmente bom", type: "B" },
      { text: "Leve, acordo várias vezes", type: "C" },
      { text: "Irregular, nunca sei como vou dormir", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Você sonha com frequência?",
    options: [
      { text: "Sim, e lembro dos sonhos", type: "A" },
      { text: "Às vezes", type: "B" },
      { text: "Raramente lembro", type: "C" },
      { text: "Sonho muito, mas confuso", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Fim de semana você dorme...",
    options: [
      { text: "No mesmo horário da semana", type: "A" },
      { text: "Um pouco mais tarde", type: "B" },
      { text: "Até tarde e acordo tarde", type: "C" },
      { text: "Completamente diferente da semana", type: "D" },
    ],
  },
  {
    id: 9,
    question: "Você é mais produtivo quando?",
    options: [
      { text: "De manhã, sou matutino(a)", type: "A" },
      { text: "Durante o dia, horário comercial", type: "B" },
      { text: "À noite/madrugada, sou noturno(a)", type: "C" },
      { text: "Varia muito, não sei", type: "D" },
    ],
  },
  {
    id: 10,
    question: "O que atrapalha seu sono?",
    options: [
      { text: "Quase nada, durmo bem", type: "A" },
      { text: "Barulho ou preocupações", type: "B" },
      { text: "Celular e séries", type: "C" },
      { text: "Minha própria falta de rotina", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Você considera seu sono saudável?",
    options: [
      { text: "Sim, tenho boa higiene do sono", type: "A" },
      { text: "Razoável, poderia melhorar", type: "B" },
      { text: "Não, sei que durmo mal", type: "C" },
      { text: "Não sei avaliar", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Qual frase define seu sono?",
    options: [
      { text: "'Durmo como um anjo'", type: "A" },
      { text: "'Dorme bem quem tem a consciência limpa'", type: "B" },
      { text: "'Dormir é perda de tempo'", type: "C" },
      { text: "'Meu sono é um mistério'", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Dorminhoco Exemplar",
    emoji: "😴",
    description: "Você é o Dorminhoco Exemplar! Dorme cedo, acorda bem, tem rotina de sono saudável. Você é o exemplo que médicos recomendam!",
    traits: ["Disciplinado(a)", "Saudável", "Matutino(a)", "Descansado(a)"],
    strengths: ["Saúde do sono", "Energia de manhã", "Rotina saudável", "Disposição"],
    weaknesses: ["Pode perder noites divertidas", "Inflexibilidade", "Dorme cedo demais pra alguns"],
    tips: ["Às vezes vale variar", "Uma noite fora da rotina não mata", "Continue priorizando sono"],
  },
  B: {
    type: "B",
    title: "Dorminhoco Normal",
    emoji: "🛏️",
    description: "Você é o Dorminhoco Normal! Dorme razoavelmente bem, sem exageros. Seu sono funciona, mesmo não sendo perfeito!",
    traits: ["Equilibrado(a)", "Funcional", "Adaptável", "Normal"],
    strengths: ["Flexibilidade", "Sono funcional", "Equilíbrio", "Adaptação"],
    weaknesses: ["Poderia dormir melhor", "Às vezes cansado(a)", "Sem otimização"],
    tips: ["Melhore a higiene do sono", "Tente dormir mais cedo", "Rotina ajuda"],
  },
  C: {
    type: "C",
    title: "Coruja Noturna",
    emoji: "🦉",
    description: "Você é a Coruja! A noite é seu habitat natural. Dorme tarde, acorda tarde, e provavelmente está lendo isso de madrugada!",
    traits: ["Noturno(a)", "Privado de sono", "Criativo(a) à noite", "Resistente"],
    strengths: ["Produtividade noturna", "Criatividade", "Tranquilidade da madrugada", "Sem interrupções"],
    weaknesses: ["Cansaço diurno", "Dificuldade com horários", "Saúde comprometida"],
    tips: ["Tente dormir mais cedo", "Sono é importante pra saúde", "A noite vai continuar existindo"],
  },
  D: {
    type: "D",
    title: "Caótico do Sono",
    emoji: "🌀",
    description: "Você é o Caótico! Sem rotina, sem horário, seu sono é uma aventura diferente a cada dia. Você dorme quando o corpo exige!",
    traits: ["Irregular", "Adaptável", "Imprevisível", "Flexível"],
    strengths: ["Adaptação a qualquer horário", "Flexibilidade total", "Sem rigidez", "Sobrevive de qualquer jeito"],
    weaknesses: ["Saúde do sono ruim", "Cansaço crônico", "Corpo nunca sabe quando descansar"],
    tips: ["Crie alguma rotina", "Seu corpo precisa de padrão", "Regularidade melhora tudo"],
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
