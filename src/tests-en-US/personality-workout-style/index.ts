// Your Workout Style
// How do you exercise?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-workout-style',
  title: 'What\'s Your Workout Personality?',
  description: 'Discover your fitness style - gym rat, outdoor adventurer, or couch athlete?',
  category: 'personality',
  emoji: '💪',
  color: 'from-green-500 to-emerald-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal workout setting is:',
      options: [
        { text: 'The gym - weights, machines, the works', type: 'A' },
        { text: 'Outdoors - running, hiking, cycling', type: 'B' },
        { text: 'Home workouts or classes', type: 'C' },
        { text: 'Couch to fridge counts as cardio, right?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How often do you exercise?',
      options: [
        { text: '5-7 days a week - it\'s part of my life', type: 'A' },
        { text: '3-4 days a week - pretty consistent', type: 'B' },
        { text: '1-2 times a week when I remember', type: 'C' },
        { text: 'Does walking to the fridge count?', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your motivation to work out:',
      options: [
        { text: 'I genuinely love it and feel off without it', type: 'A' },
        { text: 'It makes me feel good and I want to be healthy', type: 'B' },
        { text: 'I know I should, so I try', type: 'C' },
        { text: 'Motivation? What motivation?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your approach to fitness goals:',
      options: [
        { text: 'Specific goals, tracking, and progress photos', type: 'A' },
        { text: 'General goals - stay healthy, feel good', type: 'B' },
        { text: 'I should probably set some goals', type: 'C' },
        { text: 'My goal is to start... eventually', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you skip a workout, you:',
      options: [
        { text: 'Feel guilty and make up for it tomorrow', type: 'A' },
        { text: 'Rest days are important too', type: 'B' },
        { text: 'One skip becomes many skips', type: 'C' },
        { text: 'Skip implies I had a workout planned', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your workout playlist is:',
      options: [
        { text: 'Carefully curated for maximum pump', type: 'A' },
        { text: 'Music or podcasts that I enjoy', type: 'B' },
        { text: 'Whatever\'s playing at the gym', type: 'C' },
        { text: 'N/A - no workout, no playlist', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your fitness knowledge:',
      options: [
        { text: 'I know my stuff - macros, form, programming', type: 'A' },
        { text: 'I know the basics and what works for me', type: 'B' },
        { text: 'I copy what others do', type: 'C' },
        { text: 'Very limited, honestly', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Group fitness classes:',
      options: [
        { text: 'Sometimes for variety, but I prefer solo', type: 'A' },
        { text: 'I love them - the energy is great!', type: 'B' },
        { text: 'They make me actually show up', type: 'C' },
        { text: 'Sounds terrifying', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Post-workout, you usually:',
      options: [
        { text: 'Protein shake, stretch, log my workout', type: 'A' },
        { text: 'Feel accomplished and enjoy the endorphins', type: 'B' },
        { text: 'Wonder why I don\'t do this more often', type: 'C' },
        { text: 'I don\'t know, I don\'t get there', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest relationship with exercise:',
      options: [
        { text: 'I love it - it\'s a core part of my identity', type: 'A' },
        { text: 'I like how it makes me feel', type: 'B' },
        { text: 'It\'s complicated - on and off', type: 'C' },
        { text: 'We\'re not on speaking terms', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Fitness Enthusiast',
      emoji: '🏋️',
      description: 'Exercise is your lifestyle! You\'re dedicated, knowledgeable, and genuinely love working out. Your gym bag is always packed and gains are always on your mind.',
      traits: ['Dedicated', 'Disciplined', 'Knowledgeable', 'Passionate'],
      strengths: ['Consistent routine', 'Great results', 'Strong habits', 'Healthy lifestyle'],
      weaknesses: ['May be obsessive', 'Rest is hard', 'Can judge others'],
      tips: ['Rest days matter', 'Balance is healthy', 'Enjoy other things too'],
    },
    B: {
      type: 'B',
      title: 'The Active Lifestyle Seeker',
      emoji: '🌿',
      description: 'You exercise because it makes you feel good, not to hit PRs. You enjoy movement, stay reasonably active, and have found a sustainable approach to fitness.',
      traits: ['Balanced', 'Healthy', 'Flexible', 'Motivated'],
      strengths: ['Sustainable habits', 'Enjoys movement', 'Good balance', 'Healthy mindset'],
      weaknesses: ['Could push harder sometimes', 'May plateau', 'Comfort zone'],
      tips: ['Your approach is great', 'Try new things occasionally', 'Keep it enjoyable'],
    },
    C: {
      type: 'C',
      title: 'The Inconsistent Mover',
      emoji: '📉',
      description: 'You know you should exercise and sometimes you do! But consistency is a challenge. You start strong, life happens, and suddenly it\'s been weeks. The cycle continues.',
      traits: ['Well-intentioned', 'Inconsistent', 'Busy', 'Hopeful'],
      strengths: ['Knows importance of exercise', 'Tries', 'Self-aware'],
      weaknesses: ['No routine', 'Gives up easily', 'Starts and stops'],
      tips: ['Start smaller', 'Schedule it like meetings', 'Find something you enjoy'],
    },
    D: {
      type: 'D',
      title: 'The Couch Champion',
      emoji: '🛋️',
      description: 'Exercise and you are not friends. You know you should probably move more, but motivation is nonexistent. Your fitness journey hasn\'t really started yet.',
      traits: ['Honest', 'Sedentary', 'Unmotivated', 'Comfortable'],
      strengths: ['Honest about habits', 'Room for improvement', 'Blank slate'],
      weaknesses: ['Health risks', 'Low energy', 'Missing benefits'],
      tips: ['Start with 10-minute walks', 'Find ANY movement you enjoy', 'It doesn\'t have to be the gym'],
    },
  },
};

export default testData;
