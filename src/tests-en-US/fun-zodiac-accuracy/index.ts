// How Much Do You Match Your Zodiac?
// Are you a textbook [your sign] or a cosmic anomaly?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-zodiac-accuracy',
  title: 'How Much Do You Match Your Zodiac?',
  description: 'Are you a walking stereotype of your sign or proof that astrology is fake?',
  category: 'fun',
  emoji: '♈',
  color: 'from-purple-600 to-indigo-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When someone asks your sign, you:',
      options: [
        { text: 'Know your big 3 and explain your whole chart', type: 'A' },
        { text: 'Tell them and ask if they can tell', type: 'B' },
        { text: 'Mention it but say "I\'m not that into astrology"', type: 'C' },
        { text: 'Say you don\'t believe in that stuff', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'You read your horoscope and it\'s scary accurate. You:',
      options: [
        { text: 'Of course it is! The stars know all', type: 'A' },
        { text: 'Spooky... but maybe coincidence?', type: 'B' },
        { text: 'Confirmation bias, probably', type: 'C' },
        { text: 'Horoscopes are vague enough to apply to anyone', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You meet someone and find out they\'re your "incompatible" sign:',
      options: [
        { text: 'Immediately suspicious of them', type: 'A' },
        { text: 'Note it but give them a chance', type: 'B' },
        { text: 'Doesn\'t really factor into my opinion', type: 'C' },
        { text: 'Signs have nothing to do with compatibility', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Mercury is in retrograde. You:',
      options: [
        { text: 'Prepare for chaos - don\'t sign anything important', type: 'A' },
        { text: 'Keep it in mind as a potential explanation for chaos', type: 'B' },
        { text: 'Life is chaotic regardless of Mercury', type: 'C' },
        { text: 'That\'s not how planets work', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How often do you relate to your sign\'s stereotypes?',
      options: [
        { text: 'Always - I AM my sign', type: 'A' },
        { text: 'Often, which is kind of wild', type: 'B' },
        { text: 'Sometimes, but that could be coincidence', type: 'C' },
        { text: 'Rarely - I\'m nothing like my sign', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your approach to astrology memes:',
      options: [
        { text: 'Tag friends in their sign posts religiously', type: 'A' },
        { text: 'Share the ones that are too accurate', type: 'B' },
        { text: 'Laugh at them but don\'t take them seriously', type: 'C' },
        { text: 'Scroll past - not interested', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When dating, do you check sign compatibility?',
      options: [
        { text: 'Always - it\'s important information', type: 'A' },
        { text: 'Out of curiosity, but it doesn\'t decide anything', type: 'B' },
        { text: 'Only after I already like them', type: 'C' },
        { text: 'Never - it\'s meaningless', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'You exhibit classic traits of your sign. You think:',
      options: [
        { text: 'The universe knows what it\'s doing', type: 'A' },
        { text: 'Interesting! Maybe there\'s something to this', type: 'B' },
        { text: 'Coincidence or self-fulfilling prophecy', type: 'C' },
        { text: 'Personality isn\'t determined by birth month', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Someone criticizes your sign. You:',
      options: [
        { text: 'Get defensive - how dare they!', type: 'A' },
        { text: 'Acknowledge it but explain the nuances', type: 'B' },
        { text: 'Shrug - it\'s not that deep', type: 'C' },
        { text: 'Agree that sign stereotypes are silly', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Overall, astrology is:',
      options: [
        { text: 'A legitimate way to understand personality', type: 'A' },
        { text: 'Fun and sometimes surprisingly accurate', type: 'B' },
        { text: 'Entertainment, nothing more', type: 'C' },
        { text: 'Complete nonsense', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Textbook [Your Sign]',
      emoji: '⭐',
      description: 'You ARE your zodiac sign in human form. You know your big 3, you\'ve analyzed your birth chart, and you use Mercury retrograde as a valid excuse. The universe wrote your personality and you read the assignment perfectly.',
      traits: ['Astrology believer', 'Self-aware', 'Sign-identified', 'Chart reader'],
      strengths: ['Knows thyself', 'Great at sign identification', 'Cosmic awareness', 'Self-understanding'],
      weaknesses: ['Might limit yourself', 'Could be confirmation bias', 'Signs aren\'t everything'],
      tips: ['You can be more than your chart', 'Keep an open mind', 'People can surprise you'],
    },
    B: {
      type: 'B',
      title: 'Casual Cosmic',
      emoji: '🌙',
      description: 'You\'re into astrology but like, casually. You relate to your sign, check your horoscope sometimes, and find the accuracy suspicious. You\'re in the sweet spot of cosmic curiosity without being too deep in the stars.',
      traits: ['Curious', 'Open-minded', 'Balanced', 'Flexible'],
      strengths: ['Best of both worlds', 'Not dismissive or obsessive', 'Fun at parties', 'Relatable'],
      weaknesses: ['Non-committal stance', 'Might annoy both believers and skeptics'],
      tips: ['Your balance is healthy', 'Keep exploring', 'Trust your vibes'],
    },
    C: {
      type: 'C',
      title: 'Skeptical but Amused',
      emoji: '🤔',
      description: 'You don\'t really believe in astrology but you can\'t explain why your horoscope was right that one time. You\'ll laugh at the memes and know your sign, but you\'re not checking birth charts. Science brain with occasional cosmic curiosity.',
      traits: ['Skeptical', 'Rational', 'Practical', 'Low-key curious'],
      strengths: ['Critical thinking', 'Not easily swayed', 'Grounded perspective'],
      weaknesses: ['Might miss the fun', 'Could be too dismissive', 'Party pooper potential'],
      tips: ['It\'s okay to have fun with it', 'Mystery isn\'t always bad', 'Lighten up a bit'],
    },
    D: {
      type: 'D',
      title: 'Cosmic Non-Believer',
      emoji: '🔬',
      description: 'Astrology? In THIS economy? You\'re firmly in the "that\'s not how any of this works" camp. You believe in data, science, and definitely not the position of celestial bodies determining your personality. You might be right, but you\'re also not as fun at parties.',
      traits: ['Skeptic', 'Science-minded', 'Practical', 'No-nonsense'],
      strengths: ['Logical', 'Not superstitious', 'Evidence-based thinking'],
      weaknesses: ['Missing out on fun', 'Might dismiss others\' beliefs', 'Party pooper confirmed'],
      tips: ['People can enjoy things you don\'t believe in', 'Sometimes fun > facts', 'Let people have their stars'],
    },
  },
};

export default testData;
