// Your Sleep Personality
// Night owl? Early bird? Perpetually tired? Let's find out!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-sleep-personality',
  title: 'What\'s Your Sleep Personality?',
  description: 'Are you a night owl, early bird, or something else entirely? Your sleep habits reveal a lot!',
  category: 'fun',
  emoji: '😴',
  color: 'from-indigo-600 to-violet-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'It\'s Saturday. When are you naturally waking up?',
      options: [
        { text: '6-7am - my body doesn\'t know it\'s the weekend', type: 'A' },
        { text: '9-10am - nice and rested', type: 'B' },
        { text: '12pm+ - I was up until 4am', type: 'C' },
        { text: 'Whenever I wake up from my random 3pm nap', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your relationship with morning alarms:',
      options: [
        { text: 'I wake up before my alarm usually', type: 'A' },
        { text: 'One alarm, one snooze, then I\'m up', type: 'B' },
        { text: '10 alarms at 5-minute intervals and I still struggle', type: 'C' },
        { text: 'What\'s an alarm? I wake up when I wake up', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When do you do your best thinking?',
      options: [
        { text: 'Early morning when everything is quiet', type: 'A' },
        { text: 'Mid-day when I\'m fully awake', type: 'B' },
        { text: '11pm-3am hits different', type: 'C' },
        { text: 'Whenever my brain randomly decides to work', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your ideal bedtime:',
      options: [
        { text: '9-10pm - early to bed, early to rise', type: 'A' },
        { text: '11pm-12am - reasonable adult hours', type: 'B' },
        { text: '2-4am - the night is young!', type: 'C' },
        { text: 'Bedtime? I just pass out when my body gives up', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Coffee\'s role in your life:',
      options: [
        { text: 'A nice morning ritual, don\'t really need it', type: 'A' },
        { text: 'One cup to start the day', type: 'B' },
        { text: 'IV drip of caffeine just to function', type: 'C' },
        { text: 'Coffee at 10pm? Sure, won\'t affect anything', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How\'s your energy throughout the day?',
      options: [
        { text: 'Peak energy in the morning, wind down by evening', type: 'A' },
        { text: 'Pretty steady with an afternoon dip', type: 'B' },
        { text: 'Zombie until 6pm, then I come ALIVE', type: 'C' },
        { text: 'Unpredictable chaos - could be either', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your thoughts on naps:',
      options: [
        { text: 'Never - they mess up my schedule', type: 'A' },
        { text: 'Occasional 20-minute power naps', type: 'B' },
        { text: 'Naps are life. Except they turn into 4-hour sleeps', type: 'C' },
        { text: 'I don\'t nap, I just exist in various states of tired', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'What\'s your pre-sleep activity?',
      options: [
        { text: 'Reading, meditating, proper wind-down routine', type: 'A' },
        { text: 'Some TV or light phone time', type: 'B' },
        { text: 'Doom-scrolling until my eyes burn', type: 'C' },
        { text: 'Whatever I was doing until I crash', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When someone suggests brunch at 9am:',
      options: [
        { text: 'Perfect! I\'ll already be up!', type: 'A' },
        { text: 'Sure, that works for me', type: 'B' },
        { text: 'That\'s basically my bedtime???', type: 'C' },
        { text: 'Depends entirely on what day it is and my chaos level', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your sleep quality honestly is:',
      options: [
        { text: 'Great - I sleep well and wake refreshed', type: 'A' },
        { text: 'Pretty good most nights', type: 'B' },
        { text: 'Questionable - I\'m always tired somehow', type: 'C' },
        { text: 'I genuinely don\'t know what good sleep feels like', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Early Bird',
      emoji: '🌅',
      description: 'Rise and shine! You\'re up with the sun and thriving while the rest of us are still hitting snooze. You probably have a morning routine that could be a viral TikTok. The world is designed for people like you and honestly, we\'re jealous.',
      traits: ['Morning person', 'Disciplined', 'Well-rested', 'Productive'],
      strengths: ['Gets things done early', 'Natural rhythm', 'Great sleep hygiene', 'Morning productivity'],
      weaknesses: ['Can\'t hang late', 'Might be asleep by 9pm at parties', 'Judgment of night owls'],
      tips: ['Late nights won\'t kill you occasionally', 'Some fun happens after dark', 'Stay flexible'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Sleeper',
      emoji: '⚖️',
      description: 'You have healthy, normal sleep habits like some kind of functional human being. Not too early, not too late - you\'ve found your rhythm. The circadian rhythm gods smile upon you.',
      traits: ['Balanced', 'Adaptable', 'Healthy', 'Flexible'],
      strengths: ['Can do mornings OR nights', 'Good sleep quality', 'Reasonable energy levels'],
      weaknesses: ['Might be boring to sleep anarchists', 'Peak hours are average hours'],
      tips: ['You\'re doing great', 'Keep that balance', 'Protect your sleep'],
    },
    C: {
      type: 'C',
      title: 'The Night Owl',
      emoji: '🦉',
      description: 'The sun is your enemy and 3am is your peak performance time. You\'ve written your best work, had your best ideas, and lived your best life in the dead of night. Society just isn\'t built for your genius.',
      traits: ['Nocturnal', 'Creative', 'Late-bloomer', 'Night-powered'],
      strengths: ['Peak creativity at night', 'Quiet productive hours', 'Cool mysterious vibe'],
      weaknesses: ['Mornings are BRUTAL', 'Always tired in daylight', 'Miss all the morning stuff'],
      tips: ['Some sun won\'t hurt', 'Try to find a schedule that works', 'Coffee is your best friend'],
    },
    D: {
      type: 'D',
      title: 'The Sleep Anarchist',
      emoji: '🎲',
      description: 'You don\'t have a sleep schedule - you have sleep suggestions that you ignore. Sleep 4 hours one night, 14 the next. Awake at 4am randomly. Your circadian rhythm is doing abstract art.',
      traits: ['Chaotic', 'Unpredictable', 'Flexible', 'Perpetually tired'],
      strengths: ['Can literally sleep anywhere anytime', 'Extremely adaptable', 'No schedule stress'],
      weaknesses: ['Probably always tired', 'What is consistent energy?', 'Health implications'],
      tips: ['Some routine would help', 'Your body is begging for consistency', 'Sleep is actually important'],
    },
  },
};

export default testData;
