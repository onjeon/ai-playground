// How Well Do You Adapt to Change?
// Discover your change adaptability

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-change-adaptability',
  title: 'How Well Do You Adapt to Change?',
  description: 'Find out if you embrace change or cling to comfort zones. Life is full of plot twists!',
  category: 'psychology',
  emoji: '🦋',
  color: 'from-cyan-400 to-teal-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your routine gets disrupted unexpectedly. You feel:',
      options: [
        { text: 'Excited - something new!', type: 'A' },
        { text: 'Slightly annoyed but I adapt', type: 'B' },
        { text: 'Stressed and thrown off', type: 'C' },
        { text: 'Like my whole day is ruined', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You\'re offered a great opportunity that requires major life changes:',
      options: [
        { text: 'I\'d jump at it immediately', type: 'A' },
        { text: 'I\'d consider it seriously', type: 'B' },
        { text: 'I\'d probably let fear hold me back', type: 'C' },
        { text: 'I\'d definitely say no - too scary', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your workplace announces major changes. Your reaction:',
      options: [
        { text: 'Bring it on - change is growth', type: 'A' },
        { text: 'Wait and see how it affects me', type: 'B' },
        { text: 'Immediately stressed and worried', type: 'C' },
        { text: 'Start looking for a new job', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you feel about trying new things?',
      options: [
        { text: 'Love it - variety is the spice of life', type: 'A' },
        { text: 'Open to it with some consideration', type: 'B' },
        { text: 'Prefer to stick with what I know', type: 'C' },
        { text: 'Avoid new things whenever possible', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Plans changed last minute. How do you cope?',
      options: [
        { text: 'Easily - I roll with whatever', type: 'A' },
        { text: 'A bit frustrating but I manage', type: 'B' },
        { text: 'Really thrown off and upset', type: 'C' },
        { text: 'I spiral and can\'t handle it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with your comfort zone:',
      options: [
        { text: 'I barely have one - always pushing limits', type: 'A' },
        { text: 'I step out of it regularly', type: 'B' },
        { text: 'I stay in it but occasionally venture out', type: 'C' },
        { text: 'It\'s the only place I feel safe', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When life throws you a curveball:',
      options: [
        { text: 'I catch it and figure it out', type: 'A' },
        { text: 'I take a moment then handle it', type: 'B' },
        { text: 'I freeze up and need time to process', type: 'C' },
        { text: 'I fall apart and struggle to recover', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How many times have you reinvented yourself?',
      options: [
        { text: 'Many times - I love evolution', type: 'A' },
        { text: 'A few times when needed', type: 'B' },
        { text: 'Once or twice reluctantly', type: 'C' },
        { text: 'Never - I am who I\'ve always been', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Uncertainty makes you feel:',
      options: [
        { text: 'Excited - possibilities are endless', type: 'A' },
        { text: 'A bit uncomfortable but manageable', type: 'B' },
        { text: 'Very anxious and uneasy', type: 'C' },
        { text: 'Paralyzed - I need to know what\'s coming', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your philosophy on change:',
      options: [
        { text: 'Change is the only constant - embrace it', type: 'A' },
        { text: 'Change is necessary and usually good', type: 'B' },
        { text: 'Change is hard but sometimes necessary', type: 'C' },
        { text: 'Change is threatening and to be avoided', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Change Champion',
      emoji: '🚀',
      description: 'You THRIVE on change! New situations energize you, uncertainty excites you, and you\'re always reinventing yourself. You adapt faster than most people can blink. Just make sure some change is actually good for you.',
      traits: ['Highly adaptable', 'Excited by new', 'Flexible', 'Risk-tolerant'],
      strengths: ['Handles anything thrown at you', 'Quick to adjust', 'Sees opportunity in change', 'Resilient'],
      weaknesses: ['May seek change for change\'s sake', 'Could be restless', 'Stability might feel boring'],
      tips: ['Some consistency is healthy', 'Not all change is growth', 'Appreciate what you have while seeking more'],
    },
    B: {
      type: 'B',
      title: 'Adaptable Soul',
      emoji: '🌿',
      description: 'You handle change well! You might not love it immediately, but you adapt and often find the silver lining. You balance flexibility with the need for some stability. This is healthy adaptability.',
      traits: ['Reasonably flexible', 'Resilient', 'Balanced', 'Open-minded'],
      strengths: ['Adapts when needed', 'Doesn\'t panic at change', 'Finds balance', 'Realistic expectations'],
      weaknesses: ['May resist change initially', 'Takes time to adjust'],
      tips: ['Trust your adaptability', 'You\'re more flexible than you think', 'Each change builds resilience'],
    },
    C: {
      type: 'C',
      title: 'Change-Resistant',
      emoji: '🐚',
      description: 'Change is hard for you. You prefer what you know and find new situations stressful. Your comfort zone is called that for a reason - it\'s comfortable! But life requires adaptation. Baby steps outside might help.',
      traits: ['Prefers routine', 'Anxious about change', 'Comfort-seeking', 'Cautious'],
      strengths: ['Values stability', 'Loyal and consistent', 'Thorough planner', 'Steady presence'],
      weaknesses: ['Misses opportunities', 'High stress during transitions', 'May stay stuck', 'Growth is slower'],
      tips: ['Small changes build tolerance', 'Not all change is bad', 'Comfort zones can become cages', 'You\'re more capable than you think'],
    },
    D: {
      type: 'D',
      title: 'Change-Averse',
      emoji: '🏠',
      description: 'Change feels threatening to you. You cling to what you know and new situations cause significant distress. Life feels safer in predictable patterns. But change is inevitable - building tolerance is important for your wellbeing.',
      traits: ['Highly routine-dependent', 'Anxiety around change', 'Needs predictability', 'Risk-averse'],
      strengths: ['Very loyal', 'Creates stability', 'Dependable', 'Good at routines'],
      weaknesses: ['Paralyzed by change', 'Misses major opportunities', 'High anxiety', 'Life may pass you by'],
      tips: ['Consider talking to someone', 'Avoiding change doesn\'t prevent it', 'Tiny steps count', 'Your nervous system can learn safety in new'],
    },
  },
};

export default testData;
