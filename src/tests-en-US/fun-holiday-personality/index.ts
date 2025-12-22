// Your Holiday Season Personality
// How do you really feel about the holidays?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-holiday-personality',
  title: 'What\'s Your Holiday Season Personality?',
  description: 'Are you a holiday enthusiast or counting down until January? Let\'s find out!',
  category: 'fun',
  emoji: '🎄',
  color: 'from-red-600 to-green-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'When do you start feeling "holiday spirit"?',
      options: [
        { text: 'November 1st - Halloween is over, it\'s Christmas now', type: 'A' },
        { text: 'After Thanksgiving feels right', type: 'B' },
        { text: 'Mid-December when it\'s unavoidable', type: 'C' },
        { text: 'Holiday spirit? Don\'t know her.', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your relationship with holiday music:',
      options: [
        { text: 'Playing since November, will continue until January', type: 'A' },
        { text: 'Love it in moderation during December', type: 'B' },
        { text: 'It\'s fine when it\'s on but I don\'t seek it out', type: 'C' },
        { text: 'One more Mariah Carey song and I snap', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Holiday decorating is:',
      options: [
        { text: 'A sacred tradition - every corner must sparkle', type: 'A' },
        { text: 'Nice to have, I put up the essentials', type: 'B' },
        { text: 'If someone else does it, I\'ll enjoy it', type: 'C' },
        { text: 'More stuff to put away in January, pass', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your approach to holiday shopping:',
      options: [
        { text: 'Thoughtful gifts, beautifully wrapped, started in October', type: 'A' },
        { text: 'Organized list, get it done with care', type: 'B' },
        { text: 'Last minute scramble, gift cards for everyone', type: 'C' },
        { text: 'Cash in a card is fine, right?', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Holiday movies are:',
      options: [
        { text: 'Essential! I have a marathon schedule planned', type: 'A' },
        { text: 'Cozy tradition, love watching a few classics', type: 'B' },
        { text: 'Fine background noise', type: 'C' },
        { text: 'I\'d rather watch literally anything else', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Family gatherings during holidays:',
      options: [
        { text: 'The best part! I love the chaos', type: 'A' },
        { text: 'Nice to see everyone, with an exit strategy', type: 'B' },
        { text: 'I\'ll show up but mentally prepare first', type: 'C' },
        { text: 'Can I just stay home?', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your ideal holiday outfit:',
      options: [
        { text: 'Ugly sweater? Holiday colors? All of it!', type: 'A' },
        { text: 'Something festive but still stylish', type: 'B' },
        { text: 'Normal clothes, maybe with a holiday accessory', type: 'C' },
        { text: 'Whatever I normally wear', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Holiday baking/cooking:',
      options: [
        { text: 'Cookies for neighbors, elaborate dinners, the works!', type: 'A' },
        { text: 'A few special recipes I make every year', type: 'B' },
        { text: 'I\'ll eat what others make', type: 'C' },
        { text: 'Holiday food is just food with more stress', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'New Year\'s Eve plans:',
      options: [
        { text: 'Big celebration! Countdown, champagne, whole thing', type: 'A' },
        { text: 'Nice dinner or small gathering with friends', type: 'B' },
        { text: 'Usually asleep before midnight honestly', type: 'C' },
        { text: 'Just another night, arbitrary calendar flip', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'January 2nd arrives. You\'re feeling:',
      options: [
        { text: 'Sad it\'s over, already planning for next year', type: 'A' },
        { text: 'Ready to get back to routine', type: 'B' },
        { text: 'Relieved it\'s over', type: 'C' },
        { text: 'FINALLY. Free from the holiday industrial complex', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Holiday Fanatic',
      emoji: '🎅',
      description: 'You ARE the holidays. Your home is a winter wonderland, your playlist is 100% festive, and you\'ve been emotionally ready since September. You bring the holiday spirit wherever you go, whether people want it or not!',
      traits: ['Festive', 'Enthusiastic', 'Traditional', 'Joyful'],
      strengths: ['Spreads joy', 'Creates memories', 'Great at planning', 'Peak holiday energy'],
      weaknesses: ['Might overwhelm others', 'January depression incoming', 'Very high expectations'],
      tips: ['Not everyone shares your enthusiasm', 'January exists too', 'Balance festive with flexible'],
    },
    B: {
      type: 'B',
      title: 'The Balanced Celebrator',
      emoji: '🎁',
      description: 'You enjoy the holidays without going overboard. Festive but not obsessive, traditional but flexible. You appreciate the season while also maintaining your sanity. This is the healthy way to holiday.',
      traits: ['Balanced', 'Appreciative', 'Reasonable', 'Warm'],
      strengths: ['Enjoys without stress', 'Good at boundaries', 'Flexible expectations'],
      weaknesses: ['Might seem unenthused to fanatics', 'Could let loose a bit more'],
      tips: ['Your balance is perfect', 'Keep enjoying moderately', 'Maybe try one new tradition'],
    },
    C: {
      type: 'C',
      title: 'The Passive Participator',
      emoji: '😐',
      description: 'You don\'t hate the holidays, but you\'re not exactly starting a conga line either. You\'ll show up, exchange gifts, eat the food - but the hype is lost on you. You\'re along for the ride, not driving it.',
      traits: ['Neutral', 'Low-key', 'Unbothered', 'Present'],
      strengths: ['No holiday stress', 'Easy to please', 'Grounded expectations'],
      weaknesses: ['Might seem like a buzzkill', 'Missing out on some joy', 'Low energy'],
      tips: ['Find one thing you actually enjoy', 'Create your own traditions', 'You don\'t have to love ALL of it'],
    },
    D: {
      type: 'D',
      title: 'The Holiday Survivor',
      emoji: '🏃',
      description: 'The holidays are something you survive, not celebrate. The forced cheer, the obligations, the MUSIC - you\'re counting down to January 2nd. You\'re not a grinch, you\'re just... realistic about it all.',
      traits: ['Skeptical', 'Independent', 'Realistic', 'Self-aware'],
      strengths: ['No unrealistic expectations', 'Honest about feelings', 'Independent traditions'],
      weaknesses: ['Missing potential joy', 'Might bring others down', 'Resistance can be exhausting too'],
      tips: ['Find YOUR version of holiday joy', 'Opt out of what you hate', 'Create anti-traditions you actually like'],
    },
  },
};

export default testData;
