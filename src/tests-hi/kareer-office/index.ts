// ऑफिस कल्चर टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Dress code preference?',
    options: [
      {
        text: 'Casual, comfortable clothes',
        type: 'A'
      },
      {
        text: 'Smart casual okay',
        type: 'B'
      },
      {
        text: 'Business formals prefer',
        type: 'C'
      },
      {
        text: 'Uniform या strict dress code okay',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Hierarchy के बारे में?',
    options: [
      {
        text: 'Flat structure, direct access to leadership',
        type: 'A'
      },
      {
        text: 'Some hierarchy okay, not too rigid',
        type: 'B'
      },
      {
        text: 'Clear hierarchy better',
        type: 'C'
      },
      {
        text: 'Strict hierarchy comfortable',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Work hours preference?',
    options: [
      {
        text: 'Flexible, focus on output',
        type: 'A'
      },
      {
        text: 'Flexible with core hours',
        type: 'B'
      },
      {
        text: 'Fixed hours prefer',
        type: 'C'
      },
      {
        text: 'Strict timing better for discipline',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Office activities और parties?',
    options: [
      {
        text: 'Love them, actively participate',
        type: 'A'
      },
      {
        text: 'Nice to have, enjoy करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Optional हों तो better',
        type: 'C'
      },
      {
        text: 'Office events avoid करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Open office vs cabins?',
    options: [
      {
        text: 'Open office, collaborative space',
        type: 'A'
      },
      {
        text: 'Hot desking / flexible seating',
        type: 'B'
      },
      {
        text: 'Dedicated desk prefer',
        type: 'C'
      },
      {
        text: 'Private cabin/office चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Communication style?',
    options: [
      {
        text: 'Informal, first-name basis',
        type: 'A'
      },
      {
        text: 'Professional but friendly',
        type: 'B'
      },
      {
        text: 'Formal communication prefer',
        type: 'C'
      },
      {
        text: 'Strictly formal',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Company size preference?',
    options: [
      {
        text: 'Startup (<50 people)',
        type: 'A'
      },
      {
        text: 'Mid-size (50-500)',
        type: 'B'
      },
      {
        text: 'Large company (500-5000)',
        type: 'C'
      },
      {
        text: 'Enterprise (5000+)',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Decision making process?',
    options: [
      {
        text: 'Fast, empowered to decide',
        type: 'A'
      },
      {
        text: 'Collaborative decisions',
        type: 'B'
      },
      {
        text: 'Structured approval process',
        type: 'C'
      },
      {
        text: 'Clear chain of command',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Feedback culture?',
    options: [
      {
        text: 'Open, real-time feedback',
        type: 'A'
      },
      {
        text: 'Regular, constructive feedback',
        type: 'B'
      },
      {
        text: 'Formal review cycles',
        type: 'C'
      },
      {
        text: 'Annual appraisals enough',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Work-life integration?',
    options: [
      {
        text: 'Blur okay, passion-driven',
        type: 'A'
      },
      {
        text: 'Balanced integration',
        type: 'B'
      },
      {
        text: 'Clear separation prefer',
        type: 'C'
      },
      {
        text: 'Strict work-life boundaries',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Learning और growth?',
    options: [
      {
        text: 'Self-driven, opportunity ढूंढता/ढूंढती हूं',
        type: 'A'
      },
      {
        text: 'Company supported learning',
        type: 'B'
      },
      {
        text: 'Structured training programs',
        type: 'C'
      },
      {
        text: 'Defined career path',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Job role definition?',
    options: [
      {
        text: 'Fluid, wear multiple hats',
        type: 'A'
      },
      {
        text: 'Core role + stretch assignments',
        type: 'B'
      },
      {
        text: 'Well-defined responsibilities',
        type: 'C'
      },
      {
        text: 'Strictly defined JD',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'स्टार्टअप कल्चर',
    emoji: '🌟',
    description: 'Startup या modern tech company culture आपके लिए perfect है! Fast-paced, flexible, और innovative environment में आप thrive करेंगे।',
    traits: [
      'adaptable',
      'innovative',
      'risk-taker',
      'self-driven'
    ],
    strengths: [
      'adaptable',
      'innovative'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Startups, tech companies, या modern enterprises target करें। Culture fit important - interview में पूछें।'
    ]
  },
  B: {
    type: 'B',
    title: 'प्रोग्रेसिव कॉर्पोरेट',
    emoji: '💼',
    description: 'Progressive corporate culture suit करेगा आपको। Structure + flexibility का balance चाहिए आपको।',
    traits: [
      'balanced',
      'professional',
      'adaptable',
      'growth-oriented'
    ],
    strengths: [
      'balanced',
      'professional'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Modern MNCs, progressive Indian companies में देखें। Culture evolving हो वो better।'
    ]
  },
  C: {
    type: 'C',
    title: 'ट्रेडिशनल कॉर्पोरेट',
    emoji: '📈',
    description: 'Traditional corporate setup comfortable है आपके लिए। Clear structure और processes prefer करते हैं आप।',
    traits: [
      'structured',
      'professional',
      'stable',
      'process-oriented'
    ],
    strengths: [
      'structured',
      'professional'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Established corporates, banks, या legacy companies suit करेंगी। Stability और structure मिलेगा।'
    ]
  },
  D: {
    type: 'D',
    title: 'फॉर्मल वर्क एनवायरनमेंट',
    emoji: '🎯',
    description: 'Formal, hierarchical setup prefer करते हैं आप। Government, PSU, या traditional industries suit करेंगी।',
    traits: [
      'formal',
      'hierarchical',
      'traditional',
      'structured'
    ],
    strengths: [
      'formal',
      'hierarchical'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Government jobs, PSUs, traditional industries में career देखें। आपकी preference completely valid है।'
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
