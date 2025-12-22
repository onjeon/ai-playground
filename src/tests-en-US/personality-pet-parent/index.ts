// What Kind of Pet Parent Are You?
// How you love your fur babies

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-pet-parent',
  title: 'What Kind of Pet Parent Are You?',
  description: 'From matching outfits to strict schedules - discover your pet parenting style and what it says about you!',
  category: 'personality',
  emoji: '🐾',
  color: 'from-amber-400 to-orange-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your pet\'s Instagram presence is:',
      options: [
        { text: 'They don\'t have one - they\'re a pet, not an influencer', type: 'A' },
        { text: 'They appear in my posts sometimes', type: 'B' },
        { text: 'They have their own account with regular content', type: 'C' },
        { text: 'They\'re verified with brand partnerships', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your pet\'s birthday celebration looks like:',
      options: [
        { text: 'Maybe an extra treat - it\'s just another day', type: 'A' },
        { text: 'A special meal and some extra love', type: 'B' },
        { text: 'A party with a cake and presents', type: 'C' },
        { text: 'Full themed party with invited guests', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your pet\'s wardrobe consists of:',
      options: [
        { text: 'Nothing - they have fur', type: 'A' },
        { text: 'A coat for cold weather, maybe a bandana', type: 'B' },
        { text: 'Multiple outfits for different occasions', type: 'C' },
        { text: 'Matching outfits with me for every season', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How often do you talk to your pet?',
      options: [
        { text: 'Basic commands only', type: 'A' },
        { text: 'Normal pet-owner conversations', type: 'B' },
        { text: 'Full conversations like they understand every word', type: 'C' },
        { text: 'They\'re my therapist, best friend, and confidant', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your pet\'s sleeping arrangement:',
      options: [
        { text: 'Their bed, in their space', type: 'A' },
        { text: 'Their bed in my room', type: 'B' },
        { text: 'On my bed, with boundaries', type: 'C' },
        { text: 'We share a pillow and I wouldn\'t have it any other way', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your approach to pet food:',
      options: [
        { text: 'Quality food that meets their needs', type: 'A' },
        { text: 'Good brand with occasional treats', type: 'B' },
        { text: 'Premium organic food with supplements', type: 'C' },
        { text: 'Home-cooked meals and only the finest treats', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you\'re away from your pet:',
      options: [
        { text: 'They\'re fine - pets are independent', type: 'A' },
        { text: 'I think about them but don\'t stress', type: 'B' },
        { text: 'I check the pet cam multiple times a day', type: 'C' },
        { text: 'I experience genuine separation anxiety', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your pet\'s toys situation:',
      options: [
        { text: 'A few basics - they don\'t need much', type: 'A' },
        { text: 'A good selection of favorites', type: 'B' },
        { text: 'A whole collection, organized by type', type: 'C' },
        { text: 'They have more toys than some children', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone criticizes your pet parenting:',
      options: [
        { text: 'Consider if they have a point', type: 'A' },
        { text: 'Politely disagree but stay open', type: 'B' },
        { text: 'Defend my choices - I know my pet best', type: 'C' },
        { text: 'Take it as a personal attack on my family', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your phone camera roll is:',
      options: [
        { text: 'Maybe 10% pet photos', type: 'A' },
        { text: '30% pet content - reasonable', type: 'B' },
        { text: '60% pet - they\'re just so photogenic', type: 'C' },
        { text: '95% pet and I\'ve been asked to stop showing them', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Practical Pet Owner',
      emoji: '✔️',
      description: 'You love your pet, but you keep things sensible. They\'re well-cared for, healthy, and happy without the excessive extras. You understand they\'re an animal, and you respect that while still being a great pet owner.',
      traits: ['Practical', 'Balanced', 'Sensible', 'Grounded'],
      strengths: ['Financially reasonable', 'Healthy boundaries', 'Pet has basic needs met well', 'Low-maintenance pet parent'],
      weaknesses: ['Might seem cold to pet obsessed friends', 'Could miss out on pet bonding', 'May not understand the hype'],
      tips: ['A little spoiling won\'t hurt', 'Pets do benefit from enrichment', 'Your approach is totally valid'],
    },
    B: {
      type: 'B',
      title: 'The Loving Pet Parent',
      emoji: '💕',
      description: 'You\'ve found the sweet spot. Your pet is family, gets treats and love, but you haven\'t lost your grip on reality. You celebrate them without going overboard. This is healthy pet parenting goals.',
      traits: ['Caring', 'Balanced', 'Attentive', 'Reasonable'],
      strengths: ['Pet is happy and healthy', 'Good boundaries', 'Genuine bond without excess', 'Sustainable approach'],
      weaknesses: ['Sometimes tempted to spoil more', 'May feel judged by pet super-fans', 'Balance can be hard'],
      tips: ['You\'re doing great', 'Trust your instincts', 'Your pet is lucky to have you'],
    },
    C: {
      type: 'C',
      title: 'The Devoted Pet Parent',
      emoji: '🌟',
      description: 'Your pet is basically your child. They have wardrobes, social media presence, and you celebrate every milestone. You\'ve accepted that "crazy pet person" is part of your identity, and you\'re thriving.',
      traits: ['Devoted', 'Generous', 'Attentive', 'Enthusiastic'],
      strengths: ['Pet lives their best life', 'Strong bond', 'Lots of enrichment', 'Always putting pet first'],
      weaknesses: ['Budget might be stretched', 'People may not understand', 'Separation anxiety is real'],
      tips: ['Make sure you have your own life too', 'Pet savings account is smart', 'Your love is beautiful'],
    },
    D: {
      type: 'D',
      title: 'The Obsessed Pet Parent',
      emoji: '👑',
      description: 'Your pet isn\'t a pet - they\'re royalty, your best friend, and the center of your universe. You\'ve gone full pet parent mode and there\'s no going back. Matching outfits, gourmet meals, and a camera roll that\'s basically a shrine.',
      traits: ['Obsessive', 'Generous', 'Devoted', 'No boundaries'],
      strengths: ['Pet is literally living their best life', 'Unmatched devotion', 'Pet will never want for anything', 'Pure love'],
      weaknesses: ['Financially intense', 'Might prioritize pet over humans', 'Others may worry about you'],
      tips: ['Make sure your human needs are met too', 'Budget check might be healthy', 'Your pet loves you regardless of extras'],
    },
  },
};

export default testData;
