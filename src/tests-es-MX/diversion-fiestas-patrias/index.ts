// ¿Qué Tipo de Mexicano Eres en las Fiestas Patrias?
export const questions = [
  {
    "id": 1,
    "text": "¿Dónde ves el Grito de Independencia?",
    "options": [
      {
        "text": "En el Zócalo o plaza principal",
        "type": "A"
      },
      {
        "text": "En casa con la familia",
        "type": "B"
      },
      {
        "text": "En un bar o antro",
        "type": "C"
      },
      {
        "text": "No lo veo, me da igual",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Qué tan patriota te sientes?",
    "options": [
      {
        "text": "Mucho, me emociono hasta las lágrimas",
        "type": "A"
      },
      {
        "text": "Bastante, me gusta mi país",
        "type": "B"
      },
      {
        "text": "Regular, solo en estas fechas",
        "type": "C"
      },
      {
        "text": "No mucho, es solo un día",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Cómo te vistes para el 15 de septiembre?",
    "options": [
      {
        "text": "Vestimenta típica mexicana",
        "type": "A"
      },
      {
        "text": "Algo verde, blanco y rojo",
        "type": "B"
      },
      {
        "text": "Normal, no me disfrazo",
        "type": "C"
      },
      {
        "text": "Lo que traiga puesto",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Qué comes en estas fiestas?",
    "options": [
      {
        "text": "Pozole, tostadas y antojitos",
        "type": "A"
      },
      {
        "text": "Comida mexicana tradicional",
        "type": "B"
      },
      {
        "text": "Lo que haya en la fiesta",
        "type": "C"
      },
      {
        "text": "No tengo preferencia especial",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Cómo gritas el Viva México?",
    "options": [
      {
        "text": "A todo pulmón con emoción",
        "type": "A"
      },
      {
        "text": "Fuerte y claro",
        "type": "B"
      },
      {
        "text": "Bajito o sin ganas",
        "type": "C"
      },
      {
        "text": "No grito",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Qué tanto sabes de historia de México?",
    "options": [
      {
        "text": "Mucho, me apasiona",
        "type": "A"
      },
      {
        "text": "Lo básico de la escuela",
        "type": "B"
      },
      {
        "text": "Casi nada",
        "type": "C"
      },
      {
        "text": "Nada, no me interesa",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Ves el desfile del 16 de septiembre?",
    "options": [
      {
        "text": "Siempre, no me lo pierdo",
        "type": "A"
      },
      {
        "text": "A veces si estoy disponible",
        "type": "B"
      },
      {
        "text": "Solo si lo pasan mientras desayuno",
        "type": "C"
      },
      {
        "text": "Nunca",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué música escuchas en estas fechas?",
    "options": [
      {
        "text": "Mariachi y música tradicional",
        "type": "A"
      },
      {
        "text": "De todo pero con toque mexicano",
        "type": "B"
      },
      {
        "text": "La misma de siempre",
        "type": "C"
      },
      {
        "text": "No me fijo",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Usas el bigote de la independencia?",
    "options": [
      {
        "text": "Sí, y sombrerito también",
        "type": "A"
      },
      {
        "text": "Solo si me lo dan",
        "type": "B"
      },
      {
        "text": "No, me da pena",
        "type": "C"
      },
      {
        "text": "Nunca",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Qué sientes cuando escuchas el Himno Nacional?",
    "options": [
      {
        "text": "Piel chinita y emoción",
        "type": "A"
      },
      {
        "text": "Orgullo tranquilo",
        "type": "B"
      },
      {
        "text": "Nada especial",
        "type": "C"
      },
      {
        "text": "Indiferencia",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🇲🇽 El Patriota de Hueso Colorado",
    "description": "¡Viva México! El patriotismo corre por tus venas. Te emocionas con el Grito, sabes la historia y defiendes a tu país. Eres el mexicano más mexicano.",
    "traits": [
      "Patriota",
      "Emotivo",
      "Tradicional",
      "Orgulloso"
    ],
    "advice": "Tu amor por México es admirable. Sigue celebrando nuestra cultura."
  },
  "B": {
    "title": "🎊 El Mexicano Promedio",
    "description": "Amas a tu país pero sin exagerar. Disfrutas las fiestas patrias de manera equilibrada. Comes pozole, gritas vivas y la pasas bien.",
    "traits": [
      "Equilibrado",
      "Festivo",
      "Respetuoso",
      "Normal"
    ],
    "advice": "Tu balance es perfecto. Disfrutas sin obsesionarte."
  },
  "C": {
    "title": "🍺 El Que Solo Quiere Fiesta",
    "description": "Las fiestas patrias son pretexto para el reventón. No te importa mucho la historia, solo pasarla bien. El tequila y la cerveza son tu prioridad.",
    "traits": [
      "Fiestero",
      "Relajado",
      "Social",
      "Práctico"
    ],
    "advice": "La fiesta está bien, pero conoce un poco más de tu país."
  },
  "D": {
    "title": "😴 El Indiferente",
    "description": "El 15 de septiembre es un día más para ti. No te emocionan las fiestas patrias ni la historia. Prefieres tu rutina normal.",
    "traits": [
      "Indiferente",
      "Práctico",
      "Independiente",
      "Moderno"
    ],
    "advice": "Respetamos tu postura. Pero dale una oportunidad a conocer tu historia."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
