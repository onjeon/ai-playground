// Test de Aptitud Emprendedora - ¿Tienes madera de emprendedor?
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas ante la idea de dejar un empleo seguro?',
    options: [
      { text: 'Me emociona, la seguridad me aburre', type: 'A' },
      { text: 'Me interesa si tengo un buen plan', type: 'B' },
      { text: 'Me da nervios pero lo consideraría', type: 'C' },
      { text: 'Ni de chiste, necesito estabilidad', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan cómodo te sientes con la incertidumbre?',
    options: [
      { text: 'Es parte del juego, me adapto rápido', type: 'A' },
      { text: 'La manejo si tengo plan de contingencia', type: 'B' },
      { text: 'Me estresa pero puedo tolerarla', type: 'C' },
      { text: 'Me paraliza, necesito certeza', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Tu negocio fracasa después de un año de esfuerzo...',
    options: [
      { text: 'Aprendo y empiezo otro proyecto', type: 'A' },
      { text: 'Analizo qué salió mal y lo intento diferente', type: 'B' },
      { text: 'Me dolería mucho pero eventualmente seguiría', type: 'C' },
      { text: 'No me recuperaría, mejor no arriesgo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan frecuente tienes ideas de negocio?',
    options: [
      { text: 'Constantemente, veo oportunidades en todo', type: 'A' },
      { text: 'Seguido, algunas las desarrollo más', type: 'B' },
      { text: 'A veces, pero no las tomo muy en serio', type: 'C' },
      { text: 'Casi nunca, no pienso en eso', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes trabajando 60+ horas por semana?',
    options: [
      { text: 'Si es mi negocio, con gusto', type: 'A' },
      { text: 'Puedo hacerlo por temporadas', type: 'B' },
      { text: 'Me costaría pero si es necesario...', type: 'C' },
      { text: 'Imposible, valoro mi tiempo libre', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan bien manejas el rechazo?',
    options: [
      { text: 'Es parte del proceso, no me afecta', type: 'A' },
      { text: 'Me molesta pero lo supero rápido', type: 'B' },
      { text: 'Me afecta pero trato de seguir', type: 'C' },
      { text: 'Me desmotiva completamente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes vendiendo algo?',
    options: [
      { text: 'Me encanta, disfruto convencer', type: 'A' },
      { text: 'Puedo hacerlo si creo en el producto', type: 'B' },
      { text: 'Me incomoda pero lo hago si es necesario', type: 'C' },
      { text: 'Lo detesto, no soy de ventas', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué prefieres: ser tu propio jefe o tener jefe?',
    options: [
      { text: 'Ser mi jefe, sin duda', type: 'A' },
      { text: 'Ser mi jefe, aunque tiene retos', type: 'B' },
      { text: 'Depende del jefe que tenga', type: 'C' },
      { text: 'Tener jefe, menos responsabilidad', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes invirtiendo tu dinero en algo riesgoso?',
    options: [
      { text: 'Si creo en ello, todo dentro', type: 'A' },
      { text: 'Lo haría con un monto que pueda perder', type: 'B' },
      { text: 'Me da mucho miedo pero consideraría', type: 'C' },
      { text: 'Jamás, mi dinero es sagrado', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan bueno eres haciendo muchas cosas a la vez?',
    options: [
      { text: 'Excelente, soy multitareas nato', type: 'A' },
      { text: 'Bien, puedo manejar varios frentes', type: 'B' },
      { text: 'Me cuesta, prefiero una cosa a la vez', type: 'C' },
      { text: 'Mal, me abrumo fácilmente', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tanto te motiva el dinero?',
    options: [
      { text: 'Mucho, quiero generar riqueza', type: 'A' },
      { text: 'Es importante pero no lo único', type: 'B' },
      { text: 'Con vivir bien me conformo', type: 'C' },
      { text: 'No me importa mucho, con lo básico estoy bien', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué harías si tuvieras una idea de negocio que crees brillante?',
    options: [
      { text: 'Ya estaría ejecutándola', type: 'A' },
      { text: 'La investigaría a fondo y haría un plan', type: 'B' },
      { text: 'Se la contaría a alguien y esperaría validación', type: 'C' },
      { text: 'La dejaría en idea, no me animaría', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚀 Emprendedor Nato',
    description: 'Tienes la mentalidad, tolerancia al riesgo y energía que se necesitan para emprender. El empleo tradicional probablemente no te llene. Tu destino es crear algo propio.',
    traits: ['Arriesgado', 'Visionario', 'Resiliente', 'Ambicioso'],
    advice: 'Tienes el perfil, ahora necesitas el plan. No te lances sin preparación, pero no esperes demasiado.',
  },
  B: {
    title: '💼 Emprendedor Calculado',
    description: 'Tienes potencial emprendedor pero con enfoque más estratégico. No te lanzas a lo loco, planeas y calculas. Podrías emprender exitosamente con el plan correcto.',
    traits: ['Estratégico', 'Analítico', 'Moderado', 'Planeador'],
    advice: 'Tu cautela puede ser fortaleza. Planea bien pero no te paralices analizando. A veces hay que lanzarse.',
  },
  C: {
    title: '🤔 Emprendedor Potencial',
    description: 'Tienes algunas características emprendedoras pero te falta seguridad o tolerancia al riesgo. Podrías emprender pero necesitarías trabajar en tu mentalidad primero.',
    traits: ['Cauteloso', 'Dudoso', 'Potencial', 'En desarrollo'],
    advice: 'Quizás emprender no sea para ti ahorita, pero podrías prepararte. Lee, aprende, ahorra, y cuando estés listo, podrías sorprenderte.',
  },
  D: {
    title: '🏢 Empleado por Elección',
    description: 'El emprendimiento no es lo tuyo, y está bien. Valoras la estabilidad, los beneficios y el balance. Puedes ser muy exitoso como empleado sin necesidad de emprender.',
    traits: ['Estable', 'Seguro', 'Práctico', 'Equilibrado'],
    advice: 'No todos tienen que emprender. Si te sientes realizado como empleado, sigue creciendo ahí. El éxito no requiere tener tu propio negocio.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
