// Test de Productividad - ¿Qué tan productivo eres en el trabajo?
export const questions = [
  {
    id: 1,
    text: '¿Cómo empiezas tu día laboral típicamente?',
    options: [
      { text: 'Con mis prioridades claras y lista de tareas', type: 'A' },
      { text: 'Revisando correos y organizándome', type: 'B' },
      { text: 'Viendo qué surge primero', type: 'C' },
      { text: 'Procrastinando un rato antes de empezar', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo manejas las interrupciones durante el trabajo?',
    options: [
      { text: 'Las minimizo, tengo bloques de trabajo enfocado', type: 'A' },
      { text: 'Las manejo, pero me cuestan', type: 'B' },
      { text: 'Son constantes y me afectan', type: 'C' },
      { text: 'No puedo trabajar sin ser interrumpido', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cumples con tus deadlines generalmente?',
    options: [
      { text: 'Siempre, incluso termino antes', type: 'A' },
      { text: 'Casi siempre, muy rara vez no', type: 'B' },
      { text: 'A veces, depende de la carga', type: 'C' },
      { text: 'Me cuesta, seguido pido extensiones', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tanto te distraes con el celular o redes sociales?',
    options: [
      { text: 'Casi nada durante horas de trabajo', type: 'A' },
      { text: 'Algo, pero lo controlo', type: 'B' },
      { text: 'Bastante, me cuesta resistir', type: 'C' },
      { text: 'Constantemente, es un problema', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo priorizas tus tareas?',
    options: [
      { text: 'Por impacto y urgencia, metodológicamente', type: 'A' },
      { text: 'Ataco lo urgente primero', type: 'B' },
      { text: 'Lo que me cae primero', type: 'C' },
      { text: 'No tengo sistema de priorización', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cuántas horas productivas reales tienes al día?',
    options: [
      { text: '6-8 horas de trabajo enfocado', type: 'A' },
      { text: '4-6 horas productivas', type: 'B' },
      { text: '2-4 horas realmente productivas', type: 'C' },
      { text: 'Menos de 2 horas', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas el multitasking?',
    options: [
      { text: 'Lo evito, me enfoco en una cosa a la vez', type: 'A' },
      { text: 'Lo hago cuando es necesario', type: 'B' },
      { text: 'Constantemente, no puedo evitarlo', type: 'C' },
      { text: 'Salto de tarea en tarea sin terminar nada', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan ordenado es tu espacio de trabajo?',
    options: [
      { text: 'Impecable, minimalista y organizado', type: 'A' },
      { text: 'Ordenado con mi sistema', type: 'B' },
      { text: 'Algo desordenado pero funcional', type: 'C' },
      { text: 'Caótico', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Tomas descansos durante el día?',
    options: [
      { text: 'Sí, programados para mantener energía', type: 'A' },
      { text: 'Algunos cuando siento que lo necesito', type: 'B' },
      { text: 'Pocos, trabajo de corrido', type: 'C' },
      { text: 'Demasiados o ninguno', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo termina tu día laboral?',
    options: [
      { text: 'Con tareas completadas y próximo día planeado', type: 'A' },
      { text: 'Satisfecho con lo avanzado', type: 'B' },
      { text: 'Con pendientes que me llevaré a casa', type: 'C' },
      { text: 'Estresado por todo lo que no hice', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Usas herramientas de productividad?',
    options: [
      { text: 'Sí, tengo un sistema completo', type: 'A' },
      { text: 'Algunas, las básicas', type: 'B' },
      { text: 'Pocas, principalmente memoria', type: 'C' },
      { text: 'No, todo en mi cabeza', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué tan seguido procrastinas?',
    options: [
      { text: 'Raramente, tengo técnicas para evitarlo', type: 'A' },
      { text: 'A veces, en tareas que no me gustan', type: 'B' },
      { text: 'Seguido, me cuesta empezar', type: 'C' },
      { text: 'Constantemente, es mi estado natural', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '⚡ Productividad Master',
    description: 'Eres altamente productivo. Tienes sistemas, enfoque y disciplina. Logras más en menos tiempo que la mayoría. Tu eficiencia es envidiable.',
    traits: ['Enfocado', 'Organizado', 'Disciplinado', 'Eficiente'],
    advice: 'Vas excelente. Comparte tus técnicas con otros y busca formas de optimizar aún más sin caer en el perfeccionismo.',
  },
  B: {
    title: '✅ Productividad Sólida',
    description: 'Tienes buena productividad con espacio para mejorar. Cumples con tus responsabilidades aunque podrías ser más eficiente.',
    traits: ['Cumplido', 'Funcional', 'En desarrollo', 'Capaz'],
    advice: 'Identifica tus principales distractores y trabaja en eliminarlos. Implementa más estructura en tu día.',
  },
  C: {
    title: '⚠️ Productividad en Riesgo',
    description: 'Tu productividad está afectada por distracciones, falta de sistemas o procrastinación. Tienes potencial pero lo desperdicias.',
    traits: ['Distraído', 'Desorganizado', 'Inconsistente', 'Potencial'],
    advice: 'Es momento de implementar sistemas básicos: listas, bloques de tiempo, límites con distracciones.',
  },
  D: {
    title: '🆘 Crisis de Productividad',
    description: 'Tu productividad está seriamente comprometida. El día se te va sin lograr lo importante y eso afecta tu trabajo y bienestar.',
    traits: ['Procrastinador', 'Abrumado', 'Sin sistema', 'En crisis'],
    advice: 'Necesitas intervención seria. Considera coaching, apps de productividad o incluso evaluación médica si es muy severo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
