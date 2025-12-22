// Your Driving Style
// What kind of driver are you?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-driving-style',
  title: 'What\'s Your Driving Personality?',
  description: 'Discover what kind of driver you are - cautious cruiser, speed demon, or road rage risk?',
  category: 'personality',
  emoji: '🚙',
  color: 'from-slate-600 to-gray-700',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'The speed limit is 65 mph. You\'re driving:',
      options: [
        { text: 'Exactly 65 - rules are rules', type: 'A' },
        { text: '70-75 - going with the flow of traffic', type: 'B' },
        { text: '80+ - I like to make good time', type: 'C' },
        { text: 'Whatever feels right for conditions', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Someone cuts you off in traffic. You:',
      options: [
        { text: 'Brake calmly - probably an accident', type: 'A' },
        { text: 'Mutter something and move on', type: 'B' },
        { text: 'Honk and maybe gesture', type: 'C' },
        { text: 'Depends on my mood that day', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your hands on the steering wheel are:',
      options: [
        { text: '10 and 2, exactly as taught', type: 'A' },
        { text: 'Casually placed but in control', type: 'B' },
        { text: 'One hand, maybe on my knee sometimes', type: 'C' },
        { text: 'It varies depending on the situation', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'A yellow light appears. You:',
      options: [
        { text: 'Stop if there\'s any chance', type: 'A' },
        { text: 'Make a quick judgment call', type: 'B' },
        { text: 'Speed up - I can make it', type: 'C' },
        { text: 'Depends on who\'s behind me', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Parallel parking is:',
      options: [
        { text: 'Something I take my time with carefully', type: 'A' },
        { text: 'Not my favorite but I manage', type: 'B' },
        { text: 'I\'ll find another spot if it\'s tight', type: 'C' },
        { text: 'I nail it sometimes, struggle others', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'In stop-and-go traffic, you:',
      options: [
        { text: 'Stay in my lane patiently', type: 'A' },
        { text: 'Occasionally switch lanes if one\'s faster', type: 'B' },
        { text: 'Constantly change lanes to get ahead', type: 'C' },
        { text: 'Try to stay zen but sometimes get frustrated', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your music while driving is:',
      options: [
        { text: 'Low volume so I can focus', type: 'A' },
        { text: 'Comfortable background music', type: 'B' },
        { text: 'Loud - the car is my concert hall', type: 'C' },
        { text: 'Depends on the mood and drive length', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'A slow driver is in the left lane. You:',
      options: [
        { text: 'Wait patiently until they move', type: 'A' },
        { text: 'Flash my lights once, then pass on right if needed', type: 'B' },
        { text: 'Tailgate and pass aggressively when possible', type: 'C' },
        { text: 'It depends on how much of a hurry I\'m in', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your use of turn signals:',
      options: [
        { text: 'Every single time, well in advance', type: 'A' },
        { text: 'Almost always, when it matters', type: 'B' },
        { text: 'When I remember or when it\'s necessary', type: 'C' },
        { text: 'Pretty consistent but not perfect', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'How would passengers describe your driving?',
      options: [
        { text: 'Safe and comfortable', type: 'A' },
        { text: 'Normal and relaxed', type: 'B' },
        { text: 'Fast and thrilling (or scary)', type: 'C' },
        { text: 'Unpredictable depending on the day', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Safety First Driver',
      emoji: '🛡️',
      description: 'You\'re the driver everyone feels safe with! You follow rules, stay calm, and prioritize getting there safely over getting there fast. Your insurance rates are probably great.',
      traits: ['Cautious', 'Rule-following', 'Patient', 'Responsible'],
      strengths: ['Safe driver', 'Calm in traffic', 'Low accident risk', 'Passengers feel comfortable'],
      weaknesses: ['May frustrate faster drivers', 'Could be more assertive', 'Sometimes too slow'],
      tips: ['Keep doing what you\'re doing', 'Safety is always the right choice', 'Don\'t let others pressure you'],
    },
    B: {
      type: 'B',
      title: 'The Competent Cruiser',
      emoji: '😎',
      description: 'You\'re a confident, well-balanced driver. You know the rules but also know when to go with the flow. You make good judgments and keep your cool. Solid driving energy.',
      traits: ['Balanced', 'Confident', 'Adaptable', 'Practical'],
      strengths: ['Good judgment', 'Flexible approach', 'Neither too slow nor too fast', 'Easy to ride with'],
      weaknesses: ['Could get complacent', 'May occasionally bend rules', 'Needs to stay focused'],
      tips: ['Stay alert', 'Your balance works well', 'Keep adapting to conditions'],
    },
    C: {
      type: 'C',
      title: 'The Need for Speed Driver',
      emoji: '🏎️',
      description: 'You drive like you\'ve got places to be! Speed limits are suggestions, passing is an art form, and slow drivers are your nemesis. Just... be careful out there.',
      traits: ['Fast', 'Impatient', 'Confident', 'Aggressive'],
      strengths: ['Decisive driver', 'Gets places quickly', 'Confident behind the wheel', 'Can handle high speeds'],
      weaknesses: ['Higher accident risk', 'Road rage potential', 'Stresses out passengers', 'Tickets'],
      tips: ['Speed doesn\'t save much time', 'Your life is worth more than being early', 'Take a breath'],
    },
    D: {
      type: 'D',
      title: 'The Mood-Based Driver',
      emoji: '🎭',
      description: 'Your driving varies with your mood! Sometimes you\'re calm and careful, other times you\'re in a rush. Your passengers never quite know what they\'re going to get.',
      traits: ['Variable', 'Emotional', 'Unpredictable', 'Honest'],
      strengths: ['Self-aware about mood', 'Adaptable', 'Honest about limitations', 'Can drive well when focused'],
      weaknesses: ['Inconsistent', 'May drive poorly when stressed', 'Passengers may feel uncertain'],
      tips: ['Check in with yourself before driving', 'Don\'t drive angry', 'Consistency is safer'],
    },
  },
};

export default testData;
