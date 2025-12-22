// ¿Qué Tipo de Persona Eres en las Posadas?
export const questions = [
  {
    "id": 1,
    "text": "¿Cuándo llegas a la posada?",
    "options": [
      {
        "text": "De los primeros para ayudar",
        "type": "A"
      },
      {
        "text": "A la hora indicada",
        "type": "B"
      },
      {
        "text": "Cuando ya empezó la fiesta",
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
    "text": "¿Qué llevas a la posada?",
    "options": [
      {
        "text": "El ponche y los tamales",
        "type": "A"
      },
      {
        "text": "Mi parte del intercambio",
        "type": "B"
      },
      {
        "text": "Unas chelas para mí",
        "type": "C"
      },
      {
        "text": "Nada, voy de gorrón",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Qué haces cuando cantan los villancicos?",
    "options": [
      {
        "text": "Canto a todo pulmón",
        "type": "A"
      },
      {
        "text": "Canto pero bajito",
        "type": "B"
      },
      {
        "text": "Hago playback",
        "type": "C"
      },
      {
        "text": "Me escondo hasta que acaben",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Cómo participas en el pedir posada?",
    "options": [
      {
        "text": "Lidero el canto de afuera",
        "type": "A"
      },
      {
        "text": "Canto con el grupo",
        "type": "B"
      },
      {
        "text": "Solo muevo los labios",
        "type": "C"
      },
      {
        "text": "Espero adentro con el ponche",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Qué tan importante es romper la piñata?",
    "options": [
      {
        "text": "Esencial, es tradición",
        "type": "A"
      },
      {
        "text": "Me gusta participar",
        "type": "B"
      },
      {
        "text": "Solo quiero los dulces",
        "type": "C"
      },
      {
        "text": "Me da igual",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Cuál es tu bebida favorita de la posada?",
    "options": [
      {
        "text": "Ponche bien calientito",
        "type": "A"
      },
      {
        "text": "Atole de varios sabores",
        "type": "B"
      },
      {
        "text": "Algo con piquete",
        "type": "C"
      },
      {
        "text": "Una chela o refresco",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Cómo te portas en el intercambio de regalos?",
    "options": [
      {
        "text": "Regalo algo especial y pensado",
        "type": "A"
      },
      {
        "text": "Cumplo con algo decente",
        "type": "B"
      },
      {
        "text": "Compro algo barato de último minuto",
        "type": "C"
      },
      {
        "text": "Prefiero no participar",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué comes primero en la posada?",
    "options": [
      {
        "text": "Los tamales caseros",
        "type": "A"
      },
      {
        "text": "De todo un poco",
        "type": "B"
      },
      {
        "text": "Puro antojito y dulces",
        "type": "C"
      },
      {
        "text": "Lo que haya cerca",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿A qué hora te vas de la posada?",
    "options": [
      {
        "text": "Cuando todos se van",
        "type": "A"
      },
      {
        "text": "A una hora razonable",
        "type": "B"
      },
      {
        "text": "Temprano para seguir la fiesta",
        "type": "C"
      },
      {
        "text": "Apenas puedo",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Qué significa para ti la temporada de posadas?",
    "options": [
      {
        "text": "Lo mejor del año, pura alegría",
        "type": "A"
      },
      {
        "text": "Tiempo de reunión familiar",
        "type": "B"
      },
      {
        "text": "Pretexto para la fiesta",
        "type": "C"
      },
      {
        "text": "Estrés y compromisos",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🎄 El Alma de la Posada",
    "description": "¡Eres el organizador nato! Sin ti las posadas no serían lo mismo. Llegas temprano, cantas fuerte y mantienes vivas las tradiciones. Eres el que hace que todo funcione.",
    "traits": [
      "Organizador",
      "Tradicional",
      "Alegre",
      "Líder"
    ],
    "advice": "Tu dedicación es admirable. Solo recuerda también disfrutar sin tanto trabajo."
  },
  "B": {
    "title": "🎁 El Invitado Ideal",
    "description": "Cumples con todo sin exagerar. Llegas a tiempo, participas en las actividades y te vas a buena hora. Eres el invitado que todos quieren en su posada.",
    "traits": [
      "Cumplido",
      "Respetuoso",
      "Participativo",
      "Equilibrado"
    ],
    "advice": "Tu balance es perfecto. Sigue siendo ese invitado ejemplar."
  },
  "C": {
    "title": "🎉 El Fiestero",
    "description": "Para ti la posada es pretexto para la fiesta. Los villancicos te dan hueva pero el after te encanta. Tu objetivo es pasarla bien y seguir la noche.",
    "traits": [
      "Fiestero",
      "Social",
      "Divertido",
      "Relajado"
    ],
    "advice": "Tu energía de fiesta es contagiosa. Pero también valora las tradiciones."
  },
  "D": {
    "title": "🥱 El Obligado",
    "description": "Las posadas no son lo tuyo y se nota. Vas por compromiso y esperas que acaben pronto. Prefieres mil veces quedarte en casa viendo series.",
    "traits": [
      "Introvertido",
      "Honesto",
      "Práctico",
      "Independiente"
    ],
    "advice": "Respetamos tu postura. Pero dale una oportunidad a las tradiciones, podrían sorprenderte."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
