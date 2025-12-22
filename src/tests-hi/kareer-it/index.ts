// IT करियर योग्यता टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Coding या programming के बारे में?',
    options: [
      {
        text: 'Love it! Already code करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Interested हूं, सीखना चाहता/चाहती हूं',
        type: 'B'
      },
      {
        text: 'Neutral हूं',
        type: 'C'
      },
      {
        text: 'Coding boring लगती है',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Technical problem solve करना?',
    options: [
      {
        text: 'Exciting! मजा आता है',
        type: 'A'
      },
      {
        text: 'अच्छा लगता है',
        type: 'B'
      },
      {
        text: 'Okay है, जरूरत पड़े तो',
        type: 'C'
      },
      {
        text: 'Technical problems avoid करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'New technology सीखना?',
    options: [
      {
        text: 'Always exploring new tech',
        type: 'A'
      },
      {
        text: 'Interest है सीखने में',
        type: 'B'
      },
      {
        text: 'जब जरूरी हो तब',
        type: 'C'
      },
      {
        text: 'Tech updates follow करना मुश्किल',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Logical thinking कैसी है?',
    options: [
      {
        text: 'Strong, systematic approach',
        type: 'A'
      },
      {
        text: 'अच्छी है mostly',
        type: 'B'
      },
      {
        text: 'Average',
        type: 'C'
      },
      {
        text: 'Logic से ज्यादा intuition',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Computer के सामने घंटों बैठना?',
    options: [
      {
        text: 'No problem, already करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Manage कर सकता/सकती हूं',
        type: 'B'
      },
      {
        text: 'थोड़ा difficult',
        type: 'C'
      },
      {
        text: 'Outdoor prefer करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Mathematics में interest?',
    options: [
      {
        text: 'Strong in maths, enjoy करता/करती हूं',
        type: 'A'
      },
      {
        text: 'ठीक ठाक हूं',
        type: 'B'
      },
      {
        text: 'Average',
        type: 'C'
      },
      {
        text: 'Maths मेरा subject नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Debugging - error ढूंढना code में?',
    options: [
      {
        text: 'Detective work! मजा आता है',
        type: 'A'
      },
      {
        text: 'Patience से करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Frustrating पर manage',
        type: 'C'
      },
      {
        text: 'बहुत irritating लगता है',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'IT career के बारे में knowledge?',
    options: [
      {
        text: 'हां, different roles पता हैं',
        type: 'A'
      },
      {
        text: 'Basic idea है',
        type: 'B'
      },
      {
        text: 'थोड़ा बहुत पता है',
        type: 'C'
      },
      {
        text: 'ज्यादा idea नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Team में technical discussion?',
    options: [
      {
        text: 'Actively participate करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Listen और learn करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Mostly quiet रहता/रहती हूं',
        type: 'C'
      },
      {
        text: 'Technical discussions boring',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Night shifts या flexible hours?',
    options: [
      {
        text: 'No problem, adaptable हूं',
        type: 'A'
      },
      {
        text: 'Occasionally okay',
        type: 'B'
      },
      {
        text: 'Prefer regular hours',
        type: 'C'
      },
      {
        text: 'Fixed daytime only',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Documentation और detail work?',
    options: [
      {
        text: 'Important है, carefully करता/करती हूं',
        type: 'A'
      },
      {
        text: 'जब जरूरी हो',
        type: 'B'
      },
      {
        text: 'Boring लगता है',
        type: 'C'
      },
      {
        text: 'Documentation avoid करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'IT industry का future?',
    options: [
      {
        text: 'Exciting! AI, ML, Cloud - opportunities',
        type: 'A'
      },
      {
        text: 'अच्छा scope है',
        type: 'B'
      },
      {
        text: 'Competitive है बहुत',
        type: 'C'
      },
      {
        text: 'Saturated market लगता है',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'IT नेचुरल',
    emoji: '🌟',
    description: 'आप IT के लिए perfect fit हैं! Technical mindset, problem-solving, और passion सब है। Bangalore, Hyderabad, Pune में opportunities explore करें!',
    traits: [
      'technical',
      'logical',
      'problem-solver',
      'tech-enthusiast'
    ],
    strengths: [
      'technical',
      'logical'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Software development, Data Science, या Cloud में specialize करें। Top IT companies target करें। Certifications लें।'
    ]
  },
  B: {
    type: 'B',
    title: 'IT संभावना',
    emoji: '💼',
    description: 'आप में IT career की potential है! थोड़ी training और practice से अच्छा career बना सकते हैं।',
    traits: [
      'learning',
      'interested',
      'developing',
      'potential'
    ],
    strengths: [
      'learning',
      'interested'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Online courses से start करें - Coursera, Udemy. Internships ढूंढें। Gradually skills build करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'अन्य विकल्प बेहतर',
    emoji: '📈',
    description: 'IT शायद आपकी first choice नहीं होनी चाहिए। पर IT-adjacent roles जैसे PM, BA consider कर सकते हैं।',
    traits: [
      'mixed',
      'exploring',
      'considering',
      'alternative'
    ],
    strengths: [
      'mixed',
      'exploring'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Non-technical IT roles explore करें - Business Analyst, Project Manager, UX Research. Technical background जरूरी नहीं।'
    ]
  },
  D: {
    type: 'D',
    title: 'Non-IT बेहतर',
    emoji: '🎯',
    description: 'IT industry शायद आपके लिए नहीं है। अपनी actual interests और strengths के हिसाब से career choose करें।',
    traits: [
      'non-technical',
      'different-interests',
      'alternative-path'
    ],
    strengths: [
      'non-technical',
      'different-interests'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Marketing, Sales, HR, Finance जैसे non-IT fields में career देखें। IT सबके लिए नहीं है, और ये okay है!'
    ]
  }
};

export function calculateResult(answers: number[]): typeof results.A {
  const typeCount: Record<string, number> = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (question && question.options[answerIndex]) {
      const type = question.options[answerIndex].type;
      typeCount[type] = (typeCount[type] || 0) + 1;
    }
  });
  const dominantType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  return results[dominantType as keyof typeof results];
}
