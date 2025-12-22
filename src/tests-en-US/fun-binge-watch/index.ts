// Your Binge-Watching Personality
// How do you consume your favorite shows?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-binge-watch',
  title: 'Your Binge-Watching Personality',
  description: 'One episode at a time or entire seasons in one sitting? Discover your streaming style and what it says about you.',
  category: 'fun',
  emoji: '📺',
  color: 'from-indigo-600 to-violet-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'A new season of your favorite show drops. You:',
      options: [
        { text: 'Watch the whole thing in one sitting', type: 'A' },
        { text: 'Pace myself over a few days to stretch it out', type: 'B' },
        { text: 'One episode a week like the old days', type: 'C' },
        { text: 'Wait until everyone\'s done talking about it', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'It\'s 2 AM and there\'s one episode left:',
      options: [
        { text: 'Sleep is for the weak - finishing this', type: 'A' },
        { text: 'One more then sleep... probably', type: 'B' },
        { text: 'Save it for tomorrow to look forward to', type: 'C' },
        { text: 'I wouldn\'t be watching at 2 AM anyway', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your relationship with "Skip Intro":',
      options: [
        { text: 'Always skip - time is precious', type: 'A' },
        { text: 'First episode no, rest yes', type: 'B' },
        { text: 'Never skip - the intro is part of the experience', type: 'C' },
        { text: 'Depends on how good the intro is', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Spoilers:',
      options: [
        { text: 'I watch so fast no one can spoil me', type: 'A' },
        { text: 'I stay offline until I\'m caught up', type: 'B' },
        { text: 'I don\'t mind spoilers that much', type: 'C' },
        { text: 'I sometimes seek out spoilers intentionally', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How many shows are you actively watching?',
      options: [
        { text: 'One at a time - full focus', type: 'A' },
        { text: '2-3 in rotation', type: 'B' },
        { text: '5+ at various stages of completion', type: 'C' },
        { text: 'I lose track honestly', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'A cliffhanger episode ends. You:',
      options: [
        { text: 'Immediately start the next episode', type: 'A' },
        { text: 'Take a quick break then continue', type: 'B' },
        { text: 'Let it marinate, watch more later', type: 'C' },
        { text: 'Sometimes abandon shows at cliffhangers', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Rewatching shows:',
      options: [
        { text: 'Rarely - too much new content', type: 'A' },
        { text: 'Comfort shows get regular rewatches', type: 'B' },
        { text: 'I rewatch more than I watch new things', type: 'C' },
        { text: 'Background rewatches while doing other things', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your phone while watching:',
      options: [
        { text: 'Put away - full attention to the show', type: 'A' },
        { text: 'Nearby for quick checks during slow parts', type: 'B' },
        { text: 'Always scrolling - I can multitask', type: 'C' },
        { text: 'Looking up everything about the show as I watch', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Choosing what to watch:',
      options: [
        { text: 'Know exactly what\'s next in my queue', type: 'A' },
        { text: 'Takes me a bit but I decide', type: 'B' },
        { text: 'Sometimes I scroll for an hour and give up', type: 'C' },
        { text: 'I have mood-specific go-tos', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'After finishing a great show:',
      options: [
        { text: 'Immediately start the next one', type: 'A' },
        { text: 'Need a brief mourning period then move on', type: 'B' },
        { text: 'Fall into a post-show depression hole', type: 'C' },
        { text: 'Research everything about it, read theories', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Marathon Runner',
      emoji: '🏃',
      description: 'You don\'t watch shows, you devour them. A new season is a personal challenge to complete as fast as possible. Sleep, responsibilities, and social life can wait - you need to know how it ends.',
      traits: ['Intense', 'Committed', 'Impatient', 'All-or-nothing'],
      strengths: ['Never gets spoiled', 'Full immersion experience', 'Efficient content consumption', 'Peak focus'],
      weaknesses: ['Burns through content fast', 'Might miss details', 'Then has nothing to watch', 'Sleep deprivation'],
      tips: ['Maybe pace yourself?', 'The show will still be there tomorrow', 'Your body needs sleep'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Binger',
      emoji: '⚖️',
      description: 'You found the sweet spot between devouring content and savoring it. You binge, but responsibly. Multiple episodes a night but you also sleep. You\'re the well-adjusted viewer the rest of us aspire to be.',
      traits: ['Balanced', 'Moderate', 'Sustainable', 'Smart'],
      strengths: ['Enjoys shows without burning out', 'Gets sleep', 'Stretches out enjoyment', 'Has things to look forward to'],
      weaknesses: ['Might get spoiled occasionally', 'Takes longer to finish things'],
      tips: ['You\'ve figured it out', 'Keep doing what you\'re doing', 'Share your wisdom'],
    },
    C: {
      type: 'C',
      title: 'The Slow Sipper',
      emoji: '🍵',
      description: 'Why rush? You savor your shows like fine wine, letting each episode breathe before the next. You might have shows "in progress" for months and you\'re okay with that. Patience is a virtue.',
      traits: ['Patient', 'Savoring', 'Non-urgent', 'Relaxed'],
      strengths: ['Really absorbs content', 'Always has something to watch', 'No post-show depression', 'Enjoys the journey'],
      weaknesses: ['Spoilers are a constant threat', 'Might forget plot details', 'Friends finish shows without you'],
      tips: ['Your pace works for you', 'Just avoid the internet', 'Some shows are worth savoring'],
    },
    D: {
      type: 'D',
      title: 'The Chaotic Consumer',
      emoji: '🎲',
      description: 'Your watching habits are unpredictable. Abandon shows on cliffhangers, start new ones on a whim, rewatch random episodes, scroll for an hour then watch nothing. Your streaming history is a mystery even to you.',
      traits: ['Unpredictable', 'Mood-dependent', 'Chaotic', 'Flexible'],
      strengths: ['No pressure to finish anything', 'Follows genuine interest', 'Freedom from completion anxiety', 'Adaptable'],
      weaknesses: ['Many unfinished shows', 'Can\'t participate in discussions', 'Overwhelmed by choice'],
      tips: ['Embrace your chaos', 'Maybe finish ONE thing?', 'There\'s no wrong way to watch'],
    },
  },
};

export default testData;
