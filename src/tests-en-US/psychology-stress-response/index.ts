// How Do You Handle Stress?
// Discover your stress response pattern

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-stress-response',
  title: 'How Do You Handle Stress?',
  description: 'Find out your natural stress response - do you fight, flee, freeze, or fawn? Everyone has a pattern!',
  category: 'psychology',
  emoji: '😤',
  color: 'from-orange-400 to-red-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When you\'re overwhelmed with tasks, you typically:',
      options: [
        { text: 'Power through aggressively until it\'s done', type: 'A' },
        { text: 'Find ways to escape or avoid the situation', type: 'B' },
        { text: 'Feel paralyzed and don\'t know where to start', type: 'C' },
        { text: 'Ask others what they need first', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone is angry at you. Your gut reaction:',
      options: [
        { text: 'Get defensive or argue back', type: 'A' },
        { text: 'Want to leave the conversation immediately', type: 'B' },
        { text: 'Go blank and struggle to respond', type: 'C' },
        { text: 'Apologize and try to make them feel better', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your go-to stress relief is:',
      options: [
        { text: 'Intense exercise or channeling energy into work', type: 'A' },
        { text: 'Distractions - TV, scrolling, anything to zone out', type: 'B' },
        { text: 'Sleep, hiding, or withdrawing completely', type: 'C' },
        { text: 'Helping others or staying busy for people', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'During an unexpected crisis, you:',
      options: [
        { text: 'Take charge and handle it', type: 'A' },
        { text: 'Look for a way out of the situation', type: 'B' },
        { text: 'Feel stuck and wait for direction', type: 'C' },
        { text: 'Focus on keeping everyone else calm', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When conflict arises in a group, you usually:',
      options: [
        { text: 'Jump in and try to resolve it directly', type: 'A' },
        { text: 'Remove yourself from the situation', type: 'B' },
        { text: 'Stay quiet and hope it passes', type: 'C' },
        { text: 'Try to smooth things over and make peace', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your stress tends to show up as:',
      options: [
        { text: 'Irritability, impatience, or anger', type: 'A' },
        { text: 'Avoidance, procrastination, or escapism', type: 'B' },
        { text: 'Numbness, exhaustion, or shutting down', type: 'C' },
        { text: 'People-pleasing or over-accommodating', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When your boundaries are pushed, you:',
      options: [
        { text: 'Push back firmly (maybe too firmly)', type: 'A' },
        { text: 'Distance yourself from the person', type: 'B' },
        { text: 'Freeze up and don\'t address it', type: 'C' },
        { text: 'Let it slide to avoid upsetting them', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'At work, when things get chaotic:',
      options: [
        { text: 'I work harder and take control', type: 'A' },
        { text: 'I mentally check out or consider quitting', type: 'B' },
        { text: 'I feel overwhelmed and unproductive', type: 'C' },
        { text: 'I help everyone else before handling my stuff', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'After a stressful event, you need:',
      options: [
        { text: 'To debrief and analyze what happened', type: 'A' },
        { text: 'To get far away and decompress alone', type: 'B' },
        { text: 'A lot of time to recover and process', type: 'C' },
        { text: 'To make sure everyone else is okay', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest relationship with stress:',
      options: [
        { text: 'I face it head-on, sometimes too intensely', type: 'A' },
        { text: 'I avoid it whenever possible', type: 'B' },
        { text: 'It really shuts me down', type: 'C' },
        { text: 'I handle others\' stress better than my own', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Fight Response',
      emoji: '⚔️',
      description: 'When stress hits, you come out swinging! You face challenges head-on, take control, and power through. You\'re amazing in a crisis but might need to watch that intensity.',
      traits: ['Action-oriented', 'Takes charge', 'Direct', 'Can be aggressive'],
      strengths: ['Great crisis manager', 'Gets things done', 'Doesn\'t back down', 'Natural leader under pressure'],
      weaknesses: ['Can be too intense', 'May hurt relationships', 'Hard to relax', 'Might burn out'],
      tips: ['Channel energy into healthy outlets', 'Practice pause before reacting', 'Not everything needs fighting'],
    },
    B: {
      type: 'B',
      title: 'Flight Response',
      emoji: '🏃',
      description: 'Your instinct is to escape! When things get stressful, you look for the exit - physically or mentally. Avoidance protects your peace, but some things need to be faced.',
      traits: ['Avoidant', 'Self-protective', 'Values peace', 'Escapist tendencies'],
      strengths: ['Knows when to walk away', 'Protects mental health', 'Low drama', 'Good at self-preservation'],
      weaknesses: ['Avoids necessary conflicts', 'Procrastination issues', 'Problems follow you', 'May miss opportunities'],
      tips: ['Face one small thing at a time', 'Avoidance is a temporary fix', 'Build stress tolerance gradually'],
    },
    C: {
      type: 'C',
      title: 'Freeze Response',
      emoji: '🧊',
      description: 'Stress makes you freeze like a deer in headlights. When overwhelmed, your system shuts down - you might feel numb, blank, or paralyzed. This is valid, but it makes stress harder to navigate.',
      traits: ['Sensitive', 'Easily overwhelmed', 'Needs time to process', 'Shutdown mode'],
      strengths: ['Doesn\'t make rash decisions', 'Thoughtful when given time', 'Self-aware', 'Non-reactive'],
      weaknesses: ['Hard to act under pressure', 'Misses deadlines', 'Struggles to advocate for self', 'Needs extra recovery time'],
      tips: ['Break tasks into tiny steps', 'Movement helps unfreeze', 'Any action is progress', 'Be gentle with yourself'],
    },
    D: {
      type: 'D',
      title: 'Fawn Response',
      emoji: '🕊️',
      description: 'Your stress response is to people-please! When things get intense, you focus on making others comfortable, often at your own expense. You\'re a peacemaker who needs to remember: your needs matter too.',
      traits: ['People-pleaser', 'Peacemaker', 'Puts others first', 'Avoids conflict through accommodation'],
      strengths: ['Great at de-escalating', 'Empathetic', 'Creates harmony', 'Supportive in crisis'],
      weaknesses: ['Ignores own needs', 'Can be taken advantage of', 'Loses sense of self', 'Builds resentment'],
      tips: ['Your needs are valid too', 'Practice saying no', 'Notice when you\'re over-giving', 'It\'s okay to have boundaries'],
    },
  },
};

export default testData;
