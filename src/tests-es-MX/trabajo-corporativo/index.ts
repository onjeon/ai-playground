// Test de Aptitud Corporativa - ¿Eres material de gran empresa?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes con jerarquías y estructuras organizacionales?',
    options: [
      { text: 'Cómodo, me dan claridad sobre mi rol', type: 'A' },
      { text: 'Bien, entiendo su necesidad', type: 'B' },
      { text: 'Me incomodan, limitan la creatividad', type: 'C' },
      { text: 'Las detesto, me siento atrapado', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan importante es la estabilidad laboral para ti?',
    options: [
      { text: 'Muy importante, es mi prioridad', type: 'A' },
      { text: 'Importante, pero no lo único', type: 'B' },
      { text: 'No tanto, prefiero oportunidades emocionantes', type: 'C' },
      { text: 'Nada, prefiero la libertad', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes con procesos y políticas establecidas?',
    options: [
      { text: 'Me dan estructura y claridad', type: 'A' },
      { text: 'Los respeto aunque a veces frustran', type: 'B' },
      { text: 'Son demasiado burocráticos', type: 'C' },
      { text: 'Me asfixian, necesito libertad', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan importantes son las prestaciones para ti?',
    options: [
      { text: 'Muy importantes, seguro médico, aguinaldo, etc.', type: 'A' },
      { text: 'Importantes pero no decisivas', type: 'B' },
      { text: 'Menos importantes que otros factores', type: 'C' },
      { text: 'No me importan mucho', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes con planes de carrera a largo plazo?',
    options: [
      { text: 'Me motivan, quiero crecer en la empresa', type: 'A' },
      { text: 'Bien, aunque no planeo quedarme siempre', type: 'B' },
      { text: 'No me interesan mucho', type: 'C' },
      { text: 'No creo en quedarse años en un lugar', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué opinas de las reuniones y juntas corporativas?',
    options: [
      { text: 'Son necesarias para la coordinación', type: 'A' },
      { text: 'A veces excesivas pero útiles', type: 'B' },
      { text: 'Pérdida de tiempo generalmente', type: 'C' },
      { text: 'Las odio, son pura burocracia', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes trabajando en equipos grandes?',
    options: [
      { text: 'Cómodo, hay especialización y recursos', type: 'A' },
      { text: 'Bien, aunque a veces es lento', type: 'B' },
      { text: 'Prefiero equipos pequeños', type: 'C' },
      { text: 'Me pierdo, prefiero impacto directo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan importante es el prestigio de la marca empleadora?',
    options: [
      { text: 'Muy importante, abre puertas', type: 'A' },
      { text: 'Importante para el CV', type: 'B' },
      { text: 'No tanto, importa más el trabajo', type: 'C' },
      { text: 'Nada, prefiero proyectos que me apasionen', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes con revisiones de desempeño formales?',
    options: [
      { text: 'Me gustan, dan claridad sobre mi progreso', type: 'A' },
      { text: 'Útiles aunque a veces estresantes', type: 'B' },
      { text: 'Me parecen artificiales', type: 'C' },
      { text: 'Las detesto, prefiero feedback informal', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan cómodo te sientes con la política de oficina?',
    options: [
      { text: 'La entiendo y navego bien', type: 'A' },
      { text: 'Me adapto aunque no me gusta', type: 'B' },
      { text: 'Me incomoda mucho', type: 'C' },
      { text: 'No puedo con ella, me drena', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo prefieres que sea tu trabajo?',
    options: [
      { text: 'Especializado con rol bien definido', type: 'A' },
      { text: 'Con algo de variedad pero enfocado', type: 'B' },
      { text: 'Variado, haciendo muchas cosas', type: 'C' },
      { text: 'Totalmente flexible y cambiante', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cuánto tiempo te ves en una misma empresa?',
    options: [
      { text: 'Muchos años si hay crecimiento', type: 'A' },
      { text: '3-5 años aproximadamente', type: 'B' },
      { text: '1-2 años máximo', type: 'C' },
      { text: 'El menor tiempo posible', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🏛️ Corporativo Nato',
    description: 'El mundo corporativo es tu hábitat natural. Valoras la estructura, las prestaciones, el prestigio y el crecimiento a largo plazo. Las grandes empresas te ofrecen lo que buscas.',
    traits: ['Estructurado', 'Estable', 'Ambicioso', 'Político'],
    advice: 'Las grandes empresas son para ti. Busca corporativos con buena cultura y planes de carrera sólidos.',
  },
  B: {
    title: '⚖️ Corporativo Adaptable',
    description: 'Te adaptas bien al mundo corporativo aunque no es tu única opción. Valoras la estabilidad pero también la flexibilidad. Funcionarías bien en empresas medianas-grandes.',
    traits: ['Adaptable', 'Equilibrado', 'Práctico', 'Versátil'],
    advice: 'Empresas medianas o corporativos con cultura moderna podrían ser tu sweet spot.',
  },
  C: {
    title: '🌱 Mejor en Empresas Pequeñas',
    description: 'El mundo corporativo te asfixia un poco. Prefieres la agilidad, el impacto directo y menos burocracia. Las empresas pequeñas o medianas serían mejor para ti.',
    traits: ['Ágil', 'Impaciente', 'Práctico', 'Independiente'],
    advice: 'Busca empresas pequeñas o medianas donde puedas tener más impacto y menos burocracia.',
  },
  D: {
    title: '🚀 Anti-Corporativo',
    description: 'El mundo corporativo definitivamente no es para ti. La burocracia, las jerarquías y la política te drenan. Necesitas ambientes más ágiles y flexibles.',
    traits: ['Rebelde', 'Independiente', 'Libre', 'Creativo'],
    advice: 'Startups, empresas pequeñas o trabajo independiente serían mucho mejor para tu personalidad.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
