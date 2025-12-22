// Which Era Are You Most Nostalgic For?
// Discover which decade lives rent-free in your heart

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-nostalgia-trip',
  title: 'Which Era Are You Most Nostalgic For?',
  description: 'Some of us miss the 90s, others romanticize decades they never lived through. Discover which era your soul truly belongs to.',
  category: 'fun',
  emoji: '⏰',
  color: 'from-amber-500 to-orange-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal weekend entertainment:',
      options: [
        { text: 'Drive-in movies, vinyl records, milkshakes', type: 'A' },
        { text: 'MTV, arcade games, mall hangouts', type: 'B' },
        { text: 'Mix CDs, AIM away messages, early internet', type: 'C' },
        { text: 'Streaming, TikTok, staying home honestly', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Pick a music vibe:',
      options: [
        { text: 'Motown, classic rock, disco', type: 'A' },
        { text: 'New wave, hair metal, early hip-hop', type: 'B' },
        { text: 'Pop punk, R&B, boy bands, early 2000s hits', type: 'C' },
        { text: 'Whatever\'s trending on TikTok right now', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your fashion instincts lean toward:',
      options: [
        { text: 'Vintage everything - the older the better', type: 'A' },
        { text: 'Neon, scrunchies, oversized everything', type: 'B' },
        { text: 'Low-rise jeans, butterfly clips, velour tracksuits', type: 'C' },
        { text: 'Whatever\'s comfortable and current', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your thoughts on technology:',
      options: [
        { text: 'We were happier before smartphones', type: 'A' },
        { text: 'The 80s/90s had the best tech toys', type: 'B' },
        { text: 'Early internet was peak - before everything was corporate', type: 'C' },
        { text: 'I appreciate modern convenience', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'The aesthetic that speaks to your soul:',
      options: [
        { text: 'Diners, vintage cars, retro signage', type: 'A' },
        { text: 'Neon lights, arcade vibes, synth energy', type: 'B' },
        { text: 'Y2K, Paris Hilton era, pop princess energy', type: 'C' },
        { text: 'Modern minimalism or current trends', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your ideal social scene:',
      options: [
        { text: 'Sock hops, drive-ins, actual community', type: 'A' },
        { text: 'The mall, roller rinks, house parties', type: 'B' },
        { text: 'AOL chatrooms, MySpace, early social media', type: 'C' },
        { text: 'Discord servers, Instagram, modern connection', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When you think "the good old days":',
      options: [
        { text: 'Before everything got so complicated', type: 'A' },
        { text: 'When life was fun and colorful', type: 'B' },
        { text: 'When internet was new and exciting', type: 'C' },
        { text: 'I think we\'re living in them now', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your comfort media:',
      options: [
        { text: 'Classic movies, oldies radio, timeless stuff', type: 'A' },
        { text: '80s/90s movies, Saturday morning cartoons', type: 'B' },
        { text: 'Early 2000s shows, Disney Channel era', type: 'C' },
        { text: 'Recent releases, I don\'t need nostalgia', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your relationship with nostalgia:',
      options: [
        { text: 'I romanticize eras I never even lived in', type: 'A' },
        { text: 'My childhood was peak and I mourn it', type: 'B' },
        { text: 'The 2000s were formative and I miss them', type: 'C' },
        { text: 'I prefer living in the present', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'If you could time travel:',
      options: [
        { text: 'Way back - 50s, 60s, 70s vibes', type: 'A' },
        { text: '80s or 90s - peak culture', type: 'B' },
        { text: 'Early 2000s - just one more time', type: 'C' },
        { text: 'The future - I\'m curious what\'s next', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Old Soul Nostalgic',
      emoji: '🎞️',
      description: 'You romanticize eras you probably didn\'t even live through. The 50s, 60s, 70s call to you with their vinyl records, drive-in movies, and a simpler time. You were born in the wrong generation and you feel it deeply.',
      traits: ['Vintage lover', 'Old soul', 'Romanticizes the past', 'Timeless taste'],
      strengths: ['Appreciates classics', 'Unique aesthetic', 'Values simplicity', 'Great taste in music'],
      weaknesses: ['Might idealize problematic times', 'Can miss present joy', 'Rose-colored glasses'],
      tips: ['The past wasn\'t perfect either', 'Take the aesthetics leave the problems', 'You can be vintage AND present'],
    },
    B: {
      type: 'B',
      title: '80s/90s Kid at Heart',
      emoji: '🕹️',
      description: 'Neon lights, arcade games, MTV, and mall culture - this is your era. Whether you lived it or not, the 80s and 90s feel like home. You miss when things were colorful, physical, and actually fun.',
      traits: ['Playful', 'Colorful', 'Pop culture lover', 'Nostalgic for fun'],
      strengths: ['Great pop culture knowledge', 'Appreciates fun aesthetics', 'Endless references', 'Party energy'],
      weaknesses: ['Might be stuck in the past', 'Can\'t let go of childhood', 'New stuff seems worse'],
      tips: ['Your era WAS iconic', 'But new stuff is also good', 'Channel the energy, don\'t mourn it'],
    },
    C: {
      type: 'C',
      title: 'Y2K/Early 2000s Devotee',
      emoji: '💿',
      description: 'Low-rise jeans, flip phones, AIM away messages, and when the internet was still fun - this is your nostalgic happy place. The early 2000s raised you and you\'ll never fully move on.',
      traits: ['Millennial energy', 'Pop culture fluent', 'Internet native', 'Peak nostalgia'],
      strengths: ['Witnessed the digital shift', 'Great meme knowledge', 'Culturally fluent', 'Relatable references'],
      weaknesses: ['Might reject current trends', 'Everything was "better then"', 'Can be stuck'],
      tips: ['The 2000s were formative for a reason', 'New things can be good too', 'Your nostalgia is shared'],
    },
    D: {
      type: 'D',
      title: 'Present-Day Realist',
      emoji: '⭐',
      description: 'You live in the now and you\'re okay with that. The past was fine but you\'re not yearning for it. You appreciate modern convenience, current culture, and believe the best might still be ahead.',
      traits: ['Present-focused', 'Forward-thinking', 'Adaptable', 'Optimistic'],
      strengths: ['Not stuck in the past', 'Embraces change', 'Enjoys current life', 'Future-oriented'],
      weaknesses: ['Might miss out on nostalgia bonding', 'Can seem disconnected from past', 'Sometimes old stuff IS better'],
      tips: ['Your present-focus is healthy', 'But occasional nostalgia is nice', 'The past has gems worth revisiting'],
    },
  },
};

export default testData;
