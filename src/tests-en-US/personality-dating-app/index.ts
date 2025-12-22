// Your Dating App Personality
// How you swipe and connect

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-dating-app',
  title: 'What\'s Your Dating App Personality?',
  description: 'Swipe right on self-discovery! Find out what your dating app habits reveal about your approach to love and connection.',
  category: 'personality',
  emoji: '💕',
  color: 'from-pink-500 to-rose-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your swiping style is:',
      options: [
        { text: 'Read every bio, analyze every photo, decide carefully', type: 'A' },
        { text: 'Quick vibe check - attractive + decent bio = swipe', type: 'B' },
        { text: 'Mass swipe right and sort through matches later', type: 'C' },
        { text: 'Mostly left swipes - I have high standards', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your dating app bio is:',
      options: [
        { text: 'Carefully crafted with personality and conversation starters', type: 'A' },
        { text: 'Short, sweet, gives the vibe', type: 'B' },
        { text: 'Changed often or just emojis', type: 'C' },
        { text: 'Minimal - let the photos speak', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You match with someone you like. Your first move:',
      options: [
        { text: 'Craft a thoughtful opener referencing their bio', type: 'A' },
        { text: 'Send a casual but engaging message', type: 'B' },
        { text: 'Wait for them to message first', type: 'C' },
        { text: '"Hey" or a gif and see what happens', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Conversation is going well. When do you suggest meeting?',
      options: [
        { text: 'After several meaningful exchanges - trust first', type: 'A' },
        { text: 'A few days in if the vibe is right', type: 'B' },
        { text: 'Pretty quickly - no point wasting time chatting', type: 'C' },
        { text: 'When they suggest it - I don\'t want to seem pushy', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your photo selection strategy:',
      options: [
        { text: 'Curated variety - face, full body, hobbies, with friends', type: 'A' },
        { text: 'A few good ones that show my personality', type: 'B' },
        { text: 'Whatever photos I have, no overthinking', type: 'C' },
        { text: 'Best angle only, carefully filtered', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone doesn\'t respond to your message. You:',
      options: [
        { text: 'Move on - plenty of people out there', type: 'A' },
        { text: 'Maybe send one follow-up, then let it go', type: 'B' },
        { text: 'Unmatch and forget about it', type: 'C' },
        { text: 'Wonder what I did wrong for too long', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How many dating apps do you use?',
      options: [
        { text: 'One focused approach - quality over quantity', type: 'A' },
        { text: '2-3 to maximize chances', type: 'B' },
        { text: 'All of them at some point', type: 'C' },
        { text: 'One that I delete and re-download constantly', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your relationship with notifications:',
      options: [
        { text: 'Check thoughtfully, respond when I have time', type: 'A' },
        { text: 'Respond when I see them, casual about timing', type: 'B' },
        { text: 'Sometimes forget to check for days', type: 'C' },
        { text: 'Check obsessively, respond strategically', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'A date goes poorly. Your reaction:',
      options: [
        { text: 'Reflect on what I can learn, then move forward', type: 'A' },
        { text: 'Laugh about it with friends, back to swiping', type: 'B' },
        { text: 'Delete the app for a while', type: 'C' },
        { text: 'Question everything about dating', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your overall dating app energy is:',
      options: [
        { text: 'Hopeful but realistic - looking for something real', type: 'A' },
        { text: 'Casual - see what happens', type: 'B' },
        { text: 'Chaotic - sometimes serious, sometimes not', type: 'C' },
        { text: 'Exhausted - this is a lot', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Intentional Dater',
      emoji: '🎯',
      description: 'You treat dating apps like a search for something real. Thoughtful swipes, meaningful conversations, and genuine connection. You\'re looking for quality, not quantity, and your approach shows it.',
      traits: ['Intentional', 'Thoughtful', 'Genuine', 'Patient'],
      strengths: ['Attracts quality matches', 'Great at conversation', 'Knows what they want', 'Doesn\'t waste time'],
      weaknesses: ['May overthink things', 'Could be more spontaneous', 'Might miss casual fun'],
      tips: ['Sometimes go with gut feeling', 'Don\'t over-analyze every swipe', 'Your approach attracts the right people'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Swiper',
      emoji: '✨',
      description: 'You\'ve found the dating app sweet spot. Engaged but not obsessed, hopeful but not desperate. You give people a fair chance without overthinking every interaction. Healthy dating app energy.',
      traits: ['Balanced', 'Easy-going', 'Social', 'Open-minded'],
      strengths: ['Good at reading vibes', 'Doesn\'t take it too seriously', 'Enjoyable to match with', 'Moves conversations forward'],
      weaknesses: ['Might miss some red flags', 'Could be more selective', 'Sometimes too casual'],
      tips: ['Trust your instincts', 'Your vibe attracts your tribe', 'Keep having fun with it'],
    },
    C: {
      type: 'C',
      title: 'The Casual Chaotic',
      emoji: '🌀',
      description: 'Dating apps are a game you play when bored. Mass swipes, forgotten matches, sporadic engagement. You\'re on the apps but not really ON the apps, you know? Whatever happens, happens.',
      traits: ['Casual', 'Spontaneous', 'Non-committal', 'Go-with-the-flow'],
      strengths: ['Low pressure approach', 'Open to anything', 'Doesn\'t stress about it', 'Surprising connections'],
      weaknesses: ['Might miss good opportunities', 'Inconsistent engagement', 'Matches may lose interest'],
      tips: ['If you want results, try being consistent', 'Your energy attracts similar energy', 'It\'s okay to not be serious about it'],
    },
    D: {
      type: 'D',
      title: 'The Selective Skeptic',
      emoji: '🤔',
      description: 'You have high standards and dating app fatigue. You\'re on there but kind of over it. Left swipes are your specialty, and you\'re not settling. The apps are exhausting but you keep going... sort of.',
      traits: ['Selective', 'Skeptical', 'High standards', 'Burnt out'],
      strengths: ['Knows what they want', 'Won\'t settle', 'Quality over quantity', 'Self-aware'],
      weaknesses: ['May be too picky', 'App fatigue is real', 'Might miss good people'],
      tips: ['Take breaks when needed', 'High standards are valid', 'Maybe give someone unexpected a chance'],
    },
  },
};

export default testData;
