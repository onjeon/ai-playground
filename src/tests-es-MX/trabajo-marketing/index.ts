// Test de Aptitud en Marketing - ¿Tienes perfil de marketero?
export const questions = [
  {
    id: 1,
    text: '¿Qué tanto te interesa entender el comportamiento del consumidor?',
    options: [
      { text: 'Me fascina, siempre analizo por qué la gente compra', type: 'A' },
      { text: 'Me interesa bastante', type: 'B' },
      { text: 'Algo, pero no es mi pasión', type: 'C' },
      { text: 'No me llama la atención', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes con el análisis de datos y métricas?',
    options: [
      { text: 'Me encanta, los datos me cuentan historias', type: 'A' },
      { text: 'Bien, es parte importante del trabajo', type: 'B' },
      { text: 'Puedo hacerlo aunque no es mi favorito', type: 'C' },
      { text: 'Me aburre, prefiero la parte creativa', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan creativo te consideras?',
    options: [
      { text: 'Muy creativo, siempre tengo ideas', type: 'A' },
      { text: 'Bastante creativo', type: 'B' },
      { text: 'Algo, más analítico que creativo', type: 'C' },
      { text: 'No mucho, prefiero ejecutar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te mantienes al día con tendencias digitales?',
    options: [
      { text: 'Obsesivamente, sigo todo lo nuevo', type: 'A' },
      { text: 'Regularmente, me mantengo informado', type: 'B' },
      { text: 'A veces, cuando me entero', type: 'C' },
      { text: 'No mucho, no me interesa', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan cómodo te sientes con redes sociales?',
    options: [
      { text: 'Totalmente, vivo en ellas y las entiendo', type: 'A' },
      { text: 'Bien, las uso y entiendo', type: 'B' },
      { text: 'Las uso pero no profundizo', type: 'C' },
      { text: 'No me gustan mucho', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas múltiples proyectos y campañas a la vez?',
    options: [
      { text: 'Excelente, me organizo muy bien', type: 'A' },
      { text: 'Bien, aunque a veces me saturo', type: 'B' },
      { text: 'Me cuesta, prefiero uno a la vez', type: 'C' },
      { text: 'Mal, me abrumo fácilmente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tanto disfrutas presentar ideas y propuestas?',
    options: [
      { text: 'Me encanta, es mi momento de brillar', type: 'A' },
      { text: 'Me gusta, lo hago bien', type: 'B' },
      { text: 'Puedo hacerlo aunque me pone nervioso', type: 'C' },
      { text: 'Lo evito si puedo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo reaccionas cuando una campaña no funciona?',
    options: [
      { text: 'Analizo qué falló y aprendo para la siguiente', type: 'A' },
      { text: 'Me frustra pero sigo adelante', type: 'B' },
      { text: 'Me afecta bastante', type: 'C' },
      { text: 'Me desmotiva mucho', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué tanto te interesa la marca y el branding?',
    options: [
      { text: 'Me apasiona construir marcas', type: 'A' },
      { text: 'Me interesa bastante', type: 'B' },
      { text: 'Algo, no es mi área favorita', type: 'C' },
      { text: 'No me atrae', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te sientes trabajando con diferentes equipos (diseño, ventas, etc.)?',
    options: [
      { text: 'Me encanta, disfruto la colaboración', type: 'A' },
      { text: 'Bien, es parte del trabajo', type: 'B' },
      { text: 'A veces es complicado', type: 'C' },
      { text: 'Prefiero trabajar solo', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tanto te motivan los resultados medibles de una campaña?',
    options: [
      { text: 'Mucho, me obsesionan los KPIs', type: 'A' },
      { text: 'Bastante, me gusta ver el impacto', type: 'B' },
      { text: 'Algo, pero prefiero la parte creativa', type: 'C' },
      { text: 'No mucho, los números no son lo mío', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describes tu conocimiento de marketing digital?',
    options: [
      { text: 'Avanzado, domino múltiples herramientas', type: 'A' },
      { text: 'Intermedio, conozco lo esencial', type: 'B' },
      { text: 'Básico, sé lo general', type: 'C' },
      { text: 'Nulo, no sé de eso', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎯 Marketero Nato',
    description: 'Tienes el perfil completo de marketing: creatividad, análisis de datos, conocimiento digital y habilidades de comunicación. Esta carrera es perfecta para ti.',
    traits: ['Creativo', 'Analítico', 'Digital', 'Estratégico'],
    advice: 'El marketing es tu campo. Especialízate en alguna área (digital, branding, performance) y destaca.',
  },
  B: {
    title: '💼 Apto para Marketing',
    description: 'Tienes buenas habilidades para marketing aunque algunas áreas podrían desarrollarse más. Con experiencia y capacitación serías muy bueno en este campo.',
    traits: ['Versátil', 'En desarrollo', 'Comunicativo', 'Adaptable'],
    advice: 'Marketing es buena opción para ti. Identifica qué área te gusta más y especialízate.',
  },
  C: {
    title: '🤔 Marketing Parcial',
    description: 'Tienes algunas habilidades de marketing pero no todas. Podrías trabajar en áreas específicas o roles de apoyo en equipos de marketing.',
    traits: ['Especializado', 'Técnico', 'De apoyo', 'Operativo'],
    advice: 'Considera roles específicos dentro de marketing o áreas relacionadas como comunicación o relaciones públicas.',
  },
  D: {
    title: '🚫 Marketing No es Para Ti',
    description: 'Marketing no parece ser tu vocación. El dinamismo, la presión y las múltiples habilidades requeridas no empatan con tu perfil.',
    traits: ['Técnico', 'Especializado', 'Independiente', 'Otro perfil'],
    advice: 'Explora otras carreras que empaten mejor con tus habilidades e intereses.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
