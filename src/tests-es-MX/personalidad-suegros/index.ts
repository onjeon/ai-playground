// Personalidad con tus Suegros
export const questions = [
  {
    id: 1,
    text: '¿Cómo describes tu relación con tus suegros?',
    options: [
      { text: 'Excelente, me tratan como hijo/a', type: 'A' },
      { text: 'Buena, nos llevamos bien', type: 'B' },
      { text: 'Regular, cordial pero distante', type: 'C' },
      { text: 'Difícil o tensa', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan seguido ves a tus suegros?',
    options: [
      { text: 'Muy seguido, casi cada semana', type: 'A' },
      { text: 'Regularmente, cada mes', type: 'B' },
      { text: 'Ocasionalmente, en fechas especiales', type: 'C' },
      { text: 'Casi nunca o evito verlos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tus suegros se meten en las decisiones de tu pareja y tuyas?',
    options: [
      { text: 'No, respetan nuestra vida', type: 'A' },
      { text: 'A veces, con buena intención', type: 'B' },
      { text: 'Sí, más de lo que quisiera', type: 'C' },
      { text: 'Demasiado, es un problema constante', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes cuando comes en casa de tus suegros?',
    options: [
      { text: 'Como en casa, muy cómodo/a', type: 'A' },
      { text: 'Bien, me atienden bien', type: 'B' },
      { text: 'Un poco incómodo/a', type: 'C' },
      { text: 'Muy incómodo/a', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Tu suegra compara tu comida o tu casa con la de ella?',
    options: [
      { text: 'No, me apoya y elogia', type: 'A' },
      { text: 'A veces, pero sin mala intención', type: 'B' },
      { text: 'Sí, y me incomoda', type: 'C' },
      { text: 'Constantemente, es crítica', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tus suegros ayudan cuando los necesitas?',
    options: [
      { text: 'Sí, siempre están disponibles', type: 'A' },
      { text: 'Generalmente sí', type: 'B' },
      { text: 'A veces', type: 'C' },
      { text: 'No, o viene con condiciones', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Tu pareja te defiende ante sus padres cuando es necesario?',
    options: [
      { text: 'No hace falta, me aceptan bien', type: 'A' },
      { text: 'Sí, siempre me apoya', type: 'B' },
      { text: 'A veces sí, a veces no', type: 'C' },
      { text: 'No, siempre les da la razón', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Sientes que tus suegros te aceptan completamente?',
    options: [
      { text: 'Sí, me quieren como a un hijo/a', type: 'A' },
      { text: 'Creo que sí, me tratan bien', type: 'B' },
      { text: 'No estoy seguro/a', type: 'C' },
      { text: 'No, siento que no les gusto', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Te estresas antes de ver a tus suegros?',
    options: [
      { text: 'No, los veo con gusto', type: 'A' },
      { text: 'Un poco, lo normal', type: 'B' },
      { text: 'Sí, me pongo nervioso/a', type: 'C' },
      { text: 'Mucho, es muy estresante', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo influyen tus suegros en tu relación de pareja?',
    options: [
      { text: 'Positivamente, nos apoyan', type: 'A' },
      { text: 'Neutral, no afectan mucho', type: 'B' },
      { text: 'A veces causan conflictos', type: 'C' },
      { text: 'Negativamente, son fuente de problemas', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '😍 El/La Nuero/a Adorado/a',
    description: 'Has logrado algo que pocos: una excelente relación con tus suegros. Te tratan como a un hijo/a más y la convivencia es armoniosa.',
    traits: ['Querido', 'Aceptado', 'Familiar', 'Afortunado'],
    advice: 'Tienes mucha suerte. Valora y cuida esa relación, no es común.',
  },
  B: {
    title: '😊 El/La Nuero/a Aceptado/a',
    description: 'Tu relación con tus suegros es buena. Hay respeto mutuo y convivencia cordial. Las cosas fluyen sin mayores problemas.',
    traits: ['Respetuoso', 'Cordial', 'Equilibrado', 'Diplomático'],
    advice: 'Una buena relación con los suegros. Sigue siendo tú mismo/a y mantén el equilibrio.',
  },
  C: {
    title: '😬 El/La Nuero/a Tolerado/a',
    description: 'La relación con tus suegros es complicada. Hay tensiones, críticas o incomodidad. Las visitas pueden ser estresantes.',
    traits: ['Paciente', 'Tenso', 'Cauteloso', 'Aguantador'],
    advice: 'Pon límites sanos con apoyo de tu pareja. Tu bienestar también importa.',
  },
  D: {
    title: '💀 El/La Nuero/a en Guerra',
    description: 'Tu relación con tus suegros es muy difícil. Hay conflictos constantes que afectan tu vida y tu relación de pareja.',
    traits: ['En conflicto', 'Estresado', 'Firme', 'Defensivo'],
    advice: 'Esto es serio. Habla con tu pareja y consideren buscar ayuda profesional si afecta la relación.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
