// Your Emotional Intelligence Level
// Discover your EQ

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-emotional-intelligence',
  title: 'What\'s Your Emotional Intelligence Level?',
  description: 'Find out how well you understand, manage, and navigate emotions - yours and others\'.',
  category: 'psychology',
  emoji: '🎭',
  color: 'from-emerald-400 to-teal-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You\'re feeling angry. You typically:',
      options: [
        { text: 'Notice the feeling, understand why, and manage it', type: 'A' },
        { text: 'Feel it but take a moment before reacting', type: 'B' },
        { text: 'React first, think later', type: 'C' },
        { text: 'I\'m not always sure what I\'m feeling', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'A friend seems upset but says "I\'m fine":',
      options: [
        { text: 'I can tell they\'re not - I\'ll gently check in', type: 'A' },
        { text: 'I suspect something\'s up but give them space', type: 'B' },
        { text: 'If they say fine, I take it at face value', type: 'C' },
        { text: 'I\'m not great at reading between the lines', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When someone is crying:',
      options: [
        { text: 'I know how to comfort them appropriately', type: 'A' },
        { text: 'I try to help but sometimes feel awkward', type: 'B' },
        { text: 'I feel uncomfortable and don\'t know what to do', type: 'C' },
        { text: 'I might try to fix it or make jokes', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How well do you understand your own emotions?',
      options: [
        { text: 'Very well - I can name and trace them', type: 'A' },
        { text: 'Pretty well most of the time', type: 'B' },
        { text: 'Sometimes they confuse or surprise me', type: 'C' },
        { text: 'I often don\'t know what I\'m feeling', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'During a disagreement, you:',
      options: [
        { text: 'Stay calm and try to understand their view', type: 'A' },
        { text: 'Get emotional but can pull back', type: 'B' },
        { text: 'Get heated and say things I regret', type: 'C' },
        { text: 'Shut down and avoid the conversation', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'You can usually tell how someone is feeling by:',
      options: [
        { text: 'Body language, tone, small cues - I pick up on a lot', type: 'A' },
        { text: 'I\'m decent at reading people', type: 'B' },
        { text: 'Only if they tell me directly', type: 'C' },
        { text: 'I often miss emotional cues', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you\'re stressed, you:',
      options: [
        { text: 'Use healthy coping strategies I\'ve developed', type: 'A' },
        { text: 'Try to manage but sometimes struggle', type: 'B' },
        { text: 'Let it affect my mood and behavior', type: 'C' },
        { text: 'Don\'t always realize I\'m stressed until I snap', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you handle receiving criticism?',
      options: [
        { text: 'Consider it objectively and learn from it', type: 'A' },
        { text: 'Feel defensive but eventually process it', type: 'B' },
        { text: 'Take it personally and get upset', type: 'C' },
        { text: 'Either dismiss it or feel crushed', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'In group dynamics, you:',
      options: [
        { text: 'Read the room and adapt my approach', type: 'A' },
        { text: 'Generally get along with most people', type: 'B' },
        { text: 'Sometimes miss social cues', type: 'C' },
        { text: 'Find group dynamics exhausting and confusing', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ability to motivate yourself:',
      options: [
        { text: 'Strong - I understand what drives me', type: 'A' },
        { text: 'Good on most days', type: 'B' },
        { text: 'I struggle with motivation often', type: 'C' },
        { text: 'I don\'t really know what motivates me', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'EQ Expert',
      emoji: '🌟',
      description: 'Your emotional intelligence is through the roof! You understand your own emotions, read others like a book, and navigate social situations with grace. You\'re the friend everyone turns to for emotional support.',
      traits: ['Self-aware', 'Empathetic', 'Socially skilled', 'Emotionally regulated'],
      strengths: ['Natural leader', 'Great at relationships', 'Handles conflict well', 'Trusted by others'],
      weaknesses: ['May absorb others\' emotions', 'Can overthink social dynamics', 'High expectations for emotional maturity'],
      tips: ['Protect your energy', 'Model EQ for others', 'Remember you don\'t have to solve everyone\'s problems'],
    },
    B: {
      type: 'B',
      title: 'EQ Skilled',
      emoji: '💚',
      description: 'You\'ve got solid emotional intelligence! You\'re self-aware, empathetic, and handle most situations well. There\'s room to grow, but you\'re already doing better than most.',
      traits: ['Generally self-aware', 'Empathetic', 'Learning and growing', 'Good social skills'],
      strengths: ['Handles emotions reasonably', 'Cares about others', 'Willing to grow', 'Decent at relationships'],
      weaknesses: ['Can slip under stress', 'Still learning some skills', 'May struggle with complex emotions'],
      tips: ['Keep developing awareness', 'Practice pause before reaction', 'Study emotional patterns'],
    },
    C: {
      type: 'C',
      title: 'EQ Developing',
      emoji: '🌱',
      description: 'Your emotional intelligence is a work in progress. You might react before thinking, miss social cues, or struggle to understand your own feelings. The good news? EQ can be learned!',
      traits: ['Reactive', 'Still learning', 'May miss cues', 'Developing awareness'],
      strengths: ['Authentic in emotions', 'Room for growth', 'Direct', 'Honest reactions'],
      weaknesses: ['May hurt others unintentionally', 'Struggles with regulation', 'Social situations can be tricky'],
      tips: ['Practice naming your emotions', 'Pause before reacting', 'Ask others how they\'re feeling', 'Read about emotional intelligence'],
    },
    D: {
      type: 'D',
      title: 'EQ Explorer',
      emoji: '🔍',
      description: 'Emotional intelligence might feel like a foreign language to you. Understanding feelings - yours or others\' - can be confusing. But awareness is the first step, and you\'re on your way!',
      traits: ['Low emotional awareness', 'May seem detached', 'Struggles to read situations', 'Disconnected from feelings'],
      strengths: ['Logical approach', 'Not overly emotional', 'Potential for growth', 'Direct'],
      weaknesses: ['Relationships can be hard', 'May seem cold or distant', 'Misses important emotional info'],
      tips: ['Start with your own emotions', 'Journal about feelings', 'Ask for feedback', 'Consider working with a therapist or coach'],
    },
  },
};

export default testData;
