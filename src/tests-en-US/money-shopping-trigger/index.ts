// What Triggers Your Shopping?
// Why do you really shop?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-shopping-trigger',
  title: 'What Triggers Your Shopping?',
  description: 'What really makes you reach for your wallet? Let\'s uncover your shopping triggers!',
  category: 'money',
  emoji: '🎯',
  color: 'from-pink-500 to-rose-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You\'re most likely to make an impulse purchase when:',
      options: [
        { text: 'I\'m stressed and need a pick-me-up', type: 'A' },
        { text: 'I\'m bored and have nothing to do', type: 'B' },
        { text: 'There\'s a sale I can\'t miss', type: 'C' },
        { text: 'I\'m celebrating something good', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'After a really hard day, you:',
      options: [
        { text: 'Treat yourself to feel better', type: 'A' },
        { text: 'Browse online but maybe don\'t buy', type: 'B' },
        { text: 'Search for deals to distract yourself', type: 'C' },
        { text: 'Don\'t usually shop when stressed', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your shopping happens most when:',
      options: [
        { text: 'My emotions are running high', type: 'A' },
        { text: 'I\'m scrolling with nothing else to do', type: 'B' },
        { text: 'I see a good deal or sale', type: 'C' },
        { text: 'I\'ve achieved something worth celebrating', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'What usually justifies a purchase for you?',
      options: [
        { text: '"I deserve this after what I\'ve been through"', type: 'A' },
        { text: '"I\'m bored, this will be fun"', type: 'B' },
        { text: '"It\'s such a good deal, I\'d be stupid not to"', type: 'C' },
        { text: '"I\'m doing well, time to upgrade my life"', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Social media\'s impact on your shopping:',
      options: [
        { text: 'See influencers, feel bad, shop to feel better', type: 'A' },
        { text: 'Endless scrolling leads to endless shopping', type: 'B' },
        { text: 'Sale ads get me every time', type: 'C' },
        { text: 'See nice things, want to match that vibe', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'The feeling you chase when shopping:',
      options: [
        { text: 'Comfort and emotional relief', type: 'A' },
        { text: 'Entertainment and distraction', type: 'B' },
        { text: 'The thrill of scoring a deal', type: 'C' },
        { text: 'Reward and self-celebration', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you\'re having a bad week:',
      options: [
        { text: 'Retail therapy hits different', type: 'A' },
        { text: 'Online window shopping becomes real shopping', type: 'B' },
        { text: 'Hunt for deals to feel productive', type: 'C' },
        { text: 'I don\'t shop more when things are bad', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your spending increases when:',
      options: [
        { text: 'I\'m emotionally drained or sad', type: 'A' },
        { text: 'I have too much free time', type: 'B' },
        { text: 'Black Friday / sales seasons hit', type: 'C' },
        { text: 'I get a raise or good news', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'The thought that leads to most purchases:',
      options: [
        { text: '"This will make me feel better"', type: 'A' },
        { text: '"I\'m bored, let\'s see what\'s out there"', type: 'B' },
        { text: '"I can\'t miss this price"', type: 'C' },
        { text: '"I\'ve earned this"', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Looking at your purchase history, patterns show:',
      options: [
        { text: 'More buying during tough times', type: 'A' },
        { text: 'Random buys from late-night browsing', type: 'B' },
        { text: 'Lots of sale items I didn\'t need', type: 'C' },
        { text: 'Splurges after accomplishments', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Emotional Shopper',
      emoji: '💔',
      description: 'For you, shopping is therapy. Stressed? Buy something. Sad? Buy something. Had a bad day? You deserve a treat. The dopamine hit from a purchase numbs the pain... temporarily. Your cart understands your feelings.',
      traits: ['Emotional spender', 'Comfort-seeking', 'Stress-driven', 'Mood-dependent'],
      strengths: ['Self-aware about comfort needs'],
      weaknesses: ['Money tied to emotions', 'Regret after the high fades', 'Band-aid solution'],
      tips: ['Find non-spending ways to cope', 'Wait 24 hours when emotional', 'Address the feelings, not the symptoms'],
    },
    B: {
      type: 'B',
      title: 'The Boredom Buyer',
      emoji: '😴',
      description: 'You shop because... what else is there to do? Scrolling becomes browsing becomes buying. Your boredom has become Amazon\'s gain. You didn\'t even want most of this stuff - you just had nothing better to do.',
      traits: ['Boredom-driven', 'Scroll shopper', 'Entertainment spender', 'Impulsive'],
      strengths: ['At least you know the trigger'],
      weaknesses: ['Too much stuff you didn\'t need', 'Shopping as entertainment is expensive'],
      tips: ['Delete shopping apps', 'Find other boredom busters', 'Make shopping harder to access'],
    },
    C: {
      type: 'C',
      title: 'The Deal Hunter',
      emoji: '🏷️',
      description: 'You can\'t resist a sale. 70% off? You\'d be losing money NOT to buy it! (That\'s not how that works.) The thrill of the deal overrides whether you actually need the item. Your house is full of things you "saved" money on.',
      traits: ['Deal-obsessed', 'Sale-susceptible', 'Price-focused', 'FOMO-driven'],
      strengths: ['Gets good prices when you do need things'],
      weaknesses: ['Buying things you don\'t need because they\'re cheap', 'Savings aren\'t savings if you weren\'t going to buy it'],
      tips: ['Ask: would I pay full price?', 'Unsubscribe from sale emails', 'A deal is only a deal if you needed it'],
    },
    D: {
      type: 'D',
      title: 'The Reward Spender',
      emoji: '🏆',
      description: 'You shop to celebrate! Got a raise? Treat yourself. Finished a project? You deserve something nice. Good things happen and you reward yourself with purchases. Your successes are sponsored by your credit card.',
      traits: ['Celebratory', 'Self-rewarding', 'Success-linked', 'Treat-focused'],
      strengths: ['Positive association with spending', 'Not stress-driven'],
      weaknesses: ['Every win becomes an expense', 'Rewards add up fast'],
      tips: ['Find non-monetary rewards', 'Celebrate with experiences instead', 'Not every win needs a purchase'],
    },
  },
};

export default testData;
