// Are You a Perfectionist?
// Discover your perfectionism level

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-perfectionism',
  title: 'Are You a Perfectionist?',
  description: 'Find out if you\'re chasing excellence or drowning in unrealistic standards. There\'s a difference!',
  category: 'psychology',
  emoji: '✨',
  color: 'from-violet-400 to-purple-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You made a small mistake at work. You:',
      options: [
        { text: 'Fix it and move on - everyone makes mistakes', type: 'A' },
        { text: 'Feel bad briefly, then let it go', type: 'B' },
        { text: 'Replay it in my head and worry about it', type: 'C' },
        { text: 'Beat myself up about it for days', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you see something you made:',
      options: [
        { text: 'I\'m proud of what I accomplished', type: 'A' },
        { text: 'I see both good and room for improvement', type: 'B' },
        { text: 'I mostly see the flaws', type: 'C' },
        { text: 'All I see is what\'s wrong with it', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your standards for yourself are:',
      options: [
        { text: 'Reasonable and achievable', type: 'A' },
        { text: 'High but fair', type: 'B' },
        { text: 'Very high, sometimes too high', type: 'C' },
        { text: 'Impossible - nothing is ever good enough', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When starting a new project:',
      options: [
        { text: 'I dive in and figure it out', type: 'A' },
        { text: 'I plan a bit then start', type: 'B' },
        { text: 'I procrastinate because it needs to be perfect', type: 'C' },
        { text: 'I often don\'t start because I can\'t do it perfectly', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Someone criticizes your work:',
      options: [
        { text: 'I consider it and take what\'s useful', type: 'A' },
        { text: 'It stings but I can handle it', type: 'B' },
        { text: 'I take it very personally', type: 'C' },
        { text: 'It confirms I\'m not good enough', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you feel about "good enough"?',
      options: [
        { text: 'Sometimes good enough is perfect', type: 'A' },
        { text: 'It\'s okay depending on the situation', type: 'B' },
        { text: 'I struggle to accept it', type: 'C' },
        { text: 'Good enough is failure to me', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your relationship with failure:',
      options: [
        { text: 'It\'s how we learn and grow', type: 'A' },
        { text: 'It\'s hard but I can handle it', type: 'B' },
        { text: 'I avoid it at all costs', type: 'C' },
        { text: 'Failure defines me as a person', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'How long do you spend on tasks?',
      options: [
        { text: 'A reasonable amount then I\'m done', type: 'A' },
        { text: 'A bit extra to make it good', type: 'B' },
        { text: 'Way too long, tweaking everything', type: 'C' },
        { text: 'Forever - it\'s never finished to my standards', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your self-talk after a mistake:',
      options: [
        { text: 'I\'m human, it happens', type: 'A' },
        { text: 'I\'ll do better next time', type: 'B' },
        { text: 'Why can\'t I do anything right?', type: 'C' },
        { text: 'I\'m such a failure', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Does perfectionism affect your life?',
      options: [
        { text: 'Not really - I have healthy standards', type: 'A' },
        { text: 'Sometimes I push too hard', type: 'B' },
        { text: 'Yes, it causes stress and procrastination', type: 'C' },
        { text: 'It controls my life and causes suffering', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Healthy Achiever',
      emoji: '🌟',
      description: 'You have healthy standards without the toxic perfectionism! You strive for excellence while accepting that mistakes happen. You can finish things, handle criticism, and feel proud of your work. Goals!',
      traits: ['High standards', 'Self-compassionate', 'Realistic', 'Productive'],
      strengths: ['Gets things done', 'Doesn\'t over-stress', 'Handles feedback well', 'Balanced self-view'],
      weaknesses: ['May seem too relaxed to perfectionists', 'Could push a bit more sometimes'],
      tips: ['You\'ve got this figured out', 'Model this for others', 'Keep that healthy balance'],
    },
    B: {
      type: 'B',
      title: 'High Standards',
      emoji: '📊',
      description: 'You have high standards but can usually keep them in check. You want things to be good and push yourself, but you can also accept "good enough" when needed. Watch that it doesn\'t tip into unhealthy territory.',
      traits: ['Ambitious', 'Quality-focused', 'Sometimes hard on self', 'Driven'],
      strengths: ['Produces quality work', 'Motivated', 'Can finish things', 'Takes pride in work'],
      weaknesses: ['Can be too hard on yourself', 'May overwork sometimes', 'Criticism hits harder'],
      tips: ['Notice when standards become unrealistic', 'Done is better than perfect', 'Be kind to yourself'],
    },
    C: {
      type: 'C',
      title: 'Struggling Perfectionist',
      emoji: '😰',
      description: 'Perfectionism has its grip on you. You set impossible standards, procrastinate out of fear, and are never satisfied with your work. You\'re probably exhausted. It\'s time to break free from these patterns.',
      traits: ['Self-critical', 'Procrastinator', 'Never satisfied', 'Fear of failure'],
      strengths: ['Eye for detail', 'High-quality when you finish', 'Cares deeply', 'Notices everything'],
      weaknesses: ['Paralyzed by standards', 'Chronic stress', 'Hard to finish things', 'Self-esteem tied to output'],
      tips: ['Perfect doesn\'t exist', 'Done is better than perfect', 'Mistakes are human', 'Consider where this comes from'],
    },
    D: {
      type: 'D',
      title: 'Maximum Perfectionist',
      emoji: '🌀',
      description: 'Perfectionism is running your life. Nothing is ever good enough, failure feels catastrophic, and you might avoid things entirely because you can\'t do them perfectly. This is causing real suffering. You deserve freedom from this.',
      traits: ['Paralyzed by standards', 'Severe self-criticism', 'Avoidant', 'All-or-nothing thinking'],
      strengths: ['Incredible attention to detail', 'Deeply cares about quality', 'High potential if freed from perfectionism'],
      weaknesses: ['Can\'t enjoy achievements', 'Chronic anxiety', 'Avoids challenges', 'Self-worth destroyed'],
      tips: ['Please consider therapy', 'This isn\'t sustainable', 'You are not your achievements', 'Imperfect action beats perfect inaction'],
    },
  },
};

export default testData;
