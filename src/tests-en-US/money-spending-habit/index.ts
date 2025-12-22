// Your Spending Habits
// What kind of spender are you really?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-spending-habit',
  title: 'Your Spending Habits',
  description: 'Are you a saver, a spender, or somewhere in between? Let\'s find out your money personality!',
  category: 'money',
  emoji: '💸',
  color: 'from-green-500 to-emerald-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You get an unexpected $500. First thought:',
      options: [
        { text: 'Straight to savings, don\'t even think about it', type: 'A' },
        { text: 'Save most, treat myself a little', type: 'B' },
        { text: 'Treat myself, save what\'s left (if anything)', type: 'C' },
        { text: 'Gone before the day ends', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your bank account at the end of the month:',
      options: [
        { text: 'More than I started with - I always save', type: 'A' },
        { text: 'About the same, on track with budget', type: 'B' },
        { text: 'Less than planned... again', type: 'C' },
        { text: 'What bank account? We\'re running on vibes', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When shopping, you:',
      options: [
        { text: 'Only buy what\'s on the list, no exceptions', type: 'A' },
        { text: 'Mostly stick to the list with minor additions', type: 'B' },
        { text: 'List? I shop based on what catches my eye', type: 'C' },
        { text: 'Walk out with 10 things I didn\'t come for', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your relationship with sales/deals:',
      options: [
        { text: 'Only if I was already planning to buy it', type: 'A' },
        { text: 'Love a good deal for things I need', type: 'B' },
        { text: 'Hard to resist, even for random stuff', type: 'C' },
        { text: '"It was on SALE" is my defense for everything', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Credit card usage:',
      options: [
        { text: 'Pay full balance monthly, never carry debt', type: 'A' },
        { text: 'Usually pay off, occasional balance carried', type: 'B' },
        { text: 'Usually carry a balance... working on it', type: 'C' },
        { text: 'Don\'t ask me about my credit card situation', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When bills come in:',
      options: [
        { text: 'Already paid via autopay from budget', type: 'A' },
        { text: 'Pay on time, usually no stress', type: 'B' },
        { text: 'Scramble a bit but get it done', type: 'C' },
        { text: 'Late fees are just part of life', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your approach to wants vs. needs:',
      options: [
        { text: 'Crystal clear distinction, rarely buy wants', type: 'A' },
        { text: 'Know the difference, balance both', type: 'B' },
        { text: 'Everything feels like a need somehow', type: 'C' },
        { text: 'My wants ARE my needs', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Eating out habits:',
      options: [
        { text: 'Rarely - cook at home to save money', type: 'A' },
        { text: 'Sometimes, within reasonable budget', type: 'B' },
        { text: 'More often than I should admit', type: 'C' },
        { text: 'My kitchen is just for decoration', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel after a big purchase?',
      options: [
        { text: 'Only buy big things I\'ve planned for - feel fine', type: 'A' },
        { text: 'Satisfied if it was worth it', type: 'B' },
        { text: 'Buyer\'s remorse hits pretty quickly', type: 'C' },
        { text: 'High at first, then deep regret', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If someone looked at your bank statements:',
      options: [
        { text: 'They\'d be impressed by my discipline', type: 'A' },
        { text: 'Pretty normal, nothing shocking', type: 'B' },
        { text: 'Some judgment would be warranted', type: 'C' },
        { text: 'I would rather die', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Financial Monk',
      emoji: '💰',
      description: 'You treat money with the respect of someone who remembers the Great Depression. Every dollar is accounted for, savings are maxed, and impulse purchases are foreign to you. Your future self will be very comfortable.',
      traits: ['Disciplined', 'Frugal', 'Future-focused', 'Controlled'],
      strengths: ['Financial security', 'No debt stress', 'Retirement ready'],
      weaknesses: ['Might be too restrictive', 'Could enjoy life more'],
      tips: ['Your discipline is admirable', 'It\'s okay to treat yourself sometimes', 'Money is also meant to be enjoyed'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Budgeter',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot - responsible with money while still enjoying life. Bills are paid, savings exist, but you\'re not afraid to treat yourself. You understand that money is a tool for living, not hoarding.',
      traits: ['Balanced', 'Responsible', 'Enjoys life', 'Smart'],
      strengths: ['Good financial health', 'No deprivation', 'Sustainable habits'],
      weaknesses: ['Could probably save a bit more'],
      tips: ['You\'re doing great', 'Keep this balance', 'Maybe up the savings just a touch'],
    },
    C: {
      type: 'C',
      title: 'The Optimistic Spender',
      emoji: '🛍️',
      description: 'You live for today! Money is meant to be spent, right? You enjoy life now and figure the future will work out. Your spending often exceeds your plans, but YOLO. You\'re probably more fun than the savers.',
      traits: ['Impulsive', 'Present-focused', 'Optimistic', 'Free-spirited'],
      strengths: ['Enjoys life now', 'Generous', 'Lives fully'],
      weaknesses: ['Future might be stressful', 'Savings are... concerning', 'Occasional money anxiety'],
      tips: ['Maybe one small savings habit?', 'Automate some savings', 'Future you will thank present you'],
    },
    D: {
      type: 'D',
      title: 'The Financial Firefighter',
      emoji: '🔥',
      description: 'Every month is a new financial adventure! Bills are a suggestion, savings are theoretical, and your relationship with money is "we don\'t talk about that." You\'re constantly putting out financial fires but somehow surviving.',
      traits: ['Chaotic', 'In denial', 'Stressed', 'Living on the edge'],
      strengths: ['Expert at financial survival mode'],
      weaknesses: ['This is genuinely concerning', 'The stress must be real', 'Future you is worried'],
      tips: ['Please make a budget', 'Any savings is better than none', 'Financial help is available', 'This is your sign to change'],
    },
  },
};

export default testData;
