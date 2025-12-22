// What's Your Skincare Personality?
// Discover your approach to skin care

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-skincare-routine',
  title: "What's Your Skincare Personality?",
  description: '12-step routine or water and vibes? Find out what your skincare approach says about you.',
  category: 'lifestyle',
  emoji: '✨',
  color: 'from-pink-400 to-rose-500',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your skincare routine has how many steps?',
      options: [
        { text: '1-2 (cleanser, maybe moisturizer)', type: 'A' },
        { text: '3-5 (solid basics covered)', type: 'B' },
        { text: '6-10 (I have a process)', type: 'C' },
        { text: '10+ (skincare is my religion)', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your knowledge of ingredients:',
      options: [
        { text: 'I use what smells good', type: 'A' },
        { text: 'Know the basics - SPF, retinol, vitamin C', type: 'B' },
        { text: 'Pretty informed, research before buying', type: 'C' },
        { text: 'I could teach a chemistry class', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When you see a new skincare product:',
      options: [
        { text: 'Will probably never buy it', type: 'A' },
        { text: 'Might try if I need it', type: 'B' },
        { text: 'Research it thoroughly first', type: 'C' },
        { text: 'Already ordered it', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your sunscreen relationship:',
      options: [
        { text: 'Beach only (if that)', type: 'A' },
        { text: 'When I remember or if I\'ll be outside', type: 'B' },
        { text: 'Daily, part of my routine', type: 'C' },
        { text: 'SPF is my personality trait', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Sheet masks:',
      options: [
        { text: 'Never tried one', type: 'A' },
        { text: 'Occasional treat or gift', type: 'B' },
        { text: 'Weekly ritual', type: 'C' },
        { text: 'Have a drawer full, do them constantly', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your bathroom counter situation:',
      options: [
        { text: 'Toothbrush, maybe a face wash', type: 'A' },
        { text: 'A few key products, pretty minimal', type: 'B' },
        { text: 'Organized collection of products', type: 'C' },
        { text: 'Sephora called, they want their inventory back', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Before bed, you:',
      options: [
        { text: 'Fall asleep however, whenever', type: 'A' },
        { text: 'Wash face, moisturize, done', type: 'B' },
        { text: 'Go through my full nighttime routine', type: 'C' },
        { text: 'Multi-step ritual, different products different nights', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your thoughts on dermatologists:',
      options: [
        { text: 'Haven\'t been to one', type: 'A' },
        { text: 'Go when needed for specific issues', type: 'B' },
        { text: 'Regular check-ups are important', type: 'C' },
        { text: 'We\'re basically on a first-name basis', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone asks for skincare advice:',
      options: [
        { text: 'I am not the one to ask', type: 'A' },
        { text: 'Can share what works for me', type: 'B' },
        { text: 'Happy to share my routine and recs', type: 'C' },
        { text: 'I have a presentation prepared', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your skincare budget:',
      options: [
        { text: 'What budget? I use bar soap', type: 'A' },
        { text: 'Reasonable - drugstore to mid-range', type: 'B' },
        { text: 'I invest but within reason', type: 'C' },
        { text: 'I don\'t want to do the math', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Minimalist (or Non-ist)',
      emoji: '🧼',
      description: 'Skincare? In this economy? You keep it simple (or non-existent) and honestly, if your skin is fine, why complicate things? Water, maybe soap, and good genes are your routine.',
      traits: ['Low-maintenance', 'Practical', 'Uncomplicated', 'Either blessed or unbothered'],
      strengths: ['No product overwhelm', 'Saves money', 'Quick routine', 'No analysis paralysis'],
      weaknesses: ['Might be missing out', 'Skin needs SOME care', 'Future you might want prevention'],
      tips: ['SPF is actually important', 'Moisturizer is your friend', 'Basics go a long way'],
    },
    B: {
      type: 'B',
      title: 'The Sensible Skincare Person',
      emoji: '🧴',
      description: 'You\'ve got the basics covered without going overboard. Cleanser, moisturizer, maybe some SPF - you take care of your skin without making it your whole personality. Balanced and reasonable.',
      traits: ['Balanced', 'Practical', 'Informed enough', 'Sustainable routine'],
      strengths: ['Good habits without obsession', 'Reasonable budget', 'Effective routine', 'Not overwhelming'],
      weaknesses: ['Could level up sometimes', 'Might be missing some benefits'],
      tips: ['Your approach is healthy', 'Add one thing if curious', 'Consistency is key'],
    },
    C: {
      type: 'C',
      title: 'The Skincare Enthusiast',
      emoji: '💆',
      description: 'Skincare is self-care for you. You\'ve done your research, have your routine, and genuinely enjoy the process. Your skin thanks you, and you probably give great product recommendations.',
      traits: ['Informed', 'Dedicated', 'Process-oriented', 'Results-focused'],
      strengths: ['Great skin results', 'Knowledgeable', 'Self-care routine established', 'Can help others'],
      weaknesses: ['Can be expensive', 'Time consuming', 'Might be too much sometimes'],
      tips: ['Your dedication pays off', 'Sometimes less is more', 'Keep enjoying the ritual'],
    },
    D: {
      type: 'D',
      title: 'The Skincare Obsessed',
      emoji: '🔬',
      description: 'Skincare isn\'t a routine, it\'s a lifestyle. You know ingredients like a chemist, have products for every concern, and your bathroom is basically a beauty counter. This is your passion.',
      traits: ['Expert-level', 'Passionate', 'Invested', 'Trend-aware'],
      strengths: ['Incredible knowledge', 'Amazing skin (probably)', 'Can help anyone', 'Skincare is joy'],
      weaknesses: ['Expensive hobby', 'Time intensive', 'Product overload possible'],
      tips: ['Your skin only needs so much', 'Expertise is valuable', 'Balance is key even in passion'],
    },
  },
};

export default testData;
