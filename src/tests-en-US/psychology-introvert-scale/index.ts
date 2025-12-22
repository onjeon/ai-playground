// Where Are You on the Introvert Scale?
// Discover your social energy style

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-introvert-scale',
  title: 'Where Are You on the Introvert Scale?',
  description: 'Find out where you fall on the introvert-extrovert spectrum. Spoiler: most people aren\'t purely one or the other!',
  category: 'psychology',
  emoji: '🔋',
  color: 'from-indigo-400 to-purple-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'After a long day of socializing, you feel:',
      options: [
        { text: 'Energized and wanting more!', type: 'A' },
        { text: 'Good but ready for some downtime', type: 'B' },
        { text: 'Drained and need to recharge alone', type: 'C' },
        { text: 'Completely exhausted, need days to recover', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal Friday night:',
      options: [
        { text: 'Out with friends, the more the merrier!', type: 'A' },
        { text: 'Small group hangs or one-on-one time', type: 'B' },
        { text: 'Home with a book, show, or hobby', type: 'C' },
        { text: 'Alone in silence, absolute bliss', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'At a party, you usually:',
      options: [
        { text: 'Work the room and meet everyone', type: 'A' },
        { text: 'Have meaningful convos with a few people', type: 'B' },
        { text: 'Find one person or group and stick with them', type: 'C' },
        { text: 'Count down the minutes until I can leave', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you have free time, you prefer:',
      options: [
        { text: 'Making plans with people', type: 'A' },
        { text: 'A mix of social and solo activities', type: 'B' },
        { text: 'Solo activities mostly', type: 'C' },
        { text: 'Being completely alone, always', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your energy comes from:',
      options: [
        { text: 'Being around other people', type: 'A' },
        { text: 'Both socializing and alone time', type: 'B' },
        { text: 'Mostly from time alone', type: 'C' },
        { text: 'Exclusively from solitude', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you feel about small talk?',
      options: [
        { text: 'Love it! It\'s how connections start', type: 'A' },
        { text: 'It\'s fine, prefer deeper conversations though', type: 'B' },
        { text: 'Find it draining and a bit pointless', type: 'C' },
        { text: 'Would rather sit in silence', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When your phone rings unexpectedly:',
      options: [
        { text: 'I answer excitedly', type: 'A' },
        { text: 'Depends who it is', type: 'B' },
        { text: 'I let it go to voicemail usually', type: 'C' },
        { text: 'Who calls anymore? Panic.', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your friend group style:',
      options: [
        { text: 'I have tons of friends and love it', type: 'A' },
        { text: 'A solid circle plus casual friends', type: 'B' },
        { text: 'A few very close friends', type: 'C' },
        { text: 'One or two people max (plus maybe a pet)', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Working from home vs. office:',
      options: [
        { text: 'Office! I need the people energy', type: 'A' },
        { text: 'Hybrid - best of both worlds', type: 'B' },
        { text: 'Home - way more productive', type: 'C' },
        { text: 'Home forever, never make me go back', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'When you need to process something:',
      options: [
        { text: 'I talk it through with others', type: 'A' },
        { text: 'A mix of talking and thinking alone', type: 'B' },
        { text: 'I need to think alone first', type: 'C' },
        { text: 'I process everything internally', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Full Extrovert',
      emoji: '🎉',
      description: 'You\'re a people person through and through! Social energy is your fuel - you love meeting new people, being in groups, and rarely feel drained by socializing. You probably think out loud and love a full calendar.',
      traits: ['Social butterfly', 'Energized by people', 'Outgoing', 'External processor'],
      strengths: ['Natural networker', 'Makes friends easily', 'Brings energy to groups', 'Handles social situations well'],
      weaknesses: ['May not understand introverts', 'Could overwhelm quieter people', 'Might avoid necessary alone time'],
      tips: ['Alone time has value too', 'Listen more sometimes', 'Not everyone wants to talk as much as you'],
    },
    B: {
      type: 'B',
      title: 'Ambivert',
      emoji: '⚖️',
      description: 'You\'re balanced! You enjoy socializing but also need your alone time. You can work the room OR enjoy a quiet night in. You\'re adaptable and understand both introverts and extroverts.',
      traits: ['Balanced', 'Adaptable', 'Flexible energy', 'Best of both worlds'],
      strengths: ['Can connect with anyone', 'Understands different energy needs', 'Adaptable socially', 'Self-aware about needs'],
      weaknesses: ['Can be pulled both ways', 'May not know what you need sometimes', 'Could overextend in either direction'],
      tips: ['Honor what you need in the moment', 'You\'re versatile - use it', 'Don\'t force yourself into one box'],
    },
    C: {
      type: 'C',
      title: 'Classic Introvert',
      emoji: '📚',
      description: 'You\'re an introvert who can socialize! You enjoy people in doses but need plenty of alone time to recharge. Deep conversations over small talk, quality over quantity in friendships. Your inner world is rich.',
      traits: ['Reflective', 'Deep thinker', 'Needs alone time', 'Quality over quantity'],
      strengths: ['Great listener', 'Deep relationships', 'Self-sufficient', 'Thoughtful'],
      weaknesses: ['May avoid socializing too much', 'Can seem distant', 'Might miss out on opportunities'],
      tips: ['Push yourself socially sometimes', 'Your needs are valid', 'Find your people - they\'re worth the energy'],
    },
    D: {
      type: 'D',
      title: 'Super Introvert',
      emoji: '🏠',
      description: 'You\'re an introvert to the core! Socializing seriously drains you, and you\'d rather be alone almost always. You probably have a very small circle (if any) and are perfectly happy that way. Solitude is your happy place.',
      traits: ['Highly independent', 'Very low social battery', 'Prefers solitude', 'Rich inner life'],
      strengths: ['Self-sufficient', 'Deep self-knowledge', 'Content alone', 'Focused'],
      weaknesses: ['May isolate too much', 'Could miss connection', 'Social situations feel extra hard'],
      tips: ['Some connection is healthy', 'Find low-energy ways to connect', 'Online friendships count', 'Be gentle with yourself'],
    },
  },
};

export default testData;
