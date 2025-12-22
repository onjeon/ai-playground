// Your Money Mindset
// What's your relationship with money really like?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-money-mindset',
  title: 'Your Money Mindset',
  description: 'Your beliefs about money shape how you earn, save, and spend. What\'s your money mindset?',
  category: 'money',
  emoji: '🧠',
  color: 'from-teal-500 to-cyan-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your core belief about money:',
      options: [
        { text: 'Money is security and freedom', type: 'A' },
        { text: 'Money is a tool for a good life', type: 'B' },
        { text: 'Money is meant to be enjoyed NOW', type: 'C' },
        { text: 'Money is stressful and complicated', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you think about wealthy people:',
      options: [
        { text: 'I want to be like them, they did something right', type: 'A' },
        { text: 'Good for them, I\'m on my own path', type: 'B' },
        { text: 'Money isn\'t everything, are they even happy?', type: 'C' },
        { text: 'Probably got lucky or had advantages I don\'t', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your thoughts on "you can\'t take it with you":',
      options: [
        { text: 'But you CAN leave it to your kids and create generational wealth', type: 'A' },
        { text: 'Balance is key - save some, enjoy some', type: 'B' },
        { text: 'Exactly! Spend it while you can', type: 'C' },
        { text: 'I can\'t even save any now anyway', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you feel about talking about money?',
      options: [
        { text: 'Comfortable - it\'s important to discuss', type: 'A' },
        { text: 'Fine with close people', type: 'B' },
        { text: 'Don\'t love it but can when needed', type: 'C' },
        { text: 'Uncomfortable, rather avoid it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your belief about earning potential:',
      options: [
        { text: 'I can always earn more with effort and strategy', type: 'A' },
        { text: 'My income can grow with my career', type: 'B' },
        { text: 'I make what I make, it is what it is', type: 'C' },
        { text: 'I\'ll never make enough', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Spending money on yourself:',
      options: [
        { text: 'Invest in yourself, you\'re worth it', type: 'A' },
        { text: 'Balance between treating yourself and saving', type: 'B' },
        { text: 'Life\'s short, treat yourself often', type: 'C' },
        { text: 'Feel guilty spending on non-essentials', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your view on debt:',
      options: [
        { text: 'Strategic debt (mortgage, business) is fine; avoid consumer debt', type: 'A' },
        { text: 'Try to minimize it, happens sometimes', type: 'B' },
        { text: 'Part of life, doesn\'t stress me too much', type: 'C' },
        { text: 'A constant burden and source of shame', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When something costs more than expected:',
      options: [
        { text: 'Evaluate if it\'s worth it, decide accordingly', type: 'A' },
        { text: 'Disappointed but adjust budget', type: 'B' },
        { text: 'Buy it anyway, figure it out', type: 'C' },
        { text: 'Spiral about how everything is too expensive', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Money and happiness:',
      options: [
        { text: 'Money enables happiness through security and options', type: 'A' },
        { text: 'Money helps but isn\'t everything', type: 'B' },
        { text: 'Happiness now matters more than money later', type: 'C' },
        { text: 'Money just causes stress', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest thought about your financial future:',
      options: [
        { text: 'Confident - I\'m building toward security', type: 'A' },
        { text: 'Hopeful - taking steps in the right direction', type: 'B' },
        { text: 'Whatever happens, happens', type: 'C' },
        { text: 'Worried - don\'t see how it gets better', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Growth Mindset',
      emoji: '📈',
      description: 'You see money as a tool you can master. Abundance is possible, wealth is buildable, and your financial future is in your control. You think strategically, invest in yourself, and believe you can always earn more.',
      traits: ['Abundant thinking', 'Strategic', 'Confident', 'Growth-oriented'],
      strengths: ['Positive money relationship', 'Takes action', 'Future-focused'],
      weaknesses: ['Might overlook systemic barriers', 'Could become too obsessed with wealth'],
      tips: ['Your mindset serves you well', 'Balance ambition with contentment', 'Help others develop this mindset'],
    },
    B: {
      type: 'B',
      title: 'Balanced Mindset',
      emoji: '⚖️',
      description: 'You have a healthy, balanced view of money. It\'s important but not everything. You save but also enjoy life. You\'re realistic about finances without being pessimistic. This equilibrium serves you well.',
      traits: ['Balanced', 'Realistic', 'Healthy relationship', 'Grounded'],
      strengths: ['No extremes', 'Practical approach', 'Low money stress'],
      weaknesses: ['Could be more ambitious OR more present'],
      tips: ['Your balance is rare and valuable', 'Keep this equilibrium'],
    },
    C: {
      type: 'C',
      title: 'Present-Focused Mindset',
      emoji: '🌟',
      description: 'You prioritize enjoying life now over saving for later. Money is meant to be spent! You\'re not worried about tomorrow because today matters more. It\'s a valid philosophy, just... maybe have some savings?',
      traits: ['Present-focused', 'Enjoy life', 'Not worried', 'YOLO energy'],
      strengths: ['Actually enjoys money', 'Low stress about future'],
      weaknesses: ['Future might be challenging', 'No safety net'],
      tips: ['Future you would appreciate some savings', 'Balance present joy with future security'],
    },
    D: {
      type: 'D',
      title: 'Scarcity Mindset',
      emoji: '😔',
      description: 'Money feels stressful, scarce, and complicated. There\'s never enough, it causes worry, and the future feels uncertain. This mindset is common but limiting. You deserve a better relationship with money.',
      traits: ['Stressed', 'Scarcity-focused', 'Worried', 'Overwhelmed'],
      strengths: ['Aware of challenges'],
      weaknesses: ['Limiting beliefs hold you back', 'Stress affects decisions'],
      tips: ['Your mindset can shift', 'Small wins build confidence', 'Consider financial therapy/coaching', 'You\'re more capable than you think'],
    },
  },
};

export default testData;
