// What Your Most-Used Apps Say About You
// Your app usage reveals your personality!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-app-usage',
  title: 'What Your Most-Used Apps Say',
  description: 'Your top apps reveal more about you than you think! Let\'s see what they say...',
  category: 'tech',
  emoji: '📲',
  color: 'from-indigo-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your #1 most-used app is probably:',
      options: [
        { text: 'Productivity apps (calendar, notes, email)', type: 'A' },
        { text: 'Communication apps (messages, WhatsApp)', type: 'B' },
        { text: 'Social media (Instagram, TikTok, Twitter)', type: 'C' },
        { text: 'Entertainment (YouTube, Netflix, games)', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your home screen first page has:',
      options: [
        { text: 'Utilities and productivity apps only', type: 'A' },
        { text: 'Mix of useful and social apps', type: 'B' },
        { text: 'All the socials front and center', type: 'C' },
        { text: 'Games and entertainment dominating', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Which app would devastate you most to lose?',
      options: [
        { text: 'Calendar/To-do - my life is in there', type: 'A' },
        { text: 'Messages - how would I talk to people?', type: 'B' },
        { text: 'Instagram/TikTok - my connection to culture', type: 'C' },
        { text: 'Spotify/Netflix - my comfort and joy', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How many apps do you have installed?',
      options: [
        { text: 'Minimal - only what I need', type: 'A' },
        { text: 'Reasonable amount, well organized', type: 'B' },
        { text: 'A lot, most I don\'t use anymore', type: 'C' },
        { text: 'So many. Random ones I forgot existed.', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'What do you download first on a new phone?',
      options: [
        { text: 'Email, calendar, banking - the essentials', type: 'A' },
        { text: 'Messages, social, maybe a game', type: 'B' },
        { text: 'Instagram, TikTok, Twitter - priorities', type: 'C' },
        { text: 'All my games immediately', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your "waiting in line" go-to app:',
      options: [
        { text: 'Read emails or check calendar', type: 'A' },
        { text: 'Text someone or catch up on messages', type: 'B' },
        { text: 'Scroll TikTok or Instagram', type: 'C' },
        { text: 'Games or YouTube', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'You open your phone and reflexively check:',
      options: [
        { text: 'My schedule or to-do list', type: 'A' },
        { text: 'Messages and notifications', type: 'B' },
        { text: 'Social media feeds', type: 'C' },
        { text: 'YouTube or whatever entertains me', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your app folder situation:',
      options: [
        { text: 'Everything neatly categorized', type: 'A' },
        { text: 'A few organized folders', type: 'B' },
        { text: 'Chaos with some random folders', type: 'C' },
        { text: 'Folders? I just search for everything', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When a new viral app comes out:',
      options: [
        { text: 'Wait to see if it\'s actually useful', type: 'A' },
        { text: 'Download if friends are using it', type: 'B' },
        { text: 'Download immediately, need to see what\'s up', type: 'C' },
        { text: 'Already downloaded and obsessed', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your paid apps/subscriptions:',
      options: [
        { text: 'Productivity apps that make life easier', type: 'A' },
        { text: 'Mix of useful and entertainment', type: 'B' },
        { text: 'Social media premium (ad-free please)', type: 'C' },
        { text: 'Streaming services and games mostly', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Productivity Power User',
      emoji: '⚡',
      description: 'Your phone is a tool, not a toy. Calendars, notes, email, reminders - you\'re running your life like a CEO. Your apps are practical, organized, and purposeful. You probably have strong opinions about the best to-do app.',
      traits: ['Organized', 'Efficient', 'Goal-oriented', 'Practical'],
      strengths: ['Phone actually makes you productive', 'No time wasted', 'Life is organized'],
      weaknesses: ['Could use more fun apps', 'Might be too serious'],
      tips: ['You\'re maximizing your phone\'s potential', 'Maybe download one fun thing'],
    },
    B: {
      type: 'B',
      title: 'The Social Connector',
      emoji: '💬',
      description: 'Your phone is your lifeline to the people you love. Messages, calls, group chats - you\'re always in touch. Connection is your priority, and your apps reflect that. You probably have 47 unread group chat messages right now.',
      traits: ['Social', 'Connected', 'Communicative', 'Relationship-focused'],
      strengths: ['Strong connections', 'Always in the loop', 'Great at keeping in touch'],
      weaknesses: ['Might be too available', 'FOMO on group chats'],
      tips: ['Your social life thrives because of you', 'Don\'t forget to disconnect sometimes'],
    },
    C: {
      type: 'C',
      title: 'The Scroll Master',
      emoji: '📱',
      description: 'Instagram, TikTok, Twitter, repeat. Your phone is your window to internet culture, trends, and endless content. You know all the memes, all the drama, and all the viral sounds. Your For You page is perfectly curated.',
      traits: ['Trendy', 'Connected to culture', 'Content consumer', 'Chronically online'],
      strengths: ['Never miss a trend', 'Great meme knowledge', 'Finger on the pulse'],
      weaknesses: ['Screen time is HIGH', 'Comparison trap', 'Might need a break'],
      tips: ['Maybe delete one social app', 'Set some limits', 'Your internet literacy is elite though'],
    },
    D: {
      type: 'D',
      title: 'The Entertainment Seeker',
      emoji: '🎮',
      description: 'Your phone is for FUN. Games, YouTube, Netflix, podcasts - you\'re here for entertainment. Work apps? Boring. Social drama? Exhausting. You just want to vibe, watch content, and maybe beat your high score.',
      traits: ['Fun-focused', 'Chill', 'Entertainment-driven', 'Escapist'],
      strengths: ['Actually enjoys your phone time', 'Not stressed by socials', 'Good taste in content'],
      weaknesses: ['Might be avoiding responsibilities', 'Screen time for entertainment is... a lot'],
      tips: ['Balance is key', 'Your phone should spark joy and it does', 'Maybe check your email occasionally'],
    },
  },
};

export default testData;
