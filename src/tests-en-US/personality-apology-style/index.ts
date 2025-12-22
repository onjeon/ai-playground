// Your Apology Style
// How do you say sorry?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-apology-style',
  title: 'What\'s Your Apology Style?',
  description: 'Discover how you handle mistakes and make amends - do you over-apologize or stand your ground?',
  category: 'personality',
  emoji: '🙏',
  color: 'from-blue-400 to-indigo-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You accidentally bump into someone on the street. You:',
      options: [
        { text: 'Apologize profusely and feel bad about it for hours', type: 'A' },
        { text: 'Say sorry and make sure they\'re okay', type: 'B' },
        { text: 'Quick "sorry" and keep moving', type: 'C' },
        { text: 'They bumped into me too - we\'re even', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You said something that hurt a friend. Your approach:',
      options: [
        { text: 'Write a long text explaining and apologizing repeatedly', type: 'A' },
        { text: 'Have a sincere conversation and apologize clearly', type: 'B' },
        { text: 'Acknowledge it briefly and move on', type: 'C' },
        { text: 'Defend myself - I had a point', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Someone asks why you didn\'t do something. You:',
      options: [
        { text: 'Apologize immediately, even if it wasn\'t your job', type: 'A' },
        { text: 'Explain the situation and apologize if warranted', type: 'B' },
        { text: 'Give a brief reason without over-explaining', type: 'C' },
        { text: 'I don\'t owe anyone an apology for that', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'You\'re running late to meet someone. You:',
      options: [
        { text: 'Apologize multiple times and feel terrible', type: 'A' },
        { text: 'Apologize sincerely once and explain briefly', type: 'B' },
        { text: 'Quick sorry, let\'s get on with it', type: 'C' },
        { text: 'Traffic happens - they understand', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When apologizing, you typically:',
      options: [
        { text: 'Take all the blame, even if it\'s not all mine', type: 'A' },
        { text: 'Take responsibility for my part specifically', type: 'B' },
        { text: 'Keep it short and don\'t dwell on it', type: 'C' },
        { text: 'Only apologize if I\'m absolutely in the wrong', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone is upset with you but won\'t say why. You:',
      options: [
        { text: 'Apologize for everything you might have done', type: 'A' },
        { text: 'Ask what\'s wrong so you can address it properly', type: 'B' },
        { text: 'Wait for them to bring it up', type: 'C' },
        { text: 'If they won\'t tell me, that\'s on them', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'After apologizing, you typically feel:',
      options: [
        { text: 'Still guilty and replay it in my head', type: 'A' },
        { text: 'Better, knowing I addressed it', type: 'B' },
        { text: 'Ready to move on', type: 'C' },
        { text: 'Fine - apologies are transactional', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'In a work mistake situation, you:',
      options: [
        { text: 'Over-explain and apologize to everyone involved', type: 'A' },
        { text: 'Own the mistake, apologize, and present a solution', type: 'B' },
        { text: 'Acknowledge it briefly and fix it', type: 'C' },
        { text: 'Explain why it happened - context matters', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone else should apologize but doesn\'t, you:',
      options: [
        { text: 'Apologize anyway to smooth things over', type: 'A' },
        { text: 'Address it directly but calmly', type: 'B' },
        { text: 'Let it go, not worth the conflict', type: 'C' },
        { text: 'Make it clear I\'m not apologizing first', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your philosophy on apologies:',
      options: [
        { text: 'Better to over-apologize than under-apologize', type: 'A' },
        { text: 'Sincere apologies are important and meaningful', type: 'B' },
        { text: 'Actions speak louder than words', type: 'C' },
        { text: 'Only apologize when truly at fault', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Over-Apologizer',
      emoji: '😰',
      description: 'You say sorry for everything - even things that aren\'t your fault! Your empathy is beautiful, but you might be taking on guilt that isn\'t yours. Remember: not everything requires an apology.',
      traits: ['Empathetic', 'Anxious', 'People-pleasing', 'Considerate'],
      strengths: ['Always tries to make amends', 'Cares about others\' feelings', 'Rarely leaves conflicts unaddressed', 'Humble'],
      weaknesses: ['May seem insincere from over-use', 'Takes blame unnecessarily', 'Can enable others\' bad behavior'],
      tips: ['Not everything needs a sorry', 'Practice saying "thank you" instead', 'Your feelings matter too'],
    },
    B: {
      type: 'B',
      title: 'The Genuine Apologizer',
      emoji: '💚',
      description: 'You\'ve mastered the art of the sincere apology! You take responsibility when needed, express genuine remorse, and move forward constructively. This is emotional maturity at its finest.',
      traits: ['Mature', 'Sincere', 'Self-aware', 'Accountable'],
      strengths: ['Apologies are meaningful', 'Builds trust', 'Healthy conflict resolution', 'Takes ownership'],
      weaknesses: ['May expect same from others', 'Could seem formal', 'High standards for yourself'],
      tips: ['Keep doing what you\'re doing', 'Model this for others', 'Forgive yourself too'],
    },
    C: {
      type: 'C',
      title: 'The Quick-and-Done Apologizer',
      emoji: '✅',
      description: 'You believe in efficient apologies - acknowledge, apologize, move on. You don\'t dwell on mistakes or beat yourself up. Sometimes a quick sorry is all that\'s needed!',
      traits: ['Practical', 'Efficient', 'Unbothered', 'Forward-focused'],
      strengths: ['Doesn\'t overthink', 'Moves past conflicts', 'Not defined by mistakes', 'Low drama'],
      weaknesses: ['May seem insincere', 'Others might need more', 'Could miss deeper issues'],
      tips: ['Sometimes deeper conversations help', 'Check if the other person needs more', 'Sincerity matters'],
    },
    D: {
      type: 'D',
      title: 'The Selective Apologizer',
      emoji: '🛡️',
      description: 'You only apologize when you truly believe you\'re wrong. You don\'t do performative sorry\'s or take blame that isn\'t yours. This takes confidence - just make sure it\'s not stubbornness!',
      traits: ['Confident', 'Principled', 'Stubborn', 'Self-assured'],
      strengths: ['Apologies are meaningful', 'Doesn\'t over-apologize', 'Strong sense of self', 'Honest'],
      weaknesses: ['May seem cold', 'Can damage relationships', 'Pride may get in the way'],
      tips: ['Sometimes being right isn\'t the goal', 'Relationships matter more than being correct', 'A little humility helps'],
    },
  },
};

export default testData;
