// Personalidad los Lunes
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes los lunes por la mañana?',
    options: [
      { text: 'Bien, listo/a para empezar la semana', type: 'A' },
      { text: 'Normal, un día más', type: 'B' },
      { text: 'Cansado/a, me cuesta arrancar', type: 'C' },
      { text: 'Odio los lunes con pasión', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿A qué hora despiertas los lunes?',
    options: [
      { text: 'Temprano, sin problema', type: 'A' },
      { text: 'A mi hora normal', type: 'B' },
      { text: 'Me cuesta más que otros días', type: 'C' },
      { text: 'Lo más tarde posible', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan productivo/a eres los lunes?',
    options: [
      { text: 'Muy productivo/a, arranco con todo', type: 'A' },
      { text: 'Normal, como cualquier día', type: 'B' },
      { text: 'Menos que otros días', type: 'C' },
      { text: 'Casi nada, es mi día más flojo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo preparas tu semana los lunes?',
    options: [
      { text: 'Planifico todo, hago listas', type: 'A' },
      { text: 'Reviso lo pendiente', type: 'B' },
      { text: 'Voy viendo sobre la marcha', type: 'C' },
      { text: 'No planeo, sobrevivo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Café los lunes?',
    options: [
      { text: 'Normal, como siempre', type: 'A' },
      { text: 'Un poco más que otros días', type: 'B' },
      { text: 'Necesito doble dosis', type: 'C' },
      { text: 'No hay café que me levante', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo es tu humor los lunes?',
    options: [
      { text: 'Bueno, como cualquier día', type: 'A' },
      { text: 'Normal, ni bien ni mal', type: 'B' },
      { text: 'Un poco más irritable', type: 'C' },
      { text: 'Pésimo, mejor no me hablen', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿El tráfico de lunes te afecta?',
    options: [
      { text: 'No mucho, estoy acostumbrado/a', type: 'A' },
      { text: 'Un poco, pero lo tolero', type: 'B' },
      { text: 'Sí, me estresa', type: 'C' },
      { text: 'Me arruina el día', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Ya piensas en el fin de semana desde el lunes?',
    options: [
      { text: 'No, vivo el presente', type: 'A' },
      { text: 'A veces cruza mi mente', type: 'B' },
      { text: 'Sí, cuento los días', type: 'C' },
      { text: 'Desde que despierto', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué te ayuda a sobrellevar los lunes?',
    options: [
      { text: 'Nada especial, es un día normal', type: 'A' },
      { text: 'Un buen desayuno o café', type: 'B' },
      { text: 'Pensar en planes de la semana', type: 'C' },
      { text: 'Solo la esperanza de que termine', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Si pudieras, eliminarías los lunes?',
    options: [
      { text: 'No, me gustan los nuevos comienzos', type: 'A' },
      { text: 'No, son necesarios', type: 'B' },
      { text: 'A veces lo pienso', type: 'C' },
      { text: 'Sin dudarlo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '☀️ El/La Amante de los Lunes',
    description: 'Los lunes no te afectan. Arrancas la semana con energía, productividad y buen humor. Eres de esas personas que ven el lunes como una oportunidad.',
    traits: ['Positivo', 'Productivo', 'Madrugador', 'Optimista'],
    advice: 'Tu energía de lunes es envidiable. Compártela con los que sufren.',
  },
  B: {
    title: '😊 El/La Lunes Neutral',
    description: 'Para ti el lunes es un día más. Ni lo amas ni lo odias. Haces lo que tienes que hacer sin drama ni celebración.',
    traits: ['Equilibrado', 'Adaptable', 'Constante', 'Estable'],
    advice: 'Tu actitud balanceada te ayuda a mantener la cordura toda la semana.',
  },
  C: {
    title: '😫 El/La Lunes Sufrido',
    description: 'Los lunes te cuestan. Arrancas lento, necesitas más café y el fin de semana se siente muy lejano. Pero sobrevives y sales adelante.',
    traits: ['Resistente', 'Realista', 'Luchador', 'Humano'],
    advice: 'No eres el único/a que sufre los lunes. Un buen ritual matutino puede ayudar.',
  },
  D: {
    title: '💀 El/La Enemigo del Lunes',
    description: 'Los lunes son tu nemesis. Todo te molesta, la energía es cero y si pudieras borrarlos del calendario lo harías sin pensarlo.',
    traits: ['Dramático', 'Nocturno', 'Sensible', 'Intenso'],
    advice: 'Los lunes no van a desaparecer. Intenta encontrar algo pequeño que te haga el día más llevadero.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
