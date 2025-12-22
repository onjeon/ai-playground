// Personalidad con los Amigos
export const questions = [
  {
    id: 1,
    text: '¿Cómo eres cuando sales con tu grupo de amigos?',
    options: [
      { text: 'Soy el que organiza todo y decide a dónde ir', type: 'A' },
      { text: 'El que echa relajo y hace reír a todos', type: 'B' },
      { text: 'Me adapto, voy con el flow del grupo', type: 'C' },
      { text: 'El tranquilo que disfruta la compañía', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan grande es tu círculo de amigos?',
    options: [
      { text: 'Bien grande, conozco a un chorro de gente', type: 'A' },
      { text: 'Tengo varios grupos de amigos diferentes', type: 'B' },
      { text: 'Un grupo pequeño pero bien unidos', type: 'C' },
      { text: 'Pocos amigos pero de los buenos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo reaccionas cuando un amigo te cancela planes?',
    options: [
      { text: 'Me molesto pero entiendo, cosas pasan', type: 'A' },
      { text: 'Ni modo, busco otros planes', type: 'B' },
      { text: 'Me da igual, hay más oportunidades', type: 'C' },
      { text: 'Me desanimo, ya tenía ganas de verlo', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué rol tienes cuando hay pedas con los cuates?',
    options: [
      { text: 'El anfitrión que pone la casa o el carro', type: 'A' },
      { text: 'El DJ o el que pone el ambiente', type: 'B' },
      { text: 'El que lleva las chelas y botanas', type: 'C' },
      { text: 'El que siempre termina cuidando a todos', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas los secretos de tus amigos?',
    options: [
      { text: 'Soy una tumba, nunca cuento nada', type: 'A' },
      { text: 'Los guardo bien, solo hablo si es necesario', type: 'B' },
      { text: 'A veces se me salen sin querer', type: 'C' },
      { text: 'Honestamente, me cuesta guardar secretos', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué haces cuando un amigo está pasándola mal?',
    options: [
      { text: 'Estoy ahí para escucharlo y apoyarlo', type: 'A' },
      { text: 'Lo invito a distraerse para que se sienta mejor', type: 'B' },
      { text: 'Le doy su espacio pero le aviso que aquí estoy', type: 'C' },
      { text: 'No sé muy bien qué hacer en esas situaciones', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo prefieres comunicarte con tus amigos?',
    options: [
      { text: 'En persona, nada como verse las caras', type: 'A' },
      { text: 'Por WhatsApp, estamos en contacto siempre', type: 'B' },
      { text: 'Videollamadas o llamadas telefónicas', type: 'C' },
      { text: 'No necesitamos hablar seguido, la amistad está', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo eres para hacer nuevos amigos?',
    options: [
      { text: 'Súper fácil, hablo con cualquiera', type: 'A' },
      { text: 'Me toma un poco pero soy amigable', type: 'B' },
      { text: 'Prefiero que me presenten a alguien', type: 'C' },
      { text: 'Me cuesta, soy más reservado', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué haces cuando hay conflicto entre amigos?',
    options: [
      { text: 'Intento mediar y que hagan las paces', type: 'A' },
      { text: 'Escucho a ambos lados sin tomar partido', type: 'B' },
      { text: 'Me mantengo al margen del conflicto', type: 'C' },
      { text: 'Apoyo a quien creo que tiene razón', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo describes la amistad ideal para ti?',
    options: [
      { text: 'Alguien que está en las buenas y las malas', type: 'A' },
      { text: 'Con quien puedo ser yo mismo sin filtros', type: 'B' },
      { text: 'Que respete mi espacio pero esté cuando lo necesite', type: 'C' },
      { text: 'Que no me juzgue y me acepte como soy', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🎯 El Líder del Grupo',
    description: 'Eres el que organiza las salidas, mantiene al grupo unido y siempre está pendiente de todos. Tus amigos confían en ti para tomar decisiones y saben que pueden contar contigo. Eres el pegamento social de tu círculo.',
    traits: ['Organizador', 'Confiable', 'Líder natural', 'Protector'],
    advice: 'Tu liderazgo es valioso, pero recuerda que a veces también necesitas que otros te cuiden. Deja que tus amigos también te apoyen a ti.',
  },
  B: {
    title: '🎉 El Alma de las Reuniones',
    description: 'Donde llegas, la fiesta comienza. Eres el que pone el ambiente, hace reír a todos y convierte cualquier momento en una experiencia memorable. Tus amigos te buscan porque sabes cómo pasarla bien.',
    traits: ['Carismático', 'Divertido', 'Energético', 'Social'],
    advice: 'Tu energía es contagiosa, pero también está bien mostrar tu lado más vulnerable con tus amigos cercanos. La diversión y la profundidad pueden coexistir.',
  },
  C: {
    title: '🌊 El Amigo Chill',
    description: 'Vas con el flow, te adaptas a cualquier plan y nunca generas drama. Tus amigos te aprecian porque eres fácil de tratar y siempre tienes buena vibra. No necesitas ser el centro de atención para pasarla bien.',
    traits: ['Relajado', 'Adaptable', 'Flexible', 'Tranquilo'],
    advice: 'Tu naturaleza chill es refrescante, pero no tengas miedo de expresar lo que quieres de vez en cuando. Tus opiniones también importan.',
  },
  D: {
    title: '💎 El Amigo Leal',
    description: 'Tienes pocos amigos pero los valoras profundamente. Prefieres calidad sobre cantidad y cuando te comprometes con una amistad, es para siempre. Eres el amigo que está en las buenas y en las malas.',
    traits: ['Leal', 'Selectivo', 'Profundo', 'Confiable'],
    advice: 'Tu lealtad es un tesoro, pero intenta abrirte a conocer personas nuevas. A veces las mejores amistades llegan cuando menos las esperas.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
