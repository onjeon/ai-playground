// Your Exercise Excuse Type
// What's your go-to excuse to skip the gym?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-exercise-excuse',
  title: 'Your Exercise Excuse Type',
  description: 'We all skip workouts sometimes. What\'s YOUR excuse style? No judgment... okay, maybe a little!',
  category: 'health',
  emoji: '🏃',
  color: 'from-orange-500 to-red-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your most common reason for skipping a workout:',
      options: [
        { text: 'Too tired, my body needs rest', type: 'A' },
        { text: 'Too busy, no time today', type: 'B' },
        { text: 'Not feeling it mentally, no motivation', type: 'C' },
        { text: 'I just don\'t want to, it\'s that simple', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When the alarm goes off for an early workout:',
      options: [
        { text: 'I need more sleep for recovery, snooze', type: 'A' },
        { text: 'I\'ll do it after work instead (spoiler: I won\'t)', type: 'B' },
        { text: 'I don\'t have the energy to push myself today', type: 'C' },
        { text: 'Absolutely not. Back to sleep.', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'The weather isn\'t great. You:',
      options: [
        { text: 'Outdoor workout isn\'t safe, rest day', type: 'A' },
        { text: 'Too complicated to adjust plans, skip it', type: 'B' },
        { text: 'This weather is bringing down my energy', type: 'C' },
        { text: 'Perfect excuse! Netflix it is.', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'After a long work day:',
      options: [
        { text: 'My body is too depleted, need to recover', type: 'A' },
        { text: 'Ran out of time, work took too long', type: 'B' },
        { text: 'Mentally exhausted, can\'t push myself', type: 'C' },
        { text: 'Couch. Now.', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'You have a minor ache or soreness:',
      options: [
        { text: 'Could be an injury developing, better rest', type: 'A' },
        { text: 'Don\'t have time to work around it today', type: 'B' },
        { text: 'Not mentally ready to push through discomfort', type: 'C' },
        { text: 'Perfect justification to skip. Thanks, body.', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'You forgot your gym clothes:',
      options: [
        { text: 'My workout gear is essential for proper form', type: 'A' },
        { text: 'No time to go back home, day is ruined', type: 'B' },
        { text: 'Sign from the universe I shouldn\'t go', type: 'C' },
        { text: 'Oh no... anyway *opens Netflix*', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your favorite "healthy" excuse:',
      options: [
        { text: 'Rest is part of training! Recovery matters!', type: 'A' },
        { text: 'I\'ll definitely do a double session tomorrow', type: 'B' },
        { text: 'Listening to my body - it says no', type: 'C' },
        { text: 'I\'m being honest: I just don\'t wanna', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Social plans conflict with gym time:',
      options: [
        { text: 'Socializing is good for mental health recovery', type: 'A' },
        { text: 'Can\'t fit both in, prioritize friends today', type: 'B' },
        { text: 'I need human connection more than exercise right now', type: 'C' },
        { text: 'Thank god for this excuse', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Gym is crowded. Your response:',
      options: [
        { text: 'Waiting for equipment ruins my workout flow', type: 'A' },
        { text: 'Don\'t have extra time to wait around', type: 'B' },
        { text: 'Too many people stresses me out', type: 'C' },
        { text: 'Ew crowds. Going home.', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How do you feel after skipping a workout?',
      options: [
        { text: 'Justified - my body needed it', type: 'A' },
        { text: 'I\'ll make up for it, no big deal', type: 'B' },
        { text: 'A little guilty but it was the right call', type: 'C' },
        { text: 'Zero guilt, I do this all the time', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Recovery Expert',
      emoji: '😴',
      description: 'You\'ve convinced yourself that rest is actually the workout. Every excuse involves "listening to your body" or "recovery." You\'re not lazy - you\'re just VERY committed to the rest days. Professional overtraining avoider.',
      traits: ['Rest-focused', 'Cautious', 'Recovery enthusiast', 'Body listener'],
      strengths: ['Never overtrains'],
      weaknesses: ['Rarely actually trains either', 'Every day could be a rest day'],
      tips: ['Rest IS important, but you might be overdoing it', 'Sometimes the body lies', 'Try showing up even when tired'],
    },
    B: {
      type: 'B',
      title: 'The Busy Bee',
      emoji: '⏰',
      description: 'You\'re just SO BUSY! Too busy to exercise, anyway. There\'s always something - work, errands, life. You swear you\'ll work out when things calm down. (Narrator: Things never calm down.)',
      traits: ['Time-poor', 'Overcommitted', 'Priorities-challenged', 'Schedule-controlled'],
      strengths: ['Probably productive in other areas'],
      weaknesses: ['Time for scrolling, no time for gym', 'Exercise never makes the priority list'],
      tips: ['Everyone has the same 24 hours', 'Schedule workouts like meetings', '20 minutes is better than zero'],
    },
    C: {
      type: 'C',
      title: 'The Mood Monitor',
      emoji: '🫠',
      description: 'Your workouts are completely mood-dependent. Not feeling motivated? Skip. Mental energy low? Skip. The vibes aren\'t vibing? Skip. You need to be in the perfect headspace to exercise, which is... never.',
      traits: ['Mood-dependent', 'Energy-sensitive', 'Motivation-reliant', 'Vibe-checker'],
      strengths: ['Doesn\'t force things'],
      weaknesses: ['Rarely in the "right" mood', 'Waiting for motivation that may never come'],
      tips: ['Motivation follows action, not the other way around', 'Just start - the energy comes', 'Discipline beats motivation'],
    },
    D: {
      type: 'D',
      title: 'The Honest Avoider',
      emoji: '🛋️',
      description: 'At least you\'re honest! You skip workouts because you just don\'t want to go, and you\'re not pretending it\'s for any noble reason. The couch is comfortable, Netflix exists, and exercise is optional. Respect for the honesty.',
      traits: ['Honest', 'Comfortable', 'Unapologetic', 'Netflix-prioritizing'],
      strengths: ['No mental gymnastics justifying skipping'],
      weaknesses: ['Might want to move your body occasionally', 'The couch can\'t love you back'],
      tips: ['Find exercise you actually enjoy', 'Something is better than nothing', 'Your future self wants you to move'],
    },
  },
};

export default testData;
