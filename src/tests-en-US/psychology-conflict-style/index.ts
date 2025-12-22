// Your Conflict Resolution Style
// How do you handle disagreements?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-conflict-style',
  title: 'What\'s Your Conflict Resolution Style?',
  description: 'Discover how you navigate disagreements, arguments, and sticky situations. We all have a style!',
  category: 'psychology',
  emoji: '⚡',
  color: 'from-amber-400 to-orange-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You disagree with your friend\'s opinion. You:',
      options: [
        { text: 'State your view clearly and debate it out', type: 'A' },
        { text: 'Listen first, then share your perspective gently', type: 'B' },
        { text: 'Keep it to yourself to avoid tension', type: 'C' },
        { text: 'Find a middle ground you can both agree on', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a heated argument, you typically:',
      options: [
        { text: 'Stand your ground and make your point', type: 'A' },
        { text: 'Try to understand where they\'re coming from', type: 'B' },
        { text: 'Shut down or walk away', type: 'C' },
        { text: 'Look for what you can both agree on', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your coworker takes credit for your idea. You:',
      options: [
        { text: 'Call them out directly', type: 'A' },
        { text: 'Have a private conversation about it', type: 'B' },
        { text: 'Let it go - not worth the drama', type: 'C' },
        { text: 'Find a way to share credit going forward', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When someone is upset with you:',
      options: [
        { text: 'I want to hash it out immediately', type: 'A' },
        { text: 'I ask questions to understand their feelings', type: 'B' },
        { text: 'I feel anxious and want to avoid them', type: 'C' },
        { text: 'I try to find a solution that works for both', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your partner wants to do X, you want to do Y:',
      options: [
        { text: 'Make my case for why Y is better', type: 'A' },
        { text: 'Let\'s talk through both options together', type: 'B' },
        { text: 'We can just do X, it\'s fine', type: 'C' },
        { text: 'Let\'s do half of each or alternate', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'After a conflict, you usually feel:',
      options: [
        { text: 'Satisfied if I made my point', type: 'A' },
        { text: 'Good if we reached mutual understanding', type: 'B' },
        { text: 'Drained and upset regardless of outcome', type: 'C' },
        { text: 'Okay if we found a fair solution', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your conflict motto would be:',
      options: [
        { text: 'Say what you mean and mean what you say', type: 'A' },
        { text: 'Seek first to understand, then to be understood', type: 'B' },
        { text: 'Peace at any cost', type: 'C' },
        { text: 'There\'s always a win-win solution', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'In group disagreements, you\'re usually the one who:',
      options: [
        { text: 'Takes a strong stance and defends it', type: 'A' },
        { text: 'Makes sure everyone feels heard', type: 'B' },
        { text: 'Stays quiet until it blows over', type: 'C' },
        { text: 'Proposes compromises', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you know you\'re right:',
      options: [
        { text: 'I won\'t back down until they see it', type: 'A' },
        { text: 'I explain my reasoning but stay open', type: 'B' },
        { text: 'I might just agree to end the conflict', type: 'C' },
        { text: 'I look for partial agreements', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your biggest conflict challenge:',
      options: [
        { text: 'I can be too aggressive or intimidating', type: 'A' },
        { text: 'Conflicts take a lot of emotional energy', type: 'B' },
        { text: 'I avoid conflicts even when I shouldn\'t', type: 'C' },
        { text: 'I sometimes give up too much to find middle ground', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Competitor',
      emoji: '🦁',
      description: 'You\'re not afraid of conflict - you face it head-on! You state your position clearly and fight for what you believe. You\'re assertive and direct, which is powerful. Just make sure winning isn\'t everything.',
      traits: ['Direct', 'Assertive', 'Competitive', 'Confident'],
      strengths: ['Stands up for themselves', 'Clear communicator', 'Decisive', 'Doesn\'t get walked over'],
      weaknesses: ['Can damage relationships', 'May seem aggressive', 'Hard to back down', 'Can miss others\' perspectives'],
      tips: ['Listen more before responding', 'Relationships matter too', 'Sometimes losing is winning', 'Check your tone'],
    },
    B: {
      type: 'B',
      title: 'The Collaborator',
      emoji: '🤝',
      description: 'You believe every conflict has a solution where everyone wins! You prioritize understanding, communication, and finding resolutions that work for all parties. Conflict for you is a chance to grow closer.',
      traits: ['Understanding', 'Patient', 'Solution-focused', 'Good listener'],
      strengths: ['Creates lasting resolutions', 'Maintains relationships', 'Everyone feels heard', 'Finds creative solutions'],
      weaknesses: ['Time-consuming approach', 'Not all conflicts need this much energy', 'May overthink simple issues'],
      tips: ['Some conflicts need quick decisions', 'Not everyone wants to collaborate', 'It\'s okay to assert sometimes'],
    },
    C: {
      type: 'C',
      title: 'The Avoider',
      emoji: '🐢',
      description: 'You\'d rather keep the peace than rock the boat. Conflict feels uncomfortable, so you tend to sidestep it. This keeps things calm, but some things need to be addressed. Your comfort zone might be holding you back.',
      traits: ['Peace-loving', 'Non-confrontational', 'Anxious about conflict', 'Goes with the flow'],
      strengths: ['Keeps the peace', 'Low drama', 'Flexible', 'Easygoing'],
      weaknesses: ['Issues don\'t get resolved', 'May harbor resentment', 'Needs can go unmet', 'Others may take advantage'],
      tips: ['Some conflict is healthy', 'Your voice matters', 'Start with small disagreements', 'Avoidance doesn\'t mean it\'s gone'],
    },
    D: {
      type: 'D',
      title: 'The Compromiser',
      emoji: '⚖️',
      description: 'You\'re the master of middle ground! You believe in give and take, finding solutions where everyone sacrifices a little. This keeps relationships smooth and conflicts resolved fairly.',
      traits: ['Fair-minded', 'Pragmatic', 'Balanced', 'Diplomatic'],
      strengths: ['Quick resolutions', 'Everyone gets something', 'Maintains harmony', 'Practical solutions'],
      weaknesses: ['May give up too much', 'Not always the best solution', 'Can feel unsatisfying', 'Some issues need a clear stance'],
      tips: ['Sometimes don\'t compromise', 'Know your non-negotiables', 'Full collaboration might be better sometimes'],
    },
  },
};

export default testData;
