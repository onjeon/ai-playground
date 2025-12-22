// Your Apology Style
// How do you say sorry?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-apology-style',
  title: 'Your Apology Style',
  description: 'Do you over-apologize, barely apologize, or have it perfectly figured out? Let\'s see!',
  category: 'communication',
  emoji: '🙏',
  color: 'from-blue-500 to-indigo-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'You accidentally bump into someone at the store. You:',
      options: [
        { text: '"Sorry!" and move on quickly', type: 'A' },
        { text: '"Oh my god, I\'m so sorry, are you okay, I\'m sorry!"', type: 'B' },
        { text: '"Oops" and keep walking', type: 'C' },
        { text: 'Apologize once sincerely and check if they\'re okay', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You\'re late to meet a friend. Your apology:',
      options: [
        { text: '"Sorry I\'m late" and explain briefly', type: 'A' },
        { text: 'Ten minutes of profuse apologizing and guilt', type: 'B' },
        { text: 'Act like nothing happened', type: 'C' },
        { text: 'Apologize once, acknowledge impact, move forward', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How often do you apologize for things that aren\'t your fault?',
      options: [
        { text: 'Sometimes, out of habit', type: 'A' },
        { text: 'Constantly - I apologize for everything', type: 'B' },
        { text: 'Never - why would I?', type: 'C' },
        { text: 'Rarely - I apologize when I\'m actually responsible', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When you\'ve genuinely hurt someone:',
      options: [
        { text: 'Say sorry and hope they forgive quickly', type: 'A' },
        { text: 'Apologize repeatedly, feel awful for days', type: 'B' },
        { text: 'Struggle to say the words', type: 'C' },
        { text: 'Apologize sincerely, take responsibility, ask how to make it right', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your relationship with the word "sorry":',
      options: [
        { text: 'Use it regularly, fairly normal', type: 'A' },
        { text: 'It\'s basically a verbal tic, I say it constantly', type: 'B' },
        { text: 'Almost physically difficult to say', type: 'C' },
        { text: 'Use it intentionally when I mean it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Someone tells you your apology hurt their feelings:',
      options: [
        { text: '"Sorry!" wait, that\'s not right...', type: 'A' },
        { text: 'Apologize for apologizing wrong, spiral', type: 'B' },
        { text: 'Get defensive - I already said sorry', type: 'C' },
        { text: 'Listen, understand what was missing, try again', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Do you say "sorry" when asking a question?',
      options: [
        { text: 'Sometimes, depends on the situation', type: 'A' },
        { text: '"Sorry, can I ask..." - yes, always', type: 'B' },
        { text: 'Never, why would I?', type: 'C' },
        { text: 'Only if I\'m actually interrupting something', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'After apologizing, you:',
      options: [
        { text: 'Move on pretty quickly', type: 'A' },
        { text: 'Continue feeling guilty and bringing it up', type: 'B' },
        { text: 'Consider the matter closed, no discussion needed', type: 'C' },
        { text: 'Make sure the other person feels heard, then move forward', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone asks you to apologize and you don\'t think you should:',
      options: [
        { text: 'Apologize anyway to keep the peace', type: 'A' },
        { text: 'Apologize and feel resentful about it', type: 'B' },
        { text: 'Refuse to apologize - I did nothing wrong', type: 'C' },
        { text: 'Discuss it - maybe there\'s something I\'m missing', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ideal apology includes:',
      options: [
        { text: 'The word sorry and moving on', type: 'A' },
        { text: 'Multiple sorries, explanations, and promises', type: 'B' },
        { text: 'Minimal words, the less said the better', type: 'C' },
        { text: 'Acknowledging the harm, taking responsibility, making amends', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Quick Apologizer',
      emoji: '⚡',
      description: 'You apologize easily and quickly - which is great! But sometimes your apologies might feel automatic or surface-level. You say sorry and want to move on ASAP. Efficient, but could go deeper.',
      traits: ['Quick', 'Efficient', 'Surface-level', 'Move-on mentality'],
      strengths: ['Apologizes easily', 'Doesn\'t hold grudges', 'Keeps things moving'],
      weaknesses: ['May not fully process', 'Others might want more depth'],
      tips: ['Slow down sometimes', 'Make sure the other person feels heard', 'Quick isn\'t always enough'],
    },
    B: {
      type: 'B',
      title: 'The Over-Apologizer',
      emoji: '😰',
      description: 'You apologize for EVERYTHING - existing, breathing, taking up space. "Sorry" is your most-used word. Your guilt is real, but over-apologizing can actually make things worse and undermines genuine apologies.',
      traits: ['Excessive', 'Guilty', 'People-pleasing', 'Anxious'],
      strengths: ['Never avoids accountability'],
      weaknesses: ['Apologizes for things that aren\'t your fault', 'Drains meaning from "sorry"', 'Makes others uncomfortable'],
      tips: ['Replace "sorry" with "thank you" sometimes', 'You don\'t owe the world an apology for existing', 'Save sorry for when it\'s needed'],
    },
    C: {
      type: 'C',
      title: 'The Reluctant Apologizer',
      emoji: '😤',
      description: 'Apologizing? Sounds fake. You struggle to say sorry even when you know you should. It\'s not that you don\'t feel bad - the words just... don\'t come out. This creates relationship friction.',
      traits: ['Stubborn', 'Proud', 'Avoidant', 'Defensive'],
      strengths: ['Doesn\'t over-apologize'],
      weaknesses: ['Hurts relationships', 'Seems unapologetic', 'Creates conflict'],
      tips: ['A sincere apology is strength, not weakness', 'People need to hear the words', 'Practice - it gets easier'],
    },
    D: {
      type: 'D',
      title: 'The Healthy Apologizer',
      emoji: '✨',
      description: 'You\'ve cracked the apology code! You say sorry when you mean it, take genuine responsibility, and make sure the other person feels heard. You don\'t over-apologize or under-apologize. Gold star.',
      traits: ['Thoughtful', 'Sincere', 'Accountable', 'Balanced'],
      strengths: ['Meaningful apologies', 'Takes real responsibility', 'Maintains relationships'],
      weaknesses: ['Might set high expectations'],
      tips: ['You\'re doing it right', 'Keep modeling healthy communication', 'Help others learn this skill'],
    },
  },
};

export default testData;
