// Personalidad en las Fiestas Patrias
export const questions = [
  {
    id: 1,
    text: '¿Cómo celebras el 15 de septiembre?',
    options: [
      { text: 'En el zócalo o plaza principal con el Grito', type: 'A' },
      { text: 'Fiesta mexicana en casa con familia', type: 'B' },
      { text: 'En algún restaurante o bar con tema mexicano', type: 'C' },
      { text: 'Normal, no lo celebro mucho', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Qué tan patriota te sientes en septiembre?',
    options: [
      { text: 'Muy patriota, me emociona todo', type: 'A' },
      { text: 'Bastante, disfruto la temporada', type: 'B' },
      { text: 'Un poco, lo normal', type: 'C' },
      { text: 'No mucho realmente', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Gritas "¡Viva México!" con el presidente?',
    options: [
      { text: 'Sí, con todo el sentimiento', type: 'A' },
      { text: 'Lo grito pero más tranquilo', type: 'B' },
      { text: 'Solo si estoy en el ambiente', type: 'C' },
      { text: 'No, no me nace', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué platillo patrio es tu favorito?',
    options: [
      { text: 'Pozole, el rey de septiembre', type: 'A' },
      { text: 'Chiles en nogada, obra de arte', type: 'B' },
      { text: 'Tamales o mole', type: 'C' },
      { text: 'Cualquiera está bien', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Decoras tu casa o carro con motivos patrios?',
    options: [
      { text: 'Sí, banderas y adornos por todos lados', type: 'A' },
      { text: 'Algo pequeño, un adorno o banderita', type: 'B' },
      { text: 'Solo si hay fiesta en casa', type: 'C' },
      { text: 'No, no decoro nada', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué música pones en las fiestas patrias?',
    options: [
      { text: 'Mariachi y música tradicional', type: 'A' },
      { text: 'De todo un poco: regional, cumbia, norteño', type: 'B' },
      { text: 'Lo que esté de moda', type: 'C' },
      { text: 'La música normal, no cambio nada', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Usas ropa con colores patrios?',
    options: [
      { text: 'Sí, verde, blanco y rojo todo el mes', type: 'A' },
      { text: 'El 15 y 16 sí me visto patriota', type: 'B' },
      { text: 'A veces, si tengo algo a la mano', type: 'C' },
      { text: 'No, uso mi ropa normal', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué opinas del desfile militar del 16?',
    options: [
      { text: 'Me encanta verlo, es muy emotivo', type: 'A' },
      { text: 'Lo veo un rato en la tele', type: 'B' },
      { text: 'No me llama mucho la atención', type: 'C' },
      { text: 'No lo veo', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Cuántos días de fiesta patria celebras?',
    options: [
      { text: 'Todo septiembre es de celebración', type: 'A' },
      { text: 'Del 15 al 16, los días importantes', type: 'B' },
      { text: 'Solo la noche del 15', type: 'C' },
      { text: 'Ninguno especialmente', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Qué tan orgulloso te sientes de ser mexicano?',
    options: [
      { text: 'Muy orgulloso, amo mi país', type: 'A' },
      { text: 'Orgulloso de nuestra cultura y tradiciones', type: 'B' },
      { text: 'Tenemos cosas buenas y cosas malas', type: 'C' },
      { text: 'Es complicado, tenemos muchos problemas', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🇲🇽 El Mexicano de Corazón',
    description: 'Septiembre es tu mes. Te emocionas con el Grito, decoras todo de verde, blanco y rojo, y sientes el patriotismo en las venas. El himno nacional te pone la piel chinita.',
    traits: ['Patriota', 'Tradicional', 'Emotivo', 'Festivo'],
    advice: 'Tu amor por México es hermoso. Sigue celebrando nuestras tradiciones con orgullo.',
  },
  B: {
    title: '🎆 El Celebrador Festivo',
    description: 'Disfrutas las fiestas patrias como una buena excusa para festejar. Te gusta el pozole, el mariachi y las reuniones con familia y amigos. Septiembre es un buen mes para ti.',
    traits: ['Festivo', 'Social', 'Tradicional', 'Alegre'],
    advice: 'Tu forma de celebrar es perfecta. El patriotismo también se vive en la convivencia.',
  },
  C: {
    title: '😌 El Mexicano Tranquilo',
    description: 'Reconoces las fiestas patrias pero sin excesos. Aprecias la cultura mexicana a tu manera, sin necesidad de grandes celebraciones. Eres patriota pero a tu estilo.',
    traits: ['Moderado', 'Práctico', 'Tranquilo', 'Independiente'],
    advice: 'Tu forma tranquila de celebrar es válida. No necesitas gritar para amar a tu país.',
  },
  D: {
    title: '🤔 El Crítico Nacional',
    description: 'Las fiestas patrias no te emocionan tanto. Quizás ves los problemas del país y eso te hace más crítico. O simplemente no te identificas con ese tipo de celebraciones.',
    traits: ['Crítico', 'Realista', 'Independiente', 'Pensador'],
    advice: 'Tu visión crítica es válida. Amar a México también es querer que mejore. Pero date chance de disfrutar lo bueno.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
