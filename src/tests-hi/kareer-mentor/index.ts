// मेंटरशिप स्टाइल टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Junior को guidance देना?',
    options: [
      {
        text: 'Love it! Actively mentor करता/करती हूं',
        type: 'A'
      },
      {
        text: 'जब पूछें तब help करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Time नहीं मिलता',
        type: 'C'
      },
      {
        text: 'Mentoring में interest नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'खुद के लिए mentor है?',
    options: [
      {
        text: 'हां, active mentor-mentee relationship',
        type: 'A'
      },
      {
        text: 'Informal mentors हैं',
        type: 'B'
      },
      {
        text: 'ढूंढ रहा/रही हूं',
        type: 'C'
      },
      {
        text: 'कोई mentor नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Feedback देने का तरीका?',
    options: [
      {
        text: 'Constructive, specific, actionable',
        type: 'A'
      },
      {
        text: 'Honest और helpful',
        type: 'B'
      },
      {
        text: 'General feedback देता/देती हूं',
        type: 'C'
      },
      {
        text: 'Feedback देने में uncomfortable',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Feedback लेने का तरीका?',
    options: [
      {
        text: 'Actively seek, implement करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Open हूं feedback के लिए',
        type: 'B'
      },
      {
        text: 'Accept करता/करती हूं पर act कम',
        type: 'C'
      },
      {
        text: 'Feedback से defensive होता/होती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Knowledge sharing?',
    options: [
      {
        text: 'Proactively share करता/करती हूं',
        type: 'A'
      },
      {
        text: 'जब relevant हो तब share',
        type: 'B'
      },
      {
        text: 'पूछने पर बताता/बताती हूं',
        type: 'C'
      },
      {
        text: 'Knowledge hoarding tendency',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Mentee की success पर?',
    options: [
      {
        text: 'Proud feel होता है, celebrate करता/करती हूं',
        type: 'A'
      },
      {
        text: 'खुश होता/होती हूं',
        type: 'B'
      },
      {
        text: 'Neutral',
        type: 'C'
      },
      {
        text: 'Competition feel होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Time investment in mentoring?',
    options: [
      {
        text: 'Dedicated time निकालता/निकालती हूं',
        type: 'A'
      },
      {
        text: 'जब हो सके तब',
        type: 'B'
      },
      {
        text: 'Limited time है इसके लिए',
        type: 'C'
      },
      {
        text: 'Time invest नहीं करता/करती',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Reverse mentoring (juniors से सीखना)?',
    options: [
      {
        text: 'Open हूं, सबसे सीखता/सीखती हूं',
        type: 'A'
      },
      {
        text: 'कभी कभी सीखता/सीखती हूं',
        type: 'B'
      },
      {
        text: 'Rarely',
        type: 'C'
      },
      {
        text: 'Juniors से क्या सीखना',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Career guidance conversation?',
    options: [
      {
        text: 'Deep, thoughtful discussions',
        type: 'A'
      },
      {
        text: 'Helpful conversations होती हैं',
        type: 'B'
      },
      {
        text: 'Surface level mostly',
        type: 'C'
      },
      {
        text: 'Career discuss करना awkward',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Mistakes पर reaction (अपनी या mentee की)?',
    options: [
      {
        text: 'Learning opportunity, support देता/देती हूं',
        type: 'A'
      },
      {
        text: 'समझाता/समझाती हूं क्या गलत हुआ',
        type: 'B'
      },
      {
        text: 'थोड़ा frustrated',
        type: 'C'
      },
      {
        text: 'Judgmental हो जाता/जाती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Long-term mentoring relationships?',
    options: [
      {
        text: 'Years पुरानी relationships हैं',
        type: 'A'
      },
      {
        text: 'कुछ lasting connections',
        type: 'B'
      },
      {
        text: 'Short-term mostly',
        type: 'C'
      },
      {
        text: 'Relationships maintain नहीं होती',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Mentoring की importance?',
    options: [
      {
        text: 'Essential for growth, दोनों तरफ से',
        type: 'A'
      },
      {
        text: 'Important है',
        type: 'B'
      },
      {
        text: 'Helpful पर optional',
        type: 'C'
      },
      {
        text: 'Overrated लगता है',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'आदर्श मेंटर/मेंटी',
    emoji: '🌟',
    description: 'Excellent! आप mentorship के true value समझते हैं। दोनों roles में effective हैं। Growth mindset exceptional है।',
    traits: [
      'growth-oriented',
      'generous',
      'learner',
      'guide'
    ],
    strengths: [
      'growth-oriented',
      'generous'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Formal mentoring programs join करें। Mentor network expand करें। Pay it forward।'
    ]
  },
  B: {
    type: 'B',
    title: 'अच्छा मेंटरशिप स्टाइल',
    emoji: '💼',
    description: 'आप mentorship में अच्छे हैं। थोड़ी और intentionality से और भी effective होंगे।',
    traits: [
      'capable',
      'helpful',
      'learning',
      'developing'
    ],
    strengths: [
      'capable',
      'helpful'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'More structured approach लें। Regular check-ins schedule करें। Both sides invest करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'मेंटरशिप एक्सप्लोर करें',
    emoji: '📈',
    description: 'Mentorship आपके career के लिए valuable होगी। इसे priority बनाने से फायदा होगा।',
    traits: [
      'potential',
      'developing',
      'learning',
      'exploring'
    ],
    strengths: [
      'potential',
      'developing'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Mentor actively ढूंढें, mentee बनें। Mentoring की benefits experience करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'मेंटरशिप पर पुनर्विचार',
    emoji: '🎯',
    description: 'Mentorship आपके radar पर नहीं है। इससे आप valuable growth opportunity miss कर रहे हैं।',
    traits: [
      'independent',
      'isolated',
      'potential',
      'needs-exposure'
    ],
    strengths: [
      'independent',
      'isolated'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Mentorship के benefits research करें। एक mentor ढूंढें as experiment। Mind बदल सकता है।'
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
