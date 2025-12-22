// Your Argument Style
// How do you fight?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-argument-style',
  title: 'Your Argument Style',
  description: 'When conflict happens, what\'s your fighting style? Let\'s see how you handle disagreements!',
  category: 'communication',
  emoji: '💥',
  color: 'from-red-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When someone disagrees with you:',
      options: [
        { text: 'Immediately defend my position, firmly', type: 'A' },
        { text: 'Try to find common ground', type: 'B' },
        { text: 'Go quiet, avoid the conflict', type: 'C' },
        { text: 'Get emotional, either tears or anger', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'During a heated argument, you:',
      options: [
        { text: 'Stand firm, make my points loudly', type: 'A' },
        { text: 'Stay calm, try to understand both sides', type: 'B' },
        { text: 'Shut down, say "fine, whatever"', type: 'C' },
        { text: 'Cry, yell, or completely lose my cool', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your argument weapon of choice:',
      options: [
        { text: 'Logic, facts, and being right', type: 'A' },
        { text: 'Empathy and finding middle ground', type: 'B' },
        { text: 'Silence and withdrawal', type: 'C' },
        { text: 'Emotional intensity', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'After an argument, you:',
      options: [
        { text: 'Review who won, feel satisfied if I was right', type: 'A' },
        { text: 'Want to make sure we\'re okay, repair the connection', type: 'B' },
        { text: 'Need space, might give the silent treatment', type: 'C' },
        { text: 'Feel emotionally drained and need comfort', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Raising your voice during conflict:',
      options: [
        { text: 'Sometimes necessary to make a point', type: 'A' },
        { text: 'Try to avoid it, but happens occasionally', type: 'B' },
        { text: 'Never - I go quieter, not louder', type: 'C' },
        { text: 'Happens often when emotions take over', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your partner/friend says "we need to talk":',
      options: [
        { text: 'Ready to discuss and defend if needed', type: 'A' },
        { text: 'Open to hearing them out', type: 'B' },
        { text: 'Immediate dread, want to avoid it', type: 'C' },
        { text: 'Already anxious and emotional', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you\'re wrong in an argument:',
      options: [
        { text: 'Hard to admit, might keep arguing anyway', type: 'A' },
        { text: 'Acknowledge it and try to move forward', type: 'B' },
        { text: 'Quietly accept it but don\'t really engage', type: 'C' },
        { text: 'Feel terrible, apologize profusely', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your conflict recovery time:',
      options: [
        { text: 'Quick - once it\'s resolved, I move on', type: 'A' },
        { text: 'Need to reconnect and ensure we\'re good', type: 'B' },
        { text: 'Long - I need space and time', type: 'C' },
        { text: 'Varies - depends on how intense it got', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'What you wish you did better in arguments:',
      options: [
        { text: 'Listen more, be less defensive', type: 'A' },
        { text: 'Stand up for myself more firmly', type: 'B' },
        { text: 'Actually engage instead of shutting down', type: 'C' },
        { text: 'Control my emotions better', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ideal conflict resolution:',
      options: [
        { text: 'I\'m right, they admit it, done', type: 'A' },
        { text: 'Understanding each other, compromise', type: 'B' },
        { text: 'Just make it stop, agree to disagree', type: 'C' },
        { text: 'Emotional connection restored, feeling heard', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Warrior',
      emoji: '⚔️',
      description: 'You come to arguments ready to WIN. Logic, facts, volume if necessary - you\'re defending your position. You\'re not afraid of conflict and you stand your ground. Sometimes a bit too firmly.',
      traits: ['Confrontational', 'Logical', 'Defensive', 'Fighter'],
      strengths: ['Won\'t be walked over', 'Clear about position', 'Doesn\'t avoid conflict'],
      weaknesses: ['Can be too aggressive', 'Hard to admit wrong', 'May damage relationships'],
      tips: ['Winning isn\'t everything', 'Listen as much as you speak', 'Being right isn\'t always worth it'],
    },
    B: {
      type: 'B',
      title: 'The Mediator',
      emoji: '🕊️',
      description: 'You seek understanding and resolution. Conflict isn\'t about winning for you - it\'s about finding a way forward together. You stay calm, listen, and look for common ground. The healthy approach!',
      traits: ['Calm', 'Understanding', 'Compromise-seeking', 'Relationship-focused'],
      strengths: ['De-escalates conflict', 'Preserves relationships', 'Fair approach'],
      weaknesses: ['May not advocate strongly enough for self', 'Could seem too passive'],
      tips: ['Your approach is healthy', 'Make sure your needs are heard too', 'Keep doing what you\'re doing'],
    },
    C: {
      type: 'C',
      title: 'The Avoider',
      emoji: '🐢',
      description: 'Conflict? No thank you. You shut down, go silent, or retreat when arguments happen. You\'d rather not deal with it. While this protects you, it means issues never actually get resolved.',
      traits: ['Avoidant', 'Shutdown', 'Silent treatment', 'Conflict-averse'],
      strengths: ['Doesn\'t escalate', 'Stays calm'],
      weaknesses: ['Issues never resolve', 'Partner feels ignored', 'Problems build up'],
      tips: ['Avoiding conflict doesn\'t make it go away', 'Learning to engage is important', 'Safe conflict can strengthen relationships'],
    },
    D: {
      type: 'D',
      title: 'The Emotional Reactor',
      emoji: '🌊',
      description: 'When conflict hits, your emotions come flooding out. Tears, anger, intensity - you feel things deeply and it shows. This isn\'t weakness, but it can make productive conflict hard.',
      traits: ['Emotional', 'Intense', 'Reactive', 'Expressive'],
      strengths: ['Authentic expression', 'Cares deeply', 'Nothing hidden'],
      weaknesses: ['Hard to think clearly', 'Can overwhelm others', 'May regret reactions'],
      tips: ['It\'s okay to feel, but try to pause before reacting', 'Ask for breaks when overwhelmed', 'Emotions are valid but shouldn\'t drive the whole argument'],
    },
  },
};

export default testData;
