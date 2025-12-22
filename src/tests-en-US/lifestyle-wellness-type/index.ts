// What Type of Wellness Person Are You?
// Discover your approach to health and self-care

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-wellness-type',
  title: 'What Type of Wellness Person Are You?',
  description: 'Green juice devotee? Cozy self-care queen? Or blissfully ignoring wellness culture? Find your wellness personality.',
  category: 'lifestyle',
  emoji: '🧘',
  color: 'from-green-400 to-emerald-500',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your morning wellness routine:',
      options: [
        { text: 'Cold plunge, meditation, journaling, green juice', type: 'A' },
        { text: 'Some intentional practices - stretching, tea, quiet time', type: 'B' },
        { text: 'Coffee counts as self-care right?', type: 'C' },
        { text: 'Getting out of bed IS the routine', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your relationship with supplements:',
      options: [
        { text: 'Curated stack, research-backed, daily ritual', type: 'A' },
        { text: 'A few basics - vitamin D, maybe magnesium', type: 'B' },
        { text: 'Own some, take them inconsistently', type: 'C' },
        { text: 'What my body needs is pizza', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Meditation or mindfulness:',
      options: [
        { text: 'Daily practice, various techniques, maybe retreats', type: 'A' },
        { text: 'Sometimes, when I remember or need it', type: 'B' },
        { text: 'My meditation is scrolling TikTok', type: 'C' },
        { text: 'Tried it once, my brain wouldn\'t shut up', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your thoughts on "clean eating":',
      options: [
        { text: 'Whole foods, organic when possible, mindful eating', type: 'A' },
        { text: 'Generally healthy but not restrictive', type: 'B' },
        { text: 'Balance means pizza AND salad', type: 'C' },
        { text: 'I eat what I want when I want it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Wellness influencers:',
      options: [
        { text: 'Follow several, get good tips and motivation', type: 'A' },
        { text: 'Some, but with healthy skepticism', type: 'B' },
        { text: 'The algorithm shows me some, I scroll past', type: 'C' },
        { text: 'A lot of it seems like a scam honestly', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your self-care looks like:',
      options: [
        { text: 'Holistic practice - physical, mental, spiritual', type: 'A' },
        { text: 'Bath, candles, skincare, cozy time', type: 'B' },
        { text: 'Whatever feels good in the moment', type: 'C' },
        { text: 'Existing is self-care', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your water intake:',
      options: [
        { text: 'Tracked, optimized, emotional support water bottle', type: 'A' },
        { text: 'Good - I drink plenty throughout the day', type: 'B' },
        { text: 'Some, not as much as I should', type: 'C' },
        { text: 'Coffee is mostly water right?', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you\'re stressed:',
      options: [
        { text: 'Breath work, yoga, or my wellness toolkit', type: 'A' },
        { text: 'Walk, bath, or other calming activities', type: 'B' },
        { text: 'Comfort food and maybe a nap', type: 'C' },
        { text: 'Push through or ignore it', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your thoughts on wellness trends:',
      options: [
        { text: 'Research them, try what resonates', type: 'A' },
        { text: 'Curious but skeptical', type: 'B' },
        { text: 'Most seem excessive', type: 'C' },
        { text: 'Marketing in disguise', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Honestly, your relationship with wellness culture:',
      options: [
        { text: 'It\'s a lifestyle - I\'m all in', type: 'A' },
        { text: 'Take what works, leave the rest', type: 'B' },
        { text: 'Peripheral awareness, minimal participation', type: 'C' },
        { text: 'Largely reject it', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Wellness Warrior',
      emoji: '🥬',
      description: 'Wellness is your lifestyle. Morning routines, supplement stacks, clean eating, and mindfulness - you\'re fully invested in optimizing your health. Your Instagram aesthetic is probably green and beige.',
      traits: ['Health-focused', 'Disciplined', 'Trend-aware', 'Committed'],
      strengths: ['Takes health seriously', 'Knowledgeable', 'Consistent practices', 'Feels great (probably)'],
      weaknesses: ['Can be excessive', 'Expensive habits', 'Might judge others'],
      tips: ['Balance is also wellness', 'Not everything needs optimizing', 'Pizza is also valid'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Well-Being Seeker',
      emoji: '🌿',
      description: 'You care about your health but you\'re not making it your whole personality. Some good habits, some treats, and generally feeling okay. You\'ve found the sustainable middle ground most of us aspire to.',
      traits: ['Balanced', 'Practical', 'Moderate', 'Sustainable'],
      strengths: ['Healthy without obsession', 'Sustainable habits', 'Enjoys life', 'Not extreme'],
      weaknesses: ['Could push further sometimes', 'Might lack structure'],
      tips: ['This is the way', 'Your approach is healthy', 'Keep the balance'],
    },
    C: {
      type: 'C',
      title: 'The Casual Self-Carer',
      emoji: '🛁',
      description: 'Wellness exists in your awareness but isn\'t dominating your life. You do what feels good when you remember, and that\'s enough. Self-care is a bubble bath and guilty pleasures, not optimization.',
      traits: ['Relaxed', 'Intuitive', 'Non-prescriptive', 'Comfort-focused'],
      strengths: ['No wellness anxiety', 'Does what feels good', 'Not stressed about health', 'Authentic'],
      weaknesses: ['Missing some benefits', 'Could be more intentional', 'Health might suffer'],
      tips: ['Your approach is valid', 'Some basics really help', 'Find what works for YOU'],
    },
    D: {
      type: 'D',
      title: 'The Wellness Skeptic',
      emoji: '🙃',
      description: 'You see through the wellness industrial complex. Cold plunges, jade rollers, and adaptogenic mushrooms? Probably marketing. You\'re either refreshingly real or in denial about self-care. Maybe both.',
      traits: ['Skeptical', 'Independent', 'Anti-trend', 'Real'],
      strengths: ['Not scammed by fads', 'Authentic to yourself', 'Questions everything', 'Saves money'],
      weaknesses: ['Might miss good practices', 'Some wellness is actually helpful', 'Health matters though'],
      tips: ['Some practices actually work', 'Skepticism is healthy but so is your body', 'Find the real things that help'],
    },
  },
};

export default testData;
