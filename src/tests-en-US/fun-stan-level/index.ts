// What Level of Stan Are You?
// Find out how dedicated you are to your favorites

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-stan-level',
  title: 'What Level of Stan Are You?',
  description: 'Casual fan or full-blown obsession? Discover your dedication level to the things you love - artists, shows, games, or whatever you\'re into.',
  category: 'fun',
  emoji: '🎤',
  color: 'from-pink-600 to-purple-700',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'A new release from your favorite drops. You:',
      options: [
        { text: 'Check it out when I have time', type: 'A' },
        { text: 'Listen/watch within the first week', type: 'B' },
        { text: 'Day one, cleared my schedule', type: 'C' },
        { text: 'Already have theories and prepared content', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your knowledge of your favorite\'s discography/filmography:',
      options: [
        { text: 'I know the hits', type: 'A' },
        { text: 'Pretty familiar with most of their work', type: 'B' },
        { text: 'Deep cuts, B-sides, unreleased - I know it all', type: 'C' },
        { text: 'I could write a thesis on their artistic evolution', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Merch situation:',
      options: [
        { text: 'Maybe a t-shirt if I love it', type: 'A' },
        { text: 'A few key items that I actually wear/use', type: 'B' },
        { text: 'A significant collection', type: 'C' },
        { text: 'Could open a small museum honestly', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When someone criticizes your favorite:',
      options: [
        { text: 'Everyone has opinions, it\'s fine', type: 'A' },
        { text: 'I\'ll defend them but respectfully', type: 'B' },
        { text: 'I take it personally ngl', type: 'C' },
        { text: 'I have a prepared counter-argument document', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your social media in relation to your favorite:',
      options: [
        { text: 'Occasional mention when relevant', type: 'A' },
        { text: 'I share and discuss sometimes', type: 'B' },
        { text: 'A significant portion of my content', type: 'C' },
        { text: 'My entire online presence is dedicated to them', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Concert/event attendance:',
      options: [
        { text: 'If tickets are available and convenient', type: 'A' },
        { text: 'Plan for it, get decent tickets', type: 'B' },
        { text: 'Multiple shows, will travel if needed', type: 'C' },
        { text: 'I have a ritual for ticket drops and travel the world', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Fan community involvement:',
      options: [
        { text: 'I\'m a solo fan, don\'t need community', type: 'A' },
        { text: 'I lurk and occasionally engage', type: 'B' },
        { text: 'Active member, know the discourse', type: 'C' },
        { text: 'I run accounts, organize projects, mod spaces', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your reaction to major news about your favorite:',
      options: [
        { text: 'Oh cool, I\'ll check that out', type: 'A' },
        { text: 'Excited to share with friends', type: 'B' },
        { text: 'Emotional, need to process and discuss immediately', type: 'C' },
        { text: 'Already creating content about it', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'How often do you think about your favorite?',
      options: [
        { text: 'When something reminds me', type: 'A' },
        { text: 'Daily but casually', type: 'B' },
        { text: 'Constantly - they live rent-free in my head', type: 'C' },
        { text: 'They are a core part of my identity', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Introducing others to your favorite:',
      options: [
        { text: 'If it comes up naturally', type: 'A' },
        { text: 'I recommend them enthusiastically', type: 'B' },
        { text: 'I have a curated introduction plan', type: 'C' },
        { text: 'Converting people is my mission', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Casual Appreciator',
      emoji: '👍',
      description: 'You like things, but you\'re not defined by them. You appreciate quality without making it your whole personality. This is a healthy relationship with media consumption - honestly we\'re a bit jealous.',
      traits: ['Balanced', 'Casual', 'Low-key', 'Unbothered'],
      strengths: ['Healthy boundaries with media', 'Not emotionally dependent', 'Can enjoy many things', 'No stan drama'],
      weaknesses: ['Might miss deep connections', 'Don\'t understand the passion', 'Outsider to fan communities'],
      tips: ['Your approach is valid', 'Deep diving CAN be fun though', 'Sometimes obsession finds you'],
    },
    B: {
      type: 'B',
      title: 'Dedicated Fan',
      emoji: '💫',
      description: 'You\'re genuinely invested in your favorites without it consuming your life. You know your stuff, engage with content, and have opinions - but you also have a personality outside of fandom. The ideal balance.',
      traits: ['Enthusiastic', 'Knowledgeable', 'Balanced', 'Engaged'],
      strengths: ['Best of both worlds', 'Enjoyable passion level', 'Can discuss in depth', 'Stable fan identity'],
      weaknesses: ['Might not understand hardcore stans', 'Occasionally envious of deeper dedication'],
      tips: ['You found the sweet spot', 'Enjoy your level of engagement', 'Share your passion proudly'],
    },
    C: {
      type: 'C',
      title: 'True Stan',
      emoji: '💕',
      description: 'This is not just a hobby, it\'s a lifestyle. You know everything, feel everything, and dedicate significant time and energy to your favorites. Your passion is intense and honestly inspiring to casual fans.',
      traits: ['Passionate', 'Dedicated', 'Knowledgeable', 'Emotionally invested'],
      strengths: ['Unmatched passion', 'Expert-level knowledge', 'Great fan community member', 'Finds deep joy'],
      weaknesses: ['Takes things personally', 'Can be all-consuming', 'Hard when favorites disappoint'],
      tips: ['Your passion is beautiful', 'Remember to take breaks', 'This dedication makes fan culture thrive'],
    },
    D: {
      type: 'D',
      title: 'Supreme Stan',
      emoji: '👑',
      description: 'You\'ve transcended regular fandom. You create content, organize communities, travel the world, and have made this a core part of your identity. Your dedication is legendary and slightly terrifying to normies.',
      traits: ['Legendary', 'All-in', 'Community leader', 'Dedicated for life'],
      strengths: ['Unmatched dedication', 'Builds community', 'Creates content', 'Peak passion'],
      weaknesses: ['Identity tied to favorites', 'Can be overwhelming', 'What happens if they retire?'],
      tips: ['You\'re iconic actually', 'Make sure you also exist outside of this', 'Your passion creates culture'],
    },
  },
};

export default testData;
