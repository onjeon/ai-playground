// स्किल डेवलपमेंट टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'New skill सीखने का approach?',
    options: [
      {
        text: 'Structured courses, certifications',
        type: 'A'
      },
      {
        text: 'Online videos, self-paced learning',
        type: 'B'
      },
      {
        text: 'Learning by doing, projects',
        type: 'C'
      },
      {
        text: 'जब जरूरत पड़े तब सीखता/सीखती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Skill gap awareness?',
    options: [
      {
        text: 'Clear idea है क्या सीखना है',
        type: 'A'
      },
      {
        text: 'Mostly पता है',
        type: 'B'
      },
      {
        text: 'थोड़ा confused हूं',
        type: 'C'
      },
      {
        text: 'पता नहीं क्या सीखूं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Learning time allocation?',
    options: [
      {
        text: 'Daily dedicated learning time',
        type: 'A'
      },
      {
        text: 'Weekly कुछ hours',
        type: 'B'
      },
      {
        text: 'Irregular learning',
        type: 'C'
      },
      {
        text: 'Learning के लिए time नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Applying new skills?',
    options: [
      {
        text: 'Immediately implement करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Try करता/करती हूं apply करने की',
        type: 'B'
      },
      {
        text: 'Opportunity आने पर',
        type: 'C'
      },
      {
        text: 'Learn करके छोड़ देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Industry trends follow करना?',
    options: [
      {
        text: 'Actively follow, early adopter',
        type: 'A'
      },
      {
        text: 'Major trends पता रहते हैं',
        type: 'B'
      },
      {
        text: 'कभी कभी पढ़ता/पढ़ती हूं',
        type: 'C'
      },
      {
        text: 'Trends follow नहीं करता/करती',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Investment in learning (money)?',
    options: [
      {
        text: 'Courses, books पर invest करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Selective investment',
        type: 'B'
      },
      {
        text: 'Free resources mostly',
        type: 'C'
      },
      {
        text: 'Learning पर पैसे खर्च नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Soft skills vs technical skills?',
    options: [
      {
        text: 'Both पर equally focus',
        type: 'A'
      },
      {
        text: 'Technical ज्यादा, soft भी',
        type: 'B'
      },
      {
        text: 'One type पर ज्यादा focus',
        type: 'C'
      },
      {
        text: 'Imbalanced development',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Feedback से सीखना?',
    options: [
      {
        text: 'हर feedback से improve करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Constructive feedback helpful',
        type: 'B'
      },
      {
        text: 'Sometimes apply करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Feedback से rarely सीखता/सीखती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Learning resources?',
    options: [
      {
        text: 'Multiple sources - courses, books, mentors',
        type: 'A'
      },
      {
        text: 'Online platforms mainly',
        type: 'B'
      },
      {
        text: 'Limited resources use',
        type: 'C'
      },
      {
        text: 'Resources तक पहुंच issue है',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Learning completion rate?',
    options: [
      {
        text: 'Most courses complete करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Important ones complete',
        type: 'B'
      },
      {
        text: 'Often incomplete छोड़ देता/देती हूं',
        type: 'C'
      },
      {
        text: 'Rarely complete करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Teaching others?',
    options: [
      {
        text: 'Share करता/करती हूं जो सीखा',
        type: 'A'
      },
      {
        text: 'कभी कभी explain करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Rarely teach करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Teaching comfortable नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Future skills planning?',
    options: [
      {
        text: '2-3 year skill roadmap है',
        type: 'A'
      },
      {
        text: 'Next skills identified हैं',
        type: 'B'
      },
      {
        text: 'Vague idea है',
        type: 'C'
      },
      {
        text: 'कोई plan नहीं',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'लर्निंग चैंपियन',
    emoji: '🌟',
    description: 'Outstanding! आप continuous learner हैं। Skills development आपकी priority है। Future-proof career बनाने की राह पर हैं।',
    traits: [
      'learner',
      'disciplined',
      'growth-minded',
      'proactive'
    ],
    strengths: [
      'learner',
      'disciplined'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Learning को और scale करें। दूसरों को भी inspire करें। Thought leader बनें अपने area में।'
    ]
  },
  B: {
    type: 'B',
    title: 'सक्रिय सीखने वाला',
    emoji: '💼',
    description: 'अच्छी learning habits हैं आपकी। थोड़ी और consistency से top learner बन सकते हैं।',
    traits: [
      'learning',
      'developing',
      'motivated',
      'growing'
    ],
    strengths: [
      'learning',
      'developing'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Learning routine fix करें। Accountability partner ढूंढें। Track progress।'
    ]
  },
  C: {
    type: 'C',
    title: 'अनियमित सीखना',
    emoji: '📈',
    description: 'Learning sporadic है। More structured approach से career में बहुत फायदा होगा।',
    traits: [
      'irregular',
      'potential',
      'developing',
      'needs-structure'
    ],
    strengths: [
      'irregular',
      'potential'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Daily 30 minutes learning commit करें। Clear goals set करें। Small wins celebrate करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'सीखने पर फोकस करें',
    emoji: '🎯',
    description: 'Learning आपकी priority नहीं है अभी। आज के market में ये risky है। Start today!',
    traits: [
      'stagnant',
      'needs-motivation',
      'potential',
      'at-risk'
    ],
    strengths: [
      'stagnant',
      'needs-motivation'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Skill obsolescence के risk को समझें। कोई एक skill choose करें, start करें। Journey of thousand miles starts with one step।'
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
