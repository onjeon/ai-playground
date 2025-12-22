// Your Netflix Binging Style
// How you consume content

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-netflix-binger',
  title: 'What\'s Your Netflix Binging Style?',
  description: 'One more episode? Find out what your streaming habits reveal about your personality!',
  category: 'personality',
  emoji: '📺',
  color: 'from-red-600 to-red-800',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'A new series drops. Your approach:',
      options: [
        { text: 'Watch it all in one weekend - no spoilers risk', type: 'A' },
        { text: 'Pace myself - one or two episodes per day', type: 'B' },
        { text: 'Wait for reviews before deciding to invest time', type: 'C' },
        { text: 'Add to my list, might watch in 6 months', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your "Continue Watching" row looks like:',
      options: [
        { text: 'Usually empty - I finish what I start', type: 'A' },
        { text: 'A few shows I\'m actively rotating through', type: 'B' },
        { text: 'Several things I abandoned halfway', type: 'C' },
        { text: 'A graveyard of abandoned content', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'It\'s 11 PM and the next episode starts. You:',
      options: [
        { text: '"Just one more" (then it\'s 3 AM)', type: 'A' },
        { text: 'One more but setting a hard stop after', type: 'B' },
        { text: 'Turn it off - sleep is important', type: 'C' },
        { text: 'Fall asleep mid-episode', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you choose what to watch?',
      options: [
        { text: 'Browse until something catches my eye immediately', type: 'A' },
        { text: 'Read descriptions and check ratings', type: 'B' },
        { text: 'Friend recommendations and social media buzz', type: 'C' },
        { text: 'Spend 30 minutes browsing then rewatch something old', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Rewatching shows is:',
      options: [
        { text: 'Rare - too much new content to watch', type: 'A' },
        { text: 'Occasional - favorites deserve a revisit', type: 'B' },
        { text: 'Common - comfort shows are my thing', type: 'C' },
        { text: 'My main activity - same 3 shows on rotation', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Spoilers are:',
      options: [
        { text: 'Worth avoiding at all costs - I binge fast to prevent them', type: 'A' },
        { text: 'Annoying but not the end of the world', type: 'B' },
        { text: 'Sometimes I look them up myself', type: 'C' },
        { text: 'Doesn\'t bother me - I watch for vibes, not plot', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your multi-screening habits:',
      options: [
        { text: 'Full attention on the screen - I\'m invested', type: 'A' },
        { text: 'Usually focused, occasional phone check', type: 'B' },
        { text: 'Phone in hand - half watching', type: 'C' },
        { text: 'Background noise while I do other things', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'A show gets canceled on a cliffhanger. You:',
      options: [
        { text: 'Devastated - should have known better', type: 'A' },
        { text: 'Disappointed but move on', type: 'B' },
        { text: 'Sign the petition, then forget about it', type: 'C' },
        { text: 'Don\'t notice because I didn\'t finish anyway', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How many streaming services do you subscribe to?',
      options: [
        { text: '4+ - I need access to everything', type: 'A' },
        { text: '2-3 - covers most bases', type: 'B' },
        { text: '1 main one, borrowed passwords for the rest', type: 'C' },
        { text: 'Whatever I can mooch from family', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your "My List" currently has:',
      options: [
        { text: 'Shows I\'m actively planning to watch next', type: 'A' },
        { text: 'A curated selection of things that interest me', type: 'B' },
        { text: 'So many things I\'ll never get to', type: 'C' },
        { text: 'I forgot My List exists', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Power Binger',
      emoji: '⚡',
      description: 'Sleep is optional, new releases are not. You don\'t just watch a series - you consume it. Weekend plans? Finishing that season in one sitting. Your streaming service definitely sends you those "Are you still watching?" messages.',
      traits: ['Dedicated', 'Immersive', 'Invested', 'Sleep-deprived'],
      strengths: ['Never gets spoiled', 'Deep investment in stories', 'Always up-to-date on shows', 'Finishes what they start'],
      weaknesses: ['Sleep schedule is a myth', 'Post-binge depression is real', 'Might need more hobbies'],
      tips: ['Sleep is actually important', 'Pacing can increase enjoyment', 'Touch grass occasionally'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Viewer',
      emoji: '⚖️',
      description: 'You enjoy TV like a responsible adult. One or two episodes, then other life things. You finish shows, just at a human pace. Your approach to streaming is as balanced as your approach to life.',
      traits: ['Disciplined', 'Balanced', 'Selective', 'Self-controlled'],
      strengths: ['Healthy relationship with TV', 'Draws out enjoyment', 'Good sleep schedule', 'Finishes shows thoughtfully'],
      weaknesses: ['May get spoiled occasionally', 'Sometimes misses the hype', 'Could live a little'],
      tips: ['Your balance is admirable', 'Sometimes a binge is self-care', 'You\'re doing this right'],
    },
    C: {
      type: 'C',
      title: 'The Casual Streamer',
      emoji: '😌',
      description: 'You watch shows, but you\'re not that committed. Half-watching while on your phone, abandoning shows midway, checking spoilers - TV is entertainment, not a relationship. And that\'s valid.',
      traits: ['Casual', 'Low-commitment', 'Multi-tasking', 'Unbothered'],
      strengths: ['No TV-induced stress', 'Not emotionally attached', 'Free time for other things', 'Low stakes viewing'],
      weaknesses: ['Miss out on good content', 'Never finish shows', 'May not understand references'],
      tips: ['Try focusing on one show', 'Some shows deserve full attention', 'Your approach is also valid'],
    },
    D: {
      type: 'D',
      title: 'The Comfort Rewatcher',
      emoji: '🛋️',
      description: 'New content is exhausting. You know what you like, and you like to watch it again. And again. Your favorite shows are basically white noise at this point, but the familiarity is the point. Comfort over novelty.',
      traits: ['Nostalgic', 'Comfort-seeking', 'Low-maintenance', 'Routine-oriented'],
      strengths: ['Never stressed about what to watch', 'Finds joy in familiarity', 'Knows every line', 'Cozy viewing experience'],
      weaknesses: ['Missing great new content', 'Friends can\'t discuss new shows with you', 'May quote shows too much'],
      tips: ['Try one new show a month', 'New favorites exist out there', 'Your comfort shows aren\'t going anywhere'],
    },
  },
};

export default testData;
