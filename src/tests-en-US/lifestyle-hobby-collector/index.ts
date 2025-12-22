// Are You a Hobby Collector?
// How many hobbies have you started (and abandoned)?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'lifestyle-hobby-collector',
  title: 'Are You a Hobby Collector?',
  description: 'Do you master one thing or collect hobbies like Pokémon? Find out your relationship with interests and activities.',
  category: 'lifestyle',
  emoji: '🎯',
  color: 'from-violet-500 to-purple-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How many hobbies have you tried in the last 2 years?',
      options: [
        { text: '1-2, I stick with what I know', type: 'A' },
        { text: '3-5, a healthy variety', type: 'B' },
        { text: '6-10, I get excited about new things', type: 'C' },
        { text: '10+, don\'t ask about my closet of supplies', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you see a cool new hobby on TikTok:',
      options: [
        { text: 'Interesting but not for me', type: 'A' },
        { text: 'Might look into it if I have time', type: 'B' },
        { text: 'Already researching supplies', type: 'C' },
        { text: 'Just bought a starter kit', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your relationship with hobby supplies:',
      options: [
        { text: 'Buy what I need, use what I buy', type: 'A' },
        { text: 'Some supplies I\'ve fully used, some gathering dust', type: 'B' },
        { text: 'A concerning amount of unused materials', type: 'C' },
        { text: 'I could open a craft store', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How long do you typically stay interested in something?',
      options: [
        { text: 'Years - I develop deep expertise', type: 'A' },
        { text: 'Months to a year - decent commitment', type: 'B' },
        { text: 'Weeks to months - then something new calls', type: 'C' },
        { text: 'The "hyperfixation then abandonment" cycle', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your skill level across your hobbies:',
      options: [
        { text: 'Expert in one or two things', type: 'A' },
        { text: 'Decent at several things', type: 'B' },
        { text: 'Beginner at many things', type: 'C' },
        { text: 'Briefly competent at everything, master of nothing', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When someone asks about your hobbies:',
      options: [
        { text: 'Easy answer - I\'m known for X', type: 'A' },
        { text: 'A few things I mention regularly', type: 'B' },
        { text: 'Depends which phase I\'m in currently', type: 'C' },
        { text: 'How much time do you have?', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Unfinished projects:',
      options: [
        { text: 'I finish what I start', type: 'A' },
        { text: 'A few, but mostly I complete things', type: 'B' },
        { text: 'Several waiting for "someday"', type: 'C' },
        { text: 'We don\'t talk about the project graveyard', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your YouTube watch history:',
      options: [
        { text: 'Focused on my specific interests', type: 'A' },
        { text: 'Related content in a few areas', type: 'B' },
        { text: 'Random tutorials for things I\'ll never do', type: 'C' },
        { text: 'A chaotic journey through every hobby imaginable', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel about your hobby pattern?',
      options: [
        { text: 'Proud - I\'ve built real expertise', type: 'A' },
        { text: 'Content - I have variety and depth', type: 'B' },
        { text: 'Slightly guilty but enjoying the exploration', type: 'C' },
        { text: 'Accepted my chaos, this is who I am', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your friends would say you\'re:',
      options: [
        { text: 'The expert they ask about X', type: 'A' },
        { text: 'Well-rounded with cool skills', type: 'B' },
        { text: 'Always into something new', type: 'C' },
        { text: 'Impossible to keep up with', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Deep Diver',
      emoji: '🎓',
      description: 'You find what you love and go all in. Mastery over breadth. When you commit to something, you develop real expertise. Your patience and dedication are admirable - you\'re probably the person everyone asks about your thing.',
      traits: ['Focused', 'Expert', 'Patient', 'Dedicated'],
      strengths: ['True expertise', 'Deep satisfaction', 'Known for something', 'Real skill development'],
      weaknesses: ['Might miss other interests', 'Could be more exploratory', 'Eggs in one basket'],
      tips: ['Your depth is valuable', 'Occasional exploration is fun', 'You\'ve built something real'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Hobbyist',
      emoji: '⚖️',
      description: 'You\'ve found the sweet spot - enough variety to stay interested, enough commitment to actually get good. You have a few solid hobbies you can actually do, not just supplies for.',
      traits: ['Balanced', 'Moderate', 'Competent', 'Satisfied'],
      strengths: ['Variety without chaos', 'Actual skills developed', 'Sustainable interests', 'Well-rounded'],
      weaknesses: ['Jack of all trades concerns', 'Could specialize more'],
      tips: ['This is the healthy approach', 'Keep your balance', 'You\'re doing it right'],
    },
    C: {
      type: 'C',
      title: 'The Curious Explorer',
      emoji: '🔮',
      description: 'New hobbies call to you like sirens. You love the excitement of starting something new, learning the basics, and then... well, something else catches your eye. Your enthusiasm is endearing even if your closet is chaotic.',
      traits: ['Curious', 'Enthusiastic', 'Easily excited', 'Non-committal'],
      strengths: ['Wide exposure', 'Open to trying anything', 'Never bored', 'Interesting conversations'],
      weaknesses: ['Never expert at anything', 'Wasted supplies', 'Grass is always greener'],
      tips: ['Finish ONE thing before starting new', 'Your curiosity is a gift', 'Some depth enriches breadth'],
    },
    D: {
      type: 'D',
      title: 'The Hobby Hoarder',
      emoji: '🌈',
      description: 'You don\'t have hobbies, you have a hobby collection. Every phase leaves behind supplies, abandoned projects, and "I\'ll get back to this" energy. Your brain craves novelty and mastery is overrated anyway, right?',
      traits: ['Collector', 'Novelty-seeking', 'Chaotic', 'Passionate (briefly)'],
      strengths: ['Tried everything once', 'Never stuck in a rut', 'Great at starting', 'Stories for days'],
      weaknesses: ['So many unused supplies', 'No expertise', 'Always moving on'],
      tips: ['Pick ONE to actually finish', 'Your chaos is valid but expensive', 'Depth is also satisfying'],
    },
  },
};

export default testData;
