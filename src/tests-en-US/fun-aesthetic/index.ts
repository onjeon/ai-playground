// What's Your Aesthetic?
// Discover your visual vibe and personal style identity

import { TestData } from '@/types';

const testData: TestData = {
  id: 'fun-aesthetic',
  title: "What's Your Aesthetic?",
  description: 'Dark academia? Cottagecore? Clean girl? Discover the aesthetic that matches your soul and curate your life accordingly.',
  category: 'fun',
  emoji: '🎨',
  color: 'from-pink-500 to-purple-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Pick your ideal weekend activity:',
      options: [
        { text: 'Reading in a cozy library or old bookshop', type: 'A' },
        { text: 'Baking bread and tending to plants', type: 'B' },
        { text: 'Pilates, skincare routine, and organizing', type: 'C' },
        { text: 'Thrifting for vintage finds or making art', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'Your ideal wardrobe consists of:',
      options: [
        { text: 'Tweed, oxford shirts, knit sweaters, earth tones', type: 'A' },
        { text: 'Linen dresses, floral prints, natural fabrics', type: 'B' },
        { text: 'Neutral basics, minimal jewelry, clean lines', type: 'C' },
        { text: 'Eclectic vintage pieces, bold patterns, unique finds', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Pick a drink:',
      options: [
        { text: 'Black coffee or English breakfast tea', type: 'A' },
        { text: 'Lavender latte or chamomile tea', type: 'B' },
        { text: 'Matcha latte or lemon water', type: 'C' },
        { text: 'Whatever looks interesting or photogenic', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your dream home vibe:',
      options: [
        { text: 'Floor-to-ceiling bookshelves, leather chairs, dark wood', type: 'A' },
        { text: 'Countryside cottage with a garden and fairy lights', type: 'B' },
        { text: 'Modern minimalist with clean surfaces and neutral tones', type: 'C' },
        { text: 'Eclectic mix of eras with colorful maximalism', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your ideal social media feed shows:',
      options: [
        { text: 'Moody libraries, old architecture, vintage academia', type: 'A' },
        { text: 'Wildflowers, homemade pies, cozy interiors', type: 'B' },
        { text: 'Clean spaces, wellness routines, organized closets', type: 'C' },
        { text: 'Art galleries, thrift hauls, creative chaos', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Pick a season:',
      options: [
        { text: 'Autumn - sweater weather and falling leaves', type: 'A' },
        { text: 'Spring - flowers blooming and new growth', type: 'B' },
        { text: 'Summer - golden hour and beach mornings', type: 'C' },
        { text: 'All of them have their own magic', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'Your go-to music vibe:',
      options: [
        { text: 'Classical, jazz, or indie folk', type: 'A' },
        { text: 'Soft acoustic, nature sounds, or lo-fi', type: 'B' },
        { text: 'Chill pop, R&B, or piano covers', type: 'C' },
        { text: 'Anything from any era - very eclectic taste', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your ideal vacation:',
      options: [
        { text: 'European cities with old universities and museums', type: 'A' },
        { text: 'Countryside retreat with nature and peace', type: 'B' },
        { text: 'Wellness resort or beach with great amenities', type: 'C' },
        { text: 'Somewhere artistic and culturally rich', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'Pick a hobby:',
      options: [
        { text: 'Writing, poetry, or learning new languages', type: 'A' },
        { text: 'Gardening, cooking, or candle making', type: 'B' },
        { text: 'Journaling, yoga, or self-improvement', type: 'C' },
        { text: 'Painting, photography, or creative projects', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your color palette preference:',
      options: [
        { text: 'Deep browns, burgundy, forest green, gold', type: 'A' },
        { text: 'Soft pastels, cream, sage green, lavender', type: 'B' },
        { text: 'White, beige, gray, clean neutrals', type: 'C' },
        { text: 'Bold colors, unexpected combinations, anything goes', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'Dark Academia',
      emoji: '📚',
      description: 'You\'re drawn to the romantic intellectual aesthetic - old books, prestigious universities, autumn leaves, and the pursuit of knowledge. Your soul belongs in a Gothic library with a cup of black coffee and a worn leather journal.',
      traits: ['Intellectual', 'Romantic', 'Nostalgic', 'Scholarly'],
      strengths: ['Deep appreciation for classics', 'Mysterious allure', 'Values knowledge', 'Timeless style'],
      weaknesses: ['Can be pretentious', 'Romanticizes the past', 'Might need more color'],
      tips: ['Balance aesthetics with authenticity', 'Dead poets would be proud', 'You don\'t need to be in school to live this'],
    },
    B: {
      type: 'B',
      title: 'Cottagecore',
      emoji: '🌸',
      description: 'You dream of a simpler life - baking sourdough, tending to your garden, and living in harmony with nature. Your aesthetic is cozy, whimsical, and deeply connected to the earth. You\'re basically a Studio Ghibli character.',
      traits: ['Nurturing', 'Peaceful', 'Nature-loving', 'Cozy'],
      strengths: ['Creates warmth everywhere', 'Great at self-care', 'Appreciates simple pleasures', 'Calming presence'],
      weaknesses: ['Might idealize rural life', 'Can be impractical', 'Allergies could be a problem'],
      tips: ['You can bring cottagecore to the city', 'Start small with plants', 'Your energy heals people'],
    },
    C: {
      type: 'C',
      title: 'Clean Girl / Minimalist',
      emoji: '✨',
      description: 'Less is more, and you\'ve perfected it. Your space is organized, your skincare routine is dialed in, and your life has a calming neutral palette. You radiate "I have my life together" energy even when you don\'t.',
      traits: ['Organized', 'Intentional', 'Polished', 'Health-conscious'],
      strengths: ['Creates calm environments', 'Disciplined routines', 'Effortlessly put-together', 'Focused on wellness'],
      weaknesses: ['Can feel restrictive', 'Pressure to be perfect', 'Might miss some color/chaos'],
      tips: ['Embrace some beautiful imperfection', 'Minimalism is about intention not rules', 'You inspire others to declutter'],
    },
    D: {
      type: 'D',
      title: 'Eclectic Creative',
      emoji: '🎭',
      description: 'You can\'t be put in a box because your aesthetic IS the box being deconstructed and turned into art. Vintage, modern, colorful, muted - you pull from every era and somehow make it work. Your vibe is "curated chaos."',
      traits: ['Creative', 'Expressive', 'Unique', 'Adventurous'],
      strengths: ['One-of-a-kind style', 'Artistic eye', 'Not afraid to stand out', 'Always interesting'],
      weaknesses: ['Can be overwhelming', 'Might change too often', 'Hard to define'],
      tips: ['Your inconsistency IS your consistency', 'Keep curating your chaos', 'You make the world more colorful'],
    },
  },
};

export default testData;
