// Your Self-Improvement Style
// How do you approach becoming a better version of yourself?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-self-improvement',
  title: 'Your Self-Improvement Style',
  description: '5 AM club devotee or perfectly happy as you are? Discover your relationship with personal growth and self-optimization.',
  category: 'lifestyle',
  emoji: '📈',
  color: 'from-cyan-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your relationship with self-help books:',
      options: [
        { text: 'I have a curated library and take notes', type: 'A' },
        { text: 'Read a few, got some good insights', type: 'B' },
        { text: 'Started some, rarely finish them', type: 'C' },
        { text: 'Not my thing - I\'m good as I am', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'New Year\'s resolutions:',
      options: [
        { text: 'Detailed goals with action plans and tracking', type: 'A' },
        { text: 'A few intentions I actually follow', type: 'B' },
        { text: 'Make them, forget them by February', type: 'C' },
        { text: 'Don\'t do them - any day can be a fresh start', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your podcast/content consumption:',
      options: [
        { text: 'Productivity, personal development, optimization', type: 'A' },
        { text: 'Mix of educational and entertainment', type: 'B' },
        { text: 'Pure entertainment, no homework', type: 'C' },
        { text: 'Whatever catches my attention', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you identify a personal weakness:',
      options: [
        { text: 'Create a system to improve it immediately', type: 'A' },
        { text: 'Work on it over time, gradual improvement', type: 'B' },
        { text: 'Acknowledge it, maybe do something about it', type: 'C' },
        { text: 'Accept it as part of who I am', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Morning routines:',
      options: [
        { text: 'Optimized: meditation, exercise, journaling, cold shower', type: 'A' },
        { text: 'Some structure, a few healthy habits', type: 'B' },
        { text: 'Whatever happens, happens', type: 'C' },
        { text: 'My routine is sleeping as late as possible', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Tracking habits:',
      options: [
        { text: 'Multiple apps, spreadsheets, detailed tracking', type: 'A' },
        { text: 'Some tracking for important goals', type: 'B' },
        { text: 'Tried it, didn\'t stick with it', type: 'C' },
        { text: 'Sounds exhausting', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your comfort zone:',
      options: [
        { text: 'Actively trying to expand it constantly', type: 'A' },
        { text: 'Push it occasionally when it matters', type: 'B' },
        { text: 'It\'s called a comfort zone for a reason', type: 'C' },
        { text: 'I like where I am, thanks', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you see "10 habits of successful people":',
      options: [
        { text: 'Already doing most, optimizing the rest', type: 'A' },
        { text: 'Might read it, take what\'s useful', type: 'B' },
        { text: 'Eye roll but might skim', type: 'C' },
        { text: 'Success is subjective anyway', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your view on "becoming your best self":',
      options: [
        { text: 'It\'s my mission - constant optimization', type: 'A' },
        { text: 'Important, working on it gradually', type: 'B' },
        { text: 'Nice idea but not obsessed with it', type: 'C' },
        { text: 'I\'m already my best self, this is it', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Honestly, how do you feel about self-improvement culture?',
      options: [
        { text: 'Love it - always room to grow', type: 'A' },
        { text: 'Valuable in moderation', type: 'B' },
        { text: 'A bit much sometimes', type: 'C' },
        { text: 'Toxic hustle culture in disguise', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Optimizer',
      emoji: '🚀',
      description: 'You\'re on a constant quest to level up. Morning routines, habit tracking, goal setting - you\'re all in on the self-improvement game. Your Kindle is full of productivity books and your life is a project.',
      traits: ['Driven', 'Disciplined', 'Growth-focused', 'Optimizing'],
      strengths: ['Constant improvement', 'Clear goals', 'Strong systems', 'Gets results'],
      weaknesses: ['Burnout risk', 'Never satisfied', 'Might be exhausting to others'],
      tips: ['You\'re already enough', 'Rest is productive too', 'Enjoy the current version sometimes'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Grower',
      emoji: '🌱',
      description: 'You believe in growth but not at the cost of enjoying life. You improve where it matters, set meaningful goals, and also know when to relax. Personal development without the toxic hustle.',
      traits: ['Balanced', 'Intentional', 'Selective', 'Grounded'],
      strengths: ['Sustainable growth', 'Not obsessive', 'Actually enjoys life', 'Healthy approach'],
      weaknesses: ['Could push harder sometimes', 'Might miss some gains'],
      tips: ['You\'ve found the sweet spot', 'This approach is sustainable', 'Keep doing you'],
    },
    C: {
      type: 'C',
      title: 'The Casual Improver',
      emoji: '🤷',
      description: 'You know self-improvement is a thing but you\'re not making it your personality. Sometimes you grow, sometimes you don\'t, and that\'s fine. Life is for living, not optimizing.',
      traits: ['Relaxed', 'Low-pressure', 'Occasional', 'Unbothered'],
      strengths: ['No pressure', 'Enjoys life as is', 'Not stressed about growth', 'Authentic'],
      weaknesses: ['Might miss opportunities', 'Could be more intentional', 'Some growth is good'],
      tips: ['Growth can be casual', 'You don\'t need to optimize everything', 'But some goals help'],
    },
    D: {
      type: 'D',
      title: 'The Content Soul',
      emoji: '😌',
      description: 'You\'re already you and that\'s enough. Self-improvement culture can be exhausting and sometimes toxic. You\'ve accepted yourself and aren\'t trying to become anyone else. Revolutionary in its own way.',
      traits: ['Self-accepting', 'Content', 'Anti-hustle', 'Present'],
      strengths: ['At peace with yourself', 'Not chasing anything', 'Resists toxic culture', 'Authentic'],
      weaknesses: ['Might resist helpful change', 'Growth isn\'t always bad', 'Some improvement is good'],
      tips: ['Self-acceptance is valuable', 'But some growth can be healthy', 'Find what feels right'],
    },
  },
};

export default testData;
