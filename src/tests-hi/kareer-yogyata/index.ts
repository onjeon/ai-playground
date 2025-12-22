// करियर योग्यता टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'आप किस प्रकार के काम में सबसे ज्यादा comfortable हैं?',
    options: [
      {
        text: 'डेटा और numbers के साथ analysis',
        type: 'A'
      },
      {
        text: 'लोगों से मिलना और बातचीत',
        type: 'B'
      },
      {
        text: 'Creative और artistic काम',
        type: 'C'
      },
      {
        text: 'Technical और problem solving',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Team में आपकी role usually क्या होती है?',
    options: [
      {
        text: 'Planner - सब कुछ organize करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Leader - team को guide करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Innovator - नए ideas देता/देती हूं',
        type: 'C'
      },
      {
        text: 'Executor - काम पूरा करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Pressure में आप कैसे काम करते हैं?',
    options: [
      {
        text: 'Methodical approach से step by step',
        type: 'A'
      },
      {
        text: 'Team को motivate करके साथ मिलकर',
        type: 'B'
      },
      {
        text: 'Out of the box solutions निकालकर',
        type: 'C'
      },
      {
        text: 'Focus करके quickly solve करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'आपको क्या ज्यादा motivate करता है?',
    options: [
      {
        text: 'Financial security और stability',
        type: 'A'
      },
      {
        text: 'Recognition और respect',
        type: 'B'
      },
      {
        text: 'Creative freedom और expression',
        type: 'C'
      },
      {
        text: 'Learning और growth opportunities',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'School/College में आपका favorite subject?',
    options: [
      {
        text: 'Maths, Commerce, Economics',
        type: 'A'
      },
      {
        text: 'Languages, History, Psychology',
        type: 'B'
      },
      {
        text: 'Art, Music, Literature',
        type: 'C'
      },
      {
        text: 'Science, Computer, Technology',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Ideal work environment कैसा होना चाहिए?',
    options: [
      {
        text: 'Structured और organized office',
        type: 'A'
      },
      {
        text: 'Dynamic और people-oriented',
        type: 'B'
      },
      {
        text: 'Flexible और creative space',
        type: 'C'
      },
      {
        text: 'Tech-enabled और innovative',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Problem solve करते वक्त आप क्या prefer करते हैं?',
    options: [
      {
        text: 'Data और facts analyze करना',
        type: 'A'
      },
      {
        text: 'दूसरों से discuss करना',
        type: 'B'
      },
      {
        text: 'Intuition और creativity use करना',
        type: 'C'
      },
      {
        text: 'Logical और systematic approach',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Long term में आप खुद को कहां देखते हैं?',
    options: [
      {
        text: 'CFO या Finance head',
        type: 'A'
      },
      {
        text: 'CEO या Business leader',
        type: 'B'
      },
      {
        text: 'Creative Director या Artist',
        type: 'C'
      },
      {
        text: 'CTO या Tech expert',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Risk लेने के बारे में आपका attitude?',
    options: [
      {
        text: 'Calculated risks with proper planning',
        type: 'A'
      },
      {
        text: 'Bold decisions जब opportunity हो',
        type: 'B'
      },
      {
        text: 'Creative experiments में risk okay',
        type: 'C'
      },
      {
        text: 'Innovative projects में risk लेता हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'आपकी communication style क्या है?',
    options: [
      {
        text: 'Precise और data-driven',
        type: 'A'
      },
      {
        text: 'Persuasive और inspiring',
        type: 'B'
      },
      {
        text: 'Expressive और storytelling',
        type: 'C'
      },
      {
        text: 'Clear और technical',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'New skill सीखते वक्त आप क्या prefer करते हैं?',
    options: [
      {
        text: 'Structured courses और certifications',
        type: 'A'
      },
      {
        text: 'Mentorship और networking से',
        type: 'B'
      },
      {
        text: 'Experimentation और practice से',
        type: 'C'
      },
      {
        text: 'Online tutorials और self-learning',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Success की आपकी definition क्या है?',
    options: [
      {
        text: 'Financial stability और wealth',
        type: 'A'
      },
      {
        text: 'Power, influence और impact',
        type: 'B'
      },
      {
        text: 'Creative fulfillment और passion',
        type: 'C'
      },
      {
        text: 'Innovation और expertise',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'विश्लेषक (Analyst)',
    emoji: '🌟',
    description: 'आप analytical और structured approach वाले हैं। Finance, Banking, Accounting, Data Analysis जैसे fields आपके लिए perfect हैं। Numbers और data आपकी strength है।',
    traits: [
      'analytical',
      'detail-oriented',
      'organized',
      'methodical'
    ],
    strengths: [
      'analytical',
      'detail-oriented'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'CA, MBA Finance, Data Science जैसे courses explore करें। Corporate sector में अच्छे opportunities मिलेंगे।'
    ]
  },
  B: {
    type: 'B',
    title: 'नेता (Leader)',
    emoji: '💼',
    description: 'आप natural leader हैं! Management, Business, HR, Sales जैसे people-oriented careers आपके लिए best हैं। आपकी communication और leadership skills आपको top पर ले जाएंगी।',
    traits: [
      'charismatic',
      'persuasive',
      'motivating',
      'people-oriented'
    ],
    strengths: [
      'charismatic',
      'persuasive'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'MBA, Leadership programs में invest करें। Entrepreneurship भी consider करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'सृजनकर्ता (Creator)',
    emoji: '📈',
    description: 'आप creative soul हैं! Design, Media, Arts, Content Creation, Marketing जैसे fields में आप shine करेंगे। Creativity आपका biggest asset है।',
    traits: [
      'creative',
      'imaginative',
      'expressive',
      'innovative'
    ],
    strengths: [
      'creative',
      'imaginative'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Design courses, Film making, Digital marketing explore करें। Portfolio build करना शुरू करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'तकनीशियन (Technologist)',
    emoji: '🎯',
    description: 'आप tech-savvy और problem solver हैं! IT, Engineering, Software Development, Research जैसे technical fields आपके लिए ideal हैं।',
    traits: [
      'logical',
      'tech-savvy',
      'problem-solver',
      'innovative'
    ],
    strengths: [
      'logical',
      'tech-savvy'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Computer Science, Engineering, Data Science में career बनाएं। Continuous learning जारी रखें।'
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
