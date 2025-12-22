// What Weather Matches Your Mood?
// Which weather pattern matches your current vibe?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-weather-match',
  title: 'What Weather Matches Your Mood?',
  description: 'Sunny and bright or stormy and intense? What weather pattern matches your current vibe?',
  category: 'random',
  emoji: '⛈️',
  color: 'from-blue-400 to-indigo-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How are you feeling right now?',
      options: [
        { text: 'Bright, happy, optimistic', type: 'A' },
        { text: 'Cozy, reflective, introspective', type: 'B' },
        { text: 'Intense, emotional, maybe chaotic', type: 'C' },
        { text: 'Calm, peaceful, at ease', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your energy level today:',
      options: [
        { text: 'High! Ready to take on anything', type: 'A' },
        { text: 'Low-key, want to curl up and relax', type: 'B' },
        { text: 'All over the place - intense highs and lows', type: 'C' },
        { text: 'Steady, balanced, even', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What do you need right now?',
      options: [
        { text: 'Adventure, sunshine, fun', type: 'A' },
        { text: 'Blankets, tea, something cozy', type: 'B' },
        { text: 'To feel my feelings intensely', type: 'C' },
        { text: 'Nothing, I\'m content as is', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your social battery:',
      options: [
        { text: 'Charged! Want to see people', type: 'A' },
        { text: 'Low, prefer quiet company', type: 'B' },
        { text: 'Need to process some things alone', type: 'C' },
        { text: 'Balanced, fine either way', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'If your mood was music:',
      options: [
        { text: 'Upbeat pop, summer vibes', type: 'A' },
        { text: 'Soft acoustic, indie melancholy', type: 'B' },
        { text: 'Dramatic classical or heavy emotional songs', type: 'C' },
        { text: 'Ambient, chill, background music', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your current biggest feeling:',
      options: [
        { text: 'Joy, excitement, gratitude', type: 'A' },
        { text: 'Nostalgia, gentle sadness, reflection', type: 'B' },
        { text: 'Overwhelm, intensity, big emotions', type: 'C' },
        { text: 'Peace, contentment, ease', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'What sounds appealing right now?',
      options: [
        { text: 'Being outside, soaking up energy', type: 'A' },
        { text: 'Staying in, watching rain from windows', type: 'B' },
        { text: 'A really good cry or intense experience', type: 'C' },
        { text: 'Floating, being still, just existing', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you want to feel by tonight?',
      options: [
        { text: 'Energized and happy', type: 'A' },
        { text: 'Cozy and peaceful', type: 'B' },
        { text: 'Released, like I\'ve processed something', type: 'C' },
        { text: 'Exactly like this - calm', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Right now, you want company that:',
      options: [
        { text: 'Matches your high energy', type: 'A' },
        { text: 'Sits quietly with you, no pressure', type: 'B' },
        { text: 'Can handle your intensity right now', type: 'C' },
        { text: 'Just exists peacefully nearby', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If you looked out a window right now, you\'d want to see:',
      options: [
        { text: 'Bright sunshine and blue skies', type: 'A' },
        { text: 'Gentle rain and grey skies', type: 'B' },
        { text: 'A dramatic thunderstorm', type: 'C' },
        { text: 'Soft fog or calm waters', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Sunshine',
      emoji: '☀️',
      description: 'Your mood is SUNSHINE! Bright, warm, and full of energy. You\'re radiating positivity and good vibes. This is a great time to be social, take on adventures, and spread your light to others.',
      traits: ['Happy', 'Energetic', 'Optimistic', 'Radiant'],
      strengths: ['Contagious joy', 'Ready for anything', 'Inspiring to others'],
      weaknesses: ['Might crash later'],
      tips: ['Ride this wave!', 'Share your sunshine', 'Enjoy this beautiful energy'],
    },
    B: {
      type: 'B',
      title: 'Gentle Rain',
      emoji: '🌧️',
      description: 'Your mood is GENTLE RAIN. Cozy, reflective, and introspective. You\'re in a soft, contemplative state - perfect for journaling, thinking, and nurturing yourself. There\'s beauty in this gentle melancholy.',
      traits: ['Reflective', 'Cozy', 'Introspective', 'Gentle'],
      strengths: ['Deep thinking', 'Self-awareness', 'Creative'],
      weaknesses: ['Might isolate too much'],
      tips: ['Honor this mood', 'Get cozy', 'Let the feelings flow like rain'],
    },
    C: {
      type: 'C',
      title: 'Thunderstorm',
      emoji: '⛈️',
      description: 'Your mood is a THUNDERSTORM! Intense, dramatic, and full of energy waiting to be released. Big feelings are rolling through you. Let them out - sometimes we need a storm to clear the air.',
      traits: ['Intense', 'Emotional', 'Dramatic', 'Releasing'],
      strengths: ['Powerful release', 'Honest about feelings', 'Cathartic'],
      weaknesses: ['Might overwhelm others'],
      tips: ['Let it out', 'Storms pass', 'Clear skies come after rain'],
    },
    D: {
      type: 'D',
      title: 'Calm Fog',
      emoji: '🌫️',
      description: 'Your mood is CALM FOG. Peaceful, quiet, and softly mysterious. You\'re in a state of gentle stillness, where everything feels muted and calm. This is a beautiful, meditative space.',
      traits: ['Peaceful', 'Calm', 'Quiet', 'Still'],
      strengths: ['Inner peace', 'Contentment', 'Presence'],
      weaknesses: ['Might seem distant'],
      tips: ['Enjoy this serenity', 'This calm is a gift', 'Just be'],
    },
  },
};

export default testData;
