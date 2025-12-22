// How Do You Splurge?
// What do you love to spend money on?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-splurge-style',
  title: 'How Do You Splurge?',
  description: 'We all splurge on something! What\'s your spending weakness? Let\'s find out!',
  category: 'money',
  emoji: '💎',
  color: 'from-purple-500 to-fuchsia-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When you have extra money to spend, you\'re most drawn to:',
      options: [
        { text: 'Experiences - travel, concerts, dining', type: 'A' },
        { text: 'Personal care - spa, beauty, fitness', type: 'B' },
        { text: 'Things - clothes, gadgets, home stuff', type: 'C' },
        { text: 'Food - delivery, restaurants, specialty groceries', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your most embarrassing spending category is probably:',
      options: [
        { text: 'Travel/events - I\'ll spend anything on experiences', type: 'A' },
        { text: 'Self-care - products, treatments, wellness', type: 'B' },
        { text: 'Online shopping - too many packages arrive', type: 'C' },
        { text: 'Food delivery - I\'m keeping UberEats in business', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What do you justify spending on most easily?',
      options: [
        { text: '"It\'s an experience, those are priceless!"', type: 'A' },
        { text: '"Self-care isn\'t selfish, it\'s necessary!"', type: 'B' },
        { text: '"I needed this, it sparks joy!"', type: 'C' },
        { text: '"I deserve to eat well!"', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When treating yourself, you:',
      options: [
        { text: 'Book a trip or fun activity', type: 'A' },
        { text: 'Get a massage or fancy beauty treatment', type: 'B' },
        { text: 'Buy something you\'ve been eyeing', type: 'C' },
        { text: 'Order from that fancy restaurant', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'The purchase you rarely regret:',
      options: [
        { text: 'Concert tickets, vacations, event tickets', type: 'A' },
        { text: 'Gym memberships, skincare, wellness stuff', type: 'B' },
        { text: 'Quality items for home or wardrobe', type: 'C' },
        { text: 'A really good meal', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Where does your "fun money" usually go?',
      options: [
        { text: 'Saving for trips and experiences', type: 'A' },
        { text: 'Feeling and looking good', type: 'B' },
        { text: 'Shopping for stuff I want', type: 'C' },
        { text: 'Eating well (delivery and dining out)', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'You feel most alive when spending on:',
      options: [
        { text: 'Adventures and making memories', type: 'A' },
        { text: 'Taking care of myself', type: 'B' },
        { text: 'Getting something new and exciting', type: 'C' },
        { text: 'Good food and drinks', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When stressed, you\'re most likely to spend on:',
      options: [
        { text: 'Planning an escape or getaway', type: 'A' },
        { text: 'Spa day or wellness treatment', type: 'B' },
        { text: 'Shopping therapy - buy something nice', type: 'C' },
        { text: 'Comfort food delivery', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'If money was no object for a day, you\'d:',
      options: [
        { text: 'Book first-class tickets somewhere amazing', type: 'A' },
        { text: 'Full luxury spa and beauty day', type: 'B' },
        { text: 'Shop til I literally dropped', type: 'C' },
        { text: 'Eat at every Michelin star restaurant in town', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your bank statement would reveal too many charges to:',
      options: [
        { text: 'Travel sites, Ticketmaster, event vendors', type: 'A' },
        { text: 'Sephora, fitness apps, wellness services', type: 'B' },
        { text: 'Amazon, online stores, retail', type: 'C' },
        { text: 'DoorDash, restaurants, grocery delivery', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Experience Collector',
      emoji: '✈️',
      description: 'Things don\'t excite you - EXPERIENCES do. Travel, concerts, festivals, events - that\'s where your money goes. You\'d rather have an empty apartment and a passport full of stamps. Life is for living!',
      traits: ['Adventure-seeking', 'Memory-focused', 'Experience-driven', 'Living life'],
      strengths: ['Great memories', 'No clutter', 'Stories to tell'],
      weaknesses: ['Bank account post-vacation is rough', 'FOMO is expensive'],
      tips: ['Budget for experiences ahead', 'Find cheaper ways to have adventures', 'Experiences > things (you\'re right)'],
    },
    B: {
      type: 'B',
      title: 'The Self-Care Spender',
      emoji: '💆',
      description: 'You invest in yourself - skin, body, mind, wellness. Spa days, quality skincare, gym memberships, therapy - you prioritize feeling your best. Your splurges make you feel good and honestly? That\'s valid.',
      traits: ['Self-investing', 'Wellness-focused', 'Self-care queen/king', 'Glow-getter'],
      strengths: ['Taking care of yourself', 'Mental health priority', 'Looking good, feeling good'],
      weaknesses: ['Self-care spending adds up', 'Easy to justify everything as "necessary"'],
      tips: ['Some self-care is free', 'Set a wellness budget', 'You deserve care, but balance is key'],
    },
    C: {
      type: 'C',
      title: 'The Retail Enthusiast',
      emoji: '🛍️',
      description: 'You love STUFF. New clothes, gadgets, home decor, random finds - the thrill of a purchase is real. Your closet is full, your shelves are decorated, and your mailbox is never empty. Material things bring you joy.',
      traits: ['Shopper', 'Collector', 'Material appreciator', 'Package tracker'],
      strengths: ['Curated style', 'Always have what you need (and don\'t need)'],
      weaknesses: ['Too much stuff', 'Shopping addiction potential', 'Where does it all go?'],
      tips: ['One in, one out rule', 'Wait 24 hours before buying', 'Quality over quantity'],
    },
    D: {
      type: 'D',
      title: 'The Food Focused',
      emoji: '🍕',
      description: 'Food is your love language. Delivery apps, dining out, fancy ingredients, that new restaurant everyone\'s talking about - you\'ll spend money on eating well. Life\'s too short for bad food.',
      traits: ['Foodie', 'Culinary spender', 'Taste-driven', 'Delivery app regular'],
      strengths: ['Eating well', 'Great taste', 'Food brings joy'],
      weaknesses: ['Food spending adds up FAST', 'Delivery fees are a tax on laziness', 'Cooking at home? Don\'t know her'],
      tips: ['Track food spending for a month (prepare to be shocked)', 'Learn to cook a few things', 'Dining out as treat, not default'],
    },
  },
};

export default testData;
