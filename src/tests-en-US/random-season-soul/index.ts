// What Season Is Your Soul?
// Discover which season matches your inner essence!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-season-soul',
  title: 'What Season Is Your Soul?',
  description: 'Spring, Summer, Fall, or Winter - which season lives in your soul?',
  category: 'random',
  emoji: '🍂',
  color: 'from-amber-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your core essence:',
      options: [
        { text: 'Fresh starts, hope, new beginnings', type: 'A' },
        { text: 'Warmth, energy, peak living', type: 'B' },
        { text: 'Change, depth, beautiful endings', type: 'C' },
        { text: 'Rest, reflection, quiet strength', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your energy feels most like:',
      options: [
        { text: 'A flower opening, fresh and hopeful', type: 'A' },
        { text: 'The sun at noon, warm and bright', type: 'B' },
        { text: 'A leaf turning colors, beautiful change', type: 'C' },
        { text: 'A quiet snowfall, peaceful and still', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What do you bring to others?',
      options: [
        { text: 'Hope, freshness, new perspectives', type: 'A' },
        { text: 'Energy, fun, warmth', type: 'B' },
        { text: 'Wisdom, depth, appreciation for beauty', type: 'C' },
        { text: 'Calm, reflection, inner peace', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your life chapter right now:',
      options: [
        { text: 'Blooming, starting something new', type: 'A' },
        { text: 'Peak season, living fully', type: 'B' },
        { text: 'Transitioning, letting go beautifully', type: 'C' },
        { text: 'Resting, preparing for what\'s next', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your color palette:',
      options: [
        { text: 'Pastels, soft pinks and greens', type: 'A' },
        { text: 'Bright yellows, ocean blues, vibrant', type: 'B' },
        { text: 'Rich oranges, deep reds, warm golds', type: 'C' },
        { text: 'Cool whites, icy blues, silver', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How you handle endings:',
      options: [
        { text: 'Look forward to new beginnings', type: 'A' },
        { text: 'Struggle - I want the good times to last', type: 'B' },
        { text: 'Find beauty in them, accept with grace', type: 'C' },
        { text: 'See them as necessary rest before rebirth', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your ideal day:',
      options: [
        { text: 'Mild weather, flowers blooming, everything possible', type: 'A' },
        { text: 'Hot and sunny, pool, friends, adventures', type: 'B' },
        { text: 'Crisp air, cozy sweater, golden hour light', type: 'C' },
        { text: 'Cold outside, warm inside, peaceful quiet', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your mood most often:',
      options: [
        { text: 'Hopeful, excited about what\'s coming', type: 'A' },
        { text: 'Happy, energetic, ready for fun', type: 'B' },
        { text: 'Reflective, appreciating what is', type: 'C' },
        { text: 'Calm, introspective, at peace', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'What your soul needs:',
      options: [
        { text: 'Growth, possibility, fresh starts', type: 'A' },
        { text: 'Warmth, connection, adventure', type: 'B' },
        { text: 'Beauty, meaning, depth', type: 'C' },
        { text: 'Rest, silence, inner work', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your life mantra:',
      options: [
        { text: '"Every day is a new beginning"', type: 'A' },
        { text: '"Live while you\'re alive"', type: 'B' },
        { text: '"Find beauty in every season"', type: 'C' },
        { text: '"In stillness, find yourself"', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Spring Soul',
      emoji: '🌸',
      description: 'Your soul is SPRING! You carry the energy of new beginnings, fresh starts, and eternal hope. You bloom where you\'re planted and bring renewal to everyone around you. Your spirit is all about growth and possibility.',
      traits: ['Hopeful', 'Fresh', 'Growing', 'Renewal'],
      strengths: ['Eternal optimist', 'Brings fresh energy', 'Always starting anew'],
      weaknesses: ['May avoid depth', 'Impatient for growth'],
      tips: ['Your hope inspires others', 'Keep blooming', 'Every season serves a purpose'],
    },
    B: {
      type: 'B',
      title: 'Summer Soul',
      emoji: '☀️',
      description: 'Your soul is SUMMER! Warm, bright, and full of life. You\'re at your peak energy, bringing heat and light to everything. You live fully, love deeply, and burn bright. This is your season.',
      traits: ['Warm', 'Energetic', 'Living fully', 'Bright'],
      strengths: ['Contagious energy', 'Lives life fully', 'Brings warmth'],
      weaknesses: ['May resist endings', 'Burns out'],
      tips: ['Your warmth is needed', 'Shine bright', 'Rest is okay too'],
    },
    C: {
      type: 'C',
      title: 'Autumn Soul',
      emoji: '🍂',
      description: 'Your soul is AUTUMN! Beautiful, wise, and comfortable with change. You find beauty in transitions and endings. Your spirit is rich with depth, like golden hour that makes everything glow.',
      traits: ['Wise', 'Beautiful change', 'Deep', 'Reflective'],
      strengths: ['Handles change gracefully', 'Finds beauty everywhere', 'Wisdom from experience'],
      weaknesses: ['May dwell in melancholy', 'Romanticizes endings'],
      tips: ['Your depth is beautiful', 'Change is your element', 'Keep finding beauty'],
    },
    D: {
      type: 'D',
      title: 'Winter Soul',
      emoji: '❄️',
      description: 'Your soul is WINTER! Quiet, reflective, and full of inner strength. You find peace in stillness and power in rest. Like nature preparing for spring, you do important work in silence.',
      traits: ['Quiet', 'Strong', 'Reflective', 'Peaceful'],
      strengths: ['Inner strength', 'Comfortable with stillness', 'Deep reflection'],
      weaknesses: ['May isolate', 'Seems cold to some'],
      tips: ['Your stillness is productive', 'Rest is powerful', 'Spring always follows winter'],
    },
  },
};

export default testData;
