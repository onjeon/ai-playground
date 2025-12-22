// ¿Qué Mezcal o Tequila Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo prefieres tomar tu mezcal?',
    options: [
      { text: 'Derecho, sin nada', type: 'A' },
      { text: 'Con sal de gusano y naranja', type: 'B' },
      { text: 'En un coctel', type: 'C' },
      { text: 'No tomo mezcal', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo describes tu personalidad?',
    options: [
      { text: 'Intenso y profundo', type: 'A' },
      { text: 'Tradicional pero con estilo', type: 'B' },
      { text: 'Moderno y versátil', type: 'C' },
      { text: 'Suave y accesible', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan rápido confías en la gente?',
    options: [
      { text: 'Me toma tiempo, soy selectivo', type: 'A' },
      { text: 'Depende de la persona', type: 'B' },
      { text: 'Soy bastante abierto', type: 'C' },
      { text: 'Confío en casi todos', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tipo de conversaciones prefieres?',
    options: [
      { text: 'Profundas y filosóficas', type: 'A' },
      { text: 'Sobre tradiciones y cultura', type: 'B' },
      { text: 'De todo un poco', type: 'C' },
      { text: 'Ligeras y sin complicaciones', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te comportas en una borrachera?',
    options: [
      { text: 'Me pongo filosófico y profundo', type: 'A' },
      { text: 'Canto corridos y cuento historias', type: 'B' },
      { text: 'Bailo y me divierto', type: 'C' },
      { text: 'Me da sueño', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué valoras más en la vida?',
    options: [
      { text: 'La autenticidad y las raíces', type: 'A' },
      { text: 'Las tradiciones familiares', type: 'B' },
      { text: 'Las nuevas experiencias', type: 'C' },
      { text: 'La tranquilidad y paz', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo es tu círculo de amigos?',
    options: [
      { text: 'Pocos pero muy selectos', type: 'A' },
      { text: 'Los de toda la vida', type: 'B' },
      { text: 'Amplio y variado', type: 'C' },
      { text: 'Prefiero estar solo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué música va mejor con tu personalidad?',
    options: [
      { text: 'Música de Oaxaca o tradicional', type: 'A' },
      { text: 'Mariachi y rancheras', type: 'B' },
      { text: 'De todo un poco', type: 'C' },
      { text: 'Algo tranquilo', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo enfrentas los momentos difíciles?',
    options: [
      { text: 'Con reflexión y soledad', type: 'A' },
      { text: 'Buscando apoyo en la familia', type: 'B' },
      { text: 'Buscando distracción', type: 'C' },
      { text: 'Dejando que el tiempo pase', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué frase te representa mejor?',
    options: [
      { text: 'Para todo mal, mezcal', type: 'A' },
      { text: 'De la tierra al cielo', type: 'B' },
      { text: 'Vivir el momento', type: 'C' },
      { text: 'Con calma', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🥃 Mezcal Espadín',
    description: 'Profundo e intenso. Como el mezcal artesanal, tienes capas de complejidad que solo los que te conocen bien pueden apreciar. Eres auténtico y conectado con tus raíces.',
    traits: ['Profundo', 'Auténtico', 'Intenso', 'Selectivo'],
    advice: 'Tu profundidad es tu tesoro. Pero no te cierres tanto, comparte tu esencia con más gente.',
  },
  B: {
    title: '🥃 Tequila Reposado',
    description: 'Tradicional con carácter. Como el buen tequila, has madurado con el tiempo. Respetas las tradiciones pero tienes tu propia personalidad. Eres el clásico mexicano.',
    traits: ['Tradicional', 'Maduro', 'Con carácter', 'Respetado'],
    advice: 'Tu madurez es admirable. Sigue honrando tus raíces pero no temas evolucionar.',
  },
  C: {
    title: '🍹 Margarita',
    description: 'Moderno y versátil. Eres como el coctel más famoso: accesible, popular y adaptable. Sabes mezclar bien con todos y siempre la pasas bien.',
    traits: ['Versátil', 'Popular', 'Moderno', 'Sociable'],
    advice: 'Tu adaptabilidad es tu fuerza. Solo no pierdas tu esencia por complacer a todos.',
  },
  D: {
    title: '🥃 Tequila Blanco',
    description: 'Suave y accesible. Eres como el tequila joven: fresco, sin complicaciones y fácil de llevar. No necesitas ser intenso para ser apreciado.',
    traits: ['Suave', 'Accesible', 'Fresco', 'Relajado'],
    advice: 'Tu suavidad es encantadora. Pero no temas mostrar más carácter cuando sea necesario.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
