// What Self-Care Do You Need?
// Let's figure out what kind of self-care you're craving!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-self-care-need',
  title: 'What Self-Care Do You Need?',
  description: 'Not all self-care is face masks and bubble baths. What do YOU actually need right now?',
  category: 'health',
  emoji: '🛁',
  color: 'from-pink-500 to-rose-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How would you describe your current state?',
      options: [
        { text: 'Mentally exhausted, brain won\'t shut off', type: 'A' },
        { text: 'Physically drained, body needs attention', type: 'B' },
        { text: 'Emotionally overwhelmed, feelings everywhere', type: 'C' },
        { text: 'Socially depleted, need connection (or solitude)', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'What\'s been stressing you most?',
      options: [
        { text: 'Too much thinking, decisions, mental load', type: 'A' },
        { text: 'Not enough rest, sleep, physical recovery', type: 'B' },
        { text: 'Big feelings, emotional situations, processing', type: 'C' },
        { text: 'Relationships, social obligations, people stuff', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When you imagine relief, you picture:',
      options: [
        { text: 'Quiet, no decisions, mental peace', type: 'A' },
        { text: 'Rest, relaxation, physical comfort', type: 'B' },
        { text: 'Crying it out, processing, emotional release', type: 'C' },
        { text: 'Meaningful connection (or blessed solitude)', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your energy leak is:',
      options: [
        { text: 'Overthinking and mental tasks', type: 'A' },
        { text: 'Pushing my body too hard without rest', type: 'B' },
        { text: 'Absorbing everyone\'s emotions', type: 'C' },
        { text: 'Social demands and people-pleasing', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'What have you been neglecting?',
      options: [
        { text: 'Time to just be, without stimulation', type: 'A' },
        { text: 'Sleep, physical rest, body care', type: 'B' },
        { text: 'My own feelings and emotional needs', type: 'C' },
        { text: 'Quality time with people (or myself)', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'What sounds most appealing right now?',
      options: [
        { text: 'Sitting in silence, no phone, no tasks', type: 'A' },
        { text: 'A long nap, massage, or lazy day', type: 'B' },
        { text: 'A good cry, journaling, therapy session', type: 'C' },
        { text: 'Deep conversation or complete alone time', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your inner voice is saying:',
      options: [
        { text: '"I need to turn off my brain"', type: 'A' },
        { text: '"I need to rest my body"', type: 'B' },
        { text: '"I need to feel my feelings"', type: 'C' },
        { text: '"I need to reconnect (or disconnect)"', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'What would help you most this week?',
      options: [
        { text: 'Fewer decisions, less input, mental space', type: 'A' },
        { text: 'More sleep, gentler schedule, physical care', type: 'B' },
        { text: 'Permission to feel, someone to listen', type: 'C' },
        { text: 'Quality connection or protected alone time', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your current coping isn\'t working because:',
      options: [
        { text: 'I\'m still overstimulated and overthinking', type: 'A' },
        { text: 'My body is still exhausted and tense', type: 'B' },
        { text: 'My emotions are still unprocessed', type: 'C' },
        { text: 'I\'m still feeling disconnected', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If you could gift yourself one thing:',
      options: [
        { text: 'A completely quiet day with no obligations', type: 'A' },
        { text: 'A day in bed with no guilt', type: 'B' },
        { text: 'A safe space to feel everything', type: 'C' },
        { text: 'Perfect connection (or perfect solitude)', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'You Need Mental Rest',
      emoji: '🧠',
      description: 'Your brain is TIRED. Decision fatigue is real, and you\'ve been thinking too much. You need to give your mind a break - less input, fewer choices, some genuine mental quiet.',
      traits: ['Mentally exhausted', 'Overstimulated', 'Decision-fatigued', 'Brain overworked'],
      strengths: ['Aware of the burnout'],
      weaknesses: ['Can\'t turn off your brain'],
      tips: ['Limit decisions this week', 'Try a digital detox', 'Sit in silence - no podcast, no music', 'Let your brain be bored'],
    },
    B: {
      type: 'B',
      title: 'You Need Physical Rest',
      emoji: '😴',
      description: 'Your body is crying out for rest. Sleep, gentle movement, physical comfort - that\'s what you need. You\'ve been pushing through and your body is keeping score. Time to actually rest.',
      traits: ['Physically depleted', 'Sleep-deprived', 'Tense', 'Body-exhausted'],
      strengths: ['Recognizing body signals'],
      weaknesses: ['Pushing through instead of resting'],
      tips: ['Sleep is not lazy, it\'s essential', 'Take that nap', 'Try gentle stretching', 'Cozy comfort is self-care'],
    },
    C: {
      type: 'C',
      title: 'You Need Emotional Processing',
      emoji: '💙',
      description: 'There are feelings you haven\'t dealt with. Emotions are piling up and you need to actually FEEL them. Cry if you need to, journal, talk to someone. Your emotional backlog needs clearing.',
      traits: ['Emotionally overwhelmed', 'Feelings bottled up', 'Need to process', 'Emotional overflow'],
      strengths: ['In touch with emotional needs'],
      weaknesses: ['Avoiding the feelings'],
      tips: ['Let yourself cry', 'Journal without filtering', 'Talk to someone you trust', 'Feelings don\'t go away - they wait'],
    },
    D: {
      type: 'D',
      title: 'You Need Social Care',
      emoji: '👥',
      description: 'Your social needs aren\'t being met - either you need deeper connection or you need alone time to recharge. This is about your relationship with others and yourself in social contexts.',
      traits: ['Socially depleted', 'Connection-hungry or solitude-starved', 'People fatigue or loneliness', 'Relationship-related'],
      strengths: ['Knowing your social needs'],
      weaknesses: ['Not honoring them'],
      tips: ['If you need people - reach out for real connection', 'If you need alone time - protect it fiercely', 'Quality over quantity', 'Both extroverts and introverts have social needs'],
    },
  },
};

export default testData;
