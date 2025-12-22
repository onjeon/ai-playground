// What Emoji Are You?
// If you were an emoji, which one would you be?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-emoji-personality',
  title: 'What Emoji Are You?',
  description: 'If your personality was an emoji, which one would perfectly capture your vibe?',
  category: 'random',
  emoji: '🙃',
  color: 'from-yellow-500 to-amber-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your default mood:',
      options: [
        { text: 'Chaotic, unpredictable, a little unhinged', type: 'A' },
        { text: 'Loving, supportive, always there', type: 'B' },
        { text: 'Chill, relaxed, vibing', type: 'C' },
        { text: 'Ambitious, determined, on fire', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you react to drama?',
      options: [
        { text: 'Grab popcorn and enjoy the show', type: 'A' },
        { text: 'Try to help everyone get along', type: 'B' },
        { text: 'Stay out of it, keep my peace', type: 'C' },
        { text: 'Handle it head-on, no time for mess', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your texting style:',
      options: [
        { text: 'Sarcastic, unhinged, meme-heavy', type: 'A' },
        { text: 'Lots of hearts and support', type: 'B' },
        { text: 'Chill, easy-going, probably just "nice"', type: 'C' },
        { text: 'Direct, efficient, get to the point', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'At a party, you\'re:',
      options: [
        { text: 'The chaotic energy everyone feeds off', type: 'A' },
        { text: 'Making sure everyone is having a good time', type: 'B' },
        { text: 'Vibing in the corner, enjoying the atmosphere', type: 'C' },
        { text: 'Probably didn\'t come, I have goals to crush', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your energy when things go wrong:',
      options: [
        { text: 'Laugh at the chaos, it\'s all a joke anyway', type: 'A' },
        { text: 'Comfort others, we\'ll get through this', type: 'B' },
        { text: 'Stay calm, things will work out', type: 'C' },
        { text: 'Fix it immediately, no time to waste', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your friend group role:',
      options: [
        { text: 'The chaotic one who makes things interesting', type: 'A' },
        { text: 'The supportive one who loves everyone', type: 'B' },
        { text: 'The chill one who just goes with the flow', type: 'C' },
        { text: 'The driven one with plans and ambition', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Monday mornings feel like:',
      options: [
        { text: 'A joke - is this really my life?', type: 'A' },
        { text: 'Another chance to spread positivity', type: 'B' },
        { text: 'Whatever, I\'ll get through it', type: 'C' },
        { text: 'Let\'s GO, I have things to accomplish', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your life mantra:',
      options: [
        { text: '"It be like that sometimes"', type: 'A' },
        { text: '"Love always wins"', type: 'B' },
        { text: '"Good vibes only"', type: 'C' },
        { text: '"Work hard, play hard"', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'People describe your vibe as:',
      options: [
        { text: 'Unhinged but in the best way', type: 'A' },
        { text: 'Warm, loving, a safe space', type: 'B' },
        { text: 'Relaxed, peaceful, easy-going', type: 'C' },
        { text: 'Intense, focused, inspiring', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ideal caption for life:',
      options: [
        { text: '"Chaos coordinator"', type: 'A' },
        { text: '"Sending love and good vibes"', type: 'B' },
        { text: '"Just vibin\'"', type: 'C' },
        { text: '"On my grind"', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: '💀 The Skull',
      emoji: '💀',
      description: 'You\'re the SKULL emoji - chaotic, unhinged, and finding dark humor in everything. "I\'m dead" is your response to anything remotely funny. You thrive in chaos and nothing phases you anymore.',
      traits: ['Chaotic', 'Unhinged', 'Dark humor', 'Unpredictable'],
      strengths: ['Makes anything funny', 'Can\'t be shocked', 'Great in crisis', 'Iconic energy'],
      weaknesses: ['Might be TOO chaotic', 'Sometimes people worry about you'],
      tips: ['Your chaos brings joy', 'Embrace your unhinged self', 'Never change'],
    },
    B: {
      type: 'B',
      title: '🥹 The Happy Tears',
      emoji: '🥹',
      description: 'You\'re the HAPPY TEARS emoji - overwhelmed with love and emotion. You cry at commercials, root for everyone, and feel deeply. Your heart is huge and you\'re not afraid to show it.',
      traits: ['Emotional', 'Loving', 'Supportive', 'Soft'],
      strengths: ['Makes everyone feel loved', 'Deep emotional connection', 'Pure heart'],
      weaknesses: ['Might cry at everything', 'Feels too much'],
      tips: ['Your love heals people', 'It\'s okay to be soft', 'Keep being you'],
    },
    C: {
      type: 'C',
      title: '😌 The Peaceful Face',
      emoji: '😌',
      description: 'You\'re the PEACEFUL face emoji - calm, collected, and unbotherabIe. Drama doesn\'t reach you in your bubble of serenity. You\'ve achieved inner peace and nothing can shake you.',
      traits: ['Chill', 'Peaceful', 'Zen', 'Unbothered'],
      strengths: ['Nothing phases you', 'Calming presence', 'Great energy', 'No drama'],
      weaknesses: ['Might seem detached', 'Could engage more'],
      tips: ['Your peace is powerful', 'Share your calm with others', 'Keep vibing'],
    },
    D: {
      type: 'D',
      title: '🔥 The Fire',
      emoji: '🔥',
      description: 'You\'re the FIRE emoji - passionate, driven, and always on your grind. Everything you do is hot. You\'re inspiring, ambitious, and people want what you\'ve got. You\'re literally on fire.',
      traits: ['Driven', 'Passionate', 'Hot', 'Ambitious'],
      strengths: ['Inspires everyone', 'Gets results', 'Undeniable energy', 'A force'],
      weaknesses: ['Might burn out', 'Hard to keep up with'],
      tips: ['Your fire is contagious', 'Rest is productive too', 'Keep burning bright'],
    },
  },
};

export default testData;
