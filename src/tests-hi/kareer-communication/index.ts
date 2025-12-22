// व्यावसायिक संवाद टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Email लिखते वक्त?',
    options: [
      {
        text: 'Clear, concise, professional tone',
        type: 'A'
      },
      {
        text: 'Decent emails लिखता/लिखती हूं',
        type: 'B'
      },
      {
        text: 'Sometimes too long या unclear',
        type: 'C'
      },
      {
        text: 'Email writing weak है',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Meeting में speak up?',
    options: [
      {
        text: 'Confidently participate करता/करती हूं',
        type: 'A'
      },
      {
        text: 'जब relevant हो तब बोलता/बोलती हूं',
        type: 'B'
      },
      {
        text: 'Hesitate करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Mostly silent रहता/रहती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Difficult conversation (feedback, conflict)?',
    options: [
      {
        text: 'Handle professionally, directly',
        type: 'A'
      },
      {
        text: 'Manage कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'Uncomfortable होता है',
        type: 'C'
      },
      {
        text: 'Avoid करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Presentation skills?',
    options: [
      {
        text: 'Confident presenter, enjoy करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Decent, prepare करके अच्छा जाता है',
        type: 'B'
      },
      {
        text: 'Nervous होता/होती हूं',
        type: 'C'
      },
      {
        text: 'Presentations से बचता/बचती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Active listening?',
    options: [
      {
        text: 'Full attention, summarize, clarify',
        type: 'A'
      },
      {
        text: 'Listen करता/करती हूं carefully',
        type: 'B'
      },
      {
        text: 'Sometimes distracted',
        type: 'C'
      },
      {
        text: 'Listening weak point है',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Written vs verbal communication?',
    options: [
      {
        text: 'Strong in both',
        type: 'A'
      },
      {
        text: 'One better than other',
        type: 'B'
      },
      {
        text: 'Both average',
        type: 'C'
      },
      {
        text: 'Both weak',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Cross-cultural communication?',
    options: [
      {
        text: 'Comfortable, culturally aware',
        type: 'A'
      },
      {
        text: 'Manage कर लेता/लेती हूं',
        type: 'B'
      },
      {
        text: 'Sometimes awkward',
        type: 'C'
      },
      {
        text: 'Challenging लगता है',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Saying \'No\' professionally?',
    options: [
      {
        text: 'Diplomatically decline कर सकता/सकती हूं',
        type: 'A'
      },
      {
        text: 'Manage करता/करती हूं',
        type: 'B'
      },
      {
        text: 'Difficult है मेरे लिए',
        type: 'C'
      },
      {
        text: 'हमेशा yes बोल देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Conveying complex ideas?',
    options: [
      {
        text: 'Simply explain कर सकता/सकती हूं',
        type: 'A'
      },
      {
        text: 'Mostly समझा पाता/पाती हूं',
        type: 'B'
      },
      {
        text: 'Sometimes confusing होता है',
        type: 'C'
      },
      {
        text: 'Complex ideas explain करना मुश्किल',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Communication with seniors?',
    options: [
      {
        text: 'Confident और respectful',
        type: 'A'
      },
      {
        text: 'Mostly comfortable',
        type: 'B'
      },
      {
        text: 'थोड़ा nervous',
        type: 'C'
      },
      {
        text: 'Very nervous, avoid करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Asking questions?',
    options: [
      {
        text: 'Freely पूछता/पूछती हूं, clarification important',
        type: 'A'
      },
      {
        text: 'जब जरूरी हो तब',
        type: 'B'
      },
      {
        text: 'Hesitate करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Questions पूछने में डर लगता है',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Virtual communication (video calls)?',
    options: [
      {
        text: 'Professional, camera on, engaged',
        type: 'A'
      },
      {
        text: 'Comfortable हूं',
        type: 'B'
      },
      {
        text: 'Prefer camera off',
        type: 'C'
      },
      {
        text: 'Video calls uncomfortable',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'संवाद विशेषज्ञ',
    emoji: '🌟',
    description: 'Excellent communicator! आपकी professional communication outstanding है। Leadership roles के लिए essential skill है आपके पास।',
    traits: [
      'articulate',
      'confident',
      'clear',
      'professional'
    ],
    strengths: [
      'articulate',
      'confident'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपनी skills को leverage करें leadership के लिए। दूसरों को भी coach करें।'
    ]
  },
  B: {
    type: 'B',
    title: 'अच्छा संवादक',
    emoji: '💼',
    description: 'आपकी communication skills अच्छी हैं। कुछ polish से और भी effective बनेंगी।',
    traits: [
      'capable',
      'improving',
      'professional',
      'developing'
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
      'Public speaking practice करें, writing improve करें। Toastmasters consider करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'विकास की जरूरत',
    emoji: '📈',
    description: 'Communication में improvement से career में बहुत फायदा होगा।',
    traits: [
      'developing',
      'potential',
      'learning',
      'growing'
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
      'Communication courses लें, practice regularly। Feedback actively seek करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'प्राथमिकता बनाएं',
    emoji: '🎯',
    description: 'Communication skills में serious काम करना होगा। ये career growth के लिए critical है।',
    traits: [
      'needs-work',
      'potential',
      'developing',
      'learning'
    ],
    strengths: [
      'needs-work',
      'potential'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Professional training लें, small steps से शुरू करें। Consistent practice से definitely improve होगा।'
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
