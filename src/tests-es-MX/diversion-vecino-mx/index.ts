// ¿Qué Tipo de Vecino Mexicano Eres?
export const questions = [
  {
    "id": 1,
    "text": "¿Cómo saludas a tus vecinos?",
    "options": [
      {
        "text": "Buenos días/tardes y platicamos",
        "type": "A"
      },
      {
        "text": "Un saludo rápido",
        "type": "B"
      },
      {
        "text": "Solo si me saludan primero",
        "type": "C"
      },
      {
        "text": "Los ignoro",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Prestas cosas a tus vecinos?",
    "options": [
      {
        "text": "Sí, lo que necesiten",
        "type": "A"
      },
      {
        "text": "Cosas pequeñas sí",
        "type": "B"
      },
      {
        "text": "Casi nunca",
        "type": "C"
      },
      {
        "text": "Nunca",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Qué tal es tu música?",
    "options": [
      {
        "text": "A todo volumen los fines de semana",
        "type": "A"
      },
      {
        "text": "Normal, sin molestar",
        "type": "B"
      },
      {
        "text": "Muy bajita",
        "type": "C"
      },
      {
        "text": "Con audífonos siempre",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Haces fiestas en tu casa?",
    "options": [
      {
        "text": "Seguido, invito a todos",
        "type": "A"
      },
      {
        "text": "De vez en cuando",
        "type": "B"
      },
      {
        "text": "Raramente",
        "type": "C"
      },
      {
        "text": "Nunca",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Cómo manejas los conflictos vecinales?",
    "options": [
      {
        "text": "Hablando directo pero amigable",
        "type": "A"
      },
      {
        "text": "Tratando de negociar",
        "type": "B"
      },
      {
        "text": "Los evito",
        "type": "C"
      },
      {
        "text": "Me quejo sin hablar con ellos",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Conoces los nombres de tus vecinos?",
    "options": [
      {
        "text": "De todos, hasta sus hijos",
        "type": "A"
      },
      {
        "text": "De algunos",
        "type": "B"
      },
      {
        "text": "Muy pocos",
        "type": "C"
      },
      {
        "text": "De ninguno",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Qué haces cuando un vecino necesita ayuda?",
    "options": [
      {
        "text": "Voy de inmediato",
        "type": "A"
      },
      {
        "text": "Ayudo si puedo",
        "type": "B"
      },
      {
        "text": "Solo si es urgente",
        "type": "C"
      },
      {
        "text": "No es mi problema",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Cómo es tu relación con la vecina chismosa?",
    "options": [
      {
        "text": "Buena, platicamos de todo",
        "type": "A"
      },
      {
        "text": "Cordial pero distante",
        "type": "B"
      },
      {
        "text": "La evito",
        "type": "C"
      },
      {
        "text": "Le caigo mal",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Participas en las juntas de vecinos?",
    "options": [
      {
        "text": "Siempre, soy muy activo",
        "type": "A"
      },
      {
        "text": "Cuando puedo",
        "type": "B"
      },
      {
        "text": "Casi nunca",
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
    "text": "¿Cómo describes tu vecindario?",
    "options": [
      {
        "text": "Mi segunda familia",
        "type": "A"
      },
      {
        "text": "Gente conocida",
        "type": "B"
      },
      {
        "text": "Desconocidos",
        "type": "C"
      },
      {
        "text": "Un mal necesario",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🏠 El Vecino de Oro",
    "description": "¡Eres el vecino que todos quieren tener! Saludas, ayudas, prestas cosas y organizas las fiestas. Tu calle no sería igual sin ti.",
    "traits": [
      "Amigable",
      "Solidario",
      "Sociable",
      "Confiable"
    ],
    "advice": "Tu vecindad te adora. Solo no te metas tanto en todo, también necesitas tu espacio."
  },
  "B": {
    "title": "👋 El Vecino Normal",
    "description": "Saludas, respetas y vives en paz. No eres ni el más popular ni el conflictivo. Eres el vecino promedio que todos aprecian.",
    "traits": [
      "Respetuoso",
      "Equilibrado",
      "Tranquilo",
      "Cordial"
    ],
    "advice": "Tu equilibrio es perfecto. Sigue siendo ese vecino confiable."
  },
  "C": {
    "title": "🚪 El Vecino Fantasma",
    "description": "Casi no te ven, casi no te oyen. Prefieres tu privacidad y evitas el contacto social. Eres un misterio para tu vecindario.",
    "traits": [
      "Reservado",
      "Privado",
      "Independiente",
      "Discreto"
    ],
    "advice": "Tu privacidad es válida. Pero un saludo de vez en cuando no hace daño."
  },
  "D": {
    "title": "😤 El Vecino Problemático",
    "description": "Seamos honestos: no eres el vecino favorito. Ya sea por el ruido, la actitud o la falta de convivencia, hay tensión en el aire.",
    "traits": [
      "Conflictivo",
      "Distante",
      "Independiente",
      "Directo"
    ],
    "advice": "La convivencia mejora la vida. Intenta ser más amable con tu vecindario."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
