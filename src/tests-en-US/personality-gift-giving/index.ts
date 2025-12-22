// Your Gift Giving Style
// How do you approach presents?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-gift-giving',
  title: 'What\'s Your Gift Giving Style?',
  description: 'Discover how you show love through presents - thoughtful planner or last-minute shopper?',
  category: 'personality',
  emoji: '🎁',
  color: 'from-red-500 to-pink-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When do you usually shop for birthday gifts?',
      options: [
        { text: 'Weeks or months in advance - I plan ahead', type: 'A' },
        { text: 'A week before - gives me time to think', type: 'B' },
        { text: 'Day before or day of', type: 'C' },
        { text: 'After the birthday... fashionably late gift', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your gift-giving philosophy is:',
      options: [
        { text: 'Find the perfect meaningful gift for each person', type: 'A' },
        { text: 'Thoughtful gifts within a reasonable budget', type: 'B' },
        { text: 'Gift cards are gifts too!', type: 'C' },
        { text: 'Experiences over things, or just cash', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How much thought goes into your gifts?',
      options: [
        { text: 'I keep mental notes all year of things people mention', type: 'A' },
        { text: 'I think about what they\'d like and find something good', type: 'B' },
        { text: 'I go with safe choices that most people like', type: 'C' },
        { text: 'I panic and grab something at the last minute', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Gift wrapping situation:',
      options: [
        { text: 'Beautifully wrapped with ribbons and bows', type: 'A' },
        { text: 'Nicely wrapped - presentable', type: 'B' },
        { text: 'Gift bag with tissue paper', type: 'C' },
        { text: 'Store bag or no wrapping', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your budget for gifts:',
      options: [
        { text: 'Whatever it takes for the right gift', type: 'A' },
        { text: 'Set budgets for different relationships', type: 'B' },
        { text: 'As reasonable as possible', type: 'C' },
        { text: 'Minimal - it\'s the thought that counts, right?', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When you receive a gift, you:',
      options: [
        { text: 'Immediately plan a thoughtful thank you', type: 'A' },
        { text: 'Thank them genuinely and send a message later', type: 'B' },
        { text: 'Thank them in the moment', type: 'C' },
        { text: 'Awkwardly open it and say thanks', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'For wedding or shower gifts:',
      options: [
        { text: 'Research the registry and pick something special', type: 'A' },
        { text: 'Choose something nice from the registry', type: 'B' },
        { text: 'Cash or generic gift card', type: 'C' },
        { text: 'Wait... when was the wedding?', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your success rate with gifts:',
      options: [
        { text: 'People always love my gifts - I nail it', type: 'A' },
        { text: 'Generally well-received', type: 'B' },
        { text: 'Hit or miss honestly', type: 'C' },
        { text: 'I hope they kept the receipt', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Kids\' birthday parties and gifts:',
      options: [
        { text: 'Ask the parents what the kid wants', type: 'A' },
        { text: 'Pick age-appropriate popular toys', type: 'B' },
        { text: 'Gift cards or cash for the parents to use', type: 'C' },
        { text: 'Do I really have to bring a gift?', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Giving gifts makes you feel:',
      options: [
        { text: 'So happy! I love finding perfect gifts', type: 'A' },
        { text: 'Good - I like making people happy', type: 'B' },
        { text: 'Obligated but I do it anyway', type: 'C' },
        { text: 'Stressed - can we just skip gifts?', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Thoughtful Gifter',
      emoji: '💝',
      description: 'Gift-giving is your love language! You put genuine thought and effort into every present, remember what people mention wanting, and create moments of joy. Your gifts are legendary.',
      traits: ['Thoughtful', 'Attentive', 'Generous', 'Caring'],
      strengths: ['Amazing gift giver', 'Makes people feel special', 'Great listener', 'Creates memories'],
      weaknesses: ['May overspend', 'Sets high expectations', 'Can stress about perfection'],
      tips: ['Set a budget and stick to it', 'It\'s okay if every gift isn\'t perfect', 'Your thoughtfulness already shows'],
    },
    B: {
      type: 'B',
      title: 'The Practical Gifter',
      emoji: '🎯',
      description: 'You\'ve got the gift-giving balance figured out. You put in effort without going overboard, choose thoughtful gifts within reason, and people appreciate your presents.',
      traits: ['Balanced', 'Practical', 'Considerate', 'Reliable'],
      strengths: ['Appropriate gift choices', 'Budget conscious', 'Reliable gift giver', 'Good instincts'],
      weaknesses: ['Could take more risks', 'Plays it safe sometimes', 'May miss wow moments'],
      tips: ['Trust your instincts', 'Occasionally splurge on a special gift', 'You\'re doing great'],
    },
    C: {
      type: 'C',
      title: 'The Convenient Gifter',
      emoji: '🎴',
      description: 'You show up with a gift, and that\'s what matters! Gift cards, cash, and safe choices are your go-to. You\'re not winning any gift-giving awards, but you get the job done.',
      traits: ['Practical', 'Efficient', 'Low-stress', 'Realistic'],
      strengths: ['No gift stress', 'People get what they want', 'Efficient use of time', 'No returns needed'],
      weaknesses: ['Less personal touch', 'May seem low effort', 'Misses connection opportunity'],
      tips: ['Add a personal note to gift cards', 'Sometimes effort = love', 'Try one thoughtful gift this year'],
    },
    D: {
      type: 'D',
      title: 'The Reluctant Gifter',
      emoji: '😅',
      description: 'Gift-giving is not your forte and you know it. You\'d prefer to skip the whole thing or just show up with your presence as the present. Shopping for others is basically torture.',
      traits: ['Honest', 'Minimalist', 'Avoidant', 'Practical'],
      strengths: ['Authentic about limitations', 'Doesn\'t overpromise', 'Values presence over presents'],
      weaknesses: ['May disappoint people', 'Seems uncaring', 'Misses connection moments'],
      tips: ['Set calendar reminders way ahead', 'Amazon wishlists exist', 'Even small effort means a lot'],
    },
  },
};

export default testData;
