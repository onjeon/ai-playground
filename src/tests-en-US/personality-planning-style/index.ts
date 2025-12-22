// Your Planning Style
// How do you approach the future?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-planning-style',
  title: 'What\'s Your Planning Personality?',
  description: 'Discover if you\'re a meticulous planner, spontaneous spirit, or somewhere in between.',
  category: 'personality',
  emoji: '📅',
  color: 'from-blue-600 to-cyan-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your calendar looks like:',
      options: [
        { text: 'Color-coded with every detail planned', type: 'A' },
        { text: 'Key events and appointments noted', type: 'B' },
        { text: 'I check it occasionally', type: 'C' },
        { text: 'What calendar?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When going on vacation, you:',
      options: [
        { text: 'Plan every day with reservations and itinerary', type: 'A' },
        { text: 'Book flights and hotels, wing the rest', type: 'B' },
        { text: 'Have a loose idea of what to do', type: 'C' },
        { text: 'Show up and see what happens', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your to-do list situation:',
      options: [
        { text: 'Detailed daily lists with priorities', type: 'A' },
        { text: 'A running list of things to get done', type: 'B' },
        { text: 'Mental notes mostly', type: 'C' },
        { text: 'Lists stress me out', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone suggests spontaneous plans. You:',
      options: [
        { text: 'Need to check my schedule first', type: 'A' },
        { text: 'Usually can make it work', type: 'B' },
        { text: 'Love it! I\'m flexible', type: 'C' },
        { text: 'Best plans are unplanned', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your 5-year plan is:',
      options: [
        { text: 'Written down with milestones and checkpoints', type: 'A' },
        { text: 'A general direction I\'m heading', type: 'B' },
        { text: 'Vague ideas at best', type: 'C' },
        { text: 'I don\'t plan that far ahead', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When plans change at the last minute:',
      options: [
        { text: 'I feel stressed and annoyed', type: 'A' },
        { text: 'I adapt but prefer notice', type: 'B' },
        { text: 'I go with the flow', type: 'C' },
        { text: 'Change is exciting!', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Meal planning and grocery shopping:',
      options: [
        { text: 'Weekly meal plan with detailed list', type: 'A' },
        { text: 'Rough idea and a basic list', type: 'B' },
        { text: 'I buy what looks good', type: 'C' },
        { text: 'I figure it out when I\'m hungry', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your morning routine:',
      options: [
        { text: 'Scheduled down to the minute', type: 'A' },
        { text: 'Consistent general routine', type: 'B' },
        { text: 'Varies by how I feel', type: 'C' },
        { text: 'Chaos every morning', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Project deadlines:',
      options: [
        { text: 'I finish well ahead of time', type: 'A' },
        { text: 'I meet them with time to spare', type: 'B' },
        { text: 'I usually make it just in time', type: 'C' },
        { text: 'Deadlines are suggestions', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel about planning?',
      options: [
        { text: 'I love it - planning is half the fun', type: 'A' },
        { text: 'It\'s necessary and helpful', type: 'B' },
        { text: 'I do it when I have to', type: 'C' },
        { text: 'Planning kills spontaneity', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Master Planner',
      emoji: '📋',
      description: 'You have a plan for your plan! Organization is your superpower, and the future is mapped out in beautiful detail. Your calendar and lists bring you peace.',
      traits: ['Organized', 'Prepared', 'Detail-oriented', 'Proactive'],
      strengths: ['Always prepared', 'Meets deadlines', 'Reduces stress through planning', 'Reliable'],
      weaknesses: ['Rigid when things change', 'May over-plan', 'Misses spontaneous opportunities'],
      tips: ['Leave room for spontaneity', 'Plans can change', 'Enjoy the unplanned moments'],
    },
    B: {
      type: 'B',
      title: 'The Flexible Planner',
      emoji: '🗓️',
      description: 'You plan the important stuff but stay flexible. You have structure without rigidity. The perfect balance of prepared and adaptable.',
      traits: ['Balanced', 'Practical', 'Adaptable', 'Sensible'],
      strengths: ['Good overview planning', 'Handles changes well', 'Not stressed about details', 'Reliable enough'],
      weaknesses: ['Could be more organized', 'Sometimes things slip', 'May underwhelm planners'],
      tips: ['Your balance is great', 'Add a bit more detail when needed', 'Trust your approach'],
    },
    C: {
      type: 'C',
      title: 'The Go-With-The-Flow Type',
      emoji: '🌊',
      description: 'You prefer to keep things loose and see how things unfold. Too much planning feels restrictive. You trust that things will work out.',
      traits: ['Flexible', 'Spontaneous', 'Relaxed', 'Adaptable'],
      strengths: ['Low planning stress', 'Open to anything', 'Flexible lifestyle', 'Enjoys surprises'],
      weaknesses: ['May miss opportunities', 'Can be unprepared', 'Frustrates planners'],
      tips: ['Some planning helps', 'Big things need structure', 'Others may need more notice'],
    },
    D: {
      type: 'D',
      title: 'The Spontaneous Spirit',
      emoji: '🎲',
      description: 'Plans? Where you\'re going, you don\'t need plans! You live in the moment, embrace chaos, and find structure suffocating. Every day is an adventure.',
      traits: ['Spontaneous', 'Free-spirited', 'Present-focused', 'Adventurous'],
      strengths: ['Ultimate flexibility', 'Lives in the moment', 'Embraces change', 'Exciting life'],
      weaknesses: ['Misses deadlines', 'Unreliable to others', 'Can cause problems'],
      tips: ['Some structure is freedom', 'Respect others\' need for plans', 'Big things need preparation'],
    },
  },
};

export default testData;
