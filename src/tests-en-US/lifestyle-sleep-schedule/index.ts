// What's Your Sleep Schedule Really Like?
// Let's be honest about your relationship with sleep

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-sleep-schedule',
  title: "What's Your Sleep Schedule Really Like?",
  description: 'Early bird? Night owl? Chaos gremlin? Discover the truth about your sleep habits and what they say about you.',
  category: 'lifestyle',
  emoji: '😴',
  color: 'from-indigo-600 to-purple-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'What time do you typically fall asleep?',
      options: [
        { text: 'By 10 PM - early to bed, early to rise', type: 'A' },
        { text: 'Around 11 PM - reasonable adult hours', type: 'B' },
        { text: 'Midnight to 2 AM - the night is young', type: 'C' },
        { text: 'Whenever I finally pass out', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your alarm situation in the morning:',
      options: [
        { text: 'Wake up before it, naturally', type: 'A' },
        { text: 'One alarm, maybe hit snooze once', type: 'B' },
        { text: '5+ alarms, ongoing war with the snooze button', type: 'C' },
        { text: 'What alarm? I wake up when I wake up', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Screen time before bed:',
      options: [
        { text: 'Minimal - I have a wind-down routine', type: 'A' },
        { text: 'Some, but I try to limit it', type: 'B' },
        { text: 'Phone in hand until I drop it on my face', type: 'C' },
        { text: 'Screen is the last thing I see, first thing I see', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Weekend sleep schedule vs weekday:',
      options: [
        { text: 'Pretty consistent - same time every day', type: 'A' },
        { text: 'Maybe an hour or two later on weekends', type: 'B' },
        { text: 'Completely different schedules', type: 'C' },
        { text: 'What\'s a schedule?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with naps:',
      options: [
        { text: 'Don\'t need them - I sleep well at night', type: 'A' },
        { text: 'Occasional weekend nap is nice', type: 'B' },
        { text: 'Naps are essential to my survival', type: 'C' },
        { text: 'I could nap right now honestly', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When do you feel most alert and productive?',
      options: [
        { text: 'Morning - I\'m a sunrise person', type: 'A' },
        { text: 'Mid-day - after I\'ve warmed up', type: 'B' },
        { text: 'Evening/Night - I come alive after dark', type: 'C' },
        { text: 'Brief windows of energy, unpredictable', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your sleep environment:',
      options: [
        { text: 'Optimized - dark, cool, no distractions', type: 'A' },
        { text: 'Pretty good, comfortable setup', type: 'B' },
        { text: 'Could be better but I manage', type: 'C' },
        { text: 'I fall asleep wherever, however', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Caffeine after 2 PM:',
      options: [
        { text: 'Never - it would ruin my sleep', type: 'A' },
        { text: 'Sometimes, but I try to limit it', type: 'B' },
        { text: 'All the time, doesn\'t affect me (I think)', type: 'C' },
        { text: 'Caffeine is my lifeline at all hours', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Hours of sleep you actually get vs need:',
      options: [
        { text: 'Get 7-9 hours, feel great', type: 'A' },
        { text: 'Usually enough, sometimes short', type: 'B' },
        { text: 'Chronically sleep-deprived but functioning', type: 'C' },
        { text: 'Sleep is a suggestion I often ignore', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Be honest - how do you feel about your sleep habits?',
      options: [
        { text: 'Pretty proud of them actually', type: 'A' },
        { text: 'Decent, room for improvement', type: 'B' },
        { text: 'Know they\'re bad, struggle to change', type: 'C' },
        { text: 'What are sleep habits?', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Sleep Champion',
      emoji: '🌅',
      description: 'You\'ve cracked the code. Consistent sleep schedule, proper wind-down routine, and you actually feel rested. You\'re probably a morning person who judges the rest of us (fairly). Teach us your ways.',
      traits: ['Disciplined', 'Well-rested', 'Morning person', 'Organized'],
      strengths: ['Peak energy in the morning', 'Consistent routine', 'Healthy habits', 'Actually functional'],
      weaknesses: ['Might miss late-night fun', 'Can seem rigid', 'Social events end early for you'],
      tips: ['You\'re doing great', 'Occasional late night won\'t kill you', 'Share your secrets'],
    },
    B: {
      type: 'B',
      title: 'The Reasonable Sleeper',
      emoji: '😊',
      description: 'You\'ve got a decent thing going. Not perfect, but you generally get enough sleep and function well. You\'re in the healthy middle - good enough to not worry, flexible enough to live.',
      traits: ['Balanced', 'Flexible', 'Functional', 'Sensible'],
      strengths: ['Gets enough sleep mostly', 'Adaptable schedule', 'Not overly rigid', 'Functions well'],
      weaknesses: ['Could be better', 'Occasional tired days', 'Room for improvement'],
      tips: ['You\'re doing fine', 'Small improvements add up', 'Don\'t stress about perfection'],
    },
    C: {
      type: 'C',
      title: 'The Night Owl',
      emoji: '🦉',
      description: 'Morning is evil and night is when you come alive. You\'ve accepted this about yourself even if society hasn\'t. The snooze button is your nemesis and coffee is your best friend.',
      traits: ['Night person', 'Creative hours late', 'Snooze-dependent', 'Caffeine-powered'],
      strengths: ['Peak productivity at night', 'Great for creative work', 'Embraced your nature', 'Late night socializing'],
      weaknesses: ['Mornings are painful', 'Chronically tired in AM', 'Society isn\'t built for you'],
      tips: ['Accept your nature but manage it', 'Some morning adaptation helps', 'You\'re not broken, just nocturnal'],
    },
    D: {
      type: 'D',
      title: 'The Sleep Anarchist',
      emoji: '🌀',
      description: 'Schedule? What schedule? You sleep when tired, wake when you must, and have completely abandoned any pretense of a normal circadian rhythm. You\'re basically running on chaos and caffeine.',
      traits: ['Chaotic', 'Adaptable', 'Unpredictable', 'Survival mode'],
      strengths: ['Can sleep anywhere anytime', 'Maximum flexibility', 'Low expectations', 'Somehow still alive'],
      weaknesses: ['Chronically exhausted', 'Health concerns', 'What is "rested"?'],
      tips: ['Your body is begging for mercy', 'One small routine might help', 'Sleep is actually important'],
    },
  },
};

export default testData;
