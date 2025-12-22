// How Spicy Are Your Hot Takes?
// Find out if your opinions are mild or causing chaos

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-hot-take',
  title: 'How Spicy Are Your Hot Takes?',
  description: 'Are your opinions controversial or do you just agree with the crowd? Let\'s measure the heat level of your takes.',
  category: 'fun',
  emoji: '🌶️',
  color: 'from-red-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Pineapple on pizza:',
      options: [
        { text: 'Should be illegal - absolute crime', type: 'A' },
        { text: 'Not for me but I get it', type: 'B' },
        { text: 'Actually really good, fight me', type: 'C' },
        { text: 'I have an even more controversial topping preference', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Friends vs The Office:',
      options: [
        { text: 'Friends is superior, no debate', type: 'A' },
        { text: 'The Office obviously', type: 'B' },
        { text: 'Both are overrated actually', type: 'C' },
        { text: 'Neither - there are better shows we ignore', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your take on breakfast for dinner:',
      options: [
        { text: 'Breakfast foods are for breakfast only', type: 'A' },
        { text: 'Occasionally acceptable', type: 'B' },
        { text: 'Breakfast for dinner is elite', type: 'C' },
        { text: 'All meal rules are fake - eat what you want when', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Summer vs Winter:',
      options: [
        { text: 'Summer - warmth, sun, beach energy', type: 'A' },
        { text: 'Winter - cozy vibes, holidays, sweaters', type: 'B' },
        { text: 'Fall is actually the best, both are wrong', type: 'C' },
        { text: 'Seasonal ranking is: [my unique controversial order]', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Coffee snobbery:',
      options: [
        { text: 'Starbucks is fine, coffee elitism is annoying', type: 'A' },
        { text: 'Good coffee matters but I\'m not extreme', type: 'B' },
        { text: 'Instant coffee is actually valid', type: 'C' },
        { text: 'I have opinions about water temperature and bean origin', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Social media "authentic" content:',
      options: [
        { text: 'Love it - raw and real is better', type: 'A' },
        { text: 'Balance is key', type: 'B' },
        { text: '"Authentic" posts are just a new kind of performance', type: 'C' },
        { text: 'All social media is fake including the "real" stuff', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Reclining your airplane seat:',
      options: [
        { text: 'Your right - the seat reclines for a reason', type: 'A' },
        { text: 'Only on long flights and check first', type: 'B' },
        { text: 'Never - it\'s rude to the person behind', type: 'C' },
        { text: 'Airlines are the real villain here', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'The Oxford comma:',
      options: [
        { text: 'Essential, always use it', type: 'A' },
        { text: 'Don\'t care either way', type: 'B' },
        { text: 'Unnecessary, wastes space', type: 'C' },
        { text: 'I have strong grammar opinions nobody asked for', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone says "that\'s a hot take":',
      options: [
        { text: 'I usually agree with the popular opinion', type: 'A' },
        { text: 'Sometimes I have spicy opinions', type: 'B' },
        { text: 'I live for controversial discussions', type: 'C' },
        { text: 'My takes are so hot they\'re usually misunderstood', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Avocado toast and millennial spending:',
      options: [
        { text: 'That criticism is ridiculous', type: 'A' },
        { text: 'I mean, budgeting matters too', type: 'B' },
        { text: 'Both sides have valid points', type: 'C' },
        { text: 'I have a completely different economic hot take', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Mild Salsa',
      emoji: '🫑',
      description: 'Your takes are generally agreeable and non-controversial. You tend to align with popular opinions and keep the peace. Nothing wrong with that - you\'re easy to get along with and rarely start fights at dinner.',
      traits: ['Agreeable', 'Peace-keeping', 'Mainstream', 'Non-confrontational'],
      strengths: ['Gets along with everyone', 'Avoids unnecessary conflict', 'Reliable opinions', 'Socially smooth'],
      weaknesses: ['Might not express true opinions', 'Could be seen as boring', 'Missing out on good debates'],
      tips: ['It\'s okay to disagree sometimes', 'Your unique take might be interesting', 'Try sharing a spicy opinion'],
    },
    B: {
      type: 'B',
      title: 'Medium Heat',
      emoji: '🌶️',
      description: 'You have opinions and you\'ll share them, but you\'re not trying to start a revolution. Your takes have some spice but you also know when to pick your battles. The perfect dinner party guest.',
      traits: ['Balanced', 'Thoughtful', 'Selective spice', 'Diplomatic'],
      strengths: ['Can debate without drama', 'Interesting but not exhausting', 'Knows when to hold back', 'Respected opinions'],
      weaknesses: ['Sometimes plays it safe', 'Might not fully commit to takes', 'Could be spicier'],
      tips: ['Your balance is actually valuable', 'Don\'t be afraid to go hotter sometimes', 'The world needs moderate voices'],
    },
    C: {
      type: 'C',
      title: 'Spicy Hot',
      emoji: '🔥',
      description: 'You\'re not afraid to go against the grain. Your opinions make people think, debate, and sometimes get defensive. You enjoy a good controversial discussion and won\'t back down from your takes.',
      traits: ['Contrarian', 'Bold', 'Provocative', 'Independent thinker'],
      strengths: ['Makes conversations interesting', 'Challenges groupthink', 'Not afraid to disagree', 'Original perspectives'],
      weaknesses: ['Can be exhausting', 'Might alienate some people', 'Sometimes contrarian for sport'],
      tips: ['Make sure your takes are genuine not just for shock', 'Some hills aren\'t worth dying on', 'Your perspective is valuable'],
    },
    D: {
      type: 'D',
      title: 'Carolina Reaper',
      emoji: '💀',
      description: 'Your takes are so hot they\'re basically unhinged. You have opinions on things people didn\'t know were debatable. You\'re either a visionary ahead of your time or causing chaos at every gathering. Probably both.',
      traits: ['Unhinged', 'Original', 'Controversial', 'Thought-provoking'],
      strengths: ['Never boring', 'Challenges everything', 'Unique worldview', 'Memorable'],
      weaknesses: ['Might be too much', 'People don\'t always get it', 'Exhausting to debate with'],
      tips: ['Your takes might actually be ahead of time', 'Not every conversation needs to be a debate', 'Channel your energy wisely'],
    },
  },
};

export default testData;
