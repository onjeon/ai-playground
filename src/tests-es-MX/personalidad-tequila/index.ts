// Personalidad del Tequila
export const questions = [
  {
    id: 1,
    text: '¿Cómo tomas tu tequila?',
    options: [
      { text: 'Derecho, como debe ser', type: 'A' },
      { text: 'Con sangrita o limón y sal', type: 'B' },
      { text: 'En coctel: margarita, paloma', type: 'C' },
      { text: 'Prefiero otras bebidas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de tequila prefieres?',
    options: [
      { text: 'Añejo o extra añejo, el más fino', type: 'A' },
      { text: 'Reposado, con buen sabor', type: 'B' },
      { text: 'Blanco, pa las palomas', type: 'C' },
      { text: 'El que haya, no soy exigente', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cuántos caballitos te tomas en una noche?',
    options: [
      { text: 'Los que caigan, hasta que el cuerpo diga', type: 'A' },
      { text: 'Unos 3 o 4, controlado', type: 'B' },
      { text: '1 o 2 máximo', type: 'C' },
      { text: 'Casi no tomo tequila', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te pones después de unos tequilas?',
    options: [
      { text: 'Fiestero, quiero cantar y bailar', type: 'A' },
      { text: 'Platicador, me da por filosofar', type: 'B' },
      { text: 'Alegre pero tranquilo', type: 'C' },
      { text: 'Me hace mal, evito tomarlo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Conoces la diferencia entre tequila y mezcal?',
    options: [
      { text: 'Claro, soy conocedor', type: 'A' },
      { text: 'Más o menos, sé algo', type: 'B' },
      { text: 'No mucho pero me gustan ambos', type: 'C' },
      { text: 'No tengo idea', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Has visitado alguna destilería de tequila?',
    options: [
      { text: 'Sí, varias veces, me encanta', type: 'A' },
      { text: 'Una vez, estuvo interesante', type: 'B' },
      { text: 'No, pero me gustaría', type: 'C' },
      { text: 'No me interesa mucho', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué marca de tequila prefieres?',
    options: [
      { text: 'Las premium: Don Julio, Patrón, Casa Noble', type: 'A' },
      { text: 'Las de buena calidad: Herradura, 1800', type: 'B' },
      { text: 'Las accesibles: Jimador, Cazadores', type: 'C' },
      { text: 'Cualquiera está bien', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cuándo es momento de tequila para ti?',
    options: [
      { text: 'En cualquier celebración importante', type: 'A' },
      { text: 'Cuando hay algo que festejar', type: 'B' },
      { text: 'Solo en fiestas grandes', type: 'C' },
      { text: 'Muy rara vez', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes al día siguiente de tomar tequila?',
    options: [
      { text: 'Como si nada, ya estoy acostumbrado', type: 'A' },
      { text: 'Un poco crudo pero sobrevivo', type: 'B' },
      { text: 'Me pega fuerte la cruda', type: 'C' },
      { text: 'Por eso evito tomarlo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué opinas del dicho "para todo mal, mezcal"?',
    options: [
      { text: 'Totalmente de acuerdo, es medicina', type: 'A' },
      { text: 'Tiene algo de verdad', type: 'B' },
      { text: 'Es gracioso pero no lo sigo', type: 'C' },
      { text: 'No estoy de acuerdo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🥃 El Tequilero de Abolengo',
    description: 'El tequila corre por tus venas. Conoces las marcas, los procesos y tomas derecho como los verdaderos conocedores. Probablemente tienes tu colección en casa y has visitado Tequila, Jalisco.',
    traits: ['Conocedor', 'Tradicional', 'Fiestero', 'Mexicano de corazón'],
    advice: 'Tu conocimiento tequilero es admirable. Compártelo con otros pero siempre promueve el consumo responsable.',
  },
  B: {
    title: '🍋 El Tequilero Social',
    description: 'Disfrutas el tequila como parte de la experiencia social. Te gusta un buen reposado o un coctel bien hecho. Sabes apreciar pero no eres fanático.',
    traits: ['Social', 'Equilibrado', 'Conocedor moderado', 'Disfruta la vida'],
    advice: 'Tu enfoque equilibrado te permite disfrutar sin excesos. Sigue explorando diferentes tequilas.',
  },
  C: {
    title: '🍹 El Tequilero Casual',
    description: 'El tequila está bien para ocasiones especiales. Prefieres los cocteles a tomarlo derecho. No eres experto pero disfrutas una buena margarita o paloma.',
    traits: ['Casual', 'Social', 'Prefiere cocteles', 'Moderado'],
    advice: 'Tu preferencia por cocteles es válida. Si quieres, explora tequilas de calidad, te sorprenderás del sabor.',
  },
  D: {
    title: '🚫 El No-Tequilero',
    description: 'El tequila no es lo tuyo, y está bien. Prefieres otras bebidas o simplemente no tomas mucho. No te sientes menos mexicano por eso.',
    traits: ['Independiente', 'Tiene otros gustos', 'Consciente', 'Auténtico'],
    advice: 'Cada quien tiene sus preferencias. México tiene muchas otras bebidas que puedes explorar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
