// Your Conversation Style
// How do you actually communicate in social settings?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'social-conversation-style',
  title: 'Your Conversation Style',
  description: 'Deep diver? Small talker? Story dominator? Find out how you communicate and what people experience when talking to you.',
  category: 'social',
  emoji: '💬',
  color: 'from-emerald-500 to-teal-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'At a party, your conversations are usually:',
      options: [
        { text: 'Me telling stories with an audience', type: 'A' },
        { text: 'Deep one-on-one discussions in a corner', type: 'B' },
        { text: 'Light, fun chat bouncing between people', type: 'C' },
        { text: 'Mostly listening, occasional input', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone shares a problem with you:',
      options: [
        { text: 'I relate with my own experience, share solutions', type: 'A' },
        { text: 'I ask questions to understand, then offer perspective', type: 'B' },
        { text: 'I keep it light, try to cheer them up', type: 'C' },
        { text: 'I listen carefully and validate', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your small talk skills:',
      options: [
        { text: 'Great at it, can talk to anyone about anything', type: 'A' },
        { text: 'Skip it - let\'s get to the real stuff', type: 'B' },
        { text: 'Good at keeping things fun and light', type: 'C' },
        { text: 'Awkward but I try my best', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'In a group conversation:',
      options: [
        { text: 'I tend to do most of the talking', type: 'A' },
        { text: 'I engage when it\'s meaningful', type: 'B' },
        { text: 'I keep the energy up with reactions and jokes', type: 'C' },
        { text: 'I\'m mostly quiet, listening', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Silence in a conversation:',
      options: [
        { text: 'I fill it immediately, silence is awkward', type: 'A' },
        { text: 'Comfortable with it if we\'re processing', type: 'B' },
        { text: 'Quick joke or topic change to break it', type: 'C' },
        { text: 'Fine with me, I don\'t need constant talking', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'After meeting someone new, they probably think:',
      options: [
        { text: '"That person has a lot of stories"', type: 'A' },
        { text: '"What a thoughtful conversation"', type: 'B' },
        { text: '"They were fun and easy to talk to"', type: 'C' },
        { text: '"They seem nice but hard to read"', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your relationship with interrupting:',
      options: [
        { text: 'I interrupt when I\'m excited, can\'t help it', type: 'A' },
        { text: 'I try not to but engage actively', type: 'B' },
        { text: 'I match energy - interject in casual talk', type: 'C' },
        { text: 'I wait my turn, hate being interrupted', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Ideal conversation length:',
      options: [
        { text: 'Could talk for hours if it\'s flowing', type: 'A' },
        { text: 'Long and deep is best', type: 'B' },
        { text: 'Quick and frequent is fun', type: 'C' },
        { text: 'Quality over quantity, brief is fine', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your follow-up question game:',
      options: [
        { text: 'I pivot to related topics or my own stories', type: 'A' },
        { text: 'Strong - I dig deeper into what they shared', type: 'B' },
        { text: 'I keep it flowing but not too deep', type: 'C' },
        { text: 'I ask a few, then let them talk more', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel after a long conversation?',
      options: [
        { text: 'Energized - I love talking', type: 'A' },
        { text: 'Fulfilled if it was meaningful', type: 'B' },
        { text: 'Good if it was fun', type: 'C' },
        { text: 'A bit drained honestly', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Storyteller',
      emoji: '🎤',
      description: 'You hold court. Your stories are entertaining, you have a lot to say, and people usually enjoy listening. You\'re confident in conversation and never at a loss for words. Sometimes you need to make space for others.',
      traits: ['Expressive', 'Entertaining', 'Confident', 'Dominant'],
      strengths: ['Never awkward silence', 'Entertaining to listen to', 'Confident speaker', 'Memorable'],
      weaknesses: ['Can dominate conversations', 'Might not listen enough', 'Others need space too'],
      tips: ['Ask more questions', 'Let others finish', 'Listening is also connection'],
    },
    B: {
      type: 'B',
      title: 'The Deep Diver',
      emoji: '🔮',
      description: 'You skip the surface stuff and go straight to what matters. Your conversations are meaningful, you ask real questions, and people feel genuinely heard by you. Small talk is your enemy.',
      traits: ['Thoughtful', 'Meaningful', 'Good listener', 'Intentional'],
      strengths: ['Creates genuine connection', 'People feel understood', 'Quality over quantity', 'Asks great questions'],
      weaknesses: ['Small talk is painful', 'Can be intense for casual settings', 'Not everyone wants depth'],
      tips: ['Some surface chat is okay', 'Match others\' energy sometimes', 'Your depth is a gift'],
    },
    C: {
      type: 'C',
      title: 'The Social Butterfly',
      emoji: '🦋',
      description: 'You\'re easy to talk to. Light, fun, and warm - you make conversations feel effortless. You\'re great at making people comfortable and keeping things flowing without going too heavy.',
      traits: ['Warm', 'Light', 'Fun', 'Adaptable'],
      strengths: ['Easy to talk to', 'Good at groups', 'Keeps things pleasant', 'Social glue'],
      weaknesses: ['Might avoid depth', 'Can feel surface level', 'Real connections need more'],
      tips: ['Depth is also connection', 'Go below surface sometimes', 'You\'re great at breaking ice'],
    },
    D: {
      type: 'D',
      title: 'The Thoughtful Observer',
      emoji: '👁️',
      description: 'You listen more than you speak, and when you do speak, it matters. People might have to draw you out, but those who do discover a thoughtful, genuine conversationalist. Quality over quantity.',
      traits: ['Observant', 'Thoughtful', 'Reserved', 'Genuine'],
      strengths: ['Great listener', 'Words carry weight', 'Authentic when speaking', 'Notices what others miss'],
      weaknesses: ['Can be hard to know', 'Might seem disengaged', 'Speaking up is also valuable'],
      tips: ['Your words matter', 'Speak up more', 'People want to hear from you'],
    },
  },
};

export default testData;
