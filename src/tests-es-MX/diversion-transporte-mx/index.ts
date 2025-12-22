// ¿Qué Transporte Público Mexicano Eres?
export const questions = [
  {
    "id": 1,
    "text": "¿Cómo es tu ritmo de vida?",
    "options": [
      {
        "text": "Muy acelerado, siempre corriendo",
        "type": "A"
      },
      {
        "text": "Activo pero organizado",
        "type": "B"
      },
      {
        "text": "Relajado y sin prisas",
        "type": "C"
      },
      {
        "text": "Lento y tranquilo",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Cómo te llevas con los desconocidos?",
    "options": [
      {
        "text": "Platico con todos",
        "type": "A"
      },
      {
        "text": "Respetuoso pero distante",
        "type": "B"
      },
      {
        "text": "Prefiero mi espacio",
        "type": "C"
      },
      {
        "text": "Los ignoro",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Qué tan puntual eres?",
    "options": [
      {
        "text": "Siempre a tiempo",
        "type": "A"
      },
      {
        "text": "Generalmente puntual",
        "type": "B"
      },
      {
        "text": "A veces me atraso",
        "type": "C"
      },
      {
        "text": "Impuntual crónico",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Cómo manejas el caos?",
    "options": [
      {
        "text": "Soy el caos",
        "type": "A"
      },
      {
        "text": "Me adapto bien",
        "type": "B"
      },
      {
        "text": "Me estresa",
        "type": "C"
      },
      {
        "text": "Lo evito",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Qué música escuchas en el transporte?",
    "options": [
      {
        "text": "La que ponga el chofer",
        "type": "A"
      },
      {
        "text": "Mis audífonos siempre",
        "type": "B"
      },
      {
        "text": "Nada, prefiero silencio",
        "type": "C"
      },
      {
        "text": "Podcast o algo informativo",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Cómo reaccionas ante el tráfico?",
    "options": [
      {
        "text": "Me desespero pero aguanto",
        "type": "A"
      },
      {
        "text": "Busco alternativas",
        "type": "B"
      },
      {
        "text": "Me relajo y espero",
        "type": "C"
      },
      {
        "text": "Me estresa mucho",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Qué tan aventado/a eres?",
    "options": [
      {
        "text": "Mucho, me lanzo sin miedo",
        "type": "A"
      },
      {
        "text": "Calculado pero decidido",
        "type": "B"
      },
      {
        "text": "Precavido",
        "type": "C"
      },
      {
        "text": "Muy cuidadoso",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Cómo es tu espacio personal?",
    "options": [
      {
        "text": "No existe, me adapto",
        "type": "A"
      },
      {
        "text": "Flexible pero con límites",
        "type": "B"
      },
      {
        "text": "Lo necesito",
        "type": "C"
      },
      {
        "text": "Es sagrado",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Qué tan económico/a eres?",
    "options": [
      {
        "text": "Muy ahorrativo",
        "type": "A"
      },
      {
        "text": "Busco balance precio-comodidad",
        "type": "B"
      },
      {
        "text": "Pago por comodidad",
        "type": "C"
      },
      {
        "text": "El precio es secundario",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Cómo describes tus trayectos?",
    "options": [
      {
        "text": "Una aventura diaria",
        "type": "A"
      },
      {
        "text": "Parte de mi rutina",
        "type": "B"
      },
      {
        "text": "Un mal necesario",
        "type": "C"
      },
      {
        "text": "Algo que evitar",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🚐 El Microbús/Combi",
    "description": "¡Eres pura adrenalina y caos organizado! Como el micro, vas rápido, lleno de gente y con música a todo volumen. No hay trayecto aburrido contigo. Te adaptas a todo.",
    "traits": [
      "Caótico",
      "Rápido",
      "Adaptable",
      "Económico"
    ],
    "advice": "Tu energía es contagiosa. Solo bájale a la velocidad de vez en cuando."
  },
  "B": {
    "title": "🚇 El Metro",
    "description": "Eficiente y confiable. Como el Metro, eres puntual y organizado. Puedes manejar multitudes y llegas a donde tienes que llegar. Eres el transporte del pueblo.",
    "traits": [
      "Eficiente",
      "Puntual",
      "Organizado",
      "Confiable"
    ],
    "advice": "Tu eficiencia es admirable. Sigue siendo ese pilar de confiabilidad."
  },
  "C": {
    "title": "🚌 El Metrobús",
    "description": "Moderno y estructurado. Tienes tu carril definido y no te sales de él. Eres organizado pero flexible. Representas el progreso.",
    "traits": [
      "Moderno",
      "Estructurado",
      "Cómodo",
      "Organizado"
    ],
    "advice": "Tu modernidad es tu fuerza. Sigue evolucionando."
  },
  "D": {
    "title": "🚕 El Uber/Taxi",
    "description": "Prefieres comodidad y privacidad. No te gusta el caos del transporte público. Tu espacio personal es importante y pagas por él.",
    "traits": [
      "Privado",
      "Cómodo",
      "Selectivo",
      "Independiente"
    ],
    "advice": "Tu comodidad es válida. Pero a veces el transporte público tiene su encanto."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
