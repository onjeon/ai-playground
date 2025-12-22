// Your WiFi Dependency Level
// How addicted are you to being connected?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-wifi-behavior',
  title: 'Your WiFi Dependency Level',
  description: 'What happens when the WiFi goes out? Let\'s find out how connected you really need to be!',
  category: 'tech',
  emoji: '📶',
  color: 'from-cyan-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'The WiFi goes out. Your first reaction:',
      options: [
        { text: 'Fine, I\'ll do something offline', type: 'A' },
        { text: 'Mild inconvenience, check when it\'s back', type: 'B' },
        { text: 'Immediately restart router, this is urgent', type: 'C' },
        { text: 'Full panic mode, life cannot continue', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'First thing you do at a new place:',
      options: [
        { text: 'Don\'t even think about WiFi', type: 'A' },
        { text: 'Ask for password eventually', type: 'B' },
        { text: 'First question: "What\'s the WiFi?"', type: 'C' },
        { text: 'Already connected before you even sat down', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your mobile data plan:',
      options: [
        { text: 'Minimal - rarely need it', type: 'A' },
        { text: 'Reasonable backup when WiFi\'s not around', type: 'B' },
        { text: 'Unlimited because I NEED constant connection', type: 'C' },
        { text: 'Unlimited, plus hotspot for all my devices', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Airplane mode on flights:',
      options: [
        { text: 'Great break from being connected', type: 'A' },
        { text: 'Fine for short flights', type: 'B' },
        { text: 'Pay for WiFi if available', type: 'C' },
        { text: 'Already purchased the flight WiFi pass before boarding', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When traveling somewhere remote:',
      options: [
        { text: 'Perfect opportunity to disconnect', type: 'A' },
        { text: 'Check occasionally, enjoy being away', type: 'B' },
        { text: 'Research where I can find WiFi nearby', type: 'C' },
        { text: 'Won\'t go anywhere without reliable connection', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'You notice slow WiFi. You:',
      options: [
        { text: 'Barely notice, patience is a virtue', type: 'A' },
        { text: 'Mildly annoyed but deal with it', type: 'B' },
        { text: 'Run speed tests, troubleshoot, rage slightly', type: 'C' },
        { text: 'THIS IS UNACCEPTABLE. CONTACT PROVIDER IMMEDIATELY.', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'How many devices do you have connected to WiFi?',
      options: [
        { text: 'Just a couple', type: 'A' },
        { text: 'Phone, laptop, maybe a tablet', type: 'B' },
        { text: 'Everything I own is connected', type: 'C' },
        { text: 'Smart home, all devices, I AM the network', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Going somewhere with no WiFi for a day:',
      options: [
        { text: 'Sounds peaceful actually', type: 'A' },
        { text: 'Could manage, might get bored', type: 'B' },
        { text: 'Anxious but survivable', type: 'C' },
        { text: 'Not going. Find somewhere else.', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your relationship with "free WiFi" signs:',
      options: [
        { text: 'Don\'t really look for them', type: 'A' },
        { text: 'Notice them, connect if convenient', type: 'B' },
        { text: 'Seek them out, always connecting', type: 'C' },
        { text: 'Know all the free WiFi spots in every area I go', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If internet ceased to exist:',
      options: [
        { text: 'Life would be simpler honestly', type: 'A' },
        { text: 'Would adjust after some time', type: 'B' },
        { text: 'Major lifestyle change, very difficult', type: 'C' },
        { text: 'I would literally not know how to exist', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Digitally Independent',
      emoji: '🏕️',
      description: 'WiFi? Optional. You can live without constant connection and actually enjoy it. You\'re not addicted to being online, you have offline hobbies, and you don\'t panic when the router dies. You\'re basically a survival expert.',
      traits: ['Independent', 'Offline-capable', 'Zen', 'Balanced'],
      strengths: ['Not dependent on technology', 'Can entertain self offline', 'Zero WiFi anxiety'],
      weaknesses: ['Might miss urgent things', 'Could be more connected'],
      tips: ['Your digital independence is impressive', 'Teach the rest of us your ways'],
    },
    B: {
      type: 'B',
      title: 'Healthy Connection',
      emoji: '🌐',
      description: 'You appreciate WiFi when it\'s there but don\'t fall apart without it. Normal relationship with internet connection - use it, enjoy it, but not obsessed. You\'re the baseline of healthy in our connected world.',
      traits: ['Balanced', 'Adaptable', 'Normal', 'Functional'],
      strengths: ['Healthy relationship with connectivity', 'Can disconnect when needed'],
      weaknesses: ['Occasional FOMO when offline'],
      tips: ['You\'ve got the right balance', 'Keep it up'],
    },
    C: {
      type: 'C',
      title: 'Connection Dependent',
      emoji: '📡',
      description: 'You NEED to be connected. WiFi outages stress you out, you have unlimited data just in case, and "no WiFi" venues aren\'t real options. The internet is your oxygen and you\'ve accepted that about yourself.',
      traits: ['Connected', 'Dependent', 'Anxious offline', 'Tech-reliant'],
      strengths: ['Always reachable', 'Never miss updates'],
      weaknesses: ['WiFi anxiety is real', 'Can\'t fully disconnect', 'Might be too dependent'],
      tips: ['Try occasional offline time', 'It won\'t kill you (probably)'],
    },
    D: {
      type: 'D',
      title: 'Cannot Survive Offline',
      emoji: '🆘',
      description: 'You and WiFi are in a committed relationship. Disconnection causes genuine distress. You\'ve built your entire life around constant connectivity and wouldn\'t have it any other way. The internet IS your habitat.',
      traits: ['Extremely dependent', 'Chronically online', 'Connectivity-obsessed', 'Digital native'],
      strengths: ['Always connected', 'Never offline'],
      weaknesses: ['Cannot function without internet', 'This might not be healthy', 'What even is outside?'],
      tips: ['Please try a digital detox', 'Nature exists', 'Your ancestors survived without WiFi'],
    },
  },
};

export default testData;
