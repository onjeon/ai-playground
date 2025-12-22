// Test de Habilidades de Presentación - ¿Cómo presentas frente a otros?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes minutos antes de presentar?',
    options: [
      { text: 'Emocionado, listo para brillar', type: 'A' },
      { text: 'Algo nervioso pero enfocado', type: 'B' },
      { text: 'Muy nervioso, sudando frío', type: 'C' },
      { text: 'En pánico, quisiera escapar', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te preparas para una presentación importante?',
    options: [
      { text: 'Preparo contenido y ensayo varias veces', type: 'A' },
      { text: 'Preparo puntos clave y repaso', type: 'B' },
      { text: 'Hago slides y leo de ahí', type: 'C' },
      { text: 'Improviso, no me preparo mucho', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo es tu contacto visual al presentar?',
    options: [
      { text: 'Miro a todos, conecto con el público', type: 'A' },
      { text: 'Miro a algunos puntos fijos', type: 'B' },
      { text: 'Miro la pantalla o mis notas', type: 'C' },
      { text: 'Evito mirar al público', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas las preguntas del público?',
    options: [
      { text: 'Las disfruto, es oportunidad de destacar', type: 'A' },
      { text: 'Las manejo bien, respondo con confianza', type: 'B' },
      { text: 'Me ponen nervioso pero las contesto', type: 'C' },
      { text: 'Me bloqueo, no sé qué responder', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo es tu voz al presentar?',
    options: [
      { text: 'Clara, proyectada, con variación de tono', type: 'A' },
      { text: 'Normal, se escucha bien', type: 'B' },
      { text: 'Baja o temblorosa', type: 'C' },
      { text: 'Muy rápida o entrecortada', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Usas historias o ejemplos en tus presentaciones?',
    options: [
      { text: 'Siempre, conectan con el público', type: 'A' },
      { text: 'A veces, cuando son relevantes', type: 'B' },
      { text: 'Poco, me enfoco en datos', type: 'C' },
      { text: 'Nunca, solo información', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo es tu lenguaje corporal al presentar?',
    options: [
      { text: 'Dinámico, uso gestos y me muevo', type: 'A' },
      { text: 'Relativamente relajado', type: 'B' },
      { text: 'Rígido, me quedo en un lugar', type: 'C' },
      { text: 'Nervioso, muevo manos o pies', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué haces si cometes un error durante la presentación?',
    options: [
      { text: 'Lo manejo con humor y sigo adelante', type: 'A' },
      { text: 'Lo corrijo y continúo', type: 'B' },
      { text: 'Me desconcentra pero continúo', type: 'C' },
      { text: 'Me paralizo y pierdo el hilo', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo describes tus diapositivas o material visual?',
    options: [
      { text: 'Visuales, limpias, de apoyo', type: 'A' },
      { text: 'Claras y organizadas', type: 'B' },
      { text: 'Con mucho texto que leo', type: 'C' },
      { text: 'Básicas o copiadas de otros', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo enganchas al público desde el inicio?',
    options: [
      { text: 'Con algo impactante o una historia', type: 'A' },
      { text: 'Presentándome y el tema claramente', type: 'B' },
      { text: 'Yendo directo al contenido', type: 'C' },
      { text: 'No pienso en engancharlos', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué feedback recibes de tus presentaciones?',
    options: [
      { text: 'Que son claras, dinámicas y memorable', type: 'A' },
      { text: 'Que son buenas y profesionales', type: 'B' },
      { text: 'Que pueden mejorar', type: 'C' },
      { text: 'Que son confusas o aburridas', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo terminas tus presentaciones?',
    options: [
      { text: 'Con un llamado a la acción memorable', type: 'A' },
      { text: 'Con resumen y cierre claro', type: 'B' },
      { text: 'Diciendo "eso es todo, gracias"', type: 'C' },
      { text: 'Terminando abruptamente', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎤 Presentador Estelar',
    description: 'Eres excelente presentando. Conectas con el público, manejas el escenario y dejas huella. Las presentaciones son una de tus fortalezas.',
    traits: ['Carismático', 'Preparado', 'Dinámico', 'Memorable'],
    advice: 'Sigue puliendo tu arte. Considera dar charlas públicas o capacitaciones, tienes un don.',
  },
  B: {
    title: '✅ Presentador Competente',
    description: 'Presentas bien y cumples con profesionalismo. No eres una estrella pero haces buenas presentaciones que logran su objetivo.',
    traits: ['Profesional', 'Claro', 'Funcional', 'Cumplido'],
    advice: 'Vas bien. Trabaja en agregar más dinamismo y conectar más emocionalmente con el público.',
  },
  C: {
    title: '😰 Presentador Nervioso',
    description: 'Los nervios te juegan en contra al presentar. Tienes el conocimiento pero te cuesta transmitirlo con confianza frente a otros.',
    traits: ['Nervioso', 'En desarrollo', 'Potencial', 'Tímido'],
    advice: 'Practica más, toma cursos de oratoria. Los nervios se pueden manejar con técnica y experiencia.',
  },
  D: {
    title: '🆘 Presentador en Crisis',
    description: 'Presentar es un reto enorme para ti. La ansiedad te impide mostrar tu potencial y necesitas trabajar seriamente en esta habilidad.',
    traits: ['Ansioso', 'Evitador', 'Sin preparación', 'En apuros'],
    advice: 'Esta habilidad es crucial para tu carrera. Busca ayuda profesional, cursos o coaching de presentaciones.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
