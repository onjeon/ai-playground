// Your Meal Prep Personality
// How do you handle feeding yourself?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-meal-prep',
  title: 'Your Meal Prep Personality',
  description: 'Sunday meal prep warrior or daily UberEats user? Discover your relationship with cooking and food planning.',
  category: 'lifestyle',
  emoji: '🍱',
  color: 'from-green-500 to-emerald-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your Sunday afternoon situation:',
      options: [
        { text: 'Meal prepping containers for the week', type: 'A' },
        { text: 'Maybe planning what to eat, loosely', type: 'B' },
        { text: 'Relaxing, food is tomorrow\'s problem', type: 'C' },
        { text: 'Ordering delivery and not thinking about it', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your fridge contains:',
      options: [
        { text: 'Prepped containers, organized ingredients', type: 'A' },
        { text: 'Some groceries, nothing fully prepped', type: 'B' },
        { text: 'Random items that may or may not become meals', type: 'C' },
        { text: 'Condiments and leftovers from delivery', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'At 6 PM on a weeknight, dinner is:',
      options: [
        { text: 'Already prepped, just heat and eat', type: 'A' },
        { text: 'Something I\'ll throw together quickly', type: 'B' },
        { text: 'TBD - opening the fridge for inspiration', type: 'C' },
        { text: 'An app decision', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your grocery shopping style:',
      options: [
        { text: 'List, plan, efficient trip, everything needed', type: 'A' },
        { text: 'Loose list, mostly stick to it', type: 'B' },
        { text: 'Wander and see what looks good', type: 'C' },
        { text: 'What\'s a grocery store?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with leftovers:',
      options: [
        { text: 'Built into the plan - cook once, eat multiple times', type: 'A' },
        { text: 'Usually use them up', type: 'B' },
        { text: 'They exist until they don\'t', type: 'C' },
        { text: 'Leftovers become a science experiment', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Tupperware/container situation:',
      options: [
        { text: 'Full matching set, lids organized', type: 'A' },
        { text: 'A reasonable collection that mostly works', type: 'B' },
        { text: 'Chaos drawer of mismatched containers', type: 'C' },
        { text: 'I use delivery containers or don\'t have any', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When someone asks what you\'re having for lunch:',
      options: [
        { text: 'I know exactly - it\'s packed', type: 'A' },
        { text: 'Probably something from home', type: 'B' },
        { text: 'I\'ll figure it out when I\'m hungry', type: 'C' },
        { text: 'Checking DoorDash options now', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your cooking skill level:',
      options: [
        { text: 'Confident, make recipes regularly', type: 'A' },
        { text: 'Can handle basics and simple meals', type: 'B' },
        { text: 'Survival cooking at best', type: 'C' },
        { text: 'Does microwave count?', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Food waste in your home:',
      options: [
        { text: 'Minimal - I use what I buy', type: 'A' },
        { text: 'Some, but I try to minimize', type: 'B' },
        { text: 'More than I\'d like to admit', type: 'C' },
        { text: 'I don\'t buy enough to waste', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest relationship with meal planning:',
      options: [
        { text: 'Love it, saves time and stress', type: 'A' },
        { text: 'Do it sometimes, appreciate the benefits', type: 'B' },
        { text: 'Know I should but rarely do', type: 'C' },
        { text: 'That sounds exhausting', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Meal Prep Master',
      emoji: '📦',
      description: 'You\'ve got this down to a science. Sunday prep sessions, organized containers, and a plan for every meal. You save money, eat healthy, and never wonder what\'s for dinner. Teach us your ways.',
      traits: ['Organized', 'Efficient', 'Health-conscious', 'Proactive'],
      strengths: ['Never stressed about food', 'Saves money', 'Eats well', 'Time efficient during the week'],
      weaknesses: ['Can be rigid', 'Might miss spontaneous food experiences', 'Takes time upfront'],
      tips: ['Leave room for spontaneity', 'Your system is impressive', 'Flexibility is okay'],
    },
    B: {
      type: 'B',
      title: 'The Casual Planner',
      emoji: '🥗',
      description: 'You\'ve got a loose system that mostly works. Some planning, some cooking, some winging it. You\'re not stressed but you\'re also not living on delivery. The balanced approach.',
      traits: ['Balanced', 'Flexible', 'Practical', 'Reasonable'],
      strengths: ['Good enough system', 'Not overly rigid', 'Can cook when needed', 'Adaptable'],
      weaknesses: ['Could be more efficient', 'Sometimes scrambles', 'Room for improvement'],
      tips: ['Your approach is sustainable', 'Small improvements help', 'Don\'t overthink it'],
    },
    C: {
      type: 'C',
      title: 'The Improvisor',
      emoji: '🎲',
      description: 'Meal planning? You meal hope. Every day is an adventure of opening the fridge and seeing what happens. Sometimes it\'s gourmet, sometimes it\'s cereal. You live in the moment.',
      traits: ['Spontaneous', 'Flexible', 'Creative', 'Non-committal'],
      strengths: ['No prep time wasted', 'Flexible eating', 'Creative solutions', 'Low expectations'],
      weaknesses: ['Stressful at times', 'Not always healthy', 'Food waste possible'],
      tips: ['One planned meal a week helps', 'You\'re surviving though', 'Systems can be simple'],
    },
    D: {
      type: 'D',
      title: 'The Delivery Devotee',
      emoji: '📱',
      description: 'Why cook when someone else can? Delivery apps are your kitchen, restaurants are your chefs. You\'ve outsourced feeding yourself and honestly, it\'s a valid life choice.',
      traits: ['Outsourcer', 'Convenient', 'Time-rich', 'Money... flexible'],
      strengths: ['No cooking stress', 'Variety of options', 'Time saved', 'Supports restaurants'],
      weaknesses: ['Expensive habit', 'Less healthy possibly', 'What if the app crashes?'],
      tips: ['Learning one recipe won\'t hurt', 'Budget check occasionally', 'Some home cooking is nice'],
    },
  },
};

export default testData;
