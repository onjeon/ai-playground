// ¿Cómo Sobrevives al Tráfico Mexicano?
export const questions = [
  {
    "id": 1,
    "text": "¿Cómo reaccionas al tráfico pesado?",
    "options": [
      {
        "text": "Me desespero y toco el claxon",
        "type": "A"
      },
      {
        "text": "Pongo música y me relajo",
        "type": "B"
      },
      {
        "text": "Busco rutas alternas",
        "type": "C"
      },
      {
        "text": "Evito salir en horas pico",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Qué haces mientras esperas?",
    "options": [
      {
        "text": "Maldigo a todos los conductores",
        "type": "A"
      },
      {
        "text": "Escucho podcast o música",
        "type": "B"
      },
      {
        "text": "Reviso el celular (cuando es seguro)",
        "type": "C"
      },
      {
        "text": "Medito y respiro",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Cómo manejas?",
    "options": [
      {
        "text": "Agresivo, hay que avanzar",
        "type": "A"
      },
      {
        "text": "Normal, respeto las reglas",
        "type": "B"
      },
      {
        "text": "Defensivo y cuidadoso",
        "type": "C"
      },
      {
        "text": "Muy tranquilo",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Usas Waze o Google Maps?",
    "options": [
      {
        "text": "Siempre, es obligatorio",
        "type": "A"
      },
      {
        "text": "Para rutas nuevas",
        "type": "B"
      },
      {
        "text": "A veces",
        "type": "C"
      },
      {
        "text": "Me sé las rutas de memoria",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Cómo reaccionas a los conductores groseros?",
    "options": [
      {
        "text": "Les regreso la grosería",
        "type": "A"
      },
      {
        "text": "Los ignoro",
        "type": "B"
      },
      {
        "text": "Me molesto pero no hago nada",
        "type": "C"
      },
      {
        "text": "Les cedo el paso",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Qué tan temprano sales?",
    "options": [
      {
        "text": "Lo mínimo posible",
        "type": "A"
      },
      {
        "text": "Con tiempo suficiente",
        "type": "B"
      },
      {
        "text": "Muy temprano para evitar tráfico",
        "type": "C"
      },
      {
        "text": "Depende del día",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Qué música pones en el tráfico?",
    "options": [
      {
        "text": "Algo para gritar mi frustración",
        "type": "A"
      },
      {
        "text": "Lo que me relaje",
        "type": "B"
      },
      {
        "text": "Noticias o podcast",
        "type": "C"
      },
      {
        "text": "Música tranquila",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Usas carriles de alta velocidad?",
    "options": [
      {
        "text": "Siempre que puedo",
        "type": "A"
      },
      {
        "text": "Cuando tiene sentido",
        "type": "B"
      },
      {
        "text": "Prefiero los carriles normales",
        "type": "C"
      },
      {
        "text": "No, me dan miedo",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Cómo describes el tráfico de tu ciudad?",
    "options": [
      {
        "text": "Un infierno necesario",
        "type": "A"
      },
      {
        "text": "Algo que manejar",
        "type": "B"
      },
      {
        "text": "Una pesadilla",
        "type": "C"
      },
      {
        "text": "No tan malo si sabes cuándo salir",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Prefieres manejar o ser pasajero?",
    "options": [
      {
        "text": "Manejar, yo tengo el control",
        "type": "A"
      },
      {
        "text": "Me da igual",
        "type": "B"
      },
      {
        "text": "Ser pasajero, menos estrés",
        "type": "C"
      },
      {
        "text": "Definitivamente pasajero",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🚗 El Guerrero del Asfalto",
    "description": "El tráfico es tu campo de batalla diario. Tocas claxon, te cambias de carril y llegas aunque el mundo se acabe. El tráfico no te vence.",
    "traits": [
      "Agresivo",
      "Impaciente",
      "Determinado",
      "Competitivo"
    ],
    "advice": "Tu determinación es fuerte. Pero el estrés cobra factura, relájate más."
  },
  "B": {
    "title": "🎧 El Zen del Tráfico",
    "description": "El tráfico no te estresa. Pones música, disfrutas el momento y llegas cuando llegas. Tu paz interior es admirable.",
    "traits": [
      "Relajado",
      "Paciente",
      "Equilibrado",
      "Adaptable"
    ],
    "advice": "Tu paz es envidiable. Sigue siendo ese conductor tranquilo."
  },
  "C": {
    "title": "📱 El Estratega",
    "description": "Calculas rutas, evitas horas pico y siempre tienes un plan B. El tráfico es un rompecabezas que resuelves con inteligencia.",
    "traits": [
      "Estratégico",
      "Planificador",
      "Inteligente",
      "Eficiente"
    ],
    "advice": "Tu estrategia es impecable. Sigue optimizando tus trayectos."
  },
  "D": {
    "title": "🏠 El Anti-Tráfico",
    "description": "Evitas el tráfico a toda costa. Trabajas desde casa, sales en horarios raros o de plano no manejas. El tráfico simplemente no es para ti.",
    "traits": [
      "Evitador",
      "Planificador",
      "Tranquilo",
      "Independiente"
    ],
    "advice": "Tu estrategia de evasión funciona. Sigue viviendo sin el estrés del tráfico."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
