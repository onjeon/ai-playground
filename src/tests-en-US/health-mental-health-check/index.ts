// Quick Mental Health Check-In
// How are you really doing? Let's check in.

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-mental-health-check',
  title: 'Quick Mental Health Check-In',
  description: 'How are you REALLY doing? This isn\'t a diagnosis - just a friendly check-in with yourself.',
  category: 'health',
  emoji: '💚',
  color: 'from-emerald-500 to-teal-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'How has your sleep been lately?',
      options: [
        { text: 'Solid - falling asleep easily, waking refreshed', type: 'A' },
        { text: 'Okay - some nights better than others', type: 'B' },
        { text: 'Struggling - hard to fall asleep or stay asleep', type: 'C' },
        { text: 'Really rough - barely sleeping or sleeping too much', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your energy levels recently:',
      options: [
        { text: 'Good - feeling capable and motivated', type: 'A' },
        { text: 'Up and down - some good days, some tired ones', type: 'B' },
        { text: 'Low - dragging myself through most days', type: 'C' },
        { text: 'Exhausted - everything feels like too much', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'How are you handling stress?',
      options: [
        { text: 'Pretty well - managing it effectively', type: 'A' },
        { text: 'Coping - stressed but dealing', type: 'B' },
        { text: 'Struggling - stress is overwhelming sometimes', type: 'C' },
        { text: 'Drowning - can\'t seem to manage it at all', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your interest in things you usually enjoy:',
      options: [
        { text: 'Still excited about hobbies and activities', type: 'A' },
        { text: 'Somewhat interested, maybe less than usual', type: 'B' },
        { text: 'Hard to get excited about much', type: 'C' },
        { text: 'Nothing really brings me joy right now', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How often do you feel anxious or worried?',
      options: [
        { text: 'Normal amounts - occasional worry that passes', type: 'A' },
        { text: 'More than I\'d like - worry lingers sometimes', type: 'B' },
        { text: 'Often - anxiety is a regular presence', type: 'C' },
        { text: 'Constantly - hard to escape anxious thoughts', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your social connections lately:',
      options: [
        { text: 'Connected - seeing people, feeling supported', type: 'A' },
        { text: 'Okay - some connection, could be more', type: 'B' },
        { text: 'Isolated - withdrawing more than usual', type: 'C' },
        { text: 'Very alone - struggling to connect', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How are you talking to yourself?',
      options: [
        { text: 'Kind - treating myself with compassion', type: 'A' },
        { text: 'Neutral - not particularly harsh or kind', type: 'B' },
        { text: 'Critical - often putting myself down', type: 'C' },
        { text: 'Very harsh - constant negative self-talk', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your appetite and eating habits:',
      options: [
        { text: 'Normal - eating regular meals, feeling okay', type: 'A' },
        { text: 'Slightly off - some changes but nothing major', type: 'B' },
        { text: 'Affected - eating much more or less than usual', type: 'C' },
        { text: 'Very disrupted - major changes in eating', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How hopeful do you feel about the future?',
      options: [
        { text: 'Hopeful - things will work out', type: 'A' },
        { text: 'Cautiously optimistic - ups and downs ahead', type: 'B' },
        { text: 'Uncertain - hard to see things improving', type: 'C' },
        { text: 'Hopeless - can\'t see how things get better', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Overall, how would you rate your wellbeing?',
      options: [
        { text: 'Good - feeling balanced and okay', type: 'A' },
        { text: 'Fair - not great, not terrible', type: 'B' },
        { text: 'Struggling - something\'s off', type: 'C' },
        { text: 'Low - really not doing well', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'You\'re Doing Well',
      emoji: '💚',
      description: 'Right now, things seem to be going pretty well for you mentally. You\'re sleeping, coping, and staying connected. This is great! Keep doing what you\'re doing, and remember that checking in with yourself is always good practice.',
      traits: ['Balanced', 'Coping well', 'Connected', 'Hopeful'],
      strengths: ['Good mental health habits', 'Self-awareness', 'Resilience'],
      weaknesses: ['Life changes - keep checking in'],
      tips: ['Maintain your routines', 'Keep connecting with others', 'You\'re doing great'],
    },
    B: {
      type: 'B',
      title: 'Room for Care',
      emoji: '💛',
      description: 'You\'re functioning, but there might be some areas that could use attention. Life has its ups and downs, and you\'re navigating them okay. Consider adding some extra self-care to your routine.',
      traits: ['Coping', 'Managing', 'Some struggles', 'Functioning'],
      strengths: ['Getting through', 'Awareness of struggles'],
      weaknesses: ['Some areas need attention'],
      tips: ['Extra self-care couldn\'t hurt', 'Reach out to someone you trust', 'Small improvements add up'],
    },
    C: {
      type: 'C',
      title: 'Struggling Right Now',
      emoji: '🧡',
      description: 'Things seem tough right now, and that\'s real. You\'re dealing with some challenges - maybe sleep, energy, stress, or connection. This is a gentle nudge to take your wellbeing seriously and consider reaching out for support.',
      traits: ['Struggling', 'Overwhelmed', 'Need support', 'Having a hard time'],
      strengths: ['You\'re honest about how you feel', 'You took this check-in'],
      weaknesses: ['Several areas of concern'],
      tips: ['Please talk to someone - friend, family, or professional', 'You don\'t have to handle this alone', 'Small steps toward care matter'],
    },
    D: {
      type: 'D',
      title: 'Please Seek Support',
      emoji: '❤️',
      description: 'Based on your answers, things are really hard right now. This quiz isn\'t a diagnosis, but it\'s showing some serious struggles. Please, please reach out - to a friend, family member, doctor, or mental health professional. You deserve support.',
      traits: ['Suffering', 'Overwhelmed', 'Need help', 'Deserving of care'],
      strengths: ['You showed up and were honest'],
      weaknesses: ['Multiple significant challenges'],
      tips: ['Please reach out to a professional', 'Crisis resources are available 24/7', 'You matter and help exists', 'This doesn\'t have to be forever'],
    },
  },
};

export default testData;
