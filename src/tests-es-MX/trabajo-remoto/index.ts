// Test de Trabajo Remoto - ¿Qué tan apto eres para el home office?
export const questions = [
  {
    id: 1,
    text: '¿Cómo es tu disciplina trabajando desde casa?',
    options: [
      { text: 'Excelente, trabajo igual o mejor que en oficina', type: 'A' },
      { text: 'Bien, me organizo aunque a veces flaqueo', type: 'B' },
      { text: 'Me cuesta, necesito estructura externa', type: 'C' },
      { text: 'Pésima, me distraigo todo el tiempo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes sin ver a tus compañeros diariamente?',
    options: [
      { text: 'Muy bien, soy más productivo solo', type: 'A' },
      { text: 'Bien, aunque extraño algo la convivencia', type: 'B' },
      { text: 'Me afecta, necesito interacción social', type: 'C' },
      { text: 'Fatal, me siento muy aislado', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tienes un espacio dedicado para trabajar en casa?',
    options: [
      { text: 'Sí, una oficina completa y equipada', type: 'A' },
      { text: 'Un rincón designado que funciona', type: 'B' },
      { text: 'Trabajo donde puedo, no es ideal', type: 'C' },
      { text: 'En la cama o el sillón, donde caiga', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo separas el trabajo de la vida personal en casa?',
    options: [
      { text: 'Tengo horarios estrictos y los respeto', type: 'A' },
      { text: 'Más o menos, a veces se mezclan', type: 'B' },
      { text: 'Me cuesta mucho desconectarme', type: 'C' },
      { text: 'No tengo separación, todo se mezcla', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas las distracciones en casa?',
    options: [
      { text: 'Las tengo controladas, me enfoco bien', type: 'A' },
      { text: 'A veces me distraigo pero me recupero', type: 'B' },
      { text: 'Me distraigo seguido con mil cosas', type: 'C' },
      { text: 'No puedo concentrarme, hay muchas distracciones', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te comunicas con tu equipo trabajando remoto?',
    options: [
      { text: 'Muy bien, uso todas las herramientas efectivamente', type: 'A' },
      { text: 'Bien, mantengo comunicación regular', type: 'B' },
      { text: 'A veces me aíslo y no respondo rápido', type: 'C' },
      { text: 'Mal, se me olvida contestar y me desconecto', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas las videollamadas?',
    options: [
      { text: 'Me siento cómodo, participo activamente', type: 'A' },
      { text: 'Bien, aunque prefiero menos reuniones', type: 'B' },
      { text: 'Me agotan, son muy cansadas', type: 'C' },
      { text: 'Las evito si puedo, me incomodan', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Tu productividad en home office comparada con oficina?',
    options: [
      { text: 'Igual o mayor, me concentro mejor', type: 'A' },
      { text: 'Similar, más o menos igual', type: 'B' },
      { text: 'Menor, me cuesta mantener el ritmo', type: 'C' },
      { text: 'Mucho menor, no puedo trabajar bien', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo es tu rutina matutina trabajando desde casa?',
    options: [
      { text: 'Me arreglo como si fuera a la oficina', type: 'A' },
      { text: 'Algo casual pero me preparo para trabajar', type: 'B' },
      { text: 'Trabajo en pijama sin cambiarme', type: 'C' },
      { text: 'No tengo rutina, empiezo cuando sea', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo afecta el home office tu salud y bienestar?',
    options: [
      { text: 'Positivamente, tengo más tiempo para mí', type: 'A' },
      { text: 'Neutral, con pros y contras', type: 'B' },
      { text: 'Algo negativo, me muevo menos y me siento solo', type: 'C' },
      { text: 'Muy negativo, me afecta mucho', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo prefieres trabajar idealmente?',
    options: [
      { text: '100% remoto, nunca volvería a oficina', type: 'A' },
      { text: 'Híbrido, lo mejor de ambos mundos', type: 'B' },
      { text: 'Mayormente oficina con algo de remoto', type: 'C' },
      { text: '100% oficina, el home office no es para mí', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo manejas el fin del día laboral en casa?',
    options: [
      { text: 'Apago la computadora y desconecto completamente', type: 'A' },
      { text: 'Intento desconectar aunque a veces reviso cosas', type: 'B' },
      { text: 'Me cuesta, sigo trabajando después de hora', type: 'C' },
      { text: 'No tengo límite, trabajo hasta que ya no puedo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏠 Maestro del Home Office',
    description: 'El trabajo remoto es tu hábitat natural. Tienes la disciplina, el espacio y las habilidades para ser altamente productivo desde casa. Probablemente no quieras volver a una oficina.',
    traits: ['Disciplinado', 'Autónomo', 'Productivo', 'Organizado'],
    advice: 'Eres ideal para trabajo remoto. Solo asegúrate de mantener conexiones sociales fuera del trabajo.',
  },
  B: {
    title: '⚖️ Híbrido Ideal',
    description: 'Te adaptas bien al trabajo remoto pero también valoras la interacción presencial. El modelo híbrido es perfecto para ti, combinando lo mejor de ambos mundos.',
    traits: ['Adaptable', 'Equilibrado', 'Flexible', 'Sociable'],
    advice: 'El modelo híbrido parece ideal para ti. Busca empresas que ofrezcan esta flexibilidad.',
  },
  C: {
    title: '🏢 Mejor en Oficina',
    description: 'El trabajo remoto no es tu ambiente ideal. Te cuesta la disciplina, extrañas la interacción y tu productividad se ve afectada. Funcionas mejor con estructura externa.',
    traits: ['Social', 'Estructurado', 'Colaborativo', 'Presencial'],
    advice: 'No te fuerces al 100% remoto si no es lo tuyo. Busca roles que ofrezcan trabajo presencial o híbrido.',
  },
  D: {
    title: '🚨 Home Office No es Para Ti',
    description: 'El trabajo remoto definitivamente no es compatible contigo. Tu productividad, bienestar y motivación se ven seriamente afectados trabajando desde casa.',
    traits: ['Presencial', 'Dependiente', 'Social', 'Estructurado'],
    advice: 'Está bien reconocer que el home office no es para todos. Busca empresas con trabajo 100% presencial.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
