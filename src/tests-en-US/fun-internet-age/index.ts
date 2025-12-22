// What's Your Internet Age?
// Find out if you're a digital native or still using AOL

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-internet-age',
  title: "What's Your Internet Age?",
  description: 'Are you terminally online Gen Z, peak Millennial internet, or still figuring out how to unmute yourself? Let\'s find out your true digital generation.',
  category: 'fun',
  emoji: '🌐',
  color: 'from-cyan-500 to-blue-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'What was your first social media?',
      options: [
        { text: 'TikTok or Instagram (after 2015)', type: 'A' },
        { text: 'Facebook, Twitter, or early Instagram', type: 'B' },
        { text: 'MySpace, Tumblr, or early YouTube', type: 'C' },
        { text: 'AOL Instant Messenger or LiveJournal', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'How do you search for information?',
      options: [
        { text: 'TikTok or YouTube - I need visual learning', type: 'A' },
        { text: 'Google first, then maybe Reddit for reviews', type: 'B' },
        { text: 'Deep dive forums, wikis, and obscure websites', type: 'C' },
        { text: 'Ask Jeeves energy - I still type full questions', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Pick your preferred communication method:',
      options: [
        { text: 'Voice memos, Snapchat, or BeReal', type: 'A' },
        { text: 'Text, DMs, or group chats', type: 'B' },
        { text: 'Discord servers or forum threads', type: 'C' },
        { text: 'Email or actual phone calls', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your reaction to "brb":',
      options: [
        { text: 'Is that slang? Just say "one sec"', type: 'A' },
        { text: 'Classic - I still use it sometimes', type: 'B' },
        { text: 'Peak internet culture, along with lol and omg', type: 'C' },
        { text: 'I remember typing this in chatrooms', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'How do you consume news/current events?',
      options: [
        { text: 'TikTok, Twitter threads, or Instagram stories', type: 'A' },
        { text: 'News apps, podcasts, or Reddit', type: 'B' },
        { text: 'RSS feeds, blogs, and curated newsletters', type: 'C' },
        { text: 'TV news or newspaper websites', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'What does "dial-up internet" mean to you?',
      options: [
        { text: 'Something I\'ve heard about in memes', type: 'A' },
        { text: 'Vaguely remember it from childhood', type: 'B' },
        { text: 'The sound still haunts my dreams', type: 'C' },
        { text: 'I waited 10 minutes to load a single image', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your stance on internet privacy:',
      options: [
        { text: 'Everything is tracked anyway, whatever', type: 'A' },
        { text: 'Use incognito mode and VPN sometimes', type: 'B' },
        { text: 'Paranoid - multiple accounts, fake names', type: 'C' },
        { text: 'I grew up when the internet was anonymous', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Pick a meme format:',
      options: [
        { text: 'Brain rot edits, Skibidi, or current TikTok trends', type: 'A' },
        { text: 'Drake format, "Nobody:", or Distracted Boyfriend', type: 'B' },
        { text: 'Rage comics, Bad Luck Brian, or Doge', type: 'C' },
        { text: 'Dancing baby or "All your base are belong to us"', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How do you feel about algorithms?',
      options: [
        { text: 'Love them - my FYP knows me better than I know myself', type: 'A' },
        { text: 'Useful but sometimes creepy', type: 'B' },
        { text: 'Miss the chronological feed era', type: 'C' },
        { text: 'The internet was better before algorithms', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Complete this: "The internet is for..."',
      options: [
        { text: 'Content, connection, and community', type: 'A' },
        { text: 'Information, entertainment, and memes', type: 'B' },
        { text: 'I know the musical reference...', type: 'C' },
        { text: 'Originally? Academic research and email', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Chronically Online Gen Z',
      emoji: '📱',
      description: 'You ARE the internet. TikTok is your search engine, your attention span is calibrated for short-form content, and you probably don\'t know life before smartphones. The algorithm is your best friend.',
      traits: ['Digital native', 'Trend-aware', 'Short-form optimized', 'Platform fluid'],
      strengths: ['Adapts to new platforms instantly', 'Understands current trends', 'Can make anything go viral', 'Fluent in internet speak'],
      weaknesses: ['Might not know how to use a desktop', 'Attention span concerns', 'FOMO from being too online'],
      tips: ['Try logging off occasionally', 'Long-form content exists', 'The outside world is actually nice'],
    },
    B: {
      type: 'B',
      title: 'Peak Millennial Internet',
      emoji: '💻',
      description: 'You witnessed the golden age of the internet - Facebook\'s rise, Twitter before it was X, YouTube before ads. You\'re digitally fluent but remember life before smartphones. The sweet spot of internet literacy.',
      traits: ['Digitally balanced', 'Platform versatile', 'Meme historian', 'Adaptable'],
      strengths: ['Can navigate any platform', 'Remembers the good old days', 'Has seen internet evolve', 'Not too old, not too young'],
      weaknesses: ['Feels old when teens don\'t get your references', 'Nostalgic for better times', 'Tired of learning new platforms'],
      tips: ['Your perspective is valuable', 'Bridge the generational gap', 'Keep the internet lore alive'],
    },
    C: {
      type: 'C',
      title: 'Early Internet Veteran',
      emoji: '🖥️',
      description: 'You remember when the internet was weird, anonymous, and full of forums. MySpace profiles with custom HTML, burned CDs, and the wild west of early social media. You\'ve seen things that can\'t be unseen.',
      traits: ['Internet historian', 'Forum cultured', 'Niche community lover', 'Old school'],
      strengths: ['Deep internet knowledge', 'Appreciates internet history', 'Can code a MySpace layout', 'Survived the early internet'],
      weaknesses: ['Confused by modern platforms sometimes', 'Nostalgic to a fault', '"Back in my day" energy'],
      tips: ['Share your wisdom with the youth', 'Some new things are actually good', 'Your HTML skills are still valuable'],
    },
    D: {
      type: 'D',
      title: 'OG Internet Pioneer',
      emoji: '📡',
      description: 'You were there when the internet was born. Dial-up sounds, chatrooms, and the genuine belief that the internet would change everything (you were right). You\'ve watched the entire digital revolution unfold.',
      traits: ['Internet pioneer', 'Seen it all', 'Patient with technology', 'Digital wisdom'],
      strengths: ['Perspective on how far we\'ve come', 'Not fazed by tech changes', 'Appreciates simplicity', 'Has incredible stories'],
      weaknesses: ['Modern internet is exhausting', 'Miss the old days', 'Wondering what happened to the dream'],
      tips: ['Your stories are historical documents', 'The youth need your guidance', 'You helped build this'],
    },
  },
};

export default testData;
