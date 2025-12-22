// Your Humor Type
// What makes you laugh?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-humor-type',
  title: 'What\'s Your Humor Style?',
  description: 'Discover your comedy personality - dry wit, physical comedy, or dark humor enthusiast?',
  category: 'personality',
  emoji: '😂',
  color: 'from-yellow-500 to-orange-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your go-to type of comedy is:',
      options: [
        { text: 'Witty, clever wordplay and sarcasm', type: 'A' },
        { text: 'Silly, physical comedy and absurd humor', type: 'B' },
        { text: 'Dark, edgy, nothing-is-off-limits comedy', type: 'C' },
        { text: 'Relatable, observational everyday humor', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a group, you\'re the one who:',
      options: [
        { text: 'Makes subtle comments that some people miss', type: 'A' },
        { text: 'Does impressions and physical bits', type: 'B' },
        { text: 'Says the thing everyone\'s thinking but won\'t say', type: 'C' },
        { text: 'Points out funny things in everyday situations', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your favorite comedians are known for:',
      options: [
        { text: 'Quick wit and intelligent humor', type: 'A' },
        { text: 'Being goofy and over-the-top', type: 'B' },
        { text: 'Pushing boundaries and being controversial', type: 'C' },
        { text: 'Telling stories about regular life', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you make a joke, it\'s usually:',
      options: [
        { text: 'Delivered deadpan - half the fun is the delivery', type: 'A' },
        { text: 'Accompanied by gestures and expressions', type: 'B' },
        { text: 'Slightly shocking or inappropriate', type: 'C' },
        { text: 'Based on something that just happened', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'You find yourself laughing hardest at:',
      options: [
        { text: 'Clever twists and unexpected punchlines', type: 'A' },
        { text: 'People falling, funny faces, physical gags', type: 'B' },
        { text: 'Jokes that make you say "I shouldn\'t laugh at this"', type: 'C' },
        { text: '"This is so true!" moments', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your sense of humor is best understood by:',
      options: [
        { text: 'People who catch subtle references', type: 'A' },
        { text: 'Everyone - it\'s pretty universal', type: 'B' },
        { text: 'People with thick skin', type: 'C' },
        { text: 'Anyone who\'s lived similar experiences', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When watching a comedy movie, you prefer:',
      options: [
        { text: 'Smart comedies with clever dialogue', type: 'A' },
        { text: 'Slapstick and goofy comedies', type: 'B' },
        { text: 'Dark comedies and satire', type: 'C' },
        { text: 'Rom-coms and feel-good comedies', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your texting/messaging humor:',
      options: [
        { text: 'Dry comments and subtle sarcasm', type: 'A' },
        { text: 'Lots of GIFs and silly memes', type: 'B' },
        { text: 'Dark memes and edgy jokes', type: 'C' },
        { text: 'Relatable memes and reaction images', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'If your humor had a warning label:',
      options: [
        { text: 'Requires brain cells to appreciate', type: 'A' },
        { text: 'May cause immature giggling', type: 'B' },
        { text: 'Not for the easily offended', type: 'C' },
        { text: 'Extremely relatable content ahead', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'People describe your sense of humor as:',
      options: [
        { text: 'Clever and sophisticated', type: 'A' },
        { text: 'Goofy and fun', type: 'B' },
        { text: 'Twisted and dark', type: 'C' },
        { text: 'Down-to-earth and real', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Dry Wit Master',
      emoji: '🎭',
      description: 'Your humor is clever, subtle, and sophisticated. You deliver punchlines with a straight face and your wit is razor-sharp. Not everyone gets your jokes, but those who do appreciate you.',
      traits: ['Clever', 'Subtle', 'Sophisticated', 'Quick'],
      strengths: ['Intelligent humor', 'Great timing', 'Memorable one-liners', 'Sophisticated comedy'],
      weaknesses: ['Some people don\'t get it', 'Can seem cold', 'May come off as sarcastic'],
      tips: ['Read the room', 'Some people need obvious jokes', 'Your wit is a gift'],
    },
    B: {
      type: 'B',
      title: 'The Physical Comedian',
      emoji: '🤪',
      description: 'You\'re all about the silly and absurd! Funny faces, physical gags, and goofy behavior are your specialty. You\'re not afraid to look ridiculous to get a laugh.',
      traits: ['Goofy', 'Expressive', 'Fun', 'Uninhibited'],
      strengths: ['Universal appeal', 'Gets everyone laughing', 'Great energy', 'Life of the party'],
      weaknesses: ['May seem immature', 'Not always appropriate', 'Can be too much'],
      tips: ['Time and place matter', 'Sometimes subtle works', 'Never lose your silliness'],
    },
    C: {
      type: 'C',
      title: 'The Dark Humor Devotee',
      emoji: '💀',
      description: 'Nothing is off-limits in your comedy book! You find humor in the uncomfortable, the taboo, and the things we\'re not supposed to laugh at. Your humor is a coping mechanism.',
      traits: ['Edgy', 'Fearless', 'Controversial', 'Honest'],
      strengths: ['Breaks tension', 'Authentically funny', 'Says what others won\'t', 'Copes through humor'],
      weaknesses: ['Can offend people', 'Not always appropriate', 'May push too far'],
      tips: ['Know your audience', 'Timing is everything', 'Some topics need sensitivity'],
    },
    D: {
      type: 'D',
      title: 'The Observational Comedian',
      emoji: '👀',
      description: 'You find humor in everyday life! Your comedy comes from pointing out the absurdity of normal situations. "Did you ever notice..." is basically your catchphrase.',
      traits: ['Relatable', 'Observant', 'Down-to-earth', 'Genuine'],
      strengths: ['Everyone relates', 'Easy-going humor', 'Natural delivery', 'Makes the mundane funny'],
      weaknesses: ['May seem basic', 'Not always memorable', 'Could be bolder'],
      tips: ['Your relatability is your strength', 'Everyday life IS funny', 'Keep observing'],
    },
  },
};

export default testData;
