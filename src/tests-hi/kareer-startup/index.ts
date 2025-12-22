// स्टार्टअप योग्यता टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Uncertain salary के बारे में?',
    options: [
      {
        text: 'Okay है, growth potential matters',
        type: 'A'
      },
      {
        text: 'थोड़ा uncomfortable पर manageable',
        type: 'B'
      },
      {
        text: 'Prefer fixed salary',
        type: 'C'
      },
      {
        text: 'Fixed salary ही चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Multiple roles handle करना?',
    options: [
      {
        text: 'Love it! Learning opportunity',
        type: 'A'
      },
      {
        text: 'Manage कर लूंगा/लूंगी',
        type: 'B'
      },
      {
        text: 'थोड़ा overwhelming',
        type: 'C'
      },
      {
        text: 'एक defined role चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Long working hours?',
    options: [
      {
        text: 'Ready हूं, passion के लिए',
        type: 'A'
      },
      {
        text: 'जब जरूरी हो तब okay',
        type: 'B'
      },
      {
        text: 'Work-life balance important',
        type: 'C'
      },
      {
        text: '9-5 prefer करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Ambiguity और unclear directions?',
    options: [
      {
        text: 'Thrive करता/करती हूं, figure out करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Handle कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'थोड़ा stress होता है',
        type: 'C'
      },
      {
        text: 'Clear instructions चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Company fail हो जाए तो?',
    options: [
      {
        text: 'Learning, move to next opportunity',
        type: 'A'
      },
      {
        text: 'Setback पर recover',
        type: 'B'
      },
      {
        text: 'काफी upset होऊंगा/होऊंगी',
        type: 'C'
      }
    ]
  },
  {
    id: 6,
    question: 'Equity vs higher salary?',
    options: [
      {
        text: 'Equity prefer, long-term vision',
        type: 'A'
      },
      {
        text: 'Mix of both अच्छा',
        type: 'B'
      },
      {
        text: 'Higher salary prefer',
        type: 'C'
      },
      {
        text: 'Cash in hand better',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Flat hierarchy के बारे में?',
    options: [
      {
        text: 'Love it, direct access to founders',
        type: 'A'
      },
      {
        text: 'अच्छा है',
        type: 'B'
      },
      {
        text: 'Some structure better',
        type: 'C'
      },
      {
        text: 'Proper hierarchy prefer',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Learning without formal training?',
    options: [
      {
        text: 'Self-learner हूं, figure out करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Mix of both okay',
        type: 'B'
      },
      {
        text: 'Proper training prefer',
        type: 'C'
      },
      {
        text: 'Structured training essential',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Rapid changes और pivots?',
    options: [
      {
        text: 'Exciting! Love the dynamism',
        type: 'A'
      },
      {
        text: 'Adaptable हूं',
        type: 'B'
      },
      {
        text: 'Stability prefer',
        type: 'C'
      },
      {
        text: 'Constant changes stressful',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Brand name vs growth opportunity?',
    options: [
      {
        text: 'Growth opportunity matters more',
        type: 'A'
      },
      {
        text: 'Both consider करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Brand name important है',
        type: 'C'
      },
      {
        text: 'Big brand ही चाहिए resume पर',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Entrepreneurial mindset?',
    options: [
      {
        text: 'हां, ownership लेता/लेती हूं',
        type: 'A'
      },
      {
        text: 'Developing है',
        type: 'B'
      },
      {
        text: 'Employee mindset है mostly',
        type: 'C'
      },
      {
        text: 'Prefer being told what to do',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Benefits और perks?',
    options: [
      {
        text: 'Experience matters, perks secondary',
        type: 'A'
      },
      {
        text: 'Basic perks चाहिए',
        type: 'B'
      },
      {
        text: 'Good benefits important',
        type: 'C'
      },
      {
        text: 'Full corporate benefits essential',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'स्टार्टअप योद्धा',
    emoji: '🌟',
    description: 'आप startup culture के लिए perfect fit हैं! Risk-taking, adaptability, और hustle mentality आप में है।',
    traits: [
      'adaptable',
      'risk-taker',
      'hustler',
      'growth-oriented'
    ],
    strengths: [
      'adaptable',
      'risk-taker'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Startup join करें या खुद शुरू करें! India का startup ecosystem booming है। Bangalore, Gurgaon explore करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'संभावित स्टार्टअप फिट',
    emoji: '💼',
    description: 'आप startup में survive कर सकते हैं। कुछ adjustments के साथ thrive भी करेंगे।',
    traits: [
      'adaptable',
      'learning',
      'open-minded',
      'potential'
    ],
    strengths: [
      'adaptable',
      'learning'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Series B+ startup try करें, थोड़ी stability और learning opportunity दोनों मिलेंगी।'
    ]
  },
  C: {
    type: 'C',
    title: 'कॉर्पोरेट प्रेफरेंस',
    emoji: '📈',
    description: 'Startup life आपके लिए challenging होगी। Established companies ज्यादा suit करेंगी।',
    traits: [
      'stable',
      'structured',
      'security-focused',
      'traditional'
    ],
    strengths: [
      'stable',
      'structured'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Large MNCs या PSUs में career देखें। Innovation departments में startup-like experience मिल सकती है।'
    ]
  },
  D: {
    type: 'D',
    title: 'स्थिरता पसंद',
    emoji: '🎯',
    description: 'Startup definitely आपके लिए नहीं है, और ये okay है! Stability और structure आपकी priority है।',
    traits: [
      'stability-seeker',
      'structured',
      'risk-averse',
      'secure'
    ],
    strengths: [
      'stability-seeker',
      'structured'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Government jobs, banks, या established corporates में career focus करें। Stability important है for peace of mind।'
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
