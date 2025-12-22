// Your Text Response Time
// How fast do you reply to messages?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-text-response',
  title: 'Your Text Response Time',
  description: 'Are you an instant replier or do you leave people on read for days? Let\'s find out!',
  category: 'communication',
  emoji: '📱',
  color: 'from-green-500 to-emerald-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your typical text response time:',
      options: [
        { text: 'Immediate - within minutes', type: 'A' },
        { text: 'Within a few hours', type: 'B' },
        { text: 'When I remember... so maybe a day or two', type: 'C' },
        { text: 'Days to weeks, if at all', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When your phone buzzes with a text:',
      options: [
        { text: 'Check and respond immediately', type: 'A' },
        { text: 'Check when convenient, respond soon after', type: 'B' },
        { text: 'See it, think "I\'ll respond later," forget', type: 'C' },
        { text: 'Notifications are off, might see it eventually', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You\'ve been left on read. How long is too long?',
      options: [
        { text: 'More than an hour feels like abandonment', type: 'A' },
        { text: 'Same day is fine, next day gets concerning', type: 'B' },
        { text: 'Few days? That\'s normal... right?', type: 'C' },
        { text: 'I can\'t judge, I\'m worse', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'A friend texts "we need to talk." You respond:',
      options: [
        { text: 'Immediately - "what\'s wrong??"', type: 'A' },
        { text: 'Within an hour with concern', type: 'B' },
        { text: 'When I see it, whenever that is', type: 'C' },
        { text: 'Might avoid that one for a while...', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your read receipts are:',
      options: [
        { text: 'On - I have nothing to hide', type: 'A' },
        { text: 'Off - too much pressure', type: 'B' },
        { text: 'Off - don\'t want people knowing I saw it', type: 'C' },
        { text: 'What are read receipts?', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When you\'re busy and get a text:',
      options: [
        { text: 'Still respond quickly, texting takes seconds', type: 'A' },
        { text: 'Respond when I have a free moment', type: 'B' },
        { text: 'Wait until I\'m not busy... and then forget', type: 'C' },
        { text: 'Being busy is my default state so...', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Group chat response time:',
      options: [
        { text: 'Always engaged, always responding', type: 'A' },
        { text: 'Respond to relevant stuff', type: 'B' },
        { text: 'Catch up once in a while, respond sometimes', type: 'C' },
        { text: 'Group chats on mute, never respond', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your biggest texting challenge:',
      options: [
        { text: 'Waiting for others to respond as fast as me', type: 'A' },
        { text: 'Balancing quick responses with having a life', type: 'B' },
        { text: 'Actually responding in a timely manner', type: 'C' },
        { text: 'Responding at all', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'You just realized you forgot to respond to someone from 3 days ago:',
      options: [
        { text: 'This never happens to me', type: 'A' },
        { text: 'Respond immediately with an apology', type: 'B' },
        { text: 'Classic me, respond casually', type: 'C' },
        { text: 'At this point, just start a new conversation', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your relationship with unread messages:',
      options: [
        { text: 'Zero - everything is read and responded to', type: 'A' },
        { text: 'Low - I stay on top of things mostly', type: 'B' },
        { text: 'Several - working through them eventually', type: 'C' },
        { text: 'Hundreds - it\'s a lifestyle at this point', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Instant Replier',
      emoji: '⚡',
      description: 'You respond to texts faster than most people can blink. Your phone is always in hand, notifications are always on, and no message goes unread for long. People can count on you for quick responses!',
      traits: ['Lightning fast', 'Reliable', 'Always available', 'Phone-attached'],
      strengths: ['Friends can always reach you', 'Keeps conversations flowing', 'Never leaves people hanging'],
      weaknesses: ['May expect same from others', 'Possibly too phone-dependent'],
      tips: ['Your responsiveness is valued', 'Don\'t stress when others aren\'t as fast', 'It\'s okay to put the phone down sometimes'],
    },
    B: {
      type: 'B',
      title: 'The Reasonable Responder',
      emoji: '👍',
      description: 'You respond in a timely manner without being obsessive about it. Same day, usually within hours - reasonable and respectful. You have a healthy relationship with your phone and texting.',
      traits: ['Timely', 'Balanced', 'Respectful', 'Healthy'],
      strengths: ['Reliable without being obsessive', 'Good boundaries'],
      weaknesses: ['Nothing major'],
      tips: ['You\'ve got this figured out', 'Keep the balance', 'You\'re doing great'],
    },
    C: {
      type: 'C',
      title: 'The Delayed Responder',
      emoji: '😬',
      description: 'You see messages, you mean to respond, and then... you don\'t. Days pass. It\'s not personal, you\'re just not great at texting. Your friends have learned to be patient, but it definitely causes some issues.',
      traits: ['Delayed', 'Forgetful', 'Means well', 'Bad texter'],
      strengths: ['Not phone-obsessed'],
      weaknesses: ['Friends might feel ignored', 'Miss important things', 'Causes anxiety for others'],
      tips: ['Set reminders to respond', 'Even a quick "got it" helps', 'People do notice the delays'],
    },
    D: {
      type: 'D',
      title: 'The Ghoster',
      emoji: '👻',
      description: 'You have ascended beyond texting. Messages pile up unread, responses come days or weeks later if at all. You\'ve accepted this about yourself. Your friends have either adapted or given up.',
      traits: ['Unreachable', 'Phone-averse', 'Mysterious', 'Unapologetically slow'],
      strengths: ['Not ruled by phone'],
      weaknesses: ['People can\'t reach you', 'Damages relationships', 'Miss important stuff'],
      tips: ['Urgent texts should get responses', 'People interpret silence as not caring', 'Maybe try checking once a day minimum'],
    },
  },
};

export default testData;
