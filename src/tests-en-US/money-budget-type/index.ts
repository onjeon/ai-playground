// Your Budgeting Style
// How do you manage your money?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-budget-type',
  title: 'Your Budgeting Style',
  description: 'Spreadsheet master or vibes-based spender? Let\'s find your budgeting personality!',
  category: 'money',
  emoji: '📊',
  color: 'from-blue-500 to-indigo-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your current budgeting system:',
      options: [
        { text: 'Detailed spreadsheet/app tracking every dollar', type: 'A' },
        { text: 'Basic categories and general awareness', type: 'B' },
        { text: 'Vague mental math, hope for the best', type: 'C' },
        { text: 'Budget? I just spend and see what happens', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you track expenses?',
      options: [
        { text: 'Log everything immediately', type: 'A' },
        { text: 'Review bank statements monthly', type: 'B' },
        { text: 'Check balance occasionally', type: 'C' },
        { text: 'I don\'t really track', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'At the end of the month, you:',
      options: [
        { text: 'Know exactly where every dollar went', type: 'A' },
        { text: 'Have a general sense of spending', type: 'B' },
        { text: 'Often surprised by where money went', type: 'C' },
        { text: 'Wait, the month\'s over already?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Spending categories:',
      options: [
        { text: 'Detailed breakdown: groceries, dining, gas, entertainment...', type: 'A' },
        { text: 'A few main categories I pay attention to', type: 'B' },
        { text: 'Bills vs. everything else, basically', type: 'C' },
        { text: 'Categories feel too restrictive', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you go over budget:',
      options: [
        { text: 'Rare - I adjust spending to stay on track', type: 'A' },
        { text: 'Figure out where to cut back next month', type: 'B' },
        { text: 'Feel guilty but it is what it is', type: 'C' },
        { text: 'Over what budget?', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with budgeting apps:',
      options: [
        { text: 'Use one religiously, love it', type: 'A' },
        { text: 'Have one, use it sometimes', type: 'B' },
        { text: 'Downloaded one, abandoned it', type: 'C' },
        { text: 'Tried, hated it, never again', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you decide if you can afford something?',
      options: [
        { text: 'Check against budget, see if there\'s room', type: 'A' },
        { text: 'Consider if it fits current financial picture', type: 'B' },
        { text: 'Check bank balance, hope it\'s fine', type: 'C' },
        { text: 'Worry about it later', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Fixed expenses (rent, subscriptions) vs. variable:',
      options: [
        { text: 'Know exact amounts and plan accordingly', type: 'A' },
        { text: 'Aware of the big ones', type: 'B' },
        { text: 'Probably have subscriptions I forgot about', type: 'C' },
        { text: 'Money just leaves my account, not sure for what', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When income increases:',
      options: [
        { text: 'Adjust budget, increase savings first', type: 'A' },
        { text: 'Nice! Save some, enjoy some', type: 'B' },
        { text: 'Lifestyle creep happens naturally', type: 'C' },
        { text: 'More money = more spending, obviously', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'The thought of detailed budgeting makes you feel:',
      options: [
        { text: 'Excited - I love being in control', type: 'A' },
        { text: 'Neutral - it\'s a necessary task', type: 'B' },
        { text: 'Stressed - too much work', type: 'C' },
        { text: 'Absolutely not - I refuse', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Spreadsheet Master',
      emoji: '📑',
      description: 'You are the CEO of your finances. Every dollar is tracked, categorized, and accounted for. Your budget spreadsheet probably has charts. You know exactly how much you spend on coffee per month and you\'re proud of it.',
      traits: ['Meticulous', 'Organized', 'Controlled', 'Detail-oriented'],
      strengths: ['Total financial awareness', 'No surprises', 'Goals on track'],
      weaknesses: ['Might be time-consuming', 'Could stress about small variances'],
      tips: ['Your system works, keep it up', 'Don\'t let tracking become obsessive'],
    },
    B: {
      type: 'B',
      title: 'The Casual Planner',
      emoji: '📝',
      description: 'You have a system that works without being obsessive. General awareness of spending, main categories tracked, bills handled. You\'re not meticulous but you\'re not flying blind either. Functional financial adulting.',
      traits: ['Practical', 'Functional', 'Balanced', 'Aware'],
      strengths: ['Good enough system', 'Not stressful', 'Gets the job done'],
      weaknesses: ['Might miss some leaks', 'Could be more detailed'],
      tips: ['Your approach works for you', 'Consider reviewing monthly for improvement'],
    },
    C: {
      type: 'C',
      title: 'The Mental Math-er',
      emoji: '🤔',
      description: 'You budget in your head, kind of. You know roughly what\'s going on, sometimes. The intention is there, the execution is... loose. You\'re often surprised by where your money went but somehow make it work.',
      traits: ['Casual', 'Imprecise', 'Hopeful', 'Reactive'],
      strengths: ['Low stress from tracking'],
      weaknesses: ['Money leaks undetected', 'Surprises aren\'t fun', 'Hard to improve what you don\'t track'],
      tips: ['Even basic tracking helps', 'Try tracking for just one month', 'Awareness is the first step'],
    },
    D: {
      type: 'D',
      title: 'The Anti-Budgeter',
      emoji: '🙈',
      description: 'Budgets are for other people. You spend, you exist, it works out (usually). The idea of tracking every expense makes you want to scream. You prefer to live life and let the money figure itself out.',
      traits: ['Freewheeling', 'Avoidant', 'Spontaneous', 'Budget-averse'],
      strengths: ['No time spent budgeting'],
      weaknesses: ['No idea where money goes', 'Goals are harder to reach', 'Financial surprises common'],
      tips: ['Any awareness is better than none', 'Start with just one category', 'Budgets can be flexible'],
    },
  },
};

export default testData;
