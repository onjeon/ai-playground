// Personalidad en el Tráfico
export const questions = [
  {
    id: 1,
    text: '¿Cómo reaccionas cuando hay tráfico pesado?',
    options: [
      { text: 'Me desespero y me estreso mucho', type: 'A' },
      { text: 'Me molesta pero lo manejo', type: 'B' },
      { text: 'Pongo música y me relajo', type: 'C' },
      { text: 'Ya estoy acostumbrado, ni me afecta', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo te comportas con otros conductores?',
    options: [
      { text: 'Les pito y a veces les grito', type: 'A' },
      { text: 'Me molestan pero no digo nada', type: 'B' },
      { text: 'Los dejo pasar, no me urge', type: 'C' },
      { text: 'Voy en mi mundo, ignoro a todos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué haces cuando alguien te cierra el paso?',
    options: [
      { text: 'Le pito y le hago señas', type: 'A' },
      { text: 'Me enojo por dentro pero sigo', type: 'B' },
      { text: 'Lo dejo ir, no vale la pena', type: 'C' },
      { text: 'Ni me doy cuenta, voy distraído', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Usas Waze o Google Maps?',
    options: [
      { text: 'Siempre, es indispensable', type: 'A' },
      { text: 'Cuando no conozco la zona', type: 'B' },
      { text: 'A veces, pero confío en mi instinto', type: 'C' },
      { text: 'Casi nunca, me sé las rutas', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Qué música pones en el tráfico?',
    options: [
      { text: 'Algo intenso para desahogarme', type: 'A' },
      { text: 'Lo que esté de moda o mis playlists', type: 'B' },
      { text: 'Algo tranquilo para no estresarme', type: 'C' },
      { text: 'Podcasts o noticias', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Cómo manejas los topes?',
    options: [
      { text: 'Los paso rápido, mi carro aguanta', type: 'A' },
      { text: 'Bajo la velocidad lo necesario', type: 'B' },
      { text: 'Voy super despacio para no dañar el carro', type: 'C' },
      { text: 'A veces ni los veo y me los vuelo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Qué opinas de los vendedores en los semáforos?',
    options: [
      { text: 'Me desesperan, quiero que se vayan', type: 'A' },
      { text: 'A veces les compro algo', type: 'B' },
      { text: 'Los ignoro amablemente', type: 'C' },
      { text: 'Son parte del paisaje urbano', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo estacionas?',
    options: [
      { text: 'Donde caiga, aunque sea doble fila', type: 'A' },
      { text: 'Busco lugar legal aunque camine más', type: 'B' },
      { text: 'Uso estacionamiento aunque cueste', type: 'C' },
      { text: 'Le doy vueltas hasta encontrar lugar', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cuánto tiempo te toma un trayecto típico?',
    options: [
      { text: 'Horas, vivo lejos de todo', type: 'A' },
      { text: 'Como una hora en promedio', type: 'B' },
      { text: 'Media hora más o menos', type: 'C' },
      { text: 'Poco, vivo cerca de mis actividades', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Preferirías usar transporte público?',
    options: [
      { text: 'Nunca, prefiero mi carro aunque tarde más', type: 'A' },
      { text: 'Si fuera más eficiente, sí', type: 'B' },
      { text: 'A veces lo uso, está bien', type: 'C' },
      { text: 'Prefiero el metro o metrobús', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🚗 El Estresado del Volante',
    description: 'El tráfico te afecta mucho. Te desesparas, te enojas con otros conductores y llegas a tus destinos de mal humor. La CDMX o cualquier ciudad con tráfico es tu pesadilla.',
    traits: ['Impaciente', 'Estresado', 'Reactivo', 'Intenso'],
    advice: 'El tráfico no va a cambiar, pero tu actitud sí puede. Prueba técnicas de respiración o podcasts que te distraigan. Tu salud mental lo agradecerá.',
  },
  B: {
    title: '🚙 El Conductor Promedio',
    description: 'El tráfico te molesta pero lo manejas. Tienes tus momentos de frustración pero no dejas que arruine tu día. Usas la tecnología para optimizar rutas.',
    traits: ['Adaptable', 'Práctico', 'Moderado', 'Resiliente'],
    advice: 'Tu enfoque equilibrado es saludable. Sigue usando apps para evitar el peor tráfico y mantén la calma.',
  },
  C: {
    title: '😎 El Zen del Tráfico',
    description: 'El tráfico no te afecta. Pones tu música, te relajas y fluyes con la ciudad. Has aceptado que el tráfico es parte de la vida y no dejas que te quite la paz.',
    traits: ['Tranquilo', 'Paciente', 'Positivo', 'Adaptado'],
    advice: 'Tu actitud zen es envidiable. Sigue así y comparte tu secreto con los demás estresados del volante.',
  },
  D: {
    title: '🚌 El Alternativo del Transporte',
    description: 'Has encontrado maneras de evitar el peor tráfico. Ya sea viviendo cerca, usando transporte público o simplemente no te afecta. El tráfico es solo ruido de fondo.',
    traits: ['Práctico', 'Eficiente', 'Desapegado', 'Alternativo'],
    advice: 'Tu enfoque alternativo es inteligente. Sigue optimizando tu vida para evitar el estrés innecesario.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
