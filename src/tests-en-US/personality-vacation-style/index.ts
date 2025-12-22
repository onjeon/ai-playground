// Your Vacation Style
// How do you travel?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-vacation-style',
  title: 'What\'s Your Vacation Style?',
  description: 'Discover how you travel - adventure seeker, beach bum, cultural explorer, or staycation expert?',
  category: 'personality',
  emoji: '🌴',
  color: 'from-cyan-500 to-blue-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal vacation pace is:',
      options: [
        { text: 'Every minute planned with activities', type: 'A' },
        { text: 'A mix of planned activities and free time', type: 'B' },
        { text: 'Mostly relaxation with a few excursions', type: 'C' },
        { text: 'No plans at all - pure spontaneity', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your vacation accommodation preference:',
      options: [
        { text: 'Whatever is closest to the attractions', type: 'A' },
        { text: 'A nice hotel with good amenities', type: 'B' },
        { text: 'A resort where everything is included', type: 'C' },
        { text: 'Unique stays - Airbnb, hostels, treehouses', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When exploring a new city, you:',
      options: [
        { text: 'Hit every major attraction and museum', type: 'A' },
        { text: 'See the highlights and explore some neighborhoods', type: 'B' },
        { text: 'Find a nice cafe and watch the world go by', type: 'C' },
        { text: 'Wander aimlessly and see where I end up', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your vacation packing style:',
      options: [
        { text: 'Detailed list, packed days in advance', type: 'A' },
        { text: 'Organized but not stressful about it', type: 'B' },
        { text: 'Light packer - just the essentials', type: 'C' },
        { text: 'Last minute chaos but it works out', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Local food on vacation:',
      options: [
        { text: 'Research the best restaurants beforehand', type: 'A' },
        { text: 'Try local spots recommended by locals', type: 'B' },
        { text: 'Eat when hungry, wherever looks good', type: 'C' },
        { text: 'Street food adventures and random discoveries', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your dream vacation destination:',
      options: [
        { text: 'Historic cities with lots to see and learn', type: 'A' },
        { text: 'A balanced destination with culture and relaxation', type: 'B' },
        { text: 'A beach or spa resort for total relaxation', type: 'C' },
        { text: 'Off the beaten path somewhere unique', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'On vacation, your phone is:',
      options: [
        { text: 'Constantly taking photos and navigating', type: 'A' },
        { text: 'Used for photos and occasional check-ins', type: 'B' },
        { text: 'Mostly put away - this is relaxation time', type: 'C' },
        { text: 'Dead because I forgot to charge it', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Group trip planning with you:',
      options: [
        { text: 'I take charge and plan everything', type: 'A' },
        { text: 'I contribute ideas and help with planning', type: 'B' },
        { text: 'I\'m happy to go along with whatever', type: 'C' },
        { text: 'Please don\'t put me in charge of anything', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Vacation souvenirs:',
      options: [
        { text: 'I have a specific collection I add to', type: 'A' },
        { text: 'I pick up meaningful items for myself and others', type: 'B' },
        { text: 'Maybe a small something, maybe not', type: 'C' },
        { text: 'Experiences are my souvenirs', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Coming home from vacation, you feel:',
      options: [
        { text: 'Accomplished - I saw and did so much!', type: 'A' },
        { text: 'Satisfied and ready to return to real life', type: 'B' },
        { text: 'Relaxed and recharged', type: 'C' },
        { text: 'Already planning the next adventure', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Cultural Explorer',
      emoji: '🎒',
      description: 'You travel to SEE and DO! Every trip is an opportunity to learn, explore, and check things off your bucket list. You come home exhausted but fulfilled.',
      traits: ['Curious', 'Organized', 'Ambitious', 'Cultural'],
      strengths: ['Never misses must-sees', 'Well-planned trips', 'Deep cultural experiences', 'Amazing travel stories'],
      weaknesses: ['May need vacation from vacation', 'Might miss spontaneous moments', 'Can feel rushed'],
      tips: ['Schedule some unplanned time', 'Relaxation is also valuable', 'It\'s okay not to see everything'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Traveler',
      emoji: '⚖️',
      description: 'You\'ve mastered the art of vacation! You see the highlights but also make time to relax. You come home having experienced the destination without feeling exhausted.',
      traits: ['Balanced', 'Flexible', 'Adaptable', 'Practical'],
      strengths: ['Best of both worlds', 'Sustainable travel pace', 'Good memories', 'Comes home refreshed'],
      weaknesses: ['Might not go deep in either direction', 'Could push yourself more sometimes'],
      tips: ['You\'ve got this figured out', 'Trust your instincts', 'Keep doing what works'],
    },
    C: {
      type: 'C',
      title: 'The Relaxation Seeker',
      emoji: '🏖️',
      description: 'Vacation means VACATION to you! You\'re there to unwind, recharge, and do as little as possible. Beach, pool, spa, repeat. You come home actually rested.',
      traits: ['Relaxed', 'Self-aware', 'Stress-free', 'Present'],
      strengths: ['Actually rests on vacation', 'Stress-free travel', 'Low-maintenance', 'Comes home refreshed'],
      weaknesses: ['Might miss local experiences', 'Could seem lazy to active travelers', 'Same routine different place'],
      tips: ['Try one local activity per trip', 'You don\'t have to see everything', 'Your style is valid'],
    },
    D: {
      type: 'D',
      title: 'The Spontaneous Adventurer',
      emoji: '🗺️',
      description: 'Plans? Where you\'re going, you don\'t need plans! You travel for the unexpected, the discoveries, and the stories. Every trip is a unique adventure.',
      traits: ['Spontaneous', 'Adventurous', 'Flexible', 'Bold'],
      strengths: ['Unique experiences', 'Great stories', 'Embraces the unknown', 'Truly lives in the moment'],
      weaknesses: ['May miss important things', 'Can be stressful for travel companions', 'Might waste time being lost'],
      tips: ['Some planning enhances spontaneity', 'Respect others\' travel styles', 'Have a backup plan occasionally'],
    },
  },
};

export default testData;
