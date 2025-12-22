// MBA योग्यता टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'MBA करने का main reason?',
    options: [
      {
        text: 'Career switch या acceleration',
        type: 'A'
      },
      {
        text: 'Knowledge और skills बढ़ाना',
        type: 'B'
      },
      {
        text: 'सबने बोला अच्छा है',
        type: 'C'
      },
      {
        text: 'पता नहीं, बस करना है',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Work experience कितना है?',
    options: [
      {
        text: '3+ years relevant experience',
        type: 'A'
      },
      {
        text: '1-3 years experience',
        type: 'B'
      },
      {
        text: 'Fresher हूं',
        type: 'C'
      },
      {
        text: 'No work experience',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'CAT/GMAT preparation?',
    options: [
      {
        text: 'Seriously preparing, mock scores good',
        type: 'A'
      },
      {
        text: 'Started preparation',
        type: 'B'
      },
      {
        text: 'Planning to start',
        type: 'C'
      },
      {
        text: 'अभी सोचा नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Financial planning for MBA?',
    options: [
      {
        text: 'Clear plan - savings, loans, ROI calculated',
        type: 'A'
      },
      {
        text: 'Rough idea है',
        type: 'B'
      },
      {
        text: 'पैसे की चिंता है',
        type: 'C'
      },
      {
        text: 'Finance issue major',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Target colleges?',
    options: [
      {
        text: 'IIMs, top B-schools identified',
        type: 'A'
      },
      {
        text: 'कुछ colleges shortlisted',
        type: 'B'
      },
      {
        text: 'Anywhere MBA मिल जाए',
        type: 'C'
      },
      {
        text: 'Colleges पता नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Post-MBA goals?',
    options: [
      {
        text: 'Clear - consulting, banking, etc.',
        type: 'A'
      },
      {
        text: 'Vague idea है',
        type: 'B'
      },
      {
        text: 'Decide होगा बाद में',
        type: 'C'
      },
      {
        text: 'कोई plan नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Leadership experience?',
    options: [
      {
        text: 'Strong leadership roles, achievements',
        type: 'A'
      },
      {
        text: 'कुछ leadership experience',
        type: 'B'
      },
      {
        text: 'Limited experience',
        type: 'C'
      },
      {
        text: 'Leadership? कोई नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: '2 years full-time के लिए ready?',
    options: [
      {
        text: 'हां, planned है',
        type: 'A'
      },
      {
        text: 'Manage हो जाएगा',
        type: 'B'
      },
      {
        text: 'Concern है job छोड़ने में',
        type: 'C'
      },
      {
        text: 'Part-time या executive prefer',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Current salary vs MBA ROI?',
    options: [
      {
        text: 'Clear ROI calculation, makes sense',
        type: 'A'
      },
      {
        text: 'Long-term beneficial लगता है',
        type: 'B'
      },
      {
        text: 'Unsure about ROI',
        type: 'C'
      },
      {
        text: 'ROI पर doubt है',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Extracurriculars और profile?',
    options: [
      {
        text: 'Strong profile, diverse achievements',
        type: 'A'
      },
      {
        text: 'Some good points हैं',
        type: 'B'
      },
      {
        text: 'Weak extracurriculars',
        type: 'C'
      },
      {
        text: 'Nothing special',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Academic background?',
    options: [
      {
        text: 'Strong academics, good percentage',
        type: 'A'
      },
      {
        text: 'Average academics',
        type: 'B'
      },
      {
        text: 'Below average',
        type: 'C'
      },
      {
        text: 'Weak academic record',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'MBA या alternative?',
    options: [
      {
        text: 'MBA clear choice, researched',
        type: 'A'
      },
      {
        text: 'MBA seems best option',
        type: 'B'
      },
      {
        text: 'MBA one of the options',
        type: 'C'
      },
      {
        text: 'Confused about MBA vs other',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'MBA के लिए तैयार',
    emoji: '🌟',
    description: 'Excellent! आप MBA के लिए well-prepared हैं। Clear goals, strong profile, और practical planning है।',
    traits: [
      'prepared',
      'focused',
      'strategic',
      'ready'
    ],
    strengths: [
      'prepared',
      'focused'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'IIMs और top B-schools target करें। GD/PI preparation शुरू करें। Network with alumni।'
    ]
  },
  B: {
    type: 'B',
    title: 'तैयारी जारी',
    emoji: '💼',
    description: 'MBA potential है पर कुछ areas में work करना होगा। 6-12 months में ready हो सकते हैं।',
    traits: [
      'developing',
      'potential',
      'improving',
      'motivated'
    ],
    strengths: [
      'developing',
      'potential'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'CAT/GMAT serious लें। Profile build करें। Clear post-MBA goals define करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'पुनर्विचार करें',
    emoji: '📈',
    description: 'MBA अभी सही decision है या नहीं, ये evaluate करें। जल्दबाजी में decision ना लें।',
    traits: [
      'uncertain',
      'exploring',
      'needs-clarity',
      'questioning'
    ],
    strengths: [
      'uncertain',
      'exploring'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'पहले work experience लें। MBA alternatives भी explore करें। Clear goals बनाएं।'
    ]
  },
  D: {
    type: 'D',
    title: 'अभी नहीं',
    emoji: '🎯',
    description: 'MBA शायद अभी सही choice नहीं है। Foundation build करें पहले।',
    traits: [
      'unprepared',
      'needs-foundation',
      'exploring',
      'early-stage'
    ],
    strengths: [
      'unprepared',
      'needs-foundation'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      '2-3 years work experience लें। Career clarity लाएं। तब MBA consider करें।'
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
