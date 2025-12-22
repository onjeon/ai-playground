// Your Party Role
// What's your role at social gatherings?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-party-role',
  title: 'What\'s Your Party Personality?',
  description: 'Discover your role at social gatherings - life of the party, wallflower, or the one who leaves early?',
  category: 'personality',
  emoji: '🎊',
  color: 'from-purple-500 to-pink-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You walk into a party where you only know the host. You:',
      options: [
        { text: 'Start introducing myself to everyone', type: 'A' },
        { text: 'Find a small group and join their conversation', type: 'B' },
        { text: 'Stick close to the host or someone I know', type: 'C' },
        { text: 'Find a quiet corner and observe', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal party has:',
      options: [
        { text: 'Lots of people, music, and energy', type: 'A' },
        { text: 'A good mix of people with room to talk', type: 'B' },
        { text: 'Close friends in a comfortable setting', type: 'C' },
        { text: 'A couch and my phone honestly', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When the energy dips at a party, you:',
      options: [
        { text: 'Get everyone hyped up with a game or activity', type: 'A' },
        { text: 'Engage in a deeper conversation with someone', type: 'B' },
        { text: 'Go with the chill vibe', type: 'C' },
        { text: 'See this as my exit opportunity', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'At a party, you\'re most likely to be:',
      options: [
        { text: 'The center of attention somehow', type: 'A' },
        { text: 'In a great conversation with a few people', type: 'B' },
        { text: 'Helping the host or being supportive', type: 'C' },
        { text: 'Checking my phone or looking for the pet', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you leave a party, people usually:',
      options: [
        { text: 'Notice immediately - "Where are they going?!"', type: 'A' },
        { text: 'Say goodbye to the people I was talking to', type: 'B' },
        { text: 'May or may not notice, that\'s fine', type: 'C' },
        { text: 'I did the Irish exit - no goodbyes needed', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with party small talk:',
      options: [
        { text: 'I love it - it\'s how you meet people', type: 'A' },
        { text: 'I\'m good at it but prefer deeper convos', type: 'B' },
        { text: 'I struggle with it a bit', type: 'C' },
        { text: 'It\'s my nightmare honestly', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Dancing at parties:',
      options: [
        { text: 'First on the dance floor, last to leave', type: 'A' },
        { text: 'If the music is right and I\'m feeling it', type: 'B' },
        { text: 'Only with close friends or lots of liquid courage', type: 'C' },
        { text: 'Absolutely not happening', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'After a big party, you need:',
      options: [
        { text: 'More social time - I\'m energized!', type: 'A' },
        { text: 'Some quiet time but feeling good', type: 'B' },
        { text: 'A full day of recovery alone', type: 'C' },
        { text: 'A week before the next social event', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone pulls out a karaoke mic:',
      options: [
        { text: 'GIVE IT TO ME', type: 'A' },
        { text: 'Maybe a duet with someone', type: 'B' },
        { text: 'I\'ll be in the audience clapping', type: 'C' },
        { text: 'Time to find that quiet corner again', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest feeling about parties:',
      options: [
        { text: 'I live for them - best way to spend time', type: 'A' },
        { text: 'I enjoy them with the right crowd', type: 'B' },
        { text: 'They\'re okay but draining', type: 'C' },
        { text: 'I\'d almost always rather not', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Life of the Party',
      emoji: '🌟',
      description: 'You\'re the one everyone remembers! You bring the energy, start the fun, and make every gathering better. People genuinely look forward to seeing you at events.',
      traits: ['Extroverted', 'Energetic', 'Charismatic', 'Fun'],
      strengths: ['Makes parties fun', 'Easy to approach', 'Creates memories', 'Natural entertainer'],
      weaknesses: ['May not notice quieter guests', 'Can be overwhelming', 'Needs to recharge eventually'],
      tips: ['Check in on quieter friends', 'Not every moment needs energy', 'Quality connections matter too'],
    },
    B: {
      type: 'B',
      title: 'The Social Connector',
      emoji: '🤝',
      description: 'You\'re the perfect party guest! You can work the room but also have meaningful conversations. You make others feel included and comfortable. The balanced social butterfly.',
      traits: ['Balanced', 'Personable', 'Adaptable', 'Genuine'],
      strengths: ['Great at making connections', 'Comfortable in any group', 'Good listener AND talker', 'Makes others feel welcome'],
      weaknesses: ['May spread thin socially', 'Could go deeper with fewer people', 'Sometimes plays it too safe'],
      tips: ['Keep doing what you\'re doing', 'You\'re the ideal party guest', 'Balance is a superpower'],
    },
    C: {
      type: 'C',
      title: 'The Cozy Companion',
      emoji: '☕',
      description: 'You prefer quality over quantity in social settings. You show up, find your people, and enjoy more intimate moments. Big parties aren\'t your thing but you make great connections.',
      traits: ['Loyal', 'Supportive', 'Intimate', 'Comfortable'],
      strengths: ['Deep friendships', 'Great one-on-one', 'Supportive presence', 'Genuine connections'],
      weaknesses: ['May miss meeting new people', 'Could seem clique-ish', 'Social stamina limited'],
      tips: ['Push yourself occasionally', 'New friends are worth the awkwardness', 'You bring value to groups'],
    },
    D: {
      type: 'D',
      title: 'The Reluctant Attendee',
      emoji: '🚪',
      description: 'Parties drain you and you know it. You show up when you have to but you\'re always ready to leave. Home is where your heart is - and your comfy clothes and peace.',
      traits: ['Introverted', 'Independent', 'Selective', 'Honest'],
      strengths: ['Knows yourself well', 'Values alone time', 'Avoids superficial interactions', 'Genuine when you do engage'],
      weaknesses: ['May miss out on connections', 'Could seem antisocial', 'Self-isolating tendency'],
      tips: ['Some events are worth the discomfort', 'Set a time limit and leave when done', 'You might surprise yourself'],
    },
  },
};

export default testData;
