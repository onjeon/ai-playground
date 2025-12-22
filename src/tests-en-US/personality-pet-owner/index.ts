// Your Pet Owner Style
// What kind of pet parent are you?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-pet-owner',
  title: 'What Type of Pet Parent Are You?',
  description: 'Discover your pet parenting style - are you the helicopter pet parent or the chill companion?',
  category: 'personality',
  emoji: '🐾',
  color: 'from-amber-500 to-orange-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your pet\'s birthday is coming up. You:',
      options: [
        { text: 'Plan a party with pet-friendly cake and invite their friends', type: 'A' },
        { text: 'Get them a nice new toy and some treats', type: 'B' },
        { text: 'Give them extra cuddles and maybe a treat', type: 'C' },
        { text: 'Wait, I\'m supposed to celebrate that?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your pet\'s diet consists of:',
      options: [
        { text: 'Organic, grain-free, vet-approved premium food', type: 'A' },
        { text: 'Quality pet food with occasional homemade treats', type: 'B' },
        { text: 'Standard pet food that they seem to like', type: 'C' },
        { text: 'Whatever\'s on sale plus table scraps', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When you leave for work, you:',
      options: [
        { text: 'Set up cameras, leave music playing, and feel guilty', type: 'A' },
        { text: 'Make sure they have water, toys, and a comfy spot', type: 'B' },
        { text: 'Give them a quick pat and head out', type: 'C' },
        { text: 'They barely notice I\'m gone', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your pet\'s sleeping arrangement is:',
      options: [
        { text: 'In my bed, obviously - we share a pillow', type: 'A' },
        { text: 'Their own bed in my room', type: 'B' },
        { text: 'Somewhere comfortable in the house', type: 'C' },
        { text: 'Wherever they want to crash', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When your pet seems unwell, you:',
      options: [
        { text: 'Rush to the emergency vet immediately', type: 'A' },
        { text: 'Monitor closely and call the vet if it continues', type: 'B' },
        { text: 'Wait a day or two to see if they improve', type: 'C' },
        { text: 'They usually bounce back on their own', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your phone camera roll is:',
      options: [
        { text: '90% pictures of my pet', type: 'A' },
        { text: 'A healthy mix with plenty of pet photos', type: 'B' },
        { text: 'Some pet photos here and there', type: 'C' },
        { text: 'I don\'t really photograph my pet much', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Training your pet looks like:',
      options: [
        { text: 'Professional classes and daily practice sessions', type: 'A' },
        { text: 'Basic commands with consistent reinforcement', type: 'B' },
        { text: 'They know a few things, good enough', type: 'C' },
        { text: 'They train me, honestly', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When making vacation plans:',
      options: [
        { text: 'I only go pet-friendly places or don\'t go', type: 'A' },
        { text: 'I find a trusted sitter or boarding facility', type: 'B' },
        { text: 'A friend or family member watches them', type: 'C' },
        { text: 'They manage fine on their own with check-ins', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your pet\'s social life:',
      options: [
        { text: 'Regular playdates, dog parks, and pet-friendly events', type: 'A' },
        { text: 'Occasional interaction with other pets', type: 'B' },
        { text: 'They meet other pets on walks sometimes', type: 'C' },
        { text: 'They\'re not really a social butterfly', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How would you describe your relationship with your pet?',
      options: [
        { text: 'They\'re my child - literally my family', type: 'A' },
        { text: 'They\'re my best friend and companion', type: 'B' },
        { text: 'They\'re a beloved pet that I care for', type: 'C' },
        { text: 'They\'re cool to have around', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Helicopter Pet Parent',
      emoji: '🚁',
      description: 'Your pet is your whole world! You spare no expense or effort for their happiness. They probably have better health insurance than some humans. Your love is intense and beautiful.',
      traits: ['Devoted', 'Nurturing', 'Attentive', 'Generous'],
      strengths: ['Pet is well-cared for', 'Strong bond', 'Catches health issues early', 'Pet knows they\'re loved'],
      weaknesses: ['May over-worry', 'Can be expensive', 'Pet might be spoiled', 'Separation anxiety (for you)'],
      tips: ['It\'s okay if they\'re alone sometimes', 'Balance is healthy', 'Pets are resilient'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Companion',
      emoji: '💝',
      description: 'You\'ve found the sweet spot of pet parenting! You provide love, care, and structure without going overboard. Your pet is happy, healthy, and well-adjusted.',
      traits: ['Responsible', 'Balanced', 'Loving', 'Practical'],
      strengths: ['Healthy pet relationship', 'Good boundaries', 'Sustainable approach', 'Happy pet, happy you'],
      weaknesses: ['May miss indulgent moments', 'Could seem "strict" to helicopter parents'],
      tips: ['Keep doing what you\'re doing', 'Occasional spoiling is fine', 'Great pet parent energy'],
    },
    C: {
      type: 'C',
      title: 'The Chill Guardian',
      emoji: '✌️',
      description: 'You love your pet without all the fuss! You provide what they need without micromanaging their existence. Your pet probably has a pretty relaxed life.',
      traits: ['Laid-back', 'Easygoing', 'Practical', 'Low-maintenance'],
      strengths: ['No pet anxiety', 'Independent pet', 'Sustainable lifestyle', 'Not stressful'],
      weaknesses: ['Might miss some needs', 'Could be more engaged', 'Less bonding time'],
      tips: ['Schedule some quality time', 'Keep up with vet visits', 'A little extra attention goes a long way'],
    },
    D: {
      type: 'D',
      title: 'The Coexisting Roommate',
      emoji: '🤷',
      description: 'You and your pet have an independent relationship. They do their thing, you do yours. It works for you both, even if it\'s not the Instagram pet parent aesthetic.',
      traits: ['Independent', 'Hands-off', 'Practical', 'Minimal'],
      strengths: ['No codependency', 'Pet is self-sufficient', 'Low-pressure relationship'],
      weaknesses: ['May miss warning signs', 'Less bonding', 'Pet may need more attention'],
      tips: ['Check in more often', 'Regular vet visits are important', 'Some pets need more than basics'],
    },
  },
};

export default testData;
