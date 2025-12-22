// ¿Qué Tipo de Godínez Eres?
export const questions = [
  {
    "id": 1,
    "text": "¿A qué hora llegas a la oficina?",
    "options": [
      {
        "text": "Siempre tarde pero con excusa",
        "type": "A"
      },
      {
        "text": "Puntual siempre",
        "type": "B"
      },
      {
        "text": "Temprano para evitar tráfico",
        "type": "C"
      },
      {
        "text": "Home office, no llego",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Qué llevas de lunch?",
    "options": [
      {
        "text": "Tuppers con comida de casa",
        "type": "A"
      },
      {
        "text": "Compro en la fondita",
        "type": "B"
      },
      {
        "text": "Pido Uber Eats o Rappi",
        "type": "C"
      },
      {
        "text": "No como, puro café",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Cómo es tu escritorio?",
    "options": [
      {
        "text": "Lleno de fotos y decoraciones",
        "type": "A"
      },
      {
        "text": "Organizado y limpio",
        "type": "B"
      },
      {
        "text": "Un desastre creativo",
        "type": "C"
      },
      {
        "text": "Minimalista",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Participas en los eventos de la oficina?",
    "options": [
      {
        "text": "Organizo todo",
        "type": "A"
      },
      {
        "text": "Voy a todos",
        "type": "B"
      },
      {
        "text": "Solo a los obligatorios",
        "type": "C"
      },
      {
        "text": "Los evito",
        "type": "D"
      }
    ]
  },
  {
    "id": 5,
    "text": "¿Cómo te llevas con tus compañeros?",
    "options": [
      {
        "text": "Son mi segunda familia",
        "type": "A"
      },
      {
        "text": "Bien, somos amigos",
        "type": "B"
      },
      {
        "text": "Profesional y distante",
        "type": "C"
      },
      {
        "text": "Lo mínimo necesario",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Qué haces a la hora del café?",
    "options": [
      {
        "text": "Chismeo y platico",
        "type": "A"
      },
      {
        "text": "Me tomo mi café y sigo",
        "type": "B"
      },
      {
        "text": "Trabajo mientras tomo café",
        "type": "C"
      },
      {
        "text": "No tomo café",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Cómo manejas las juntas?",
    "options": [
      {
        "text": "Participo activamente",
        "type": "A"
      },
      {
        "text": "Escucho y opino cuando toca",
        "type": "B"
      },
      {
        "text": "Estoy en silencio esperando que acabe",
        "type": "C"
      },
      {
        "text": "Las evito si puedo",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué haces los viernes?",
    "options": [
      {
        "text": "Organizo el after con los compas",
        "type": "A"
      },
      {
        "text": "Voy si hay plan",
        "type": "B"
      },
      {
        "text": "Me voy directo a casa",
        "type": "C"
      },
      {
        "text": "Trabajo hasta tarde",
        "type": "D"
      }
    ]
  },
  {
    "id": 9,
    "text": "¿Cómo vistes para la oficina?",
    "options": [
      {
        "text": "Siempre arreglado/a",
        "type": "A"
      },
      {
        "text": "Casual de oficina",
        "type": "B"
      },
      {
        "text": "Lo más cómodo posible",
        "type": "C"
      },
      {
        "text": "En pijama (home office)",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Qué piensas de tu trabajo?",
    "options": [
      {
        "text": "Me encanta, es mi vida",
        "type": "A"
      },
      {
        "text": "Está bien, paga las cuentas",
        "type": "B"
      },
      {
        "text": "Es solo un trabajo",
        "type": "C"
      },
      {
        "text": "Cuento los días para el fin de semana",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "👔 El Godínez Social",
    "description": "La oficina es tu segundo hogar. Organizas los cumpleaños, conoces a todos y el chisme no se mueve sin ti. Eres el alma del lugar.",
    "traits": [
      "Social",
      "Organizador",
      "Alegre",
      "Comprometido"
    ],
    "advice": "Tu energía social es valiosa. Solo no descuides el trabajo por tanto convivio."
  },
  "B": {
    "title": "💼 El Godínez Profesional",
    "description": "Equilibrado y profesional. Cumples con tu trabajo, te llevas bien con todos pero mantienes límites. Eres el empleado ideal.",
    "traits": [
      "Profesional",
      "Equilibrado",
      "Confiable",
      "Respetuoso"
    ],
    "advice": "Tu profesionalismo es ejemplar. Sigue así."
  },
  "C": {
    "title": "🖥️ El Godínez Invisible",
    "description": "Haces tu trabajo y te vas. No te involucras en el drama de la oficina ni en los eventos. Prefieres tu vida fuera del trabajo.",
    "traits": [
      "Reservado",
      "Eficiente",
      "Independiente",
      "Práctico"
    ],
    "advice": "Tu enfoque en el trabajo es bueno. Pero un poco de convivio no hace daño."
  },
  "D": {
    "title": "🏠 El Anti-Godínez",
    "description": "La vida de oficina no es para ti. Prefieres el home office, el freelance o lo que sea que te mantenga lejos del cubículo.",
    "traits": [
      "Independiente",
      "Moderno",
      "Libre",
      "Introvertido"
    ],
    "advice": "Tu libertad es valiosa. Pero a veces la oficina tiene sus momentos buenos."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
