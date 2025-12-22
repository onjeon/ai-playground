// What's Your Self-Care Style?
// Discover how you take care of yourself

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-self-care-style',
  title: 'What\'s Your Self-Care Style?',
  description: 'Find out how you recharge, relax, and take care of your mental health. Everyone has a style!',
  category: 'psychology',
  emoji: '🛁',
  color: 'from-pink-400 to-rose-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When you\'re stressed, you reach for:',
      options: [
        { text: 'A workout or physical activity', type: 'A' },
        { text: 'Creative outlets - art, music, writing', type: 'B' },
        { text: 'Social time with people I love', type: 'C' },
        { text: 'Alone time - bath, book, or just vibing', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal self-care Sunday:',
      options: [
        { text: 'A long run or hike in nature', type: 'A' },
        { text: 'Making something or learning something new', type: 'B' },
        { text: 'Brunch with friends or family time', type: 'C' },
        { text: 'Pajamas all day, doing absolutely nothing', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What refills your cup fastest?',
      options: [
        { text: 'Moving my body and getting endorphins', type: 'A' },
        { text: 'Creating or expressing myself', type: 'B' },
        { text: 'Quality time with people I care about', type: 'C' },
        { text: 'Complete solitude and rest', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you need a mental health day:',
      options: [
        { text: 'I do something active', type: 'A' },
        { text: 'I work on a project or hobby', type: 'B' },
        { text: 'I make plans with my favorite people', type: 'C' },
        { text: 'I cancel everything and hibernate', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your self-care non-negotiable:',
      options: [
        { text: 'Regular exercise or movement', type: 'A' },
        { text: 'Time for hobbies and creativity', type: 'B' },
        { text: 'Regular connection with loved ones', type: 'C' },
        { text: 'Alone time and quiet', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you process emotions?',
      options: [
        { text: 'Physical movement helps me work through them', type: 'A' },
        { text: 'I express them through creative outlets', type: 'B' },
        { text: 'I talk them through with someone', type: 'C' },
        { text: 'I sit with them alone until they pass', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your happy place is:',
      options: [
        { text: 'Outside, moving, being active', type: 'A' },
        { text: 'In my creative space, making things', type: 'B' },
        { text: 'Surrounded by people I love', type: 'C' },
        { text: 'Cozy at home, doing my own thing', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'If self-care were a prescription, yours would be:',
      options: [
        { text: 'Get moving daily', type: 'A' },
        { text: 'Make time to create', type: 'B' },
        { text: 'Connect with your people', type: 'C' },
        { text: 'Rest and do less', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'You feel most like yourself when:',
      options: [
        { text: 'I\'ve had a good workout', type: 'A' },
        { text: 'I\'ve made something I\'m proud of', type: 'B' },
        { text: 'I\'m with my favorite people', type: 'C' },
        { text: 'I\'ve had quality alone time', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your self-care weakness is:',
      options: [
        { text: 'I might push too hard physically', type: 'A' },
        { text: 'I get lost in projects and forget basic needs', type: 'B' },
        { text: 'I depend too much on others for wellbeing', type: 'C' },
        { text: 'I might isolate too much', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Active Self-Care',
      emoji: '🏃',
      description: 'Movement is medicine for you! You recharge through physical activity - exercise, nature, being in your body. When stressed, you need to move it out. Your self-care is sweaty and endorphin-fueled.',
      traits: ['Physical processor', 'Active lifestyle', 'Needs movement', 'Body-aware'],
      strengths: ['Healthy coping mechanism', 'Physical health priority', 'Natural stress relief', 'Energy management'],
      weaknesses: ['May push too hard', 'Rest is hard for you', 'Injury could derail wellbeing'],
      tips: ['Rest days are productive', 'Try gentle movement too', 'Listen to your body\'s limits'],
    },
    B: {
      type: 'B',
      title: 'Creative Self-Care',
      emoji: '🎨',
      description: 'You recharge through creation and expression! Making things - art, music, writing, crafts - fills your cup. Your self-care is colorful, imaginative, and productive. You process life through creativity.',
      traits: ['Creative soul', 'Expressive', 'Hobby-driven', 'Project-oriented'],
      strengths: ['Healthy emotional outlet', 'Creates meaning', 'Always learning', 'Rich inner life'],
      weaknesses: ['May neglect basic needs', 'Can turn hobbies into pressure', 'Might avoid rest'],
      tips: ['Remember to eat and sleep', 'Not every project needs to be perfect', 'Rest is creative fuel'],
    },
    C: {
      type: 'C',
      title: 'Social Self-Care',
      emoji: '👯',
      description: 'Connection is your self-care! You recharge through quality time with people you love. Talking, laughing, being together - that\'s what fills your cup. Relationships are your wellness strategy.',
      traits: ['People-oriented', 'Relationship-focused', 'External processor', 'Community-minded'],
      strengths: ['Strong support system', 'Never alone in struggles', 'Processes through connection', 'Social wellbeing'],
      weaknesses: ['May depend too much on others', 'Alone time might feel empty', 'Social energy varies'],
      tips: ['Build some solo self-care skills', 'Not everyone is available always', 'You can be your own company too'],
    },
    D: {
      type: 'D',
      title: 'Restorative Self-Care',
      emoji: '🛋️',
      description: 'Your self-care is rest, solitude, and doing less! You recharge by slowing down, being alone, and creating space. A cozy night in is your version of a spa day. Peace and quiet are your prescription.',
      traits: ['Rest-oriented', 'Needs solitude', 'Slow living', 'Internal processor'],
      strengths: ['Knows how to truly rest', 'Doesn\'t need external validation', 'Self-sufficient', 'Avoids burnout'],
      weaknesses: ['May isolate too much', 'Could avoid necessary action', 'Rest can become avoidance'],
      tips: ['Some activity is healthy', 'Connection matters too', 'Notice if rest becomes hiding'],
    },
  },
};

export default testData;
