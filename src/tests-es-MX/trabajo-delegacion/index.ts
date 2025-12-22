// Test de Delegación - ¿Sabes delegar efectivamente?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes cuando debes delegar una tarea importante?',
    options: [
      { text: 'Tranquilo, confío en mi equipo', type: 'A' },
      { text: 'Algo nervioso pero lo hago', type: 'B' },
      { text: 'Ansioso, prefiero hacerlo yo', type: 'C' },
      { text: 'No delego lo importante, solo yo puedo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo eliges a quién delegar?',
    options: [
      { text: 'Por habilidades y capacidad de desarrollo', type: 'A' },
      { text: 'Por quien esté disponible', type: 'B' },
      { text: 'Siempre a los mismos de confianza', type: 'C' },
      { text: 'No delego, lo hago yo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo das instrucciones al delegar?',
    options: [
      { text: 'Claramente, con expectativas y contexto', type: 'A' },
      { text: 'Explico lo básico y respondo dudas', type: 'B' },
      { text: 'Rápidamente, espero que entiendan', type: 'C' },
      { text: 'No sé delegar efectivamente', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cuánto supervisas las tareas delegadas?',
    options: [
      { text: 'Lo necesario, sin micromanagement', type: 'A' },
      { text: 'Regularmente, con check-ins', type: 'B' },
      { text: 'Constantemente, revisando todo', type: 'C' },
      { text: 'Demasiado, termino haciéndolo yo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Cuando el resultado no es perfecto...',
    options: [
      { text: 'Doy feedback y es oportunidad de mejora', type: 'A' },
      { text: 'Lo corrijo y sigo adelante', type: 'B' },
      { text: 'Me frustra y pienso que debí hacerlo yo', type: 'C' },
      { text: 'Lo rehago yo completamente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Por qué te cuesta delegar (si te cuesta)?',
    options: [
      { text: 'No me cuesta, delego bien', type: 'A' },
      { text: 'A veces siento que es más rápido hacerlo yo', type: 'B' },
      { text: 'Creo que nadie lo hace tan bien como yo', type: 'C' },
      { text: 'No confío en que lo hagan bien', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Das reconocimiento cuando delegan y sale bien?',
    options: [
      { text: 'Siempre, el éxito es de quien lo ejecutó', type: 'A' },
      { text: 'Generalmente, reconozco el esfuerzo', type: 'B' },
      { text: 'A veces, no siempre me acuerdo', type: 'C' },
      { text: 'Yo hice el trabajo de delegar, es mi mérito', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Delegas las tareas que no te gustan?',
    options: [
      { text: 'Delego estratégicamente, no solo lo que no me gusta', type: 'A' },
      { text: 'A veces, pero también lo que desarrolla a otros', type: 'B' },
      { text: 'Sí, principalmente lo que no quiero hacer', type: 'C' },
      { text: 'No, me quedo con todo aunque no me guste', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Tu equipo está preparado para recibir delegación?',
    options: [
      { text: 'Sí, los he desarrollado para ello', type: 'A' },
      { text: 'Algunos sí, otros no tanto', type: 'B' },
      { text: 'No realmente, no están listos', type: 'C' },
      { text: 'No tengo equipo o no confío en ellos', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo afecta tu carga de trabajo no delegar?',
    options: [
      { text: 'Delego bien, mi carga es manejable', type: 'A' },
      { text: 'A veces me sobrecargo por no delegar', type: 'B' },
      { text: 'Frecuentemente estoy saturado', type: 'C' },
      { text: 'Siempre saturado, hago todo yo', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Delegas con tiempo o al último momento?',
    options: [
      { text: 'Con anticipación, doy tiempo suficiente', type: 'A' },
      { text: 'Usualmente con tiempo razonable', type: 'B' },
      { text: 'A veces muy tarde, de emergencia', type: 'C' },
      { text: 'Siempre de última hora o no delego', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo ves la delegación?',
    options: [
      { text: 'Esencial para crecer y desarrollar equipos', type: 'A' },
      { text: 'Importante pero me cuesta a veces', type: 'B' },
      { text: 'Necesaria pero preferiría hacerlo yo', type: 'C' },
      { text: 'Riesgosa, nadie lo hace como yo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎯 Delegador Maestro',
    description: 'Delegas efectivamente: eliges bien, comunicas claro, confías y reconoces. Esto te permite enfocarte en lo estratégico y desarrollar a tu equipo.',
    traits: ['Confiado', 'Estratégico', 'Desarrollador', 'Empoderador'],
    advice: 'Vas excelente. Sigue desarrollando a tu equipo y preparándolos para tomar más responsabilidades.',
  },
  B: {
    title: '⚖️ Delegador en Progreso',
    description: 'Delegas pero hay espacio para mejorar. A veces te cuesta soltar o no comunicas tan claro. Con práctica serás más efectivo.',
    traits: ['En desarrollo', 'Funcional', 'Mejorando', 'Capaz'],
    advice: 'Identifica qué te cuesta más de delegar y trabaja específicamente en eso. La práctica hace al maestro.',
  },
  C: {
    title: '🎛️ Micromanager',
    description: 'Te cuesta soltar el control y delegas solo lo mínimo o supervisas demasiado. Esto te satura y limita el desarrollo de tu equipo.',
    traits: ['Controlador', 'Saturado', 'Desconfiado', 'Perfeccionista'],
    advice: 'El control excesivo te limita y desmotiva a tu equipo. Practica soltar y confiar más en otros.',
  },
  D: {
    title: '🏋️ Lo Hago Todo Yo',
    description: 'No delegas y te cargas todo. Esto te agota, limita tu crecimiento y el de tu equipo. Necesitas cambiar urgentemente.',
    traits: ['Agotado', 'Desconfiado', 'Limitante', 'Individualista'],
    advice: 'No puedes crecer sin delegar. Empieza con tareas pequeñas y ve soltando gradualmente. Tu salud depende de ello.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
