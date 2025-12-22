// Your Cooking Style
// How do you approach the kitchen?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-cooking-style',
  title: 'What\'s Your Cooking Style?',
  description: 'Discover your kitchen personality - are you a master chef, creative experimenter, or takeout royalty?',
  category: 'personality',
  emoji: '🍳',
  color: 'from-orange-500 to-red-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When you follow a recipe, you:',
      options: [
        { text: 'Measure everything exactly as written', type: 'A' },
        { text: 'Follow it loosely and add my own twist', type: 'B' },
        { text: 'Use it as inspiration, then improvise', type: 'C' },
        { text: 'Wait, people actually follow recipes?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your fridge typically contains:',
      options: [
        { text: 'Fresh ingredients for planned meals', type: 'A' },
        { text: 'A mix of staples and random items', type: 'B' },
        { text: 'Whatever looks good at the store', type: 'C' },
        { text: 'Condiments and takeout leftovers', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When cooking for guests, you:',
      options: [
        { text: 'Plan the menu days in advance', type: 'A' },
        { text: 'Make something reliable I know works', type: 'B' },
        { text: 'Try something new and exciting', type: 'C' },
        { text: 'Order something or do a potluck', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your spice cabinet is:',
      options: [
        { text: 'Organized, labeled, and well-stocked', type: 'A' },
        { text: 'Has the essentials plus some favorites', type: 'B' },
        { text: 'A chaotic collection of experiments', type: 'C' },
        { text: 'Salt, pepper, and... that\'s probably it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'A recipe calls for an ingredient you don\'t have:',
      options: [
        { text: 'I go to the store to get it', type: 'A' },
        { text: 'I find a suitable substitution', type: 'B' },
        { text: 'I skip it or add something else entirely', type: 'C' },
        { text: 'I abandon the recipe and order food', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your meal prep style is:',
      options: [
        { text: 'Planned weekly with prepped containers', type: 'A' },
        { text: 'Some planning, some spontaneous cooking', type: 'B' },
        { text: 'I cook when I feel like it', type: 'C' },
        { text: 'What\'s meal prep?', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When a dish doesn\'t turn out well:',
      options: [
        { text: 'I analyze what went wrong to fix next time', type: 'A' },
        { text: 'I\'m a little disappointed but eat it anyway', type: 'B' },
        { text: 'I try to salvage it creatively', type: 'C' },
        { text: 'This is why I order takeout', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your kitchen tools include:',
      options: [
        { text: 'Quality knives, gadgets, and specialty items', type: 'A' },
        { text: 'Good basics and a few favorites', type: 'B' },
        { text: 'Whatever gets the job done', type: 'C' },
        { text: 'A microwave and some utensils', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel about cooking?',
      options: [
        { text: 'I love it - it\'s creative and satisfying', type: 'A' },
        { text: 'I enjoy it when I have time', type: 'B' },
        { text: 'It\'s fun when I\'m in the mood', type: 'C' },
        { text: 'It\'s a necessary chore at best', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'When you eat at restaurants, you:',
      options: [
        { text: 'Analyze the dishes and think about recreating them', type: 'A' },
        { text: 'Appreciate good food and enjoy the experience', type: 'B' },
        { text: 'Try the most interesting thing on the menu', type: 'C' },
        { text: 'This is my primary food source', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Passionate Chef',
      emoji: '👨‍🍳',
      description: 'Cooking is your art! You take it seriously, plan your meals, and take pride in what you create. Your kitchen is your happy place, and your food is always on point.',
      traits: ['Skilled', 'Organized', 'Passionate', 'Perfectionist'],
      strengths: ['Consistently great food', 'Well-organized kitchen', 'Can follow any recipe', 'Knows techniques well'],
      weaknesses: ['May take it too seriously', 'Might stress about imperfection', 'Can be inflexible'],
      tips: ['Embrace some spontaneity', 'Cooking should be fun too', 'Share your skills with others'],
    },
    B: {
      type: 'B',
      title: 'The Capable Cook',
      emoji: '🍽️',
      description: 'You\'re a solid home cook! You enjoy cooking when you have time, know your way around the kitchen, and can adapt recipes to your taste. Balanced and practical.',
      traits: ['Practical', 'Flexible', 'Competent', 'Balanced'],
      strengths: ['Good foundation', 'Adapts easily', 'Doesn\'t stress about it', 'Makes tasty meals'],
      weaknesses: ['Might get in a rut', 'Could try more new things', 'Sometimes takes shortcuts'],
      tips: ['Challenge yourself occasionally', 'Try a new cuisine', 'You have more skills than you think'],
    },
    C: {
      type: 'C',
      title: 'The Kitchen Experimenter',
      emoji: '🧪',
      description: 'Rules? What rules? You cook by feel, experiment boldly, and treat every meal as an adventure. Sometimes it\'s genius, sometimes it\'s... interesting. But it\'s always fun!',
      traits: ['Creative', 'Adventurous', 'Unpredictable', 'Fun'],
      strengths: ['Never boring', 'Discovers amazing combos', 'Fearless in the kitchen', 'Creative problem-solver'],
      weaknesses: ['Inconsistent results', 'May waste ingredients', 'Not always edible'],
      tips: ['Learn some fundamentals', 'Write down what works', 'Balance creativity with technique'],
    },
    D: {
      type: 'D',
      title: 'The Takeout Champion',
      emoji: '📱',
      description: 'Why cook when delivery apps exist? You\'ve got better things to do than spend hours in the kitchen. You know all the best restaurants and your delivery drivers know you by name.',
      traits: ['Practical', 'Honest', 'Efficient', 'Outsourcing expert'],
      strengths: ['Knows great restaurants', 'Saves time', 'No kitchen disasters', 'Supports local business'],
      weaknesses: ['Expensive', 'Less healthy', 'Missing out on a life skill'],
      tips: ['Learn a few simple meals', 'Cooking can be relaxing', 'Start with something easy'],
    },
  },
};

export default testData;
