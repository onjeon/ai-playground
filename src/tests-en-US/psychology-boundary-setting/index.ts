// How Good Are You at Setting Boundaries?
// Discover your boundary-setting style

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-boundary-setting',
  title: 'How Good Are You at Setting Boundaries?',
  description: 'Find out if you\'re a boundary boss or a pushover - and everything in between!',
  category: 'psychology',
  emoji: '🚧',
  color: 'from-teal-400 to-cyan-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'A friend asks for a favor you really don\'t want to do:',
      options: [
        { text: 'Say no clearly and without guilt', type: 'A' },
        { text: 'Say no but explain myself a lot', type: 'B' },
        { text: 'Say yes, then resent it later', type: 'C' },
        { text: 'Make up an excuse to avoid saying no directly', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone keeps interrupting you. You:',
      options: [
        { text: 'Stop them and finish your point', type: 'A' },
        { text: 'Wait for a pause and try again', type: 'B' },
        { text: 'Just let them talk', type: 'C' },
        { text: 'Get frustrated but don\'t say anything', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your boss asks you to work late AGAIN:',
      options: [
        { text: 'Decline if I have plans or need rest', type: 'A' },
        { text: 'Negotiate or ask if it can wait', type: 'B' },
        { text: 'Say yes every time, I can\'t say no to my boss', type: 'C' },
        { text: 'Agree but complain about it to others', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you feel when you say no?',
      options: [
        { text: 'Fine - it\'s a complete sentence', type: 'A' },
        { text: 'A little guilty but I know it\'s okay', type: 'B' },
        { text: 'So guilty I usually cave', type: 'C' },
        { text: 'Anxious about how they\'ll react', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Someone shares your personal info without asking:',
      options: [
        { text: 'Address it directly - that wasn\'t okay', type: 'A' },
        { text: 'Mention it privately later', type: 'B' },
        { text: 'Let it go, don\'t want to make it a thing', type: 'C' },
        { text: 'Feel violated but say nothing', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your energy for other people\'s problems:',
      options: [
        { text: 'I help when I can but protect my peace', type: 'A' },
        { text: 'I try to balance helping and self-care', type: 'B' },
        { text: 'I take on everyone\'s problems as my own', type: 'C' },
        { text: 'I want to help but it drains me completely', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Someone crosses a line with you. You typically:',
      options: [
        { text: 'Call it out immediately', type: 'A' },
        { text: 'Address it when I\'ve processed it', type: 'B' },
        { text: 'Wonder if I\'m overreacting and say nothing', type: 'C' },
        { text: 'Vent to others but avoid confronting them', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When it comes to your time:',
      options: [
        { text: 'It\'s valuable - I\'m selective about how I spend it', type: 'A' },
        { text: 'I try to balance my needs with others\'', type: 'B' },
        { text: 'Other people\'s needs usually come first', type: 'C' },
        { text: 'I overcommit and then feel overwhelmed', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Do people tend to take advantage of you?',
      options: [
        { text: 'Rarely - I don\'t let that happen', type: 'A' },
        { text: 'Sometimes, but I\'m getting better', type: 'B' },
        { text: 'Honestly, yes, more than I\'d like', type: 'C' },
        { text: 'I\'m not sure, but I often feel used', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your boundary philosophy:',
      options: [
        { text: 'No is a complete sentence', type: 'A' },
        { text: 'Boundaries are important but require balance', type: 'B' },
        { text: 'I struggle with boundaries, honestly', type: 'C' },
        { text: 'I know I need them but feel bad enforcing them', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Boundary Boss',
      emoji: '👑',
      description: 'You\'re a boundaries champion! You know your limits, communicate them clearly, and don\'t feel guilty about it. You protect your time, energy, and peace. This is self-respect goals!',
      traits: ['Self-assured', 'Direct', 'Protective of energy', 'Clear communicator'],
      strengths: ['Doesn\'t get taken advantage of', 'Respects own needs', 'Models healthy behavior', 'Low resentment'],
      weaknesses: ['May seem rigid', 'Could be gentler sometimes', 'Others might feel shut out'],
      tips: ['Flexibility has its place', 'Explain the why when helpful', 'Stay open to exceptions'],
    },
    B: {
      type: 'B',
      title: 'Balanced Boundary-Setter',
      emoji: '⚖️',
      description: 'You\'re finding your balance! You understand boundaries matter and you\'re working on setting them. Sometimes you waver, but overall you\'re moving in the right direction.',
      traits: ['Self-aware', 'Growing', 'Considerate', 'Learning to say no'],
      strengths: ['Balances self and others', 'Thoughtful approach', 'Open to growth', 'Flexible'],
      weaknesses: ['May over-explain', 'Sometimes caves', 'Can second-guess yourself'],
      tips: ['Trust yourself more', 'You don\'t owe explanations', 'Practice makes permanent'],
    },
    C: {
      type: 'C',
      title: 'Boundary Beginner',
      emoji: '🌱',
      description: 'Boundaries? What boundaries? You tend to put others first, say yes when you mean no, and feel responsible for everyone\'s feelings. This is exhausting! Your needs matter too.',
      traits: ['People-pleasing', 'Self-sacrificing', 'Difficulty saying no', 'Over-giving'],
      strengths: ['Kind and generous', 'Others feel cared for', 'Empathetic', 'Team player'],
      weaknesses: ['Gets taken advantage of', 'Burns out', 'Builds resentment', 'Loses self'],
      tips: ['Start with small no\'s', 'Your needs are valid', 'Saying no isn\'t mean', 'You can\'t pour from empty'],
    },
    D: {
      type: 'D',
      title: 'Conflicted Boundary-Setter',
      emoji: '🎭',
      description: 'You know boundaries are important but enforcing them feels impossible. You might agree, then feel resentful. You avoid confrontation but end up frustrated. The intention is there - now for the follow-through!',
      traits: ['Aware but struggling', 'Avoidant', 'Internal conflict', 'Passive tendencies'],
      strengths: ['Recognizes the problem', 'Has good intentions', 'Non-confrontational', 'Sensitive to others'],
      weaknesses: ['Resentment builds', 'Indirect communication', 'Avoids necessary conversations', 'Feels frustrated'],
      tips: ['Direct is kinder than indirect', 'Small steps count', 'It gets easier with practice', 'Resentment is a signal'],
    },
  },
};

export default testData;
