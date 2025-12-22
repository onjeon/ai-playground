// Your Password Personality
// How you manage passwords says a lot about you!

import { TestData } from '@/types';

const testData: TestData = {
  id: 'tech-password-style',
  title: 'Your Password Personality',
  description: 'Your password habits reveal way more about you than you\'d think!',
  category: 'tech',
  emoji: '🔐',
  color: 'from-purple-500 to-indigo-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your password strategy:',
      options: [
        { text: 'Password manager with unique passwords for everything', type: 'A' },
        { text: 'A few strong passwords I rotate between accounts', type: 'B' },
        { text: 'One or two passwords for most things', type: 'C' },
        { text: 'The same password since 2008 + "123" if needed', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Two-factor authentication:',
      options: [
        { text: 'Enabled everywhere possible, no exceptions', type: 'A' },
        { text: 'On important accounts like banking', type: 'B' },
        { text: 'Too annoying, only when forced', type: 'C' },
        { text: 'What\'s that?', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'When a site says "password must contain..."',
      options: [
        { text: 'Great! Security is important', type: 'A' },
        { text: 'Fine, I\'ll add a number and symbol', type: 'B' },
        { text: 'Ugh, just add "1!" to my usual password', type: 'C' },
        { text: 'Rage. Try 10 variations until one works.', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'How often do you change your passwords?',
      options: [
        { text: 'Regularly, or when any breach is reported', type: 'A' },
        { text: 'Occasionally, when prompted', type: 'B' },
        { text: 'Only when I literally can\'t log in', type: 'C' },
        { text: 'Change? Why would I change it?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your password contains:',
      options: [
        { text: 'Random strings that mean nothing', type: 'A' },
        { text: 'Mix of words, numbers, and symbols', type: 'B' },
        { text: 'My pet\'s name and my birth year', type: 'C' },
        { text: '"Password" or "123456" honestly', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Where do you store your passwords?',
      options: [
        { text: 'Encrypted password manager only', type: 'A' },
        { text: 'Browser saves them, good enough', type: 'B' },
        { text: 'Notes app or a sticky note somewhere', type: 'C' },
        { text: 'My brain (and "forgot password" button)', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you get a "suspicious login attempt" email:',
      options: [
        { text: 'Immediately change password and review security', type: 'A' },
        { text: 'Check it out and change password if needed', type: 'B' },
        { text: 'Probably ignore it, seems fine', type: 'C' },
        { text: 'What email? I don\'t read those', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Sharing passwords with people:',
      options: [
        { text: 'Never. Create separate accounts or use sharing features', type: 'A' },
        { text: 'Only family, for shared services', type: 'B' },
        { text: 'Friends, family, maybe an ex or two', type: 'C' },
        { text: 'Everyone knows my Netflix password', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your relationship with "forgot password":',
      options: [
        { text: 'Never use it - always know my passwords', type: 'A' },
        { text: 'Rarely, only for obscure accounts', type: 'B' },
        { text: 'Old friend. See it often.', type: 'C' },
        { text: 'My actual login method at this point', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If a hacker tried to guess your password:',
      options: [
        { text: 'They\'d need millions of years', type: 'A' },
        { text: 'Pretty difficult but not impossible', type: 'B' },
        { text: 'A few educated guesses might work', type: 'C' },
        { text: 'They could probably get it in under 5 tries', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Fort Knox Level Security',
      emoji: '🏰',
      description: 'Your digital life is a fortress. Password manager, 2FA everywhere, unique passwords for every single account. You\'re the person hackers skip over because it\'s not worth the effort. Security professionals would be proud.',
      traits: ['Secure', 'Paranoid (in a good way)', 'Organized', 'Tech-savvy'],
      strengths: ['Basically unhackable', 'Never forgets passwords', 'Data breach? Not your problem'],
      weaknesses: ['Might be overkill for some things', 'Annoys friends with security lectures'],
      tips: ['Keep doing what you\'re doing', 'Help your friends level up', 'You\'re living the secure life'],
    },
    B: {
      type: 'B',
      title: 'Reasonably Protected',
      emoji: '🔒',
      description: 'You take security seriously for important stuff but don\'t obsess over every account. Good passwords where it matters, basic security habits in place. You\'re better than most people and that\'s good enough.',
      traits: ['Practical', 'Reasonable', 'Security-aware', 'Normal'],
      strengths: ['Important accounts are secure', 'Good awareness', 'Not paranoid but not careless'],
      weaknesses: ['Some accounts might be vulnerable', 'Could do more'],
      tips: ['Consider a password manager', 'Add 2FA to more accounts', 'You\'re doing pretty well'],
    },
    C: {
      type: 'C',
      title: 'Security? I Guess?',
      emoji: '🔓',
      description: 'Your passwords are... not great. Same few passwords everywhere, maybe your dog\'s name in there. You know you should do better but it feels like too much effort. Hackers would have a field day but somehow you\'ve been fine.',
      traits: ['Careless', 'Lucky', 'Lazy about security', 'At risk'],
      strengths: ['Easy to remember passwords (lol)'],
      weaknesses: ['One breach could expose everything', 'Hackable', 'Living on borrowed time'],
      tips: ['Please get a password manager', 'Change your important passwords TODAY', 'You\'re a data breach waiting to happen'],
    },
    D: {
      type: 'D',
      title: 'Open Door Policy',
      emoji: '🚪',
      description: 'Your accounts are basically an open invitation. "Password123" has been your ride or die since middle school. You click "forgot password" more than you actually type passwords. It\'s genuinely impressive you haven\'t been hacked yet.',
      traits: ['Dangerously careless', 'Lucky', 'Password reset dependent', 'Walking risk'],
      strengths: ['Honestly none related to security'],
      weaknesses: ['Everything', 'Literally anyone could access your accounts', 'Disaster imminent'],
      tips: ['This is urgent - change your passwords', 'Get a password manager TODAY', 'Use 2FA immediately', 'We\'re genuinely worried about you'],
    },
  },
};

export default testData;
