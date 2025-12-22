// Personalidad del Domingo Mexicano
export const questions = [
  {
    id: 1,
    text: '¿A qué hora te despiertas los domingos?',
    options: [
      { text: 'Temprano, para aprovechar el día', type: 'A' },
      { text: 'Medio día, lo normal de fin de semana', type: 'B' },
      { text: 'Tarde, recuperando sueño', type: 'C' },
      { text: 'Me despierto y me vuelvo a dormir', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cuál es tu plan dominical típico?',
    options: [
      { text: 'Comida familiar en casa de alguien', type: 'A' },
      { text: 'Salir a algún lado: parque, centro comercial', type: 'B' },
      { text: 'Netflix y sofá todo el día', type: 'C' },
      { text: 'Preparar la semana que viene', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué comes los domingos?',
    options: [
      { text: 'Barbacoa, carnitas o algo especial', type: 'A' },
      { text: 'Comida casera elaborada', type: 'B' },
      { text: 'Lo que haya, no me complico', type: 'C' },
      { text: 'Pido a domicilio, domingo de no cocinar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te sientes los domingos por la tarde?',
    options: [
      { text: 'Feliz, relajado y en familia', type: 'A' },
      { text: 'Tranquilo, disfrutando el descanso', type: 'B' },
      { text: 'Empieza la ansiedad del lunes', type: 'C' },
      { text: 'Depresión dominguera total', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Ves el fútbol los domingos?',
    options: [
      { text: 'Claro, es sagrado', type: 'A' },
      { text: 'Si está mi equipo, sí', type: 'B' },
      { text: 'A veces, si no hay más que hacer', type: 'C' },
      { text: 'No me gusta el fútbol', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Sales de tu casa los domingos?',
    options: [
      { text: 'Sí, siempre hay plan', type: 'A' },
      { text: 'A veces, depende del clima y humor', type: 'B' },
      { text: 'Prefiero quedarme en casa', type: 'C' },
      { text: 'Solo si es absolutamente necesario', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué bebida dominguera prefieres?',
    options: [
      { text: 'Cerveza o michelada', type: 'A' },
      { text: 'Agua fresca de la abuela', type: 'B' },
      { text: 'Refresco normal', type: 'C' },
      { text: 'Café para despertar', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Haces ejercicio los domingos?',
    options: [
      { text: 'Sí, aprovecho el día libre', type: 'A' },
      { text: 'Una caminata o algo leve', type: 'B' },
      { text: 'El domingo es de descanso total', type: 'C' },
      { text: 'El único ejercicio es ir al refri', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Visitas a familia los domingos?',
    options: [
      { text: 'Siempre, es tradición', type: 'A' },
      { text: 'Seguido, cuando se puede', type: 'B' },
      { text: 'De vez en cuando', type: 'C' },
      { text: 'Rara vez o nunca', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿A qué hora te duermes los domingos?',
    options: [
      { text: 'Temprano, para empezar bien el lunes', type: 'A' },
      { text: 'Normal, como cualquier día', type: 'B' },
      { text: 'Tarde, estirando el fin de semana', type: 'C' },
      { text: 'No puedo dormir pensando en el lunes', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '👨‍👩‍👧‍👦 El Dominguero Familiar',
    description: 'Tus domingos son familiares por excelencia. Barbacoa, fútbol, familia y tradición. Eres el corazón de las reuniones dominicales y no imaginas el domingo de otra manera.',
    traits: ['Familiar', 'Tradicional', 'Sociable', 'Alegre'],
    advice: 'Tus domingos familiares son tesoros. Sigue cultivando esas tradiciones con amor.',
  },
  B: {
    title: '☀️ El Domingo Equilibrado',
    description: 'Disfrutas los domingos con balance: algo de familia, algo de descanso, algo de actividad. Has encontrado la fórmula perfecta para recargar energías.',
    traits: ['Equilibrado', 'Relajado', 'Flexible', 'Satisfecho'],
    advice: 'Tu balance dominical es perfecto. Sigue disfrutando de tu día sin presiones.',
  },
  C: {
    title: '😴 El Dormilón Dominical',
    description: 'El domingo es tu día de recuperación total. Netflix, sofá y pijama todo el día. No necesitas hacer nada más que existir y recargar para la semana.',
    traits: ['Hogareño', 'Relajado', 'Introvertido', 'Tranquilo'],
    advice: 'Tu descanso es válido, pero a veces salir puede recargar más que quedarse en cama.',
  },
  D: {
    title: '😰 El Ansioso del Domingo',
    description: 'Los domingos te generan ansiedad pensando en el lunes. La depresión dominguera te visita frecuentemente y el fin de semana se siente muy corto.',
    traits: ['Ansioso', 'Preocupado', 'Estresado', 'Pensativo'],
    advice: 'Si el domingo te genera tanta ansiedad, quizás es momento de evaluar si tu trabajo te hace feliz.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
