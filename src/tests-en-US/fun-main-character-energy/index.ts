// What's Your Main Character Energy?
// Find out what kind of protagonist you'd be

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-main-character-energy',
  title: "What's Your Main Character Energy?",
  description: 'Are you the hero, the mysterious loner, the comic relief, or the villain with a redemption arc? Discover your protagonist type.',
  category: 'fun',
  emoji: '🎬',
  color: 'from-amber-500 to-red-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You walk into a party. Your entrance style:',
      options: [
        { text: 'Grand entrance - music should be playing', type: 'A' },
        { text: 'Slip in quietly and observe from the corner', type: 'B' },
        { text: 'Find my people immediately and start vibing', type: 'C' },
        { text: 'Fashionably late with a dramatic reveal', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal movie moment would be:',
      options: [
        { text: 'Inspiring speech that rallies everyone together', type: 'A' },
        { text: 'Walking away from an explosion without looking back', type: 'B' },
        { text: 'The perfectly timed joke that breaks the tension', type: 'C' },
        { text: 'Plot twist reveal that changes everything', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'In a group project, you\'re the one who:',
      options: [
        { text: 'Takes charge and delegates tasks', type: 'A' },
        { text: 'Does my part silently but brilliantly', type: 'B' },
        { text: 'Keeps morale up and makes it fun', type: 'C' },
        { text: 'Has unconventional ideas that actually work', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your vibe when things go wrong:',
      options: [
        { text: '"I got this" - rise to the challenge', type: 'A' },
        { text: 'Quietly solve it before anyone notices', type: 'B' },
        { text: 'Laugh about it and find the silver lining', type: 'C' },
        { text: 'Already predicted this would happen', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your friends would describe you as:',
      options: [
        { text: 'The natural leader everyone follows', type: 'A' },
        { text: 'The mysterious one with hidden depths', type: 'B' },
        { text: 'The fun one who makes everything better', type: 'C' },
        { text: 'The wildcard who keeps things interesting', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Pick your soundtrack moment:',
      options: [
        { text: 'Epic orchestral swell during a triumphant moment', type: 'A' },
        { text: 'Dark, moody instrumental for a brooding scene', type: 'B' },
        { text: 'Upbeat bop during a montage', type: 'C' },
        { text: 'Unexpected song choice that somehow works perfectly', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your approach to obstacles:',
      options: [
        { text: 'Face them head-on with determination', type: 'A' },
        { text: 'Work around them strategically', type: 'B' },
        { text: 'Find a way to make it fun', type: 'C' },
        { text: 'See obstacles as opportunities', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your character arc would involve:',
      options: [
        { text: 'Learning to trust others after doing it all alone', type: 'A' },
        { text: 'Opening up after being closed off', type: 'B' },
        { text: 'Showing hidden depths beneath the humor', type: 'C' },
        { text: 'Redemption or proving everyone wrong', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you handle being the center of attention?',
      options: [
        { text: 'Natural - I was born for this', type: 'A' },
        { text: 'Uncomfortable but I manage', type: 'B' },
        { text: 'Love it - attention is my fuel', type: 'C' },
        { text: 'Command it on my own terms', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your movie would be:',
      options: [
        { text: 'An epic hero\'s journey', type: 'A' },
        { text: 'A complex thriller with twists', type: 'B' },
        { text: 'A feel-good adventure comedy', type: 'C' },
        { text: 'A genre-defying indie film', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Chosen One',
      emoji: '⭐',
      description: 'You\'re the classic protagonist - destined for greatness, naturally charismatic, and rising to every challenge. People look to you for leadership and inspiration. Your story is epic, your arc is triumphant.',
      traits: ['Natural leader', 'Charismatic', 'Determined', 'Inspiring'],
      strengths: ['Commands respect', 'Rises to challenges', 'Brings people together', 'Born protagonist energy'],
      weaknesses: ['Might take on too much alone', 'Pressure to always lead', 'Hard to be vulnerable'],
      tips: ['Let others shine too', 'It\'s okay to not always be the hero', 'Your story needs supporting characters'],
    },
    B: {
      type: 'B',
      title: 'The Mysterious Anti-Hero',
      emoji: '🌙',
      description: 'You\'re the complex character everyone wants to understand. Quiet competence, hidden depths, and a backstory that explains everything. You don\'t seek the spotlight but you command attention when it matters.',
      traits: ['Mysterious', 'Competent', 'Complex', 'Independent'],
      strengths: ['Intriguing to others', 'Highly capable', 'Don\'t need validation', 'Depth of character'],
      weaknesses: ['Can seem distant', 'People want more access', 'Might isolate too much'],
      tips: ['Let people in sometimes', 'Your mystery is appealing but so is vulnerability', 'Connection is part of the story'],
    },
    C: {
      type: 'C',
      title: 'The Scene Stealer',
      emoji: '🎭',
      description: 'You might not be the technical protagonist but let\'s be honest - you\'re everyone\'s favorite character. You bring joy, humor, and heart to every scene. The movie would be boring without you.',
      traits: ['Entertaining', 'Joyful', 'Memorable', 'Heart of the story'],
      strengths: ['Makes everything better', 'Universally loved', 'Brings levity', 'Unexpected depth'],
      weaknesses: ['Might hide behind humor', 'Not always taken seriously', 'Supporting role can feel limiting'],
      tips: ['Your emotional moments hit harder because of your humor', 'You ARE main character material', 'Show your depths proudly'],
    },
    D: {
      type: 'D',
      title: 'The Wildcard',
      emoji: '🃏',
      description: 'You\'re unpredictable in the best way. Just when people think they have you figured out, you surprise them. You could be the villain, the unlikely hero, or both. Your story doesn\'t follow the formula.',
      traits: ['Unpredictable', 'Complex', 'Unconventional', 'Compelling'],
      strengths: ['Never boring', 'Defies expectations', 'Fascinating character', 'Unique perspective'],
      weaknesses: ['Hard to categorize', 'Can confuse people', 'Might be misunderstood'],
      tips: ['Your complexity is your superpower', 'Not everyone will get you and that\'s fine', 'Write your own story'],
    },
  },
};

export default testData;
