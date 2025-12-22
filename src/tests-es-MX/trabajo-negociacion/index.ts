// Test de Negociación - ¿Qué tipo de negociador eres?
export const questions = [
  {
    id: 1,
    text: 'Vas a pedir un aumento de sueldo. ¿Cómo lo haces?',
    options: [
      { text: 'Presento datos duros de mi desempeño y mercado', type: 'A' },
      { text: 'Voy directo y digo lo que creo merecer', type: 'B' },
      { text: 'Busco el momento adecuado y lo platico con tacto', type: 'C' },
      { text: 'Me cuesta mucho, prefiero esperar a que me lo ofrezcan', type: 'D' },
    ],
  },
  {
    id: 2,
    text: 'En una negociación, ¿cuál es tu objetivo principal?',
    options: [
      { text: 'Obtener el mejor resultado posible para mí', type: 'A' },
      { text: 'Cerrar el trato rápido y eficientemente', type: 'B' },
      { text: 'Que ambas partes queden satisfechas', type: 'C' },
      { text: 'Evitar conflicto y mantener la relación', type: 'D' },
    ],
  },
  {
    id: 3,
    text: 'La otra parte pone una oferta inaceptable...',
    options: [
      { text: 'Contraoferto con datos que respalden mi posición', type: 'A' },
      { text: 'Rechazo directo y pongo mi límite claro', type: 'B' },
      { text: 'Exploro qué hay detrás de su oferta y busco opciones', type: 'C' },
      { text: 'Tiendo a ceder más de lo que debería', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Cómo te preparas para una negociación importante?',
    options: [
      { text: 'Investigo a fondo, preparo argumentos y alternativas', type: 'A' },
      { text: 'Defino mi mínimo aceptable y voy a conseguirlo', type: 'B' },
      { text: 'Pienso en los intereses de ambas partes', type: 'C' },
      { text: 'Honestamente, no me preparo mucho', type: 'D' },
    ],
  },
  {
    id: 5,
    text: 'Cuando la negociación se pone tensa...',
    options: [
      { text: 'Me mantengo firme y uso mis argumentos', type: 'A' },
      { text: 'Aumento la presión para cerrar', type: 'B' },
      { text: 'Busco pausar y retomar cuando se calmen las cosas', type: 'C' },
      { text: 'Me pongo nervioso y quiero que termine', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué tan cómodo te sientes diciendo "no"?',
    options: [
      { text: 'Muy cómodo si tengo buenos argumentos', type: 'A' },
      { text: 'Sin problema, el no es parte del juego', type: 'B' },
      { text: 'Depende, busco formas de decirlo amablemente', type: 'C' },
      { text: 'Me cuesta mucho decir que no', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo manejas cuando la otra parte tiene más poder?',
    options: [
      { text: 'Busco formas de equilibrar con información', type: 'A' },
      { text: 'Negocio igual de fuerte, no me intimidan', type: 'B' },
      { text: 'Busco puntos de interés común para crear alianza', type: 'C' },
      { text: 'Tiendo a aceptar lo que me ofrezcan', type: 'D' },
    ],
  },
  {
    id: 8,
    text: 'Cerraste un trato pero después te das cuenta que pudiste conseguir más...',
    options: [
      { text: 'Lo analizo para aprender y hacerlo mejor la próxima', type: 'A' },
      { text: 'Me frustro, siempre quiero el mejor resultado', type: 'B' },
      { text: 'Si ambos quedamos bien, está bien', type: 'C' },
      { text: 'Al menos cerré, eso es lo que importa', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cómo manejas las concesiones en una negociación?',
    options: [
      { text: 'Solo cedo si obtengo algo a cambio', type: 'A' },
      { text: 'Cedo lo mínimo posible', type: 'B' },
      { text: 'Cedo en lo menos importante para ganar en lo clave', type: 'C' },
      { text: 'Tiendo a ceder demasiado pronto', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué haces si la negociación llega a un punto muerto?',
    options: [
      { text: 'Propongo alternativas creativas', type: 'A' },
      { text: 'Me levanto de la mesa si es necesario', type: 'B' },
      { text: 'Busco un mediador o una pausa', type: 'C' },
      { text: 'Cedo para que avance', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo te sientes negociando tu salario en una oferta de trabajo?',
    options: [
      { text: 'Preparado, investigo rangos y negocio con datos', type: 'A' },
      { text: 'Seguro, sé lo que valgo y lo pido', type: 'B' },
      { text: 'Algo nervioso pero lo hago con tacto', type: 'C' },
      { text: 'Incómodo, acepto lo que me ofrezcan', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué es más importante para ti al negociar?',
    options: [
      { text: 'Obtener el mejor resultado objetivo posible', type: 'A' },
      { text: 'Ganar y que quede claro que gané', type: 'B' },
      { text: 'Construir una relación a largo plazo', type: 'C' },
      { text: 'Que termine pronto y sin conflicto', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📊 Negociador Analítico',
    description: 'Te preparas a fondo y negocias con datos y argumentos sólidos. Buscas el mejor resultado posible basándote en hechos. Eres difícil de vencer cuando estás bien preparado.',
    traits: ['Preparado', 'Lógico', 'Estratégico', 'Metódico'],
    advice: 'Tu preparación es tu fortaleza. No olvides que a veces la intuición y la conexión emocional también importan.',
  },
  B: {
    title: '🦈 Negociador Competitivo',
    description: 'Negocias para ganar. Eres directo, asertivo y no te intimidas fácilmente. Funcionas bien en negociaciones duras donde hay mucho en juego.',
    traits: ['Asertivo', 'Competitivo', 'Directo', 'Decidido'],
    advice: 'Tu fuerza es impresionante, pero no todas las negociaciones son de suma cero. A veces crear valor beneficia a ambos.',
  },
  C: {
    title: '🤝 Negociador Colaborativo',
    description: 'Buscas que todos ganen. Entiendes que las mejores negociaciones son las que crean valor para ambas partes. Construyes relaciones duraderas.',
    traits: ['Empático', 'Creativo', 'Flexible', 'Relacional'],
    advice: 'Tu enfoque construye alianzas, pero asegúrate de no sacrificar tus intereses por mantener la armonía.',
  },
  D: {
    title: '🕊️ Negociador Evitador',
    description: 'Prefieres evitar el conflicto y tiendes a ceder para mantener la paz. Las negociaciones te generan ansiedad y preferirías no tener que hacerlas.',
    traits: ['Pacifista', 'Flexible', 'Ansioso', 'Complaciente'],
    advice: 'Negociar es una habilidad que se aprende. Practica con situaciones pequeñas y verás que no es tan terrible.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
