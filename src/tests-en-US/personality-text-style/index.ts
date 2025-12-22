// How You Text
// Your texting style says a lot about you

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-text-style',
  title: 'What\'s Your Texting Style?',
  description: 'One word replies? Novel-length messages? Emoji overload? Discover what your texts reveal about your personality.',
  category: 'personality',
  emoji: '📱',
  color: 'from-green-500 to-emerald-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Someone texts "hey." Your response time is:',
      options: [
        { text: 'Within seconds if I see it', type: 'A' },
        { text: 'When I have time to actually engage', type: 'B' },
        { text: 'Could be hours, could be days - mood dependent', type: 'C' },
        { text: 'I\'ll respond when I have the mental bandwidth', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your typical text message length is:',
      options: [
        { text: 'One word: "k" "lol" "nice"', type: 'A' },
        { text: 'Clear and concise - a sentence or two', type: 'B' },
        { text: 'Paragraphs. With proper punctuation.', type: 'C' },
        { text: 'Voice memos because typing is exhausting', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your emoji usage is best described as:',
      options: [
        { text: 'Minimal - words are enough', type: 'A' },
        { text: 'Strategic - one or two to set the tone', type: 'B' },
        { text: 'Abundant - every sentence needs at least one', type: 'C' },
        { text: 'Chaotic - I use emojis ironically and unironically', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone sends you a long text about their day. You:',
      options: [
        { text: '"Nice!" or "That\'s crazy"', type: 'A' },
        { text: 'Respond to the main points thoughtfully', type: 'B' },
        { text: 'Match their energy with a long response back', type: 'C' },
        { text: 'React with emojis then follow up with questions', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with read receipts:',
      options: [
        { text: 'Off - none of anyone\'s business', type: 'A' },
        { text: 'On - I respect transparency', type: 'B' },
        { text: 'On but I forget they\'re on and panic', type: 'C' },
        { text: 'It\'s complicated - depends on who', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you feel about texting "haha" vs "lol"?',
      options: [
        { text: 'I use neither - dry texting is my brand', type: 'A' },
        { text: '"Haha" - "lol" feels too casual', type: 'B' },
        { text: '"Lol" plus emojis - maximum casual energy', type: 'C' },
        { text: 'LMAOOO with extra letters when it\'s actually funny', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'You\'re making plans over text. Your style:',
      options: [
        { text: '"Sure" "Ok" "Down"', type: 'A' },
        { text: 'Clear confirmation with time and place', type: 'B' },
        { text: 'Enthusiastic! With backup plans and excitement', type: 'C' },
        { text: 'Chaotic negotiation with 47 messages', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Typing indicator dots appear... they disappear... appear again. You:',
      options: [
        { text: 'Don\'t notice or care', type: 'A' },
        { text: 'Wait patiently - they\'re crafting a response', type: 'B' },
        { text: 'Anxious! What are they typing?!', type: 'C' },
        { text: 'Send another message to break the tension', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your text to respond to "wyd" is:',
      options: [
        { text: '"nm u"', type: 'A' },
        { text: '"Just finished work, about to make dinner"', type: 'B' },
        { text: 'Full recap of my day plus current activity plus plans', type: 'C' },
        { text: 'A selfie or photo of what I\'m doing', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Someone leaves you on read. Your reaction:',
      options: [
        { text: 'Unbothered - I do it too', type: 'A' },
        { text: 'Assume they\'re busy and move on', type: 'B' },
        { text: 'Spiral slightly but try not to double text', type: 'C' },
        { text: 'Double text anyway - I have things to say', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Minimalist Messenger',
      emoji: '🗿',
      description: 'Why use many words when few words do trick? Your texts are efficient, your response time is... variable, and your emoji usage is practically nonexistent. You\'re not cold, you\'re just not going to write a novel over text.',
      traits: ['Efficient', 'Unbothered', 'Direct', 'Low-maintenance'],
      strengths: ['No overthinking texts', 'Never overwhelms anyone', 'Gets to the point', 'Mysterious energy'],
      weaknesses: ['May seem disinterested', '"K" can feel cold', 'People might want more'],
      tips: ['An extra word won\'t hurt', 'Try an emoji occasionally', 'Some people need more warmth'],
    },
    B: {
      type: 'B',
      title: 'The Thoughtful Texter',
      emoji: '✍️',
      description: 'You treat texts with respect. Proper grammar, complete thoughts, and appropriate response times. You\'re the friend everyone can count on for clear communication and never leaves people guessing.',
      traits: ['Reliable', 'Clear communicator', 'Respectful', 'Consistent'],
      strengths: ['Great at making plans', 'Never miscommunicates', 'Trustworthy texter', 'Responsive when available'],
      weaknesses: ['May seem formal sometimes', 'Can take texting too seriously', 'Proofreads too much'],
      tips: ['Let loose occasionally', 'Not every text needs editing', 'Chaos can be fun'],
    },
    C: {
      type: 'C',
      title: 'The Enthusiastic Essayist',
      emoji: '📝',
      description: 'Your texts are events. Paragraphs, punctuation, emotional investment - you bring your whole self to every conversation. You\'re the friend who texts like it\'s a letter from the 1800s, and honestly? It\'s endearing.',
      traits: ['Expressive', 'Engaged', 'Thorough', 'Emotionally invested'],
      strengths: ['No one doubts your interest', 'Great at deep conversations', 'Friends feel heard', 'Maximum expression'],
      weaknesses: ['People might not read it all', 'Can be overwhelming', 'Takes a while to respond'],
      tips: ['Sometimes short is sweet', 'Not everyone matches this energy', 'Your enthusiasm is a gift'],
    },
    D: {
      type: 'D',
      title: 'The Chaotic Communicator',
      emoji: '🎪',
      description: 'Your texting style is unpredictable and that\'s the fun. Voice memos, random photos, double texts, emoji strings that tell a story - you text like you live: spontaneously and with maximum personality.',
      traits: ['Spontaneous', 'Expressive', 'Unpredictable', 'Creative'],
      strengths: ['Never boring', 'Friends love your energy', 'Communication is an adventure', 'Authentic expression'],
      weaknesses: ['Can be a lot sometimes', 'Important info might get buried', 'Not everyone can keep up'],
      tips: ['Maybe organize group texts', 'One topic at a time helps', 'Your chaos is charming'],
    },
  },
};

export default testData;
