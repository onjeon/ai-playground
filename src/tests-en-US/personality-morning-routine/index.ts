// Your Morning Routine Style
// How do you start your day?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-morning-routine',
  title: 'What\'s Your Morning Routine Style?',
  description: 'Discover if you\'re a 5 AM club member, a snooze button champion, or something in between.',
  category: 'personality',
  emoji: '🌅',
  color: 'from-orange-400 to-yellow-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your alarm goes off. You:',
      options: [
        { text: 'Already awake - I beat my alarm', type: 'A' },
        { text: 'Get up on the first ring', type: 'B' },
        { text: 'Hit snooze once or twice', type: 'C' },
        { text: 'Snooze until the last possible second', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'The first thing you do in the morning is:',
      options: [
        { text: 'Workout or meditate', type: 'A' },
        { text: 'Make my bed and get ready', type: 'B' },
        { text: 'Check my phone while still in bed', type: 'C' },
        { text: 'Lie there questioning existence', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your morning coffee/breakfast situation:',
      options: [
        { text: 'Part of my sacred morning ritual', type: 'A' },
        { text: 'Quick and efficient before heading out', type: 'B' },
        { text: 'Grab something on the go', type: 'C' },
        { text: 'Coffee is my breakfast', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How far in advance do you wake up before you need to be somewhere?',
      options: [
        { text: '2+ hours - I have a whole routine', type: 'A' },
        { text: 'About an hour - comfortable buffer', type: 'B' },
        { text: '30-45 minutes - I know my timing', type: 'C' },
        { text: 'Just enough to get there (barely) on time', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your morning mood is typically:',
      options: [
        { text: 'Energized and ready to conquer the day', type: 'A' },
        { text: 'Calm and focused', type: 'B' },
        { text: 'Neutral - I warm up as the day goes on', type: 'C' },
        { text: 'Don\'t talk to me until I\'ve had coffee', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'On weekends, you wake up:',
      options: [
        { text: 'Same time as weekdays - consistency is key', type: 'A' },
        { text: 'A bit later but still early-ish', type: 'B' },
        { text: 'When I naturally wake up', type: 'C' },
        { text: 'Noon-ish if no one bothers me', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your morning routine includes:',
      options: [
        { text: 'Exercise, journaling, meditation, skincare...', type: 'A' },
        { text: 'Shower, get ready, have breakfast', type: 'B' },
        { text: 'The basics - whatever needs to happen', type: 'C' },
        { text: 'Survival mode - just making it out the door', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you feel about mornings?',
      options: [
        { text: 'Love them - they\'re my most productive time', type: 'A' },
        { text: 'They\'re fine - a necessary part of the day', type: 'B' },
        { text: 'Neutral - I\'m more of an afternoon person', type: 'C' },
        { text: 'Mornings are my enemy', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you\'re running late in the morning:',
      options: [
        { text: 'This rarely happens to me', type: 'A' },
        { text: 'I have a quick routine for emergencies', type: 'B' },
        { text: 'I skip some steps and rush', type: 'C' },
        { text: 'Story of my life - I\'m always rushing', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ideal morning would include:',
      options: [
        { text: 'Time for exercise, planning, and self-care', type: 'A' },
        { text: 'A good breakfast and time to prepare', type: 'B' },
        { text: 'Sleeping in a little and a relaxed start', type: 'C' },
        { text: 'No alarm, wake up naturally, no rush', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The 5AM Club Member',
      emoji: '🏃',
      description: 'You\'re a morning person through and through! You see mornings as sacred time for self-improvement. Your routine would make productivity gurus jealous. You\'ve probably already accomplished more before 9 AM than most people do all day.',
      traits: ['Disciplined', 'Proactive', 'Energetic', 'Goal-oriented'],
      strengths: ['Maximum productivity', 'Great habits', 'Consistent energy', 'Time for self-care'],
      weaknesses: ['May be annoying to night owls', 'Rigid schedule', 'Early bedtime required'],
      tips: ['Not everyone needs to wake up at 5AM', 'Flexibility is also a strength', 'Enjoy sleeping in occasionally'],
    },
    B: {
      type: 'B',
      title: 'The Steady Riser',
      emoji: '☀️',
      description: 'You\'ve got a healthy, balanced approach to mornings. You wake up with purpose, have a sensible routine, and start your day on the right foot without being extreme about it. Well done!',
      traits: ['Balanced', 'Reliable', 'Practical', 'Consistent'],
      strengths: ['Good habits', 'Realistic routine', 'Adaptable', 'Dependable'],
      weaknesses: ['Could optimize more', 'May feel like you should do more', 'Morning autopilot'],
      tips: ['Your routine works - don\'t fix what isn\'t broken', 'Try adding one new element', 'Celebrate your consistency'],
    },
    C: {
      type: 'C',
      title: 'The Gradual Waker',
      emoji: '🛏️',
      description: 'Mornings aren\'t your peak time, and that\'s okay! You ease into the day, do what needs to be done, and save your best energy for later. You\'re proof that not everyone needs to be a morning person to be successful.',
      traits: ['Adaptable', 'Low-pressure', 'Realistic', 'Easy-going'],
      strengths: ['No morning stress', 'Flexible approach', 'Comfortable pace', 'Peaks later in the day'],
      weaknesses: ['May rush sometimes', 'Miss out on quiet morning hours', 'Could establish better routines'],
      tips: ['Try waking up 15 minutes earlier', 'Prepare the night before', 'Find a morning activity you enjoy'],
    },
    D: {
      type: 'D',
      title: 'The Snooze Champion',
      emoji: '😴',
      description: 'You and mornings have a complicated relationship. Sleep is precious, alarms are evil, and coffee is survival fuel. You might be a night owl trapped in an early-bird world. Your real productivity comes later in the day.',
      traits: ['Night owl', 'Creative', 'Independent', 'Unconventional'],
      strengths: ['Peak productivity at night', 'Creative thinking', 'Doesn\'t follow the crowd', 'Knows what works for you'],
      weaknesses: ['Morning struggle is real', 'May seem unreliable', 'Often rushing'],
      tips: ['Prepare everything the night before', 'Try a sunrise alarm clock', 'Accept your chronotype and work with it'],
    },
  },
};

export default testData;
