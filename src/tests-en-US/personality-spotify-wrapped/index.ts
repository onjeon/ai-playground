// Your Music Personality
// What your listening habits say about you

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-spotify-wrapped',
  title: 'What\'s Your Music Personality?',
  description: 'Your playlists, your listening habits, your top genres - discover what your music taste reveals about who you really are.',
  category: 'personality',
  emoji: '🎧',
  color: 'from-green-600 to-emerald-700',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'Your most-used playlist is:',
      options: [
        { text: 'One I\'ve curated over years - it\'s perfect', type: 'A' },
        { text: 'Whatever the algorithm recommends', type: 'B' },
        { text: 'Different ones for every mood and situation', type: 'C' },
        { text: 'I don\'t do playlists - album experience only', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When you discover a new song you love:',
      options: [
        { text: 'Add it to my carefully organized playlist', type: 'A' },
        { text: 'Listen on repeat for 72 hours straight', type: 'B' },
        { text: 'Share it with everyone I know immediately', type: 'C' },
        { text: 'Deep dive into the artist\'s entire discography', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your music taste is best described as:',
      options: [
        { text: 'Consistent - I know what I like', type: 'A' },
        { text: 'Whatever\'s popular and catchy', type: 'B' },
        { text: 'Eclectic - a little bit of everything', type: 'C' },
        { text: 'Niche - you probably haven\'t heard of them', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Someone plays a song you don\'t like. You:',
      options: [
        { text: 'Politely suffer through it', type: 'A' },
        { text: 'Try to vibe - it might grow on me', type: 'B' },
        { text: 'Suggest something else nicely', type: 'C' },
        { text: 'Give constructive criticism about why it\'s not great', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your listening stats (minutes/year) are probably:',
      options: [
        { text: 'Moderate - I listen regularly but not obsessively', type: 'A' },
        { text: 'High - music is always on', type: 'B' },
        { text: 'Very high - I need different music for every activity', type: 'C' },
        { text: 'Top 0.1% of someone - deep fan energy', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'How do you feel about sharing your music taste?',
      options: [
        { text: 'Keep it private - it\'s personal', type: 'A' },
        { text: 'Share the basics, nothing too weird', type: 'B' },
        { text: 'Love sharing! Music is meant to connect people', type: 'C' },
        { text: 'Eager to educate others about good music', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your approach to new music discovery:',
      options: [
        { text: 'Stick to what I know with occasional exploration', type: 'A' },
        { text: 'Let the algorithm do its thing', type: 'B' },
        { text: 'Actively seek out new stuff from multiple sources', type: 'C' },
        { text: 'Deep research into underground and emerging artists', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'When the yearly music recap drops, you:',
      options: [
        { text: 'Look at it privately and maybe share highlights', type: 'A' },
        { text: 'Post it immediately - it\'s a moment', type: 'B' },
        { text: 'Share it and analyze everyone else\'s too', type: 'C' },
        { text: 'Feel exposed but also proud of my niche taste', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Your ideal concert experience:',
      options: [
        { text: 'A favorite artist I know all the songs to', type: 'A' },
        { text: 'Whatever\'s trending and has good vibes', type: 'B' },
        { text: 'Any concert! Live music is always amazing', type: 'C' },
        { text: 'Small venue, intimate show, true fan experience', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Music when you\'re sad:',
      options: [
        { text: 'My comfort playlist that\'s gotten me through before', type: 'A' },
        { text: 'Whatever upbeat songs help me feel better', type: 'B' },
        { text: 'Full sad playlist - lean into the feels', type: 'C' },
        { text: 'Obscure emotional songs that hit different', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Comfort Curator',
      emoji: '🛋️',
      description: 'You\'ve got your playlist, and it\'s perfect. You know what you like, and you\'ve spent years refining it. Your music is a warm blanket - reliable, comforting, and always there when you need it.',
      traits: ['Loyal listener', 'Nostalgic', 'Consistent', 'Sentimental'],
      strengths: ['Deep connection to favorite songs', 'Music is emotional support', 'Great taste in classics', 'Knows every lyric'],
      weaknesses: ['Might miss new gems', 'Can be resistant to change', 'Same songs on repeat'],
      tips: ['Try one new artist a month', 'Your favorites will still be there', 'Discovery can be fun'],
    },
    B: {
      type: 'B',
      title: 'The Algorithm Ally',
      emoji: '🎯',
      description: 'You trust the algorithm, and honestly, it knows you well. You\'re here for good vibes and popular tracks that everyone knows. Music is about enjoyment, not gatekeeping.',
      traits: ['Easy-going', 'Trend-aware', 'Social listener', 'Vibe-focused'],
      strengths: ['Always knows popular songs', 'Great at parties', 'Easy to share music with', 'Open-minded'],
      weaknesses: ['Might not have deep favorites', 'Dependent on recommendations', 'Could explore more independently'],
      tips: ['Try exploring beyond the algorithm', 'Dig deeper into artists you like', 'Develop your own taste'],
    },
    C: {
      type: 'C',
      title: 'The Eclectic Explorer',
      emoji: '🌈',
      description: 'Your library is a chaotic beautiful mess of genres, eras, and moods. You\'ve got a playlist for everything and appreciate good music regardless of category. Your music taste is as diverse as your personality.',
      traits: ['Open-minded', 'Diverse taste', 'Adventurous', 'Mood-driven'],
      strengths: ['Never bored', 'Appreciates all genres', 'Great recommendations', 'Music for every moment'],
      weaknesses: ['Hard to define taste', 'Shuffled can be chaotic', 'Too many playlists to manage'],
      tips: ['Your diversity is your strength', 'Keep exploring', 'You\'re the best friend for recommendations'],
    },
    D: {
      type: 'D',
      title: 'The Musical Connoisseur',
      emoji: '🎼',
      description: 'You don\'t just listen to music - you experience it. Album deep dives, artist analysis, obscure recommendations. Your taste is refined, your knowledge is extensive, and you\'re always ahead of the curve.',
      traits: ['Knowledgeable', 'Passionate', 'Indie-focused', 'Taste-maker'],
      strengths: ['Discovers artists early', 'Deep appreciation', 'Excellent recommendations', 'True musical knowledge'],
      weaknesses: ['Can be gatekeepy', 'Mainstream feels like selling out', 'High standards'],
      tips: ['Popular music can be good too', 'Share your knowledge kindly', 'Let people enjoy things'],
    },
  },
};

export default testData;
