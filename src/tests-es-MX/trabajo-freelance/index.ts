// Test de Aptitud Freelance - ¿Eres material de freelancer?
export const questions = [
  {
    id: 1,
    text: '¿Qué tan bueno eres manejando tu propio tiempo?',
    options: [
      { text: 'Excelente, soy muy disciplinado', type: 'A' },
      { text: 'Bien, me organizo aunque a veces flaqueo', type: 'B' },
      { text: 'Regular, necesito algo de estructura externa', type: 'C' },
      { text: 'Mal, sin jefe no trabajo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te sientes trabajando solo desde casa?',
    options: [
      { text: 'Me encanta, soy más productivo así', type: 'A' },
      { text: 'Bien, aunque extraño algo de compañía', type: 'B' },
      { text: 'Me cuesta, necesito interacción social', type: 'C' },
      { text: 'Fatal, me siento muy aislado', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué tan cómodo te sientes buscando clientes?',
    options: [
      { text: 'Es parte del trabajo, me gusta', type: 'A' },
      { text: 'Puedo hacerlo aunque no es mi favorito', type: 'B' },
      { text: 'Me incomoda pero lo haría si es necesario', type: 'C' },
      { text: 'Lo detesto, prefiero que me busquen', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas un mes sin ingresos?',
    options: [
      { text: 'Tengo ahorros y sé que es temporal', type: 'A' },
      { text: 'Me estresa pero lo manejo', type: 'B' },
      { text: 'Me preocuparía mucho', type: 'C' },
      { text: 'No lo toleraría, necesito ingreso fijo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué tan bueno eres poniendo límites con clientes?',
    options: [
      { text: 'Muy bueno, mis términos son claros', type: 'A' },
      { text: 'Bien, aunque a veces cedo más de lo debido', type: 'B' },
      { text: 'Me cuesta, tiendo a decir sí a todo', type: 'C' },
      { text: 'Pésimo, los clientes se aprovechan', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas varios proyectos a la vez?',
    options: [
      { text: 'Muy bien, tengo sistema para todo', type: 'A' },
      { text: 'Bien, aunque a veces me saturo', type: 'B' },
      { text: 'Me cuesta, prefiero uno a la vez', type: 'C' },
      { text: 'Mal, me abrumo fácilmente', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué tanto te importan las prestaciones laborales?',
    options: [
      { text: 'Las consigo por mi cuenta, no las necesito', type: 'A' },
      { text: 'Son importantes pero no indispensables', type: 'B' },
      { text: 'Las valoro mucho', type: 'C' },
      { text: 'Son esenciales, no trabajaría sin ellas', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan bueno eres cobrando lo que vales?',
    options: [
      { text: 'Cobro bien y sin pena', type: 'A' },
      { text: 'Más o menos, a veces me da cosa', type: 'B' },
      { text: 'Me cuesta, tiendo a cobrar bajo', type: 'C' },
      { text: 'Pésimo, no sé cobrar', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo te sientes con la autopromoción?',
    options: [
      { text: 'Cómodo, es parte del negocio', type: 'A' },
      { text: 'Lo hago aunque me siento raro', type: 'B' },
      { text: 'Me incomoda mucho', type: 'C' },
      { text: 'No lo haría, se siente presumido', type: 'D' },
    ],
  },
  {
    id: 10,
    text: 'Un cliente cancela proyecto a mitad de camino...',
    options: [
      { text: 'Tengo contrato, me paga lo acordado', type: 'A' },
      { text: 'Negocio un pago parcial', type: 'B' },
      { text: 'Acepto y busco otro cliente', type: 'C' },
      { text: 'Me afecta mucho emocionalmente', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Qué tanto te motiva la libertad vs la seguridad?',
    options: [
      { text: 'Libertad 100%, la seguridad me aburre', type: 'A' },
      { text: 'Libertad principalmente, algo de seguridad', type: 'B' },
      { text: 'Balance entre ambas', type: 'C' },
      { text: 'Seguridad primero, la libertad es sobrevaluada', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Tienes habilidades que puedas vender como servicio?',
    options: [
      { text: 'Sí, muy demandadas en el mercado', type: 'A' },
      { text: 'Sí, aunque tendría que desarrollarlas más', type: 'B' },
      { text: 'Algunas, pero no sé si se venderían', type: 'C' },
      { text: 'No tengo claro qué podría ofrecer', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎯 Freelancer Nato',
    description: 'Tienes todo lo que se necesita para ser freelancer exitoso: disciplina, habilidad para vender, tolerancia a la incertidumbre y buena autogestión. La vida independiente es para ti.',
    traits: ['Autónomo', 'Disciplinado', 'Emprendedor', 'Versátil'],
    advice: 'Tienes el perfil ideal. Solo asegúrate de tener un colchón financiero y contratos claros antes de lanzarte.',
  },
  B: {
    title: '💼 Freelancer Potencial',
    description: 'Tienes buen potencial para freelancear pero necesitas desarrollar algunas habilidades, especialmente en la parte de negocio y autopromoción. Con preparación podrías hacerlo muy bien.',
    traits: ['Adaptable', 'En desarrollo', 'Capaz', 'Moderado'],
    advice: 'Podrías empezar freelanceando como side hustle mientras sigues empleado. Así desarrollas las habilidades con menos riesgo.',
  },
  C: {
    title: '🤔 Freelancer Dudoso',
    description: 'El freelance no es imposible para ti pero te costaría. Necesitas más estructura y seguridad de la que este estilo de vida ofrece. Podría funcionar en circunstancias ideales.',
    traits: ['Cauteloso', 'Dependiente', 'Sensible', 'Necesita estructura'],
    advice: 'Quizás el freelance full-time no es para ti, pero podrías hacer proyectos ocasionales mientras tienes un empleo estable.',
  },
  D: {
    title: '🏢 Empleado por Elección',
    description: 'El freelance definitivamente no es para ti. Necesitas estructura, estabilidad e interacción social que el empleo tradicional ofrece. Y está perfectamente bien.',
    traits: ['Estructurado', 'Social', 'Estable', 'Tradicional'],
    advice: 'No te fuerces a freelancear. Si te sientes mejor como empleado, sigue creciendo en ese camino. El éxito no requiere independencia.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
