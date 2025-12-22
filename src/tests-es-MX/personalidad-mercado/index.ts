// Personalidad en el Mercado
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes al ir al mercado?',
    options: [
      { text: 'Me encanta, es una experiencia completa', type: 'A' },
      { text: 'Voy seguido, me gusta la frescura', type: 'B' },
      { text: 'Prefiero el super pero a veces voy', type: 'C' },
      { text: 'No me gusta, mucha gente y caos', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo eres para regatear?',
    options: [
      { text: 'Soy experto, siempre bajo el precio', type: 'A' },
      { text: 'Lo intento cuando se puede', type: 'B' },
      { text: 'Me da pena pero a veces lo hago', type: 'C' },
      { text: 'Pago lo que me dicen, no me gusta regatear', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué es lo primero que buscas en el mercado?',
    options: [
      { text: 'La fruta y verdura más fresca', type: 'A' },
      { text: 'Lo que necesito de mi lista', type: 'B' },
      { text: 'Algo que se me antoje en el momento', type: 'C' },
      { text: 'Lo básico para salir rápido', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Tienes un puesto favorito donde siempre compras?',
    options: [
      { text: 'Sí, varios y ya me conocen', type: 'A' },
      { text: 'Uno o dos de confianza', type: 'B' },
      { text: 'Compro donde veo buen producto', type: 'C' },
      { text: 'No, nunca es el mismo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo eliges la fruta?',
    options: [
      { text: 'La toco, la huelo y la examino bien', type: 'A' },
      { text: 'Le pido al vendedor que me escoja buena', type: 'B' },
      { text: 'Agarro la que se ve bien', type: 'C' },
      { text: 'La que esté más a la mano', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué haces si te dan pilón?',
    options: [
      { text: 'Lo espero y si no me lo dan, lo pido', type: 'A' },
      { text: 'Me da gusto cuando me lo dan', type: 'B' },
      { text: 'No sabía que eso existía', type: 'C' },
      { text: 'Me da igual, no me fijo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Comes algo mientras andas en el mercado?',
    options: [
      { text: 'Siempre, unos tacos o garnachas', type: 'A' },
      { text: 'A veces me compro algo rico', type: 'B' },
      { text: 'Solo cuando tengo mucha hambre', type: 'C' },
      { text: 'Nunca, voy enfocado a comprar', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Llevas bolsa o bolsas del mandado?',
    options: [
      { text: 'Siempre, mi bolsa ecológica o diablito', type: 'A' },
      { text: 'A veces se me olvida pero trato', type: 'B' },
      { text: 'Uso las bolsas del mercado', type: 'C' },
      { text: 'Compro pocas cosas, no necesito', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Platicas con los vendedores?',
    options: [
      { text: 'Sí, ya somos amigos, saben de mi vida', type: 'A' },
      { text: 'Lo normal, saludo y pregunto precios', type: 'B' },
      { text: 'Solo lo necesario', type: 'C' },
      { text: 'Prefiero no hablar mucho', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuánto tiempo te tardas en el mercado?',
    options: [
      { text: 'Horas, me encanta pasear y ver todo', type: 'A' },
      { text: 'Lo que sea necesario, sin prisa', type: 'B' },
      { text: 'Lo más rápido posible', type: 'C' },
      { text: 'Entro y salgo volando', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🛒 El Marchante Experto',
    description: 'El mercado es tu segundo hogar. Conoces a todos los vendedores, sabes dónde está lo mejor y regateas como profesional. Ir al mercado es una experiencia completa: compras, comes y socializas.',
    traits: ['Tradicional', 'Social', 'Conocedor', 'Ahorrativo'],
    advice: 'Tu conocimiento del mercado es invaluable. Sigue apoyando el comercio local y comparte tu sabiduría con los más jóvenes.',
  },
  B: {
    title: '🥬 El Comprador Consciente',
    description: 'Aprecias la frescura y calidad del mercado. Vas con frecuencia, tienes tus puestos favoritos y sabes elegir buenos productos. Valoras la experiencia pero sin perder el enfoque.',
    traits: ['Práctico', 'Selectivo', 'Conocedor', 'Equilibrado'],
    advice: 'Tu balance entre eficiencia y disfrute del mercado es ideal. Sigue apoyando a los comerciantes locales.',
  },
  C: {
    title: '🏪 El Híbrido Moderno',
    description: 'Vas al mercado ocasionalmente pero también al súper. Aprecias lo fresco pero también valoras la comodidad. No eres experto en regateo pero te defiendes.',
    traits: ['Flexible', 'Moderno', 'Práctico', 'Adaptable'],
    advice: 'Tu flexibilidad te da lo mejor de ambos mundos. Intenta ir más seguido al mercado, te sorprenderás de lo que puedes encontrar.',
  },
  D: {
    title: '📱 El Comprador Digital',
    description: 'El mercado no es lo tuyo. Prefieres la comodidad del supermercado o incluso las compras en línea. El caos y las multitudes no van contigo.',
    traits: ['Moderno', 'Eficiente', 'Práctico', 'Introvertido'],
    advice: 'Tu preferencia por la comodidad es válida, pero el mercado tiene productos que no encontrarás en ningún otro lado. Dale otra oportunidad.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
