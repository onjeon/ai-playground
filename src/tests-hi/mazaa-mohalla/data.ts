// मोहल्ले में आपका किरदार - Your Role in the Neighborhood
// Indian Mohalla/Colony Personality Test

export const questions = [
  {
    id: 1,
    question: "मोहल्ले में कोई function है, आप?",
    options: [
      { text: "Main organizer, सब arrange करूंगा", type: "A" },
      { text: "VIP guest, बस आऊंगा और enjoy करूंगा", type: "B" },
      { text: "Helper, जहां जरूरत वहां", type: "C" },
      { text: "Gossip corner में, सबकी खबर रखूंगा", type: "D" },
    ],
  },
  {
    id: 2,
    question: "नया family आया मोहल्ले में?",
    options: [
      { text: "Welcome करूंगा, मोहल्ले का intro दूंगा", type: "A" },
      { text: "वो आएं मिलने, पहले क्यों जाऊं", type: "B" },
      { text: "कुछ मिठाई लेकर जाऊंगा", type: "C" },
      { text: "पता करूंगा - कहां से आए, क्या करते हैं!", type: "D" },
    ],
  },
  {
    id: 3,
    question: "पड़ोसी के घर से आवाज़ आ रही है?",
    options: [
      { text: "जाकर देखूंगा, कुछ help चाहिए क्या", type: "A" },
      { text: "मेरे घर noise complain करें तो देखूं", type: "B" },
      { text: "कुछ serious हो तो help करूंगा", type: "C" },
      { text: "Balcony से देखूंगा, क्या हो रहा है!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "मोहल्ले में parking का झगड़ा?",
    options: [
      { text: "Meeting बुलाऊंगा, rules बनाएंगे", type: "A" },
      { text: "मेरी जगह कोई ले, तब देखूंगा", type: "B" },
      { text: "Adjust कर लूंगा, झगड़ा नहीं करता", type: "C" },
      { text: "Masala! कौन किससे लड़ रहा?", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Diwali में मोहल्ले का decoration?",
    options: [
      { text: "Committee head, सब organize", type: "A" },
      { text: "Contribution दे दूंगा, काम नहीं", type: "B" },
      { text: "Lights लगाने में help करूंगा", type: "C" },
      { text: "Photos खींचूंगा और share करूंगा सबको", type: "D" },
    ],
  },
  {
    id: 6,
    question: "किसी की शादी में?",
    options: [
      { text: "Arrangements देखूंगा, सब smooth हो", type: "A" },
      { text: "VIP treatment चाहिए, मोहल्ले का बड़ा हूं", type: "B" },
      { text: "Kitchen या stage पर help करूंगा", type: "C" },
      { text: "दुल्हन कैसी है? लड़के के घर वाले कैसे?", type: "D" },
    ],
  },
  {
    id: 7,
    question: "मोहल्ले में power cut?",
    options: [
      { text: "Electricity office में call लगाऊंगा", type: "A" },
      { text: "AC बंद है, irritating!", type: "B" },
      { text: "Inverter है, पड़ोसी को भी connect दे दूं", type: "C" },
      { text: "सब बाहर आ गए, gossip time!", type: "D" },
    ],
  },
  {
    id: 8,
    question: "कोई बीमार है मोहल्ले में?",
    options: [
      { text: "Doctor की information दूंगा, help arrange", type: "A" },
      { text: "Get well soon message भेज दूंगा", type: "B" },
      { text: "खाना बनाकर भेज दूंगा", type: "C" },
      { text: "क्या हुआ? कब से? अब कैसे हैं?", type: "D" },
    ],
  },
  {
    id: 9,
    question: "मोहल्ले के बच्चों के साथ?",
    options: [
      { text: "Events organize करता हूं उनके लिए", type: "A" },
      { text: "बच्चे शोर करते हैं, disturb करते हैं", type: "B" },
      { text: "खेलने देता हूं, chocolates देता हूं", type: "C" },
      { text: "बच्चों से सारी news मिलती है!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "मोहल्ले में आप famous किसलिए?",
    options: [
      { text: "हर काम में आगे, leader type", type: "A" },
      { text: "Attitude और style के लिए", type: "B" },
      { text: "हमेशा मदद के लिए ready", type: "C" },
      { text: "सबकी खबर रखने के लिए", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "मोहल्ले का प्रधान",
    emoji: "🏛️",
    description: "आप मोहल्ले के unofficial प्रधान हैं! हर event, हर problem में आप आगे। सब आपसे सलाह लेते हैं, आप lead करते हैं। 'पार्षद को बोलो, वो karva देंगे!' - ये आप हैं मोहल्ले के!",
    traits: ["Leader", "Organizer", "Helpful", "Responsible"],
    strengths: ["Community building", "Problem solving", "Networking"],
    weaknesses: ["हर चीज़ में involve होना", "Rest कम लेते हो"],
    tips: ["Delegation सीखो", "अपने लिए भी time निकालो"],
  },
  B: {
    type: "B",
    title: "मोहल्ले का VIP",
    emoji: "⭐",
    description: "आप मोहल्ले के VIP हैं! थोड़े aloof, थोड़े special। सब जानते हैं आपको, पर personally कम। Respect मिलती है, distance भी। 'वो बड़े घर वाले' - community में status!",
    traits: ["Prestigious", "Reserved", "Respected", "Independent"],
    strengths: ["Self-respect", "Boundaries", "Privacy"],
    weaknesses: ["Community से disconnect", "कभी-कभी arrogant लगते हो"],
    tips: ["Approachable बनो", "Community में participate करो"],
  },
  C: {
    type: "C",
    title: "मोहल्ले का सहारा",
    emoji: "🤝",
    description: "आप मोहल्ले के सहारा हैं - जब भी जरूरत, आप वहां! Silently help करने वाले, बिना credit के। सब जानते हैं - 'उन्हें बोलो, वो मना नहीं करते!' Unsung hero!",
    traits: ["Helpful", "Kind", "Reliable", "Humble"],
    strengths: ["Generosity", "Reliability", "Empathy"],
    weaknesses: ["कभी-कभी taken for granted", "अपने लिए time कम"],
    tips: ["'No' भी बोलना सीखो", "Self-care भी important है"],
  },
  D: {
    type: "D",
    title: "मोहल्ले का Radio",
    emoji: "📻",
    description: "आप मोहल्ले के Radio हैं - सबकी खबर रखने वाले! कौन कहां, क्या हुआ, सब पता। Information hub, social connector। 'उनसे पूछो, उन्हें सब पता होता है!'",
    traits: ["Social", "Curious", "Informed", "Talkative"],
    strengths: ["Social connections", "Information network", "Communication"],
    weaknesses: ["Privacy की respect कम", "Gossip reputation"],
    tips: ["Boundaries respect करो", "Listening भी important है"],
  },
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
