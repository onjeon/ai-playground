// Test de Aptitud para Startups - ¿Eres material de startup?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes trabajando sin procesos establecidos?',
    options: [
      { text: 'Me encanta, puedo crear mis propios procesos', type: 'A' },
      { text: 'Bien, me adapto y aprendo rápido', type: 'B' },
      { text: 'Me incomoda, prefiero estructura clara', type: 'C' },
      { text: 'Fatal, necesito saber exactamente qué hacer', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué opinas de hacer múltiples roles diferentes?',
    options: [
      { text: 'Me fascina, aprendo de todo', type: 'A' },
      { text: 'Bien, es parte del crecimiento', type: 'B' },
      { text: 'Preferiría enfocarme en mi especialidad', type: 'C' },
      { text: 'No me gusta, quiero un rol definido', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas la incertidumbre sobre el futuro de la empresa?',
    options: [
      { text: 'Es emocionante, parte de la aventura', type: 'A' },
      { text: 'Lo manejo bien si creo en el proyecto', type: 'B' },
      { text: 'Me genera ansiedad significativa', type: 'C' },
      { text: 'No lo toleraría, necesito estabilidad', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Aceptarías menor sueldo por acciones de la empresa?',
    options: [
      { text: 'Sí, si creo en el potencial de crecimiento', type: 'A' },
      { text: 'Depende del porcentaje y la empresa', type: 'B' },
      { text: 'Preferiría un sueldo competitivo fijo', type: 'C' },
      { text: 'No, necesito dinero seguro ahora', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes con horarios largos e intensos?',
    options: [
      { text: 'Si es por algo que creo, con gusto', type: 'A' },
      { text: 'Puedo hacerlo por temporadas', type: 'B' },
      { text: 'Prefiero horarios predecibles', type: 'C' },
      { text: 'No estoy dispuesto a sacrificar mi tiempo', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tanto te motiva construir algo desde cero?',
    options: [
      { text: 'Es mi mayor motivación', type: 'A' },
      { text: 'Me atrae bastante', type: 'B' },
      { text: 'Me es indiferente', type: 'C' },
      { text: 'Prefiero estructuras ya establecidas', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas cuando los planes cambian constantemente?',
    options: [
      { text: 'Me adapto rápido, es parte del juego', type: 'A' },
      { text: 'Lo entiendo aunque a veces frustra', type: 'B' },
      { text: 'Me desestabiliza bastante', type: 'C' },
      { text: 'No puedo funcionar así', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan importante son las prestaciones tradicionales para ti?',
    options: [
      { text: 'Puedo vivir sin ellas si el proyecto vale', type: 'A' },
      { text: 'Importantes pero negociables', type: 'B' },
      { text: 'Muy importantes, las necesito', type: 'C' },
      { text: 'Esenciales, no trabajaría sin ellas', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes siendo parte de un equipo pequeño?',
    options: [
      { text: 'Perfecto, me gusta el impacto directo', type: 'A' },
      { text: 'Bien, cada quien aporta mucho', type: 'B' },
      { text: 'Preferiría un equipo más grande', type: 'C' },
      { text: 'Me sentiría muy expuesto', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué opinas del fracaso como posibilidad?',
    options: [
      { text: 'Es parte de emprender, aprendería de ello', type: 'A' },
      { text: 'Lo aceptaría si di mi mejor esfuerzo', type: 'B' },
      { text: 'Me preocupa mucho esa posibilidad', type: 'C' },
      { text: 'No puedo arriesgarme al fracaso', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan autónomo eres para trabajar?',
    options: [
      { text: 'Totalmente, no necesito supervisión', type: 'A' },
      { text: 'Bastante, con algo de dirección', type: 'B' },
      { text: 'Necesito estructura y guía', type: 'C' },
      { text: 'Prefiero que me digan qué hacer', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Por qué trabajarías en una startup?',
    options: [
      { text: 'Por el potencial de crecimiento y libertad', type: 'A' },
      { text: 'Por el aprendizaje y el reto', type: 'B' },
      { text: 'Solo si no tuviera otra opción', type: 'C' },
      { text: 'No lo haría, demasiado riesgo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚀 Startup Native',
    description: 'Eres material de startup puro. La incertidumbre te emociona, la flexibilidad te motiva y construir algo desde cero es tu sueño. El mundo corporativo te asfixiaría.',
    traits: ['Arriesgado', 'Adaptable', 'Autónomo', 'Visionario'],
    advice: 'El ambiente startup es para ti. Busca proyectos en los que creas y prepárate para el viaje de tu vida.',
  },
  B: {
    title: '⚡ Startup Ready',
    description: 'Tienes lo necesario para una startup aunque valoras algo de estabilidad. Funcionarías bien en una startup en etapa de crecimiento con algo más de estructura.',
    traits: ['Adaptable', 'Equilibrado', 'Capaz', 'Flexible'],
    advice: 'Podrías disfrutar una startup Series A o B, donde hay emoción pero también algo de estabilidad.',
  },
  C: {
    title: '🏢 Mejor Corporativo',
    description: 'El mundo startup no es para ti. Valoras la estructura, los procesos y la estabilidad. Serías más feliz en una empresa establecida.',
    traits: ['Estructurado', 'Estable', 'Tradicional', 'Cauteloso'],
    advice: 'No te fuerces al mundo startup. Las empresas establecidas también ofrecen crecimiento y retos.',
  },
  D: {
    title: '🛡️ Anti-Startup',
    description: 'Las startups definitivamente no son para ti. Necesitas estabilidad, estructura y certeza que el mundo startup simplemente no puede ofrecer.',
    traits: ['Conservador', 'Estable', 'Tradicional', 'Seguro'],
    advice: 'Está bien reconocer que las startups no son tu ambiente. Busca empresas grandes y estables donde puedas crecer.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
