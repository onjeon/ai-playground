// नौकरी की तैयारी टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'आपका resume कितना updated है?',
    options: [
      {
        text: 'Last week ही update किया',
        type: 'A'
      },
      {
        text: '1-2 months पहले',
        type: 'B'
      },
      {
        text: '6 months से ज्यादा पुराना',
        type: 'C'
      },
      {
        text: 'Resume बनाया ही नहीं properly',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'LinkedIn profile की status?',
    options: [
      {
        text: 'Complete profile, 500+ connections',
        type: 'A'
      },
      {
        text: 'Active profile, regular posts',
        type: 'B'
      },
      {
        text: 'Profile है पर active नहीं',
        type: 'C'
      },
      {
        text: 'LinkedIn properly use नहीं करता/करती',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Interview preparation कैसी है?',
    options: [
      {
        text: 'Mock interviews दिए, fully prepared',
        type: 'A'
      },
      {
        text: 'Common questions practice की हैं',
        type: 'B'
      },
      {
        text: 'थोड़ी बहुत preparation',
        type: 'C'
      },
      {
        text: 'अभी तक कोई preparation नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Technical skills की current status?',
    options: [
      {
        text: 'Industry required skills में expert',
        type: 'A'
      },
      {
        text: 'Most skills में proficient',
        type: 'B'
      },
      {
        text: 'Basic knowledge है',
        type: 'C'
      },
      {
        text: 'Upskilling जरूरी है',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Job portals पर activity?',
    options: [
      {
        text: 'Multiple portals पर active, daily apply',
        type: 'A'
      },
      {
        text: 'Regularly check करता/करती हूं',
        type: 'B'
      },
      {
        text: 'कभी कभी देखता/देखती हूं',
        type: 'C'
      },
      {
        text: 'Register ही नहीं किया',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Professional networking कैसी है?',
    options: [
      {
        text: 'Strong network, referrals मिलते हैं',
        type: 'A'
      },
      {
        text: 'Good contacts, connected हूं',
        type: 'B'
      },
      {
        text: 'Limited network',
        type: 'C'
      },
      {
        text: 'Networking की नहीं properly',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Certifications और courses?',
    options: [
      {
        text: 'Multiple relevant certifications हैं',
        type: 'A'
      },
      {
        text: 'कुछ important courses किए हैं',
        type: 'B'
      },
      {
        text: 'एक दो certificates हैं',
        type: 'C'
      },
      {
        text: 'कोई extra certification नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Industry knowledge और trends?',
    options: [
      {
        text: 'Latest trends से fully updated',
        type: 'A'
      },
      {
        text: 'Major updates पता हैं',
        type: 'B'
      },
      {
        text: 'Basic idea है',
        type: 'C'
      },
      {
        text: 'Industry trends follow नहीं करता/करती',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Salary expectations clear हैं?',
    options: [
      {
        text: 'Market research की है, clear expectations',
        type: 'A'
      },
      {
        text: 'Approximate idea है',
        type: 'B'
      },
      {
        text: 'Confused हूं थोड़ा',
        type: 'C'
      },
      {
        text: 'पता नहीं कितना demand करूं',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Portfolio या work samples?',
    options: [
      {
        text: 'Professional portfolio ready',
        type: 'A'
      },
      {
        text: 'कुछ samples collect किए हैं',
        type: 'B'
      },
      {
        text: 'थोड़ा काम बाकी है',
        type: 'C'
      },
      {
        text: 'Portfolio नहीं है',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Soft skills की status?',
    options: [
      {
        text: 'Communication, teamwork excellent',
        type: 'A'
      },
      {
        text: 'Good soft skills हैं',
        type: 'B'
      },
      {
        text: 'Improvement की जरूरत है',
        type: 'C'
      },
      {
        text: 'Soft skills पर काम करना होगा',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Job search strategy कैसी है?',
    options: [
      {
        text: 'Clear plan, target companies, daily action',
        type: 'A'
      },
      {
        text: 'Strategy है, follow कर रहा/रही हूं',
        type: 'B'
      },
      {
        text: 'Random approach',
        type: 'C'
      },
      {
        text: 'कोई strategy नहीं',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'पूरी तरह तैयार',
    emoji: '🌟',
    description: 'बधाई! आप job market के लिए fully prepared हैं। आपका resume, skills, network सब strong है। बस सही opportunity का इंतजार है!',
    traits: [
      'prepared',
      'proactive',
      'professional',
      'confident'
    ],
    strengths: [
      'prepared',
      'proactive'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Apply करते रहें, interviews में confident रहें। आपकी dream job जल्दी मिलेगी!'
    ]
  },
  B: {
    type: 'B',
    title: 'काफी तैयार',
    emoji: '💼',
    description: 'आप अच्छी तरह तैयार हैं! थोड़ी और polishing से आप और भी strong candidate बनेंगे।',
    traits: [
      'ready',
      'improving',
      'focused',
      'motivated'
    ],
    strengths: [
      'ready',
      'improving'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'कुछ और certifications करें, mock interviews practice करें। Success करीब है!'
    ]
  },
  C: {
    type: 'C',
    title: 'तैयारी जारी',
    emoji: '📈',
    description: 'आपने शुरुआत की है पर अभी काफी काम बाकी है। Focused effort से आप जल्दी ready हो जाएंगे।',
    traits: [
      'developing',
      'learning',
      'potential',
      'growing'
    ],
    strengths: [
      'developing',
      'learning'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Resume update करें, LinkedIn active करें, skills upgrade करें। 2-3 months में ready होंगे!'
    ]
  },
  D: {
    type: 'D',
    title: 'तैयारी शुरू करें',
    emoji: '🎯',
    description: 'आपको job readiness पर seriously काम करना होगा। पर tension नहीं, अभी से start करें!',
    traits: [
      'beginner',
      'needs-guidance',
      'potential',
      'starting'
    ],
    strengths: [
      'beginner',
      'needs-guidance'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'पहले resume बनाएं, LinkedIn setup करें, required skills सीखें। Mentor की help लें।'
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
