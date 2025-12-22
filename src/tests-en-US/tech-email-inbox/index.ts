// What Does Your Inbox Look Like?
// Your email management style reveals your personality!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-email-inbox',
  title: 'What Does Your Inbox Look Like?',
  description: 'Inbox zero or inbox infinity? Let\'s see what kind of email person you really are!',
  category: 'tech',
  emoji: '📧',
  color: 'from-red-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How many unread emails do you have right now?',
      options: [
        { text: 'Zero - inbox zero is a lifestyle', type: 'A' },
        { text: 'Under 20 - pretty manageable', type: 'B' },
        { text: 'Hundreds, maybe thousands?', type: 'C' },
        { text: '50,000+ and I\'ve made peace with it', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When a new email arrives, you:',
      options: [
        { text: 'Read and respond/archive immediately', type: 'A' },
        { text: 'Check it when I have time, respond within a day', type: 'B' },
        { text: 'Glance at it, maybe respond eventually', type: 'C' },
        { text: 'What notification? I turned those off years ago', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your email folder system:',
      options: [
        { text: 'Color-coded with detailed subfolders', type: 'A' },
        { text: 'Basic folders that mostly work', type: 'B' },
        { text: 'Everything in one inbox, I use search', type: 'C' },
        { text: 'Folders? I don\'t even know what those are', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you handle promotional emails?',
      options: [
        { text: 'Unsubscribe immediately, keep inbox clean', type: 'A' },
        { text: 'Delete without reading, occasionally unsubscribe', type: 'B' },
        { text: 'Let them pile up, deal with it "later"', type: 'C' },
        { text: 'They\'re buried somewhere, probably 10,000 of them', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your response time to important emails:',
      options: [
        { text: 'Within hours, usually faster', type: 'A' },
        { text: 'Same day or next morning', type: 'B' },
        { text: 'Days to a week... maybe more', type: 'C' },
        { text: 'If they really need me, they\'ll text', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you feel when you see your inbox?',
      options: [
        { text: 'Calm, organized, under control', type: 'A' },
        { text: 'Normal, it\'s just email', type: 'B' },
        { text: 'Low-key stressed but in denial', type: 'C' },
        { text: 'Avoid looking at it at all costs', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Scheduling emails for later:',
      options: [
        { text: 'I do this strategically all the time', type: 'A' },
        { text: 'Occasionally, when it makes sense', type: 'B' },
        { text: 'Too much effort, just send whenever', type: 'C' },
        { text: 'Wait, you can do that?', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your signature and email formatting:',
      options: [
        { text: 'Professional signature, proper formatting always', type: 'A' },
        { text: 'Basic signature, reasonable formatting', type: 'B' },
        { text: 'No signature, minimal effort', type: 'C' },
        { text: 'Sent from my iPhone (never changed it)', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you need to find an old email:',
      options: [
        { text: 'Know exactly which folder it\'s in', type: 'A' },
        { text: 'Search and find it pretty quickly', type: 'B' },
        { text: 'Good luck, it\'s buried in chaos', type: 'C' },
        { text: 'Assume it\'s lost forever, ask them to resend', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your dream email life:',
      options: [
        { text: 'Exactly what I have now - organized bliss', type: 'A' },
        { text: 'A bit more organized but it\'s fine', type: 'B' },
        { text: 'Declare email bankruptcy and start fresh', type: 'C' },
        { text: 'Email didn\'t exist and we just talked to people', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Inbox Zero Warrior',
      emoji: '✨',
      description: 'Your inbox is pristine. Organized. A thing of beauty. Every email read, filed, or deleted. You probably have productivity tips that would blow people\'s minds. You\'re the person we all pretend to be but never actually are.',
      traits: ['Organized', 'Disciplined', 'Efficient', 'Type-A'],
      strengths: ['Never misses important emails', 'Zero email anxiety', 'Professional and reliable'],
      weaknesses: ['Might be too rigid', 'Probably judges other people\'s inboxes'],
      tips: ['Teach us your ways', 'Write a book about it', 'Keep being you'],
    },
    B: {
      type: 'B',
      title: 'The Functional Emailer',
      emoji: '📬',
      description: 'You\'ve got a system that works well enough. Not perfect, but manageable. You respond to things, you can find what you need, and email doesn\'t stress you out. You\'re the healthy middle ground most people aim for.',
      traits: ['Practical', 'Reasonable', 'Functional', 'Normal'],
      strengths: ['Good enough organization', 'Responds in reasonable time', 'Low email stress'],
      weaknesses: ['Could be more organized', 'Occasional email pile-up'],
      tips: ['You\'re doing fine', 'Maybe add a few more folders', 'Don\'t fix what ain\'t broke'],
    },
    C: {
      type: 'C',
      title: 'Inbox Chaos Goblin',
      emoji: '📨',
      description: 'Your inbox is a graveyard of newsletters, promotions, and "I\'ll deal with this later" emails. You use search for everything because organization left the chat years ago. It\'s chaotic but somehow you survive.',
      traits: ['Chaotic', 'Avoidant', 'Search-dependent', 'Overwhelmed'],
      strengths: ['Search function skills are elite', 'Still technically functional'],
      weaknesses: ['Email anxiety is real', 'Important things get buried', 'Probably missing deadlines'],
      tips: ['Select all, mark as read, start fresh', 'Unsubscribe from EVERYTHING', 'Set aside 30 min to clean up'],
    },
    D: {
      type: 'D',
      title: 'Email? What Email?',
      emoji: '🗑️',
      description: 'You\'ve essentially abandoned email as a concept. Tens of thousands of unread messages you\'ll never read. If it\'s important, people will find another way to reach you. Email is dead to you and honestly, respect.',
      traits: ['Avoidant', 'Chaotic', 'Disconnected', 'Zen about it'],
      strengths: ['Zero email-related stress (because you gave up)', 'Living in denial peacefully'],
      weaknesses: ['Missing important things', 'People think you\'re ignoring them', 'Chaos incarnate'],
      tips: ['Email bankruptcy is a real option', 'Create a new email and start over', 'Tell people to text you'],
    },
  },
};

export default testData;
