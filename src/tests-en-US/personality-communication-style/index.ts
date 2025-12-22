// Your Communication Style
// Discover how you connect with others!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-communication-style',
  title: 'What\'s Your Communication Style?',
  description: 'Find out how you naturally express yourself and connect with people around you.',
  category: 'personality',
  emoji: '💬',
  color: 'from-teal-500 to-cyan-600',
  duration: '3-5 min',
  questions: [
    {
      id: 1,
      question: 'When you need to share important news, you prefer to:',
      options: [
        { text: 'Call them immediately to discuss it', type: 'A' },
        { text: 'Send a detailed text or email', type: 'B' },
        { text: 'Meet in person to talk face-to-face', type: 'C' },
        { text: 'Wait for the right moment to bring it up naturally', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a group conversation, you typically:',
      options: [
        { text: 'Jump in and share your thoughts enthusiastically', type: 'A' },
        { text: 'Listen carefully and contribute thoughtful points', type: 'B' },
        { text: 'Read the room and adapt to the energy', type: 'C' },
        { text: 'Observe mostly and speak when you have something meaningful', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When someone shares a problem with you, you:',
      options: [
        { text: 'Immediately offer solutions and advice', type: 'A' },
        { text: 'Ask questions to understand the full situation', type: 'B' },
        { text: 'Show empathy and validate their feelings', type: 'C' },
        { text: 'Give them space to figure it out themselves', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your emails tend to be:',
      options: [
        { text: 'Short and to the point', type: 'A' },
        { text: 'Detailed with bullet points and structure', type: 'B' },
        { text: 'Warm and friendly with personal touches', type: 'C' },
        { text: 'Thoughtful but minimal - only essential info', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you disagree with someone, you:',
      options: [
        { text: 'State your opinion directly and confidently', type: 'A' },
        { text: 'Present facts and logic to support your view', type: 'B' },
        { text: 'Try to find common ground first', type: 'C' },
        { text: 'Keep it to yourself unless it\'s really important', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'At a networking event, you:',
      options: [
        { text: 'Work the room and meet as many people as possible', type: 'A' },
        { text: 'Have a few meaningful conversations', type: 'B' },
        { text: 'Stick with people you already know', type: 'C' },
        { text: 'Find a quiet corner and observe', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your ideal way to catch up with a friend is:',
      options: [
        { text: 'A quick phone call while multitasking', type: 'A' },
        { text: 'A scheduled coffee date', type: 'B' },
        { text: 'A long relaxed hangout', type: 'C' },
        { text: 'Texting when you both have time', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When giving feedback, you:',
      options: [
        { text: 'Give it straight - honesty is the best policy', type: 'A' },
        { text: 'Use the sandwich method - positive, constructive, positive', type: 'B' },
        { text: 'Focus on feelings and how to improve together', type: 'C' },
        { text: 'Only mention it if absolutely necessary', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'In a heated argument, you tend to:',
      options: [
        { text: 'Stand your ground and debate passionately', type: 'A' },
        { text: 'Stay calm and present rational arguments', type: 'B' },
        { text: 'Try to de-escalate and find peace', type: 'C' },
        { text: 'Withdraw and process your thoughts alone', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your text message style is:',
      options: [
        { text: 'Quick replies, lots of messages', type: 'A' },
        { text: 'Well-thought-out responses', type: 'B' },
        { text: 'Lots of emojis and GIFs', type: 'C' },
        { text: 'Brief and functional', type: 'D' },
      ],
    },
    {
      id: 11,
      question: 'When explaining something complex, you:',
      options: [
        { text: 'Use analogies and stories', type: 'A' },
        { text: 'Break it down step by step', type: 'B' },
        { text: 'Use visuals and demonstrations', type: 'C' },
        { text: 'Keep it simple and let them ask questions', type: 'D' },
      ],
    },
    {
      id: 12,
      question: 'People would describe your communication as:',
      options: [
        { text: 'Energetic and expressive', type: 'A' },
        { text: 'Clear and organized', type: 'B' },
        { text: 'Warm and supportive', type: 'C' },
        { text: 'Thoughtful and reserved', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Expressive Communicator',
      emoji: '🎤',
      description: 'You\'re energetic, enthusiastic, and love to engage! You communicate with passion and aren\'t afraid to speak your mind. Your expressiveness makes you memorable and engaging.',
      traits: ['Energetic', 'Direct', 'Engaging', 'Spontaneous'],
      strengths: ['Great at public speaking', 'Builds rapport quickly', 'Motivates others', 'Not afraid to voice opinions'],
      weaknesses: ['May interrupt others', 'Can come on too strong', 'Sometimes misses details'],
      tips: ['Practice active listening', 'Give others space to speak', 'Consider your audience\'s pace'],
    },
    B: {
      type: 'B',
      title: 'The Analytical Communicator',
      emoji: '📊',
      description: 'You\'re precise, logical, and thorough! You communicate with clarity and always back up your points with facts. People trust your well-organized thoughts.',
      traits: ['Logical', 'Thorough', 'Precise', 'Structured'],
      strengths: ['Crystal clear communication', 'Well-researched points', 'Excellent written skills', 'Reliable information'],
      weaknesses: ['May seem detached', 'Can over-explain', 'Sometimes misses emotional cues'],
      tips: ['Add more warmth to your delivery', 'Read emotional context', 'Sometimes less is more'],
    },
    C: {
      type: 'C',
      title: 'The Harmonious Communicator',
      emoji: '🤗',
      description: 'You\'re warm, empathetic, and relationship-focused! You communicate to connect and make others feel valued. Your emotional intelligence makes you a great listener.',
      traits: ['Empathetic', 'Diplomatic', 'Supportive', 'Intuitive'],
      strengths: ['Excellent listener', 'Builds deep connections', 'Resolves conflicts well', 'Makes others feel heard'],
      weaknesses: ['May avoid confrontation', 'Can be too accommodating', 'Sometimes indirect'],
      tips: ['Be more assertive when needed', 'Share your own needs clearly', 'It\'s okay to disagree'],
    },
    D: {
      type: 'D',
      title: 'The Reflective Communicator',
      emoji: '🤔',
      description: 'You\'re thoughtful, observant, and intentional! You communicate with purpose and prefer quality over quantity. Your depth makes your words meaningful.',
      traits: ['Thoughtful', 'Observant', 'Intentional', 'Independent'],
      strengths: ['Deep thinker', 'Meaningful contributions', 'Great at written communication', 'Respects boundaries'],
      weaknesses: ['May seem distant', 'Can miss opportunities to connect', 'Sometimes holds back too much'],
      tips: ['Push yourself to engage more', 'Share your thoughts even when unsure', 'Small talk has its place'],
    },
  },
};

export default testData;
