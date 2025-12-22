// Critical Thinking Test - Viral IQ test for American English users

export const testData = {
  id: "iq-critical-thinking",
  title: "Critical Thinking Test",
  description: "Can you spot flawed logic and biased arguments? Test your ability to think critically!",
  questions: [
    {
      id: 1,
      text: "A headline reads: 'Study shows coffee drinkers live longer!' Your first thought is:",
      options: [
        { text: "What other factors might explain this correlation?", type: "critical" },
        { text: "Great, I should drink more coffee!", type: "developing" },
        { text: "How many people were in the study?", type: "analytical" },
        { text: "Interesting, I'll share this article", type: "average" }
      ]
    },
    {
      id: 2,
      text: "Someone argues: 'My grandfather smoked his whole life and lived to 95, so smoking can't be that bad.' This is:",
      options: [
        { text: "An anecdotal fallacy - one case doesn't disprove statistics", type: "critical" },
        { text: "A valid point worth considering", type: "developing" },
        { text: "Interesting but probably an exception", type: "average" },
        { text: "Evidence that genetics matter more", type: "analytical" }
      ]
    },
    {
      id: 3,
      text: "A product has '95% approval rating!' What question should you ask?",
      options: [
        { text: "Who was surveyed and how were they selected?", type: "critical" },
        { text: "Which competitors has it beaten?", type: "average" },
        { text: "Is this a trusted brand?", type: "developing" },
        { text: "What did the other 5% complain about?", type: "analytical" }
      ]
    },
    {
      id: 4,
      text: "Your friend says: 'Everyone I know thinks this movie is amazing.' Therefore:",
      options: [
        { text: "Their sample size is limited to their social circle", type: "critical" },
        { text: "The movie is probably actually amazing", type: "developing" },
        { text: "You should watch it to form your own opinion", type: "analytical" },
        { text: "You'd probably like it too", type: "average" }
      ]
    },
    {
      id: 5,
      text: "News source A says X, source B says the opposite. How do you approach this?",
      options: [
        { text: "Look for primary sources and consider each outlet's bias", type: "critical" },
        { text: "Trust the source I've used before", type: "developing" },
        { text: "Look for a third source to break the tie", type: "analytical" },
        { text: "The truth is probably somewhere in the middle", type: "average" }
      ]
    },
    {
      id: 6,
      text: "'Natural' products are marketed as healthier than 'artificial' ones. Your thinking:",
      options: [
        { text: "Natural vs artificial is a false dichotomy - arsenic is natural too", type: "critical" },
        { text: "Natural is generally safer and better", type: "developing" },
        { text: "It depends on the specific product", type: "analytical" },
        { text: "I prefer natural when possible", type: "average" }
      ]
    },
    {
      id: 7,
      text: "A politician says: 'If we don't do X, disaster Y will happen.' This might be:",
      options: [
        { text: "A false dilemma - there are probably other options", type: "critical" },
        { text: "A reasonable warning to take seriously", type: "developing" },
        { text: "Worth fact-checking their prediction", type: "analytical" },
        { text: "Depends on their track record", type: "average" }
      ]
    },
    {
      id: 8,
      text: "You strongly disagree with an article. The best response is to:",
      options: [
        { text: "Examine why you disagree - am I being objective?", type: "critical" },
        { text: "Look for articles that confirm my view", type: "developing" },
        { text: "Research the author's credentials", type: "analytical" },
        { text: "Discuss it with someone who might agree with the article", type: "average" }
      ]
    },
    {
      id: 9,
      text: "'Studies show...' appears in an article without citations. You:",
      options: [
        { text: "Treat the claim skeptically until I can verify the source", type: "critical" },
        { text: "Assume it's probably true if it's published", type: "developing" },
        { text: "Google to find the actual studies", type: "analytical" },
        { text: "Consider it somewhat reliable", type: "average" }
      ]
    },
    {
      id: 10,
      text: "When forming opinions on complex topics, you typically:",
      options: [
        { text: "Actively seek out opposing viewpoints to stress-test my thinking", type: "critical" },
        { text: "Research until I feel confident in my view", type: "analytical" },
        { text: "Trust experts and established sources", type: "average" },
        { text: "Go with what feels right after some reading", type: "developing" }
      ]
    }
  ],
  results: {
    critical: {
      type: "Critical Thinking Master",
      description: "Your BS detector is finely tuned! You naturally spot logical fallacies, question assumptions, and refuse to accept claims at face value. You're not easily manipulated by rhetoric, advertising, or biased media. This skill is incredibly rare and valuable in today's information-overloaded world!",
      traits: ["Fallacy detection", "Source evaluation", "Assumption questioning", "Bias awareness"],
      advice: "Your critical mind is a superpower in the misinformation age! Help others develop these skills too - we need more critical thinkers!"
    },
    analytical: {
      type: "Analytical Evaluator",
      description: "You've got strong analytical skills! You don't take things at face value and like to dig deeper. You might not catch every logical flaw, but you're more discerning than most people and make evidence-based decisions.",
      traits: ["Research-oriented", "Evidence-based", "Questioning nature", "Methodical thinking"],
      advice: "You're on the right track! Study formal logic and common fallacies to sharpen your critical edge even more."
    },
    average: {
      type: "Reasonable Thinker",
      description: "You have decent critical thinking skills - better than many! You can spot obvious manipulation but might miss subtle logical flaws or biases. You balance skepticism with trust, which works for everyday life.",
      traits: ["Balanced skepticism", "Common sense", "Practical evaluation", "Moderate questioning"],
      advice: "Practice asking 'what's the evidence?' and 'who benefits from me believing this?' to level up your critical thinking!"
    },
    developing: {
      type: "Trust-Based Thinker",
      description: "You tend to take information at face value - you trust sources, believe compelling arguments, and don't naturally question claims. This isn't necessarily bad (life is easier with trust!), but it can make you vulnerable to manipulation and misinformation.",
      traits: ["Trusting nature", "Face-value acceptance", "Intuition-based", "Open to influence"],
      advice: "Start small: when you see a claim, ask 'how do they know this?' and 'could they be wrong?' It gets easier with practice!"
    }
  }
};
