// Test de Liderazgo - ¿Qué tipo de líder eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo tomas decisiones importantes en el trabajo?',
    options: [
      { text: 'Yo decido y el equipo ejecuta', type: 'A' },
      { text: 'Consulto al equipo y tomo la decisión final', type: 'B' },
      { text: 'Decidimos juntos de forma democrática', type: 'C' },
      { text: 'Dejo que el equipo decida, yo solo apoyo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Un miembro de tu equipo comete un error grave...',
    options: [
      { text: 'Lo corrijo directamente y establezco consecuencias', type: 'A' },
      { text: 'Hablo con él en privado para entender qué pasó', type: 'B' },
      { text: 'Lo discutimos en equipo para que todos aprendan', type: 'C' },
      { text: 'Le doy espacio para que lo solucione solo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo motivas a tu equipo?',
    options: [
      { text: 'Con metas claras y recompensas por resultados', type: 'A' },
      { text: 'Inspirándolos con una visión clara del futuro', type: 'B' },
      { text: 'Creando un ambiente de confianza y colaboración', type: 'C' },
      { text: 'Dándoles autonomía y confianza en sus capacidades', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas los conflictos en tu equipo?',
    options: [
      { text: 'Intervengo y establezco la solución', type: 'A' },
      { text: 'Facilito el diálogo y guío hacia una solución', type: 'B' },
      { text: 'Dejo que el equipo lo resuelva pero estoy presente', type: 'C' },
      { text: 'Prefiero que lo resuelvan entre ellos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo das retroalimentación a tu equipo?',
    options: [
      { text: 'Directo y sin rodeos, para que mejoren rápido', type: 'A' },
      { text: 'Constructivo, equilibrando lo positivo y lo negativo', type: 'B' },
      { text: 'En sesiones grupales donde todos comparten', type: 'C' },
      { text: 'Solo cuando me lo piden específicamente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan involucrado estás en las tareas del equipo?',
    options: [
      { text: 'Superviso todo de cerca constantemente', type: 'A' },
      { text: 'Monitoreo el progreso pero confío en ellos', type: 'B' },
      { text: 'Trabajo junto con ellos como uno más', type: 'C' },
      { text: 'Les dejo trabajar libremente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Cuando hay presión por entregar resultados...',
    options: [
      { text: 'Aumento el control y exijo más al equipo', type: 'A' },
      { text: 'Reorganizo prioridades y motivo al equipo', type: 'B' },
      { text: 'Nos reunimos para encontrar soluciones juntos', type: 'C' },
      { text: 'Confío en que el equipo sabrá manejarlo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo prefieres comunicarte con tu equipo?',
    options: [
      { text: 'Instrucciones claras y directas', type: 'A' },
      { text: 'Reuniones regulares para alinear visión', type: 'B' },
      { text: 'Comunicación abierta y constante con todos', type: 'C' },
      { text: 'Solo cuando es necesario, no los abrumo', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué esperas de tu equipo principalmente?',
    options: [
      { text: 'Que sigan instrucciones y cumplan objetivos', type: 'A' },
      { text: 'Que crean en la visión y den lo mejor', type: 'B' },
      { text: 'Que colaboren y se apoyen mutuamente', type: 'C' },
      { text: 'Que sean autónomos y proactivos', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo celebras los éxitos del equipo?',
    options: [
      { text: 'Reconocimiento formal y bonos por desempeño', type: 'A' },
      { text: 'Destacando cómo contribuyó a la visión mayor', type: 'B' },
      { text: 'Celebración grupal donde todos son reconocidos', type: 'C' },
      { text: 'Dejando que ellos celebren a su manera', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo desarrollas el talento de tu equipo?',
    options: [
      { text: 'Capacitaciones estructuradas y evaluaciones', type: 'A' },
      { text: 'Mentorías personalizadas y coaching', type: 'B' },
      { text: 'Aprendizaje colaborativo entre el equipo', type: 'C' },
      { text: 'Dándoles proyectos retadores para que crezcan', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué tipo de líder dirían que eres?',
    options: [
      { text: 'Exigente pero justo', type: 'A' },
      { text: 'Inspirador y visionario', type: 'B' },
      { text: 'Cercano y colaborativo', type: 'C' },
      { text: 'Relajado y confiado', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👔 Líder Autoritario',
    description: 'Eres un líder que toma el control y establece las reglas claras. Tu equipo sabe exactamente qué esperas de ellos. Eres efectivo en situaciones de crisis o cuando se necesitan resultados rápidos.',
    traits: ['Decisivo', 'Controlador', 'Directo', 'Orientado a resultados'],
    advice: 'Tu estilo funciona en emergencias, pero puede agobiar al equipo. Aprende a soltar un poco y escuchar más.',
  },
  B: {
    title: '🌟 Líder Transformacional',
    description: 'Inspiras a tu equipo con una visión clara del futuro. Motivas a través del propósito y haces que cada quien se sienta parte de algo grande. Eres el tipo de líder que la gente quiere seguir.',
    traits: ['Inspirador', 'Visionario', 'Carismático', 'Motivador'],
    advice: 'Tu capacidad de inspirar es tu fortaleza. Asegúrate de también atender los detalles operativos del día a día.',
  },
  C: {
    title: '🤝 Líder Democrático',
    description: 'Valoras la opinión de todos y creas un ambiente de colaboración. Tu equipo se siente escuchado y valorado. Tomas mejores decisiones porque incluyes múltiples perspectivas.',
    traits: ['Colaborativo', 'Inclusivo', 'Empático', 'Participativo'],
    advice: 'Tu estilo crea equipos unidos, pero puede ser lento para decidir. En crisis, no dudes en tomar las riendas.',
  },
  D: {
    title: '🌿 Líder Laissez-faire',
    description: 'Confías plenamente en tu equipo y les das libertad total. Funcionas mejor con equipos maduros y autónomos. Tu estilo permite que cada quien brille con su propio estilo.',
    traits: ['Confiado', 'Delegador', 'Relajado', 'Empoderador'],
    advice: 'Tu confianza es valiosa, pero algunos equipos necesitan más guía. Asegúrate de estar presente cuando te necesiten.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
