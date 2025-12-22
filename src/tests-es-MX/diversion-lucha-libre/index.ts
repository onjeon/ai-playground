// ¿Qué Luchador de Lucha Libre Eres?
export const questions = [
  {
    id: 1,
    text: '¿Cómo enfrentas los problemas?',
    options: [
      { text: 'De frente y con todo', type: 'A' },
      { text: 'Con técnica y estrategia', type: 'B' },
      { text: 'Buscando aliados', type: 'C' },
      { text: 'Evitándolos si puedo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tipo de máscara usarías?',
    options: [
      { text: 'Una plateada brillante', type: 'A' },
      { text: 'Una colorida y llamativa', type: 'B' },
      { text: 'Una oscura y misteriosa', type: 'C' },
      { text: 'Prefiero ir sin máscara', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te describes en el trabajo?',
    options: [
      { text: 'El héroe que resuelve todo', type: 'A' },
      { text: 'El técnico que hace las cosas bien', type: 'B' },
      { text: 'El rebelde que rompe reglas', type: 'C' },
      { text: 'El que prefiere trabajar solo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué te motiva más?',
    options: [
      { text: 'Defender a los débiles', type: 'A' },
      { text: 'Ser el mejor en lo que hago', type: 'B' },
      { text: 'El poder y el reconocimiento', type: 'C' },
      { text: 'Mi propia paz interior', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo reaccionas ante la injusticia?',
    options: [
      { text: 'Actúo de inmediato para corregirla', type: 'A' },
      { text: 'Busco la forma correcta de actuar', type: 'B' },
      { text: 'Uso cualquier medio necesario', type: 'C' },
      { text: 'No es mi problema', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué movimiento especial tendrías?',
    options: [
      { text: 'La plancha desde lo alto', type: 'A' },
      { text: 'Una llave perfecta', type: 'B' },
      { text: 'Un golpe sorpresa', type: 'C' },
      { text: 'Esquivar y contraatacar', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo es tu relación con la fama?',
    options: [
      { text: 'La disfruto y la uso para bien', type: 'A' },
      { text: 'Me la gano con trabajo', type: 'B' },
      { text: 'La busco a toda costa', type: 'C' },
      { text: 'No me interesa', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué harías si pierdes una lucha importante?',
    options: [
      { text: 'Me levanto y sigo adelante', type: 'A' },
      { text: 'Analizo qué salió mal', type: 'B' },
      { text: 'Busco revancha a como dé lugar', type: 'C' },
      { text: 'Acepto la derrota con calma', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te comportas con tus rivales?',
    options: [
      { text: 'Con respeto pero firmeza', type: 'A' },
      { text: 'De manera profesional', type: 'B' },
      { text: 'Con intimidación', type: 'C' },
      { text: 'Los ignoro', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué legado quieres dejar?',
    options: [
      { text: 'Ser recordado como un héroe', type: 'A' },
      { text: 'Ser el mejor técnico de la historia', type: 'B' },
      { text: 'Ser temido y respetado', type: 'C' },
      { text: 'Vivir en paz', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🦸 El Santo',
    description: '¡Eres el héroe del pueblo! Como El Santo, defiendes a los débiles y luchas por la justicia. Tu máscara plateada representa pureza y honor. La gente te admira y confía en ti.',
    traits: ['Heroico', 'Noble', 'Valiente', 'Respetado'],
    advice: 'Tu nobleza es admirable. Solo recuerda que no puedes salvar a todos, también cuídate a ti mismo.',
  },
  B: {
    title: '🎭 Blue Demon',
    description: 'Técnico y estratégico. Como Blue Demon, combinas habilidad con inteligencia. No necesitas trucos sucios para ganar, tu técnica habla por sí sola.',
    traits: ['Técnico', 'Estratégico', 'Hábil', 'Profesional'],
    advice: 'Tu técnica es impecable. Pero a veces hay que dejarse llevar por la pasión también.',
  },
  C: {
    title: '😈 El Rudo',
    description: 'Intenso y sin límites. Eres el rudo que hace lo necesario para ganar. No te importa lo que piensen, tú vas por el campeonato. Tu presencia intimida.',
    traits: ['Intenso', 'Determinado', 'Intimidante', 'Ambicioso'],
    advice: 'Tu determinación es fuerte. Pero cuidado con pasar los límites, el respeto también importa.',
  },
  D: {
    title: '🥷 El Misterioso',
    description: 'Enigmático y reservado. Prefieres observar antes de actuar. No buscas la fama ni el reconocimiento, solo tu propia paz. Tu misterio intriga a todos.',
    traits: ['Misterioso', 'Reservado', 'Observador', 'Independiente'],
    advice: 'Tu misterio es tu encanto. Pero a veces hay que salir al ring y mostrar de qué estás hecho.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
