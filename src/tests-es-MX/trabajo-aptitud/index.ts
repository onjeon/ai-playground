// Test de Aptitud Profesional - ¿Cuál es tu perfil laboral ideal?
export const questions = [
  {
    id: 1,
    text: '¿Qué tipo de trabajo te hace sentir más realizado?',
    options: [
      { text: 'Trabajo analítico con datos y números', type: 'A' },
      { text: 'Trabajo creativo y artístico', type: 'B' },
      { text: 'Trabajo con personas y comunicación', type: 'C' },
      { text: 'Trabajo técnico y de resolución de problemas', type: 'D' },
    ],
  },
  {
    id: 2,
    text: '¿Cómo prefieres aprender nuevas habilidades?',
    options: [
      { text: 'Estudiando teoría y documentación', type: 'A' },
      { text: 'Experimentando y creando cosas nuevas', type: 'B' },
      { text: 'Aprendiendo de otros y en equipo', type: 'C' },
      { text: 'Practicando con ejercicios prácticos', type: 'D' },
    ],
  },
  {
    id: 3,
    text: '¿Qué ambiente laboral te atrae más?',
    options: [
      { text: 'Oficina estructurada y organizada', type: 'A' },
      { text: 'Espacio flexible y creativo', type: 'B' },
      { text: 'Ambiente dinámico con mucha interacción', type: 'C' },
      { text: 'Taller o laboratorio técnico', type: 'D' },
    ],
  },
  {
    id: 4,
    text: '¿Qué te motiva más en el trabajo?',
    options: [
      { text: 'Resolver problemas complejos', type: 'A' },
      { text: 'Expresar mi creatividad', type: 'B' },
      { text: 'Ayudar a otras personas', type: 'C' },
      { text: 'Construir o arreglar cosas', type: 'D' },
    ],
  },
  {
    id: 5,
    text: '¿Cómo manejas los proyectos?',
    options: [
      { text: 'Con metodología y análisis detallado', type: 'A' },
      { text: 'Con flexibilidad e improvisación creativa', type: 'B' },
      { text: 'Coordinando y motivando al equipo', type: 'C' },
      { text: 'Con enfoque práctico y manos a la obra', type: 'D' },
    ],
  },
  {
    id: 6,
    text: '¿Qué materia te gustaba más en la escuela?',
    options: [
      { text: 'Matemáticas o ciencias exactas', type: 'A' },
      { text: 'Arte, música o literatura', type: 'B' },
      { text: 'Historia, civismo o psicología', type: 'C' },
      { text: 'Tecnología o talleres prácticos', type: 'D' },
    ],
  },
  {
    id: 7,
    text: '¿Cómo te describes en el trabajo?',
    options: [
      { text: 'Metódico y preciso', type: 'A' },
      { text: 'Innovador y original', type: 'B' },
      { text: 'Comunicativo y empático', type: 'C' },
      { text: 'Práctico y eficiente', type: 'D' },
    ],
  },
  {
    id: 8,
    text: '¿Qué tipo de retos prefieres?',
    options: [
      { text: 'Retos intelectuales y de análisis', type: 'A' },
      { text: 'Retos creativos y de innovación', type: 'B' },
      { text: 'Retos de liderazgo y comunicación', type: 'C' },
      { text: 'Retos técnicos y de construcción', type: 'D' },
    ],
  },
  {
    id: 9,
    text: '¿Qué herramienta usarías más cómodamente?',
    options: [
      { text: 'Hojas de cálculo y bases de datos', type: 'A' },
      { text: 'Software de diseño o edición', type: 'B' },
      { text: 'Presentaciones y redes sociales', type: 'C' },
      { text: 'Herramientas técnicas o manuales', type: 'D' },
    ],
  },
  {
    id: 10,
    text: '¿Cuál es tu mayor fortaleza?',
    options: [
      { text: 'El pensamiento lógico', type: 'A' },
      { text: 'La imaginación y originalidad', type: 'B' },
      { text: 'Las habilidades sociales', type: 'C' },
      { text: 'Las habilidades técnicas', type: 'D' },
    ],
  },
  {
    id: 11,
    text: '¿Cómo prefieres trabajar?',
    options: [
      { text: 'Solo, concentrado en mis tareas', type: 'A' },
      { text: 'En proyectos creativos individuales', type: 'B' },
      { text: 'En equipo, colaborando con otros', type: 'C' },
      { text: 'En el campo, haciendo trabajo práctico', type: 'D' },
    ],
  },
  {
    id: 12,
    text: '¿Qué valoras más en un empleo?',
    options: [
      { text: 'Estabilidad y crecimiento profesional', type: 'A' },
      { text: 'Libertad creativa y expresión', type: 'B' },
      { text: 'Impacto social y trabajo en equipo', type: 'C' },
      { text: 'Trabajo práctico y tangible', type: 'D' },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: '📊 El Analista Nato',
    description: 'Tienes una mente lógica y estructurada. Te destacas en trabajos que requieren análisis de datos, investigación y pensamiento crítico. Carreras ideales: Finanzas, Contabilidad, Ciencias, Ingeniería, Investigación.',
    traits: ['Analítico', 'Metódico', 'Lógico', 'Detallista'],
    advice: 'Busca roles donde puedas usar tu capacidad de análisis. No te limites a los números, tu lógica sirve en cualquier industria.',
  },
  B: {
    title: '🎨 El Creativo Innovador',
    description: 'Tu imaginación es tu superpoder. Te expresas mejor a través del arte, el diseño y la innovación. Carreras ideales: Diseño, Marketing creativo, Arte, Arquitectura, Publicidad, Entretenimiento.',
    traits: ['Creativo', 'Innovador', 'Original', 'Visionario'],
    advice: 'Busca espacios donde tu creatividad sea valorada. No te conformes con trabajos rutinarios, necesitas expresarte.',
  },
  C: {
    title: '🤝 El Comunicador Social',
    description: 'Tu fortaleza está en las relaciones humanas. Te destacas motivando, liderando y ayudando a otros. Carreras ideales: Recursos Humanos, Ventas, Psicología, Docencia, Comunicación, Servicio al cliente.',
    traits: ['Empático', 'Comunicativo', 'Carismático', 'Colaborativo'],
    advice: 'Tu habilidad con las personas es valiosa. Busca roles donde puedas conectar, motivar y ayudar a otros.',
  },
  D: {
    title: '🔧 El Técnico Práctico',
    description: 'Eres de los que prefieren hacer que hablar. Te destacas resolviendo problemas prácticos y construyendo cosas tangibles. Carreras ideales: Ingeniería, Tecnología, Mecánica, Construcción, Oficios técnicos.',
    traits: ['Práctico', 'Eficiente', 'Habilidoso', 'Resolutivo'],
    advice: 'Busca trabajos donde puedas usar tus manos y tu ingenio. Lo tuyo es lo tangible, lo que se puede tocar y ver.',
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
