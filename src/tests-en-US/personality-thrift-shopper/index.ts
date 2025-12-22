// Your Thrift Shopping Style
// Secondhand treasure hunting

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-thrift-shopper',
  title: 'What\'s Your Thrift Shopping Style?',
  description: 'From Goodwill guerrilla to vintage collector - discover what your secondhand shopping habits reveal about you!',
  category: 'personality',
  emoji: '🛍️',
  color: 'from-teal-500 to-green-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your approach to thrift store shopping is:',
      options: [
        { text: 'Strategic - I know the best days, best stores, best sections', type: 'A' },
        { text: 'Regular browser - I pop in when I have time', type: 'B' },
        { text: 'Occasional - when I need something specific', type: 'C' },
        { text: 'Rare - thrift stores intimidate me', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you enter a thrift store, you first go to:',
      options: [
        { text: 'My favorite section - I have a system', type: 'A' },
        { text: 'Wherever looks interesting that day', type: 'B' },
        { text: 'The section for what I actually need', type: 'C' },
        { text: 'Stand overwhelmed at the entrance', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your thrift store finds are typically:',
      options: [
        { text: 'Vintage gems worth way more than I paid', type: 'A' },
        { text: 'A mix of clothes, home stuff, random cool things', type: 'B' },
        { text: 'Practical items I actually needed', type: 'C' },
        { text: 'I usually leave empty-handed', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How long is your typical thrift store visit?',
      options: [
        { text: '2+ hours - I\'m thorough', type: 'A' },
        { text: '45 min to an hour - enjoyable browse', type: 'B' },
        { text: '20-30 minutes - quick and focused', type: 'C' },
        { text: 'I give up quickly if I don\'t see anything', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your thrift store item evaluation process:',
      options: [
        { text: 'Check brand, fabric, condition, resale value', type: 'A' },
        { text: 'Does it fit? Is it cool? Sold.', type: 'B' },
        { text: 'Is it functional and in good shape?', type: 'C' },
        { text: 'I don\'t really know what to look for', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your motivation for thrift shopping:',
      options: [
        { text: 'The thrill of the hunt for unique pieces', type: 'A' },
        { text: 'Sustainability and good prices', type: 'B' },
        { text: 'Budget-friendly shopping', type: 'C' },
        { text: 'Friends drag me there sometimes', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you find something amazing at a thrift store:',
      options: [
        { text: 'Hide it while I keep shopping so no one else gets it', type: 'A' },
        { text: 'Immediately put it in my basket, very excited', type: 'B' },
        { text: 'Consider if I really need it', type: 'C' },
        { text: 'Wonder if it\'s actually cool or just thrift store goggles', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your thrift store reputation among friends:',
      options: [
        { text: 'The expert - they ask me to take them', type: 'A' },
        { text: 'Known for good thrift finds', type: 'B' },
        { text: 'Occasionally find things, not my main shopping method', type: 'C' },
        { text: 'They don\'t even know I\'ve been in one', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel about thrift store smells?',
      options: [
        { text: 'It\'s the smell of possibility and deals', type: 'A' },
        { text: 'Doesn\'t bother me - wash everything anyway', type: 'B' },
        { text: 'Tolerable for the right find', type: 'C' },
        { text: 'Kind of grosses me out honestly', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your home/closet ratio of thrifted items:',
      options: [
        { text: 'Most things are thrifted or vintage', type: 'A' },
        { text: 'Good mix of thrifted and new', type: 'B' },
        { text: 'A few thrifted pieces here and there', type: 'C' },
        { text: 'I genuinely can\'t think of anything', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Thrift Master',
      emoji: '👑',
      description: 'Thrifting is your sport and you\'re winning. You know the restock days, the best racks to hit, and you can spot a vintage designer piece from across the store. Your friends want your power. Your closet is a curated collection of secondhand excellence.',
      traits: ['Expert', 'Patient', 'Knowledgeable', 'Dedicated'],
      strengths: ['Finds amazing items', 'Great eye for value', 'Sustainable wardrobe', 'Saves money on quality'],
      weaknesses: ['Can spend hours in stores', 'Might have too much stuff', 'Hard to shop new anymore'],
      tips: ['Teach your friends your ways', 'Know when to stop collecting', 'Your skill is impressive'],
    },
    B: {
      type: 'B',
      title: 'The Happy Thrifter',
      emoji: '😊',
      description: 'You enjoy thrifting without it being your whole personality. You find good stuff, appreciate the sustainability, and like the prices. It\'s a fun activity that yields good results, not an obsession.',
      traits: ['Balanced', 'Casual', 'Eco-conscious', 'Practical'],
      strengths: ['Enjoys the experience', 'Finds good items', 'Sustainable approach', 'Doesn\'t overdo it'],
      weaknesses: ['Might miss the really good finds', 'Not as thorough', 'Could sharpen skills'],
      tips: ['You\'re doing great', 'Maybe learn a few pro tips', 'Keep enjoying the hunt'],
    },
    C: {
      type: 'C',
      title: 'The Practical Thrifter',
      emoji: '✅',
      description: 'Thrifting for you is a means to an end. Need a jacket? Check the thrift store first. It makes sense, saves money, and sometimes you find good stuff. No need to make it a whole lifestyle.',
      traits: ['Practical', 'Budget-conscious', 'Efficient', 'Goal-oriented'],
      strengths: ['Purposeful shopping', 'Saves money', 'Doesn\'t accumulate stuff', 'Gets what they need'],
      weaknesses: ['Misses spontaneous finds', 'Doesn\'t develop the skill', 'May not see all the potential'],
      tips: ['Try browsing without a goal sometime', 'You might discover hidden treasures', 'Your approach is valid'],
    },
    D: {
      type: 'D',
      title: 'The Thrift Newcomer',
      emoji: '🌱',
      description: 'Thrift stores are unfamiliar territory for you. The chaos, the smells, the unknown - it\'s a lot. You\'re not opposed to it, just haven\'t found your groove yet. There\'s a whole world of $5 jackets waiting for you.',
      traits: ['Beginner', 'Hesitant', 'Curious', 'Learning'],
      strengths: ['Potential for discovery', 'Clean slate to learn', 'No bad habits', 'Untapped opportunity'],
      weaknesses: ['Doesn\'t know where to start', 'May leave good stuff behind', 'Overwhelmed by selection'],
      tips: ['Go with an experienced friend', 'Start with one section', 'The treasures are there - you just need practice'],
    },
  },
};

export default testData;
