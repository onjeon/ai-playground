// What Kind of Roommate Are You?
// The truth about your living habits!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-roommate-type',
  title: 'What Kind of Roommate Are You?',
  description: 'Discover your roommate personality - the good, the bad, and the messy!',
  category: 'fun',
  emoji: '🏠',
  color: 'from-amber-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'The dishes have been in the sink for 2 days. You:',
      options: [
        { text: 'Already washed them after they were there for 2 hours', type: 'A' },
        { text: 'Do them when I need a clean dish', type: 'B' },
        { text: 'Wait for someone else to crack first', type: 'C' },
        { text: 'What dishes? I don\'t see dishes.', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal living situation noise level:',
      options: [
        { text: 'Quiet hours strictly enforced', type: 'A' },
        { text: 'Reasonable noise during reasonable hours', type: 'B' },
        { text: 'I like some background life happening', type: 'C' },
        { text: 'Spontaneous dance parties should always be possible', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Sharing food with roommates:',
      options: [
        { text: 'Everything labeled, my shelf is MY shelf', type: 'A' },
        { text: 'Share some basics, keep the good stuff separate', type: 'B' },
        { text: 'Open to sharing but expect reciprocation', type: 'C' },
        { text: 'What\'s mine is yours! (and vice versa, hopefully)', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Guests and visitors:',
      options: [
        { text: 'Need 48 hours notice minimum', type: 'A' },
        { text: 'A heads up is appreciated', type: 'B' },
        { text: 'Feel free, just don\'t be weird about it', type: 'C' },
        { text: 'The more the merrier! Open door policy!', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'The thermostat is set to:',
      options: [
        { text: 'One temperature, never changed, don\'t touch it', type: 'A' },
        { text: 'Reasonable range depending on season', type: 'B' },
        { text: 'Whatever feels right in the moment', type: 'C' },
        { text: 'Full blast AC in summer, sauna in winter, no regrets', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Common area cleanliness:',
      options: [
        { text: 'Spotless at all times, I have a cleaning schedule', type: 'A' },
        { text: 'Reasonably clean, picked up regularly', type: 'B' },
        { text: '"Lived in" is a style', type: 'C' },
        { text: 'We\'ll do a deep clean when someone\'s coming over', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Communicating about issues:',
      options: [
        { text: 'House meeting with agenda items', type: 'A' },
        { text: 'Direct but friendly conversation', type: 'B' },
        { text: 'Drop hints and hope they get it', type: 'C' },
        { text: 'Passive aggressive notes (or just ignore it)', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your bathroom habits:',
      options: [
        { text: 'Everything has its place, cleaned regularly', type: 'A' },
        { text: 'Reasonably organized, basic upkeep', type: 'B' },
        { text: 'Functional chaos but I know where everything is', type: 'C' },
        { text: 'I live here, it\'s going to look lived-in', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Splitting bills and expenses:',
      options: [
        { text: 'Spreadsheet, exact splits, payment reminders', type: 'A' },
        { text: 'Venmo requests within a reasonable timeframe', type: 'B' },
        { text: 'It all evens out eventually', type: 'C' },
        { text: 'Wait, we were keeping track?', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How social are you with roommates?',
      options: [
        { text: 'We coexist respectfully, minimal interaction needed', type: 'A' },
        { text: 'Friendly! Occasional hangouts, dinners together', type: 'B' },
        { text: 'Best friend vibes, doing everything together', type: 'C' },
        { text: 'Party house energy, always something happening', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Type-A Roommate',
      emoji: '📋',
      description: 'You have systems, schedules, and standards. The chore chart is color-coded, the fridge is organized, and you\'ve sent at least one email about "household expectations." You\'re the roommate people need but sometimes find... intense.',
      traits: ['Organized', 'Clean', 'Particular', 'Reliable'],
      strengths: ['House is always clean', 'Bills paid on time', 'Structure and order'],
      weaknesses: ['Can be rigid', 'Might stress others out', 'Needs to relax sometimes'],
      tips: ['Not everyone operates like you', 'Flexibility is okay', 'Some mess won\'t kill you'],
    },
    B: {
      type: 'B',
      title: 'The Ideal Roommate',
      emoji: '🏆',
      description: 'You\'re the roommate everyone wants! Clean enough, social enough, flexible enough. You communicate well, respect boundaries, and pull your weight. If there was a roommate award, you\'d win it.',
      traits: ['Balanced', 'Respectful', 'Communicative', 'Easy-going'],
      strengths: ['Everyone likes living with you', 'Good boundaries', 'Fair and reasonable'],
      weaknesses: ['Might enable messier roommates', 'Too accommodating sometimes'],
      tips: ['Keep doing what you\'re doing', 'Speak up when needed', 'You set a good standard'],
    },
    C: {
      type: 'C',
      title: 'The Chill Roommate',
      emoji: '😌',
      description: 'You\'re easy to live with because you just... don\'t stress. Dishes can wait, mess is fine, vibes are good. You might not be the cleanest, but you\'re fun and drama-free. The laid-back one.',
      traits: ['Relaxed', 'Flexible', 'Fun', 'Unbothered'],
      strengths: ['No drama', 'Adaptable', 'Good vibes', 'Fun to be around'],
      weaknesses: ['Might not pull full weight', 'Relies on others to set standards', 'Could be cleaner'],
      tips: ['Do your dishes before they\'re mad', 'Initiative is appreciated', 'Step up occasionally'],
    },
    D: {
      type: 'D',
      title: 'The Chaotic Roommate',
      emoji: '🌪️',
      description: 'You\'re a force of nature in your living space. Always something happening, not great with schedules or cleaning, but you make it fun? Your roommates either love the energy or are drafting a passive-aggressive note right now.',
      traits: ['Spontaneous', 'Social', 'Messy', 'Unpredictable'],
      strengths: ['Fun atmosphere', 'Never boring', 'Flexible', 'Good stories'],
      weaknesses: ['Bills might be late', 'Dishes definitely are', 'Might stress organized roommates'],
      tips: ['Basic respect goes far', 'Clean up after yourself', 'Your roommates have limits'],
    },
  },
};

export default testData;
