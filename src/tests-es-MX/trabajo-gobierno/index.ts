// Test de Aptitud para Sector Público - ¿Eres material de servidor público?
export const questions = [
  {
    id: 1,
    text: '¿Qué tan importante es la estabilidad laboral para ti?',
    options: [
      { text: 'Es mi prioridad número uno', type: 'A' },
      { text: 'Muy importante, pero no lo único', type: 'B' },
      { text: 'Importante pero no crucial', type: 'C' },
      { text: 'Prefiero oportunidades aunque sean riesgosas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes con los procesos burocráticos?',
    options: [
      { text: 'Los entiendo como parte del sistema', type: 'A' },
      { text: 'Los tolero aunque a veces frustran', type: 'B' },
      { text: 'Me desesperan pero los sigo', type: 'C' },
      { text: 'No puedo con ellos, me asfixian', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué te motiva más en un trabajo?',
    options: [
      { text: 'Servir a la comunidad y hacer bien público', type: 'A' },
      { text: 'Estabilidad y buenos beneficios', type: 'B' },
      { text: 'Crecimiento personal y retos', type: 'C' },
      { text: 'Ganar bien y avanzar rápido', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes con horarios fijos y regulares?',
    options: [
      { text: 'Me gustan, dan estructura a mi vida', type: 'A' },
      { text: 'Bien, me adapto sin problema', type: 'B' },
      { text: 'A veces siento que limitan', type: 'C' },
      { text: 'Los detesto, necesito flexibilidad', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas de los aumentos por antigüedad?',
    options: [
      { text: 'Me parece justo, reconoce la experiencia', type: 'A' },
      { text: 'Está bien aunque también debería premiar mérito', type: 'B' },
      { text: 'Debería ser más por desempeño', type: 'C' },
      { text: 'Injusto, el mérito debe ser lo que cuenta', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas cuando los cambios son muy lentos?',
    options: [
      { text: 'Lo entiendo, así funcionan las instituciones', type: 'A' },
      { text: 'Frustra pero me adapto', type: 'B' },
      { text: 'Me desespera bastante', type: 'C' },
      { text: 'No lo tolero, necesito agilidad', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan importantes son las prestaciones para ti?',
    options: [
      { text: 'Muy importantes: seguro, pensión, aguinaldo', type: 'A' },
      { text: 'Importantes, son un factor clave', type: 'B' },
      { text: 'Valoro más otras cosas', type: 'C' },
      { text: 'No son prioritarias para mí', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Te interesa la política y el servicio público?',
    options: [
      { text: 'Mucho, quiero contribuir al país', type: 'A' },
      { text: 'Algo, me interesa hacer bien', type: 'B' },
      { text: 'No mucho, pero trabajaría ahí', type: 'C' },
      { text: 'Nada, prefiero el sector privado', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas las jerarquías y cadenas de mando?',
    options: [
      { text: 'Las respeto, dan orden al sistema', type: 'A' },
      { text: 'Las sigo aunque a veces son rígidas', type: 'B' },
      { text: 'Me incomodan un poco', type: 'C' },
      { text: 'Las detesto, limitan la iniciativa', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te sientes con trabajos rutinarios y repetitivos?',
    options: [
      { text: 'Bien, me dan tranquilidad y predictibilidad', type: 'A' },
      { text: 'Los tolero como parte del trabajo', type: 'B' },
      { text: 'Me aburren pero los hago', type: 'C' },
      { text: 'No puedo, necesito variedad', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué piensas de hacer carrera en el mismo lugar?',
    options: [
      { text: 'Es mi plan, estabilidad a largo plazo', type: 'A' },
      { text: 'Podría hacerlo si hay crecimiento', type: 'B' },
      { text: 'Preferiría moverme eventualmente', type: 'C' },
      { text: 'No, necesito cambios constantes', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo ves el balance entre trabajo y vida personal?',
    options: [
      { text: 'El gobierno ofrece buen balance, eso valoro', type: 'A' },
      { text: 'Es importante, y el sector público lo ofrece', type: 'B' },
      { text: 'Lo valoro pero no es decisivo', type: 'C' },
      { text: 'Prefiero trabajar mucho si gano más', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏛️ Servidor Público Nato',
    description: 'Tienes el perfil ideal para el sector público. Valoras la estabilidad, las prestaciones y el servicio a la comunidad. La burocracia no te asusta y piensas a largo plazo.',
    traits: ['Estable', 'Servicial', 'Paciente', 'Institucional'],
    advice: 'El sector público es para ti. Prepárate para concursos y busca dependencias con buena cultura organizacional.',
  },
  B: {
    title: '⚖️ Apto para Gobierno',
    description: 'Tienes aptitud para el sector público aunque también funcionarías bien en otros ambientes. Valoras la estabilidad pero no es tu única motivación.',
    traits: ['Adaptable', 'Equilibrado', 'Práctico', 'Versátil'],
    advice: 'El gobierno puede ser buena opción. Considera también organismos descentralizados o paraestatales.',
  },
  C: {
    title: '🌱 Sector Privado Preferido',
    description: 'Aunque podrías trabajar en gobierno, probablemente te sentirías más realizado en el sector privado. La burocracia y la lentitud te frustrarían.',
    traits: ['Dinámico', 'Impaciente', 'Orientado a resultados', 'Ágil'],
    advice: 'El sector privado probablemente sea mejor para ti. Si consideras gobierno, busca áreas con más dinamismo.',
  },
  D: {
    title: '🚀 Definitivamente Privado',
    description: 'El sector público no es para ti. Necesitas agilidad, meritocracia y variedad que el gobierno difícilmente te dará. Busca tu camino en el sector privado.',
    traits: ['Ambicioso', 'Ágil', 'Independiente', 'Competitivo'],
    advice: 'El sector privado, emprendimiento o startups son mucho mejor opción para tu perfil.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
