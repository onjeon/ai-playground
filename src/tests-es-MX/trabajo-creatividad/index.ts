// Test de Creatividad Laboral - ¿Qué tan creativo eres en el trabajo?
export const questions = [
  {
    id: 1,
    text: '¿Cómo enfrentas un problema que nadie ha resuelto antes?',
    options: [
      { text: 'Me emociona, es oportunidad de innovar', type: 'A' },
      { text: 'Investigo soluciones similares y las adapto', type: 'B' },
      { text: 'Sigo métodos probados con pequeños ajustes', type: 'C' },
      { text: 'Prefiero problemas con soluciones conocidas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'En una lluvia de ideas, tú eres el que...',
    options: [
      { text: 'Lanza las ideas más locas y originales', type: 'A' },
      { text: 'Propone ideas basadas en lo que ha funcionado', type: 'B' },
      { text: 'Evalúa y mejora las ideas de otros', type: 'C' },
      { text: 'Escucha más de lo que aporta', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas cuando tu jefe dice "siempre se ha hecho así"?',
    options: [
      { text: 'Es mi señal para proponer algo diferente', type: 'A' },
      { text: 'Cuestiono si hay una mejor manera', type: 'B' },
      { text: 'Entiendo la razón y sigo el proceso', type: 'C' },
      { text: 'Lo acepto, si funciona ¿para qué cambiarlo?', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿De dónde sacas inspiración para tu trabajo?',
    options: [
      { text: 'De todo: arte, naturaleza, otras industrias', type: 'A' },
      { text: 'De tendencias y competidores del mercado', type: 'B' },
      { text: 'De lo que ha funcionado internamente', type: 'C' },
      { text: 'No busco inspiración activamente', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan seguido propones nuevas ideas en el trabajo?',
    options: [
      { text: 'Constantemente, siempre tengo algo nuevo', type: 'A' },
      { text: 'Regularmente, cuando veo oportunidad', type: 'B' },
      { text: 'A veces, cuando me lo piden', type: 'C' },
      { text: 'Casi nunca, no es lo mío', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes con las reglas y procesos establecidos?',
    options: [
      { text: 'Las veo como obstáculos a superar creativamente', type: 'A' },
      { text: 'Las respeto pero busco mejorarlas', type: 'B' },
      { text: 'Las sigo, dan estructura necesaria', type: 'C' },
      { text: 'Me gustan, me dan seguridad', type: 'D' },
    ],
  },
  {
    id: 7,
    text: 'Tu proyecto no está funcionando como esperabas...',
    options: [
      { text: 'Perfecto, oportunidad de reinventar el enfoque', type: 'A' },
      { text: 'Busco qué ajustar para que funcione', type: 'B' },
      { text: 'Analizo qué salió mal y corrijo', type: 'C' },
      { text: 'Me frustro y dudo si continuar', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tanto te gusta experimentar con cosas nuevas?',
    options: [
      { text: 'Me encanta, siempre estoy probando algo', type: 'A' },
      { text: 'Me gusta, con cierta cautela', type: 'B' },
      { text: 'A veces, cuando hay poco riesgo', type: 'C' },
      { text: 'Prefiero lo conocido y seguro', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo describes tu forma de pensar?',
    options: [
      { text: 'Divergente, conecto ideas que parecen no relacionarse', type: 'A' },
      { text: 'Analítica con toques creativos', type: 'B' },
      { text: 'Lógica y estructurada principalmente', type: 'C' },
      { text: 'Práctica, enfocada en lo que funciona', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué haces cuando tienes un bloqueo creativo?',
    options: [
      { text: 'Cambio de ambiente, hago algo diferente', type: 'A' },
      { text: 'Busco referencias e inspiración externa', type: 'B' },
      { text: 'Tomo un descanso y vuelvo después', type: 'C' },
      { text: 'Me fuerzo a seguir hasta que salga algo', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo reaccionan otros a tus ideas?',
    options: [
      { text: 'Les parecen locas pero terminan funcionando', type: 'A' },
      { text: 'Las ven como buenas y factibles', type: 'B' },
      { text: 'Las consideran prácticas y sensatas', type: 'C' },
      { text: 'No propongo muchas ideas', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué ambiente de trabajo prefieres?',
    options: [
      { text: 'Caótico pero estimulante creativamente', type: 'A' },
      { text: 'Flexible con espacio para innovar', type: 'B' },
      { text: 'Organizado con procesos claros', type: 'C' },
      { text: 'Estable y predecible', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚀 Creativo Disruptivo',
    description: 'Tu mente no conoce límites. Constantemente estás pensando en formas nuevas de hacer las cosas y no te conformas con el status quo. Las ideas más innovadoras vienen de personas como tú.',
    traits: ['Innovador', 'Arriesgado', 'Visionario', 'Original'],
    advice: 'Tu creatividad es un superpoder, pero aprende a aterrizar tus ideas para que puedan implementarse.',
  },
  B: {
    title: '💡 Creativo Estratégico',
    description: 'Combinas creatividad con pragmatismo. Tus ideas son innovadoras pero factibles. Sabes cuándo innovar y cuándo usar lo que ya funciona.',
    traits: ['Equilibrado', 'Adaptativo', 'Propositivo', 'Práctico'],
    advice: 'Tienes el balance ideal. Sigue cultivando tu creatividad sin perder tu sentido práctico.',
  },
  C: {
    title: '⚙️ Creativo Incremental',
    description: 'Tu creatividad se expresa en mejoras graduales. No reinventas la rueda pero la haces girar mejor. Tu enfoque reduce riesgos mientras aporta valor.',
    traits: ['Metódico', 'Optimizador', 'Cauteloso', 'Eficiente'],
    advice: 'Tu enfoque es válido, pero a veces los grandes cambios requieren saltos creativos. Atrévete a proponer algo radicalmente diferente.',
  },
  D: {
    title: '📋 Ejecutor Confiable',
    description: 'Tu fortaleza está en ejecutar más que en crear. Eso no es malo - los equipos necesitan gente que implemente las ideas de forma excelente.',
    traits: ['Confiable', 'Consistente', 'Práctico', 'Estable'],
    advice: 'No todos tienen que ser creativos, pero practicar ver las cosas de forma diferente puede abrirte nuevas oportunidades.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
