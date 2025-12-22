// Your Decision Making Style
// How do you make choices?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-decision-making',
  title: 'What\'s Your Decision Making Style?',
  description: 'Discover how you make choices - analytical thinker, gut follower, or chronic overthinker?',
  category: 'personality',
  emoji: '🤔',
  color: 'from-amber-500 to-orange-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You\'re choosing a restaurant for dinner. You:',
      options: [
        { text: 'Research reviews, menu, and ratings', type: 'A' },
        { text: 'Go with your gut feeling', type: 'B' },
        { text: 'Let someone else decide', type: 'C' },
        { text: 'Spend 30 minutes scrolling and order delivery', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When making a big purchase, you:',
      options: [
        { text: 'Compare options extensively, read reviews', type: 'A' },
        { text: 'Know what you want and buy it', type: 'B' },
        { text: 'Ask friends for recommendations', type: 'C' },
        { text: 'Agonize over it for weeks', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'A friend asks where you want to eat. You say:',
      options: [
        { text: 'I have a specific place in mind', type: 'A' },
        { text: 'I\'m feeling [type of food], any suggestions?', type: 'B' },
        { text: 'I don\'t care, you pick', type: 'C' },
        { text: 'I don\'t know, what do YOU want?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'After making a decision, you:',
      options: [
        { text: 'Feel confident I made the right choice', type: 'A' },
        { text: 'Move on without looking back', type: 'B' },
        { text: 'Hope it was the right one', type: 'C' },
        { text: 'Second-guess myself constantly', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your approach to life decisions (career, relationships):',
      options: [
        { text: 'Pros and cons lists, careful analysis', type: 'A' },
        { text: 'Follow my heart and instincts', type: 'B' },
        { text: 'Seek lots of advice from others', type: 'C' },
        { text: 'Avoid making them as long as possible', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When given too many options, you:',
      options: [
        { text: 'Narrow down systematically', type: 'A' },
        { text: 'Pick one that catches my eye', type: 'B' },
        { text: 'Feel overwhelmed and want fewer choices', type: 'C' },
        { text: 'Freeze completely', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Someone asks for your opinion on something important. You:',
      options: [
        { text: 'Give a well-reasoned recommendation', type: 'A' },
        { text: 'Share my honest gut reaction', type: 'B' },
        { text: 'Avoid being too definitive', type: 'C' },
        { text: 'Say "I don\'t know, what do you think?"', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'A waiter asks if you need more time to order:',
      options: [
        { text: 'No, I decided while reading the menu', type: 'A' },
        { text: 'Give me one more minute', type: 'B' },
        { text: 'What would you recommend?', type: 'C' },
        { text: 'Yes, I need five more minutes (still won\'t decide)', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your decision-making speed is:',
      options: [
        { text: 'Fast once I have the information I need', type: 'A' },
        { text: 'Quick - I trust my instincts', type: 'B' },
        { text: 'Depends on how much input I get', type: 'C' },
        { text: 'Painfully slow', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your biggest decision-making challenge:',
      options: [
        { text: 'Analysis paralysis - too much research', type: 'A' },
        { text: 'Sometimes act too fast', type: 'B' },
        { text: 'Relying too much on others', type: 'C' },
        { text: 'Fear of making the wrong choice', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Analytical Decider',
      emoji: '📊',
      description: 'You make decisions with data and logic! You research, compare, and analyze before choosing. You rarely make impulsive decisions and your choices are well-reasoned.',
      traits: ['Logical', 'Thorough', 'Research-oriented', 'Confident'],
      strengths: ['Well-informed decisions', 'Rarely regrets choices', 'Systematic approach', 'Clear reasoning'],
      weaknesses: ['Can over-analyze', 'May miss opportunities', 'Takes time'],
      tips: ['Sometimes good enough is good enough', 'Trust your gut occasionally', 'Set decision deadlines'],
    },
    B: {
      type: 'B',
      title: 'The Intuitive Decider',
      emoji: '✨',
      description: 'You trust your gut and go with your instincts! You make decisions quickly and confidently. Your intuition is usually right, and you don\'t waste time overthinking.',
      traits: ['Intuitive', 'Confident', 'Decisive', 'Quick'],
      strengths: ['Fast decisions', 'Confident execution', 'Doesn\'t overthink', 'Trusts themselves'],
      weaknesses: ['May miss details', 'Can be impulsive', 'Sometimes too quick'],
      tips: ['Pause on big decisions', 'Some research helps', 'Trust but verify'],
    },
    C: {
      type: 'C',
      title: 'The Collaborative Decider',
      emoji: '👥',
      description: 'You value input from others when making decisions. You seek advice, consider multiple perspectives, and prefer consensus. You\'re thoughtful but sometimes rely too much on others.',
      traits: ['Collaborative', 'Open-minded', 'Considerate', 'Uncertain'],
      strengths: ['Considers many perspectives', 'Inclusive approach', 'Avoids blind spots', 'Good listener'],
      weaknesses: ['May not trust yourself', 'Decisions take longer', 'Can be indecisive'],
      tips: ['Your opinion matters most', 'Practice making solo decisions', 'Trust yourself more'],
    },
    D: {
      type: 'D',
      title: 'The Paralyzed Overthinker',
      emoji: '🌀',
      description: 'Decisions are your nemesis! You see every possible outcome, worry about making the wrong choice, and often avoid deciding altogether. The fear of being wrong is real.',
      traits: ['Cautious', 'Anxious', 'Thorough', 'Avoidant'],
      strengths: ['Considers all angles', 'Careful approach', 'Thoughtful'],
      weaknesses: ['Paralyzed by choice', 'Misses opportunities', 'Stressful process', 'Avoids commitment'],
      tips: ['Set time limits for decisions', 'Good enough beats perfect', 'Most decisions are reversible'],
    },
  },
};

export default testData;
