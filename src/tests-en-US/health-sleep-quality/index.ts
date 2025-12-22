// Your Sleep Quality Type
// What's your relationship with sleep like?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-sleep-quality',
  title: 'Your Sleep Quality Type',
  description: 'Sleeping like a baby or barely functioning zombie? Let\'s diagnose your sleep situation!',
  category: 'health',
  emoji: '😴',
  color: 'from-indigo-500 to-purple-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How long does it take you to fall asleep?',
      options: [
        { text: 'Out within 10-15 minutes', type: 'A' },
        { text: '20-30 minutes usually', type: 'B' },
        { text: '45 minutes to an hour... or more', type: 'C' },
        { text: 'Hours. It\'s a nightly battle.', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you feel when you wake up?',
      options: [
        { text: 'Refreshed and ready to go', type: 'A' },
        { text: 'Okay after a few minutes to wake up', type: 'B' },
        { text: 'Tired, need coffee to function', type: 'C' },
        { text: 'Exhausted like I didn\'t sleep at all', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your relationship with your phone before bed:',
      options: [
        { text: 'Put it away 30+ minutes before sleep', type: 'A' },
        { text: 'Try to limit it, sometimes scroll a bit', type: 'B' },
        { text: 'Scroll until I fall asleep, phone in hand', type: 'C' },
        { text: 'TikTok until 3am is a lifestyle', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How often do you wake up during the night?',
      options: [
        { text: 'Rarely, sleep through the night', type: 'A' },
        { text: 'Once or twice, fall back asleep easily', type: 'B' },
        { text: 'Multiple times, hard to fall back asleep', type: 'C' },
        { text: 'Constantly, barely get continuous sleep', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your bedtime consistency:',
      options: [
        { text: 'Same time every night, including weekends', type: 'A' },
        { text: 'Fairly consistent with some variation', type: 'B' },
        { text: 'All over the place depending on the day', type: 'C' },
        { text: 'What bedtime? I sleep when I collapse', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your afternoon energy levels:',
      options: [
        { text: 'Stable - no afternoon crash', type: 'A' },
        { text: 'Mild dip but push through', type: 'B' },
        { text: 'Major slump, desperately need caffeine', type: 'C' },
        { text: 'What energy? I\'m tired all day.', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your sleep environment:',
      options: [
        { text: 'Optimized - dark, cool, quiet, comfortable', type: 'A' },
        { text: 'Pretty good, could be better', type: 'B' },
        { text: 'Not ideal but I manage', type: 'C' },
        { text: 'Sleeping wherever, whenever, however', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Racing thoughts at bedtime:',
      options: [
        { text: 'Mind is calm, ready for sleep', type: 'A' },
        { text: 'Some thoughts, but settle down eventually', type: 'B' },
        { text: 'Brain goes into overdrive at night', type: 'C' },
        { text: '3am is when I solve all life\'s problems', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How many hours do you actually sleep?',
      options: [
        { text: '7-9 hours consistently', type: 'A' },
        { text: '6-7 hours most nights', type: 'B' },
        { text: '5-6 hours if I\'m lucky', type: 'C' },
        { text: 'Under 5 hours more often than not', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Do you need an alarm to wake up?',
      options: [
        { text: 'Wake up naturally around the same time', type: 'A' },
        { text: 'Set an alarm but often wake before it', type: 'B' },
        { text: 'Completely dependent on alarms', type: 'C' },
        { text: 'Multiple alarms and still struggle', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Sleep Champion',
      emoji: '🏆',
      description: 'You\'ve mastered the art of sleep! Consistent schedule, optimized environment, falling asleep easily and waking refreshed. You\'re living what sleep scientists recommend. Your circadian rhythm thanks you.',
      traits: ['Well-rested', 'Consistent', 'Optimized', 'Healthy sleep habits'],
      strengths: ['Great energy', 'No sleep debt', 'Optimal functioning'],
      weaknesses: ['Might be inflexible with schedule'],
      tips: ['Keep up the great work', 'Share your secrets with the rest of us', 'Protect these habits'],
    },
    B: {
      type: 'B',
      title: 'Decent Sleeper',
      emoji: '😊',
      description: 'Your sleep is pretty good - not perfect, but functional. You get enough rest most nights and feel okay most days. There\'s room for improvement but you\'re not in trouble. Solid B-grade sleeping.',
      traits: ['Functional', 'Good enough', 'Mostly rested', 'Average'],
      strengths: ['Getting by', 'Basic rest needs met'],
      weaknesses: ['Could optimize', 'Some tired days'],
      tips: ['Small improvements make a difference', 'Try better phone habits', 'Consistency helps'],
    },
    C: {
      type: 'C',
      title: 'Sleep Struggler',
      emoji: '😩',
      description: 'Sleep is not your friend right now. You\'re not getting enough, not falling asleep easily, or not feeling rested when you wake up. The tiredness is real and it\'s affecting your life. Time to take sleep seriously.',
      traits: ['Sleep-deprived', 'Struggling', 'Tired', 'Inconsistent'],
      strengths: ['Somehow still functioning'],
      weaknesses: ['Running on fumes', 'Chronic tiredness', 'Long-term health impact'],
      tips: ['This is affecting everything', 'Put down the phone at night', 'Consider sleep hygiene changes', 'Might need professional help'],
    },
    D: {
      type: 'D',
      title: 'Walking Zombie',
      emoji: '🧟',
      description: 'You are running on caffeine and willpower because actual sleep has abandoned you. Whether it\'s choices or circumstances, your sleep situation is critical. This level of sleep deprivation is seriously harmful.',
      traits: ['Severely sleep-deprived', 'Exhausted', 'Barely functional', 'In crisis'],
      strengths: ['Still alive somehow'],
      weaknesses: ['Everything is harder', 'Health is suffering', 'This is not sustainable'],
      tips: ['This is serious', 'See a doctor if possible', 'Sleep deprivation affects every aspect of health', 'Please prioritize this'],
    },
  },
};

export default testData;
