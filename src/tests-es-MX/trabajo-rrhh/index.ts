// Test de Aptitud en Recursos Humanos - ¿Tienes perfil para RH?
export const questions = [
  {
    id: 1,
    text: '¿Qué tanto te gusta trabajar con personas?',
    options: [
      { text: 'Me encanta, es lo que más disfruto', type: 'A' },
      { text: 'Mucho, me gusta la interacción', type: 'B' },
      { text: 'Normal, ni más ni menos', type: 'C' },
      { text: 'Prefiero trabajo independiente', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan empático te consideras?',
    options: [
      { text: 'Muy empático, entiendo a las personas fácilmente', type: 'A' },
      { text: 'Bastante empático', type: 'B' },
      { text: 'Regular, a veces me cuesta', type: 'C' },
      { text: 'Poco, soy más racional', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo te sientes mediando conflictos?',
    options: [
      { text: 'Cómodo, se me da bien encontrar soluciones', type: 'A' },
      { text: 'Bien, puedo hacerlo si es necesario', type: 'B' },
      { text: 'Me incomoda pero lo hago', type: 'C' },
      { text: 'Lo evito, no me gusta el conflicto', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan discreto eres con información confidencial?',
    options: [
      { text: 'Totalmente discreto, es mi fuerte', type: 'A' },
      { text: 'Muy discreto, guardo la información', type: 'B' },
      { text: 'Discreto, aunque a veces hablo de más', type: 'C' },
      { text: 'Me cuesta guardar secretos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Te interesa el desarrollo y bienestar de otros?',
    options: [
      { text: 'Mucho, me motiva ayudar a otros a crecer', type: 'A' },
      { text: 'Sí, me gusta apoyar', type: 'B' },
      { text: 'Algo, no es mi prioridad', type: 'C' },
      { text: 'No mucho, prefiero enfocarme en mí', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo te sientes dando feedback difícil?',
    options: [
      { text: 'Puedo hacerlo con tacto y profesionalismo', type: 'A' },
      { text: 'Lo hago aunque me cuesta un poco', type: 'B' },
      { text: 'Me incomoda mucho', type: 'C' },
      { text: 'Lo evito a toda costa', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tan organizado eres con documentos y procesos?',
    options: [
      { text: 'Muy organizado, todo en su lugar', type: 'A' },
      { text: 'Bastante organizado', type: 'B' },
      { text: 'Regular, a veces se me desordena', type: 'C' },
      { text: 'Desorganizado', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Te interesan las leyes laborales y normativas?',
    options: [
      { text: 'Sí, me parece importante conocerlas', type: 'A' },
      { text: 'Algo, lo necesario', type: 'B' },
      { text: 'Poco, es aburrido', type: 'C' },
      { text: 'Nada', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas situaciones emocionalmente cargadas?',
    options: [
      { text: 'Con calma y profesionalismo', type: 'A' },
      { text: 'Bien, mantengo la compostura', type: 'B' },
      { text: 'Me afectan pero lo manejo', type: 'C' },
      { text: 'Me desestabilizan', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan bueno eres entrevistando y evaluando personas?',
    options: [
      { text: 'Muy bueno, leo bien a las personas', type: 'A' },
      { text: 'Bien, puedo hacerlo', type: 'B' },
      { text: 'Regular, me cuesta evaluar', type: 'C' },
      { text: 'Mal, no sé cómo hacerlo', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Te interesa la cultura organizacional y el clima laboral?',
    options: [
      { text: 'Mucho, creo que es fundamental', type: 'A' },
      { text: 'Sí, es importante', type: 'B' },
      { text: 'Algo', type: 'C' },
      { text: 'No me fijo en eso', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué te atrae de una carrera en Recursos Humanos?',
    options: [
      { text: 'Impactar positivamente en las personas', type: 'A' },
      { text: 'Es un área con buenas oportunidades', type: 'B' },
      { text: 'Solo lo consideraría como opción', type: 'C' },
      { text: 'Nada en particular', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🤝 RH Nato',
    description: 'Tienes el perfil perfecto para Recursos Humanos: empático, discreto, organizado y genuinamente interesado en el bienestar de las personas.',
    traits: ['Empático', 'Discreto', 'Mediador', 'Organizador'],
    advice: 'RH es tu vocación. Especialízate en el área que más te apasione: reclutamiento, desarrollo, compensaciones, etc.',
  },
  B: {
    title: '💼 Apto para RH',
    description: 'Tienes buenas habilidades para RH aunque algunas áreas podrían desarrollarse. Con experiencia serías muy competente en este campo.',
    traits: ['Social', 'Organizado', 'En desarrollo', 'Capaz'],
    advice: 'RH es buena opción. Trabaja en fortalecer tu inteligencia emocional y conocimiento de normativas.',
  },
  C: {
    title: '🤔 RH Parcial',
    description: 'Tienes algunas habilidades pero RH no parece ser tu vocación principal. Podrías trabajar en roles relacionados pero no puramente de RH.',
    traits: ['Mixto', 'Versátil', 'Generalista', 'Otro enfoque'],
    advice: 'Considera roles que combinen RH con otras áreas como capacitación, comunicación o administración.',
  },
  D: {
    title: '🚫 RH No es Para Ti',
    description: 'Tus habilidades e intereses no empatan con el mundo de Recursos Humanos. Hay otras carreras donde brillarías más.',
    traits: ['Técnico', 'Independiente', 'Diferente perfil', 'Otro camino'],
    advice: 'Explora otras áreas que empaten mejor con tu perfil y preferencias de trabajo.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
