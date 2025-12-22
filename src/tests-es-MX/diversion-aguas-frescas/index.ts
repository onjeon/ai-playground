// ¿Qué Agua Fresca Mexicana Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Refrescante y popular', type: 'A' },
      { text: 'Tradicional y reconfortante', type: 'B' },
      { text: 'Dulce y tropical', type: 'C' },
      { text: 'Único y diferente', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué color te representa mejor?',
    options: [
      { text: 'Rojo intenso', type: 'A' },
      { text: 'Blanco cremoso', type: 'B' },
      { text: 'Amarillo brillante', type: 'C' },
      { text: 'Verde refrescante', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te gusta el dulce?',
    options: [
      { text: 'Equilibrado, ni muy dulce ni muy ácido', type: 'A' },
      { text: 'Suave y cremoso', type: 'B' },
      { text: 'Bien dulce y tropical', type: 'C' },
      { text: 'Poco dulce, más natural', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cuál es tu estación favorita?',
    options: [
      { text: 'Verano, para refrescarme', type: 'A' },
      { text: 'Cualquiera, siempre tengo sed', type: 'B' },
      { text: 'Cuando hace calor extremo', type: 'C' },
      { text: 'Primavera, clima perfecto', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Dónde compras agua fresca?',
    options: [
      { text: 'En el mercado o tianguis', type: 'A' },
      { text: 'La hago en casa', type: 'B' },
      { text: 'En cualquier puesto', type: 'C' },
      { text: 'En restaurantes', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué comida acompaña mejor tu agua?',
    options: [
      { text: 'Tacos y antojitos', type: 'A' },
      { text: 'Comida casera', type: 'B' },
      { text: 'Mariscos y ceviches', type: 'C' },
      { text: 'Lo que sea', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo eres en grupo?',
    options: [
      { text: 'El popular que todos quieren', type: 'A' },
      { text: 'El tranquilo y querido', type: 'B' },
      { text: 'El alegre y tropical', type: 'C' },
      { text: 'El diferente del grupo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan tradicional eres?',
    options: [
      { text: 'Muy tradicional mexicano', type: 'A' },
      { text: 'Clásico de toda la vida', type: 'B' },
      { text: 'Moderno pero con raíces', type: 'C' },
      { text: 'Innovador y diferente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cuánta azúcar le pones a tu agua?',
    options: [
      { text: 'La justa, bien preparada', type: 'A' },
      { text: 'Poca, me gusta natural', type: 'B' },
      { text: 'Bastante, bien dulce', type: 'C' },
      { text: 'Casi nada', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué textura prefieres?',
    options: [
      { text: 'Lisa y refrescante', type: 'A' },
      { text: 'Cremosa con semillas', type: 'B' },
      { text: 'Con pedacitos de fruta', type: 'C' },
      { text: 'Ligera y transparente', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌺 Agua de Jamaica',
    description: '¡Eres la más popular! Refrescante, con ese color rojo intenso que todos reconocen. Estás en cada fonda, mercado y casa mexicana. Tu sabor equilibrado te hace el favorito de millones.',
    traits: ['Popular', 'Refrescante', 'Equilibrado', 'Tradicional'],
    advice: 'Tu popularidad es merecida. Sigue siendo ese sabor que refresca a México.',
  },
  B: {
    title: '🥛 Agua de Horchata',
    description: 'Cremosa, dulce y reconfortante. Como la horchata, tu presencia calma y satisface. Ese sabor a arroz con canela representa la esencia de los hogares mexicanos.',
    traits: ['Reconfortante', 'Cremoso', 'Tradicional', 'Dulce'],
    advice: 'Tu suavidad es tu encanto. Sigue siendo ese sabor que reconforta.',
  },
  C: {
    title: '🍈 Agua de Melón/Piña',
    description: 'Dulce y tropical. Eres como un día soleado en la playa. Tu frescura y dulzura natural alegran cualquier comida. Eres la fiesta en forma de agua.',
    traits: ['Tropical', 'Alegre', 'Dulce', 'Fresco'],
    advice: 'Tu alegría es contagiosa. Sigue siendo ese sabor que trae el verano.',
  },
  D: {
    title: '🥒 Agua de Limón con Chía',
    description: 'Diferente y saludable. No eres el típico sabor pero tienes tus fans leales. Tu textura única con las semillas te hace memorable. Eres para paladares aventureros.',
    traits: ['Único', 'Saludable', 'Diferente', 'Refrescante'],
    advice: 'Tu singularidad es tu fuerza. Sigue siendo diferente.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
