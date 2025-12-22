// करियर गोल टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: '5 साल में कहां देखते हैं खुद को?',
    options: [
      {
        text: 'Clear vision है, plan भी',
        type: 'A'
      },
      {
        text: 'Rough idea है',
        type: 'B'
      },
      {
        text: 'थोड़ा confused हूं',
        type: 'C'
      },
      {
        text: 'पता नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Dream job define किया है?',
    options: [
      {
        text: 'हां, specific role/company',
        type: 'A'
      },
      {
        text: 'Type of work पता है',
        type: 'B'
      },
      {
        text: 'Vague idea',
        type: 'C'
      },
      {
        text: 'Dream job? सोचा नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Short-term goals (1 year)?',
    options: [
      {
        text: 'Written, measurable goals',
        type: 'A'
      },
      {
        text: 'कुछ goals हैं mind में',
        type: 'B'
      },
      {
        text: 'एक दो vague goals',
        type: 'C'
      },
      {
        text: 'Goals नहीं सोचे',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Skills roadmap?',
    options: [
      {
        text: 'Clear skill plan है',
        type: 'A'
      },
      {
        text: 'कुछ skills identified',
        type: 'B'
      },
      {
        text: 'Vague idea',
        type: 'C'
      },
      {
        text: 'Skills roadmap? नहीं है',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Progress tracking?',
    options: [
      {
        text: 'Regular review करता/करती हूं',
        type: 'A'
      },
      {
        text: 'कभी कभी assess',
        type: 'B'
      },
      {
        text: 'Rarely track करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Track नहीं करता/करती',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Career decision लेना?',
    options: [
      {
        text: 'Goals aligned decisions',
        type: 'A'
      },
      {
        text: 'Try करता/करती हूं align करने की',
        type: 'B'
      },
      {
        text: 'Random decisions mostly',
        type: 'C'
      },
      {
        text: 'जो मिले वो',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Mentorship for goals?',
    options: [
      {
        text: 'Mentor से regular guidance',
        type: 'A'
      },
      {
        text: 'कभी कभी advice लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'खुद ही figure out',
        type: 'C'
      },
      {
        text: 'Guidance नहीं लेता/लेती',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Industry/domain clarity?',
    options: [
      {
        text: 'Clear, focused industry/domain',
        type: 'A'
      },
      {
        text: 'Mostly clear',
        type: 'B'
      },
      {
        text: 'Multiple interests, confused',
        type: 'C'
      },
      {
        text: 'कोई preference नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Salary/level expectations?',
    options: [
      {
        text: 'Clear milestones set हैं',
        type: 'A'
      },
      {
        text: 'Rough targets',
        type: 'B'
      },
      {
        text: 'Vague expectations',
        type: 'C'
      },
      {
        text: 'जो मिले',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Plan B और alternatives?',
    options: [
      {
        text: 'Multiple paths planned',
        type: 'A'
      },
      {
        text: 'एक backup plan',
        type: 'B'
      },
      {
        text: 'Plan B नहीं',
        type: 'C'
      },
      {
        text: 'Plan A ही नहीं तो B क्या',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Timeline for goals?',
    options: [
      {
        text: 'Specific deadlines set',
        type: 'A'
      },
      {
        text: 'Rough timeline',
        type: 'B'
      },
      {
        text: 'Someday mentality',
        type: 'C'
      },
      {
        text: 'कोई timeline नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Written career plan?',
    options: [
      {
        text: 'हां, documented plan',
        type: 'A'
      },
      {
        text: 'Notes तो हैं कुछ',
        type: 'B'
      },
      {
        text: 'सब mind में',
        type: 'C'
      },
      {
        text: 'लिखा नहीं कभी',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'गोल ओरिएंटेड',
    emoji: '🌟',
    description: 'Excellent! आपके career goals crystal clear हैं। Plan और execution दोनों strong। Success path पर हैं!',
    traits: [
      'focused',
      'planned',
      'strategic',
      'disciplined'
    ],
    strengths: [
      'focused',
      'planned'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Plan execute करते रहें। Flexibility भी रखें। Milestones celebrate करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'दिशा स्पष्ट',
    emoji: '💼',
    description: 'Direction clear है पर detailed plan बनाने में scope है। थोड़ी और clarity से better होगा।',
    traits: [
      'directional',
      'developing',
      'potential',
      'aware'
    ],
    strengths: [
      'directional',
      'developing'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Goals को SMART बनाएं। Written plan बनाएं। Regular review शुरू करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'क्लैरिटी जरूरी',
    emoji: '📈',
    description: 'Career goals में clarity lacking है। ये career drift का risk बढ़ाता है।',
    traits: [
      'unclear',
      'exploring',
      'unfocused',
      'potential'
    ],
    strengths: [
      'unclear',
      'exploring'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Career counseling consider करें। Self-assessment करें। Goals define करें जल्दी।'
    ]
  },
  D: {
    type: 'D',
    title: 'शुरुआत करें',
    emoji: '🎯',
    description: 'Career goals अभी नहीं हैं। ये ठीक है पर शुरुआत करना important है।',
    traits: [
      'unplanned',
      'drifting',
      'needs-direction',
      'beginner'
    ],
    strengths: [
      'unplanned',
      'drifting'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'आज ही start करें। 5 साल vision सोचें। Mentor से बात करें। Small goals से शुरू।'
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
