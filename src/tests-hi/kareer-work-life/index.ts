// वर्क-लाइफ बैलेंस टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Office के बाद work thoughts?',
    options: [
      {
        text: 'Switch off, personal time enjoy',
        type: 'A'
      },
      {
        text: 'कभी कभी याद आता है',
        type: 'B'
      },
      {
        text: 'अक्सर work सोचता/सोचती रहता/रहती हूं',
        type: 'C'
      },
      {
        text: '24x7 work mind में',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Weekends कैसे बिताते हैं?',
    options: [
      {
        text: 'Family, hobbies, rest - no work',
        type: 'A'
      },
      {
        text: 'Mostly free, कभी कभी work',
        type: 'B'
      },
      {
        text: 'अक्सर work करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Weekend? What weekend?',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Vacation ली कब last?',
    options: [
      {
        text: 'Recent, regular breaks',
        type: 'A'
      },
      {
        text: 'कुछ months पहले',
        type: 'B'
      },
      {
        text: 'Long time हो गया',
        type: 'C'
      },
      {
        text: 'याद नहीं कब ली थी',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Family time quality?',
    options: [
      {
        text: 'Daily quality time, present रहता/रहती हूं',
        type: 'A'
      },
      {
        text: 'Try करता/करती हूं time देने की',
        type: 'B'
      },
      {
        text: 'Limited time मिलता है',
        type: 'C'
      },
      {
        text: 'Family complains करती है',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Personal hobbies?',
    options: [
      {
        text: 'Active hobbies, regular time',
        type: 'A'
      },
      {
        text: 'कभी कभी time मिलता है',
        type: 'B'
      },
      {
        text: 'Hobbies छूट गई हैं',
        type: 'C'
      },
      {
        text: 'Hobby? क्या है ये?',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Late night work emails?',
    options: [
      {
        text: 'Never check after hours',
        type: 'A'
      },
      {
        text: 'Rarely, only urgent',
        type: 'B'
      },
      {
        text: 'Often check करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Always connected',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Health और fitness?',
    options: [
      {
        text: 'Regular exercise, healthy habits',
        type: 'A'
      },
      {
        text: 'Try करता/करती हूं fit रहने की',
        type: 'B'
      },
      {
        text: 'Health neglect हो रही है',
        type: 'C'
      },
      {
        text: 'No time for health',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Social life?',
    options: [
      {
        text: 'Active, friends से मिलता/मिलती हूं',
        type: 'A'
      },
      {
        text: 'Occasional meetups',
        type: 'B'
      },
      {
        text: 'Social life suffer',
        type: 'C'
      },
      {
        text: 'Friends से connection lost',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Sleep quality?',
    options: [
      {
        text: '7-8 hours, good sleep',
        type: 'A'
      },
      {
        text: 'Mostly okay sleep',
        type: 'B'
      },
      {
        text: 'Often tired, less sleep',
        type: 'C'
      },
      {
        text: 'Chronic sleep issues',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Saying no to extra work?',
    options: [
      {
        text: 'Comfortable setting boundaries',
        type: 'A'
      },
      {
        text: 'Sometimes say no',
        type: 'B'
      },
      {
        text: 'Difficult है मना करना',
        type: 'C'
      },
      {
        text: 'हमेशा yes बोल देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Energy levels overall?',
    options: [
      {
        text: 'Good energy, feel fresh',
        type: 'A'
      },
      {
        text: 'Normal energy',
        type: 'B'
      },
      {
        text: 'Often tired',
        type: 'C'
      },
      {
        text: 'Exhausted constantly',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Work-life satisfaction?',
    options: [
      {
        text: 'Happy with balance',
        type: 'A'
      },
      {
        text: 'Could be better',
        type: 'B'
      },
      {
        text: 'Not satisfied',
        type: 'C'
      },
      {
        text: 'Very unhappy',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'संतुलित जीवन',
    emoji: '🌟',
    description: 'Excellent! आपका work-life balance great है। Career और personal life दोनों अच्छे से manage हो रहे हैं।',
    traits: [
      'balanced',
      'healthy',
      'fulfilled',
      'sustainable'
    ],
    strengths: [
      'balanced',
      'healthy'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपना balance maintain करें। दूसरों को भी inspire करें। Boundaries protect करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'सुधार संभव',
    emoji: '💼',
    description: 'Balance okay है पर better हो सकता है। Minor adjustments से significant improvement होगी।',
    traits: [
      'managing',
      'aware',
      'improving',
      'potential'
    ],
    strengths: [
      'managing',
      'aware'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Boundaries strengthen करें। Personal time protect करें। Regular breaks schedule करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'असंतुलन की चेतावनी',
    emoji: '📈',
    description: 'Work-life balance out of sync है। Health और relationships पर impact हो रहा है।',
    traits: [
      'imbalanced',
      'stressed',
      'needs-change',
      'at-risk'
    ],
    strengths: [
      'imbalanced',
      'stressed'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Serious action लें - workload discuss करें, priorities reassess करें। Professional help consider करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'गंभीर असंतुलन',
    emoji: '🎯',
    description: 'Critical imbalance! Life work से dominate हो रही है। ये sustainable नहीं है।',
    traits: [
      'severe-imbalance',
      'burnout-risk',
      'urgent',
      'needs-intervention'
    ],
    strengths: [
      'severe-imbalance',
      'burnout-risk'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'तुरंत changes करें। Leave लें, job change consider करें if needed। Health first priority बनाएं।'
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
