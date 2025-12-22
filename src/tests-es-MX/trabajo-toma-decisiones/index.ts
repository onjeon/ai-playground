// Test de Toma de Decisiones - ¿Cómo tomas decisiones en el trabajo?
export const questions = [
  {
    id: 1,
    text: '¿Cómo tomas decisiones importantes?',
    options: [
      { text: 'Analizo datos y evidencia antes de decidir', type: 'A' },
      { text: 'Confío en mi intuición y experiencia', type: 'B' },
      { text: 'Consulto con otros antes de decidir', type: 'C' },
      { text: 'Me cuesta decidir, lo pospongo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan rápido tomas decisiones?',
    options: [
      { text: 'Rápido, sin parálisis de análisis', type: 'A' },
      { text: 'Equilibrado, ni muy rápido ni lento', type: 'B' },
      { text: 'Lento, necesito mucho tiempo', type: 'C' },
      { text: 'Muy lento, a veces no decido', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Cuando una decisión sale mal...',
    options: [
      { text: 'Aprendo y corrijo rápidamente', type: 'A' },
      { text: 'Me frustra pero sigo adelante', type: 'B' },
      { text: 'Me afecta y tardo en recuperarme', type: 'C' },
      { text: 'Me paraliza para futuras decisiones', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas decisiones bajo presión?',
    options: [
      { text: 'Bien, me enfoco y decido', type: 'A' },
      { text: 'Algo estresado pero funciono', type: 'B' },
      { text: 'Me cuesta, necesito tiempo', type: 'C' },
      { text: 'Me paralizo bajo presión', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Involucras a otros en tus decisiones?',
    options: [
      { text: 'Cuando es necesario, pero decido yo', type: 'A' },
      { text: 'Busco input pero tomo la decisión final', type: 'B' },
      { text: 'Dependo mucho de la opinión de otros', type: 'C' },
      { text: 'Dejo que otros decidan', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas la incertidumbre al decidir?',
    options: [
      { text: 'La acepto, es parte de decidir', type: 'A' },
      { text: 'Me incomoda pero decido', type: 'B' },
      { text: 'Me paraliza, necesito certeza', type: 'C' },
      { text: 'Evito decidir cuando hay incertidumbre', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cambias de opinión después de decidir?',
    options: [
      { text: 'Raramente, me comprometo con mis decisiones', type: 'A' },
      { text: 'A veces, si hay nueva información', type: 'B' },
      { text: 'Seguido, dudo de mis decisiones', type: 'C' },
      { text: 'Constantemente, no confío en mí', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué pesa más en tus decisiones?',
    options: [
      { text: 'Datos, hechos y lógica', type: 'A' },
      { text: 'Intuición y experiencia', type: 'B' },
      { text: 'Lo que otros piensan', type: 'C' },
      { text: 'Evitar riesgos y problemas', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo decides cuando hay información incompleta?',
    options: [
      { text: 'Decido con lo que tengo', type: 'A' },
      { text: 'Busco más info pero no indefinidamente', type: 'B' },
      { text: 'Espero hasta tener más datos', type: 'C' },
      { text: 'No puedo decidir sin toda la info', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo te sientes después de tomar una decisión difícil?',
    options: [
      { text: 'Aliviado y listo para seguir', type: 'A' },
      { text: 'Bien, aunque algo de ansiedad', type: 'B' },
      { text: 'Preocupado si fue la correcta', type: 'C' },
      { text: 'Angustiado, pensando si me equivoqué', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Consideras múltiples opciones antes de decidir?',
    options: [
      { text: 'Sí, evalúo alternativas y elijo', type: 'A' },
      { text: 'Algunas, las principales', type: 'B' },
      { text: 'Pocas, la primera que parece buena', type: 'C' },
      { text: 'No, me quedo con lo que viene', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo describirían tu toma de decisiones?',
    options: [
      { text: 'Decidido y seguro', type: 'A' },
      { text: 'Balanceado y razonable', type: 'B' },
      { text: 'Dudoso, necesita validación', type: 'C' },
      { text: 'Indeciso, evita decidir', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '⚡ Decisor Ejecutivo',
    description: 'Decides con confianza y velocidad. No te paralizas por el análisis y asumes las consecuencias de tus decisiones. Eres material de líder.',
    traits: ['Decisivo', 'Confiado', 'Rápido', 'Asertivo'],
    advice: 'Tu confianza es fortaleza. Solo asegúrate de no decidir tan rápido que ignores información importante.',
  },
  B: {
    title: '⚖️ Decisor Equilibrado',
    description: 'Balanceas bien la reflexión con la acción. No decides impulsivamente ni te paralizas. Tus decisiones son generalmente sólidas.',
    traits: ['Balanceado', 'Reflexivo', 'Razonable', 'Maduro'],
    advice: 'Tienes buen balance. Sigue confiando en tu proceso pero mantente alerta a mejorar.',
  },
  C: {
    title: '🤔 Decisor Dudoso',
    description: 'Te cuesta decidir y buscas mucha validación externa. La incertidumbre te paraliza y dudas de tus propias decisiones.',
    traits: ['Indeciso', 'Inseguro', 'Dependiente', 'Lento'],
    advice: 'Trabaja en confiar más en ti. Practica tomando decisiones pequeñas rápidamente para ganar confianza.',
  },
  D: {
    title: '🆘 Parálisis Decisional',
    description: 'Evitas decidir y cuando lo haces te angustias. La indecisión puede estar afectando tu carrera y bienestar.',
    traits: ['Paralizado', 'Ansioso', 'Evitador', 'Dependiente'],
    advice: 'La indecisión tiene costo. Considera coaching o terapia para trabajar en tu confianza y capacidad de decidir.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
