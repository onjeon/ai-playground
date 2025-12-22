// Your Learning Style
// How do you absorb new information?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'personality-learning-style',
  title: 'What\'s Your Learning Style?',
  description: 'Discover how you learn best - visual, auditory, reading, or hands-on experiences?',
  category: 'personality',
  emoji: '📚',
  color: 'from-emerald-500 to-teal-600',
  duration: '3-4 min',
  questions: [
    {
      id: 1,
      question: 'You need to learn how to use new software. You prefer to:',
      options: [
        { text: 'Watch a video tutorial', type: 'A' },
        { text: 'Listen to someone explain it', type: 'B' },
        { text: 'Read the documentation or manual', type: 'C' },
        { text: 'Just click around and figure it out', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When studying for an exam, you typically:',
      options: [
        { text: 'Make diagrams, charts, and color-coded notes', type: 'A' },
        { text: 'Record yourself or listen to lectures', type: 'B' },
        { text: 'Re-read and rewrite notes multiple times', type: 'C' },
        { text: 'Do practice problems and hands-on exercises', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'You remember things best when you:',
      options: [
        { text: 'See them - images stick in my mind', type: 'A' },
        { text: 'Hear them - sounds and voices stay with me', type: 'B' },
        { text: 'Read them - written words make sense', type: 'C' },
        { text: 'Do them - experience is the best teacher', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'When assembling furniture or following instructions:',
      options: [
        { text: 'I look at the pictures and diagrams', type: 'A' },
        { text: 'I\'d rather have someone tell me what to do', type: 'B' },
        { text: 'I read through all the steps first', type: 'C' },
        { text: 'I just start building and figure it out', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Your notes from a meeting would include:',
      options: [
        { text: 'Drawings, arrows, and visual organization', type: 'A' },
        { text: 'Key phrases I heard that stood out', type: 'B' },
        { text: 'Detailed written summaries', type: 'C' },
        { text: 'Action items I need to actually do', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'When navigating to a new place, you prefer:',
      options: [
        { text: 'A map I can look at', type: 'A' },
        { text: 'Verbal directions from someone', type: 'B' },
        { text: 'Written step-by-step directions', type: 'C' },
        { text: 'I\'ll figure it out as I go', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'When learning a new recipe, you:',
      options: [
        { text: 'Watch cooking videos', type: 'A' },
        { text: 'Ask someone to walk me through it', type: 'B' },
        { text: 'Follow a written recipe carefully', type: 'C' },
        { text: 'Wing it and taste as I go', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'In a classroom, you learn best from:',
      options: [
        { text: 'Slideshows, videos, and visual demonstrations', type: 'A' },
        { text: 'Lectures and discussions', type: 'B' },
        { text: 'Textbooks and assigned readings', type: 'C' },
        { text: 'Labs, projects, and practical work', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'When explaining something to others, you tend to:',
      options: [
        { text: 'Draw diagrams or use visual aids', type: 'A' },
        { text: 'Talk them through it verbally', type: 'B' },
        { text: 'Write out instructions for them', type: 'C' },
        { text: 'Show them by doing it together', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'You get distracted when:',
      options: [
        { text: 'The environment is visually messy or chaotic', type: 'A' },
        { text: 'There\'s background noise or conversations', type: 'B' },
        { text: 'The material is poorly organized or unclear', type: 'C' },
        { text: 'I have to sit still for too long', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Visual Learner',
      emoji: '👁️',
      description: 'You learn with your eyes! Pictures, diagrams, colors, and visual organization help you understand and remember. You probably take beautiful notes and love a good infographic.',
      traits: ['Visual', 'Artistic', 'Organized', 'Spatial'],
      strengths: ['Great with maps and diagrams', 'Remembers faces and images', 'Good at visualizing concepts', 'Creative note-taker'],
      weaknesses: ['May struggle with verbal-only instruction', 'Needs visual aids', 'Gets lost in text-heavy material'],
      tips: ['Use color-coding and mind maps', 'Convert text to visuals', 'Watch video tutorials'],
    },
    B: {
      type: 'B',
      title: 'The Auditory Learner',
      emoji: '👂',
      description: 'You learn through listening! Lectures, discussions, podcasts, and verbal explanations work best for you. You might talk to yourself while learning - and that\'s totally normal!',
      traits: ['Verbal', 'Musical', 'Good listener', 'Conversational'],
      strengths: ['Great at remembering what was said', 'Learns from podcasts and lectures', 'Good at explaining things verbally', 'Picks up languages well'],
      weaknesses: ['Easily distracted by noise', 'May struggle with written instructions', 'Needs to hear things out loud'],
      tips: ['Record lectures and replay them', 'Explain concepts out loud', 'Use audiobooks and podcasts'],
    },
    C: {
      type: 'C',
      title: 'The Reading/Writing Learner',
      emoji: '📝',
      description: 'You learn through words! Reading, writing, and organizing information in text form is your superpower. Give you a book or manual, and you\'re set.',
      traits: ['Literate', 'Detail-oriented', 'Thorough', 'Analytical'],
      strengths: ['Excellent reader', 'Great at taking notes', 'Remembers written content', 'Good at research'],
      weaknesses: ['May miss visual or verbal cues', 'Needs written material', 'Can get lost in too much reading'],
      tips: ['Rewrite notes in your own words', 'Make lists and outlines', 'Read widely and often'],
    },
    D: {
      type: 'D',
      title: 'The Kinesthetic Learner',
      emoji: '🤸',
      description: 'You learn by doing! Hands-on experience, practice, and physical engagement are how you understand best. Sitting still and listening? Not really your style.',
      traits: ['Active', 'Practical', 'Experimental', 'Hands-on'],
      strengths: ['Great at practical skills', 'Learns from trial and error', 'Remembers through experience', 'Good with physical tasks'],
      weaknesses: ['Struggles with lectures and reading', 'Needs to move', 'May seem impatient'],
      tips: ['Take breaks to move around', 'Learn through practice projects', 'Incorporate physical activity into study'],
    },
  },
};

export default testData;
