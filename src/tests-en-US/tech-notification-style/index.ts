// How Do You Handle Notifications?
// Your notification settings reveal your personality!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-notification-style',
  title: 'How Do You Handle Notifications?',
  description: 'Do you have 99,999+ notifications or strict Do Not Disturb? Let\'s find out your notification personality!',
  category: 'tech',
  emoji: '🔔',
  color: 'from-red-500 to-pink-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your phone notification settings:',
      options: [
        { text: 'Everything off except calls', type: 'A' },
        { text: 'Only important apps can notify me', type: 'B' },
        { text: 'Most things on, it\'s fine', type: 'C' },
        { text: 'Everything on, constant chaos', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you hear a notification sound:',
      options: [
        { text: 'I don\'t - everything\'s on silent', type: 'A' },
        { text: 'Check it when convenient', type: 'B' },
        { text: 'Must check immediately', type: 'C' },
        { text: 'Phone is never quiet long enough to notice individual ones', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your notification badges (red numbers):',
      options: [
        { text: 'Always zero - I clear everything', type: 'A' },
        { text: 'Low numbers, I keep it manageable', type: 'B' },
        { text: 'Triple digits on several apps', type: 'C' },
        { text: '99+ on basically every app', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Do Not Disturb mode:',
      options: [
        { text: 'On 24/7 except for emergencies', type: 'A' },
        { text: 'Scheduled for sleep and work focus time', type: 'B' },
        { text: 'Sometimes, when I remember', type: 'C' },
        { text: 'Never used it, sounds peaceful though', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you feel about banner/popup notifications?',
      options: [
        { text: 'Hate them - all disabled', type: 'A' },
        { text: 'Fine for important things only', type: 'B' },
        { text: 'Useful, keeps me in the loop', type: 'C' },
        { text: 'My screen is basically always covered in them', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Email notifications:',
      options: [
        { text: 'Off completely - I check email when I choose', type: 'A' },
        { text: 'Only for specific important senders', type: 'B' },
        { text: 'On, but I ignore most of them', type: 'C' },
        { text: 'Every single email pings me', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Social media notifications:',
      options: [
        { text: 'All off - I\'ll check when I want to', type: 'A' },
        { text: 'Only DMs and mentions', type: 'B' },
        { text: 'Most things on, I like being connected', type: 'C' },
        { text: 'Everything including "someone you don\'t follow posted"', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When you\'re trying to focus:',
      options: [
        { text: 'Phone in another room, no distractions', type: 'A' },
        { text: 'Phone flipped over, focus mode on', type: 'B' },
        { text: 'Try to ignore notifications (fail sometimes)', type: 'C' },
        { text: 'What\'s focus? Notifications rule my life', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When an app asks to send notifications:',
      options: [
        { text: 'Always click "Don\'t Allow"', type: 'A' },
        { text: 'Allow only if the app is important', type: 'B' },
        { text: 'Usually allow, whatever', type: 'C' },
        { text: 'Allow everything, never question it', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your ideal notification life:',
      options: [
        { text: 'Complete silence - I\'ll reach out when ready', type: 'A' },
        { text: 'Just the essentials, nothing excessive', type: 'B' },
        { text: 'Current chaos is fine I guess', type: 'C' },
        { text: 'I\'d panic if notifications stopped', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Silent Monk',
      emoji: '🧘',
      description: 'Your phone is basically a zen garden of silence. All notifications off, Do Not Disturb forever. You check things on YOUR schedule. You\'ve achieved what most people only dream of - total notification freedom.',
      traits: ['Peaceful', 'Intentional', 'Boundaries master', 'Unreachable'],
      strengths: ['Zero notification anxiety', 'Fully present', 'Peak focus abilities'],
      weaknesses: ['Might miss urgent things', 'People can\'t reach you', 'Possibly too disconnected'],
      tips: ['Make sure emergency contacts can reach you', 'Otherwise, teach us your ways'],
    },
    B: {
      type: 'B',
      title: 'The Mindful Manager',
      emoji: '✨',
      description: 'You\'ve found the sweet spot - important things can reach you, but you\'re not a slave to every ping. Notifications serve you, not the other way around. You\'re living the balanced digital life we all aspire to.',
      traits: ['Balanced', 'Selective', 'Healthy boundaries', 'In control'],
      strengths: ['Stays informed without overwhelm', 'Good focus when needed', 'Reasonable response times'],
      weaknesses: ['Occasional slip-ups'],
      tips: ['Perfect balance', 'Keep optimizing as needed', 'You\'ve got it figured out'],
    },
    C: {
      type: 'C',
      title: 'The Constant Buzz',
      emoji: '📳',
      description: 'Your phone is constantly lighting up, vibrating, making noise. You\'re connected to EVERYTHING. You tell yourself you\'ll "organize notifications later" but later never comes. It\'s chaos but it\'s your chaos.',
      traits: ['Connected', 'Overwhelmed', 'FOMO-driven', 'Reactive'],
      strengths: ['Never miss anything', 'Always reachable'],
      weaknesses: ['Constant distraction', 'Anxiety from pings', 'Hard to focus'],
      tips: ['Audit your notification settings', 'Turn off everything non-essential', 'Try Do Not Disturb for a day'],
    },
    D: {
      type: 'D',
      title: 'Notification Chaos Demon',
      emoji: '🔥',
      description: 'Every app, every ping, every banner - you get them ALL. Your phone is basically a strobe light of constant notifications. You\'ve never met a "Allow Notifications" button you didn\'t press. It\'s honestly impressive.',
      traits: ['Overwhelmed', 'Chaotic', 'Phone-dependent', 'Anxious'],
      strengths: ['Literally none related to notifications'],
      weaknesses: ['Zero focus ability', 'Constant distraction', 'Probably stressed'],
      tips: ['This is an intervention', 'Go into settings and turn off 90% of notifications', 'Your brain will thank you'],
    },
  },
};

export default testData;
