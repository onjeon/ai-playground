// Test de Manejo de Conflictos Laborales - ¿Cómo manejas los conflictos en el trabajo?
export const questions = [
  {
    id: 1,
    text: 'Tienes un desacuerdo con un compañero sobre un proyecto...',
    options: [
      { text: 'Lo hablo directamente para resolverlo', type: 'A' },
      { text: 'Busco un punto medio que funcione', type: 'B' },
      { text: 'Cedo para evitar el conflicto', type: 'C' },
      { text: 'Lo ignoro y sigo mi camino', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Tu jefe te da retroalimentación que consideras injusta...',
    options: [
      { text: 'Le expreso mi punto de vista respetuosamente', type: 'A' },
      { text: 'Escucho y trato de entender su perspectiva', type: 'B' },
      { text: 'Lo acepto aunque no esté de acuerdo', type: 'C' },
      { text: 'Me molesto pero no digo nada', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes cuando hay tensión en tu equipo?',
    options: [
      { text: 'Trato de mediar y resolver la situación', type: 'A' },
      { text: 'Busco entender qué pasa antes de actuar', type: 'B' },
      { text: 'Me mantengo al margen', type: 'C' },
      { text: 'Me afecta mucho y me estresa', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Un compañero te habla de forma irrespetuosa...',
    options: [
      { text: 'Le digo que no me parece apropiado su tono', type: 'A' },
      { text: 'Lo hablo después en privado', type: 'B' },
      { text: 'Lo dejo pasar esta vez', type: 'C' },
      { text: 'Me guardo el coraje y me desquito después', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas cuando alguien se lleva el crédito por tu trabajo?',
    options: [
      { text: 'Lo aclaro con evidencias', type: 'A' },
      { text: 'Lo menciono diplomáticamente', type: 'B' },
      { text: 'Me molesta pero no hago nada', type: 'C' },
      { text: 'Me resigno, así es esto', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué haces cuando hay chismes que te afectan?',
    options: [
      { text: 'Los confronto directamente', type: 'A' },
      { text: 'Hablo con las personas involucradas', type: 'B' },
      { text: 'Los ignoro y sigo adelante', type: 'C' },
      { text: 'Me afectan mucho pero no hago nada', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Tu equipo no está de acuerdo con tu propuesta...',
    options: [
      { text: 'Defiendo mi posición con argumentos', type: 'A' },
      { text: 'Escucho sus puntos y busco consenso', type: 'B' },
      { text: 'Cedo y acepto lo que el equipo quiera', type: 'C' },
      { text: 'Me frustro y me cierro', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo reaccionas cuando te excluyen de una decisión importante?',
    options: [
      { text: 'Pregunto por qué y expreso que debí estar', type: 'A' },
      { text: 'Busco información sobre qué pasó', type: 'B' },
      { text: 'Lo acepto aunque me moleste', type: 'C' },
      { text: 'Me resiento pero no digo nada', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Hay un conflicto entre dos personas de tu equipo...',
    options: [
      { text: 'Intervengo para mediar y resolver', type: 'A' },
      { text: 'Hablo con cada uno por separado', type: 'B' },
      { text: 'Espero que se resuelva solo', type: 'C' },
      { text: 'No me meto, no es mi problema', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes tu estilo ante conflictos?',
    options: [
      { text: 'Confrontativo pero respetuoso', type: 'A' },
      { text: 'Mediador, busco soluciones', type: 'B' },
      { text: 'Evitador, prefiero la paz', type: 'C' },
      { text: 'Pasivo-agresivo, me guardo las cosas', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tan rápido superas los conflictos laborales?',
    options: [
      { text: 'Rápido, los resuelvo y sigo adelante', type: 'A' },
      { text: 'Relativamente rápido', type: 'B' },
      { text: 'Me toma tiempo procesarlos', type: 'C' },
      { text: 'Me cuesta mucho, los cargo por semanas', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Alguna vez un conflicto laboral mejoró una situación?',
    options: [
      { text: 'Sí, los conflictos bien manejados mejoran las cosas', type: 'A' },
      { text: 'A veces, cuando se resuelven bien', type: 'B' },
      { text: 'Raramente', type: 'C' },
      { text: 'Nunca, los conflictos solo empeoran todo', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎯 Confrontador Asertivo',
    description: 'Enfrentas los conflictos de frente con respeto. Sabes defender tu posición y resolver problemas directamente. Esto es una fortaleza valiosa.',
    traits: ['Directo', 'Asertivo', 'Resolutivo', 'Claro'],
    advice: 'Tu estilo es efectivo. Solo asegúrate de que la confrontación no se vuelva agresiva ni dañe relaciones.',
  },
  B: {
    title: '⚖️ Mediador Diplomático',
    description: 'Buscas el balance y el consenso. Escuchas todas las partes y buscas soluciones que funcionen para todos. Eres un activo valioso en equipos.',
    traits: ['Diplomático', 'Equilibrado', 'Mediador', 'Empático'],
    advice: 'Tu estilo crea armonía. Solo asegúrate de no sacrificar tus propios intereses por mantener la paz.',
  },
  C: {
    title: '🕊️ Evitador de Conflictos',
    description: 'Prefieres evitar los conflictos y ceder para mantener la paz. Esto puede crear armonía pero también acumular resentimientos.',
    traits: ['Pacifista', 'Cededor', 'Evitador', 'Complaciente'],
    advice: 'Evitar conflictos no los resuelve. Practica expresar tu punto de vista, es posible hacerlo sin ser agresivo.',
  },
  D: {
    title: '💢 Conflicto Mal Manejado',
    description: 'Los conflictos te afectan mucho y los manejas de forma pasivo-agresiva. Esto puede dañar relaciones y tu bienestar.',
    traits: ['Pasivo-agresivo', 'Resentido', 'Afectado', 'Cerrado'],
    advice: 'El manejo de conflictos es una habilidad que se desarrolla. Considera capacitación en comunicación asertiva.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
