// Your Email Tone
// What vibe do your emails give off?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-email-tone',
  title: 'Your Email Tone',
  description: 'Are your emails warm and friendly or cold and corporate? Let\'s analyze your email energy!',
  category: 'communication',
  emoji: '📧',
  color: 'from-blue-500 to-cyan-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your typical email greeting:',
      options: [
        { text: '"Hi [Name]!" with exclamation points', type: 'A' },
        { text: '"Hi [Name]," professional but warm', type: 'B' },
        { text: '"Hello," or "[Name]," - minimal', type: 'C' },
        { text: 'No greeting, straight to business', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your email sign-off:',
      options: [
        { text: '"Thanks so much! :)" with personality', type: 'A' },
        { text: '"Best," or "Thanks," - standard friendly', type: 'B' },
        { text: '"Regards," - purely professional', type: 'C' },
        { text: 'Just my name, or nothing', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Exclamation points in emails:',
      options: [
        { text: 'Multiple! I\'m friendly! And excited!', type: 'A' },
        { text: 'One or two to seem warm', type: 'B' },
        { text: 'Rarely - they seem unprofessional', type: 'C' },
        { text: 'Never. Periods only.', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you need something done:',
      options: [
        { text: '"Would you mind... if it\'s not too much trouble..."', type: 'A' },
        { text: '"Could you please..." - polite and clear', type: 'B' },
        { text: '"Please do X by Y date" - direct', type: 'C' },
        { text: '"Do X" - no need for fluff', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your email length:',
      options: [
        { text: 'Long - I explain everything and add pleasantries', type: 'A' },
        { text: 'Medium - cover what\'s needed with some warmth', type: 'B' },
        { text: 'Short - efficient and to the point', type: 'C' },
        { text: 'As few words as possible', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Emojis in work emails:',
      options: [
        { text: 'Yes! Makes things friendlier! 😊', type: 'A' },
        { text: 'Occasionally, with people I know well', type: 'B' },
        { text: 'Never in work contexts', type: 'C' },
        { text: 'Emojis are for texts, not emails', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When someone emails you something annoying:',
      options: [
        { text: 'Still respond super friendly, kill with kindness', type: 'A' },
        { text: 'Professional, maybe slightly cooler than usual', type: 'B' },
        { text: 'Very brief, noticeably colder', type: 'C' },
        { text: 'No softening - address the issue directly', type: 'D' },
      ],
    },
    {
      id: 8,
      question: '"Hope this email finds you well":',
      options: [
        { text: 'Use it often! Nice touch', type: 'A' },
        { text: 'Sometimes, for external people', type: 'B' },
        { text: 'Hate it but occasionally use it', type: 'C' },
        { text: 'Absolutely not. Get to the point.', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'People probably describe your emails as:',
      options: [
        { text: 'Warm, friendly, maybe too many exclamation points', type: 'A' },
        { text: 'Professional and personable', type: 'B' },
        { text: 'Formal and efficient', type: 'C' },
        { text: 'Blunt, cold, or intimidating', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your email philosophy:',
      options: [
        { text: 'Connection and warmth matter, even in email', type: 'A' },
        { text: 'Professional but human', type: 'B' },
        { text: 'Clear communication is what matters', type: 'C' },
        { text: 'Efficiency over everything', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Friendly Over-Emailer',
      emoji: '🌟',
      description: 'Your emails are WARM! Exclamation points, pleasantries, maybe emojis. You never want anyone to think you\'re cold or rude. Your emails might be longer than needed, but everyone feels good reading them!',
      traits: ['Warm', 'Friendly', 'Enthusiastic', 'People-pleaser'],
      strengths: ['Makes people feel valued', 'Never comes off cold', 'Builds relationships'],
      weaknesses: ['Emails can be too long', 'Might seem less confident', 'Exclamation points exhausting'],
      tips: ['Your warmth is appreciated', 'Sometimes shorter is better', 'You don\'t have to soften everything'],
    },
    B: {
      type: 'B',
      title: 'The Professional Warmth',
      emoji: '✨',
      description: 'You\'ve found the balance - professional but personable. Your emails are clear, reasonably warm, and appropriate for the context. You adapt your tone based on the relationship. Email communication goals!',
      traits: ['Balanced', 'Adaptive', 'Professional', 'Personable'],
      strengths: ['Perfect tone for business', 'Clear communication', 'Builds rapport without overdoing it'],
      weaknesses: ['None major'],
      tips: ['You\'ve nailed it', 'Keep reading the room', 'Your balance is ideal'],
    },
    C: {
      type: 'C',
      title: 'The Corporate Formalist',
      emoji: '📋',
      description: 'Your emails are professional, efficient, and... not warm. "Regards" is your sign-off, exclamation points are banned, and pleasantries are minimal. You get to the point. Some might find it cold.',
      traits: ['Formal', 'Efficient', 'Cold', 'Professional'],
      strengths: ['Clear and efficient', 'No time wasted', 'Professional image'],
      weaknesses: ['Can seem unfriendly', 'May create distance', 'People might be intimidated'],
      tips: ['A little warmth goes a long way', 'Try adding one friendly element', 'People respond to connection'],
    },
    D: {
      type: 'D',
      title: 'The Blunt Bullet',
      emoji: '💼',
      description: 'Efficiency is king. Your emails are as short as possible, no fluff, no pleasantries, probably no greeting. You\'re not being rude - you just don\'t have time for extra words. But people might find it abrupt.',
      traits: ['Blunt', 'Minimal', 'Efficient', 'Abrupt'],
      strengths: ['Saves time', 'Crystal clear'],
      weaknesses: ['Comes off as cold or rude', 'Damages relationships', 'People may feel dismissed'],
      tips: ['Two extra words of warmth won\'t kill you', '"Hi" and "Thanks" take 3 seconds', 'Tone matters more than you think'],
    },
  },
};

export default testData;
