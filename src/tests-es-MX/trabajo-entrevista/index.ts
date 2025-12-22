// Test de Estilo en Entrevistas - ¿Cómo te desenvuelves en entrevistas?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te preparas para una entrevista de trabajo?',
    options: [
      { text: 'Investigo todo sobre la empresa y preparo respuestas', type: 'A' },
      { text: 'Repaso mi CV y practico respuestas clave', type: 'B' },
      { text: 'Leo algo básico y confío en mi improvisación', type: 'C' },
      { text: 'No me preparo mucho, voy a ver qué pasa', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes minutos antes de la entrevista?',
    options: [
      { text: 'Nervioso pero preparado y enfocado', type: 'A' },
      { text: 'Algo de nervios pero con confianza', type: 'B' },
      { text: 'Bastante nervioso, me sudan las manos', type: 'C' },
      { text: 'Muy ansioso, casi quiero cancelar', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Te preguntan sobre un fracaso en tu carrera...',
    options: [
      { text: 'Cuento la historia enfocándome en lo que aprendí', type: 'A' },
      { text: 'Soy honesto pero minimizo el impacto negativo', type: 'B' },
      { text: 'Me cuesta, no me gusta hablar de fracasos', type: 'C' },
      { text: 'Me bloqueo, no sé qué decir', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo respondes la pregunta "¿cuál es tu debilidad?"',
    options: [
      { text: 'Con una debilidad real pero manejada positivamente', type: 'A' },
      { text: 'Con algo que suene a debilidad pero sea fortaleza', type: 'B' },
      { text: 'Me cuesta, no sé qué responder sin verme mal', type: 'C' },
      { text: 'Digo que no tengo debilidades relevantes', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas cuando no sabes la respuesta?',
    options: [
      { text: 'Soy honesto y explico cómo lo resolvería', type: 'A' },
      { text: 'Intento dar una respuesta relacionada', type: 'B' },
      { text: 'Me pongo nervioso y divago un poco', type: 'C' },
      { text: 'Me quedo callado sin saber qué hacer', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo negocías el salario en una oferta?',
    options: [
      { text: 'Preparado con datos de mercado, negocio con confianza', type: 'A' },
      { text: 'Pido un poco más de lo que ofrecen', type: 'B' },
      { text: 'Acepto lo que me ofrecen sin negociar mucho', type: 'C' },
      { text: 'Me da pena negociar, acepto lo primero', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tanto investigas sobre la empresa antes?',
    options: [
      { text: 'A fondo: historia, cultura, competencia, noticias', type: 'A' },
      { text: 'Lo básico: qué hacen y el puesto', type: 'B' },
      { text: 'Solo leo la descripción del puesto', type: 'C' },
      { text: 'Casi nada, lo pregunto en la entrevista', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo es tu lenguaje corporal en la entrevista?',
    options: [
      { text: 'Contacto visual, postura segura, manos tranquilas', type: 'A' },
      { text: 'Intento parecer relajado y profesional', type: 'B' },
      { text: 'Me muevo mucho, nerviosismo evidente', type: 'C' },
      { text: 'Rígido, evito contacto visual', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Haces preguntas al final de la entrevista?',
    options: [
      { text: 'Sí, preguntas inteligentes que preparé de antemano', type: 'A' },
      { text: 'Algunas preguntas sobre el puesto o equipo', type: 'B' },
      { text: 'Solo pregunto sobre salario y horario', type: 'C' },
      { text: 'No pregunto nada, quiero que termine', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Después de la entrevista...',
    options: [
      { text: 'Envío correo de agradecimiento ese mismo día', type: 'A' },
      { text: 'Espero a que me contacten', type: 'B' },
      { text: 'Me preocupo analizando cada respuesta que di', type: 'C' },
      { text: 'Trato de olvidarme, fue muy estresante', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo hablas de tus logros profesionales?',
    options: [
      { text: 'Con datos y ejemplos concretos de impacto', type: 'A' },
      { text: 'Cuento historias de éxito sin exagerar', type: 'B' },
      { text: 'Me cuesta presumir, soy muy modesto', type: 'C' },
      { text: 'No me siento cómodo hablando de mí', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo manejas una pregunta inesperada o difícil?',
    options: [
      { text: 'Tomo un momento para pensar y respondo estructuradamente', type: 'A' },
      { text: 'Intento dar mi mejor respuesta sobre la marcha', type: 'B' },
      { text: 'Me pongo nervioso y hablo de más', type: 'C' },
      { text: 'Me bloqueo, se me va la mente en blanco', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎯 Entrevistado Profesional',
    description: 'Te preparas a fondo y manejas las entrevistas con confianza y profesionalismo. Sabes venderte sin exagerar y tu preparación se nota. Las entrevistas son una de tus fortalezas.',
    traits: ['Preparado', 'Seguro', 'Estructurado', 'Profesional'],
    advice: 'Vas excelente en entrevistas. Solo asegúrate de no parecer demasiado ensayado - la autenticidad también importa.',
  },
  B: {
    title: '😊 Entrevistado Natural',
    description: 'Te preparas lo suficiente y confías en tu capacidad natural para comunicarte. Logras un balance entre preparación y espontaneidad que genera buena impresión.',
    traits: ['Equilibrado', 'Natural', 'Comunicativo', 'Adaptable'],
    advice: 'Tu naturalidad es una fortaleza. Un poco más de preparación específica podría llevarte al siguiente nivel.',
  },
  C: {
    title: '😰 Entrevistado Nervioso',
    description: 'Las entrevistas te generan mucha ansiedad y te cuesta mostrar tu verdadero potencial. Los nervios te juegan en contra aunque tengas las habilidades.',
    traits: ['Ansioso', 'Subestimado', 'Tímido', 'Inseguro'],
    advice: 'Tienes potencial pero los nervios te limitan. Practica más, haz entrevistas simuladas y trabaja en tu confianza.',
  },
  D: {
    title: '🆘 Entrevistado en Apuros',
    description: 'Las entrevistas son un reto enorme para ti. La falta de preparación y la ansiedad te impiden mostrar lo que vales. Necesitas trabajar en estas habilidades.',
    traits: ['Bloqueado', 'Sin preparar', 'Ansioso', 'Evitador'],
    advice: 'Las entrevistas son una habilidad que se desarrolla. Busca ayuda, practica mucho y prepárate mejor. Puedes mejorar.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
