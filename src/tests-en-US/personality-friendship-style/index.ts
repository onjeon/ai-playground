// Your Friendship Style
// How do you maintain relationships?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-friendship-style',
  title: 'What\'s Your Friendship Style?',
  description: 'Discover how you connect with friends - are you the planner, the listener, or the long-distance champion?',
  category: 'personality',
  emoji: '👯',
  color: 'from-pink-500 to-purple-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your friend circle is best described as:',
      options: [
        { text: 'Large with many different friend groups', type: 'A' },
        { text: 'Medium-sized with a few close ones', type: 'B' },
        { text: 'Small but incredibly tight-knit', type: 'C' },
        { text: 'Just a few people I really trust', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you usually initiate hanging out?',
      options: [
        { text: 'I\'m always planning group activities', type: 'A' },
        { text: 'I reach out when I want to catch up', type: 'B' },
        { text: 'I wait for others to make plans usually', type: 'C' },
        { text: 'We have standing plans or just show up', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'A friend is going through a hard time. You:',
      options: [
        { text: 'Organize friends to help and be there', type: 'A' },
        { text: 'Reach out and offer to talk or help', type: 'B' },
        { text: 'Send a heartfelt message and check in', type: 'C' },
        { text: 'Drop everything and show up', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How often do you talk to close friends?',
      options: [
        { text: 'Daily or almost daily in group chats', type: 'A' },
        { text: 'Several times a week', type: 'B' },
        { text: 'Weekly or when something comes up', type: 'C' },
        { text: 'We can go months but pick up right where we left off', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When making new friends, you:',
      options: [
        { text: 'Easily connect with lots of people', type: 'A' },
        { text: 'Open up once I get to know them', type: 'B' },
        { text: 'Take a while to really trust someone', type: 'C' },
        { text: 'Rarely add new close friends', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'In your friend group, you\'re known as:',
      options: [
        { text: 'The one who brings everyone together', type: 'A' },
        { text: 'The reliable one who shows up', type: 'B' },
        { text: 'The good listener and advice giver', type: 'C' },
        { text: 'The one who\'s always been there', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When a friendship feels one-sided:',
      options: [
        { text: 'I address it directly and try to fix it', type: 'A' },
        { text: 'I pull back and see if they notice', type: 'B' },
        { text: 'I give them space and hope it improves', type: 'C' },
        { text: 'I accept that friendships ebb and flow', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your ideal hangout looks like:',
      options: [
        { text: 'Big group activities - the more the merrier', type: 'A' },
        { text: 'Dinner or drinks with a few friends', type: 'B' },
        { text: 'One-on-one quality time', type: 'C' },
        { text: 'Low-key at home doing nothing together', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you handle friend drama?',
      options: [
        { text: 'Try to mediate and bring people together', type: 'A' },
        { text: 'Stay neutral and support both sides', type: 'B' },
        { text: 'Avoid getting involved if possible', type: 'C' },
        { text: 'I somehow avoid drama entirely', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your approach to long-distance friendships:',
      options: [
        { text: 'Group video calls and planned reunions', type: 'A' },
        { text: 'Regular texts and occasional calls', type: 'B' },
        { text: 'Occasional check-ins but always there', type: 'C' },
        { text: 'We reconnect whenever we can and it\'s great', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Social Butterfly',
      emoji: '🦋',
      description: 'You\'re the friend who brings people together! You maintain a large social network and love group activities. You\'re everyone\'s connector and planner.',
      traits: ['Extroverted', 'Organized', 'Inclusive', 'Energetic'],
      strengths: ['Brings friends together', 'Great at planning', 'Wide social network', 'Natural connector'],
      weaknesses: ['May spread thin', 'Deeper connections might suffer', 'Can be exhausting'],
      tips: ['Nurture a few close friendships', 'Quality over quantity sometimes', 'Make time for one-on-one'],
    },
    B: {
      type: 'B',
      title: 'The Reliable Friend',
      emoji: '🌟',
      description: 'You\'re the friend everyone can count on! You maintain friendships with consistent effort and show up when it matters. You balance social time with personal space.',
      traits: ['Reliable', 'Balanced', 'Thoughtful', 'Consistent'],
      strengths: ['Trustworthy friend', 'Good at maintaining relationships', 'Shows up when needed', 'Balanced approach'],
      weaknesses: ['Could reach out more', 'May be too cautious', 'Sometimes waits for others'],
      tips: ['Take initiative more often', 'Your reliability is valued', 'Keep doing what you\'re doing'],
    },
    C: {
      type: 'C',
      title: 'The Deep Connector',
      emoji: '💎',
      description: 'You value depth over breadth in friendships. You may have fewer friends, but the ones you have are ride-or-die. Your friendships are meaningful and lasting.',
      traits: ['Loyal', 'Deep', 'Selective', 'Trustworthy'],
      strengths: ['Deep meaningful friendships', 'Great listener', 'Fiercely loyal', 'High-quality connections'],
      weaknesses: ['May miss out on new connections', 'Can seem closed off', 'Takes long to trust'],
      tips: ['Stay open to new people', 'Your depth is a gift', 'Sometimes surface fun is okay too'],
    },
    D: {
      type: 'D',
      title: 'The Timeless Friend',
      emoji: '⏰',
      description: 'Distance and time mean nothing to your friendships! You can go months without talking but pick up like no time passed. Your friendships are low-maintenance but high-quality.',
      traits: ['Independent', 'Loyal', 'Low-maintenance', 'Timeless'],
      strengths: ['Friendships survive anything', 'No pressure or expectations', 'True connection', 'Easy to be friends with'],
      weaknesses: ['May seem distant', 'Could reach out more', 'Might lose touch accidentally'],
      tips: ['Check in occasionally', 'Some effort shows you care', 'Your friends love you anyway'],
    },
  },
};

export default testData;
