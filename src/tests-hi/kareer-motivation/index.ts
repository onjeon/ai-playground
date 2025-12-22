// कार्य प्रेरणा टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'Primary work motivation?',
    options: [
      {
        text: 'पैसा और financial security',
        type: 'A'
      },
      {
        text: 'Recognition और respect',
        type: 'B'
      },
      {
        text: 'Learning और growth',
        type: 'C'
      },
      {
        text: 'Purpose और impact',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Bonus मिले तो क्या feel?',
    options: [
      {
        text: 'बहुत खुश, primary motivator',
        type: 'A'
      },
      {
        text: 'Nice, appreciated feel',
        type: 'B'
      },
      {
        text: 'Good, पर main driver नहीं',
        type: 'C'
      },
      {
        text: 'Okay है पर impact ज्यादा matters',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Public recognition मिले?',
    options: [
      {
        text: 'Nice, पर private bonus prefer',
        type: 'A'
      },
      {
        text: 'Love it! Highly motivating',
        type: 'B'
      },
      {
        text: 'Appreciative पर shy feel',
        type: 'C'
      },
      {
        text: 'Work itself reward है',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'New challenging project?',
    options: [
      {
        text: 'अगर pay अच्छी हो तो',
        type: 'A'
      },
      {
        text: 'अगर visibility हो तो',
        type: 'B'
      },
      {
        text: 'Excited! Learning opportunity',
        type: 'C'
      },
      {
        text: 'अगर meaningful हो तो',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Dream job में क्या चाहिए?',
    options: [
      {
        text: 'High salary, good perks',
        type: 'A'
      },
      {
        text: 'Title, power, influence',
        type: 'B'
      },
      {
        text: 'Interesting work, continuous learning',
        type: 'C'
      },
      {
        text: 'Making a difference',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Demotivating factor?',
    options: [
      {
        text: 'कम salary या unfair pay',
        type: 'A'
      },
      {
        text: 'Lack of recognition',
        type: 'B'
      },
      {
        text: 'Boring, repetitive work',
        type: 'C'
      },
      {
        text: 'Meaningless work',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Extra hours क्यों करेंगे?',
    options: [
      {
        text: 'Overtime pay के लिए',
        type: 'A'
      },
      {
        text: 'Impression बनाने के लिए',
        type: 'B'
      },
      {
        text: 'Problem solve करने का fun',
        type: 'C'
      },
      {
        text: 'Important cause के लिए',
        type: 'D'
      }
    ]
  },
  {
    id: 8,
    question: 'Perfect reward क्या होगा?',
    options: [
      {
        text: 'Cash bonus या raise',
        type: 'A'
      },
      {
        text: 'Promotion या award',
        type: 'B'
      },
      {
        text: 'Training या new project',
        type: 'C'
      },
      {
        text: 'Thank you from beneficiary',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Why do you work?',
    options: [
      {
        text: 'Financial needs fulfill करने',
        type: 'A'
      },
      {
        text: 'Career build करने, success के लिए',
        type: 'B'
      },
      {
        text: 'Skills use करने, grow करने',
        type: 'C'
      },
      {
        text: 'Contribute करने, purpose के लिए',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Low motivation phase में?',
    options: [
      {
        text: 'Salary reminder देखता/देखती हूं',
        type: 'A'
      },
      {
        text: 'Success stories याद करता/करती हूं',
        type: 'B'
      },
      {
        text: 'New things सीखने की try',
        type: 'C'
      },
      {
        text: 'Why याद करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Job switch के लिए क्या चाहिए?',
    options: [
      {
        text: 'Significant salary jump',
        type: 'A'
      },
      {
        text: 'Better title और role',
        type: 'B'
      },
      {
        text: 'Learning opportunities',
        type: 'C'
      },
      {
        text: 'More meaningful work',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Success की definition?',
    options: [
      {
        text: 'Wealth और financial freedom',
        type: 'A'
      },
      {
        text: 'Power, position, fame',
        type: 'B'
      },
      {
        text: 'Expertise और continuous growth',
        type: 'C'
      },
      {
        text: 'Positive impact on others',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'वित्तीय प्रेरित',
    emoji: '🌟',
    description: 'पैसा आपका primary motivator है। ये valid और honest है। Financial goals clear रखें।',
    traits: [
      'financial-driven',
      'practical',
      'goal-oriented',
      'ambitious'
    ],
    strengths: [
      'financial-driven',
      'practical'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'High-paying industries/roles target करें। Negotiation skills strong रखें। Investments में smart बनें।'
    ]
  },
  B: {
    type: 'B',
    title: 'मान्यता प्रेरित',
    emoji: '💼',
    description: 'Recognition और status आपको drive करता है। Ambitious हैं आप। Visibility roles suit करेंगी।',
    traits: [
      'achievement-driven',
      'ambitious',
      'status-seeking',
      'competitive'
    ],
    strengths: [
      'achievement-driven',
      'ambitious'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Leadership roles pursue करें। Personal brand build करें। Achievements document करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'विकास प्रेरित',
    emoji: '📈',
    description: 'Learning और growth आपका fuel है। Curious और intellectual हैं आप।',
    traits: [
      'learning-driven',
      'curious',
      'growth-minded',
      'intellectual'
    ],
    strengths: [
      'learning-driven',
      'curious'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Learning-rich environments choose करें। Skill development priority रखें। Teaching भी consider करें।'
    ]
  },
  D: {
    type: 'D',
    title: 'उद्देश्य प्रेरित',
    emoji: '🎯',
    description: 'Purpose और impact आपको motivate करता है। Meaningful work चाहिए आपको।',
    traits: [
      'purpose-driven',
      'values-oriented',
      'impact-focused',
      'mission-driven'
    ],
    strengths: [
      'purpose-driven',
      'values-oriented'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Mission-driven companies या NGOs explore करें। Social impact roles देखें। Values aligned work ढूंढें।'
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
