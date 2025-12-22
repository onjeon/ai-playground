// ¿Qué Tipo de Cliente de Tiendita Eres?
export const questions = [
  {
    "id": 1,
    "text": "¿Qué tan seguido vas a la tiendita?",
    "options": [
      {
        "text": "Diario, a veces dos veces",
        "type": "A"
      },
      {
        "text": "Varias veces a la semana",
        "type": "B"
      },
      {
        "text": "Solo cuando necesito algo urgente",
        "type": "C"
      },
      {
        "text": "Casi nunca, prefiero el súper",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Cómo le hablas al tendero?",
    "options": [
      {
        "text": "Por su nombre, somos amigos",
        "type": "A"
      },
      {
        "text": "Con respeto y amabilidad",
        "type": "B"
      },
      {
        "text": "Lo mínimo necesario",
        "type": "C"
      },
      {
        "text": "No hablo, solo señalo",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Compras fiado?",
    "options": [
      {
        "text": "Sí, y siempre pago",
        "type": "A"
      },
      {
        "text": "A veces cuando me falta",
        "type": "B"
      },
      {
        "text": "Prefiero no deber",
        "type": "C"
      },
      {
        "text": "No me fían",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Qué compras más seguido?",
    "options": [
      {
        "text": "De todo, es mi despensa",
        "type": "A"
      },
      {
        "text": "Refrescos y botanas",
        "type": "B"
      },
      {
        "text": "Solo lo que me falta",
        "type": "C"
      },
      {
        "text": "Casi nada",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Platicas con el tendero?",
    "options": [
      {
        "text": "Sí, me cuenta todo el chisme",
        "type": "A"
      },
      {
        "text": "Un poco mientras me atiende",
        "type": "B"
      },
      {
        "text": "Solo lo necesario",
        "type": "C"
      },
      {
        "text": "No, para qué",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Regateas los precios?",
    "options": [
      {
        "text": "Siempre, es tradición",
        "type": "A"
      },
      {
        "text": "Solo cuando es mucho",
        "type": "B"
      },
      {
        "text": "No me atrevo",
        "type": "C"
      },
      {
        "text": "Pago lo que dice",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Vas en pijama a la tiendita?",
    "options": [
      {
        "text": "Sí, es mi segunda casa",
        "type": "A"
      },
      {
        "text": "A veces si es temprano",
        "type": "B"
      },
      {
        "text": "Nunca, qué pena",
        "type": "C"
      },
      {
        "text": "No voy a tienditas",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Mandas a alguien a la tiendita?",
    "options": [
      {
        "text": "Sí, a los niños o vecinos",
        "type": "A"
      },
      {
        "text": "A veces a mi pareja",
        "type": "B"
      },
      {
        "text": "Voy yo siempre",
        "type": "C"
      },
      {
        "text": "No aplica",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Qué tan rápido te atienden?",
    "options": [
      {
        "text": "De volada, ya saben qué quiero",
        "type": "A"
      },
      {
        "text": "Rápido y bien",
        "type": "B"
      },
      {
        "text": "Normal, espero mi turno",
        "type": "C"
      },
      {
        "text": "No sé, no voy",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Qué opinas de las tienditas de barrio?",
    "options": [
      {
        "text": "Son esenciales, las amo",
        "type": "A"
      },
      {
        "text": "Son muy útiles",
        "type": "B"
      },
      {
        "text": "Están bien para emergencias",
        "type": "C"
      },
      {
        "text": "Prefiero otras opciones",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🏪 El Cliente Estrella",
    "description": "¡Eres el mejor cliente de la tiendita! Conoces al tendero por nombre, compras fiado y te enteras de todo el chisme. La tiendita sería diferente sin ti.",
    "traits": [
      "Leal",
      "Amigable",
      "Frecuente",
      "Tradicional"
    ],
    "advice": "Tu lealtad a la tiendita es admirable. Sigue apoyando el comercio local."
  },
  "B": {
    "title": "🛒 El Cliente Regular",
    "description": "Vas seguido, compras lo necesario y te llevas bien con el tendero. Eres el cliente ideal: cumplido y respetuoso.",
    "traits": [
      "Regular",
      "Respetuoso",
      "Cumplido",
      "Práctico"
    ],
    "advice": "Tu equilibrio es perfecto. La tiendita te aprecia."
  },
  "C": {
    "title": "🚗 El Cliente de Emergencia",
    "description": "Solo vas cuando urge algo. Prefieres el súper o las apps. La tiendita es tu último recurso.",
    "traits": [
      "Ocasional",
      "Práctico",
      "Independiente",
      "Moderno"
    ],
    "advice": "Está bien ser práctico. Pero las tienditas tienen su encanto."
  },
  "D": {
    "title": "🏬 El Anti-Tiendita",
    "description": "Las tienditas no son lo tuyo. Prefieres opciones más grandes o modernas. El concepto te es ajeno.",
    "traits": [
      "Moderno",
      "Independiente",
      "Selectivo",
      "Diferente"
    ],
    "advice": "Respetamos tu preferencia. Pero dale una oportunidad a la tiendita del barrio."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
