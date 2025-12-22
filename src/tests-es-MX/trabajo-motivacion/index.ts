// Test de Motivación Laboral - ¿Qué tan motivado estás en tu trabajo?
export const questions = [
  {
    id: 1,
    text: '¿Con qué ánimo llegas al trabajo generalmente?',
    options: [
      { text: 'Con energía y ganas de hacer cosas', type: 'A' },
      { text: 'Normal, ni muy arriba ni muy abajo', type: 'B' },
      { text: 'Con algo de desgana', type: 'C' },
      { text: 'Sin ganas, quisiera no ir', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Tu trabajo actual te permite usar tus fortalezas?',
    options: [
      { text: 'Sí, constantemente', type: 'A' },
      { text: 'Bastante, aunque no siempre', type: 'B' },
      { text: 'Poco, mucho es rutina', type: 'C' },
      { text: 'Nada, no uso mi potencial', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Sientes que tu trabajo tiene propósito o significado?',
    options: [
      { text: 'Sí, contribuyo a algo importante', type: 'A' },
      { text: 'Algo, veo el valor de lo que hago', type: 'B' },
      { text: 'Poco, es solo un trabajo', type: 'C' },
      { text: 'Nada, no le veo sentido', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Te sientes reconocido por tu trabajo?',
    options: [
      { text: 'Sí, constantemente', type: 'A' },
      { text: 'A veces, cuando destaco', type: 'B' },
      { text: 'Poco, casi nadie nota lo que hago', type: 'C' },
      { text: 'Nunca, soy invisible', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Tienes oportunidades de aprender y crecer?',
    options: [
      { text: 'Sí, constantemente me retan', type: 'A' },
      { text: 'Algunas, hay espacio', type: 'B' },
      { text: 'Pocas, todo es igual', type: 'C' },
      { text: 'Ninguna, estoy estancado', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo es tu relación con tu jefe directo?',
    options: [
      { text: 'Excelente, me apoya y confía en mí', type: 'A' },
      { text: 'Buena, profesional', type: 'B' },
      { text: 'Regular, solo lo necesario', type: 'C' },
      { text: 'Mala, es parte del problema', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Te sientes parte de un equipo?',
    options: [
      { text: 'Sí, somos un gran equipo', type: 'A' },
      { text: 'Bastante, hay buen ambiente', type: 'B' },
      { text: 'Poco, cada quien lo suyo', type: 'C' },
      { text: 'No, me siento aislado', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿La compensación es justa por lo que haces?',
    options: [
      { text: 'Sí, me pagan bien', type: 'A' },
      { text: 'Más o menos, podría ser mejor', type: 'B' },
      { text: 'No mucho, merezco más', type: 'C' },
      { text: 'Injusto, estoy muy mal pagado', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Tienes autonomía para tomar decisiones?',
    options: [
      { text: 'Sí, confían en mi criterio', type: 'A' },
      { text: 'Bastante, con supervisión normal', type: 'B' },
      { text: 'Poca, todo necesita aprobación', type: 'C' },
      { text: 'Ninguna, solo ejecuto órdenes', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo ves tu futuro en esta empresa?',
    options: [
      { text: 'Prometedor, con oportunidades', type: 'A' },
      { text: 'Bien, hay posibilidades', type: 'B' },
      { text: 'Limitado, no veo mucho', type: 'C' },
      { text: 'Nulo, no tengo futuro aquí', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Te genera orgullo trabajar donde trabajas?',
    options: [
      { text: 'Sí, mucho', type: 'A' },
      { text: 'Algo', type: 'B' },
      { text: 'Poco', type: 'C' },
      { text: 'Me da pena decir dónde trabajo', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Piensas frecuentemente en buscar otro trabajo?',
    options: [
      { text: 'Casi nunca, estoy bien aquí', type: 'A' },
      { text: 'A veces, por curiosidad', type: 'B' },
      { text: 'Seguido, busco oportunidades', type: 'C' },
      { text: 'Todo el tiempo, necesito salir', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🔥 Altamente Motivado',
    description: 'Estás en un gran momento laboral. Te sientes valorado, retado y con propósito. Tu motivación te hace productivo y feliz.',
    traits: ['Motivado', 'Comprometido', 'Satisfecho', 'Energético'],
    advice: 'Disfruta este momento. Busca formas de mantener y aumentar esta motivación a largo plazo.',
  },
  B: {
    title: '✅ Motivación Estable',
    description: 'Tienes una motivación decente aunque hay aspectos que podrían mejorar. No estás en crisis pero tampoco en tu mejor momento.',
    traits: ['Estable', 'Funcional', 'Moderado', 'Neutral'],
    advice: 'Identifica qué aumentaría tu motivación y trabaja en ello. Pequeños cambios pueden hacer gran diferencia.',
  },
  C: {
    title: '⚠️ Motivación Baja',
    description: 'Tu motivación está afectada. Varios factores no están alineados y eso impacta tu desempeño y bienestar. Necesitas hacer cambios.',
    traits: ['Desmotivado', 'Desencantado', 'En riesgo', 'Buscando'],
    advice: 'Es momento de tener conversaciones difíciles: con tu jefe sobre crecimiento, o contigo sobre si este es tu lugar.',
  },
  D: {
    title: '🆘 Crisis de Motivación',
    description: 'Estás en una crisis seria de motivación. Tu trabajo te drena y urge un cambio significativo para tu bienestar.',
    traits: ['Desmoralizado', 'Agotado', 'Urgente', 'En crisis'],
    advice: 'Esto no es sostenible. Considera seriamente un cambio de trabajo o área. Tu salud mental es prioridad.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
