// ¿Cómo Das el Grito de Independencia?
export const questions = [
  {
    "id": 1,
    "text": "¿Dónde prefieres dar el Grito?",
    "options": [
      {
        "text": "En una plaza pública con la multitud",
        "type": "A"
      },
      {
        "text": "En casa con familia y amigos",
        "type": "B"
      },
      {
        "text": "En un bar o fiesta privada",
        "type": "C"
      },
      {
        "text": "Viendo la tele sin gritar",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Qué tan fuerte gritas?",
    "options": [
      {
        "text": "Hasta quedarme afónico",
        "type": "A"
      },
      {
        "text": "Fuerte pero controlado",
        "type": "B"
      },
      {
        "text": "Normal, sin exagerar",
        "type": "C"
      },
      {
        "text": "No grito",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Te sabes todos los héroes que se mencionan?",
    "options": [
      {
        "text": "Sí, todos y su historia",
        "type": "A"
      },
      {
        "text": "Los principales sí",
        "type": "B"
      },
      {
        "text": "Solo Hidalgo y Morelos",
        "type": "C"
      },
      {
        "text": "No me los sé",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Cuándo empiezas a emocionarte?",
    "options": [
      {
        "text": "Desde que suena la campana",
        "type": "A"
      },
      {
        "text": "Cuando empiezan los Vivas",
        "type": "B"
      },
      {
        "text": "Solo al final con el Viva México",
        "type": "C"
      },
      {
        "text": "No me emociono",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Qué haces después del Grito?",
    "options": [
      {
        "text": "Sigo celebrando toda la noche",
        "type": "A"
      },
      {
        "text": "Cena y convivio familiar",
        "type": "B"
      },
      {
        "text": "Me voy a la fiesta",
        "type": "C"
      },
      {
        "text": "A dormir",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Usas bandera mexicana?",
    "options": [
      {
        "text": "Sí, grande y ondeo",
        "type": "A"
      },
      {
        "text": "Una pequeña",
        "type": "B"
      },
      {
        "text": "Solo si me la dan",
        "type": "C"
      },
      {
        "text": "No",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Cómo te preparas para el Grito?",
    "options": [
      {
        "text": "Vestido de mexicano desde temprano",
        "type": "A"
      },
      {
        "text": "Algo alusivo a México",
        "type": "B"
      },
      {
        "text": "Normal pero listo para la fiesta",
        "type": "C"
      },
      {
        "text": "No me preparo",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué bebida acompaña tu Grito?",
    "options": [
      {
        "text": "Tequila puro",
        "type": "A"
      },
      {
        "text": "Cerveza mexicana",
        "type": "B"
      },
      {
        "text": "Lo que haya",
        "type": "C"
      },
      {
        "text": "Agua o refresco",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Te tomas fotos patrióticas?",
    "options": [
      {
        "text": "Muchas, para el recuerdo",
        "type": "A"
      },
      {
        "text": "Algunas con familia",
        "type": "B"
      },
      {
        "text": "Solo si alguien las toma",
        "type": "C"
      },
      {
        "text": "No",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Qué tanto te importa la tradición del Grito?",
    "options": [
      {
        "text": "Muchísimo, es sagrado",
        "type": "A"
      },
      {
        "text": "Bastante, es importante",
        "type": "B"
      },
      {
        "text": "Es pretexto para la fiesta",
        "type": "C"
      },
      {
        "text": "No me importa",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "📢 El Gritón Oficial",
    "description": "¡Tu Grito se escucha hasta Palacio Nacional! Eres el más patriota y emotivo. Tu voz es la más fuerte y tu emoción la más genuina. Eres el orgullo de México.",
    "traits": [
      "Patriota",
      "Emotivo",
      "Intenso",
      "Tradicional"
    ],
    "advice": "Tu pasión es contagiosa. Sigue siendo el líder del Grito."
  },
  "B": {
    "title": "🎆 El Gritón Familiar",
    "description": "Tu Grito es en casa, con los tuyos. Disfrutas la tradición de manera íntima y significativa. Para ti lo importante es la familia.",
    "traits": [
      "Familiar",
      "Tradicional",
      "Emotivo",
      "Equilibrado"
    ],
    "advice": "Tu forma de celebrar es hermosa. La familia es lo primero."
  },
  "C": {
    "title": "🍻 El Gritón Fiestero",
    "description": "El Grito es el inicio de la noche. Lo importante para ti es lo que viene después: la fiesta, el baile y la diversión.",
    "traits": [
      "Fiestero",
      "Social",
      "Alegre",
      "Práctico"
    ],
    "advice": "La fiesta está bien, pero no olvides el significado detrás."
  },
  "D": {
    "title": "😶 El Silencioso",
    "description": "El Grito no es lo tuyo. Prefieres observar o de plano ignorar la celebración. Y está bien, cada quien su forma.",
    "traits": [
      "Reservado",
      "Tranquilo",
      "Independiente",
      "Moderno"
    ],
    "advice": "Respetamos tu silencio. Pero un Viva México no hace daño."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
