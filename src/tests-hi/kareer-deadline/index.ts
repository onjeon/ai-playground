// डेडलाइन मैनेजमेंट टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'New project मिले तो शुरू कब करते हैं?',
    options: [
      {
        text: 'Immediately plan और start',
        type: 'A'
      },
      {
        text: 'जल्दी ही शुरू करता/करती हूं',
        type: 'B'
      },
      {
        text: 'थोड़ा procrastinate, फिर start',
        type: 'C'
      },
      {
        text: 'Last minute तक wait',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Deadline याद रखना?',
    options: [
      {
        text: 'Calendar, reminders, all set',
        type: 'A'
      },
      {
        text: 'Important ones याद रहती हैं',
        type: 'B'
      },
      {
        text: 'कभी कभी भूल जाता/जाती हूं',
        type: 'C'
      },
      {
        text: 'Deadlines track करना weak',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Buffer time रखते हैं?',
    options: [
      {
        text: 'हमेशा, unexpected के लिए',
        type: 'A'
      },
      {
        text: 'Important tasks में हां',
        type: 'B'
      },
      {
        text: 'Rarely',
        type: 'C'
      },
      {
        text: 'Buffer? क्या होता है?',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Deadline miss होने वाली हो?',
    options: [
      {
        text: 'Proactively communicate, negotiate',
        type: 'A'
      },
      {
        text: 'Inform करता/करती हूं पहले से',
        type: 'B'
      },
      {
        text: 'Last moment बताता/बताती हूं',
        type: 'C'
      },
      {
        text: 'Miss हो जाए तब बताता/बताती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Multiple deadlines same time?',
    options: [
      {
        text: 'Prioritize, systematically deliver',
        type: 'A'
      },
      {
        text: 'Manage कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'Stressful होता है',
        type: 'C'
      },
      {
        text: 'Panic mode में जाता/जाती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Unrealistic deadline मिले?',
    options: [
      {
        text: 'Push back करता/करती हूं professionally',
        type: 'A'
      },
      {
        text: 'Discuss करता/करती हूं scope या timeline',
        type: 'B'
      },
      {
        text: 'Accept कर लेता/लेती हूं, फिर struggle',
        type: 'C'
      },
      {
        text: 'हमेशा yes बोल देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Last minute rush?',
    options: [
      {
        text: 'Rarely, mostly पहले ready',
        type: 'A'
      },
      {
        text: 'कभी कभी होता है',
        type: 'B'
      },
      {
        text: 'Often last minute',
        type: 'C'
      },
      {
        text: 'हमेशा last minute ही होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Quality under pressure?',
    options: [
      {
        text: 'Quality maintained, pressure में भी',
        type: 'A'
      },
      {
        text: 'Mostly good quality',
        type: 'B'
      },
      {
        text: 'Quality suffers sometimes',
        type: 'C'
      },
      {
        text: 'Pressure में quality drop',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Self-imposed deadlines?',
    options: [
      {
        text: 'हां, खुद के लिए भी deadlines',
        type: 'A'
      },
      {
        text: 'Important things में हां',
        type: 'B'
      },
      {
        text: 'External deadlines ही follow',
        type: 'C'
      },
      {
        text: 'Self-discipline weak',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Dependencies handle करना?',
    options: [
      {
        text: 'Track करता/करती हूं, early follow-up',
        type: 'A'
      },
      {
        text: 'Regular check-ins',
        type: 'B'
      },
      {
        text: 'Last moment पता चलता है',
        type: 'C'
      },
      {
        text: 'Dependencies से deadlines miss',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Deadline completion rate?',
    options: [
      {
        text: '95%+ on-time delivery',
        type: 'A'
      },
      {
        text: 'Mostly on time',
        type: 'B'
      },
      {
        text: 'कभी कभी miss',
        type: 'C'
      },
      {
        text: 'Often miss होती हैं',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Deadline stress?',
    options: [
      {
        text: 'Low, comfortable with deadlines',
        type: 'A'
      },
      {
        text: 'Manageable stress',
        type: 'B'
      },
      {
        text: 'काफी stress होता है',
        type: 'C'
      },
      {
        text: 'Deadline anxiety severe',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'डेडलाइन मास्टर',
    emoji: '🌟',
    description: 'Excellent deadline management! आप reliable, organized, और proactive हैं। Teams आप पर depend कर सकती हैं।',
    traits: [
      'reliable',
      'organized',
      'proactive',
      'systematic'
    ],
    strengths: [
      'reliable',
      'organized'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपनी techniques दूसरों को share करें। Project management roles consider करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'सक्षम मैनेजर',
    emoji: '💼',
    description: 'आप deadlines अच्छे से handle करते हैं। Minor improvements से और भी reliable बनेंगे।',
    traits: [
      'capable',
      'improving',
      'reliable',
      'organized'
    ],
    strengths: [
      'capable',
      'improving'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Buffer time और tracking tools add करें। Consistency पर focus करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'सुधार की गुंजाइश',
    emoji: '📈',
    description: 'Deadline management में significant improvement होनी चाहिए। ये career impact करता है।',
    traits: [
      'developing',
      'inconsistent',
      'potential',
      'learning'
    ],
    strengths: [
      'developing',
      'inconsistent'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Project management basics सीखें। Start early habit बनाएं। Accountability partner ढूंढें।'
    ]
  },
  D: {
    type: 'D',
    title: 'प्राथमिकता बनाएं',
    emoji: '🎯',
    description: 'Deadline management major weakness है। इसे address करना urgent है career के लिए।',
    traits: [
      'challenged',
      'needs-help',
      'at-risk',
      'developing'
    ],
    strengths: [
      'challenged',
      'needs-help'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Professional help लें, productivity coaching consider करें। Small wins से build करें।'
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
