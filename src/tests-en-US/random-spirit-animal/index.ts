// What's Your Spirit Animal?
// Discover the animal that matches your soul!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'random-spirit-animal',
  title: 'What\'s Your Spirit Animal?',
  description: 'Every soul has an animal guide. Which creature represents YOUR energy and spirit?',
  category: 'random',
  emoji: '🦋',
  color: 'from-emerald-500 to-teal-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your natural approach to challenges:',
      options: [
        { text: 'Face them head-on with courage', type: 'A' },
        { text: 'Observe carefully, then act strategically', type: 'B' },
        { text: 'Adapt and flow around obstacles', type: 'C' },
        { text: 'Stay grounded and patient until the time is right', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'In a group, you naturally:',
      options: [
        { text: 'Lead and protect the others', type: 'A' },
        { text: 'Watch from a distance, offer wisdom when needed', type: 'B' },
        { text: 'Connect everyone, keep energy flowing', type: 'C' },
        { text: 'Provide stability and calm presence', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your greatest strength:',
      options: [
        { text: 'Bravery and fierce loyalty', type: 'A' },
        { text: 'Intelligence and sharp perception', type: 'B' },
        { text: 'Adaptability and grace', type: 'C' },
        { text: 'Patience and inner strength', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you recharge?',
      options: [
        { text: 'Physical activity, being active', type: 'A' },
        { text: 'Solitude, deep thinking', type: 'B' },
        { text: 'Social connection, movement', type: 'C' },
        { text: 'Rest, quiet, nature', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your communication style:',
      options: [
        { text: 'Direct, confident, commanding', type: 'A' },
        { text: 'Thoughtful, observant, precise', type: 'B' },
        { text: 'Expressive, playful, social', type: 'C' },
        { text: 'Calm, gentle, reassuring', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'What do people admire about you?',
      options: [
        { text: 'My courage and willingness to fight for what\'s right', type: 'A' },
        { text: 'My wisdom and ability to see what others miss', type: 'B' },
        { text: 'My energy and ability to connect with anyone', type: 'C' },
        { text: 'My calm and unshakeable presence', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your ideal environment:',
      options: [
        { text: 'Open spaces where I can roam and lead', type: 'A' },
        { text: 'High vantage point to see everything', type: 'B' },
        { text: 'Anywhere with movement and connection', type: 'C' },
        { text: 'Peaceful, natural, grounded spaces', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When threatened, you:',
      options: [
        { text: 'Stand your ground, protect fiercely', type: 'A' },
        { text: 'Assess, plan, strike precisely', type: 'B' },
        { text: 'Move quickly, escape gracefully', type: 'C' },
        { text: 'Stay calm, use patience as protection', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your life philosophy:',
      options: [
        { text: 'Be brave, lead boldly', type: 'A' },
        { text: 'Be wise, see clearly', type: 'B' },
        { text: 'Be free, flow joyfully', type: 'C' },
        { text: 'Be patient, trust the journey', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'The energy you bring to the world:',
      options: [
        { text: 'Fierce protection and courage', type: 'A' },
        { text: 'Deep wisdom and insight', type: 'B' },
        { text: 'Joyful freedom and connection', type: 'C' },
        { text: 'Peaceful strength and patience', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Wolf',
      emoji: '🐺',
      description: 'Your spirit animal is the WOLF - fierce, loyal, and brave. You\'re a natural leader who protects your pack. Your courage inspires others, and your loyalty is unmatched. You lead with heart and strength.',
      traits: ['Brave', 'Loyal', 'Protective', 'Leader'],
      strengths: ['Fierce loyalty', 'Natural leadership', 'Courage under pressure', 'Pack mentality'],
      weaknesses: ['May be too protective', 'Struggles alone'],
      tips: ['Your pack needs you', 'Lead with both heart and head', 'Lone wolf time is okay sometimes'],
    },
    B: {
      type: 'B',
      title: 'Owl',
      emoji: '🦉',
      description: 'Your spirit animal is the OWL - wise, perceptive, and mysterious. You see what others miss, think deeply, and offer wisdom when it matters. Your insight is your superpower.',
      traits: ['Wise', 'Perceptive', 'Thoughtful', 'Mysterious'],
      strengths: ['Sharp intuition', 'Deep thinker', 'Sees truth', 'Patient observer'],
      weaknesses: ['May isolate too much', 'Overthinking'],
      tips: ['Your wisdom is needed', 'Share your insights', 'Come out of the shadows sometimes'],
    },
    C: {
      type: 'C',
      title: 'Dolphin',
      emoji: '🐬',
      description: 'Your spirit animal is the DOLPHIN - playful, social, and free. You bring joy wherever you go, connect easily with others, and move through life with grace and adaptability.',
      traits: ['Playful', 'Social', 'Free', 'Adaptable'],
      strengths: ['Natural connector', 'Brings joy', 'Graceful movement', 'Community-minded'],
      weaknesses: ['May avoid depth', 'Needs constant stimulation'],
      tips: ['Your joy is contagious', 'Go deep sometimes', 'Freedom and connection both matter'],
    },
    D: {
      type: 'D',
      title: 'Elephant',
      emoji: '🐘',
      description: 'Your spirit animal is the ELEPHANT - gentle, strong, and wise. You carry deep wisdom, remain unshakeable in storms, and your presence brings calm. You never forget and your patience is legendary.',
      traits: ['Gentle', 'Strong', 'Patient', 'Wise'],
      strengths: ['Inner strength', 'Deep memory', 'Calm presence', 'Protective of family'],
      weaknesses: ['May carry too much', 'Slow to act'],
      tips: ['Your strength is quiet but powerful', 'Let others help carry the load', 'Your patience is a gift'],
    },
  },
};

export default testData;
