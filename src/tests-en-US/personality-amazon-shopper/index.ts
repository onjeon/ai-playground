// Your Amazon Shopping Style
// Cart psychology and Prime power

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-amazon-shopper',
  title: 'What\'s Your Amazon Shopping Style?',
  description: 'One-click ordering, cart hoarding, review obsession - discover your online shopping personality and what it says about you.',
  category: 'personality',
  emoji: '📦',
  color: 'from-orange-500 to-amber-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your Amazon cart right now probably has:',
      options: [
        { text: 'Nothing - I buy immediately or not at all', type: 'A' },
        { text: 'A few practical items I\'ll purchase soon', type: 'B' },
        { text: 'Stuff I added months ago but might still buy', type: 'C' },
        { text: '47 items serving as a wish list I\'ll never complete', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you feel about reading product reviews?',
      options: [
        { text: 'Quick glance at the star rating, done', type: 'A' },
        { text: 'Read a few helpful ones, check for red flags', type: 'B' },
        { text: 'Deep dive - I need multiple perspectives', type: 'C' },
        { text: 'I read reviews for products I\'m not even buying', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your typical order frequency is:',
      options: [
        { text: 'Only when I specifically need something', type: 'A' },
        { text: 'Once or twice a month - reasonable', type: 'B' },
        { text: 'Weekly - there\'s always something', type: 'C' },
        { text: 'I have a first-name relationship with my delivery driver', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Prime Day arrives. Your strategy:',
      options: [
        { text: 'Ignore it - I don\'t need manufactured urgency', type: 'A' },
        { text: 'Check for deals on things I actually needed', type: 'B' },
        { text: 'Browse all categories just in case', type: 'C' },
        { text: 'I\'ve been preparing my wish list for months', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you handle "customers also bought" suggestions?',
      options: [
        { text: 'Completely ignore them', type: 'A' },
        { text: 'Glance but rarely click', type: 'B' },
        { text: 'Sometimes discover things I actually need', type: 'C' },
        { text: 'Down the rabbit hole - 2 hours later I\'m buying something else entirely', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your return habits:',
      options: [
        { text: 'Rare - I research thoroughly before buying', type: 'A' },
        { text: 'Occasional returns when something doesn\'t work out', type: 'B' },
        { text: 'I buy multiple sizes and return what doesn\'t fit', type: 'C' },
        { text: 'Returning is basically my part-time job', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How do you feel when a package arrives?',
      options: [
        { text: 'It\'s just a delivery - open when convenient', type: 'A' },
        { text: 'Nice! Open it and put it away', type: 'B' },
        { text: 'Excited - even if I know exactly what it is', type: 'C' },
        { text: 'Pure serotonin - sometimes I forget what I ordered', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your approach to Subscribe & Save:',
      options: [
        { text: 'Not interested - I\'ll buy when I need it', type: 'A' },
        { text: 'Set up for essentials only', type: 'B' },
        { text: 'Several subscriptions running - convenient!', type: 'C' },
        { text: 'So many that I forget what\'s coming', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'At 2 AM, you find yourself:',
      options: [
        { text: 'Sleeping - no late-night shopping for me', type: 'A' },
        { text: 'Maybe browsing but not buying', type: 'B' },
        { text: 'Adding things to cart "for later"', type: 'C' },
        { text: 'Making questionable purchases I\'ll question tomorrow', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest assessment of your online shopping:',
      options: [
        { text: 'Controlled and intentional', type: 'A' },
        { text: 'Reasonable with occasional splurges', type: 'B' },
        { text: 'A bit more than I should, but it brings joy', type: 'C' },
        { text: 'My credit card needs a vacation', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Intentional Buyer',
      emoji: '🎯',
      description: 'You shop with purpose and purpose only. No impulse purchases, no late-night rabbit holes. You know what you need, you research it, you buy it. Your cart is empty because when you want something, you get it immediately.',
      traits: ['Disciplined', 'Practical', 'Focused', 'Budget-conscious'],
      strengths: ['Never regrets purchases', 'Excellent budget control', 'No clutter from impulse buys', 'Research skills on point'],
      weaknesses: ['May miss good deals', 'Friends think you\'re missing out', 'Might take too long to decide'],
      tips: ['It\'s okay to treat yourself', 'Sometimes impulse can be fun', 'You\'ve got discipline most people envy'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Browser',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot between retail therapy and financial responsibility. You enjoy the convenience without going overboard. Smart purchases, occasional treats, and a cart that actually gets purchased.',
      traits: ['Practical', 'Balanced', 'Sensible', 'Self-aware'],
      strengths: ['Good purchase decisions', 'Balances wants and needs', 'Uses Prime effectively', 'Reasonable review reading'],
      weaknesses: ['Prime Day can still tempt you', 'Occasionally falls for deals', 'Cart can accumulate'],
      tips: ['Keep doing what you\'re doing', 'Your balance is healthy', 'Set spending alerts if helpful'],
    },
    C: {
      type: 'C',
      title: 'The Enthusiastic Explorer',
      emoji: '🛍️',
      description: 'Shopping brings you joy, and you\'re not ashamed. Your cart is a wish list, your browsing is a hobby, and every delivery is a little gift to yourself. You\'ve discovered things you didn\'t know you needed, and they\'ve improved your life.',
      traits: ['Curious', 'Optimistic', 'Trend-aware', 'Comfort-seeking'],
      strengths: ['Discovers great products', 'Always has what you need', 'Great at finding deals', 'Makes online shopping fun'],
      weaknesses: ['Cart can spiral', 'Returns pile up', 'Budget might stretch'],
      tips: ['Set a monthly shopping budget', 'Wait 24 hours before checkout', 'The stuff will still be there'],
    },
    D: {
      type: 'D',
      title: 'The Digital Shopaholic',
      emoji: '📦',
      description: 'Every day is Prime Day in your world. Your delivery driver knows you by name, your recycling bin is 90% cardboard, and your cart is more wish list than shopping cart. You\'ve accepted this is who you are.',
      traits: ['Spontaneous', 'Impulsive', 'Joy-seeking', 'Collector'],
      strengths: ['Never without anything you need', 'Expert at finding products', 'Unmatched review knowledge', 'Brings packages-as-gifts energy'],
      weaknesses: ['Budget? What budget?', 'Returns are a part-time job', 'Storage space is a challenge'],
      tips: ['Try a no-buy month challenge', 'Delete the app from your phone', 'Your delivery driver needs a break'],
    },
  },
};

export default testData;
