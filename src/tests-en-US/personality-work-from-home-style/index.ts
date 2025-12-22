// Your WFH Personality
// How do you work from home?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-work-from-home-style',
  title: 'What\'s Your Work From Home Personality?',
  description: 'Pajamas or business casual? Standing desk or couch? Discover your WFH work style and what it reveals about you!',
  category: 'personality',
  emoji: '🏠',
  color: 'from-blue-500 to-indigo-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your work-from-home outfit is:',
      options: [
        { text: 'Fully dressed like I\'m going to the office', type: 'A' },
        { text: 'Nice top, questionable bottoms (the Zoom mullet)', type: 'B' },
        { text: 'Athleisure - comfortable but presentable', type: 'C' },
        { text: 'The same pajamas I slept in, obviously', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your home workspace setup is:',
      options: [
        { text: 'Dedicated office space with proper desk and chair', type: 'A' },
        { text: 'A designated area that works pretty well', type: 'B' },
        { text: 'Kitchen table, couch, bed - depends on the day', type: 'C' },
        { text: 'Wherever my laptop happens to land', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your camera during video calls is:',
      options: [
        { text: 'Always on with good lighting and background', type: 'A' },
        { text: 'On for most meetings, off for casual ones', type: 'B' },
        { text: 'On when required, off when possible', type: 'C' },
        { text: '"Sorry, my camera isn\'t working"', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your morning routine before work:',
      options: [
        { text: 'Same as office days - shower, dress, breakfast', type: 'A' },
        { text: 'Modified routine - presentable but relaxed', type: 'B' },
        { text: 'Roll out of bed 10 minutes before first meeting', type: 'C' },
        { text: 'What morning routine?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you handle work/life boundaries at home?',
      options: [
        { text: 'Strict hours - I clock out mentally and physically', type: 'A' },
        { text: 'Try to maintain boundaries but flexible when needed', type: 'B' },
        { text: 'What boundaries? Work bleeds into everything', type: 'C' },
        { text: 'Everything bleeds into work - I\'m barely productive', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your lunch break WFH style:',
      options: [
        { text: 'Proper break, step away from desk, eat a meal', type: 'A' },
        { text: 'Usually eat at desk but try to take breaks', type: 'B' },
        { text: 'What lunch break? I snack throughout the day', type: 'C' },
        { text: 'Extended lunch that includes a nap', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Distractions at home are:',
      options: [
        { text: 'Minimal - I\'m very disciplined', type: 'A' },
        { text: 'Managed - I stay focused mostly', type: 'B' },
        { text: 'Constant battle between work and everything else', type: 'C' },
        { text: 'Winning - I\'m extremely distracted', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your productivity WFH compared to office:',
      options: [
        { text: 'Actually more productive without distractions', type: 'A' },
        { text: 'About the same - I adapt well', type: 'B' },
        { text: 'Depends on the day and my motivation', type: 'C' },
        { text: 'I\'m not going to answer that honestly', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When the workday ends, you:',
      options: [
        { text: 'Close laptop, leave workspace, fully done', type: 'A' },
        { text: 'Mostly done but might check email once more', type: 'B' },
        { text: 'The workday ends?', type: 'C' },
        { text: 'Been done since 3 PM, just staying online', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your honest feeling about WFH:',
      options: [
        { text: 'Love it - I\'m thriving and more productive', type: 'A' },
        { text: 'Good balance of convenience and effectiveness', type: 'B' },
        { text: 'Miss the office sometimes for the structure', type: 'C' },
        { text: 'It enables my worst habits but I won\'t give it up', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The WFH Professional',
      emoji: '💼',
      description: 'You\'ve mastered working from home. Dedicated space, proper routine, boundaries respected. You treat WFH with the same professionalism as office work, and honestly, you\'re probably more productive. Teach us your ways.',
      traits: ['Disciplined', 'Professional', 'Organized', 'Self-motivated'],
      strengths: ['Excellent productivity', 'Great work-life balance', 'Professional even at home', 'Doesn\'t slack off'],
      weaknesses: ['May be too rigid', 'Could relax more', 'Others envy you'],
      tips: ['Allow yourself casual Fridays', 'Pajamas once in a while won\'t hurt', 'You\'ve earned the flexibility'],
    },
    B: {
      type: 'B',
      title: 'The Adapted Remote Worker',
      emoji: '👔',
      description: 'You\'ve found your rhythm. Business on top, sweatpants on bottom. You balance professionalism with the perks of being home. Camera on when needed, off when not. This is sustainable WFH energy.',
      traits: ['Adaptable', 'Balanced', 'Practical', 'Reasonable'],
      strengths: ['Good balance', 'Flexible approach', 'Gets work done', 'Enjoys perks without abusing them'],
      weaknesses: ['Sometimes blurs boundaries', 'Could optimize workspace', 'The Zoom mullet is real'],
      tips: ['You\'ve got a good thing going', 'Maybe upgrade the desk chair', 'Keep that balance'],
    },
    C: {
      type: 'C',
      title: 'The Blurred Lines Worker',
      emoji: '🔄',
      description: 'Work and life have merged into one continuous thing. You\'re working from the couch, answering emails at 10 PM, and your desk is wherever you happen to be sitting. The flexibility is nice but also kind of chaos.',
      traits: ['Flexible', 'Unstructured', 'Available', 'Boundary-challenged'],
      strengths: ['Highly flexible', 'Always accessible', 'Adapts to anything', 'No commute stress'],
      weaknesses: ['Never truly off', 'No dedicated space', 'Burnout risk', 'Structure would help'],
      tips: ['Set actual work hours', 'Designate a workspace', 'You deserve time off'],
    },
    D: {
      type: 'D',
      title: 'The Cozy Chaos Worker',
      emoji: '🛋️',
      description: 'Let\'s be honest - WFH has enabled some habits. Pajamas all day, naps during lunch, camera perpetually "broken." You\'re getting by, but your productivity graph would be... interesting. At least you\'re comfortable?',
      traits: ['Comfortable', 'Relaxed', 'Honest', 'Survival mode'],
      strengths: ['Stress-free approach', 'Comfortable always', 'Honest about it', 'Work happens eventually'],
      weaknesses: ['Productivity questionable', 'Habits might not be sustainable', 'Camera shame'],
      tips: ['Maybe put on pants sometimes', 'A routine might help', 'Your secret is safe with us'],
    },
  },
};

export default testData;
