// How Much External Validation Do You Need?
// Discover your validation style

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-validation-need',
  title: 'How Much External Validation Do You Need?',
  description: 'Find out if your self-worth comes from within or if you need others to tell you you\'re okay.',
  category: 'psychology',
  emoji: '👏',
  color: 'from-amber-400 to-yellow-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You post something online and get no likes. You feel:',
      options: [
        { text: 'Fine - I posted it for me anyway', type: 'A' },
        { text: 'A little disappointed but it\'s okay', type: 'B' },
        { text: 'Bad - what\'s wrong with it?', type: 'C' },
        { text: 'Like deleting it immediately', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When making a big decision, you:',
      options: [
        { text: 'Trust my gut and decide', type: 'A' },
        { text: 'Get some input but ultimately decide myself', type: 'B' },
        { text: 'Need multiple people to confirm it\'s right', type: 'C' },
        { text: 'Can\'t decide until others approve', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Someone doesn\'t like your outfit. You:',
      options: [
        { text: 'That\'s their opinion - I like it', type: 'A' },
        { text: 'Might think about it but probably keep wearing it', type: 'B' },
        { text: 'Feel self-conscious the rest of the day', type: 'C' },
        { text: 'Want to go home and change immediately', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your sense of self-worth is based on:',
      options: [
        { text: 'How I feel about myself internally', type: 'A' },
        { text: 'Mostly internal with some external input', type: 'B' },
        { text: 'Heavily on what others think of me', type: 'C' },
        { text: 'Almost entirely on others\' opinions', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'You finished a project you\'re proud of. You feel good when:',
      options: [
        { text: 'I know I did good work - that\'s enough', type: 'A' },
        { text: 'I\'m proud but positive feedback is nice too', type: 'B' },
        { text: 'Others tell me it\'s good', type: 'C' },
        { text: 'I can\'t feel proud until others validate it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When you don\'t get praised for something you did:',
      options: [
        { text: 'I know my worth regardless', type: 'A' },
        { text: 'A bit disappointing but I move on', type: 'B' },
        { text: 'I wonder what I did wrong', type: 'C' },
        { text: 'I feel invisible and unappreciated', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How often do you check for likes/reactions on posts?',
      options: [
        { text: 'Rarely - I don\'t really care', type: 'A' },
        { text: 'Occasionally out of curiosity', type: 'B' },
        { text: 'Frequently - it affects my mood', type: 'C' },
        { text: 'Constantly - my worth depends on it', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Someone compliments you. You think:',
      options: [
        { text: 'Thanks, I agree!', type: 'A' },
        { text: 'That\'s nice to hear', type: 'B' },
        { text: 'Finally, confirmation I\'m okay', type: 'C' },
        { text: 'I need more of these to feel good', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you share an opinion and others disagree:',
      options: [
        { text: 'That\'s fine - people can disagree', type: 'A' },
        { text: 'I consider their view but stand by mine', type: 'B' },
        { text: 'I start doubting myself', type: 'C' },
        { text: 'I change my opinion to match theirs', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How would you describe your validation needs?',
      options: [
        { text: 'I validate myself - others\' opinions are bonus', type: 'A' },
        { text: 'I like validation but don\'t need it', type: 'B' },
        { text: 'I need more validation than I\'d like to admit', type: 'C' },
        { text: 'I can\'t function without constant validation', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Self-Validated',
      emoji: '💎',
      description: 'Your worth comes from within! You don\'t need others to tell you you\'re okay - you already know. External validation is nice but not necessary. This is a superpower in a world desperate for likes.',
      traits: ['Self-assured', 'Internally grounded', 'Independent', 'Secure'],
      strengths: ['Not swayed by opinions', 'Makes own decisions', 'Stable self-esteem', 'Authentic'],
      weaknesses: ['May seem arrogant to some', 'Might miss helpful feedback'],
      tips: ['Stay humble while confident', 'Some feedback is valuable', 'Model this for others'],
    },
    B: {
      type: 'B',
      title: 'Balanced Validator',
      emoji: '⚖️',
      description: 'You have a healthy balance! You mostly validate yourself but appreciate external confirmation too. You can take feedback without being destroyed by it. This is a sustainable sweet spot.',
      traits: ['Mostly self-assured', 'Open to feedback', 'Balanced', 'Adaptable'],
      strengths: ['Grounded sense of self', 'Uses feedback constructively', 'Flexible', 'Realistic'],
      weaknesses: ['Can tip toward needing more sometimes', 'May seek more validation under stress'],
      tips: ['Notice when you\'re seeking more', 'Trust yourself', 'External opinions are data, not truth'],
    },
    C: {
      type: 'C',
      title: 'External Validator',
      emoji: '🪞',
      description: 'You rely on others to know you\'re okay. Likes, compliments, and approval are your fuel. Without external validation, you doubt yourself. Your worth shouldn\'t depend so much on others.',
      traits: ['Approval-seeking', 'Self-doubt', 'Needs reassurance', 'Externally focused'],
      strengths: ['Values others\' opinions', 'Open to feedback', 'Socially attuned', 'Humble'],
      weaknesses: ['Mood tied to others\' responses', 'Can\'t self-validate', 'Exhausting to maintain', 'Vulnerable to manipulation'],
      tips: ['Practice self-validation daily', 'Limit social media checking', 'Your opinion of you matters most', 'Others can\'t fill your cup'],
    },
    D: {
      type: 'D',
      title: 'Validation-Dependent',
      emoji: '🌊',
      description: 'External validation runs your life. You can\'t feel okay without constant reassurance from others. Your mood, decisions, and self-worth are entirely dependent on outside input. This is an exhausting way to live.',
      traits: ['Constantly seeking approval', 'No internal sense of worth', 'Dependent on others', 'Insecure'],
      strengths: ['Very attuned to others', 'Values connection', 'Willing to please', 'Open to input'],
      weaknesses: ['No stable sense of self', 'Easily manipulated', 'Anxious constantly', 'Loses self in others'],
      tips: ['Therapy could really help', 'Your worth is inherent', 'Validation addiction is real', 'You are enough, even without proof'],
    },
  },
};

export default testData;
