// What Element Are You?
// Fire, Water, Earth, or Air - which one is your soul?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-element-type',
  title: 'What Element Are You?',
  description: 'Fire, Water, Earth, or Air? Discover which elemental force runs through your soul!',
  category: 'random',
  emoji: '🌍',
  color: 'from-orange-500 to-red-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your core energy:',
      options: [
        { text: 'Passionate, intense, driven', type: 'A' },
        { text: 'Emotional, intuitive, deep', type: 'B' },
        { text: 'Stable, grounded, practical', type: 'C' },
        { text: 'Free, intellectual, communicative', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When facing a problem:',
      options: [
        { text: 'Attack it head-on with energy', type: 'A' },
        { text: 'Feel my way through it emotionally', type: 'B' },
        { text: 'Take practical, steady steps', type: 'C' },
        { text: 'Think it through from all angles', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your weakness:',
      options: [
        { text: 'Impatience, burning out, anger', type: 'A' },
        { text: 'Over-emotional, moody, too sensitive', type: 'B' },
        { text: 'Stubborn, stuck, resistant to change', type: 'C' },
        { text: 'Detached, scattered, overthinking', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'What draws you:',
      options: [
        { text: 'Action, excitement, transformation', type: 'A' },
        { text: 'Depth, emotion, connection', type: 'B' },
        { text: 'Stability, nature, building things', type: 'C' },
        { text: 'Ideas, freedom, possibilities', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationships tend to be:',
      options: [
        { text: 'Passionate, intense, fiery', type: 'A' },
        { text: 'Deep, emotional, nurturing', type: 'B' },
        { text: 'Steady, reliable, loyal', type: 'C' },
        { text: 'Stimulating, intellectual, free', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your ideal environment:',
      options: [
        { text: 'Somewhere warm, active, energetic', type: 'A' },
        { text: 'Near water - ocean, lake, rain', type: 'B' },
        { text: 'Nature - forest, mountains, gardens', type: 'C' },
        { text: 'Open spaces with fresh air and sky', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How you create change:',
      options: [
        { text: 'Transform through destruction and rebirth', type: 'A' },
        { text: 'Flow around obstacles gradually', type: 'B' },
        { text: 'Build slowly and steadily', type: 'C' },
        { text: 'Spread ideas and inspire movement', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your power at its best:',
      options: [
        { text: 'Inspiring, energizing, transforming', type: 'A' },
        { text: 'Healing, nurturing, cleansing', type: 'B' },
        { text: 'Grounding, sustaining, creating', type: 'C' },
        { text: 'Connecting, communicating, freeing', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'What you fear:',
      options: [
        { text: 'Being contained, controlled, extinguished', type: 'A' },
        { text: 'Being emotionally cut off, dried out', type: 'B' },
        { text: 'Instability, losing foundation', type: 'C' },
        { text: 'Being trapped, unable to move freely', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your soul craves:',
      options: [
        { text: 'Passion, action, transformation', type: 'A' },
        { text: 'Emotional depth, flow, connection', type: 'B' },
        { text: 'Security, growth, physical presence', type: 'C' },
        { text: 'Freedom, ideas, endless possibility', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Fire',
      emoji: '🔥',
      description: 'You are FIRE - passionate, transformative, and intense. You burn bright with energy and drive. Your spirit transforms everything it touches. You inspire and energize, but watch for burnout.',
      traits: ['Passionate', 'Intense', 'Transformative', 'Energetic'],
      strengths: ['Drives action', 'Inspires others', 'Transforms situations', 'Endless energy'],
      weaknesses: ['Burns out', 'Impatient', 'Can destroy as well as create'],
      tips: ['Feed your fire wisely', 'Rest to avoid burnout', 'Use your power for transformation'],
    },
    B: {
      type: 'B',
      title: 'Water',
      emoji: '🌊',
      description: 'You are WATER - deep, emotional, and healing. You flow through life with intuition and feeling. Your spirit cleanses and nurtures. You adapt to any shape while remaining true to your essence.',
      traits: ['Emotional', 'Intuitive', 'Healing', 'Adaptable'],
      strengths: ['Deep empathy', 'Healing presence', 'Flows around obstacles', 'Emotional intelligence'],
      weaknesses: ['Moody', 'Overwhelmed by feelings', 'Can become stagnant'],
      tips: ['Let your emotions flow', 'Don\'t drown in feelings', 'Your depth is your power'],
    },
    C: {
      type: 'C',
      title: 'Earth',
      emoji: '🌍',
      description: 'You are EARTH - stable, grounded, and nurturing. You build things that last. Your spirit sustains and creates. You\'re the foundation others build on, reliable and strong.',
      traits: ['Grounded', 'Stable', 'Practical', 'Nurturing'],
      strengths: ['Reliable foundation', 'Creates lasting things', 'Nurtures growth', 'Steady presence'],
      weaknesses: ['Resistant to change', 'Stubborn', 'Can be stuck'],
      tips: ['Your stability is needed', 'Allow some change', 'Ground others with your presence'],
    },
    D: {
      type: 'D',
      title: 'Air',
      emoji: '💨',
      description: 'You are AIR - free, intellectual, and communicative. You spread ideas like wind carries seeds. Your spirit connects and inspires movement. You need freedom to truly thrive.',
      traits: ['Free', 'Intellectual', 'Communicative', 'Light'],
      strengths: ['Spreads ideas', 'Connects people', 'Brings fresh perspective', 'Adapts quickly'],
      weaknesses: ['Scattered', 'Detached', 'Hard to pin down'],
      tips: ['Your ideas change the world', 'Ground yourself sometimes', 'Freedom AND connection both matter'],
    },
  },
};

export default testData;
