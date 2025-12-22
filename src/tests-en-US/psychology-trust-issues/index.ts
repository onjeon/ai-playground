// Do You Have Trust Issues?
// Discover your trust style

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-trust-issues',
  title: 'Do You Have Trust Issues?',
  description: 'Find out where you fall on the trust spectrum - from wide open to Fort Knox. Be honest!',
  category: 'psychology',
  emoji: '🔐',
  color: 'from-slate-400 to-zinc-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'When someone new is nice to you, you think:',
      options: [
        { text: 'They\'re probably just a nice person', type: 'A' },
        { text: 'That\'s nice, I\'ll see if it\'s genuine over time', type: 'B' },
        { text: 'What do they want from me?', type: 'C' },
        { text: 'They must have an ulterior motive', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your partner is texting someone you don\'t know:',
      options: [
        { text: 'They have their own friends, no big deal', type: 'A' },
        { text: 'Mildly curious but I trust them', type: 'B' },
        { text: 'I feel a little uncomfortable, might ask about it', type: 'C' },
        { text: 'Who is that? I need to know right now.', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How long does it take you to trust someone?',
      options: [
        { text: 'I give trust pretty easily', type: 'A' },
        { text: 'A reasonable amount of time', type: 'B' },
        { text: 'A long time - they need to prove themselves', type: 'C' },
        { text: 'I\'m not sure I fully trust anyone', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When someone says "trust me":',
      options: [
        { text: 'I usually do', type: 'A' },
        { text: 'Depends on the context and person', type: 'B' },
        { text: 'That phrase makes me trust them less', type: 'C' },
        { text: 'Major red flag - definitely don\'t trust now', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your past relationships have left you:',
      options: [
        { text: 'Still open to trusting new people', type: 'A' },
        { text: 'A bit more cautious but still hopeful', type: 'B' },
        { text: 'Very guarded in new relationships', type: 'C' },
        { text: 'Convinced that people will hurt you', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When a friend cancels plans last minute:',
      options: [
        { text: 'Things happen, we\'ll reschedule', type: 'A' },
        { text: 'Disappointed but I understand', type: 'B' },
        { text: 'Wonder if they\'re making excuses', type: 'C' },
        { text: 'They never wanted to hang out anyway', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How much do you share with new people?',
      options: [
        { text: 'I\'m pretty open - an open book', type: 'A' },
        { text: 'I share as we get to know each other', type: 'B' },
        { text: 'Very little until I know them well', type: 'C' },
        { text: 'Barely anything - information is power', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Someone compliments you. Your first thought:',
      options: [
        { text: 'That\'s sweet of them!', type: 'A' },
        { text: 'Thanks, that\'s nice to hear', type: 'B' },
        { text: 'Do they actually mean that?', type: 'C' },
        { text: 'What do they want?', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone knows your secrets:',
      options: [
        { text: 'I feel closer to them', type: 'A' },
        { text: 'It feels vulnerable but okay', type: 'B' },
        { text: 'I worry they might use it against me', type: 'C' },
        { text: 'I regret sharing - it will be used against me', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your trust philosophy:',
      options: [
        { text: 'Trust until given reason not to', type: 'A' },
        { text: 'Trust is built over time', type: 'B' },
        { text: 'Trust must be earned completely first', type: 'C' },
        { text: 'Trust no one fully', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Open Truster',
      emoji: '💚',
      description: 'Your heart is wide open! You give trust easily and generally believe people are good. This makes connection easy for you. Just make sure your trust is well-placed - not everyone deserves it.',
      traits: ['Trusting', 'Open', 'Optimistic about people', 'Vulnerable'],
      strengths: ['Easy to connect with', 'Gives others a chance', 'Not paranoid', 'Healthy relationships possible'],
      weaknesses: ['Can be taken advantage of', 'May miss red flags', 'Trust might be naive'],
      tips: ['Keep your trust but add discernment', 'Not everyone earns full trust', 'Listen to gut feelings'],
    },
    B: {
      type: 'B',
      title: 'Healthy Trust Balance',
      emoji: '⚖️',
      description: 'You\'ve got healthy trust! You don\'t give it away immediately, but you\'re not closed off either. You let trust build naturally while staying open to people. This is the sweet spot!',
      traits: ['Balanced', 'Discerning', 'Open yet cautious', 'Realistic'],
      strengths: ['Protects yourself appropriately', 'Gives people chances', 'Learns from experience', 'Healthy skepticism'],
      weaknesses: ['May still get hurt sometimes', 'Trust building takes time'],
      tips: ['You\'re doing great', 'Trust your instincts', 'Keep that healthy balance'],
    },
    C: {
      type: 'C',
      title: 'Guarded Truster',
      emoji: '🛡️',
      description: 'Your walls are up! You protect yourself by being slow to trust. Past experiences may have taught you to be careful. This keeps you safe but might be keeping good people out too.',
      traits: ['Guarded', 'Cautious', 'Self-protective', 'Skeptical'],
      strengths: ['Protects yourself well', 'Doesn\'t get fooled easily', 'Observant', 'Thinks before trusting'],
      weaknesses: ['May push good people away', 'Lonely at times', 'Misses out on connection', 'Hard to get close to'],
      tips: ['Some risk is worth it', 'Not everyone will hurt you', 'Walls can become prisons', 'Try small vulnerabilities'],
    },
    D: {
      type: 'D',
      title: 'Trust Issues Activated',
      emoji: '🔒',
      description: 'You\'ve got serious walls up. Trusting anyone feels impossible - you expect betrayal and protect yourself at all costs. Past hurts run deep. But living in a fortress can be lonely. Healing is possible.',
      traits: ['Deeply guarded', 'Suspicious', 'Expecting betrayal', 'Self-protective to extreme'],
      strengths: ['Never blindsided', 'Fiercely independent', 'Strong boundaries', 'Notices red flags'],
      weaknesses: ['Very isolated', 'Misses genuine connection', 'Projects past onto present', 'Exhausting to maintain'],
      tips: ['Consider therapy to process past', 'Not everyone is the person who hurt you', 'Healing is possible', 'Walls keep pain out but love too'],
    },
  },
};

export default testData;
