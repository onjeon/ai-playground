// Personalidad con la Comida Mexicana
export const questions = [
  {
    id: 1,
    text: '¿Qué tan picante te gusta la comida?',
    options: [
      { text: 'Bien picoso, que pique de verdad', type: 'A' },
      { text: 'Picante pero moderado', type: 'B' },
      { text: 'Solo un toque de salsa', type: 'C' },
      { text: 'Sin chile, por favor', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cuál es tu taco favorito?',
    options: [
      { text: 'De pastor con todo', type: 'A' },
      { text: 'De carnitas bien doraditas', type: 'B' },
      { text: 'De bistec o pollo', type: 'C' },
      { text: 'De canasta o sudados', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo prefieres tus tortillas?',
    options: [
      { text: 'De maíz, recién hechas', type: 'A' },
      { text: 'De maíz, de tortillería está bien', type: 'B' },
      { text: 'De harina, más suavecitas', type: 'C' },
      { text: 'Me da igual, ambas están bien', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué antojo dominguero prefieres?',
    options: [
      { text: 'Barbacoa con consomé y tortillas', type: 'A' },
      { text: 'Pozole rojo bien servido', type: 'B' },
      { text: 'Tacos de guisado caseros', type: 'C' },
      { text: 'Carnitas con todo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo reaccionas ante un plato de mole?',
    options: [
      { text: 'Es de mis platillos favoritos', type: 'A' },
      { text: 'Me gusta, especialmente el negro', type: 'B' },
      { text: 'Está rico pero no es mi favorito', type: 'C' },
      { text: 'No soy muy fan del mole', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué salsa le pones a tus tacos?',
    options: [
      { text: 'Salsa de chile de árbol, la más brava', type: 'A' },
      { text: 'Salsa roja con un buen picor', type: 'B' },
      { text: 'Salsa verde, más fresca', type: 'C' },
      { text: 'Guacamole o solo limón', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te gustan los elotes?',
    options: [
      { text: 'Con todo: mayo, queso, chile y limón', type: 'A' },
      { text: 'En esquite con harto chile', type: 'B' },
      { text: 'Solo con mantequilla y sal', type: 'C' },
      { text: 'No me gustan mucho los elotes', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cuál es tu comida callejera favorita?',
    options: [
      { text: 'Tacos de la calle, los más greñudos', type: 'A' },
      { text: 'Tortas ahogadas o cemitas', type: 'B' },
      { text: 'Tamales o gorditas', type: 'C' },
      { text: 'Prefiero comer en restaurante', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué desayuno mexicano te representa mejor?',
    options: [
      { text: 'Chilaquiles verdes o rojos', type: 'A' },
      { text: 'Huevos rancheros con frijoles', type: 'B' },
      { text: 'Molletes con frijoles y queso', type: 'C' },
      { text: 'Pan dulce con café', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu relación con la comida?',
    options: [
      { text: 'Vivo para comer, es mi pasión', type: 'A' },
      { text: 'Disfruto mucho la buena comida', type: 'B' },
      { text: 'Como para vivir, pero sin exagerar', type: 'C' },
      { text: 'Como lo que sea, no soy exigente', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌶️ El Mexicano de Pura Cepa',
    description: 'Tu paladar es 100% mexicano. Te encanta el picante, los sabores intensos y la comida tradicional. Probablemente creciste con una abuelita que cocinaba increíble. Para ti, una comida sin salsa no es comida.',
    traits: ['Tradicional', 'Valiente', 'Apasionado', 'Auténtico'],
    advice: 'Tu amor por la comida mexicana es admirable. Comparte esa pasión enseñando a otros las tradiciones culinarias de México.',
  },
  B: {
    title: '🍽️ El Foodie Mexicano',
    description: 'Aprecias la buena comida mexicana pero también te gusta explorar variaciones y nuevos sabores. Disfrutas tanto de un taco de la calle como de un platillo gourmet. Tienes un paladar educado.',
    traits: ['Curioso', 'Aventurero', 'Conocedor', 'Adaptable'],
    advice: 'Sigue explorando la gastronomía mexicana, hay tantas recetas regionales por descubrir. México es un país de sabores infinitos.',
  },
  C: {
    title: '😌 El Comensal Tranquilo',
    description: 'Disfrutas la comida mexicana pero con moderación. No necesitas que todo sea intenso o muy picante. Aprecias los sabores más suaves y equilibrados de nuestra cocina.',
    traits: ['Moderado', 'Equilibrado', 'Práctico', 'Flexible'],
    advice: 'Tu enfoque moderado está bien, pero de vez en cuando atrévete a probar algo más picante. Te podrías sorprender.',
  },
  D: {
    title: '🌐 El Paladar Internacional',
    description: 'Aunque vives en México, tu paladar va más allá de las fronteras. No eres muy picante ni muy tradicional en tus gustos. Te gustan sabores más neutrales y variados.',
    traits: ['Diverso', 'Abierto', 'Internacional', 'Experimental'],
    advice: 'Está bien tener gustos diferentes, pero dale otra oportunidad a los sabores mexicanos. Hay tanta riqueza que vale la pena explorar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
