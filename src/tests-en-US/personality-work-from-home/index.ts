// Your Work From Home Style
// How do you thrive in remote work?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-work-from-home',
  title: 'What\'s Your Work From Home Style?',
  description: 'Discover your remote work personality - are you a productivity machine or a cozy couch worker?',
  category: 'personality',
  emoji: '🏠',
  color: 'from-violet-500 to-purple-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your morning WFH routine starts with:',
      options: [
        { text: 'Shower, get dressed, at my desk by 8 AM sharp', type: 'A' },
        { text: 'Coffee first, then ease into emails', type: 'B' },
        { text: 'Roll out of bed 5 minutes before the first meeting', type: 'C' },
        { text: 'A workout or walk before starting work', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your work-from-home outfit is:',
      options: [
        { text: 'Business casual - dressed like I might go to the office', type: 'A' },
        { text: 'Nice top, questionable bottoms', type: 'B' },
        { text: 'Pajamas until there\'s a video call', type: 'C' },
        { text: 'Comfortable athleisure - ready for anything', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your home office setup is:',
      options: [
        { text: 'A dedicated room with proper desk, chair, and lighting', type: 'A' },
        { text: 'A corner of a room with a decent setup', type: 'B' },
        { text: 'My couch with a laptop', type: 'C' },
        { text: 'I move around - kitchen, patio, coffee shop', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When it comes to work-life boundaries:',
      options: [
        { text: 'Strict 9-5, then I shut down completely', type: 'A' },
        { text: 'Pretty good, but I check emails occasionally after hours', type: 'B' },
        { text: 'What boundaries? Work and life are blended', type: 'C' },
        { text: 'I work when I\'m productive, rest when I\'m not', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your Zoom background is:',
      options: [
        { text: 'My actual, well-organized office', type: 'A' },
        { text: 'A tasteful virtual background', type: 'B' },
        { text: 'Blur on - no one needs to see my mess', type: 'C' },
        { text: 'Whatever\'s behind me - I don\'t care', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Lunch break looks like:',
      options: [
        { text: 'Scheduled time away from my desk', type: 'A' },
        { text: 'Eating while catching up on personal stuff', type: 'B' },
        { text: 'What lunch break? I snack all day', type: 'C' },
        { text: 'A proper break - maybe a walk or quick workout', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your biggest WFH distraction is:',
      options: [
        { text: 'I don\'t really get distracted', type: 'A' },
        { text: 'My phone and social media', type: 'B' },
        { text: 'My bed calling my name', type: 'C' },
        { text: 'Wanting to do non-work activities', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your WFH productivity level compared to office:',
      options: [
        { text: 'Way more productive at home', type: 'A' },
        { text: 'About the same', type: 'B' },
        { text: 'Honestly less productive, but I manage', type: 'C' },
        { text: 'Depends on the day and my energy', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you have a meeting-free day:',
      options: [
        { text: 'Deep work mode - get so much done', type: 'A' },
        { text: 'Balanced between tasks and breaks', type: 'B' },
        { text: 'Start slow, panic work later', type: 'C' },
        { text: 'Use the flexibility to run errands and work later', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your thoughts on returning to the office:',
      options: [
        { text: 'I\'d be fine either way - I\'m productive anywhere', type: 'A' },
        { text: 'Hybrid sounds nice', type: 'B' },
        { text: 'Please no, I love working from home', type: 'C' },
        { text: 'I\'d like some social interaction but with flexibility', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Structured Professional',
      emoji: '💼',
      description: 'You treat WFH like a real office - because it is! You have routines, boundaries, and a setup that would make any productivity guru proud. Your discipline is admirable.',
      traits: ['Disciplined', 'Organized', 'Professional', 'Focused'],
      strengths: ['High productivity', 'Great work-life boundaries', 'Reliable and consistent', 'Self-motivated'],
      weaknesses: ['May be too rigid', 'Might miss the flexibility benefits', 'Can seem intense to others'],
      tips: ['Allow yourself some flexibility', 'It\'s okay to work from the couch sometimes', 'Embrace the WFH perks'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Remote Worker',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot! You maintain professionalism while enjoying the perks of working from home. You know when to be serious and when to be comfortable.',
      traits: ['Balanced', 'Adaptable', 'Practical', 'Flexible'],
      strengths: ['Good boundaries', 'Manages expectations well', 'Enjoys WFH benefits', 'Presentable when needed'],
      weaknesses: ['Sometimes slips on routines', 'May blur lines occasionally', 'Could optimize more'],
      tips: ['Keep refining your balance', 'Don\'t let small habits slip', 'Protect your boundaries'],
    },
    C: {
      type: 'C',
      title: 'The Comfort Maximizer',
      emoji: '🛋️',
      description: 'You\'re living the WFH dream! Why get dressed when you can be cozy? You\'ve mastered the art of looking presentable from the shoulders up while maximizing comfort.',
      traits: ['Comfort-seeking', 'Laid-back', 'Authentic', 'Resourceful'],
      strengths: ['Stress-free approach', 'Honest about work style', 'Gets the job done eventually', 'Enjoys life'],
      weaknesses: ['Productivity may suffer', 'Weak boundaries', 'Procrastination tendency'],
      tips: ['Add more structure to your day', 'Getting dressed can boost productivity', 'Set clearer work-life boundaries'],
    },
    D: {
      type: 'D',
      title: 'The Flexible Optimizer',
      emoji: '🔄',
      description: 'You use WFH to work WITH your natural rhythms, not against them. You know when you\'re most productive and structure your day accordingly. Freedom is your fuel.',
      traits: ['Flexible', 'Self-aware', 'Active', 'Independent'],
      strengths: ['Works with natural energy', 'Takes real breaks', 'Uses flexibility wisely', 'Maintains wellness'],
      weaknesses: ['May seem inconsistent to others', 'Schedule hard to predict', 'Can over-optimize'],
      tips: ['Communicate your schedule to teammates', 'Some consistency helps collaboration', 'Don\'t sacrifice focus for flexibility'],
    },
  },
};

export default testData;
