// Personalidad de Telenovela
export const questions = [
  {
    id: 1,
    text: '¿Qué tipo de telenovela te atrapa más?',
    options: [
      { text: 'Drama romántico clásico estilo María la del Barrio', type: 'A' },
      { text: 'Series de narcos y acción', type: 'B' },
      { text: 'Comedias románticas y ligeras', type: 'C' },
      { text: 'No veo telenovelas, prefiero series', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo reaccionas ante el drama en las novelas?',
    options: [
      { text: 'Lloro, grito y me emociono con todo', type: 'A' },
      { text: 'Me engancho pero mantengo la compostura', type: 'B' },
      { text: 'Me río de lo exagerado', type: 'C' },
      { text: 'Me aburre el drama excesivo', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Quién es tu villana favorita de telenovela?',
    options: [
      { text: 'Soraya Montenegro o alguna clásica', type: 'A' },
      { text: 'Las villanas modernas más realistas', type: 'B' },
      { text: 'Las cómicas que dan risa', type: 'C' },
      { text: 'No tengo villana favorita', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué hacías cuando pasaban tu novela favorita?',
    options: [
      { text: 'Todo se detenía, era sagrado', type: 'A' },
      { text: 'La veía pero podía hacer otras cosas', type: 'B' },
      { text: 'La grababa o veía en streaming después', type: 'C' },
      { text: 'Nunca tuve una novela favorita', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo te sientes con los triángulos amorosos?',
    options: [
      { text: 'Me encantan, son lo mejor de las novelas', type: 'A' },
      { text: 'Están bien pero a veces exageran', type: 'B' },
      { text: 'Son predecibles y aburridos', type: 'C' },
      { text: 'No me gustan, prefiero historias directas', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué opinas del final típico de novela mexicana?',
    options: [
      { text: 'Me encanta cuando terminan juntos y felices', type: 'A' },
      { text: 'A veces son muy predecibles', type: 'B' },
      { text: 'Prefiero finales inesperados', type: 'C' },
      { text: 'No me importa el final', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Discutes las novelas con alguien?',
    options: [
      { text: 'Sí, con toda la familia o amigos', type: 'A' },
      { text: 'A veces comento algo en redes', type: 'B' },
      { text: 'Solo si alguien más las ve', type: 'C' },
      { text: 'No, es algo que veo solo', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué plataforma usas para ver contenido?',
    options: [
      { text: 'Televisión abierta, lo clásico', type: 'A' },
      { text: 'Netflix, Prime o streaming', type: 'B' },
      { text: 'ViX o plataformas de Televisa/TV Azteca', type: 'C' },
      { text: 'YouTube o redes sociales', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Te gustaría actuar en una telenovela?',
    options: [
      { text: 'Sería el sueño de mi vida', type: 'A' },
      { text: 'Sería una experiencia interesante', type: 'B' },
      { text: 'Solo si fuera comedia', type: 'C' },
      { text: 'No, prefiero estar detrás de cámaras', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Recuerdas frases icónicas de telenovelas?',
    options: [
      { text: 'Claro, "maldita lisiada" y muchas más', type: 'A' },
      { text: 'Algunas de las más famosas', type: 'B' },
      { text: 'Solo las que se volvieron memes', type: 'C' },
      { text: 'No realmente', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📺 La Señora de las Telenovelas',
    description: 'Las telenovelas son parte de tu vida. Conoces todas las clásicas, lloras con los dramas y celebras los finales felices. Probablemente tu mamá o abuelita te heredaron esta pasión. "Maldita lisiada" es parte de tu vocabulario.',
    traits: ['Nostálgico', 'Emocional', 'Tradicional', 'Romántico'],
    advice: 'Tu amor por las novelas es cultura pop mexicana. Disfrútalo pero también explora nuevo contenido.',
  },
  B: {
    title: '🎬 El Espectador Moderno',
    description: 'Te gustan las historias bien contadas, ya sean novelas o series. Aprecias la calidad sobre la tradición. Puedes ver una novela clásica pero prefieres las producciones más cuidadas y modernas.',
    traits: ['Selectivo', 'Moderno', 'Crítico', 'Actualizado'],
    advice: 'Tu criterio te lleva a buen contenido. Sigue explorando pero no desprecies lo clásico.',
  },
  C: {
    title: '😂 El Que Ve por los Memes',
    description: 'Las novelas te dan risa más que drama. Disfrutas lo exagerado, lo absurdo y lo que se vuelve meme. Ves contenido más por entretenimiento ligero que por el drama.',
    traits: ['Divertido', 'Ligero', 'Irónico', 'Social'],
    advice: 'Tu sentido del humor hace que disfrutes todo de manera diferente. Las novelas mexicanas son una mina de oro para ti.',
  },
  D: {
    title: '📱 El Streaming Generation',
    description: 'Las telenovelas tradicionales no son lo tuyo. Prefieres series, documentales o contenido más variado. Eres de la generación que elige qué ver y cuándo verlo.',
    traits: ['Independiente', 'Moderno', 'Selectivo', 'Digital'],
    advice: 'Tu forma de consumir contenido es válida. Pero de vez en cuando date chance de ver una novela, es parte de la cultura mexicana.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
