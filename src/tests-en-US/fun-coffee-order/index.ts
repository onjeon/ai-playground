// What Your Coffee Order Says About You
// Your caffeine choices reveal more than you think!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-coffee-order',
  title: 'What Your Coffee Order Says About You',
  description: 'From black coffee to pumpkin spice, your drink order reveals your true personality!',
  category: 'fun',
  emoji: '☕',
  color: 'from-amber-700 to-orange-800',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You walk into a coffee shop. You\'re ordering:',
      options: [
        { text: 'Black coffee - keep it simple', type: 'A' },
        { text: 'Oat milk latte with a fancy name', type: 'B' },
        { text: 'The seasonal specialty, whatever it is', type: 'C' },
        { text: 'A frappuccino with extra whip and drizzle', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your coffee temperature preference:',
      options: [
        { text: 'Hot. Always hot. Even in summer.', type: 'A' },
        { text: 'Iced is superior, year-round', type: 'B' },
        { text: 'Depends on my mood and the weather', type: 'C' },
        { text: 'Blended into a frozen treat', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you feel about pumpkin spice lattes?',
      options: [
        { text: 'Hard pass. Give me REAL coffee.', type: 'A' },
        { text: 'It\'s fine, I might try one', type: 'B' },
        { text: 'I\'ve been counting down since August!', type: 'C' },
        { text: 'I\'ll take any excuse for a sweet seasonal drink', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your thoughts on coffee customizations:',
      options: [
        { text: 'The fewer modifications, the better', type: 'A' },
        { text: 'A couple tweaks to get it just right', type: 'B' },
        { text: 'I have a very specific order', type: 'C' },
        { text: 'Extra this, substitute that, add syrup, hold the coffee', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'What\'s the vibe when you\'re ordering?',
      options: [
        { text: 'Quick and efficient - I have places to be', type: 'A' },
        { text: 'Friendly chat with the barista', type: 'B' },
        { text: 'Taking my time to decide, reading the whole menu', type: 'C' },
        { text: 'Taking pics of my drink for Instagram obviously', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Coffee shop aesthetic that matches you:',
      options: [
        { text: 'No-frills, good coffee, fast service', type: 'A' },
        { text: 'Cozy indie spot with exposed brick', type: 'B' },
        { text: 'Trendy place with unique drinks and good vibes', type: 'C' },
        { text: 'Instagrammable cafe with colorful drinks', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How often do you try new drinks?',
      options: [
        { text: 'Never. I know what I like.', type: 'A' },
        { text: 'Occasionally, if something looks interesting', type: 'B' },
        { text: 'I love trying seasonal and limited-time drinks', type: 'C' },
        { text: 'Always! The weirder the better!', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your view on decaf:',
      options: [
        { text: 'What\'s the point?', type: 'A' },
        { text: 'Fine for evening coffee', type: 'B' },
        { text: 'Sure, if the drink still tastes good', type: 'C' },
        { text: 'Caffeine is optional, flavor is everything', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone judges your coffee order:',
      options: [
        { text: 'I judge their sweet tooth right back', type: 'A' },
        { text: 'To each their own!', type: 'B' },
        { text: 'Defend my choices passionately', type: 'C' },
        { text: 'Order something even more extra to spite them', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your coffee order at home vs. coffee shops:',
      options: [
        { text: 'Same thing - simple and classic', type: 'A' },
        { text: 'Similar but I treat myself at shops', type: 'B' },
        { text: 'Coffee shops are for the fancy stuff I can\'t make', type: 'C' },
        { text: 'I don\'t make coffee, I only buy it', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Purist',
      emoji: '⚫',
      description: 'Black coffee, no cream, no sugar, no nonsense. You don\'t need frills to feel caffeinated - you need COFFEE. People who order "coffee-flavored sugar drinks" confuse you. You\'re efficient, practical, and probably judge everyone\'s order.',
      traits: ['No-nonsense', 'Efficient', 'Traditional', 'Focused'],
      strengths: ['Gets things done', 'Knows what they want', 'Appreciates quality', 'Not easily swayed'],
      weaknesses: ['Might be too rigid', 'Could be judgmental', 'Missing out on fun flavors'],
      tips: ['Try something sweet once - it won\'t kill you', 'Fun doesn\'t equal weakness', 'Let others enjoy their drinks'],
    },
    B: {
      type: 'B',
      title: 'The Cool Casual',
      emoji: '🧊',
      description: 'You\'ve found your go-to order but you\'re not boring about it. Oat milk? Of course. Iced? Naturally. You\'re trendy without trying too hard, and you probably discovered that viral drink before it went viral.',
      traits: ['Trendy', 'Adaptable', 'Chill', 'Self-assured'],
      strengths: ['Good taste', 'Flexible', 'In the know', 'Balanced approach'],
      weaknesses: ['Might be a bit snobby', 'Strong opinions on milk alternatives'],
      tips: ['Your order is valid', 'Keep being you', 'Share your finds with others'],
    },
    C: {
      type: 'C',
      title: 'The Seasonal Sipper',
      emoji: '🎃',
      description: 'PSL season is YOUR season. You track seasonal menu drops like sports fans track games. Every limited-time drink is a must-try, and your Instagram is full of seasonal drink aesthetics. Life is short - drink the fun coffee!',
      traits: ['Enthusiastic', 'Festive', 'Adventurous', 'Trend-loving'],
      strengths: ['Embraces joy', 'First to try new things', 'Spreads seasonal cheer'],
      weaknesses: ['FOMO on drinks', 'Spending $7 on a latte', 'Overly attached to pumpkin spice'],
      tips: ['Your enthusiasm is infectious', 'Budget for drink spending', 'It\'s okay to love seasonal things'],
    },
    D: {
      type: 'D',
      title: 'The Sweet Tooth',
      emoji: '🍭',
      description: 'Is it even coffee if you can\'t taste the sugar? Your order has whipped cream, drizzle, sprinkles, and probably a fun name. You\'re here for the experience, the aesthetic, and the serotonin. Coffee purists don\'t understand, but who cares?',
      traits: ['Fun-loving', 'Unapologetic', 'Creative', 'Experience-driven'],
      strengths: ['Knows what brings joy', 'No shame', 'Lives life fully', 'Great content creator'],
      weaknesses: ['That\'s a lot of sugar', 'Purists judge you', 'Expensive habits'],
      tips: ['Live your best life', 'Maybe get a side of water', 'Your happiness is valid'],
    },
  },
};

export default testData;
