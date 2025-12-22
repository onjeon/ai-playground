// Are You More Millennial or Gen Z?
// Your age doesn't matter - your vibes do!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-millennial-zoomer',
  title: 'Are You More Millennial or Gen Z?',
  description: 'Forget your birth year - are you giving Millennial or Gen Z energy?',
  category: 'fun',
  emoji: '📱',
  color: 'from-cyan-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your go-to social media platform:',
      options: [
        { text: 'Instagram - still the best for posting', type: 'A' },
        { text: 'Facebook - for events and groups mostly', type: 'B' },
        { text: 'TikTok - obviously', type: 'C' },
        { text: 'BeReal or whatever\'s newest', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your reaction to "💀" in a text:',
      options: [
        { text: 'Is someone dying??? Are they okay???', type: 'B' },
        { text: 'Oh they\'re laughing really hard', type: 'A' },
        { text: 'Same, it\'s the only way to express laughter', type: 'C' },
        { text: 'Already moved on to newer expressions', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Side part or middle part?',
      options: [
        { text: 'Side part forever, pry it from my cold hands', type: 'B' },
        { text: 'I switched to middle part but feel weird about it', type: 'A' },
        { text: 'Middle part - side parts are so old', type: 'C' },
        { text: 'Whatever looks good? Hair is hair?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your thoughts on skinny jeans:',
      options: [
        { text: 'Still wearing them, still love them', type: 'B' },
        { text: 'Slowly transitioning to baggier fits', type: 'A' },
        { text: 'Wide leg or nothing', type: 'C' },
        { text: 'Wear what you want, trends are whatever', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you consume content?',
      options: [
        { text: 'YouTube videos and podcasts', type: 'B' },
        { text: 'Mix of everything honestly', type: 'A' },
        { text: 'Short-form only - TikToks and Reels', type: 'C' },
        { text: 'Whatever the algorithm serves me', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your communication style:',
      options: [
        { text: 'Full sentences with proper punctuation.', type: 'B' },
        { text: 'Casual but I still use some emojis normally', type: 'A' },
        { text: 'no caps minimal punctuation chaos energy', type: 'C' },
        { text: 'Voice memos and video messages supremacy', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your relationship with Harry Potter:',
      options: [
        { text: 'Core part of my identity, sorted into a house forever ago', type: 'B' },
        { text: 'Was into it but complicated feelings now', type: 'A' },
        { text: 'Never really got into it', type: 'C' },
        { text: 'Aware of the discourse, moved on', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When someone says "cheugy":',
      options: [
        { text: 'What does that even mean?', type: 'B' },
        { text: 'I know what it means and fear I might be it', type: 'A' },
        { text: 'Classic cheugy energy', type: 'C' },
        { text: 'That word is already outdated', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your work/life philosophy:',
      options: [
        { text: 'Work hard now, enjoy life eventually', type: 'B' },
        { text: 'Trying to find work-life balance', type: 'A' },
        { text: 'Quiet quitting energy - boundaries first', type: 'C' },
        { text: 'Side hustles, passive income, freedom', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel about generational labels?',
      options: [
        { text: 'I\'m proud of my generation\'s quirks', type: 'B' },
        { text: 'Interesting sociologically but not that deep', type: 'A' },
        { text: 'They\'re kind of cringe but also accurate', type: 'C' },
        { text: 'Labels are for brands, not people', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Millennial-Zoomer Hybrid',
      emoji: '🤝',
      description: 'You\'re the bridge generation! You understand both sides, code-switch between 💀 and 😂, and have adapted to middle parts while mourning side parts. You\'re fluent in both generational dialects.',
      traits: ['Adaptable', 'Culturally bilingual', 'Bridge-builder', 'Flexible'],
      strengths: ['Understands everyone', 'Can hang with both groups', 'Culturally aware', 'Adaptable'],
      weaknesses: ['Identity crisis sometimes', 'Caught between trends', 'Never fully either'],
      tips: ['Your versatility is a strength', 'Be the translator', 'Enjoy both worlds'],
    },
    B: {
      type: 'B',
      title: 'Millennial Through and Through',
      emoji: '🥑',
      description: 'You remember a world before smartphones, you\'ve defended your skinny jeans, and your avocado toast game is strong. You\'re a true millennial and honestly, Gen Z\'s "old" jokes can\'t hurt you.',
      traits: ['Nostalgic', 'Established', 'Self-aware', 'Resilient'],
      strengths: ['Knows who you are', 'Survived multiple "you\'re old" moments', 'Stable identity'],
      weaknesses: ['Might be out of touch', 'Confused by new slang', 'Still emotionally attached to 2010s'],
      tips: ['Stay curious about new trends', 'Your era was iconic', 'Adapt but don\'t lose yourself'],
    },
    C: {
      type: 'C',
      title: 'Gen Z Energy',
      emoji: '⚡',
      description: 'You\'re serving Gen Z realness. Your humor is unhinged, your attention span is optimized, and you were born for the TikTok era. You probably think millennials are cringe (and you might be right).',
      traits: ['Trendy', 'Online', 'Chaotic', 'Current'],
      strengths: ['Culturally relevant', 'Quick-witted', 'Tech native', 'Trend-aware'],
      weaknesses: ['Might age out of trends fast', 'Attention span struggles', 'Every generation gets old eventually'],
      tips: ['Enjoy your moment', 'Be kind to millennials', 'Your turn will come'],
    },
    D: {
      type: 'D',
      title: 'Post-Generational',
      emoji: '🌐',
      description: 'You\'ve transcended generational discourse. Labels? Don\'t know them. Trends? You set them and move on. You exist outside the Millennial-Gen Z spectrum in your own category.',
      traits: ['Trendsetter', 'Individual', 'Forward-thinking', 'Unbothered'],
      strengths: ['Not confined by labels', 'Always ahead', 'Authentic', 'Independent thinker'],
      weaknesses: ['Might seem aloof', 'Hard to categorize', 'Sometimes miss shared cultural moments'],
      tips: ['Stay connected to people', 'Shared experiences matter', 'You do you'],
    },
  },
};

export default testData;
