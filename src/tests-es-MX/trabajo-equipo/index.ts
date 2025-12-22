// Test de Trabajo en Equipo - ¿Qué rol juegas en un equipo?
export const questions = [
  {
    id: 1,
    text: 'En un proyecto grupal, ¿qué rol asumes naturalmente?',
    options: [
      { text: 'El que organiza y planea todo', type: 'A' },
      { text: 'El que aporta ideas creativas', type: 'B' },
      { text: 'El que ejecuta y hace el trabajo', type: 'C' },
      { text: 'El que mantiene al equipo unido', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Cuando hay desacuerdos en el equipo...',
    options: [
      { text: 'Propongo soluciones estructuradas', type: 'A' },
      { text: 'Busco alternativas innovadoras', type: 'B' },
      { text: 'Me enfoco en avanzar con lo que se pueda', type: 'C' },
      { text: 'Trato de mediar y encontrar consenso', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué aportas principalmente al equipo?',
    options: [
      { text: 'Estructura y organización', type: 'A' },
      { text: 'Ideas nuevas y perspectivas diferentes', type: 'B' },
      { text: 'Trabajo duro y constancia', type: 'C' },
      { text: 'Armonía y buena comunicación', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo prefieres que te asignen tareas?',
    options: [
      { text: 'Coordinar y supervisar el proyecto', type: 'A' },
      { text: 'Trabajar en la parte creativa o de diseño', type: 'B' },
      { text: 'Ejecutar tareas específicas y concretas', type: 'C' },
      { text: 'Apoyar donde sea necesario y ayudar a todos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Cuando el equipo está estancado...',
    options: [
      { text: 'Reorganizo el plan de trabajo', type: 'A' },
      { text: 'Propongo algo totalmente diferente', type: 'B' },
      { text: 'Me pongo a trabajar para desatorar', type: 'C' },
      { text: 'Motivo al equipo para retomar energía', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué te frustra más de trabajar en equipo?',
    options: [
      { text: 'La falta de organización y planeación', type: 'A' },
      { text: 'La falta de creatividad y apertura', type: 'B' },
      { text: 'Que hablen mucho y hagan poco', type: 'C' },
      { text: 'Los conflictos y el mal ambiente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te describirían tus compañeros?',
    options: [
      { text: 'Organizado y responsable', type: 'A' },
      { text: 'Creativo y propositivo', type: 'B' },
      { text: 'Trabajador y confiable', type: 'C' },
      { text: 'Amigable y conciliador', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'En las juntas de equipo, tú eres el que...',
    options: [
      { text: 'Lleva la agenda y modera la junta', type: 'A' },
      { text: 'Propone ideas locas pero interesantes', type: 'B' },
      { text: 'Toma notas y se enfoca en lo práctico', type: 'C' },
      { text: 'Se asegura de que todos participen', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Cuando un compañero no está cumpliendo...',
    options: [
      { text: 'Le asigno tareas más claras y le doy seguimiento', type: 'A' },
      { text: 'Trato de entender si necesita un enfoque diferente', type: 'B' },
      { text: 'Hago su parte para que no afecte al equipo', type: 'C' },
      { text: 'Hablo con él para ver si tiene algún problema', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué prefieres en un equipo de trabajo?',
    options: [
      { text: 'Roles claros y bien definidos', type: 'A' },
      { text: 'Libertad para experimentar y proponer', type: 'B' },
      { text: 'Metas claras y trabajo enfocado', type: 'C' },
      { text: 'Buen ambiente y compañerismo', type: 'D' },
    ],
  },
  {
    id: 11,
    text: 'Cuando el proyecto es un éxito...',
    options: [
      { text: 'Documento lo que funcionó para replicarlo', type: 'A' },
      { text: 'Ya estoy pensando en cómo mejorarlo', type: 'B' },
      { text: 'Me siento satisfecho de haber contribuido', type: 'C' },
      { text: 'Celebro con el equipo y reconozco a todos', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué valoras más en tus compañeros de equipo?',
    options: [
      { text: 'Que sean organizados y cumplidos', type: 'A' },
      { text: 'Que sean creativos y aporten ideas', type: 'B' },
      { text: 'Que sean trabajadores y responsables', type: 'C' },
      { text: 'Que sean buena onda y colaborativos', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📋 El Coordinador',
    description: 'Eres el cerebro organizativo del equipo. Te aseguras de que todo esté planeado, de que haya claridad en los roles y de que el proyecto avance según lo previsto. Sin ti, el equipo sería un caos.',
    traits: ['Organizado', 'Líder natural', 'Estructurado', 'Responsable'],
    advice: 'Tu capacidad de organizar es invaluable, pero no olvides escuchar ideas que salgan del plan. A veces lo mejor no estaba previsto.',
  },
  B: {
    title: '💡 El Creativo',
    description: 'Eres la chispa de innovación del equipo. Cuando todos ven lo mismo, tú ves algo diferente. Tus ideas pueden parecer locas al principio, pero muchas veces son la clave del éxito.',
    traits: ['Innovador', 'Original', 'Visionario', 'Propositivo'],
    advice: 'Tus ideas son valiosas, pero también aprende a aterrizarlas. A veces la mejor idea es la que se puede ejecutar, no la más brillante.',
  },
  C: {
    title: '⚙️ El Ejecutor',
    description: 'Eres el motor del equipo. Mientras otros planean y proponen, tú haces que las cosas pasen. Tu constancia y dedicación son las que realmente sacan los proyectos adelante.',
    traits: ['Trabajador', 'Confiable', 'Constante', 'Práctico'],
    advice: 'Tu trabajo duro es admirable, pero no te sobrecargues. Aprende a poner límites y a pedir ayuda cuando la necesites.',
  },
  D: {
    title: '🤗 El Armonizador',
    description: 'Eres el corazón del equipo. Te aseguras de que todos se sientan bien, de que haya buena comunicación y de que los conflictos se resuelvan. Sin ti, el equipo se desmoronaría.',
    traits: ['Empático', 'Conciliador', 'Comunicativo', 'Solidario'],
    advice: 'Tu capacidad de unir al equipo es única, pero no descuides tus propias tareas por ayudar a otros. Tu bienestar también importa.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
