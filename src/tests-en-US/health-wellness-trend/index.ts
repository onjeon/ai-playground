// Which Wellness Trend Are You?
// What wellness vibe matches your personality?

import { TestData } from '@/types';

const testData: TestData = {
  id: 'health-wellness-trend',
  title: 'Which Wellness Trend Are You?',
  description: 'From cold plunges to meditation apps - which wellness trend matches your vibe?',
  category: 'health',
  emoji: '🧘',
  color: 'from-teal-500 to-emerald-600',
  duration: '2-3 min',
  questions: [
    {
      id: 1,
      question: 'Your ideal morning routine:',
      options: [
        { text: 'Meditation, journaling, slow and intentional', type: 'A' },
        { text: 'Workout, cold shower, get the blood pumping', type: 'B' },
        { text: 'Green smoothie, supplements, optimize everything', type: 'C' },
        { text: 'Whatever feels right that day, go with the flow', type: 'D' },
      ],
    },
    {
      id: 2,
      question: 'When stressed, you prefer:',
      options: [
        { text: 'Breathwork, meditation, calming activities', type: 'A' },
        { text: 'Intense exercise, physical release', type: 'B' },
        { text: 'Research solutions, biohack my way out', type: 'C' },
        { text: 'Nature, crystals, spiritual practices', type: 'D' },
      ],
    },
    {
      id: 3,
      question: 'Your approach to wellness:',
      options: [
        { text: 'Inner peace and mental clarity', type: 'A' },
        { text: 'Physical challenge and pushing limits', type: 'B' },
        { text: 'Science-backed optimization', type: 'C' },
        { text: 'Holistic, spiritual, intuitive', type: 'D' },
      ],
    },
    {
      id: 4,
      question: 'Your wellness purchases include:',
      options: [
        { text: 'Meditation apps, journals, calming teas', type: 'A' },
        { text: 'Gym equipment, fitness trackers, protein', type: 'B' },
        { text: 'Supplements, health tracking devices, nootropics', type: 'C' },
        { text: 'Crystals, essential oils, tarot cards', type: 'D' },
      ],
    },
    {
      id: 5,
      question: 'Which appeals to you most?',
      options: [
        { text: 'A silent meditation retreat', type: 'A' },
        { text: 'A challenging physical bootcamp', type: 'B' },
        { text: 'A longevity-focused health clinic', type: 'C' },
        { text: 'A spiritual wellness ceremony', type: 'D' },
      ],
    },
    {
      id: 6,
      question: 'Your wellness heroes are:',
      options: [
        { text: 'Monks, meditation teachers, mindfulness experts', type: 'A' },
        { text: 'Athletes, fitness influencers, extreme sports people', type: 'B' },
        { text: 'Scientists, biohackers, longevity researchers', type: 'C' },
        { text: 'Spiritual leaders, energy healers, astrologers', type: 'D' },
      ],
    },
    {
      id: 7,
      question: 'What wellness trend sounds most appealing?',
      options: [
        { text: 'Digital detox retreats', type: 'A' },
        { text: 'Cold plunge and sauna protocols', type: 'B' },
        { text: 'Personalized nutrition based on DNA', type: 'C' },
        { text: 'Sound baths and energy healing', type: 'D' },
      ],
    },
    {
      id: 8,
      question: 'Your wellness goal:',
      options: [
        { text: 'Peace of mind, reduced anxiety', type: 'A' },
        { text: 'Peak physical performance', type: 'B' },
        { text: 'Optimal health and longevity', type: 'C' },
        { text: 'Spiritual connection and alignment', type: 'D' },
      ],
    },
    {
      id: 9,
      question: 'On a free weekend, you\'d rather:',
      options: [
        { text: 'Attend a mindfulness workshop', type: 'A' },
        { text: 'Do an intense hike or physical challenge', type: 'B' },
        { text: 'Research and try a new health protocol', type: 'C' },
        { text: 'Get a tarot reading or attend a healing circle', type: 'D' },
      ],
    },
    {
      id: 10,
      question: 'Your wellness mantra:',
      options: [
        { text: '"Be present, find inner peace"', type: 'A' },
        { text: '"No pain, no gain"', type: 'B' },
        { text: '"Optimize everything"', type: 'C' },
        { text: '"Trust the universe"', type: 'D' },
      ],
    },
  ],
  results: {
    A: {
      type: 'A',
      title: 'The Mindfulness Maven',
      emoji: '🧘',
      description: 'Your wellness is all about inner peace. Meditation, breathwork, journaling - you\'re chasing calm in a chaotic world. You probably have a meditation streak going and own multiple essential oil diffusers.',
      traits: ['Calm-seeking', 'Present-focused', 'Mindful', 'Inner peace oriented'],
      strengths: ['Great stress management', 'Mental clarity', 'Emotional awareness'],
      weaknesses: ['Might skip physical fitness', 'Can be too inward-focused'],
      tips: ['Your mental wellness game is strong', 'Don\'t forget to move your body too'],
    },
    B: {
      type: 'B',
      title: 'The Fitness Warrior',
      emoji: '💪',
      description: 'For you, wellness means MOVING. Cold plunges, intense workouts, physical challenges - you believe in pushing your body to get results. You\'ve probably done a 5am workout this week.',
      traits: ['Physical', 'Disciplined', 'Challenge-seeking', 'Intense'],
      strengths: ['Great physical health', 'Discipline and consistency', 'Stress relief through exercise'],
      weaknesses: ['Might neglect rest', 'Could add mental wellness practices'],
      tips: ['Your body is a temple', 'Balance intensity with recovery'],
    },
    C: {
      type: 'C',
      title: 'The Biohacker',
      emoji: '🧬',
      description: 'You approach wellness like a science experiment. Supplements, trackers, optimization protocols - you want data-driven results. You\'ve probably calculated your exact sleep score and macros.',
      traits: ['Data-driven', 'Optimizing', 'Science-focused', 'Strategic'],
      strengths: ['Evidence-based approach', 'Measurable progress', 'Cutting-edge knowledge'],
      weaknesses: ['Might over-complicate things', 'Could miss simple pleasures'],
      tips: ['Sometimes good enough is good enough', 'Don\'t forget to actually enjoy life'],
    },
    D: {
      type: 'D',
      title: 'The Spiritual Seeker',
      emoji: '✨',
      description: 'Your wellness is cosmic! Crystals, astrology, energy healing, manifestation - you believe wellness is about spiritual alignment. You\'ve probably cleansed your space with sage this month.',
      traits: ['Spiritual', 'Intuitive', 'Holistic', 'Energy-focused'],
      strengths: ['Connected to something bigger', 'Open-minded', 'Intuitive self-care'],
      weaknesses: ['Might skip evidence-based practices', 'Could be too woo-woo for some'],
      tips: ['Your spiritual side is valid', 'Balance woo with practical health habits'],
    },
  },
};

export default testData;
