// Test de Networking Profesional - ¿Qué tan bueno eres haciendo networking?
export const questions = [
  {
    id: 1,
    text: '¿Cómo te sientes en eventos profesionales con desconocidos?',
    options: [
      { text: 'Cómodo, disfruto conocer gente nueva', type: 'A' },
      { text: 'Bien, puedo desenvolverme', type: 'B' },
      { text: 'Incómodo pero lo hago', type: 'C' },
      { text: 'Los evito siempre que puedo', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Con qué frecuencia expandes tu red de contactos?',
    options: [
      { text: 'Activamente, siempre estoy conectando', type: 'A' },
      { text: 'Regularmente, cuando hay oportunidad', type: 'B' },
      { text: 'Poco, solo cuando necesito algo', type: 'C' },
      { text: 'Casi nunca', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Cómo mantienes relaciones profesionales a largo plazo?',
    options: [
      { text: 'Les doy seguimiento regular y aporto valor', type: 'A' },
      { text: 'Los contacto de vez en cuando', type: 'B' },
      { text: 'Solo cuando necesito algo', type: 'C' },
      { text: 'No mantengo contacto', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué tan activo eres en LinkedIn u otras redes profesionales?',
    options: [
      { text: 'Muy activo, publico y conecto regularmente', type: 'A' },
      { text: 'Activo, mantengo mi perfil actualizado', type: 'B' },
      { text: 'Pasivo, tengo perfil pero no hago mucho', type: 'C' },
      { text: 'Inactivo o no tengo', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Sabes presentarte de forma memorable?',
    options: [
      { text: 'Sí, tengo mi pitch bien preparado', type: 'A' },
      { text: 'Más o menos, me presento bien', type: 'B' },
      { text: 'No muy bien, me trabo', type: 'C' },
      { text: 'Mal, no sé qué decir', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Buscas dar valor a tus contactos o solo recibirlo?',
    options: [
      { text: 'Siempre busco cómo ayudar primero', type: 'A' },
      { text: 'Trato de ser recíproco', type: 'B' },
      { text: 'Más bien recibo que doy', type: 'C' },
      { text: 'Solo contacto cuando necesito algo', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Tienes contactos en diferentes industrias y niveles?',
    options: [
      { text: 'Sí, mi red es diversa y amplia', type: 'A' },
      { text: 'Algo diversa', type: 'B' },
      { text: 'Limitada a mi círculo cercano', type: 'C' },
      { text: 'Muy limitada', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Cómo inicias conversaciones con personas nuevas?',
    options: [
      { text: 'Fácilmente, soy muy sociable', type: 'A' },
      { text: 'Bien, puedo romper el hielo', type: 'B' },
      { text: 'Me cuesta, espero que me hablen', type: 'C' },
      { text: 'No inicio conversaciones', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Das seguimiento después de conocer a alguien nuevo?',
    options: [
      { text: 'Siempre, dentro de 24-48 horas', type: 'A' },
      { text: 'Usualmente, si veo potencial', type: 'B' },
      { text: 'A veces, cuando me acuerdo', type: 'C' },
      { text: 'Nunca o casi nunca', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Tu red te ha ayudado profesionalmente?',
    options: [
      { text: 'Sí, mucho - oportunidades, consejos, referencias', type: 'A' },
      { text: 'Algunas veces', type: 'B' },
      { text: 'Poco', type: 'C' },
      { text: 'Nunca', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Asistes a conferencias, meetups o eventos de tu industria?',
    options: [
      { text: 'Regularmente, son valiosos', type: 'A' },
      { text: 'A veces, cuando puedo', type: 'B' },
      { text: 'Raramente', type: 'C' },
      { text: 'Nunca', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Cómo ves el networking en tu carrera?',
    options: [
      { text: 'Esencial, invierte tiempo y energía', type: 'A' },
      { text: 'Importante, lo hago cuando puedo', type: 'B' },
      { text: 'Necesario pero incómodo', type: 'C' },
      { text: 'No me interesa o no sirve', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '🌟 Networker Pro',
    description: 'Eres excelente haciendo networking. Construyes relaciones genuinas, aportas valor y tu red te devuelve oportunidades. Sigue así.',
    traits: ['Sociable', 'Estratégico', 'Generoso', 'Conectado'],
    advice: 'Sigue cultivando tu red. Considera mentorear a otros en networking y expandir a nuevas industrias.',
  },
  B: {
    title: '⚡ Networker en Desarrollo',
    description: 'Tienes buenas bases de networking pero hay espacio para mejorar. Con más consistencia y estrategia tu red crecerá significativamente.',
    traits: ['Capaz', 'En crecimiento', 'Potencial', 'Activo'],
    advice: 'Sé más proactivo y consistente. Establece rutinas de networking: un café al mes, posts semanales, seguimiento.',
  },
  C: {
    title: '🤔 Networker Pasivo',
    description: 'Tu networking es reactivo y limitado. Solo contactas cuando necesitas algo y eso limita el valor que recibes de tu red.',
    traits: ['Pasivo', 'Limitado', 'Reactivo', 'En desarrollo'],
    advice: 'Empieza pequeño: mantén contacto con 5 personas al mes, actualiza tu LinkedIn, asiste a un evento.',
  },
  D: {
    title: '🆘 Networking Inexistente',
    description: 'No tienes una red profesional activa y eso limita seriamente tus oportunidades de carrera. El networking es una habilidad que puedes desarrollar.',
    traits: ['Aislado', 'Sin red', 'Oportunidad perdida', 'Inicial'],
    advice: 'El networking es crucial para tu carrera. Empieza reconectando con ex compañeros y construye desde ahí.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
