// सहकर्मी संबंध टेस्ट
// Career Test - Hindi

export const questions = [
  {
    id: 1,
    question: 'New colleague join करे तो?',
    options: [
      {
        text: 'Personally welcome, help settle',
        type: 'A'
      },
      {
        text: 'Friendly introduction',
        type: 'B'
      },
      {
        text: 'जब interaction हो तब',
        type: 'C'
      },
      {
        text: 'Others का काम है welcoming',
        type: 'D'
      }
    ]
  },
  {
    id: 2,
    question: 'Help मांगें colleagues?',
    options: [
      {
        text: 'Always ready, even busy हो तो भी time',
        type: 'A'
      },
      {
        text: 'जब possible हो तब help',
        type: 'B'
      },
      {
        text: 'अगर आसान हो तो',
        type: 'C'
      },
      {
        text: 'अपना काम काफी है',
        type: 'D'
      }
    ]
  },
  {
    id: 3,
    question: 'Office gossip?',
    options: [
      {
        text: 'Strictly avoid करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Listen पर participate नहीं',
        type: 'B'
      },
      {
        text: 'कभी कभी हो जाता है',
        type: 'C'
      },
      {
        text: 'Gossip में interested',
        type: 'D'
      }
    ]
  },
  {
    id: 4,
    question: 'Credit sharing?',
    options: [
      {
        text: 'Team और individuals को credit देता/देती हूं',
        type: 'A'
      },
      {
        text: 'Fair credit distribution',
        type: 'B'
      },
      {
        text: 'अपना credit claim करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Credit fight करता/करती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 5,
    question: 'Conflict with peer?',
    options: [
      {
        text: 'Directly, respectfully resolve',
        type: 'A'
      },
      {
        text: 'Try करता/करती हूं solve करने की',
        type: 'B'
      },
      {
        text: 'Avoid करता/करती हूं',
        type: 'C'
      },
      {
        text: 'Escalate कर देता/देती हूं',
        type: 'D'
      }
    ]
  },
  {
    id: 6,
    question: 'Lunch और breaks?',
    options: [
      {
        text: 'Colleagues के साथ, bond करता/करती हूं',
        type: 'A'
      },
      {
        text: 'Mix - alone और together',
        type: 'B'
      },
      {
        text: 'Mostly alone',
        type: 'C'
      },
      {
        text: 'Desk पर ही lunch',
        type: 'D'
      }
    ]
  },
  {
    id: 7,
    question: 'Knowledge sharing with peers?',
    options: [
      {
        text: 'Proactively share करता/करती हूं',
        type: 'A'
      },
      {
        text: 'जब पूछें तब share',
        type: 'B'
      },
      {
        text: 'Selective sharing',
        type: 'C'
      },
      {
        text: 'Knowledge is power, protect',
        type: 'D'
      }
    ]
  },
  {
    id: 9,
    question: 'Collaboration style?',
    options: [
      {
        text: 'Team player, collaborative',
        type: 'A'
      },
      {
        text: 'Cooperate करता/करती हूं',
        type: 'B'
      },
      {
        text: 'जब जरूरी हो तब',
        type: 'C'
      },
      {
        text: 'Prefer solo work',
        type: 'D'
      }
    ]
  },
  {
    id: 10,
    question: 'Work friendships?',
    options: [
      {
        text: 'Close friends at work',
        type: 'A'
      },
      {
        text: 'Friendly with many',
        type: 'B'
      },
      {
        text: 'Professional relations only',
        type: 'C'
      },
      {
        text: 'Distant से colleagues',
        type: 'D'
      }
    ]
  },
  {
    id: 11,
    question: 'Peer feedback?',
    options: [
      {
        text: 'Give और receive openly',
        type: 'A'
      },
      {
        text: 'Accept करता/करती हूं well',
        type: 'B'
      },
      {
        text: 'Uncomfortable देने में',
        type: 'C'
      },
      {
        text: 'Peer feedback avoid',
        type: 'D'
      }
    ]
  },
  {
    id: 12,
    question: 'Trust level with colleagues?',
    options: [
      {
        text: 'High trust, open communication',
        type: 'A'
      },
      {
        text: 'Trust most colleagues',
        type: 'B'
      },
      {
        text: 'Selective trust',
        type: 'C'
      },
      {
        text: 'Trust issues at work',
        type: 'D'
      }
    ]
  }
];

export const results = {
  A: {
    type: 'A',
    title: 'टीम का स्तंभ',
    emoji: '🌟',
    description: 'Outstanding colleague! आप team के pillar हैं। Collaborative, supportive, और trustworthy - सब आपके साथ काम करना चाहते हैं।',
    traits: [
      'collaborative',
      'supportive',
      'trustworthy',
      'team-player'
    ],
    strengths: [
      'collaborative',
      'supportive'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'अपनी qualities maintain करें। Cross-functional projects lead करें। Natural leader हैं आप।'
    ]
  },
  B: {
    type: 'B',
    title: 'अच्छा सहकर्मी',
    emoji: '💼',
    description: 'आप good colleague हैं। Professional और helpful। Relationships और भी strong बन सकती हैं।',
    traits: [
      'professional',
      'helpful',
      'cooperative',
      'balanced'
    ],
    strengths: [
      'professional',
      'helpful'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'More proactive होने की try करें। Deep connections build करें। Network expand करें।'
    ]
  },
  C: {
    type: 'C',
    title: 'प्रोफेशनल दूरी',
    emoji: '📈',
    description: 'आप professional boundaries रखते हैं। ये okay है, पर isolation career को limit कर सकता है।',
    traits: [
      'reserved',
      'professional',
      'independent',
      'distant'
    ],
    strengths: [
      'reserved',
      'professional'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'थोड़ा more open होने की try करें। Coffee चैट्स से शुरू करें। Networking important है।'
    ]
  },
  D: {
    type: 'D',
    title: 'रिलेशनशिप पर काम करें',
    emoji: '🎯',
    description: 'Peer relationships weak हैं। Work environment और career दोनों पर impact हो सकता है।',
    traits: [
      'isolated',
      'disconnected',
      'needs-improvement',
      'struggling'
    ],
    strengths: [
      'isolated',
      'disconnected'
    ],
    weaknesses: [
      'सुधार की गुंजाइश',
      'और development जरूरी'
    ],
    tips: [
      'Small steps लें - smile, greet, help offer करें। Trust build करें gradually। Professional है ये, personal नहीं।'
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
