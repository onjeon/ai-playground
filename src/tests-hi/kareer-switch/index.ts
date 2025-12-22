// करियर स्विच टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Current job से satisfaction?',
    options: [
      {
        text: 'बहुत unhappy, बदलना है जल्दी',
        type: 'A'
      },
      {
        text: 'Dissatisfied हूं काफी',
        type: 'B'
      },
      {
        text: 'ठीक है, better हो सकता है',
        type: 'C'
      },
      {
        text: 'Mostly satisfied हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'New field में interest कितना genuine?',
    options: [
      {
        text: 'Deep passion, research किया है',
        type: 'A'
      },
      {
        text: 'Interested हूं, explore कर रहा/रही हूं',
        type: 'B'
      },
      {
        text: 'Grass greener लग रही है बस',
        type: 'C'
      },
      {
        text: 'Current escape करना है बस',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Financial backup कितना है?',
    options: [
      {
        text: '6-12 months expenses saved',
        type: 'A'
      },
      {
        text: '3-6 months backup है',
        type: 'B'
      },
      {
        text: 'Limited savings',
        type: 'C'
      },
      {
        text: 'Paycheck to paycheck',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Transferable skills?',
    options: [
      {
        text: 'हां, many skills apply होंगी',
        type: 'A'
      },
      {
        text: 'कुछ skills transfer होंगी',
        type: 'B'
      },
      {
        text: 'बहुत कम overlap',
        type: 'C'
      },
      {
        text: 'Completely different field',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'New field की reality पता है?',
    options: [
      {
        text: 'Research किया, people से बात की',
        type: 'A'
      },
      {
        text: 'Online research किया है',
        type: 'B'
      },
      {
        text: 'Basic idea है',
        type: 'C'
      },
      {
        text: 'बस attractive लगता है',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Family support?',
    options: [
      {
        text: 'Full support है family का',
        type: 'A'
      },
      {
        text: 'Supportive हैं mostly',
        type: 'B'
      },
      {
        text: 'Concerned हैं पर against नहीं',
        type: 'C'
      },
      {
        text: 'Family against है',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Salary cut accept कर सकते हैं?',
    options: [
      {
        text: 'हां, ready हूं initially less लेने को',
        type: 'A'
      },
      {
        text: 'थोड़ी cut okay है',
        type: 'B'
      },
      {
        text: 'Same salary चाहिए minimum',
        type: 'C'
      },
      {
        text: 'Higher ही चाहिए',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Learning new skills?',
    options: [
      {
        text: 'Already शुरू कर दिया है',
        type: 'A'
      },
      {
        text: 'Ready हूं सीखने को',
        type: 'B'
      },
      {
        text: 'Time consuming लगता है',
        type: 'C'
      },
      {
        text: 'फिर से student बनना मुश्किल',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Age factor?',
    options: [
      {
        text: 'Right time है अभी',
        type: 'A'
      },
      {
        text: 'थोड़ा late पर possible',
        type: 'B'
      },
      {
        text: 'Worried हूं age को लेकर',
        type: 'C'
      },
      {
        text: 'Too old feel होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Network in new field?',
    options: [
      {
        text: 'Contacts build करने शुरू किए',
        type: 'A'
      },
      {
        text: 'कुछ connections हैं',
        type: 'B'
      },
      {
        text: 'Zero network अभी',
        type: 'C'
      },
      {
        text: 'कोई नहीं जानता उस field में',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Plan B है?',
    options: [
      {
        text: 'हां, backup plan ready',
        type: 'A'
      },
      {
        text: 'थोड़ा thought दिया है',
        type: 'B'
      },
      {
        text: 'Plan B नहीं सोचा',
        type: 'C'
      },
      {
        text: 'All or nothing approach',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Timeline in mind?',
    options: [
      {
        text: 'Clear 1-2 year plan है',
        type: 'A'
      },
      {
        text: 'Rough timeline है',
        type: 'B'
      },
      {
        text: 'जल्दी करना है बस',
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
    title: 'स्विच के लिए तैयार',
    emoji: '🌟',
    description: 'आप career switch के लिए well-prepared हैं! Research, planning, और backup सब है। Go for it!',
    traits: [
      'prepared',
      'planned',
      'motivated',
      'ready'
    ],
    strengths: [
      'prepared',
      'planned'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपना plan execute करें। Network actively, apply strategically। Transition smooth होगा।'
    ]
  },
  B: {
    type: 'B',
    title: 'तैयारी जारी रखें',
    emoji: '💼',
    description: 'आप right direction में हैं। कुछ और preparation से safe transition होगा।',
    traits: [
      'preparing',
      'learning',
      'exploring',
      'building'
    ],
    strengths: [
      'preparing',
      'learning'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      '3-6 months और तैयारी करें। Savings बढ़ाएं, skills develop करें, network build करें। फिर jump करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'और सोचें',
    emoji: '📈',
    description: 'Career switch की जल्दी ना करें। पहले thoroughly evaluate करें कि ये सही decision है।',
    traits: [
      'uncertain',
      'exploring',
      'questioning',
      'considering'
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
      'Current job में क्या fix हो सकता है सोचें। New field को properly explore करें। Impulsive decision ना लें।'
    ]
  },
  D: {
    type: 'D',
    title: 'अभी नहीं',
    emoji: '🎯',
    description: 'अभी career switch risky होगा। पहले foundation strong करें।',
    traits: [
      'unprepared',
      'impulsive',
      'needs-planning',
      'at-risk'
    ],
    strengths: [
      'unprepared',
      'impulsive'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'पहले current job में improve करें या proper planning करें। Savings build करें। Rushed decision से बचें।'
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
