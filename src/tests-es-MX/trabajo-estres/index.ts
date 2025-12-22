// Test de Manejo del Estrés Laboral - ¿Cómo lidias con la presión?
export const questions = [
  {
    id: 1,
    text: 'Tienes tres entregas urgentes para mañana. ¿Qué haces?',
    options: [
      { text: 'Priorizo y me organizo para sacar todo', type: 'A' },
      { text: 'Me estreso pero lo saco adelante', type: 'B' },
      { text: 'Pido ayuda o negocio las fechas', type: 'C' },
      { text: 'Me paralizo y no sé por dónde empezar', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'Tu jefe te critica frente a todos en una junta...',
    options: [
      { text: 'Lo proceso después, en el momento me controlo', type: 'A' },
      { text: 'Me afecta pero trato de no mostrarlo', type: 'B' },
      { text: 'Hablo con él después para aclarar', type: 'C' },
      { text: 'Me arruina el día y no puedo concentrarme', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo duermes cuando tienes mucha chamba?',
    options: [
      { text: 'Normal, separo el trabajo de mi descanso', type: 'A' },
      { text: 'Me cuesta un poco pero logro dormir', type: 'B' },
      { text: 'Duermo menos pero compenso después', type: 'C' },
      { text: 'Muy mal, me desvelo pensando en el trabajo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Cuando cometes un error importante en el trabajo...',
    options: [
      { text: 'Lo corrijo y aprendo de ello', type: 'A' },
      { text: 'Me siento mal pero sigo adelante', type: 'B' },
      { text: 'Me preocupo pero busco soluciones', type: 'C' },
      { text: 'Me castigo mentalmente por mucho tiempo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué haces para desestresarte del trabajo?',
    options: [
      { text: 'Tengo actividades y hobbies que me relajan', type: 'A' },
      { text: 'Intento desconectarme aunque a veces no puedo', type: 'B' },
      { text: 'Hablo con amigos o familia sobre lo que me pasa', type: 'C' },
      { text: 'Honestamente, no logro desconectarme', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Los domingos en la noche, pensando en el lunes...',
    options: [
      { text: 'Tranquilo, ya veré qué trae la semana', type: 'A' },
      { text: 'Un poco de nervios pero nada grave', type: 'B' },
      { text: 'Algo de ansiedad dependiendo de la semana', type: 'C' },
      { text: 'Depresión dominguera total, no quiero que llegue', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo reaccionas ante cambios inesperados en el trabajo?',
    options: [
      { text: 'Me adapto rápido y busco lo positivo', type: 'A' },
      { text: 'Me cuesta pero eventualmente lo acepto', type: 'B' },
      { text: 'Me estresa pero trato de manejarlo', type: 'C' },
      { text: 'Me desestabiliza completamente', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Con qué frecuencia piensas en el trabajo fuera de horario?',
    options: [
      { text: 'Casi nunca, respeto mi tiempo personal', type: 'A' },
      { text: 'A veces, cuando hay algo importante', type: 'B' },
      { text: 'Seguido, me cuesta desconectar', type: 'C' },
      { text: 'Todo el tiempo, siempre está en mi mente', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Cuando tienes conflictos con un compañero...',
    options: [
      { text: 'Lo hablo directamente y lo resuelvo', type: 'A' },
      { text: 'Me incomoda pero trato de manejarlo', type: 'B' },
      { text: 'Busco mediación o evito confrontación directa', type: 'C' },
      { text: 'Me afecta mucho y pienso en ello constantemente', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Has tenido síntomas físicos por estrés laboral?',
    options: [
      { text: 'Raramente, me cuido bien', type: 'A' },
      { text: 'A veces, dolor de cabeza o tensión', type: 'B' },
      { text: 'Seguido, me somatizo el estrés', type: 'C' },
      { text: 'Frecuentemente, mi cuerpo lo resiente mucho', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo manejas las expectativas de tu jefe?',
    options: [
      { text: 'Las comunico y negocio lo realista', type: 'A' },
      { text: 'Trato de cumplirlas aunque me cueste', type: 'B' },
      { text: 'Me estreso por cumplir todo', type: 'C' },
      { text: 'Siento que nunca son alcanzables', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué tan satisfecho estás con tu trabajo actualmente?',
    options: [
      { text: 'Bastante satisfecho, me gusta lo que hago', type: 'A' },
      { text: 'Tiene sus pros y contras pero está bien', type: 'B' },
      { text: 'Regular, a veces me cuestiono si es lo mío', type: 'C' },
      { text: 'Insatisfecho, me genera mucha angustia', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🧘 Maestro del Estrés',
    description: 'Tienes herramientas efectivas para manejar la presión laboral. Separas lo personal de lo profesional y sabes que tu salud viene primero. El trabajo no define tu valor ni tu paz mental.',
    traits: ['Equilibrado', 'Resiliente', 'Organizado', 'Emocionalmente estable'],
    advice: 'Vas muy bien, pero sigue cuidándote. Comparte tus técnicas con compañeros que lo necesiten.',
  },
  B: {
    title: '⚖️ Estrés Manejable',
    description: 'El trabajo te estresa pero lo manejas relativamente bien. Tienes momentos difíciles pero logras salir adelante. Estás en un punto donde podrías mejorar tus técnicas de manejo.',
    traits: ['Adaptable', 'Esforzado', 'Consciente', 'En desarrollo'],
    advice: 'Estás bien pero podrías estar mejor. Busca nuevas herramientas de manejo del estrés antes de que la carga aumente.',
  },
  C: {
    title: '⚠️ Estrés en Aumento',
    description: 'El estrés laboral está afectando tu calidad de vida. Te cuesta desconectarte y tu cuerpo empieza a resentirlo. Es momento de hacer cambios antes de que llegue el burnout.',
    traits: ['Sobrecargado', 'Ansioso', 'Preocupado', 'Necesita apoyo'],
    advice: 'Atención: estás en la zona de peligro. Habla con tu jefe sobre la carga de trabajo o busca apoyo profesional.',
  },
  D: {
    title: '🆘 Alerta de Burnout',
    description: 'El estrés laboral está seriamente afectando tu bienestar. Tu cuerpo y mente están dando señales de alarma. Necesitas tomar acción urgente para proteger tu salud.',
    traits: ['Agotado', 'Abrumado', 'Necesita ayuda', 'En riesgo'],
    advice: 'Esto es serio. Considera buscar ayuda profesional, hablar con recursos humanos, o evaluar un cambio. Tu salud es lo primero.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
