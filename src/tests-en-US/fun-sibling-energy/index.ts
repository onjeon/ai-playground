// What Sibling Energy Do You Have?
// Oldest, middle, youngest, or only child vibes - regardless of actual birth order!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-sibling-energy',
  title: 'What Sibling Energy Do You Have?',
  description: 'Your birth order doesn\'t matter - which sibling energy do you RADIATE?',
  category: 'fun',
  emoji: '👨‍👩‍👧‍👦',
  color: 'from-rose-500 to-pink-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'In a group project, you naturally:',
      options: [
        { text: 'Take charge and delegate tasks', type: 'A' },
        { text: 'Mediate between different opinions', type: 'B' },
        { text: 'Charm your way into a lighter workload', type: 'C' },
        { text: 'Do your part independently, well', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When things go wrong:',
      options: [
        { text: 'I fix it - that\'s what I do', type: 'A' },
        { text: 'I help calm everyone down', type: 'B' },
        { text: 'Not my fault! But I\'ll help if asked nicely', type: 'C' },
        { text: 'I\'ll figure it out myself', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your relationship with attention:',
      options: [
        { text: 'I prefer giving direction over being the center', type: 'A' },
        { text: 'I\'m used to flying under the radar', type: 'B' },
        { text: 'Attention? Love it. Give me more.', type: 'C' },
        { text: 'Comfortable with attention but don\'t need it', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your communication style in conflict:',
      options: [
        { text: 'Direct - let\'s resolve this now', type: 'A' },
        { text: 'Try to see both sides, find compromise', type: 'B' },
        { text: 'Deflect with humor, avoid the serious talk', type: 'C' },
        { text: 'Process alone first, then discuss calmly', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How responsible do you feel for others?',
      options: [
        { text: 'Very - I feel like I need to take care of everyone', type: 'A' },
        { text: 'Somewhat - I help maintain group harmony', type: 'B' },
        { text: 'Not really - people can handle themselves', type: 'C' },
        { text: 'For myself mainly, others when I choose to', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your approach to rules:',
      options: [
        { text: 'Follow them and enforce them for others', type: 'A' },
        { text: 'Follow enough to avoid trouble', type: 'B' },
        { text: 'Rules are more like... guidelines', type: 'C' },
        { text: 'I make my own rules', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When meeting new people:',
      options: [
        { text: 'I take the lead in introductions', type: 'A' },
        { text: 'I observe first, then find my role', type: 'B' },
        { text: 'Naturally charming, make friends easily', type: 'C' },
        { text: 'Comfortable alone, selective about who I befriend', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your relationship with your parents (if applicable):',
      options: [
        { text: 'They had high expectations I tried to meet', type: 'A' },
        { text: 'Sometimes felt overlooked but found my own path', type: 'B' },
        { text: 'Got away with more than I probably should have', type: 'C' },
        { text: 'Close but independent, always self-sufficient', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'In your friend group, you\'re the one who:',
      options: [
        { text: 'Plans everything and makes sure it happens', type: 'A' },
        { text: 'Keeps the peace and checks in on everyone', type: 'B' },
        { text: 'Brings the fun and spontaneity', type: 'C' },
        { text: 'Shows up, contributes, but doesn\'t need the group', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you handle not getting your way?',
      options: [
        { text: 'Frustrated - I usually know what\'s best', type: 'A' },
        { text: 'Accept it - I\'m used to compromising', type: 'B' },
        { text: 'Try to charm or negotiate my way back', type: 'C' },
        { text: 'Fine - I don\'t need others to agree with me', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Oldest Child Energy',
      emoji: '👑',
      description: 'You radiate big sibling vibes! You\'re responsible, take-charge, and probably feel like you need to take care of everyone. People naturally look to you for direction. The weight of expectations is familiar to you.',
      traits: ['Responsible', 'Leader', 'Reliable', 'Perfectionist'],
      strengths: ['Natural leader', 'Dependable', 'Gets things done', 'People trust you'],
      weaknesses: ['Can be controlling', 'High expectations of self and others', 'Needs to relax'],
      tips: ['You don\'t have to carry everything', 'Let others lead sometimes', 'You\'re not responsible for everyone'],
    },
    B: {
      type: 'B',
      title: 'Middle Child Energy',
      emoji: '⚖️',
      description: 'You\'re the peacemaker, the diplomat, the one who sees all sides. You\'ve learned to navigate around others and find your own path. Sometimes overlooked, but you\'ve developed incredible emotional intelligence because of it.',
      traits: ['Diplomatic', 'Adaptable', 'Independent', 'Empathetic'],
      strengths: ['Great mediator', 'Flexible', 'Emotionally intelligent', 'Can connect with anyone'],
      weaknesses: ['May feel overlooked', 'People-pleasing tendencies', 'Identity questions'],
      tips: ['Your voice matters too', 'Take up space', 'You don\'t always have to compromise'],
    },
    C: {
      type: 'C',
      title: 'Youngest Child Energy',
      emoji: '🌟',
      description: 'You\'ve got baby of the family vibes! Charming, fun, and maybe got away with a few things growing up. You know how to work a room and people can\'t help but like you. Rules were made to be... interpreted.',
      traits: ['Charming', 'Fun', 'Carefree', 'Social'],
      strengths: ['Everyone likes you', 'Naturally charismatic', 'Brings joy', 'Adventurous'],
      weaknesses: ['May avoid responsibility', 'Can seem immature', 'Relies on charm too much'],
      tips: ['Responsibility isn\'t all bad', 'Charm won\'t always work', 'Step up when needed'],
    },
    D: {
      type: 'D',
      title: 'Only Child Energy',
      emoji: '💫',
      description: 'You\'re comfortable alone and have never needed others to define you. Independent, self-sufficient, and content in your own company. You march to your own drum and don\'t need anyone\'s permission.',
      traits: ['Independent', 'Self-sufficient', 'Mature', 'Content'],
      strengths: ['Comfortable alone', 'Strong sense of self', 'Self-reliant', 'Focused'],
      weaknesses: ['May seem aloof', 'Sharing can be hard', 'Sometimes misses group dynamics'],
      tips: ['Community is valuable too', 'Let people in', 'Collaboration can be fun'],
    },
  },
};

export default testData;
