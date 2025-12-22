// Doctor Avoidance Level
// How much do you avoid going to the doctor?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-doctor-avoidance',
  title: 'Doctor Avoidance Level',
  description: 'Do you go for checkups or wait until you\'re practically dying? Let\'s find out your doctor-dodging level!',
  category: 'health',
  emoji: '🏥',
  color: 'from-red-500 to-rose-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When was your last routine checkup?',
      options: [
        { text: 'Within the last year - I go regularly', type: 'A' },
        { text: '1-2 years ago, I should probably schedule', type: 'B' },
        { text: '3+ years... it\'s been a while', type: 'C' },
        { text: 'Can\'t remember, possibly a decade', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When something hurts or feels off, you:',
      options: [
        { text: 'Schedule an appointment to get it checked', type: 'A' },
        { text: 'Wait a bit, then go if it persists', type: 'B' },
        { text: 'Google it and hope it goes away', type: 'C' },
        { text: 'Ignore it until I physically cannot', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your approach to preventive care:',
      options: [
        { text: 'Up to date on all screenings and vaccines', type: 'A' },
        { text: 'Mostly up to date, might be missing something', type: 'B' },
        { text: 'Only when required by work/school', type: 'C' },
        { text: 'Prevention? I\'ll deal with it when I have to', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'The thought of going to the doctor makes you feel:',
      options: [
        { text: 'Fine - it\'s just healthcare', type: 'A' },
        { text: 'Mildly uncomfortable but I do it', type: 'B' },
        { text: 'Anxious and avoidant', type: 'C' },
        { text: 'Pure dread - I\'d rather not know', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your biggest reason for avoiding doctors:',
      options: [
        { text: 'I don\'t avoid them!', type: 'A' },
        { text: 'Time/convenience - hard to schedule', type: 'B' },
        { text: 'Cost, anxiety, or fear of bad news', type: 'C' },
        { text: 'All of the above plus I hate it', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When friends say you should see a doctor:',
      options: [
        { text: 'Already made an appointment', type: 'A' },
        { text: 'Consider it, might actually go', type: 'B' },
        { text: 'Say "yeah I should" and don\'t', type: 'C' },
        { text: 'Actively resist and change the subject', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your relationship with the dentist:',
      options: [
        { text: 'Go twice a year like clockwork', type: 'A' },
        { text: 'Go yearly, more or less', type: 'B' },
        { text: 'Only when there\'s pain', type: 'C' },
        { text: 'What dentist? I have teeth, they\'re fine', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'If you had a symptom for weeks:',
      options: [
        { text: 'Would\'ve already seen a doctor by now', type: 'A' },
        { text: 'Starting to think I should make an appointment', type: 'B' },
        { text: 'Still hoping it resolves on its own', type: 'C' },
        { text: 'It\'s been months actually, still ignoring it', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your medical knowledge comes from:',
      options: [
        { text: 'Actual healthcare providers', type: 'A' },
        { text: 'Mix of doctors and some research', type: 'B' },
        { text: 'Google and hoping for the best', type: 'C' },
        { text: 'Denial and selective ignorance', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Be honest - is something bothering you that you haven\'t gotten checked?',
      options: [
        { text: 'No, I address things promptly', type: 'A' },
        { text: 'Maybe one small thing', type: 'B' },
        { text: 'Yes, a few things actually', type: 'C' },
        { text: 'Multiple things I\'ve been ignoring for too long', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Responsible Patient',
      emoji: '⭐',
      description: 'You actually go to the doctor! Regular checkups, preventive care, addressing concerns promptly - you\'re doing what healthcare providers wish everyone did. Your future self thanks you for catching things early.',
      traits: ['Proactive', 'Responsible', 'Health-conscious', 'Regular care'],
      strengths: ['Early detection', 'Peace of mind', 'Established care relationship'],
      weaknesses: ['Might worry about small things'],
      tips: ['Keep up the good work', 'You\'re doing it right', 'Encourage others gently'],
    },
    B: {
      type: 'B',
      title: 'Occasional Visitor',
      emoji: '🙂',
      description: 'You go sometimes. Not as often as you probably should, but you\'re not completely avoiding it. You\'ll go when something seems wrong enough, and you know you should schedule that checkup you\'ve been putting off.',
      traits: ['Inconsistent', 'Could be better', 'Not avoiding actively', 'Room for improvement'],
      strengths: ['Will go when needed'],
      weaknesses: ['Missing preventive care', 'Procrastinating on checkups'],
      tips: ['Schedule that checkup now', 'Set annual reminders', 'Easier to prevent than treat'],
    },
    C: {
      type: 'C',
      title: 'Doctor Dodger',
      emoji: '😬',
      description: 'You\'re actively avoiding healthcare. Whether it\'s anxiety, cost, fear of bad news, or just general avoidance - doctors aren\'t your thing. You\'ve got symptoms you\'re ignoring and you know it.',
      traits: ['Avoidant', 'Anxious about health', 'Ignoring symptoms', 'Hoping for the best'],
      strengths: ['Still alive somehow'],
      weaknesses: ['Missing important care', 'Things might be getting worse', 'Anxiety grows with avoidance'],
      tips: ['The fear is often worse than the visit', 'Start with just one appointment', 'Ignoring problems doesn\'t solve them'],
    },
    D: {
      type: 'D',
      title: 'Professional Avoider',
      emoji: '🚨',
      description: 'You treat healthcare like it doesn\'t exist. Years without checkups, symptoms ignored for way too long, and a firm commitment to not knowing what\'s going on in your body. This is genuinely concerning.',
      traits: ['Severely avoidant', 'Ignoring serious signs', 'Health anxiety paradox', 'Needs intervention'],
      strengths: ['Honestly not sure'],
      weaknesses: ['Everything health-related', 'Missing treatable conditions', 'This is dangerous'],
      tips: ['Please see a doctor', 'This is your sign', 'Whatever you\'re avoiding knowing - knowing is better', 'Your health matters'],
    },
  },
};

export default testData;
