// What's Your Toxic Trait?
// We all have one... let's find yours (in a fun way)!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-toxic-trait',
  title: 'What\'s Your Toxic Trait?',
  description: 'We all have one. Let\'s find yours in a fun, self-aware way!',
  category: 'fun',
  emoji: '☠️',
  color: 'from-emerald-600 to-teal-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your friend is telling you about their problem. Honestly, you\'re:',
      options: [
        { text: 'Waiting for my turn to share my similar (but worse) problem', type: 'A' },
        { text: 'Already mentally planning their life for them', type: 'B' },
        { text: 'Zoning out thinking about something else', type: 'C' },
        { text: 'Lowkey judging their choices', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone takes too long to text back. You:',
      options: [
        { text: 'Spiral and assume they hate me', type: 'A' },
        { text: 'Send 5 more messages to make sure they saw', type: 'B' },
        { text: 'Forget about it completely until they respond', type: 'C' },
        { text: 'Purposely take even longer to respond back', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You\'re in a group project and someone suggests an idea. Your instinct:',
      options: [
        { text: 'I had a better idea actually', type: 'A' },
        { text: 'Let me completely take over this project', type: 'B' },
        { text: 'Sure, whatever, I\'ll just do my part', type: 'C' },
        { text: 'Critique everything wrong with their idea', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you\'re mad at someone, you:',
      options: [
        { text: 'Make passive-aggressive comments until they ask what\'s wrong', type: 'A' },
        { text: 'Confront them immediately (maybe too aggressively)', type: 'B' },
        { text: 'Just distance myself and hope they figure it out', type: 'C' },
        { text: 'Bring it up months later during an unrelated argument', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your friend gets good news. Your honest first reaction:',
      options: [
        { text: 'Why does everything work out for them and not me?', type: 'A' },
        { text: 'Happy, but also immediately giving advice', type: 'B' },
        { text: 'Genuinely happy but won\'t show it much', type: 'C' },
        { text: 'Find something to critique or worry about', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'In an argument, your go-to move is:',
      options: [
        { text: 'Bringing up old receipts from 2019', type: 'A' },
        { text: 'Insisting I\'m right until they give up', type: 'B' },
        { text: 'Shutting down completely', type: 'C' },
        { text: 'Pointing out their logical fallacies', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When making plans with friends:',
      options: [
        { text: 'I wait for them to initiate then complain they don\'t', type: 'A' },
        { text: 'I plan everything down to the minute', type: 'B' },
        { text: 'I agree to plans I know I\'ll probably cancel', type: 'C' },
        { text: 'I critique their suggestions until we do what I want', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your approach to giving advice:',
      options: [
        { text: 'Unsolicited advice is my specialty', type: 'A' },
        { text: 'I will fix your life whether you asked or not', type: 'B' },
        { text: 'I keep my opinions to myself (mostly)', type: 'C' },
        { text: 'I tell people what they don\'t want to hear', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you mess up, you typically:',
      options: [
        { text: 'Deflect blame to someone or something else', type: 'A' },
        { text: 'Over-apologize then do it again', type: 'B' },
        { text: 'Pretend it didn\'t happen and move on', type: 'C' },
        { text: 'Acknowledge it but explain WHY I was justified', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your friends would probably say your worst habit is:',
      options: [
        { text: 'Making everything about me somehow', type: 'A' },
        { text: 'Being too much / too intense sometimes', type: 'B' },
        { text: 'Being emotionally unavailable or flaky', type: 'C' },
        { text: 'Being judgmental or too critical', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Main Character Syndrome',
      emoji: '👑',
      description: 'Your toxic trait is thinking the world revolves around you (and honestly, you might be right?). You somehow make every conversation about yourself, compare situations to your own, and lowkey compete with everyone. The good news: you know your worth. The bad news: so does everyone else.',
      traits: ['Self-centered', 'Competitive', 'Dramatic', 'Scene-stealer'],
      strengths: ['Confident', 'Great storyteller', 'Never undersells yourself'],
      weaknesses: ['Poor listener', 'Comparative', 'Can\'t let others shine'],
      tips: ['Practice active listening', 'Let others have their moment', 'Not everything is about you (shocking, I know)'],
    },
    B: {
      type: 'B',
      title: 'Control Freak Energy',
      emoji: '🎮',
      description: 'Your toxic trait is needing to control everything and everyone. You give unsolicited advice, micromanage situations, and genuinely believe you know best (and sometimes you do, which makes it worse). You mean well, but you\'re a lot.',
      traits: ['Controlling', 'Intense', 'Overwhelming', 'Well-meaning'],
      strengths: ['Gets things done', 'Cares deeply', 'Great in crisis'],
      weaknesses: ['Suffocating', 'Doesn\'t let others lead', 'Exhausting'],
      tips: ['Let people make their own mistakes', 'Not everything needs your input', 'Take a step back sometimes'],
    },
    C: {
      type: 'C',
      title: 'Emotionally Unavailable',
      emoji: '🧊',
      description: 'Your toxic trait is being emotionally absent. You ghost plans, zone out during important conversations, and keep everyone at arm\'s length. You\'re the friend who cares but doesn\'t show it, leaving everyone confused about where they stand.',
      traits: ['Distant', 'Avoidant', 'Flaky', 'Hard to read'],
      strengths: ['Low drama', 'Independent', 'Self-sufficient'],
      weaknesses: ['Unreliable', 'Hard to connect with', 'Leaves people hanging'],
      tips: ['Show up for people (literally)', 'Communicate your feelings', 'Being vulnerable won\'t kill you'],
    },
    D: {
      type: 'D',
      title: 'Brutally Honest (Emphasis on Brutal)',
      emoji: '🗡️',
      description: 'Your toxic trait is being "honest" as a personality trait. You disguise criticism as "just being real" and hold grudges like collectibles. You notice everyone\'s flaws and aren\'t afraid to point them out (even when no one asked).',
      traits: ['Critical', 'Judgmental', 'Grudge-holder', 'Sharp-tongued'],
      strengths: ['Perceptive', 'Tells it like it is', 'High standards'],
      weaknesses: ['Harsh', 'Intimidating', 'Burns bridges'],
      tips: ['Honesty without kindness is cruelty', 'Let things go', 'People don\'t need your critique'],
    },
  },
};

export default testData;
