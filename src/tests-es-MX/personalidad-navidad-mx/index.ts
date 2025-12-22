// Personalidad Navideña Mexicana
export const questions = [
  {
    id: 1,
    text: '¿Cuándo pones el árbol de Navidad?',
    options: [
      { text: 'Desde noviembre, entre más pronto mejor', type: 'A' },
      { text: 'El 1 de diciembre o cerca', type: 'B' },
      { text: 'A mediados de diciembre', type: 'C' },
      { text: 'No pongo árbol o muy tarde', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué cena de Nochebuena prefieres?',
    options: [
      { text: 'Pavo relleno con todo', type: 'A' },
      { text: 'Bacalao a la vizcaína', type: 'B' },
      { text: 'Pierna de cerdo o lomo', type: 'C' },
      { text: 'Lo que haya, no me complico', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo es el intercambio de regalos en tu familia?',
    options: [
      { text: 'Grande, todos participan con entusiasmo', type: 'A' },
      { text: 'Moderado, intercambio con reglas', type: 'B' },
      { text: 'Pequeño, solo los más cercanos', type: 'C' },
      { text: 'No hacemos intercambio', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué haces en Nochebuena después de cenar?',
    options: [
      { text: 'Abrimos regalos a medianoche', type: 'A' },
      { text: 'Seguimos la fiesta y platicamos', type: 'B' },
      { text: 'Me voy a dormir temprano', type: 'C' },
      { text: 'Salgo a otro lado o fiesta', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan grande es tu reunión navideña?',
    options: [
      { text: 'Enorme, toda la familia extendida', type: 'A' },
      { text: 'Mediana, familia cercana', type: 'B' },
      { text: 'Pequeña, solo los de casa', type: 'C' },
      { text: 'No hago reunión grande', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué villancico mexicano te gusta más?',
    options: [
      { text: 'Los Peces en el Río', type: 'A' },
      { text: 'Mi Burrito Sabanero', type: 'B' },
      { text: 'Feliz Navidad (José Feliciano)', type: 'C' },
      { text: 'Ninguno en particular', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué haces el 25 de diciembre?',
    options: [
      { text: 'Sigo celebrando con familia', type: 'A' },
      { text: 'Descanso y disfruto los regalos', type: 'B' },
      { text: 'Recalentado y películas', type: 'C' },
      { text: 'Día normal, ya pasó la celebración', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo te sientes respecto a la Navidad?',
    options: [
      { text: 'Me encanta, es mi época favorita', type: 'A' },
      { text: 'Me gusta, la disfruto', type: 'B' },
      { text: 'Está bien pero no es tan especial', type: 'C' },
      { text: 'No me gusta mucho, prefiero que pase', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Celebras los Reyes Magos?',
    options: [
      { text: 'Sí, es importante, rosca y regalos', type: 'A' },
      { text: 'La rosca sí, regalos ya no', type: 'B' },
      { text: 'Solo como rosca si hay', type: 'C' },
      { text: 'No lo celebro', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Hasta cuándo dejas la decoración navideña?',
    options: [
      { text: 'Hasta febrero, me da hueva quitarla', type: 'A' },
      { text: 'Después de Reyes, lo tradicional', type: 'B' },
      { text: 'Enero, cuando me acuerde', type: 'C' },
      { text: 'Rápido, no me gusta tenerla mucho', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎄 El Fanático Navideño',
    description: 'La Navidad es tu momento del año. Desde noviembre entras en modo navideño con todo: decoración, música, posadas y el espíritu festivo. Eres el que mantiene viva la tradición en tu familia.',
    traits: ['Festivo', 'Tradicional', 'Familiar', 'Entusiasta'],
    advice: 'Tu amor por la Navidad es contagioso. Sigue iluminando las fiestas de tu familia.',
  },
  B: {
    title: '🎁 El Navideño Equilibrado',
    description: 'Disfrutas la Navidad sin volverte loco. Participas en las tradiciones, disfrutas la familia y las fiestas pero sin estrés. Has encontrado el balance perfecto.',
    traits: ['Equilibrado', 'Familiar', 'Tradiciones', 'Relajado'],
    advice: 'Tu enfoque balanceado es perfecto. La Navidad debe ser disfrute, no estrés.',
  },
  C: {
    title: '😌 El Navideño Chill',
    description: 'La Navidad está bien pero no te quita el sueño. Participas en lo necesario, disfrutas el recalentado y los días libres, pero no te estresa si no todo sale perfecto.',
    traits: ['Relajado', 'Práctico', 'Tranquilo', 'Flexible'],
    advice: 'Tu actitud relajada evita el estrés navideño. Sigue disfrutando a tu manera.',
  },
  D: {
    title: '💚 El Grinch Navideño',
    description: 'La Navidad no es tu temporada favorita. El consumismo, las reuniones obligadas o simplemente el exceso de festividad no van contigo. Prefieres que pasen las fiestas rápido.',
    traits: ['Independiente', 'Diferente', 'Introvertido', 'Realista'],
    advice: 'Está bien si la Navidad no es lo tuyo. Pero intenta disfrutar los pequeños momentos con quienes amas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
