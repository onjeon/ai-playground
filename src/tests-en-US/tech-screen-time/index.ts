// Your Screen Time Personality
// What does your screen time say about you?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-screen-time',
  title: 'Your Screen Time Personality',
  description: 'Let\'s talk about those screen time numbers you\'ve been avoiding looking at...',
  category: 'tech',
  emoji: '⏱️',
  color: 'from-violet-500 to-purple-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your average daily screen time is probably:',
      options: [
        { text: 'Under 2 hours - I have boundaries', type: 'A' },
        { text: '3-4 hours - pretty normal', type: 'B' },
        { text: '6-8 hours - don\'t judge me', type: 'C' },
        { text: '10+ hours - it\'s basically my life', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you see your weekly screen time report:',
      options: [
        { text: 'Proud - I\'ve been intentional', type: 'A' },
        { text: 'Fine - seems reasonable', type: 'B' },
        { text: 'Mild shame spiral', type: 'C' },
        { text: 'I turned those reports off for a reason', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'First thing you do in the morning:',
      options: [
        { text: 'Intentionally avoid phone for 30+ minutes', type: 'A' },
        { text: 'Quick check, then start my day', type: 'B' },
        { text: 'Scroll for 20 minutes before getting up', type: 'C' },
        { text: 'Phone never left my hand since 3am', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How often do you take phone-free breaks?',
      options: [
        { text: 'Daily - I have scheduled device-free time', type: 'A' },
        { text: 'Sometimes, when I remember', type: 'B' },
        { text: 'Does sleeping count?', type: 'C' },
        { text: 'What are those?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your most-used app is probably:',
      options: [
        { text: 'Something productive like calendar or notes', type: 'A' },
        { text: 'Messages or a communication app', type: 'B' },
        { text: 'Instagram, TikTok, or YouTube', type: 'C' },
        { text: 'All of them. Constantly. Simultaneously.', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When you\'re bored:',
      options: [
        { text: 'Find a non-screen activity', type: 'A' },
        { text: 'Maybe scroll for a bit, then do something else', type: 'B' },
        { text: 'Phone comes out immediately', type: 'C' },
        { text: 'Phone was already out', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Have you set screen time limits?',
      options: [
        { text: 'Yes, and I actually follow them', type: 'A' },
        { text: 'Yes, but I click "ignore" sometimes', type: 'B' },
        { text: 'Yes, and I click "ignore" always', type: 'C' },
        { text: 'Limits? On MY phone? Never.', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Screen time right before bed:',
      options: [
        { text: 'Devices away 30+ mins before sleep', type: 'A' },
        { text: 'Try to limit it, sometimes succeed', type: 'B' },
        { text: 'Scroll until I fall asleep', type: 'C' },
        { text: 'Wake up at 3am still holding my phone', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When your phone battery dies:',
      options: [
        { text: 'Fine - enjoy the break', type: 'A' },
        { text: 'Slightly inconvenient but manageable', type: 'B' },
        { text: 'Mild panic, need to find charger ASAP', type: 'C' },
        { text: 'This never happens - multiple chargers everywhere', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Could you go a full day without screens?',
      options: [
        { text: 'Easily - I do it sometimes for fun', type: 'A' },
        { text: 'Probably, with some effort', type: 'B' },
        { text: 'Theoretically... but why would I?', type: 'C' },
        { text: 'Absolutely not', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Digital Minimalist',
      emoji: '🌿',
      description: 'You\'ve cracked the code to healthy tech use. Intentional, limited, purposeful screen time. You probably do yoga, drink water, and go to bed at a reasonable hour. You\'re what we all wish we could be.',
      traits: ['Disciplined', 'Present', 'Balanced', 'Intentional'],
      strengths: ['Healthy relationship with technology', 'Actually lives life offline', 'Great sleep'],
      weaknesses: ['Might miss memes', 'Friends might forget you exist online'],
      tips: ['Keep being you', 'Share your wisdom with the rest of us'],
    },
    B: {
      type: 'B',
      title: 'The Balanced User',
      emoji: '⚖️',
      description: 'Your screen time is pretty normal. You use your phone, you enjoy it, but it doesn\'t run your life. You can put it down when needed. You\'re the healthy middle ground that tech companies probably didn\'t anticipate.',
      traits: ['Normal', 'Functional', 'Balanced', 'Self-aware'],
      strengths: ['Healthy-ish habits', 'Can disconnect when needed', 'Not obsessed'],
      weaknesses: ['Occasional scroll binges', 'Room for improvement'],
      tips: ['You\'re doing fine', 'Maybe trim a bit more', 'Good balance overall'],
    },
    C: {
      type: 'C',
      title: 'The Heavy User',
      emoji: '📱',
      description: 'Look, we\'re not here to judge but... your screen time is HIGH. You know it, we know it. You\'ve tried to cut back, you\'ve set limits you ignore. Your phone is basically an extension of your body at this point.',
      traits: ['Addicted', 'Connected', 'Dependent', 'Aware but struggling'],
      strengths: ['Never miss anything online'],
      weaknesses: ['Probably affects sleep', 'Takes away from real life', 'You know it\'s a problem'],
      tips: ['Those screen time limits exist for a reason', 'Try grayscale mode', 'Maybe delete one app this week'],
    },
    D: {
      type: 'D',
      title: 'Permanently Online',
      emoji: '🌐',
      description: 'You and your phone are one. You\'re online so much that your soul probably has WiFi. Screen time reports are too scary to look at. If phones didn\'t exist, you honestly don\'t know what you\'d do with your hands.',
      traits: ['Chronically online', 'Phone-fused', 'Screen-dependent', 'Nocturnal scroller'],
      strengths: ['Elite internet knowledge'],
      weaknesses: ['Where do we start?', 'Sleep is a rumor', 'Real life feels weird'],
      tips: ['This is concerning', 'Please look up from your phone', 'Touch grass, literally'],
    },
  },
};

export default testData;
