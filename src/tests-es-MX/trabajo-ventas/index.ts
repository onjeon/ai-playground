// Test de Aptitud en Ventas - ¿Tienes madera de vendedor?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes hablando con desconocidos?',
    options: [
      { text: 'Me encanta, soy muy sociable', type: 'A' },
      { text: 'Bien, puedo hacerlo sin problema', type: 'B' },
      { text: 'Me incomoda un poco', type: 'C' },
      { text: 'Lo evito siempre que puedo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas el rechazo?',
    options: [
      { text: 'Es parte del juego, no me afecta', type: 'A' },
      { text: 'Me molesta pero lo supero rápido', type: 'B' },
      { text: 'Me afecta y tardo en recuperarme', type: 'C' },
      { text: 'Me desmotiva completamente', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tanto te gusta persuadir a otros?',
    options: [
      { text: 'Me encanta convencer a la gente', type: 'A' },
      { text: 'Puedo hacerlo si creo en algo', type: 'B' },
      { text: 'No es mi fuerte pero lo intento', type: 'C' },
      { text: 'Me incomoda tratar de convencer', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes con metas y comisiones?',
    options: [
      { text: 'Me motivan mucho, son mi combustible', type: 'A' },
      { text: 'Me gustan, me dan enfoque', type: 'B' },
      { text: 'Me estresan un poco', type: 'C' },
      { text: 'Prefiero sueldo fijo sin presión', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan competitivo eres?',
    options: [
      { text: 'Muy competitivo, quiero ser el mejor', type: 'A' },
      { text: 'Competitivo, me gusta ganar', type: 'B' },
      { text: 'Algo competitivo', type: 'C' },
      { text: 'No soy competitivo, no me importa', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes haciendo llamadas en frío?',
    options: [
      { text: 'Sin problema, es parte del trabajo', type: 'A' },
      { text: 'Puedo hacerlo aunque no es mi favorito', type: 'B' },
      { text: 'Me cuesta mucho, me pone nervioso', type: 'C' },
      { text: 'No puedo, me da mucha ansiedad', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan bueno eres escuchando a otros?',
    options: [
      { text: 'Excelente, escucho para entender necesidades', type: 'A' },
      { text: 'Bien, me interesa lo que dicen', type: 'B' },
      { text: 'Regular, a veces me adelanto', type: 'C' },
      { text: 'Prefiero hablar que escuchar', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo manejas la presión por resultados?',
    options: [
      { text: 'Me motiva, rindo mejor bajo presión', type: 'A' },
      { text: 'La manejo bien generalmente', type: 'B' },
      { text: 'Me estresa bastante', type: 'C' },
      { text: 'Me paraliza, no puedo funcionar', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan persistente eres?',
    options: [
      { text: 'Muy persistente, no me rindo fácil', type: 'A' },
      { text: 'Bastante, insisto varias veces', type: 'B' },
      { text: 'Me rindo si no veo resultados', type: 'C' },
      { text: 'No me gusta insistir, es incómodo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo reaccionas ante objeciones de un cliente?',
    options: [
      { text: 'Las veo como oportunidad para convencer', type: 'A' },
      { text: 'Las escucho y trato de resolverlas', type: 'B' },
      { text: 'Me desaniman un poco', type: 'C' },
      { text: 'Me quedo sin saber qué decir', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tanto te motiva el dinero?',
    options: [
      { text: 'Mucho, quiero ganar bien', type: 'A' },
      { text: 'Es importante pero no lo único', type: 'B' },
      { text: 'Con lo básico estoy bien', type: 'C' },
      { text: 'No es mi principal motivación', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo te describirían otros?',
    options: [
      { text: 'Carismático y persuasivo', type: 'A' },
      { text: 'Amable y comunicativo', type: 'B' },
      { text: 'Tranquilo y reservado', type: 'C' },
      { text: 'Callado e introvertido', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏆 Vendedor Nato',
    description: 'Tienes todas las cualidades de un vendedor exitoso: carisma, resiliencia, competitividad y motivación por resultados. Las ventas son tu campo de batalla ideal.',
    traits: ['Carismático', 'Resiliente', 'Competitivo', 'Persuasivo'],
    advice: 'Las ventas son lo tuyo. Busca industrias que te apasionen y podrás ganar muy bien haciendo lo que mejor sabes.',
  },
  B: {
    title: '💼 Vendedor Potencial',
    description: 'Tienes habilidades vendedoras aunque no todas están desarrolladas. Con entrenamiento y experiencia podrías ser muy bueno en ventas.',
    traits: ['Comunicativo', 'Adaptable', 'Sociable', 'En desarrollo'],
    advice: 'Podrías ser buen vendedor con práctica. Considera roles de ventas consultivas donde la presión es menor.',
  },
  C: {
    title: '🤔 Ventas No es tu Fuerte',
    description: 'Las ventas no son tu habilidad natural. El rechazo te afecta, la presión te estresa y persuadir no te sale fácil. Hay otros roles donde brillarías más.',
    traits: ['Sensible', 'Técnico', 'Operativo', 'De apoyo'],
    advice: 'Quizás roles de soporte, operaciones o técnicos sean mejor opción para ti que las ventas directas.',
  },
  D: {
    title: '🚫 Evita las Ventas',
    description: 'Las ventas definitivamente no son para ti. Te drenarían emocionalmente y probablemente no tendrías buenos resultados. Busca otro camino profesional.',
    traits: ['Introvertido', 'Técnico', 'Analítico', 'Independiente'],
    advice: 'Roles técnicos, analíticos o de trabajo independiente serían mucho mejor para tu personalidad.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
