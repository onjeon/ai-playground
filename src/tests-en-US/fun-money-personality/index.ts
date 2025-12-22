// Your Money Personality
// Are you a saver, spender, or something in between?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-money-personality',
  title: 'What\'s Your Money Personality?',
  description: 'Discover if you\'re a saver, spender, or living paycheck to paycheck on purpose!',
  category: 'fun',
  emoji: '💸',
  color: 'from-green-600 to-emerald-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You get an unexpected $500. You\'re immediately:',
      options: [
        { text: 'Straight to savings - don\'t even think about it', type: 'A' },
        { text: 'Pay some bills, save some, maybe a small treat', type: 'B' },
        { text: 'Treating myself! This is bonus money!', type: 'C' },
        { text: 'Already mentally spent before it hits my account', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your bank account right now:',
      options: [
        { text: 'Healthy emergency fund + savings goals on track', type: 'A' },
        { text: 'Decent cushion, could be better', type: 'B' },
        { text: 'It fluctuates... a lot', type: 'C' },
        { text: 'I don\'t check. Ignorance is bliss.', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your thoughts on "treating yourself":',
      options: [
        { text: 'Rare and calculated - must be earned', type: 'A' },
        { text: 'Occasional rewards for hitting goals', type: 'B' },
        { text: 'I work hard, I deserve nice things', type: 'C' },
        { text: 'Life is short, treat yourself daily', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you feel about budgets?',
      options: [
        { text: 'Color-coded spreadsheet that I check weekly', type: 'A' },
        { text: 'I have a loose budget I mostly follow', type: 'B' },
        { text: 'I\'ve tried budgeting... key word: tried', type: 'C' },
        { text: 'Budget? In this economy?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Something you want is on sale. You:',
      options: [
        { text: 'Research, compare prices, decide if I actually need it', type: 'A' },
        { text: 'If it was on my wishlist already, sure', type: 'B' },
        { text: 'It\'s a DEAL! Obviously I\'m buying it', type: 'C' },
        { text: 'Buy it now, justify it later (or don\'t)', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with online shopping:',
      options: [
        { text: 'Rarely - I prefer to save my money', type: 'A' },
        { text: 'Occasional purchases, mostly necessities', type: 'B' },
        { text: 'My cart is always full, just waiting', type: 'C' },
        { text: 'Packages arrive and I forget what I ordered', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Splitting the bill with friends:',
      options: [
        { text: 'Everyone pays exactly what they ordered', type: 'A' },
        { text: 'Split evenly if it\'s close enough', type: 'B' },
        { text: 'I\'ll cover it this time, you get next time', type: 'C' },
        { text: 'Hope someone else figures it out', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your approach to financial goals:',
      options: [
        { text: 'Specific goals with timelines and tracking', type: 'A' },
        { text: 'General goals I\'m working toward', type: 'B' },
        { text: 'Vague aspirations of having more money', type: 'C' },
        { text: 'My goal is to survive until next payday', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How much do you know about your finances?',
      options: [
        { text: 'Exact account balances, upcoming bills, net worth', type: 'A' },
        { text: 'General sense of where I stand', type: 'B' },
        { text: 'I know when I\'m running low', type: 'C' },
        { text: 'I prefer not to know the full picture', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If you got a raise, you would:',
      options: [
        { text: 'Increase savings, invest the difference', type: 'A' },
        { text: 'Save more but also enjoy a little upgrade', type: 'B' },
        { text: 'Lifestyle upgrade time!', type: 'C' },
        { text: 'Finally break even on my spending', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Saver',
      emoji: '🏦',
      description: 'You have emergency funds, retirement accounts, and money anxiety all at once. Every dollar has a job and you know exactly where your money goes. You\'ll be financially secure... but are you having fun?',
      traits: ['Responsible', 'Disciplined', 'Future-focused', 'Careful'],
      strengths: ['Financial security', 'Prepared for emergencies', 'Great habits', 'Compound interest is your friend'],
      weaknesses: ['Might be too restrictive', 'Could enjoy money more', 'Anxiety about spending'],
      tips: ['It\'s okay to treat yourself', 'Money is also for joy', 'You\'ve earned some fun'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Spender',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot! You save enough to feel secure but also enjoy your money. You have goals but aren\'t obsessive about them. This is the way.',
      traits: ['Balanced', 'Practical', 'Flexible', 'Reasonable'],
      strengths: ['Healthy relationship with money', 'Enjoys life AND saves', 'Sustainable habits'],
      weaknesses: ['Could probably save more', 'Occasional impulse buys', 'Not maximizing everything'],
      tips: ['You\'re doing great', 'Keep the balance', 'Maybe automate savings to save more'],
    },
    C: {
      type: 'C',
      title: 'The Lifestyle Lover',
      emoji: '✨',
      description: 'You work hard and you want to ENJOY your money. Experiences, nice things, treating friends - money is for living! Savings... yeah, you\'ll get to that. Eventually. The memories are worth it, right?',
      traits: ['Generous', 'Experience-focused', 'Spontaneous', 'Fun'],
      strengths: ['Great memories', 'Lives fully', 'Generous with others', 'Enjoys life'],
      weaknesses: ['Emergency fund might be thin', 'YOLO mentality has limits', 'Future you might be stressed'],
      tips: ['Automate some savings first', 'Balance now with later', 'Small savings add up'],
    },
    D: {
      type: 'D',
      title: 'The YOLO Spender',
      emoji: '🔥',
      description: 'Money comes, money goes, you\'re not entirely sure where. Your bank account lives on the edge and so do you. You\'re either very stressed or completely unbothered - no in-between. The economy is fake anyway, right?',
      traits: ['Spontaneous', 'Present-focused', 'Carefree', 'Unbothered'],
      strengths: ['Not stressed about money (somehow)', 'Lives in the moment', 'Flexible'],
      weaknesses: ['No safety net', 'Future might be rough', 'Avoidance isn\'t a strategy'],
      tips: ['Just start with $50/month savings', 'One small step helps', 'Look at your accounts (scary but necessary)'],
    },
  },
};

export default testData;
