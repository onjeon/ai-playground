// Your Spending Habits
// How do you handle money?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-spending-habits',
  title: 'What\'s Your Money Personality?',
  description: 'Discover your spending style - saver, spender, or somewhere in between?',
  category: 'personality',
  emoji: '💰',
  color: 'from-green-600 to-emerald-700',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You get an unexpected $500. You immediately think:',
      options: [
        { text: 'Straight to savings or investments', type: 'A' },
        { text: 'Pay off some debt or save for something specific', type: 'B' },
        { text: 'Treat myself to something nice', type: 'C' },
        { text: 'Shopping spree! I deserve this', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your approach to budgeting:',
      options: [
        { text: 'Detailed spreadsheets tracking every dollar', type: 'A' },
        { text: 'General categories with some flexibility', type: 'B' },
        { text: 'I have a rough idea of my spending', type: 'C' },
        { text: 'What budget?', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When shopping online, you:',
      options: [
        { text: 'Wait for sales or use coupons only', type: 'A' },
        { text: 'Compare prices but buy when it makes sense', type: 'B' },
        { text: 'Buy if I want it - no deep research', type: 'C' },
        { text: 'Add to cart, checkout, repeat', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your bank account at the end of the month is usually:',
      options: [
        { text: 'Higher than expected - I underspent', type: 'A' },
        { text: 'About where I planned it to be', type: 'B' },
        { text: 'A little lower than I\'d like', type: 'C' },
        { text: 'Let\'s not talk about it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When a friend suggests an expensive dinner:',
      options: [
        { text: 'Suggest somewhere more affordable', type: 'A' },
        { text: 'Check if it fits my budget first', type: 'B' },
        { text: 'Sure, sounds fun!', type: 'C' },
        { text: 'Absolutely yes, let\'s make it a night', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with credit cards:',
      options: [
        { text: 'Pay in full every month, no exceptions', type: 'A' },
        { text: 'Mostly pay it off, small balance sometimes', type: 'B' },
        { text: 'Carry a balance but manage it', type: 'C' },
        { text: 'I\'d rather not think about it', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Something you want is on sale for 30% off. You:',
      options: [
        { text: 'Only buy if I was already planning to', type: 'A' },
        { text: 'Consider if I really need it first', type: 'B' },
        { text: 'Great deal! I\'ll probably buy it', type: 'C' },
        { text: 'Add three to cart immediately', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your attitude toward "treat yourself" spending:',
      options: [
        { text: 'Rarely - I prefer to save', type: 'A' },
        { text: 'Occasionally, when I\'ve earned it', type: 'B' },
        { text: 'Regularly - life is short', type: 'C' },
        { text: 'Daily - that\'s my philosophy', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel about money?',
      options: [
        { text: 'Security - I want to have enough saved', type: 'A' },
        { text: 'Balance - save some, enjoy some', type: 'B' },
        { text: 'Freedom - it\'s there to spend', type: 'C' },
        { text: 'Stress - I try not to think about it', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your emergency fund situation:',
      options: [
        { text: '6+ months saved and growing', type: 'A' },
        { text: 'A few months, working on it', type: 'B' },
        { text: 'A small cushion at best', type: 'C' },
        { text: 'Emergency what now?', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Serious Saver',
      emoji: '🏦',
      description: 'You\'re a financial fortress! Every dollar has a purpose, usually savings. You\'re prepared for anything and your future self will thank you. Just remember to live a little too.',
      traits: ['Disciplined', 'Future-focused', 'Frugal', 'Prepared'],
      strengths: ['Financial security', 'No debt stress', 'Always prepared', 'Strong savings'],
      weaknesses: ['May miss out on experiences', 'Could be too restrictive', 'Money guilt when spending'],
      tips: ['It\'s okay to enjoy some spending', 'Memories are investments too', 'Balance is key'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Budgeter',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot! You save responsibly but also know how to enjoy your money. You track your finances without obsessing. This is sustainable and healthy.',
      traits: ['Balanced', 'Practical', 'Responsible', 'Flexible'],
      strengths: ['Good financial health', 'Enjoys life responsibly', 'Plans ahead', 'Not stressed about money'],
      weaknesses: ['Could save more in theory', 'May occasionally overspend', 'Needs to stay vigilant'],
      tips: ['Keep doing what you\'re doing', 'Increase savings as income grows', 'Stay mindful'],
    },
    C: {
      type: 'C',
      title: 'The Lifestyle Spender',
      emoji: '✨',
      description: 'You believe money is meant to be enjoyed! You work hard and spend accordingly. Experiences and quality of life matter to you. Just keep an eye on that future self.',
      traits: ['Generous', 'Present-focused', 'Experience-driven', 'Optimistic'],
      strengths: ['Enjoys life fully', 'Generous with others', 'Lives in the moment', 'No regrets about experiences'],
      weaknesses: ['May not save enough', 'Future could be uncertain', 'Spending creep'],
      tips: ['Automate some savings', 'Track spending for a month', 'Future you matters too'],
    },
    D: {
      type: 'D',
      title: 'The YOLO Spender',
      emoji: '🎉',
      description: 'Money flows through your hands like water! You live for today and figure tomorrow out later. It\'s fun until it isn\'t. A little planning could go a long way.',
      traits: ['Spontaneous', 'Generous', 'Carefree', 'Present-focused'],
      strengths: ['Never misses experiences', 'Generous friend', 'No spending guilt', 'Lives fully'],
      weaknesses: ['Financial insecurity', 'No safety net', 'Stress when bills come', 'Future uncertainty'],
      tips: ['Start with small savings', 'Track where money goes', 'Even 10% saved helps'],
    },
  },
};

export default testData;
