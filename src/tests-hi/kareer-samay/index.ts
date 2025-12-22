// समय प्रबंधन टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'सुबह office के लिए निकलते वक्त?',
    options: [
      {
        text: '15-20 minutes पहले ready',
        type: 'A'
      },
      {
        text: 'Time पर निकलता/निकलती हूं',
        type: 'B'
      },
      {
        text: 'Usually थोड़ा late होता है',
        type: 'C'
      },
      {
        text: 'हमेशा last minute rush',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Daily tasks कैसे plan करते हैं?',
    options: [
      {
        text: 'To-do list बनाता/बनाती हूं with priorities',
        type: 'A'
      },
      {
        text: 'Major tasks mentally note करता/करती हूं',
        type: 'B'
      },
      {
        text: 'जैसे आए वैसे handle करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Planning? Kya hai ye?',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Multiple deadlines हों एक साथ तो?',
    options: [
      {
        text: 'Priority matrix बनाकर systematically',
        type: 'A'
      },
      {
        text: 'Most urgent पहले, फिर बाकी',
        type: 'B'
      },
      {
        text: 'Stress हो जाता है, somehow manage',
        type: 'C'
      },
      {
        text: 'Panic! Sab miss हो जाता है',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Email और messages check करना?',
    options: [
      {
        text: 'Fixed time पर batch में',
        type: 'A'
      },
      {
        text: 'Regularly पर controlled',
        type: 'B'
      },
      {
        text: 'हर notification पर',
        type: 'C'
      },
      {
        text: 'पूरा दिन phone में',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Long term goals के लिए time?',
    options: [
      {
        text: 'Daily dedicated time fix है',
        type: 'A'
      },
      {
        text: 'Weekly कुछ time निकालता/निकालती हूं',
        type: 'B'
      },
      {
        text: 'जब याद आए तब',
        type: 'C'
      },
      {
        text: 'Long term planning? Time नहीं मिलता',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Meetings के बारे में?',
    options: [
      {
        text: 'Agenda ready, time bound meetings',
        type: 'A'
      },
      {
        text: 'Prepared जाता/जाती हूं',
        type: 'B'
      },
      {
        text: 'Meetings ज्यादा लंबी हो जाती हैं',
        type: 'C'
      },
      {
        text: 'Meetings में time waste होता है',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Procrastination के साथ deal?',
    options: [
      {
        text: 'Rarely procrastinate करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Awareness है, control करता/करती हूं',
        type: 'B'
      },
      {
        text: 'कभी कभी problem होती है',
        type: 'C'
      },
      {
        text: 'Major issue है procrastination',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Unexpected interruptions?',
    options: [
      {
        text: 'Politely manage करता/करती हूं, focus वापस',
        type: 'A'
      },
      {
        text: 'Handle करता/करती हूं, थोड़ा distraction होता है',
        type: 'B'
      },
      {
        text: 'Difficult है focus वापस लाना',
        type: 'C'
      },
      {
        text: 'पूरा day spoil हो जाता है',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Breaks लेना काम के बीच?',
    options: [
      {
        text: 'Scheduled breaks, refreshed वापस',
        type: 'A'
      },
      {
        text: 'जब tired लगे तब short break',
        type: 'B'
      },
      {
        text: 'Breaks भूल जाता/जाती हूं काम में',
        type: 'C'
      },
      {
        text: 'बहुत ज्यादा breaks या बिल्कुल नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Weekend planning?',
    options: [
      {
        text: 'Balanced - rest, chores, personal goals',
        type: 'A'
      },
      {
        text: 'कुछ plans होते हैं',
        type: 'B'
      },
      {
        text: 'बस rest करता/करती हूं',
        type: 'C'
      },
      {
        text: 'कब निकल गया पता नहीं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Projects की deadline से पहले?',
    options: [
      {
        text: 'काफी पहले complete हो जाता है',
        type: 'A'
      },
      {
        text: 'Time पर submit होता है',
        type: 'B'
      },
      {
        text: 'Last day rush होती है',
        type: 'C'
      },
      {
        text: 'Extensions मांगना पड़ता है',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Work-life balance?',
    options: [
      {
        text: 'Well maintained, time सबके लिए',
        type: 'A'
      },
      {
        text: 'Mostly balanced रहता है',
        type: 'B'
      },
      {
        text: 'Struggle होता है balance में',
        type: 'C'
      },
      {
        text: 'Balance? What balance?',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'समय के स्वामी',
    emoji: '🌟',
    description: 'Excellent! आप time management में master हैं। Productivity, balance, और efficiency आपकी hallmark है। दूसरों को भी सिखा सकते हैं!',
    traits: [
      'organized',
      'efficient',
      'disciplined',
      'balanced'
    ],
    strengths: [
      'organized',
      'efficient'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपनी techniques दूसरों को share करें। Productivity coaching consider करें। आप role model हैं!'
    ]
  },
  B: {
    type: 'B',
    title: 'कुशल प्रबंधक',
    emoji: '💼',
    description: 'आप अच्छे time manager हैं! Minor improvements से और भी efficient बन सकते हैं। Right track पर हैं।',
    traits: [
      'capable',
      'improving',
      'aware',
      'practical'
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
      'Time blocking try करें, distractions और कम करें। Automation tools explore करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'सुधार की जरूरत',
    emoji: '📈',
    description: 'Time management में काफी scope है improvement का। Awareness है जो अच्छी बात है - अब action लें!',
    traits: [
      'developing',
      'potential',
      'learning',
      'struggling'
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
      'Start small - daily to-do list बनाएं। Pomodoro technique try करें। Gradually improve होगा।'
    ]
  },
  D: {
    type: 'D',
    title: 'चुनौतीपूर्ण स्थिति',
    emoji: '🎯',
    description: 'Time management आपके लिए major challenge है। पर worry नहीं - ये सीखा जा सकता है! शुरुआत करें आज से।',
    traits: [
      'challenged',
      'needs-help',
      'potential',
      'starting'
    ],
    strengths: [
      'challenged',
      'needs-help'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Professional help लें, time management course करें। एक habit से शुरू करें। Slowly build करें।'
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
