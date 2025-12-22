// ¿Qué Antojito Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo eres cuando tienes hambre?',
    options: [
      { text: 'Me pongo de malas hasta comer', type: 'A' },
      { text: 'Busco algo rápido y sigo', type: 'B' },
      { text: 'Aguanto hasta encontrar algo bueno', type: 'C' },
      { text: 'Puedo esperar sin problema', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan sociable eres?',
    options: [
      { text: 'El alma de la fiesta', type: 'A' },
      { text: 'Social pero selectivo', type: 'B' },
      { text: 'Prefiero grupos pequeños', type: 'C' },
      { text: 'Me gusta estar solo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿A qué hora andas de antojo?',
    options: [
      { text: 'A las 2am después del antro', type: 'A' },
      { text: 'A media tarde como snack', type: 'B' },
      { text: 'A la hora de la comida', type: 'C' },
      { text: 'Cuando se presente', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo es tu estilo personal?',
    options: [
      { text: 'Llamativo y colorido', type: 'A' },
      { text: 'Práctico y funcional', type: 'B' },
      { text: 'Clásico y elegante', type: 'C' },
      { text: 'Simple y sin pretensiones', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan impulsivo eres?',
    options: [
      { text: 'Muy impulsivo, actúo primero', type: 'A' },
      { text: 'A veces me dejo llevar', type: 'B' },
      { text: 'Pienso antes de actuar', type: 'C' },
      { text: 'Muy calculador', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Dónde prefieres comer antojitos?',
    options: [
      { text: 'En un puesto callejero', type: 'A' },
      { text: 'En el tianguis', type: 'B' },
      { text: 'En un restaurante', type: 'C' },
      { text: 'En mi casa', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas el caos?',
    options: [
      { text: 'Soy el caos', type: 'A' },
      { text: 'Me adapto al momento', type: 'B' },
      { text: 'Trato de organizar todo', type: 'C' },
      { text: 'Me alejo del caos', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan exigente eres con la comida?',
    options: [
      { text: 'Me gusta probar de todo', type: 'A' },
      { text: 'Tengo mis favoritos', type: 'B' },
      { text: 'Soy algo exigente', type: 'C' },
      { text: 'Como lo que hay', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te describes en el amor?',
    options: [
      { text: 'Intenso y apasionado', type: 'A' },
      { text: 'Cariñoso y atento', type: 'B' },
      { text: 'Romántico y detallista', type: 'C' },
      { text: 'Independiente pero leal', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu salsa favorita?',
    options: [
      { text: 'La más picosa que haya', type: 'A' },
      { text: 'Verde con tomatillo', type: 'B' },
      { text: 'Roja tradicional', type: 'C' },
      { text: 'Sin salsa, gracias', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🔥 Elote con Chile',
    description: '¡Picante y callejero! Eres intenso, impulsivo y lleno de vida. La gente te reconoce desde lejos por tu personalidad explosiva. Eres el antojito nocturno favorito de todos.',
    traits: ['Intenso', 'Impulsivo', 'Sociable', 'Picante'],
    advice: 'Tu energía es contagiosa, pero no te pases de chile. A veces hay que bajarle dos rayitas.',
  },
  B: {
    title: '🥟 Quesadilla de Chicharrón',
    description: 'Práctico y satisfactorio. Sabes lo que quieres y vas por ello. No necesitas ser complicado para ser delicioso. Eres el antojito versátil que todos buscan.',
    traits: ['Práctico', 'Versátil', 'Satisfactorio', 'Accesible'],
    advice: 'Tu practicidad es tu fuerza. Solo recuerda que a veces hay que darse gustos especiales.',
  },
  C: {
    title: '🫓 Sope de Tinga',
    description: 'Clásico y bien estructurado. Tienes base sólida y buen sabor. Te gusta hacer las cosas bien y con orden. Eres el antojito que nunca decepciona.',
    traits: ['Clásico', 'Ordenado', 'Confiable', 'Completo'],
    advice: 'Tu consistencia es admirable. Pero atrévete a salir de tu zona de confort de vez en cuando.',
  },
  D: {
    title: '🥜 Cacahuates Japoneses',
    description: 'Simple pero adictivo. No necesitas ser complicado para ser memorable. Prefieres la tranquilidad y tu espacio. Eres el antojito discreto pero que todos buscan.',
    traits: ['Simple', 'Discreto', 'Adictivo', 'Independiente'],
    advice: 'Tu simplicidad es tu encanto. No cambies por nadie, eres perfecto así.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
