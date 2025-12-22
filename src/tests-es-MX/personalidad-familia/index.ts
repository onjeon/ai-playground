// Personalidad en la Familia Mexicana
export const questions = [
  {
    id: 1,
    text: '¿Cuál es tu rol típico en las reuniones familiares?',
    options: [
      { text: 'El que organiza todo y hace que las cosas pasen', type: 'A' },
      { text: 'El que cuenta los chistes y anima el ambiente', type: 'B' },
      { text: 'El que escucha y da consejos a todos', type: 'C' },
      { text: 'El que se queda calladito en su esquina', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas los chismes familiares?',
    options: [
      { text: 'Los evito, no me gusta el drama', type: 'A' },
      { text: 'Me entero de todo pero no digo nada', type: 'B' },
      { text: 'A veces participo, está cañón resistirse', type: 'C' },
      { text: 'Soy el reportero oficial de la familia', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando hay pleito en la familia?',
    options: [
      { text: 'Trato de mediar y buscar la paz', type: 'A' },
      { text: 'Me mantengo neutral y no tomo lados', type: 'B' },
      { text: 'Apoyo a quien creo que tiene razón', type: 'C' },
      { text: 'Me hago el que no sabe nada', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo contribuyes en la comida familiar?',
    options: [
      { text: 'Cocino o ayudo a preparar todo', type: 'A' },
      { text: 'Llevo algo: refrescos, postre o tortillas', type: 'B' },
      { text: 'Ayudo a servir y recoger los platos', type: 'C' },
      { text: 'Solo llego a comer, soy el invitado especial', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan seguido visitas a tu familia?',
    options: [
      { text: 'Cada semana sin falta, es sagrado', type: 'A' },
      { text: 'Cada quince días o cuando puedo', type: 'B' },
      { text: 'En ocasiones especiales y fiestas', type: 'C' },
      { text: 'Muy de vez en cuando, estoy ocupado', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo reaccionas a las opiniones de tus tíos sobre tu vida?',
    options: [
      { text: 'Las escucho con respeto aunque no esté de acuerdo', type: 'A' },
      { text: 'Les doy por su lado para evitar discusiones', type: 'B' },
      { text: 'A veces les contesto con mi punto de vista', type: 'C' },
      { text: 'Los ignoro completamente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué papel tienes con los niños de la familia?',
    options: [
      { text: 'Soy el tío/prima divertido que los consiente', type: 'A' },
      { text: 'Los cuido y ayudo a entretenerlos', type: 'B' },
      { text: 'Convivo con ellos lo normal', type: 'C' },
      { text: 'No me llevo mucho con los niños', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo manejas los préstamos de dinero en la familia?',
    options: [
      { text: 'Ayudo cuando puedo, la familia es primero', type: 'A' },
      { text: 'Presto pero con límites claros', type: 'B' },
      { text: 'Depende de quién me pida y para qué', type: 'C' },
      { text: 'Evito mezclar dinero y familia', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces en los cumpleaños familiares?',
    options: [
      { text: 'Organizo la fiesta o ayudo en todo', type: 'A' },
      { text: 'Llego con regalo y buen ánimo', type: 'B' },
      { text: 'Voy pero me quedo poco tiempo', type: 'C' },
      { text: 'Mando felicitación por WhatsApp', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu relación con tu mamá?',
    options: [
      { text: 'Es mi mejor amiga, le cuento todo', type: 'A' },
      { text: 'Muy cercana, hablamos seguido', type: 'B' },
      { text: 'Normal, la quiero pero con distancia sana', type: 'C' },
      { text: 'Complicada, tenemos nuestras diferencias', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👑 El Pilar de la Familia',
    description: 'Eres el que mantiene a la familia unida. Organizas las reuniones, medias los conflictos y siempre estás ahí para todos. Tu familia no funcionaría igual sin ti. Eres como el pegamento que une a todos.',
    traits: ['Responsable', 'Cariñoso', 'Organizador', 'Mediador'],
    advice: 'Es hermoso lo que haces por tu familia, pero no olvides cuidarte a ti mismo. A veces está bien decir que no y poner límites.',
  },
  B: {
    title: '🌟 El Alma de la Fiesta Familiar',
    description: 'Llegas a las reuniones y el ambiente cambia. Eres el que hace reír a todos, cuenta las mejores historias y mantiene la buena vibra. Tu familia te adora porque siempre sabes cómo alegrar el momento.',
    traits: ['Carismático', 'Divertido', 'Sociable', 'Optimista'],
    advice: 'Tu energía positiva es un regalo para tu familia. Solo recuerda que también puedes tener momentos de seriedad cuando se necesiten.',
  },
  C: {
    title: '🦉 El Sabio Consejero',
    description: 'Eres a quien todos acuden cuando necesitan un consejo o simplemente ser escuchados. Tienes la paciencia y sabiduría para ayudar a los demás sin juzgar. Eres el terapeuta no oficial de la familia.',
    traits: ['Empático', 'Buen oyente', 'Sabio', 'Discreto'],
    advice: 'Tu don de escuchar es valioso, pero asegúrate de que también tienes a alguien que te escuche a ti. Tus problemas también importan.',
  },
  D: {
    title: '🐺 El Lobo Solitario Familiar',
    description: 'Quieres a tu familia pero desde cierta distancia. Prefieres las reuniones pequeñas y no te involucras mucho en el drama familiar. Valoras tu espacio personal y eso está bien.',
    traits: ['Independiente', 'Reservado', 'Selectivo', 'Autosuficiente'],
    advice: 'Está bien necesitar tu espacio, pero de vez en cuando acércate más. Los momentos con la familia son únicos y no vuelven.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
