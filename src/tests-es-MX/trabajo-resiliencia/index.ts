// Test de Resiliencia Laboral - ¿Qué tan resiliente eres?
export const questions = [
  {
    id: 1,
    text: 'Pierdes un proyecto importante en el que trabajaste mucho...',
    options: [
      { text: 'Duele pero aprendo y sigo adelante rápido', type: 'A' },
      { text: 'Me afecta pero me recupero', type: 'B' },
      { text: 'Me cuesta superarlo, tardo semanas', type: 'C' },
      { text: 'Me destruye, no puedo superarlo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas las críticas a tu trabajo?',
    options: [
      { text: 'Las uso para mejorar sin tomarlas personal', type: 'A' },
      { text: 'Me incomodan pero las proceso', type: 'B' },
      { text: 'Me afectan mucho emocionalmente', type: 'C' },
      { text: 'Me devastan, me cuestiono todo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Tu empresa tiene una reestructura y hay incertidumbre...',
    options: [
      { text: 'Busco oportunidades en el cambio', type: 'A' },
      { text: 'Me adapto y espero lo mejor', type: 'B' },
      { text: 'La ansiedad me consume', type: 'C' },
      { text: 'Me paralizo y no puedo trabajar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo enfrentas un fracaso profesional?',
    options: [
      { text: 'Analizo qué aprendí y avanzo', type: 'A' },
      { text: 'Me duele pero sigo intentando', type: 'B' },
      { text: 'Me cuesta mucho reintentarlo', type: 'C' },
      { text: 'Evito volver a intentar', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan rápido te recuperas de situaciones difíciles?',
    options: [
      { text: 'Rápido, reboto pronto', type: 'A' },
      { text: 'Relativamente rápido', type: 'B' },
      { text: 'Lento, tardo en procesar', type: 'C' },
      { text: 'Muy lento o no me recupero', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo ves los obstáculos en el trabajo?',
    options: [
      { text: 'Como oportunidades de crecimiento', type: 'A' },
      { text: 'Como retos que resolver', type: 'B' },
      { text: 'Como problemas estresantes', type: 'C' },
      { text: 'Como amenazas que me abruman', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Tienes red de apoyo para momentos difíciles?',
    options: [
      { text: 'Sí, y la uso cuando la necesito', type: 'A' },
      { text: 'Algo, tengo algunas personas', type: 'B' },
      { text: 'Poco, me cuesta pedir apoyo', type: 'C' },
      { text: 'No, enfrento todo solo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Cuando algo sale mal, ¿cómo reaccionas inicialmente?',
    options: [
      { text: 'Evalúo la situación y busco soluciones', type: 'A' },
      { text: 'Me estreso pero actúo', type: 'B' },
      { text: 'Me bloqueo temporalmente', type: 'C' },
      { text: 'Entro en pánico o negación', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cuidas tu bienestar para mantener tu resiliencia?',
    options: [
      { text: 'Sí, ejercicio, sueño, límites', type: 'A' },
      { text: 'Algo, cuando puedo', type: 'B' },
      { text: 'Poco, descuido mi bienestar', type: 'C' },
      { text: 'Nada, siempre estoy agotado', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo manejas la presión prolongada?',
    options: [
      { text: 'Bien, tengo técnicas para sostenerla', type: 'A' },
      { text: 'Aguanto un tiempo razonable', type: 'B' },
      { text: 'Me desgasta rápido', type: 'C' },
      { text: 'No puedo, colapso pronto', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Mantienes perspectiva en momentos difíciles?',
    options: [
      { text: 'Sí, veo el panorama completo', type: 'A' },
      { text: 'Generalmente, me centro', type: 'B' },
      { text: 'Me cuesta, me enfoco en lo negativo', type: 'C' },
      { text: 'No, todo parece catastrófico', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Has salido fortalecido de adversidades pasadas?',
    options: [
      { text: 'Sí, cada golpe me hizo más fuerte', type: 'A' },
      { text: 'De algunas sí, de otras no', type: 'B' },
      { text: 'Pocas, más bien me debilitaron', type: 'C' },
      { text: 'No, cargo con el peso todavía', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💪 Altamente Resiliente',
    description: 'Tienes una resiliencia excepcional. Los golpes te fortalecen, te recuperas rápido y usas los obstáculos para crecer. Eres un sobreviviente nato.',
    traits: ['Fuerte', 'Adaptable', 'Positivo', 'Recuperador'],
    advice: 'Tu resiliencia es un superpoder. Considera mentorear a otros y sigue cuidando tu bienestar.',
  },
  B: {
    title: '⚖️ Resiliencia Funcional',
    description: 'Tienes buena resiliencia aunque no perfecta. Te recuperas de los golpes pero a veces toma tiempo. Vas bien.',
    traits: ['Funcional', 'En desarrollo', 'Capaz', 'Progresando'],
    advice: 'Tu resiliencia es decente. Trabaja en fortalecer tus técnicas de recuperación y autocuidado.',
  },
  C: {
    title: '⚠️ Resiliencia Frágil',
    description: 'Tu resiliencia está comprometida. Los golpes te afectan más de lo que deberían y tardas en recuperarte. Necesitas fortalecerte.',
    traits: ['Vulnerable', 'Sensible', 'Afectado', 'En riesgo'],
    advice: 'Tu resiliencia necesita trabajo. Considera terapia, coaching o técnicas de manejo emocional.',
  },
  D: {
    title: '🆘 Resiliencia en Crisis',
    description: 'Tu capacidad de recuperación está seriamente afectada. Los problemas te abruman y no logras superarlos. Necesitas ayuda.',
    traits: ['Frágil', 'Abrumado', 'En crisis', 'Necesita apoyo'],
    advice: 'Esto es serio. Busca ayuda profesional para desarrollar tu resiliencia y procesar lo que cargas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
