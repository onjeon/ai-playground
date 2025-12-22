// Personalidad del Antojo
export const questions = [
  {
    id: 1,
    text: '¿Qué tipo de antojo te da más seguido?',
    options: [
      { text: 'Algo salado: tacos, tortas, quesadillas', type: 'A' },
      { text: 'Algo dulce: pan, helado, chocolate', type: 'B' },
      { text: 'Algo picante y condimentado', type: 'C' },
      { text: 'Varía mucho, depende del momento', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿A qué hora te dan más antojos?',
    options: [
      { text: 'En la noche, antojos nocturnos', type: 'A' },
      { text: 'En la tarde, entre comidas', type: 'B' },
      { text: 'Después de comer, siempre quiero postre', type: 'C' },
      { text: 'A cualquier hora, soy antojadizo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo matas tus antojos?',
    options: [
      { text: 'Salgo a buscar exactamente lo que quiero', type: 'A' },
      { text: 'Pido a domicilio, apps de comida', type: 'B' },
      { text: 'Busco algo parecido en casa', type: 'C' },
      { text: 'Me aguanto, no siempre cedo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cuál es tu antojo mexicano favorito de medianoche?',
    options: [
      { text: 'Tacos de la calle', type: 'A' },
      { text: 'Tamales o atole', type: 'B' },
      { text: 'Tortas o hot dogs', type: 'C' },
      { text: 'Lo que esté abierto', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan difícil es para ti resistir un antojo?',
    options: [
      { text: 'Imposible, si lo quiero, lo consigo', type: 'A' },
      { text: 'Difícil pero a veces me controlo', type: 'B' },
      { text: 'Depende de qué tan fuerte sea', type: 'C' },
      { text: 'Puedo resistir bastante bien', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué antojo dulce prefieres?',
    options: [
      { text: 'Pan dulce mexicano', type: 'A' },
      { text: 'Helado o nieve', type: 'B' },
      { text: 'Chocolate o dulces', type: 'C' },
      { text: 'Fruta con chamoy y chile', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo describes tu relación con los antojos?',
    options: [
      { text: 'Son mi perdición, no puedo resistir', type: 'A' },
      { text: 'Los disfruto de vez en cuando', type: 'B' },
      { text: 'Trato de controlarlos por salud', type: 'C' },
      { text: 'No me dan muchos antojos realmente', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cuál es tu garnachita favorita?',
    options: [
      { text: 'Quesadillas o tlacoyos', type: 'A' },
      { text: 'Gorditas o sopes', type: 'B' },
      { text: 'Tacos dorados o flautas', type: 'C' },
      { text: 'Elotes o esquites', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué prefieres cuando tienes antojo de algo frito?',
    options: [
      { text: 'Churros bien azucarados', type: 'A' },
      { text: 'Papas fritas o chicharrones', type: 'B' },
      { text: 'Empanadas o quesadillas fritas', type: 'C' },
      { text: 'Plátanos fritos o buñuelos', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué bebida acompaña mejor tus antojos?',
    options: [
      { text: 'Refresco bien helado', type: 'A' },
      { text: 'Agua fresca: horchata, jamaica', type: 'B' },
      { text: 'Café o chocolate caliente', type: 'C' },
      { text: 'Cerveza o michelada', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌮 El Antojadizo Profesional',
    description: 'Los antojos mandan en tu vida. Si se te antoja algo, mueves cielo y tierra para conseguirlo. Conoces los mejores lugares para cada antojo y no te vas a dormir sin satisfacerlo.',
    traits: ['Impulsivo', 'Gozador', 'Conocedor', 'Determinado'],
    advice: 'Tu pasión por los antojos es muy mexicana. Solo cuida no excederte por tu salud.',
  },
  B: {
    title: '🍬 El Dulcero Ocasional',
    description: 'Tus antojos tienden hacia lo dulce pero sabes controlarte. Disfrutas un buen pan dulce o helado pero no todos los días. Tienes un buen balance.',
    traits: ['Equilibrado', 'Dulcero', 'Controlado', 'Disfruta la vida'],
    advice: 'Tu balance es saludable. Sigue disfrutando los dulces mexicanos con moderación.',
  },
  C: {
    title: '🌶️ El Picosero Antojado',
    description: 'Tus antojos vienen con chile y limón. Te gustan los sabores intensos y picantes. La comida sin salsa no es comida para ti.',
    traits: ['Intenso', 'Valiente', 'Mexicano de paladar', 'Aventurero'],
    advice: 'Tu amor por el picante es muy mexicano. Cuida tu estómago pero sigue disfrutando.',
  },
  D: {
    title: '😌 El Zen del Antojo',
    description: 'Tienes control sobre tus antojos. No te dejas llevar fácilmente y puedes resistir las tentaciones. Tu fuerza de voluntad es admirable.',
    traits: ['Controlado', 'Disciplinado', 'Equilibrado', 'Consciente'],
    advice: 'Tu autocontrol es envidiable, pero de vez en cuando date el gusto. La vida es para disfrutarse.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
