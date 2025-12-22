// Your Arguing Style
// How do you handle disagreements?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-arguing-style',
  title: 'What\'s Your Arguing Style?',
  description: 'Find out how you handle conflict - are you a debater, avoider, or somewhere in between?',
  category: 'personality',
  emoji: '💬',
  color: 'from-red-500 to-orange-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Someone disagrees with your opinion. Your first instinct is:',
      options: [
        { text: 'Present evidence and logic to support my view', type: 'A' },
        { text: 'Try to understand their perspective first', type: 'B' },
        { text: 'Agree to disagree and change the subject', type: 'C' },
        { text: 'Get passionate - I have strong feelings about this', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In the middle of an argument, you typically:',
      options: [
        { text: 'Stay calm and focus on the facts', type: 'A' },
        { text: 'Try to find common ground', type: 'B' },
        { text: 'Want it to end as quickly as possible', type: 'C' },
        { text: 'Feel my emotions intensifying', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When you know you\'re right, you:',
      options: [
        { text: 'Won\'t stop until the other person sees reason', type: 'A' },
        { text: 'Present my case but respect if they disagree', type: 'B' },
        { text: 'State my opinion once and let it go', type: 'C' },
        { text: 'Get frustrated if they don\'t understand', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your partner or friend wants to "talk about something." You:',
      options: [
        { text: 'Prepare my points mentally', type: 'A' },
        { text: 'Listen first before responding', type: 'B' },
        { text: 'Feel anxious about potential conflict', type: 'C' },
        { text: 'Brace for whatever\'s coming', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'After an argument, you usually:',
      options: [
        { text: 'Replay it and think of better arguments', type: 'A' },
        { text: 'Reflect on both sides and what I learned', type: 'B' },
        { text: 'Feel drained and want to move on', type: 'C' },
        { text: 'Need time to cool down emotionally', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'In group debates or discussions, you:',
      options: [
        { text: 'Love playing devil\'s advocate', type: 'A' },
        { text: 'Try to facilitate and find middle ground', type: 'B' },
        { text: 'Stay quiet unless directly asked', type: 'C' },
        { text: 'Jump in with passion when I care about the topic', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When someone raises their voice at you:',
      options: [
        { text: 'Stay calm - I won\'t let them throw me off', type: 'A' },
        { text: 'Ask them to lower their voice so we can talk', type: 'B' },
        { text: 'Shut down and want to leave the situation', type: 'C' },
        { text: 'Match their energy - I can be loud too', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your ideal way to resolve conflict:',
      options: [
        { text: 'Thorough discussion until we reach a conclusion', type: 'A' },
        { text: 'Calm conversation where both sides are heard', type: 'B' },
        { text: 'Time apart, then brief reconciliation', type: 'C' },
        { text: 'Get it all out, clear the air, move on', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you realize you\'re wrong in an argument:',
      options: [
        { text: 'Gracefully pivot and acknowledge it', type: 'A' },
        { text: 'Admit it and appreciate the learning moment', type: 'B' },
        { text: 'Feel relieved the conflict can end', type: 'C' },
        { text: 'Struggle to admit it in the moment', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'People would describe your arguing style as:',
      options: [
        { text: 'Logical and thorough', type: 'A' },
        { text: 'Fair and diplomatic', type: 'B' },
        { text: 'Non-confrontational and accommodating', type: 'C' },
        { text: 'Passionate and intense', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Logical Debater',
      emoji: '🧠',
      description: 'You argue with your head, not your heart. Facts, evidence, and logic are your weapons of choice. You stay calm under pressure and won\'t stop until the truth prevails.',
      traits: ['Logical', 'Calm', 'Persistent', 'Analytical'],
      strengths: ['Stays composed', 'Well-reasoned arguments', 'Doesn\'t make it personal', 'Thorough'],
      weaknesses: ['May seem cold', 'Can be exhausting to argue with', 'Misses emotional context'],
      tips: ['Emotions are data too', 'Sometimes winning isn\'t the goal', 'Connection matters more than being right'],
    },
    B: {
      type: 'B',
      title: 'The Diplomatic Mediator',
      emoji: '🕊️',
      description: 'You argue to understand, not to win. You listen, validate, and seek common ground. Your goal is resolution, not victory. People feel heard when they argue with you.',
      traits: ['Empathetic', 'Diplomatic', 'Fair', 'Collaborative'],
      strengths: ['Builds bridges', 'Great listener', 'Reduces conflict', 'Finds solutions'],
      weaknesses: ['May compromise too much', 'Can be walked over', 'Others may see it as weak'],
      tips: ['Stand firm on important issues', 'Your needs matter too', 'Not everything needs mediation'],
    },
    C: {
      type: 'C',
      title: 'The Conflict Avoider',
      emoji: '🏃',
      description: 'You\'d rather do almost anything than argue. Conflict drains you, and you prefer peace over proving a point. You\'ll give in just to end the uncomfortable situation.',
      traits: ['Peaceful', 'Accommodating', 'Sensitive', 'Avoidant'],
      strengths: ['Low drama', 'Easy to get along with', 'Doesn\'t hold grudges', 'Prioritizes peace'],
      weaknesses: ['Resentment builds up', 'Needs go unspoken', 'May be taken advantage of'],
      tips: ['Your voice matters', 'Healthy conflict can be productive', 'Speak up for yourself'],
    },
    D: {
      type: 'D',
      title: 'The Passionate Fighter',
      emoji: '🔥',
      description: 'When you argue, you ARGUE! Your emotions run high, and you\'re not afraid to show them. You clear the air quickly but things can get intense. You feel better after a good fight.',
      traits: ['Passionate', 'Expressive', 'Intense', 'Honest'],
      strengths: ['Nothing stays bottled up', 'Authentic expression', 'Clears the air', 'You know where you stand'],
      weaknesses: ['Can be overwhelming', 'Says things you regret', 'Others may feel attacked'],
      tips: ['Pause before responding', 'Cool down periods help', 'Intensity isn\'t always effective'],
    },
  },
};

export default testData;
