// Your Shopping Style
// How do you approach retail therapy?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-shopping-style',
  title: 'What\'s Your Shopping Style?',
  description: 'Discover if you\'re a bargain hunter, impulse buyer, or meticulous researcher when it comes to shopping.',
  category: 'personality',
  emoji: '🛒',
  color: 'from-fuchsia-500 to-pink-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You see something you want but don\'t need. You:',
      options: [
        { text: 'Buy it immediately - treat yourself!', type: 'A' },
        { text: 'Add it to cart and think about it later', type: 'B' },
        { text: 'Research alternatives and prices first', type: 'C' },
        { text: 'Walk away - if you still want it next week, reconsider', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your shopping cart situation:',
      options: [
        { text: 'What cart? I buy things immediately', type: 'A' },
        { text: 'A healthy wishlist of things I\'ll eventually buy', type: 'B' },
        { text: 'Full of saved items I\'m waiting to go on sale', type: 'C' },
        { text: 'I rarely online shop', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When shopping in a store, you:',
      options: [
        { text: 'Browse everything and leave with bags', type: 'A' },
        { text: 'Go in for one thing but stay open to discoveries', type: 'B' },
        { text: 'Stick to the list and compare prices on my phone', type: 'C' },
        { text: 'Get in, get what I need, get out', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'A sale is happening. Your reaction:',
      options: [
        { text: 'This is my time to SHINE', type: 'A' },
        { text: 'Let me see if there\'s anything I actually need', type: 'B' },
        { text: 'I\'ve been waiting for this - my cart is ready', type: 'C' },
        { text: 'Sales don\'t really influence my buying', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How much research do you do before a big purchase?',
      options: [
        { text: 'Minimal - I trust my gut', type: 'A' },
        { text: 'Some reviews and a price check', type: 'B' },
        { text: 'Extensive - spreadsheets may be involved', type: 'C' },
        { text: 'I ask someone I trust and go with their recommendation', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with returns:',
      options: [
        { text: 'I rarely return things - I commit to purchases', type: 'A' },
        { text: 'Occasionally - if something doesn\'t work out', type: 'B' },
        { text: 'I order multiple sizes/options and return the rest', type: 'C' },
        { text: 'I\'d rather keep something than deal with returns', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When it comes to brand loyalty:',
      options: [
        { text: 'I love trying new brands and products', type: 'A' },
        { text: 'I have favorites but stay open to others', type: 'B' },
        { text: 'I stick to what I know works', type: 'C' },
        { text: 'I don\'t really think about brands', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your "add to cart" finger is triggered by:',
      options: [
        { text: 'A beautiful product photo or ad', type: 'A' },
        { text: 'A friend\'s recommendation', type: 'B' },
        { text: 'A significant price drop', type: 'C' },
        { text: 'Genuine need for the item', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel after a shopping spree?',
      options: [
        { text: 'Excited about all my new things!', type: 'A' },
        { text: 'Satisfied with my choices', type: 'B' },
        { text: 'Happy that I got good deals', type: 'C' },
        { text: 'A little guilty about spending', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your closet/home is:',
      options: [
        { text: 'Full of things I love (and some impulse buys)', type: 'A' },
        { text: 'Well-curated with some variety', type: 'B' },
        { text: 'Practical and organized', type: 'C' },
        { text: 'Minimal - I only keep what I truly need', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Impulse Enthusiast',
      emoji: '💫',
      description: 'You shop with your heart! When something catches your eye, you go for it. Retail therapy is real therapy for you. Your joy in the moment of purchase is genuine and worth celebrating.',
      traits: ['Spontaneous', 'Enthusiastic', 'Trendy', 'Generous'],
      strengths: ['Lives in the moment', 'Great gift giver', 'Always has the latest things', 'Brings joy to shopping'],
      weaknesses: ['Budget challenges', 'Buyer\'s remorse possible', 'May accumulate clutter'],
      tips: ['Try a 24-hour rule for big purchases', 'Set a fun money budget', 'Quality over quantity sometimes'],
    },
    B: {
      type: 'B',
      title: 'The Thoughtful Shopper',
      emoji: '🎯',
      description: 'You strike a nice balance! You enjoy shopping but make considered decisions. You\'re open to spontaneity but also know when to walk away. Your purchases generally serve you well.',
      traits: ['Balanced', 'Considerate', 'Flexible', 'Practical'],
      strengths: ['Few regrets', 'Good value purchases', 'Enjoys the process', 'Healthy habits'],
      weaknesses: ['May overthink sometimes', 'Might miss out on deals', 'Decision fatigue possible'],
      tips: ['Trust your instincts more', 'Keep doing what works', 'Treat yourself occasionally'],
    },
    C: {
      type: 'C',
      title: 'The Strategic Saver',
      emoji: '🔍',
      description: 'You\'re a deal-finding machine! You never pay full price and always know when the best sales happen. Your research skills are impressive, and your cost-per-use calculations are chef\'s kiss.',
      traits: ['Strategic', 'Patient', 'Research-oriented', 'Frugal'],
      strengths: ['Great deals always', 'Well-researched purchases', 'Financial discipline', 'Never overpays'],
      weaknesses: ['May miss out waiting for deals', 'Analysis paralysis', 'Shopping takes longer'],
      tips: ['Sometimes time is money too', 'It\'s okay to pay full price occasionally', 'Don\'t buy just because it\'s on sale'],
    },
    D: {
      type: 'D',
      title: 'The Minimalist Buyer',
      emoji: '🧘',
      description: 'You only buy what you truly need. Shopping isn\'t entertainment for you - it\'s a means to an end. You\'re resistant to marketing and trends. Your intentionality is admirable.',
      traits: ['Intentional', 'Minimalist', 'Practical', 'Content'],
      strengths: ['No clutter', 'Financially savvy', 'Immune to marketing', 'Values experiences over things'],
      weaknesses: ['May deprive yourself unnecessarily', 'Can seem too practical', 'Might miss out on joy of shopping'],
      tips: ['It\'s okay to treat yourself', 'Some purchases are worth it', 'Material things can bring joy too'],
    },
  },
};

export default testData;
