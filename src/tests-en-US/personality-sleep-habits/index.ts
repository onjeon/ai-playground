// Your Sleep Habits
// How do you rest?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-sleep-habits',
  title: 'What\'s Your Sleep Personality?',
  description: 'Discover your sleep style - early bird, night owl, or sleep-deprived zombie?',
  category: 'personality',
  emoji: '😴',
  color: 'from-indigo-600 to-purple-700',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal bedtime is:',
      options: [
        { text: '9-10 PM - I\'m an early bird', type: 'A' },
        { text: '10-11 PM - reasonable adult hours', type: 'B' },
        { text: '12-1 AM - night is when I thrive', type: 'C' },
        { text: '2 AM+ - sleep is for the weak', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your sleep schedule on weekends:',
      options: [
        { text: 'Same as weekdays - consistency is key', type: 'A' },
        { text: 'Sleep in an hour or two', type: 'B' },
        { text: 'Completely different - sleep til noon', type: 'C' },
        { text: 'What schedule? I sleep when I crash', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your bedtime routine:',
      options: [
        { text: 'Full routine - skincare, reading, no screens', type: 'A' },
        { text: 'Wind down with some light activity', type: 'B' },
        { text: 'Phone until I\'m sleepy', type: 'C' },
        { text: 'Pass out wherever I am', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How many alarms do you set?',
      options: [
        { text: '1 - I wake up before it anyway', type: 'A' },
        { text: '1-2 - I get up pretty easily', type: 'B' },
        { text: '3-5 - snooze is my friend', type: 'C' },
        { text: '10+ at 5-minute intervals', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you can\'t sleep, you:',
      options: [
        { text: 'Read a book or meditate', type: 'A' },
        { text: 'Try to relax and eventually drift off', type: 'B' },
        { text: 'Scroll my phone until exhausted', type: 'C' },
        { text: 'Give up and do something else', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with naps:',
      options: [
        { text: 'Never - they mess up my sleep schedule', type: 'A' },
        { text: 'Occasional power naps when needed', type: 'B' },
        { text: 'I love a good nap', type: 'C' },
        { text: 'I nap daily, sometimes multiple times', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your sleep environment is:',
      options: [
        { text: 'Optimized - blackout curtains, white noise, perfect temp', type: 'A' },
        { text: 'Comfortable with the basics', type: 'B' },
        { text: 'Whatever works in the moment', type: 'C' },
        { text: 'I can sleep anywhere', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Hours of sleep you actually get:',
      options: [
        { text: '7-9 hours consistently', type: 'A' },
        { text: '6-7 hours usually', type: 'B' },
        { text: '5-6 hours most nights', type: 'C' },
        { text: 'It varies wildly', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Morning alertness level:',
      options: [
        { text: 'I\'m a morning person - ready to go!', type: 'A' },
        { text: 'Takes me about 30 minutes to wake up', type: 'B' },
        { text: 'Don\'t talk to me before coffee', type: 'C' },
        { text: 'I\'m barely functional before noon', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your sleep philosophy:',
      options: [
        { text: 'Sleep is essential for health and performance', type: 'A' },
        { text: 'Sleep is important but life happens', type: 'B' },
        { text: 'I\'ll sleep when I\'m dead', type: 'C' },
        { text: 'My body sleeps when it wants to', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Sleep Optimizer',
      emoji: '🌅',
      description: 'You take sleep seriously! You have routines, schedules, and wake up feeling rested. Your sleep hygiene is impeccable and your body thanks you for it.',
      traits: ['Disciplined', 'Health-conscious', 'Consistent', 'Well-rested'],
      strengths: ['Great energy', 'Optimal health', 'Consistent performance', 'Morning productivity'],
      weaknesses: ['May seem rigid', 'Hard to stay out late', 'Schedules rule your life'],
      tips: ['Occasional flexibility is okay', 'You\'re doing great', 'Live a little sometimes'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Sleeper',
      emoji: '😊',
      description: 'You get decent sleep most of the time and function well. You\'re flexible but still prioritize rest. Not perfect, but sustainable and healthy enough.',
      traits: ['Balanced', 'Flexible', 'Practical', 'Functional'],
      strengths: ['Good enough sleep', 'Flexible schedule', 'Normal energy', 'Sustainable habits'],
      weaknesses: ['Could optimize more', 'Sometimes tired', 'Room for improvement'],
      tips: ['Your balance works', 'Maybe add 30 more minutes', 'Keep it sustainable'],
    },
    C: {
      type: 'C',
      title: 'The Night Owl',
      emoji: '🦉',
      description: 'You come alive at night and mornings are your enemy. You probably do your best work after midnight. The world just isn\'t designed for your natural rhythm.',
      traits: ['Creative', 'Night-loving', 'Unconventional', 'Independent'],
      strengths: ['Peak late-night productivity', 'Creative hours', 'Quiet time to focus', 'True to yourself'],
      weaknesses: ['Mornings are brutal', 'May be sleep deprived', 'Conflicts with 9-5 world'],
      tips: ['Try to find a schedule that works', 'Some consistency helps', 'Protect your sleep time'],
    },
    D: {
      type: 'D',
      title: 'The Sleep Anarchist',
      emoji: '🎲',
      description: 'Sleep schedules? Never heard of them. You sleep when you crash, wake up when your body decides, and embrace the chaos. Your circadian rhythm is abstract art.',
      traits: ['Chaotic', 'Adaptable', 'Flexible', 'Unpredictable'],
      strengths: ['Can sleep anywhere anytime', 'No schedule stress', 'Extremely flexible', 'Survives on little sleep'],
      weaknesses: ['Probably tired always', 'Health impact', 'Unpredictable energy'],
      tips: ['Some routine would help', 'Your body needs rest', 'Try consistent wake times at least'],
    },
  },
};

export default testData;
