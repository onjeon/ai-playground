// Your Home Decor Personality
// What does your decorating style say about you?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-home-decor',
  title: 'Your Home Decor Personality',
  description: 'Minimalist zen? Cozy maximalist? Chaotic collector? Discover your interior design personality and what your space says about you.',
  category: 'lifestyle',
  emoji: '🏠',
  color: 'from-amber-500 to-yellow-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal living room has:',
      options: [
        { text: 'Clean lines, neutral colors, minimal items', type: 'A' },
        { text: 'Warm textures, plants, lots of cozy blankets', type: 'B' },
        { text: 'Bold colors, collected treasures, personality everywhere', type: 'C' },
        { text: 'Functional furniture, no frills, practical space', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your approach to wall art:',
      options: [
        { text: 'One statement piece, perfectly placed', type: 'A' },
        { text: 'Gallery wall of meaningful pieces', type: 'B' },
        { text: 'Eclectic mix - if it speaks to me, it\'s up', type: 'C' },
        { text: 'What walls? I haven\'t gotten around to that', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your color palette preference:',
      options: [
        { text: 'Neutrals, whites, maybe one accent color', type: 'A' },
        { text: 'Warm earth tones, greens, natural colors', type: 'B' },
        { text: 'Bold, bright, or unexpected combinations', type: 'C' },
        { text: 'Whatever was there when I moved in', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you see a beautiful item at a store:',
      options: [
        { text: 'Where would it go? Does it fit my vision?', type: 'A' },
        { text: 'Imagine how cozy it would make my space', type: 'B' },
        { text: 'I love it, it\'s coming home with me', type: 'C' },
        { text: 'I\'ll think about it and probably forget', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with plants:',
      options: [
        { text: 'A few sculptural ones, perfectly placed', type: 'A' },
        { text: 'MANY plants - it\'s basically a jungle', type: 'B' },
        { text: 'Some real, some fake, whatever works', type: 'C' },
        { text: 'They all die so I\'ve given up', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your coffee table situation:',
      options: [
        { text: 'Curated books, one candle, nothing else', type: 'A' },
        { text: 'Cozy blanket, candles, books, trinkets', type: 'B' },
        { text: 'A rotating collection of random stuff', type: 'C' },
        { text: 'Covered in whatever I left there', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your dream bedroom vibe:',
      options: [
        { text: 'Hotel-like, serene, uncluttered', type: 'A' },
        { text: 'Layered bedding, soft lighting, sanctuary feel', type: 'B' },
        { text: 'Personal expression, unique pieces, character', type: 'C' },
        { text: 'Comfortable bed, that\'s what matters', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Throw pillows:',
      options: [
        { text: 'Two matching ones, max', type: 'A' },
        { text: 'The more the cozier', type: 'B' },
        { text: 'Mix of patterns and textures, very eclectic', type: 'C' },
        { text: 'Whatever came with the couch', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When guests come over:',
      options: [
        { text: 'My space is always guest-ready', type: 'A' },
        { text: 'Light some candles and it\'s perfect', type: 'B' },
        { text: 'They get to see my authentic chaos', type: 'C' },
        { text: 'Quick panic clean before they arrive', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your decor shopping happens at:',
      options: [
        { text: 'West Elm, CB2, curated boutiques', type: 'A' },
        { text: 'Target, HomeGoods, plant shops', type: 'B' },
        { text: 'Thrift stores, flea markets, anywhere interesting', type: 'C' },
        { text: 'Whenever I absolutely need something', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Minimalist Curator',
      emoji: '✨',
      description: 'Less is more and you\'ve perfected it. Every item in your space is intentional, your surfaces are clear, and your aesthetic is clean. Your home looks like a magazine spread and you prefer it that way.',
      traits: ['Intentional', 'Organized', 'Refined', 'Deliberate'],
      strengths: ['Calming environment', 'Easy to keep clean', 'Sophisticated look', 'Everything has a place'],
      weaknesses: ['Can feel cold', 'Hard to maintain', 'Might need to loosen up'],
      tips: ['One cozy element won\'t ruin your vibe', 'Lived-in is okay', 'Your space is beautiful'],
    },
    B: {
      type: 'B',
      title: 'Cozy Curator',
      emoji: '🪴',
      description: 'Your home is a hug in physical form. Soft textures, warm lighting, plants everywhere, and every corner designed for comfort. People never want to leave because your space feels like a sanctuary.',
      traits: ['Warm', 'Nurturing', 'Thoughtful', 'Comfort-focused'],
      strengths: ['Everyone loves being there', 'Maximum coziness', 'Feels like home', 'Instagram-worthy'],
      weaknesses: ['Can get cluttered', 'Lots to dust', 'Plants need attention'],
      tips: ['Your space heals people', 'Edit occasionally', 'You\'ve created something special'],
    },
    C: {
      type: 'C',
      title: 'Eclectic Collector',
      emoji: '🎨',
      description: 'Your home tells a story - actually, many stories. Every piece has meaning, no two things match but it all works, and your space is uniquely YOU. Maximalism is an art form and you\'ve mastered it.',
      traits: ['Creative', 'Expressive', 'Unique', 'Story-driven'],
      strengths: ['Personality everywhere', 'Conversation starters', 'One of a kind', 'Full of meaning'],
      weaknesses: ['Can overwhelm some visitors', 'Hard to find things', 'Might need editing'],
      tips: ['Your chaos is beautiful', 'Not everyone will get it', 'Keep collecting with intention'],
    },
    D: {
      type: 'D',
      title: 'Function First',
      emoji: '🛋️',
      description: 'Decorating is not your priority and that\'s valid. Your space is functional, comfortable, and serves its purpose. You have more important things to think about than throw pillows.',
      traits: ['Practical', 'Low-maintenance', 'Unfussy', 'Efficient'],
      strengths: ['No time wasted on decor', 'Easy to maintain', 'Focus on what matters', 'Authentic'],
      weaknesses: ['Space might lack warmth', 'Could feel unfinished', 'Missing some comfort'],
      tips: ['One small change can transform a space', 'Comfort matters too', 'You don\'t have to go crazy'],
    },
  },
};

export default testData;
