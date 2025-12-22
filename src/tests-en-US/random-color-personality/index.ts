// What Color Matches Your Personality?
// Discover your personality color!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-color-personality',
  title: 'What Color Matches Your Personality?',
  description: 'If your personality was a color, what would it be? Let\'s paint your soul!',
  category: 'random',
  emoji: '🎨',
  color: 'from-pink-500 to-purple-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal weekend:',
      options: [
        { text: 'Adventure, excitement, something thrilling', type: 'A' },
        { text: 'Creative project, artistic expression', type: 'B' },
        { text: 'Social gathering, connecting with friends', type: 'C' },
        { text: 'Peaceful solitude, nature, quiet reflection', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In conversations, you tend to:',
      options: [
        { text: 'Lead with energy and confidence', type: 'A' },
        { text: 'Share unique ideas and perspectives', type: 'B' },
        { text: 'Make everyone feel included and happy', type: 'C' },
        { text: 'Listen deeply and respond thoughtfully', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your greatest strength:',
      options: [
        { text: 'Boldness and taking action', type: 'A' },
        { text: 'Creativity and originality', type: 'B' },
        { text: 'Warmth and positivity', type: 'C' },
        { text: 'Wisdom and calm presence', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'What energizes you:',
      options: [
        { text: 'Competition, achievement, winning', type: 'A' },
        { text: 'Creating something beautiful or unique', type: 'B' },
        { text: 'Making others happy, spreading joy', type: 'C' },
        { text: 'Deep thought, spiritual growth', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you make decisions?',
      options: [
        { text: 'Fast, bold, trust my gut', type: 'A' },
        { text: 'Consider all creative possibilities', type: 'B' },
        { text: 'Think about how it affects others', type: 'C' },
        { text: 'Reflect deeply, take my time', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your friends would describe you as:',
      options: [
        { text: 'Confident, dynamic, inspiring', type: 'A' },
        { text: 'Unique, creative, interesting', type: 'B' },
        { text: 'Warm, fun, the heart of the group', type: 'C' },
        { text: 'Calm, wise, peaceful presence', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your preferred vibe:',
      options: [
        { text: 'High energy, powerful, commanding', type: 'A' },
        { text: 'Mysterious, deep, thought-provoking', type: 'B' },
        { text: 'Bright, cheerful, welcoming', type: 'C' },
        { text: 'Serene, natural, harmonious', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'What do you value most:',
      options: [
        { text: 'Success, power, achievement', type: 'A' },
        { text: 'Self-expression, individuality, art', type: 'B' },
        { text: 'Love, happiness, connection', type: 'C' },
        { text: 'Peace, wisdom, balance', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your life philosophy:',
      options: [
        { text: 'Go big or go home', type: 'A' },
        { text: 'Express yourself authentically', type: 'B' },
        { text: 'Spread love and joy', type: 'C' },
        { text: 'Seek inner peace and truth', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How you want to be remembered:',
      options: [
        { text: 'Bold, powerful, someone who made things happen', type: 'A' },
        { text: 'Creative, original, one of a kind', type: 'B' },
        { text: 'Kind, loving, someone who brought joy', type: 'C' },
        { text: 'Wise, peaceful, someone who brought calm', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Red',
      emoji: '❤️',
      description: 'Your personality color is RED! Bold, passionate, and powerful. You light up rooms with your energy and confidence. You\'re a natural leader who takes action and inspires others to be brave.',
      traits: ['Bold', 'Confident', 'Passionate', 'Leader'],
      strengths: ['Takes action', 'Inspires courage', 'Commands attention', 'Gets results'],
      weaknesses: ['Can be intense', 'Impatient', 'Dominant'],
      tips: ['Your fire is powerful - direct it wisely', 'Let others shine too', 'Your energy is contagious'],
    },
    B: {
      type: 'B',
      title: 'Purple',
      emoji: '💜',
      description: 'Your personality color is PURPLE! Creative, mysterious, and unique. You see the world differently and express yourself in original ways. You\'re drawn to the deeper, more magical side of life.',
      traits: ['Creative', 'Mysterious', 'Unique', 'Spiritual'],
      strengths: ['Original thinker', 'Artistic vision', 'Deep perspective', 'Captivating presence'],
      weaknesses: ['Can seem aloof', 'Hard to understand', 'Overthinks'],
      tips: ['Your uniqueness is your gift', 'Share your vision with others', 'Stay true to yourself'],
    },
    C: {
      type: 'C',
      title: 'Yellow',
      emoji: '💛',
      description: 'Your personality color is YELLOW! Warm, joyful, and radiant. You bring sunshine wherever you go. Your optimism and kindness light up everyone around you. You\'re the friend everyone needs.',
      traits: ['Joyful', 'Optimistic', 'Warm', 'Social'],
      strengths: ['Spreads happiness', 'Makes friends easily', 'Positive influence', 'Inclusive'],
      weaknesses: ['May avoid negativity', 'People-pleasing', 'Needs validation'],
      tips: ['Your light heals others', 'It\'s okay to feel dark sometimes', 'Keep shining your way'],
    },
    D: {
      type: 'D',
      title: 'Blue',
      emoji: '💙',
      description: 'Your personality color is BLUE! Calm, wise, and peaceful. You bring tranquility to chaos and think deeply about life. Your presence soothes others and your wisdom guides them.',
      traits: ['Calm', 'Wise', 'Peaceful', 'Thoughtful'],
      strengths: ['Brings peace', 'Deep thinker', 'Steady presence', 'Good listener'],
      weaknesses: ['Can be too passive', 'Keeps emotions in', 'Avoids conflict'],
      tips: ['Your calm is powerful', 'Express your feelings too', 'Your wisdom is needed'],
    },
  },
};

export default testData;
