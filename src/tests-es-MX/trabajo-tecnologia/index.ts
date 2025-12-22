// Test de Aptitud Tecnológica - ¿Tienes perfil para tech?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes aprendiendo nuevas tecnologías?',
    options: [
      { text: 'Me emociona, siempre estoy aprendiendo algo nuevo', type: 'A' },
      { text: 'Bien, me adapto sin problema', type: 'B' },
      { text: 'Me cuesta un poco pero lo logro', type: 'C' },
      { text: 'Me abruma, prefiero lo que ya conozco', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan lógico y estructurado es tu pensamiento?',
    options: [
      { text: 'Muy lógico, pienso en algoritmos', type: 'A' },
      { text: 'Bastante estructurado', type: 'B' },
      { text: 'A veces, depende del tema', type: 'C' },
      { text: 'Soy más intuitivo que lógico', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo enfrentas un problema técnico que no sabes resolver?',
    options: [
      { text: 'Lo googleo e investigo hasta resolverlo', type: 'A' },
      { text: 'Busco ayuda y trato de aprender', type: 'B' },
      { text: 'Me frustro pero eventualmente lo resuelvo', type: 'C' },
      { text: 'Pido que alguien más lo haga', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan cómodo te sientes trabajando solo por horas?',
    options: [
      { text: 'Muy cómodo, me concentro mejor solo', type: 'A' },
      { text: 'Bien, aunque también valoro el equipo', type: 'B' },
      { text: 'Me cuesta, necesito interacción', type: 'C' },
      { text: 'No puedo, me siento muy aislado', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Has programado o creado algo digital alguna vez?',
    options: [
      { text: 'Sí, programo regularmente', type: 'A' },
      { text: 'He hecho algunos proyectos básicos', type: 'B' },
      { text: 'Un poco, cosas muy sencillas', type: 'C' },
      { text: 'Nunca, no sé nada de eso', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tanto te interesan las innovaciones tecnológicas?',
    options: [
      { text: 'Mucho, sigo todas las novedades', type: 'A' },
      { text: 'Bastante, me mantengo informado', type: 'B' },
      { text: 'Algo, lo que me llega', type: 'C' },
      { text: 'Nada, no me interesa', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas el trabajo con deadline y cambios constantes?',
    options: [
      { text: 'Bien, estoy acostumbrado a la agilidad', type: 'A' },
      { text: 'Me adapto aunque a veces estresa', type: 'B' },
      { text: 'Me cuesta, prefiero estabilidad', type: 'C' },
      { text: 'Mal, los cambios me desestabilizan', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan bueno eres en inglés técnico?',
    options: [
      { text: 'Muy bueno, leo documentación sin problema', type: 'A' },
      { text: 'Bien, entiendo lo esencial', type: 'B' },
      { text: 'Básico, me cuesta la documentación', type: 'C' },
      { text: 'Nulo, necesito todo en español', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes con el aprendizaje autodidacta?',
    options: [
      { text: 'Excelente, aprendo solo constantemente', type: 'A' },
      { text: 'Bien, puedo aprender por mi cuenta', type: 'B' },
      { text: 'Prefiero cursos estructurados', type: 'C' },
      { text: 'Necesito que me enseñen', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué área de tech te atrae más?',
    options: [
      { text: 'Desarrollo, data science, IA...', type: 'A' },
      { text: 'Cualquier rol en empresas tech', type: 'B' },
      { text: 'Soporte o roles no tan técnicos', type: 'C' },
      { text: 'Ninguna, tech no me atrae', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo describes tu relación con las computadoras?',
    options: [
      { text: 'Es mi herramienta favorita, vivo en ella', type: 'A' },
      { text: 'La uso todo el día sin problema', type: 'B' },
      { text: 'La uso lo necesario', type: 'C' },
      { text: 'Prefiero evitarla', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué te motiva más de una carrera en tech?',
    options: [
      { text: 'Resolver problemas complejos e innovar', type: 'A' },
      { text: 'Buenos sueldos y oportunidades', type: 'B' },
      { text: 'Es una opción viable', type: 'C' },
      { text: 'Nada en particular', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💻 Tech Native',
    description: 'Naciste para la tecnología. Tu forma de pensar, aprender y resolver problemas es perfecta para roles técnicos. El mundo tech te espera.',
    traits: ['Lógico', 'Autodidacta', 'Innovador', 'Técnico'],
    advice: 'Tech es tu camino. Elige un área específica (desarrollo, data, cloud, etc.) y especialízate.',
  },
  B: {
    title: '⚡ Tech Ready',
    description: 'Tienes buen potencial para el mundo tech aunque quizás no en los roles más técnicos. Hay muchos roles en empresas tech que empatan con tu perfil.',
    traits: ['Adaptable', 'Capaz', 'Versátil', 'En desarrollo'],
    advice: 'Considera roles como PM, QA, soporte técnico o roles de negocio en empresas tech.',
  },
  C: {
    title: '🤔 Tech Adyacente',
    description: 'El mundo tech puro puede no ser lo tuyo, pero hay muchos roles que conectan otras áreas con tecnología donde podrías encajar.',
    traits: ['Mixto', 'Generalista', 'Diferente enfoque', 'Relacionado'],
    advice: 'Busca roles que combinen tech con tus fortalezas: ventas tech, marketing digital, diseño, etc.',
  },
  D: {
    title: '🌿 Otro Camino',
    description: 'El mundo tech no parece ser tu ambiente. Hay muchas otras industrias y carreras donde tus habilidades serían más valoradas.',
    traits: ['No técnico', 'Diferente', 'Otro enfoque', 'Alternativo'],
    advice: 'No te fuerces a tech si no es lo tuyo. Explora otras industrias que empaten con tus intereses.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
