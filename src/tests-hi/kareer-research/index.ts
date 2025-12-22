// रिसर्च करियर टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Curiosity level?',
    options: [
      {
        text: 'Extremely curious, always asking why',
        type: 'A'
      },
      {
        text: 'Good curiosity',
        type: 'B'
      },
      {
        text: 'Average',
        type: 'C'
      },
      {
        text: 'Accept things as they are',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Deep reading और study?',
    options: [
      {
        text: 'Love reading research papers',
        type: 'A'
      },
      {
        text: 'Can read lengthy materials',
        type: 'B'
      },
      {
        text: 'Prefer summaries',
        type: 'C'
      },
      {
        text: 'Reading boring लगता है',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Patience for long-term work?',
    options: [
      {
        text: 'Very patient, years of work okay',
        type: 'A'
      },
      {
        text: 'Good patience',
        type: 'B'
      },
      {
        text: 'Quick results prefer',
        type: 'C'
      },
      {
        text: 'Impatient for results',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Detail orientation?',
    options: [
      {
        text: 'Extremely detail-oriented',
        type: 'A'
      },
      {
        text: 'Good attention to detail',
        type: 'B'
      },
      {
        text: 'Average',
        type: 'C'
      },
      {
        text: 'Big picture person',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Failure और unsuccessful experiments?',
    options: [
      {
        text: 'Part of process, learn from it',
        type: 'A'
      },
      {
        text: 'Manage disappointment',
        type: 'B'
      },
      {
        text: 'Demotivating होता है',
        type: 'C'
      },
      {
        text: 'Failure से upset',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Solitary work?',
    options: [
      {
        text: 'Enjoy working alone',
        type: 'A'
      },
      {
        text: 'Comfortable alone',
        type: 'B'
      },
      {
        text: 'Prefer teamwork',
        type: 'C'
      },
      {
        text: 'Need constant interaction',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Academic writing?',
    options: [
      {
        text: 'Good at technical writing',
        type: 'A'
      },
      {
        text: 'Can write papers',
        type: 'B'
      },
      {
        text: 'Writing challenging',
        type: 'C'
      },
      {
        text: 'Writing weak है',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'PhD interest?',
    options: [
      {
        text: 'Planning PhD',
        type: 'A'
      },
      {
        text: 'Considering PhD',
        type: 'B'
      },
      {
        text: 'Not sure',
        type: 'C'
      },
      {
        text: 'No PhD interest',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Lower initial pay okay?',
    options: [
      {
        text: 'Yes, knowledge matters more',
        type: 'A'
      },
      {
        text: 'Okay initially',
        type: 'B'
      },
      {
        text: 'Concerned about money',
        type: 'C'
      },
      {
        text: 'Need high pay',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Statistics और methodology?',
    options: [
      {
        text: 'Strong in stats, love methods',
        type: 'A'
      },
      {
        text: 'Good understanding',
        type: 'B'
      },
      {
        text: 'Average',
        type: 'C'
      },
      {
        text: 'Stats weak है',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Contributing to knowledge?',
    options: [
      {
        text: 'Primary motivation',
        type: 'A'
      },
      {
        text: 'Important है',
        type: 'B'
      },
      {
        text: 'One factor',
        type: 'C'
      },
      {
        text: 'Practical impact prefer',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Research career excitement?',
    options: [
      {
        text: 'Dream career, very excited',
        type: 'A'
      },
      {
        text: 'Strongly interested',
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
    title: 'रिसर्चर बनने के लिए बने',
    emoji: '🌟',
    description: 'Research आपकी calling है! Curiosity, patience, और analytical mind सब है।',
    traits: [
      'curious',
      'analytical',
      'patient',
      'detail-oriented'
    ],
    strengths: [
      'curious',
      'analytical'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'PhD pursue करें। Research institutes (IISc, IITs, CSIR) या academia target करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'रिसर्च में संभावना',
    emoji: '💼',
    description: 'आप में research potential है। कुछ areas develop करके successful researcher बनेंगे।',
    traits: [
      'developing',
      'curious',
      'learning',
      'analytical'
    ],
    strengths: [
      'developing',
      'curious'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Research assistantships ढूंढें। Projects में involve हों। PhD consider करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'एप्लाइड रिसर्च बेहतर',
    emoji: '📈',
    description: 'Pure research challenging हो सकती है। Applied research या industry R&D देखें।',
    traits: [
      'practical',
      'mixed',
      'application-oriented',
      'developing'
    ],
    strengths: [
      'practical',
      'mixed'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Industry R&D roles देखें। Practical problem-solving projects में involve हों।'
    ]
  },
  D: {
    type: 'D',
    title: 'रिसर्च नहीं',
    emoji: '🎯',
    description: 'Research career आपके लिए suitable नहीं लगता। Applied या operational roles देखें।',
    traits: [
      'practical',
      'action-oriented',
      'non-academic',
      'results-focused'
    ],
    strengths: [
      'practical',
      'action-oriented'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Industry में practical roles में career बनाएं। Research सबके लिए नहीं है।'
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
