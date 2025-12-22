// प्रमोशन रेडीनेस टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Current role में performance?',
    options: [
      {
        text: 'Consistently exceeding expectations',
        type: 'A'
      },
      {
        text: 'Meeting all targets well',
        type: 'B'
      },
      {
        text: 'Average performance',
        type: 'C'
      },
      {
        text: 'Struggling sometimes',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Next level की responsibilities?',
    options: [
      {
        text: 'Already handling कुछ, ready हूं',
        type: 'A'
      },
      {
        text: 'समझता/समझती हूं क्या होगा',
        type: 'B'
      },
      {
        text: 'थोड़ा idea है',
        type: 'C'
      },
      {
        text: 'पता नहीं exactly',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Visibility और recognition?',
    options: [
      {
        text: 'Senior leadership जानते हैं मुझे',
        type: 'A'
      },
      {
        text: 'अपने department में known हूं',
        type: 'B'
      },
      {
        text: 'Limited visibility',
        type: 'C'
      },
      {
        text: 'Invisible feel होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Leadership initiatives?',
    options: [
      {
        text: 'Multiple projects lead किए हैं',
        type: 'A'
      },
      {
        text: 'कुछ initiatives लिए हैं',
        type: 'B'
      },
      {
        text: 'Rarely lead करता/करती हूं',
        type: 'C'
      },
      {
        text: 'अभी तक नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Skills for next role?',
    options: [
      {
        text: 'Required skills हैं, ready हूं',
        type: 'A'
      },
      {
        text: 'Most skills हैं',
        type: 'B'
      },
      {
        text: 'कुछ gaps हैं',
        type: 'C'
      },
      {
        text: 'बहुत develop करना है',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Relationship with manager?',
    options: [
      {
        text: 'Strong, mentor-like relationship',
        type: 'A'
      },
      {
        text: 'Good professional relationship',
        type: 'B'
      },
      {
        text: 'Okay है',
        type: 'C'
      },
      {
        text: 'Not great',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Cross-functional collaboration?',
    options: [
      {
        text: 'Multiple teams के साथ work किया',
        type: 'A'
      },
      {
        text: 'कुछ teams के साथ',
        type: 'B'
      },
      {
        text: 'अपनी team में ही mostly',
        type: 'C'
      },
      {
        text: 'Limited interaction',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Achievements documented?',
    options: [
      {
        text: 'हां, quantifiable results ready',
        type: 'A'
      },
      {
        text: 'Major achievements track किए हैं',
        type: 'B'
      },
      {
        text: 'कुछ याद हैं',
        type: 'C'
      },
      {
        text: 'Document नहीं किए properly',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Feedback incorporation?',
    options: [
      {
        text: 'Actively seek और implement करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Feedback लेता/लेती हूं, improve करता/करती हूं',
        type: 'B'
      },
      {
        text: 'जब मिले तब सुनता/सुनती हूं',
        type: 'C'
      },
      {
        text: 'Feedback avoid करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Communication about career goals?',
    options: [
      {
        text: 'Manager knows my aspirations clearly',
        type: 'A'
      },
      {
        text: 'Discussed है कभी',
        type: 'B'
      },
      {
        text: 'Indirectly mention किया है',
        type: 'C'
      },
      {
        text: 'बताया नहीं कभी',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Mentoring others?',
    options: [
      {
        text: 'Actively mentor करता/करती हूं juniors को',
        type: 'A'
      },
      {
        text: 'Help करता/करती हूं जब पूछें',
        type: 'B'
      },
      {
        text: 'कभी कभी',
        type: 'C'
      },
      {
        text: 'अभी तक नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Company में tenure?',
    options: [
      {
        text: '3+ years, good track record',
        type: 'A'
      },
      {
        text: '1-3 years, established हूं',
        type: 'B'
      },
      {
        text: 'Less than a year',
        type: 'C'
      },
      {
        text: 'New joiner हूं',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'प्रमोशन रेडी',
    emoji: '🌟',
    description: 'Congratulations! आप promotion के लिए fully ready हैं। Performance, skills, visibility सब strong है। अपना case present करें!',
    traits: [
      'ready',
      'high-performer',
      'visible',
      'leader'
    ],
    strengths: [
      'ready',
      'high-performer'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Manager से directly discuss करें। अपने achievements का document तैयार करें। Confidently ask करें!'
    ]
  },
  B: {
    type: 'B',
    title: 'लगभग तैयार',
    emoji: '💼',
    description: 'आप promotion के करीब हैं! कुछ areas में polish करके 6-12 months में ready होंगे।',
    traits: [
      'developing',
      'potential',
      'growing',
      'almost-there'
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
      'Visibility बढ़ाएं, high-impact projects लें। Skills gaps address करें। Timeline discuss करें manager से।'
    ]
  },
  C: {
    type: 'C',
    title: 'विकास जारी',
    emoji: '📈',
    description: 'Promotion के लिए अभी और काम करना होगा। 1-2 years का focused effort चाहिए।',
    traits: [
      'developing',
      'learning',
      'potential',
      'building'
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
      'Performance improve करें पहले। Leadership opportunities ढूंढें। Regular feedback लें।'
    ]
  },
  D: {
    type: 'D',
    title: 'फाउंडेशन बनाएं',
    emoji: '🎯',
    description: 'पहले current role में excel करें। Promotion अभी distant goal है।',
    traits: [
      'beginner',
      'building',
      'learning',
      'establishing'
    ],
    strengths: [
      'beginner',
      'building'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Current job responsibilities पर focus करें। Skills develop करें। Relationship build करें। Step by step आगे बढ़ें।'
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
