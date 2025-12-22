// ¿Cómo Regañas a la Mexicana?
export const questions = [
  {
    "id": 1,
    "text": "¿Qué tanto te gusta los regaños mexicanos?",
    "options": [
      {
        "text": "Me encanta",
        "type": "A"
      },
      {
        "text": "Me gusta",
        "type": "B"
      },
      {
        "text": "Regular",
        "type": "C"
      },
      {
        "text": "No me gusta",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Con qué frecuencia disfrutas de los regaños mexicanos?",
    "options": [
      {
        "text": "Todos los días",
        "type": "A"
      },
      {
        "text": "Seguido",
        "type": "B"
      },
      {
        "text": "De vez en cuando",
        "type": "C"
      },
      {
        "text": "Casi nunca",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Cómo describes tu relación con los regaños mexicanos?",
    "options": [
      {
        "text": "Es parte de mi vida",
        "type": "A"
      },
      {
        "text": "Lo disfruto bastante",
        "type": "B"
      },
      {
        "text": "Es ocasional",
        "type": "C"
      },
      {
        "text": "Indiferente",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Qué tan mexicano te sientes?",
    "options": [
      {
        "text": "Al 100%",
        "type": "A"
      },
      {
        "text": "Bastante",
        "type": "B"
      },
      {
        "text": "Regular",
        "type": "C"
      },
      {
        "text": "No mucho",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Compartes esto con tu familia?",
    "options": [
      {
        "text": "Siempre",
        "type": "A"
      },
      {
        "text": "Seguido",
        "type": "B"
      },
      {
        "text": "A veces",
        "type": "C"
      },
      {
        "text": "Nunca",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Qué tan tradicional eres?",
    "options": [
      {
        "text": "Muy tradicional",
        "type": "A"
      },
      {
        "text": "Bastante",
        "type": "B"
      },
      {
        "text": "Un poco",
        "type": "C"
      },
      {
        "text": "Nada",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Cómo te defines en una palabra?",
    "options": [
      {
        "text": "Apasionado",
        "type": "A"
      },
      {
        "text": "Entusiasta",
        "type": "B"
      },
      {
        "text": "Casual",
        "type": "C"
      },
      {
        "text": "Indiferente",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué tan social eres con esto?",
    "options": [
      {
        "text": "Muy social",
        "type": "A"
      },
      {
        "text": "Social",
        "type": "B"
      },
      {
        "text": "Poco social",
        "type": "C"
      },
      {
        "text": "Nada social",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Te consideras experto/a?",
    "options": [
      {
        "text": "Sí, totalmente",
        "type": "A"
      },
      {
        "text": "Algo",
        "type": "B"
      },
      {
        "text": "No realmente",
        "type": "C"
      },
      {
        "text": "Para nada",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Qué impresión das sobre esto?",
    "options": [
      {
        "text": "De experto y apasionado",
        "type": "A"
      },
      {
        "text": "De conocedor",
        "type": "B"
      },
      {
        "text": "De casual",
        "type": "C"
      },
      {
        "text": "De desinteresado",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🌟 El Maestro de los regaños mexicanos",
    "description": "Eres un verdadero experto y apasionado. Tu conocimiento y entusiasmo por los regaños mexicanos es admirable. Representas lo mejor de la cultura mexicana.",
    "traits": [
      "Apasionado",
      "Experto",
      "Tradicional",
      "Entusiasta"
    ],
    "advice": "Tu pasión es contagiosa. Sigue compartiendo tu amor por esto."
  },
  "B": {
    "title": "👍 El Entusiasta de los regaños mexicanos",
    "description": "Disfrutas mucho de los regaños mexicanos y lo incorporas regularmente a tu vida. Tienes buen conocimiento y lo aprecias genuinamente.",
    "traits": [
      "Entusiasta",
      "Conocedor",
      "Participativo",
      "Alegre"
    ],
    "advice": "Tu entusiasmo es valioso. Sigue disfrutando."
  },
  "C": {
    "title": "🤷 El Casual de los regaños mexicanos",
    "description": "los regaños mexicanos está bien para ti, pero no es algo que te apasione. Lo disfrutas ocasionalmente sin ser un fanático.",
    "traits": [
      "Casual",
      "Flexible",
      "Relajado",
      "Adaptable"
    ],
    "advice": "Tu actitud relajada está bien. No todo tiene que ser una pasión."
  },
  "D": {
    "title": "😐 El Indiferente a los regaños mexicanos",
    "description": "los regaños mexicanos no es algo que te llame la atención. Y está perfectamente bien, cada quien tiene sus gustos.",
    "traits": [
      "Indiferente",
      "Selectivo",
      "Diferente",
      "Independiente"
    ],
    "advice": "Respetamos tu postura. Cada quien tiene sus preferencias."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
