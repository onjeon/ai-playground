// Test de Comunicación Laboral - ¿Cómo te comunicas en el trabajo?
export const questions = [
  {
    id: 1,
    text: '¿Cómo prefieres comunicarte con tu equipo?',
    options: [
      { text: 'Correos formales y bien estructurados', type: 'A' },
      { text: 'Mensajes directos y al punto', type: 'B' },
      { text: 'Platicando en persona o videollamada', type: 'C' },
      { text: 'Comunicación mínima, solo lo necesario', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'En una junta de trabajo, tú eres el que...',
    options: [
      { text: 'Prepara presentación y lleva agenda', type: 'A' },
      { text: 'Va directo al grano sin rodeos', type: 'B' },
      { text: 'Facilita el diálogo y escucha a todos', type: 'C' },
      { text: 'Prefiere escuchar más que hablar', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Cuando necesitas dar feedback negativo...',
    options: [
      { text: 'Lo documento por escrito para que quede claro', type: 'A' },
      { text: 'Lo digo directamente sin endulzarlo', type: 'B' },
      { text: 'Lo doy en privado con tacto y empatía', type: 'C' },
      { text: 'Me cuesta mucho y prefiero evitarlo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas los malentendidos en el trabajo?',
    options: [
      { text: 'Aclaro por escrito para que quede evidencia', type: 'A' },
      { text: 'Lo confronto directamente para aclarar', type: 'B' },
      { text: 'Busco dialogar para entender las perspectivas', type: 'C' },
      { text: 'Espero que se resuelva solo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo presentas tus ideas en el trabajo?',
    options: [
      { text: 'Con datos, gráficas y argumentos sólidos', type: 'A' },
      { text: 'De forma concisa, yendo al punto clave', type: 'B' },
      { text: 'Contando historias y buscando conexión', type: 'C' },
      { text: 'Me cuesta presentar, prefiero trabajo escrito', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Cuando no entiendes algo que te piden...',
    options: [
      { text: 'Pido que me lo pongan por escrito', type: 'A' },
      { text: 'Pregunto directamente hasta entender', type: 'B' },
      { text: 'Pido una reunión para aclarar dudas', type: 'C' },
      { text: 'Trato de resolverlo solo sin preguntar', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te comunicas con tu jefe?',
    options: [
      { text: 'Profesional, con reportes y actualizaciones', type: 'A' },
      { text: 'Directo, le digo las cosas como son', type: 'B' },
      { text: 'Cercano, tenemos buena comunicación personal', type: 'C' },
      { text: 'Lo mínimo necesario, evito interactuar mucho', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo reaccionas cuando no están de acuerdo contigo?',
    options: [
      { text: 'Presento más datos para respaldar mi punto', type: 'A' },
      { text: 'Defiendo mi posición con argumentos', type: 'B' },
      { text: 'Escucho su punto y busco terreno común', type: 'C' },
      { text: 'Cedo aunque no esté convencido', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas la comunicación con clientes o externos?',
    options: [
      { text: 'Muy formal y profesional siempre', type: 'A' },
      { text: 'Eficiente y orientada a resolver', type: 'B' },
      { text: 'Cálida y buscando crear relación', type: 'C' },
      { text: 'Prefiero que otros se encarguen de eso', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Cuando hay chismes o rumores en la oficina...',
    options: [
      { text: 'Me mantengo al margen y me enfoco en lo formal', type: 'A' },
      { text: 'Si me afectan, los aclaro directamente', type: 'B' },
      { text: 'Trato de entender qué pasa y mediar si puedo', type: 'C' },
      { text: 'Los ignoro completamente', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo pides ayuda cuando la necesitas?',
    options: [
      { text: 'Envío un correo detallando lo que necesito', type: 'A' },
      { text: 'Le pregunto directamente a quien pueda ayudarme', type: 'B' },
      { text: 'Platico la situación y pido consejos', type: 'C' },
      { text: 'Me cuesta pedir ayuda, prefiero resolver solo', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué te dicen de tu comunicación en el trabajo?',
    options: [
      { text: 'Que soy muy profesional y claro', type: 'A' },
      { text: 'Que soy directo, a veces demasiado', type: 'B' },
      { text: 'Que soy accesible y fácil de hablar', type: 'C' },
      { text: 'Que soy callado o reservado', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📝 Comunicador Formal',
    description: 'Tu comunicación es estructurada, profesional y clara. Prefieres que todo quede por escrito y documentado. Eres excelente para ambientes corporativos donde la formalidad es clave.',
    traits: ['Estructurado', 'Profesional', 'Documentador', 'Claro'],
    advice: 'Tu formalidad es una fortaleza, pero a veces la cercanía también es importante. No todo tiene que ser por correo.',
  },
  B: {
    title: '🎯 Comunicador Directo',
    description: 'Vas al grano y no te andas con rodeos. Tu comunicación es eficiente y clara. Funcionas bien en ambientes donde se valora la honestidad y la velocidad.',
    traits: ['Directo', 'Eficiente', 'Honesto', 'Asertivo'],
    advice: 'Tu franqueza es valiosa, pero el tacto también importa. A veces cómo dices las cosas es tan importante como qué dices.',
  },
  C: {
    title: '🤝 Comunicador Empático',
    description: 'Te comunicas buscando conexión y comprensión. Escuchas activamente y te aseguras de que todos se sientan incluidos. Eres excelente para roles que requieren trabajo en equipo.',
    traits: ['Empático', 'Escucha activa', 'Inclusivo', 'Cálido'],
    advice: 'Tu capacidad de conectar es única. Solo asegúrate de también ser claro y directo cuando sea necesario.',
  },
  D: {
    title: '🤫 Comunicador Reservado',
    description: 'Prefieres comunicarte lo mínimo necesario. Te sientes más cómodo trabajando independientemente sin mucha interacción. Esto puede ser una fortaleza para trabajo concentrado.',
    traits: ['Reservado', 'Independiente', 'Observador', 'Selectivo'],
    advice: 'Tu reserva está bien, pero la comunicación es clave en cualquier trabajo. Practica expresarte más, te abrirá más puertas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
