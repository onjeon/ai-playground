// Your Online Shopping Habits
// What kind of online shopper are you really?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-online-shopping',
  title: 'Your Online Shopping Habits',
  description: 'Cart full? Wishlist overflowing? Let\'s diagnose your online shopping personality!',
  category: 'tech',
  emoji: '🛒',
  color: 'from-amber-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your shopping cart right now:',
      options: [
        { text: 'Empty - I only add things I\'ll buy immediately', type: 'A' },
        { text: 'A few items I\'m considering', type: 'B' },
        { text: 'Full of stuff I\'ve been "thinking about"', type: 'C' },
        { text: '47 items across 6 different stores', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you see a sale:',
      options: [
        { text: 'Only buy if I actually needed it anyway', type: 'A' },
        { text: 'Consider if it\'s worth it, might buy', type: 'B' },
        { text: 'Add to cart first, justify later', type: 'C' },
        { text: 'THIS IS AN EMERGENCY. BUYING NOW.', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How often do you check package tracking?',
      options: [
        { text: 'When I remember, not obsessively', type: 'A' },
        { text: 'Once a day, reasonable excitement', type: 'B' },
        { text: 'Multiple times a day, can\'t help it', type: 'C' },
        { text: 'Constantly. Is it here yet? How about now?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your relationship with "Subscribe & Save":',
      options: [
        { text: 'Only for essentials I genuinely need regularly', type: 'A' },
        { text: 'A few practical subscriptions', type: 'B' },
        { text: 'Honestly don\'t remember what I\'m subscribed to', type: 'C' },
        { text: 'Random boxes arrive and I\'m surprised every time', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Late night shopping:',
      options: [
        { text: 'I don\'t shop impulsively, day or night', type: 'A' },
        { text: 'Sometimes browse, rarely buy', type: 'B' },
        { text: 'Where most of my purchases happen tbh', type: 'C' },
        { text: '2am me is a different person with no limits', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When something you want is out of stock:',
      options: [
        { text: 'Wait patiently or find alternative', type: 'A' },
        { text: 'Set up a notification, move on', type: 'B' },
        { text: 'Check obsessively until it\'s back', type: 'C' },
        { text: 'Search 15 other sites, pay extra, NEED IT NOW', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your return history:',
      options: [
        { text: 'Rare - I research before buying', type: 'A' },
        { text: 'Occasional, normal rate', type: 'B' },
        { text: 'Frequent - buy multiple sizes/options', type: 'C' },
        { text: 'I treat returns like a part-time job', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your saved/wishlist items:',
      options: [
        { text: 'A short, curated list of actual future purchases', type: 'A' },
        { text: 'Reasonable collection of things I might want', type: 'B' },
        { text: 'Hundreds of items I\'ll probably never buy', type: 'C' },
        { text: 'I use it as Pinterest but for buying things', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Free shipping minimum:',
      options: [
        { text: 'I\'ll pay shipping rather than buy unneeded stuff', type: 'A' },
        { text: 'Try to combine orders, sometimes add something small', type: 'B' },
        { text: 'Add $30 of stuff I don\'t need to save $5 shipping', type: 'C' },
        { text: 'The reason I have 17 phone cases', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'When a package arrives:',
      options: [
        { text: 'Open when convenient, expected this', type: 'A' },
        { text: 'Nice! Open it soon, mild excitement', type: 'B' },
        { text: 'CHRISTMAS MORNING ENERGY every time', type: 'C' },
        { text: 'Sometimes forget what I ordered, surprise gifts to myself', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Intentional Shopper',
      emoji: '🎯',
      description: 'You only buy what you need, when you need it. Research before purchase, no impulse buys, empty carts. Your self-control is impressive and your bank account thanks you. You probably have a budget and actually stick to it.',
      traits: ['Disciplined', 'Practical', 'Intentional', 'Budget-conscious'],
      strengths: ['No buyer\'s remorse', 'Savings stay intact', 'Only owns what\'s needed'],
      weaknesses: ['Might miss good deals', 'Could be more spontaneous'],
      tips: ['Your discipline is admirable', 'It\'s okay to treat yourself occasionally'],
    },
    B: {
      type: 'B',
      title: 'The Normal Shopper',
      emoji: '🛍️',
      description: 'You shop online like a normal human - sometimes for needs, occasionally for wants. You can resist most impulse buys but aren\'t immune to a good sale. Your relationship with online shopping is healthy and balanced.',
      traits: ['Balanced', 'Reasonable', 'Normal', 'Healthy'],
      strengths: ['Good self-control', 'Enjoys shopping without addiction', 'Makes sensible decisions'],
      weaknesses: ['Occasional impulse buy', 'Sale susceptible'],
      tips: ['You\'ve found the balance', 'Keep being sensible', 'Treat yourself when deserved'],
    },
    C: {
      type: 'C',
      title: 'The Cart Collector',
      emoji: '📦',
      description: 'Your shopping carts are full, your wishlist is endless, and packages arrive frequently. You shop for entertainment, stress relief, and boredom. You\'re not quite out of control but... you\'re also not in control.',
      traits: ['Impulsive', 'Emotional shopper', 'Sale-obsessed', 'Package-addicted'],
      strengths: ['Always has new stuff'],
      weaknesses: ['Budget? What budget?', 'Too many unnecessary purchases', 'Retail therapy is real'],
      tips: ['Try a 48-hour wait before buying', 'Unsubscribe from promotional emails', 'Check your cart abandon rates'],
    },
    D: {
      type: 'D',
      title: 'The Shopping Addict',
      emoji: '🏃‍♀️',
      description: 'You\'ve achieved Black Belt level online shopping. Carts everywhere, packages daily, 2am purchases you don\'t remember. You\'ve bought things twice because you forgot you already had them. Amazon knows you by name.',
      traits: ['Addicted', 'Impulsive', 'Financially chaotic', 'Package-dependent'],
      strengths: ['UPS driver is basically family now'],
      weaknesses: ['Financial stress', 'Clutter', 'This might be a problem', 'Do you even know what you own?'],
      tips: ['Delete saved payment methods', 'Take a shopping fast', 'Seriously evaluate what you\'re avoiding by shopping', 'Support is available'],
    },
  },
};

export default testData;
