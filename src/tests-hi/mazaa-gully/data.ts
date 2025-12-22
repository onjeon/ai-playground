// गली क्रिकेट स्टाइल - Gully Cricket Personality
// Your street cricket style reveals your personality!

export const questions = [
  {
    id: 1,
    question: "गली क्रिकेट में आप कौन बनते हैं?",
    options: [
      { text: "Captain और main batsman", type: "A" },
      { text: "Deadly fast bowler", type: "B" },
      { text: "All-rounder, जो भी चाहिए कर लूं", type: "C" },
      { text: "Commentator/cheerer - 'Maar ke dekh!'", type: "D" },
    ],
  },
  {
    id: 2,
    question: "Team select करनी है, आप?",
    options: [
      { text: "Pehle khud choose होता हूं", type: "A" },
      { text: "Aggressive players चुनूंगा", type: "B" },
      { text: "Balance बनाऊंगा team में", type: "C" },
      { text: "Dost को pehle लूंगा, skill बाद में", type: "D" },
    ],
  },
  {
    id: 3,
    question: "Ball खो गई gutter में, अब?",
    options: [
      { text: "नई ball लाओ, time waste मत करो", type: "A" },
      { text: "Main nikालूंगा, मुझे कोई problem नहीं", type: "B" },
      { text: "सब मिलकर ढूंढें", type: "C" },
      { text: "Aunty की खिड़की तोड़ी थी, वो ball चलेगी!", type: "D" },
    ],
  },
  {
    id: 4,
    question: "Out का decision controversial है?",
    options: [
      { text: "मेरा decision final, main captain हूं", type: "A" },
      { text: "Argue करूंगा, LBW कैसे?", type: "B" },
      { text: "Fair play, replay नहीं तो benefit batsman को", type: "C" },
      { text: "Chalo yaar, game enjoy करो", type: "D" },
    ],
  },
  {
    id: 5,
    question: "Match हार रहे हैं, 20 runs 5 balls में?",
    options: [
      { text: "Mujhe bat दो, main finish करूंगा", type: "A" },
      { text: "6 मारो, sochna क्या है!", type: "B" },
      { text: "Singles भी important हैं, try करते हैं", type: "C" },
      { text: "Haarे तो क्या, maza आया!", type: "D" },
    ],
  },
  {
    id: 6,
    question: "बड़े भाई का gang आ गया ground पर?",
    options: [
      { text: "Negotiate करूंगा, time share कर लेते हैं", type: "A" },
      { text: "नहीं छोड़ूंगा ground, पहले आए थे", type: "B" },
      { text: "थोड़ी देर बाद आ जाएंगे", type: "C" },
      { text: "Unko भी include कर लो, bड़ा match!", type: "D" },
    ],
  },
  {
    id: 7,
    question: "Wicket keeping कौन करेगा?",
    options: [
      { text: "Chotu करेगा, main batting नहीं छोड़ूंगा", type: "A" },
      { text: "Fast bowling में diving catch लूंगा!", type: "B" },
      { text: "Turn by turn सब करें", type: "C" },
      { text: "Jo bhi kare, main cheering करूंगा", type: "D" },
    ],
  },
  {
    id: 8,
    question: "बारिश आ गई match के बीच में?",
    options: [
      { text: "DLS method से result निकालो", type: "A" },
      { text: "Play on! थोड़ी बारिश से क्या", type: "B" },
      { text: "Shelter में रुको, फिर खेलेंगे", type: "C" },
      { text: "Rain dance! Barish में cricket extra मज़ा", type: "D" },
    ],
  },
  {
    id: 9,
    question: "टॉप स्कोरर कौन रहता है usually?",
    options: [
      { text: "Obviously main, पूछना क्या", type: "A" },
      { text: "Quick runs मारता हूं, strike rate देखो", type: "B" },
      { text: "Consistent रहता हूं, out कम होता हूं", type: "C" },
      { text: "Yaar, scoreboard kaun देखता है!", type: "D" },
    ],
  },
  {
    id: 10,
    question: "Match जीत गए, celebration?",
    options: [
      { text: "Victory speech दूंगा, captain जो हूं", type: "A" },
      { text: "Aggressive fist pump, 'Humने kiya!'", type: "B" },
      { text: "Handshake और good game कहूंगा", type: "C" },
      { text: "Ice cream party! Haar जीत से ज्यादा मज़ा", type: "D" },
    ],
  },
];

export const results = {
  A: {
    type: "A",
    title: "गली का विराट कोहली",
    emoji: "👑",
    description: "आप गली के Virat Kohli हैं! Captain, main player, decision-maker। सब आपको देखते हैं, आप lead करते हैं। Competitive spirit और winning attitude। पड़ोस में सब जानते हैं - 'वो क्रिकेट वाला!'",
    traits: ["Leader", "Competitive", "Skilled", "Confident"],
    strengths: ["Leadership", "Decision making", "Performance under pressure"],
    weaknesses: ["कभी-कभी ego issues", "हर चीज़ control करना"],
    tips: ["Team players को भी credit दो", "हार भी accept करो gracefully"],
  },
  B: {
    type: "B",
    title: "गली का जसप्रीत बुमराह",
    emoji: "🔥",
    description: "आप aggressive player हैं - Bumrah की तरह deadly! Fast bowling हो या power hitting, full attack mode। Opponent को देखकर डर लगता है। 'Ye aaya, ab lage haath!'",
    traits: ["Aggressive", "Fearless", "Energetic", "Intense"],
    strengths: ["Power", "Intimidation", "Match-winning ability"],
    weaknesses: ["Over-aggressive कभी-कभी", "Patience कम"],
    tips: ["Strategy भी use करो", "Cool head भी रखो कभी-कभी"],
  },
  C: {
    type: "C",
    title: "गली का राहुल द्रविड़",
    emoji: "🛡️",
    description: "आप Rahul Dravid हैं - The Wall! Reliable, consistent, team player। Drama नहीं, performance बोलती है। सब respect करते हैं, depend करते हैं। Real MVP!",
    traits: ["Reliable", "Consistent", "Team player", "Balanced"],
    strengths: ["Dependability", "Fair play", "Consistency"],
    weaknesses: ["Spotlight से दूर रहते हो", "कभी-कभी too safe"],
    tips: ["अपना credit लो", "Risk भी लो कभी-कभी"],
  },
  D: {
    type: "D",
    title: "गली का Shardul Thakur",
    emoji: "🎉",
    description: "आप Fun player हैं - Shardul जैसे unpredictable! Result से ज्यादा मज़ा important। हंसी मज़ाक, cheering, सबको enjoy कराना। Cricket? Entertainment है boss!",
    traits: ["Fun-loving", "Social", "Positive", "Entertaining"],
    strengths: ["Team spirit", "Positivity", "Making friends"],
    weaknesses: ["Serious कम होते हो", "Focus कभी-कभी कम"],
    tips: ["Competition भी enjoy करो", "Winning का मज़ा अलग है!"],
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
