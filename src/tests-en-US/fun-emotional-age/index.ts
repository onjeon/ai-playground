// What's Your Emotional Age?
// Your real age vs. your emotional age - they might be VERY different!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-emotional-age',
  title: 'What\'s Your Emotional Age?',
  description: 'Your birth certificate says one thing, but your emotional maturity might say another!',
  category: 'fun',
  emoji: '🎂',
  color: 'from-orange-500 to-amber-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Someone cancels plans on you last minute. You:',
      options: [
        { text: 'Relief! Now I can stay home in peace', type: 'A' },
        { text: 'Understand and reschedule maturely', type: 'B' },
        { text: 'Text my group chat to vent dramatically', type: 'C' },
        { text: 'Have a mini meltdown about being rejected', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal Friday night:',
      options: [
        { text: 'In bed by 9pm with a book and tea', type: 'A' },
        { text: 'Dinner with close friends, home by 11', type: 'B' },
        { text: 'Out until 2am, sleep when I\'m dead', type: 'C' },
        { text: 'WHATEVER sounds fun in the moment!', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How do you handle conflict?',
      options: [
        { text: 'Calmly discuss it or walk away - not worth my energy', type: 'A' },
        { text: 'Address it directly but respectfully', type: 'B' },
        { text: 'Get heated, then feel bad about it later', type: 'C' },
        { text: 'Either explode or pretend nothing happened', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your approach to responsibilities:',
      options: [
        { text: 'Bills paid early, calendar organized, life together', type: 'A' },
        { text: 'I handle things on time, usually', type: 'B' },
        { text: 'Procrastinate then panic-accomplish everything', type: 'C' },
        { text: 'Responsibilities? Don\'t know her.', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When making a big decision:',
      options: [
        { text: 'Pro/con list, research, then decide', type: 'A' },
        { text: 'Think it through, consult trusted people', type: 'B' },
        { text: 'Overthink until someone else decides for me', type: 'C' },
        { text: 'YOLO and figure it out later', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your relationship with your emotions:',
      options: [
        { text: 'Fully processed, I go to therapy', type: 'A' },
        { text: 'Pretty in touch with how I feel', type: 'B' },
        { text: 'A rollercoaster I\'m still figuring out', type: 'C' },
        { text: 'What emotions? I just vibe.', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Someone gives you constructive criticism:',
      options: [
        { text: 'Appreciate it and try to improve', type: 'A' },
        { text: 'Listen, reflect, then decide if it\'s valid', type: 'B' },
        { text: 'Get defensive but think about it later', type: 'C' },
        { text: 'Take it personally and spiral', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your spending habits:',
      options: [
        { text: 'Budget tracked, savings growing, investments set', type: 'A' },
        { text: 'Responsible with occasional treats', type: 'B' },
        { text: 'I spend too much but I\'m working on it', type: 'C' },
        { text: 'Money is for spending NOW', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you\'re stressed:',
      options: [
        { text: 'Meditate, journal, take a walk', type: 'A' },
        { text: 'Talk to someone or work through it', type: 'B' },
        { text: 'Stress eat/shop/scroll until I feel better', type: 'C' },
        { text: 'Ignore it until I can\'t anymore', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How often do you think about your future?',
      options: [
        { text: 'Have a 5-year plan and retirement sorted', type: 'A' },
        { text: 'General goals but flexible', type: 'B' },
        { text: 'Sometimes, when I\'m having an existential crisis', type: 'C' },
        { text: 'I can barely think about tomorrow', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Emotional Age: 65',
      emoji: '🧘',
      description: 'You\'re basically a wise elder in a younger body. You have your life together, your emotions regulated, and your peace protected. You\'ve probably been called "mature for your age" your whole life. You are the friend everyone comes to for advice.',
      traits: ['Wise', 'Calm', 'Put-together', 'Reliable'],
      strengths: ['Great judgment', 'Emotionally stable', 'Has life figured out'],
      weaknesses: ['Might be too serious', 'Could lighten up', 'Missing some chaos'],
      tips: ['It\'s okay to be messy sometimes', 'Let loose occasionally', 'You don\'t always have to be responsible'],
    },
    B: {
      type: 'B',
      title: 'Emotional Age: 30',
      emoji: '✨',
      description: 'You\'re emotionally right where you should be - a healthy, functioning adult who has some things figured out and is working on the rest. You handle life pretty well while still having fun. The perfect balance.',
      traits: ['Balanced', 'Self-aware', 'Growing', 'Stable'],
      strengths: ['Good coping skills', 'Reasonable', 'Emotionally intelligent'],
      weaknesses: ['Occasional stress response', 'Still learning', 'Room to grow'],
      tips: ['Keep doing what you\'re doing', 'Continue growing', 'Balance is key'],
    },
    C: {
      type: 'C',
      title: 'Emotional Age: 19',
      emoji: '🎢',
      description: 'You\'re emotionally in your late teens - everything feels intense, you\'re still figuring out who you are, and your emotions are a rollercoaster. It\'s chaotic but also kind of fun? You feel everything deeply.',
      traits: ['Intense', 'Passionate', 'Impulsive', 'Growing'],
      strengths: ['Feels things deeply', 'Passionate', 'Still full of wonder'],
      weaknesses: ['Emotional rollercoaster', 'Reactive', 'Needs more stability'],
      tips: ['Some coping skills would help', 'It\'s okay to feel, but regulate too', 'Growth is a process'],
    },
    D: {
      type: 'D',
      title: 'Emotional Age: 7',
      emoji: '🎈',
      description: 'You\'re basically an emotional child (but like, in a kind of endearing way?). You live in the moment, avoid responsibilities, and experience emotions at full volume. Life is either AMAZING or THE WORST with no in-between.',
      traits: ['Spontaneous', 'Carefree', 'Intense', 'Dramatic'],
      strengths: ['Lives fully in the moment', 'Finds joy in little things', 'Unfiltered authenticity'],
      weaknesses: ['Avoids responsibility', 'Emotional extremes', 'No long-term planning'],
      tips: ['Some growing up wouldn\'t hurt', 'Learn to process emotions', 'Maybe think about tomorrow occasionally'],
    },
  },
};

export default testData;
