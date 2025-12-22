// How Good Is Your Red Flag Detector?
// Can you spot the red flags or do you ignore them for the vibes?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-red-flag-detector',
  title: 'How Good Is Your Red Flag Detector?',
  description: 'Can you spot red flags from a mile away, or do you need new glasses?',
  category: 'fun',
  emoji: '🚩',
  color: 'from-red-600 to-rose-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Someone you just met says "I\'m not like other people." You think:',
      options: [
        { text: 'IMMEDIATE red flag. Probably exactly like other people.', type: 'A' },
        { text: 'Hmm, suspicious but I\'ll give them a chance', type: 'B' },
        { text: 'Maybe they really are unique?', type: 'C' },
        { text: 'Wow, they seem interesting!', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your date says all their exes are "crazy." You:',
      options: [
        { text: 'Already planning my escape route', type: 'A' },
        { text: 'Mentally note it but keep listening', type: 'B' },
        { text: 'Ask them to explain more', type: 'C' },
        { text: 'Feel bad for them - they\'ve been through a lot!', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'A friend constantly cancels plans last minute. You:',
      options: [
        { text: 'Stop inviting them - actions speak louder', type: 'A' },
        { text: 'Call them out on it directly', type: 'B' },
        { text: 'Keep inviting them but expect it now', type: 'C' },
        { text: 'Wonder what I did wrong', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone lovebombs you with intense affection immediately. You feel:',
      options: [
        { text: 'Terrified. This is too much too fast.', type: 'A' },
        { text: 'Cautious but flattered', type: 'B' },
        { text: 'Swept off my feet but slightly overwhelmed', type: 'C' },
        { text: 'Like I finally found my soulmate!', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'A new friend is always talking negatively about their other friends. You:',
      options: [
        { text: 'Know they talk about me the same way', type: 'A' },
        { text: 'Distance myself a bit', type: 'B' },
        { text: 'Try to stay neutral in the drama', type: 'C' },
        { text: 'Trust that they\'re just venting to me specifically', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone says "trust me" way too often. You:',
      options: [
        { text: 'Trust them LESS every time they say it', type: 'A' },
        { text: 'Notice it and keep my guard up', type: 'B' },
        { text: 'Think it\'s just their way of speaking', type: 'C' },
        { text: 'Feel reassured - they must be trustworthy!', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your gut tells you something is off about someone, but you can\'t explain why. You:',
      options: [
        { text: 'Trust my gut 100% and keep distance', type: 'A' },
        { text: 'Pay closer attention to their behavior', type: 'B' },
        { text: 'Ignore it - I\'m probably overthinking', type: 'C' },
        { text: 'Give them the benefit of the doubt', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Someone apologizes but adds "...but you made me do it." You think:',
      options: [
        { text: 'That\'s not an apology. I\'m out.', type: 'A' },
        { text: 'Red flag! Not accepting blame.', type: 'B' },
        { text: 'Maybe I did contribute to the situation...', type: 'C' },
        { text: 'At least they apologized', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'A potential partner is rude to service workers. You:',
      options: [
        { text: 'Immediate dealbreaker, no exceptions', type: 'A' },
        { text: 'Major red flag, reconsidering everything', type: 'B' },
        { text: 'Mention it to them and see how they react', type: 'C' },
        { text: 'They were probably just having a bad day', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'When you look back at past relationships/friendships that went wrong:',
      options: [
        { text: 'The red flags were there, I just know better now', type: 'A' },
        { text: 'I noticed some signs but hoped for the best', type: 'B' },
        { text: 'I was surprised when things went bad', type: 'C' },
        { text: 'I usually don\'t see problems until it\'s too late', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Red Flag FBI Agent',
      emoji: '🕵️',
      description: 'Your red flag detector is ELITE. You can spot manipulation from three time zones away. People can\'t get anything past you because your radar is always on high alert. You protect your peace like it\'s a national treasure.',
      traits: ['Perceptive', 'Protective', 'No-nonsense', 'Self-aware'],
      strengths: ['Never gets fooled twice', 'Great boundaries', 'Trusts intuition', 'Protects others too'],
      weaknesses: ['Might be TOO suspicious', 'Could miss genuine people', 'Trust issues possible'],
      tips: ['Some people are genuinely good', 'Not everything is a red flag', 'Balance caution with openness'],
    },
    B: {
      type: 'B',
      title: 'Red Flag Aware',
      emoji: '🎯',
      description: 'You notice red flags but you\'re also fair about it. You give people chances while keeping your eyes open. This balanced approach means you catch most warning signs without being paranoid.',
      traits: ['Observant', 'Fair', 'Balanced', 'Patient'],
      strengths: ['Good judgment', 'Gives fair chances', 'Notices patterns', 'Reasonable boundaries'],
      weaknesses: ['Sometimes too generous', 'Might ignore early signs', 'Wants to believe the best'],
      tips: ['Trust your first instinct more', 'One chance is enough', 'Actions over words always'],
    },
    C: {
      type: 'C',
      title: 'Rose-Colored Glasses',
      emoji: '🌹',
      description: 'You see the best in people, which is beautiful but sometimes gets you into trouble. You tend to explain away red flags or give endless chances. Your heart is in the right place, but your detector needs a tune-up.',
      traits: ['Optimistic', 'Forgiving', 'Hopeful', 'Open'],
      strengths: ['Kind and understanding', 'Gives second chances', 'Sees potential in people', 'Non-judgmental'],
      weaknesses: ['Ignores warning signs', 'Gets hurt often', 'Makes excuses for bad behavior'],
      tips: ['When someone shows you who they are, believe them', 'Your kindness isn\'t owed to everyone', 'Protect your energy'],
    },
    D: {
      type: 'D',
      title: 'Walking Red Flag Magnet',
      emoji: '🧲',
      description: 'Oh honey. Your red flag detector is either broken or you left it on silent. You either don\'t see the signs or actively run toward them. The good news? Awareness is the first step!',
      traits: ['Trusting', 'Hopeful', 'Naive', 'Loyal'],
      strengths: ['Genuinely believes in people', 'Never jaded', 'Open-hearted', 'Loyal to a fault'],
      weaknesses: ['Doesn\'t see warning signs', 'Gets manipulated easily', 'Learns the hard way'],
      tips: ['Listen to your friends when they warn you', 'Make a red flag checklist', 'Your picker needs work, bestie'],
    },
  },
};

export default testData;
