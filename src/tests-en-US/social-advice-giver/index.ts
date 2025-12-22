// What Kind of Advice Giver Are You?
// How do you help when friends come to you?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'social-advice-giver',
  title: 'What Kind of Advice Giver Are You?',
  description: 'Solution finder? Emotional validator? Tough love dealer? Find out how you show up when people need guidance.',
  category: 'social',
  emoji: '💡',
  color: 'from-amber-500 to-yellow-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'A friend comes to you with a problem. First instinct:',
      options: [
        { text: 'Already thinking of solutions', type: 'A' },
        { text: 'Ask how they\'re feeling about it', type: 'B' },
        { text: 'Give them the honest truth they need', type: 'C' },
        { text: 'Just listen, they need to vent', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your advice style tends to be:',
      options: [
        { text: 'Practical - here\'s what you should do', type: 'A' },
        { text: 'Empathetic - I understand how you feel', type: 'B' },
        { text: 'Honest - here\'s what you need to hear', type: 'C' },
        { text: 'Supportive - I\'m here for you', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Someone\'s making what you think is a mistake:',
      options: [
        { text: 'Explain why it\'s a mistake, offer alternatives', type: 'A' },
        { text: 'Ask questions that help them see it themselves', type: 'B' },
        { text: 'Tell them directly - that\'s a bad idea', type: 'C' },
        { text: 'Support them even if I disagree', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When giving advice, you prioritize:',
      options: [
        { text: 'Being helpful and finding solutions', type: 'A' },
        { text: 'Being understood and understanding them', type: 'B' },
        { text: 'Being honest even if it\'s uncomfortable', type: 'C' },
        { text: 'Being supportive no matter what', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'A friend keeps making the same mistake:',
      options: [
        { text: 'New strategies, different approaches to try', type: 'A' },
        { text: 'Explore why the pattern keeps happening', type: 'B' },
        { text: 'At some point, you gotta be real with them', type: 'C' },
        { text: 'Be there when it falls apart again', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Before you give advice, you usually:',
      options: [
        { text: 'Think about what would actually fix it', type: 'A' },
        { text: 'Ask what they\'ve already tried/considered', type: 'B' },
        { text: 'Assess what they actually need to hear', type: 'C' },
        { text: 'Ask if they want advice or just to vent', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your friends appreciate your advice because:',
      options: [
        { text: 'I\'m good at solving problems', type: 'A' },
        { text: 'I make them feel heard and understood', type: 'B' },
        { text: 'I tell them what they need to hear', type: 'C' },
        { text: 'I support them no matter what', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When someone rejects your advice:',
      options: [
        { text: 'Frustrated - I gave them the solution!', type: 'A' },
        { text: 'Understanding - they\'ll figure it out', type: 'B' },
        { text: 'Fine - they\'ll learn the hard way', type: 'C' },
        { text: 'Supportive - I\'ll be there anyway', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your advice-giving philosophy:',
      options: [
        { text: 'Help people fix their problems', type: 'A' },
        { text: 'Help people understand themselves', type: 'B' },
        { text: 'Help people face reality', type: 'C' },
        { text: 'Help people feel supported', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If you had to describe your advice in one word:',
      options: [
        { text: 'Practical', type: 'A' },
        { text: 'Thoughtful', type: 'B' },
        { text: 'Real', type: 'C' },
        { text: 'Supportive', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Problem Solver',
      emoji: '🛠️',
      description: 'You see problems, you fix problems. Your brain immediately jumps to solutions, action plans, and practical next steps. People come to you when they need actual help getting things done.',
      traits: ['Practical', 'Solution-oriented', 'Action-focused', 'Helpful'],
      strengths: ['Actually solves things', 'Gives clear direction', 'Efficient help', 'Results-focused'],
      weaknesses: ['Might skip emotional processing', 'Not everyone wants solutions', 'Can feel dismissive'],
      tips: ['Ask if they want advice first', 'Feelings are also valid', 'Sometimes listening is enough'],
    },
    B: {
      type: 'B',
      title: 'The Thoughtful Guide',
      emoji: '🔮',
      description: 'You help people find their own answers. Through questions, reflection, and genuine understanding, you guide without dictating. People leave conversations with you feeling clearer, not just told what to do.',
      traits: ['Insightful', 'Patient', 'Guiding', 'Understanding'],
      strengths: ['Helps people grow', 'Doesn\'t impose', 'Creates self-awareness', 'Respects autonomy'],
      weaknesses: ['Can be slow', 'Sometimes people just want answers', 'Might over-question'],
      tips: ['Your approach builds lasting change', 'Direct advice is okay too', 'You\'re helping more than you know'],
    },
    C: {
      type: 'C',
      title: 'The Honest Truth-Teller',
      emoji: '⚡',
      description: 'You tell people what they need to hear, not what they want to hear. Your honesty cuts through BS and helps people face reality. Not everyone can handle it, but those who can really value you.',
      traits: ['Honest', 'Direct', 'Real', 'No-nonsense'],
      strengths: ['No sugar-coating', 'Cuts through denial', 'Trustworthy perspective', 'Actually helpful'],
      weaknesses: ['Can be too harsh', 'Timing matters', 'Empathy helps honesty land'],
      tips: ['Truth with kindness lands better', 'Read the room first', 'Your honesty is valuable'],
    },
    D: {
      type: 'D',
      title: 'The Unconditional Supporter',
      emoji: '💕',
      description: 'You\'re there for people, period. You listen, validate, support, and make people feel less alone. You\'re not trying to fix - you\'re trying to comfort. Sometimes that\'s exactly what people need.',
      traits: ['Supportive', 'Validating', 'Present', 'Accepting'],
      strengths: ['People feel safe', 'Non-judgmental space', 'Emotional support master', 'Always there'],
      weaknesses: ['Might enable poor choices', 'Sometimes guidance is needed', 'Can be passive'],
      tips: ['Support AND guidance can coexist', 'Your presence is healing', 'Sometimes loving honesty helps'],
    },
  },
};

export default testData;
