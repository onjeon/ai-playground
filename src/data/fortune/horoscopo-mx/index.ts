// Horóscopos Mexicanos 2025
// Mexican Zodiac Fortune Data

export type SignoZodiaco = 
  | 'aries' | 'tauro' | 'geminis' | 'cancer' 
  | 'leo' | 'virgo' | 'libra' | 'escorpio'
  | 'sagitario' | 'capricornio' | 'acuario' | 'piscis';

export interface HoroscopoData {
  id: SignoZodiaco;
  nombre: string;
  emoji: string;
  fechas: string;
  elemento: 'Fuego' | 'Tierra' | 'Aire' | 'Agua';
  palabrasClave: string[];
  puntuacionSuerte: number; // 1-5
  resumenAnual: string;
  categorias: {
    amor: string;
    dinero: string;
    trabajo: string;
    salud: string;
    familia: string;
  };
  mensual: string[];
  suerte: {
    numeros: number[];
    colores: string[];
    dia: string;
    piedra: string;
  };
  consejo: {
    hacer: string;
    evitar: string;
  };
  fraseMexicana: string; // Refrán o dicho mexicano
}

export const HOROSCOPOS_2025: Record<SignoZodiaco, HoroscopoData> = {
  // ♈ Aries (21 marzo - 19 abril)
  aries: {
    id: 'aries',
    nombre: 'Aries',
    emoji: '♈',
    fechas: '21 de marzo - 19 de abril',
    elemento: 'Fuego',
    palabrasClave: ['Pasión', 'Liderazgo', 'Aventura'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 será un año de fuego para Aries. Tu energía estará por los cielos y las oportunidades llegarán como lluvia en mayo. En el primer semestre, prepárate para cambios laborales importantes. El amor te sonreirá, especialmente si te animas a dar el primer paso. ¡Este año es para los valientes!',
    categorias: {
      amor: 'Tu corazón latirá con fuerza este año. Los solteros encontrarán el amor en lugares inesperados - quizás en una taquería o en un partido de fútbol. Las parejas vivirán una etapa de renovación. Evita los celos en septiembre.',
      dinero: 'Las finanzas mejorarán a partir de abril. Evita préstamos en enero y febrero. Un negocio familiar podría darte sorpresas positivas. No gastes todo en el Buen Fin.',
      trabajo: 'Oportunidades de ascenso en el horizonte. Tu jefe reconocerá tu esfuerzo. Cuidado con un compañero envidioso. Mayo es ideal para pedir aumento.',
      salud: 'Energía de sobra, pero no abuses. Cuida tu espalda y evita el exceso de picante cuando estés estresado. El ejercicio será tu mejor medicina.',
      familia: 'Momentos especiales en fiestas patrias. Un familiar lejano traerá buenas noticias. Cuida la relación con tu mamá, necesita más atención.',
    },
    mensual: [
      'Enero: Año nuevo, energía renovada. Buen momento para iniciar proyectos.',
      'Febrero: El amor está en el aire. San Valentín te traerá sorpresas.',
      'Marzo: Tu cumpleaños trae buena suerte. Celebra en grande.',
      'Abril: Semana Santa será para reflexionar y descansar.',
      'Mayo: Dinero extra llega a tu vida. Ahorra un poco.',
      'Junio: Cuidado con el sol y la deshidratación. Viajes cortos.',
      'Julio: Vacaciones bien merecidas. Reconéctate con amigos.',
      'Agosto: Regreso a la rutina con nuevas metas.',
      'Septiembre: Mes patrio muy emocional. Cuida tu corazón.',
      'Octubre: Día de Muertos te conecta con tus ancestros.',
      'Noviembre: Oportunidades laborales inesperadas.',
      'Diciembre: Navidad en familia. Cierra el año con gratitud.',
    ],
    suerte: {
      numeros: [9, 18, 27],
      colores: ['Rojo', 'Naranja'],
      dia: 'Martes',
      piedra: 'Diamante',
    },
    consejo: {
      hacer: 'Lánzate a nuevos proyectos. Tu valentía será recompensada.',
      evitar: 'No actúes impulsivamente en asuntos de dinero. Piensa antes de hablar.',
    },
    fraseMexicana: 'El que no arriesga, no gana. ¡Aviéntate!',
  },

  // ♉ Tauro (20 abril - 20 mayo)
  tauro: {
    id: 'tauro',
    nombre: 'Tauro',
    emoji: '♉',
    fechas: '20 de abril - 20 de mayo',
    elemento: 'Tierra',
    palabrasClave: ['Estabilidad', 'Lealtad', 'Prosperidad'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 es tu año para construir cimientos sólidos. La paciencia que has tenido dará frutos. En temas de dinero, prepárate para inversiones inteligentes. El amor será estable y reconfortante. Este año la constancia te llevará lejos.',
    categorias: {
      amor: 'Año de compromiso para las parejas. Los solteros atraerán personas serias y estables. Una relación del pasado podría reaparecer en abril - decide con la cabeza, no solo con el corazón.',
      dinero: 'Excelente año para ahorrar e invertir. Considera bienes raíces o un negocito propio. Evita prestar dinero a familiares en agosto. Diciembre trae bonos y aguinaldos generosos.',
      trabajo: 'Tu esfuerzo será reconocido. Posible cambio de puesto con mejor sueldo. No te conformes con menos de lo que mereces.',
      salud: 'Cuida tu garganta y tiroides. El estrés se manifestará físicamente. Masajes y temazcal te ayudarán. Modera los antojitos nocturnos.',
      familia: 'Armonía en el hogar. Posible mudanza o remodelación. Un nuevo miembro podría llegar a la familia.',
    },
    mensual: [
      'Enero: Planifica tus metas financieras del año.',
      'Febrero: Romance estable. Disfruta los pequeños detalles.',
      'Marzo: Primavera trae renovación. Limpia tu espacio.',
      'Abril: Tu mes de cumpleaños. Consiente tu cuerpo.',
      'Mayo: Día de las Madres muy emotivo. Celebra en grande.',
      'Junio: Oportunidades de inversión. Analiza bien.',
      'Julio: Vacaciones en familia. Playa o campo.',
      'Agosto: Regreso productivo. Nuevos proyectos.',
      'Septiembre: Fiestas patrias en casa. Cocina tradicional.',
      'Octubre: Reflexión y espiritualidad en Día de Muertos.',
      'Noviembre: Buen Fin con cabeza. No gastes de más.',
      'Diciembre: Cierra el año con abundancia y gratitud.',
    ],
    suerte: {
      numeros: [6, 15, 24],
      colores: ['Verde', 'Rosa'],
      dia: 'Viernes',
      piedra: 'Esmeralda',
    },
    consejo: {
      hacer: 'Invierte en tu futuro. La constancia es tu superpoder.',
      evitar: 'No seas tan terco. A veces hay que ceder para avanzar.',
    },
    fraseMexicana: 'Paso a pasito se llega lejos. La paciencia es virtud.',
  },

  // ♊ Géminis (21 mayo - 20 junio)
  geminis: {
    id: 'geminis',
    nombre: 'Géminis',
    emoji: '♊',
    fechas: '21 de mayo - 20 de junio',
    elemento: 'Aire',
    palabrasClave: ['Comunicación', 'Versatilidad', 'Curiosidad'],
    puntuacionSuerte: 5,
    resumenAnual: '¡2025 es TU año, Géminis! Júpiter te bendice con abundancia y oportunidades. Tu don de palabra te abrirá puertas. Nuevos proyectos, viajes y conexiones sociales marcarán este año. Solo cuidado con dispersarte - enfócate en lo importante.',
    categorias: {
      amor: 'Año de conquistas y coqueteos. Los solteros tendrán opciones de sobra. Parejas, cuiden la comunicación y eviten malentendidos por WhatsApp. Una aventura de viaje podría convertirse en amor.',
      dinero: 'Ingresos por múltiples fuentes. Tu creatividad genera dinero. Cuidado con gastos impulsivos en tecnología. Diversifica tus ingresos.',
      trabajo: 'Éxito en comunicación, ventas y redes sociales. Posible cambio de carrera. Tu versatilidad es tu ventaja competitiva.',
      salud: 'Cuida tu sistema nervioso. Ansiedad bajo control con ejercicio. Manos y brazos necesitan atención. Descansa la mente.',
      familia: 'Mucha comunicación familiar - para bien y para mal. Reuniones frecuentes. Un hermano necesitará tu apoyo.',
    },
    mensual: [
      'Enero: Ideas brillantes para el año. Escríbelas.',
      'Febrero: Redes sociales traen amor. Sé auténtico.',
      'Marzo: Viaje corto muy productivo.',
      'Abril: Networking en eventos sociales.',
      'Mayo: Cumpleaños con mucha fiesta y celebración.',
      'Junio: Solsticio de verano muy poderoso para ti.',
      'Julio: Vacaciones con amigos. Nuevas experiencias.',
      'Agosto: Regreso creativo. Nuevos proyectos.',
      'Septiembre: Fiestas patrias muy sociales.',
      'Octubre: Halloween te inspira. Creatividad al máximo.',
      'Noviembre: Oportunidades de negocio.',
      'Diciembre: Posadas muy divertidas. Cierra con alegría.',
    ],
    suerte: {
      numeros: [5, 14, 23],
      colores: ['Amarillo', 'Naranja'],
      dia: 'Miércoles',
      piedra: 'Ágata',
    },
    consejo: {
      hacer: 'Comunica tus ideas. Este año tu voz tiene poder.',
      evitar: 'No empieces mil cosas sin terminar ninguna. Enfócate.',
    },
    fraseMexicana: 'El que mucho abarca, poco aprieta. Enfócate, cuate.',
  },

  // ♋ Cáncer (21 junio - 22 julio)
  cancer: {
    id: 'cancer',
    nombre: 'Cáncer',
    emoji: '♋',
    fechas: '21 de junio - 22 de julio',
    elemento: 'Agua',
    palabrasClave: ['Hogar', 'Intuición', 'Protección'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 se trata de casa y familia para ti, Cáncer. Es año de crear raíces, ya sea comprando casa, renovando tu espacio, o fortaleciendo lazos familiares. Tu intuición estará más fuerte que nunca - confía en ella.',
    categorias: {
      amor: 'Año de profundizar vínculos. Los solteros buscarán algo serio y de hogar. Parejas hablarán de hijos o vivir juntos. El amor se encuentra cerca de casa.',
      dinero: 'Buena época para bienes raíces. Herencias o ayuda familiar posible. Ahorra para emergencias. Cocinar en casa te ahorra mucho.',
      trabajo: 'Trabajar desde casa te favorece. Negocios familiares prosperan. Evita conflictos con compañeros en agosto.',
      salud: 'Cuida tu estómago y digestión. Las emociones afectan tu cuerpo. Comida casera y remedios de la abuela funcionan mejor.',
      familia: 'Centro de tu año. Reuniones importantes. Cuida a tus padres. Posibles nacimientos o bodas en la familia.',
    },
    mensual: [
      'Enero: Propósitos enfocados en familia.',
      'Febrero: San Valentín hogareño y romántico.',
      'Marzo: Limpieza de primavera en casa.',
      'Abril: Semana Santa en familia.',
      'Mayo: Día de las Madres muy especial.',
      'Junio: Tu mes de cumpleaños. Celebra en casa.',
      'Julio: Vacaciones con la familia.',
      'Agosto: Renovaciones o mudanza.',
      'Septiembre: Fiestas patrias en tu casa.',
      'Octubre: Altar de Día de Muertos muy emotivo.',
      'Noviembre: Gratitud por la familia.',
      'Diciembre: Navidad perfecta. Tú como anfitrión.',
    ],
    suerte: {
      numeros: [2, 11, 20],
      colores: ['Blanco', 'Plateado'],
      dia: 'Lunes',
      piedra: 'Perla',
    },
    consejo: {
      hacer: 'Invierte en tu hogar y familia. Es donde está tu felicidad.',
      evitar: 'No te cierres emocionalmente. Expresa lo que sientes.',
    },
    fraseMexicana: 'Como México no hay dos... y como tu familia, tampoco.',
  },

  // ♌ Leo (23 julio - 22 agosto)
  leo: {
    id: 'leo',
    nombre: 'Leo',
    emoji: '♌',
    fechas: '23 de julio - 22 de agosto',
    elemento: 'Fuego',
    palabrasClave: ['Creatividad', 'Brillo', 'Generosidad'],
    puntuacionSuerte: 3,
    resumenAnual: '2025 es año de brillar con luz propia, Leo. Tu creatividad y carisma te abrirán puertas. Es momento de expresarte y dejar tu marca. El reconocimiento que buscas llegará, pero requiere humildad.',
    categorias: {
      amor: 'Año de romance y pasión. Los solteros atraerán admiradores. Parejas, cuidado con el orgullo - a veces hay que pedir perdón primero. Agosto trae propuestas importantes.',
      dinero: 'Gastos en entretenimiento y lujos. Aprende a equilibrar. Inversiones creativas dan frutos. Evita apostar.',
      trabajo: 'Creatividad reconocida. Liderazgo natural. Cuidado con enemigos en el trabajo. Tu talento habla por sí solo.',
      salud: 'Corazón y espalda necesitan atención. Evita el estrés. El sol te energiza pero protege tu piel. Baila más.',
      familia: 'Serás el centro de atención familiar. Ayuda a otros sin esperar nada. Un sobrino te dará alegría.',
    },
    mensual: [
      'Enero: Año nuevo con metas creativas.',
      'Febrero: Romance intenso. Demuestra tu amor.',
      'Marzo: Proyectos creativos arrancan.',
      'Abril: Reconocimiento público.',
      'Mayo: Generosidad con la familia.',
      'Junio: Preparación para tu temporada.',
      'Julio: Tu mes de cumpleaños. ¡A brillar!',
      'Agosto: Cosecha lo sembrado.',
      'Septiembre: Grito de Independencia muy festivo.',
      'Octubre: Halloween es tu fiesta. Disfrázate.',
      'Noviembre: Reflexión sobre logros.',
      'Diciembre: Navidad llena de regalos y amor.',
    ],
    suerte: {
      numeros: [1, 10, 19],
      colores: ['Dorado', 'Naranja'],
      dia: 'Domingo',
      piedra: 'Rubí',
    },
    consejo: {
      hacer: 'Brilla sin miedo. Tu luz inspira a otros.',
      evitar: 'El orgullo excesivo. La humildad también es de reyes.',
    },
    fraseMexicana: 'El que es buen gallo, en cualquier gallinero canta.',
  },

  // ♍ Virgo (23 agosto - 22 septiembre)
  virgo: {
    id: 'virgo',
    nombre: 'Virgo',
    emoji: '♍',
    fechas: '23 de agosto - 22 de septiembre',
    elemento: 'Tierra',
    palabrasClave: ['Orden', 'Análisis', 'Servicio'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 es año de organización y mejora continua, Virgo. Tu capacidad de análisis te llevará al éxito. Es momento de perfeccionar tus habilidades y cuidar tu salud. La disciplina será tu mejor aliada.',
    categorias: {
      amor: 'Año de amor maduro y realista. Los solteros encontrarán pareja en el trabajo o gimnasio. Parejas, trabajen juntos en proyectos. Menos crítica, más comprensión.',
      dinero: 'Orden financiero da resultados. Presupuestos y ahorros funcionan. Un trabajo extra genera buen ingreso. Septiembre trae bonus.',
      trabajo: 'Promociones por eficiencia. Tu organización es admirada. Nuevas responsabilidades. Certificaciones te benefician.',
      salud: 'Año para crear rutinas saludables. Digestión y alimentación son clave. Check-ups regulares. Tu mente necesita descanso.',
      familia: 'Ayudarás a organizar eventos familiares. Un familiar pide consejo. Cuida de no ser tan crítico con los demás.',
    },
    mensual: [
      'Enero: Organiza tu año con método.',
      'Febrero: Amor práctico y real.',
      'Marzo: Limpieza profunda de casa.',
      'Abril: Chequeo médico recomendado.',
      'Mayo: Proyectos laborales avanzan.',
      'Junio: Cuida tu alimentación.',
      'Julio: Vacaciones activas y saludables.',
      'Agosto: Tu mes de cumpleaños. Consiente tu cuerpo.',
      'Septiembre: Fiestas patrias en tu mes. ¡Celebra!',
      'Octubre: Orden espiritual. Día de Muertos significativo.',
      'Noviembre: Evalúa tus logros del año.',
      'Diciembre: Cierra pendientes. Navidad organizada.',
    ],
    suerte: {
      numeros: [5, 14, 23],
      colores: ['Verde oscuro', 'Café'],
      dia: 'Miércoles',
      piedra: 'Zafiro',
    },
    consejo: {
      hacer: 'Perfecciona tus habilidades. Tu atención al detalle es invaluable.',
      evitar: 'No seas tan duro contigo mismo. Lo perfecto es enemigo de lo bueno.',
    },
    fraseMexicana: 'El que persevera, alcanza. Sigue con tu método.',
  },

  // ♎ Libra (23 septiembre - 22 octubre)
  libra: {
    id: 'libra',
    nombre: 'Libra',
    emoji: '♎',
    fechas: '23 de septiembre - 22 de octubre',
    elemento: 'Aire',
    palabrasClave: ['Equilibrio', 'Armonía', 'Justicia'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 es año de relaciones y equilibrio, Libra. Encontrar balance será tu objetivo. Asociaciones importantes en lo personal y profesional. Tu sentido de justicia te guiará. El amor será protagonista.',
    categorias: {
      amor: 'Año de compromisos y alianzas. Bodas, noviazgos formales, y relaciones que avanzan. Los solteros encontrarán su media naranja. Cuida la armonía en pareja.',
      dinero: 'Asociaciones financieras favorables. Negociaciones exitosas. Evita desequilibrios - no gastes más de lo que ganas. Arte y belleza son buenas inversiones.',
      trabajo: 'Trabajo en equipo destacado. Mediador natural. Contratos importantes. Justicia en tu ambiente laboral.',
      salud: 'Equilibrio es la clave. Riñones y espalda baja necesitan atención. Yoga y meditación te ayudan. Evita excesos de cualquier tipo.',
      familia: 'Armonía familiar. Resolverás conflictos entre parientes. Eventos sociales importantes. Tu diplomacia será necesaria.',
    },
    mensual: [
      'Enero: Busca equilibrio en tus propósitos.',
      'Febrero: San Valentín muy especial. Celebra el amor.',
      'Marzo: Negociaciones favorables.',
      'Abril: Armoniza tu espacio.',
      'Mayo: Relaciones laborales mejoran.',
      'Junio: Cuida tu pareja.',
      'Julio: Vacaciones románticas.',
      'Agosto: Decisiones importantes.',
      'Septiembre: Tu mes de cumpleaños comienza.',
      'Octubre: Cumpleaños y celebraciones. Día de Muertos significativo.',
      'Noviembre: Gratitud por tus relaciones.',
      'Diciembre: Navidad en pareja o con amigos cercanos.',
    ],
    suerte: {
      numeros: [6, 15, 24],
      colores: ['Rosa', 'Azul cielo'],
      dia: 'Viernes',
      piedra: 'Ópalo',
    },
    consejo: {
      hacer: 'Cultiva tus relaciones. Las alianzas te fortalecen.',
      evitar: 'La indecisión. A veces hay que elegir un camino.',
    },
    fraseMexicana: 'Ni tanto que queme al santo, ni tanto que no lo alumbre.',
  },

  // ♏ Escorpio (23 octubre - 21 noviembre)
  escorpio: {
    id: 'escorpio',
    nombre: 'Escorpio',
    emoji: '♏',
    fechas: '23 de octubre - 21 de noviembre',
    elemento: 'Agua',
    palabrasClave: ['Transformación', 'Intensidad', 'Poder'],
    puntuacionSuerte: 3,
    resumenAnual: '2025 es año de transformación profunda, Escorpio. Plutón te pide soltar lo viejo para renacer. Será intenso pero poderoso. Los cambios que resistas serán los que más necesitas. Confía en tu capacidad de regeneración.',
    categorias: {
      amor: 'Relaciones intensas y transformadoras. Los solteros vivirán pasiones profundas. Parejas enfrentarán verdades - para fortalecerse o terminar. Conexiones kármicas.',
      dinero: 'Herencias, seguros, o dinero de otros. Inversiones arriesgadas pueden funcionar si confías en tu instinto. Paga deudas del pasado.',
      trabajo: 'Cambios laborales profundos. Reinvención profesional posible. Tu capacidad investigativa es valiosa. Cuidado con enemigos ocultos.',
      salud: 'Órganos reproductivos y eliminación necesitan atención. Desintoxicación recomendada. Terapia psicológica muy beneficiosa. Libera emociones.',
      familia: 'Secretos familiares salen a la luz. Sanación de heridas antiguas. Día de Muertos muy poderoso. Conexión con ancestros.',
    },
    mensual: [
      'Enero: Año de transformación comienza.',
      'Febrero: Pasión intensa en el amor.',
      'Marzo: Libera lo que ya no sirve.',
      'Abril: Renacimiento espiritual.',
      'Mayo: Secretos revelados.',
      'Junio: Sanación emocional.',
      'Julio: Vacaciones introspectivas.',
      'Agosto: Preparación para tu temporada.',
      'Septiembre: Intensidad emocional.',
      'Octubre: Tu cumpleaños comienza. Día de Muertos es tu momento.',
      'Noviembre: Cumpleaños y transformación. Renaces.',
      'Diciembre: Cierra ciclos. Navidad significativa.',
    ],
    suerte: {
      numeros: [8, 17, 26],
      colores: ['Negro', 'Rojo oscuro'],
      dia: 'Martes',
      piedra: 'Topacio',
    },
    consejo: {
      hacer: 'Suelta para renacer. Tu poder está en la transformación.',
      evitar: 'Los rencores. Perdonar te libera a ti, no al otro.',
    },
    fraseMexicana: 'Lo que no te mata, te hace más fuerte. Renuévate.',
  },

  // ♐ Sagitario (22 noviembre - 21 diciembre)
  sagitario: {
    id: 'sagitario',
    nombre: 'Sagitario',
    emoji: '♐',
    fechas: '22 de noviembre - 21 de diciembre',
    elemento: 'Fuego',
    palabrasClave: ['Aventura', 'Optimismo', 'Filosofía'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 es año de expansión y aventura, Sagitario. Viajes, estudios y nuevas experiencias marcarán tu año. Tu optimismo natural te abrirá puertas. Es momento de soñar en grande y actuar en consecuencia.',
    categorias: {
      amor: 'Romances de viaje y aventura. Los solteros encontrarán amor en lugares lejanos o con personas de otra cultura. Parejas necesitan espacio y aventuras juntos.',
      dinero: 'Suerte en juegos y especulación. Ingresos por conocimiento o viajes. Cuidado con gastar todo en experiencias. Inversiones internacionales.',
      trabajo: 'Oportunidades en el extranjero. Educación y publicaciones. Tu visión a largo plazo es valorada. Expande tus horizontes.',
      salud: 'Caderas y muslos necesitan ejercicio. Viajes te energizan. Cuidado con excesos de comida en el extranjero. Optimismo sana.',
      familia: 'Familia política o lejana importante. Eventos que unen culturas. Enseñas a otros tu filosofía de vida.',
    },
    mensual: [
      'Enero: Planea viajes y aventuras del año.',
      'Febrero: Amor filosófico y profundo.',
      'Marzo: Aprende algo nuevo.',
      'Abril: Semana Santa viajera.',
      'Mayo: Conexiones internacionales.',
      'Junio: Verano de aventuras.',
      'Julio: Vacaciones en grande.',
      'Agosto: Expansión de conocimiento.',
      'Septiembre: Fiestas patrias con significado.',
      'Octubre: Filosofía sobre la vida y muerte.',
      'Noviembre: Tu cumpleaños comienza. ¡A celebrar!',
      'Diciembre: Cumpleaños y Navidad. Doble celebración.',
    ],
    suerte: {
      numeros: [3, 12, 21],
      colores: ['Morado', 'Turquesa'],
      dia: 'Jueves',
      piedra: 'Turquesa',
    },
    consejo: {
      hacer: 'Viaja y expande tu mente. El mundo es tu escuela.',
      evitar: 'Prometer más de lo que puedes cumplir. Sé realista.',
    },
    fraseMexicana: 'El que busca, encuentra. Sal a explorar el mundo.',
  },

  // ♑ Capricornio (22 diciembre - 19 enero)
  capricornio: {
    id: 'capricornio',
    nombre: 'Capricornio',
    emoji: '♑',
    fechas: '22 de diciembre - 19 de enero',
    elemento: 'Tierra',
    palabrasClave: ['Ambición', 'Disciplina', 'Éxito'],
    puntuacionSuerte: 5,
    resumenAnual: '2025 es TU año de cosecha, Capricornio. Plutón finalmente sale de tu signo y te libera de presiones. Los años de trabajo duro dan frutos. Reconocimiento profesional y personal. Tu momento ha llegado.',
    categorias: {
      amor: 'Año de estabilidad amorosa. Los solteros encontrarán parejas serias y comprometidas. Matrimonios o compromisos formales. El amor madura como buen vino.',
      dinero: 'Excelente año financiero. Promociones, aumentos, y reconocimiento. Inversiones a largo plazo. Tu paciencia financiera da resultados.',
      trabajo: 'Cima de tu carrera. Posiciones de liderazgo. Tu reputación te precede. Logros que has trabajado por años.',
      salud: 'Huesos, rodillas y dientes necesitan atención. El estrés disminuye finalmente. Ejercicio moderado y constante. Tu cuerpo agradece la rutina.',
      familia: 'Eres el pilar familiar. Herencias o responsabilidades familiares. Orgullo por tus logros. Celebraciones importantes.',
    },
    mensual: [
      'Enero: Tu cumpleaños trae éxito. Celebra tus logros.',
      'Febrero: Amor estable y maduro.',
      'Marzo: Proyectos profesionales avanzan.',
      'Abril: Reconocimiento público.',
      'Mayo: Inversiones inteligentes.',
      'Junio: Descanso merecido.',
      'Julio: Vacaciones bien planeadas.',
      'Agosto: Regreso productivo.',
      'Septiembre: Liderazgo en fiestas patrias.',
      'Octubre: Reflexión sobre logros.',
      'Noviembre: Preparación para fin de año.',
      'Diciembre: Cumpleaños y Navidad. Cierre perfecto.',
    ],
    suerte: {
      numeros: [4, 13, 22],
      colores: ['Negro', 'Gris oscuro'],
      dia: 'Sábado',
      piedra: 'Granate',
    },
    consejo: {
      hacer: 'Disfruta tus logros. Te los has ganado.',
      evitar: 'Trabajar sin descanso. También necesitas vivir.',
    },
    fraseMexicana: 'Al que madruga, Dios lo ayuda. Y tú ya madrugaste.',
  },

  // ♒ Acuario (20 enero - 18 febrero)
  acuario: {
    id: 'acuario',
    nombre: 'Acuario',
    emoji: '♒',
    fechas: '20 de enero - 18 de febrero',
    elemento: 'Aire',
    palabrasClave: ['Innovación', 'Libertad', 'Humanitarismo'],
    puntuacionSuerte: 5,
    resumenAnual: '¡2025 es revolucionario para ti, Acuario! Plutón entra a tu signo y comienza una era de transformación. Eres el signo del futuro y este año lo demostrarás. Innovación, tecnología y cambio social serán tus temas.',
    categorias: {
      amor: 'Relaciones poco convencionales. Los solteros encontrarán amor en línea o comunidades alternativas. Parejas necesitan libertad. Amor que respeta la individualidad.',
      dinero: 'Ingresos por tecnología e innovación. Criptomonedas o inversiones futuristas. Crowdfunding funciona. Dinero viene de fuentes no tradicionales.',
      trabajo: 'Tecnología, startups y causas sociales. Trabajo remoto y flexible. Tu visión del futuro es valorada. Lidera el cambio.',
      salud: 'Sistema nervioso y tobillos necesitan atención. Desconexión digital necesaria. Tecnología de salud te ayuda. Métodos alternativos funcionan.',
      familia: 'Familia elegida tan importante como la de sangre. Cambios en tradiciones. Ayudas a otros a ser más abiertos.',
    },
    mensual: [
      'Enero: Tu cumpleaños inicia revolución personal.',
      'Febrero: Cumpleaños y San Valentín único.',
      'Marzo: Innovaciones en marcha.',
      'Abril: Tecnología y futuro.',
      'Mayo: Comunidades y amigos importantes.',
      'Junio: Causas sociales te llaman.',
      'Julio: Vacaciones diferentes y únicas.',
      'Agosto: Proyectos innovadores.',
      'Septiembre: Fiestas patrias con toque moderno.',
      'Octubre: Reflexión sobre el futuro.',
      'Noviembre: Conexiones globales.',
      'Diciembre: Navidad alternativa. Tu estilo único.',
    ],
    suerte: {
      numeros: [7, 16, 25],
      colores: ['Azul eléctrico', 'Plateado'],
      dia: 'Sábado',
      piedra: 'Amatista',
    },
    consejo: {
      hacer: 'Sé el cambio que quieres ver. El futuro te pertenece.',
      evitar: 'Ser tan diferente que te aísles. Necesitas comunidad.',
    },
    fraseMexicana: 'Renovarse o morir. Tú ya elegiste renovarte.',
  },

  // ♓ Piscis (19 febrero - 20 marzo)
  piscis: {
    id: 'piscis',
    nombre: 'Piscis',
    emoji: '♓',
    fechas: '19 de febrero - 20 de marzo',
    elemento: 'Agua',
    palabrasClave: ['Intuición', 'Compasión', 'Sueños'],
    puntuacionSuerte: 4,
    resumenAnual: '2025 es año de espiritualidad y creatividad, Piscis. Saturno te da estructura a tus sueños. Es momento de manifestar tus visiones. Tu intuición será tu guía más confiable. Arte, música y espiritualidad florecen.',
    categorias: {
      amor: 'Amor de película romántica. Los solteros encontrarán almas gemelas. Parejas profundizan su conexión espiritual. Cuidado con idealizar - ve la realidad también.',
      dinero: 'Creatividad genera ingresos. Arte, música, fotografía. Intuición financiera acertada. Cuidado con estafas - verifica todo.',
      trabajo: 'Carreras artísticas y espirituales prosperan. Ayuda a otros como profesión. Tu compasión es tu fortaleza. Trabaja tus sueños.',
      salud: 'Pies y sistema linfático necesitan atención. El agua te sana - nada, baños, playa. Cuidado con sustancias. Meditación es medicina.',
      familia: 'Conectas emocionalmente con todos. Sanas heridas familiares. Un ancestro te guía desde el más allá.',
    },
    mensual: [
      'Enero: Año nuevo con intuición fuerte.',
      'Febrero: Tu cumpleaños comienza. Amor romántico.',
      'Marzo: Cumpleaños y primavera. Renaces.',
      'Abril: Espiritualidad en Semana Santa.',
      'Mayo: Creatividad en su punto más alto.',
      'Junio: Verano soñador.',
      'Julio: Vacaciones cerca del agua.',
      'Agosto: Manifestación de sueños.',
      'Septiembre: Intuición sobre el país.',
      'Octubre: Día de Muertos muy espiritual.',
      'Noviembre: Conexión con el más allá.',
      'Diciembre: Navidad mágica y espiritual.',
    ],
    suerte: {
      numeros: [7, 12, 21],
      colores: ['Aguamarina', 'Lavanda'],
      dia: 'Jueves',
      piedra: 'Aguamarina',
    },
    consejo: {
      hacer: 'Confía en tu intuición. Tus sueños son mensajes.',
      evitar: 'Escapar de la realidad. Enfrenta lo que hay que enfrentar.',
    },
    fraseMexicana: 'Soñar no cuesta nada... pero manifestar sí requiere acción.',
  },
};

// Funciones de utilidad
export function getHoroscopo(signo: SignoZodiaco): HoroscopoData {
  return HOROSCOPOS_2025[signo];
}

export function getSignoByFecha(mes: number, dia: number): SignoZodiaco {
  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'aries';
  if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'tauro';
  if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'geminis';
  if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'cancer';
  if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'leo';
  if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'virgo';
  if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'libra';
  if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'escorpio';
  if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'sagitario';
  if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'capricornio';
  if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'acuario';
  return 'piscis';
}

export function getAllSignos(): SignoZodiaco[] {
  return ['aries', 'tauro', 'geminis', 'cancer', 'leo', 'virgo', 
          'libra', 'escorpio', 'sagitario', 'capricornio', 'acuario', 'piscis'];
}
