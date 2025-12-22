// Your Social Media Personality
// How do you show up online?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-social-media-type',
  title: 'What\'s Your Social Media Personality?',
  description: 'Discover how you navigate the digital world - are you a poster, lurker, or something in between?',
  category: 'personality',
  emoji: '📱',
  color: 'from-pink-500 to-rose-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'How often do you post on social media?',
      options: [
        { text: 'Multiple times a day - I share everything', type: 'A' },
        { text: 'A few times a week with curated content', type: 'B' },
        { text: 'Once in a while when something special happens', type: 'C' },
        { text: 'I mostly just scroll and watch', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Something interesting happens. Your first thought is:',
      options: [
        { text: 'This needs to go on my story RIGHT NOW', type: 'A' },
        { text: 'Would this make a good post?', type: 'B' },
        { text: 'I should tell my close friends', type: 'C' },
        { text: 'I\'ll enjoy this moment without my phone', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your Instagram feed aesthetic is:',
      options: [
        { text: 'A real-time documentary of my life', type: 'A' },
        { text: 'Carefully curated and color-coordinated', type: 'B' },
        { text: 'A random mix of whatever I felt like posting', type: 'C' },
        { text: 'Pretty empty - I barely post', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you feel about your follower count?',
      options: [
        { text: 'Always trying to grow it!', type: 'A' },
        { text: 'I care about engagement more than numbers', type: 'B' },
        { text: 'I only really care about people I actually know', type: 'C' },
        { text: 'I honestly don\'t pay attention to it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you see a viral trend, you:',
      options: [
        { text: 'Jump on it immediately', type: 'A' },
        { text: 'Put my own creative spin on it', type: 'B' },
        { text: 'Share it with friends privately', type: 'C' },
        { text: 'Watch others do it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your comment style is:',
      options: [
        { text: 'I comment on everything I see', type: 'A' },
        { text: 'Thoughtful comments on content I love', type: 'B' },
        { text: 'Mostly just reactions and emojis', type: 'C' },
        { text: 'I rarely comment on anything', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How many social media apps do you actively use?',
      options: [
        { text: 'All of them - Instagram, TikTok, Twitter, BeReal...', type: 'A' },
        { text: '2-3 platforms that I focus on', type: 'B' },
        { text: 'One or two for keeping up with friends', type: 'C' },
        { text: 'I check them but don\'t really "use" them', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your screen time report makes you feel:',
      options: [
        { text: 'It\'s fine - social media is part of my life', type: 'A' },
        { text: 'A little guilty, but I manage it', type: 'B' },
        { text: 'I try to keep it under control', type: 'C' },
        { text: 'Pretty good - I\'m not on my phone that much', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you go on vacation:',
      options: [
        { text: 'Real-time updates the whole trip', type: 'A' },
        { text: 'I\'ll post a photo dump after', type: 'B' },
        { text: 'Maybe one or two photos if I remember', type: 'C' },
        { text: 'Digital detox - no posts until I\'m back', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your relationship with social media is:',
      options: [
        { text: 'It\'s a huge part of my life and identity', type: 'A' },
        { text: 'A creative outlet and way to connect', type: 'B' },
        { text: 'A tool for staying in touch', type: 'C' },
        { text: 'Something I could easily live without', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Digital Extrovert',
      emoji: '🌟',
      description: 'You live life out loud - online and offline! Social media is an extension of your personality, and you love sharing, connecting, and being in the mix. Your followers feel like they really know you.',
      traits: ['Expressive', 'Connected', 'Authentic', 'Engaged'],
      strengths: ['Great at building community', 'Always in the know', 'Authentic presence', 'Strong engagement'],
      weaknesses: ['May overshare', 'Screen time concerns', 'FOMO if you miss something'],
      tips: ['Practice some digital boundaries', 'Not everything needs to be posted', 'Check in with your screen time'],
    },
    B: {
      type: 'B',
      title: 'The Content Curator',
      emoji: '🎨',
      description: 'You approach social media like an art form. Every post is intentional, every caption is thought through. You\'ve found a balance between being present online and maintaining quality over quantity.',
      traits: ['Creative', 'Intentional', 'Quality-focused', 'Strategic'],
      strengths: ['Polished presence', 'Thoughtful content', 'Good boundaries', 'Builds meaningful connections'],
      weaknesses: ['May spend too much time perfecting posts', 'Can feel pressure to perform', 'Comparison trap'],
      tips: ['Let yourself post imperfectly sometimes', 'Authenticity > aesthetics', 'Don\'t let it become work'],
    },
    C: {
      type: 'C',
      title: 'The Casual Connector',
      emoji: '👋',
      description: 'Social media is a tool, not a lifestyle for you. You post when you feel like it, stay connected to people you care about, and don\'t stress about the rest. You\'ve got healthy digital habits.',
      traits: ['Balanced', 'Grounded', 'Selective', 'Low-pressure'],
      strengths: ['Healthy relationship with social media', 'Present in real life', 'No performance pressure', 'Genuine connections'],
      weaknesses: ['May miss some online moments', 'Less visible to your network', 'Could feel out of the loop'],
      tips: ['Stay connected in ways that feel right', 'You\'re doing great', 'Engage when it feels natural'],
    },
    D: {
      type: 'D',
      title: 'The Silent Observer',
      emoji: '👀',
      description: 'You\'re the ultimate lurker - and that\'s totally okay! You prefer to watch from the sidelines, staying informed without the pressure of posting. Real life is where you truly engage.',
      traits: ['Private', 'Observant', 'Independent', 'Low-key'],
      strengths: ['Strong privacy', 'Present in real moments', 'No social media stress', 'Independent thinking'],
      weaknesses: ['May feel disconnected from trends', 'Harder for friends to keep up with you', 'Missing community aspects'],
      tips: ['Engage occasionally to maintain connections', 'Share when it feels right', 'You don\'t have to post - but stay connected'],
    },
  },
};

export default testData;
