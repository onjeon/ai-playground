// What Does Your Phone Say About You?
// Your phone usage reveals a lot about your personality!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-phone-personality',
  title: 'What Does Your Phone Say About You?',
  description: 'Your relationship with your phone reveals more about you than you think!',
  category: 'tech',
  emoji: '📱',
  color: 'from-blue-500 to-cyan-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your phone battery right now is probably:',
      options: [
        { text: 'Above 80% - I charge it constantly', type: 'A' },
        { text: 'Around 50% - healthy middle ground', type: 'B' },
        { text: 'Below 20% - living dangerously', type: 'C' },
        { text: 'Literally on 1% or dead somewhere', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your home screen aesthetic:',
      options: [
        { text: 'Minimalist - only essential apps visible', type: 'A' },
        { text: 'Organized into folders by category', type: 'B' },
        { text: 'Whatever the phone decides, I don\'t care', type: 'C' },
        { text: 'Complete chaos with 500 apps everywhere', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your notification badges right now:',
      options: [
        { text: 'Zero - I clear them immediately', type: 'A' },
        { text: 'A few here and there', type: 'B' },
        { text: 'Triple digits on email alone', type: 'C' },
        { text: '99,999+ on multiple apps, it\'s fine', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When your phone dies at an inconvenient time:',
      options: [
        { text: 'Never happens - always have a backup charger', type: 'A' },
        { text: 'Annoying but I manage without it', type: 'B' },
        { text: 'Mild panic, slight existential crisis', type: 'C' },
        { text: 'Full catastrophic meltdown mode', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with phone updates:',
      options: [
        { text: 'Update immediately when available', type: 'A' },
        { text: 'Wait a week to check for bugs, then update', type: 'B' },
        { text: 'Hit "remind me later" for months', type: 'C' },
        { text: 'Still on iOS 14 / Android 10 and thriving', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'First thing you do when you wake up:',
      options: [
        { text: 'Intentionally avoid my phone for the first hour', type: 'A' },
        { text: 'Quick check of important stuff, then put it down', type: 'B' },
        { text: 'Scroll for "5 minutes" that becomes 45', type: 'C' },
        { text: 'Phone hasn\'t left my hand since 3am', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your screenshots folder situation:',
      options: [
        { text: 'Organized and deleted after use', type: 'A' },
        { text: 'A reasonable collection of useful stuff', type: 'B' },
        { text: 'Hundreds of random screenshots I\'ll never look at', type: 'C' },
        { text: '5,000+ screenshots that are basically my diary', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you get a text from someone you don\'t want to talk to:',
      options: [
        { text: 'Reply politely and promptly anyway', type: 'A' },
        { text: 'Read it, think about it, respond when ready', type: 'B' },
        { text: 'Leave it on read for days, oops', type: 'C' },
        { text: 'What text? Didn\'t see it. Ever.', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your photo storage strategy:',
      options: [
        { text: 'Cloud backup with organized albums', type: 'A' },
        { text: 'Backed up somewhere, mostly organized', type: 'B' },
        { text: '"Storage almost full" is my daily notification', type: 'C' },
        { text: '50,000 photos I\'ll never delete or organize', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your screen time report would reveal:',
      options: [
        { text: 'Healthy limits, mostly productive apps', type: 'A' },
        { text: 'Normal usage with occasional binges', type: 'B' },
        { text: '6+ hours daily but it\'s "for work" right?', type: 'C' },
        { text: 'Scary numbers I refuse to look at', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Digital Minimalist',
      emoji: '🧘',
      description: 'You\'ve mastered the art of using your phone as a tool, not a vice. Organized, intentional, and probably annoyingly zen about it. Your phone serves YOU, not the other way around. People ask you for productivity tips.',
      traits: ['Organized', 'Intentional', 'Disciplined', 'Zen'],
      strengths: ['Healthy relationship with tech', 'Actually present in life', 'Inbox zero energy'],
      weaknesses: ['Might miss fun internet moments', 'Sometimes too strict'],
      tips: ['Your digital wellness game is strong', 'Keep inspiring the rest of us', 'Maybe loosen up occasionally?'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Browser',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot between connected and present. Your phone is useful without being an obsession. You scroll but you also put it down. You\'re basically what phone manufacturers hope we all become.',
      traits: ['Balanced', 'Practical', 'Adaptable', 'Reasonable'],
      strengths: ['Healthy tech habits', 'Functional without addiction', 'Good boundaries'],
      weaknesses: ['Occasional doom scroll sessions', 'Could optimize more'],
      tips: ['You\'re doing great', 'Keep the balance', 'Don\'t let it slip'],
    },
    C: {
      type: 'C',
      title: 'The Chaotic Scroller',
      emoji: '🌀',
      description: 'Your phone is basically an extension of your hand at this point. You\'ve got thousands of unread emails, your storage is always full, and "5 more minutes" is your mantra. It\'s chaotic but somehow you function.',
      traits: ['Addicted', 'Chaotic', 'Connected', 'Overwhelmed'],
      strengths: ['Never miss a meme', 'Always reachable', 'Peak internet culture'],
      weaknesses: ['Probably need a digital detox', 'Anxiety from notifications', 'What is "being present"?'],
      tips: ['Screen time limits exist for a reason', 'Try putting it in another room sometimes', 'Your battery deserves better'],
    },
    D: {
      type: 'D',
      title: 'The Phone Zombie',
      emoji: '📵',
      description: 'You and your phone are one entity now. You\'ve transcended normal phone usage into a realm where your screen time is genuinely concerning. You fall asleep scrolling and wake up scrolling. Your phone is your lifeline.',
      traits: ['Obsessed', 'Chronically Online', 'Chaotic', 'Dependent'],
      strengths: ['First to know everything', 'Unmatched meme knowledge', 'Peak connectivity'],
      weaknesses: ['What is grass?', 'Sleep? Never heard of her', 'Probably need an intervention'],
      tips: ['Please touch grass', 'Consider therapy', 'Your phone can\'t love you back'],
    },
  },
};

export default testData;
