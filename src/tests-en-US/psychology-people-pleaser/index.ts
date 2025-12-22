// Are You a People Pleaser?
// Discover your people-pleasing tendencies

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-people-pleaser',
  title: 'Are You a People Pleaser?',
  description: 'Find out if you\'re living for others\' approval or staying true to yourself. Be honest!',
  category: 'psychology',
  emoji: '😊',
  color: 'from-yellow-400 to-amber-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Someone asks your opinion on their terrible haircut:',
      options: [
        { text: 'Be honest but kind about it', type: 'A' },
        { text: 'Find something nice to say', type: 'B' },
        { text: 'Lie and say it looks great', type: 'C' },
        { text: 'Panic internally while complimenting it', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How often do you apologize?',
      options: [
        { text: 'Only when I\'ve actually done something wrong', type: 'A' },
        { text: 'Sometimes more than necessary', type: 'B' },
        { text: 'Constantly, even for things that aren\'t my fault', type: 'C' },
        { text: 'I apologize for existing basically', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When making plans with friends:',
      options: [
        { text: 'I share what I want to do', type: 'A' },
        { text: 'I suggest things but go with the group', type: 'B' },
        { text: 'I always say "I\'m easy, whatever you want!"', type: 'C' },
        { text: 'I agree to things I don\'t even want to do', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone seems mad at you (but hasn\'t said anything):',
      options: [
        { text: 'Ask them if something\'s wrong', type: 'A' },
        { text: 'Wonder a bit but don\'t obsess', type: 'B' },
        { text: 'Replay every interaction trying to figure it out', type: 'C' },
        { text: 'Assume it\'s my fault and try to fix it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with the word "no":',
      options: [
        { text: 'I say it when needed without guilt', type: 'A' },
        { text: 'I can say it but I feel a little bad', type: 'B' },
        { text: 'It\'s really hard for me to say', type: 'C' },
        { text: 'I physically cannot say no', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When you disagree with someone:',
      options: [
        { text: 'I voice my opinion respectfully', type: 'A' },
        { text: 'Depends who it is and how important it is', type: 'B' },
        { text: 'I usually just agree to keep the peace', type: 'C' },
        { text: 'I agree even when I strongly disagree', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How much do you worry about what others think?',
      options: [
        { text: 'Some, but it doesn\'t control my decisions', type: 'A' },
        { text: 'A fair amount, especially with certain people', type: 'B' },
        { text: 'A lot - I think about it constantly', type: 'C' },
        { text: 'It\'s exhausting how much I care', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'You receive a gift you don\'t like:',
      options: [
        { text: 'Thank them genuinely for the thought', type: 'A' },
        { text: 'Act more excited than I am', type: 'B' },
        { text: 'Pretend I love it and feel guilty', type: 'C' },
        { text: 'Use it even though I hate it so they won\'t feel bad', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'After a social interaction, you often:',
      options: [
        { text: 'Move on without overthinking', type: 'A' },
        { text: 'Sometimes wonder if I said anything weird', type: 'B' },
        { text: 'Replay the whole thing analyzing my behavior', type: 'C' },
        { text: 'Cringe at everything I said for hours', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your self-worth is based on:',
      options: [
        { text: 'How I feel about myself', type: 'A' },
        { text: 'A mix of self-opinion and others\' feedback', type: 'B' },
        { text: 'Mostly on how others treat me', type: 'C' },
        { text: 'Almost entirely on others\' approval', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Self-Assured Soul',
      emoji: '💪',
      description: 'You\'re not a people pleaser - you\'re people-friendly but self-assured! You care about others but don\'t sacrifice yourself for their approval. You know your worth and it doesn\'t depend on everyone liking you.',
      traits: ['Confident', 'Authentic', 'Self-assured', 'Healthy boundaries'],
      strengths: ['Stays true to self', 'Doesn\'t burn out for others', 'Genuine relationships', 'Inner peace'],
      weaknesses: ['May seem too blunt to some', 'Could be more diplomatic at times'],
      tips: ['Keep modeling this for others', 'Stay open to feedback', 'Balance confidence with empathy'],
    },
    B: {
      type: 'B',
      title: 'Balanced Diplomat',
      emoji: '⚖️',
      description: 'You care what people think but it doesn\'t run your life. You pick your battles, adjust socially when needed, but still maintain your sense of self. You\'re aware of people-pleasing tendencies but keep them in check.',
      traits: ['Adaptable', 'Self-aware', 'Diplomatic', 'Considerate'],
      strengths: ['Good at social navigation', 'Balances self and others', 'Knows when to flex', 'Growing self-awareness'],
      weaknesses: ['Can slip into pleasing mode', 'May overthink sometimes', 'Approval matters a bit too much'],
      tips: ['Trust your instincts more', 'Notice when you\'re over-adjusting', 'Your opinions are valid'],
    },
    C: {
      type: 'C',
      title: 'Recovering People Pleaser',
      emoji: '🌸',
      description: 'Hi, people pleaser! You go out of your way to make others happy, often at your own expense. You hate conflict, overthink social situations, and need others to like you. Your heart is big - just include yourself in that kindness.',
      traits: ['Kind to a fault', 'Conflict-avoidant', 'Approval-seeking', 'Over-giver'],
      strengths: ['Everyone feels cared for', 'Great at reading rooms', 'Avoids drama', 'Generous'],
      weaknesses: ['Burns out', 'Loses sense of self', 'Attracts takers', 'Internal resentment'],
      tips: ['Your needs matter too', 'Practice small no\'s', 'Not everyone will like you - and that\'s okay', 'Self-care isn\'t selfish'],
    },
    D: {
      type: 'D',
      title: 'Maximum People Pleaser',
      emoji: '🫠',
      description: 'You\'re a people pleaser level: expert. You\'d apologize for breathing too loud. Your whole identity might be wrapped up in making others happy. This is exhausting! It\'s time to find yourself outside of others\' opinions.',
      traits: ['Extreme people-pleasing', 'Lost sense of self', 'Constant anxiety about others', 'Self-abandoning'],
      strengths: ['Incredibly thoughtful', 'Others feel important', 'Attuned to social dynamics', 'Big heart'],
      weaknesses: ['Completely drained', 'No boundaries', 'Attracts unhealthy dynamics', 'Don\'t know what you want'],
      tips: ['This isn\'t sustainable', 'Therapy can help a lot', 'Start asking what YOU want', 'Pleasing everyone means pleasing no one'],
    },
  },
};

export default testData;
