// Your Love Language
// How do you give and receive love?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'psychology-love-language',
  title: 'What\'s Your Love Language?',
  description: 'Discover how you prefer to give and receive love - because we all speak love differently!',
  category: 'psychology',
  emoji: '💕',
  color: 'from-pink-400 to-red-500',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You feel most loved when your partner:',
      options: [
        { text: 'Tells you how much you mean to them', type: 'A' },
        { text: 'Plans a special date or activity together', type: 'B' },
        { text: 'Surprises you with a thoughtful gift', type: 'C' },
        { text: 'Does something helpful without being asked', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'After a long day, you\'d love it if someone:',
      options: [
        { text: 'Asked about your day and really listened', type: 'A' },
        { text: 'Cuddled with you on the couch', type: 'B' },
        { text: 'Brought you your favorite snack', type: 'C' },
        { text: 'Took care of dinner so you could relax', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'What hurts most in a relationship?',
      options: [
        { text: 'Being criticized or not hearing "I love you"', type: 'A' },
        { text: 'When they\'re always too busy for quality time', type: 'B' },
        { text: 'Forgetting special occasions or milestones', type: 'C' },
        { text: 'When they don\'t notice what you need help with', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How do you typically show love to others?',
      options: [
        { text: 'Compliments, encouragement, and loving words', type: 'A' },
        { text: 'Giving them your undivided attention', type: 'B' },
        { text: 'Finding the perfect gift that shows you get them', type: 'C' },
        { text: 'Doing things to make their life easier', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your ideal anniversary celebration:',
      options: [
        { text: 'A heartfelt letter or speech about your relationship', type: 'A' },
        { text: 'A whole day spent together doing something special', type: 'B' },
        { text: 'A meaningful gift they\'ll treasure', type: 'C' },
        { text: 'Them planning everything so you can just enjoy', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'What makes you feel most appreciated at work?',
      options: [
        { text: 'Verbal recognition and praise', type: 'A' },
        { text: 'One-on-one time with your manager', type: 'B' },
        { text: 'Bonuses, perks, or tangible rewards', type: 'C' },
        { text: 'When someone helps with your workload', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'In friendships, you value most:',
      options: [
        { text: 'Friends who hype you up and express love', type: 'A' },
        { text: 'Friends who make time for hangouts', type: 'B' },
        { text: 'Friends who remember small things about you', type: 'C' },
        { text: 'Friends who show up when you need help', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you\'re upset, you\'d most want someone to:',
      options: [
        { text: 'Say comforting things and validate your feelings', type: 'A' },
        { text: 'Just sit with you and be present', type: 'B' },
        { text: 'Bring you something to cheer you up', type: 'C' },
        { text: 'Fix the problem or handle things for you', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'What\'s your love language red flag in a partner?',
      options: [
        { text: 'They never say nice things or compliment you', type: 'A' },
        { text: 'They\'re always on their phone when you\'re together', type: 'B' },
        { text: 'They never remember important dates or preferences', type: 'C' },
        { text: 'They never lift a finger to help out', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If you could only have one forever, you\'d choose:',
      options: [
        { text: 'Someone who tells you they love you daily', type: 'A' },
        { text: 'Someone who always makes time for you', type: 'B' },
        { text: 'Someone who\'s thoughtful with surprises', type: 'C' },
        { text: 'Someone who takes care of you in practical ways', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Words of Affirmation',
      emoji: '💬',
      description: 'You need to hear it to believe it! Verbal expressions of love - compliments, "I love you"s, and words of encouragement - fill your love tank. A sweet text can make your whole day.',
      traits: ['Values verbal expression', 'Responsive to compliments', 'Communicative', 'Needs verbal reassurance'],
      strengths: ['Great at expressing feelings', 'Makes others feel valued', 'Builds people up with words'],
      weaknesses: ['Criticism hits hard', 'May need frequent reassurance', 'Silence can feel like rejection'],
      tips: ['Tell partners what you need to hear', 'Write love notes', 'Don\'t assume - speak your love'],
    },
    B: {
      type: 'B',
      title: 'Quality Time',
      emoji: '⏰',
      description: 'Undivided attention is your love currency! You feel most loved when someone gives you their full presence - no phones, no distractions, just real connection. Time together is the ultimate gift.',
      traits: ['Values presence', 'Needs undivided attention', 'Relationship-focused', 'Hates distractions'],
      strengths: ['Fully present in relationships', 'Creates meaningful moments', 'Prioritizes connection'],
      weaknesses: ['Distracted partners hurt you', 'May feel neglected easily', 'Quality time needs vary'],
      tips: ['Schedule dedicated time together', 'Put phones away', 'Plan activities you both enjoy'],
    },
    C: {
      type: 'C',
      title: 'Receiving Gifts',
      emoji: '🎁',
      description: 'It\'s not about materialism - it\'s about thoughtfulness! Gifts show someone was thinking about you. The perfect present says "I know you, I get you, and I thought of you."',
      traits: ['Values thoughtfulness', 'Treasures sentimental items', 'Notices the little things', 'Appreciates effort'],
      strengths: ['Amazing gift-giver', 'Remembers special occasions', 'Finds meaning in symbols'],
      weaknesses: ['Forgotten dates really hurt', 'May seem materialistic (you\'re not!)', 'Effort matters more than cost'],
      tips: ['Create wishlists to help partners', 'Express that thought counts most', 'Keep meaningful mementos'],
    },
    D: {
      type: 'D',
      title: 'Acts of Service',
      emoji: '🛠️',
      description: 'Actions speak louder than words for you! When someone does something helpful - cooking dinner, running errands, fixing things - that\'s how you feel loved. "Let me do that for you" is your love language.',
      traits: ['Values helpfulness', 'Appreciates practical support', 'Shows love through doing', 'Actions-oriented'],
      strengths: ['Always helping others', 'Reliable and dependable', 'Shows love through actions'],
      weaknesses: ['May overdo for others', 'Frustrated when help isn\'t reciprocated', 'Laziness feels like not caring'],
      tips: ['Ask for help specifically', 'Appreciate the help you receive', 'Don\'t keep score'],
    },
  },
};

export default testData;
