// Your Coffee Order Personality
// What your coffee choice says about you!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-coffee-order',
  title: 'What Does Your Coffee Order Say About You?',
  description: 'From lattes to cold brew, discover what your caffeine choices reveal about your personality.',
  category: 'personality',
  emoji: '☕',
  color: 'from-amber-600 to-orange-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'It\'s Monday morning. What are you ordering?',
      options: [
        { text: 'Black coffee - no frills, just caffeine', type: 'A' },
        { text: 'A fancy latte with oat milk', type: 'B' },
        { text: 'Whatever the barista recommends', type: 'C' },
        { text: 'A sweet frappuccino to ease into the week', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you take your coffee?',
      options: [
        { text: 'Black or with just a splash of cream', type: 'A' },
        { text: 'With alternative milk and maybe a flavor shot', type: 'B' },
        { text: 'Depends on my mood that day', type: 'C' },
        { text: 'Sweet! Cream, sugar, or flavored syrup', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your ideal coffee shop vibe is:',
      options: [
        { text: 'Quick and efficient - I have things to do', type: 'A' },
        { text: 'Trendy with good aesthetics for photos', type: 'B' },
        { text: 'Cozy with good people-watching', type: 'C' },
        { text: 'Fun atmosphere with unique drinks', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'It\'s a hot summer day. You\'re ordering:',
      options: [
        { text: 'Iced black coffee or cold brew', type: 'A' },
        { text: 'An iced oat milk latte', type: 'B' },
        { text: 'Something refreshing - maybe a fruity tea', type: 'C' },
        { text: 'A blended drink with lots of whipped cream', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How adventurous are you with coffee orders?',
      options: [
        { text: 'I stick to what I know works', type: 'A' },
        { text: 'I try new things but within my comfort zone', type: 'B' },
        { text: 'I love trying whatever\'s seasonal or new', type: 'C' },
        { text: 'The weirder, the better - bring on the unicorn latte!', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'What\'s most important in your coffee?',
      options: [
        { text: 'Strong caffeine kick', type: 'A' },
        { text: 'Quality beans and perfect preparation', type: 'B' },
        { text: 'The overall experience and ambiance', type: 'C' },
        { text: 'That it tastes good and makes me happy', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your friend is ordering. You:',
      options: [
        { text: 'Know exactly what you want before they ask', type: 'A' },
        { text: 'Ask about the roast and origin', type: 'B' },
        { text: '"What are you having? I\'ll have that too"', type: 'C' },
        { text: 'Take forever to decide - too many good options!', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When a coffee shop gets your order wrong, you:',
      options: [
        { text: 'Politely but firmly ask them to fix it', type: 'A' },
        { text: 'Mention it but drink it anyway', type: 'B' },
        { text: 'Just drink it - it\'s not worth the fuss', type: 'C' },
        { text: 'Make it an adventure - maybe you\'ll like this better!', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How many coffees do you drink a day?',
      options: [
        { text: '3+ cups - I run on caffeine', type: 'A' },
        { text: '1-2 cups, mindfully enjoyed', type: 'B' },
        { text: 'It varies - some days none, some days many', type: 'C' },
        { text: '1 cup max - I\'m in it for the taste, not the buzz', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your thoughts on pumpkin spice lattes:',
      options: [
        { text: 'Hard pass - give me real coffee', type: 'A' },
        { text: 'I\'ll try a sip of someone else\'s', type: 'B' },
        { text: 'It\'s a seasonal tradition!', type: 'C' },
        { text: 'I\'ve been waiting all year for this!', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The No-Nonsense Sipper',
      emoji: '⚡',
      description: 'You\'re practical, efficient, and know what you want. You don\'t need fancy drinks to feel special - you appreciate things that work. Your no-frills approach extends to life: straightforward, reliable, and effective.',
      traits: ['Practical', 'Efficient', 'Reliable', 'Direct'],
      strengths: ['Decisive', 'Time-conscious', 'Self-aware', 'Consistent'],
      weaknesses: ['May miss out on new experiences', 'Can seem inflexible', 'Sometimes too serious'],
      tips: ['Try something new occasionally', 'The journey matters too', 'Let yourself indulge sometimes'],
    },
    B: {
      type: 'B',
      title: 'The Refined Connoisseur',
      emoji: '✨',
      description: 'You appreciate quality and aesthetics in everything you do. You\'ve researched the best beans, know your milk alternatives, and care about the details. Your coffee is a reflection of your refined taste.',
      traits: ['Detail-oriented', 'Quality-focused', 'Knowledgeable', 'Stylish'],
      strengths: ['Great taste', 'Well-informed decisions', 'Appreciates craftsmanship', 'Trend-aware'],
      weaknesses: ['Can be particular', 'May over-analyze simple choices', 'Sometimes perceived as snobby'],
      tips: ['Sometimes good enough is good enough', 'Share your knowledge kindly', 'Enjoy the moment more'],
    },
    C: {
      type: 'C',
      title: 'The Go-With-The-Flow Bean',
      emoji: '🌊',
      description: 'You\'re adaptable, social, and open to experience. Coffee for you is about the moment and the company more than the drink itself. You bring an easy energy that makes any coffee run fun.',
      traits: ['Adaptable', 'Social', 'Easy-going', 'Present'],
      strengths: ['Great company', 'Flexible', 'Enjoys the moment', 'Low-maintenance'],
      weaknesses: ['May lack preferences', 'Can be indecisive', 'Sometimes too accommodating'],
      tips: ['It\'s okay to have opinions', 'Try being more assertive', 'Know what you like'],
    },
    D: {
      type: 'D',
      title: 'The Sweet Life Enthusiast',
      emoji: '🎉',
      description: 'Life is short - why not enjoy it? You believe coffee should be a treat, not just fuel. You\'re fun-loving, optimistic, and not afraid to order the most extra drink on the menu.',
      traits: ['Fun-loving', 'Optimistic', 'Adventurous', 'Joyful'],
      strengths: ['Brings joy to others', 'Open to experiences', 'Positive outlook', 'Lives life fully'],
      weaknesses: ['May overindulge', 'Can seem immature to some', 'Sometimes impractical'],
      tips: ['Balance treats with basics', 'Sometimes simple is sophisticated', 'Watch the sugar intake!'],
    },
  },
};

export default testData;
