// फ्रीलांस योग्यता टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Self-discipline के बारे में?',
    options: [
      {
        text: 'Strong, बिना boss के भी productive',
        type: 'A'
      },
      {
        text: 'अच्छी है mostly',
        type: 'B'
      },
      {
        text: 'Structure चाहिए काम करने के लिए',
        type: 'C'
      },
      {
        text: 'Supervision जरूरी है',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Irregular income handle करना?',
    options: [
      {
        text: 'Manage कर लूंगा/लूंगी, savings रखूंगा/रखूंगी',
        type: 'A'
      },
      {
        text: 'थोड़ा stressful पर manage',
        type: 'B'
      },
      {
        text: 'Prefer fixed salary',
        type: 'C'
      },
      {
        text: 'Fixed income essential',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Client finding और marketing?',
    options: [
      {
        text: 'Confident हूं, network strong है',
        type: 'A'
      },
      {
        text: 'सीखूंगा/सीखूंगी, try करूंगा/करूंगी',
        type: 'B'
      },
      {
        text: 'Marketing weak point है',
        type: 'C'
      },
      {
        text: 'Self-promotion से बचता/बचती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Multiple projects juggle करना?',
    options: [
      {
        text: 'Expert हूं multitasking में',
        type: 'A'
      },
      {
        text: 'Handle कर सकता/सकती हूं',
        type: 'B'
      },
      {
        text: 'एक time पर एक काम better',
        type: 'C'
      },
      {
        text: 'Multiple projects overwhelming',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Work from home productivity?',
    options: [
      {
        text: 'More productive at home',
        type: 'A'
      },
      {
        text: 'Equally productive',
        type: 'B'
      },
      {
        text: 'Office में better काम होता है',
        type: 'C'
      },
      {
        text: 'Home पर focus नहीं होता',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Rejection और dry spells?',
    options: [
      {
        text: 'Part of game, persistence रखता/रखती हूं',
        type: 'A'
      },
      {
        text: 'Handle कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'Demotivating होता है',
        type: 'C'
      },
      {
        text: 'Rejection से बहुत affect होता/होती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Pricing और negotiation?',
    options: [
      {
        text: 'Confidently rate negotiate करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Learning, improving',
        type: 'B'
      },
      {
        text: 'Undercharge कर देता/देती हूं',
        type: 'C'
      },
      {
        text: 'Pricing discussion uncomfortable',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Skill set diversity?',
    options: [
      {
        text: 'Multiple marketable skills हैं',
        type: 'A'
      },
      {
        text: 'एक दो strong skills',
        type: 'B'
      },
      {
        text: 'Limited skills अभी',
        type: 'C'
      },
      {
        text: 'Skills develop करने होंगे',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Deadlines without supervision?',
    options: [
      {
        text: 'Always deliver on time',
        type: 'A'
      },
      {
        text: 'Mostly meet deadlines',
        type: 'B'
      },
      {
        text: 'कभी कभी miss होती हैं',
        type: 'C'
      },
      {
        text: 'Supervision जरूरी है deadlines के लिए',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Isolation और loneliness?',
    options: [
      {
        text: 'Enjoy solitude, productive alone',
        type: 'A'
      },
      {
        text: 'Manage कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'Miss office environment',
        type: 'C'
      },
      {
        text: 'Daily interaction जरूरी है',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Health insurance और benefits?',
    options: [
      {
        text: 'खुद arrange कर लूंगा/लूंगी',
        type: 'A'
      },
      {
        text: 'थोड़ी concern है पर manage',
        type: 'B'
      },
      {
        text: 'Company benefits important',
        type: 'C'
      },
      {
        text: 'Employment benefits essential',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Long term plan?',
    options: [
      {
        text: 'Agency बनाना या scale करना',
        type: 'A'
      },
      {
        text: 'Freelance as main career',
        type: 'B'
      },
      {
        text: 'Side income option',
        type: 'C'
      },
      {
        text: 'Full-time job prefer',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'जन्मजात फ्रीलांसर',
    emoji: '🌟',
    description: 'आप freelancing के लिए perfect हैं! Self-discipline, skills, और entrepreneurial mindset सब है। Upwork, Fiverr, या direct clients से शुरू करें!',
    traits: [
      'self-motivated',
      'disciplined',
      'entrepreneurial',
      'adaptable'
    ],
    strengths: [
      'self-motivated',
      'disciplined'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Portfolio build करें, niche choose करें, premium rates charge करें। Eventually agency या productized service में expand करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'संभावित फ्रीलांसर',
    emoji: '💼',
    description: 'आप में freelancing की potential है। कुछ areas में develop करके successful freelancer बन सकते हैं।',
    traits: [
      'potential',
      'learning',
      'developing',
      'motivated'
    ],
    strengths: [
      'potential',
      'learning'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Part-time से शुरू करें, job के साथ। Skills और client base build करें, फिर full-time जाएं।'
    ]
  },
  C: {
    type: 'C',
    title: 'साइड हसल विकल्प',
    emoji: '📈',
    description: 'Full-time freelancing शायद challenging होगी। Side income के तौर पर try करें।',
    traits: [
      'cautious',
      'stable-preferred',
      'part-time-suitable'
    ],
    strengths: [
      'cautious',
      'stable-preferred'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Job continue करें, weekends पर freelance projects लें। Passive income या gig work explore करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'नौकरी बेहतर',
    emoji: '🎯',
    description: 'Freelancing आपके लिए नहीं है, और ये okay है! Traditional employment में आप ज्यादा comfortable और productive होंगे।',
    traits: [
      'employee-minded',
      'structure-needed',
      'team-oriented'
    ],
    strengths: [
      'employee-minded',
      'structure-needed'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अच्छी company में full-time job focus करें। Remote work options explore करें for flexibility।'
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
