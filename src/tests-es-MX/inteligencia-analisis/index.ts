// Test de Inteligencia Analítica
export const questions = [
  {
    id: 1,
    text: 'Una empresa perdió 15% de ventas. Si antes vendía $100,000, ¿cuánto perdió y cuánto vende ahora?',
    options: [
      { text: 'Perdió $15,000, vende $85,000', type: 'correct' },
      { text: 'Perdió $10,000, vende $90,000', type: 'wrong' },
      { text: 'Perdió $20,000, vende $80,000', type: 'wrong' },
      { text: 'Perdió $15,000, vende $115,000', type: 'wrong' },
    ],
  },
  {
    id: 2,
    text: 'Un estudio dice que "el 60% de los encuestados prefiere A". 500 personas participaron. ¿Cuántos prefieren A?',
    options: [
      { text: '250', type: 'wrong' },
      { text: '300', type: 'correct' },
      { text: '350', type: 'wrong' },
      { text: '200', type: 'wrong' },
    ],
  },
  {
    id: 3,
    text: 'Si la inflación es 8% anual, un producto de $500 costará aproximadamente en un año:',
    options: [
      { text: '$508', type: 'wrong' },
      { text: '$540', type: 'correct' },
      { text: '$580', type: 'wrong' },
      { text: '$600', type: 'wrong' },
    ],
  },
  {
    id: 4,
    text: 'Una gráfica muestra ventas subiendo 10% cada trimestre. Si Q1 fue $1000, ¿cuánto será Q4?',
    options: [
      { text: '$1,300', type: 'wrong' },
      { text: '$1,331', type: 'correct' },
      { text: '$1,400', type: 'wrong' },
      { text: '$1,210', type: 'wrong' },
    ],
  },
  {
    id: 5,
    text: 'Un reporte dice: "La correlación entre X e Y es 0.9". Esto significa que:',
    options: [
      { text: 'X causa Y directamente', type: 'wrong' },
      { text: 'Hay fuerte relación positiva entre X e Y', type: 'correct' },
      { text: 'X e Y son independientes', type: 'wrong' },
      { text: 'Y causa X inversamente', type: 'wrong' },
    ],
  },
  {
    id: 6,
    text: 'Si 3 de cada 10 productos son defectuosos, ¿cuántos defectuosos esperarías en 1000 productos?',
    options: [
      { text: '30', type: 'wrong' },
      { text: '100', type: 'wrong' },
      { text: '300', type: 'correct' },
      { text: '500', type: 'wrong' },
    ],
  },
  {
    id: 7,
    text: 'La media de 5 números es 20. Si se agrega un 6to número y la media sube a 22, ¿cuál es el nuevo número?',
    options: [
      { text: '30', type: 'wrong' },
      { text: '32', type: 'correct' },
      { text: '28', type: 'wrong' },
      { text: '24', type: 'wrong' },
    ],
  },
  {
    id: 8,
    text: 'Un medicamento es "efectivo en 85% de los casos". De 200 pacientes, ¿cuántos NO mejorarían?',
    options: [
      { text: '15', type: 'wrong' },
      { text: '30', type: 'correct' },
      { text: '170', type: 'wrong' },
      { text: '85', type: 'wrong' },
    ],
  },
  {
    id: 9,
    text: 'Una población crece 2% anual. Si hoy hay 1 millón, ¿cuántos habrá en 2 años (aproximadamente)?',
    options: [
      { text: '1,020,000', type: 'wrong' },
      { text: '1,040,400', type: 'correct' },
      { text: '1,040,000', type: 'wrong' },
      { text: '1,200,000', type: 'wrong' },
    ],
  },
  {
    id: 10,
    text: 'Tres proyectos tienen ROI de 12%, 8% y 15%. ¿Cuál es el ROI promedio?',
    options: [
      { text: '11%', type: 'wrong' },
      { text: '11.67%', type: 'correct' },
      { text: '12%', type: 'wrong' },
      { text: '35%', type: 'wrong' },
    ],
  },
  {
    id: 11,
    text: 'Si la probabilidad de lluvia es 30% hoy y 40% mañana (eventos independientes), ¿cuál es la probabilidad de que llueva ambos días?',
    options: [
      { text: '70%', type: 'wrong' },
      { text: '35%', type: 'wrong' },
      { text: '12%', type: 'correct' },
      { text: '10%', type: 'wrong' },
    ],
  },
  {
    id: 12,
    text: 'Una encuesta con margen de error de ±3% muestra 52% de aprobación. ¿Cuál es el rango real posible?',
    options: [
      { text: '49% a 55%', type: 'correct' },
      { text: '52% a 55%', type: 'wrong' },
      { text: '50% a 54%', type: 'wrong' },
      { text: '49% a 52%', type: 'wrong' },
    ],
  },
  {
    id: 13,
    text: 'El costo fijo es $5,000 y el variable $10 por unidad. ¿Cuál es el costo total de producir 300 unidades?',
    options: [
      { text: '$3,000', type: 'wrong' },
      { text: '$5,300', type: 'wrong' },
      { text: '$8,000', type: 'correct' },
      { text: '$15,000', type: 'wrong' },
    ],
  },
  {
    id: 14,
    text: 'Un dato es outlier si está a más de 2 desviaciones estándar. Si μ=50 y σ=5, ¿cuál es outlier?',
    options: [
      { text: '45', type: 'wrong' },
      { text: '55', type: 'wrong' },
      { text: '62', type: 'correct' },
      { text: '42', type: 'wrong' },
    ],
  },
  {
    id: 15,
    text: 'Dos departamentos tienen 10 y 20 empleados con salarios promedio de $20,000 y $25,000. ¿Cuál es el promedio global?',
    options: [
      { text: '$22,500', type: 'wrong' },
      { text: '$23,333', type: 'correct' },
      { text: '$24,000', type: 'wrong' },
      { text: '$21,000', type: 'wrong' },
    ],
  },
];

export const results = {
  high: {
    title: '📊 Analista Experto',
    minScore: 12,
    description: '¡Excepcional! Tu capacidad analítica es sobresaliente. Interpretas datos complejos y sacas conclusiones precisas con facilidad.',
    traits: ['Crítico', 'Metódico', 'Preciso', 'Estratégico'],
    advice: 'Considera carreras en análisis de datos, finanzas, consultoría o investigación de mercados.',
  },
  medium: {
    title: '📈 Buen Analista',
    minScore: 8,
    description: '¡Muy bien! Tienes buena capacidad para analizar información y llegar a conclusiones razonables.',
    traits: ['Observador', 'Lógico', 'Ordenado', 'Objetivo'],
    advice: 'Practica con casos de estudio y análisis de reportes. Aprende herramientas como Excel avanzado.',
  },
  low: {
    title: '🌱 Analista en Formación',
    minScore: 0,
    description: 'El análisis de datos requiere práctica. Con estudio y ejercicios puedes desarrollar esta habilidad valiosa.',
    traits: ['Intuitivo', 'Creativo', 'Cualitativo', 'Flexible'],
    advice: 'Comienza con estadística básica y aprende a leer gráficas. La práctica constante es clave.',
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
