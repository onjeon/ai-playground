// What Happens When You Go to Target
// The phenomenon we all know too well

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-target-run',
  title: 'What Happens When You Go to Target?',
  description: 'You went in for toothpaste. It\'s been 2 hours. Your cart has throw pillows. Let\'s see what kind of Target shopper you really are.',
  category: 'personality',
  emoji: '🎯',
  color: 'from-red-500 to-red-700',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You need one thing from Target. What\'s your game plan?',
      options: [
        { text: 'Make a list, grab it, checkout in 10 minutes flat', type: 'A' },
        { text: 'Okay but let me just look at the Dollar Spot real quick...', type: 'B' },
        { text: 'One thing? I\'ll just browse a few aisles while I\'m here', type: 'C' },
        { text: 'I\'m about to spend my entire Saturday here and I know it', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'The Dollar Spot at the entrance is calling. You:',
      options: [
        { text: 'Walk past it with blinders on', type: 'A' },
        { text: 'Quick glance - okay maybe one cute thing', type: 'B' },
        { text: 'Spend 15 minutes picking up seasonal items I definitely need', type: 'C' },
        { text: 'Fill half my cart before reaching actual groceries', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You see the Starbucks inside Target. Your move:',
      options: [
        { text: 'Skip it - I have coffee at home', type: 'A' },
        { text: 'Maybe on the way out if I have time', type: 'B' },
        { text: 'Fuel up first - shopping is a marathon', type: 'C' },
        { text: 'Already have one in hand before my cart', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'The home decor section appears. What happens?',
      options: [
        { text: 'Not my department - stay focused', type: 'A' },
        { text: 'I\'ll just look at candles. Just candles.', type: 'B' },
        { text: 'These throw pillows would really tie my room together...', type: 'C' },
        { text: 'I\'m completely redecorating my living room now', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'You pass by the clothing section. Your reaction:',
      options: [
        { text: 'I have clothes at home, keep moving', type: 'A' },
        { text: 'Maybe a quick look at what\'s on clearance', type: 'B' },
        { text: 'Trying on 5 items "just to see"', type: 'C' },
        { text: 'New seasonal wardrobe incoming', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your typical Target trip duration is:',
      options: [
        { text: 'Under 20 minutes - in and out', type: 'A' },
        { text: '30-45 minutes - reasonable browsing', type: 'B' },
        { text: '1-2 hours - but I had reasons!', type: 'C' },
        { text: 'I lose all concept of time in there', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How does your final receipt compare to your list?',
      options: [
        { text: 'Exactly what I came for, nothing more', type: 'A' },
        { text: 'A few extra things - but I needed them!', type: 'B' },
        { text: 'List? I forgot to check the list halfway through', type: 'C' },
        { text: 'Receipt is 3 feet long and I regret nothing', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'The seasonal aisle (Halloween/Christmas/Summer) appears. You:',
      options: [
        { text: 'It\'s not even that holiday yet - skip', type: 'A' },
        { text: 'One or two cute decorations won\'t hurt', type: 'B' },
        { text: 'I\'m feeling the spirit now - loading up', type: 'C' },
        { text: 'Transform my entire home for this season', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Someone asks if you need help finding something. You say:',
      options: [
        { text: '"Yes, aisle 5" - efficient and done', type: 'A' },
        { text: '"I think I\'m good" but secretly exploring', type: 'B' },
        { text: '"I\'m not really sure what I\'m looking for anymore"', type: 'C' },
        { text: '"I live here now"', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Walking out of Target, you feel:',
      options: [
        { text: 'Accomplished - mission complete', type: 'A' },
        { text: 'Satisfied with a few good finds', type: 'B' },
        { text: 'Slightly confused about how $147 happened', type: 'C' },
        { text: 'Spiritually fulfilled but financially concerned', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Mission Impossible Agent',
      emoji: '🕶️',
      description: 'You treat Target like a military operation. In, out, mission accomplished. While others wander aimlessly, you\'ve already checked out and are halfway home. Your willpower is superhuman and your bank account thanks you.',
      traits: ['Focused', 'Disciplined', 'Time-conscious', 'Budget-aware'],
      strengths: ['Never impulse buys', 'Always sticks to budget', 'In and out efficiently', 'Immune to Dollar Spot magic'],
      weaknesses: ['Might miss great deals', 'Friends think you\'re missing out', 'Never experiences Target therapy'],
      tips: ['It\'s okay to wander sometimes', 'Treat yourself once in a while', 'The Dollar Spot has some gems'],
    },
    B: {
      type: 'B',
      title: 'The Controlled Browser',
      emoji: '🛒',
      description: 'You have self-control... mostly. You\'ll look around a bit, maybe grab a candle or two, but you generally leave with a reasonable haul. You\'ve mastered the art of "just one more thing" without going overboard.',
      traits: ['Balanced', 'Reasonable', 'Self-aware', 'Practical enjoyer'],
      strengths: ['Enjoys shopping without guilt', 'Finds good deals', 'Controlled impulse buying', 'Knows when to stop'],
      weaknesses: ['Sometimes that "one thing" multiplies', 'Clearance sections are tempting', 'Seasonal aisles are your weakness'],
      tips: ['You\'ve got a good balance', 'Set a small treat budget', 'Your approach is healthy'],
    },
    C: {
      type: 'C',
      title: 'The Wandering Soul',
      emoji: '✨',
      description: 'You went in for paper towels and somehow ended up with a new rug, three candles, and a renewed sense of purpose. Target is your therapy, your happy place, and your unintentional financial advisor\'s nightmare.',
      traits: ['Curious', 'Spontaneous', 'Lifestyle-focused', 'Inspiration-seeking'],
      strengths: ['Discovers amazing products', 'Home always looks fresh', 'Great at gift shopping', 'Finds joy in little things'],
      weaknesses: ['Budget? What budget?', 'Time flies in there', 'Cart fills itself somehow', 'The list is merely a suggestion'],
      tips: ['Try leaving cards at home', 'Set a timer on your phone', 'The stuff will still be there next time'],
    },
    D: {
      type: 'D',
      title: 'The Target Enthusiast',
      emoji: '🎯',
      description: 'Target isn\'t a store - it\'s a lifestyle. You could give tours. You know when the new collections drop. Your home is basically the Target catalog. You\'ve accepted this is who you are, and honestly? You\'re thriving.',
      traits: ['Passionate', 'Adventurous', 'Trend-aware', 'Full send energy'],
      strengths: ['Always has the cutest stuff', 'First to know about sales', 'Home is Instagram-ready', 'Shopping brings genuine joy'],
      weaknesses: ['Credit card works overtime', 'Can\'t "just grab one thing"', 'Family stages interventions', 'Receipt could be a CVS receipt'],
      tips: ['Set a monthly Target budget', 'The clearance section isn\'t going anywhere', 'Maybe try pickup orders?'],
    },
  },
};

export default testData;
