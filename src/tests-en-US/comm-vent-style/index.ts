// How Do You Vent?
// What's your venting style?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'comm-vent-style',
  title: 'How Do You Vent?',
  description: 'When life gets frustrating, how do you let it out? Let\'s discover your venting personality!',
  category: 'communication',
  emoji: '😤',
  color: 'from-orange-500 to-red-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When you need to vent, you:',
      options: [
        { text: 'Call someone immediately to talk it out', type: 'A' },
        { text: 'Write it out - journal, notes, texts to myself', type: 'B' },
        { text: 'Bottle it up until it explodes', type: 'C' },
        { text: 'Physical release - exercise, clean, punch a pillow', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Who do you vent to?',
      options: [
        { text: 'Everyone - friends, family, strangers, whoever\'s there', type: 'A' },
        { text: 'Myself - internal processing or writing', type: 'B' },
        { text: 'No one - I don\'t really vent', type: 'C' },
        { text: 'The gym equipment or my running shoes', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'After venting, you usually feel:',
      options: [
        { text: 'So much better - talking helps me process', type: 'A' },
        { text: 'Clearer - writing/thinking it through helps', type: 'B' },
        { text: 'The same - venting doesn\'t really help me', type: 'C' },
        { text: 'Physically released - the anger/stress left my body', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When a friend starts venting to you:',
      options: [
        { text: 'Love it - I\'m a great listener and will share mine too', type: 'A' },
        { text: 'Listen but prefer to process my own stuff privately', type: 'B' },
        { text: 'Uncomfortable - I don\'t know what to say', type: 'C' },
        { text: 'Suggest we go for a walk or do something active', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your venting duration:',
      options: [
        { text: 'Could talk about it for hours', type: 'A' },
        { text: 'Brief processing, then move on', type: 'B' },
        { text: 'As short as possible, if at all', type: 'C' },
        { text: 'Until I\'m physically exhausted', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Do you want advice when venting?',
      options: [
        { text: 'Sometimes, but mainly I just need to talk', type: 'A' },
        { text: 'I figure it out myself while processing', type: 'B' },
        { text: 'If I vented, it would be to solve the problem', type: 'C' },
        { text: 'No advice needed - just need to move my body', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How often do you need to vent?',
      options: [
        { text: 'Regularly - processing out loud is important', type: 'A' },
        { text: 'Occasionally - when something significant happens', type: 'B' },
        { text: 'Rarely - I keep things to myself', type: 'C' },
        { text: 'Depends on how much I can exercise', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Something frustrating happens at work. You:',
      options: [
        { text: 'Text your group chat immediately', type: 'A' },
        { text: 'Think about it, maybe write about it later', type: 'B' },
        { text: 'Push it down and continue working', type: 'C' },
        { text: 'Count down to your workout to release it', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your ideal venting environment:',
      options: [
        { text: 'Friend\'s couch with wine and full attention', type: 'A' },
        { text: 'Alone with my thoughts and maybe a journal', type: 'B' },
        { text: 'Nowhere - I\'d rather just move on', type: 'C' },
        { text: 'The gym, a running path, or somewhere physical', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your relationship with your emotions:',
      options: [
        { text: 'Feel them, talk about them, process them out loud', type: 'A' },
        { text: 'Aware of them, process them internally', type: 'B' },
        { text: 'Try not to dwell on them', type: 'C' },
        { text: 'Release them through physical movement', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Verbal Processor',
      emoji: '🗣️',
      description: 'You NEED to talk it out! Venting is essential to your processing. You have designated vent friends, group chats for ranting, and the act of speaking your frustrations out loud helps you feel better.',
      traits: ['Talker', 'External processor', 'Social', 'Expressive'],
      strengths: ['Great at processing emotions', 'Close friendships through sharing', 'Doesn\'t bottle things up'],
      weaknesses: ['Might over-vent', 'Can exhaust listening friends', 'Might not solve the actual problem'],
      tips: ['Make sure venting leads somewhere', 'Check if friends have capacity', 'Balance venting with problem-solving'],
    },
    B: {
      type: 'B',
      title: 'The Internal Processor',
      emoji: '📝',
      description: 'You process inside your own head - through thinking, writing, or quiet reflection. You don\'t need to talk things out to understand them. Your journal or notes app has seen some things.',
      traits: ['Internal', 'Reflective', 'Writer', 'Private'],
      strengths: ['Self-sufficient processing', 'Doesn\'t burden others', 'Clear thinking'],
      weaknesses: ['Might miss connection', 'Could benefit from sharing sometimes'],
      tips: ['Your way is valid', 'Occasional sharing strengthens bonds', 'Writing is powerful'],
    },
    C: {
      type: 'C',
      title: 'The Bottler',
      emoji: '🫙',
      description: 'You don\'t really vent. Feelings get pushed down, dealt with "later" (never), and you move on. This works until it doesn\'t. Eventually, things might come out in unexpected ways.',
      traits: ['Suppressed', 'Avoidant', 'Private', 'Controlled'],
      strengths: ['Doesn\'t burden others'],
      weaknesses: ['Emotions build up', 'May explode eventually', 'Missing healthy release'],
      tips: ['Bottling isn\'t sustainable', 'Try small releases before big explosions', 'Emotions need somewhere to go'],
    },
    D: {
      type: 'D',
      title: 'The Physical Releaser',
      emoji: '🏃',
      description: 'Your body processes your emotions. Angry? Go for a run. Frustrated? Hit the gym. Stressed? Clean the entire house. Physical movement is how you release and process feelings.',
      traits: ['Physical', 'Active', 'Body-processing', 'Movement-oriented'],
      strengths: ['Healthy release', 'Exercise benefits too', 'Doesn\'t dump on others'],
      weaknesses: ['Might avoid emotional processing', 'May need to also think/talk sometimes'],
      tips: ['Movement is valid processing', 'Sometimes add verbal/written reflection too', 'Your body is wise'],
    },
  },
};

export default testData;
