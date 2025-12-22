// Coffee Person or Tea Person?
// The eternal beverage debate, settled

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-coffee-vs-tea',
  title: 'Coffee Person or Tea Person?',
  description: 'This says more about your personality than you think. Find out which caffeinated beverage matches your soul.',
  category: 'lifestyle',
  emoji: '☕',
  color: 'from-amber-700 to-yellow-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal morning vibe:',
      options: [
        { text: 'Need caffeine FAST to become a person', type: 'A' },
        { text: 'Slow, peaceful, easing into the day', type: 'B' },
        { text: 'Either works depending on the day', type: 'C' },
        { text: 'Water and vibes, honestly', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your energy style:',
      options: [
        { text: 'Quick boost, hit the ground running', type: 'A' },
        { text: 'Steady, sustained, no crash', type: 'B' },
        { text: 'Varies with my mood and needs', type: 'C' },
        { text: 'I don\'t rely on beverages for energy', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Pick a setting:',
      options: [
        { text: 'Bustling coffee shop with good espresso', type: 'A' },
        { text: 'Quiet tearoom or cozy home corner', type: 'B' },
        { text: 'Either depending on the vibe I want', type: 'C' },
        { text: 'Anywhere, beverage is secondary', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your relationship with caffeine:',
      options: [
        { text: 'Need it, dependent, no shame', type: 'A' },
        { text: 'Appreciate it, but not desperate', type: 'B' },
        { text: 'Take it or leave it', type: 'C' },
        { text: 'Try to avoid or don\'t care about it', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When you\'re stressed:',
      options: [
        { text: 'Strong coffee to power through', type: 'A' },
        { text: 'Calming tea to center myself', type: 'B' },
        { text: 'Whatever\'s in front of me', type: 'C' },
        { text: 'Beverages don\'t solve stress', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your taste preference:',
      options: [
        { text: 'Bold, rich, complex flavors', type: 'A' },
        { text: 'Subtle, nuanced, varied', type: 'B' },
        { text: 'Both have their place', type: 'C' },
        { text: 'Not particular about hot beverages', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Temperature preference for your drink:',
      options: [
        { text: 'Hot or iced - coffee works both ways', type: 'A' },
        { text: 'Hot, with a proper steeping ritual', type: 'B' },
        { text: 'Seasonal - hot in winter, iced in summer', type: 'C' },
        { text: 'Room temperature water is my go-to', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your brewing equipment:',
      options: [
        { text: 'French press, espresso machine, pour over - I have gear', type: 'A' },
        { text: 'Nice teapot, maybe a collection of teas', type: 'B' },
        { text: 'Basic setup that gets the job done', type: 'C' },
        { text: 'Don\'t have any special equipment', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Late night beverage:',
      options: [
        { text: 'Decaf or low-caf coffee if anything', type: 'A' },
        { text: 'Herbal tea or chamomile', type: 'B' },
        { text: 'Nothing caffeinated after dinner', type: 'C' },
        { text: 'Water or nothing', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Honestly, your beverage identity:',
      options: [
        { text: 'Coffee person through and through', type: 'A' },
        { text: 'Tea person at heart', type: 'B' },
        { text: 'Both depending on mood', type: 'C' },
        { text: 'Neither - not my thing', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Devoted Coffee Person',
      emoji: '☕',
      description: 'Coffee runs through your veins. You need that bold kick to start your day and probably have opinions about beans, roasts, and brewing methods. Don\'t talk to you before your first cup.',
      traits: ['Bold', 'Fast-paced', 'Coffee-dependent', 'No-nonsense'],
      strengths: ['Gets things done', 'Clear on preferences', 'Efficient mornings', 'Coffee knowledge'],
      weaknesses: ['Useless without coffee', 'Can be jittery', 'Slightly dependent'],
      tips: ['Hydrate too', 'Decaf exists for a reason', 'Your coffee ritual is valid'],
    },
    B: {
      type: 'B',
      title: 'Tea Soul',
      emoji: '🍵',
      description: 'Tea is more than a beverage - it\'s a ritual, a moment of calm, a lifestyle. You appreciate the subtleties, have favorite varieties, and enjoy the slower pace tea encourages.',
      traits: ['Calm', 'Ritualistic', 'Nuanced', 'Peaceful'],
      strengths: ['Built-in mindfulness', 'Variety of options', 'Less caffeine crash', 'Sophisticated taste'],
      weaknesses: ['Might seem slow', 'Tea snob potential', 'Less immediate buzz'],
      tips: ['Your zen energy is enviable', 'Share your favorites', 'Tea time is sacred'],
    },
    C: {
      type: 'C',
      title: 'The Flexible Sipper',
      emoji: '🥤',
      description: 'Why choose when you can have both? Coffee in the morning, tea in the afternoon, whatever fits the mood. You\'re adaptable, non-committal in the best way, and enjoy the best of both worlds.',
      traits: ['Adaptable', 'Mood-based', 'Flexible', 'Non-dogmatic'],
      strengths: ['Best of both worlds', 'Mood-appropriate choices', 'Not dependent on one thing', 'Versatile'],
      weaknesses: ['No strong beverage identity', 'Jack of all trades', 'Might be seen as indecisive'],
      tips: ['Your flexibility is a strength', 'Enjoy the variety', 'No need to pick a side'],
    },
    D: {
      type: 'D',
      title: 'The Beverage-Free Spirit',
      emoji: '💧',
      description: 'Hot caffeinated beverages? Not your thing. You\'re either a water purist, naturally energetic, or just don\'t get the hype. And that\'s totally valid - you do you.',
      traits: ['Independent', 'Naturally energized', 'Uncomplicated', 'Hydration-focused'],
      strengths: ['No caffeine dependency', 'Simple life', 'Good hydration', 'Save money on drinks'],
      weaknesses: ['Missing out on ritual', 'Don\'t get the culture', 'Might seem odd to others'],
      tips: ['Water is actually the move', 'You\'re not wrong', 'Maybe try one someday?'],
    },
  },
};

export default testData;
