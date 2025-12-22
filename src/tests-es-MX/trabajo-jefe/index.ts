// Test de Tipo de Jefe - ¿Qué tipo de jefe eres o serías?
export const questions = [
  {
    id: 1,
    text: 'Tu empleado llega tarde por tercera vez esta semana...',
    options: [
      { text: 'Hablo con él seriamente y documento la falta', type: 'A' },
      { text: 'Le pregunto si todo está bien y busco entender', type: 'B' },
      { text: 'Le doy una última oportunidad sin presionar', type: 'C' },
      { text: 'No le digo nada, no quiero ser el malo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo prefieres que tu equipo te vea?',
    options: [
      { text: 'Como alguien exigente pero justo', type: 'A' },
      { text: 'Como un mentor que los ayuda a crecer', type: 'B' },
      { text: 'Como uno más del equipo', type: 'C' },
      { text: 'Como alguien accesible y relajado', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas el desempeño de tu equipo?',
    options: [
      { text: 'Con métricas claras y evaluaciones regulares', type: 'A' },
      { text: 'Dando feedback constante y coaching', type: 'B' },
      { text: 'Confío en que cada quien sabe lo que hace', type: 'C' },
      { text: 'Evito confrontaciones, todos están bien', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Tienes que despedir a alguien. ¿Cómo lo haces?',
    options: [
      { text: 'Profesionalmente, con documentación y proceso', type: 'A' },
      { text: 'Con empatía, le ayudo a entender y a buscar opciones', type: 'B' },
      { text: 'Me cuesta mucho, pero lo hago si no hay de otra', type: 'C' },
      { text: 'Busco cualquier alternativa para no hacerlo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan accesible eres para tu equipo?',
    options: [
      { text: 'Tengo horarios de oficina establecidos', type: 'A' },
      { text: 'Siempre disponible para temas importantes', type: 'B' },
      { text: 'Mi puerta está siempre abierta', type: 'C' },
      { text: 'Prefiero que me busquen solo si es urgente', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo celebras los logros de tu equipo?',
    options: [
      { text: 'Reconocimiento formal y bonos por desempeño', type: 'A' },
      { text: 'Celebración y reconocimiento personal a cada uno', type: 'B' },
      { text: 'Una comida o salida todos juntos', type: 'C' },
      { text: 'Un mensaje de felicitación está bien', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas cuando un empleado no está de acuerdo contigo?',
    options: [
      { text: 'Escucho pero al final decido yo', type: 'A' },
      { text: 'Dialogamos hasta encontrar el mejor camino', type: 'B' },
      { text: 'Si tiene razón, cambio de opinión sin problema', type: 'C' },
      { text: 'Evito la confrontación, cada quien con su opinión', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tanto supervisas el trabajo de tu equipo?',
    options: [
      { text: 'Monitoreo constante y reportes regulares', type: 'A' },
      { text: 'Check-ins periódicos pero confío en ellos', type: 'B' },
      { text: 'Solo reviso los resultados finales', type: 'C' },
      { text: 'Casi no superviso, confío totalmente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Un empleado tiene problemas personales que afectan su trabajo...',
    options: [
      { text: 'Le doy tiempo limitado para resolverlo', type: 'A' },
      { text: 'Busco apoyarlo y adaptar su carga temporalmente', type: 'B' },
      { text: 'Le doy todo el espacio que necesite', type: 'C' },
      { text: 'No me involucro en temas personales', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo desarrollas el talento de tu equipo?',
    options: [
      { text: 'Programas de capacitación y planes de carrera', type: 'A' },
      { text: 'Mentorías personalizadas y coaching', type: 'B' },
      { text: 'Les doy proyectos retadores para que aprendan', type: 'C' },
      { text: 'Que cada quien busque su desarrollo', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo manejas los conflictos entre empleados?',
    options: [
      { text: 'Intervengo y establezco reglas claras', type: 'A' },
      { text: 'Facilito el diálogo entre las partes', type: 'B' },
      { text: 'Espero que lo resuelvan pero estoy presente', type: 'C' },
      { text: 'Prefiero que lo resuelvan entre ellos', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué esperas principalmente de tu equipo?',
    options: [
      { text: 'Resultados y cumplimiento de objetivos', type: 'A' },
      { text: 'Compromiso y crecimiento continuo', type: 'B' },
      { text: 'Colaboración y buen ambiente', type: 'C' },
      { text: 'Que hagan su trabajo sin problemas', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👔 Jefe Estructurado',
    description: 'Eres un jefe que pone reglas claras y espera resultados. Tu equipo sabe exactamente qué esperas de ellos. Eres justo pero exigente, y tu estilo funciona bien en ambientes que requieren orden.',
    traits: ['Exigente', 'Organizado', 'Justo', 'Orientado a resultados'],
    advice: 'Tu estructura es valiosa, pero recuerda que la flexibilidad y la empatía también motivan. No todo es medible.',
  },
  B: {
    title: '🌟 Jefe Coach',
    description: 'Te enfocas en desarrollar a tu equipo y ayudarlos a crecer. Eres un mentor más que un supervisor. Tu equipo te aprecia porque inviertes en su desarrollo personal y profesional.',
    traits: ['Mentor', 'Empático', 'Desarrollador', 'Inspirador'],
    advice: 'Tu enfoque en desarrollo es admirable. Asegúrate de también mantener claros los objetivos de negocio.',
  },
  C: {
    title: '🤝 Jefe Colaborativo',
    description: 'Te ves como uno más del equipo. Valoras la colaboración y el buen ambiente por encima de la jerarquía. Tu equipo te ve accesible y se siente cómodo contigo.',
    traits: ['Accesible', 'Igualitario', 'Colaborativo', 'Flexible'],
    advice: 'Tu cercanía es un activo, pero no olvides que a veces el equipo necesita que tomes el rol de líder claro.',
  },
  D: {
    title: '🕊️ Jefe Ausente',
    description: 'Prefieres dar libertad total y evitar confrontaciones. Tu estilo puede funcionar con equipos muy maduros, pero puede generar falta de dirección en otros casos.',
    traits: ['Relajado', 'Evitador', 'Permisivo', 'Distante'],
    advice: 'Ser jefe implica tomar decisiones difíciles. Evitarlas puede ser peor a largo plazo. El equipo necesita dirección.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
