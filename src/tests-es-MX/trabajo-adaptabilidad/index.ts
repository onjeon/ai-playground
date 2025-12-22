// Test de Adaptabilidad - ¿Qué tan adaptable eres al cambio?
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas cuando cambian tus responsabilidades?',
    options: [
      { text: 'Me adapto rápido, es oportunidad', type: 'A' },
      { text: 'Me toma un poco pero me ajusto', type: 'B' },
      { text: 'Me incomoda pero lo hago', type: 'C' },
      { text: 'Me resisto, prefiero mis tareas conocidas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Tu empresa implementa un nuevo sistema o proceso...',
    options: [
      { text: 'Genial, me emociona aprender', type: 'A' },
      { text: 'Lo aprendo y me adapto', type: 'B' },
      { text: 'Me frustra pero lo acepto', type: 'C' },
      { text: 'Odio los cambios de sistema', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas trabajar con personas muy diferentes a ti?',
    options: [
      { text: 'Me enriquece, aprendo de todos', type: 'A' },
      { text: 'Bien, me adapto a diferentes estilos', type: 'B' },
      { text: 'Me cuesta pero lo intento', type: 'C' },
      { text: 'Prefiero gente similar a mí', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Te asignan un proyecto fuera de tu zona de confort...',
    options: [
      { text: 'Perfecto, me gusta retarme', type: 'A' },
      { text: 'Lo tomo como oportunidad de crecer', type: 'B' },
      { text: 'Me genera ansiedad pero lo intento', type: 'C' },
      { text: 'Busco evitarlo o pasarlo a otro', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas la incertidumbre en el trabajo?',
    options: [
      { text: 'Bien, es parte del juego', type: 'A' },
      { text: 'Me adapto aunque me incomode', type: 'B' },
      { text: 'Me estresa pero sigo adelante', type: 'C' },
      { text: 'Necesito certeza para funcionar', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Cuando hay reorganización en tu equipo...',
    options: [
      { text: 'Lo veo como oportunidad de conocer gente nueva', type: 'A' },
      { text: 'Me ajusto, es parte del trabajo', type: 'B' },
      { text: 'Me cuesta pero eventualmente me adapto', type: 'C' },
      { text: 'Me afecta mucho, me costará recuperarme', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan dispuesto estás a aprender nuevas habilidades?',
    options: [
      { text: 'Siempre, me encanta aprender', type: 'A' },
      { text: 'Si es útil para mi trabajo, claro', type: 'B' },
      { text: 'Si es necesario, aunque me cueste', type: 'C' },
      { text: 'Prefiero usar lo que ya sé', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Cuando los planes cambian a última hora...',
    options: [
      { text: 'Me adapto sin problema', type: 'A' },
      { text: 'Me molesta pero lo manejo', type: 'B' },
      { text: 'Me estresa bastante', type: 'C' },
      { text: 'Me descontrola completamente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes con el trabajo remoto vs oficina?',
    options: [
      { text: 'Me adapto a lo que sea', type: 'A' },
      { text: 'Tengo preferencia pero me ajusto', type: 'B' },
      { text: 'Cambiar de modalidad me cuesta', type: 'C' },
      { text: 'Solo funciono en un modo específico', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Cuando te dan feedback de mejorar algo...',
    options: [
      { text: 'Lo agradezco y trabajo en ello', type: 'A' },
      { text: 'Lo considero y hago ajustes', type: 'B' },
      { text: 'Me cuesta aceptarlo pero lo intento', type: 'C' },
      { text: 'Me pongo a la defensiva', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo manejas diferentes estilos de liderazgo?',
    options: [
      { text: 'Me adapto a cualquier jefe', type: 'A' },
      { text: 'Ajusto mi forma de trabajar según sea necesario', type: 'B' },
      { text: 'Me cuesta con ciertos estilos', type: 'C' },
      { text: 'Solo funciono con un tipo de jefe', type: 'D' },
    ],
  },
  {
    id: 12,
    text: 'Cuando la industria o mercado cambia...',
    options: [
      { text: 'Me emociona, veo oportunidades', type: 'A' },
      { text: 'Me informo y me actualizo', type: 'B' },
      { text: 'Me preocupa pero sigo', type: 'C' },
      { text: 'Me paraliza el miedo al cambio', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🦎 Camaleón Profesional',
    description: 'Eres altamente adaptable y ves el cambio como oportunidad. Te ajustas rápido a nuevas situaciones, personas y desafíos. Eres un activo valioso en cualquier empresa que enfrente transformaciones.',
    traits: ['Flexible', 'Resiliente', 'Oportunista', 'Versátil'],
    advice: 'Tu adaptabilidad es una superpotencia. Solo asegúrate de mantener tus valores y límites claros mientras te adaptas.',
  },
  B: {
    title: '🌊 Navegante del Cambio',
    description: 'Te adaptas bien al cambio aunque te tomes tu tiempo. Eres práctico y realista, encuentras la manera de ajustarte a nuevas circunstancias manteniendo tu efectividad.',
    traits: ['Pragmático', 'Equilibrado', 'Receptivo', 'Constante'],
    advice: 'Tu balance entre adaptación y estabilidad es ideal. Sigue cultivando esa flexibilidad con estructura.',
  },
  C: {
    title: '⚓ Estable con Esfuerzo',
    description: 'El cambio te cuesta pero logras adaptarte con esfuerzo. Prefieres la estabilidad pero reconoces que el cambio es inevitable. Tu fortaleza está en perseverar.',
    traits: ['Persistente', 'Cauteloso', 'Trabajador', 'Estable'],
    advice: 'Está bien que el cambio te cueste, lo importante es que sigas adelante. Trabaja en técnicas para manejar el estrés del cambio.',
  },
  D: {
    title: '🏔️ Amante de la Estabilidad',
    description: 'Prefieres la estabilidad y certeza. El cambio te genera mucho estrés y resistencia. En un mundo cambiante, esto puede limitarte pero también te hace muy confiable en roles estables.',
    traits: ['Consistente', 'Tradicional', 'Confiable', 'Estructurado'],
    advice: 'Tu preferencia por la estabilidad es válida, pero el cambio es inevitable. Trabaja en desarrollar más flexibilidad poco a poco.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
