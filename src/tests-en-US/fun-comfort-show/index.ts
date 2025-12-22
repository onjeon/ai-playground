// What's Your Comfort Show Personality?
// Your TV watching habits reveal your soul!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-comfort-show',
  title: 'What\'s Your Comfort Show Personality?',
  description: 'Your TV watching habits reveal more about you than you think!',
  category: 'fun',
  emoji: '📺',
  color: 'from-violet-600 to-purple-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You\'ve had a rough day. You\'re immediately:',
      options: [
        { text: 'Rewatching my comfort show for the 100th time', type: 'A' },
        { text: 'Starting something new to escape', type: 'B' },
        { text: 'Reality TV to turn my brain off', type: 'C' },
        { text: 'A documentary - I want to learn something', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal show genre:',
      options: [
        { text: 'Sitcom - familiar laughs and happy endings', type: 'A' },
        { text: 'Drama/Thriller - I need to be invested', type: 'B' },
        { text: 'Reality/Competition - low stakes entertainment', type: 'C' },
        { text: 'True crime/Documentary - I love learning', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you watch shows?',
      options: [
        { text: 'Background noise while doing other things', type: 'A' },
        { text: 'Full attention, no phone, lights low', type: 'B' },
        { text: 'While scrolling my phone occasionally', type: 'C' },
        { text: 'Taking mental notes and discussing later', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your show recommendation style:',
      options: [
        { text: 'I recommend my favorites to everyone', type: 'A' },
        { text: 'Carefully curated based on the person', type: 'B' },
        { text: 'Just tell them what\'s trending right now', type: 'C' },
        { text: 'Deep dive into why they\'d appreciate it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How attached do you get to characters?',
      options: [
        { text: 'They\'re basically my friends', type: 'A' },
        { text: 'Very invested, but it\'s fiction', type: 'B' },
        { text: 'Watch for entertainment, not attachment', type: 'C' },
        { text: 'Analyze them more than feel for them', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your reaction when a show ends:',
      options: [
        { text: 'Immediately restart from episode 1', type: 'A' },
        { text: 'Devastated, need time to process', type: 'B' },
        { text: 'On to the next one!', type: 'C' },
        { text: 'Discuss/review it with others', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How many shows are you watching right now?',
      options: [
        { text: '1-2, but mostly rewatching favorites', type: 'A' },
        { text: '3-5, fully invested in each', type: 'B' },
        { text: '6+, rotating based on mood', type: 'C' },
        { text: 'A few carefully selected ones', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Do you skip intros?',
      options: [
        { text: 'Never! The intro is part of the experience', type: 'A' },
        { text: 'Only after a few episodes', type: 'B' },
        { text: 'Always - get to the content!', type: 'C' },
        { text: 'Depends on if the intro is actually good', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Spoilers are:',
      options: [
        { text: 'Fine, I probably know it already from rewatching', type: 'A' },
        { text: 'ABSOLUTELY NOT. Don\'t even risk it.', type: 'B' },
        { text: 'Whatever, doesn\'t ruin it for me', type: 'C' },
        { text: 'I seek them out to decide if it\'s worth watching', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'You\'re picking a show for a group. You suggest:',
      options: [
        { text: 'My go-to that everyone will love', type: 'A' },
        { text: 'Something critically acclaimed', type: 'B' },
        { text: 'Whatever\'s popular right now', type: 'C' },
        { text: 'Something thought-provoking to discuss', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Comfort Rewatcher',
      emoji: '🛋️',
      description: 'You\'ve watched The Office/Friends/Parks & Rec/your comfort show so many times you could recite it. New shows? Scary. Your comfort show? Home. The characters are your friends and you wouldn\'t have it any other way.',
      traits: ['Loyal', 'Nostalgic', 'Comfort-seeking', 'Consistent'],
      strengths: ['Knows what they like', 'Great references', 'Reliable taste', 'Cozy energy'],
      weaknesses: ['Might miss new great shows', 'Resistant to change', 'Very specific taste'],
      tips: ['Try ONE new show this year', 'Your comfort show isn\'t going anywhere', 'New favorites are possible'],
    },
    B: {
      type: 'B',
      title: 'The Invested Viewer',
      emoji: '🎭',
      description: 'When you watch a show, you WATCH it. Full attention, emotional investment, no distractions. You experience every plot twist deeply and need processing time after big episodes. Shows aren\'t just entertainment - they\'re experiences.',
      traits: ['Passionate', 'Focused', 'Emotionally invested', 'Discerning'],
      strengths: ['Deep appreciation', 'Great recommendations', 'Fully present', 'Memorable experiences'],
      weaknesses: ['Devastated by bad endings', 'Takes TV very seriously', 'Hard to find new worthy shows'],
      tips: ['It\'s okay to watch things casually', 'Not every show needs to be deep', 'Protect your emotional energy'],
    },
    C: {
      type: 'C',
      title: 'The Casual Consumer',
      emoji: '🍿',
      description: 'TV is entertainment, not therapy. You watch what\'s trending, don\'t get too attached, and move on to the next thing. Reality TV, trending shows, whatever\'s on - you\'re not too precious about it. Maximum entertainment, minimum investment.',
      traits: ['Easy-going', 'Trend-aware', 'Low-maintenance', 'Flexible'],
      strengths: ['Always knows what\'s trending', 'No show-related trauma', 'Easy to watch with', 'Versatile'],
      weaknesses: ['Might miss deep shows', 'Short attention span', 'Nothing really sticks'],
      tips: ['Give a show your full attention once', 'Deep watches can be rewarding', 'Some shows deserve investment'],
    },
    D: {
      type: 'D',
      title: 'The Analytical Viewer',
      emoji: '🔍',
      description: 'You don\'t just watch shows - you analyze them. Themes, writing quality, character development, cinematography. You read reviews, discuss theories, and appreciate the craft. Entertainment with education is your sweet spot.',
      traits: ['Analytical', 'Critical', 'Thoughtful', 'Curious'],
      strengths: ['Great taste', 'Appreciates quality', 'Insightful discussions', 'Learns while watching'],
      weaknesses: ['Hard to please', 'Over-thinks entertainment', 'Can\'t turn off critic brain'],
      tips: ['Sometimes turn off your brain', 'Trashy TV has its place', 'Not everything needs analysis'],
    },
  },
};

export default testData;
