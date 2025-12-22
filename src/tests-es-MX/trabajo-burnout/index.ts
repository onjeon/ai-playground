// Test de Burnout - ¿Qué tan cerca estás del agotamiento laboral?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes al despertar para ir a trabajar?',
    options: [
      { text: 'Con energía, listo para el día', type: 'A' },
      { text: 'Normal, ni bien ni mal', type: 'B' },
      { text: 'Cansado aunque haya dormido bien', type: 'C' },
      { text: 'Agotado, no quiero levantarme', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan emocionalmente agotado te sientes por el trabajo?',
    options: [
      { text: 'Nada, tengo buena energía emocional', type: 'A' },
      { text: 'A veces, en semanas difíciles', type: 'B' },
      { text: 'Frecuentemente, me siento drenado', type: 'C' },
      { text: 'Siempre, no tengo nada más que dar', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Has perdido interés o motivación en tu trabajo?',
    options: [
      { text: 'No, sigo motivado y comprometido', type: 'A' },
      { text: 'Un poco, ya no me emociona tanto', type: 'B' },
      { text: 'Sí, hago lo mínimo necesario', type: 'C' },
      { text: 'Totalmente, me da igual todo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo está afectando el trabajo tu vida personal?',
    options: [
      { text: 'Tengo buen balance, no me afecta', type: 'A' },
      { text: 'A veces interfiere pero lo manejo', type: 'B' },
      { text: 'Afecta mis relaciones y mi tiempo libre', type: 'C' },
      { text: 'Ha destruido mi vida fuera del trabajo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Tienes síntomas físicos relacionados al estrés laboral?',
    options: [
      { text: 'No, me siento bien físicamente', type: 'A' },
      { text: 'Ocasionalmente, dolor de cabeza o tensión', type: 'B' },
      { text: 'Seguido, mi cuerpo lo resiente', type: 'C' },
      { text: 'Constantemente, estoy enfermo o agotado', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Sientes que tu trabajo tiene sentido o propósito?',
    options: [
      { text: 'Sí, me siento realizado con lo que hago', type: 'A' },
      { text: 'Más o menos, tiene sus momentos', type: 'B' },
      { text: 'Poco, cuestiono para qué trabajo', type: 'C' },
      { text: 'Nada, es completamente vacío', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes los domingos pensando en el lunes?',
    options: [
      { text: 'Tranquilo, no me preocupa', type: 'A' },
      { text: 'Un poco de hueva pero normal', type: 'B' },
      { text: 'Ansiedad que arruina mi domingo', type: 'C' },
      { text: 'Terror, no puedo disfrutar el fin de semana', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Te has vuelto cínico o negativo sobre tu trabajo?',
    options: [
      { text: 'No, mantengo actitud positiva', type: 'A' },
      { text: 'A veces me quejo pero no es grave', type: 'B' },
      { text: 'Sí, critico todo y a todos', type: 'C' },
      { text: 'Totalmente cínico, nada me importa', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo está tu rendimiento laboral últimamente?',
    options: [
      { text: 'Igual de bueno que siempre', type: 'A' },
      { text: 'Ha bajado un poco pero cumplo', type: 'B' },
      { text: 'Notablemente peor, me cuesta concentrarme', type: 'C' },
      { text: 'En picada, apenas puedo funcionar', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Piensas frecuentemente en renunciar?',
    options: [
      { text: 'No, estoy bien donde estoy', type: 'A' },
      { text: 'A veces, cuando hay días difíciles', type: 'B' },
      { text: 'Seguido, fantaseo con irme', type: 'C' },
      { text: 'Todo el tiempo, es lo único que pienso', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo duermes pensando en el trabajo?',
    options: [
      { text: 'Bien, el trabajo no afecta mi sueño', type: 'A' },
      { text: 'A veces me cuesta dormir por preocupaciones', type: 'B' },
      { text: 'Mal, me desvelo pensando en pendientes', type: 'C' },
      { text: 'Terrible, insomnio frecuente', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Sientes que tienes control sobre tu carga de trabajo?',
    options: [
      { text: 'Sí, es manejable y puedo negociar', type: 'A' },
      { text: 'Más o menos, a veces es mucho', type: 'B' },
      { text: 'Poco, siempre hay más de lo que puedo', type: 'C' },
      { text: 'Nada, estoy completamente abrumado', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '✅ En Balance',
    description: 'Tu relación con el trabajo es saludable. Tienes energía, motivación y un buen equilibrio entre lo laboral y personal. Sigue cuidándote así.',
    traits: ['Equilibrado', 'Motivado', 'Saludable', 'Energético'],
    advice: 'Vas muy bien. Mantén tus límites y sigue priorizando tu bienestar para mantenerte así.',
  },
  B: {
    title: '⚠️ Alerta Temprana',
    description: 'Empiezas a mostrar señales de desgaste. Todavía estás a tiempo de hacer ajustes antes de que el estrés se acumule y afecte tu salud.',
    traits: ['Cansado', 'Algo estresado', 'Funcional', 'En riesgo'],
    advice: 'Pon atención a las señales. Es momento de poner límites, delegar y buscar formas de reducir tu carga.',
  },
  C: {
    title: '🔴 Burnout en Proceso',
    description: 'Estás experimentando burnout. El agotamiento físico y emocional están afectando tu trabajo, salud y vida personal. Necesitas actuar ya.',
    traits: ['Agotado', 'Desmotivado', 'Afectado', 'En crisis'],
    advice: 'Esto es serio. Necesitas hablar con tu jefe sobre tu carga, considerar vacaciones o buscar ayuda profesional.',
  },
  D: {
    title: '🆘 Burnout Severo',
    description: 'Estás en un estado de burnout severo. Tu salud física y mental están en riesgo. El trabajo te está consumiendo y necesitas intervención urgente.',
    traits: ['Destruido', 'Vacío', 'En crisis', 'Urgente'],
    advice: 'Busca ayuda profesional ahora. Considera licencia médica o un cambio drástico. Tu salud es más importante que cualquier trabajo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
