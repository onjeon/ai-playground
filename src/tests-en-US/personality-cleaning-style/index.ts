// Your Cleaning Style
// How do you keep your space?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-cleaning-style',
  title: 'What\'s Your Cleaning Personality?',
  description: 'Discover your approach to cleaning - neat freak, organized chaos, or creative mess?',
  category: 'personality',
  emoji: '🧹',
  color: 'from-cyan-500 to-teal-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'How often do you deep clean your home?',
      options: [
        { text: 'Weekly - I have a schedule', type: 'A' },
        { text: 'Every few weeks when it needs it', type: 'B' },
        { text: 'When guests are coming over', type: 'C' },
        { text: 'Define "deep clean"...', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your approach to dishes:',
      options: [
        { text: 'Washed immediately after use', type: 'A' },
        { text: 'Done at least once a day', type: 'B' },
        { text: 'When the sink is full', type: 'C' },
        { text: 'When I run out of clean ones', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your closet or drawers are:',
      options: [
        { text: 'Color-coded and perfectly organized', type: 'A' },
        { text: 'Organized in a way that makes sense to me', type: 'B' },
        { text: 'I know where most things are', type: 'C' },
        { text: 'A mystery even to myself', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone is coming over in 20 minutes. You:',
      options: [
        { text: 'My place is already guest-ready', type: 'A' },
        { text: 'Quick tidy of visible areas', type: 'B' },
        { text: 'Panic clean and shove things in closets', type: 'C' },
        { text: 'They knew what they were signing up for', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your bed is made:',
      options: [
        { text: 'Every single morning, perfectly', type: 'A' },
        { text: 'Most mornings', type: 'B' },
        { text: 'Sometimes when I feel like it', type: 'C' },
        { text: 'I\'m just going to get back in it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Cleaning products in your home:',
      options: [
        { text: 'Full arsenal - different cleaners for everything', type: 'A' },
        { text: 'The basics plus a few favorites', type: 'B' },
        { text: 'Whatever was on sale', type: 'C' },
        { text: 'I think there\'s something under the sink', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your car interior:',
      options: [
        { text: 'Spotless inside and out', type: 'A' },
        { text: 'Clean with some normal wear', type: 'B' },
        { text: 'Has a few receipts and wrappers', type: 'C' },
        { text: 'A mobile storage unit', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you see clutter building up:',
      options: [
        { text: 'I deal with it immediately', type: 'A' },
        { text: 'I\'ll get to it soon', type: 'B' },
        { text: 'I don\'t really notice until it\'s bad', type: 'C' },
        { text: 'What clutter? This is organized', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your relationship with laundry:',
      options: [
        { text: 'Scheduled laundry days, immediately folded', type: 'A' },
        { text: 'Done regularly, sometimes sits in the basket', type: 'B' },
        { text: 'The chair has become a wardrobe', type: 'C' },
        { text: 'I live out of a laundry basket', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel about cleaning?',
      options: [
        { text: 'I actually enjoy it - it\'s satisfying', type: 'A' },
        { text: 'I like having a clean space', type: 'B' },
        { text: 'It\'s a necessary chore', type: 'C' },
        { text: 'I would rather do almost anything else', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Clean Queen/King',
      emoji: '✨',
      description: 'Your space is spotless and you take pride in it! You have systems, schedules, and standards. Your home could be photographed for a magazine at any moment.',
      traits: ['Organized', 'Disciplined', 'Detail-oriented', 'Proud'],
      strengths: ['Always guest-ready', 'Peaceful environment', 'Good habits', 'Never loses things'],
      weaknesses: ['May stress about mess', 'Could judge others', 'Cleaning takes time'],
      tips: ['It\'s okay if things aren\'t perfect', 'Live a little!', 'Some mess is normal'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Tidier',
      emoji: '🏠',
      description: 'You keep a reasonably clean space without being obsessive about it. Your home is comfortable and presentable. You\'ve found a sustainable cleaning balance.',
      traits: ['Balanced', 'Practical', 'Reasonable', 'Comfortable'],
      strengths: ['Sustainable habits', 'Not stressed about perfection', 'Good enough approach', 'Time for other things'],
      weaknesses: ['Could be tidier sometimes', 'May procrastinate', 'Things pile up occasionally'],
      tips: ['Your balance works', 'Keep doing what you\'re doing', 'Maybe set a cleaning schedule'],
    },
    C: {
      type: 'C',
      title: 'The Organized Chaos Expert',
      emoji: '🌀',
      description: 'Your space might look messy to others, but you know where everything is! You clean when necessary and don\'t stress about perfection. Comfort over appearance.',
      traits: ['Relaxed', 'Practical', 'Unbothered', 'Functional'],
      strengths: ['Not stressed about mess', 'Knows where things are', 'Priorities in order', 'Time for other things'],
      weaknesses: ['Guests might judge', 'Can get out of control', 'May lose things'],
      tips: ['Set a minimum standard', 'Quick daily tidying helps', 'Invite people over as motivation'],
    },
    D: {
      type: 'D',
      title: 'The Creative Mess Maker',
      emoji: '🎨',
      description: 'Cleaning is simply not your priority and that\'s your truth! You\'ve got better things to do than clean. Your space is lived-in, well-loved, and authentically you.',
      traits: ['Creative', 'Unbothered', 'Authentic', 'Free-spirited'],
      strengths: ['Zero cleaning anxiety', 'More time for fun', 'Authentic living', 'Priorities elsewhere'],
      weaknesses: ['Health/hygiene concerns', 'Can\'t find things', 'Embarrassed to have guests'],
      tips: ['Start with one small area', 'Hire help if you can', 'Basic hygiene is non-negotiable'],
    },
  },
};

export default testData;
