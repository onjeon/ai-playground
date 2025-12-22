// Your Saving Style
// How do you approach saving money?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-saving-style',
  title: 'Your Saving Style',
  description: 'Do you save like a squirrel preparing for winter or live paycheck to paycheck? Let\'s see!',
  category: 'money',
  emoji: '🐿️',
  color: 'from-amber-500 to-yellow-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your current savings situation:',
      options: [
        { text: 'Emergency fund fully funded plus investments', type: 'A' },
        { text: 'Some savings, working on building more', type: 'B' },
        { text: 'A little saved, not as much as I\'d like', type: 'C' },
        { text: 'Savings? In this economy?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When payday hits:',
      options: [
        { text: 'Savings auto-transfers immediately', type: 'A' },
        { text: 'Transfer to savings after paying bills', type: 'B' },
        { text: 'Plan to save, somehow it doesn\'t happen', type: 'C' },
        { text: 'Money comes in, money goes out', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your approach to saving for goals:',
      options: [
        { text: 'Separate accounts for each goal, automated', type: 'A' },
        { text: 'General savings with goals in mind', type: 'B' },
        { text: 'Vague intentions to save for things', type: 'C' },
        { text: 'Goals and savings don\'t really connect', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'An unexpected expense of $1000 would:',
      options: [
        { text: 'Come from emergency fund, no stress', type: 'A' },
        { text: 'Be manageable, might dip into savings', type: 'B' },
        { text: 'Be stressful but I\'d figure it out', type: 'C' },
        { text: 'Be a full-blown financial crisis', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you feel about your savings progress?',
      options: [
        { text: 'On track, feeling confident about the future', type: 'A' },
        { text: 'Could be better, but making progress', type: 'B' },
        { text: 'Frustrated - I keep trying but falling short', type: 'C' },
        { text: 'What progress? This is survival mode', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your savings motivation:',
      options: [
        { text: 'Financial independence and security', type: 'A' },
        { text: 'Future goals - house, travel, retirement', type: 'B' },
        { text: 'I know I should, but motivation is low', type: 'C' },
        { text: 'Honestly? None. I\'ll worry about it later.', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you want something expensive:',
      options: [
        { text: 'Save specifically for it before buying', type: 'A' },
        { text: 'Wait, save what I can, then decide', type: 'B' },
        { text: 'Probably buy it and figure out savings later', type: 'C' },
        { text: 'Credit card now, regret later', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your knowledge of your savings rate:',
      options: [
        { text: 'Know exact percentage, track regularly', type: 'A' },
        { text: 'Rough idea of what I save monthly', type: 'B' },
        { text: 'Not sure, definitely not enough', type: 'C' },
        { text: 'Savings rate implies there\'s saving happening', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Retirement savings:',
      options: [
        { text: 'Maxing out contributions, on track', type: 'A' },
        { text: 'Contributing regularly, could do more', type: 'B' },
        { text: 'Started something, not consistent', type: 'C' },
        { text: 'I\'m never going to be able to retire anyway', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your biggest saving obstacle:',
      options: [
        { text: 'None really - I\'ve got it figured out', type: 'A' },
        { text: 'Just need more income or fewer expenses', type: 'B' },
        { text: 'Willpower - I keep spending what I plan to save', type: 'C' },
        { text: 'Everything. All of it. The whole system.', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Super Saver',
      emoji: '🏆',
      description: 'You\'re the person financial advisors dream about. Emergency fund? Funded. Retirement? On track. You save automatically, track everything, and have a clear plan for the future. Your financial security is goals.',
      traits: ['Disciplined', 'Prepared', 'Strategic', 'Secure'],
      strengths: ['Financially secure', 'No money stress', 'Future is bright'],
      weaknesses: ['Might miss out on present enjoyment'],
      tips: ['You\'re killing it', 'Balance saving with living', 'Help others learn your ways'],
    },
    B: {
      type: 'B',
      title: 'The Steady Builder',
      emoji: '🧱',
      description: 'You\'re making progress! Not perfect, but consistently building. You save when you can, have some cushion, and are working toward goals. You understand the importance of saving and are doing your best.',
      traits: ['Consistent', 'Improving', 'Realistic', 'Growing'],
      strengths: ['Making progress', 'Good intentions', 'Learning and improving'],
      weaknesses: ['Could automate more', 'Room to grow'],
      tips: ['Increase savings when income increases', 'Automate more if possible', 'You\'re on the right track'],
    },
    C: {
      type: 'C',
      title: 'The Struggling Saver',
      emoji: '😅',
      description: 'You know you should save more. You\'ve tried. But somehow the money just... goes. Between expenses and life and things you want, saving consistently feels impossible. You\'re not alone - most people are here.',
      traits: ['Struggling', 'Aware', 'Trying', 'Inconsistent'],
      strengths: ['At least you\'re aware'],
      weaknesses: ['Savings don\'t stick', 'Emergency fund is light', 'Future is fuzzy'],
      tips: ['Start smaller than you think', 'Automate even $25/month', 'Any savings is better than none'],
    },
    D: {
      type: 'D',
      title: 'The Survival Mode Spender',
      emoji: '🆘',
      description: 'Savings are a nice concept for other people with other incomes. You\'re just trying to get through the month. Every dollar has a job before it arrives, and that job isn\'t savings. The struggle is real.',
      traits: ['Surviving', 'Stressed', 'Paycheck-to-paycheck', 'Overwhelmed'],
      strengths: ['Survival skills are strong'],
      weaknesses: ['No financial cushion', 'One emergency away from crisis', 'Future is uncertain'],
      tips: ['Start with $10/month if that\'s all you can', 'Look into assistance programs', 'Financial counseling can help', 'This situation can change'],
    },
  },
};

export default testData;
