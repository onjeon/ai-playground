// Your Email Style
// How do you handle your inbox?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-email-style',
  title: 'What\'s Your Email Personality?',
  description: 'Discover how you manage your inbox - inbox zero hero or notification nightmare?',
  category: 'personality',
  emoji: '📧',
  color: 'from-blue-500 to-indigo-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your unread email count right now is probably:',
      options: [
        { text: '0 - Inbox Zero, baby!', type: 'A' },
        { text: 'Under 20 - I keep it manageable', type: 'B' },
        { text: '100-500 - It\'s a work in progress', type: 'C' },
        { text: '1000+ - I\'ve given up', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you receive an email, you typically:',
      options: [
        { text: 'Read and respond immediately', type: 'A' },
        { text: 'Read it and schedule time to respond', type: 'B' },
        { text: 'Skim it and deal with it later', type: 'C' },
        { text: 'Let it pile up until urgent', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your email signature is:',
      options: [
        { text: 'Professional with all my contact info', type: 'A' },
        { text: 'Simple - name and maybe title', type: 'B' },
        { text: 'I forget to add one sometimes', type: 'C' },
        { text: 'What signature?', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you organize your inbox?',
      options: [
        { text: 'Folders, labels, and filters - everything sorted', type: 'A' },
        { text: 'A few key folders for important stuff', type: 'B' },
        { text: 'I use search when I need something', type: 'C' },
        { text: 'It\'s all just... there', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your response time to work emails:',
      options: [
        { text: 'Within minutes during work hours', type: 'A' },
        { text: 'Same day usually', type: 'B' },
        { text: 'A day or two', type: 'C' },
        { text: 'When I remember or they follow up', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Email notifications on your phone:',
      options: [
        { text: 'On and I check every one', type: 'A' },
        { text: 'On but I batch check them', type: 'B' },
        { text: 'Off - I check when I want to', type: 'C' },
        { text: 'What notifications? Oh those...', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your typical email length is:',
      options: [
        { text: 'Thorough with proper greeting and closing', type: 'A' },
        { text: 'Concise but complete', type: 'B' },
        { text: 'Short - get to the point', type: 'C' },
        { text: 'One word or a thumbs up emoji', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you need to send an important email:',
      options: [
        { text: 'Draft, proofread multiple times, then send', type: 'A' },
        { text: 'Write carefully and do a quick review', type: 'B' },
        { text: 'Type it out and hit send', type: 'C' },
        { text: 'Probably call instead', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Newsletter and promotional emails:',
      options: [
        { text: 'Immediately unsubscribe from everything', type: 'A' },
        { text: 'Keep a few useful ones, unsubscribe the rest', type: 'B' },
        { text: 'Delete without opening', type: 'C' },
        { text: 'They just accumulate forever', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your relationship with email is:',
      options: [
        { text: 'I\'ve mastered it - it\'s a tool I control', type: 'A' },
        { text: 'It\'s manageable and necessary', type: 'B' },
        { text: 'A necessary evil I tolerate', type: 'C' },
        { text: 'Email is my nemesis', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Inbox Zero Hero',
      emoji: '🏆',
      description: 'You are an email management machine! Your inbox is pristine, your responses are prompt, and your organizational system would make Marie Kondo proud. Email sparks joy for you!',
      traits: ['Organized', 'Responsive', 'Professional', 'Disciplined'],
      strengths: ['Never misses important emails', 'Reliable communicator', 'Impressive organization', 'Sets good example'],
      weaknesses: ['May spend too much time on email', 'Could seem rigid', 'Might stress about inbox'],
      tips: ['Don\'t let email control your day', 'Some emails can wait', 'It\'s okay to not respond immediately'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Emailer',
      emoji: '⚖️',
      description: 'You\'ve found a healthy relationship with email. You stay on top of important things without letting it consume you. You respond in reasonable time and keep things organized enough.',
      traits: ['Balanced', 'Practical', 'Efficient', 'Professional'],
      strengths: ['Good email hygiene', 'Prioritizes well', 'Sustainable approach', 'Reliable'],
      weaknesses: ['Could optimize more', 'Sometimes delays responses', 'May let things slip'],
      tips: ['Keep your balance', 'Your approach is sustainable', 'Trust your system'],
    },
    C: {
      type: 'C',
      title: 'The Casual Correspondent',
      emoji: '🤷',
      description: 'Email isn\'t your priority and honestly, that\'s kind of refreshing. You deal with it when you need to and don\'t let it stress you out. Important stuff gets handled... eventually.',
      traits: ['Relaxed', 'Unbothered', 'Practical', 'Efficient'],
      strengths: ['Not stressed by email', 'Focuses on priorities', 'Efficient when needed', 'Low email anxiety'],
      weaknesses: ['May miss things', 'Response times vary', 'Could frustrate others'],
      tips: ['Set aside dedicated email time', 'Check for urgent items daily', 'Communicate response expectations'],
    },
    D: {
      type: 'D',
      title: 'The Email Avoider',
      emoji: '🙈',
      description: 'Your inbox is a war zone and you\'ve accepted defeat. Email is where messages go to be forgotten. You probably prefer literally any other form of communication.',
      traits: ['Avoidant', 'Overwhelmed', 'Unconventional', 'Honest'],
      strengths: ['Doesn\'t let email stress you', 'Prefers direct communication', 'Authentic about limitations'],
      weaknesses: ['Misses important things', 'Frustrates colleagues', 'Could cause problems'],
      tips: ['Start with 10 minutes a day', 'Use filters to prioritize', 'It\'s never too late to start fresh'],
    },
  },
};

export default testData;
