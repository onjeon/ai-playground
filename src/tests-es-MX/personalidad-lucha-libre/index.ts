// Personalidad de la Lucha Libre
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes con la lucha libre mexicana?',
    options: [
      { text: 'Me encanta, es arte y deporte', type: 'A' },
      { text: 'Me gusta verla de vez en cuando', type: 'B' },
      { text: 'Es entretenida pero no soy fan', type: 'C' },
      { text: 'No me llama la atención', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Tienes un luchador favorito?',
    options: [
      { text: 'Sí, varios y conozco su historia', type: 'A' },
      { text: 'Me gustan algunos clásicos', type: 'B' },
      { text: 'Conozco a los más famosos nada más', type: 'C' },
      { text: 'No conozco a ninguno', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué opinas de las máscaras de luchador?',
    options: [
      { text: 'Son sagradas, parte de la cultura', type: 'A' },
      { text: 'Son icónicas y muy mexicanas', type: 'B' },
      { text: 'Están cool como decoración', type: 'C' },
      { text: 'No les veo el chiste', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Has ido a una función de lucha libre?',
    options: [
      { text: 'Sí, varias veces, a la Arena México', type: 'A' },
      { text: 'Una o dos veces, estuvo buena', type: 'B' },
      { text: 'No, pero me gustaría', type: 'C' },
      { text: 'No, y no me interesa mucho', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tipo de luchador serías?',
    options: [
      { text: 'Técnico, con llaves y movimientos', type: 'A' },
      { text: 'Rudo, villano que todos odian', type: 'B' },
      { text: 'Volador, acrobacias y espectáculo', type: 'C' },
      { text: 'No me veo como luchador', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Conoces luchadores legendarios como El Santo o Blue Demon?',
    options: [
      { text: 'Claro, son leyendas del pancracio', type: 'A' },
      { text: 'He escuchado de ellos, son famosos', type: 'B' },
      { text: 'Los conozco de nombre nada más', type: 'C' },
      { text: 'No sé quiénes son', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Tienes algún artículo de lucha libre?',
    options: [
      { text: 'Sí, máscaras, playeras o más', type: 'A' },
      { text: 'Algo pequeño como recuerdo', type: 'B' },
      { text: 'No, pero me gustaría una máscara', type: 'C' },
      { text: 'No tengo nada', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Ves la lucha libre como deporte o entretenimiento?',
    options: [
      { text: 'Ambos, es deporte-espectáculo', type: 'A' },
      { text: 'Más entretenimiento que deporte', type: 'B' },
      { text: 'Es puro show, no es deporte real', type: 'C' },
      { text: 'No sé, nunca lo he pensado', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan importante crees que es la lucha libre para México?',
    options: [
      { text: 'Es parte de nuestra identidad cultural', type: 'A' },
      { text: 'Es una tradición importante', type: 'B' },
      { text: 'Es entretenimiento popular nada más', type: 'C' },
      { text: 'No creo que sea tan importante', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo reaccionas cuando ves una llave bien aplicada?',
    options: [
      { text: '¡Órale! Aprecio la técnica', type: 'A' },
      { text: 'Me emociono si está buena la acción', type: 'B' },
      { text: 'No entiendo mucho de llaves', type: 'C' },
      { text: 'Me da igual', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎭 El Aficionado del Pancracio',
    description: 'La lucha libre corre por tus venas. Conoces a los luchadores, su historia y aprecias el arte detrás del deporte. Probablemente tienes una colección de máscaras y has gritado "¡Fuera máscaras!" más de una vez.',
    traits: ['Apasionado', 'Conocedor', 'Tradicional', 'Cultural'],
    advice: 'Tu amor por la lucha libre es admirable. Sigue apoyando este arte mexicano y lleva a otros a conocerlo.',
  },
  B: {
    title: '👊 El Fan Casual',
    description: 'Te gusta la lucha libre como entretenimiento. Conoces a los luchadores famosos, has ido a alguna función y disfrutas cuando la ves. No eres fanático pero aprecias el espectáculo.',
    traits: ['Casual', 'Abierto', 'Social', 'Entretenido'],
    advice: 'Tu interés casual es un buen punto de partida. Si quieres, profundiza más en la historia de la lucha mexicana.',
  },
  C: {
    title: '🤔 El Curioso del Ring',
    description: 'La lucha libre te parece interesante pero no la conoces mucho. Quizás has visto clips virales o conoces las máscaras como íconos culturales, pero no has profundizado.',
    traits: ['Curioso', 'Abierto', 'Principiante', 'Potencial fan'],
    advice: 'Tienes curiosidad, aprovéchala. Una visita a la Arena México podría convertirte en fan.',
  },
  D: {
    title: '😐 El Indiferente del Cuadrilátero',
    description: 'La lucha libre simplemente no es lo tuyo. No la ves, no la sigues y no te llama la atención. Tienes otros intereses y eso está bien.',
    traits: ['Indiferente', 'Otros intereses', 'Honesto', 'Diverso'],
    advice: 'No hay problema si no te gusta la lucha libre. México tiene mil tradiciones más que puedes explorar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
