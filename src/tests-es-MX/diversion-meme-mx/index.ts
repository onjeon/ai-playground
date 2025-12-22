// ¿Qué Meme Mexicano Eres?
export const questions = [
  {
    "id": 1,
    "text": "¿Cómo reaccionas ante los problemas?",
    "options": [
      {
        "text": "Con humor negro",
        "type": "A"
      },
      {
        "text": "Con sarcasmo fino",
        "type": "B"
      },
      {
        "text": "Con resignación cómica",
        "type": "C"
      },
      {
        "text": "Sin humor, me estreso",
        "type": "D"
      }
    ]
  },
  {
    "id": 2,
    "text": "¿Qué tipo de humor te representa?",
    "options": [
      {
        "text": "Absurdo y sin sentido",
        "type": "A"
      },
      {
        "text": "Inteligente y sarcástico",
        "type": "B"
      },
      {
        "text": "Autodestructivo y real",
        "type": "C"
      },
      {
        "text": "No tengo mucho humor",
        "type": "D"
      }
    ]
  },
  {
    "id": 3,
    "text": "¿Cómo describes tu vida?",
    "options": [
      {
        "text": "Un meme constante",
        "type": "A"
      },
      {
        "text": "Drama pero con estilo",
        "type": "B"
      },
      {
        "text": "Tragedia disfrazada de comedia",
        "type": "C"
      },
      {
        "text": "Normal y tranquila",
        "type": "D"
      }
    ]
  },
  {
    "id": 4,
    "text": "¿Qué compartes en redes?",
    "options": [
      {
        "text": "Memes todo el día",
        "type": "A"
      },
      {
        "text": "Cosas interesantes con humor",
        "type": "B"
      },
      {
        "text": "Mi sufrimiento en forma de meme",
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
    "text": "¿Cómo expresas frustración?",
    "options": [
      {
        "text": "Con un meme perfecto",
        "type": "A"
      },
      {
        "text": "Con sarcasmo elegante",
        "type": "B"
      },
      {
        "text": "Quejándome con humor",
        "type": "C"
      },
      {
        "text": "Sin humor, directo",
        "type": "D"
      }
    ]
  },
  {
    "id": 6,
    "text": "¿Qué tan mexicano es tu humor?",
    "options": [
      {
        "text": "Al 100%, puro albur",
        "type": "A"
      },
      {
        "text": "Bastante, con referencias locales",
        "type": "B"
      },
      {
        "text": "Mexicano y universal",
        "type": "C"
      },
      {
        "text": "Más internacional",
        "type": "D"
      }
    ]
  },
  {
    "id": 7,
    "text": "¿Cómo describes tu expresión facial default?",
    "options": [
      {
        "text": "Cara de póker absurda",
        "type": "A"
      },
      {
        "text": "Sonrisa sarcástica",
        "type": "B"
      },
      {
        "text": "Cara de sufrimiento",
        "type": "C"
      },
      {
        "text": "Normal, sin expresión meme",
        "type": "D"
      }
    ]
  },
  {
    "id": 8,
    "text": "¿Qué tan seguido dices \"no mames\"?",
    "options": [
      {
        "text": "Es mi muletilla",
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
    "id": 9,
    "text": "¿Cómo manejas el lunes?",
    "options": [
      {
        "text": "Con memes de odio al lunes",
        "type": "A"
      },
      {
        "text": "Con café y resignación",
        "type": "B"
      },
      {
        "text": "Sufriendo públicamente",
        "type": "C"
      },
      {
        "text": "Normal, es un día más",
        "type": "D"
      }
    ]
  },
  {
    "id": 10,
    "text": "¿Cuál es tu frase en situaciones difíciles?",
    "options": [
      {
        "text": "Ya ni modo",
        "type": "A"
      },
      {
        "text": "Así es la vida",
        "type": "B"
      },
      {
        "text": "Me quiero morir (en broma)",
        "type": "C"
      },
      {
        "text": "Hay que resolverlo",
        "type": "D"
      }
    ]
  }
];

export const results: Record<string, { title: string; description: string; traits: string[]; advice: string }> = {
  "A": {
    "title": "🐸 El Rana René Mexicano",
    "description": "Tomas café mientras el mundo arde y dices \"pero bueno, eso no es mi problema\". Tu humor absurdo es tu escudo ante la vida. Eres el meme viviente.",
    "traits": [
      "Absurdo",
      "Irónico",
      "Relajado",
      "Memero"
    ],
    "advice": "Tu humor es tu defensa. Sigue viendo la vida como un meme eterno."
  },
  "B": {
    "title": "😏 El Meme del Señor Burns",
    "description": "Tu sarcasmo es elegante y tu humor es fino. No necesitas groserías para ser gracioso. Eres el meme intelectual.",
    "traits": [
      "Sarcástico",
      "Inteligente",
      "Elegante",
      "Observador"
    ],
    "advice": "Tu sarcasmo es un arte. Sigue siendo ese meme refinado."
  },
  "C": {
    "title": "😭 El Meme del Llora",
    "description": "Tu humor es tu mecanismo de defensa ante el sufrimiento. Te ríes de tus tragedias y las compartes con el mundo. Eres el meme del pueblo.",
    "traits": [
      "Autoirónico",
      "Real",
      "Empático",
      "Honesto"
    ],
    "advice": "Reírte de ti mismo es sano. Solo no sufras tanto de verdad."
  },
  "D": {
    "title": "📝 El Serio",
    "description": "Los memes no son lo tuyo y está bien. Prefieres la comunicación directa y el humor no es tu lenguaje principal.",
    "traits": [
      "Serio",
      "Directo",
      "Práctico",
      "Diferente"
    ],
    "advice": "No todos tienen que ser memeros. Pero un buen meme alegra el día."
  }
};

export function calculateResult(answers: Record<number, string>): string {
  const scores: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  Object.values(answers).forEach(answer => {
    if (scores[answer] !== undefined) scores[answer]++;
  });
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}
