// Your Netflix Watching Style
// How do you consume content?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-netflix-style',
  title: 'What\'s Your Netflix Watching Style?',
  description: 'Discover your streaming personality - binge-watcher, casual viewer, or paralyzed by too many choices?',
  category: 'personality',
  emoji: '📺',
  color: 'from-red-600 to-red-800',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'A new season of your favorite show drops. You:',
      options: [
        { text: 'Watch it all in one day - no spoilers!', type: 'A' },
        { text: 'Savor it - one or two episodes per day', type: 'B' },
        { text: 'Start it, then forget about it for weeks', type: 'C' },
        { text: 'Wait until it\'s all been reviewed, then decide', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How long does it take you to choose something to watch?',
      options: [
        { text: 'Quick - I know what I\'m in the mood for', type: 'A' },
        { text: 'A few minutes - I browse with purpose', type: 'B' },
        { text: '15+ minutes of scrolling, then watching something random', type: 'C' },
        { text: 'So long that sometimes I give up and do something else', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your watchlist situation:',
      options: [
        { text: 'Always working through it systematically', type: 'A' },
        { text: 'A curated list of things I\'ll eventually watch', type: 'B' },
        { text: 'An overwhelming graveyard of good intentions', type: 'C' },
        { text: 'I don\'t use the watchlist feature', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When watching with others, you:',
      options: [
        { text: 'Take charge and pick something efficient', type: 'A' },
        { text: 'Suggest a few options and let the group decide', type: 'B' },
        { text: 'Go with whatever everyone else wants', type: 'C' },
        { text: 'The group decision-making takes forever', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your thoughts on rewatching shows:',
      options: [
        { text: 'Why rewatch when there\'s so much new content?', type: 'A' },
        { text: 'I rewatch favorites occasionally', type: 'B' },
        { text: 'I rewatch comfort shows constantly', type: 'C' },
        { text: 'Rewatching helps me avoid choosing something new', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How many shows are you currently watching?',
      options: [
        { text: '1-2 at a time - I like to focus', type: 'A' },
        { text: '3-4 shows in rotation', type: 'B' },
        { text: 'Too many to count - I start more than I finish', type: 'C' },
        { text: 'Honestly not sure what I\'m watching anymore', type: 'D' },
      ],
    },
    {
      id: 7,
      question: '"Are you still watching?" appears. You:',
      options: [
        { text: 'Yes, obviously! Stop judging me, Netflix', type: 'A' },
        { text: 'Fair point - maybe time for a break', type: 'B' },
        { text: 'Click continue and zone back out', type: 'C' },
        { text: 'I fell asleep three episodes ago', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your relationship with movie recommendations:',
      options: [
        { text: 'I trust my own taste over algorithms', type: 'A' },
        { text: 'I appreciate them as a starting point', type: 'B' },
        { text: 'I scroll through them without committing', type: 'C' },
        { text: 'They add to my decision paralysis', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you can\'t decide what to watch:',
      options: [
        { text: 'I pick anything just to stop scrolling', type: 'A' },
        { text: 'I ask someone for a recommendation', type: 'B' },
        { text: 'I put on something I\'ve seen before', type: 'C' },
        { text: 'I end up on my phone instead of watching anything', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'A show ends on a cliffhanger. You:',
      options: [
        { text: 'Immediately watch the next episode - I need answers', type: 'A' },
        { text: 'Resist the urge and save it for tomorrow', type: 'B' },
        { text: 'Fall asleep thinking about it', type: 'C' },
        { text: 'Take weeks before starting the next season', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Dedicated Binger',
      emoji: '🍿',
      description: 'When you watch, you WATCH. You\'re committed, decisive, and probably have strong opinions about TV. Spoilers are your enemy, so you power through content with impressive speed and focus.',
      traits: ['Focused', 'Committed', 'Decisive', 'Passionate'],
      strengths: ['Finishes what you start', 'No spoiler risk', 'Deep engagement', 'Strong opinions'],
      weaknesses: ['May rush through content', 'Sleep schedule suffers', 'Can feel empty after finishing'],
      tips: ['Try savoring shows more slowly', 'Breaks are healthy', 'Not everything needs to be finished in one sitting'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Viewer',
      emoji: '⚖️',
      description: 'You\'ve found a healthy relationship with streaming. You enjoy content without letting it consume you. You\'re thoughtful about what you watch and maintain other interests too.',
      traits: ['Balanced', 'Intentional', 'Diverse interests', 'Self-aware'],
      strengths: ['Healthy watching habits', 'Enjoys content fully', 'Good recommendations', 'No guilt'],
      weaknesses: ['May miss out on water cooler talk', 'Falls behind on trends', 'Takes longer to finish shows'],
      tips: ['Your balance is admirable', 'Keep doing what works', 'Don\'t let FOMO push you to binge'],
    },
    C: {
      type: 'C',
      title: 'The Comfort Rewatcher',
      emoji: '🛋️',
      description: 'You use streaming for comfort and background noise. You have your favorite shows that you\'ve seen a hundred times, and sometimes you zone out more than you focus. And that\'s perfectly fine!',
      traits: ['Nostalgic', 'Comfort-seeking', 'Relaxed', 'Low-pressure'],
      strengths: ['Knows what you like', 'No pressure to watch new things', 'Uses TV for relaxation', 'Content with familiar shows'],
      weaknesses: ['Misses new content', 'May use TV as avoidance', 'Starts more than finishes'],
      tips: ['Try one new show a month', 'It\'s okay to watch favorites', 'Be present when watching'],
    },
    D: {
      type: 'D',
      title: 'The Paradox of Choice',
      emoji: '🤯',
      description: 'Too many options, not enough decisions! You spend more time choosing than watching. The endless scroll is your nemesis. Sometimes you give up and do something else entirely.',
      traits: ['Indecisive', 'Overwhelmed', 'Thoughtful', 'Selective'],
      strengths: ['High standards', 'Doesn\'t waste time on bad content', 'Other hobbies', 'Critical eye'],
      weaknesses: ['Decision paralysis', 'Misses out on good content', 'Frustrating viewing experience'],
      tips: ['Set a 5-minute timer to decide', 'Ask friends for one specific recommendation', 'Just pick something - you can change it'],
    },
  },
};

export default testData;
