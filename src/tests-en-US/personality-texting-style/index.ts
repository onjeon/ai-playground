// Your Texting Style
// How do you communicate digitally?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-texting-style',
  title: 'What\'s Your Texting Style?',
  description: 'Discover if you\'re an instant replier, emoji enthusiast, or the person who leaves everyone on read.',
  category: 'personality',
  emoji: '💬',
  color: 'from-green-500 to-emerald-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your average response time to texts:',
      options: [
        { text: 'Within seconds - I\'m always on my phone', type: 'A' },
        { text: 'A few minutes to an hour', type: 'B' },
        { text: 'A few hours - when I remember', type: 'C' },
        { text: 'Days... sometimes I just forget', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your relationship with read receipts:',
      options: [
        { text: 'On - I want people to know I saw their message', type: 'A' },
        { text: 'Off - too much pressure', type: 'B' },
        { text: 'I didn\'t know that was a setting', type: 'C' },
        { text: 'Off - I need plausible deniability', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your emoji usage is:',
      options: [
        { text: 'Every message - they add emotion!', type: 'A' },
        { text: 'Moderate - where appropriate', type: 'B' },
        { text: 'Minimal - maybe a thumbs up', type: 'C' },
        { text: 'Almost never - words are enough', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'A friend sends you a long text about their problems. You:',
      options: [
        { text: 'Reply immediately with support and questions', type: 'A' },
        { text: 'Take time to write a thoughtful response', type: 'B' },
        { text: 'React with an emoji now, respond properly later', type: 'C' },
        { text: 'Call them instead - this is too much to type', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you handle group chats?',
      options: [
        { text: 'Active participant - I contribute to everything', type: 'A' },
        { text: 'I chime in when relevant', type: 'B' },
        { text: 'I lurk and occasionally react', type: 'C' },
        { text: 'Muted. I\'ll catch up... eventually', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your typical text message length:',
      options: [
        { text: 'Multiple short messages in rapid fire', type: 'A' },
        { text: 'Complete thoughts in one message', type: 'B' },
        { text: 'Short and to the point', type: 'C' },
        { text: 'As few words as possible', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When ending a conversation:',
      options: [
        { text: 'I have a proper goodbye ritual', type: 'A' },
        { text: 'I let it naturally wind down', type: 'B' },
        { text: 'I just stop replying when it\'s over', type: 'C' },
        { text: 'Conversations end?', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your thoughts on voice messages:',
      options: [
        { text: 'I send them all the time!', type: 'A' },
        { text: 'Occasionally, for complex things', type: 'B' },
        { text: 'I rarely send them but will listen to others\'', type: 'C' },
        { text: 'Please no - just type', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'You have 100+ unread messages. Your reaction:',
      options: [
        { text: 'Impossible - I never let them pile up', type: 'A' },
        { text: 'Stressful - I need to clear those', type: 'B' },
        { text: 'Normal - I\'ll get to them', type: 'C' },
        { text: 'Those are rookie numbers', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'When someone takes forever to reply:',
      options: [
        { text: 'I send follow-up messages', type: 'A' },
        { text: 'I wait patiently - they\'re probably busy', type: 'B' },
        { text: 'I relate - I do the same thing', type: 'C' },
        { text: 'I might forget what we were talking about', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Instant Responder',
      emoji: '⚡',
      description: 'Your thumbs are always ready! You reply fast, keep conversations going, and your phone is basically an extension of your hand. People know they can count on you to respond.',
      traits: ['Responsive', 'Engaged', 'Available', 'Communicative'],
      strengths: ['Reliable communicator', 'No one waits on you', 'Strong connections', 'Nothing falls through cracks'],
      weaknesses: ['May seem too available', 'Phone dependency', 'Can feel obligated to reply instantly'],
      tips: ['It\'s okay to not respond immediately', 'Set boundaries with your phone', 'Sometimes being present IRL matters more'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Texter',
      emoji: '✨',
      description: 'You\'ve found the sweet spot! You respond in reasonable time, write thoughtful messages, and don\'t let texting take over your life. You\'re the friend everyone appreciates.',
      traits: ['Balanced', 'Thoughtful', 'Reliable', 'Considerate'],
      strengths: ['Healthy phone habits', 'Quality responses', 'Respects boundaries', 'Good communicator'],
      weaknesses: ['May overthink responses', 'Sometimes delays important replies', 'Perceived as "fine" but not exciting'],
      tips: ['Keep doing what you\'re doing', 'Your balance is healthy', 'Don\'t let expectations push you to extremes'],
    },
    C: {
      type: 'C',
      title: 'The Casual Replier',
      emoji: '🐢',
      description: 'Texting isn\'t your priority, and that\'s fine! You reply when you get to it, use minimal words, and prefer other forms of communication. Your friends have learned to adjust expectations.',
      traits: ['Relaxed', 'Independent', 'Laid-back', 'Unbothered'],
      strengths: ['Not phone-dependent', 'Present in real life', 'Low text anxiety', 'Authentic communication'],
      weaknesses: ['Frustrates fast repliers', 'May miss time-sensitive info', 'Can seem distant'],
      tips: ['Try to respond to important messages faster', 'Let people know your texting style upfront', 'A quick emoji can show you\'ve seen a message'],
    },
    D: {
      type: 'D',
      title: 'The Ghost Mode Operator',
      emoji: '👻',
      description: 'You exist on a different texting timeline. Messages pile up, conversations go dormant, and you\'ve accepted that your inbox is a graveyard. But when you do reply, it\'s genuine!',
      traits: ['Independent', 'Selective', 'Offline-focused', 'Unconventional'],
      strengths: ['Not ruled by your phone', 'Deep in-person connections', 'Focused on real life', 'No text anxiety'],
      weaknesses: ['Frustrates people who care', 'Misses opportunities', 'Can damage relationships'],
      tips: ['Set a daily reminder to check messages', 'A short reply is better than no reply', 'Communicate your style to loved ones'],
    },
  },
};

export default testData;
