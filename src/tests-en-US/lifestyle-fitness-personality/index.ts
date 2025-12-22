// Your Fitness Motivation Type
// What drives your workout (or lack thereof)?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-fitness-personality',
  title: 'Your Fitness Motivation Type',
  description: 'Are you a gym rat, a reluctant mover, or somewhere in between? Discover what actually motivates you to exercise (if anything).',
  category: 'lifestyle',
  emoji: '💪',
  color: 'from-red-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'What motivates you to work out?',
      options: [
        { text: 'I genuinely love how it feels', type: 'A' },
        { text: 'Results and goals - I like tracking progress', type: 'B' },
        { text: 'Social aspect - classes, friends, community', type: 'C' },
        { text: 'Guilt, obligation, or because I "should"', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal workout scenario:',
      options: [
        { text: 'Solo session with my headphones, in the zone', type: 'A' },
        { text: 'Structured program with measurable goals', type: 'B' },
        { text: 'Group class or workout buddy situation', type: 'C' },
        { text: 'As short as possible while still "counting"', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you feel about the gym?',
      options: [
        { text: 'It\'s my happy place, I love it there', type: 'A' },
        { text: 'A tool to reach my goals, I respect it', type: 'B' },
        { text: 'Prefer group fitness or alternative workouts', type: 'C' },
        { text: 'Intimidating, boring, or not for me', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Rest day energy:',
      options: [
        { text: 'Restless - might still do a light workout', type: 'A' },
        { text: 'Important for recovery, I plan them intentionally', type: 'B' },
        { text: 'Depends on what friends are doing', type: 'C' },
        { text: 'Every day is rest day potential', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you miss a workout:',
      options: [
        { text: 'Genuinely disappointed, need to move', type: 'A' },
        { text: 'Adjust the schedule and get back on track', type: 'B' },
        { text: 'Oh well, there\'s always tomorrow', type: 'C' },
        { text: 'What workout was I missing?', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your fitness content consumption:',
      options: [
        { text: 'Deep into fitness influencers and programs', type: 'A' },
        { text: 'Follow some accounts, save workouts occasionally', type: 'B' },
        { text: 'Class schedule is my guide', type: 'C' },
        { text: 'The algorithm shows me food videos, not fitness', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Workout clothes situation:',
      options: [
        { text: 'Full athleisure wardrobe, love workout gear', type: 'A' },
        { text: 'Functional pieces that work for my activities', type: 'B' },
        { text: 'Cute stuff for class, presentation matters', type: 'C' },
        { text: 'Old t-shirts and whatever\'s comfortable', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you feel after a workout?',
      options: [
        { text: 'Amazing - this is why I do it', type: 'A' },
        { text: 'Accomplished - checked off the list', type: 'B' },
        { text: 'Good, especially if it was fun', type: 'C' },
        { text: 'Relieved it\'s over', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Early morning workout call:',
      options: [
        { text: 'Love it - best way to start the day', type: 'A' },
        { text: 'If that\'s when I can fit it in, sure', type: 'B' },
        { text: 'Only if someone else is making me', type: 'C' },
        { text: 'Absolutely not', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest relationship with exercise:',
      options: [
        { text: 'It\'s a core part of my identity', type: 'A' },
        { text: 'A healthy habit I\'ve built and maintain', type: 'B' },
        { text: 'Fun when social, struggle alone', type: 'C' },
        { text: 'We\'re not close but we wave occasionally', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The True Fitness Lover',
      emoji: '🔥',
      description: 'Exercise isn\'t a chore, it\'s your therapy. You genuinely love moving your body and feel off when you don\'t. The endorphins are real for you, and fitness is genuinely part of who you are.',
      traits: ['Passionate', 'Consistent', 'Intrinsically motivated', 'Active lifestyle'],
      strengths: ['Never need external motivation', 'Exercise is sustainable', 'Great relationship with movement', 'Inspires others'],
      weaknesses: ['Might overdo it', 'Rest is important too', 'Not everyone gets it'],
      tips: ['Listen to your body', 'Rest is part of fitness', 'Your passion is inspiring'],
    },
    B: {
      type: 'B',
      title: 'The Goal-Oriented Achiever',
      emoji: '🎯',
      description: 'You exercise with purpose. Progress photos, tracking apps, and measurable goals keep you going. Fitness is a project you\'re working on, and you approach it with intention and strategy.',
      traits: ['Disciplined', 'Strategic', 'Progress-focused', 'Consistent'],
      strengths: ['Sees results', 'Sustainable habits', 'Structured approach', 'Self-accountable'],
      weaknesses: ['Might be too rigid', 'Fun matters too', 'Results aren\'t everything'],
      tips: ['Enjoy the process not just results', 'Flexibility is a strength', 'You\'ve built great habits'],
    },
    C: {
      type: 'C',
      title: 'The Social Mover',
      emoji: '👯',
      description: 'Exercise is more fun with friends. Group classes, workout buddies, and community keep you motivated. You might not love solo workouts, but you\'ll show up for the social experience.',
      traits: ['Social', 'Community-driven', 'Fun-focused', 'Externally motivated'],
      strengths: ['Exercise feels fun', 'Accountability built in', 'Community support', 'Shows up for others'],
      weaknesses: ['Relies on others', 'Struggles alone', 'Schedule dependent'],
      tips: ['Find your fitness community', 'Solo workouts can grow on you', 'Your social motivation is valid'],
    },
    D: {
      type: 'D',
      title: 'The Reluctant Mover',
      emoji: '🛋️',
      description: 'Let\'s be honest - exercise isn\'t your thing. You know you "should" but the motivation just isn\'t there. And that\'s okay! Movement looks different for everyone and you haven\'t found your thing yet.',
      traits: ['Honest', 'Low-pressure', 'Searching', 'Non-traditional'],
      strengths: ['No fake fitness culture', 'Authentic about it', 'Open to alternatives', 'No gym anxiety'],
      weaknesses: ['Missing benefits of movement', 'Might feel guilty', 'Health could improve'],
      tips: ['Movement doesn\'t have to be "exercise"', 'Find what doesn\'t feel like work', 'Walking counts too'],
    },
  },
};

export default testData;
