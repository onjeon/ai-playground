// Your Weekend Vibe
// How do you spend your free time?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-weekend-vibe',
  title: 'What\'s Your Weekend Vibe?',
  description: 'Discover how you recharge - adventure seeker, homebody, social butterfly, or productivity machine?',
  category: 'personality',
  emoji: '🎉',
  color: 'from-indigo-500 to-purple-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'It\'s Friday evening. You\'re most likely:',
      options: [
        { text: 'Already out or making plans to go out', type: 'A' },
        { text: 'Excited to start a project or catch up on tasks', type: 'B' },
        { text: 'Planning a chill night in with snacks', type: 'C' },
        { text: 'Heading somewhere new - hiking, road trip, event', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal Saturday morning:',
      options: [
        { text: 'Brunch with friends', type: 'A' },
        { text: 'Getting a head start on the to-do list', type: 'B' },
        { text: 'Sleeping in and slow coffee', type: 'C' },
        { text: 'An early adventure - farmers market, hike, exploring', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When you have no plans, you feel:',
      options: [
        { text: 'FOMO - I should find something to do', type: 'A' },
        { text: 'Restless - I need to be productive', type: 'B' },
        { text: 'Happy - this is the best kind of weekend', type: 'C' },
        { text: 'Excited - time for spontaneous adventure', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your Sunday routine includes:',
      options: [
        { text: 'Recovery from Saturday and more social time', type: 'A' },
        { text: 'Meal prep and preparing for the week', type: 'B' },
        { text: 'Maximum relaxation before Monday', type: 'C' },
        { text: 'Squeezing in one more activity', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'A perfect weekend for you would include:',
      options: [
        { text: 'Good friends, good food, good conversations', type: 'A' },
        { text: 'Accomplishing something meaningful', type: 'B' },
        { text: 'Rest, recharge, and comfort', type: 'C' },
        { text: 'New experiences and memorable moments', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with weekend chores:',
      options: [
        { text: 'I fit them around my social plans', type: 'A' },
        { text: 'I knock them out first so I can relax', type: 'B' },
        { text: 'I do the minimum required', type: 'C' },
        { text: 'They can wait - weekends are for living', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When friends invite you to something last minute:',
      options: [
        { text: 'Usually yes! I love spontaneous plans', type: 'A' },
        { text: 'Depends if it fits my schedule', type: 'B' },
        { text: 'Probably not - I was enjoying doing nothing', type: 'C' },
        { text: 'What is it? If it sounds fun, I\'m in', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'You feel most recharged after a weekend of:',
      options: [
        { text: 'Lots of social interaction', type: 'A' },
        { text: 'Being productive and checking things off', type: 'B' },
        { text: 'Doing absolutely nothing', type: 'C' },
        { text: 'Having new experiences', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your weekend screen time is mostly:',
      options: [
        { text: 'Texting friends and checking social media', type: 'A' },
        { text: 'YouTube tutorials or learning something new', type: 'B' },
        { text: 'Netflix, gaming, or content consumption', type: 'C' },
        { text: 'Just for navigation and capturing moments', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'By Sunday night, you usually feel:',
      options: [
        { text: 'Socially fulfilled but tired', type: 'A' },
        { text: 'Accomplished and ready for Monday', type: 'B' },
        { text: 'Rested but wishing for more weekend', type: 'C' },
        { text: 'Energized from the experiences', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Social Butterfly',
      emoji: '🦋',
      description: 'Your weekends revolve around people! You recharge through connection and conversation. Your calendar is full of brunches, parties, and hangouts. FOMO is real, but so is your joy from being with others.',
      traits: ['Social', 'Extroverted', 'Connected', 'Fun-loving'],
      strengths: ['Rich social life', 'Strong relationships', 'Great at planning events', 'Makes memories'],
      weaknesses: ['May overcommit', 'Needs more alone time', 'Can feel exhausted'],
      tips: ['Schedule some solo recharge time', 'It\'s okay to say no sometimes', 'Quality over quantity'],
    },
    B: {
      type: 'B',
      title: 'The Productive Planner',
      emoji: '📋',
      description: 'Weekends are when you get things done! Whether it\'s personal projects, errands, or self-improvement, you feel best when you\'re being productive. You probably have a color-coded calendar.',
      traits: ['Organized', 'Goal-oriented', 'Responsible', 'Efficient'],
      strengths: ['Great at adulting', 'Always prepared for the week', 'Achieves goals', 'Reliable'],
      weaknesses: ['May forget to actually relax', 'Can feel guilty doing nothing', 'Burnout risk'],
      tips: ['Schedule rest like you schedule tasks', 'Productivity isn\'t your worth', 'Learn to enjoy doing nothing'],
    },
    C: {
      type: 'C',
      title: 'The Cozy Homebody',
      emoji: '🏠',
      description: 'Your weekend happy place is at home, in your comfy clothes, with no obligations. You understand the art of rest and recharge. Your couch knows you well, and that\'s exactly how you like it.',
      traits: ['Relaxed', 'Content', 'Independent', 'Low-key'],
      strengths: ['Truly recharges', 'Low-maintenance', 'Self-sufficient', 'No burnout'],
      weaknesses: ['May miss out on experiences', 'Could isolate too much', 'Others may not understand'],
      tips: ['Say yes to one social thing a month', 'Try something new occasionally', 'Balance rest with activity'],
    },
    D: {
      type: 'D',
      title: 'The Adventure Seeker',
      emoji: '🗺️',
      description: 'Weekends are for experiences! You\'d rather be exploring, trying something new, or making memories. Sitting still feels like wasting precious time. Life is short, weekends are shorter!',
      traits: ['Adventurous', 'Curious', 'Energetic', 'Spontaneous'],
      strengths: ['Rich experiences', 'Great stories to tell', 'Lives life fully', 'Open to new things'],
      weaknesses: ['May not rest enough', 'Can overschedule', 'Expense concerns'],
      tips: ['Rest is also productive', 'Not every weekend needs an adventure', 'Sometimes boring is good'],
    },
  },
};

export default testData;
