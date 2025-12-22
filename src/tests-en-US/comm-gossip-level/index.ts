// Your Gossip Level
// How much do you gossip?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-gossip-level',
  title: 'Your Gossip Level',
  description: 'Be honest - how much do you love a good tea spill? Let\'s find your gossip personality!',
  category: 'communication',
  emoji: '🍵',
  color: 'from-purple-500 to-pink-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Someone says "did you hear about..."',
      options: [
        { text: 'TELL ME EVERYTHING IMMEDIATELY', type: 'A' },
        { text: 'Interested, but won\'t seek it out', type: 'B' },
        { text: 'Mildly curious but uncomfortable', type: 'C' },
        { text: 'Not interested in other people\'s business', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you learn something juicy:',
      options: [
        { text: 'Must tell someone immediately or I\'ll explode', type: 'A' },
        { text: 'Might share with close friends', type: 'B' },
        { text: 'Keep it to myself mostly', type: 'C' },
        { text: 'It stays with me, always', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your relationship with "tea" and "drama":',
      options: [
        { text: 'I live for it. Inject it into my veins.', type: 'A' },
        { text: 'Entertaining sometimes, in moderation', type: 'B' },
        { text: 'Try to stay out of it', type: 'C' },
        { text: 'Actively avoid all drama and gossip', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'At a party, you\'re most likely to:',
      options: [
        { text: 'Find someone to dish with about everyone', type: 'A' },
        { text: 'Catch up on news naturally in conversation', type: 'B' },
        { text: 'Talk about things other than people', type: 'C' },
        { text: 'Avoid talking about anyone who isn\'t there', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you talk about others, it\'s usually:',
      options: [
        { text: 'Discussing their drama, situations, lives', type: 'A' },
        { text: 'Mix of positive and negative, normal stuff', type: 'B' },
        { text: 'Mostly positive, try to avoid negative', type: 'C' },
        { text: 'Only when absolutely relevant', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone tells you a secret:',
      options: [
        { text: '"I won\'t tell anyone" *tells best friend*', type: 'A' },
        { text: 'Keep it unless it\'s harmless to share', type: 'B' },
        { text: 'Actually keep it, feel uncomfortable knowing', type: 'C' },
        { text: 'Take it to my grave, I\'m a vault', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Celebrity gossip:',
      options: [
        { text: 'Know everything about everyone', type: 'A' },
        { text: 'Casually aware, might click on headlines', type: 'B' },
        { text: 'Don\'t really follow', type: 'C' },
        { text: 'Could not care less', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you feel after a gossip session?',
      options: [
        { text: 'Energized! Connection! Bonding!', type: 'A' },
        { text: 'Normal, it\'s just conversation', type: 'B' },
        { text: 'A little guilty honestly', type: 'C' },
        { text: 'Relieved when it\'s over', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your friends would say you:',
      options: [
        { text: 'Always have the tea, keep them informed', type: 'A' },
        { text: 'Share interesting stuff, normal amount', type: 'B' },
        { text: 'Don\'t really gossip much', type: 'C' },
        { text: 'Refuse to engage in gossip', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest gossip frequency:',
      options: [
        { text: 'Daily. It\'s basically a hobby.', type: 'A' },
        { text: 'Sometimes, when there\'s something interesting', type: 'B' },
        { text: 'Rarely, try to avoid', type: 'C' },
        { text: 'Never if I can help it', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Tea Connoisseur',
      emoji: '☕',
      description: 'You LOVE gossip and you\'re not ashamed! You know everything about everyone, your group chat is always popping, and you live for "did you hear?" moments. Gossip is your love language.',
      traits: ['Gossip lover', 'Informed', 'Social', 'Tea collector'],
      strengths: ['Always in the know', 'Great at bonding through gossip', 'Entertaining'],
      weaknesses: ['Might hurt people', 'Trust issues if known', 'Can be toxic'],
      tips: ['Know the line between fun and harmful', 'Check if you\'d want this said about you', 'Information is power - use wisely'],
    },
    B: {
      type: 'B',
      title: 'The Casual Gossiper',
      emoji: '👀',
      description: 'You gossip like a normal human - some interest in drama, might share interesting news, but it\'s not your whole personality. You can take it or leave it. Balanced gossip energy.',
      traits: ['Normal', 'Balanced', 'Casual', 'Human'],
      strengths: ['Not obsessed', 'Can participate without being toxic'],
      weaknesses: ['Still gossiping sometimes'],
      tips: ['You\'re fine', 'Just be mindful', 'Normalness is underrated'],
    },
    C: {
      type: 'C',
      title: 'The Reluctant Listener',
      emoji: '😬',
      description: 'You don\'t love gossip but you sometimes end up in it. You try to avoid talking about others and feel a bit guilty when you do. You\'d rather talk about ideas than people.',
      traits: ['Reluctant', 'Guilty', 'Trying to avoid', 'Uncomfortable'],
      strengths: ['Conscience is active', 'Trustworthy'],
      weaknesses: ['Might seem less fun', 'Sometimes feels left out'],
      tips: ['Your discomfort is valid', 'You can redirect conversations', 'Trust your instincts'],
    },
    D: {
      type: 'D',
      title: 'The Gossip-Free Zone',
      emoji: '🤐',
      description: 'Gossip is not your thing at all. You don\'t talk about people behind their backs, you keep secrets, and drama exhausts you. You\'re either very principled or very private (or both).',
      traits: ['Private', 'Principled', 'Trustworthy', 'Drama-free'],
      strengths: ['People trust you completely', 'Above the fray', 'Peaceful existence'],
      weaknesses: ['Might miss social bonding', 'Could seem judgmental of gossips'],
      tips: ['Your integrity is admirable', 'Social bonding doesn\'t require gossip', 'You do you'],
    },
  },
};

export default testData;
