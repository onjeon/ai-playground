// वेतन बातचीत टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Current market salary पता है आपको?',
    options: [
      {
        text: 'हां, detailed research की है',
        type: 'A'
      },
      {
        text: 'Approximate idea है',
        type: 'B'
      },
      {
        text: 'थोड़ा बहुत पता है',
        type: 'C'
      },
      {
        text: 'नहीं पता properly',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Interview में expected salary पूछें तो?',
    options: [
      {
        text: 'Confident range बताता/बताती हूं with justification',
        type: 'A'
      },
      {
        text: 'Range बता देता/देती हूं',
        type: 'B'
      },
      {
        text: 'Hesitate करता/करती हूं, कम बोल देता/देती हूं',
        type: 'C'
      },
      {
        text: '\'जो आप दें\' बोल देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Offer letter मिले जो expected से कम हो?',
    options: [
      {
        text: 'Counter offer करता/करती हूं professionally',
        type: 'A'
      },
      {
        text: 'थोड़ा negotiate try करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Accept कर लेता/लेती हूं usually',
        type: 'C'
      },
      {
        text: 'Reject या accept, negotiate नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Appraisal discussion में?',
    options: [
      {
        text: 'Achievements present करके hike demand करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Politely expectations share करता/करती हूं',
        type: 'B'
      },
      {
        text: 'जो मिले वो accept',
        type: 'C'
      },
      {
        text: 'Discuss करने में uncomfortable',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'आपकी value proposition clear है?',
    options: [
      {
        text: 'हां, exactly जानता/जानती हूं मेरा contribution',
        type: 'A'
      },
      {
        text: 'Mostly clear है',
        type: 'B'
      },
      {
        text: 'थोड़ा confused हूं',
        type: 'C'
      },
      {
        text: 'नहीं पता कैसे articulate करूं',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Salary के अलावा benefits negotiate करना?',
    options: [
      {
        text: 'हां, total package देखता/देखती हूं',
        type: 'A'
      },
      {
        text: 'कभी कभी benefits भी discuss',
        type: 'B'
      },
      {
        text: 'सिर्फ salary पर focus',
        type: 'C'
      },
      {
        text: 'Benefits? वो भी negotiate होता है?',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Walk away करने की courage?',
    options: [
      {
        text: 'हां, अगर offer ठीक नहीं तो reject करूंगा/करूंगी',
        type: 'A'
      },
      {
        text: 'Depends on situation',
        type: 'B'
      },
      {
        text: 'Difficult decision होगा',
        type: 'C'
      },
      {
        text: 'Job मिले वो काफी है',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Competitor offers के बारे में?',
    options: [
      {
        text: 'Strategically leverage करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Mention करता/करती हूं if relevant',
        type: 'B'
      },
      {
        text: 'Rarely discuss करता/करती हूं',
        type: 'C'
      },
      {
        text: 'नहीं बताता/बताती दूसरे offers',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Salary discussion में body language?',
    options: [
      {
        text: 'Confident, eye contact, firm voice',
        type: 'A'
      },
      {
        text: 'Generally composed रहता/रहती हूं',
        type: 'B'
      },
      {
        text: 'थोड़ा nervous हो जाता/जाती हूं',
        type: 'C'
      },
      {
        text: 'Very uncomfortable feel होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Rejection के बाद re-negotiate?',
    options: [
      {
        text: 'हां, alternative proposals लाता/लाती हूं',
        type: 'A'
      },
      {
        text: 'Once more try करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Accept the decision',
        type: 'C'
      },
      {
        text: 'Give up कर देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Documentation और proof?',
    options: [
      {
        text: 'Achievements documented, data ready',
        type: 'A'
      },
      {
        text: 'Major achievements याद हैं',
        type: 'B'
      },
      {
        text: 'कुछ कुछ याद है',
        type: 'C'
      },
      {
        text: 'Track नहीं रखता/रखती',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Money की बात करने में?',
    options: [
      {
        text: 'Comfortable, professional discussion',
        type: 'A'
      },
      {
        text: 'Manage कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'थोड़ा awkward लगता है',
        type: 'C'
      },
      {
        text: 'बहुत uncomfortable',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'वेतन विशेषज्ञ',
    emoji: '🌟',
    description: 'Excellent negotiator! आप अपनी value जानते हैं और effectively communicate करते हैं। आप deserved salary लेकर आते हैं।',
    traits: [
      'confident',
      'strategic',
      'assertive',
      'prepared'
    ],
    strengths: [
      'confident',
      'strategic'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Keep it up! अपनी skills से दूसरों को भी help करें। Career coaching consider करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'सक्षम वार्ताकार',
    emoji: '💼',
    description: 'आप decent negotiator हैं। थोड़ी और practice और confidence से better results मिलेंगे।',
    traits: [
      'capable',
      'improving',
      'learning',
      'potential'
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
      'Mock negotiations practice करें, achievements track करें। Market research regularly करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'सीखने की जरूरत',
    emoji: '📈',
    description: 'Salary negotiation में improvement scope है। आप शायद deserve से कम ले रहे हैं।',
    traits: [
      'hesitant',
      'learning',
      'undervalued',
      'developing'
    ],
    strengths: [
      'hesitant',
      'learning'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Market salary research करें, achievements list बनाएं। Negotiation workshops attend करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'शुरुआती स्तर',
    emoji: '🎯',
    description: 'Negotiation आपकी weakness है। पर ये skill सीखी जा सकती है! शुरुआत करें आज से।',
    traits: [
      'beginner',
      'needs-training',
      'potential',
      'learning'
    ],
    strengths: [
      'beginner',
      'needs-training'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Negotiation course करें, mentor से सीखें। Small negotiations से practice करें। Gradually confidence build होगा।'
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
