// ¿Qué Rol Tienes en las Reuniones Familiares Mexicanas?
export const questions = [
  {
    "id": 1,
    "text": "¿A qué hora llegas a la reunión familiar?",
    "options": [
      {
        "text": "De los primeros para ayudar",
        "type": "A"
      },
      {
        "text": "A la hora que dijeron",
        "type": "B"
      },
      {
        "text": "Fashionably late",
        "type": "C"
      },
      {
        "text": "Lo más tarde posible",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Qué llevas a la reunión?",
    "options": [
      {
        "text": "El platillo principal",
        "type": "A"
      },
      {
        "text": "Un postre o guarnición",
        "type": "B"
      },
      {
        "text": "Las bebidas",
        "type": "C"
      },
      {
        "text": "Nada, voy de mantenido",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Cómo te portas con los tíos?",
    "options": [
      {
        "text": "Los saludo y platico con todos",
        "type": "A"
      },
      {
        "text": "Saludo y sigo mi camino",
        "type": "B"
      },
      {
        "text": "Solo a los que me caen bien",
        "type": "C"
      },
      {
        "text": "Los evito",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Qué haces cuando empiezan los chismes?",
    "options": [
      {
        "text": "Participo activamente",
        "type": "A"
      },
      {
        "text": "Escucho pero no opino",
        "type": "B"
      },
      {
        "text": "Me hago el desentendido",
        "type": "C"
      },
      {
        "text": "Me voy a otra parte",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Cómo manejas las preguntas incómodas?",
    "options": [
      {
        "text": "Las contesto con humor",
        "type": "A"
      },
      {
        "text": "Respondo con diplomacia",
        "type": "B"
      },
      {
        "text": "Cambio el tema",
        "type": "C"
      },
      {
        "text": "Me molesto",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Dónde te encuentran en la reunión?",
    "options": [
      {
        "text": "En la cocina ayudando",
        "type": "A"
      },
      {
        "text": "En la mesa platicando",
        "type": "B"
      },
      {
        "text": "Con los primos de mi edad",
        "type": "C"
      },
      {
        "text": "En una esquina con el celular",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Cómo te despides?",
    "options": [
      {
        "text": "Abrazo a todos uno por uno",
        "type": "A"
      },
      {
        "text": "Despedida general y me voy",
        "type": "B"
      },
      {
        "text": "Me escabullo sin que noten",
        "type": "C"
      },
      {
        "text": "Digo adiós desde lejos",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué opinas de las reuniones familiares?",
    "options": [
      {
        "text": "Las amo, son lo mejor",
        "type": "A"
      },
      {
        "text": "Me gustan de vez en cuando",
        "type": "B"
      },
      {
        "text": "Son necesarias pero cansadas",
        "type": "C"
      },
      {
        "text": "Las odio",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Cómo te llevas con los niños de la familia?",
    "options": [
      {
        "text": "Juego con todos",
        "type": "A"
      },
      {
        "text": "Les hago caso un rato",
        "type": "B"
      },
      {
        "text": "Los ignoro amablemente",
        "type": "C"
      },
      {
        "text": "Me dan dolor de cabeza",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Quién te cae mejor de la familia?",
    "options": [
      {
        "text": "Todos, los quiero igual",
        "type": "A"
      },
      {
        "text": "Mis primos cercanos",
        "type": "B"
      },
      {
        "text": "Los que no me molestan",
        "type": "C"
      },
      {
        "text": "Nadie en particular",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "👨‍👩‍👧‍👦 El Pilar de la Familia",
    "description": "¡Eres el corazón de las reuniones! Ayudas en la cocina, saludas a todos y mantienes la armonía. Sin ti, la familia no sería lo mismo.",
    "traits": [
      "Servicial",
      "Cariñoso",
      "Unificador",
      "Alegre"
    ],
    "advice": "Tu dedicación es admirable. Solo recuerda que también puedes descansar."
  },
  "B": {
    "title": "🤝 El Familiar Equilibrado",
    "description": "Cumples con tu rol familiar sin exagerar. Vas, convives y te vas a buena hora. Eres el familiar que todos aprecian.",
    "traits": [
      "Equilibrado",
      "Respetuoso",
      "Presente",
      "Amable"
    ],
    "advice": "Tu balance es perfecto. Sigue siendo ese familiar confiable."
  },
  "C": {
    "title": "😎 El Primo Cool",
    "description": "Te la pasas con los de tu edad y evitas el drama. Las reuniones son para ver a tus primos favoritos, no para aguantar tíos.",
    "traits": [
      "Selectivo",
      "Relajado",
      "Social",
      "Evasivo"
    ],
    "advice": "Tu selectividad es válida. Pero dale chance a los mayores de vez en cuando."
  },
  "D": {
    "title": "🚪 El Que Quiere Irse",
    "description": "Las reuniones familiares son tu peor pesadilla. Cuentas los minutos para irte y evitas a toda costa las interacciones.",
    "traits": [
      "Introvertido",
      "Independiente",
      "Honesto",
      "Reservado"
    ],
    "advice": "Entendemos tu postura. Pero la familia es importante, dale una oportunidad."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
