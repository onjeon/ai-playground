// Your Financial Anxiety Level
// How much does money stress you out?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'money-financial-anxiety',
  title: 'Your Financial Anxiety Level',
  description: 'Does checking your bank account fill you with dread? Let\'s measure your money anxiety!',
  category: 'money',
  emoji: '😰',
  color: 'from-red-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When you think about checking your bank account:',
      options: [
        { text: 'No stress - I check regularly, know what\'s there', type: 'A' },
        { text: 'Fine, usually no surprises', type: 'B' },
        { text: 'Mild dread, sometimes avoid looking', type: 'C' },
        { text: 'Genuine fear - I\'d rather not know', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How often do you think about money?',
      options: [
        { text: 'When relevant - bills due, budgeting time', type: 'A' },
        { text: 'A few times a week, normal amount', type: 'B' },
        { text: 'Daily, often with worry', type: 'C' },
        { text: 'Constantly, it consumes me', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When an unexpected expense comes up:',
      options: [
        { text: 'Handle it from emergency fund, no stress', type: 'A' },
        { text: 'Annoying but manageable', type: 'B' },
        { text: 'Immediate stress, figure it out mode', type: 'C' },
        { text: 'Full panic, this could break me', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How does money affect your sleep?',
      options: [
        { text: 'It doesn\'t - finances are under control', type: 'A' },
        { text: 'Rarely, maybe before big purchases', type: 'B' },
        { text: 'Sometimes lie awake worrying about bills', type: 'C' },
        { text: 'Money stress keeps me up regularly', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When bills arrive:',
      options: [
        { text: 'Already budgeted, no surprise', type: 'A' },
        { text: 'Pay them, move on', type: 'B' },
        { text: 'Stress about how to pay them', type: 'C' },
        { text: 'Avoid opening them as long as possible', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Talking about money with others:',
      options: [
        { text: 'Comfortable, discuss finances openly', type: 'A' },
        { text: 'Can talk about it if needed', type: 'B' },
        { text: 'Uncomfortable, avoid the topic', type: 'C' },
        { text: 'Too shameful/stressful to discuss', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your relationship with your credit score:',
      options: [
        { text: 'Know it, it\'s good, check occasionally', type: 'A' },
        { text: 'Aware of it, nothing alarming', type: 'B' },
        { text: 'Avoid looking, probably not great', type: 'C' },
        { text: 'Too scared to find out', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you make a purchase:',
      options: [
        { text: 'Know if I can afford it, no guilt', type: 'A' },
        { text: 'Usually fine, occasional hesitation', type: 'B' },
        { text: 'Often feel guilty even for necessities', type: 'C' },
        { text: 'Constant guilt and anxiety around spending', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Thinking about your financial future:',
      options: [
        { text: 'Confident - I\'m on track', type: 'A' },
        { text: 'Cautiously optimistic', type: 'B' },
        { text: 'Worried - don\'t know if I\'ll be okay', type: 'C' },
        { text: 'Terrified - try not to think about it', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Overall, money makes you feel:',
      options: [
        { text: 'Empowered - it\'s a tool I control', type: 'A' },
        { text: 'Neutral - it is what it is', type: 'B' },
        { text: 'Anxious - constant low-level stress', type: 'C' },
        { text: 'Overwhelmed - it controls my life', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Financially Zen',
      emoji: '🧘',
      description: 'Money doesn\'t stress you out because you\'ve got it handled. You check accounts confidently, unexpected expenses don\'t derail you, and you sleep peacefully. You\'ve achieved what most people dream of - financial peace of mind.',
      traits: ['Calm', 'In control', 'Prepared', 'Secure'],
      strengths: ['No money anxiety', 'Financial confidence', 'Peace of mind'],
      weaknesses: ['Might not relate to others\' struggles'],
      tips: ['Appreciate your position', 'Help others if you can', 'Keep doing what you\'re doing'],
    },
    B: {
      type: 'B',
      title: 'Manageable Concern',
      emoji: '😌',
      description: 'You have a healthy relationship with money - some concern is normal, but it doesn\'t consume you. You think about finances a reasonable amount and handle stress appropriately. This is what functional looks like.',
      traits: ['Balanced', 'Appropriate concern', 'Functional', 'Normal'],
      strengths: ['Healthy worry level', 'Deals with issues as they arise'],
      weaknesses: ['Occasional stress'],
      tips: ['You\'re in a good place', 'Keep maintaining this balance'],
    },
    C: {
      type: 'C',
      title: 'Money Worrier',
      emoji: '😟',
      description: 'Money stress is a constant companion. You think about it a lot, avoid checking accounts, and feel guilty about spending. The anxiety is real and it affects your quality of life. You\'re far from alone in this.',
      traits: ['Anxious', 'Avoidant', 'Worried', 'Stressed'],
      strengths: ['Aware there\'s an issue'],
      weaknesses: ['Anxiety affecting daily life', 'Avoidance makes it worse'],
      tips: ['Knowledge reduces fear - check accounts regularly', 'Small steps toward control help', 'Consider talking to someone'],
    },
    D: {
      type: 'D',
      title: 'Financial Anxiety Crisis',
      emoji: '🆘',
      description: 'Money is a major source of stress and fear in your life. You avoid, you panic, you lose sleep. The anxiety is overwhelming and affects your wellbeing. This level of financial stress is serious and you deserve support.',
      traits: ['Overwhelmed', 'Avoidant', 'Fearful', 'Struggling'],
      strengths: ['You took this quiz - that\'s a start'],
      weaknesses: ['Severe anxiety affecting life', 'Avoidance cycle'],
      tips: ['Please consider professional help', 'Free financial counseling exists', 'You don\'t have to face this alone', 'Your mental health matters'],
    },
  },
};

export default testData;
