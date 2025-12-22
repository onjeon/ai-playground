// Your Stress Response
// How do you handle pressure?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-stress-response',
  title: 'What\'s Your Stress Response Style?',
  description: 'Discover how you cope with pressure - fight, flight, freeze, or something else entirely.',
  category: 'personality',
  emoji: '😤',
  color: 'from-red-600 to-pink-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When facing a stressful deadline, you:',
      options: [
        { text: 'Kick into high gear and power through', type: 'A' },
        { text: 'Avoid thinking about it until the last minute', type: 'B' },
        { text: 'Feel paralyzed and struggle to start', type: 'C' },
        { text: 'Talk to others and seek support', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your body\'s stress response usually includes:',
      options: [
        { text: 'Energy surge, adrenaline, getting things done', type: 'A' },
        { text: 'Wanting to escape, be alone, or distract myself', type: 'B' },
        { text: 'Feeling stuck, overwhelmed, shutting down', type: 'C' },
        { text: 'Reaching out to friends or loved ones', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'After a stressful event, you typically:',
      options: [
        { text: 'Feel accomplished and ready for the next challenge', type: 'A' },
        { text: 'Need alone time to decompress', type: 'B' },
        { text: 'Take a long time to recover', type: 'C' },
        { text: 'Want to talk it through with someone', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When someone confronts you with a problem, you:',
      options: [
        { text: 'Address it head-on immediately', type: 'A' },
        { text: 'Try to change the subject or leave', type: 'B' },
        { text: 'Feel overwhelmed and don\'t know what to say', type: 'C' },
        { text: 'Try to understand their perspective and connect', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your stress coping mechanisms include:',
      options: [
        { text: 'Exercise, work harder, channel it into action', type: 'A' },
        { text: 'TV, games, scrolling - anything to distract', type: 'B' },
        { text: 'Sleep, isolation, withdrawing from the world', type: 'C' },
        { text: 'Calling friends, venting, seeking comfort', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'In an emergency situation, you:',
      options: [
        { text: 'Take charge and handle it', type: 'A' },
        { text: 'Look for the exit or escape route', type: 'B' },
        { text: 'Freeze and wait for someone else to act', type: 'C' },
        { text: 'Make sure everyone is okay and together', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you\'re overwhelmed at work:',
      options: [
        { text: 'Work harder and longer to get through it', type: 'A' },
        { text: 'Procrastinate and avoid the pile', type: 'B' },
        { text: 'Feel paralyzed by where to even start', type: 'C' },
        { text: 'Ask for help or delegate', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your stress level compared to others:',
      options: [
        { text: 'I thrive under pressure - bring it on', type: 'A' },
        { text: 'I avoid stressful situations when possible', type: 'B' },
        { text: 'Stress really affects me more than most', type: 'C' },
        { text: 'I manage it through my support network', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When multiple things go wrong at once:',
      options: [
        { text: 'Prioritize and tackle them one by one', type: 'A' },
        { text: 'Need to get away and clear my head', type: 'B' },
        { text: 'Feel like everything is falling apart', type: 'C' },
        { text: 'Rally my support system', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest relationship with stress:',
      options: [
        { text: 'It motivates me and helps me perform', type: 'A' },
        { text: 'I try to avoid it at all costs', type: 'B' },
        { text: 'It really takes a toll on me', type: 'C' },
        { text: 'It\'s manageable when I have support', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Fight Response',
      emoji: '⚔️',
      description: 'You meet stress head-on! Pressure activates you - you work harder, move faster, and tackle problems directly. You thrive in crisis and actually perform better under stress.',
      traits: ['Action-oriented', 'Driven', 'Resilient', 'Energetic'],
      strengths: ['Great in emergencies', 'High performer under pressure', 'Problem-solver', 'Gets things done'],
      weaknesses: ['May burn out', 'Can be aggressive when stressed', 'Doesn\'t know when to stop'],
      tips: ['Rest is productive too', 'Not everything needs fighting', 'Check your cortisol'],
    },
    B: {
      type: 'B',
      title: 'The Flight Response',
      emoji: '🏃',
      description: 'When stress hits, you want to escape! You cope by avoiding, distracting, and removing yourself from stressful situations. Sometimes this is wisdom, sometimes it\'s avoidance.',
      traits: ['Avoidant', 'Self-protective', 'Escapist', 'Cautious'],
      strengths: ['Knows when to walk away', 'Protects mental health', 'Avoids unnecessary conflict', 'Self-aware'],
      weaknesses: ['May avoid important things', 'Procrastination tendency', 'Problems don\'t disappear'],
      tips: ['Some stress must be faced', 'Avoidance is temporary relief', 'Build tolerance slowly'],
    },
    C: {
      type: 'C',
      title: 'The Freeze Response',
      emoji: '🧊',
      description: 'Stress makes you feel stuck and overwhelmed. Your system shuts down when it\'s too much. This is a valid response, but it can make dealing with stress extra hard.',
      traits: ['Sensitive', 'Overwhelmed', 'Reflective', 'Careful'],
      strengths: ['Doesn\'t make rash decisions', 'Thoughtful approach', 'Self-aware of limits', 'Cautious'],
      weaknesses: ['Paralyzed by stress', 'Hard to take action', 'May miss deadlines', 'Needs extra support'],
      tips: ['Break tasks into tiny steps', 'Start before you\'re ready', 'Any action breaks the freeze'],
    },
    D: {
      type: 'D',
      title: 'The Tend-and-Befriend Response',
      emoji: '🤝',
      description: 'Your stress response is to connect! You reach out to others, seek support, and find comfort in your relationships. Community and connection are your coping mechanisms.',
      traits: ['Social', 'Connected', 'Supportive', 'Relationship-oriented'],
      strengths: ['Strong support network', 'Processes stress verbally', 'Helps others too', 'Community-minded'],
      weaknesses: ['May depend too much on others', 'Struggles when alone', 'Can overwhelm support network'],
      tips: ['Build self-soothing skills', 'Some stress needs solo processing', 'Balance giving and receiving support'],
    },
  },
};

export default testData;
