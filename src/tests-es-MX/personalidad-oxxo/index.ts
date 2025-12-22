// Personalidad en el OXXO
export const questions = [
  {
    id: 1,
    text: '¿Con qué frecuencia vas al OXXO?',
    options: [
      { text: 'Todos los días, es mi segunda casa', type: 'A' },
      { text: 'Varias veces a la semana', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'Casi nunca, prefiero el súper', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué compras más seguido en el OXXO?',
    options: [
      { text: 'Chelas o bebidas alcohólicas', type: 'A' },
      { text: 'Snacks y dulces', type: 'B' },
      { text: 'Recargas o pagos de servicios', type: 'C' },
      { text: 'Lo que se me antoje en el momento', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tienes un OXXO favorito?',
    options: [
      { text: 'Sí, el de mi cuadra, ya me conocen', type: 'A' },
      { text: 'Tengo varios de confianza', type: 'B' },
      { text: 'Voy al que me quede de paso', type: 'C' },
      { text: 'Todos son iguales', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo reaccionas cuando solo hay una caja abierta?',
    options: [
      { text: 'Ya estoy acostumbrado, hago fila', type: 'A' },
      { text: 'Me desespero pero aguanto', type: 'B' },
      { text: 'A veces dejo las cosas y me voy', type: 'C' },
      { text: 'Me quejo con el de la caja', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Pagas con tarjeta o efectivo?',
    options: [
      { text: 'Siempre efectivo, más rápido', type: 'A' },
      { text: 'Tarjeta, no cargo efectivo', type: 'B' },
      { text: 'Depende de lo que traiga', type: 'C' },
      { text: 'Siempre pregunto si pasa tarjeta primero', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Compras el famoso combo de hot dog con refresco?',
    options: [
      { text: 'Seguido, es mi salvación', type: 'A' },
      { text: 'A veces cuando tengo antojo', type: 'B' },
      { text: 'Lo he probado pero no es lo mío', type: 'C' },
      { text: 'Nunca, no confío en esa comida', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Has ido al OXXO en pijama o pants?',
    options: [
      { text: 'Muchas veces, es lo normal', type: 'A' },
      { text: 'Alguna vez, me daba pena', type: 'B' },
      { text: 'No, siempre voy presentable', type: 'C' },
      { text: 'No voy caminando, uso carro', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan tarde has ido al OXXO?',
    options: [
      { text: 'A las 3am por chelas o cigarros', type: 'A' },
      { text: 'Antes de que cierren, tipo 11pm', type: 'B' },
      { text: 'Nunca muy tarde', type: 'C' },
      { text: 'Prefiero ir de día', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Usas las promociones tipo 2x1?',
    options: [
      { text: 'Siempre, me sé las promociones', type: 'A' },
      { text: 'Si las veo, aprovecho', type: 'B' },
      { text: 'A veces, no me fijo mucho', type: 'C' },
      { text: 'Nunca, compro lo que necesito', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué opinas del OXXO como institución mexicana?',
    options: [
      { text: 'Es esencial, México sin OXXO no es México', type: 'A' },
      { text: 'Es muy útil tenerlos en cada esquina', type: 'B' },
      { text: 'Están bien pero son caros', type: 'C' },
      { text: 'Prefiero tienditas de barrio', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏪 El OXXOdependiente',
    description: 'El OXXO es parte de tu vida diaria. Vas por chelas, por antojo, a pagar servicios... Básicamente vives ahí. Los empleados ya te conocen por nombre.',
    traits: ['Práctico', 'Nocturno', 'Vecinal', 'Fiel cliente'],
    advice: 'Tu relación con el OXXO es intensa. Solo cuida el gasto hormiga que se acumula.',
  },
  B: {
    title: '🛒 El Usuario Frecuente',
    description: 'Usas el OXXO como lo que es: una tienda de conveniencia. Vas cuando necesitas algo rápido, aprovechas promociones y lo tienes como opción confiable.',
    traits: ['Práctico', 'Moderado', 'Conveniente', 'Ahorrativo'],
    advice: 'Tu uso del OXXO es equilibrado. Sigue aprovechando la conveniencia sin abusar.',
  },
  C: {
    title: '🤷 El OXXOcasional',
    description: 'El OXXO existe pero no es esencial en tu vida. Vas de vez en cuando, no tienes uno favorito y prefieres hacer el súper completo.',
    traits: ['Organizado', 'Previsor', 'Independiente', 'Ahorrador'],
    advice: 'Tu organización te hace menos dependiente del OXXO. Sigue planeando tus compras.',
  },
  D: {
    title: '🏠 El Anti-OXXO',
    description: 'Prefieres las tienditas de barrio o el supermercado. El OXXO te parece caro o innecesario. Eres más tradicional en tus hábitos de compra.',
    traits: ['Tradicional', 'Ahorrador', 'Organizado', 'Consciente'],
    advice: 'Tu preferencia por otras opciones puede ahorrarte dinero. El OXXO sigue ahí para emergencias.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
