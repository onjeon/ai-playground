// Test de Inteligencia Creativa
export const questions = [
  {
    id: 1,
    text: '¿Cuántos usos diferentes puedes imaginar para un ladrillo? La respuesta más creativa incluye:',
    options: [
      { text: 'Solo para construcción', type: 'wrong' },
      { text: 'Construcción, pisapapeles y tope de puerta', type: 'wrong' },
      { text: 'Instrumento musical, maceta, prensa, arte, arma, peso para ejercicio', type: 'correct' },
      { text: 'No tiene otros usos', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: '¿Qué título le pondrías a una historia donde un pez aprende a volar?',
    options: [
      { text: 'El pez volador', type: 'wrong' },
      { text: 'Sueños con escamas: Cuando el cielo se volvió océano', type: 'correct' },
      { text: 'Un pez en el aire', type: 'wrong' },
      { text: 'El pez que salió del agua', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo conectarías creativamente: un reloj, una mariposa y un taco?',
    options: [
      { text: 'Son cosas diferentes', type: 'wrong' },
      { text: 'El tiempo vuela como mariposa hacia la hora del taco', type: 'correct' },
      { text: 'No tienen relación', type: 'wrong' },
      { text: 'Son objetos pequeños', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'Si los colores tuvieran sabor, ¿cómo sería el azul?',
    options: [
      { text: 'No tiene sabor porque es un color', type: 'wrong' },
      { text: 'Fresco, como menta oceánica con un toque de melancolía', type: 'correct' },
      { text: 'Salado como el mar', type: 'wrong' },
      { text: 'Dulce', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: '¿Qué problema resuelve un tenedor con ruedas?',
    options: [
      { text: 'Ninguno, es absurdo', type: 'wrong' },
      { text: 'Podría mover comida por el plato, servir como juguete, o ayudar a personas con movilidad limitada', type: 'correct' },
      { text: 'Solo un problema imaginario', type: 'wrong' },
      { text: 'Transporte de comida', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Completa de forma original: "La luna es como..."',
    options: [
      { text: 'Un círculo brillante', type: 'wrong' },
      { text: 'Una moneda de plata que paga la deuda del sol con la noche', type: 'correct' },
      { text: 'Una pelota en el cielo', type: 'wrong' },
      { text: 'Un satélite natural', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo mejorarías creativamente una silla común?',
    options: [
      { text: 'Ponerle más cojines', type: 'wrong' },
      { text: 'Hacerla flotante con imanes, que cambie forma según tu postura y genere energía al sentarse', type: 'correct' },
      { text: 'Pintarla de otro color', type: 'wrong' },
      { text: 'Hacerla más grande', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'Si pudieras mezclar dos animales para crear uno nuevo útil, ¿cuál sería?',
    options: [
      { text: 'Perro con gato', type: 'wrong' },
      { text: 'Delfín con águila: inteligente, puede nadar y volar, ideal para rescates', type: 'correct' },
      { text: 'León con tigre', type: 'wrong' },
      { text: 'Pez con pájaro', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: '¿Qué nuevo uso darías a una llanta vieja?',
    options: [
      { text: 'Tirarla a la basura', type: 'wrong' },
      { text: 'Columpio, macetero vertical, mueble de jardín, estanque para peces, arte escultórico', type: 'correct' },
      { text: 'Quemarla', type: 'wrong' },
      { text: 'Usarla como llanta de refacción', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: '¿Cómo explicarías internet a alguien del año 1900?',
    options: [
      { text: 'No podría, es muy complejo', type: 'wrong' },
      { text: 'Una biblioteca infinita conectada por rayos invisibles donde el mundo entero puede hablar al instante', type: 'correct' },
      { text: 'Es como un telégrafo grande', type: 'wrong' },
      { text: 'Cables con información', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'Inventa un deporte nuevo combinando tres actividades diferentes:',
    options: [
      { text: 'Fútbol con básquet', type: 'wrong' },
      { text: 'Ajedrez acuático con arquería: piensas estrategia flotando y apuntas a blancos móviles', type: 'correct' },
      { text: 'Correr y nadar', type: 'wrong' },
      { text: 'Tenis con ping pong', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: '¿Qué nombre le pondrías a un restaurante donde todo es invisible?',
    options: [
      { text: 'Restaurante invisible', type: 'wrong' },
      { text: 'El Vacío Delicioso: Donde los sabores se ven con el alma', type: 'correct' },
      { text: 'Comida transparente', type: 'wrong' },
      { text: 'Sin ver', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: '¿Cómo harías que leer libros fuera más emocionante para los jóvenes?',
    options: [
      { text: 'Obligarlos a leer', type: 'wrong' },
      { text: 'Libros con realidad aumentada, finales alternativos votados, comunidades en vivo con autores', type: 'correct' },
      { text: 'Darles premios', type: 'wrong' },
      { text: 'Hacer los libros más cortos', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'Si el silencio tuviera forma, ¿cómo sería?',
    options: [
      { text: 'No tiene forma', type: 'wrong' },
      { text: 'Una esfera hueca y transparente que absorbe todo y expande la calma', type: 'correct' },
      { text: 'Un cuadrado vacío', type: 'wrong' },
      { text: 'Invisible', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: '¿Qué invento necesita el mundo que aún no existe?',
    options: [
      { text: 'Ya existe todo', type: 'wrong' },
      { text: 'Un traductor universal de emociones que fomente la empatía entre culturas y especies', type: 'correct' },
      { text: 'Carros voladores', type: 'wrong' },
      { text: 'Robots sirvientes', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '🎨 Genio Creativo',
    minScore: 12,
    description: '¡Extraordinario! Tu mente creativa no tiene límites. Ves posibilidades donde otros ven obstáculos y creas conexiones únicas.',
    traits: ['Innovador', 'Imaginativo', 'Original', 'Visionario'],
    advice: 'Tu creatividad es un don. Explora arte, diseño, emprendimiento o cualquier campo que requiera innovación.',
  },
  medium: {
    title: '💡 Mente Ingeniosa',
    minScore: 8,
    description: '¡Muy bien! Tienes buena capacidad creativa. Puedes pensar fuera de la caja cuando te lo propones.',
    traits: ['Curioso', 'Flexible', 'Inventivo', 'Abierto'],
    advice: 'Practica el pensamiento lateral y exponte a nuevas experiencias. Tu creatividad puede crecer aún más.',
  },
  low: {
    title: '🌱 Creatividad en Brote',
    minScore: 0,
    description: 'Tu creatividad puede desarrollarse con práctica. Todos tenemos potencial creativo esperando despertar.',
    traits: ['Práctico', 'Estructurado', 'Concreto', 'Realista'],
    advice: 'Prueba actividades artísticas, juegos de imaginación y rompe tu rutina. La creatividad es un músculo.',
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
