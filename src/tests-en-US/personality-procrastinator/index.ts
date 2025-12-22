// What Type of Procrastinator Are You?
// We all do it, but HOW do you do it?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-procrastinator',
  title: 'What Type of Procrastinator Are You?',
  description: 'We all procrastinate - but there are different flavors of avoiding responsibilities. Find out your procrastination personality!',
  category: 'personality',
  emoji: '⏰',
  color: 'from-amber-500 to-red-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You have a deadline in one week. When do you start?',
      options: [
        { text: 'The night before - pressure is my fuel', type: 'A' },
        { text: 'I start with the fun parts and avoid the hard stuff', type: 'B' },
        { text: 'I research and plan so much I never actually start', type: 'C' },
        { text: 'I meant to start earlier but got distracted', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'What does your procrastination look like?',
      options: [
        { text: 'Stress, panic, last-minute energy', type: 'A' },
        { text: 'Cleaning, organizing, productive avoidance', type: 'B' },
        { text: 'Overthinking, perfectionism paralysis', type: 'C' },
        { text: 'Social media, YouTube rabbit holes, snacking', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your to-do list strategy:',
      options: [
        { text: 'I don\'t make lists - I work best under chaos', type: 'A' },
        { text: 'I do the easy stuff first to feel productive', type: 'B' },
        { text: 'I make detailed lists but get overwhelmed by them', type: 'C' },
        { text: 'I make lists, lose them, make new ones', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you finally start working, you:',
      options: [
        { text: 'Enter panic-productivity mode and crush it', type: 'A' },
        { text: 'Work on related but less important things', type: 'B' },
        { text: 'Spend hours on one small detail', type: 'C' },
        { text: 'Check my phone every 5 minutes', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your workspace when procrastinating:',
      options: [
        { text: 'Chaotic - I\'ll clean after this deadline', type: 'A' },
        { text: 'Actually super clean - I organized instead of working', type: 'B' },
        { text: 'Full of research materials I\'ll "need"', type: 'C' },
        { text: 'Multiple tabs open, none of them productive', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'What do you tell yourself while procrastinating?',
      options: [
        { text: '"I work better under pressure anyway"', type: 'A' },
        { text: '"This other thing also needs to get done"', type: 'B' },
        { text: '"I need to plan this out perfectly first"', type: 'C' },
        { text: '"Just five more minutes, then I\'ll start"', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your relationship with deadlines:',
      options: [
        { text: 'They\'re the only reason I ever finish anything', type: 'A' },
        { text: 'I\'m busy doing other things until the last minute', type: 'B' },
        { text: 'I stress about them long before they arrive', type: 'C' },
        { text: 'Time is an illusion and deadlines are fake', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Someone checks in on your progress. You say:',
      options: [
        { text: '"It\'s under control" (it is not under control)', type: 'A' },
        { text: '"I\'ve been working on related stuff!"', type: 'B' },
        { text: '"I\'m still in the planning phase"', type: 'C' },
        { text: '"Oh right, I should probably look at that"', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'After finishing something last-minute, you feel:',
      options: [
        { text: 'Relieved and weirdly proud I pulled it off', type: 'A' },
        { text: 'Good about the other stuff I did too', type: 'B' },
        { text: 'Anxious it\'s not perfect', type: 'C' },
        { text: 'Confused about where the time went', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your biggest procrastination trigger:',
      options: [
        { text: 'Lack of immediate pressure', type: 'A' },
        { text: 'Seeing other things that could be done', type: 'B' },
        { text: 'Fear of not doing it perfectly', type: 'C' },
        { text: 'Literally anything more interesting', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Deadline Daredevil',
      emoji: '🔥',
      description: 'You don\'t have a procrastination problem - you have a deadline dependency. Adrenaline is your productivity fuel. You\'ve convinced yourself you work better under pressure, and honestly? Maybe you do. But your cortisol levels are not okay.',
      traits: ['Adrenaline-driven', 'Clutch performer', 'Risk-tolerant', 'Stress-adapted'],
      strengths: ['Performs under pressure', 'Gets things done eventually', 'Thrives in chaos', 'Time-efficient (technically)'],
      weaknesses: ['Chronic stress', 'Quality may suffer', 'Heart attacks pending', 'Can\'t relax until deadline'],
      tips: ['Try starting just one hour earlier', 'Your body will thank you', 'Deadlines shouldn\'t be your only motivator'],
    },
    B: {
      type: 'B',
      title: 'The Productive Procrastinator',
      emoji: '🧹',
      description: 'You don\'t procrastinate - you productively avoid! Your house is clean, your inbox is organized, and you\'ve done every task except the one you should be doing. You\'re the master of busy work that feels like progress.',
      traits: ['Busy bee', 'Organized avoider', 'Task-switcher', 'Guilt-free procrastinator'],
      strengths: ['Always accomplishing something', 'Great at smaller tasks', 'Organized environment', 'Feels productive'],
      weaknesses: ['Big tasks keep getting delayed', 'Avoidance looks like productivity', 'Priority confusion'],
      tips: ['Do the hard thing first', 'Clean houses don\'t finish projects', 'Ask yourself: is this urgent or just easy?'],
    },
    C: {
      type: 'C',
      title: 'The Perfectionist Paralyzed',
      emoji: '🎯',
      description: 'You\'re not procrastinating - you\'re preparing! Research, planning, organizing your approach... starting is hard when you know it won\'t be perfect. Analysis paralysis is real, and you\'re its poster child.',
      traits: ['Detail-oriented', 'Anxious', 'High standards', 'Overthinking'],
      strengths: ['Thorough when you do start', 'High-quality output', 'Well-researched', 'Cares about doing it right'],
      weaknesses: ['Starting is the hardest part', 'Perfect is the enemy of done', 'Anxiety-driven delays'],
      tips: ['Done is better than perfect', 'Start with a rough draft', 'Progress over perfection'],
    },
    D: {
      type: 'D',
      title: 'The Distracted Dreamer',
      emoji: '🦋',
      description: 'Your attention span said "goodbye" and meant it. Social media, random thoughts, that interesting thing you just remembered - your brain is a butterfly and focus is not on the agenda. You\'re not lazy, you\'re just interested in everything else.',
      traits: ['Easily distracted', 'Curious', 'Short attention span', 'Multi-tasking (badly)'],
      strengths: ['Wide range of interests', 'Creative mind', 'Knows a lot about random things', 'Spontaneous'],
      weaknesses: ['Can\'t focus for long', 'Time blindness', 'Phone is the enemy', 'What were we talking about?'],
      tips: ['Try website blockers', 'Phone in another room', 'Pomodoro technique might help', 'Focus is a muscle - train it'],
    },
  },
};

export default testData;
