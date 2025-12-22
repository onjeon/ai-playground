// Test de Inteligencia Emocional (EQ)
export const questions = [
  {
    id: 1,
    text: 'Tu compañero de trabajo está muy callado hoy. ¿Cuál es la mejor respuesta?',
    options: [
      { text: 'Ignorarlo, no es tu asunto', type: 'wrong' },
      { text: 'Preguntarle discretamente si está bien y si necesita algo', type: 'correct' },
      { text: 'Decirle que sonría más', type: 'wrong' },
      { text: 'Quejarte con otros de su actitud', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Recibes una crítica en el trabajo que consideras injusta. ¿Qué haces?',
    options: [
      { text: 'Te enojas y respondes agresivamente', type: 'wrong' },
      { text: 'Escuchas, respiras y luego pides ejemplos específicos para entender mejor', type: 'correct' },
      { text: 'Te quedas callado pero guardas rencor', type: 'wrong' },
      { text: 'Ignoras la crítica completamente', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'Un amigo cancela planes importantes a última hora. ¿Cómo reaccionas?',
    options: [
      { text: 'Le dejas de hablar', type: 'wrong' },
      { text: 'Expresas tu decepción calmadamente y preguntas si todo está bien', type: 'correct' },
      { text: 'Finges que no importa aunque sí te molesta', type: 'wrong' },
      { text: 'Le haces lo mismo la próxima vez', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: '¿Cuál es la mejor forma de motivar a alguien que está desmotivado?',
    options: [
      { text: 'Decirle que deje de quejarse', type: 'wrong' },
      { text: 'Escuchar sus preocupaciones, validar sus sentimientos y ayudarle a encontrar pequeños pasos', type: 'correct' },
      { text: 'Ignorar el problema', type: 'wrong' },
      { text: 'Compararle con otros que están peor', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: 'Estás muy estresado. ¿Cuál es la estrategia más saludable?',
    options: [
      { text: 'Desquitarte con quien se te ponga enfrente', type: 'wrong' },
      { text: 'Identificar la causa, tomar un descanso y buscar apoyo si es necesario', type: 'correct' },
      { text: 'Guardarte todo', type: 'wrong' },
      { text: 'Comer o beber en exceso', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Alguien te cuenta un problema. ¿Qué es lo primero que debes hacer?',
    options: [
      { text: 'Dar soluciones inmediatamente', type: 'wrong' },
      { text: 'Escuchar activamente y mostrar que entiendes cómo se siente', type: 'correct' },
      { text: 'Contar un problema tuyo similar', type: 'wrong' },
      { text: 'Minimizar su problema', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: 'Tu jefe te felicita frente a todos pero un colega pone cara de envidia. ¿Qué haces?',
    options: [
      { text: 'Presumir más para molestarle', type: 'wrong' },
      { text: 'Después, reconocer el trabajo del equipo y buscar un momento para hablar positivamente con el colega', type: 'correct' },
      { text: 'Ignorarlo, es su problema', type: 'wrong' },
      { text: 'Quejarte de su actitud', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo manejas mejor un conflicto con tu pareja?',
    options: [
      { text: 'Gritar para que te escuche', type: 'wrong' },
      { text: 'Expresar cómo te sientes sin culpar, escuchar su perspectiva y buscar soluciones juntos', type: 'correct' },
      { text: 'Darle el tratamiento del silencio', type: 'wrong' },
      { text: 'Ceder siempre para evitar problemas', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: 'Notas que un compañero nuevo está aislado. ¿Qué haces?',
    options: [
      { text: 'Nada, ya se integrará solo', type: 'wrong' },
      { text: 'Te acercas, le invitas al grupo y le ayudas a conocer a otros', type: 'correct' },
      { text: 'Esperas a que él hable primero', type: 'wrong' },
      { text: 'Comentas con otros que es muy tímido', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Te sientes ansioso antes de una presentación importante. ¿Cuál es la mejor estrategia?',
    options: [
      { text: 'Convencerte de que no estás nervioso', type: 'wrong' },
      { text: 'Reconocer la ansiedad, respirar profundo y canalizar esa energía como entusiasmo', type: 'correct' },
      { text: 'Evitar la presentación', type: 'wrong' },
      { text: 'Tomar algo para calmarte', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'Un familiar te dice algo hiriente. ¿Cómo respondes?',
    options: [
      { text: 'Le respondes igual de hiriente', type: 'wrong' },
      { text: 'Expresas que su comentario te lastimó y pides que no lo repita', type: 'correct' },
      { text: 'Te guardas el coraje y no dices nada', type: 'wrong' },
      { text: 'Le dejas de hablar indefinidamente', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: '¿Qué indica mayor inteligencia emocional?',
    options: [
      { text: 'Nunca mostrar emociones', type: 'wrong' },
      { text: 'Reconocer tus emociones, expresarlas adecuadamente y manejarlas constructivamente', type: 'correct' },
      { text: 'Siempre estar feliz', type: 'wrong' },
      { text: 'Dejarte llevar por las emociones', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: 'Tu equipo fracasó en un proyecto. Como líder, ¿qué dices?',
    options: [
      { text: 'Buscar culpables y señalarlos', type: 'wrong' },
      { text: 'Asumir responsabilidad, analizar qué salió mal juntos y enfocarse en mejorar', type: 'correct' },
      { text: 'Culpar a factores externos', type: 'wrong' },
      { text: 'No decir nada y seguir adelante', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'Alguien te interrumpe constantemente en una junta. ¿Qué haces?',
    options: [
      { text: 'Gritar que te deje hablar', type: 'wrong' },
      { text: 'Decir con calma: "Me gustaría terminar mi punto" y continuar', type: 'correct' },
      { text: 'Quedarte callado el resto de la junta', type: 'wrong' },
      { text: 'Interrumpirle igual después', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: '¿Cuál es la clave para construir relaciones duraderas?',
    options: [
      { text: 'Siempre tener la razón', type: 'wrong' },
      { text: 'Empatía, comunicación honesta, respeto mutuo y apoyo constante', type: 'correct' },
      { text: 'Evitar todo conflicto', type: 'wrong' },
      { text: 'Dar siempre la razón al otro', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '💖 Maestro Emocional',
    minScore: 12,
    description: '¡Excepcional! Tu inteligencia emocional es sobresaliente. Comprendes y manejas emociones propias y ajenas con maestría.',
    traits: ['Empático', 'Asertivo', 'Consciente', 'Equilibrado'],
    advice: 'Tu EQ es un don valioso. Considera roles de liderazgo, coaching, recursos humanos o psicología.',
  },
  medium: {
    title: '🤝 Conectado Emocionalmente',
    minScore: 8,
    description: '¡Muy bien! Tienes buena inteligencia emocional. Manejas la mayoría de situaciones sociales adecuadamente.',
    traits: ['Sensible', 'Comprensivo', 'Social', 'Adaptable'],
    advice: 'Sigue desarrollando tu autoconciencia y empatía. La práctica consciente mejorará aún más tu EQ.',
  },
  low: {
    title: '🌱 EQ en Desarrollo',
    minScore: 0,
    description: 'Tu inteligencia emocional puede crecer significativamente con práctica y reflexión consciente.',
    traits: ['Racional', 'Directo', 'Práctico', 'Reservado'],
    advice: 'Practica la escucha activa, reflexiona sobre tus emociones y busca entender perspectivas diferentes.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  let score = 0;
  Object.values(answers).forEach(answer => {
    if (answer === 'correct') score++;
  });
  if (score >= 12) return 'high';
  if (score >= 8) return 'medium';
  return 'low';
}
