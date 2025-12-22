// Your Social Battery Level
// How much people time can you handle?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-social-battery',
  title: 'What\'s Your Social Battery Level?',
  description: 'From party animal to professional hermit - discover how much social interaction you can really handle before needing a recharge.',
  category: 'personality',
  emoji: '🔋',
  color: 'from-purple-500 to-pink-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You have a full weekend with no plans. Your ideal scenario:',
      options: [
        { text: 'Fill it with social events - the more the merrier', type: 'A' },
        { text: 'One or two hangouts with downtime between', type: 'B' },
        { text: 'Maybe one low-key thing, mostly solo time', type: 'C' },
        { text: 'Guard that alone time with my life', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'At a party, you\'re usually:',
      options: [
        { text: 'Working the room, meeting everyone new', type: 'A' },
        { text: 'Having great conversations in groups', type: 'B' },
        { text: 'Found in a corner having a deep talk with one person', type: 'C' },
        { text: 'Calculating how long until I can leave without being rude', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'A friend invites you to hang out last minute. Your reaction:',
      options: [
        { text: 'Yes! Spontaneous plans are the best', type: 'A' },
        { text: 'Sure, if I\'m not already doing something', type: 'B' },
        { text: 'Maybe, let me mentally prepare first', type: 'C' },
        { text: 'I need at least 48 hours notice for social events', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'After a social event, you need:',
      options: [
        { text: 'Another event! Where\'s everyone going next?', type: 'A' },
        { text: 'A quiet evening at home to wind down', type: 'B' },
        { text: 'At least a day to fully recover', type: 'C' },
        { text: 'A week of solitude in a cave', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your phone rings with an unexpected call. You:',
      options: [
        { text: 'Answer excitedly - I love calls!', type: 'A' },
        { text: 'Answer if it\'s someone close', type: 'B' },
        { text: 'Let it ring and text back later', type: 'C' },
        { text: 'Feel personally attacked by the audacity', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How many social plans per week is ideal for you?',
      options: [
        { text: '5+ - I need people energy', type: 'A' },
        { text: '2-4 - a good balance', type: 'B' },
        { text: '1-2 max - quality over quantity', type: 'C' },
        { text: 'Does grocery shopping count?', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your friends describe you as:',
      options: [
        { text: 'The one who\'s always down to hang', type: 'A' },
        { text: 'Reliable and social when available', type: 'B' },
        { text: 'Hard to pin down but worth the wait', type: 'C' },
        { text: '"We haven\'t seen you in forever"', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Working in an open office environment sounds:',
      options: [
        { text: 'Great! I thrive on collaborative energy', type: 'A' },
        { text: 'Fine, as long as I have headphones', type: 'B' },
        { text: 'Challenging - I need quiet to focus', type: 'C' },
        { text: 'Like my personal nightmare', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your canceled plans reaction:',
      options: [
        { text: 'Disappointed - I was looking forward to it', type: 'A' },
        { text: 'A little bummed but will find something else', type: 'B' },
        { text: 'Secretly relieved but won\'t admit it', type: 'C' },
        { text: 'Best news I\'ve heard all day', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ideal vacation involves:',
      options: [
        { text: 'Group trip with lots of activities and people', type: 'A' },
        { text: 'A mix of social and solo activities', type: 'B' },
        { text: 'One good travel companion and quiet exploration', type: 'C' },
        { text: 'Solo trip where no one knows my name', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Human Energizer Bunny',
      emoji: '⚡',
      description: 'Your social battery runs on people energy. Alone time? Never heard of her. You thrive in crowds, love spontaneous plans, and honestly can\'t understand why anyone would cancel plans. You ARE the energy.',
      traits: ['Extroverted', 'Energetic', 'Social', 'Spontaneous'],
      strengths: ['Never lonely', 'Natural networker', 'Brings energy everywhere', 'Easy to make plans with'],
      weaknesses: ['May overwhelm others', 'Doesn\'t understand introverts', 'Can\'t sit still'],
      tips: ['Check in on quieter friends', 'Alone time can be healing', 'Not everyone has your energy'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Battery',
      emoji: '🔋',
      description: 'You\'ve cracked the code - enough social time to feel connected, enough alone time to stay sane. You recharge with a mix of both and know when to say yes and when to protect your energy.',
      traits: ['Ambivert', 'Self-aware', 'Balanced', 'Adaptable'],
      strengths: ['Understands both introverts and extroverts', 'Knows their limits', 'Flexible social schedule', 'Great friend to all types'],
      weaknesses: ['Can feel pulled in both directions', 'Sometimes hard to choose', 'May overcommit sometimes'],
      tips: ['Trust your instincts', 'Your balance is enviable', 'Keep checking in with yourself'],
    },
    C: {
      type: 'C',
      title: 'The Selective Socializer',
      emoji: '🏠',
      description: 'Quality over quantity is your mantra. You love your people, but in small doses. Your social battery is valuable - you only spend it on things worth your energy. And that\'s perfectly valid.',
      traits: ['Introverted', 'Selective', 'Deep connector', 'Energy-conscious'],
      strengths: ['Meaningful friendships', 'Great listener', 'Self-aware boundaries', 'Quality time person'],
      weaknesses: ['May miss out on new connections', 'Friends want more of you', 'Can seem aloof'],
      tips: ['Push yourself occasionally', 'New people can surprise you', 'Your friends value your presence'],
    },
    D: {
      type: 'D',
      title: 'The Professional Hermit',
      emoji: '🐚',
      description: 'Social energy? You\'re running on fumes. Your ideal weekend is just you, maybe a pet, and absolute silence. You recharge in solitude and honestly, people are exhausting. You\'ve accepted this about yourself.',
      traits: ['Deeply introverted', 'Independent', 'Self-sufficient', 'Boundary-setter'],
      strengths: ['Rich inner life', 'Comfortable alone', 'Self-entertaining', 'Strong boundaries'],
      weaknesses: ['May isolate too much', 'Friends worry about you', 'Could miss opportunities'],
      tips: ['Some social contact is healthy', 'Start small - one friend, one hour', 'The outside world has its moments'],
    },
  },
};

export default testData;
