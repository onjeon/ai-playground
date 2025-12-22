// What Kind of Brunch Person Are You?
// Bottomless mimosas and avocado toast vibes

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-brunch-person',
  title: 'What Kind of Brunch Person Are You?',
  description: 'Bottomless mimosas or just coffee? Early bird or "brunch at 2pm"? Discover your true brunch personality.',
  category: 'personality',
  emoji: '🥞',
  color: 'from-yellow-400 to-orange-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal brunch reservation time is:',
      options: [
        { text: '10 AM - early bird gets the best tables', type: 'A' },
        { text: '11:30 AM - classic brunch timing', type: 'B' },
        { text: '1 PM - we\'re calling this brunch but it\'s lunch', type: 'C' },
        { text: '2:30 PM - we just woke up, it counts', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your go-to brunch drink order:',
      options: [
        { text: 'Coffee - I need to function', type: 'A' },
        { text: 'Classic mimosa or Bloody Mary', type: 'B' },
        { text: 'Whatever\'s on the bottomless menu', type: 'C' },
        { text: 'A creative cocktail I\'ve never tried before', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you decide where to brunch?',
      options: [
        { text: 'Reliable spot with good food and fair prices', type: 'A' },
        { text: 'Research the best options, check reviews', type: 'B' },
        { text: 'Wherever my friends want to go', type: 'C' },
        { text: 'The newest trendy spot everyone\'s posting about', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your brunch food order is usually:',
      options: [
        { text: 'Classic breakfast - eggs, bacon, toast', type: 'A' },
        { text: 'Something photogenic - avocado toast, acai bowl', type: 'B' },
        { text: 'Whatever the group is sharing', type: 'C' },
        { text: 'The most unique item on the menu', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How long does your brunch typically last?',
      options: [
        { text: 'An hour - eat, chat, done', type: 'A' },
        { text: '1.5-2 hours - normal pace', type: 'B' },
        { text: '2-3 hours - we\'re here for a while', type: 'C' },
        { text: '4+ hours - brunch is a commitment', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'The bill comes. Your approach:',
      options: [
        { text: 'Calculate exactly what I owe', type: 'A' },
        { text: 'Split evenly - easier that way', type: 'B' },
        { text: 'Venmo whoever pays first', type: 'C' },
        { text: 'Treat everyone sometimes, get treated others', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Photos at brunch - your style:',
      options: [
        { text: 'Maybe a quick one of the food', type: 'A' },
        { text: 'Food flat lay and a group pic', type: 'B' },
        { text: 'Full photo shoot - multiple angles required', type: 'C' },
        { text: 'Document everything for the story', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'The restaurant has a 90-minute time limit. You:',
      options: [
        { text: 'Totally fine - I\'ll be done before that', type: 'A' },
        { text: 'Reasonable - makes sense for a busy spot', type: 'B' },
        { text: 'Stressed - we might need to speed up', type: 'C' },
        { text: 'Already looking for where we\'re going after', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Post-brunch plans:',
      options: [
        { text: 'Back to my day - things to do', type: 'A' },
        { text: 'Maybe some shopping nearby', type: 'B' },
        { text: 'Another spot? Day drinking continues', type: 'C' },
        { text: 'The day is young - adventure awaits', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your brunch outfit philosophy:',
      options: [
        { text: 'Comfortable and practical', type: 'A' },
        { text: 'Casual but put-together', type: 'B' },
        { text: 'Full outfit - brunch is an event', type: 'C' },
        { text: 'Main character energy - this is content', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Practical Bruncher',
      emoji: '☕',
      description: 'Brunch is a meal, not a lifestyle for you. You\'re here for good food, good coffee, and catching up with friends without the production. Efficient, enjoyable, and back to your day. Nothing wrong with that!',
      traits: ['Practical', 'Efficient', 'No-nonsense', 'Classic taste'],
      strengths: ['Never overindulges', 'Always on time', 'Low-maintenance friend', 'Appreciates quality'],
      weaknesses: ['May seem rushed', 'Doesn\'t fully embrace the vibe', 'Friends want you to stay longer'],
      tips: ['Try lingering a bit longer', 'The mimosas won\'t hurt', 'Brunch is meant to be savored'],
    },
    B: {
      type: 'B',
      title: 'The Classic Bruncher',
      emoji: '🥂',
      description: 'You\'ve mastered the art of brunch. The right time, the right spot, the right balance of food and drinks. You understand brunch culture without going overboard. You\'re the friend everyone wants to brunch with.',
      traits: ['Balanced', 'Social', 'Appreciative', 'Well-rounded'],
      strengths: ['Great brunch companion', 'Knows good spots', 'Perfect pace', 'Enjoys without excess'],
      weaknesses: ['Might be too structured', 'Could take more risks', 'Sometimes needs to let loose'],
      tips: ['You\'ve got the perfect balance', 'Try something new occasionally', 'Your brunch energy is immaculate'],
    },
    C: {
      type: 'C',
      title: 'The Social Bruncher',
      emoji: '🍳',
      description: 'Brunch isn\'t about food - it\'s about the people. You\'re there for the long conversations, the group energy, and yes, maybe a few too many refills on the bottomless drinks. Brunch is your social sport.',
      traits: ['Social butterfly', 'Group-oriented', 'Easy-going', 'Conversation-focused'],
      strengths: ['Keeps the energy going', 'Great at group dynamics', 'Makes brunch memorable', 'Never watches the clock'],
      weaknesses: ['Time disappears', 'Might need a nap after', 'Budget can stretch'],
      tips: ['Pace yourself with the drinks', 'Bring snacks for later', 'Your social energy is a gift'],
    },
    D: {
      type: 'D',
      title: 'The Brunch Enthusiast',
      emoji: '✨',
      description: 'Brunch is an experience, a lifestyle, an aesthetic. You know the trendy spots before they blow up, your content is immaculate, and every brunch is potential core memory material. You\'re living your best brunch life.',
      traits: ['Adventurous', 'Trendy', 'Content-creator energy', 'Experience-seeker'],
      strengths: ['Always finds the best spots', 'Makes everything an event', 'Great at discovering new places', 'Main character energy'],
      weaknesses: ['Can be high-maintenance', 'Phone might be out too much', 'Style over substance sometimes'],
      tips: ['Put the phone down sometimes', 'The food is good even without photos', 'Your enthusiasm is contagious'],
    },
  },
};

export default testData;
