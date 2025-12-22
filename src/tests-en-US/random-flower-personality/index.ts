// What Flower Are You?
// Discover which flower matches your personality!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-flower-personality',
  title: 'What Flower Are You?',
  description: 'Every soul blooms differently! Which flower represents your beautiful personality?',
  category: 'random',
  emoji: '🌸',
  color: 'from-pink-400 to-purple-500',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How do you enter a room?',
      options: [
        { text: 'Brightly, grabbing attention naturally', type: 'A' },
        { text: 'Elegantly, with quiet sophistication', type: 'B' },
        { text: 'Softly, blending in peacefully', type: 'C' },
        { text: 'Boldly, making a statement', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your energy is best described as:',
      options: [
        { text: 'Warm, sunny, cheerful', type: 'A' },
        { text: 'Graceful, romantic, delicate', type: 'B' },
        { text: 'Gentle, calming, simple', type: 'C' },
        { text: 'Passionate, dramatic, intense', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What do people notice first about you?',
      options: [
        { text: 'My bright, positive energy', type: 'A' },
        { text: 'My elegance and beauty', type: 'B' },
        { text: 'My peaceful, gentle presence', type: 'C' },
        { text: 'My boldness and passion', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your love language:',
      options: [
        { text: 'Making them smile, bringing joy', type: 'A' },
        { text: 'Romance, thoughtful gestures, beauty', type: 'B' },
        { text: 'Quiet presence, simple acts of care', type: 'C' },
        { text: 'Intense devotion, passionate love', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Where do you thrive best?',
      options: [
        { text: 'In the spotlight, soaking up sun', type: 'A' },
        { text: 'In beautiful, curated environments', type: 'B' },
        { text: 'In peaceful, natural settings', type: 'C' },
        { text: 'In dramatic, memorable moments', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your biggest strength:',
      options: [
        { text: 'Spreading joy and positivity', type: 'A' },
        { text: 'Bringing beauty and grace', type: 'B' },
        { text: 'Offering calm and simplicity', type: 'C' },
        { text: 'Living and loving passionately', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you handle tough times?',
      options: [
        { text: 'Turn toward the light, stay positive', type: 'A' },
        { text: 'Find beauty even in pain', type: 'B' },
        { text: 'Weather it quietly, adapt', type: 'C' },
        { text: 'Feel it intensely, then rise again', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your ideal compliment:',
      options: [
        { text: '"You always brighten my day"', type: 'A' },
        { text: '"You\'re so elegant and beautiful"', type: 'B' },
        { text: '"Your presence is so calming"', type: 'C' },
        { text: '"You\'re unforgettable"', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your vibe in one word:',
      options: [
        { text: 'Sunshine', type: 'A' },
        { text: 'Elegance', type: 'B' },
        { text: 'Peace', type: 'C' },
        { text: 'Fire', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'What do you want your legacy to be?',
      options: [
        { text: 'I made everyone happier', type: 'A' },
        { text: 'I brought beauty to the world', type: 'B' },
        { text: 'I offered peace and kindness', type: 'C' },
        { text: 'I lived and loved boldly', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Sunflower',
      emoji: '🌻',
      description: 'You are a SUNFLOWER! Bright, cheerful, and always turning toward the light. You bring warmth and joy wherever you go. People are drawn to your sunny disposition and positive energy.',
      traits: ['Cheerful', 'Bright', 'Positive', 'Warm'],
      strengths: ['Spreads joy', 'Lifts others up', 'Resilient and strong'],
      weaknesses: ['May hide difficult feelings', 'Needs sunshine to thrive'],
      tips: ['Keep facing the sun', 'Your brightness heals others', 'It\'s okay to have cloudy days'],
    },
    B: {
      type: 'B',
      title: 'Rose',
      emoji: '🌹',
      description: 'You are a ROSE! Elegant, romantic, and timelessly beautiful. You represent love and grace. People admire your beauty but respect your thorns - you know how to protect yourself.',
      traits: ['Elegant', 'Romantic', 'Beautiful', 'Protected'],
      strengths: ['Timeless beauty', 'Symbol of love', 'Knows their worth'],
      weaknesses: ['Can be guarded', 'High maintenance'],
      tips: ['Your beauty is undeniable', 'Thorns are okay', 'Love deeply'],
    },
    C: {
      type: 'C',
      title: 'Daisy',
      emoji: '🌼',
      description: 'You are a DAISY! Sweet, simple, and genuinely lovely. You don\'t need to be flashy to be beautiful. Your gentle, innocent energy brings peace to everyone around you.',
      traits: ['Sweet', 'Simple', 'Gentle', 'Pure'],
      strengths: ['Unassuming beauty', 'Calming presence', 'Genuine kindness'],
      weaknesses: ['Might get overlooked', 'Too modest'],
      tips: ['Simple is beautiful', 'Your gentleness is strength', 'Don\'t underestimate yourself'],
    },
    D: {
      type: 'D',
      title: 'Red Tulip',
      emoji: '🌷',
      description: 'You are a RED TULIP! Bold, passionate, and impossible to ignore. You make a statement and declare your presence. Your love is intense and your life is lived fully.',
      traits: ['Bold', 'Passionate', 'Intense', 'Memorable'],
      strengths: ['Lives fully', 'Loves passionately', 'Makes an impression'],
      weaknesses: ['Burns bright but briefly', 'Can be overwhelming'],
      tips: ['Your passion is beautiful', 'Love boldly', 'Bloom where you\'re planted'],
    },
  },
};

export default testData;
