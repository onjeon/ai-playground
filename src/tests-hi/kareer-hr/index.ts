// HR करियर टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'People problems में interest?',
    options: [
      {
        text: 'Love solving people issues',
        type: 'A'
      },
      {
        text: 'Interested हूं helping',
        type: 'B'
      },
      {
        text: 'Okay है',
        type: 'C'
      },
      {
        text: 'Prefer technical problems',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Empathy level?',
    options: [
      {
        text: 'Good empathy',
        type: 'B'
      },
      {
        text: 'Average',
        type: 'C'
      },
      {
        text: 'More logical than emotional',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Confidentiality maintain?',
    options: [
      {
        text: 'Absolutely, trustworthy',
        type: 'A'
      },
      {
        text: 'Yes, maintain secrets',
        type: 'B'
      },
      {
        text: 'Try to, sometimes slip',
        type: 'C'
      },
      {
        text: 'Gossip tendency',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Conflict mediation?',
    options: [
      {
        text: 'Natural mediator, resolve conflicts',
        type: 'A'
      },
      {
        text: 'Can mediate',
        type: 'B'
      },
      {
        text: 'Challenging है',
        type: 'C'
      },
      {
        text: 'Avoid conflicts',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Organizational policies interest?',
    options: [
      {
        text: 'Interested in creating fair policies',
        type: 'A'
      },
      {
        text: 'Policies important हैं',
        type: 'B'
      },
      {
        text: 'Boring लगता है',
        type: 'C'
      },
      {
        text: 'Policies restrictive लगती हैं',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Interviewing people?',
    options: [
      {
        text: 'Enjoy assessing candidates',
        type: 'A'
      },
      {
        text: 'अच्छा लगता है',
        type: 'B'
      },
      {
        text: 'Okay है',
        type: 'C'
      },
      {
        text: 'Judging people uncomfortable',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Training और development?',
    options: [
      {
        text: 'Love developing others',
        type: 'A'
      },
      {
        text: 'Interested हूं',
        type: 'B'
      },
      {
        text: 'Can do',
        type: 'C'
      },
      {
        text: 'Not my thing',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Difficult conversations?',
    options: [
      {
        text: 'Handle tactfully',
        type: 'A'
      },
      {
        text: 'Manage कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'Avoid करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Very uncomfortable',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Multitasking various HR activities?',
    options: [
      {
        text: 'Good at juggling multiple',
        type: 'A'
      },
      {
        text: 'Can manage',
        type: 'B'
      },
      {
        text: 'Prefer focused work',
        type: 'C'
      },
      {
        text: 'Multitasking difficult',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Labor laws और compliance?',
    options: [
      {
        text: 'Interested, important है',
        type: 'A'
      },
      {
        text: 'Will learn',
        type: 'B'
      },
      {
        text: 'Boring पर जरूरी',
        type: 'C'
      },
      {
        text: 'Legal stuff avoid',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Data और analytics in HR?',
    options: [
      {
        text: 'Like using data for decisions',
        type: 'A'
      },
      {
        text: 'Can work with data',
        type: 'B'
      },
      {
        text: 'Prefer intuition',
        type: 'C'
      },
      {
        text: 'Data work नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'HR career excitement?',
    options: [
      {
        text: 'Excited, want to be in HR',
        type: 'A'
      },
      {
        text: 'Interested',
        type: 'B'
      },
      {
        text: 'One option',
        type: 'C'
      },
      {
        text: 'Not excited',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'HR प्रोफेशनल',
    emoji: '🌟',
    description: 'HR आपके लिए perfect है! People skills, empathy, और organizational understanding strong है।',
    traits: [
      'empathetic',
      'organized',
      'people-oriented',
      'trustworthy'
    ],
    strengths: [
      'empathetic',
      'organized'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'HR में career शुरू करें। MBA HR या SHRM certifications लें। Talent Acquisition से शुरू करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'HR में संभावना',
    emoji: '💼',
    description: 'आप में HR की potential है। कुछ skills develop करके successful HR professional बनेंगे।',
    traits: [
      'developing',
      'interested',
      'people-focused',
      'learning'
    ],
    strengths: [
      'developing',
      'interested'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'HR courses करें। Internships ढूंढें। Soft skills improve करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'अन्य विकल्प देखें',
    emoji: '📈',
    description: 'Pure HR शायद best fit नहीं है। HR-adjacent roles या other functions देखें।',
    traits: [
      'mixed',
      'uncertain',
      'exploring',
      'alternative-seeker'
    ],
    strengths: [
      'mixed',
      'uncertain'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Admin, operations, या L&D roles देखें। HR का एक specific area choose करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'HR नहीं',
    emoji: '🎯',
    description: 'HR career आपके लिए suitable नहीं लगता। Technical या non-people roles explore करें।',
    traits: [
      'non-HR',
      'technical',
      'task-oriented',
      'introverted'
    ],
    strengths: [
      'non-HR',
      'technical'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Finance, IT, या operations में career देखें जहां people issues कम हों।'
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
