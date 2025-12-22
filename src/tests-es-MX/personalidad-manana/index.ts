// Personalidad de la Mañana
export const questions = [
  {
    id: 1,
    text: '¿Cómo te despiertas por la mañana?',
    options: [
      { text: 'Me levanto inmediatamente al primer timbrazo', type: 'A' },
      { text: 'Pongo el snooze una o dos veces', type: 'B' },
      { text: 'Necesito como cinco alarmas para despertar', type: 'C' },
      { text: 'Apago todo y sigo dormido hasta que es tarde', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué es lo primero que haces al despertar?',
    options: [
      { text: 'Me levanto directo a bañarme', type: 'A' },
      { text: 'Reviso mi celular un ratito', type: 'B' },
      { text: 'Me quedo acostado pensando en mis pendientes', type: 'C' },
      { text: 'Sigo en cama scrolleando redes sociales', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo es tu desayuno típico?',
    options: [
      { text: 'Completo: chilaquiles, huevos y café', type: 'A' },
      { text: 'Algo rápido pero nutritivo', type: 'B' },
      { text: 'Un café y ya, no me da tiempo', type: 'C' },
      { text: '¿Desayuno? ¿Qué es eso?', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿A qué hora llegas normalmente al trabajo o escuela?',
    options: [
      { text: 'Siempre temprano, antes que todos', type: 'A' },
      { text: 'Justo a tiempo, ni un minuto más ni menos', type: 'B' },
      { text: 'A veces me retraso unos minutitos', type: 'C' },
      { text: 'La hora mexicana es mi especialidad', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo describes tu humor por las mañanas?',
    options: [
      { text: 'Ando de buen humor, listo para el día', type: 'A' },
      { text: 'Normal, ni muy bien ni muy mal', type: 'B' },
      { text: 'Mejor no me hablen hasta que tome café', type: 'C' },
      { text: 'Soy un zombie hasta el mediodía', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tanto planeas tu mañana la noche anterior?',
    options: [
      { text: 'Todo está listo: ropa, lunch y mochila', type: 'A' },
      { text: 'Más o menos, sé qué me voy a poner', type: 'B' },
      { text: 'Improviso en la mañana', type: 'C' },
      { text: '¿Planear? Vivo al momento', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas cuando hay tráfico en la mañana?',
    options: [
      { text: 'Ya lo tenía contemplado, salí con tiempo', type: 'A' },
      { text: 'Me estreso pero lo manejo', type: 'B' },
      { text: 'Me pongo nervioso y busco atajos', type: 'C' },
      { text: 'Ya ni modo, llego cuando llegue', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Prefieres hacer ejercicio por la mañana?',
    options: [
      { text: 'Sí, es mi momento favorito para entrenar', type: 'A' },
      { text: 'A veces, cuando me levanto temprano', type: 'B' },
      { text: 'Prefiero en la tarde o noche', type: 'C' },
      { text: '¿Ejercicio? Apenas puedo levantarme', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tan productivo eres antes del mediodía?',
    options: [
      { text: 'Es cuando más rindo, hago todo temprano', type: 'A' },
      { text: 'Soy bastante productivo', type: 'B' },
      { text: 'Voy agarrando ritmo poco a poco', type: 'C' },
      { text: 'Mi productividad empieza después de comer', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo es tu rutina de baño matutino?',
    options: [
      { text: 'Rápido y eficiente, en 15 minutos estoy listo', type: 'A' },
      { text: 'Tomo mi tiempo, como 30 minutos', type: 'B' },
      { text: 'Me tardo porque me cuesta despertar bien', type: 'C' },
      { text: 'A veces me baño en la noche para dormir más', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌅 Madrugador Nato',
    description: 'Eres de esas personas que aprovechan al máximo las mañanas. Te levantas con energía, tienes todo organizado y llegas temprano a todos lados. El dicho "al que madruga, Dios le ayuda" te define perfectamente. Eres el orgullo de cualquier jefe o maestro.',
    traits: ['Puntual', 'Organizado', 'Productivo', 'Disciplinado'],
    advice: 'Tu disciplina es admirable, pero no olvides que a veces está bien tomarse las cosas con calma. Disfruta también de quedarte en cama de vez en cuando.',
  },
  B: {
    title: '☀️ Mañanero Equilibrado',
    description: 'Tienes un buen balance entre descanso y productividad. No eres de los que saltan de la cama, pero tampoco te quedas pegado a las sábanas. Llegas a tiempo a tus compromisos y aprovechas bien tus mañanas sin estresarte demasiado.',
    traits: ['Balanceado', 'Responsable', 'Adaptable', 'Tranquilo'],
    advice: 'Vas muy bien, ese equilibrio te ayuda a no quemarte. Sigue así, pero podrías intentar levantarte un poco antes para tener tiempo extra para ti.',
  },
  C: {
    title: '🌙 Nocturno en Rehabilitación',
    description: 'Las mañanas no son lo tuyo, pero haces el esfuerzo. Te cuesta despertar y tu mejor momento es por la tarde o noche. El café es tu mejor amigo y necesitas un rato para activarte completamente. La hora mexicana es tu zona de confort.',
    traits: ['Nocturno', 'Creativo de noche', 'Necesita café', 'Relajado'],
    advice: 'Intenta acostarte un poco más temprano para que las mañanas no sean tan pesadas. Un buen desayuno también puede ayudarte a arrancar mejor.',
  },
  D: {
    title: '😴 Búho Nocturno Total',
    description: 'Definitivamente eres de la noche. Las mañanas son tu peor enemigo y tu productividad empieza cuando el sol se va. Vives en tu propio horario y eso está bien, aunque a veces te trae problemas con los horarios convencionales.',
    traits: ['Noctámbulo', 'Creativo nocturno', 'Libre', 'Rebelde del reloj'],
    advice: 'Si tu estilo de vida te lo permite, aprovecha tu energía nocturna. Pero si necesitas funcionar en horarios normales, intenta ajustar tu reloj biológico gradualmente.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
