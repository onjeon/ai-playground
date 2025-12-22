// ¿Qué Equipo de Fútbol Mexicano Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te describes?',
    options: [
      { text: 'Tradicional y exitoso', type: 'A' },
      { text: 'Apasionado y leal', type: 'B' },
      { text: 'Moderno y ambicioso', type: 'C' },
      { text: 'Humilde pero guerrero', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué valoras más en tu vida?',
    options: [
      { text: 'Los títulos y el éxito', type: 'A' },
      { text: 'La pasión y la garra', type: 'B' },
      { text: 'El estilo y la modernidad', type: 'C' },
      { text: 'La lucha y el esfuerzo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas ante la derrota?',
    options: [
      { text: 'No la acepto, siempre quiero ganar', type: 'A' },
      { text: 'Me duele pero sigo apoyando', type: 'B' },
      { text: 'Analizo y busco mejorar', type: 'C' },
      { text: 'La acepto y sigo adelante', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cuál es tu estadio ideal?',
    options: [
      { text: 'El más grande y emblemático', type: 'A' },
      { text: 'Donde la afición se siente', type: 'B' },
      { text: 'Uno moderno y con tecnología', type: 'C' },
      { text: 'Uno con historia y tradición', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo es tu círculo de amigos?',
    options: [
      { text: 'Grande y variado', type: 'A' },
      { text: 'Muy unidos y leales', type: 'B' },
      { text: 'Selectivo y moderno', type: 'C' },
      { text: 'Pocos pero incondicionales', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué color te representa mejor?',
    options: [
      { text: 'Amarillo y azul', type: 'A' },
      { text: 'Rojo y blanco', type: 'B' },
      { text: 'Azul oscuro', type: 'C' },
      { text: 'Verde o colores únicos', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo celebras una victoria?',
    options: [
      { text: 'A lo grande, con todo', type: 'A' },
      { text: 'Con la familia y amigos', type: 'B' },
      { text: 'Con estilo y elegancia', type: 'C' },
      { text: 'Humildemente', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tipo de jugador admiras?',
    options: [
      { text: 'El goleador estrella', type: 'A' },
      { text: 'El guerrero que lo da todo', type: 'B' },
      { text: 'El técnico y elegante', type: 'C' },
      { text: 'El que surge de la cantera', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo ves a tu rival?',
    options: [
      { text: 'Siempre lo quiero vencer', type: 'A' },
      { text: 'Es mi enemigo eterno', type: 'B' },
      { text: 'Respeto pero quiero superarlo', type: 'C' },
      { text: 'Cada partido es una oportunidad', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué significa el fútbol para ti?',
    options: [
      { text: 'Todo, es mi vida', type: 'A' },
      { text: 'Una pasión que me une con mi gente', type: 'B' },
      { text: 'Un estilo de vida', type: 'C' },
      { text: 'Una forma de luchar', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🦅 América',
    description: '¡Eres el más grande! Ambicioso, exitoso y siempre buscando ser el mejor. Te gusta ganar y no te conformas con menos. Tu presencia es imponente y siempre quieres el protagonismo.',
    traits: ['Ambicioso', 'Exitoso', 'Dominante', 'Protagonista'],
    advice: 'Tu ambición te llevará lejos. Solo recuerda que la humildad también es parte del éxito.',
  },
  B: {
    title: '🐐 Chivas',
    description: 'Pasión pura y 100% mexicano. Tu lealtad a tus raíces es inquebrantable. Valoras la tradición y el corazón por encima de todo. Tu afición es tu familia.',
    traits: ['Apasionado', 'Leal', 'Tradicional', 'Mexicano'],
    advice: 'Tu pasión es contagiosa. Sigue siendo fiel a tus raíces, eso te hace único.',
  },
  C: {
    title: '🐾 Rayados',
    description: 'Moderno y con estilo. Buscas la excelencia en todo lo que haces. Te gusta lo mejor y trabajas para conseguirlo. Tu mentalidad es de ganador.',
    traits: ['Moderno', 'Ambicioso', 'Elegante', 'Trabajador'],
    advice: 'Tu modernidad te distingue. Sigue evolucionando pero no olvides tus raíces.',
  },
  D: {
    title: '🐯 Tigres / Pumas',
    description: 'Guerrero y trabajador. No tienes los reflectores pero luchas cada partido. Tu humildad y esfuerzo te definen. Eres de los que nunca se rinden.',
    traits: ['Guerrero', 'Humilde', 'Trabajador', 'Resiliente'],
    advice: 'Tu garra es admirable. Sigue luchando, tu momento de gloria llegará.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
