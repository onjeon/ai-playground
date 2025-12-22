// How Hydrated Are You Really?
// Are you drinking enough water?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-hydration-level',
  title: 'How Hydrated Are You Really?',
  description: 'Water is life but are you actually drinking enough? Let\'s find out your hydration status!',
  category: 'health',
  emoji: '💧',
  color: 'from-cyan-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How many glasses of water do you drink daily?',
      options: [
        { text: '8+ glasses, I track my intake', type: 'A' },
        { text: '5-7 glasses, pretty consistent', type: 'B' },
        { text: '2-4 glasses, could be better', type: 'C' },
        { text: 'Does coffee count? Because that\'s mainly what I drink', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When did you last drink plain water?',
      options: [
        { text: 'Within the last hour', type: 'A' },
        { text: 'A few hours ago', type: 'B' },
        { text: 'This morning maybe?', type: 'C' },
        { text: 'Honestly can\'t remember', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your lips and skin feeling:',
      options: [
        { text: 'Hydrated, moisturized, plump', type: 'A' },
        { text: 'Normal, nothing to complain about', type: 'B' },
        { text: 'Often dry, need constant lip balm', type: 'C' },
        { text: 'Desert status, cracked and dry', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'The color of your pee (sorry, it matters):',
      options: [
        { text: 'Light yellow, almost clear', type: 'A' },
        { text: 'Yellow, normal looking', type: 'B' },
        { text: 'Dark yellow most of the time', type: 'C' },
        { text: 'We don\'t talk about that', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your water bottle situation:',
      options: [
        { text: 'Always have one, refill throughout the day', type: 'A' },
        { text: 'Have one at my desk, drink from it', type: 'B' },
        { text: 'Own one somewhere, rarely use it', type: 'C' },
        { text: 'Water bottle? I just don\'t think about water.', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Headaches for no apparent reason:',
      options: [
        { text: 'Rare - usually can identify the cause', type: 'A' },
        { text: 'Occasional, probably dehydration-related', type: 'B' },
        { text: 'Pretty frequent, water helps sometimes', type: 'C' },
        { text: 'Constant companion, never thought about water', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'What do you reach for when thirsty?',
      options: [
        { text: 'Water, always water first', type: 'A' },
        { text: 'Usually water, sometimes other drinks', type: 'B' },
        { text: 'Soda, coffee, juice - water is boring', type: 'C' },
        { text: 'Wait for the thirst to pass honestly', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How often do you feel thirsty?',
      options: [
        { text: 'Rarely - I drink before I\'m thirsty', type: 'A' },
        { text: 'Sometimes, but I hydrate when I notice', type: 'B' },
        { text: 'Often thirsty but don\'t always drink', type: 'C' },
        { text: 'My body stopped sending the signal at this point', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your energy levels in the afternoon:',
      options: [
        { text: 'Stable - no major slumps', type: 'A' },
        { text: 'Small dip but manageable', type: 'B' },
        { text: 'Major crash, need caffeine to function', type: 'C' },
        { text: 'What energy? I\'m always tired.', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Do you drink water with meals?',
      options: [
        { text: 'Always, it\'s part of every meal', type: 'A' },
        { text: 'Usually have something to drink', type: 'B' },
        { text: 'Sometimes, if I remember', type: 'C' },
        { text: 'Food is dry, whatever', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Hydration Hero',
      emoji: '💧',
      description: 'You are HYDRATED! Water is your best friend, your bottle is always full, and your pee is basically clear. You understand that water is life and you\'re living your best hydrated life. Your cells thank you.',
      traits: ['Well-hydrated', 'Intentional', 'Healthy habits', 'Water lover'],
      strengths: ['Optimal hydration', 'Clear skin benefits', 'Good energy'],
      weaknesses: ['Might be in the bathroom a lot'],
      tips: ['Keep it up!', 'You\'re doing great', 'Your body is happy'],
    },
    B: {
      type: 'B',
      title: 'Adequately Hydrated',
      emoji: '🚰',
      description: 'You\'re doing okay on the water front! Not perfect, but you\'re drinking enough to function well. You could probably drink a bit more, but you\'re not in the danger zone. Solid hydration game.',
      traits: ['Adequately hydrated', 'Could improve', 'Decent habits', 'Normal'],
      strengths: ['Meeting basic needs', 'Not dehydrated'],
      weaknesses: ['Room for improvement'],
      tips: ['Try adding one more glass daily', 'Keep a bottle visible', 'You\'re doing fine'],
    },
    C: {
      type: 'C',
      title: 'Dehydration Territory',
      emoji: '🏜️',
      description: 'You\'re not drinking enough water and your body is probably showing signs. Dry skin, headaches, low energy - classic dehydration symptoms. Water isn\'t your priority but it probably should be.',
      traits: ['Under-hydrated', 'Neglecting water', 'Symptomatic', 'Needs improvement'],
      strengths: ['At least you\'re aware now'],
      weaknesses: ['Chronic mild dehydration', 'Missing out on benefits'],
      tips: ['Set water reminders', 'Get a bigger water bottle', 'Water before coffee', 'Your body is asking for help'],
    },
    D: {
      type: 'D',
      title: 'Desert Creature',
      emoji: '🌵',
      description: 'You\'re basically a cactus. Water is not part of your vocabulary. Coffee, soda, anything but actual water. Your body has given up sending thirst signals because you\'ve ignored them for so long. This is concerning!',
      traits: ['Severely dehydrated', 'Water-avoidant', 'Chronically dry', 'Concerning'],
      strengths: ['Survival instincts apparently'],
      weaknesses: ['Everything related to hydration', 'Long-term health risks'],
      tips: ['Please drink water', 'Like, right now', 'This is affecting your health', 'Start with one glass a day and build up'],
    },
  },
};

export default testData;
