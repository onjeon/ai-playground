// Test de Compromiso Mexicano en la Relación

export const questions = [
  {
    id: 1,
    text: "¿Qué tan comprometido/a te sientes con esta relación?",
    options: [
      { text: "Al 100%, es para toda la vida", type: "A" },
      { text: "Muy comprometido/a, trabajamos en ello", type: "B" },
      { text: "Comprometido/a pero con reservas", type: "C" },
      { text: "No tan comprometido/a como debería", type: "D" },
    ],
  },
  {
    id: 2,
    text: "¿Cómo ves el matrimonio o formalizar la relación?",
    options: [
      { text: "Es nuestra meta, queremos casarnos", type: "A" },
      { text: "Nos gustaría eventualmente", type: "B" },
      { text: "No es prioridad para nosotros", type: "C" },
      { text: "No creemos en eso", type: "D" },
    ],
  },
  {
    id: 3,
    text: "¿Sacrificarías oportunidades personales importantes por la relación?",
    options: [
      { text: "Sí, la relación es prioridad", type: "A" },
      { text: "Depende, buscaríamos un balance", type: "B" },
      { text: "Me costaría mucho hacerlo", type: "C" },
      { text: "No, mis metas personales son primero", type: "D" },
    ],
  },
  {
    id: 4,
    text: "¿Han presentado la relación formalmente a sus familias?",
    options: [
      { text: "Sí, somos parte de ambas familias", type: "A" },
      { text: "Sí, aunque no todos nos conocen bien", type: "B" },
      { text: "Solo algunos familiares lo saben", type: "C" },
      { text: "No, preferimos mantenerlo privado", type: "D" },
    ],
  },
  {
    id: 5,
    text: "¿Tienen planes concretos de futuro juntos?",
    options: [
      { text: "Sí, muy detallados y acordados", type: "A" },
      { text: "Sí, en términos generales", type: "B" },
      { text: "Hemos hablado pero nada concreto", type: "C" },
      { text: "No, vivimos el presente", type: "D" },
    ],
  },
  {
    id: 6,
    text: "¿Cómo manejas las tentaciones o interés de otras personas?",
    options: [
      { text: "Las rechazo de inmediato, mi compromiso es total", type: "A" },
      { text: "No les presto atención, estoy bien donde estoy", type: "B" },
      { text: "A veces me hace dudar de mi relación", type: "C" },
      { text: "Me cuestiono si estoy con la persona correcta", type: "D" },
    ],
  },
  {
    id: 7,
    text: "En momentos difíciles de la relación, ¿qué piensas?",
    options: [
      { text: "Vamos a superarlo juntos, pase lo que pase", type: "A" },
      { text: "Vale la pena el esfuerzo de trabajar en esto", type: "B" },
      { text: "A veces me pregunto si debería seguir", type: "C" },
      { text: "Pienso en terminar la relación", type: "D" },
    ],
  },
  {
    id: 8,
    text: "¿Has hecho compromisos significativos por esta relación?",
    options: [
      { text: "Sí, varios y muy importantes", type: "A" },
      { text: "Algunos, los necesarios", type: "B" },
      { text: "Pocos, me cuesta comprometerme así", type: "C" },
      { text: "No, evito ese tipo de compromisos", type: "D" },
    ],
  },
  {
    id: 9,
    text: "¿Qué tanto esfuerzo pones en mantener la relación?",
    options: [
      { text: "Todo lo necesario y más", type: "A" },
      { text: "Bastante, es importante para mí", type: "B" },
      { text: "Lo justo, no quiero desgastarme", type: "C" },
      { text: "Poco, si funciona bien, si no también", type: "D" },
    ],
  },
  {
    id: 10,
    text: "¿Ves a tu pareja como tu compañero/a de vida?",
    options: [
      { text: "Sin duda, es la persona con quien quiero envejecer", type: "A" },
      { text: "Sí, si seguimos trabajando en la relación", type: "B" },
      { text: "A veces lo dudo", type: "C" },
      { text: "No estoy seguro/a de que sea esa persona", type: "D" },
    ],
  },
  {
    id: 11,
    text: "¿Qué harías si te ofrecieran un trabajo de ensueño en otro país?",
    options: [
      { text: "Lo consultaría y si mi pareja no puede ir, no voy", type: "A" },
      { text: "Buscaríamos la forma de hacerlo funcionar juntos", type: "B" },
      { text: "Lo tomaría y veríamos qué pasa con la relación", type: "C" },
      { text: "Iría sin importar la relación", type: "D" },
    ],
  },
  {
    id: 12,
    text: "Para ti, el compromiso en una relación mexicana significa:",
    options: [
      { text: "Estar en las buenas y en las malas, como familia", type: "A" },
      { text: "Trabajar juntos por un futuro compartido", type: "B" },
      { text: "Mientras funcione, seguimos", type: "C" },
      { text: "Algo que se va construyendo día a día", type: "D" },
    ],
  },
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  A: {
    title: "💍 Compromiso Total",
    description: "Tu nivel de compromiso es ejemplar. Ves esta relación como para toda la vida y estás dispuesto/a a hacer lo necesario para que funcione. Tu pareja tiene en ti a alguien muy valioso.",
    traits: ["Comprometido/a", "Leal", "Dedicado/a", "Serio/a"],
    advice: "Tu compromiso es admirable. Solo asegúrate de que sea correspondido al mismo nivel.",
  },
  B: {
    title: "🤝 Compromiso Sólido",
    description: "Tienes un buen nivel de compromiso. Valoras la relación y estás dispuesto/a a trabajar en ella, aunque mantienes un balance saludable con tus propias necesidades.",
    traits: ["Equilibrado/a", "Comprometido/a", "Realista", "Trabajador/a"],
    advice: "Vas muy bien. Sigue cultivando ese compromiso mientras cuidas de ti mismo/a.",
  },
  C: {
    title: "🔄 Compromiso Vacilante",
    description: "Tu compromiso no es tan firme como podría ser. Hay dudas o reservas que te impiden entregarte completamente a la relación. Es importante explorar qué está causando esto.",
    traits: ["Indeciso/a", "Reservado/a", "Dudoso/a", "Cauteloso/a"],
    advice: "Reflexiona sobre qué te impide comprometerte más. ¿Es la relación o algo personal?",
  },
  D: {
    title: "❓ Compromiso Débil",
    description: "Tu nivel de compromiso es bajo. Esto puede indicar que no estás seguro/a de la relación o que no es lo que realmente quieres. Es importante ser honesto/a contigo y con tu pareja.",
    traits: ["Desconectado/a", "Independiente", "Distante", "Inseguro/a"],
    advice: "Es momento de reflexionar seriamente. ¿Quieres estar en esta relación o no?",
  },
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach((answer) => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
