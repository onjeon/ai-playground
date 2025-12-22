// Test de Aptitud Financiera - ¿Tienes perfil para finanzas?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes trabajando con números y cálculos?',
    options: [
      { text: 'Me fascina, soy muy bueno con números', type: 'A' },
      { text: 'Bien, me desenvuelvo sin problema', type: 'B' },
      { text: 'Regular, no es mi fuerte pero lo hago', type: 'C' },
      { text: 'Mal, los números no son lo mío', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tanto te interesa la economía y los mercados?',
    options: [
      { text: 'Mucho, leo noticias financieras diariamente', type: 'A' },
      { text: 'Bastante, me mantengo informado', type: 'B' },
      { text: 'Algo, lo básico para entender', type: 'C' },
      { text: 'Nada, no me interesa', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas tu dinero personal?',
    options: [
      { text: 'Con presupuesto detallado e inversiones', type: 'A' },
      { text: 'Bien organizado, sé a dónde va mi dinero', type: 'B' },
      { text: 'Más o menos, a veces se me descontrola', type: 'C' },
      { text: 'Mal, no sé en qué se me va', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan analítico eres para tomar decisiones?',
    options: [
      { text: 'Muy analítico, evalúo datos antes de decidir', type: 'A' },
      { text: 'Bastante, considero pros y contras', type: 'B' },
      { text: 'A veces, depende de la situación', type: 'C' },
      { text: 'Poco, decido más por intuición', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes con el trabajo detallado y preciso?',
    options: [
      { text: 'Excelente, soy muy detallista', type: 'A' },
      { text: 'Bien, puedo ser preciso cuando se requiere', type: 'B' },
      { text: 'Regular, a veces se me escapan detalles', type: 'C' },
      { text: 'Mal, prefiero el panorama general', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan cómodo te sientes con Excel y herramientas similares?',
    options: [
      { text: 'Muy cómodo, domino fórmulas avanzadas', type: 'A' },
      { text: 'Bien, uso lo esencial sin problema', type: 'B' },
      { text: 'Básico, sé hacer lo mínimo', type: 'C' },
      { text: 'No me gustan las hojas de cálculo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas la presión por resultados y deadlines?',
    options: [
      { text: 'Muy bien, me motiva la presión', type: 'A' },
      { text: 'Bien, la manejo sin problema', type: 'B' },
      { text: 'Me estresa pero la tolero', type: 'C' },
      { text: 'Mal, la presión me paraliza', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan ético eres con el manejo de información sensible?',
    options: [
      { text: 'Totalmente ético, la confidencialidad es sagrada', type: 'A' },
      { text: 'Muy ético, guardo la información', type: 'B' },
      { text: 'Ético, aunque a veces comparto de más', type: 'C' },
      { text: 'No me fijo mucho en eso', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Te interesa entender cómo funcionan las empresas?',
    options: [
      { text: 'Mucho, me fascina el mundo de los negocios', type: 'A' },
      { text: 'Bastante, me interesa aprender', type: 'B' },
      { text: 'Algo, lo básico', type: 'C' },
      { text: 'No mucho', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te sientes con el trabajo repetitivo y rutinario?',
    options: [
      { text: 'Me da estructura, lo prefiero', type: 'A' },
      { text: 'Lo tolero bien', type: 'B' },
      { text: 'Me aburre pero lo hago', type: 'C' },
      { text: 'No puedo, necesito variedad', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan bueno eres explicando conceptos complejos?',
    options: [
      { text: 'Muy bueno, simplifico lo técnico', type: 'A' },
      { text: 'Bien, me hago entender', type: 'B' },
      { text: 'Regular, a veces me cuesta', type: 'C' },
      { text: 'Mal, lo técnico se queda técnico', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué te atrae más de una carrera en finanzas?',
    options: [
      { text: 'El análisis, los números y el impacto estratégico', type: 'A' },
      { text: 'La estabilidad y buenas remuneraciones', type: 'B' },
      { text: 'Solo lo consideraría como opción', type: 'C' },
      { text: 'Nada, no me atrae', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📊 Financiero Nato',
    description: 'Tienes el perfil ideal para finanzas: analítico, detallista, bueno con números y apasionado por los mercados. Esta carrera es perfecta para ti.',
    traits: ['Analítico', 'Detallista', 'Numérico', 'Estratégico'],
    advice: 'Las finanzas son tu campo. Especialízate en el área que más te apasione: corporate, inversiones, análisis, etc.',
  },
  B: {
    title: '💼 Apto para Finanzas',
    description: 'Tienes buenas habilidades para finanzas aunque algunas áreas podrían desarrollarse más. Con capacitación serías muy competente.',
    traits: ['Capaz', 'Organizado', 'En desarrollo', 'Práctico'],
    advice: 'Finanzas es buena opción. Trabaja en fortalecer tus habilidades analíticas y de Excel.',
  },
  C: {
    title: '🤔 Finanzas Parcial',
    description: 'Tienes algunas habilidades útiles pero finanzas no parece ser tu vocación principal. Podrías trabajar en roles relacionados pero no puramente financieros.',
    traits: ['Generalista', 'Versátil', 'Otro enfoque', 'Mixto'],
    advice: 'Considera roles que combinen finanzas con otras áreas como administración o proyectos.',
  },
  D: {
    title: '🚫 Finanzas No es Para Ti',
    description: 'Tus habilidades e intereses no empatan con el mundo de las finanzas. Hay muchas otras carreras donde brillarías más.',
    traits: ['Creativo', 'Social', 'Generalista', 'Diferente perfil'],
    advice: 'Explora otras áreas que empaten mejor con tus fortalezas e intereses.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
