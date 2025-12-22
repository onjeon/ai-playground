// Test de Preparación para Ascenso - ¿Estás listo para subir de nivel?
export const questions = [
  {
    id: 1,
    text: '¿Has comunicado a tu jefe tu interés en crecer?',
    options: [
      { text: 'Sí, tenemos conversaciones regulares sobre mi carrera', type: 'A' },
      { text: 'Lo he mencionado algunas veces', type: 'B' },
      { text: 'No directamente, espero que lo note', type: 'C' },
      { text: 'No, me da pena hablar de eso', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo está tu desempeño actual?',
    options: [
      { text: 'Consistentemente superior a lo esperado', type: 'A' },
      { text: 'Bueno, cumplo y a veces supero', type: 'B' },
      { text: 'Cumplido, hago lo que me piden', type: 'C' },
      { text: 'Tengo áreas de mejora importantes', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Tomas responsabilidades más allá de tu rol actual?',
    options: [
      { text: 'Sí, constantemente busco más responsabilidades', type: 'A' },
      { text: 'A veces, cuando hay oportunidad', type: 'B' },
      { text: 'Solo cuando me lo piden', type: 'C' },
      { text: 'No, me limito a mi rol', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Tienes visibilidad con líderes senior de la empresa?',
    options: [
      { text: 'Sí, me conocen y valoran mi trabajo', type: 'A' },
      { text: 'Algo, he interactuado con algunos', type: 'B' },
      { text: 'Poco, casi no tengo contacto', type: 'C' },
      { text: 'Nada, nadie me conoce arriba', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Inviertes en tu desarrollo profesional?',
    options: [
      { text: 'Sí, constantemente tomo cursos y me actualizo', type: 'A' },
      { text: 'A veces, cuando hay tiempo', type: 'B' },
      { text: 'Poco, confío en lo que sé', type: 'C' },
      { text: 'No, no tengo tiempo ni interés', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Tienes mentoría o apoyo de alguien senior?',
    options: [
      { text: 'Sí, tengo un mentor que me guía', type: 'A' },
      { text: 'Algo, hay quien me da consejos', type: 'B' },
      { text: 'No formalmente', type: 'C' },
      { text: 'No, estoy solo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo es tu relación con tu jefe directo?',
    options: [
      { text: 'Excelente, confía en mí y me apoya', type: 'A' },
      { text: 'Buena, nos llevamos bien', type: 'B' },
      { text: 'Normal, profesional', type: 'C' },
      { text: 'Difícil o distante', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Demuestras habilidades de liderazgo actualmente?',
    options: [
      { text: 'Sí, lidero proyectos o equipos informalmente', type: 'A' },
      { text: 'A veces, cuando surge la oportunidad', type: 'B' },
      { text: 'Poco, soy más individual', type: 'C' },
      { text: 'No, el liderazgo no es lo mío', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Conoces los requisitos para el siguiente nivel?',
    options: [
      { text: 'Sí, claramente y trabajo hacia ellos', type: 'A' },
      { text: 'Más o menos, tengo una idea', type: 'B' },
      { text: 'No muy claro', type: 'C' },
      { text: 'No tengo idea', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Eres reconocido por tu equipo y compañeros?',
    options: [
      { text: 'Sí, me buscan y valoran', type: 'A' },
      { text: 'Bastante, tengo buena reputación', type: 'B' },
      { text: 'Normal, no destaco', type: 'C' },
      { text: 'No, paso desapercibido', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cuánto tiempo llevas en tu puesto actual?',
    options: [
      { text: 'Más de 2 años con resultados consistentes', type: 'A' },
      { text: '1-2 años, consolidado', type: 'B' },
      { text: 'Menos de 1 año', type: 'C' },
      { text: 'Muy poco o sin resultados claros', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Hay oportunidades de crecimiento en tu empresa?',
    options: [
      { text: 'Sí, y estoy posicionado para ellas', type: 'A' },
      { text: 'Sí, aunque hay competencia', type: 'B' },
      { text: 'Pocas o poco claras', type: 'C' },
      { text: 'No, es difícil crecer aquí', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚀 Listo para Ascender',
    description: 'Estás en una posición excelente para buscar un ascenso. Has hecho el trabajo, tienes visibilidad y apoyo. Es momento de tener la conversación.',
    traits: ['Preparado', 'Visible', 'Valorado', 'Listo'],
    advice: 'Agenda una conversación formal con tu jefe sobre tu crecimiento. Prepara tu caso con logros concretos.',
  },
  B: {
    title: '⚡ Casi Listo',
    description: 'Tienes buen potencial pero hay áreas que fortalecer antes de pedir un ascenso. Con algunos ajustes estarás listo pronto.',
    traits: ['En camino', 'Potencial', 'Trabajando', 'Próximo'],
    advice: 'Identifica las brechas que necesitas cerrar y trabaja en ellas. Aumenta tu visibilidad y comunica tus logros.',
  },
  C: {
    title: '🔧 Trabajo Pendiente',
    description: 'Todavía tienes trabajo que hacer antes de estar listo para un ascenso. Necesitas consolidarte más en tu rol actual.',
    traits: ['En desarrollo', 'Potencial', 'Falta trabajo', 'En proceso'],
    advice: 'Enfócate primero en destacar en tu rol actual. Busca visibilidad y construye relaciones con líderes.',
  },
  D: {
    title: '🌱 Empezando el Camino',
    description: 'Estás lejos de estar listo para un ascenso. Necesitas enfocarte en desempeño básico y construir las bases primero.',
    traits: ['Inicial', 'En desarrollo', 'Fundamentos', 'Base'],
    advice: 'Antes de pensar en ascenso, asegura tu desempeño actual. Busca mentoría y haz visible tu trabajo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
