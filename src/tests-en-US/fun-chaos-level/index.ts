// What's Your Chaos Level?
// Find out if you're organized, chaotic, or somewhere in between!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-chaos-level',
  title: 'What\'s Your Chaos Level?',
  description: 'Are you a structured planner or an agent of chaos? Let\'s find out!',
  category: 'fun',
  emoji: '🌀',
  color: 'from-fuchsia-600 to-pink-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your desktop/phone home screen right now:',
      options: [
        { text: 'Everything in labeled folders, organized perfectly', type: 'A' },
        { text: 'Somewhat organized with a few loose apps', type: 'B' },
        { text: 'Apps everywhere, I use search to find things', type: 'C' },
        { text: '500 apps, 10,000 unread emails, chaos aesthetic', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You\'re planning a trip. Your approach:',
      options: [
        { text: 'Detailed spreadsheet with timings and backups', type: 'A' },
        { text: 'General plan with some flexibility', type: 'B' },
        { text: 'Book the flight, figure out the rest later', type: 'C' },
        { text: 'Show up at the airport and see what happens', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your room/living space is:',
      options: [
        { text: 'Immaculate - everything has its place', type: 'A' },
        { text: 'Clean enough, with some organized clutter', type: 'B' },
        { text: '"Organized chaos" - I know where everything is!', type: 'C' },
        { text: 'A disaster zone that I\'ve made peace with', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When making decisions:',
      options: [
        { text: 'Pro/con list, research, careful consideration', type: 'A' },
        { text: 'Think it through but trust my gut', type: 'B' },
        { text: 'Go with my first instinct', type: 'C' },
        { text: 'Flip a coin / ask the universe / vibes', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your calendar/schedule situation:',
      options: [
        { text: 'Color-coded, synced across devices, notifications set', type: 'A' },
        { text: 'I have a calendar and use it mostly', type: 'B' },
        { text: 'Mental calendar with occasional reminders', type: 'C' },
        { text: 'What calendar? I live in the moment', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone changes plans last minute:',
      options: [
        { text: 'Mildly stressed but I\'ll adjust', type: 'A' },
        { text: 'No problem, let\'s roll with it', type: 'B' },
        { text: 'Honestly I love spontaneity', type: 'C' },
        { text: 'MY FAVORITE - plans are suggestions anyway', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your morning routine:',
      options: [
        { text: 'Same time, same order, every day', type: 'A' },
        { text: 'General routine with some variation', type: 'B' },
        { text: 'Different every day depending on vibes', type: 'C' },
        { text: 'Wake up 5 mins before I need to leave', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How do you feel about rules?',
      options: [
        { text: 'They exist for a reason - I follow them', type: 'A' },
        { text: 'Mostly follow with minor bending', type: 'B' },
        { text: 'Guidelines, really. Open to interpretation.', type: 'C' },
        { text: 'Rules are suggestions I politely ignore', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your approach to deadlines:',
      options: [
        { text: 'Finish early to review and perfect', type: 'A' },
        { text: 'Done with reasonable time to spare', type: 'B' },
        { text: 'Procrastinate then deliver at the last second', type: 'C' },
        { text: 'Deadlines are more like... dead-guidelines', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'People would describe your energy as:',
      options: [
        { text: 'Calm, reliable, put-together', type: 'A' },
        { text: 'Balanced with occasional surprises', type: 'B' },
        { text: 'Spontaneous, unpredictable, fun', type: 'C' },
        { text: 'Absolute chaos goblin', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Lawful Good',
      emoji: '📐',
      description: 'Your life is a well-oiled machine. Color-coded calendars, labeled folders, plans for your plans. You\'re the friend everyone relies on because you have your life TOGETHER. Chaos fears you.',
      traits: ['Organized', 'Reliable', 'Structured', 'Prepared'],
      strengths: ['Never misses anything', 'People trust you', 'Life runs smoothly', 'Peak efficiency'],
      weaknesses: ['Might be too rigid', 'Stressed by disorder', 'Could loosen up'],
      tips: ['Embrace some spontaneity', 'Not everything needs a plan', 'Chaos won\'t kill you'],
    },
    B: {
      type: 'B',
      title: 'Organized with Flair',
      emoji: '✨',
      description: 'You\'ve got structure but you\'re not obsessive about it. Plans exist but can bend. Your life is functional chaos - organized enough to adult, flexible enough to live. The healthy middle ground!',
      traits: ['Balanced', 'Flexible', 'Functional', 'Adaptable'],
      strengths: ['Best of both worlds', 'Handles surprises well', 'Not too rigid', 'Gets things done'],
      weaknesses: ['Occasional overwhelm', 'Systems could be tighter'],
      tips: ['Your balance is perfect', 'Keep doing what works', 'Stay adaptable'],
    },
    C: {
      type: 'C',
      title: 'Chaotic Neutral',
      emoji: '🎲',
      description: 'You exist in "organized chaos" - messy to others, but you know where everything is (usually). Plans are rough guidelines, deadlines are suggestions, and spontaneity is your vibe. It works for you somehow.',
      traits: ['Spontaneous', 'Creative', 'Unpredictable', 'Free-spirited'],
      strengths: ['Handles chaos well', 'Creative solutions', 'Fun to be around', 'Flexible'],
      weaknesses: ['Occasionally forgets things', 'Stresses organized friends', 'Last-minute everything'],
      tips: ['Some structure might help', 'Write things down', 'Your friends worry about you'],
    },
    D: {
      type: 'D',
      title: 'Agent of Chaos',
      emoji: '🔥',
      description: 'You are chaos incarnate and you\'ve made peace with it. Plans? Never met her. Organization? Sounds fake. You thrive in disorder, live in the moment, and somehow things work out (mostly). You terrify organized people.',
      traits: ['Chaotic', 'Spontaneous', 'Wild', 'Unpredictable'],
      strengths: ['Adaptable to anything', 'Creative problem-solver', 'Living life to the fullest'],
      weaknesses: ['Probably forgot something important', 'Life is held together by vibes', 'Causes anxiety in others'],
      tips: ['Maybe one small system?', 'Write down SOME things', 'Your friends love you but also worry'],
    },
  },
};

export default testData;
