// Mexican Spanish Test Data (Datos de Tests en Español Mexicano)
// 멕시코 테스트 메타데이터
// Auto-generated: 2024-12-05
// Total: 300 tests (50 personality + 60 psychology + 50 relationship + 45 career + 80 fun + 15 iq)

export interface TestEsMX {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  categoryId: string;
  thumbnailUrl?: string;
  questionCount: number;
  estimatedTime: number;
  participantCount: number;
  tags: string[];
  createdAt: string;
}

export interface CategoryEsMX {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const categoriesEsMX: CategoryEsMX[] = [
  {
    id: 'personality',
    name: 'Personalidad',
    slug: 'personality',
    description: 'Descubre tu personalidad',
    icon: 'Brain',
    color: 'purple',
  },
  {
    id: 'psychology',
    name: 'Psicología',
    slug: 'psychology',
    description: 'Comprende tu mente a profundidad',
    icon: 'Heart',
    color: 'blue',
  },
  {
    id: 'relationship',
    name: 'Relaciones',
    slug: 'relationship',
    description: 'Tests sobre amor y relaciones',
    icon: 'Users',
    color: 'pink',
  },
  {
    id: 'career',
    name: 'Carrera',
    slug: 'career',
    description: 'Descubre tu potencial profesional',
    icon: 'Briefcase',
    color: 'green',
  },
  {
    id: 'fun',
    name: 'Diversión',
    slug: 'fun',
    description: 'Tests divertidos y entretenidos',
    icon: 'Sparkles',
    color: 'yellow',
  },
  {
    id: 'iq',
    name: 'CI/Cerebro',
    slug: 'iq',
    description: 'Pon a prueba tu inteligencia',
    icon: 'Lightbulb',
    color: 'orange',
  },
];

// Personality Tests (personalidad-) - 50 tests
const personalidadTests = [
  'personalidad-abuelos', 'personalidad-amigos', 'personalidad-amor', 'personalidad-antojo', 'personalidad-bautizo',
  'personalidad-boda-mx', 'personalidad-cafe-mx', 'personalidad-cantina', 'personalidad-cena-mx', 'personalidad-comida',
  'personalidad-compadres', 'personalidad-cunados', 'personalidad-desayuno-mx', 'personalidad-dia-muertos', 'personalidad-dinero',
  'personalidad-domingo-mx', 'personalidad-familia', 'personalidad-fiesta', 'personalidad-fiestas-patrias', 'personalidad-futbol',
  'personalidad-hermanos', 'personalidad-lucha-libre', 'personalidad-lunes-mx', 'personalidad-mama', 'personalidad-manana',
  'personalidad-mercado', 'personalidad-musica', 'personalidad-navidad-mx', 'personalidad-novela', 'personalidad-oxxo',
  'personalidad-papa', 'personalidad-parrillada', 'personalidad-playa', 'personalidad-posada', 'personalidad-primos',
  'personalidad-puente', 'personalidad-pulqueria', 'personalidad-quinceanera', 'personalidad-suegros', 'personalidad-taco',
  'personalidad-tequila', 'personalidad-tianguis', 'personalidad-tiempo', 'personalidad-tios', 'personalidad-trabajo',
  'personalidad-trafico', 'personalidad-transporte', 'personalidad-vacaciones-mx', 'personalidad-vecindad', 'personalidad-viaje'
];

// Psychology Tests (psico-) - 60 tests
const psicoTests = [
  'psico-abandono', 'psico-aceptacion', 'psico-adiccion', 'psico-ansiedad', 'psico-apego',
  'psico-asertividad', 'psico-autocritica', 'psico-autoestima', 'psico-autopercepcion', 'psico-cambio',
  'psico-celos', 'psico-codependencia', 'psico-comparacion', 'psico-comunicacion', 'psico-confianza',
  'psico-conflicto', 'psico-control', 'psico-crianza', 'psico-culpa', 'psico-dependencia',
  'psico-depresion', 'psico-desapego', 'psico-duelo', 'psico-emociones', 'psico-empatia',
  'psico-enojo', 'psico-equilibrio', 'psico-estres', 'psico-familia', 'psico-felicidad',
  'psico-fobia', 'psico-gratitud', 'psico-identidad', 'psico-impulsividad', 'psico-infancia',
  'psico-introversion', 'psico-limites', 'psico-madurez', 'psico-manipulacion', 'psico-miedo',
  'psico-motivacion', 'psico-narcisismo', 'psico-necesidades', 'psico-obsesion', 'psico-optimismo',
  'psico-paciencia', 'psico-perdon', 'psico-perfeccion', 'psico-procrastinacion', 'psico-proposito',
  'psico-rechazo', 'psico-relaciones', 'psico-resiliencia', 'psico-rumia', 'psico-sabotaje',
  'psico-soledad', 'psico-sombra', 'psico-toxicidad', 'psico-trauma', 'psico-vulnerabilidad'
];

// Relationship Tests (relacion-) - 50 tests
const relacionTests = [
  'relacion-amistad', 'relacion-amor', 'relacion-amor-propio', 'relacion-aniversario', 'relacion-apoyo',
  'relacion-boda', 'relacion-celos', 'relacion-cita', 'relacion-compadres', 'relacion-compatibilidad',
  'relacion-compromiso', 'relacion-compromiso-mx', 'relacion-comunicacion', 'relacion-confianza', 'relacion-consentimiento',
  'relacion-convivencia', 'relacion-crecimiento', 'relacion-crianza', 'relacion-deseo', 'relacion-detalle',
  'relacion-distancia', 'relacion-espacio', 'relacion-ex', 'relacion-expectativas', 'relacion-familia',
  'relacion-fidelidad', 'relacion-finanzas', 'relacion-hijos', 'relacion-independencia', 'relacion-intimidad',
  'relacion-lealtad', 'relacion-limites', 'relacion-maduracion', 'relacion-metas', 'relacion-novio-ideal',
  'relacion-pareja', 'relacion-pasion', 'relacion-pelea', 'relacion-perdon', 'relacion-prioridades',
  'relacion-reconciliacion', 'relacion-redes', 'relacion-respeto', 'relacion-responsabilidad', 'relacion-romanticismo',
  'relacion-rutina', 'relacion-suegros', 'relacion-tiempo', 'relacion-tradiciones', 'relacion-valores'
];

// Career Tests (trabajo-) - 45 tests
const trabajoTests = [
  'trabajo-adaptabilidad', 'trabajo-aprendizaje', 'trabajo-aptitud', 'trabajo-ascenso', 'trabajo-balance',
  'trabajo-burnout', 'trabajo-cambio-carrera', 'trabajo-capacitacion', 'trabajo-colega', 'trabajo-comunicacion',
  'trabajo-conflictos', 'trabajo-corporativo', 'trabajo-creatividad', 'trabajo-delegacion', 'trabajo-emprendedor',
  'trabajo-entrevista', 'trabajo-equipo', 'trabajo-estres', 'trabajo-etica', 'trabajo-feedback',
  'trabajo-finanzas', 'trabajo-freelance', 'trabajo-gobierno', 'trabajo-innovacion', 'trabajo-jefe',
  'trabajo-jubilacion', 'trabajo-liderazgo', 'trabajo-marketing', 'trabajo-mentorias', 'trabajo-motivacion',
  'trabajo-negociacion', 'trabajo-networking', 'trabajo-organizacion', 'trabajo-presentacion', 'trabajo-productividad',
  'trabajo-remoto', 'trabajo-resiliencia', 'trabajo-rrhh', 'trabajo-salario', 'trabajo-servicio-cliente',
  'trabajo-startup', 'trabajo-tecnologia', 'trabajo-toma-decisiones', 'trabajo-ventas', 'trabajo-vocacion'
];

// Fun Tests (diversion-) - 80 tests
const diversionTests = [
  'diversion-aguas-frescas', 'diversion-albur', 'diversion-antojito', 'diversion-atole', 'diversion-baile-mx',
  'diversion-bebida-mx', 'diversion-bici-mx', 'diversion-botanero', 'diversion-cafe-olla', 'diversion-cantina-mx',
  'diversion-carretera-mx', 'diversion-central-camiones', 'diversion-cerveza-mx', 'diversion-chamoy', 'diversion-chile',
  'diversion-chisme-mx', 'diversion-churros-mx', 'diversion-ciudad-mx', 'diversion-compadre', 'diversion-crudas',
  'diversion-cuate', 'diversion-desveladas', 'diversion-dia-muertos', 'diversion-dichos-mx', 'diversion-elote',
  'diversion-esquite', 'diversion-estado-mx', 'diversion-familia-mx', 'diversion-fiestas-patrias', 'diversion-fonda',
  'diversion-futbol-mx', 'diversion-garnachas', 'diversion-gato-mx', 'diversion-godinez', 'diversion-grito',
  'diversion-home-office-mx', 'diversion-lucha-libre', 'diversion-lunes-mx', 'diversion-madrugador', 'diversion-mariachi',
  'diversion-mascota-mx', 'diversion-meme-mx', 'diversion-mercado-mx', 'diversion-metro-cdmx', 'diversion-mezcal',
  'diversion-michelada', 'diversion-musica-mx', 'diversion-navidad-mx', 'diversion-noctambulo', 'diversion-novela',
  'diversion-oficina-mx', 'diversion-pan-dulce', 'diversion-peaton-mx', 'diversion-perro-callejero', 'diversion-piropo',
  'diversion-playa-mx', 'diversion-ponche', 'diversion-posada', 'diversion-postre-mx', 'diversion-pueblo-magico',
  'diversion-puente-mx', 'diversion-puesto-mx', 'diversion-quincena', 'diversion-regano-mx', 'diversion-salsa',
  'diversion-taco', 'diversion-tamal', 'diversion-taqueria', 'diversion-taxista-mx', 'diversion-tepache',
  'diversion-tianguis-mx', 'diversion-tienda', 'diversion-tiktoker-mx', 'diversion-torta', 'diversion-trafico-mx',
  'diversion-transporte-mx', 'diversion-uber-mx', 'diversion-vacacionista', 'diversion-vecino-mx', 'diversion-viernes-mx'
];

// IQ Tests (inteligencia-) - 15 tests
const inteligenciaTests = [
  'inteligencia-analisis', 'inteligencia-concentracion', 'inteligencia-creativa', 'inteligencia-cultural', 'inteligencia-emocional',
  'inteligencia-espacial', 'inteligencia-logica', 'inteligencia-matematica', 'inteligencia-memoria', 'inteligencia-observacion',
  'inteligencia-patron', 'inteligencia-problema', 'inteligencia-razonamiento', 'inteligencia-velocidad', 'inteligencia-verbal'
];

// Spanish titles mapping
const spanishTitles: Record<string, string> = {
  // Personalidad
  'personalidad-abuelos': 'Relación con los Abuelos',
  'personalidad-amigos': 'Estilo de Amistad',
  'personalidad-amor': 'Estilo de Amor',
  'personalidad-antojo': 'Personalidad de Antojos',
  'personalidad-bautizo': 'Personalidad en Bautizos',
  'personalidad-boda-mx': 'Personalidad en Bodas',
  'personalidad-cafe-mx': 'Personalidad Cafetera',
  'personalidad-cantina': 'Personalidad de Cantina',
  'personalidad-cena-mx': 'Personalidad en la Cena',
  'personalidad-comida': 'Personalidad Gastronómica',
  'personalidad-compadres': 'Relación con Compadres',
  'personalidad-cunados': 'Relación con Cuñados',
  'personalidad-desayuno-mx': 'Personalidad del Desayuno',
  'personalidad-dia-muertos': 'Personalidad Día de Muertos',
  'personalidad-dinero': 'Personalidad Financiera',
  'personalidad-domingo-mx': 'Personalidad Dominguera',
  'personalidad-familia': 'Personalidad Familiar',
  'personalidad-fiesta': 'Personalidad Fiestera',
  'personalidad-fiestas-patrias': 'Personalidad Patriótica',
  'personalidad-futbol': 'Personalidad Futbolera',
  'personalidad-hermanos': 'Relación con Hermanos',
  'personalidad-lucha-libre': 'Personalidad Luchadora',
  'personalidad-lunes-mx': 'Personalidad del Lunes',
  'personalidad-mama': 'Relación con Mamá',
  'personalidad-manana': 'Personalidad Matutina',
  'personalidad-mercado': 'Personalidad de Mercado',
  'personalidad-musica': 'Personalidad Musical',
  'personalidad-navidad-mx': 'Personalidad Navideña',
  'personalidad-novela': 'Personalidad de Novela',
  'personalidad-oxxo': 'Personalidad de OXXO',
  'personalidad-papa': 'Relación con Papá',
  'personalidad-parrillada': 'Personalidad de Parrillada',
  'personalidad-playa': 'Personalidad Playera',
  'personalidad-posada': 'Personalidad de Posada',
  'personalidad-primos': 'Relación con Primos',
  'personalidad-puente': 'Personalidad de Puente',
  'personalidad-pulqueria': 'Personalidad de Pulquería',
  'personalidad-quinceanera': 'Personalidad en XV Años',
  'personalidad-suegros': 'Relación con Suegros',
  'personalidad-taco': 'Personalidad Taquera',
  'personalidad-tequila': 'Personalidad Tequilera',
  'personalidad-tianguis': 'Personalidad de Tianguis',
  'personalidad-tiempo': 'Manejo del Tiempo',
  'personalidad-tios': 'Relación con Tíos',
  'personalidad-trabajo': 'Personalidad Laboral',
  'personalidad-trafico': 'Personalidad en el Tráfico',
  'personalidad-transporte': 'Personalidad de Transporte',
  'personalidad-vacaciones-mx': 'Personalidad Vacacionista',
  'personalidad-vecindad': 'Personalidad Vecinal',
  'personalidad-viaje': 'Personalidad Viajera',

  // Psicología
  'psico-abandono': 'Miedo al Abandono',
  'psico-aceptacion': 'Nivel de Aceptación',
  'psico-adiccion': 'Tendencias Adictivas',
  'psico-ansiedad': 'Nivel de Ansiedad',
  'psico-apego': 'Estilo de Apego',
  'psico-asertividad': 'Nivel de Asertividad',
  'psico-autocritica': 'Nivel de Autocrítica',
  'psico-autoestima': 'Nivel de Autoestima',
  'psico-autopercepcion': 'Autopercepción',
  'psico-cambio': 'Adaptación al Cambio',
  'psico-celos': 'Nivel de Celos',
  'psico-codependencia': 'Tendencia Codependiente',
  'psico-comparacion': 'Comparación Social',
  'psico-comunicacion': 'Estilo de Comunicación',
  'psico-confianza': 'Nivel de Confianza',
  'psico-conflicto': 'Manejo de Conflictos',
  'psico-control': 'Necesidad de Control',
  'psico-crianza': 'Estilo de Crianza',
  'psico-culpa': 'Sentimiento de Culpa',
  'psico-dependencia': 'Dependencia Emocional',
  'psico-depresion': 'Indicadores de Depresión',
  'psico-desapego': 'Capacidad de Desapego',
  'psico-duelo': 'Proceso de Duelo',
  'psico-emociones': 'Gestión Emocional',
  'psico-empatia': 'Nivel de Empatía',
  'psico-enojo': 'Manejo del Enojo',
  'psico-equilibrio': 'Equilibrio Emocional',
  'psico-estres': 'Nivel de Estrés',
  'psico-familia': 'Dinámica Familiar',
  'psico-felicidad': 'Índice de Felicidad',
  'psico-fobia': 'Tipos de Fobias',
  'psico-gratitud': 'Nivel de Gratitud',
  'psico-identidad': 'Identidad Personal',
  'psico-impulsividad': 'Nivel de Impulsividad',
  'psico-infancia': 'Heridas de Infancia',
  'psico-introversion': 'Introversión/Extroversión',
  'psico-limites': 'Establecer Límites',
  'psico-madurez': 'Madurez Emocional',
  'psico-manipulacion': 'Detector de Manipulación',
  'psico-miedo': 'Tipos de Miedos',
  'psico-motivacion': 'Fuentes de Motivación',
  'psico-narcisismo': 'Rasgos Narcisistas',
  'psico-necesidades': 'Necesidades Emocionales',
  'psico-obsesion': 'Tendencias Obsesivas',
  'psico-optimismo': 'Nivel de Optimismo',
  'psico-paciencia': 'Nivel de Paciencia',
  'psico-perdon': 'Capacidad de Perdón',
  'psico-perfeccion': 'Perfeccionismo',
  'psico-procrastinacion': 'Procrastinación',
  'psico-proposito': 'Propósito de Vida',
  'psico-rechazo': 'Miedo al Rechazo',
  'psico-relaciones': 'Patrones Relacionales',
  'psico-resiliencia': 'Resiliencia',
  'psico-rumia': 'Rumiación Mental',
  'psico-sabotaje': 'Auto-sabotaje',
  'psico-soledad': 'Nivel de Soledad',
  'psico-sombra': 'Sombra Psicológica',
  'psico-toxicidad': 'Relaciones Tóxicas',
  'psico-trauma': 'Procesamiento de Trauma',
  'psico-vulnerabilidad': 'Vulnerabilidad',

  // Relaciones
  'relacion-amistad': 'Estilo de Amistad',
  'relacion-amor': 'Lenguaje del Amor',
  'relacion-amor-propio': 'Amor Propio',
  'relacion-aniversario': 'Estilo de Aniversario',
  'relacion-apoyo': 'Dar y Recibir Apoyo',
  'relacion-boda': 'Estilo de Boda',
  'relacion-celos': 'Manejo de Celos',
  'relacion-cita': 'Estilo de Citas',
  'relacion-compadres': 'Relación con Compadres',
  'relacion-compatibilidad': 'Compatibilidad de Pareja',
  'relacion-compromiso': 'Nivel de Compromiso',
  'relacion-compromiso-mx': 'Compromiso a la Mexicana',
  'relacion-comunicacion': 'Comunicación en Pareja',
  'relacion-confianza': 'Confianza en Pareja',
  'relacion-consentimiento': 'Entendimiento del Consentimiento',
  'relacion-convivencia': 'Estilo de Convivencia',
  'relacion-crecimiento': 'Crecimiento en Pareja',
  'relacion-crianza': 'Estilo de Crianza',
  'relacion-deseo': 'Expresión del Deseo',
  'relacion-detalle': 'Personalidad Detallista',
  'relacion-distancia': 'Relación a Distancia',
  'relacion-espacio': 'Necesidad de Espacio',
  'relacion-ex': 'Relación con el Ex',
  'relacion-expectativas': 'Expectativas de Pareja',
  'relacion-familia': 'Familia Política',
  'relacion-fidelidad': 'Fidelidad',
  'relacion-finanzas': 'Finanzas en Pareja',
  'relacion-hijos': 'Perspectiva sobre Hijos',
  'relacion-independencia': 'Independencia en Pareja',
  'relacion-intimidad': 'Estilo de Intimidad',
  'relacion-lealtad': 'Lealtad',
  'relacion-limites': 'Límites Saludables',
  'relacion-maduracion': 'Maduración en Pareja',
  'relacion-metas': 'Metas en Común',
  'relacion-novio-ideal': 'Pareja Ideal',
  'relacion-pareja': 'Dinámica de Pareja',
  'relacion-pasion': 'Pasión en la Relación',
  'relacion-pelea': 'Estilo de Pelea',
  'relacion-perdon': 'Perdón en Pareja',
  'relacion-prioridades': 'Prioridades en Pareja',
  'relacion-reconciliacion': 'Estilo de Reconciliación',
  'relacion-redes': 'Redes Sociales y Pareja',
  'relacion-respeto': 'Respeto Mutuo',
  'relacion-responsabilidad': 'Responsabilidad Compartida',
  'relacion-romanticismo': 'Nivel de Romanticismo',
  'relacion-rutina': 'Rutina de Pareja',
  'relacion-suegros': 'Relación con Suegros',
  'relacion-tiempo': 'Tiempo de Calidad',
  'relacion-tradiciones': 'Tradiciones de Pareja',
  'relacion-valores': 'Valores en Común',

  // Trabajo
  'trabajo-adaptabilidad': 'Adaptabilidad Laboral',
  'trabajo-aprendizaje': 'Estilo de Aprendizaje',
  'trabajo-aptitud': 'Aptitud Profesional',
  'trabajo-ascenso': 'Preparación para Ascenso',
  'trabajo-balance': 'Balance Vida-Trabajo',
  'trabajo-burnout': 'Nivel de Burnout',
  'trabajo-cambio-carrera': 'Cambio de Carrera',
  'trabajo-capacitacion': 'Disposición a Capacitarse',
  'trabajo-colega': 'Tipo de Colega',
  'trabajo-comunicacion': 'Comunicación Laboral',
  'trabajo-conflictos': 'Manejo de Conflictos',
  'trabajo-corporativo': 'Aptitud Corporativa',
  'trabajo-creatividad': 'Creatividad Laboral',
  'trabajo-delegacion': 'Capacidad de Delegar',
  'trabajo-emprendedor': 'Perfil Emprendedor',
  'trabajo-entrevista': 'Estilo de Entrevista',
  'trabajo-equipo': 'Trabajo en Equipo',
  'trabajo-estres': 'Estrés Laboral',
  'trabajo-etica': 'Ética Profesional',
  'trabajo-feedback': 'Recibir Retroalimentación',
  'trabajo-finanzas': 'Finanzas Laborales',
  'trabajo-freelance': 'Aptitud Freelance',
  'trabajo-gobierno': 'Aptitud para Gobierno',
  'trabajo-innovacion': 'Capacidad de Innovación',
  'trabajo-jefe': 'Tipo de Jefe',
  'trabajo-jubilacion': 'Preparación para Jubilación',
  'trabajo-liderazgo': 'Estilo de Liderazgo',
  'trabajo-marketing': 'Aptitud para Marketing',
  'trabajo-mentorias': 'Capacidad de Mentoría',
  'trabajo-motivacion': 'Motivación Laboral',
  'trabajo-negociacion': 'Habilidad de Negociación',
  'trabajo-networking': 'Habilidad de Networking',
  'trabajo-organizacion': 'Organización Laboral',
  'trabajo-presentacion': 'Habilidad de Presentación',
  'trabajo-productividad': 'Nivel de Productividad',
  'trabajo-remoto': 'Aptitud para Trabajo Remoto',
  'trabajo-resiliencia': 'Resiliencia Laboral',
  'trabajo-rrhh': 'Aptitud para RRHH',
  'trabajo-salario': 'Negociación Salarial',
  'trabajo-servicio-cliente': 'Servicio al Cliente',
  'trabajo-startup': 'Aptitud para Startups',
  'trabajo-tecnologia': 'Adaptación Tecnológica',
  'trabajo-toma-decisiones': 'Toma de Decisiones',
  'trabajo-ventas': 'Aptitud para Ventas',
  'trabajo-vocacion': 'Vocación Profesional',

  // Diversión
  'diversion-aguas-frescas': '¿Qué Agua Fresca Eres?',
  'diversion-albur': 'Nivel de Albur',
  'diversion-antojito': '¿Qué Antojito Eres?',
  'diversion-atole': '¿Qué Atole Eres?',
  'diversion-baile-mx': 'Estilo de Baile Mexicano',
  'diversion-bebida-mx': '¿Qué Bebida Mexicana Eres?',
  'diversion-bici-mx': 'Personalidad Ciclista',
  'diversion-botanero': 'Personalidad Botanera',
  'diversion-cafe-olla': '¿Qué Café de Olla Eres?',
  'diversion-cantina-mx': 'Personalidad de Cantina',
  'diversion-carretera-mx': 'Personalidad en Carretera',
  'diversion-central-camiones': 'Tipo en la Central',
  'diversion-cerveza-mx': '¿Qué Cerveza Mexicana Eres?',
  'diversion-chamoy': 'Personalidad Chamoyera',
  'diversion-chile': '¿Qué Chile Eres?',
  'diversion-chisme-mx': 'Nivel de Chismoso',
  'diversion-churros-mx': '¿Qué Churro Eres?',
  'diversion-ciudad-mx': '¿Qué Ciudad Mexicana Eres?',
  'diversion-compadre': 'Tipo de Compadre',
  'diversion-crudas': 'Personalidad de Cruda',
  'diversion-cuate': 'Tipo de Cuate',
  'diversion-desveladas': 'Personalidad Desvelada',
  'diversion-dia-muertos': 'Tipo en Día de Muertos',
  'diversion-dichos-mx': '¿Qué Dicho Mexicano Eres?',
  'diversion-elote': '¿Qué Elote Eres?',
  'diversion-esquite': '¿Qué Esquite Eres?',
  'diversion-estado-mx': '¿Qué Estado Mexicano Eres?',
  'diversion-familia-mx': 'Rol en la Familia Mexicana',
  'diversion-fiestas-patrias': 'Tipo en Fiestas Patrias',
  'diversion-fonda': 'Personalidad de Fonda',
  'diversion-futbol-mx': '¿Qué Equipo Mexicano Eres?',
  'diversion-garnachas': '¿Qué Garnacha Eres?',
  'diversion-gato-mx': 'Personalidad Gatera MX',
  'diversion-godinez': 'Nivel de Godínez',
  'diversion-grito': 'Tipo en el Grito',
  'diversion-home-office-mx': 'Home Office a la Mexicana',
  'diversion-lucha-libre': '¿Qué Luchador Eres?',
  'diversion-lunes-mx': 'Tipo de Lunes Mexicano',
  'diversion-madrugador': 'Personalidad Madrugadora',
  'diversion-mariachi': '¿Qué Tipo de Mariachi Eres?',
  'diversion-mascota-mx': 'Personalidad con Mascotas',
  'diversion-meme-mx': '¿Qué Meme Mexicano Eres?',
  'diversion-mercado-mx': 'Personalidad de Mercado',
  'diversion-metro-cdmx': 'Personalidad del Metro',
  'diversion-mezcal': '¿Qué Mezcal Eres?',
  'diversion-michelada': '¿Qué Michelada Eres?',
  'diversion-musica-mx': '¿Qué Género Musical MX Eres?',
  'diversion-navidad-mx': 'Navidad a la Mexicana',
  'diversion-noctambulo': 'Personalidad Noctámbula',
  'diversion-novela': '¿Qué Personaje de Novela Eres?',
  'diversion-oficina-mx': 'Tipo en la Oficina MX',
  'diversion-pan-dulce': '¿Qué Pan Dulce Eres?',
  'diversion-peaton-mx': 'Personalidad Peatonal',
  'diversion-perro-callejero': 'Personalidad Callejera',
  'diversion-piropo': 'Estilo de Piropo',
  'diversion-playa-mx': 'Personalidad Playera MX',
  'diversion-ponche': '¿Qué Ponche Eres?',
  'diversion-posada': 'Tipo en las Posadas',
  'diversion-postre-mx': '¿Qué Postre Mexicano Eres?',
  'diversion-pueblo-magico': '¿Qué Pueblo Mágico Eres?',
  'diversion-puente-mx': 'Personalidad de Puente',
  'diversion-puesto-mx': 'Personalidad de Puestero',
  'diversion-quincena': 'Personalidad de Quincena',
  'diversion-regano-mx': 'Tipo de Regaño Mexicano',
  'diversion-salsa': '¿Qué Salsa Eres?',
  'diversion-taco': '¿Qué Taco Eres?',
  'diversion-tamal': '¿Qué Tamal Eres?',
  'diversion-taqueria': 'Personalidad de Taquería',
  'diversion-taxista-mx': 'Personalidad de Taxista',
  'diversion-tepache': '¿Qué Tepache Eres?',
  'diversion-tianguis-mx': 'Personalidad de Tianguis',
  'diversion-tienda': 'Personalidad de Tiendita',
  'diversion-tiktoker-mx': 'Tiktoker Mexicano',
  'diversion-torta': '¿Qué Torta Eres?',
  'diversion-trafico-mx': 'Personalidad en el Tráfico',
  'diversion-transporte-mx': 'Personalidad de Transporte',
  'diversion-uber-mx': 'Pasajero de Uber MX',
  'diversion-vacacionista': 'Tipo de Vacacionista',
  'diversion-vecino-mx': 'Tipo de Vecino Mexicano',
  'diversion-viernes-mx': 'Personalidad de Viernes',

  // Inteligencia
  'inteligencia-analisis': 'Capacidad de Análisis',
  'inteligencia-concentracion': 'Nivel de Concentración',
  'inteligencia-creativa': 'Inteligencia Creativa',
  'inteligencia-cultural': 'Conocimiento Cultural',
  'inteligencia-emocional': 'Inteligencia Emocional',
  'inteligencia-espacial': 'Inteligencia Espacial',
  'inteligencia-logica': 'Lógica y Razonamiento',
  'inteligencia-matematica': 'Habilidad Matemática',
  'inteligencia-memoria': 'Capacidad de Memoria',
  'inteligencia-observacion': 'Poder de Observación',
  'inteligencia-patron': 'Reconocimiento de Patrones',
  'inteligencia-problema': 'Resolución de Problemas',
  'inteligencia-razonamiento': 'Razonamiento Abstracto',
  'inteligencia-velocidad': 'Velocidad Mental',
  'inteligencia-verbal': 'Inteligencia Verbal',
};

// Category descriptions
const categoryDescriptions: Record<string, string> = {
  personality: 'Descubre quién eres realmente',
  psychology: 'Comprende tu mente a profundidad',
  relationship: 'Mejora tus relaciones',
  career: 'Desarrolla tu potencial profesional',
  fun: '¡Diviértete con tests únicos!',
  iq: 'Pon a prueba tu inteligencia',
};

// Content-specific tags based on test slug
const testTagsEsMX: Record<string, string[]> = {
  // DIVERSION
  'diversion-aguas-frescas': ['diversión', 'bebida', 'México'],
  'diversion-albur': ['diversión', 'humor', 'viral'],
  'diversion-antojito': ['diversión', 'comida', 'México'],
  'diversion-taco': ['diversión', 'comida', 'México'],
  'diversion-tamal': ['diversión', 'comida', 'tradición'],
  'diversion-biryani': ['diversión', 'comida', 'México'],
  'diversion-cerveza-mx': ['diversión', 'cerveza', 'viral'],
  'diversion-futbol-mx': ['diversión', 'fútbol', 'deporte'],
  'diversion-meme-mx': ['diversión', 'meme', 'viral'],
  'diversion-godinez': ['diversión', 'oficina', 'viral'],
  'diversion-lunes-mx': ['diversión', 'lunes', 'viral'],
  'diversion-viernes-mx': ['diversión', 'viernes', 'viral'],
  'diversion-trafico-mx': ['diversión', 'tráfico', 'viral'],
  'diversion-metro-cdmx': ['diversión', 'transporte', 'CDMX'],
  'diversion-mariachi': ['diversión', 'música', 'México'],
  'diversion-lucha-libre': ['diversión', 'lucha', 'México'],
  'diversion-dia-muertos': ['diversión', 'tradición', 'México'],
  'diversion-fiestas-patrias': ['diversión', 'fiesta', 'México'],
  // PERSONALIDAD
  'personalidad-taco': ['personalidad', 'comida', 'México'],
  'personalidad-familia': ['personalidad', 'familia', 'relación'],
  'personalidad-fiesta': ['personalidad', 'fiesta', 'social'],
  'personalidad-futbol': ['personalidad', 'fútbol', 'deporte'],
  'personalidad-dinero': ['personalidad', 'dinero', 'finanzas'],
  'personalidad-trabajo': ['personalidad', 'trabajo', 'carrera'],
  'personalidad-musica': ['personalidad', 'música', 'gusto'],
  'personalidad-amor': ['personalidad', 'amor', 'relación'],
  // PSICO
  'psico-ansiedad': ['psicología', 'ansiedad', 'mental'],
  'psico-autoestima': ['psicología', 'autoestima', 'viral'],
  'psico-estres': ['psicología', 'estrés', 'mental'],
  'psico-emociones': ['psicología', 'emociones', 'EQ'],
  'psico-motivacion': ['psicología', 'motivación', 'viral'],
  'psico-confianza': ['psicología', 'confianza', 'viral'],
  'psico-resiliencia': ['psicología', 'resiliencia', 'viral'],
  'psico-perfeccion': ['psicología', 'perfección', 'viral'],
  'psico-procrastinacion': ['psicología', 'procrastinación', 'viral'],
  // RELACION
  'relacion-amor': ['relación', 'amor', 'viral'],
  'relacion-pareja': ['relación', 'pareja', 'amor'],
  'relacion-celos': ['relación', 'celos', 'emociones'],
  'relacion-comunicacion': ['relación', 'comunicación', 'pareja'],
  'relacion-confianza': ['relación', 'confianza', 'viral'],
  'relacion-ex': ['relación', 'ex', 'viral'],
  'relacion-amistad': ['relación', 'amistad', 'social'],
  // TRABAJO
  'trabajo-jefe': ['trabajo', 'jefe', 'viral'],
  'trabajo-entrevista': ['trabajo', 'entrevista', 'viral'],
  'trabajo-liderazgo': ['trabajo', 'liderazgo', 'viral'],
  'trabajo-productividad': ['trabajo', 'productividad', 'viral'],
  'trabajo-burnout': ['trabajo', 'burnout', 'mental'],
  'trabajo-remoto': ['trabajo', 'remoto', 'viral'],
  'trabajo-salario': ['trabajo', 'salario', 'dinero'],
  // INTELIGENCIA
  'inteligencia-logica': ['IQ', 'lógica', 'cerebro'],
  'inteligencia-memoria': ['IQ', 'memoria', 'cerebro'],
  'inteligencia-emocional': ['EQ', 'emociones', 'psicología'],
  'inteligencia-creativa': ['IQ', 'creatividad', 'cerebro'],
  'inteligencia-verbal': ['IQ', 'verbal', 'lenguaje'],
};

// Default tags by category
const defaultCategoryTags: Record<string, string[]> = {
  personality: ['personalidad', 'carácter', 'viral'],
  psychology: ['psicología', 'mente', 'emociones'],
  relationship: ['relación', 'amor', 'pareja'],
  career: ['trabajo', 'carrera', 'profesional'],
  fun: ['diversión', 'México', 'viral'],
  iq: ['IQ', 'cerebro', 'inteligencia'],
};

function getTagsForSlug(slug: string, categoryId: string): string[] {
  return testTagsEsMX[slug] || defaultCategoryTags[categoryId] || ['diversión', 'México', 'viral'];
}

// Generate test entry
function generateTestEntry(slug: string, categoryId: string): TestEsMX {
  const title = spanishTitles[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const isIq = categoryId === 'iq';
  
  return {
    id: slug,
    title: title,
    slug: slug,
    description: `${categoryDescriptions[categoryId]}. ¡Descubre ${title.toLowerCase()}!`,
    shortDescription: title,
    categoryId: categoryId,
    thumbnailUrl: `/images/tests/${slug}.png`,
    questionCount: isIq ? 15 : 12,
    estimatedTime: isIq ? 5 : 3,
    participantCount: 15000 + Math.floor(Math.random() * 50000),
    tags: getTagsForSlug(slug, categoryId),
    createdAt: '2024-12-05',
  };
}

// Generate all tests
export const testsEsMX: TestEsMX[] = [
  // Personality tests (personalidad-) - 50
  ...personalidadTests.map(slug => generateTestEntry(slug, 'personality')),
  // Psychology tests (psico-) - 60
  ...psicoTests.map(slug => generateTestEntry(slug, 'psychology')),
  // Relationship tests (relacion-) - 50
  ...relacionTests.map(slug => generateTestEntry(slug, 'relationship')),
  // Career tests (trabajo-) - 45
  ...trabajoTests.map(slug => generateTestEntry(slug, 'career')),
  // Fun tests (diversion-) - 80
  ...diversionTests.map(slug => generateTestEntry(slug, 'fun')),
  // IQ tests (inteligencia-) - 15
  ...inteligenciaTests.map(slug => generateTestEntry(slug, 'iq')),
];

// Helper functions
export function getTestBySlugEsMX(slug: string): TestEsMX | undefined {
  return testsEsMX.find(test => test.slug === slug);
}

export function getTestsByCategoryEsMX(categoryId: string): TestEsMX[] {
  return testsEsMX.filter(test => test.categoryId === categoryId);
}

export function getCategoryByIdEsMX(categoryId: string): CategoryEsMX | undefined {
  return categoriesEsMX.find(category => category.id === categoryId);
}

// Export test counts
export const testCountsEsMX = {
  personality: personalidadTests.length,
  psychology: psicoTests.length,
  relationship: relacionTests.length,
  career: trabajoTests.length,
  fun: diversionTests.length,
  iq: inteligenciaTests.length,
  total: testsEsMX.length,
};
