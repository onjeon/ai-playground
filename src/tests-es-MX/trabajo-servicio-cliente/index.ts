// Test de Servicio al Cliente - ¿Tienes vocación de servicio?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes atendiendo a clientes difíciles?',
    options: [
      { text: 'Es un reto que disfruto resolver', type: 'A' },
      { text: 'Puedo manejarlo profesionalmente', type: 'B' },
      { text: 'Me estresa pero lo hago', type: 'C' },
      { text: 'Lo detesto, evito esas situaciones', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan paciente eres con las personas?',
    options: [
      { text: 'Muy paciente, no me altero', type: 'A' },
      { text: 'Bastante, mantengo la calma', type: 'B' },
      { text: 'Regular, a veces me desespero', type: 'C' },
      { text: 'Poco, me irrito fácilmente', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Disfrutas ayudar a resolver problemas de otros?',
    options: [
      { text: 'Mucho, me da satisfacción', type: 'A' },
      { text: 'Sí, es parte importante de mi rol', type: 'B' },
      { text: 'A veces, depende del problema', type: 'C' },
      { text: 'No mucho, prefiero mis propias tareas', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo manejas una queja o reclamo?',
    options: [
      { text: 'Escucho, empatizo y busco solución', type: 'A' },
      { text: 'Lo atiendo profesionalmente', type: 'B' },
      { text: 'Me pone nervioso pero lo resuelvo', type: 'C' },
      { text: 'Lo tomo personal y me afecta', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Vas más allá de lo esperado para ayudar?',
    options: [
      { text: 'Siempre, es mi filosofía de servicio', type: 'A' },
      { text: 'A veces, cuando puedo', type: 'B' },
      { text: 'Solo lo necesario', type: 'C' },
      { text: 'No, hago lo que me corresponde', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas cuando no puedes resolver algo?',
    options: [
      { text: 'Escalo apropiadamente y doy seguimiento', type: 'A' },
      { text: 'Busco ayuda y comunico al cliente', type: 'B' },
      { text: 'Me frustro y paso la bolita', type: 'C' },
      { text: 'Lo dejo ahí, no es mi problema', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te sientes al final del día después de atender clientes?',
    options: [
      { text: 'Satisfecho de haber ayudado', type: 'A' },
      { text: 'Cansado pero bien', type: 'B' },
      { text: 'Agotado emocionalmente', type: 'C' },
      { text: 'Drenado y frustrado', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tan bien escuchas a los clientes?',
    options: [
      { text: 'Excelente, entiendo lo que necesitan', type: 'A' },
      { text: 'Bien, presto atención', type: 'B' },
      { text: 'Regular, a veces me adelanto', type: 'C' },
      { text: 'Mal, espero a que terminen para hablar', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas múltiples clientes a la vez?',
    options: [
      { text: 'Bien, priorizo y atiendo a todos', type: 'A' },
      { text: 'Puedo manejarlo con algo de estrés', type: 'B' },
      { text: 'Me cuesta, me saturo', type: 'C' },
      { text: 'No puedo, necesito uno a la vez', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Te importa genuinamente la experiencia del cliente?',
    options: [
      { text: 'Mucho, es mi prioridad', type: 'A' },
      { text: 'Sí, es importante', type: 'B' },
      { text: 'Algo, pero no es lo principal', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo reaccionas ante un cliente agresivo o grosero?',
    options: [
      { text: 'Mantengo la calma y profesionalismo', type: 'A' },
      { text: 'Me incomoda pero lo manejo', type: 'B' },
      { text: 'Me afecta y me cuesta responder', type: 'C' },
      { text: 'Me engancho y reacciono', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Verías el servicio al cliente como carrera?',
    options: [
      { text: 'Sí, me apasiona ayudar a la gente', type: 'A' },
      { text: 'Podría, es una opción viable', type: 'B' },
      { text: 'Solo temporalmente', type: 'C' },
      { text: 'Nunca, no es para mí', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '⭐ Servidor Excepcional',
    description: 'Tienes vocación genuina de servicio. Disfrutas ayudar, manejas situaciones difíciles con gracia y dejas huella positiva en los clientes.',
    traits: ['Empático', 'Paciente', 'Proactivo', 'Genuino'],
    advice: 'El servicio es tu fortaleza. Considera roles de liderazgo en áreas de servicio o capacitación.',
  },
  B: {
    title: '✅ Servidor Competente',
    description: 'Brindas buen servicio de forma profesional aunque no es tu pasión. Cumples bien y los clientes quedan satisfechos.',
    traits: ['Profesional', 'Capaz', 'Funcional', 'Cumplido'],
    advice: 'Vas bien. Si quieres destacar, trabaja en agregar más calidez y personalización al servicio.',
  },
  C: {
    title: '😓 Servidor Esforzado',
    description: 'El servicio te cuesta pero lo haces. El trato con clientes te drena y no es tu zona de confort.',
    traits: ['Esforzado', 'Desgastado', 'Funcional', 'Limitado'],
    advice: 'El servicio puede no ser tu mejor fit. Considera roles con menos contacto directo con clientes.',
  },
  D: {
    title: '🚫 Servicio No es lo Tuyo',
    description: 'El servicio al cliente definitivamente no empata con tu personalidad. Te drena, te frustra y no lo disfrutas.',
    traits: ['Incompatible', 'Frustrado', 'Impaciente', 'Diferente perfil'],
    advice: 'Busca roles que no requieran servicio directo. Hay muchas opciones donde tu perfil encaje mejor.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
