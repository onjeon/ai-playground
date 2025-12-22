// What Planet Are You?
// Discover which planet matches your cosmic energy!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-planet-personality',
  title: 'What Planet Are You?',
  description: 'Which planet in our solar system matches your cosmic personality and energy?',
  category: 'random',
  emoji: '🪐',
  color: 'from-purple-600 to-indigo-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your role in the universe:',
      options: [
        { text: 'The center of attention, a source of light', type: 'A' },
        { text: 'Mysterious, dark, drawing people in', type: 'B' },
        { text: 'Nurturing, life-giving, protective', type: 'C' },
        { text: 'Powerful, magnetic, larger than life', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your presence is:',
      options: [
        { text: 'Warm, bright, impossible to ignore', type: 'A' },
        { text: 'Intriguing, dark, pulling people closer', type: 'B' },
        { text: 'Comfortable, familiar, home-like', type: 'C' },
        { text: 'Commanding, impressive, awe-inspiring', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What do people orbit around you for?',
      options: [
        { text: 'Energy, warmth, inspiration', type: 'A' },
        { text: 'Depth, mystery, transformation', type: 'B' },
        { text: 'Safety, nurturing, belonging', type: 'C' },
        { text: 'Power, wisdom, guidance', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your energy at its peak:',
      options: [
        { text: 'Blazing, radiant, life-giving', type: 'A' },
        { text: 'Intense, transformative, deep', type: 'B' },
        { text: 'Balanced, sustaining, harmonious', type: 'C' },
        { text: 'Expansive, protective, massive', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you affect others?',
      options: [
        { text: 'Energize and illuminate them', type: 'A' },
        { text: 'Challenge and transform them', type: 'B' },
        { text: 'Ground and nurture them', type: 'C' },
        { text: 'Inspire and expand their horizons', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your biggest strength:',
      options: [
        { text: 'Being a source of light and energy', type: 'A' },
        { text: 'Seeing what others can\'t, depth', type: 'B' },
        { text: 'Creating life, nurturing growth', type: 'C' },
        { text: 'Protecting, leading, expanding', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your shadow side:',
      options: [
        { text: 'Can burn too bright, overwhelming', type: 'A' },
        { text: 'Can be too dark, isolating', type: 'B' },
        { text: 'Can be too attached, clingy', type: 'C' },
        { text: 'Can be too dominant, overbearing', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'What do you need to thrive?',
      options: [
        { text: 'Audience to shine for', type: 'A' },
        { text: 'Depth and authentic connection', type: 'B' },
        { text: 'Community to nurture', type: 'C' },
        { text: 'Space to be powerful', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your cosmic gift:',
      options: [
        { text: 'Giving light and energy to others', type: 'A' },
        { text: 'Transformation and rebirth', type: 'B' },
        { text: 'Life and growth', type: 'C' },
        { text: 'Expansion and protection', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How you want to be remembered:',
      options: [
        { text: 'As a source of light and warmth', type: 'A' },
        { text: 'As someone who brought depth and change', type: 'B' },
        { text: 'As someone who created and nurtured', type: 'C' },
        { text: 'As someone larger than life, inspiring', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Sun',
      emoji: '☀️',
      description: 'You are THE SUN! You\'re the center of your world, radiating warmth, light, and energy to everyone around you. People are drawn to you like planets in orbit. You give life and inspire.',
      traits: ['Radiant', 'Warm', 'Life-giving', 'Central'],
      strengths: ['Lights up any room', 'Gives energy to others', 'Inspiring presence'],
      weaknesses: ['Can overwhelm', 'May burn people out'],
      tips: ['You\'re literally a star', 'Share your light wisely', 'Everyone needs you'],
    },
    B: {
      type: 'B',
      title: 'Pluto',
      emoji: '🔮',
      description: 'You are PLUTO! Yes, it counts! You\'re mysterious, deep, and transformative. You exist on the edges, but your gravitational pull is undeniable. You bring change, rebirth, and depth.',
      traits: ['Mysterious', 'Deep', 'Transformative', 'Intense'],
      strengths: ['Brings profound change', 'Sees what others miss', 'Magnetic pull'],
      weaknesses: ['Can be too intense', 'May isolate'],
      tips: ['Your depth is your power', 'Not everyone can handle you', 'Transform the world'],
    },
    C: {
      type: 'C',
      title: 'Earth',
      emoji: '🌍',
      description: 'You are EARTH! You\'re nurturing, life-giving, and the home everyone wants to return to. You create safe spaces, sustain those you love, and represent balance and life itself.',
      traits: ['Nurturing', 'Life-giving', 'Grounded', 'Balanced'],
      strengths: ['Creates life and safety', 'Sustains others', 'Perfectly balanced'],
      weaknesses: ['Can be taken for granted', 'May over-give'],
      tips: ['You\'re literally home for everyone', 'Take care of yourself too', 'Your nurturing is everything'],
    },
    D: {
      type: 'D',
      title: 'Jupiter',
      emoji: '🪐',
      description: 'You are JUPITER! The largest planet, king of expansion and protection. You\'re big in every way - personality, impact, presence. You expand horizons and protect those in your orbit.',
      traits: ['Expansive', 'Powerful', 'Protective', 'Larger than life'],
      strengths: ['Protects others', 'Expands possibilities', 'Impressive presence'],
      weaknesses: ['Can be overwhelming', 'May dominate'],
      tips: ['Use your power for good', 'You\'re meant to be big', 'Protect and expand wisely'],
    },
  },
};

export default testData;
