// How Do You Give Compliments?
// What's your compliment style?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-compliment-giver',
  title: 'How Do You Give Compliments?',
  description: 'Are you a compliment machine or do you struggle to say nice things? Let\'s find out!',
  category: 'communication',
  emoji: '💕',
  color: 'from-pink-500 to-rose-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When you notice something nice about someone, you:',
      options: [
        { text: 'Tell them immediately, can\'t help it', type: 'A' },
        { text: 'Think it but might not say it', type: 'B' },
        { text: 'Keep it to myself, feels awkward to say', type: 'C' },
        { text: 'Turn it into a joke or sarcasm', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your compliments are usually:',
      options: [
        { text: 'Enthusiastic, detailed, heartfelt', type: 'A' },
        { text: 'Genuine but brief', type: 'B' },
        { text: 'Rare, I don\'t really compliment much', type: 'C' },
        { text: 'Disguised as teasing or jokes', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'A friend shows you their creative work. You:',
      options: [
        { text: 'Gush about everything you love', type: 'A' },
        { text: 'Point out the specific things that are good', type: 'B' },
        { text: 'Say "nice" and nod', type: 'C' },
        { text: '"Not bad, I guess" with a smirk', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Complimenting strangers:',
      options: [
        { text: 'All the time! Love your shoes!', type: 'A' },
        { text: 'Sometimes if something really stands out', type: 'B' },
        { text: 'Never, that\'s weird', type: 'C' },
        { text: 'Only if I can make it funny', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you receive a compliment:',
      options: [
        { text: 'Thank them and compliment them back!', type: 'A' },
        { text: 'Appreciate it, say thank you', type: 'B' },
        { text: 'Awkward, deflect, minimize', type: 'C' },
        { text: 'Make a self-deprecating joke', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your compliments focus on:',
      options: [
        { text: 'Everything - appearance, personality, work, all of it', type: 'A' },
        { text: 'Specific achievements or qualities', type: 'B' },
        { text: 'I don\'t really know, I barely compliment', type: 'C' },
        { text: 'Things I can joke about while being nice', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your partner/friend does something nice. You:',
      options: [
        { text: '"You\'re literally the best human alive!"', type: 'A' },
        { text: '"Thank you, I really appreciate that"', type: 'B' },
        { text: 'Acknowledge it minimally or not at all', type: 'C' },
        { text: '"Okay who are you and what did you do with my friend?"', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Saying "I love you" or "you\'re amazing":',
      options: [
        { text: 'Easy, say it all the time', type: 'A' },
        { text: 'When I mean it, to the right people', type: 'B' },
        { text: 'Hard to say, even when I feel it', type: 'C' },
        { text: 'Cover it with humor: "I tolerate you the most"', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Do you hype up your friends publicly (social media, in groups)?',
      options: [
        { text: 'YES! Everyone should know how amazing they are', type: 'A' },
        { text: 'Sometimes, when it\'s appropriate', type: 'B' },
        { text: 'Not really, feels performative', type: 'C' },
        { text: 'Only ironically or jokingly', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your overall compliment frequency:',
      options: [
        { text: 'Multiple times a day to multiple people', type: 'A' },
        { text: 'Regularly, when deserved', type: 'B' },
        { text: 'Rarely, it feels uncomfortable', type: 'C' },
        { text: 'Often, but disguised as roasts', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Hype Machine',
      emoji: '🎉',
      description: 'You LOVE to compliment! Everyone is amazing, beautiful, talented, and you\'ll tell them constantly. Your enthusiasm is contagious and you make everyone feel good. You\'re basically a walking affirmation.',
      traits: ['Enthusiastic', 'Generous', 'Expressive', 'Hype person'],
      strengths: ['Makes everyone feel amazing', 'Creates positive energy', 'Naturally uplifting'],
      weaknesses: ['Might seem insincere to some', 'Compliments may lose impact'],
      tips: ['Your energy is a gift', 'Specificity makes compliments stronger', 'Never stop hyping'],
    },
    B: {
      type: 'B',
      title: 'The Thoughtful Complimenter',
      emoji: '✨',
      description: 'You give compliments when you mean them, and they\'re genuine and specific. Not over the top, not stingy - just right. Your compliments land because people know you mean them.',
      traits: ['Genuine', 'Thoughtful', 'Specific', 'Meaningful'],
      strengths: ['Compliments are meaningful', 'People trust your praise', 'Balanced approach'],
      weaknesses: ['Could compliment more freely sometimes'],
      tips: ['You\'ve got this figured out', 'Keep being genuine', 'Your words carry weight'],
    },
    C: {
      type: 'C',
      title: 'The Compliment Miser',
      emoji: '🤐',
      description: 'Compliments? In this economy? You think nice things but rarely say them. It feels awkward, vulnerable, or unnecessary. The people in your life might be starving for your words of affirmation.',
      traits: ['Reserved', 'Uncomfortable', 'Minimal', 'Withholding'],
      strengths: ['When you compliment, it\'s meaningful'],
      weaknesses: ['People don\'t know you appreciate them', 'Comes off cold', 'Missing connection opportunities'],
      tips: ['Start small - one genuine compliment a day', 'People need to hear nice things', 'It gets easier with practice'],
    },
    D: {
      type: 'D',
      title: 'The Roast Master',
      emoji: '😏',
      description: 'You show love through teasing! Compliments come out as jokes, roasts, or sarcasm. "I hate you" means "I love you." Your friends get it... but sometimes a straight-up compliment would hit different.',
      traits: ['Sarcastic', 'Teasing', 'Indirect', 'Funny'],
      strengths: ['Humor creates connection', 'Never too serious', 'Friends know the code'],
      weaknesses: ['Some people need direct affirmation', 'Sincerity is hard', 'May seem mean to outsiders'],
      tips: ['Occasionally drop the joke and be real', 'Vulnerability isn\'t weakness', 'Some people need the actual words'],
    },
  },
};

export default testData;
