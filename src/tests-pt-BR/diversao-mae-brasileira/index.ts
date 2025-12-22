// Que Tipo de Mãe Brasileira Você É/Seria?
// Descubra seu perfil materno!

export const questions = [
  {
    id: 1,
    question: "Como você reage quando o filho faz algo errado?",
    options: [
      { text: "Converso e explico as consequências", type: "A" },
      { text: "Dou bronca na hora!", type: "B" },
      { text: "Deixo ele aprender com os erros", type: "C" },
      { text: "Depende, às vezes faço vista grossa", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Qual sua reação quando o filho não come tudo?",
    options: [
      { text: "Respeito, ele sabe quando está satisfeito", type: "A" },
      { text: "'Tem criança passando fome, viu?'", type: "B" },
      { text: "Guardo pra ele comer depois", type: "C" },
      { text: "Como o resto ou ofereço sobremesa como incentivo", type: "D" },
    ],
  },
  {
    id: 3,
    question: "O filho quer sair com os amigos à noite. Você...",
    options: [
      { text: "Converso, estabeleço regras e deixo", type: "A" },
      { text: "Ligo 10 vezes e dou toque de recolher", type: "B" },
      { text: "Deixo livre, confiança é tudo", type: "C" },
      { text: "Vou junto ou marco de buscar", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Como é sua cozinha de mãe?",
    options: [
      { text: "Comida equilibrada e saudável", type: "A" },
      { text: "Fartura! Comida nunca falta", type: "B" },
      { text: "Simples, prático, o essencial", type: "C" },
      { text: "Delivery e restaurante também contam", type: "D" },
    ],
  },
  {
    id: 5,
    question: "O filho está doente. Você...",
    options: [
      { text: "Medico em casa, só vou ao médico se precisar", type: "A" },
      { text: "Hospital na primeira febre!", type: "B" },
      { text: "Observo e espero passar", type: "C" },
      { text: "Google todos os sintomas freneticamente", type: "D" },
    ],
  },
  {
    id: 6,
    question: "Como você trata as notas do filho?",
    options: [
      { text: "Incentivo o aprendizado, nota é consequência", type: "A" },
      { text: "Exijo notas altas, educação é prioridade", type: "B" },
      { text: "Cada um no seu ritmo", type: "C" },
      { text: "Ajudo com dever quando posso", type: "D" },
    ],
  },
  {
    id: 7,
    question: "O filho briga com o irmão/amigo. Você...",
    options: [
      { text: "Medeia e ensina a resolver conflitos", type: "A" },
      { text: "'Ou fazem as pazes ou vão os dois de castigo!'", type: "B" },
      { text: "Deixo eles resolverem sozinhos", type: "C" },
      { text: "Separo e distraio com outra coisa", type: "D" },
    ],
  },
  {
    id: 8,
    question: "Como você demonstra amor?",
    options: [
      { text: "Palavras e tempo de qualidade", type: "A" },
      { text: "Cuidando de tudo, comida, roupa, casa", type: "B" },
      { text: "Dando liberdade e confiança", type: "C" },
      { text: "Presentes e surpresas", type: "D" },
    ],
  },
  {
    id: 9,
    question: "O filho quer algo caro. Você...",
    options: [
      { text: "Ensino sobre dinheiro e negociamos", type: "A" },
      { text: "Se puder, compro sem pestanejar", type: "B" },
      { text: "Digo não sem muita explicação", type: "C" },
      { text: "Vejo se dá pra parcelar", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Como você lida com namorados(as) do filho?",
    options: [
      { text: "Acolho e trato como da família", type: "A" },
      { text: "Ninguém é bom o suficiente pro meu filho", type: "B" },
      { text: "Respeito mas mantenho distância", type: "C" },
      { text: "Quero ser a sogra legal", type: "D" },
    ],
  },
  {
    id: 11,
    question: "Qual sua frase mais usada?",
    options: [
      { text: "'Estou orgulhosa de você'", type: "A" },
      { text: "'Enquanto morar debaixo do meu teto...'", type: "B" },
      { text: "'Você decide'", type: "C" },
      { text: "'Deixa eu ver se consigo'", type: "D" },
    ],
  },
  {
    id: 12,
    question: "Como você se define como mãe?",
    options: [
      { text: "Educadora e parceira", type: "A" },
      { text: "Protetora e presente", type: "B" },
      { text: "Liberal e confiante", type: "C" },
      { text: "Esforçada e dedicada", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "Mãe Moderna/Coach",
    emoji: "👩‍🏫",
    description: "Você é a Mãe Moderna! Dialoga, ensina, e trata os filhos como pessoas. Educação positiva é seu lema e respeito mútuo é a base!",
    traits: ["Dialogadora", "Educadora", "Moderna", "Parceira"],
    strengths: ["Comunicação aberta", "Filhos seguros", "Relacionamento saudável", "Respeito mútuo"],
    weaknesses: ["Pode parecer permissiva", "Às vezes falta firmeza", "Demora pra decidir"],
    tips: ["Às vezes é preciso ser firme", "Nem tudo se resolve com conversa", "Limites são amor também"],
  },
  B: {
    type: "B",
    title: "Mãe Brasileira Raiz",
    emoji: "🇧🇷",
    description: "Você é a Mãe Brasileira Raiz! Chinelo que voa, comida que nunca falta, e amor incondicional. Você é a mãe clássica que todo brasileiro reconhece!",
    traits: ["Protetora", "Firme", "Dedicada", "Tradicional"],
    strengths: ["Presença forte", "Filhos disciplinados", "Cuidado total", "Amor inabalável"],
    weaknesses: ["Pode sufocar", "Muito controladora", "Dificuldade em soltar"],
    tips: ["Deixe os filhos errarem", "Eles precisam de espaço", "Confiança também é proteção"],
  },
  C: {
    type: "C",
    title: "Mãe Liberal/Zen",
    emoji: "🧘‍♀️",
    description: "Você é a Mãe Liberal! Confia nos filhos, dá liberdade e acredita que eles vão aprender com a vida. Menos controle, mais confiança!",
    traits: ["Liberal", "Tranquila", "Confiante", "Desapegada"],
    strengths: ["Filhos independentes", "Menos estresse", "Confiança mútua", "Autonomia"],
    weaknesses: ["Pode parecer distante", "Falta de limites", "Filhos podem se perder"],
    tips: ["Presença também é importante", "Alguns limites são necessários", "Acompanhe de perto quando preciso"],
  },
  D: {
    type: "D",
    title: "Mãe Esforçada",
    emoji: "💪",
    description: "Você é a Mãe Esforçada! Faz de tudo pelos filhos, mesmo com dificuldades. Parcela, negocia, dá um jeito. Amor é superar obstáculos!",
    traits: ["Esforçada", "Dedicada", "Resiliente", "Amorosa"],
    strengths: ["Superação", "Dedicação total", "Criatividade", "Amor incondicional"],
    weaknesses: ["Pode se sacrificar demais", "Dificuldade em dizer não", "Cansaço constante"],
    tips: ["Cuide de você também", "Filhos aprendem a valorizar o que têm", "Não precisa dar tudo"],
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
