// Personalidad en el Amor
export const questions = [
  {
    id: 1,
    text: '¿Cómo demuestras tu amor a tu pareja?',
    options: [
      { text: 'Con palabras bonitas y mensajes románticos', type: 'A' },
      { text: 'Con detalles y regalos sorpresa', type: 'B' },
      { text: 'Pasando tiempo de calidad juntos', type: 'C' },
      { text: 'Con acciones, ayudándole en todo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan celoso eres en una relación?',
    options: [
      { text: 'Nada, confío plenamente en mi pareja', type: 'A' },
      { text: 'Un poquito, lo normal', type: 'B' },
      { text: 'Bastante, me cuesta controlar los celos', type: 'C' },
      { text: 'Mucho, si es mío es mío', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas los problemas con tu pareja?',
    options: [
      { text: 'Hablamos todo y lo resolvemos juntos', type: 'A' },
      { text: 'Me tomo un tiempo y luego platicamos', type: 'B' },
      { text: 'Evito el conflicto, mejor que se pase', type: 'C' },
      { text: 'A veces me enojo y necesito espacio', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo es tu cita ideal?',
    options: [
      { text: 'Cena romántica en un lugar bonito', type: 'A' },
      { text: 'Algo divertido: concierto, cine o aventura', type: 'B' },
      { text: 'Algo tranquilo: Netflix y chill en casa', type: 'C' },
      { text: 'Lo que sea, mientras estemos juntos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan rápido te enamoras?',
    options: [
      { text: 'Rapidísimo, soy bien intenso/a', type: 'A' },
      { text: 'Me toma tiempo pero cuando caigo, caigo fuerte', type: 'B' },
      { text: 'Voy despacio, prefiero conocer bien primero', type: 'C' },
      { text: 'Me cuesta mucho enamorarme', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes con el tema de conocer a la familia de tu pareja?',
    options: [
      { text: 'Me emociona, quiero caerles bien', type: 'A' },
      { text: 'Nervioso pero con ganas de conocerlos', type: 'B' },
      { text: 'Prefiero esperar hasta que sea serio', type: 'C' },
      { text: 'Me estresa, las familias son complicadas', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué opinas de las muestras de cariño en público?',
    options: [
      { text: 'Me encantan, soy bien cariñoso/a', type: 'A' },
      { text: 'Están bien, con moderación', type: 'B' },
      { text: 'Prefiero ser discreto/a en público', type: 'C' },
      { text: 'No me gustan, lo privado es privado', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo manejas el espacio personal en la relación?',
    options: [
      { text: 'Me gusta estar pegaditos todo el tiempo', type: 'A' },
      { text: 'Balance: tiempo juntos y tiempo solo', type: 'B' },
      { text: 'Necesito mi espacio, es importante', type: 'C' },
      { text: 'Muy independiente, cada quien su vida', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces después de una ruptura?',
    options: [
      { text: 'Lloro, escucho música triste y lo proceso', type: 'A' },
      { text: 'Me refugio en amigos y familia', type: 'B' },
      { text: 'Me distraigo con trabajo o hobbies', type: 'C' },
      { text: 'Paso página rápido, pa\' delante', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Crees en el amor verdadero?',
    options: [
      { text: 'Totalmente, existe y lo voy a encontrar', type: 'A' },
      { text: 'Sí, pero hay que construirlo con trabajo', type: 'B' },
      { text: 'No estoy seguro/a, pero tengo esperanza', type: 'C' },
      { text: 'Soy más realista con esas cosas', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💕 El Romántico Empedernido',
    description: 'Eres de los que aman con todo el corazón. Te gustan los detalles románticos, las palabras bonitas y demostrar tu amor sin reservas. Crees en el amor de películas y no tienes miedo de expresar tus sentimientos.',
    traits: ['Romántico', 'Expresivo', 'Apasionado', 'Soñador'],
    advice: 'Tu capacidad de amar es hermosa, pero cuida no perderte en el otro. El amor propio es igual de importante.',
  },
  B: {
    title: '⚖️ El Amante Equilibrado',
    description: 'Amas con intensidad pero con los pies en la tierra. Sabes dar espacio y también estar presente. Has encontrado el balance entre el romanticismo y la practicidad. Eres el tipo de pareja que todos quisieran tener.',
    traits: ['Equilibrado', 'Maduro', 'Comprometido', 'Estable'],
    advice: 'Tu enfoque balanceado es perfecto para relaciones duraderas. Sigue cultivando esa madurez emocional.',
  },
  C: {
    title: '🛡️ El Cauteloso del Corazón',
    description: 'Te tomas tu tiempo para enamorarte y no entregas tu corazón fácilmente. Prefieres ir despacio y conocer bien a la persona antes de comprometerte. Has aprendido a proteger tu corazón.',
    traits: ['Cauteloso', 'Selectivo', 'Independiente', 'Reflexivo'],
    advice: 'Tu cautela te protege, pero no dejes que el miedo te impida vivir el amor. A veces hay que arriesgarse.',
  },
  D: {
    title: '🦋 El Espíritu Libre',
    description: 'Valoras tu libertad e independencia sobre todo. Las relaciones te gustan pero no a costa de perder tu identidad. Necesitas una pareja que respete tu espacio y no te agobie.',
    traits: ['Independiente', 'Libre', 'Realista', 'Autosuficiente'],
    advice: 'Tu independencia es valiosa, pero el amor verdadero no te quita libertad, te la complementa. Permite que alguien entre.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
