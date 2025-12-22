// Introvert vs Extrovert
// Where do you get your energy?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-introvert-extrovert',
  title: 'Are You an Introvert or Extrovert?',
  description: 'Discover where you fall on the introvert-extrovert spectrum and how you recharge.',
  category: 'personality',
  emoji: '🔋',
  color: 'from-purple-500 to-indigo-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'After a long day, you recharge by:',
      options: [
        { text: 'Going out with friends', type: 'A' },
        { text: 'Spending time alone at home', type: 'B' },
        { text: 'Depends on the day', type: 'C' },
        { text: 'Small gathering with close friends', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'At a party, you\'re most likely:',
      options: [
        { text: 'Working the room, meeting everyone', type: 'A' },
        { text: 'Finding a quiet corner or leaving early', type: 'B' },
        { text: 'Talking to a few people I know well', type: 'C' },
        { text: 'Adapting based on my energy level', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your ideal weekend involves:',
      options: [
        { text: 'Back-to-back social plans', type: 'A' },
        { text: 'Alone time with no obligations', type: 'B' },
        { text: 'A balance of both', type: 'C' },
        { text: 'One meaningful social activity', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When working on a project, you prefer:',
      options: [
        { text: 'Brainstorming with a group', type: 'A' },
        { text: 'Working alone and presenting later', type: 'B' },
        { text: 'Either, depending on the project', type: 'C' },
        { text: 'Small team collaboration', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Meeting new people makes you feel:',
      options: [
        { text: 'Excited and energized', type: 'A' },
        { text: 'Drained and uncomfortable', type: 'B' },
        { text: 'Neutral - depends on the context', type: 'C' },
        { text: 'Interested but cautious', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your phone habits:',
      options: [
        { text: 'I call people all the time', type: 'A' },
        { text: 'Please text me, I won\'t answer calls', type: 'B' },
        { text: 'Calls for urgent, texts for everything else', type: 'C' },
        { text: 'Depends on who\'s calling', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your friend group is:',
      options: [
        { text: 'Large with many friend circles', type: 'A' },
        { text: 'Small and tight-knit', type: 'B' },
        { text: 'Mix of close friends and acquaintances', type: 'C' },
        { text: 'A few deep friendships', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'After socializing all weekend, you feel:',
      options: [
        { text: 'Great! Ready for more', type: 'A' },
        { text: 'Exhausted and need recovery time', type: 'B' },
        { text: 'A bit tired but okay', type: 'C' },
        { text: 'Good but happy to rest now', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'In conversations, you:',
      options: [
        { text: 'Think out loud and talk through ideas', type: 'A' },
        { text: 'Process internally before speaking', type: 'B' },
        { text: 'Mix of both', type: 'C' },
        { text: 'Listen more than I talk', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Being alone for extended periods:',
      options: [
        { text: 'Makes me restless and lonely', type: 'A' },
        { text: 'Is exactly what I need', type: 'B' },
        { text: 'Is fine for a while, then I want company', type: 'C' },
        { text: 'Is comfortable but I miss connection eventually', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Extrovert',
      emoji: '🎉',
      description: 'You\'re energized by people and social interaction! Being around others charges your batteries. You thrive in social settings and probably never met a stranger.',
      traits: ['Social', 'Energetic', 'Outgoing', 'Talkative'],
      strengths: ['Great networker', 'Brings energy to groups', 'Makes friends easily', 'Thrives in teams'],
      weaknesses: ['May struggle with alone time', 'Can overwhelm introverts', 'Needs external validation'],
      tips: ['Value quiet time too', 'Deep connections matter', 'Listen as much as you talk'],
    },
    B: {
      type: 'B',
      title: 'The Introvert',
      emoji: '📖',
      description: 'You recharge in solitude and need alone time to function. Social interaction is fine in doses, but it drains your energy. Your inner world is rich and fulfilling.',
      traits: ['Reflective', 'Independent', 'Deep thinker', 'Observant'],
      strengths: ['Self-sufficient', 'Deep connections', 'Great listener', 'Thoughtful'],
      weaknesses: ['May isolate too much', 'Can seem distant', 'Networking is hard'],
      tips: ['Push yourself socially sometimes', 'It\'s okay to leave early', 'Your needs are valid'],
    },
    C: {
      type: 'C',
      title: 'The Ambivert',
      emoji: '⚖️',
      description: 'You\'re right in the middle! You enjoy socializing but also need alone time. Your energy source depends on the situation, and you can adapt to different environments.',
      traits: ['Adaptable', 'Balanced', 'Flexible', 'Versatile'],
      strengths: ['Works well in any setting', 'Understands both types', 'Flexible energy', 'Balanced life'],
      weaknesses: ['May feel pulled in both directions', 'Can be misread', 'Identity uncertainty'],
      tips: ['Honor what you need in the moment', 'Your flexibility is a gift', 'Check in with yourself regularly'],
    },
    D: {
      type: 'D',
      title: 'The Social Introvert',
      emoji: '🌙',
      description: 'You enjoy people but in smaller doses and deeper connections. You\'re not antisocial - you just prefer quality over quantity. One-on-one > large groups.',
      traits: ['Selective', 'Deep', 'Loyal', 'Thoughtful'],
      strengths: ['Meaningful relationships', 'Quality time expert', 'Great one-on-one', 'Genuine connections'],
      weaknesses: ['May limit social opportunities', 'Hard to meet new people', 'Small talk struggle'],
      tips: ['Small talk leads to deep talk', 'Expand your circle slowly', 'Your depth is valued'],
    },
  },
};

export default testData;
