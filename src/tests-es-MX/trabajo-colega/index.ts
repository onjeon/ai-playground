// Test de Tipo de Colega - ¿Qué tipo de compañero de trabajo eres?
export const questions = [
  {
    id: 1,
    text: 'Un compañero está atrasado con su trabajo y te pide ayuda...',
    options: [
      { text: 'Le ayudo si mi trabajo está al día', type: 'A' },
      { text: 'Le ayudo aunque tenga que quedarme más tiempo', type: 'B' },
      { text: 'Le doy tips pero que él lo resuelva', type: 'C' },
      { text: 'No es mi problema, que lo resuelva solo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo es tu relación con tus compañeros de trabajo?',
    options: [
      { text: 'Profesional y cordial, separamos lo laboral', type: 'A' },
      { text: 'Somos amigos, convivimos dentro y fuera', type: 'B' },
      { text: 'Bien pero no me involucro mucho', type: 'C' },
      { text: 'Lo mínimo necesario para trabajar', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'Hay chismes sobre un compañero en la oficina...',
    options: [
      { text: 'Me mantengo al margen, no participo', type: 'A' },
      { text: 'Defiendo al compañero si es injusto', type: 'B' },
      { text: 'Escucho pero no opino', type: 'C' },
      { text: 'A veces participo, es entretenido', type: 'D' },
    ],
  },
  {
    id: 4,
    text: 'Un compañero se lleva el crédito por algo que hiciste tú...',
    options: [
      { text: 'Lo hablo directamente con él y con el jefe', type: 'A' },
      { text: 'Lo menciono diplomáticamente cuando sea apropiado', type: 'B' },
      { text: 'Me molesta pero no digo nada', type: 'C' },
      { text: 'Lo dejo pasar, no vale la pena', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te comportas en las fiestas de la oficina?',
    options: [
      { text: 'Voy, convivo profesionalmente y me retiro', type: 'A' },
      { text: 'Soy el alma de la fiesta, organizo y convivo', type: 'B' },
      { text: 'Voy un rato y me voy temprano', type: 'C' },
      { text: 'Busco excusas para no ir', type: 'D' },
    ],
  },
  {
    id: 6,
    text: 'Un compañero nuevo entra al equipo...',
    options: [
      { text: 'Le explico lo básico y que pregunte si necesita', type: 'A' },
      { text: 'Lo adopto, le enseño todo y lo integro al equipo', type: 'B' },
      { text: 'Le doy la bienvenida y ya, que aprenda', type: 'C' },
      { text: 'Ni lo pelo, ya aprenderá solo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas los conflictos con compañeros?',
    options: [
      { text: 'Los hablo directamente para resolverlos', type: 'A' },
      { text: 'Busco entender su punto y llegar a un acuerdo', type: 'B' },
      { text: 'Los evito, no me gusta el conflicto', type: 'C' },
      { text: 'Me guardo el enojo y me desquito pasivamente', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Participas en las juntas y proyectos de equipo?',
    options: [
      { text: 'Participo cuando tengo algo valioso que aportar', type: 'A' },
      { text: 'Muy activamente, me gusta colaborar', type: 'B' },
      { text: 'Lo mínimo necesario', type: 'C' },
      { text: 'Prefiero trabajo individual', type: 'D' },
    ],
  },
  {
    id: 9,
    text: 'Un compañero comete un error que te afecta...',
    options: [
      { text: 'Se lo señalo para que lo corrija', type: 'A' },
      { text: 'Le ayudo a corregirlo sin hacerlo sentir mal', type: 'B' },
      { text: 'Lo corrijo yo sin decirle nada', type: 'C' },
      { text: 'Me quejo con otros pero no con él', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Compartes información y conocimiento con tu equipo?',
    options: [
      { text: 'Sí, lo que ayude al trabajo del equipo', type: 'A' },
      { text: 'Todo, me gusta que todos crezcamos', type: 'B' },
      { text: 'Solo si me preguntan', type: 'C' },
      { text: 'Guardo mis secretos, es mi ventaja competitiva', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te describirían tus compañeros?',
    options: [
      { text: 'Profesional, confiable y respetuoso', type: 'A' },
      { text: 'Buena onda, solidario y colaborador', type: 'B' },
      { text: 'Callado pero cumplido', type: 'C' },
      { text: 'Distante o difícil de tratar', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué valoras más en tus compañeros de trabajo?',
    options: [
      { text: 'Que sean profesionales y cumplidos', type: 'A' },
      { text: 'Que sean buena onda y colaboradores', type: 'B' },
      { text: 'Que no me molesten y hagan su trabajo', type: 'C' },
      { text: 'Que me dejen en paz', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '💼 Colega Profesional',
    description: 'Mantienes un balance perfecto entre ser cordial y mantener límites profesionales. Eres confiable, respetuoso y cumplido. El tipo de compañero que todos aprecian.',
    traits: ['Profesional', 'Respetuoso', 'Confiable', 'Equilibrado'],
    advice: 'Tu profesionalismo es admirable. A veces está bien bajar un poco la guardia y crear conexiones más personales.',
  },
  B: {
    title: '🤗 Colega Solidario',
    description: 'Eres el compañero que todos quieren tener. Ayudas sin esperar nada a cambio, integras a los nuevos y creas buen ambiente. Eres el corazón del equipo.',
    traits: ['Solidario', 'Generoso', 'Integrador', 'Amigable'],
    advice: 'Tu generosidad es invaluable, pero cuidado con que abusen de ti. Aprende a poner límites.',
  },
  C: {
    title: '🤫 Colega Reservado',
    description: 'Haces tu trabajo bien pero prefieres mantener distancia. No eres antisocial, solo selectivo con tu energía. Cumples pero no te involucras más de lo necesario.',
    traits: ['Reservado', 'Independiente', 'Cumplido', 'Distante'],
    advice: 'Tu independencia está bien, pero crear conexiones con compañeros puede hacer tu trabajo más llevadero y abrir oportunidades.',
  },
  D: {
    title: '🚷 Colega Difícil',
    description: 'Prefieres el aislamiento y a veces generas fricción sin querer. El trabajo en equipo no es lo tuyo y tus compañeros pueden percibirte como distante o complicado.',
    traits: ['Aislado', 'Individualista', 'Difícil', 'Desconectado'],
    advice: 'El trabajo es mejor cuando te llevas bien con tus compañeros. Intenta abrirte un poco, podrías sorprenderte.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
