// Conspiracy Theory Believer Level
// How deep down the rabbit hole are you? (Fun ones only!)

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-conspiracy-believer',
  title: 'Conspiracy Theory Believer Level',
  description: 'Do you take everything at face value or do you question the official story? This is about the fun, harmless conspiracies - not the harmful ones.',
  category: 'fun',
  emoji: '🔍',
  color: 'from-slate-700 to-zinc-900',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your thoughts on celebrities having secret twins:',
      options: [
        { text: 'Absolutely ridiculous', type: 'A' },
        { text: 'Unlikely but I\'ve seen the theories', type: 'B' },
        { text: 'Some of those videos ARE convincing...', type: 'C' },
        { text: 'The Avril Lavigne one almost got me', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When a corporation does something "nice":',
      options: [
        { text: 'Good for them!', type: 'A' },
        { text: 'Probably PR but still positive', type: 'B' },
        { text: 'What\'s their angle here?', type: 'C' },
        { text: 'Nothing is ever what it seems', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your phone listening to you for ads:',
      options: [
        { text: 'They\'re not - it\'s coincidence and algorithms', type: 'A' },
        { text: 'Probably not but it\'s suspicious', type: 'B' },
        { text: 'It HAS to be listening - too many coincidences', type: 'C' },
        { text: 'I cover my camera too honestly', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Celebrity relationships and PR stunts:',
      options: [
        { text: 'Most are real relationships', type: 'A' },
        { text: 'Some are PR but most are genuine', type: 'B' },
        { text: 'A lot more are fake than people think', type: 'C' },
        { text: 'I have a detailed timeline of who\'s real and who\'s not', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'When the WiFi goes down:',
      options: [
        { text: 'Technical issues happen', type: 'A' },
        { text: 'Ugh, probably need to restart the router', type: 'B' },
        { text: 'Is something happening they don\'t want us to see?', type: 'C' },
        { text: '*immediately checks if it\'s just me or everyone*', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'The "Mandela Effect" (false collective memories):',
      options: [
        { text: 'Just bad memory, nothing more', type: 'A' },
        { text: 'Interesting psychological phenomenon', type: 'B' },
        { text: 'But Berenstain Bears WAS Berenstein...', type: 'C' },
        { text: 'Timeline shifts are clearly happening', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your reaction to "official statements":',
      options: [
        { text: 'Generally take them at face value', type: 'A' },
        { text: 'Trust but verify', type: 'B' },
        { text: 'Read between the lines', type: 'C' },
        { text: 'The truth is always more complicated', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Birds:',
      options: [
        { text: 'Are birds. Normal animals.', type: 'A' },
        { text: 'Know the meme, obviously joke', type: 'B' },
        { text: 'The meme is funny but... surveillance does exist', type: 'C' },
        { text: 'Birds aren\'t real is satire but also...', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When you see an obvious coincidence:',
      options: [
        { text: 'It\'s a coincidence, that\'s it', type: 'A' },
        { text: 'Interesting coincidence, moving on', type: 'B' },
        { text: 'There are no coincidences - look deeper', type: 'C' },
        { text: 'Already researching connections', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your relationship with the rabbit hole:',
      options: [
        { text: 'I don\'t go down rabbit holes', type: 'A' },
        { text: 'Occasionally peek, don\'t jump in', type: 'B' },
        { text: 'Regular visitor, know my way around', type: 'C' },
        { text: 'I live in the rabbit hole', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Blissfully Unquestioning',
      emoji: '😊',
      description: 'You take things at face value and that\'s honestly kind of nice. The world is what it appears to be, official stories are true, and coincidences are just coincidences. Your life is probably less stressful.',
      traits: ['Trusting', 'Grounded', 'Logical', 'Unbothered'],
      strengths: ['Peace of mind', 'Not paranoid', 'Sleeps well at night', 'Easier worldview'],
      weaknesses: ['Might miss things', 'Can be naive', 'The rabbit hole is kind of fun though'],
      tips: ['Your trust is valid', 'Maybe question ONE thing for fun', 'The world isn\'t always what it seems'],
    },
    B: {
      type: 'B',
      title: 'Healthy Skeptic',
      emoji: '🤔',
      description: 'You\'re aware that not everything is as it seems, but you\'re not losing sleep over it. You question when appropriate, trust when warranted, and maintain a balanced worldview. This is the sweet spot.',
      traits: ['Balanced', 'Questioning', 'Rational', 'Open-minded'],
      strengths: ['Critical thinking', 'Not gullible', 'Not paranoid', 'Good judgment'],
      weaknesses: ['Might dismiss things too quickly', 'Missing some fun theories'],
      tips: ['Your balance is healthy', 'Sometimes dive deeper for fun', 'Keep questioning appropriately'],
    },
    C: {
      type: 'C',
      title: 'Casual Theorist',
      emoji: '🕵️',
      description: 'You\'ve seen things. You know things. The official story isn\'t always the real story, and you\'ve done your research (YouTube counts). You\'re not fully in the deep end but you\'ve definitely explored the rabbit hole.',
      traits: ['Curious', 'Skeptical', 'Research-oriented', 'Connected'],
      strengths: ['Sees patterns others miss', 'Entertaining at parties', 'Critical of narratives', 'Always has theories'],
      weaknesses: ['Can go too far', 'Friends might worry', 'Hard to trust official sources'],
      tips: ['Balance research with living', 'Some things ARE coincidences', 'Your skepticism has limits'],
    },
    D: {
      type: 'D',
      title: 'Deep State Detective',
      emoji: '🔦',
      description: 'You question EVERYTHING. Nothing is coincidence, every story has layers, and you\'ve connected dots others can\'t even see. The rabbit hole isn\'t a destination, it\'s home. Welcome to the other side.',
      traits: ['Investigative', 'Paranoid', 'Pattern-seeking', 'Independent thinker'],
      strengths: ['Misses nothing', 'Creative connections', 'Entertaining world view', 'Always questioning'],
      weaknesses: ['Maybe too much questioning', 'Hard to relax', 'Not everything is a conspiracy'],
      tips: ['Sometimes things are simple', 'Take breaks from the rabbit hole', 'Your pattern recognition is a gift but also maybe too much'],
    },
  },
};

export default testData;
