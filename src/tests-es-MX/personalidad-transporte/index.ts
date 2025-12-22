// Personalidad en el Transporte
export const questions = [
  {
    id: 1,
    text: '¿Cuál es tu principal medio de transporte?',
    options: [
      { text: 'Carro propio', type: 'A' },
      { text: 'Metro o metrobús', type: 'B' },
      { text: 'Uber/DiDi/taxi', type: 'C' },
      { text: 'Camión o combi', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te comportas en el transporte público?',
    options: [
      { text: 'Cedo mi lugar a quien lo necesite', type: 'A' },
      { text: 'En mis audífonos, en mi mundo', type: 'B' },
      { text: 'Platico si alguien me habla', type: 'C' },
      { text: 'Evito el transporte público', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces durante el trayecto?',
    options: [
      { text: 'Escucho música o podcasts', type: 'A' },
      { text: 'Reviso mi celular y redes', type: 'B' },
      { text: 'Leo o trabajo en algo', type: 'C' },
      { text: 'Veo por la ventana y pienso', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas las horas pico?',
    options: [
      { text: 'Salgo más temprano para evitarlas', type: 'A' },
      { text: 'Me aguanto, es lo que hay', type: 'B' },
      { text: 'Busco rutas alternativas', type: 'C' },
      { text: 'Me desespero mucho', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué opinas de andar en bicicleta en la ciudad?',
    options: [
      { text: 'Lo hago, es lo mejor', type: 'A' },
      { text: 'Me gustaría pero me da miedo', type: 'B' },
      { text: 'A veces en EcoBici o similar', type: 'C' },
      { text: 'No es para mí', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo calificas a los conductores de Uber/DiDi?',
    options: [
      { text: 'Siempre califico justo y doy propina', type: 'A' },
      { text: 'Califico según el servicio', type: 'B' },
      { text: 'A veces se me olvida calificar', type: 'C' },
      { text: 'No uso esas apps', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué es lo que más te molesta del transporte?',
    options: [
      { text: 'El tráfico interminable', type: 'A' },
      { text: 'La gente grosera o que empuja', type: 'B' },
      { text: 'El calor o el olor', type: 'C' },
      { text: 'Todo, odio transportarme', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Has usado patines o scooter eléctrico?',
    options: [
      { text: 'Sí, seguido, me gusta', type: 'A' },
      { text: 'Lo he probado, está bien', type: 'B' },
      { text: 'Me da miedo o no me interesa', type: 'C' },
      { text: 'Nunca', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Prefieres manejar o que te lleven?',
    options: [
      { text: 'Manejar, me gusta tener control', type: 'A' },
      { text: 'Que me lleven para ir tranquilo', type: 'B' },
      { text: 'Depende del trayecto', type: 'C' },
      { text: 'No tengo carro', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuánto tiempo pasas transportándote al día?',
    options: [
      { text: 'Más de 2 horas, es una pesadilla', type: 'A' },
      { text: '1-2 horas, lo normal', type: 'B' },
      { text: 'Menos de 1 hora, bien ubicado', type: 'C' },
      { text: 'Trabajo desde casa, poco o nada', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚗 El Automovilista Dedicado',
    description: 'Tu carro es tu segunda casa. Prefieres el control de manejar aunque signifique lidiar con el tráfico. Conoces las mejores rutas y atajos de la ciudad.',
    traits: ['Independiente', 'Controlador', 'Práctico', 'Paciente'],
    advice: 'El carro da libertad pero considerar alternativas puede reducir tu estrés y gastos.',
  },
  B: {
    title: '🚇 El Urbano Adaptado',
    description: 'Has dominado el arte del transporte público. Conoces las rutas, los horarios y cómo sobrevivir las horas pico. Eres eficiente y sabes llegar a donde sea.',
    traits: ['Adaptable', 'Eficiente', 'Urbano', 'Práctico'],
    advice: 'Tu conocimiento del transporte público es valioso. Sigue explorando rutas y opciones.',
  },
  C: {
    title: '📱 El Usuario de Apps',
    description: 'Las apps de transporte son tus mejores amigas. Prefieres la comodidad de que te lleven sin el estrés de manejar. Eres moderno en tu forma de movilizarte.',
    traits: ['Moderno', 'Cómodo', 'Digital', 'Práctico'],
    advice: 'Las apps son cómodas pero considera mezclar opciones para optimizar gastos.',
  },
  D: {
    title: '🏠 El Minimalista del Transporte',
    description: 'Has logrado minimizar tus necesidades de transporte. Ya sea trabajando desde casa o viviendo cerca de todo, has optimizado tu vida para no depender del tráfico.',
    traits: ['Optimizado', 'Inteligente', 'Equilibrado', 'Libre'],
    advice: 'Has encontrado la solución ideal. Disfruta el tiempo que otros pasan en el tráfico.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
