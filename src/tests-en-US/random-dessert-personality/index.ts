// What Dessert Are You?
// Which sweet treat matches your personality?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-dessert-personality',
  title: 'What Dessert Are You?',
  description: 'If you were a dessert, would you be sweet, rich, or a little bit extra? Let\'s find out!',
  category: 'random',
  emoji: '🍰',
  color: 'from-pink-400 to-rose-500',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your personality is best described as:',
      options: [
        { text: 'Classic, reliable, loved by everyone', type: 'A' },
        { text: 'Rich, complex, a lot to unpack', type: 'B' },
        { text: 'Fun, colorful, a little extra', type: 'C' },
        { text: 'Unique, sophisticated, acquired taste', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a friend group, you\'re the one who:',
      options: [
        { text: 'Everyone gets along with', type: 'A' },
        { text: 'Has deep conversations in the corner', type: 'B' },
        { text: 'Plans the parties and brings the energy', type: 'C' },
        { text: 'Shows up with something no one expected', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your ideal Friday night:',
      options: [
        { text: 'Cozy movie night with comfort food', type: 'A' },
        { text: 'Intimate dinner with deep conversation', type: 'B' },
        { text: 'Big party with lots of people', type: 'C' },
        { text: 'Something unusual like a midnight picnic', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'What do people love about you?',
      options: [
        { text: 'I\'m dependable and always there', type: 'A' },
        { text: 'My depth and intensity', type: 'B' },
        { text: 'I make everything more fun', type: 'C' },
        { text: 'I\'m unlike anyone they\'ve met', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your style aesthetic:',
      options: [
        { text: 'Classic, timeless, comfortable', type: 'A' },
        { text: 'Dark, moody, elegant', type: 'B' },
        { text: 'Bright, fun, eye-catching', type: 'C' },
        { text: 'Unique, avant-garde, different', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When you walk into a room:',
      options: [
        { text: 'People feel comfortable and at ease', type: 'A' },
        { text: 'There\'s a certain intensity or depth', type: 'B' },
        { text: 'The energy immediately goes up', type: 'C' },
        { text: 'People are intrigued and curious', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your biggest flaw:',
      options: [
        { text: 'Sometimes too plain or predictable', type: 'A' },
        { text: 'Can be too much, too intense', type: 'B' },
        { text: 'Might be overwhelming or too hyper', type: 'C' },
        { text: 'Not everyone gets or appreciates me', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your love language:',
      options: [
        { text: 'Being there, consistent presence', type: 'A' },
        { text: 'Deep conversations, emotional intensity', type: 'B' },
        { text: 'Making them laugh, bringing joy', type: 'C' },
        { text: 'Surprising them with unique experiences', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'If your life was a flavor:',
      options: [
        { text: 'Vanilla - simple but perfect', type: 'A' },
        { text: 'Dark chocolate - rich and deep', type: 'B' },
        { text: 'Birthday cake - festive and fun', type: 'C' },
        { text: 'Something like lavender honey - unusual but memorable', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'People remember you for:',
      options: [
        { text: 'Being warm, familiar, comforting', type: 'A' },
        { text: 'Making them feel deeply', type: 'B' },
        { text: 'Making them smile and have fun', type: 'C' },
        { text: 'Being memorable and one-of-a-kind', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Chocolate Chip Cookie',
      emoji: '🍪',
      description: 'You\'re a CHOCOLATE CHIP COOKIE! Classic, comforting, and universally loved. You\'re the friend everyone can count on. Not flashy, but absolutely perfect. Who doesn\'t love a chocolate chip cookie?',
      traits: ['Classic', 'Comforting', 'Reliable', 'Lovable'],
      strengths: ['Everyone likes you', 'Consistent', 'Warm presence', 'Familiar comfort'],
      weaknesses: ['Might seem basic', 'Could take more risks'],
      tips: ['Classic is classic for a reason', 'You\'re more special than you think', 'Comfort is a superpower'],
    },
    B: {
      type: 'B',
      title: 'Molten Chocolate Lava Cake',
      emoji: '🍫',
      description: 'You\'re a MOLTEN CHOCOLATE LAVA CAKE! Rich, intense, and full of depth. There\'s more to you than meets the eye - once people get past the surface, they discover the warm, gooey center. Decadent!',
      traits: ['Intense', 'Deep', 'Rich', 'Complex'],
      strengths: ['Memorable', 'Deeply satisfying', 'Multi-layered', 'Impressive'],
      weaknesses: ['Too rich for some', 'Can be overwhelming'],
      tips: ['Your depth is your gift', 'Not everyone can handle you, and that\'s okay', 'You\'re worth savoring slowly'],
    },
    C: {
      type: 'C',
      title: 'Funfetti Cake',
      emoji: '🎂',
      description: 'You\'re FUNFETTI CAKE! Colorful, joyful, and the life of the party. You bring the celebration wherever you go. Life is better with sprinkles and you ARE the sprinkles.',
      traits: ['Fun', 'Colorful', 'Joyful', 'Festive'],
      strengths: ['Brings joy everywhere', 'Makes everything better', 'Can\'t help but smile around you'],
      weaknesses: ['Might be too much', 'Could seem superficial'],
      tips: ['Your joy is real and needed', 'Keep spreading color', 'You make the world happier'],
    },
    D: {
      type: 'D',
      title: 'Crème Brûlée',
      emoji: '🍮',
      description: 'You\'re CRÈME BRÛLÉE! Sophisticated, unique, and an acquired taste. You\'re not for everyone, but those who appreciate you REALLY appreciate you. There\'s no one quite like you.',
      traits: ['Unique', 'Sophisticated', 'Elegant', 'Special'],
      strengths: ['Memorable', 'One of a kind', 'Refined taste', 'Sophisticated appeal'],
      weaknesses: ['Not everyone gets you', 'Can seem intimidating'],
      tips: ['Your uniqueness is your power', 'The right people will appreciate you', 'Stay authentic'],
    },
  },
};

export default testData;
