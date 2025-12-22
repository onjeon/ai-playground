// What Party Energy Do You Bring?
// Discover your role at social gatherings

import { TestData } from '@/types';

const testData: TestData = {
  id: 'social-party-energy',
  title: 'What Party Energy Do You Bring?',
  description: 'Are you the hype person, the quiet observer, the early leaver, or something else entirely? Find out what vibe you contribute to any gathering.',
  category: 'social',
  emoji: '🎉',
  color: 'from-yellow-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'A party invite comes in. Your initial reaction:',
      options: [
        { text: 'Yes! I\'m there, what\'s the dress code?', type: 'A' },
        { text: 'Sounds fun, who else is going?', type: 'B' },
        { text: 'How long do I have to stay?', type: 'C' },
        { text: 'Can I bring a plus-one so I\'m not alone?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You arrive at the party and you:',
      options: [
        { text: 'Make a memorable entrance, greet everyone loudly', type: 'A' },
        { text: 'Find friends and settle into a good conversation', type: 'B' },
        { text: 'Find a corner or the snacks to decompress', type: 'C' },
        { text: 'Stick close to whoever I came with', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Music comes on and the dance floor opens:',
      options: [
        { text: 'I\'m already there, leading the energy', type: 'A' },
        { text: 'I\'ll join if enough people are dancing', type: 'B' },
        { text: 'I\'m the one watching from the sidelines, vibing', type: 'C' },
        { text: 'Only if someone physically drags me', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'There\'s a lull in the party energy:',
      options: [
        { text: 'Time to suggest a game or change the music', type: 'A' },
        { text: 'Find a new conversation or introduce people', type: 'B' },
        { text: 'Finally, time to breathe', type: 'C' },
        { text: 'Is this a good time to leave?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Someone you don\'t know comes up to you:',
      options: [
        { text: 'Great! New friend opportunity, I lead the convo', type: 'A' },
        { text: 'Happy to chat, we find common ground', type: 'B' },
        { text: 'Polite small talk until I can gracefully exit', type: 'C' },
        { text: 'Slightly panicked but I manage', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'The host asks you to help with something:',
      options: [
        { text: 'Already on it - I\'ve been co-hosting anyway', type: 'A' },
        { text: 'Happy to help, good excuse to be useful', type: 'B' },
        { text: 'Sure, I like having a task to do', type: 'C' },
        { text: 'If it means I can avoid socializing, yes', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'It\'s 11 PM at a party that started at 8:',
      options: [
        { text: 'The night is YOUNG, we\'re just getting started', type: 'A' },
        { text: 'Having a good time, probably stay another hour', type: 'B' },
        { text: 'Wondering how to leave without being noticed', type: 'C' },
        { text: 'Already Irish goodbye\'d 30 minutes ago', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your party conversation style:',
      options: [
        { text: 'Story time! I have the floor and the jokes', type: 'A' },
        { text: 'Good back-and-forth, genuine interest in others', type: 'B' },
        { text: 'More of a listener, occasional input', type: 'C' },
        { text: 'Deep one-on-one over group chatter', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'The morning after a party:',
      options: [
        { text: 'Energized! When\'s the next one?', type: 'A' },
        { text: 'Had fun, need a chill day now', type: 'B' },
        { text: 'Recovering from being "on" all night', type: 'C' },
        { text: 'Relieved it\'s over, need a week to recover', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'People would describe you at parties as:',
      options: [
        { text: 'The life of the party', type: 'A' },
        { text: 'Fun and social', type: 'B' },
        { text: 'Chill and low-key', type: 'C' },
        { text: 'The mysterious one who left early', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Hype Machine',
      emoji: '🔥',
      description: 'You don\'t attend parties, you ARE the party. Your energy is contagious, you make things happen, and hosts love having you because you guarantee a good time. You leave everything on the dance floor.',
      traits: ['Energizing', 'Social', 'Fun', 'Memorable'],
      strengths: ['Creates great atmosphere', 'Never a dull moment', 'Makes everyone comfortable', 'Party MVP'],
      weaknesses: ['Can be overwhelming', 'Might overshadow others', 'Burns out eventually'],
      tips: ['You\'re a gift to gatherings', 'Make space for quieter folks', 'Your energy is valuable'],
    },
    B: {
      type: 'B',
      title: 'The Social Butterfly',
      emoji: '🦋',
      description: 'You work the room beautifully. Engaging conversations, connecting people, enjoying the social energy without dominating it. You\'re the ideal party guest - fun, present, and pleasant to everyone.',
      traits: ['Balanced', 'Engaging', 'Warm', 'Easy to be around'],
      strengths: ['Great at mingling', 'Makes others feel included', 'Adaptable to any group', 'Good energy'],
      weaknesses: ['Might spread yourself thin', 'Can miss deeper connections'],
      tips: ['You\'re doing great', 'Deep convos are valuable too', 'Your presence is appreciated'],
    },
    C: {
      type: 'C',
      title: 'The Selective Socializer',
      emoji: '🌙',
      description: 'You show up, you enjoy it on your terms, and you know your limits. Quality over quantity - you\'d rather have one great conversation than work the whole room. You bring calm, chill energy.',
      traits: ['Chill', 'Selective', 'Quality-focused', 'Self-aware'],
      strengths: ['Great at deep conversations', 'Not exhausting to be around', 'Knows their limits', 'Authentic presence'],
      weaknesses: ['Might miss opportunities', 'Can seem distant', 'Hard to get to know'],
      tips: ['Your energy is valid', 'Push slightly outside comfort zone sometimes', 'Leaving is always okay'],
    },
    D: {
      type: 'D',
      title: 'The Reluctant Attendee',
      emoji: '🚪',
      description: 'You came, you saw, you Irish goodbye\'d. Parties aren\'t your natural habitat but you show up when it matters. You probably know the host\'s pet better than most guests, and that\'s perfect.',
      traits: ['Introverted', 'Selective', 'Low-key', 'Authentic'],
      strengths: ['Great with close friends', 'Won\'t overstay welcome', 'Doesn\'t pretend', 'Genuine when present'],
      weaknesses: ['Might miss connections', 'Social anxiety is real', 'Hard at large gatherings'],
      tips: ['Small gatherings are valid', 'You don\'t have to stay long', 'Your presence matters even briefly'],
    },
  },
};

export default testData;
