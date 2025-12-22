// Are You the Main Character?
// Main character energy test - find out if you're the protagonist of your own life!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-main-character',
  title: 'Are You the Main Character?',
  description: 'Find out if you have main character energy or if you\'re living in someone else\'s movie.',
  category: 'fun',
  emoji: '🎬',
  color: 'from-purple-600 to-pink-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You\'re walking down the street. In your head, you\'re:',
      options: [
        { text: 'Narrating my life like it\'s a movie', type: 'A' },
        { text: 'Listening to my main character playlist', type: 'B' },
        { text: 'Just vibing, not really thinking', type: 'C' },
        { text: 'Worrying about where I need to be', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone tells you that you can\'t do something. You:',
      options: [
        { text: 'Take that as a personal challenge to prove them wrong', type: 'A' },
        { text: 'Dramatic montage of me doing exactly that thing', type: 'B' },
        { text: 'Shrug and say "ok" then do it anyway', type: 'C' },
        { text: 'Consider that maybe they have a point', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your ideal way to enter a party:',
      options: [
        { text: 'Make sure everyone notices my arrival', type: 'A' },
        { text: 'Fashionably late with a great outfit', type: 'B' },
        { text: 'Just walk in and find my friends', type: 'C' },
        { text: 'Sneak in hoping no one sees me', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When something dramatic happens in your life:',
      options: [
        { text: 'This is MY moment. Character development!', type: 'A' },
        { text: 'Time to stare out a rainy window pensively', type: 'B' },
        { text: 'Deal with it and move on', type: 'C' },
        { text: 'Why does this always happen to me?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your Instagram/social media aesthetic is:',
      options: [
        { text: 'Curated perfection - I AM the brand', type: 'A' },
        { text: 'Main character vibes with occasional chaos', type: 'B' },
        { text: 'Random posts when I feel like it', type: 'C' },
        { text: 'I barely post, I just lurk', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'You\'re telling a story to friends. You:',
      options: [
        { text: 'Stand up, do voices, full theatrical performance', type: 'A' },
        { text: 'Tell it dramatically with perfect timing', type: 'B' },
        { text: 'Just tell them what happened', type: 'C' },
        { text: 'Keep it short, they probably don\'t care', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your morning routine involves:',
      options: [
        { text: 'Getting ready like I\'m about to be filmed', type: 'A' },
        { text: 'A motivational playlist and positive affirmations', type: 'B' },
        { text: 'Basic hygiene and out the door', type: 'C' },
        { text: 'Hitting snooze until the last possible second', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you\'re sad, you:',
      options: [
        { text: 'Have a cinematic breakdown (tears look good on me)', type: 'A' },
        { text: 'Listen to sad music and write in my journal', type: 'B' },
        { text: 'Watch comfort shows and eat snacks', type: 'C' },
        { text: 'Bottle it up and pretend everything is fine', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your reaction to someone not texting back:',
      options: [
        { text: 'Their loss - main characters don\'t chase', type: 'A' },
        { text: 'Compose a dramatic text I\'ll never send', type: 'B' },
        { text: 'Assume they\'re busy and move on', type: 'C' },
        { text: 'Spiral and assume they hate me', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your life philosophy:',
      options: [
        { text: 'I\'m the main character and everyone else is an NPC', type: 'A' },
        { text: 'Life is a movie and I\'m the star of mine', type: 'B' },
        { text: 'We\'re all just trying our best', type: 'C' },
        { text: 'I\'m probably an extra in someone else\'s story', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'ULTIMATE Main Character',
      emoji: '👑',
      description: 'You don\'t just have main character energy - you ARE the main character. The world literally revolves around you and you know it. Your confidence is unmatched, your presence is magnetic, and you\'ve never had an awkward moment in your life (or you pretend it didn\'t happen).',
      traits: ['Confident', 'Charismatic', 'Dramatic', 'Unapologetic'],
      strengths: ['Natural leader', 'Great at storytelling', 'Lights up any room', 'Zero self-doubt'],
      weaknesses: ['May come off as self-centered', 'Drama follows you', 'Others\' problems seem small'],
      tips: ['Remember supporting characters matter too', 'Humble moments are growth', 'Check in on your NPCs'],
    },
    B: {
      type: 'B',
      title: 'Romantic Lead',
      emoji: '🌟',
      description: 'You\'re definitely the main character, but of a coming-of-age indie film. You have the aesthetic, the playlists, and the pensive window stares down. Your life has chapters and each one has its own vibe.',
      traits: ['Aesthetic', 'Reflective', 'Creative', 'Emotional'],
      strengths: ['Great aesthetic sense', 'In touch with emotions', 'Inspiring to others', 'Lives authentically'],
      weaknesses: ['Can be overly dramatic', 'Overthinks everything', 'Needs the perfect moment'],
      tips: ['Not everything needs a soundtrack', 'Sometimes just live without narrating', 'You\'re doing great'],
    },
    C: {
      type: 'C',
      title: 'Chill Protagonist',
      emoji: '😎',
      description: 'You\'re the main character but in a low-key way. You don\'t need the spotlight to know your worth. You\'re the relatable protagonist everyone roots for because you\'re just genuinely living your life.',
      traits: ['Grounded', 'Relatable', 'Authentic', 'Easy-going'],
      strengths: ['Everyone likes you', 'No ego issues', 'Genuine connections', 'Actually happy'],
      weaknesses: ['Might undersell yourself', 'Could use more confidence', 'Let others shine too much'],
      tips: ['You can be the center of attention sometimes', 'Your story matters too', 'Own your moments'],
    },
    D: {
      type: 'D',
      title: 'Secret Main Character',
      emoji: '🦋',
      description: 'Plot twist: you\'re actually the main character but you don\'t know it yet. You\'re in your underdog era, waiting for your glow-up montage. Every good protagonist starts somewhere!',
      traits: ['Humble', 'Supportive', 'Observant', 'Patient'],
      strengths: ['Great listener', 'Notices everything', 'Reliable friend', 'Growth potential'],
      weaknesses: ['Self-doubt', 'Lets others take credit', 'Underestimates yourself'],
      tips: ['Your glow-up is coming', 'Start acting like the main character', 'You deserve the spotlight too'],
    },
  },
};

export default testData;
