// बर्नआउट रिस्क टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'सुबह काम पर जाने का feel?',
    options: [
      {
        text: 'Motivated, ready to go',
        type: 'A'
      },
      {
        text: 'Neutral, normal',
        type: 'B'
      },
      {
        text: 'Reluctant, थोड़ा dread',
        type: 'C'
      },
      {
        text: 'Dreading, नहीं जाना',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Energy level at work?',
    options: [
      {
        text: 'Good energy throughout',
        type: 'A'
      },
      {
        text: 'Normal, ups and downs',
        type: 'B'
      },
      {
        text: 'Tired often',
        type: 'C'
      },
      {
        text: 'Exhausted constantly',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Work से disconnect करना?',
    options: [
      {
        text: 'Easily switch off after work',
        type: 'A'
      },
      {
        text: 'Mostly disconnect',
        type: 'B'
      },
      {
        text: 'Difficult है disconnect करना',
        type: 'C'
      },
      {
        text: '24x7 work mind में',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Enthusiasm about projects?',
    options: [
      {
        text: 'Excited about work',
        type: 'A'
      },
      {
        text: 'Interested in some',
        type: 'B'
      },
      {
        text: 'Meh, बस करना है',
        type: 'C'
      },
      {
        text: 'कुछ भी interesting नहीं लगता',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Sleep quality?',
    options: [
      {
        text: 'Good, restful sleep',
        type: 'A'
      },
      {
        text: 'Generally okay',
        type: 'B'
      },
      {
        text: 'Disturbed sleep often',
        type: 'C'
      },
      {
        text: 'Insomnia या poor sleep',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Physical symptoms?',
    options: [
      {
        text: 'Feeling healthy',
        type: 'A'
      },
      {
        text: 'Occasional headaches, tension',
        type: 'B'
      },
      {
        text: 'Frequent body aches, fatigue',
        type: 'C'
      },
      {
        text: 'Multiple health issues',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Cynicism about work?',
    options: [
      {
        text: 'Positive attitude',
        type: 'A'
      },
      {
        text: 'Mostly positive',
        type: 'B'
      },
      {
        text: 'Becoming cynical',
        type: 'C'
      },
      {
        text: 'Very negative about work',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Personal life impact?',
    options: [
      {
        text: 'Minor impact sometimes',
        type: 'B'
      },
      {
        text: 'Significant impact',
        type: 'C'
      },
      {
        text: 'Personal life suffer कर रही है',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Productivity feeling?',
    options: [
      {
        text: 'Productive और effective',
        type: 'A'
      },
      {
        text: 'Generally productive',
        type: 'B'
      },
      {
        text: 'Less productive than before',
        type: 'C'
      },
      {
        text: 'Ineffective feel होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Hobbies और interests?',
    options: [
      {
        text: 'Active hobbies, time for self',
        type: 'A'
      },
      {
        text: 'कुछ time मिलता है',
        type: 'B'
      },
      {
        text: 'Hobbies छूट गई हैं',
        type: 'C'
      },
      {
        text: 'कुछ भी enjoy नहीं होता',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Emotional state?',
    options: [
      {
        text: 'Emotionally stable',
        type: 'A'
      },
      {
        text: 'Normal fluctuations',
        type: 'B'
      },
      {
        text: 'Irritable, anxious often',
        type: 'C'
      },
      {
        text: 'Emotionally overwhelmed',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Vacation लेना?',
    options: [
      {
        text: 'Regular breaks लेता/लेती हूं',
        type: 'A'
      },
      {
        text: 'कभी कभी leave',
        type: 'B'
      },
      {
        text: 'Long time से vacation नहीं',
        type: 'C'
      },
      {
        text: 'Leave लेना impossible लगता है',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'स्वस्थ स्थिति',
    emoji: '🌟',
    description: 'Great news! आप healthy work state में हैं। Burnout risk low है। Keep maintaining this balance!',
    traits: [
      'balanced',
      'healthy',
      'resilient',
      'sustainable'
    ],
    strengths: [
      'balanced',
      'healthy'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपनी good habits maintain करें। Others को भी inspire करें। Boundaries protect करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'सावधान रहें',
    emoji: '💼',
    description: 'आप generally okay हैं पर कुछ warning signs हैं। Proactive action से burnout prevent होगा।',
    traits: [
      'managing',
      'at-risk',
      'needs-attention',
      'recoverable'
    ],
    strengths: [
      'managing',
      'at-risk'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Self-care increase करें। Boundaries strengthen करें। Regular breaks लें। Stress monitor करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'बर्नआउट रिस्क',
    emoji: '📈',
    description: 'Warning! आप burnout की तरफ जा रहे हैं। Immediate action जरूरी है।',
    traits: [
      'stressed',
      'exhausted',
      'at-risk',
      'needs-intervention'
    ],
    strengths: [
      'stressed',
      'exhausted'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'तुरंत action लें - manager से बात करें, workload discuss करें। Leave लें अगर possible। Professional help consider करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'बर्नआउट अलर्ट',
    emoji: '🎯',
    description: 'Critical! आप severe burnout में हैं या बहुत करीब। ये medical situation है।',
    traits: [
      'burnout',
      'severe',
      'urgent',
      'needs-help'
    ],
    strengths: [
      'burnout',
      'severe'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'तुरंत professional help लें - doctor, therapist। Extended leave consider करें। Job change भी option है। Health first।'
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
