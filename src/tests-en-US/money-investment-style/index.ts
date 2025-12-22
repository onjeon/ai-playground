// Your Investment Personality
// What kind of investor are you?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-investment-style',
  title: 'Your Investment Personality',
  description: 'Are you a safe saver or a risky investor? Let\'s find your investment style!',
  category: 'money',
  emoji: '📈',
  color: 'from-emerald-500 to-green-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your approach to risk:',
      options: [
        { text: 'Play it safe - I can\'t afford to lose money', type: 'A' },
        { text: 'Moderate risk with diversification', type: 'B' },
        { text: 'Willing to take calculated risks for higher returns', type: 'C' },
        { text: 'High risk, high reward - let\'s go!', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When the market drops 20%, you:',
      options: [
        { text: 'Panic and want to sell everything', type: 'A' },
        { text: 'Concerned but know it\'s normal', type: 'B' },
        { text: 'See it as a buying opportunity', type: 'C' },
        { text: 'Buy more aggressively - this is the dip!', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your investment knowledge:',
      options: [
        { text: 'Limited - I\'d rather someone else handle it', type: 'A' },
        { text: 'Basic understanding of stocks and bonds', type: 'B' },
        { text: 'Pretty knowledgeable, do my own research', type: 'C' },
        { text: 'Deep knowledge, always researching new opportunities', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your ideal investment portfolio:',
      options: [
        { text: 'Safe bonds, savings accounts, maybe CDs', type: 'A' },
        { text: 'Mix of stocks, bonds, and index funds', type: 'B' },
        { text: 'Mostly stocks with some aggressive growth options', type: 'C' },
        { text: 'Individual stocks, crypto, options - the works', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How long can you wait for returns?',
      options: [
        { text: 'I need my money accessible and safe', type: 'A' },
        { text: '5-10 years, standard long-term', type: 'B' },
        { text: '10-20+ years, playing the long game', type: 'C' },
        { text: 'However long it takes to 10x', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Cryptocurrency:',
      options: [
        { text: 'Too risky, not for me', type: 'A' },
        { text: 'Maybe a small allocation, just in case', type: 'B' },
        { text: 'Part of a diversified portfolio', type: 'C' },
        { text: 'Significant portion of my investments', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you feel about checking your investments?',
      options: [
        { text: 'Avoid it - don\'t want to see losses', type: 'A' },
        { text: 'Occasionally, maybe monthly', type: 'B' },
        { text: 'Weekly to stay informed', type: 'C' },
        { text: 'Multiple times daily', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your biggest investment fear:',
      options: [
        { text: 'Losing my principal - I worked hard for that money', type: 'A' },
        { text: 'Not beating inflation', type: 'B' },
        { text: 'Missing out on good opportunities', type: 'C' },
        { text: 'Not being aggressive enough', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'A friend suggests a "hot tip" investment:',
      options: [
        { text: 'No thanks, sounds too risky', type: 'A' },
        { text: 'Would research it thoroughly first', type: 'B' },
        { text: 'Might put a small amount in', type: 'C' },
        { text: 'Already in - YOLO!', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your investment goal:',
      options: [
        { text: 'Preserve what I have', type: 'A' },
        { text: 'Steady growth over time', type: 'B' },
        { text: 'Build significant wealth', type: 'C' },
        { text: 'Get rich or try trying', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Safe Saver',
      emoji: '🔒',
      description: 'You prioritize safety over growth. Your money stays in low-risk places where you can sleep at night. You\'d rather have guaranteed small returns than risk losing anything. Conservative but sensible.',
      traits: ['Risk-averse', 'Conservative', 'Safety-focused', 'Cautious'],
      strengths: ['No sleepless nights over losses', 'Money is secure'],
      weaknesses: ['Might not beat inflation', 'Missing potential growth'],
      tips: ['Some risk is necessary for growth', 'Consider at least index funds', 'Time in market matters'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Investor',
      emoji: '⚖️',
      description: 'You\'ve found the middle ground - diversified portfolio, appropriate risk for your age, and a long-term perspective. You\'re what financial advisors recommend. Boring? Maybe. Smart? Definitely.',
      traits: ['Balanced', 'Diversified', 'Sensible', 'Long-term thinker'],
      strengths: ['Good risk/reward balance', 'Weathering market ups and downs', 'Solid strategy'],
      weaknesses: ['Might get bored with slow growth'],
      tips: ['Stay the course', 'Rebalance periodically', 'You\'re doing it right'],
    },
    C: {
      type: 'C',
      title: 'The Growth Seeker',
      emoji: '🚀',
      description: 'You\'re here to build wealth. Higher risk? Bring it on. You do your research, you\'re in it for the long haul, and you see market dips as opportunities. You\'re aggressive but informed.',
      traits: ['Growth-focused', 'Research-driven', 'Opportunistic', 'Risk-tolerant'],
      strengths: ['Potential for significant returns', 'Market savvy'],
      weaknesses: ['Could get burned in downturns', 'Might take too much risk'],
      tips: ['Don\'t bet more than you can lose', 'Stay diversified', 'Arrogance kills returns'],
    },
    D: {
      type: 'D',
      title: 'The YOLO Investor',
      emoji: '🎰',
      description: 'You invest like you\'re at a casino - high risk, high potential reward. Crypto, meme stocks, options - you\'ve probably tried it all. Either you\'ll be rich or you\'ll have great stories about the money you lost.',
      traits: ['High risk', 'Speculative', 'Aggressive', 'Thrill-seeking'],
      strengths: ['Might actually get rich'],
      weaknesses: ['Might actually go broke', 'This is basically gambling'],
      tips: ['Only bet what you can lose', 'Have SOME safe investments', 'Past wins don\'t guarantee future success'],
    },
  },
};

export default testData;
