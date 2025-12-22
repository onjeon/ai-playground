// Test de Innovación - ¿Qué tan innovador eres en el trabajo?
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas ante "siempre se ha hecho así"?',
    options: [
      { text: 'Lo cuestiono y propongo alternativas', type: 'A' },
      { text: 'Pregunto por qué y evalúo', type: 'B' },
      { text: 'Lo acepto si funciona', type: 'C' },
      { text: 'No lo cuestiono, hay razón', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia propones ideas nuevas?',
    options: [
      { text: 'Constantemente, siempre tengo algo', type: 'A' },
      { text: 'Regularmente, cuando veo oportunidad', type: 'B' },
      { text: 'A veces, cuando me lo piden', type: 'C' },
      { text: 'Casi nunca', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo manejas el riesgo de que una idea falle?',
    options: [
      { text: 'Es parte del proceso, no me frena', type: 'A' },
      { text: 'Lo considero pero no me paraliza', type: 'B' },
      { text: 'Me preocupa y a veces no propongo', type: 'C' },
      { text: 'Prefiero no arriesgar', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo generas nuevas ideas?',
    options: [
      { text: 'De múltiples fuentes: otras industrias, tendencias, etc.', type: 'A' },
      { text: 'Observando problemas y buscando soluciones', type: 'B' },
      { text: 'Cuando surge una necesidad clara', type: 'C' },
      { text: 'No genero ideas activamente', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Experimentas con nuevas formas de hacer las cosas?',
    options: [
      { text: 'Siempre, es mi forma de trabajar', type: 'A' },
      { text: 'A veces, cuando hay oportunidad', type: 'B' },
      { text: 'Raramente, prefiero lo conocido', type: 'C' },
      { text: 'Nunca, no me gusta experimentar', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo reaccionas cuando rechazan tu idea?',
    options: [
      { text: 'Busco otra forma de presentarla o la mejoro', type: 'A' },
      { text: 'Me frustra pero propongo otras', type: 'B' },
      { text: 'Me desanima y dejo de proponer', type: 'C' },
      { text: 'Por eso no propongo ideas', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te mantienes actualizado con tendencias?',
    options: [
      { text: 'Activamente: leo, aprendo, experimento', type: 'A' },
      { text: 'Regularmente, me informo', type: 'B' },
      { text: 'Pasivamente, lo que me llega', type: 'C' },
      { text: 'No me mantengo actualizado', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Implementas tus ideas o solo las propones?',
    options: [
      { text: 'Las propongo y las implemento', type: 'A' },
      { text: 'Las propongo y apoyo la implementación', type: 'B' },
      { text: 'Solo las propongo, otros implementan', type: 'C' },
      { text: 'No las propongo formalmente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Colaboras con otros para innovar?',
    options: [
      { text: 'Sí, la innovación es mejor en equipo', type: 'A' },
      { text: 'A veces, cuando es relevante', type: 'B' },
      { text: 'Prefiero innovar solo', type: 'C' },
      { text: 'No innovo', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Tu ambiente de trabajo fomenta la innovación?',
    options: [
      { text: 'Sí, y aprovecho para innovar', type: 'A' },
      { text: 'Algo, hay espacio', type: 'B' },
      { text: 'Poco, es muy tradicional', type: 'C' },
      { text: 'Nada, y no me interesa', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo evalúas si una idea vale la pena?',
    options: [
      { text: 'Por impacto potencial y factibilidad', type: 'A' },
      { text: 'Por si resuelve un problema real', type: 'B' },
      { text: 'No las evalúo formalmente', type: 'C' },
      { text: 'No genero ideas para evaluar', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué te motiva más en el trabajo?',
    options: [
      { text: 'Crear cosas nuevas y mejorar', type: 'A' },
      { text: 'Resolver problemas efectivamente', type: 'B' },
      { text: 'Cumplir con lo que me piden', type: 'C' },
      { text: 'Mantener la estabilidad', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚀 Innovador Disruptivo',
    description: 'La innovación es parte de tu ADN. Cuestionas, propones y ejecutas ideas constantemente. Eres motor de cambio donde sea que estés.',
    traits: ['Disruptivo', 'Propositivo', 'Arriesgado', 'Visionario'],
    advice: 'Sigue innovando pero asegúrate de también consolidar lo que funciona. La innovación sin ejecución es solo sueño.',
  },
  B: {
    title: '💡 Innovador Práctico',
    description: 'Innovas cuando hay oportunidad y tus ideas son generalmente prácticas y factibles. Balanceas lo nuevo con lo probado.',
    traits: ['Equilibrado', 'Práctico', 'Propositivo', 'Realista'],
    advice: 'Tienes buen balance. Considera arriesgarte un poco más con ideas más ambiciosas.',
  },
  C: {
    title: '⚙️ Operador Estable',
    description: 'Tu fortaleza está en ejecutar más que en innovar. Eso no es malo - los equipos necesitan gente que implemente bien.',
    traits: ['Ejecutor', 'Estable', 'Confiable', 'Operativo'],
    advice: 'Considera practicar más la generación de ideas. La innovación es habilidad que se desarrolla.',
  },
  D: {
    title: '🏛️ Tradicionalista',
    description: 'Prefieres lo conocido y probado. La innovación no es tu fuerte ni tu interés. Esto puede limitar tu adaptabilidad.',
    traits: ['Tradicional', 'Conservador', 'Resistente', 'Estático'],
    advice: 'El mundo cambia rápido. Considera abrirte más al cambio y las nuevas ideas para mantenerte relevante.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
