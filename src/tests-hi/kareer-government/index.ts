// सरकारी नौकरी योग्यता टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Job security के बारे में?',
    options: [
      {
        text: 'Most important है मेरे लिए',
        type: 'A'
      },
      {
        text: 'Important है पर only factor नहीं',
        type: 'B'
      },
      {
        text: 'Growth ज्यादा important',
        type: 'C'
      },
      {
        text: 'Security से ज्यादा excitement चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Competitive exams के बारे में?',
    options: [
      {
        text: 'Ready हूं, preparation कर रहा/रही हूं',
        type: 'A'
      },
      {
        text: 'देने को तैयार हूं',
        type: 'B'
      },
      {
        text: 'Exam stress नहीं चाहिए',
        type: 'C'
      },
      {
        text: 'Exams से बचना चाहता/चाहती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Fixed working hours और holidays?',
    options: [
      {
        text: 'Perfect! Work-life balance important',
        type: 'A'
      },
      {
        text: 'अच्छा है',
        type: 'B'
      },
      {
        text: 'Flexibility भी चाहिए',
        type: 'C'
      },
      {
        text: 'Results matter, hours नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Slow career progression?',
    options: [
      {
        text: 'Okay है, stable progression better',
        type: 'A'
      },
      {
        text: 'Accept कर सकता/सकती हूं',
        type: 'B'
      },
      {
        text: 'Fast growth prefer',
        type: 'C'
      },
      {
        text: 'Quick promotions चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Pension और retirement benefits?',
    options: [
      {
        text: 'बहुत important, long-term security',
        type: 'A'
      },
      {
        text: 'Good to have',
        type: 'B'
      },
      {
        text: 'खुद invest कर लूंगा/लूंगी',
        type: 'C'
      },
      {
        text: 'अभी से retirement नहीं सोचता/सोचती',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Bureaucracy और hierarchy?',
    options: [
      {
        text: 'Comfortable हूं structured environment में',
        type: 'A'
      },
      {
        text: 'Manage कर लूंगा/लूंगी',
        type: 'B'
      },
      {
        text: 'थोड़ा frustrating लग सकता है',
        type: 'C'
      },
      {
        text: 'Flat structure prefer',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Transfer और posting?',
    options: [
      {
        text: 'Ready हूं, new places explore करूंगा/करूंगी',
        type: 'A'
      },
      {
        text: 'अगर जरूरी हो तो okay',
        type: 'B'
      },
      {
        text: 'One location prefer',
        type: 'C'
      },
      {
        text: 'Transfer नहीं चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Public service और nation building?',
    options: [
      {
        text: 'Passionate हूं, देश की सेवा करना है',
        type: 'A'
      },
      {
        text: 'अच्छा feel होगा',
        type: 'B'
      },
      {
        text: 'Job job है',
        type: 'C'
      },
      {
        text: 'Personal growth priority',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'IAS, IPS जैसी services?',
    options: [
      {
        text: 'Dream है, UPSC prepare कर रहा/रही हूं',
        type: 'A'
      },
      {
        text: 'Interest है',
        type: 'B'
      },
      {
        text: 'Too competitive',
        type: 'C'
      },
      {
        text: 'नहीं चाहिए इतना pressure',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Salary vs other benefits?',
    options: [
      {
        text: 'Benefits (medical, housing) ज्यादा valuable',
        type: 'A'
      },
      {
        text: 'Overall package देखता/देखती हूं',
        type: 'B'
      },
      {
        text: 'Higher salary prefer',
        type: 'C'
      },
      {
        text: 'Market rate salary चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Family की expectation?',
    options: [
      {
        text: 'Family wants sarkari naukri, I agree',
        type: 'A'
      },
      {
        text: 'Family neutral है',
        type: 'B'
      },
      {
        text: 'Family wants private sector',
        type: 'C'
      },
      {
        text: 'अपना decision लूंगा/लूंगी',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Age limit और attempts?',
    options: [
      {
        text: 'जितने attempts लगें, करूंगा/करूंगी',
        type: 'A'
      },
      {
        text: '2-3 attempts try करूंगा/करूंगी',
        type: 'B'
      },
      {
        text: 'एक बार try, फिर move on',
        type: 'C'
      },
      {
        text: 'Years waste नहीं करना',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'सरकारी नौकरी के लिए बने',
    emoji: '🌟',
    description: 'आप government job के लिए perfect candidate हैं! Security, stability, और public service आपकी priority है।',
    traits: [
      'stable',
      'dedicated',
      'patient',
      'service-oriented'
    ],
    strengths: [
      'stable',
      'dedicated'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'UPSC, SSC, Banking exams के लिए seriously prepare करें। Coaching join करें, consistent रहें। आपकी sarkari naukri जरूर लगेगी!'
    ]
  },
  B: {
    type: 'B',
    title: 'सरकारी नौकरी विकल्प',
    emoji: '💼',
    description: 'Government job आपके लिए अच्छा option है। Try करें, पर backup plan भी रखें।',
    traits: [
      'practical',
      'open-minded',
      'balanced',
      'flexible'
    ],
    strengths: [
      'practical',
      'open-minded'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Govt jobs के साथ PSU और private sector भी explore करें। Multiple options रखें।'
    ]
  },
  C: {
    type: 'C',
    title: 'निजी क्षेत्र बेहतर',
    emoji: '📈',
    description: 'Private sector आपके लिए ज्यादा suitable लगता है। Fast growth और flexibility आपकी priority है।',
    traits: [
      'ambitious',
      'growth-oriented',
      'dynamic',
      'competitive'
    ],
    strengths: [
      'ambitious',
      'growth-oriented'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Private sector में career focus करें। MNCs, startups में opportunities देखें।'
    ]
  },
  D: {
    type: 'D',
    title: 'उद्यमी या कॉर्पोरेट',
    emoji: '🎯',
    description: 'Government job आपके लिए नहीं है। Entrepreneurship या corporate leadership suit करेगी।',
    traits: [
      'risk-taker',
      'independent',
      'ambitious',
      'non-conformist'
    ],
    strengths: [
      'risk-taker',
      'independent'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Business या corporate leadership path choose करें। आपकी energy वहां ज्यादा value होगी।'
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
