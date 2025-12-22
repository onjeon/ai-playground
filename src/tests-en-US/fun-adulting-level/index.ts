// How Good Are You at Adulting?
// Let's assess your adult competency level

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-adulting-level',
  title: 'How Good Are You at Adulting?',
  description: 'Do you have your life together or are you just pretending? Take this brutally honest assessment of your adult competency.',
  category: 'fun',
  emoji: '🧑‍💼',
  color: 'from-emerald-500 to-teal-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your relationship with vegetables:',
      options: [
        { text: 'I cook them regularly, know how to season them', type: 'A' },
        { text: 'I eat them sometimes, mostly in restaurants', type: 'B' },
        { text: 'Does lettuce on a burger count?', type: 'C' },
        { text: 'Vegetables? In this economy?', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your doctor/dentist appointment situation:',
      options: [
        { text: 'Scheduled regularly, up to date on everything', type: 'A' },
        { text: 'I go when something\'s wrong', type: 'B' },
        { text: 'It\'s been... a while', type: 'C' },
        { text: 'Do I even have a doctor?', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your bedtime on a weeknight:',
      options: [
        { text: 'Consistent, reasonable hour - I value sleep', type: 'A' },
        { text: 'Usually decent but varies', type: 'B' },
        { text: 'What is "consistent"?', type: 'C' },
        { text: 'Sleep schedule is a myth', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How often do you wash your sheets?',
      options: [
        { text: 'Weekly or every two weeks', type: 'A' },
        { text: 'Monthly-ish', type: 'B' },
        { text: 'When I remember or when guests might see', type: 'C' },
        { text: 'I don\'t want to answer this', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your tax situation:',
      options: [
        { text: 'Organized, filed early, might even use an accountant', type: 'A' },
        { text: 'Get it done on time, somewhat stressful', type: 'B' },
        { text: 'April 14th energy', type: 'C' },
        { text: 'I try not to think about it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your savings account:',
      options: [
        { text: 'Healthy emergency fund, maybe even investments', type: 'A' },
        { text: 'Some savings, trying to build it', type: 'B' },
        { text: 'Emergency fund is credit cards right?', type: 'C' },
        { text: 'Savings? I have bills', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When something in your home breaks:',
      options: [
        { text: 'Fix it myself or call someone promptly', type: 'A' },
        { text: 'Look up a YouTube tutorial, probably fix it', type: 'B' },
        { text: 'Ignore it until it becomes critical', type: 'C' },
        { text: 'That\'s future me\'s problem', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your meal planning:',
      options: [
        { text: 'Weekly plan, grocery list, actual prep', type: 'A' },
        { text: 'Some planning, some improvisation', type: 'B' },
        { text: 'Open fridge, stare, decide then', type: 'C' },
        { text: 'UberEats is a food group', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Oil changes / car maintenance:',
      options: [
        { text: 'On schedule, have a regular mechanic', type: 'A' },
        { text: 'When the light comes on or it\'s been a while', type: 'B' },
        { text: 'That light\'s been on for months', type: 'C' },
        { text: 'Cars need maintenance?', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel about being an adult?',
      options: [
        { text: 'I\'ve figured it out, mostly', type: 'A' },
        { text: 'Managing but it\'s a lot', type: 'B' },
        { text: 'Faking it till I make it', type: 'C' },
        { text: 'Someone call my mom', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Functioning Adult',
      emoji: '🏆',
      description: 'You\'ve cracked the code. Vegetables are eaten, appointments are made, and your life has structure. You\'re the friend everyone asks for adulting advice. Either you have it together or you\'re an excellent actor.',
      traits: ['Organized', 'Responsible', 'Proactive', 'Reliable'],
      strengths: ['Life runs smoothly', 'Good habits established', 'Parents are proud', 'Prepared for emergencies'],
      weaknesses: ['Might be too rigid', 'Could relax sometimes', 'Is this what we grew up for?'],
      tips: ['You\'re doing great', 'Don\'t forget to have fun', 'Teach the rest of us'],
    },
    B: {
      type: 'B',
      title: 'Mostly Functional Adult',
      emoji: '✅',
      description: 'You\'re adulting at a reasonable level - not perfect, but passing. Some things slip through the cracks but you catch them eventually. You\'re in the healthy middle where life works but isn\'t over-optimized.',
      traits: ['Balanced', 'Practical', 'Reasonable', 'Adaptive'],
      strengths: ['Gets important things done', 'Flexible with the rest', 'Not stressed about perfection', 'Normal human'],
      weaknesses: ['Some things get neglected', 'Could be more organized', 'Room for improvement'],
      tips: ['You\'re doing better than you think', 'Small improvements add up', 'Good enough IS good enough'],
    },
    C: {
      type: 'C',
      title: 'Chaotic Neutral Adult',
      emoji: '😅',
      description: 'Adulting happens but not consistently. You\'re surviving on vibes, last-minute energy, and the occasional miracle. Things work out (usually) but your system is "no system." Welcome to the club.',
      traits: ['Spontaneous', 'Survival mode', 'Flexible', 'Optimistic'],
      strengths: ['Adaptable to chaos', 'Low expectations = low disappointment', 'Creative problem solving', 'Relatable'],
      weaknesses: ['Things slip through cracks', 'Future you is overwhelmed', 'Stress accumulates'],
      tips: ['One small habit at a time', 'Future you will thank present you', 'It gets easier (allegedly)'],
    },
    D: {
      type: 'D',
      title: 'Barely Disguised Kid',
      emoji: '🤷',
      description: 'You\'re not adulting, you\'re just an older child with more responsibilities. The bare minimum happens and nothing more. But honestly? Same. We\'re all just faking it and you\'re just more honest about it.',
      traits: ['Authentic', 'Minimal effort', 'Surviving', 'No pretense'],
      strengths: ['At least you\'re honest', 'Low maintenance lifestyle', 'Not pretending to have it together', 'You\'re still alive so...'],
      weaknesses: ['Lots of things are probably neglected', 'Future problems building up', 'Mom would be concerned'],
      tips: ['Start somewhere, anywhere', 'You can learn adulting skills', 'But also adulting is overrated anyway'],
    },
  },
};

export default testData;
