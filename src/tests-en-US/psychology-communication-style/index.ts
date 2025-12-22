// Your Communication Style
// Discover how you communicate

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-communication-style',
  title: 'What\'s Your Communication Style?',
  description: 'Find out how you express yourself, handle difficult conversations, and connect with others.',
  category: 'psychology',
  emoji: '💬',
  color: 'from-blue-400 to-cyan-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When you need something from someone, you:',
      options: [
        { text: 'Ask directly and clearly for what I need', type: 'A' },
        { text: 'Hint at it and hope they pick up on it', type: 'B' },
        { text: 'Demand it or get frustrated if I don\'t get it', type: 'C' },
        { text: 'Say I don\'t need anything even if I do', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a disagreement, you typically:',
      options: [
        { text: 'Express my view while respecting theirs', type: 'A' },
        { text: 'Go along with them to avoid conflict', type: 'B' },
        { text: 'Push my point until they agree', type: 'C' },
        { text: 'Stay silent but feel resentful inside', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you handle criticism?',
      options: [
        { text: 'Listen, consider it, respond thoughtfully', type: 'A' },
        { text: 'Accept it even if I disagree', type: 'B' },
        { text: 'Defend myself or criticize back', type: 'C' },
        { text: 'Say it\'s fine but stew on it later', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When setting boundaries, you:',
      options: [
        { text: 'State them clearly and calmly', type: 'A' },
        { text: 'Struggle to set them at all', type: 'B' },
        { text: 'Set them firmly, maybe too firmly', type: 'C' },
        { text: 'Set them then feel guilty and backtrack', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your body language in conversations:',
      options: [
        { text: 'Open and engaged, making eye contact', type: 'A' },
        { text: 'Smaller, looking down, accommodating', type: 'B' },
        { text: 'Dominant, strong, sometimes intimidating', type: 'C' },
        { text: 'Closed off, arms crossed, guarded', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When someone interrupts you:',
      options: [
        { text: 'Politely finish my thought', type: 'A' },
        { text: 'Let them take over', type: 'B' },
        { text: 'Interrupt them back', type: 'C' },
        { text: 'Stop talking and feel annoyed silently', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you express anger?',
      options: [
        { text: 'I address what\'s bothering me directly', type: 'A' },
        { text: 'I don\'t - I hold it in', type: 'B' },
        { text: 'I let it out, sometimes explosively', type: 'C' },
        { text: 'Passive-aggressively or through silence', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you want to say no:',
      options: [
        { text: 'I say no clearly without over-explaining', type: 'A' },
        { text: 'I say yes even when I mean no', type: 'B' },
        { text: 'I say no with no regard for feelings', type: 'C' },
        { text: 'I give a vague non-answer or excuse', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'In group conversations, you:',
      options: [
        { text: 'Contribute confidently and listen to others', type: 'A' },
        { text: 'Mostly listen, rarely share', type: 'B' },
        { text: 'Tend to dominate the conversation', type: 'C' },
        { text: 'Stay quiet but have lots of opinions', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'After a difficult conversation, you feel:',
      options: [
        { text: 'Good - I handled it well', type: 'A' },
        { text: 'Worried I upset them', type: 'B' },
        { text: 'Satisfied I got my point across', type: 'C' },
        { text: 'Frustrated I didn\'t say what I wanted to', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Assertive Communicator',
      emoji: '⭐',
      description: 'You\'re a communication champion! You express yourself clearly and directly while respecting others. You can say no, set boundaries, and handle conflict with grace. This is the golden standard!',
      traits: ['Direct', 'Respectful', 'Clear', 'Confident yet humble'],
      strengths: ['People know where they stand with you', 'Healthy relationships', 'Effective at work', 'Low communication drama'],
      weaknesses: ['May seem too direct to some', 'Not everyone matches this style'],
      tips: ['Keep modeling great communication', 'Be patient with other styles', 'Teach these skills to others'],
    },
    B: {
      type: 'B',
      title: 'Passive Communicator',
      emoji: '🌸',
      description: 'You prioritize others\' comfort over your own voice. You avoid conflict, struggle to say no, and often let others lead. You\'re easy to get along with, but your needs might get lost. Your voice matters too!',
      traits: ['Accommodating', 'Conflict-avoidant', 'Puts others first', 'Quiet'],
      strengths: ['Easy to be around', 'Avoids unnecessary conflict', 'Good listener', 'Flexible'],
      weaknesses: ['Needs go unmet', 'Can build resentment', 'May be overlooked', 'Hard to know what you want'],
      tips: ['Practice small assertions', 'Your opinions are valid', 'Start with low-stakes situations', 'You can be kind AND direct'],
    },
    C: {
      type: 'C',
      title: 'Aggressive Communicator',
      emoji: '🔥',
      description: 'You get your point across - maybe a little too forcefully! You\'re direct and confident but might steamroll others in the process. Your needs get met, but it can damage relationships along the way.',
      traits: ['Dominant', 'Direct', 'Forceful', 'Strong-willed'],
      strengths: ['Never walked over', 'Clear about needs', 'Decisive', 'Gets things done'],
      weaknesses: ['Can hurt others', 'Damages relationships', 'Seen as intimidating', 'May miss nuance'],
      tips: ['Listen more', 'Others\' feelings matter too', 'Directness doesn\'t require aggression', 'Try collaboration over domination'],
    },
    D: {
      type: 'D',
      title: 'Passive-Aggressive Communicator',
      emoji: '🌪️',
      description: 'You have things to say but struggle to say them directly. Instead, they come out sideways - through silence, sarcasm, or subtle jabs. You feel things deeply but express them indirectly. It\'s time to find your voice!',
      traits: ['Indirect', 'Holds grudges', 'Sarcastic', 'Internally frustrated'],
      strengths: ['Avoids direct confrontation', 'Notices everything', 'Protective of self', 'Non-violent'],
      weaknesses: ['Confuses people', 'Builds resentment', 'Issues never get resolved', 'Can be hurtful'],
      tips: ['Say what you mean', 'Direct is kinder than indirect', 'Address issues when they happen', 'Resentment hurts you most'],
    },
  },
};

export default testData;
